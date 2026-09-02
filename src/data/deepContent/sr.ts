import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Serbian Typing Test · Српски | WPM & Accuracy",
  seoDescription:
    "Take a free Serbian typing test and check WPM and accuracy. Practice Serbian Cyrillic, the Latin/Cyrillic digraphia, and the Serbian keyboard.",
  researchedKeywords: [
    "Serbian typing speed test",
    "Serbian Cyrillic typing test",
    "Serbian WPM test",
    "Serbian keyboard test",
    "тест брзине куцања",
    "вежбе куцања",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Serbian is unusual among modern languages in that it is officially written in two distinct scripts — Cyrillic and Latin — with a genuinely one-to-one correspondence between them, meaning any Serbian text can be transliterated to the other script without ambiguity. Cyrillic remains the constitutionally designated script, while Latin sees heavy everyday use, especially online.",
        "This test measures how quickly and accurately you can type real Serbian text, in whichever script your passage uses.",
      ],
    },

    { type: "heading", text: "Serbian's Latin and Cyrillic Scripts Map One-to-One", id: "digraphia" },
    {
      type: "paragraph",
      text: "Unlike languages where transliteration is approximate, Serbian's Latin alphabet was specifically designed so every Cyrillic letter has exactly one Latin equivalent and vice versa — а/a, б/b, ђ/đ, and so on through the full alphabet. That precision means a Serbian typing test should treat Cyrillic and Latin as two genuinely different keyboard tasks rather than casually equivalent versions of the same text, since the physical keys and layout differ even though the underlying language does not.",
    },

    { type: "heading", text: "Serbian Cyrillic Has Letters Not Found in Russian", id: "cyrillic-letters" },
    {
      type: "paragraph",
      text: "Serbian Cyrillic includes letters absent from Russian and other Slavic Cyrillic alphabets, such as љ, њ, ћ, and џ, each representing a single sound that would otherwise require a digraph. A Russian-trained Cyrillic typist does not automatically have Serbian muscle memory, particularly for these additional letters, so practicing them inside real words — such as љубав (love), њива (field), ћирилица (Cyrillic), and џеп (pocket) — builds accuracy faster than treating Serbian Cyrillic as identical to Russian.",
    },

    { type: "heading", text: "Serbian Latin Digraphs Represent Single Sounds", id: "latin-digraphs" },
    {
      type: "paragraph",
      text: "In the Latin alphabet, the sounds represented by single Cyrillic letters љ, њ, and џ become the two-character digraphs lj, nj, and dž. These are meaningful spelling units, not accidental letter pairs, and should be typed and read as single sounds — dropping one character from lj or nj changes the word.",
    },

    { type: "heading", text: "Keeping One Script Consistent for Practice", id: "keyboard" },
    {
      type: "paragraph",
      text: "Because Serbian Cyrillic and Latin require different keyboard layouts, switching between them mid-practice will disrupt your typing rhythm and make progress harder to track. Choose the script you actually need — Cyrillic for formal, legal, or constitutionally mandated contexts, Latin for the script you'll likely encounter most in everyday digital text — and keep your benchmark consistent within that script.",
    },

    { type: "heading", text: "What Is a Good Serbian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Serbian typing speed in either script. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Does Serbian use Cyrillic or Latin?",
          answer:
            "Both, officially and equally. Cyrillic is the constitutionally designated script, while Latin sees very heavy everyday use, especially in digital communication.",
        },
        {
          question: "Are lj, nj, and dž separate letters?",
          answer:
            "In the Latin alphabet, yes — they function as single-sound digraphs corresponding to the Cyrillic letters љ, њ, and џ. Dropping one character from the pair changes the spelling.",
        },
        {
          question: "Is Serbian Cyrillic the same as Russian Cyrillic?",
          answer:
            "No. Serbian Cyrillic includes letters not found in Russian, such as љ, њ, ћ, and џ, so Russian typing fluency doesn't automatically transfer.",
        },
        {
          question: "What is a good Serbian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Изаберите своје време, почните да куцате и одмах погледајте своју брзину и тачност.",
    },
  ],
};

export default content;
