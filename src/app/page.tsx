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

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Typing Globe",
  description: "Free typing speed test platform in 70 languages with real text, no signup required.",
  url: "https://typingglobe.com",
  applicationCategory: "Educational",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  creator: {
    "@type": "Person",
    name: "Kamrul Islam",
  },
  featureList: [
    "Free typing tests in 70 languages",
    "Real sample text (not random words)",
    "Government exam simulation mode",
    "Touch typing practice mode",
    "No signup required",
    "Real-time WPM and accuracy scoring",
    "Support for complex scripts (Devanagari, Bengali, Arabic, CJK)",
    "Custom typing test feature",
    "Poetry, stories, and lyrics typing",
    "Arcade typing games",
    "Browser extension",
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
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
            Every typing test on Typing Globe uses real sentences — sourced from books, news articles, academic texts,
            public-domain literature, and original professional writing in each language. Not random word lists. Not
            screen-typed cues. Not artificial character strings.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Real text matters for two reasons. First, it builds the vocabulary, punctuation, and grammatical
            structures you&apos;ll actually encounter in real writing — not just the 200 most common words.
            Second, real text is more engaging because you&apos;re reading and decoding real meaning, not just
            copying symbols. This transfer to real typing tasks is why real-text practice beats artificial drills.
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

      {/* Government exams section */}
      <section className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <Card className="bg-surface-2">
          <h3 className="text-lg font-bold text-foreground">Government Exam Typing Rounds</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            In India and Bangladesh, government exams like SSC CGL, RRB NTPC, and state PSCs include timed typing
            tests where 5–10 WPM mistakes can shift your final rank by hundreds. These exams require 30–40 WPM in your
            language with high accuracy — no guessing, no shortcuts.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Typing Globe includes an Exam Hall mode that simulates the exact conditions: timer, keyboard layout, and
            real government exam sample text. Practice under exam conditions so you don&apos;t discover your
            weaknesses on test day.
          </p>
          <Button href="/government-exam-typing-test" size="lg" className="mt-6 w-full">
            Practice for Government Exams →
          </Button>
        </Card>

        <div>
          <SectionLabel>High-Stakes Typing</SectionLabel>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground">
            Government Exam Preparation
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Government exams don&apos;t care about your personal best — they score consistency. A candidate who types
            a steady 35 WPM beats one who hits 45 WPM on half their attempts and 20 WPM on the other half.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            The challenge compounds if English isn&apos;t your primary language. Indian and Bangladeshi exams often
            include typing in regional languages (Hindi, Bengali, Gujarati, Marathi, etc.), where keyboard layouts
            differ and cultural punctuation rules apply.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Start exam preparation 2–3 months before your test. Build a base of 35+ WPM in practice mode first, then
            move to timed tests in Exam Hall mode. Simulate the 10-minute typing round from your specific exam to
            understand pacing and fatigue.
          </p>
        </div>
      </section>

      {/* Keyboard and setup */}
      <section className="mt-20">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <SectionLabel>Setup for Speed</SectionLabel>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Keyboard Setup, Ergonomics, and Finger Position
          </h2>
          <p className="max-w-xl text-balance text-sm text-muted">
            Your keyboard and posture determine whether typing feels effortless or exhausting at 60+ WPM.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-6">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Physical Setup</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Wrists straight:</strong> Wrists should be level with the keyboard, not bent upward or
                  downward. A wrist rest helps with long sessions.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Elbows at 90°:</strong> Elbows should bend at a right angle. Raise your chair if needed so
                  your arms are parallel to the floor.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Feet flat:</strong> Your feet should be flat on the floor or footrest, stabilizing your
                  body. Dangling feet cause posture slouch.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Monitor at eye level:</strong> The top of your monitor should be at or slightly below eye
                  level, about arm&apos;s length away.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Keyboard Layout and Language Setup</h3>
            <p className="mt-3 text-sm text-muted">
              Typing Globe handles right-to-left languages (Arabic, Urdu, Hebrew) and complex scripts (Devanagari,
              Bengali, Thai, Korean) automatically. Your OS keyboard layout is all you need:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>English (QWERTY):</strong> Standard on most keyboards. No setup needed.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>French (AZERTY), German (QWERTZ):</strong> Available in OS language settings. Typing Globe
                  will adjust automatically.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Hindi (Devanagari):</strong> Install a Hindi input method (Windows: Settings → Language →
                  Hindi. Mac: System Preferences → Input Sources).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>
                  <strong>Arabic, Bengali, Chinese:</strong> Similarly, add your language in OS settings. Typing Globe
                  activates the correct layout when you select that language.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="font-semibold text-foreground">Touch Typing Finger Position (Home Row)</h3>
            <p className="mt-3 text-sm text-muted">
              The home row is where your fingers rest between keystrokes. For English QWERTY:
            </p>
            <div className="mt-4 flex items-center justify-center gap-1 rounded-lg bg-surface-2 p-4 font-mono text-lg">
              <span className="text-muted">A</span>
              <span className="text-muted">S</span>
              <span className="text-primary font-bold">D</span>
              <span className="text-muted">F</span>
              <span className="mx-2 text-muted">|</span>
              <span className="text-muted">J</span>
              <span className="text-primary font-bold">K</span>
              <span className="text-muted">L</span>
              <span className="text-muted">;</span>
            </div>
            <p className="mt-3 text-sm text-muted">
              <strong>Finger assignment:</strong> Left hand: pinky on A, ring on S, middle on D, index on F. Right
              hand: index on J, middle on K, ring on L, pinky on ;. The D and K (marked bold) have tactile bumps on
              physical keyboards — your touch reference points.
            </p>
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="mt-20">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <SectionLabel>Avoid These Traps</SectionLabel>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Common Typing Mistakes That Kill Your Speed
          </h2>
          <p className="max-w-xl text-balance text-sm text-muted">
            Most slow typists aren&apos;t slow because they&apos;re incapable — they&apos;re slow because they
            practice the wrong habits.
          </p>
        </div>

        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            {
              icon: "👀",
              title: "Looking at the Keyboard",
              desc: "Every glance down costs 1–2 WPM and breaks your rhythm. Trust your muscle memory.",
            },
            {
              icon: "⚡",
              title: "Chasing Speed Over Accuracy",
              desc: "Practicing 90% accuracy trains errors into muscle memory. Slow down, get to 98%+, then speed up naturally.",
            },
            {
              icon: "🔤",
              title: "Typing Random Words",
              desc: "Your brain learns patterns from real sentences. Typing 'cat dog xyz' doesn't train real typing.",
            },
            {
              icon: "📅",
              title: "Testing Every Single Day",
              desc: "Muscle memory needs sleep to consolidate. Typing 7 days/week without rest actually hurts improvement.",
            },
            {
              icon: "🎯",
              title: "Ignoring Weak Fingers",
              desc: "Most people have weak ring and pinky fingers. If you see errors on E, R, O, L, drill those specific keys.",
            },
            {
              icon: "💪",
              title: "Typing Until Exhaustion",
              desc: "Fatigue teaches bad form. A focused 15-minute session beats a sloppy 60-minute grind.",
            },
          ].map((item) => (
            <Card key={item.title} hover>
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-3 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Multi-language benefits */}
      <section className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionLabel>Beyond English</SectionLabel>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground">
            Why Multi-Language Typing Practice Matters
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            If you speak multiple languages, typing practice in each one is essential — and for good reason.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Language learners who practice typing simultaneously with speaking and reading absorb vocabulary and
            grammar faster. Unlike flashcards, where you memorize words in isolation, typing forces your brain to
            recall and produce sentences in real-time. This mirrors real-world writing.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            For government exam candidates in India and Bangladesh, the typing round often includes your native or
            regional language. If you only practice English typing, you&apos;ll be starting from zero on test day.
            Typing Globe lets you build speed in all 70 languages, including Hindi, Bengali, Gujarati, Tamil,
            Telugu, Marathi, and Kannada — before your exam.
          </p>
        </div>

        <Card className="bg-surface-2">
          <h3 className="text-lg font-bold text-foreground">Typing Tests in Your Language</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Each language test loads authentic sample text in the native script. Your OS keyboard layout adjusts
            automatically for right-to-left scripts and complex input methods.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>70 languages and regional scripts supported</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Real sample text, not machine-translated</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Government exam layout simulation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✓</span>
              <span>Automatic script and layout direction handling</span>
            </li>
          </ul>
          <Button href="/typing-test-languages" size="lg" className="mt-6 w-full">
            Browse All Languages →
          </Button>
        </Card>
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
          <SeoHeading id="improve-speed">How to Improve Your Typing Speed: A Structured Approach</SeoHeading>
          <p className="mt-4 leading-relaxed text-muted">
            Typing speed improvement follows the same principles as any physical skill: deliberate practice,
            consistent feedback, and progressive challenge. Blindly typing faster doesn&apos;t work — systematic,
            focused practice does. Here&apos;s the evidence-backed method:
          </p>

          <h3 className="mt-6 text-lg font-semibold text-foreground">The Foundation: Touch Typing Basics</h3>
          <p className="mt-3 leading-relaxed text-muted">
            The single biggest difference between casual typists (30–40 WPM) and proficient ones (60+ WPM) is
            touch typing — typing without looking at the keyboard. If you&apos;re still hunt-and-peck typing (using
            two fingers while watching your hands), your ceiling is around 30–40 WPM no matter how much you practice.
            Touch typing uses all ten fingers positioned on the home row (ASDFGHJKL; in English), and your fingers
            develop muscle memory for key positions.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            If you&apos;re not already touch typing, the first step is to learn the home row position and reprogram
            your muscle memory — this takes 2–4 weeks of focused practice before speed matters. Use
            Typing Globe&apos;s Practice mode, which removes the timer and lets you focus purely on accuracy and
            finger placement. In this mode, accuracy is 100% of the goal — speed comes automatically once your
            fingers know where the keys are.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-foreground">Phase 1: Accuracy Over Speed (Weeks 1–2)</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Before you test yourself, build your foundation. This phase is about establishing clean muscle memory,
            not chasing high scores.
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {[
              "Use Practice mode for 10–15 minutes daily (no timer, no pressure).",
              "Focus on 0 errors per session — retrain your fingers to find keys without looking.",
              "Keep your wrists straight, elbows at 90°, and feet flat on the floor (ergonomics matter for speed sustainability).",
              "Do NOT memorize letters — instead, develop muscle memory through muscle-memory repetition until your fingers move automatically.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-foreground">Phase 2: Consistency Building (Weeks 3–4)</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Once you can type with zero errors for 30 seconds straight in Practice mode, you&apos;re ready for timed
            tests. Start with 30-second tests to build confidence without exhaustion.
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {[
              "Take 1–2 timed tests per day (30 seconds is a good starting duration).",
              "Aim for 95%+ accuracy — if you&apos;re getting errors, slow down and retrain, don&apos;t speed up.",
              "Record your net WPM after each test (accuracy matters more than raw speed).",
              "Space tests 1–2 days apart to let muscle memory consolidate. Typing every single day without rest actually slows improvement.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-foreground">Phase 3: Speed Development (Weeks 5–8)</h3>
          <p className="mt-3 leading-relaxed text-muted">
            With solid accuracy in place, you can now focus on speed. Increase test duration to 1 minute, then 3
            minutes as your confidence grows. Real typing speed comes from clean muscle memory, not from trying to type
            faster.
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {[
              "Take a 1-minute test 2–3 times per week to measure progress.",
              "Continue practice mode sessions between tests to reinforce accuracy.",
              "Track your net WPM trend over 4 weeks — expect a 5–10 WPM improvement every 2–4 weeks if you&apos;re consistent.",
              "If accuracy dips below 93%, return to practice mode for a week before testing again.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-foreground">Plateau Breaking (After 8 Weeks)</h3>
          <p className="mt-3 leading-relaxed text-muted">
            Once you reach 50+ WPM, improvement slows — this is normal. Plateaus happen because you&apos;ve
            automated a set of keystrokes, and further gains require deliberate retraining of weak fingers (usually
            the ring and pinky fingers).
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {[
              "Spend 1–2 minutes per session drilling the letters your weak fingers handle (usually E, R, U, I, O, K, L).",
              "Increase test duration to 3 minutes — longer tests reveal weaknesses that 30-second sprints hide.",
              "Try different text types (poetry, stories, lyrics, custom text) to break typing patterns and prevent robotic muscle memory.",
              "Track net WPM, not gross WPM — consistency and accuracy matter more than peak speed.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">→</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <Callout icon="⏱️" title="The 20-Minute Daily Routine" tone="primary">
            Don&apos;t have hours? 20 minutes daily beats 2 hours on weekends. A solid routine: 10 minutes of
            practice mode (no timer), then take a 30-second or 1-minute test and review errors. That&apos;s it.
            Consistency over marathon sessions is what builds speed.
          </Callout>
        </div>
      </section>
    </div>
  );
}
