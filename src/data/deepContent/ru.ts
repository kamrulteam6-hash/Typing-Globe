import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Russian Typing Test · Русский | WPM & Accuracy",
  seoDescription:
    "Take a free Russian typing test and check WPM and accuracy. Practice the JCUKEN keyboard, hard and soft signs, and real Russian text.",
  researchedKeywords: [
    "Russian typing speed test",
    "Russian WPM test",
    "Russian keyboard test",
    "тест скорости печати",
    "упражнения по печати",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Russian is written in a 33-letter Cyrillic alphabet on the JCUKEN keyboard layout — named for the first six letters on its top row, the Cyrillic equivalent of how QWERTY is named. Two of those letters, the hard sign and soft sign, don't represent sounds at all; they modify the pronunciation of the consonant before them, which is a genuinely unusual concept for typists coming from purely alphabetic backgrounds.",
        "This test measures how quickly and accurately you can type real Russian text on the standard JCUKEN keyboard.",
      ],
    },

    { type: "heading", text: "The JCUKEN Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "JCUKEN is the standard Russian keyboard layout, arranging the 33 Cyrillic letters across the keys in a pattern completely unrelated to QWERTY's letter positions. Building genuine muscle memory for JCUKEN — rather than visually hunting for each letter — takes deliberate, sustained practice, especially for typists who already have strong QWERTY habits from English or other Latin-script typing.",
    },

    { type: "heading", text: "Hard Sign and Soft Sign Don't Represent Sounds", id: "hard-soft-signs" },
    {
      type: "paragraph",
      text: "Ъ (hard sign) and ь (soft sign) are real letters in correct Russian spelling, but neither represents a spoken sound on its own — instead, each modifies how the preceding consonant is pronounced. Дом (house) versus дьте and similar minimal pairs show that omitting a soft sign, in particular, is a genuine spelling error that changes the word, not a cosmetic simplification.",
    },

    { type: "heading", text: "Ё Is Often Replaced with Е in Casual Writing", id: "yo-letter" },
    {
      type: "paragraph",
      text: "Ё is technically its own letter, distinct from е, but Russian speakers very commonly substitute plain е for ё in everyday informal writing, relying on context to supply the correct pronunciation — this is a widespread, accepted practice rather than a typing error in casual contexts, though formal and educational text more often preserves ё explicitly. A typing test should reproduce whichever form the actual source passage uses.",
    },

    { type: "heading", text: "Long Prefixed and Suffixed Word Forms", id: "morphology" },
    {
      type: "paragraph",
      text: "Russian builds many words through combinations of prefixes and suffixes attached to a root, producing forms that can look long and unfamiliar to a beginner but follow consistent, learnable patterns once the root-plus-affix structure becomes recognizable. Reading the stem rather than typing letter by letter speeds up accurate transcription of longer Russian vocabulary.",
    },

    { type: "heading", text: "What Is a Good Russian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Russian typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is JCUKEN?",
          answer:
            "The standard Russian keyboard layout, named for the first letters on its top row, arranging the 33 Cyrillic letters in a pattern unrelated to QWERTY.",
        },
        {
          question: "What do the hard sign and soft sign do?",
          answer:
            "Ъ and ь don't represent spoken sounds themselves — they modify the pronunciation of the preceding consonant. They're real, required letters in correct spelling, not decorative marks.",
        },
        {
          question: "Is it okay to type е instead of ё?",
          answer:
            "It's very common and accepted in casual everyday Russian writing, though formal text more often preserves ё explicitly. Reproduce whichever form the actual source uses.",
        },
        {
          question: "What is a good Russian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Выберите своё время, начните печатать и сразу увидите свою скорость и точность.",
    },
  ],
};

export default content;
