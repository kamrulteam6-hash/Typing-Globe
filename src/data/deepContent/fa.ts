import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Persian Typing Test · فارسی | WPM & Accuracy",
  seoDescription:
    "Take a free Persian typing test and check WPM and accuracy. Practice Persian-specific letters, right-to-left script, and the Windows Persian keyboard.",
  researchedKeywords: [
    "Persian typing speed test",
    "Farsi typing test",
    "Persian WPM test",
    "Persian keyboard test",
    "آزمون سرعت تایپ فارسی",
    "تمرین تایپ فارسی",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Persian (Farsi) shares its base script with Arabic but is not identical to it — Persian adds four extra letters for sounds not found in Arabic, and Persian text also runs right to left with the same kind of embedded-number bidirectional behavior seen in other Perso-Arabic scripts.",
        "This test measures how quickly and accurately you can type real Persian text, including its extra letters and correct right-to-left punctuation.",
      ],
    },

    { type: "heading", text: "Persian Adds Four Letters Beyond Arabic", id: "extra-letters" },
    {
      type: "paragraph",
      text: "Persian's alphabet is built on the Arabic script but adds پ (p), چ (ch), ژ (zh), and گ (g) — sounds that don't exist as standard letters in Arabic. These four letters are genuinely distinct Persian characters, not visual variants of similar Arabic letters, and substituting a similar-looking Arabic letter for one of them is a real spelling error.",
    },

    { type: "heading", text: "Right-to-Left Text with Embedded Numbers", id: "rtl-numbers" },
    {
      type: "paragraph",
      text: "Persian script runs right to left, while numerals and any embedded Latin text display left to right within the same line, following the same Unicode Bidirectional Algorithm used across other RTL scripts. It's normal for a number or English word to appear to interrupt the visual flow of a Persian sentence — this reflects correct rendering, not a typing mistake.",
    },

    { type: "heading", text: "Persian Uses Its Own Digit Forms", id: "persian-digits" },
    {
      type: "paragraph",
      text: "Persian text commonly uses Eastern Arabic-Indic digit forms (۰۱۲۳۴۵۶۷۸۹) rather than the Western Arabic numerals used in English, though both appear in modern digital text depending on context and source. A typing test should reproduce whichever digit form the passage actually shows, rather than assuming one style is universally correct.",
    },

    { type: "heading", text: "The Windows Persian Keyboard", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows provides a dedicated Persian keyboard layout with direct access to the shared Perso-Arabic letters, Persian's four additional consonants, and Persian digit forms, avoiding the need for Character Map or copy-paste. Confirming that the correct Persian input language is active — rather than an Arabic layout, which won't include Persian's extra letters in the expected positions — matters before a timed test.",
    },

    { type: "heading", text: "What Is a Good Persian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Persian typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Is Persian the same script as Arabic?",
          answer:
            "Persian is built on the Arabic script but adds four extra letters — پ, چ, ژ, and گ — representing sounds that don't exist in standard Arabic.",
        },
        {
          question: "Why do numbers appear left to right in Persian text?",
          answer:
            "Persian script is right to left, but numerals and embedded Latin text display left to right within the same line. This is normal Unicode bidirectional behavior, not an error.",
        },
        {
          question: "Does Persian use different digit symbols?",
          answer:
            "Persian text often uses Eastern Arabic-Indic digits (۰۱۲۳۴۵۶۷۸۹), though Western numerals also appear depending on the source. Reproduce whichever form the passage actually uses.",
        },
        {
          question: "What is a good Persian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "زمان خود را انتخاب کنید، تایپ را شروع کنید و سرعت و دقت خود را فوراً ببینید.",
    },
  ],
};

export default content;
