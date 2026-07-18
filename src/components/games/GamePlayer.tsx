"use client";

import { GameShell } from "./GameShell";
import { DashTypingGame } from "./DashTypingGame";
import { TypeBlasterGame } from "./TypeBlasterGame";
import { WordFallGame } from "./WordFallGame";

export function GamePlayer({ slug, title }: { slug: string; title: string }) {
  if (slug === "dash-typing-game") {
    return (
      <GameShell gameSlug={slug} title={title}>
        {(ctx) => <DashTypingGame {...ctx} />}
      </GameShell>
    );
  }
  if (slug === "type-blaster-typing-game") {
    return (
      <GameShell gameSlug={slug} title={title} hasLives>
        {(ctx) => <TypeBlasterGame {...ctx} />}
      </GameShell>
    );
  }
  if (slug === "word-fall-typing-game") {
    return (
      <GameShell gameSlug={slug} title={title} hasLives>
        {(ctx) => <WordFallGame {...ctx} />}
      </GameShell>
    );
  }
  return null;
}
