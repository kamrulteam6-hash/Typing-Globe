import Link from "next/link";
import { Language, languages } from "@/data/languages";
import { Flag } from "@/components/ui/Flag";
import { SeoHeading } from "@/components/seo/SeoHeading";

/**
 * Picks a small set of related live-test languages for cross-linking: same
 * region first, then same script as a fallback, always excluding the
 * current language. Capped so the block stays a genuine navigation aid
 * rather than a link farm.
 */
function pickRelated(current: Language, count: number): Language[] {
  const pool = languages.filter((l) => l.hasRealTest && l.code !== current.code);

  const sameRegion = pool.filter((l) => l.region === current.region);
  const sameScript = pool.filter(
    (l) => l.script === current.script && l.region !== current.region
  );
  const rest = pool.filter(
    (l) => l.region !== current.region && l.script !== current.script
  );

  const combined = [...sameRegion, ...sameScript, ...rest];
  return combined.slice(0, count);
}

/**
 * Cross-links a test/practice page to: the other mode for the same
 * language, a handful of related languages, and the main directory pages.
 * Rendered on every live /test/[slug] and /p/[slug] page so the ~70
 * language pages actually link to each other instead of relying solely on
 * the footer/nav.
 */
export function RelatedLanguageLinks({
  lang,
  mode,
}: {
  lang: Language;
  mode: "test" | "practice";
}) {
  const related = pickRelated(lang, 6);
  const otherModeHref = mode === "test" ? `/p/${lang.practiceSlug}` : `/test/${lang.testSlug}`;
  const otherModeLabel =
    mode === "test" ? `Practice ${lang.name} Untimed` : `Take the Timed ${lang.name} Test`;

  return (
    <section className="mt-16 flex flex-col gap-6 border-t border-border pt-10">
      <div>
        <SeoHeading id="continue-practicing">Continue Practicing</SeoHeading>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={otherModeHref}
            className="flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-2 text-sm font-semibold text-primary hover:bg-primary/20"
          >
            <Flag lang={lang} className="h-4 w-5 text-sm" />
            {otherModeLabel}
          </Link>
          <Link
            href="/custom-typing-test"
            className="flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3.5 py-2 text-sm font-medium text-muted hover:border-primary/40 hover:text-primary"
          >
            ✍️ Type Your Own Text
          </Link>
        </div>
      </div>

      <div>
        <SeoHeading id="other-languages">Other Typing Tests to Try</SeoHeading>
        <div className="mt-4 flex flex-wrap gap-2">
          {related.map((l) => (
            <Link
              key={l.code}
              href={`/test/${l.testSlug}`}
              className="flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3.5 py-2 text-sm font-medium text-muted hover:border-primary/40 hover:text-primary"
            >
              <Flag lang={l} className="h-4 w-5 text-sm" />
              {l.name}
            </Link>
          ))}
        </div>
        <Link
          href="/typing-test-languages"
          className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
        >
          Browse all 70 languages →
        </Link>
      </div>
    </section>
  );
}
