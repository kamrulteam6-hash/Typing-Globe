import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";
import { StoryBrowser } from "@/components/content/StoryBrowser";
import { RandomTypingTeaser } from "@/components/content/RandomTypingTeaser";
import { stories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Aesop Fables Typing Test | Free Story WPM Practice",
  description:
    "Practice typing with Aesop fables and check your WPM and accuracy. Type six classic moral stories with natural punctuation, dialogue, and varied sentence rhythm.",
  alternates: { canonical: "/aesop-fables-typing-test" },
};

const faqItems = [
  {
    question: "Is the Aesop Fables Typing Test free?",
    answer:
      "Yes. Typing Globe currently lets you open the Aesop fable story pages and type them in the browser while tracking WPM and accuracy. The collection page also lets you browse the available stories and open each fable as its own typing test.",
  },
  {
    question: "Which Aesop fables are available on Typing Globe?",
    answer:
      "The current collection includes The Tortoise and the Hare, The Fox and the Grapes, The Boy Who Cried Wolf, The Ant and the Grasshopper, The Lion and the Mouse, and The Crow and the Pitcher. The live collection currently labels three as easy and three as medium.",
  },
  {
    question: "How long are the Aesop typing passages?",
    answer:
      "The six current Typing Globe passages range from 173 to 263 words. The Fox and the Grapes is the shortest at 173 words, while The Boy Who Cried Wolf is the longest at 263 words. The other four stories fall between those two lengths.",
  },
  {
    question: "Should I repeat the same fable or always choose a new one?",
    answer:
      "Use both approaches. Repeating the same fable is useful for fixing punctuation and difficult key patterns, while a fresh story gives you a better check of how your skill transfers to unfamiliar wording. Familiarity can make later attempts on the same passage easier.",
  },
  {
    question: "Are Typing Globe's passages copied from an old Aesop translation?",
    answer:
      "No. The story pages describe them as traditional fables that have been retold. The ancient fable tradition has many public-domain editions, but exact modern translations can have separate copyright, so original retellings are the safer and more distinctive approach for the site.",
  },
  {
    question: "Will my Aesop WPM match my normal typing-test WPM?",
    answer:
      "Not necessarily. Story familiarity, vocabulary, dialogue, punctuation, passage length, and how predictable the sentences feel can all change your result. Use Aesop fables as one practice format and keep a standard unfamiliar typing test as a separate benchmark.",
  },
];

export default function StoriesPage() {
  const teaserItems = stories.map((s) => ({ slug: s.slug, title: s.title, text: s.text }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <SectionLabel>Narrative Excursions</SectionLabel>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Aesop Fables Typing Test — Practice with Classic Stories
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-balance text-muted">
          Type timeless moral stories. Build real-world speed, accuracy, and rhythm — one fable at a time.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted">
          Random word tests are useful for raw keyboard drills, but sometimes you want a passage that actually keeps moving somewhere. Our Aesop Fables Typing Test lets you practice WPM and accuracy with complete short stories, so every sentence gives you a reason to keep reading while your fingers keep working.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-balance text-sm leading-relaxed text-muted">
          Choose one of the six fables on Typing Globe, click into the story, and begin typing the passage exactly as it appears. You will work through natural sentences, quotation marks, apostrophes, commas, capitalization, and changing sentence lengths while the test tracks your WPM and accuracy.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-2">
          Try One Right Now
        </h2>
        <RandomTypingTeaser items={teaserItems} itemLabel="story" />
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-2">
          Browse All Stories
        </h2>
        <StoryBrowser stories={stories} />
      </section>

      {/* Long-form SEO content */}
      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="why-aesop">Why Aesop Stories Make the Best Typing Practice Passages</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Most typing tests give you random words or meaningless lorem ipsum text. Your eyes glaze
            over, your focus drifts, and you stop caring about accuracy. Aesop fables fix this
            completely, and there&apos;s real cognitive science behind why: narrative text keeps
            sustained attention noticeably longer than non-narrative text. When you&apos;re typing a
            story, your brain is doing two things at once — processing the words as a typist and
            following the plot as a reader. That dual engagement keeps you locked in, and when
            you&apos;re locked in, your accuracy improves and your speed follows.
          </p>
          <div className="mt-4">
            <DataTable
              headers={["Text Type", "Vocabulary", "Sentence Length", "Engagement"]}
              rows={[
                ["Aesop fables", "Simple, clear, familiar", "Short to medium", "Narrative-driven — the story pulls you forward"],
                ["Random word lists", "No context", "Single words", "Very low — boredom sets in fast"],
                ["Lorem ipsum", "Meaningless", "Medium", "Zero — the brain disengages immediately"],
                ["Advanced literature", "Complex, unfamiliar", "Long, nested", "High cognitive load — slows beginners down"],
                ["News articles", "Variable", "Long", "Moderate — content goes stale quickly"],
              ]}
            />
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            Aesop lands in the sweet spot: familiar enough to read fast, varied enough to build real
            skill, and structured enough that your brain can partially predict what comes next — one of
            the core habits that separates fast typists from slow ones.
          </p>
        </div>

        <div>
          <SeoHeading id="what-you-practice">What You Practice in Every Aesop Fable</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Every fable on Typing Globe is a complete typing workout hidden inside a story. Here&apos;s
            what you&apos;re actually building with each session:
          </p>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              {
                title: "Punctuation fluency",
                text: 'Aesop’s dialogue is full of quotation marks, commas, periods, and question marks — "I didn’t want those grapes anyway," the fox said. Typing punctuation accurately at speed is one of the biggest gaps between beginner and intermediate typists, and fables force you to practice it naturally.',
              },
              {
                title: "Capitalization rhythm",
                text: "Every new sentence starts with a capital. Dialogue tags and sentence-opening capitals train your Shift key reflex without you even thinking about it.",
              },
              {
                title: "Word prediction and flow",
                text: 'Because Aesop’s sentence structures are predictable ("Once upon a time, a [animal] decided to [action]"), your eyes naturally get ahead of your fingers — one of the single most effective habits for increasing WPM.',
              },
              {
                title: "Short bursts, big results",
                text: "Most fables run 150–320 words. At 40 WPM you finish one in under 5 minutes, at 60 WPM in under 3 — meaning you can complete several full practice rounds in a 10-minute session.",
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

        <div>
          <SeoHeading id="available-fables">Fables Available to Practice</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Each fable targets a slightly different typing pattern:
          </p>
          <div className="mt-4">
            <DataTable
              headers={["Fable", "Key Typing Challenge", "Moral"]}
              rows={[
                ["The Tortoise and the Hare", "Steady rhythm, dialogue breaks", "Slow and steady wins the race"],
                ["The Ant and the Grasshopper", "Contrasting sentence lengths", "Prepare for the future"],
                ["The Lion and the Mouse", "Short punchy sentences", "No act of kindness is too small"],
                ["The Fox and the Grapes", "Apostrophes, quoted speech", "It's easy to despise what you can't have"],
                ["The Boy Who Cried Wolf", "Dialogue-heavy, repeated phrases", "Liars aren't believed even when they tell the truth"],
                ["The Crow and the Pitcher", "Precise short sentences", "Necessity is the mother of invention"],
              ]}
            />
          </div>
        </div>

        <div>
          <SeoHeading id="benchmarks">Aesop Typing Test WPM Benchmarks — Where Should You Aim?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Aesop passages tend to run a little easier than professional typing test text because the
            vocabulary is familiar and the sentence structures are predictable. That means your Aesop WPM
            will often land a few WPM higher than your standard typing test score — which makes it a
            good confidence builder and a solid baseline for tracking improvement over time.
          </p>
          <div className="mt-4">
            <DataTable
              headers={["WPM on Aesop Passages", "Level", "What It Means"]}
              rows={[
                ["Below 25", "Beginner", "Focus on accuracy first — hit 95% before chasing speed"],
                ["25–40", "Developing", "Building muscle memory — try the same fable a few times in a row"],
                ["40–55", "Intermediate", "Comfortable reading flow — start practicing less familiar fables"],
                ["55–70", "Advanced", "Near-professional speed on story text"],
                ["70+", "Expert", "Consistent and fast — challenge yourself with longer passages"],
              ]}
            />
          </div>
          <Callout icon="💡" title="Pro tip" tone="primary">
            Retaking the same fable a few times in a row tends to produce a real WPM improvement by the
            third attempt, since familiarity reduces cognitive load and lets your fingers move ahead of
            conscious thought. Use short fables as speed drills: read once, type a few times, then move
            on to the next one.
          </Callout>
        </div>

        <div>
          <SeoHeading id="practice-by-level">Aesop Typing Practice for Every Skill Level</SeoHeading>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              {
                title: "Beginner (under 30 WPM)",
                text: "Start with The Lion and the Mouse — it has short sentences and a natural rhythm. Type it slowly and accurately, aiming for 95%+ accuracy rather than speed. Do it once or twice a day for a week and watch your WPM climb once accuracy is solid.",
              },
              {
                title: "Intermediate (30–55 WPM)",
                text: "Pick The Boy Who Cried Wolf — it's dialogue-heavy, which works your Shift key and punctuation muscles. Type it once for speed, once for accuracy, and note which parts cause the most errors.",
              },
              {
                title: "Advanced (55+ WPM)",
                text: "Use a fable as a warm-up drill before your main typing session. Two minutes of familiar, flowing text loosens your fingers and gets your brain into typing mode before harder material.",
              },
              {
                title: "For kids and students",
                text: "Aesop fables suit school-age typists well — the vocabulary matches reading comprehension around ages 8–14, the moral lessons are age-appropriate, and each story is short enough to finish in one sitting.",
              },
            ].map((point) => (
              <li key={point.title} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">✓</span>
                <span>
                  <strong className="text-foreground">{point.title}:</strong> {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SeoHeading id="story-faq">Frequently Asked Questions</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
