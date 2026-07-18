"use client";

import { useEffect, useState } from "react";
import { TypingTest } from "@/components/TypingTest";

export type TeaserItem = {
  slug: string;
  title: string;
  text: string;
  theme?: "default" | "poetry";
  poemMeta?: { title: string; author: string; year: string };
};

export function RandomTypingTeaser({
  items,
  itemLabel,
}: {
  items: TeaserItem[];
  itemLabel: string;
}) {
  // Picked client-side after mount (not during the initial render) so the server-rendered
  // HTML and the first client render match exactly — same hydration-safety pattern used
  // by TypingTest's own sample-text picker.
  const [pick, setPick] = useState<TeaserItem | null>(null);

  const shuffle = () => {
    if (items.length === 0) return;
    const next = items[Math.floor(Math.random() * items.length)];
    setPick(next);
  };

  useEffect(() => {
    // Picking a random item is only safe once mounted on the client (see comment above);
    // this is the documented exception to the "no setState in effect" rule.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    shuffle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!pick) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-muted-2">
        Loading a random {itemLabel}…
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-muted">
          Trying: <span className="font-semibold text-foreground">{pick.title}</span>
        </p>
        <button
          onClick={shuffle}
          className="rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-muted hover:border-primary/40 hover:text-primary"
        >
          🔀 Try Another {itemLabel}
        </button>
      </div>
      <TypingTest
        key={pick.slug}
        customText={pick.text}
        mode="practice"
        contentLabel={pick.title}
        theme={pick.theme}
        poemMeta={pick.poemMeta}
      />
    </div>
  );
}
