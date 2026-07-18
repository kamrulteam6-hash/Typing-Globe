"use client";

import { useEffect, useRef } from "react";
import { pickRandomWord, type WordTier } from "@/data/gameWords";
import { useTypingInput } from "./useTypingInput";
import type { GameShellRenderProps } from "./GameShell";

const COLORS = { primary: "#12b981", accent: "#22d3ee", gold: "#f5b544", danger: "#ef4444", foreground: "#e8eaef" };
const LANES = 5;

type FallingWord = { id: number; word: string; typedLen: number; lane: number; y: number; speed: number };
type Particle = { x: number; y: number; vx: number; vy: number; life: number; color: string; laneIndex: number };

type State = {
  words: FallingWord[];
  lockedId: number | null;
  particles: Particle[];
  combo: number;
  score: number;
  lives: number;
  correctChars: number;
  incorrectChars: number;
  startTime: number;
  lastSpawn: number;
  nextId: number;
  laneFlash: number[];
  shake: number;
};

function tierForElapsed(ms: number): WordTier {
  if (ms > 50_000) return "long";
  if (ms > 20_000) return "medium";
  return "short";
}

function freshState(): State {
  return {
    words: [],
    lockedId: null,
    particles: [],
    combo: 0,
    score: 0,
    lives: 3,
    correctChars: 0,
    incorrectChars: 0,
    startTime: performance.now(),
    lastSpawn: 0,
    nextId: 0,
    laneFlash: new Array(LANES).fill(0),
    shake: 0,
  };
}

export function WordFallGame({ phase, onScore, onCombo, onLives, onGameOver }: GameShellRenderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State>(freshState());
  const rafRef = useRef<number | null>(null);
  const endedRef = useRef(false);
  const usedWordsRef = useRef<Set<string>>(new Set());

  const handleKey = (key: string) => {
    if (phase !== "playing" || endedRef.current) return;
    const s = stateRef.current;

    if (key === "Backspace") {
      const locked = s.words.find((w) => w.id === s.lockedId);
      if (locked) locked.typedLen = Math.max(0, locked.typedLen - 1);
      return;
    }

    const lower = key.toLowerCase();
    let target = s.words.find((w) => w.id === s.lockedId);

    if (!target) {
      const candidates = s.words.filter((w) => w.word[0]?.toLowerCase() === lower);
      candidates.sort((a, b) => b.y - a.y);
      target = candidates[0];
      if (target) {
        s.lockedId = target.id;
        target.typedLen = 0;
      }
    }

    if (!target) {
      s.combo = 0;
      onCombo(0);
      return;
    }

    if (target.word[target.typedLen]?.toLowerCase() === lower) {
      target.typedLen++;
      if (target.typedLen === target.word.length) {
        s.combo++;
        s.score += Math.round(12 * (1 + s.combo * 0.12));
        s.correctChars += target.word.length;
        s.laneFlash[target.lane] = 220;
        for (let i = 0; i < 16; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.4 + Math.random() * 1.1;
          s.particles.push({
            x: 0,
            y: target.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 350 + Math.random() * 250,
            color: s.combo >= 6 ? COLORS.gold : COLORS.primary,
            laneIndex: target.lane,
          });
        }
        s.words = s.words.filter((w) => w.id !== target!.id);
        s.lockedId = null;
        onScore(s.score);
        onCombo(s.combo);
      }
    } else {
      s.combo = 0;
      s.incorrectChars++;
      onCombo(0);
    }
  };

  const { inputRef, handleKeyDown, focus } = useTypingInput(handleKey, phase === "playing");

  useEffect(() => {
    if (phase !== "playing") return;
    stateRef.current = freshState();
    endedRef.current = false;
    usedWordsRef.current = new Set();
    onScore(0);
    onCombo(0);
    onLives(3);
    focus();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTs = performance.now();

    const draw = (ts: number) => {
      const dt = Math.min(ts - lastTs, 50);
      lastTs = ts;
      const s = stateRef.current;
      const elapsed = ts - s.startTime;
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const floorY = h - 24;
      const laneWidth = w / LANES;

      if (!endedRef.current) {
        const spawnInterval = Math.max(500, 1800 - elapsed / 45);
        if (ts - s.lastSpawn > spawnInterval) {
          s.lastSpawn = ts;
          const tier = tierForElapsed(elapsed);
          const word = pickRandomWord(tier, usedWordsRef.current);
          usedWordsRef.current.add(word);
          if (usedWordsRef.current.size > 30) usedWordsRef.current.clear();
          s.words.push({
            id: s.nextId++,
            word,
            typedLen: 0,
            lane: Math.floor(Math.random() * LANES),
            y: -14,
            speed: 0.014 + Math.min(elapsed / 700_000, 0.03),
          });
        }

        for (const fw of s.words) fw.y += fw.speed * dt;

        const missed = s.words.filter((fw) => fw.y >= floorY);
        if (missed.length > 0) {
          s.lives -= missed.length;
          s.combo = 0;
          s.shake = 180;
          if (s.lockedId && missed.some((fw) => fw.id === s.lockedId)) s.lockedId = null;
          s.words = s.words.filter((fw) => fw.y < floorY);
          onLives(Math.max(0, s.lives));
          onCombo(0);
        }
        if (s.shake > 0) s.shake = Math.max(0, s.shake - dt);
        for (let i = 0; i < LANES; i++) {
          if (s.laneFlash[i] > 0) s.laneFlash[i] = Math.max(0, s.laneFlash[i] - dt);
        }
      }

      ctx.save();
      if (s.shake > 0) {
        ctx.translate((Math.random() - 0.5) * (s.shake / 20), (Math.random() - 0.5) * (s.shake / 20));
      }

      ctx.clearRect(-10, -10, w + 20, h + 20);
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#05070c");
      bg.addColorStop(1, "#0b0f18");
      ctx.fillStyle = bg;
      ctx.fillRect(-10, -10, w + 20, h + 20);

      for (let i = 0; i < LANES; i++) {
        const lx = i * laneWidth;
        ctx.strokeStyle = "rgba(232,234,239,0.06)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(lx, 0);
        ctx.lineTo(lx, h);
        ctx.stroke();
        if (s.laneFlash[i] > 0) {
          ctx.fillStyle = `rgba(18,185,129,${(s.laneFlash[i] / 220) * 0.18})`;
          ctx.fillRect(lx, 0, laneWidth, h);
        }
      }

      ctx.strokeStyle = s.shake > 0 ? COLORS.danger : COLORS.primary;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, floorY);
      ctx.lineTo(w, floorY);
      ctx.stroke();

      for (const fw of s.words) {
        const cx = fw.lane * laneWidth + laneWidth / 2;
        const locked = fw.id === s.lockedId;

        ctx.beginPath();
        ctx.arc(cx, fw.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = locked ? COLORS.gold : COLORS.accent;
        ctx.shadowColor = locked ? COLORS.gold : "transparent";
        ctx.shadowBlur = locked ? 12 : 0;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = "13px Arial, Helvetica, sans-serif";
        const before = fw.word.slice(0, fw.typedLen);
        const after = fw.word.slice(fw.typedLen);
        const beforeWidth = ctx.measureText(before).width;
        const afterWidth = ctx.measureText(after).width;
        const startX = cx - (beforeWidth + afterWidth) / 2;
        ctx.textAlign = "left";
        ctx.fillStyle = COLORS.primary;
        ctx.fillText(before, startX, fw.y - 12);
        ctx.fillStyle = COLORS.foreground;
        ctx.fillText(after, startX + beforeWidth, fw.y - 12);
      }

      s.particles = s.particles.filter((p) => p.life > 0);
      for (const p of s.particles) {
        const cx = p.laneIndex * laneWidth + laneWidth / 2;
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        p.life -= dt;
        ctx.globalAlpha = Math.max(0, p.life / 600);
        ctx.beginPath();
        ctx.arc(cx + p.x, p.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.restore();

      if (s.lives <= 0 && !endedRef.current) {
        endedRef.current = true;
        onGameOver({
          score: s.score,
          correctChars: s.correctChars,
          incorrectChars: s.incorrectChars,
          elapsedMs: elapsed,
        });
        return;
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className="absolute inset-0" onClick={focus}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        value=""
        onChange={() => {}}
        className="absolute left-0 top-0 h-px w-px opacity-0"
        style={{ caretColor: "transparent" }}
        aria-hidden="true"
        autoComplete="off"
      />
    </div>
  );
}
