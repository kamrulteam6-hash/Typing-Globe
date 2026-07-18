"use client";

import { useEffect, useRef } from "react";
import { pickRandomWord, type WordTier } from "@/data/gameWords";
import { useTypingInput } from "./useTypingInput";
import type { GameShellRenderProps } from "./GameShell";

const COLORS = { primary: "#12b981", accent: "#22d3ee", gold: "#f5b544", danger: "#ef4444", foreground: "#e8eaef", muted: "#8992a3" };

type Enemy = { id: number; word: string; typedLen: number; x: number; y: number; speed: number };
type Particle = { x: number; y: number; vx: number; vy: number; life: number; color: string };
type Beam = { fromX: number; fromY: number; toX: number; toY: number; life: number };

type State = {
  enemies: Enemy[];
  lockedId: number | null;
  particles: Particle[];
  beams: Beam[];
  combo: number;
  score: number;
  lives: number;
  correctChars: number;
  incorrectChars: number;
  startTime: number;
  lastSpawn: number;
  nextId: number;
  shake: number;
};

function tierForElapsed(ms: number): WordTier {
  if (ms > 45_000) return "long";
  if (ms > 18_000) return "medium";
  return "short";
}

function freshState(): State {
  return {
    enemies: [],
    lockedId: null,
    particles: [],
    beams: [],
    combo: 0,
    score: 0,
    lives: 3,
    correctChars: 0,
    incorrectChars: 0,
    startTime: performance.now(),
    lastSpawn: 0,
    nextId: 0,
    shake: 0,
  };
}

export function TypeBlasterGame({ phase, onScore, onCombo, onLives, onGameOver }: GameShellRenderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State>(freshState());
  const rafRef = useRef<number | null>(null);
  const endedRef = useRef(false);
  const usedWordsRef = useRef<Set<string>>(new Set());

  const handleKey = (key: string) => {
    if (phase !== "playing" || endedRef.current) return;
    const s = stateRef.current;

    if (key === "Backspace") {
      const locked = s.enemies.find((e) => e.id === s.lockedId);
      if (locked) locked.typedLen = Math.max(0, locked.typedLen - 1);
      return;
    }

    const lower = key.toLowerCase();
    let target = s.enemies.find((e) => e.id === s.lockedId);

    if (!target) {
      const candidates = s.enemies.filter((e) => e.word[0]?.toLowerCase() === lower);
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
        s.score += Math.round(15 * (1 + s.combo * 0.15));
        s.correctChars += target.word.length;
        s.beams.push({ fromX: 0, fromY: 0, toX: target.x, toY: target.y, life: 120 });
        for (let i = 0; i < 18; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.5 + Math.random() * 1.4;
          s.particles.push({
            x: target.x,
            y: target.y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 400 + Math.random() * 300,
            color: s.combo >= 6 ? COLORS.gold : COLORS.accent,
          });
        }
        s.enemies = s.enemies.filter((e) => e.id !== target!.id);
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
      const baseY = h - 34;

      if (!endedRef.current) {
        const spawnInterval = Math.max(650, 2200 - elapsed / 40);
        if (ts - s.lastSpawn > spawnInterval) {
          s.lastSpawn = ts;
          const tier = tierForElapsed(elapsed);
          const word = pickRandomWord(tier, usedWordsRef.current);
          usedWordsRef.current.add(word);
          if (usedWordsRef.current.size > 30) usedWordsRef.current.clear();
          s.enemies.push({
            id: s.nextId++,
            word,
            typedLen: 0,
            x: 40 + Math.random() * (w - 80),
            y: -10,
            speed: 0.012 + Math.min(elapsed / 900_000, 0.02),
          });
        }

        for (const e of s.enemies) e.y += e.speed * dt;

        const reached = s.enemies.filter((e) => e.y >= baseY);
        if (reached.length > 0) {
          s.lives -= reached.length;
          s.combo = 0;
          s.shake = 180;
          if (s.lockedId && reached.some((e) => e.id === s.lockedId)) s.lockedId = null;
          s.enemies = s.enemies.filter((e) => e.y < baseY);
          onLives(Math.max(0, s.lives));
          onCombo(0);
        }
        if (s.shake > 0) s.shake = Math.max(0, s.shake - dt);
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

      // stars
      ctx.fillStyle = "rgba(232,234,239,0.15)";
      for (let i = 0; i < 40; i++) {
        const sx = (i * 97) % w;
        const sy = (i * 53 + (performance.now() * 0.01) % h) % h;
        ctx.fillRect(sx, sy, 1.5, 1.5);
      }

      // base
      ctx.fillStyle = s.shake > 0 ? "rgba(239,68,68,0.25)" : "rgba(18,185,129,0.12)";
      ctx.fillRect(0, baseY, w, h - baseY);
      ctx.strokeStyle = COLORS.primary;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, baseY);
      ctx.lineTo(w, baseY);
      ctx.stroke();

      // enemies
      for (const e of s.enemies) {
        const locked = e.id === s.lockedId;
        ctx.beginPath();
        ctx.moveTo(e.x, e.y - 10);
        ctx.lineTo(e.x - 9, e.y + 8);
        ctx.lineTo(e.x + 9, e.y + 8);
        ctx.closePath();
        ctx.fillStyle = locked ? COLORS.gold : COLORS.danger;
        ctx.shadowColor = locked ? COLORS.gold : "transparent";
        ctx.shadowBlur = locked ? 12 : 0;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.font = "13px Arial, Helvetica, sans-serif";
        ctx.textAlign = "center";
        const before = e.word.slice(0, e.typedLen);
        const after = e.word.slice(e.typedLen);
        const beforeWidth = ctx.measureText(before).width;
        const afterWidth = ctx.measureText(after).width;
        const totalWidth = beforeWidth + afterWidth;
        const startX = e.x - totalWidth / 2;
        ctx.textAlign = "left";
        ctx.fillStyle = COLORS.primary;
        ctx.fillText(before, startX, e.y - 16);
        ctx.fillStyle = COLORS.foreground;
        ctx.fillText(after, startX + beforeWidth, e.y - 16);
      }

      // beams
      s.beams = s.beams.filter((b) => b.life > 0);
      for (const b of s.beams) {
        b.life -= dt;
        ctx.strokeStyle = COLORS.accent;
        ctx.globalAlpha = Math.max(0, b.life / 120);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w / 2, baseY);
        ctx.lineTo(b.toX, b.toY);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      // particles
      s.particles = s.particles.filter((p) => p.life > 0);
      for (const p of s.particles) {
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        p.life -= dt;
        ctx.globalAlpha = Math.max(0, p.life / 700);
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // turret
      ctx.beginPath();
      ctx.arc(w / 2, baseY + 12, 8, 0, Math.PI * 2);
      ctx.fillStyle = COLORS.accent;
      ctx.shadowColor = COLORS.accent;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

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
