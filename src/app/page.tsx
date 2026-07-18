import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, SectionLabel } from "@/components/ui/Card";
import { FaqAccordion } from "@/components/FaqAccordion";
import { LanguageSitemapGrid } from "@/components/LanguageSitemapGrid";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { HeroBackground } from "@/components/home/HeroBackground";
import { FeatureShowcase } from "@/components/home/FeatureShowcase";
import { AnimatedCounter } from "@/components/home/AnimatedCounter";
import { TypingTest } from "@/components/TypingTest";
import { faqs } from "@/data/faq";
import { getLanguage, scriptGroups } from "@/data/languages";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const audiences = [
  {
    icon: "🏛️",
    title: "Government Exam Candidates",
    description:
      "Practicing for SSC, CPCT, RRB, and state PSC exams across India, Bangladesh, and beyond — where a timed typing round can decide the final rank. Precision and clock discipline weigh heavily.",
  },
  {
    icon: "🎓",
    title: "Academic Students at All Levels",
    description:
      "From school-age students building their first touch-typing coordination on a physical keyboard, to university candidates formatting long-form dissertation drafts under a deadline.",
  },
  {
    icon: "💼",
    title: "Industry Office & Tech Professionals",
    description:
      "Administrative staff managing high volumes of correspondence, and engineers or support teams who spend their day moving between prose and structured text.",
  },
  {
    icon: "🗣️",
    title: "Dedicated Language Learners",
    description:
      "Acquiring native-level fluency by typing with native, real-world sentences in French, German, Korean, Polish, Hindi, and dozens of other languages — not flashcard vocabulary.",
  },
  {
    icon: "🌍",
    title: "The Global Diaspora Families",
    description:
      "Over 200 million people live outside their native countries and still write in their heritage language — Bengali speakers in London, Polish speakers in Berlin. You are welcome here.",
  },
  {
    icon: "⚡",
    title: "Competitive Speed Enthusiasts",
    description:
      "Chasing 100, 120, or higher WPM tiers with live accuracy tracking, replayable results, and a leaderboard that keeps you honest against your own best runs.",
  },
];

const stats = [
  {
    icon: "🌐",
    title: "70 Global Languages",
    description: "Authentic, native sample text written for every script we support — not machine filler.",
  },
  {
    icon: "⚡",
    title: "Interactive Performance",
    description: "Live per-keystroke tracking of speed, latency, and accuracy while you type.",
  },
  {
    icon: "🎯",
    title: "Pro Touch Drills",
    description: "Structured practice modes built for progressive, focused finger placement drills.",
  },
  {
    icon: "🖥️",
    title: "Instant Client Architecture",
    description: "A fast, server-rendered app — results and text load instantly, anywhere in the world.",
  },
];

export default function Home() {
  const english = getLanguage("en")!;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative">
        <HeroBackground />
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionLabel>Built For Everyone</SectionLabel>
          <h1 className="text-balance max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who is Typing Globe Built For?
          </h1>
          <p className="max-w-2xl text-balance text-muted">
            We didn&apos;t build it for one kind of person. We built it for everyone who types — which is everyone.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {audiences.map((a) => (
            <Card key={a.title} hover>
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
                {a.icon}
              </span>
              <h3 className="mb-2 font-semibold text-foreground">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{a.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick English test */}
      <section className="mt-16">
        <div className="mb-5 flex flex-col items-center gap-2 text-center">
          <SectionLabel>Try It Right Now</SectionLabel>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground">
            Quick English Typing Test
          </h2>
          <p className="max-w-xl text-balance text-sm text-muted">
            No signup, no setup — start typing below and see your WPM and accuracy live.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <TypingTest lang={english} mode="test" />
        </div>
      </section>

      {/* Feature showcase */}
      <section className="mt-20">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <SectionLabel>Everything In One Place</SectionLabel>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Everything Typing Globe Offers
          </h2>
          <p className="max-w-xl text-balance text-sm text-muted">
            One platform for tests, structured practice, stories, poetry, lyrics, games, and more.
          </p>
        </div>
        <FeatureShowcase />
      </section>

      {/* Real text / CTA section */}
      <section className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionLabel>Authentic Adaptation</SectionLabel>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground">
            Real Text. Real Scores. Real Improvement.
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Every typing test on Typing Globe uses real sentences — from actual literature, editorial writing, or
            professional writing in each language. Not random word lists. Not screen-typed cues. Not artificial
            character strings.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Real text matters for two reasons. First, it builds the vocabulary, punctuation, and grammatical
            structures you&apos;ll actually encounter in real writing — not just the 200 most common English words.
            Second, real text is more engaging because you&apos;re reading and decoding real meaning, not just
            copying symbols.
          </p>
        </div>

        <Card className="bg-surface-2">
          <h3 className="text-lg font-bold text-foreground">Start Your Free Typing Speed Test Now</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Select your language from the menu above, set your test duration — 30 seconds for a quick benchmark, 1
            minute for a standard test, 3 minutes for a professional-level test — and start typing. Your WPM,
            accuracy, and character count will be ready the moment you finish.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
            <span>✓</span> Fewer than a minute a day is all it takes.
          </p>
          <Button href="/typing-test-languages" size="lg" className="mt-6 w-full">
            Your First Word Is Waiting →
          </Button>
        </Card>
      </section>

      {/* FAQ section */}
      <section className="mt-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <SectionLabel>Frequently Asked Questions &amp; AI Search Insights</SectionLabel>
        </div>
        <div className="mx-auto mt-8 max-w-3xl">
          <FaqAccordion />
        </div>
      </section>

      {/* Stats bar */}
      <section className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="text-lg">{s.icon}</span>
              <Badge tone="primary">{s.title}</Badge>
            </div>
            <p className="text-xs leading-relaxed text-muted">{s.description}</p>
          </div>
        ))}
      </section>

      {/* Big numbers */}
      <section className="mt-20 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
        {[
          { to: 70, suffix: "", label: "Languages" },
          { to: 30, suffix: "", label: "Day Course" },
          { to: 6, suffix: "", label: "Practice Modes" },
          { to: 100, suffix: "%", label: "Free, No Signup" },
        ].map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-primary sm:text-4xl">
              <AnimatedCounter to={stat.to} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs text-muted-2">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Language sitemap */}
      <section className="mt-20">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <SectionLabel>Supported Typing Speed Tests Sitemap (70+ Languages)</SectionLabel>
        </div>
        <LanguageSitemapGrid />
      </section>

      {/* Long-form SEO content */}
      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="how-it-works">Free Typing Speed Test — How It Works</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A typing speed test measures two things at once: how fast you type, expressed as words per
            minute (WPM), and how accurately you type, expressed as a percentage. Typing Globe times you
            against a passage of real sample text — never randomly shuffled words — and scores every
            keystroke as you go. When the timer ends (or, in untimed practice modes, when you finish the
            passage), you get an instant breakdown: gross WPM, net WPM, accuracy, and a character-by-character
            record of what you got right and wrong.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            No account, download, or payment is required for any of it. Pick a language, pick a duration,
            and start typing — the whole test runs in your browser.
          </p>
        </div>

        <div>
          <SeoHeading id="what-counts-as-a-word">What Counts as a &ldquo;Word&rdquo; in a Typing Test?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            By long-standing typing-test convention, one &ldquo;word&rdquo; equals five characters,
            including spaces and punctuation — not five actual dictionary words. This standardizes
            scoring across languages and passages with very different average word lengths. Typing
            Globe reports two numbers:
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              "Gross WPM: total characters typed ÷ 5, divided by minutes elapsed — a raw speed number that ignores mistakes.",
              "Net WPM: (total characters ÷ 5 − uncorrected errors) ÷ minutes elapsed — the number that actually reflects usable output, and the one most exams and employers care about.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SeoHeading id="wpm-benchmarks">Typing Speed Benchmarks by Context</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            &ldquo;Good&rdquo; WPM depends heavily on what you&apos;re measuring it for. Here&apos;s how
            the common benchmarks break down:
          </p>
          <div className="mt-4">
            <DataTable
              headers={["Context", "Typical Target", "Notes"]}
              rows={[
                ["Casual everyday typing", "30–40 WPM", "Where most untrained adult typists land"],
                ["Government exam typing rounds", "30–40 WPM (net)", "Varies by exam board and language script"],
                ["Professional office roles", "50–65 WPM", "Administrative, data entry, transcription"],
                ["Competitive / advanced typists", "90+ WPM", "Rare even among fast typists"],
              ]}
            />
          </div>
        </div>

        <Callout icon="🌍" title="70 languages, 8 script families" tone="primary">
          Typing Globe doesn&apos;t treat non-Latin scripts as an afterthought. Right-to-left Arabic
          script, Devanagari conjuncts, Bengali juktakkhor clusters, Hangul syllable blocks, and CJK
          input-method typing are all handled natively — see the full script breakdown on the{" "}
          <Link href="/about-typing-speed" className="text-primary hover:underline">
            Core Concepts
          </Link>{" "}
          page.
        </Callout>

        <div>
          <SeoHeading id="script-families">Script Families at a Glance</SeoHeading>
          <div className="mt-4">
            <DataTable
              headers={["Script Family", "Example Languages"]}
              rows={scriptGroups.map((g) => [g.label, g.description])}
            />
          </div>
        </div>

        <div>
          <SeoHeading id="improve-speed">How to Improve Your Typing Speed</SeoHeading>
          <ol className="mt-4 flex flex-col gap-3">
            {[
              "Practice touch typing without looking at the keyboard — glancing down is one of the biggest hidden speed costs.",
              "Prioritize accuracy before speed. A 98% accurate 40 WPM beats a 90% accurate 55 WPM in almost every real-world scoring system.",
              "Type real text, not repeated drills — sentence structure and punctuation practice transfers directly to real typing tasks.",
              "Test yourself regularly, but don't test every single day — muscle memory needs rest to consolidate, same as any physical skill.",
              "Track your net WPM over time, not just your best single run — consistency matters more than a one-off high score.",
            ].map((step, i) => (
              <li key={step} className="flex items-start gap-3 text-sm text-muted">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
