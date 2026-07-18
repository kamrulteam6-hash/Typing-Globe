"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CourseLevel, getExamText, getLessonTexts } from "@/data/course";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { TypingTest, TypingStats } from "@/components/TypingTest";
import { SectionLabel } from "@/components/ui/Card";

export function CourseLevelDetail({ level }: { level: CourseLevel }) {
  const { progress, loaded, isDayUnlocked, isLessonComplete, isExamPassed, markLessonComplete, recordExamResult } =
    useCourseProgress();
  const [activeLesson, setActiveLesson] = useState(0);
  const [examResult, setExamResult] = useState<{ pass: boolean; stats: TypingStats } | null>(null);

  const lessonTexts = useMemo(() => getLessonTexts(level.day), [level.day]);
  const examText = useMemo(() => getExamText(level.day), [level.day]);

  const unlocked = isDayUnlocked(level.day);
  const completedCount = [0, 1, 2, 3, 4].filter((i) => isLessonComplete(level.day, i)).length;
  const allLessonsDone = completedCount >= 5;
  const examPassed = isExamPassed(level.day);

  if (loaded && !unlocked) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-danger">Locked</p>
        <h2 className="mt-3 text-xl font-bold text-foreground">
          Complete earlier days to unlock Day {level.day}
        </h2>
        <p className="mt-2 text-sm text-muted">
          You&apos;ve unlocked up to Day {progress.unlockedDay}. Pass that day&apos;s exam to move forward.
        </p>
        <Link
          href="/english-typing-course"
          className="mt-6 inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
        >
          Back to Roadmap
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {[0, 1, 2, 3, 4].map((i) => {
          const done = isLessonComplete(level.day, i);
          return (
            <button
              key={i}
              onClick={() => setActiveLesson(i)}
              className={`rounded-lg border px-3 py-2 text-xs font-semibold transition-colors ${
                activeLesson === i
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : done
                  ? "border-border bg-surface-2 text-muted hover:text-foreground"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {done ? "✓ " : ""}Lesson {i + 1}
            </button>
          );
        })}
      </div>

      <TypingTest
        key={`${level.day}-lesson-${activeLesson}`}
        customText={lessonTexts[activeLesson]}
        mode="practice"
        onComplete={() => markLessonComplete(level.day, activeLesson)}
      />

      <div className="mt-16 border-t border-border pt-8">
        <SectionLabel>Level Exam</SectionLabel>
        <h2 className="mt-3 text-lg font-bold text-foreground">
          Pass to unlock Day {level.day + 1}
        </h2>
        <p className="mt-1 text-sm text-muted">
          Requires {level.examWpm > 0 ? `${level.examWpm}+ WPM and ` : ""}
          {level.examAccuracy}%+ accuracy.
        </p>

        {!allLessonsDone ? (
          <p className="mt-4 rounded-xl border border-border bg-surface-2 p-4 text-sm text-muted">
            Complete all 5 lessons above ({completedCount}/5 done) to unlock the exam.
          </p>
        ) : examPassed && !examResult ? (
          <div className="mt-4 rounded-xl border border-primary/25 bg-primary/10 p-4 text-sm text-primary">
            ✓ You&apos;ve already passed this exam. Retake it anytime to improve your score.
          </div>
        ) : null}

        {allLessonsDone && (
          <div className="mt-4">
            <TypingTest
              key={`${level.day}-exam-${examResult ? "done" : "active"}`}
              customText={examText}
              mode="practice"
              onComplete={(stats) => {
                const pass = stats.wpm >= level.examWpm && stats.accuracy >= level.examAccuracy;
                recordExamResult(level.day, stats.wpm, stats.accuracy, pass);
                setExamResult({ pass, stats });
              }}
            />
          </div>
        )}

        {examResult && (
          <div
            className={`mt-4 rounded-xl border p-4 text-sm ${
              examResult.pass
                ? "border-primary/25 bg-primary/10 text-primary"
                : "border-danger/25 bg-danger/10 text-danger"
            }`}
          >
            {examResult.pass ? (
              <>
                ✓ Passed! {examResult.stats.wpm} WPM at {examResult.stats.accuracy}% accuracy — Day{" "}
                {level.day + 1} is now unlocked.
              </>
            ) : (
              <>
                Not quite — {examResult.stats.wpm} WPM at {examResult.stats.accuracy}% accuracy. You
                need {level.examWpm}+ WPM and {level.examAccuracy}%+ accuracy. Try the exam again
                whenever you&apos;re ready.
              </>
            )}
            <button
              onClick={() => setExamResult(null)}
              className="ml-3 font-semibold underline hover:no-underline"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
