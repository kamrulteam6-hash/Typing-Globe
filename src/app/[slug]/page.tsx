import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionLabel } from "@/components/ui/Card";
import { getStoryBySlug, stories } from "@/data/stories";
import { getPoemBySlug, poems } from "@/data/poems";
import { getLyricBySlug, lyrics } from "@/data/lyrics";
import { TypingTest } from "@/components/TypingTest";

type ContentKind = "story" | "poem" | "lyric";

type ContentEntry = {
  kind: ContentKind;
  label: string;
  hubHref: string;
  hubLabel: string;
  title: string;
  summary: string;
  meta: string;
  text: string;
  poemMeta?: { title: string; author: string; year: string };
};

// Root-level catch-all for individual content items (stories, poems, lyrics — and
// future games items should join the same lookup rather than get a second dynamic
// segment, since Next.js only allows one dynamic slug name per route level).
// Static folders elsewhere in app/ always take precedence over this catch-all,
// so it only ever matches an actual known content slug.
function getContentBySlug(slug: string): ContentEntry | null {
  const story = getStoryBySlug(slug);
  if (story) {
    return {
      kind: "story",
      label: "Story Typing Test",
      hubHref: "/aesop-fables-typing-test",
      hubLabel: "Browse all stories",
      title: story.title,
      summary: story.summary,
      meta: `${story.source} · ${story.difficulty} difficulty`,
      text: story.text,
    };
  }

  const poem = getPoemBySlug(slug);
  if (poem) {
    return {
      kind: "poem",
      label: "Poetry Typing Test",
      hubHref: "/poetry-typing-test",
      hubLabel: "Browse all poems",
      title: poem.title,
      summary: poem.summary,
      meta: `by ${poem.author} · ${poem.year} · ${poem.source} · ${poem.difficulty} difficulty`,
      text: poem.text,
      poemMeta: { title: poem.title, author: poem.author, year: poem.year },
    };
  }

  const lyric = getLyricBySlug(slug);
  if (lyric) {
    return {
      kind: "lyric",
      label: "Song Lyrics Typing Test",
      hubHref: "/song-lyrics-typing-test",
      hubLabel: "Browse all lyrics",
      title: lyric.title,
      summary: lyric.summary,
      meta: `${lyric.genre} · ${lyric.difficulty} difficulty`,
      text: lyric.text,
    };
  }

  return null;
}

function otherItemsFor(slug: string, kind: ContentKind) {
  if (kind === "story") return stories.filter((s) => s.slug !== slug).slice(0, 3);
  if (kind === "poem") return poems.filter((p) => p.slug !== slug).slice(0, 3);
  return lyrics.filter((l) => l.slug !== slug).slice(0, 3);
}

export function generateStaticParams() {
  return [
    ...stories.map((s) => ({ slug: s.slug })),
    ...poems.map((p) => ({ slug: p.slug })),
    ...lyrics.map((l) => ({ slug: l.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug(slug);
  if (!content) return {};

  const title = content.poemMeta
    ? `${content.title} by ${content.poemMeta.author} — Poetry Typing Test`
    : `${content.title} — ${content.label}`;

  return {
    title,
    description: `${content.summary} A free typing test with live WPM and accuracy tracking.`,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getContentBySlug(slug);
  if (!content) notFound();

  const others = otherItemsFor(slug, content.kind);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <SectionLabel>{content.label}</SectionLabel>
        <h1 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">{content.title}</h1>
        <p className="mt-2 text-sm text-muted">{content.summary}</p>
        <p className="mt-2 text-xs text-muted-2">{content.meta}</p>
      </div>

      <TypingTest
        customText={content.text}
        mode="practice"
        contentLabel={content.title}
        theme={content.poemMeta ? "poetry" : "default"}
        poemMeta={content.poemMeta}
      />

      {others.length > 0 && (
        <div className="mt-12 border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-2">More Like This</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary/40 hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            href={content.hubHref}
            className="mt-4 inline-block text-xs font-semibold text-primary hover:underline"
          >
            {content.hubLabel} →
          </Link>
        </div>
      )}
    </div>
  );
}
