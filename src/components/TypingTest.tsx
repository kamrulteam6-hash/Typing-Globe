"use client";

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Language } from "@/data/languages";
import { Difficulty, getInitialSampleText, getSampleText, getTextPool } from "@/data/texts";
import { ResultCard } from "@/components/result/ResultCard";
import { ComparisonCard } from "@/components/result/ComparisonCard";
import { ResultActions } from "@/components/result/ResultActions";
import { ChallengeBanner } from "@/components/result/ChallengeBanner";
import { ChallengeParamReader } from "@/components/result/ChallengeParamReader";
import { PracticeNudgeModal } from "@/components/result/PracticeNudgeModal";
import { ShareableResult, buildShareUrl, buildChallengeUrl, buildDuelUrl } from "@/lib/shareResult";

type Mode = "test" | "practice" | "exam";

const DURATIONS = [15, 30, 60, 120];
const EXAM_DURATION = 60;
const EXAM_DIFFICULTY: Difficulty = "hard";
const NUDGE_WPM_THRESHOLD = 25;
const NUDGE_ACCURACY_THRESHOLD = 85;

function computeStats(typed: string, target: string, elapsedMs: number) {
  const len = Math.min(typed.length, target.length);
  let correct = 0;
  for (let i = 0; i < len; i++) {
    if (typed[i] === target[i]) correct++;
  }
  const incorrect = len - correct;
  const minutes = Math.max(elapsedMs / 60000, 1 / 60000);
  const wpm = Math.round(correct / 5 / minutes);
  const accuracy = typed.length === 0 ? 100 : Math.round((correct / typed.length) * 100);
  return { correct, incorrect, wpm: Math.max(wpm, 0), accuracy: Math.max(accuracy, 0) };
}

export type TypingStats = { wpm: number; accuracy: number; correct: number; incorrect: number };

export function TypingTest({
  lang,
  mode = "test",
  customText,
  rtl = false,
  contentLabel,
  disableNudge = false,
  onComplete,
  theme = "default",
  poemMeta,
  examConfig,
}: {
  lang?: Language;
  mode?: Mode;
  customText?: string;
  rtl?: boolean;
  contentLabel?: string;
  disableNudge?: boolean;
  onComplete?: (stats: TypingStats) => void;
  theme?: "default" | "poetry";
  poemMeta?: { title: string; author: string; year: string };
  /** Only used when mode === "exam" — overrides the default single-attempt exam settings. */
  examConfig?: { duration: number; difficulty: Difficulty };
}) {
  const isRtl = lang?.rtl ?? rtl;
  const isFixedLength = mode === "practice" || !!customText;
  const completedRef = useRef(false);
  const resolvedLabel = contentLabel ?? (lang ? `${lang.name} Typing Test` : "Custom Typing Test");
  const examDifficulty = examConfig?.difficulty ?? EXAM_DIFFICULTY;
  const examDuration = examConfig?.duration ?? EXAM_DURATION;

  const [difficulty, setDifficulty] = useState<Difficulty>(mode === "exam" ? examDifficulty : "medium");
  const [duration, setDuration] = useState(mode === "exam" ? examDuration : 30);
  // Deterministic on first render so server-rendered HTML and client hydration match exactly;
  // the mount effect below swaps in a randomized pick right after hydration.
  const [text, setText] = useState(() =>
    customText ?? (lang ? getInitialSampleText(lang.code, mode === "exam" ? examDifficulty : "medium") : "")
  );
  const [typed, setTyped] = useState("");
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(duration);
  const [finished, setFinished] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [challenge, setChallenge] = useState<ShareableResult | null>(null);
  const [showNudge, setShowNudge] = useState(false);
  const [poolIndex, setPoolIndex] = useState(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const pool = useMemo(() => (lang ? getTextPool(lang.code, difficulty) : []), [lang, difficulty]);

  const reset = useCallback(
    (nextDifficulty: Difficulty, nextDuration: number, nextPoolIndex?: number) => {
      const nextPool = lang ? getTextPool(lang.code, nextDifficulty) : [];
      const index = nextPoolIndex ?? Math.floor(Math.random() * Math.max(nextPool.length, 1));
      setPoolIndex(index);
      setText(customText ?? nextPool[index] ?? "");
      setTyped("");
      setStartTime(null);
      setFinished(false);
      setTimeLeft(nextDuration);
      setElapsedMs(0);
      completedRef.current = false;
      requestAnimationFrame(() => inputRef.current?.focus());
    },
    [lang, customText]
  );

  // Ticks elapsedMs continuously once typing starts (used for live stats in every mode);
  // for "test"/"exam" modes it also drives the countdown and ends the test at zero.
  useEffect(() => {
    if (!startTime || finished) return;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      setElapsedMs(elapsed);
      if (mode === "test" || mode === "exam") {
        const remaining = duration - Math.floor(elapsed / 1000);
        if (remaining <= 0) {
          setTimeLeft(0);
          setFinished(true);
        } else {
          setTimeLeft(remaining);
        }
      }
    }, 200);
    return () => clearInterval(interval);
  }, [mode, startTime, finished, duration]);

  const handleChange = (value: string) => {
    if (finished) return;
    if (!startTime) setStartTime(Date.now());
    setTyped(value);

    if (isFixedLength) {
      if (value.length >= text.length) {
        const elapsed = startTime ? Date.now() - startTime : 0;
        setElapsedMs(elapsed);
        setFinished(true);
      }
    } else if (lang) {
      // Keep a buffer of upcoming words so a fast typist never runs out of text before time is up.
      setText((prev) => {
        if (value.length > prev.length - 30) {
          return prev + " " + (getSampleText(lang.code, difficulty) || "");
        }
        return prev;
      });
    }
  };

  const liveStats = useMemo(() => computeStats(typed, text, elapsedMs || 1), [typed, text, elapsedMs]);

  const finalStats = useMemo(() => computeStats(typed, text, elapsedMs || 1), [typed, text, elapsedMs]);

  useEffect(() => {
    if (finished && !completedRef.current) {
      completedRef.current = true;
      onComplete?.(finalStats);
      if (!disableNudge && (finalStats.wpm < NUDGE_WPM_THRESHOLD || finalStats.accuracy < NUDGE_ACCURACY_THRESHOLD)) {
        // One-time notification that the test just ended below average — legitimate
        // reaction to an external event, not state derived from props/state.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setShowNudge(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const myResult: ShareableResult = {
    wpm: finalStats.wpm,
    accuracy: finalStats.accuracy,
    correct: finalStats.correct,
    contentLabel: resolvedLabel,
    langCode: lang?.code,
    mode,
    date: new Date().toISOString(),
  };

  return (
    <div>
      <Suspense fallback={null}>
        <ChallengeParamReader onChallenge={setChallenge} />
      </Suspense>

      {showNudge && <PracticeNudgeModal wpm={finalStats.wpm} onClose={() => setShowNudge(false)} />}

      {!finished && challenge && <ChallengeBanner challenger={challenge} />}

      {!finished && (
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {mode === "test" &&
              DURATIONS.map((d) => (
                <button
                  key={d}
                  onClick={() => {
                    setDuration(d);
                    reset(difficulty, d);
                  }}
                  disabled={!!startTime}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                    duration === d
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-border text-muted hover:text-foreground"
                  }`}
                >
                  {d}s
                </button>
              ))}
          </div>
          {!customText && mode !== "exam" && (
            <div className="flex items-center gap-2">
              {(["easy", "medium", "hard"] as Difficulty[]).map((d) => (
                <button
                  key={d}
                  onClick={() => {
                    setDifficulty(d);
                    reset(d, duration);
                  }}
                  disabled={!!startTime}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-semibold capitalize transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
                    difficulty === d
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-border text-muted hover:text-foreground"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {!finished && !startTime && !customText && mode !== "exam" && pool.length > 1 && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-2">Paragraph</span>
          {pool.map((_, i) => (
            <button
              key={i}
              onClick={() => reset(difficulty, duration, i)}
              className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                i === poolIndex
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border text-muted hover:text-foreground"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => reset(difficulty, duration)}
            className="ml-1 rounded-lg border border-border px-2.5 py-1 text-xs font-semibold text-muted hover:text-foreground"
          >
            🔀 Shuffle
          </button>
          <Link
            href="/custom-typing-test"
            className="ml-auto rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            ✍️ Type Your Own Text
          </Link>
        </div>
      )}

      {!text ? (
        <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-muted-2">
          Loading test text…
        </div>
      ) : !finished ? (
        <>
          <div className="mb-4 flex items-center gap-6 text-sm">
            {(mode === "test" || mode === "exam") && (
              <span className="font-mono text-lg font-bold text-primary">{timeLeft}s</span>
            )}
            <span className="text-muted">
              WPM <span className="font-semibold text-foreground">{liveStats.wpm}</span>
            </span>
            <span className="text-muted">
              Accuracy <span className="font-semibold text-foreground">{liveStats.accuracy}%</span>
            </span>
          </div>

          {theme === "poetry" && poemMeta && (
            <div className="mb-0 rounded-t-2xl border border-b-0 border-[#c9b98f] bg-[#f7f0dc] px-6 pb-5 pt-7 text-center">
              <h2 className="font-serif text-xl font-bold text-[#3a2f1c] sm:text-2xl">{poemMeta.title}</h2>
              <p className="mt-1.5 font-serif text-sm italic text-[#6b5b3a]">
                by {poemMeta.author} · {poemMeta.year}
              </p>
              <div className="mx-auto mt-4 h-px w-16 bg-[#c9b98f]" />
            </div>
          )}

          <div
            className={
              theme === "poetry"
                ? "relative cursor-text rounded-b-2xl border border-[#c9b98f] bg-[#f7f0dc] p-6 sm:p-8"
                : "relative cursor-text rounded-2xl border border-border bg-surface p-6"
            }
            onClick={() => inputRef.current?.focus()}
          >
            <p
              dir={isRtl ? "rtl" : "ltr"}
              className={
                theme === "poetry"
                  ? "select-none whitespace-pre-wrap font-serif text-lg leading-loose tracking-wide text-[#3a2f1c] sm:text-xl"
                  : "select-none whitespace-pre-wrap font-mono text-lg leading-relaxed tracking-wide sm:text-xl"
              }
            >
              {text.split("").map((char, i) => {
                const isCurrent = i === typed.length;
                const isTyped = i < typed.length;
                const isCorrect = isTyped && typed[i] === char;
                const cursorClass =
                  theme === "poetry" ? "bg-[#c9b98f]/60 text-[#3a2f1c] rounded-sm" : "text-foreground bg-primary/25 rounded-sm";
                const correctClass = theme === "poetry" ? "text-[#3a2f1c]" : "text-foreground";
                const incorrectClass = theme === "poetry" ? "text-[#a33] bg-[#a33]/10" : "text-danger bg-danger/10";
                const upcomingClass = theme === "poetry" ? "text-[#a8977a]" : "text-muted-2";

                if (char === "\n") {
                  return (
                    <span key={i}>
                      {isCurrent && <span className={cursorClass}>↵</span>}
                      {"\n"}
                    </span>
                  );
                }

                let className = upcomingClass;
                if (isTyped) {
                  className = isCorrect ? correctClass : incorrectClass;
                } else if (isCurrent) {
                  className = cursorClass;
                }
                return (
                  <span key={i} className={className}>
                    {char}
                  </span>
                );
              })}
            </p>
            <textarea
              ref={inputRef}
              value={typed}
              onChange={(e) => handleChange(e.target.value)}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Type the text above"
              className="absolute inset-0 h-full w-full cursor-text resize-none opacity-0"
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-muted-2">
              {startTime ? "Keep going — start typing to see live stats." : "Click the box and start typing to begin."}
            </p>
            {isFixedLength && (
              <button
                onClick={() => {
                  const elapsed = startTime ? Date.now() - startTime : 0;
                  setElapsedMs(elapsed);
                  setFinished(true);
                }}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Finish now →
              </button>
            )}
          </div>
        </>
      ) : mode === "exam" ? (
        <div className="rounded-2xl border border-border bg-surface p-8 text-center text-sm text-muted">
          Recording your result…
        </div>
      ) : (
        <div className="flex flex-col items-center">
          {challenge ? (
            <>
              <ComparisonCard ref={cardRef} duel={{ challenger: challenge, challenged: myResult }} />
              <ResultActions
                targetRef={cardRef}
                fileName="typing-globe-challenge"
                shareUrl={typeof window !== "undefined" ? buildDuelUrl({ challenger: challenge, challenged: myResult }) : undefined}
                shareLabel="Share Result"
                challengeUrl={typeof window !== "undefined" ? buildChallengeUrl(myResult) : undefined}
              />
            </>
          ) : (
            <>
              <ResultCard ref={cardRef} result={myResult} label="Test Complete" />
              <ResultActions
                targetRef={cardRef}
                fileName="typing-globe-result"
                shareUrl={typeof window !== "undefined" ? buildShareUrl(myResult) : undefined}
                challengeUrl={typeof window !== "undefined" ? buildChallengeUrl(myResult) : undefined}
              />
            </>
          )}

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                setChallenge(null);
                reset(difficulty, duration);
              }}
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-muted hover:text-foreground"
            >
              Try Again
            </button>
            <Link
              href="/typing-test-languages"
              className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-muted hover:text-foreground"
            >
              Choose Another Language
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
