"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Story, getStoryWordCount } from "@/data/stories";

const difficultyTone: Record<string, string> = {
  easy: "text-primary",
  medium: "text-gold",
  hard: "text-danger",
};

export function StoryBrowser({ stories }: { stories: Story[] }) {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return stories.filter((s) => {
      const matchesQuery = !q || s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q);
      const matchesDifficulty = difficulty === "all" || s.difficulty === difficulty;
      return matchesQuery && matchesDifficulty;
    });
  }, [stories, query, difficulty]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search ${stories.length} stories…`}
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
          Showing {filtered.length} of {stories.length} stories
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {filtered.map((story) => (
          <Link
            key={story.slug}
            href={`/${story.slug}`}
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-foreground">{story.title}</h3>
              <span className={`text-[11px] font-semibold uppercase tracking-wide ${difficultyTone[story.difficulty]}`}>
                {story.difficulty}
              </span>
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{story.summary}</p>
            <p className="mt-4 text-xs text-muted-2">{getStoryWordCount(story)} words · English</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted">No stories match &ldquo;{query}&rdquo;.</p>
      )}
    </div>
  );
}
