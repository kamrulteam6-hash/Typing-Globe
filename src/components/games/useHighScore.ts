"use client";

import { useCallback, useEffect, useState } from "react";

function storageKey(gameSlug: string) {
  return `typingglobe:highscore:${gameSlug}`;
}

export function useHighScore(gameSlug: string) {
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    // Reading localStorage is only safe on the client, after mount — same
    // documented exception used by useCourseProgress.ts.
    const stored = window.localStorage.getItem(storageKey(gameSlug));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHighScore(stored ? Number(stored) || 0 : 0);
  }, [gameSlug]);

  const submitScore = useCallback(
    (score: number) => {
      setHighScore((prev) => {
        if (score <= prev) return prev;
        window.localStorage.setItem(storageKey(gameSlug), String(score));
        return score;
      });
    },
    [gameSlug]
  );

  return { highScore, submitScore };
}
