import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free French Typing Test · Français | WPM & Accuracy",
  seoDescription:
    "Take a free French typing test and check WPM and accuracy. Practice the AZERTY keyboard, accents, cedilla, and real Français text.",
  researchedKeywords: [
    "French typing speed test",
    "French WPM test",
    "French keyboard test",
    "test de vitesse de frappe",
    "exercices de dactylographie",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "French typists in France use the AZERTY keyboard, which swaps several key positions compared to the QWERTY layout most English typists know — most notably A and Q, and Z and W — while also relocating numbers behind a Shift key on many French AZERTY keyboards. That layout difference, combined with French's dense accent system, makes French typing a genuinely different physical and visual task.",
        "This test measures how quickly and accurately you can type real French sentences, including its full range of accented letters.",
      ],
    },

    { type: "heading", text: "AZERTY Swaps Key Letter Positions", id: "azerty-layout" },
    {
      type: "paragraph",
      text: "The standard French AZERTY layout moves A to where Q sits on QWERTY, Q to where A sits, and swaps Z and W as well, along with relocating M to the right of L rather than next to N. Typists switching between an English QWERTY keyboard and French AZERTY commonly make letter-position slips even after years of practice on both — this reflects a genuine muscle-memory collision between two layouts, not weak French skill, and confirming the active layout before a timed test helps rule it out as an error source.",
    },

    { type: "heading", text: "Five Accent Types Carry Real Meaning", id: "accent-types" },
    {
      type: "paragraph",
      text: "French uses the acute accent (é), grave accent (è, à, ù), circumflex (â, ê, î, ô, û), diaeresis (ë, ï, ü), and cedilla (ç), and these frequently distinguish otherwise identical-looking words: où (where) versus ou (or), à (to/at) versus a (has, from avoir). Dropping an accent is rarely just cosmetic — it's a real spelling error that can genuinely change grammatical meaning.",
    },

    { type: "heading", text: "Numbers Require Shift on Many French Keyboards", id: "number-row-shift" },
    {
      type: "paragraph",
      text: "On the traditional French AZERTY layout, the number row's primary characters are often accented letters and symbols, with digits accessed by holding Shift — the reverse of the QWERTY convention where digits are the primary keys. This trips up typists moving between layouts far more often than the letter swaps do, since numbers appear less frequently in ordinary prose but create real friction whenever they do.",
    },

    { type: "heading", text: "Ligatures Œ and Æ in Formal Writing", id: "ligatures" },
    {
      type: "paragraph",
      text: "Formal and edited French text uses the œ ligature in words like œuf (egg) and cœur (heart), and occasionally æ in borrowed Latin terms, as required correct spelling rather than an optional typographic flourish. Many casual typists substitute plain 'oe' due to keyboard convenience, but a source that uses the proper ligature should be reproduced exactly.",
    },

    { type: "heading", text: "What Is a Good French Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for French typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is AZERTY?",
          answer:
            "The standard French keyboard layout, which swaps several key positions compared to QWERTY — most notably A/Q and Z/W — and often requires Shift to type numbers.",
        },
        {
          question: "Do French accents really change meaning?",
          answer:
            "Yes, frequently. Pairs like où (where) and ou (or), or à (to/at) and a (has), differ only by an accent, and dropping it is a genuine grammatical error, not a cosmetic one.",
        },
        {
          question: "Do I need to type œ as a special character?",
          answer:
            "In formal, correctly edited French text, yes — œ is the required spelling in words like œuf and cœur, not an optional stylistic ligature.",
        },
        {
          question: "What is a good French typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Choisissez votre temps, commencez à taper et découvrez immédiatement votre vitesse et votre précision.",
    },
  ],
};

export default content;
