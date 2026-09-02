import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Romanian Typing Test · Română | WPM & Accuracy",
  seoDescription:
    "Take a free Romanian typing test and check WPM and accuracy. Practice ă, â, î, ș, ț, the Romanian keyboard, and real Română text.",
  researchedKeywords: [
    "Romanian typing speed test",
    "Romanian WPM test",
    "Romanian keyboard test",
    "test de viteză la scris",
    "exerciții de dactilografiere",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Romanian adds five diacritic letters to the Latin alphabet — ă, â, î, ș, and ț — and one persistent source of error across Romanian digital text is the confusion between the correctly cedilla-marked ș/ț and the incorrectly comma-marked ş/ţ that many older fonts and keyboards produced instead.",
        "This test measures how quickly and accurately you can type real Romanian sentences, including its full set of correctly formed diacritic letters.",
      ],
    },

    { type: "heading", text: "Five Romanian Diacritic Letters", id: "diacritics" },
    {
      type: "paragraph",
      text: "Romanian uses ă (a breve), â and î (both representing the same central vowel sound, with â used mid-word and î used word-initially or word-finally, per the 1993 Romanian Academy spelling rules), ș (s with comma below), and ț (t with comma below). Each is a distinct letter — not a stylistic accent — and dropping one changes the word, as in mână (hand) versus mana, or țară (country) versus tara.",
    },

    { type: "heading", text: "Ș/Ț vs. Ş/Ţ: A Real Typographic Problem", id: "comma-vs-cedilla" },
    {
      type: "paragraph",
      text: "The correct Romanian letters ș and ț carry a comma below the base letter, but for years many fonts, older Windows versions, and non-Romanian keyboards substituted the visually similar ş and ţ, which carry a cedilla — the same mark used in French ç — instead of a comma. The two pairs can look nearly identical depending on the font, but they are technically different Unicode characters, and modern Romanian text should consistently use the comma-below forms.",
    },

    { type: "heading", text: "Â and Î Follow a Positional Spelling Rule", id: "a-i-circumflex" },
    {
      type: "paragraph",
      text: "Even though â and î represent the same sound, Romanian orthography specifies which one to use based on position in the word: â in the middle of a word, î at the beginning or end. This is a real spelling rule rather than a free choice, and typing tests should follow the source exactly — practicing pairs such as român (Romanian) and a începe (to begin) helps build the habit of choosing the right letter automatically.",
    },

    { type: "heading", text: "The Romanian Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows provides a dedicated Romanian keyboard layout with direct access to ă, â, î, ș, and ț, avoiding the need for Alt codes or copy-paste for everyday typing. Confirming that the correct, modern Romanian layout is active — rather than an older one that may still produce cedilla-based ş/ţ — helps ensure your typed text uses the currently correct comma-below characters.",
    },

    { type: "heading", text: "What Is a Good Romanian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Romanian typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is the difference between ș and ş?",
          answer:
            "Ș carries a comma below the letter and is the currently correct Romanian character. Ş carries a cedilla, the same mark used in French ç, and was a common substitute in older fonts — the two are technically different Unicode characters.",
        },
        {
          question: "When should I use â versus î?",
          answer:
            "Romanian orthography specifies â for the middle of a word and î for the beginning or end, even though both represent the same vowel sound. This is a fixed spelling rule, not a free choice.",
        },
        {
          question: "Does Romanian need a special keyboard?",
          answer:
            "Yes, for efficient typing. Windows provides a dedicated Romanian keyboard layout with direct access to ă, â, î, ș, and ț.",
        },
        {
          question: "What is a good Romanian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Alege-ți timpul, începe să scrii și vezi-ți imediat viteza și acuratețea.",
    },
  ],
};

export default content;
