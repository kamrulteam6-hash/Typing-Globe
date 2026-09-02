import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Sindhi Typing Test · سنڌي | WPM & Accuracy",
  seoDescription:
    "Take a free Sindhi typing test and check WPM and accuracy. Practice Sindhi-specific implosive letters, right-to-left script, and the Sindhi keyboard.",
  researchedKeywords: [
    "Sindhi typing speed test",
    "Sindhi WPM test",
    "Sindhi keyboard test",
    "سنڌي ٽائپنگ ٽيسٽ",
    "سنڌي لکڻ جي رفتار",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Sindhi is written right to left in an extended Perso-Arabic script that adds a distinctive set of implosive consonant letters not found in Arabic, Persian, or Urdu. These extra letters make Sindhi's alphabet one of the largest among Perso-Arabic-based writing systems, and they are genuinely separate sounds — not stylistic variants of existing Arabic letters.",
        "This test measures how quickly and accurately you can type real Sindhi text, including its implosive consonants and correct right-to-left punctuation.",
      ],
    },

    { type: "heading", text: "Sindhi's Implosive Consonants Are Unique Letters", id: "implosive-consonants" },
    {
      type: "paragraph",
      text: "Sindhi adds a set of implosive consonants — sounds produced with an inward rather than outward airflow — represented by dedicated letters such as ڄ, ٻ, ڏ, ڳ, and ڱ. These are not decorative marks on ordinary Arabic letters; they are distinct characters representing sounds unique to Sindhi and closely related languages. Substituting a similar-looking standard Arabic letter changes the word and is a real spelling error, not a stylistic shortcut.",
    },

    { type: "heading", text: "Right-to-Left Text with Embedded Numbers", id: "rtl-numbers" },
    {
      type: "paragraph",
      text: "Like other Perso-Arabic scripts, Sindhi runs right to left while numerals and any embedded Latin text display left to right within the same line. This mixed-direction behavior, governed by the Unicode Bidirectional Algorithm, is normal and expected — a number appearing to interrupt the visual flow of a Sindhi sentence is not a typing mistake.",
    },

    { type: "heading", text: "The Sindhi Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "A dedicated Sindhi keyboard layout provides direct access to both the shared Perso-Arabic letters and Sindhi's additional implosive consonants, avoiding the need for Character Map or copy-paste workarounds. Confirming that the correct Sindhi input language is active before a timed test matters, since an Arabic or Urdu layout will not include Sindhi-specific letters in their expected positions.",
    },

    { type: "heading", text: "Sindhi Punctuation Follows Perso-Arabic Conventions", id: "punctuation" },
    {
      type: "paragraph",
      text: "Sindhi shares much of its punctuation with Arabic and Urdu, including the reversed comma (،) and question mark (؟) used in right-to-left text. Reproducing the exact punctuation shown in the source, rather than substituting familiar English marks, keeps the test measuring genuine Sindhi text.",
    },

    { type: "heading", text: "What Is a Good Sindhi Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Sindhi typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What makes Sindhi's alphabet different from Urdu's?",
          answer:
            "Sindhi adds a set of implosive consonant letters, such as ڄ, ٻ, ڏ, ڳ, and ڱ, representing sounds that don't exist in Urdu, Arabic, or Persian.",
        },
        {
          question: "Why do numbers appear left to right in Sindhi text?",
          answer:
            "Sindhi script is right to left, but numerals and embedded Latin text display left to right within the same line. This is normal Unicode bidirectional behavior, not an error.",
        },
        {
          question: "Does Sindhi have its own keyboard layout?",
          answer:
            "Yes, a dedicated Sindhi keyboard layout gives direct access to both shared Perso-Arabic letters and Sindhi's unique implosive consonants.",
        },
        {
          question: "What is a good Sindhi typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "پنهنجو وقت چونڊيو، ٽائيپ ڪرڻ شروع ڪريو، ۽ فوري طور تي پنهنجي WPM ۽ صحت ڏسو.",
    },
  ],
};

export default content;
