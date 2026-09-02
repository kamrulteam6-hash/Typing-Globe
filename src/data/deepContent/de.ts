import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free German Typing Test · Deutsch | WPM & Accuracy",
  seoDescription:
    "Take a free German typing test and check WPM and accuracy. Practice ä ö ü ß, noun capitalization, the QWERTZ keyboard, and real Deutsch text.",
  researchedKeywords: [
    "German typing speed test",
    "German WPM test",
    "German keyboard test",
    "Schreibgeschwindigkeitstest",
    "Tippübungen Deutsch",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "German requires capitalizing every noun mid-sentence, not just proper names — a rule unique among major world languages — and adds three umlauted vowels plus ß (eszett), a letter that genuinely distinguishes word meaning rather than serving as a stylistic variant of 'ss'.",
        "This test measures how quickly and accurately you can type real German sentences, including its capitalization rules and full accented-letter set.",
      ],
    },

    { type: "heading", text: "Every Noun Is Capitalized", id: "noun-capitalization" },
    {
      type: "paragraph",
      text: "Unlike English, German capitalizes every common noun regardless of its position in the sentence — der Tisch (the table), die Stadt (the city) — which means Shift-key usage happens far more often in ordinary German prose than in most other Latin-script languages. This is a defining feature of standard German orthography, not a stylistic choice, and a typing test should score it exactly.",
    },

    { type: "heading", text: "SS Is Not the Same as 'ss'", id: "eszett" },
    {
      type: "paragraph",
      text: "SS (eszett or scharfes S) genuinely distinguishes words from their 'ss' counterparts in standard German spelling — Maße (measurements) versus Masse (mass) is the textbook example. Switzerland notably doesn't use ß at all in its German-language writing, substituting 'ss' throughout, so which convention is correct depends on the regional standard your source follows, and a typing test should reproduce the source exactly rather than normalizing to one convention.",
    },

    { type: "heading", text: "Three Umlauted Vowels: Ä, Ö, Ü", id: "umlauts" },
    {
      type: "paragraph",
      text: "Ä, ö, and ü represent genuinely distinct vowel sounds from a, o, and u, and dropping the umlaut changes the word — schon (already) versus schön (beautiful) is a common example. When ä, ö, ü aren't available, standard German fallback spelling replaces them with ae, oe, ue (and ß with ss), but this is a documented substitution convention for constrained input, not the preferred or default spelling.",
    },

    { type: "heading", text: "The German QWERTZ Keyboard", id: "keyboard" },
    {
      type: "paragraph",
      text: "The standard German keyboard layout is QWERTZ, swapping the Y and Z positions found on a US QWERTY layout, and provides dedicated keys for ä, ö, ü, and ß. Typists moving between English QWERTY and German QWERTZ often make Y/Z slip-ups even with substantial experience in both — this is a muscle-memory collision between layouts, not a language weakness.",
    },

    { type: "heading", text: "What Is a Good German Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for German typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Why are so many words capitalized in German?",
          answer:
            "German capitalizes every common noun, not just proper names, regardless of its position in the sentence. This is standard German orthography, not a stylistic choice.",
        },
        {
          question: "Is ß the same as writing 'ss'?",
          answer:
            "No, in standard German they can distinguish different words, such as Maße versus Masse. Switzerland doesn't use ß at all, substituting 'ss' throughout, so correct usage depends on the regional standard.",
        },
        {
          question: "Does German use QWERTY or QWERTZ?",
          answer:
            "QWERTZ, which swaps the Y and Z positions found on a US QWERTY layout and provides dedicated keys for ä, ö, ü, and ß.",
        },
        {
          question: "What is a good German typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Wähle deine Zeit, beginne zu tippen und sieh sofort deine Geschwindigkeit und Genauigkeit.",
    },
  ],
};

export default content;
