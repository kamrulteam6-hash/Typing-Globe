import type { Metadata } from "next";
import { Card, SectionLabel } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

const WEBSTORE_URL =
  "https://chromewebstore.google.com/detail/ojdpflbpahkmpnjdgjjbddefmfjkjand?utm_source=item-share-cb";

export const metadata: Metadata = {
  title: "Typing Globe Browser Extension",
  description:
    "Free Chrome extension for instant typing practice, an ambient WPM tracker for Google Docs and Word, and a full-page typing drill on every new tab.",
  alternates: { canonical: "/typing-test-extension" },
};

const features = [
  {
    icon: "⌨️",
    title: "Practice From Any Tab",
    description:
      "Click the toolbar icon for a full typing drill in a popup — no need to open a new page. Choose from 8 languages, right inside the popup.",
  },
  {
    icon: "🖥️",
    title: "Ambient Tracker for Docs & Word",
    description:
      "An optional floating widget measures your real WPM and accuracy live while you write in Google Docs, Word Online, or anywhere else — no copy-pasting into a test.",
  },
  {
    icon: "🆕",
    title: "New Tab Quick Drill",
    description:
      "Every new tab becomes a full-page typing drill with language and duration picker — the fastest way to sneak in practice throughout the day.",
  },
  {
    icon: "🖱️",
    title: `Right-Click "Type This"`,
    description:
      "Select any text on any website, right-click, and instantly load it into the extension as custom practice material.",
  },
  {
    icon: "🔥",
    title: "Streaks, Recaps & Heatmaps",
    description:
      "A daily streak counter, a weekly recap of your sessions, and a keyboard heatmap that shows exactly which keys trip you up most.",
  },
  {
    icon: "🔗",
    title: "Certificate Status, Synced",
    description:
      "Log into typingglobe.com in your browser and the extension automatically shows your certificate status — no separate sign-in required.",
  },
  {
    icon: "🔍",
    title: "Omnibox Shortcuts",
    description: `Type "globe" + Tab in your address bar, then a language name to jump straight to that typing test — no clicking required.`,
  },
  {
    icon: "📋",
    title: "Clipboard-Aware Suggestions",
    description:
      "Copy a paragraph and the extension can offer to load it as practice text — you're always asked first, nothing loads automatically.",
  },
];

const faqItems = [
  {
    question: "Is the extension free?",
    answer: "Yes — completely free, with no in-extension purchases, matching the rest of Typing Globe.",
  },
  {
    question: "Which browsers are supported?",
    answer:
      "Chrome is live on the Chrome Web Store today. Edge, Brave, Opera, and other Chromium-based browsers work the same way since they share Chrome's extension platform. Firefox support is built in but not yet published to addons.mozilla.org.",
  },
  {
    question: "Does the ambient tracker work without an internet connection?",
    answer:
      "Yes — the popup drill, ambient tracker, streak, and heatmap all run entirely offline using your browser's local storage. An internet connection is only needed to sync your certificate status from typingglobe.com.",
  },
  {
    question: "Does the extension read what I type on other sites?",
    answer:
      "The ambient tracker only counts keystrokes (for a live WPM number) while it's turned on — it never stores or transmits the actual text you type. You can disable it anytime from the extension's Sync tab.",
  },
];

export default function ExtensionPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-10 text-center sm:px-6 lg:px-8">
        <SectionLabel>Browser Extension</SectionLabel>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Typing Globe Browser Extension
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-balance leading-relaxed text-muted">
          A free Chrome extension that brings typing practice to every tab — a quick popup drill, an
          ambient speed tracker for Google Docs and Word, and a full typing drill on every new tab.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={WEBSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_0_0_1px_rgba(18,185,129,0.3)] transition-all duration-150 hover:brightness-110"
          >
            🧩 Add to Chrome — It&apos;s Free
          </a>
          <span className="text-xs text-muted-2">Also works on Edge, Brave, and Opera</span>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <Card key={f.title} hover>
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-3 text-sm font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">{f.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-10 border-t border-border pt-12">
          <Callout icon="🧩" title="Lightweight by design" tone="primary">
            The extension stays small and fast — a typing test overlay, not a resource-heavy background
            app. The ambient tracker only counts keystrokes; it never reads or stores the text you type.
          </Callout>

          <div>
            <SeoHeading id="browser-support">Browser Support</SeoHeading>
            <div className="mt-4">
              <DataTable
                headers={["Browser", "Status"]}
                rows={[
                  ["Chrome", "Live on the Chrome Web Store"],
                  ["Edge, Brave, Opera (Chromium-based)", "Works via the Chrome build — same install"],
                  ["Firefox", "Built in, not yet published to addons.mozilla.org"],
                  ["Safari", "Not currently supported"],
                ]}
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="primary">Manifest V3</Badge>
            <Badge tone="accent">70-language site, 8 in-extension languages</Badge>
            <Badge tone="gold">Free, no account required</Badge>
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
