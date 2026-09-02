import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Spanish Typing Test · Español | WPM & Accuracy",
  seoDescription:
    "Take a free Spanish typing test and check WPM and accuracy. Practice ñ, accented vowels, inverted punctuation, and real Español text.",
  researchedKeywords: [
    "Spanish typing speed test",
    "Spanish WPM test",
    "Spanish keyboard test",
    "prueba de velocidad de escritura",
    "ejercicios de mecanografía",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Spanish typing looks deceptively close to English because both use the Latin alphabet, but ñ, five accented vowels, and Spanish's distinctive inverted opening punctuation marks (¿ and ¡) all require deliberate practice — and skipping them isn't a minor shortcut, since accents in Spanish frequently distinguish one word from another.",
        "This test measures how quickly and accurately you can type real Spanish sentences, including its accented letters and inverted punctuation.",
      ],
    },

    { type: "heading", text: "Ñ Is Its Own Letter, Not an Accented N", id: "n-tilde" },
    {
      type: "paragraph",
      text: "Ñ occupies its own place in the Spanish alphabet and represents a distinct sound from n, appearing in everyday words such as año (year), niño (child), and mañana (tomorrow/morning). Typing n instead of ñ isn't a stylistic shortcut — it produces a different word (año, year, versus ano, anus, is the classic cautionary example), which is exactly why exact-character accuracy matters here more than in many other Latin-script languages.",
    },

    { type: "heading", text: "Accents Can Change Grammar, Not Just Pronunciation", id: "accents" },
    {
      type: "paragraph",
      text: "Spanish accented vowels — á, é, í, ó, ú — frequently distinguish grammatical forms that would otherwise look identical: sí (yes) versus si (if), tú (you) versus tu (your), and é/está forms across many verb tenses that shift meaning based on the accent alone. Dropping an accent at speed is one of the most common Spanish typing errors, and it's rarely cosmetic — it usually changes the word's grammatical function.",
    },

    { type: "heading", text: "Inverted Question and Exclamation Marks", id: "inverted-punctuation" },
    {
      type: "paragraph",
      text: "Spanish opens questions and exclamations with an inverted mark — ¿ before a question, ¡ before an exclamation — in addition to the closing mark used in English. This is a genuine punctuation requirement in standard Spanish, not decorative, and a typing test measuring authentic Spanish should include and score these opening marks rather than only the closing ones.",
    },

    { type: "heading", text: "The Spanish Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows provides a dedicated Spanish keyboard layout with a direct key for ñ and accented vowels accessible through dead-key combinations, giving efficient access to the full character set without relying on Alt codes. Because Spanish is spoken across many countries with occasional regional keyboard variants, confirming which specific Spanish layout is active — and staying consistent with it — helps keep progress comparisons meaningful.",
    },

    { type: "heading", text: "What Is a Good Spanish Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Spanish typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Is ñ the same as n with an accent?",
          answer:
            "No. Ñ is its own distinct letter in the Spanish alphabet representing a different sound from n, and substituting one for the other produces a different word.",
        },
        {
          question: "Why do Spanish accents matter so much?",
          answer:
            "Spanish accented vowels often distinguish grammatical forms that otherwise look identical, such as sí (yes) versus si (if) or tú (you) versus tu (your). Dropping an accent usually changes meaning, not just spelling style.",
        },
        {
          question: "Do Spanish questions really start with an upside-down mark?",
          answer:
            "Yes — ¿ opens a question and ¡ opens an exclamation, in addition to the standard closing marks. This is standard Spanish punctuation, not an optional flourish.",
        },
        {
          question: "What is a good Spanish typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Elige tu tiempo, empieza a escribir y ve tu velocidad y precisión al instante.",
    },
  ],
};

export default content;
