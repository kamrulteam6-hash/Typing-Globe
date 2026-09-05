import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLanguageByTestSlug, languages } from "@/data/languages";
import { Flag } from "@/components/ui/Flag";
import { SectionLabel } from "@/components/ui/Card";
import { TypingTest } from "@/components/TypingTest";
import { LanguageSeoContent } from "@/components/seo/LanguageSeoContent";
import { DeepContentRenderer } from "@/components/seo/DeepContentRenderer";
import { RelatedLanguageLinks } from "@/components/seo/RelatedLanguageLinks";
import { getDeepContent } from "@/data/deepContent";

export function generateStaticParams() {
  return languages.map((lang) => ({ slug: lang.testSlug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lang = getLanguageByTestSlug(slug);
  if (!lang) return {};

  const deep = await getDeepContent(lang.code);
  if (deep) {
    return {
      title: deep.seoTitle,
      description: deep.seoDescription,
      alternates: { canonical: `/test/${slug}` },
    };
  }

  const title = `${lang.name} Typing Test — Free WPM & Accuracy Test`;
  const description = lang.hasRealTest
    ? `Take a free ${lang.name} typing speed test. Measure your WPM and accuracy with authentic ${lang.name} sample text, right in your browser.`
    : `The ${lang.name} typing test is on our build queue. Browse 5 fully working typing tests today, or explore all 70 languages on Typing Globe.`;

  return {
    title,
    description,
    alternates: { canonical: `/test/${slug}` },
  };
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lang = getLanguageByTestSlug(slug);
  if (!lang) notFound();

  const realLanguages = languages.filter((l) => l.hasRealTest && l.code !== lang.code);
  const deep = await getDeepContent(lang.code);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center gap-3">
        <Flag lang={lang} className="h-8 w-11 text-3xl" />
        <div>
          <SectionLabel>Typing Test</SectionLabel>
          <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            {lang.name} Typing Test <span className="text-muted-2">· {lang.nativeName}</span>
          </h1>
        </div>
      </div>

      {lang.hasRealTest ? (
        <TypingTest lang={lang} mode="test" />
      ) : (
        <div className="rounded-2xl border border-border bg-surface p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Coming Soon</p>
          <h2 className="mt-3 text-xl font-bold text-foreground">
            The {lang.name} typing test is on our build queue
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            We&apos;re still writing authentic {lang.name} sample text for this test. In the meantime, try one of
            our fully working tests below.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {realLanguages.map((l) => (
              <Link
                key={l.code}
                href={`/test/${l.testSlug}`}
                className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary/40 hover:text-primary"
              >
                {l.name}
              </Link>
            ))}
          </div>
          <Link
            href="/typing-test-languages"
            className="mt-6 inline-block text-xs font-semibold text-primary hover:underline"
          >
            Browse all 70 languages →
          </Link>
        </div>
      )}

      {deep ? <DeepContentRenderer content={deep} /> : <LanguageSeoContent lang={lang} />}

      {lang.hasRealTest && <RelatedLanguageLinks lang={lang} mode="test" />}

      {deep?.schemas?.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
