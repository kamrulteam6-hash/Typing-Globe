/** Same lowercase-kebab-case pattern used by stories.ts/poems.ts, without their fixed suffix. */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const WORDS_PER_MINUTE = 200;

/** Strips HTML tags and estimates reading time from plain-text word count. */
export function estimateReadingTime(contentHtml: string): number {
  const text = contentHtml.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

export function formatPostDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
