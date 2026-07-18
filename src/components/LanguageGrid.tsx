"use client";

import { useMemo, useState } from "react";
import { Language } from "@/data/languages";
import { LanguageCard } from "@/components/LanguageCard";

export function LanguageGrid({
  languages,
  showSearch = true,
}: {
  languages: Language[];
  showSearch?: boolean;
}) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return languages;
    const q = query.trim().toLowerCase();
    return languages.filter(
      (l) => l.name.toLowerCase().includes(q) || l.nativeName.toLowerCase().includes(q) || l.region.toLowerCase().includes(q)
    );
  }, [languages, query]);

  return (
    <div>
      {showSearch && (
        <div className="mb-6 flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search among 70 languages…"
            className="w-full max-w-sm rounded-lg border border-border bg-surface-2 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-2 focus:border-primary/50 focus:outline-none"
          />
          <span className="text-xs text-muted-2">
            Showing {filtered.length} of {languages.length} typing modules
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((lang) => (
          <LanguageCard key={lang.code} lang={lang} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted">No languages match &ldquo;{query}&rdquo;.</p>
      )}
    </div>
  );
}
