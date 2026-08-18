import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";
import { LyricBrowser } from "@/components/content/LyricBrowser";
import { RandomTypingTeaser } from "@/components/content/RandomTypingTeaser";
import { lyrics } from "@/data/lyrics";

export const metadata: Metadata = {
  title: "Song Lyrics Typing Test | Free Music-Style Typing Practice",
  description:
    "Practice typing with original song-style lyrics and track WPM and accuracy. Choose pop, folk, hip-hop, R&B, dance pop or lullaby passages.",
  alternates: { canonical: "/song-lyrics-typing-test" },
};

const faqItems = [
  {
    question: "Are these lyrics from real commercial songs?",
    answer:
      "No. Typing Globe states that every track in the current Song Lyrics Typing Test is an original composition written specifically for the site. The collection is designed to provide verse-and-chorus typing practice without publishing complete lyrics from commercial songs.",
  },
  {
    question: "How many tracks are available right now?",
    answer:
      "Typing Globe currently lists six tracks: Neon and Gasoline, Porch Light, Concrete Constellations, Slow Tide, Paper Boats, and Little Light. They span pop anthem, acoustic folk, hip-hop or rhythmic verse, R&B ballad, dance pop, and lullaby styles.",
  },
  {
    question: "Do I type labels such as Verse and Chorus?",
    answer:
      "Yes. On the current lyric pages, section labels such as Verse, Chorus, Bridge, Outro, and Pre-Chorus appear inside the typing text. Treat them as part of the passage rather than decorative headings unless the live interface is later changed.",
  },
  {
    question: "Which track is easiest to start with?",
    answer:
      "Paper Boats is currently the shortest at 118 words and is labeled easy. Little Light is also labeled easy and uses a repetitive lullaby structure. Either works well for a first full-track attempt before moving into the two medium passages.",
  },
  {
    question: "Can I practice only a chorus?",
    answer:
      "The saved lyric pages currently present the full track. If you want a shorter focused passage, Typing Globe's Custom Typing Test can be used with text you provide yourself. Use text you created or otherwise have the right to use.",
  },
  {
    question: "Can I paste lyrics from my favorite song into the Custom Typing Test?",
    answer:
      "The custom tool accepts text you provide, and Typing Globe says the pasted content stays in the browser for the session rather than being uploaded or stored. That privacy feature does not change copyright ownership, so use lyrics or text you are permitted to use.",
  },
  {
    question: "Will a song lyrics typing score match my normal WPM?",
    answer:
      "Not necessarily. Repeated choruses, memorization, short lyric lines, contractions, and rhythmic phrasing can all change the difficulty. Use lyric tests as a practice format and keep an unfamiliar standard typing test as a separate benchmark for broader progress.",
  },
];

export default function LyricsPage() {
  const teaserItems = lyrics.map((l) => ({ slug: l.slug, title: l.title, text: l.text }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <SectionLabel>Karaoke Soundtrack</SectionLabel>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Song Lyrics Typing Test — Type to the Rhythm
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-balance text-muted">
          Original tracks written across a handful of genres — verse and chorus structure makes for a
          different rhythm than prose or poetry.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-2">
          Try One Right Now
        </h2>
        <RandomTypingTeaser items={teaserItems} itemLabel="track" />
      </section>

      <section className="mb-16">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-2">
          Browse All Tracks
        </h2>
        <LyricBrowser lyrics={lyrics} />
      </section>

      {/* Long-form SEO content */}
      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="what-is-lyrics-typing">What Is a Song Lyrics Typing Test?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A song lyrics typing test uses verse-and-chorus song structure as your typing passage instead
            of prose or a word list. The repeating chorus means you naturally type the same lines more
            than once in a single session, which reinforces muscle memory for those exact words — a kind
            of built-in spaced repetition that most typing content doesn&apos;t offer.
          </p>
        </div>

        <div>
          <SeoHeading id="why-lyrics-work">Why Lyrics Make Typing Practice Feel Effortless</SeoHeading>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              "Repetition by design: choruses repeat, so you reinforce the same phrase multiple times without it feeling like drilling.",
              "Rhythm and cadence: song lyrics are written to be rhythmic, which tends to pull your typing into a steadier, more consistent pace.",
              "Emotional engagement: people stick with content they enjoy — a good hook keeps a typing session going longer than a neutral paragraph would.",
              "Structural variety: verse, chorus, and bridge sections each read a little differently, keeping the exercise from feeling monotonous.",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <Callout icon="©" title="A note on copyright" tone="gold">
          Every lyric on this page is an <strong>original composition</strong>, written specifically for
          Typing Globe — not a real song by a real artist. We take this seriously: reproducing actual
          copyrighted lyrics without a license isn&apos;t something we do. Want to type your genuine
          favorite song instead? Paste it into the{" "}
          <Link href="/custom-typing-test" className="text-primary hover:underline">
            Custom Typing Test
          </Link>{" "}
          — that content stays local to your session, not published on this site.
        </Callout>

        <div>
          <SeoHeading id="genres-available">Genres Available</SeoHeading>
          <div className="mt-3">
            <DataTable
              headers={["Genre", "Feel", "Good For"]}
              rows={[
                ["Pop Anthem", "Upbeat, sing-along, simple rhyme scheme", "Warm-up sessions"],
                ["Acoustic Folk", "Slow, narrative, gentle repetition", "Beginners"],
                ["Hip-Hop / Rhythmic Verse", "Fast, punchy, internal rhyme", "Intermediate speed practice"],
                ["R&B Ballad", "Smooth, longer phrases", "Building steady rhythm"],
                ["Dance Pop", "Bright, short punchy lines", "Quick sessions"],
                ["Lullaby", "Soft, highly repetitive", "Absolute beginners"],
              ]}
            />
          </div>
        </div>

        <div>
          <SeoHeading id="lyrics-faq">Frequently Asked Questions</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
