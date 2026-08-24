import { getLanguage } from "@/data/languages";

export const navLinks = [
  { label: "Tests", href: "/typing-test-languages" },
  { label: "Practice", href: "/typing-practice-hub" },
  { label: "Custom", href: "/custom-typing-test" },
  { label: "Stories", href: "/aesop-fables-typing-test" },
  { label: "Poetry", href: "/poetry-typing-test" },
  { label: "Lyrics", href: "/song-lyrics-typing-test" },
  { label: "Games", href: "/typing-games" },
  { label: "Exam", href: "/government-exam-typing-test" },
  { label: "Extension", href: "/typing-test-extension" },
  { label: "Blog", href: "/blog" },
];

const popularCodes = ["en", "bn", "hi", "ar"];

export const footerLinks = {
  Product: [
    { label: "Tests", href: "/typing-test-languages" },
    { label: "Practice Hub", href: "/typing-practice-hub" },
    { label: "Custom Typing Test", href: "/custom-typing-test" },
    { label: "Blog", href: "/blog" },
  ],
  Modes: [
    { label: "Stories", href: "/aesop-fables-typing-test" },
    { label: "Poetry", href: "/poetry-typing-test" },
    { label: "Lyrics", href: "/song-lyrics-typing-test" },
    { label: "Arcade Games", href: "/typing-games" },
    { label: "Exam Hall", href: "/government-exam-typing-test" },
  ],
  Company: [
    { label: "About", href: "/about-typing-speed" },
    { label: "Browser Extension", href: "/typing-test-extension" },
  ],
  Popular: popularCodes.map((code) => {
    const lang = getLanguage(code)!;
    return { label: `${lang.name} Typing Test`, href: `/test/${lang.testSlug}` };
  }),
};
