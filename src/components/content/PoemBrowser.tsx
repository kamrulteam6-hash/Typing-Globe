"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Poem, getPoemWordCount } from "@/data/poems";

const difficultyTone: Record<string, string> = {
  easy: "text-primary",
  medium: "text-gold",
  hard: "text-danger",
};

export function PoemBrowser({ poems }: { poems: Poem[] }) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return poems.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q);
      const matchesDifficulty = difficulty === "all" || p.difficulty === difficulty;
      return matchesQuery && matchesDifficulty;
    });
  }, [poems, query, difficulty]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${poems.length} poems by title or poet…`}
          className="w-full max-w-sm rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 focus:border-primary/50 focus:outline-none"
        />
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground focus:border-primary/50 focus:outline-none"
        >
          <option value="all">All difficulties</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <span className="text-xs text-muted-2">
          Showing {filtered.length} of {poems.length} poems
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((poem) => (
          <Link
            key={poem.slug}
            href={`/${poem.slug}`}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-foreground">{poem.title}</h3>
              <span className={`text-[11px] font-semibold uppercase tracking-wide ${difficultyTone[poem.difficulty]}`}>
                {poem.difficulty}
              </span>
            </div>
            <p className="mt-1 text-xs italic text-muted-2">by {poem.author} · {poem.year}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{poem.summary}</p>
            <p className="mt-4 text-xs text-muted-2">{getPoemWordCount(poem)} words</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted">No poems match &ldquo;{query}&rdquo;.</p>
      )}
    </div>
  );
}
