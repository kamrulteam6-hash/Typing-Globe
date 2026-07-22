"use client";

import { useState } from "react";
import Link from "next/link";
import { TypingTest, type TypingStats } from "@/components/TypingTest";
import { Button } from "@/components/ui/Button";
import { Card, SectionLabel } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { getLanguage } from "@/data/languages";
import type { MockExam, ExamLanguageRule } from "@/data/mockExams";

type Category = "general" | "obcEws" | "scStPwd";

const CATEGORY_LABELS: Record<Category, string> = {
  general: "General / UR",
  obcEws: "OBC / EWS",
  scStPwd: "SC / ST / PwD",
};

type ResultState = {
  stats: TypingStats;
  rule: ExamLanguageRule;
  passSpeed: boolean;
  passWordCount: boolean;
  passErrors: boolean;
  passAccuracy: boolean;
  overallPass: boolean;
  allowedErrorPercent?: number;
};

/** Generates a realistic numeric data-entry passage (grouped digit records) for 10-key style mocks. */
function generateNumericPassage(): string {
  const groups: string[] = [];
  for (let i = 0; i < 400; i++) {
    const groupLen = 4 + Math.floor(Math.random() * 4); // 4-7 digit groups, like invoice/account numbers
    let group = "";
    for (let j = 0; j < groupLen; j++) group += Math.floor(Math.random() * 10);
    groups.push(group);
  }
  return groups.join("  ");
}

export function MockExamRunner({ exam }: { exam: MockExam }) {
  const [phase, setPhase] = useState<"picker" | "running" | "result">("picker");
  const [langCode, setLangCode] = useState(exam.languageRules[0].code);
  const [category, setCategory] = useState<Category>("general");
  const [result, setResult] = useState<ResultState | null>(null);
  const [numericPassage, setNumericPassage] = useState<string>("");

  const isNumeric = exam.passageType === "numeric";
  const lang = getLanguage(langCode);
  const rule = exam.languageRules.find((r) => r.code === langCode) ?? exam.languageRules[0];
  const needsCategoryPicker =
    exam.errorTolerance?.type === "percent" &&
    (exam.errorTolerance.obcEws !== undefined || exam.errorTolerance.scStPwd !== undefined);
  const speedUnit = exam.displayUnit ?? (exam.scoringMode === "wpm-kdph" ? "KDPH" : undefined);

  const handleComplete = (stats: TypingStats) => {
    const passSpeed = stats.wpm >= rule.passWpm;
    const passWordCount = rule.minWordCount ? stats.wordCount >= rule.minWordCount : true;
    const passAccuracy = rule.passAccuracy ? stats.accuracy >= rule.passAccuracy : true;

    let passErrors = true;
    let allowedErrorPercent: number | undefined;
    if (exam.errorTolerance?.type === "percent") {
      allowedErrorPercent =
        category === "obcEws"
          ? (exam.errorTolerance.obcEws ?? exam.errorTolerance.general)
          : category === "scStPwd"
            ? (exam.errorTolerance.scStPwd ?? exam.errorTolerance.general)
            : exam.errorTolerance.general;
      const errorRate = stats.typedLength > 0 ? (stats.incorrect / stats.typedLength) * 100 : 0;
      passErrors = errorRate <= allowedErrorPercent;
    } else if (exam.errorTolerance?.type === "maxErrors") {
      passErrors = stats.incorrect <= exam.errorTolerance.max;
    }

    setResult({
      stats,
      rule,
      passSpeed,
      passWordCount,
      passErrors,
      passAccuracy,
      overallPass: passSpeed && passWordCount && passErrors && passAccuracy,
      allowedErrorPercent,
    });
    setPhase("result");
  };

  const startExam = () => {
    if (isNumeric) setNumericPassage(generateNumericPassage());
    setPhase("running");
  };

  if (phase === "picker") {
    return (
      <Card>
        <SectionLabel>{exam.name}</SectionLabel>
        <h2 className="mt-3 text-lg font-bold text-foreground">Set up your attempt</h2>

        {exam.languageRules.length > 1 && !isNumeric && (
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Language</p>
            <div className="flex flex-wrap gap-2">
              {exam.languageRules.map((r) => {
                const l = getLanguage(r.code);
                return (
                  <button
                    key={r.code}
                    onClick={() => setLangCode(r.code)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      langCode === r.code
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border text-muted hover:text-foreground"
                    }`}
                  >
                    {l?.name ?? r.code} — {r.passWpm} WPM
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {needsCategoryPicker && (
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Category (error tolerance)</p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(CATEGORY_LABELS) as Category[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    category === c
                      ? "border-primary/40 bg-primary/10 text-primary"
                      : "border-border text-muted hover:text-foreground"
                  }`}
                >
                  {CATEGORY_LABELS[c]}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-muted-2">
          <Badge tone="primary">{Math.round(exam.durationSeconds / 60)} min</Badge>
          <Badge tone="accent">
            Pass: {speedUnit ? `${(rule.passKdph ?? rule.passWpm * 5 * 60).toLocaleString()} ${speedUnit}` : `${rule.passWpm} WPM`}
          </Badge>
          {rule.passAccuracy && <Badge tone="gold">Min {rule.passAccuracy}% accuracy</Badge>}
          {rule.minWordCount && <Badge tone="gold">Min {rule.minWordCount} words</Badge>}
          {exam.restrictBackspace && <Badge tone="danger">Backspace disabled</Badge>}
        </div>

        <div className="mt-6">
          <Button onClick={startExam} size="lg">
            Start Mock Exam →
          </Button>
        </div>
      </Card>
    );
  }

  if (phase === "running") {
    return (
      <TypingTest
        lang={isNumeric ? undefined : lang}
        customText={isNumeric ? numericPassage : undefined}
        mode="exam"
        examConfig={{ duration: exam.durationSeconds, difficulty: exam.difficulty }}
        restrictBackspace={exam.restrictBackspace}
        disableNudge
        onComplete={handleComplete}
      />
    );
  }

  if (!result) return null;

  const unitAchieved = speedUnit ? result.stats.wpm * 5 * 60 : undefined;

  return (
    <Card>
      <div className="text-center">
        <span
          className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wide ${
            result.overallPass ? "bg-primary/15 text-primary" : "bg-danger/15 text-danger"
          }`}
        >
          {result.overallPass ? "✓ Pass" : "✗ Fail"}
        </span>
        <p className="mt-2 text-xs text-muted-2">Based on {exam.name}&apos;s real pass criteria</p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Your Speed</p>
          <p className="mt-1 text-2xl font-bold text-foreground">
            {unitAchieved !== undefined ? unitAchieved.toLocaleString() : result.stats.wpm}{" "}
            {unitAchieved !== undefined ? speedUnit : "WPM"}
            {unitAchieved !== undefined && (
              <span className="ml-2 text-sm font-normal text-muted-2">({result.stats.wpm} WPM)</span>
            )}
          </p>
          <p className={`mt-1 text-xs font-semibold ${result.passSpeed ? "text-primary" : "text-danger"}`}>
            {result.passSpeed ? "✓" : "✗"} Required:{" "}
            {unitAchieved !== undefined
              ? `${(result.rule.passKdph ?? result.rule.passWpm * 5 * 60).toLocaleString()} ${speedUnit}`
              : `${result.rule.passWpm} WPM`}
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Accuracy</p>
          <p className="mt-1 text-2xl font-bold text-foreground">{result.stats.accuracy}%</p>
          <p className="mt-1 text-xs text-muted-2">{result.stats.incorrect} errors</p>
          {result.rule.passAccuracy && (
            <p className={`mt-1 text-xs font-semibold ${result.passAccuracy ? "text-primary" : "text-danger"}`}>
              {result.passAccuracy ? "✓" : "✗"} Required: {result.rule.passAccuracy}% minimum
            </p>
          )}
        </div>

        {result.rule.minWordCount && (
          <div className="rounded-lg border border-border bg-surface-2 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Word Count</p>
            <p className="mt-1 text-2xl font-bold text-foreground">{result.stats.wordCount}</p>
            <p className={`mt-1 text-xs font-semibold ${result.passWordCount ? "text-primary" : "text-danger"}`}>
              {result.passWordCount ? "✓" : "✗"} Required: {result.rule.minWordCount} words minimum
            </p>
          </div>
        )}

        {result.allowedErrorPercent !== undefined && (
          <div className="rounded-lg border border-border bg-surface-2 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Error Tolerance</p>
            <p className="mt-1 text-2xl font-bold text-foreground">{result.allowedErrorPercent}% max</p>
            <p className={`mt-1 text-xs font-semibold ${result.passErrors ? "text-primary" : "text-danger"}`}>
              {result.passErrors ? "✓" : "✗"} {CATEGORY_LABELS[category]} tolerance
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => {
            setResult(null);
            setPhase("picker");
          }}
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-muted hover:text-foreground"
        >
          Try Again
        </button>
        <Link
          href="/typing-certificate"
          className="rounded-lg border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/20"
        >
          🎓 Get a Verified Certificate
        </Link>
        <Link
          href="/government-exam-typing-test"
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-muted hover:text-foreground"
        >
          More Mock Exams
        </Link>
      </div>
    </Card>
  );
}
