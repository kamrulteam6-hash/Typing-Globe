"use client";

import Link from "next/link";
import { courseLevels } from "@/data/course";
import { useCourseProgress } from "@/hooks/useCourseProgress";

export function CourseRoadmap() {
  const { progress, loaded, isDayUnlocked, isExamPassed } = useCourseProgress();
  const completedCount = Object.values(progress.passedExams).filter(Boolean).length;

  return (
    <div>
      <div className="mb-8 rounded-2xl border border-border bg-surface p-5">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-foreground">Your Progress</span>
          <span className="text-muted">{completedCount} / 30 days completed</span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-2">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${(completedCount / 30) * 100}%` }}
          />
        </div>
        {!loaded && <p className="mt-2 text-xs text-muted-2">Loading your saved progress…</p>}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {courseLevels.map((level) => {
          const unlocked = isDayUnlocked(level.day);
          const passed = isExamPassed(level.day);
          const isCurrent = unlocked && !passed && level.day === progress.unlockedDay;

          const card = (
            <div
              className={`flex h-full flex-col gap-2 rounded-2xl border p-4 transition-colors ${
                passed
                  ? "border-primary/40 bg-primary/10"
                  : isCurrent
                  ? "border-accent/40 bg-accent/10"
                  : unlocked
                  ? "border-border bg-surface hover:border-primary/40"
                  : "border-border bg-surface/50 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-muted-2">
                  Day {level.day}
                </span>
                {passed ? (
                  <span className="text-primary">✓</span>
                ) : !unlocked ? (
                  <span className="text-muted-2">🔒</span>
                ) : isCurrent ? (
                  <span className="text-accent">●</span>
                ) : null}
              </div>
              <h3 className="text-sm font-semibold text-foreground">{level.title}</h3>
              <p className="text-xs leading-relaxed text-muted">{level.description}</p>
            </div>
          );

          return unlocked ? (
            <Link key={level.day} href={`/english-typing-course/${level.day}`} className="block h-full">
              {card}
            </Link>
          ) : (
            <div key={level.day} className="cursor-not-allowed">
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}
