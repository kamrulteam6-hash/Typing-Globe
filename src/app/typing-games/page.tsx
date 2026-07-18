import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/games";
import { Card, SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export const metadata: Metadata = {
  title: "Typing Games — Arcade",
  description:
    "Three free arcade typing games — a racer, a shooter, and a falling-words classic — playable right now, no download or account required.",
  alternates: { canonical: "/typing-games" },
};

const faqItems = [
  {
    question: "Are typing games actually useful, or just entertainment?",
    answer:
      "Both — the score, combo, and lives systems put real time pressure on your typing the same way a timed test does, but the game framing keeps most people practicing longer than a plain test would. Each game's final screen still reports a WPM-equivalent and accuracy.",
  },
  {
    question: "Do I need an account to play?",
    answer: "No — every game is free with no signup. Your high score is saved locally in your browser.",
  },
  {
    question: "Are the games available in languages other than English?",
    answer: "Not yet — all three games currently use an English word bank. Other languages are planned.",
  },
];

export default function GamesPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-10 text-center sm:px-6 lg:px-8">
        <SectionLabel>Arcade</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">Typing Games</h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          Three free arcade typing games, each built to make raw speed and accuracy feel like a
          game instead of a countdown clock.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {games.map((game) => (
            <Card key={game.slug} hover className="flex flex-col">
              <span className="text-3xl">{game.icon}</span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary">{game.genre}</p>
              <h2 className="mt-1 text-lg font-bold text-foreground">{game.title}</h2>
              <p className="mt-2 flex-1 text-sm text-muted">{game.tagline}</p>
              <Link
                href={`/game/${game.slug}`}
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Play →
              </Link>
            </Card>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-10 border-t border-border pt-12">
          <div>
            <SeoHeading id="what-are-typing-games">What Are Typing Games?</SeoHeading>
            <p className="mt-3 leading-relaxed text-muted">
              Typing games wrap a real typing test inside a game format — racing, shooting,
              survival, falling words — so the pressure to type quickly and accurately comes from
              game mechanics instead of a plain countdown timer. The skill being trained is
              identical to a standard typing test; the framing is just more engaging.
            </p>
          </div>

          <div>
            <SeoHeading id="available-games">Available Games</SeoHeading>
            <div className="mt-4">
              <DataTable
                headers={["Game", "Style", "Skill Trained"]}
                rows={games.map((g) => [g.title, g.description, g.genre])}
              />
            </div>
          </div>

          <Callout icon="🎮" title="Same scoring underneath" tone="accent">
            Every game reports the same WPM and accuracy metrics as a standard test — the arcade
            wrapper changes how it feels, not how it&apos;s measured.
          </Callout>

          <div>
            <SeoHeading id="games-faq">Frequently Asked Questions</SeoHeading>
            <div className="mt-4">
              <SeoFaqBlock items={faqItems} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
