"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Lyric, getLyricWordCount } from "@/data/lyrics";

const difficultyTone: Record<string, string> = {
  easy: "text-primary",
  medium: "text-gold",
  hard: "text-danger",
};

export function LyricBrowser({ lyrics }: { lyrics: Lyric[] }) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("all");
  const [genre, setGenre] = useState("all");

  const genres = useMemo(() => Array.from(new Set(lyrics.map((l) => l.genre))).sort(), [lyrics]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lyrics.filter((l) => {
      const matchesQuery = !q || l.title.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q);
      const matchesDifficulty = difficulty === "all" || l.difficulty === difficulty;
      const matchesGenre = genre === "all" || l.genre === genre;
      return matchesQuery && matchesDifficulty && matchesGenre;
    });
  }, [lyrics, query, difficulty, genre]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${lyrics.length} tracks…`}
          className="w-full max-w-sm rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 focus:border-primary/50 focus:outline-none"
        />
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground focus:border-primary/50 focus:outline-none"
        >
          <option value="all">All genres</option>
          {genres.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
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
          Showing {filtered.length} of {lyrics.length} tracks
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((lyric) => (
          <Link
            key={lyric.slug}
            href={`/${lyric.slug}`}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-foreground">{lyric.title}</h3>
              <span className={`text-[11px] font-semibold uppercase tracking-wide ${difficultyTone[lyric.difficulty]}`}>
                {lyric.difficulty}
              </span>
            </div>
            <p className="mt-1 text-xs font-semibold text-accent">{lyric.genre}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{lyric.summary}</p>
            <p className="mt-4 text-xs text-muted-2">{getLyricWordCount(lyric)} words · English</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted">No tracks match &ldquo;{query}&rdquo;.</p>
      )}
    </div>
  );
}
