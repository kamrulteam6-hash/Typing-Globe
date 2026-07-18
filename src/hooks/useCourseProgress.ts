"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "tg_course_progress_en_v1";

export type CourseProgress = {
  /** Highest day the learner has unlocked (1 = only day 1 available). */
  unlockedDay: number;
  /** Lesson indices (0-4) completed per day. */
  completedLessons: Record<number, number[]>;
  /** Days whose exam has been passed. */
  passedExams: Record<number, boolean>;
  /** Best exam result recorded per day. */
  bestScores: Record<number, { wpm: number; accuracy: number }>;
};

const defaultProgress: CourseProgress = {
  unlockedDay: 1,
  completedLessons: {},
  passedExams: {},
  bestScores: {},
};

function loadProgress(): CourseProgress {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw);
    return { ...defaultProgress, ...parsed };
  } catch {
    return defaultProgress;
  }
}

function saveProgress(progress: CourseProgress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // localStorage unavailable (private browsing, etc.) — progress just won't persist.
  }
}

export function useCourseProgress() {
  // Deterministic default on first render (matches SSR); the mount effect below
  // loads the real value from localStorage, which only exists client-side.
  const [progress, setProgress] = useState<CourseProgress>(defaultProgress);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Reading localStorage is only safe on the client, after mount — the documented
    // exception to the "no setState in effect" rule (see TypingTest's sample-text pick).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProgress(loadProgress());
    setLoaded(true);
  }, []);

  const update = useCallback((updater: (prev: CourseProgress) => CourseProgress) => {
    setProgress((prev) => {
      const next = updater(prev);
      saveProgress(next);
      return next;
    });
  }, []);

  const markLessonComplete = useCallback(
    (day: number, lessonIndex: number) => {
      update((prev) => {
        const existing = prev.completedLessons[day] ?? [];
        if (existing.includes(lessonIndex)) return prev;
        return {
          ...prev,
          completedLessons: { ...prev.completedLessons, [day]: [...existing, lessonIndex] },
        };
      });
    },
    [update]
  );

  const recordExamResult = useCallback(
    (day: number, wpm: number, accuracy: number, pass: boolean) => {
      update((prev) => {
        const prevBest = prev.bestScores[day];
        const isBetter = !prevBest || wpm > prevBest.wpm;
        return {
          ...prev,
          passedExams: pass ? { ...prev.passedExams, [day]: true } : prev.passedExams,
          bestScores: isBetter ? { ...prev.bestScores, [day]: { wpm, accuracy } } : prev.bestScores,
          unlockedDay: pass ? Math.max(prev.unlockedDay, day + 1) : prev.unlockedDay,
        };
      });
    },
    [update]
  );

  const isDayUnlocked = useCallback((day: number) => day <= progress.unlockedDay, [progress]);
  const isLessonComplete = useCallback(
    (day: number, lessonIndex: number) => (progress.completedLessons[day] ?? []).includes(lessonIndex),
    [progress]
  );
  const isExamPassed = useCallback((day: number) => !!progress.passedExams[day], [progress]);

  return {
    progress,
    loaded,
    markLessonComplete,
    recordExamResult,
    isDayUnlocked,
    isLessonComplete,
    isExamPassed,
  };
}
