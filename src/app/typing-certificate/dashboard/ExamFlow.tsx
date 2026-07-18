"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { languages } from "@/data/languages";
import { Card } from "@/components/ui/Card";
import { TypingTest, type TypingStats } from "@/components/TypingTest";
import { recordExamSession, confirmRetakeName } from "./actions";

type StageKey = "easy" | "medium" | "hard";

const STAGES: { key: StageKey; duration: number; label: string }[] = [
  { key: "easy", duration: 60, label: "Stage 1 · Easy" },
  { key: "medium", duration: 90, label: "Stage 2 · Medium" },
  { key: "hard", duration: 120, label: "Stage 3 · Hard" },
];

const RETAKE_FEE_USD = 5;

type StageResult = { wpm: number; accuracy: number };
type Phase = "gate" | "picker" | "running" | "between" | "saving";

export function ExamFlow({
  displayName,
  isRetake = false,
}: {
  displayName: string;
  /** Retaking (to improve WPM or change the name on a future certificate) always
   * requires a fresh full exam plus the retake-fee step — never a free name edit. */
  isRetake?: boolean;
}) {
  const [langCode, setLangCode] = useState("en");
  const [phase, setPhase] = useState<Phase>(isRetake ? "gate" : "picker");
  const [name, setName] = useState(displayName);
  const [stageIndex, setStageIndex] = useState(0);
  const [results, setResults] = useState<Partial<Record<StageKey, StageResult>>>({});
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const lang = languages.find((l) => l.code === langCode);
  const currentStage = STAGES[stageIndex];
  const isLastStage = stageIndex === STAGES.length - 1;

  const handleStageComplete = (stats: TypingStats) => {
    setResults((prev) => ({ ...prev, [currentStage.key]: { wpm: stats.wpm, accuracy: stats.accuracy } }));
    setPhase("between");
  };

  const handleContinue = () => {
    if (!isLastStage) {
      setStageIndex((i) => i + 1);
      setPhase("running");
      return;
    }

    if (!lang) return;
    const { easy, medium, hard } = results;
    if (!easy || !medium || !hard) return;

    setPhase("saving");
    startTransition(async () => {
      const result = await recordExamSession({ langCode: lang.code, easy, medium, hard });
      if (result?.error) {
        setError(result.error);
        setPhase("between");
        return;
      }
      router.refresh();
    });
  };

  const handleGateContinue = () => {
    startTransition(async () => {
      const result = await confirmRetakeName(name);
      if (result?.error) {
        setError(result.error);
        return;
      }
      setError(null);
      setPhase("picker");
    });
  };

  if (phase === "gate") {
    return (
      <Card>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">Retake to Improve WPM</p>
        <h1 className="mt-2 text-xl font-bold text-foreground">Confirm your details</h1>
        <p className="mt-2 text-sm text-muted">
          Retaking always means a fresh full 3-stage exam — your name and score are locked
          together per attempt, so nobody can relabel an old score under a new name.
        </p>

        <div className="mt-4 rounded-lg border border-border bg-surface-2 p-3">
          <p className="text-sm font-semibold text-foreground">Retake fee: ${RETAKE_FEE_USD.toFixed(2)} (Demo)</p>
          <p className="mt-1 text-xs text-muted">
            Payment processing isn&apos;t wired up yet — this is a placeholder step. No real
            charge will be made. A real payment gateway will replace this later.
          </p>
        </div>

        <div className="mt-4">
          <label htmlFor="retakeName" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
            Name on certificate
          </label>
          <input
            id="retakeName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={2}
            maxLength={80}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
          />
        </div>

        {error && (
          <p className="mt-3 rounded-lg border border-[color:var(--danger)]/30 bg-[color:var(--danger)]/10 px-3 py-2 text-sm text-[color:var(--danger)]">
            {error}
          </p>
        )}

        <button
          onClick={handleGateContinue}
          disabled={isPending}
          className="mt-6 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
        >
          {isPending ? "Processing…" : "Continue (Demo — No Charge) →"}
        </button>
      </Card>
    );
  }

  if (phase === "picker") {
    return (
      <Card>
        <h1 className="text-xl font-bold text-foreground">Hi {name}, ready for your exam?</h1>
        <p className="mt-2 text-sm text-muted">
          The certificate exam has 3 stages of increasing difficulty and length — 60s easy, 90s
          medium, 120s hard — and your certificate shows the average across all three. No
          switching mid-stage, and nothing is saved until you finish all 3.
        </p>

        <div className="mt-6">
          <label htmlFor="examLang" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
            Language
          </label>
          <select
            id="examLang"
            value={langCode}
            onChange={(e) => setLangCode(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
          >
            {languages.map((l) => (
              <option key={l.code} value={l.code}>
                {l.name} · {l.nativeName}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setPhase("running")}
          className="mt-6 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Start Exam →
        </button>
      </Card>
    );
  }

  if (phase === "between" || phase === "saving") {
    const justFinished = results[currentStage.key];
    return (
      <Card>
        {error && (
          <p className="mb-4 rounded-lg border border-[color:var(--danger)]/30 bg-[color:var(--danger)]/10 px-3 py-2 text-sm text-[color:var(--danger)]">
            {error}
          </p>
        )}
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{currentStage.label} complete</p>
        <div className="mt-4 flex items-baseline gap-6">
          <div>
            <p className="text-3xl font-bold text-foreground">{justFinished?.wpm ?? 0}</p>
            <p className="text-xs text-muted">WPM</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground">{justFinished?.accuracy ?? 0}%</p>
            <p className="text-xs text-muted">Accuracy</p>
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={phase === "saving" || isPending}
          className="mt-6 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
        >
          {phase === "saving" || isPending
            ? "Saving your certificate…"
            : isLastStage
              ? "Finish Exam →"
              : `Continue to ${STAGES[stageIndex + 1].label} →`}
        </button>
      </Card>
    );
  }

  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-primary">{currentStage.label}</p>
      <TypingTest
        key={stageIndex}
        lang={lang}
        mode="exam"
        examConfig={{ duration: currentStage.duration, difficulty: currentStage.key }}
        disableNudge
        onComplete={handleStageComplete}
      />
    </div>
  );
}
