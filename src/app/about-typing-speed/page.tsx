import type { Metadata } from "next";
import { Card, SectionLabel } from "@/components/ui/Card";
import { scriptGroups } from "@/data/languages";

export const metadata: Metadata = {
  title: "What Is a Typing Speed Test? WPM Explained",
  description:
    "Learn what WPM actually measures, why it matters for your career, and how Typing Globe supports real typing practice across 70 languages and 8 script families.",
  alternates: { canonical: "/about-typing-speed" },
};

const impacts = [
  { role: "Content Writers", detail: "Yield noticeably more finished drafts each week at the same effort level." },
  { role: "Customer Support", detail: "Shorter response times per ticket and better satisfaction scores." },
  { role: "Academic Students", detail: "Finish essays and lab reports well before a midnight deadline." },
  { role: "Data Entry Staff", detail: "Clear through queues faster and finish shifts on time." },
];

const practiceModes = [
  {
    index: "01",
    title: "Typing Tests",
    subtitle: "Adaptive Benchmarks",
    description:
      "Choose your language and test duration, then get your WPM and accuracy score in seconds — whichever you're optimizing for, speed or precision.",
  },
  {
    index: "02",
    title: "Typing Practice",
    subtitle: "Pressure-Free Lessons",
    description:
      "Untimed practice with live key highlighting. No clock — just your fingers learning the touchpoints of a new layout, one keystroke at a time.",
  },
  {
    index: "03",
    title: "Poetry Typing",
    subtitle: "Classical Rhythm",
    description:
      "Type passages from world poetry in your target language. Poetry teaches rhythm and precision like nothing else, across dozens of languages.",
  },
  {
    index: "04",
    title: "Stories Typing",
    subtitle: "Narrative Excursions",
    description:
      "Classic short stories and fables in multiple languages — work through natural sentence structure and vocabulary while staying engaged in the story.",
  },
  {
    index: "05",
    title: "Song Lyrics Typing",
    subtitle: "Karaoke Soundtrack",
    description:
      "Type the lyrics you already know by heart. Familiar text keeps sessions longer, and your own taste in music sets the difficulty.",
  },
  {
    index: "06",
    title: "Typing Games",
    subtitle: "Arcade",
    description:
      "Fourteen arcade typing modes — word races, falling letters, survival modes, and more — playable in 40+ languages across four difficulty levels.",
  },
];

export default function AboutTypingSpeedPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* WPM explainer */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionLabel>Core Concepts</SectionLabel>
          <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Is a Typing Speed Test, and Why Does Your WPM Matter?
          </h1>
          <p className="mt-4 leading-relaxed text-muted">
            A typing speed test measures how many words per minute (WPM) you can type accurately under timed
            conditions. Every five characters — including spaces — counts as one word. It measures real,
            usable keyboard input speed, not just how fast your fingers move.
          </p>
        </div>

        <Card className="bg-surface-2">
          <SectionLabel>Real-World Impact</SectionLabel>
          <h2 className="mt-4 text-xl font-bold text-foreground">
            Here&apos;s Why Your WPM Number Matters More Than You Realize
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The average office professional types 38–40 WPM. Bumping that to 60 WPM doesn&apos;t just look
            better on a résumé — it translates to roughly 50% more written output in the same time.
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {impacts.map((item) => (
              <li key={item.role} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">✓</span>
                <span>
                  <span className="font-semibold text-foreground">{item.role}:</span> {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Multilingual platform */}
      <section className="mt-20">
        <SectionLabel>Multilingual Platform</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-bold tracking-tight text-foreground">
          Test Your Speed in 70 Languages — Every Script, Every Keyboard
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          This is what makes Typing Globe genuinely different from most other typing speed tests. Standard
          alternatives prioritize English. If you&apos;re one of the billions of people who communicate primarily
          in a non-English language — those tools weren&apos;t optimized for you. We are.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-surface-2 text-xs uppercase tracking-wide text-muted-2">
                <tr>
                  <th className="px-5 py-3 font-semibold">Script Family</th>
                  <th className="px-5 py-3 font-semibold">Languages &amp; Systems Supported</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {scriptGroups.map((group) => (
                  <tr key={group.script} className="bg-surface">
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-primary">{group.label}</td>
                    <td className="px-5 py-4 text-muted">{group.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-2">
          Every test uses authentic, native-language sample text — not translated placeholders. Whether you type
          Arabic sentences with real Arabic vocabulary, or Bengali text built around real Bengali muscle-memory
          triggers, your WPM score on Typing Globe reflects actual proficiency in your target language, not just a
          keyboard-layout drill.
        </p>
      </section>

      {/* Practice suite */}
      <section className="mt-20">
        <SectionLabel>Practice Suite</SectionLabel>
        <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground">
          More Than a Test — A Complete Typing Practice Platform
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          A typing speed test is a snapshot of where you are. What you really need is a platform that moves you
          forward.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practiceModes.map((mode) => (
            <Card key={mode.index} hover>
              <span className="font-mono text-xs text-muted-2">{mode.index} / {mode.title}</span>
              <h3 className="mt-2 font-semibold text-foreground">{mode.subtitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{mode.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
