import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";
import { PoemBrowser } from "@/components/content/PoemBrowser";
import { RandomTypingTeaser } from "@/components/content/RandomTypingTeaser";
import { poems } from "@/data/poems";

export const metadata: Metadata = {
  title: "Poetry Typing Test — Practice Poems from World Literature",
  description:
    "Free poetry typing test — practice typing famous public-domain poems by Shakespeare, Frost, Dickinson, Blake & more. Improve your WPM, accuracy, and rhythm.",
  alternates: { canonical: "/poetry-typing-test" },
};

const faqItems = [
  {
    question: "Are the poems on this site free to use?",
    answer:
      "Yes. Every poem in our library is in the public domain — classic works by poets like Shakespeare, Wordsworth, Blake, Dickinson, and Frost, whose copyright has long expired. They're freely reproducible and safe to type, share, and quote.",
  },
  {
    question: "Do I need to press Enter at the end of each line?",
    answer:
      "Yes. Poetry typing here preserves the poem's real line breaks, so pressing Enter at the right point is part of the exercise — it's tracked exactly like any other character, and shown as a small ↵ marker when it's your turn to press it.",
  },
  {
    question: "Will poetry typing improve my regular WPM score?",
    answer:
      "It transfers well. The punctuation fluency, irregular-line-break training, and Shift-key reflex you build typing poetry carry over directly to standard prose and word-list typing tests — most of what slows typists down in real text is punctuation and capitalization, not raw letters.",
  },
  {
    question: "What poem should a beginner start with?",
    answer:
      "Start with something short with simple, direct language — Invictus by William Ernest Henley or How Do I Love Thee? by Elizabeth Barrett Browning are both under 16 lines with a steady rhythm, good first poems to build confidence before moving to longer or more syntactically dense pieces like If— by Rudyard Kipling.",
  },
  {
    question: "Is there a timer on poetry typing?",
    answer:
      "No — poem pages run in untimed practice mode by default, with real-time error highlighting and no countdown, so you can focus on precision and rhythm rather than racing the clock. If you want a timed benchmark using the same text, paste any poem into the Custom Typing Test and pick a duration there.",
  },
];

export default function PoetryPage() {
  const teaserItems = poems.map((p) => ({
    slug: p.slug,
    title: p.title,
    text: p.text,
    theme: "poetry" as const,
    poemMeta: { title: p.title, author: p.author, year: p.year },
  }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <SectionLabel>Classical Rhythm</SectionLabel>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Poetry Typing Test — Practice Poems from World Literature
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-balance text-muted">
          Type Shakespeare, Blake, Wordsworth, Dickinson, Frost, and more — real public-domain poems,
          each with its title, poet, and publication year, typed at your own pace.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted">
          Most typing tests give you the same forgettable paragraphs about office furniture, random word
          lists, or lorem ipsum text that your brain processes and immediately discards. Poetry is
          different — every poem here is a real, celebrated work, presented with its actual title, author,
          and year, so you always know exactly what you&apos;re typing and who wrote it.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-2">
          Try One Right Now
        </h2>
        <RandomTypingTeaser items={teaserItems} itemLabel="poem" />
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-2">
          Browse All Poems
        </h2>
        <PoemBrowser poems={poems} />
      </section>

      {/* Long-form SEO content */}
      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="why-poetry">Why Typing Poetry Builds Faster, Deeper Skill</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            There&apos;s a specific reason literary text — and poetry in particular — makes such effective
            typing practice. It&apos;s not just variety; it&apos;s the unique structural demands poetry
            places on your fingers that no other text type replicates:
          </p>
          <div className="mt-4">
            <DataTable
              headers={["Text Type", "Line Breaks", "Punctuation Variety", "Engagement"]}
              rows={[
                ["Poetry", "Unpredictable — mid-sentence, non-standard", "Very high — dashes, ellipses, commas, exclamations", "Emotionally connected — memorable"],
                ["Random word lists", "None", "None", "Minimal — fades in seconds"],
                ["Aesop fables", "Paragraph-based", "Moderate", "Story-driven narrative"],
                ["News articles", "Paragraph-based", "Moderate", "Variable — dates quickly"],
                ["Lorem ipsum", "Paragraph-based", "Minimal", "Zero"],
              ]}
            />
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            The line break is poetry&apos;s biggest typing challenge — and its biggest training gift. When
            a line ends mid-thought, you have a fraction of a second to decide: press Enter and continue,
            or let your flow carry you forward. That micro-decision trains your reading speed to stay
            ahead of your typing, one of the most impactful habits that separates intermediate typists
            from fast ones. Em dashes and irregular punctuation force rare key combinations too — typing
            &ldquo;Because I could not stop for Death— / He kindly stopped for me—&rdquo; (Emily Dickinson)
            gives the Shift+hyphen sequence real, memorable repetition.
          </p>
        </div>

        <div>
          <SeoHeading id="what-you-practice">What You Actually Practice in Every Poetry Session</SeoHeading>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              {
                title: "Shift key rhythm",
                text: "Capitalized line openings and mid-line proper nouns build a consistent Shift reflex that transfers directly to professional typing tasks.",
              },
              {
                title: "Punctuation fluency",
                text: "Poetry uses punctuation expressively, not just grammatically — commas pause, semicolons balance, em dashes interrupt, ellipses trail away. Each is a real keystroke combination most typists practice too rarely.",
              },
              {
                title: "Irregular line lengths",
                text: "Unlike prose, where paragraphs give your eyes a reliable structure, poetry's varying line lengths train your eyes to read ahead and recalibrate constantly — building reading-typing coordination faster than any drill.",
              },
              {
                title: "Return key practice",
                text: "Most typing tests never require you to hit Enter. Poetry does, at the end of every line — a hand-movement transition that's directly relevant to coding, spreadsheets, and any keyboard workflow that uses Enter frequently.",
              },
            ].map((point) => (
              <li key={point.title} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">✓</span>
                <span>
                  <strong className="text-foreground">{point.title}</strong> — {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Callout icon="↵" title="How line breaks work here" tone="accent">
          When it&apos;s time to press Enter, you&apos;ll see a small <strong>↵</strong> marker highlighted
          in the text — press Enter exactly there, the same way you&apos;d type any other character. Get it
          wrong and it&apos;s scored like a normal mistake; get it right and the poem keeps its shape on
          the screen, just like it would on a page.
        </Callout>

        <div>
          <SeoHeading id="library">Poets and Poems in Our Library</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Every poem is verified, public-domain text — shown with its real title, poet, and year, both
            on the browse page and above the typing surface itself:
          </p>
          <div className="mt-4">
            <DataTable
              headers={["Poem", "Poet", "Year", "Difficulty"]}
              rows={poems.map((p) => [p.title, p.author, p.year, p.difficulty])}
            />
          </div>
        </div>

        <div>
          <SeoHeading id="benchmarks">WPM Benchmarks for Poetry Typing</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Poetry is harder to type than plain prose at equivalent speed. Irregular line lengths and
            non-standard punctuation mean your poetry WPM will typically run a little lower than your
            standard typing test score — that&apos;s completely normal. Use it as a precision benchmark,
            not a speed benchmark.
          </p>
          <div className="mt-4">
            <DataTable
              headers={["WPM on Poetry", "Level", "What It Means"]}
              rows={[
                ["Below 20", "Beginner", "Focus entirely on accuracy — hit 98% before adding speed"],
                ["20–35", "Developing", "Learning the rhythm — type each poem a few times for the biggest gain"],
                ["35–50", "Intermediate", "Comfortable with punctuation and line breaks"],
                ["50–70", "Advanced", "Near-professional rhythm and accuracy"],
                ["70+", "Expert", "Elite literary typist — fast and precise across long, dense passages"],
              ]}
            />
          </div>
          <Callout icon="💡" title="Practice insight" tone="primary">
            Typing the same poem a few times in a row tends to produce a real WPM gain by the final pass,
            since familiarity with the line breaks and punctuation removes the hesitation that causes most
            slowdowns in poetry typing specifically. Use short poems as speed drills, and longer ones like{" "}
            <em>If—</em> for endurance.
          </Callout>
        </div>

        <div>
          <SeoHeading id="who-its-for">Who Is the Poetry Typing Test Built For?</SeoHeading>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              "📚 Literature students — typing a poem you're studying means you read it more carefully and engage with the language more deeply than skimming it on a page.",
              "✍️ Writers — retyping the work of masters is one of the oldest creative writing exercises; your fingers learn rhythm by feel.",
              "🎓 Students preparing for timed written exams — building fast, accurate keyboard input on formal, punctuation-dense English text.",
              "🧘 Anyone who finds regular typing tests boring — if your WPM hasn't improved in months, changing the text changes everything.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SeoHeading id="poetry-faq">Frequently Asked Questions</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
