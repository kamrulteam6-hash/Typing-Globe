import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export const metadata: Metadata = {
  title: "Typing Globe Browser Extension",
  description:
    "A lightweight browser extension for quick typing tests without leaving your current tab. Coming soon to Typing Globe.",
  alternates: { canonical: "/typing-test-extension" },
};

const faqItems = [
  {
    question: "Will the extension cost anything?",
    answer:
      "No — the plan is for the extension to be free, matching the rest of Typing Globe, with no separate purchase or subscription.",
  },
  {
    question: "Which browsers will be supported?",
    answer:
      "Chrome and Firefox are planned first, since they cover the large majority of desktop users. Other Chromium-based browsers (Edge, Brave, Opera) should work automatically once the Chrome version ships, since they share the same extension platform.",
  },
  {
    question: "Will it work without an internet connection?",
    answer:
      "The core typing test itself can run offline once loaded, but language content and leaderboard sync will need a connection, the same as the website.",
  },
];

export default function ExtensionPage() {
  return (
    <>
      <ComingSoonPage
        label="Browser Extension"
        title="Typing Globe Browser Extension"
        description="A lightweight extension that lets you run a quick typing test from any tab — same languages, same scoring, no need to open a new page."
        bullets={[
          "One-click typing tests from your browser toolbar",
          "Syncs with your language and difficulty preferences",
          "Chrome and Firefox support planned",
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-10 border-t border-border pt-12">
          <div>
            <SeoHeading id="what-will-it-do">What Will the Extension Do?</SeoHeading>
            <p className="mt-3 leading-relaxed text-muted">
              The Typing Globe browser extension is designed to remove the biggest piece of friction in
              a daily typing habit: opening a new tab and navigating to a website. With the extension
              installed, a single click on the toolbar icon opens a compact typing test overlay,
              pre-loaded with your preferred language and difficulty, without leaving whatever page
              you&apos;re currently on.
            </p>
          </div>

          <div>
            <SeoHeading id="planned-features">Planned Features</SeoHeading>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                "One-click test launch from the browser toolbar, no page navigation required.",
                "Remembers your last-used language, difficulty, and test duration.",
                "Same live WPM and accuracy scoring as the full website.",
                "Optional daily reminder notification to keep a practice streak going.",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-0.5 text-primary">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <Callout icon="🧩" title="Lightweight by design" tone="primary">
            The extension is being built to stay small and fast — a typing test overlay, not a
            resource-heavy background app. It won&apos;t track your browsing outside of the extension
            popup itself.
          </Callout>

          <div>
            <SeoHeading id="browser-support">Planned Browser Support</SeoHeading>
            <div className="mt-4">
              <DataTable
                headers={["Browser", "Status"]}
                rows={[
                  ["Chrome", "Planned — first release"],
                  ["Firefox", "Planned — first release"],
                  ["Edge, Brave, Opera (Chromium-based)", "Expected to work via the Chrome release"],
                  ["Safari", "Under consideration"],
                ]}
              />
            </div>
          </div>

          <div>
            <SeoHeading id="extension-faq">Frequently Asked Questions</SeoHeading>
            <div className="mt-4">
              <SeoFaqBlock items={faqItems} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
