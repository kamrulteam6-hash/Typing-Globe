"use client";

import { useState } from "react";

const goals = [
  { id: 1, label: "40+ WPM Speed" },
  { id: 2, label: "95% Accuracy" },
  { id: 3, label: "10 Correct Words" },
];

export function DailyGoals() {
  const [done, setDone] = useState<Set<number>>(new Set());

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">Today&apos;s Goals</h3>
          <p className="mt-1 max-w-md text-sm text-muted">
            Complete these three goals to build your muscle memory and keep your daily habit going strong.
          </p>
        </div>
        <span className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-semibold text-muted">
          🔥 0 Days streak
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {goals.map((goal, i) => {
          const complete = done.has(goal.id);
          return (
            <button
              key={goal.id}
              onClick={() =>
                setDone((prev) => {
                  const next = new Set(prev);
                  if (next.has(goal.id)) {
                    next.delete(goal.id);
                  } else {
                    next.add(goal.id);
                  }
                  return next;
                })
              }
              className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                complete ? "border-primary/40 bg-primary/10" : "border-border bg-surface-2"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-bold ${
                  complete ? "border-primary bg-primary text-primary-foreground" : "border-muted-2 text-muted-2"
                }`}
              >
                {complete ? "✓" : i + 1}
              </span>
              <span className="text-xs font-medium text-foreground">Test {String(i + 1).padStart(2, "0")} — {goal.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
