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
  title: "Song Lyrics Typing Test — Free Karaoke-Style Typing Practice",
  description:
    "Type original tracks across pop, folk, hip-hop, R&B, and more. Free song lyrics typing tests with live WPM and accuracy tracking.",
  alternates: { canonical: "/song-lyrics-typing-test" },
};

const faqItems = [
  {
    question: "Why aren't these real songs by real artists?",
    answer:
      "Song lyrics are copyrighted, usually by the songwriter and their publisher, so we can't legally host real lyrics from commercial songs. Every track here is an original composition written for Typing Globe. If you want to type your actual favorite song, paste its lyrics into the Custom Typing Test — that's on your device, not something we host.",
  },
  {
    question: "Which genre is best for typing practice?",
    answer:
      "Folk and lullaby-style tracks tend to have simpler vocabulary and repetition, making them a gentle starting point. Hip-hop and rhythmic verse push you toward faster, punchier phrasing once you're comfortable with the basics.",
  },
  {
    question: "Do the verse and chorus labels count as text I need to type?",
    answer:
      "No — section labels like \"Verse 1\" and \"Chorus\" are part of the lyric sheet and are included in the typing text itself (the same way a real lyric sheet would show them), so yes, you do type them as part of the passage.",
  },
  {
    question: "Can I practice a chorus repeatedly instead of the whole song?",
    answer:
      "Not yet inside a saved lyric page, but you can copy just the chorus into the Custom Typing Test for focused repetition on a shorter passage.",
  },
];

export default function LyricsPage() {
  const teaserItems = lyrics.map((l) => ({ slug: l.slug, title: l.title, text: l.text }));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <SectionLabel>Karaoke Soundtrack</SectionLabel>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Song Lyrics Typing Test
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
