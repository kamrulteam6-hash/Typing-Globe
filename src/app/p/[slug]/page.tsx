import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLanguageByPracticeSlug, languages } from "@/data/languages";
import { Flag } from "@/components/ui/Flag";
import { SectionLabel } from "@/components/ui/Card";
import { TypingTest } from "@/components/TypingTest";
import { LanguageSeoContent } from "@/components/seo/LanguageSeoContent";
import { RelatedLanguageLinks } from "@/components/seo/RelatedLanguageLinks";

export function generateStaticParams() {
  return languages.map((lang) => ({ slug: lang.practiceSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lang = getLanguageByPracticeSlug(slug);
  if (!lang) return {};

  return {
    title: `${lang.name} Typing Practice — Untimed Lessons`,
    description: lang.hasRealTest
      ? `Practice ${lang.name} touch typing at your own pace, with no timer. Build accuracy and muscle memory with authentic ${lang.name} sample text.`
      : `${lang.name} practice lessons are on our build queue. Try one of 5 fully working practice lessons today.`,
    alternates: { canonical: `/p/${slug}` },
  };
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lang = getLanguageByPracticeSlug(slug);
  if (!lang) notFound();

  const realLanguages = languages.filter((l) => l.hasRealTest && l.code !== lang.code);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3">
        <Flag lang={lang} className="h-8 w-11 text-3xl" />
        <div>
          <SectionLabel>Pressure-Free Practice</SectionLabel>
          <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            {lang.name} Typing Practice <span className="text-muted-2">· {lang.nativeName}</span>
          </h1>
        </div>
      </div>

      {lang.hasRealTest ? (
        <TypingTest lang={lang} mode="practice" />
      ) : (
        <div className="rounded-2xl border border-border bg-surface p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Coming Soon</p>
          <h2 className="mt-3 text-xl font-bold text-foreground">
            {lang.name} practice lessons are on our build queue
          </h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {realLanguages.map((l) => (
              <Link
                key={l.code}
                href={`/p/${l.practiceSlug}`}
                className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary/40 hover:text-primary"
              >
                {l.name}
              </Link>
            ))}
          </div>
          <Link href="/typing-test-languages" className="mt-6 inline-block text-xs font-semibold text-primary hover:underline">
            Browse all 70 languages →
          </Link>
        </div>
      )}

      <LanguageSeoContent lang={lang} variant="compact" />

      {lang.hasRealTest && <RelatedLanguageLinks lang={lang} mode="practice" />}
    </div>
  );
}
