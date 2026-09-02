import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Slovenian Typing Test · Slovenščina | WPM & Accuracy",
  seoDescription:
    "Take a free Slovenian typing test and check WPM and accuracy. Practice č, š, ž, the Slovenian QWERTZ keyboard, and real Slovenian text.",
  researchedKeywords: [
    "Slovenian typing speed test",
    "Slovenian WPM test",
    "Slovenian keyboard test",
    "test hitrosti tipkanja",
    "vaje za tipkanje",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Slovenian uses the Latin alphabet with just three added letters — č, š, and ž — making it visually simpler than many of its Slavic neighbors, but the QWERTZ keyboard layout and Slovenian's grammatical case system still shape typing rhythm in ways that differ from English.",
        "This test measures how quickly and accurately you can type real Slovenian sentences, including its three accented consonants and correct keyboard layout.",
      ],
    },

    { type: "heading", text: "Č, Š, and Ž Are Full Alphabet Letters", id: "carons" },
    {
      type: "paragraph",
      text: "Slovenian's alphabet adds č, š, and ž — each carrying a caron — to the base Latin set. These are not decorative variants of c, s, and z; they represent distinct sounds and changing one for the other alters the word. Common words such as čas (time), šola (school), and žena (woman) are useful for building the habit of reaching for the accented form automatically rather than falling back to the plain consonant.",
    },

    { type: "heading", text: "Slovenian Uses a QWERTZ Keyboard", id: "keyboard" },
    {
      type: "paragraph",
      text: "The standard Slovenian keyboard layout belongs to the QWERTZ family, sharing the Y/Z swap found in German and several other Central European layouts, along with dedicated keys for č, š, and ž. Typists who move frequently between an English QWERTY layout and Slovenian QWERTZ can develop Y/Z slip-ups even after years of practice — this is a muscle-memory collision between two layouts, not a language weakness, and confirming the active input language before a timed test helps avoid it.",
    },

    { type: "heading", text: "Capital Accented Letters Keep Their Marks", id: "capitals" },
    {
      type: "paragraph",
      text: "Uppercase Č, Š, and Ž are used in names, headings, and sentence beginnings exactly like their lowercase counterparts, and should never be simplified to plain C, S, or Z just because the capital form takes an extra keystroke. Practicing proper names and headings, not just lowercase prose, helps keep this instinct sharp under time pressure.",
    },

    { type: "heading", text: "Slovenian Case Endings Affect Word Length", id: "case-endings" },
    {
      type: "paragraph",
      text: "Slovenian is a heavily inflected language, marking grammatical case, number (including a distinct dual form for exactly two items), and gender through word endings. This produces longer, more varied word forms than English, so reading the stem and ending as one unit — rather than typing letter by letter — becomes an important skill as passages get longer.",
    },

    { type: "heading", text: "What Is a Good Slovenian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Slovenian typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Which special letters does Slovenian use?",
          answer:
            "Slovenian adds č, š, and ž to the standard Latin alphabet. They are distinct letters, not optional accents, and changing them alters the word.",
        },
        {
          question: "Does Slovenian use QWERTY or QWERTZ?",
          answer:
            "The standard Slovenian keyboard layout is QWERTZ, which swaps the Y and Z positions found on a US QWERTY keyboard and adds dedicated keys for č, š, and ž.",
        },
        {
          question: "Why do Slovenian words look long sometimes?",
          answer:
            "Slovenian marks grammatical case, number, and gender through word endings, including a distinct dual form for exactly two of something, which naturally produces longer inflected forms than English.",
        },
        {
          question: "What is a good Slovenian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Izberite svoj čas, začnite tipkati in takoj poglejte svojo hitrost ter natančnost.",
    },
  ],
};

export default content;
