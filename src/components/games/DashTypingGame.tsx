"use client";

import { useEffect, useRef } from "react";
import { pickRandomWord } from "@/data/gameWords";
import { useTypingInput } from "./useTypingInput";
import type { GameShellRenderProps } from "./GameShell";

const RACE_DURATION_MS = 60_000;
const RIVAL_SPEED_PX_PER_MS = 0.045; // constant pace, roughly a 35 WPM-equivalent creep
const FRICTION_PX_PER_MS = 0.01; // player drifts back slightly without input, forcing continuous typing

type Particle = { x: number; y: number; vx: number; vy: number; life: number; color: string };

type State = {
  word: string;
  typedLen: number;
  playerX: number;
  rivalX: number;
  combo: number;
  score: number;
  correctChars: number;
  incorrectChars: number;
  startTime: number;
  particles: Particle[];
  flash: number; // ms remaining on mismatch flash
  bgOffset: number;
};

const COLORS = { primary: "#12b981", accent: "#22d3ee", gold: "#f5b544", danger: "#ef4444", muted: "#8992a3" };

function freshState(): State {
  return {
    word: pickRandomWord("short"),
    typedLen: 0,
    playerX: 40,
    rivalX: 40,
    combo: 0,
    score: 0,
    correctChars: 0,
    incorrectChars: 0,
    startTime: performance.now(),
    particles: [],
    flash: 0,
    bgOffset: 0,
  };
}

export function DashTypingGame({ phase, onScore, onCombo, onGameOver }: GameShellRenderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<State>(freshState());
  const wordElRef = useRef<HTMLDivElement>(null);
  const timerElRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const endedRef = useRef(false);

  const handleKey = (key: string) => {
    if (phase !== "playing" || endedRef.current) return;
    const s = stateRef.current;
    if (key === "Backspace") {
      s.typedLen = Math.max(0, s.typedLen - 1);
      return;
    }
    const expected = s.word[s.typedLen];
    if (!expected) return;
    if (key.toLowerCase() === expected.toLowerCase()) {
      s.typedLen++;
      if (s.typedLen === s.word.length) {
        s.combo++;
        s.correctChars += s.word.length;
        s.score += Math.round(10 * (1 + s.combo * 0.1));
        s.playerX += 22 + Math.min(s.combo, 10) * 2;
        for (let i = 0; i < 14; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 0.4 + Math.random() * 0.9;
          s.particles.push({
            x: 0,
            y: 0,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed - 0.3,
            life: 500 + Math.random() * 300,
            color: s.combo >= 5 ? COLORS.gold : COLORS.primary,
          });
        }
        onScore(s.score);
        onCombo(s.combo);
        s.word = pickRandomWord(s.combo >= 8 ? "long" : s.combo >= 4 ? "medium" : "short");
        s.typedLen = 0;
      }
    } else {
      s.incorrectChars++;
      s.combo = 0;
      s.flash = 200;
      onCombo(0);
    }
  };

  const { inputRef, handleKeyDown, focus } = useTypingInput(handleKey, phase === "playing");

  useEffect(() => {
    if (phase !== "playing") return;
    stateRef.current = freshState();
    endedRef.current = false;
    onScore(0);
    onCombo(0);
    focus();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastTs = performance.now();

    const draw = (ts: number) => {
      const dt = ts - lastTs;
      lastTs = ts;
      const s = stateRef.current;
      const elapsed = ts - s.startTime;
      const remaining = Math.max(0, RACE_DURATION_MS - elapsed);

      if (!endedRef.current) {
        s.rivalX += RIVAL_SPEED_PX_PER_MS * dt;
        s.playerX = Math.max(40, s.playerX - FRICTION_PX_PER_MS * dt);
        s.bgOffset = (s.bgOffset + dt * 0.05) % 40;
        if (s.flash > 0) s.flash = Math.max(0, s.flash - dt);
      }

      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);

      ctx.clearRect(0, 0, w, h);
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#0b0f18");
      bg.addColorStop(1, "#05070c");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(34, 211, 238, 0.08)";
      ctx.lineWidth = 1;
      for (let x = -40 + (s.bgOffset % 40) * -1; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x - 30, h);
        ctx.stroke();
      }

      const trackY = h * 0.72;
      ctx.strokeStyle = "rgba(232, 234, 239, 0.15)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, trackY);
      ctx.lineTo(w, trackY);
      ctx.stroke();

      const maxTravel = w - 80;
      const rivalScreenX = 40 + (s.rivalX % maxTravel);
      const playerScreenX = 40 + (s.playerX % maxTravel);

      // rival
      ctx.beginPath();
      ctx.arc(rivalScreenX, trackY - 18, 8, 0, Math.PI * 2);
      ctx.fillStyle = COLORS.muted;
      ctx.fill();

      // player glow trail
      ctx.beginPath();
      ctx.arc(playerScreenX, trackY - 18, 11, 0, Math.PI * 2);
      ctx.fillStyle = s.flash > 0 ? COLORS.danger : COLORS.primary;
      ctx.shadowColor = s.flash > 0 ? COLORS.danger : COLORS.primary;
      ctx.shadowBlur = 18;
      ctx.fill();
      ctx.shadowBlur = 0;

      s.particles = s.particles.filter((p) => p.life > 0);
      for (const p of s.particles) {
        p.x += p.vx * dt * 0.06;
        p.y += p.vy * dt * 0.06;
        p.life -= dt;
        const alpha = Math.max(0, p.life / 700);
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(playerScreenX + p.x, trackY - 18 + p.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (wordElRef.current) {
        const before = s.word.slice(0, s.typedLen);
        const after = s.word.slice(s.typedLen);
        wordElRef.current.innerHTML = `<span style="color:${COLORS.primary}">${before}</span><span style="color:#e8eaef">${after}</span>`;
      }
      if (timerElRef.current) {
        timerElRef.current.textContent = `${Math.ceil(remaining / 1000)}s`;
      }

      if (remaining <= 0 && !endedRef.current) {
        endedRef.current = true;
        onGameOver({
          score: s.score,
          correctChars: s.correctChars,
          incorrectChars: s.incorrectChars,
          elapsedMs: RACE_DURATION_MS,
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
      {phase === "playing" && (
        <>
          <div ref={timerElRef} className="absolute right-4 top-4 font-mono text-lg font-bold text-primary" />
          <div className="absolute left-1/2 top-6 -translate-x-1/2 text-center">
            <div ref={wordElRef} className="text-2xl font-bold tracking-wide" />
          </div>
        </>
      )}
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
