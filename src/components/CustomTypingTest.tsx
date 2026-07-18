"use client";

import { useState } from "react";
import { TypingTest } from "@/components/TypingTest";

export function CustomTypingTest() {
  const [draft, setDraft] = useState("");
  const [rtl, setRtl] = useState(false);
  const [activeText, setActiveText] = useState<string | null>(null);

  if (activeText) {
    return (
      <div>
        <button
          onClick={() => setActiveText(null)}
          className="mb-4 text-xs font-semibold text-muted hover:text-foreground"
        >
          ← Paste different text
        </button>
        <TypingTest customText={activeText} mode="test" rtl={rtl} />
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <label htmlFor="custom-text" className="text-sm font-semibold text-foreground">
        Paste or write your own practice text
      </label>
      <textarea
        id="custom-text"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        dir={rtl ? "rtl" : "ltr"}
        rows={8}
        placeholder="Paste a paragraph, a script, study notes — anything you want to practice typing."
        className="mt-3 w-full resize-none rounded-xl border border-border bg-surface-2 p-4 text-sm text-foreground placeholder:text-muted-2 focus:border-primary/50 focus:outline-none"
      />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <label className="flex items-center gap-2 text-xs text-muted">
          <input
            type="checkbox"
            checked={rtl}
            onChange={(e) => setRtl(e.target.checked)}
            className="h-3.5 w-3.5 accent-[var(--primary)]"
          />
          Right-to-left text (Arabic, Urdu, Hebrew…)
        </label>
        <span className="text-xs text-muted-2">{draft.trim().length} characters</span>
      </div>
      <button
        onClick={() => setActiveText(draft.trim())}
        disabled={draft.trim().length < 10}
        className="mt-5 w-full rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Start Typing Test
      </button>
    </div>
  );
}
