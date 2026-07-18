"use client";

import { useState } from "react";
import Link from "next/link";
import { Language } from "@/data/languages";
import { Flag } from "@/components/ui/Flag";

export function LanguageCard({ lang }: { lang: Language }) {
  const [saved, setSaved] = useState(false);

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <Flag lang={lang} className="h-6 w-8 text-2xl leading-none" />
          <div>
            <h3 className="text-sm font-semibold text-foreground">{lang.name}</h3>
            <p className="text-xs text-muted-2">{lang.nativeName}</p>
          </div>
        </div>
        <span className="whitespace-nowrap rounded-full border border-border bg-surface-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
          {lang.region}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <Link
          href={`/test/${lang.testSlug}`}
          className="flex-1 rounded-lg bg-primary py-2 text-center text-xs font-semibold text-primary-foreground transition-all hover:brightness-110"
        >
          Start Test
        </Link>
        <button
          onClick={() => setSaved((v) => !v)}
          aria-label="Bookmark language"
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
            saved ? "border-primary/40 bg-primary/10 text-primary" : "border-border text-muted hover:text-foreground"
          }`}
        >
          {saved ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
}
