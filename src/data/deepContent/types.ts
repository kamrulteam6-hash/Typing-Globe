export type ContentBlock =
  | { type: "hero"; narrative: string[] }
  | { type: "heading"; text: string; id?: string }
  | { type: "subheading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; icon: string; title: string; text: string }
  | { type: "faq"; items: { question: string; answer: string }[] }
  | { type: "cta"; text: string };

export type LanguageDeepContent = {
  /** SEO title tag — should include native + English typing-test keywords. */
  seoTitle: string;
  /** Meta description — keyword-rich, human-readable, under ~160 chars ideally. */
  seoDescription: string;
  /** Extra keywords/phrases used to inform the content (not rendered, just documented). */
  researchedKeywords: string[];
  blocks: ContentBlock[];
};
