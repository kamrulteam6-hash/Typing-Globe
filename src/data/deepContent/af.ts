import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Afrikaans Typing Test · Afrikaans | WPM & Accuracy",
  seoDescription:
    "Take a free Afrikaans typing test and check WPM and accuracy. Practice doubled vowels for length, circumflex letters, diaeresis, and real Afrikaans text.",
  researchedKeywords: [
    "Afrikaans typing speed test",
    "Afrikaans WPM test",
    "Afrikaans keyboard test",
    "tik-toets Afrikaans",
    "tikoefeninge Afrikaans",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Afrikaans developed from 17th-century Dutch and kept the same doubled-vowel spelling logic for showing sound length, while simplifying much of Dutch's grammar. It also uses a small set of circumflex letters — â, ê, î, ô, û — that don't appear the same way in modern Dutch, making Afrikaans spelling genuinely its own system rather than a simplified Dutch clone.",
        "This test measures how quickly and accurately you can type real Afrikaans sentences, including its vowel-length spelling and circumflex letters.",
      ],
    },

    { type: "heading", text: "Doubled Vowels Mark Long Sounds", id: "vowel-length" },
    {
      type: "paragraph",
      text: "Like its Dutch ancestor, Afrikaans doubles vowels — aa, ee, oo, uu — to mark a long sound in a closed syllable, with a single vowel marking the short version: raam (window) versus ram, or boom (tree) versus bom (bomb). This is a real, meaning-changing spelling rule, and it commonly shifts between singular and plural forms of the same word, so it's worth practicing rather than treating as a typo risk to shrug off.",
    },

    { type: "heading", text: "Circumflex Letters Show Vowel Contraction", id: "circumflex" },
    {
      type: "paragraph",
      text: "Afrikaans uses â, ê, î, ô, and û, typically where Dutch would use a different vowel combination, marking a contracted or altered vowel sound in words such as wêreld (world) and môre (tomorrow/morning). These are standard Afrikaans letters that regularly appear in everyday vocabulary, not rare or archaic spellings, and dropping the circumflex is a genuine spelling error.",
    },

    { type: "heading", text: "Diaeresis Marks a Separate Syllable", id: "diaeresis" },
    {
      type: "paragraph",
      text: "As in Dutch, Afrikaans uses a diaeresis to show that a vowel begins a new syllable rather than merging with the one before it, as in reën (rain) or beëindig (end/terminate). This mark is required by standard spelling and appears in common, everyday words, so it isn't an optional flourish to skip when typing quickly.",
    },

    { type: "heading", text: "No Special Keyboard Layout Is Strictly Required", id: "keyboard" },
    {
      type: "paragraph",
      text: "Afrikaans's accented and circumflex characters can be typed on a standard South African or international keyboard layout using dead-key combinations, or on a Dutch-style layout with similar diacritic support. What matters more than a specific hardware layout is having a reliable, consistent method for entering â, ê, î, ô, û, and diaeresis-marked vowels without breaking your typing rhythm.",
    },

    { type: "heading", text: "What Is a Good Afrikaans Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Afrikaans typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Why does Afrikaans double so many vowels?",
          answer:
            "Like Dutch, Afrikaans doubles vowels (aa, ee, oo, uu) to mark a long sound in a closed syllable. This is a real spelling rule that often shifts between singular and plural word forms.",
        },
        {
          question: "What do â, ê, î, ô, and û represent?",
          answer:
            "Circumflex-marked vowels showing a contracted or altered sound in words such as wêreld and môre. They are standard, common Afrikaans letters, not rare exceptions.",
        },
        {
          question: "Is Afrikaans typing the same as Dutch?",
          answer:
            "Similar in principle (both use doubled vowels for length and a diaeresis for syllable breaks), but Afrikaans developed its own vocabulary, simplified grammar, and specific circumflex letters, so it isn't identical.",
        },
        {
          question: "What is a good Afrikaans typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Kies jou tyd, begin tik en sien dadelik jou spoed en akkuraatheid.",
    },
  ],
};

export default content;
