import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { games, getGameBySlug } from "@/data/games";
import { SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";
import { GamePlayer } from "@/components/games/GamePlayer";

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return {};

  return {
    title: `${game.title} — Free Typing Game`,
    description: `${game.description} Play free, no download, no account required.`,
    alternates: { canonical: `/game/${slug}` },
  };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-center">
        <SectionLabel>{game.genre}</SectionLabel>
        <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
          {game.icon} {game.title}
        </h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted">{game.tagline}</p>
      </div>

      <GamePlayer slug={game.slug} title={game.title} />

      <section className="mx-auto mt-16 flex max-w-2xl flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="about-this-game">About {game.title}</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">{game.seo.intro}</p>
        </div>

        <div>
          <SeoHeading id="how-to-play">How to Play</SeoHeading>
          <div className="mt-4">
            <DataTable headers={["Step", "What to Do"]} rows={game.seo.howToPlay} />
          </div>
        </div>

        <Callout icon={game.icon} title="Free, no account needed" tone="primary">
          {game.title} is completely free to play, with no signup and no download — your high
          score is saved right in your browser.
        </Callout>

        <div>
          <SeoHeading id="game-faq">Frequently Asked Questions</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={game.seo.faq} />
          </div>
        </div>
      </section>
    </div>
  );
}
