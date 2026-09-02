"use client";

import { useState } from "react";
import type { Editor } from "@tiptap/react";
import { languages } from "@/data/languages";
import { games } from "@/data/games";
import type { PromoVariant } from "./tiptap/promoCard";

const VARIANTS: { key: PromoVariant; label: string }[] = [
  { key: "test", label: "Test" },
  { key: "practice", label: "Practice" },
  { key: "game", label: "Game" },
  { key: "course", label: "Course" },
];

export function PromoPicker({ editor, onClose }: { editor: Editor | null; onClose: () => void }) {
  const [variant, setVariant] = useState<PromoVariant>("test");
  const [langCode, setLangCode] = useState(languages[0]?.code ?? "en");
  const [gameSlug, setGameSlug] = useState(games[0]?.slug ?? "");

  if (!editor) return null;

  const insert = () => {
    let attrs: { variant: PromoVariant; href: string; label: string; icon: string };

    if (variant === "test") {
      const lang = languages.find((l) => l.code === langCode) ?? languages[0];
      attrs = { variant, href: `/test/${lang.testSlug}`, label: `${lang.name} Typing Test`, icon: "⌨️" };
    } else if (variant === "practice") {
      const lang = languages.find((l) => l.code === langCode) ?? languages[0];
      attrs = { variant, href: `/p/${lang.practiceSlug}`, label: `Practice ${lang.name} Typing`, icon: "📝" };
    } else if (variant === "game") {
      const game = games.find((g) => g.slug === gameSlug) ?? games[0];
      attrs = { variant, href: `/game/${game.slug}`, label: `Play ${game.title}`, icon: game.icon };
    } else {
      attrs = { variant, href: "/english-typing-course", label: "Start the 30-Day Typing Course", icon: "📅" };
    }

    editor.chain().focus().insertPromoCard(attrs).run();
    onClose();
  };

  return (
    <div className="space-y-3 border-b border-border bg-surface-2 p-3">
      <div className="flex flex-wrap gap-1">
        {VARIANTS.map((v) => (
          <button
            key={v.key}
            type="button"
            onClick={() => setVariant(v.key)}
            className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors ${
              variant === v.key ? "bg-primary text-primary-foreground" : "text-muted hover:bg-surface hover:text-foreground"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      {(variant === "test" || variant === "practice") && (
        <select
          value={langCode}
          onChange={(e) => setLangCode(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-primary/50"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      )}

      {variant === "game" && (
        <select
          value={gameSlug}
          onChange={(e) => setGameSlug(e.target.value)}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-primary/50"
        >
          {games.map((game) => (
            <option key={game.slug} value={game.slug}>
              {game.title}
            </option>
          ))}
        </select>
      )}

      <div className="flex gap-2">
        <button
          type="button"
          onClick={insert}
          className="rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
        >
          Insert Promo Card
        </button>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-muted hover:text-foreground"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
