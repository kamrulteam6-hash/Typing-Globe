import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Urdu Typing Test · اردو | WPM & Accuracy",
  seoDescription:
    "Take a free Urdu typing test and check WPM and accuracy. Practice Urdu-specific letters, Nastaliq-style script, and the Windows Urdu keyboard.",
  researchedKeywords: [
    "Urdu typing speed test",
    "Urdu WPM test",
    "Urdu keyboard test",
    "اردو ٹائپنگ ٹیسٹ",
    "اردو لکھنے کی رفتار",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Urdu shares its base alphabet with Arabic and Persian but adds retroflex consonants and other letters for sounds specific to Urdu, and it is conventionally rendered in the flowing Nastaliq calligraphic style rather than the more upright Naskh style typically used for Arabic. Both the extra letters and the script style matter for accurate typing.",
        "This test measures how quickly and accurately you can type real Urdu text, including its distinct consonants and correct right-to-left punctuation.",
      ],
    },

    { type: "heading", text: "Urdu Adds Retroflex and Aspirated Consonants", id: "extra-letters" },
    {
      type: "paragraph",
      text: "Urdu extends the Perso-Arabic base with retroflex consonants such as ٹ, ڈ, and ڑ, plus aspirated consonant combinations formed with ھ, none of which exist as standard letters in Arabic. These represent genuinely distinct Urdu sounds, and substituting a visually similar Arabic or Persian letter for one of them is a real spelling error, not a stylistic simplification.",
    },

    { type: "heading", text: "Right-to-Left Text with Embedded Numbers", id: "rtl-numbers" },
    {
      type: "paragraph",
      text: "Urdu script runs right to left, while numerals and any embedded Latin text display left to right within the same line, following the same Unicode Bidirectional Algorithm used across other Perso-Arabic scripts. A number or English word appearing to interrupt the visual flow of an Urdu sentence reflects correct rendering, not a typing mistake.",
    },

    { type: "heading", text: "Nastaliq vs. Naskh Rendering", id: "nastaliq-vs-naskh" },
    {
      type: "paragraph",
      text: "Urdu is conventionally displayed in the Nastaliq calligraphic style — flowing, diagonal, and visually distinct from the more upright Naskh style typically used for Arabic — though the underlying Unicode text is identical regardless of which style a font renders it in. Because Nastaliq rendering is computationally complex, some fonts and platforms fall back to Naskh-style Urdu fonts; either is a valid rendering of the same correct text, so a typing test should not be judged by which visual style displays.",
    },

    { type: "heading", text: "The Windows Urdu Keyboard", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows provides a dedicated Urdu keyboard layout with direct access to shared Perso-Arabic letters and Urdu's additional retroflex and aspirated consonants, avoiding the need for Character Map or copy-paste. Confirming the correct Urdu input language is active — rather than an Arabic layout, which won't include Urdu's extra letters in the expected positions — matters before a timed test.",
    },

    { type: "heading", text: "What Is a Good Urdu Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Urdu typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Does Urdu have letters that Arabic doesn't?",
          answer:
            "Yes. Urdu adds retroflex consonants such as ٹ, ڈ, and ڑ, plus aspirated consonant combinations, representing sounds that don't exist as standard letters in Arabic.",
        },
        {
          question: "Why does Urdu text look different from Arabic text?",
          answer:
            "Urdu is conventionally displayed in the flowing Nastaliq calligraphic style, distinct from the more upright Naskh style typically used for Arabic, though the underlying Unicode text is the same regardless of which style renders it.",
        },
        {
          question: "Does Windows have an Urdu keyboard?",
          answer:
            "Yes, a dedicated Urdu keyboard layout provides direct access to both shared Perso-Arabic letters and Urdu-specific consonants.",
        },
        {
          question: "What is a good Urdu typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "اپنا وقت منتخب کریں، ٹائپنگ شروع کریں، اور فوراً اپنی رفتار اور درستگی دیکھیں۔",
    },
  ],
};

export default content;
