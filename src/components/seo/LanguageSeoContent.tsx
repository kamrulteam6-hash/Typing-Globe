import { Language, scriptGroups } from "@/data/languages";
import { getLanguageSeoContent } from "@/data/languageContent";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export function LanguageSeoContent({
  lang,
  variant = "full",
}: {
  lang: Language;
  variant?: "full" | "compact";
}) {
  const content = getLanguageSeoContent(lang);
  const scriptLabel = scriptGroups.find((g) => g.script === lang.script)?.label ?? lang.script;

  if (variant === "compact") {
    // Used on the practice page for the same language, so it deliberately covers different
    // ground than the full block on the test page rather than duplicating it.
    return (
      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="practice-tips">
            Tips for Practicing {lang.name} Typing
          </SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Untimed practice mode is where accuracy habits are actually built — there&apos;s no
            countdown pressuring you into rushed keystrokes, so mistakes you make here are mistakes
            you can actually notice and correct. {content.regionParagraph}
          </p>
        </div>

        <Callout icon="⌨️" title="Keyboard & input method" tone="primary">
          {content.keyboardNote}
        </Callout>

        <div>
          <SeoHeading id="practice-faq">Frequently Asked Questions</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock
              items={content.faq.filter((f) => !f.question.startsWith("What is a good WPM"))}
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
      <div>
        <SeoHeading id="about-language">About {lang.name} Typing</SeoHeading>
        <p className="mt-3 leading-relaxed text-muted">{content.intro}</p>
      </div>

      <div>
        <DataTable
          headers={["Fact", "Detail"]}
          rows={[
            ["Native name", lang.nativeName],
            ["Script", scriptLabel],
            ["Writing direction", lang.rtl ? "Right-to-left" : "Left-to-right"],
            ["Region", lang.region],
            ["Test status", lang.hasRealTest ? "Live — take it now" : "Coming soon"],
          ]}
        />
      </div>

      <div>
        <SeoHeading id="keyboard-layout">Keyboard & Input Method</SeoHeading>
        <p className="mt-3 leading-relaxed text-muted">{content.keyboardNote}</p>
      </div>

      <div>
        <SeoHeading id="who-types-this">Who Types {lang.name} on Typing Globe</SeoHeading>
        <p className="mt-3 leading-relaxed text-muted">{content.regionParagraph}</p>
      </div>

      <Callout icon="🌐" title={`${scriptLabel} at a glance`} tone="accent">
        {content.scriptParagraph}
      </Callout>

      <div>
        <SeoHeading id="language-faq">Frequently Asked Questions</SeoHeading>
        <div className="mt-4">
          <SeoFaqBlock items={content.faq} />
        </div>
      </div>
    </section>
  );
}
