import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Uzbek Typing Test · Oʻzbekcha | WPM & Accuracy",
  seoDescription:
    "Take a free Uzbek typing test and check WPM and accuracy. Practice the Latin Uzbek alphabet, oʻ and gʻ letters, apostrophe usage, and real Uzbek text.",
  researchedKeywords: [
    "Uzbek typing speed test",
    "Uzbek WPM test",
    "Uzbek keyboard test",
    "oʻzbek tilida yozish tezligi testi",
    "klaviaturada yozish mashqi",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Modern Uzbek is officially written in a Latin-based alphabet, though a Cyrillic version remains in wide practical use across Uzbekistan, and the two are not always interchangeable in a given source. The Latin alphabet's defining challenge for typists is a pair of letters — oʻ and gʻ — that use a special apostrophe-like modifier rather than an ordinary accent mark.",
        "This test measures how quickly and accurately you can type real Uzbek text in the Latin alphabet, including its distinctive modified letters.",
      ],
    },

    { type: "heading", text: "Oʻ and Gʻ Use a Special Modifier Character", id: "special-letters" },
    {
      type: "paragraph",
      text: "The Latin Uzbek alphabet includes oʻ and gʻ as distinct letters, each formed by combining an ordinary o or g with a special modifier that looks like a turned comma or apostrophe — technically distinct from a plain typewriter apostrophe ('). Because many keyboards and fonts substitute a regular apostrophe for this modifier, sources vary in which exact character they use, and a typing test should reproduce whichever character the source actually shows rather than silently normalizing it.",
    },

    { type: "heading", text: "Distinguishing the Modifier from an Ordinary Apostrophe", id: "modifier-vs-apostrophe" },
    {
      type: "paragraph",
      text: "Uzbek also uses a genuine apostrophe separately, for the glottal stop written after certain vowels, as in mashina vs. sanʼat (art). That means a single passage can contain two visually similar but functionally different marks: the letter-forming modifier in oʻ and gʻ, and the punctuation-like glottal-stop apostrophe. Typing practice should treat these as distinct targets, matching the exact character the source uses rather than treating all apostrophe-like marks as interchangeable.",
    },

    { type: "heading", text: "Latin vs. Cyrillic Uzbek Are Different Typing Tasks", id: "latin-vs-cyrillic" },
    {
      type: "paragraph",
      text: "Uzbekistan officially adopted the Latin alphabet, but Cyrillic Uzbek remains common in everyday use, older documents, and some media. The two use entirely different keyboard layouts and character sets, so a Latin Uzbek typing benchmark and a Cyrillic Uzbek one measure genuinely different skills — keep practice and progress tracking within one script rather than mixing them.",
    },

    { type: "heading", text: "Standard QWERTY Covers Most Uzbek Latin Text", id: "keyboard" },
    {
      type: "paragraph",
      text: "Outside of oʻ, gʻ, and the occasional glottal-stop apostrophe, Uzbek's Latin alphabet uses ordinary unmodified Latin letters, so a standard QWERTY keyboard handles most of the text directly. The main typing skill is therefore not reaching unfamiliar keys but reliably producing the correct modifier character for oʻ and gʻ rather than falling back to a plain o or g.",
    },

    { type: "heading", text: "What Is a Good Uzbek Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Uzbek typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What are oʻ and gʻ in Uzbek?",
          answer:
            "They are distinct letters in the Latin Uzbek alphabet, formed by combining o or g with a special turned-comma modifier — not the same character as a plain typewriter apostrophe, even though many keyboards substitute one for the other.",
        },
        {
          question: "Is Uzbek written in Latin or Cyrillic?",
          answer:
            "Officially Latin, but Cyrillic Uzbek remains in wide everyday use. They use different keyboard layouts and character sets, so treat them as separate typing tasks.",
        },
        {
          question: "Does Uzbek Latin need a special keyboard?",
          answer:
            "Mostly no — standard QWERTY covers ordinary Latin letters. The main challenge is correctly producing the modifier character in oʻ and gʻ rather than a plain apostrophe.",
        },
        {
          question: "What is a good Uzbek typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Vaqtingizni tanlang, yozishni boshlang va tezligingiz bilan aniqligingizni darhol ko'ring.",
    },
  ],
};

export default content;
