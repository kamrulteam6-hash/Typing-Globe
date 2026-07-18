import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/Card";
import { DailyGoals } from "@/components/DailyGoals";
import { LanguageGrid } from "@/components/LanguageGrid";
import { leaderboard } from "@/data/leaderboard";
import { getLanguage, languages } from "@/data/languages";

export const metadata: Metadata = {
  title: "Practice Dashboard",
  description:
    "Your Typing Globe practice hub: daily goals, the global typing leaderboard, and quick access to typing tests in 70 languages.",
  alternates: { canonical: "/typing-practice-hub" },
};

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="text-center">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Improve Your Typing Speed <span className="text-primary">in 70 Languages</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-muted">
          Check your typing speed and accuracy, review your mistakes, and practice touch typing lessons —
          completely free.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button href={`/test/${getLanguage("en")!.testSlug}`} size="lg">Try a Random Test</Button>
          <Button href="/custom-typing-test" variant="secondary" size="lg">Custom Typing Test</Button>
          <Button href="/typing-test-languages" variant="secondary" size="lg">Practice Lessons (All Languages)</Button>
        </div>
      </section>

      <section className="mt-12">
        <Link
          href="/english-typing-course"
          className="block rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-surface to-surface p-6 transition-colors hover:border-primary/50 sm:p-8"
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <SectionLabel>New — Structured Learning</SectionLabel>
              <h2 className="mt-3 text-xl font-bold text-foreground sm:text-2xl">
                English Typing Course — Beginner to Pro in 30 Days
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                30 levels, 5 lessons each, gated by a rising-difficulty exam. Start with home-row basics
                and finish typing full paragraphs at speed — completely free, no signup.
              </p>
            </div>
            <span className="shrink-0 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
              Start the Course →
            </span>
          </div>
        </Link>
      </section>

      <section className="mt-12">
        <DailyGoals />
      </section>

      <section className="mt-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <SectionLabel>Live Rankings</SectionLabel>
            <h2 className="mt-3 text-xl font-bold text-foreground">Global Typing Leaderboard</h2>
            <p className="mt-1 text-sm text-muted">
              Real-time global scores. See the top typing speeds across different languages and layouts.
            </p>
          </div>
          <span className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-semibold text-muted">
            All Languages
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead className="bg-surface-2 text-xs uppercase tracking-wide text-muted-2">
                <tr>
                  <th className="px-5 py-3 font-semibold">Rank</th>
                  <th className="px-5 py-3 font-semibold">Typist</th>
                  <th className="px-5 py-3 font-semibold">Language</th>
                  <th className="px-5 py-3 font-semibold">Mode</th>
                  <th className="px-5 py-3 font-semibold">WPM</th>
                  <th className="px-5 py-3 font-semibold">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {leaderboard.map((row) => (
                  <tr key={row.rank} className="bg-surface">
                    <td className="px-5 py-3 font-mono text-xs text-muted-2">#{row.rank}</td>
                    <td className="px-5 py-3 font-medium text-foreground">{row.typist}</td>
                    <td className="px-5 py-3">
                      <span className="rounded-full border border-border bg-surface-2 px-2 py-0.5 text-xs text-muted">
                        {row.language}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-muted">{row.mode}</td>
                    <td className="px-5 py-3 font-semibold text-primary">{row.wpm}</td>
                    <td className="px-5 py-3 text-muted">{row.accuracy}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <LanguageGrid languages={languages} />
      </section>
    </div>
  );
}
