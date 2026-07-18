"use client";

import { useCallback, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useHighScore } from "./useHighScore";

export type GameFinalStats = { score: number; correctChars: number; incorrectChars: number; elapsedMs: number };
export type GamePhase = "idle" | "playing" | "over";

export type GameShellRenderProps = {
  phase: GamePhase;
  onScore: (score: number) => void;
  onCombo: (combo: number) => void;
  onLives: (lives: number) => void;
  onGameOver: (stats: GameFinalStats) => void;
};

export function GameShell({
  gameSlug,
  title,
  hasLives = false,
  children,
}: {
  gameSlug: string;
  title: string;
  hasLives?: boolean;
  children: (ctx: GameShellRenderProps) => ReactNode;
}) {
  const [phase, setPhase] = useState<GamePhase>("idle");
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [lives, setLives] = useState(3);
  const [finalStats, setFinalStats] = useState<GameFinalStats | null>(null);
  const { highScore, submitScore } = useHighScore(gameSlug);

  const start = useCallback(() => {
    setScore(0);
    setCombo(0);
    setLives(3);
    setFinalStats(null);
    setPhase("playing");
  }, []);

  const handleGameOver = useCallback(
    (stats: GameFinalStats) => {
      setFinalStats(stats);
      submitScore(stats.score);
      setPhase("over");
    },
    [submitScore]
  );

  const minutes = finalStats ? Math.max(finalStats.elapsedMs / 60000, 1 / 60000) : 0;
  const wpm = finalStats ? Math.round(finalStats.correctChars / 5 / minutes) : 0;
  const totalChars = finalStats ? finalStats.correctChars + finalStats.incorrectChars : 0;
  const accuracy = finalStats && totalChars > 0 ? Math.round((finalStats.correctChars / totalChars) * 100) : 100;
  const isNewHigh = finalStats ? finalStats.score >= highScore && finalStats.score > 0 : false;

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">{title}</h1>
        <span className="text-sm text-muted">
          Best: <span className="font-bold text-[color:var(--gold)]">{highScore}</span>
        </span>
      </div>

      {phase === "playing" && (
        <div className="mb-3 flex items-center gap-6 text-sm">
          <span className="font-bold text-foreground">Score: {score}</span>
          {combo > 1 && <span className="font-bold text-primary">Combo x{combo}</span>}
          {hasLives && <span className="text-[color:var(--danger)]">{"❤".repeat(Math.max(lives, 0))}</span>}
        </div>
      )}

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface" style={{ aspectRatio: "16 / 10" }}>
        {children({ phase, onScore: setScore, onCombo: setCombo, onLives: setLives, onGameOver: handleGameOver })}

        {phase === "idle" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/70 backdrop-blur-sm">
            <p className="max-w-xs text-center text-sm text-muted">Click below, then just start typing — the game captures your keystrokes automatically.</p>
            <button
              onClick={start}
              className="rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:brightness-110"
            >
              Click to Start →
            </button>
          </div>
        )}

        <AnimatePresence>
          {phase === "over" && finalStats && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/85 px-6 text-center backdrop-blur-sm"
            >
              {isNewHigh && (
                <motion.p
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="text-xs font-bold uppercase tracking-wide text-[color:var(--gold)]"
                >
                  🏆 New High Score!
                </motion.p>
              )}
              <p className="text-5xl font-extrabold text-foreground">{finalStats.score}</p>
              <p className="text-xs uppercase tracking-wide text-muted">Score</p>
              <div className="mt-3 flex gap-8">
                <div>
                  <p className="text-lg font-bold text-accent">{wpm}</p>
                  <p className="text-xs text-muted">WPM</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{accuracy}%</p>
                  <p className="text-xs text-muted">Accuracy</p>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={start}
                  className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  Play Again
                </button>
                <Link
                  href="/typing-games"
                  className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-muted hover:text-foreground"
                >
                  Back to Games
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
