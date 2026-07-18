"use client";

import Link from "next/link";

export function PracticeNudgeModal({ wpm, onClose }: { wpm: number; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-primary/25 bg-surface p-6 text-center shadow-2xl"
      >
        <div
          aria-hidden
          className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl"
        />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-muted hover:text-foreground"
        >
          ✕
        </button>

        <div className="relative">
          <span className="text-4xl">📈</span>
          <h2 className="mt-3 text-lg font-bold text-foreground">
            {wpm} WPM is a starting point — not a ceiling
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Our free 30-day course takes you from wherever you are now to typing full paragraphs at speed —
            5 short lessons a day, gated exams, real progress you can see.
          </p>

          <div className="mt-5 rounded-2xl border border-border bg-surface-2 p-4 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold text-primary">
              <span>📈</span> English Typing Course
            </div>
            <p className="mt-1 text-xs text-muted">Beginner to pro in 30 days. Free, no signup.</p>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <Link
              href="/english-typing-course"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Start the Free Course →
            </Link>
            <button onClick={onClose} className="rounded-lg px-5 py-2 text-xs font-medium text-muted hover:text-foreground">
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
