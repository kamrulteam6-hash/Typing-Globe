"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Low-level keystroke capture for arcade games: a hidden, always-focused
 * <input> exists purely to hold keyboard focus (and summon mobile virtual
 * keyboards) — its value is never read. Every printable keystroke and
 * Backspace is reported via onKey so each game can decide, character by
 * character, whether it advances a target word or counts as a miss. This
 * matches how real typing-shooter games behave: a wrong key is rejected
 * outright rather than typed and then corrected.
 */
export function useTypingInput(onKey: (key: string) => void, active: boolean) {
  const inputRef = useRef<HTMLInputElement>(null);
  const onKeyRef = useRef(onKey);

  useEffect(() => {
    onKeyRef.current = onKey;
  }, [onKey]);

  useEffect(() => {
    if (active) inputRef.current?.focus();
  }, [active]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key.length === 1 || e.key === "Backspace") {
      e.preventDefault();
      onKeyRef.current(e.key);
    }
  }, []);

  const focus = useCallback(() => inputRef.current?.focus(), []);

  return { inputRef, handleKeyDown, focus };
}
