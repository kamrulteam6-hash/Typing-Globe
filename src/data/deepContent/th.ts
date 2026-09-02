import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Thai Typing Test · ไทย | WPM & Accuracy",
  seoDescription:
    "Take a free Thai typing test and check WPM and accuracy. Practice Thai tone marks, stacked vowel signs, and the Kedmanee keyboard layout.",
  researchedKeywords: [
    "Thai typing speed test",
    "Thai WPM test",
    "Thai keyboard test",
    "Kedmanee keyboard typing",
    "แบบทดสอบพิมพ์ดีดภาษาไทย",
    "ความเร็วในการพิมพ์",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Thai is written in its own script with no spaces between most words, four tone marks that are real, meaningful characters, and vowel signs that can appear before, after, above, or below their consonant. That combination makes Thai typing a genuinely different visual and mechanical task from typing in a space-separated alphabetic language.",
        "This test measures how quickly and accurately you can type real Thai text, including tone marks and correctly positioned vowel signs.",
      ],
    },

    { type: "heading", text: "Thai Tone Marks Are Real Characters", id: "tone-marks" },
    {
      type: "paragraph",
      text: "Thai is a tonal language, and four tone marks — ่ (mai ek), ้ (mai tho), ๊ (mai tri), and ๋ (mai chattawa) — are encoded as distinct combining characters placed above a consonant. They are not optional decoration: omitting or misplacing one changes the written word, even if the base consonants are typed correctly.",
    },

    { type: "heading", text: "Vowel Signs Surround the Consonant", id: "vowel-signs" },
    {
      type: "paragraph",
      text: "Thai dependent vowel signs can appear before, after, above, or below their consonant, and some vowels are written with components on more than one side at once. The typing sequence follows the logical order defined by the keyboard, not the order the pieces appear visually — learning that input order, rather than trying to type what you see left to right, is central to typing Thai accurately.",
    },

    { type: "heading", text: "Thai Does Not Use Spaces Between Most Words", id: "no-word-spaces" },
    {
      type: "paragraph",
      text: "Unlike English, Thai does not normally place a space after every word — spaces are generally reserved for marking phrase or sentence boundaries. This means a typing test's word-per-minute score is best understood as a standardized character-output measure rather than a literal count of space-separated Thai words, and it's why a Thai passage should never have artificial spaces inserted just to make it look more like English.",
    },

    { type: "heading", text: "The Kedmanee Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "The Kedmanee layout is the standard Thai keyboard layout used on Windows and most Thai keyboards, mapping Thai consonants, vowel signs, and tone marks to fixed key positions, with a separate Pattachote layout also in occasional use. A Thai keyboard typically shows both Thai and Latin characters on each keycap, since switching between Thai and English input is a routine part of everyday Thai computer use.",
    },

    { type: "heading", text: "What Is a Good Thai Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Thai typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Are Thai tone marks optional?",
          answer:
            "No. The four Thai tone marks are real characters that change the written word. Omitting or misplacing one is a genuine spelling error, not a stylistic choice.",
        },
        {
          question: "Does Thai put spaces between every word?",
          answer:
            "No. Thai typically reserves spaces for marking phrase or sentence boundaries rather than separating every individual word, unlike English.",
        },
        {
          question: "What keyboard layout does Thai use?",
          answer:
            "The Kedmanee layout is the standard Thai keyboard used on Windows and most devices, with the Pattachote layout used less commonly as an alternative.",
        },
        {
          question: "What is a good Thai typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "เลือกเวลาของคุณ เริ่มพิมพ์ และดูความเร็วกับความแม่นยำของคุณได้ทันที",
    },
  ],
};

export default content;
