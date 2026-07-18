import type { Metadata } from "next";
import { languages } from "@/data/languages";
import { LanguageGrid } from "@/components/LanguageGrid";
import { SectionLabel } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Typing Speed Tests in 70 Languages",
  description:
    "Browse every typing speed test on Typing Globe — 70 languages across Latin, Arabic, Devanagari, Bengali, Cyrillic, Hangul, and CJK scripts. Pick a language and start typing.",
  alternates: { canonical: "/typing-test-languages" },
};

export default function LanguagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <SectionLabel>All Languages</SectionLabel>
        <h1 className="text-balance max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          70 Typing Speed Tests, One Platform
        </h1>
        <p className="max-w-2xl text-balance text-muted">
          Every card below opens a real typing test with authentic native-language sample text. Languages marked
          &ldquo;Coming Soon&rdquo; on their test page are on our build queue.
        </p>
      </div>

      <LanguageGrid languages={languages} />

      <div className="mt-20 rounded-3xl border border-primary/25 bg-gradient-to-b from-primary/10 to-transparent p-8 text-center sm:p-12">
        <h2 className="text-balance text-2xl font-bold text-foreground sm:text-3xl">
          The World&apos;s Most Complete Free Typing Speed Test
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-balance leading-relaxed text-muted">
          Your fingers speak. Our tool listens. Whether you&apos;re measuring your English WPM on a QWERTY
          keyboard, practicing Hindi on Devanagari, testing your Arabic speed in right-to-left script, or drilling
          Korean Hangul for a proficiency exam — this is the only place built to do it all, in one tool.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-xs font-semibold uppercase tracking-wide text-primary">
          No banners. No credit card. No signup required. Just open the test, start typing, and see your real WPM
          and accuracy instantly.
        </p>
      </div>
    </div>
  );
}
