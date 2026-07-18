import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { CustomTypingTest } from "@/components/CustomTypingTest";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export const metadata: Metadata = {
  title: "Custom Typing Test — Practice Your Own Text",
  description:
    "Paste any text — in any language or script — and turn it into a live typing speed test with real-time WPM and accuracy tracking.",
  alternates: { canonical: "/custom-typing-test" },
};

const faqItems = [
  {
    question: "Is my pasted text saved or sent anywhere?",
    answer:
      "No. Custom text you paste stays in your browser for that session only — it isn't uploaded, stored, or shared. That also means you can safely paste anything private: study notes, work drafts, or your own writing.",
  },
  {
    question: "Can I use the Custom Typing Test for a language that isn't on Typing Globe yet?",
    answer:
      "Yes — this is the main reason it exists. If your language doesn't have a dedicated test yet, paste any passage in that language and toggle right-to-left mode if needed. You'll still get full live WPM and accuracy tracking.",
  },
  {
    question: "What's the ideal length of text to paste in?",
    answer:
      "Anywhere from a short paragraph (50-100 words) for a quick session to several paragraphs for a longer benchmark works well. Very short snippets (under 10 characters) are blocked since there isn't enough text to produce a meaningful WPM score.",
  },
  {
    question: "Can I paste song lyrics, poetry, or a script here?",
    answer:
      "Yes — that's exactly the kind of content this mode is built for. If you want your own favorite song's real lyrics rather than the original tracks on the Lyrics page, this is where to paste them, since we can't host copyrighted lyrics ourselves.",
  },
];

export default function CustomPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <SectionLabel>Custom Typing Test</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
          Practice With Your Own Text
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Paste study notes, a script, or a paragraph in any language — Typing Globe turns it into a live typing
          test with real-time WPM and accuracy tracking.
        </p>
      </div>
      <CustomTypingTest />

      {/* Long-form SEO content */}
      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="what-is-custom-test">What Is the Custom Typing Test?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            The Custom Typing Test turns any text you paste into a fully scored typing test, complete
            with the same live WPM and accuracy tracking as every preset test on this site. Instead of
            choosing from our library of languages, stories, poems, or lyrics, you supply the passage —
            your own study notes, a work document, a script you&apos;re memorizing, or text in a language
            we don&apos;t have a dedicated test for yet.
          </p>
        </div>

        <div>
          <SeoHeading id="why-use-custom">When to Use It Instead of a Preset Test</SeoHeading>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              "Practicing a specific document you actually need to retype — a report, a form, a script.",
              "Typing in a language among the 65 that don't have a full dedicated test yet.",
              "Drilling your real favorite song's lyrics, rather than one of our original tracks.",
              "Studying by retyping your own notes — a well-documented way to improve retention, with a WPM score as a side benefit.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <Callout icon="🔒" title="Privacy by design" tone="primary">
          Text you paste into the Custom Typing Test is processed entirely in your browser and is never
          uploaded to our servers, logged, or shared. Close the tab and it&apos;s gone.
        </Callout>

        <div>
          <SeoHeading id="custom-vs-preset">Custom Test vs. Preset Language Tests</SeoHeading>
          <div className="mt-3">
            <DataTable
              headers={["", "Custom Typing Test", "Preset Language Tests"]}
              rows={[
                ["Text source", "You paste it", "Curated sample text"],
                ["Languages supported", "Any language or script", "5 fully live, 65 in progress"],
                ["Right-to-left support", "Manual toggle", "Automatic"],
                ["Best for", "Specific documents, own study material", "Consistent WPM benchmarking"],
              ]}
            />
          </div>
        </div>

        <div>
          <SeoHeading id="custom-faq">Frequently Asked Questions</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
