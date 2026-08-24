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
  title: "Poetry Typing Test | Practice Famous Poems Online",
  description:
    "Practice typing famous poems online and track WPM and accuracy. Type Shakespeare, Dickinson, Frost, Blake, Wordsworth and more with real line breaks and punctuation.",
  alternates: { canonical: "/poetry-typing-test" },
};

const faqItems = [
  {
    question: "How many poems are currently available?",
    answer:
      "Typing Globe currently lists ten poems in the Poetry Typing Test library. The collection includes work by Elizabeth Barrett Browning, William Shakespeare, William Blake, William Wordsworth, Percy Bysshe Shelley, William Ernest Henley, Emily Dickinson, Robert Frost, and Rudyard Kipling.",
  },
  {
    question: "Do I need to press Enter at the end of each line?",
    answer:
      "Yes. Typing Globe preserves poem line breaks and shows a small return marker when Enter is required. The line ending is treated as part of the transcription, so pressing Enter in the correct place helps preserve the structure of the poem.",
  },
  {
    question: "Is the poetry test timed?",
    answer:
      "The current poem pages are untimed by default. You type the complete poem at your own pace while WPM and accuracy are tracked. If you want a timed exercise, Typing Globe's Custom Typing Test is the better place to create a separate timed benchmark.",
  },
  {
    question: "Which poem should a beginner start with?",
    answer:
      "Start with a shorter easy poem such as Invictus, Stopping by Woods on a Snowy Evening, or How Do I Love Thee? The current library labels all three easy, and each is much shorter than If—, which is the longest and is labeled hard.",
  },
  {
    question: "Should I repeat the same poem?",
    answer:
      "Yes, when you are fixing a specific weakness. Repetition can reduce hesitation around line breaks or punctuation, but familiarity also makes the passage easier to anticipate. Use repeat attempts for drills and unfamiliar poems when you want a cleaner test of transfer.",
  },
  {
    question: "Are all of the poems public domain everywhere?",
    answer:
      "Most poems in Typing Globe's collection are historical texts identified as public-domain material in U.S. collections. Copyright rules vary by country, so if you plan to reuse a poem, check the copyright status in your specific jurisdiction.",
  },
  {
    question: "Will poetry typing improve my normal WPM?",
    answer:
      "It can practice useful skills such as punctuation, Shift-key control, Enter transitions, and reading ahead, but the transfer will differ by typist. Keep an ordinary prose test as a separate benchmark instead of assuming every increase on a familiar poem will appear everywhere else.",
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
          Poetry Typing Test — Practice Famous Poems Online
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-balance text-muted">
          Most typing tests give you random words or ordinary paragraphs. Poetry makes the keyboard behave differently.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted">
          A line may stop in the middle of a thought, punctuation can be unusually dense, and a single poem may ask you to use Enter, Shift, apostrophes, dashes, commas, semicolons, and quotation marks within a few minutes.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-balance text-sm leading-relaxed text-muted">
          Typing Globe's Poetry Typing Test turns those details into focused practice. Choose a poem from the current library, type it at your own pace, and preserve the line breaks while the page tracks WPM and accuracy. The result feels less like a race and more like precision training with real literary text.
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
