import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Yoruba Typing Test · Yorùbá | WPM & Accuracy",
  seoDescription:
    "Take a free Yoruba typing test and check WPM and accuracy. Practice tone marks, ẹ/ọ/ṣ letters, and real Yorùbá text with correct diacritics.",
  researchedKeywords: [
    "Yoruba typing speed test",
    "Yoruba WPM test",
    "Yoruba keyboard test",
    "idanwo bí a ṣe ń tẹ Yorùbá",
    "iyara títẹ̀wé Yorùbá",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Yoruba is a tonal language written in a Latin-based alphabet extended with under-dots on certain vowels and consonants, plus tone marks placed above vowels to show pitch. Because tone genuinely distinguishes meaning in Yoruba, accurate typing means reproducing both the base letters and their diacritics exactly — not just getting the consonant skeleton right.",
        "This test measures how quickly and accurately you can type real Yoruba text, including its extra letters and tone marks.",
      ],
    },

    { type: "heading", text: "Ẹ, Ọ, and Ṣ Are Distinct Letters with Under-Dots", id: "dotted-letters" },
    {
      type: "paragraph",
      text: "Yoruba adds ẹ, ọ, and ṣ to the standard Latin alphabet, each formed by placing a dot beneath the base letter to represent a genuinely different sound from plain e, o, and s. These are not stylistic touches — found in everyday words such as ọmọ (child), ẹrù (fear/luggage), and ṣe (to do) — and replacing them with the undotted letter changes the spelling and can change the meaning entirely.",
    },

    { type: "heading", text: "Tone Marks Distinguish Meaning", id: "tone-marks" },
    {
      type: "paragraph",
      text: "Yoruba marks three tones: high tone with an acute accent (á), low tone with a grave accent (à), and mid tone typically left unmarked. Because Yoruba has many words that share the same consonants and vowels but differ only in tone, these marks carry real semantic weight — the same base letters with different tone marks can be completely different words.",
    },

    { type: "heading", text: "Everyday Writing Sometimes Simplifies Tone Marking", id: "everyday-tone-usage" },
    {
      type: "paragraph",
      text: "Formal, educational, and literary Yoruba text consistently marks tone, but casual everyday writing — especially in text messages and social media — often drops tone marks for speed, relying on context to disambiguate. A typing test should reproduce whatever the source passage actually shows: fully tone-marked formal Yoruba and unmarked casual Yoruba are different typing tasks and shouldn't be measured as if they were the same benchmark.",
    },

    { type: "heading", text: "Typing Yoruba's Extra Characters", id: "keyboard" },
    {
      type: "paragraph",
      text: "A dedicated Yoruba keyboard layout, or a Unicode-aware input method with compose-key or dead-key support, gives direct access to the under-dotted letters and tone-marked vowels needed for accurate Yoruba text. Relying on Character Map or copy-paste as a primary method is a poor long-term workflow for anyone writing Yoruba regularly — it works as an occasional fallback, not a sustainable typing habit.",
    },

    { type: "heading", text: "What Is a Good Yoruba Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Yoruba typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What do the dots under ẹ, ọ, and ṣ mean?",
          answer:
            "They mark distinct sounds different from plain e, o, and s. These are separate letters in the Yoruba alphabet, not decorative marks, and should always be typed exactly as shown.",
        },
        {
          question: "Why do tone marks matter in Yoruba?",
          answer:
            "Yoruba is tonal, and many words share identical consonants and vowels but differ only in tone. The acute and grave accents that mark high and low tone can be the only thing distinguishing one word from another.",
        },
        {
          question: "Does everyday Yoruba writing always include tone marks?",
          answer:
            "No. Formal and literary text usually marks tone fully, while casual writing often drops the marks for speed. Reproduce whatever the actual source passage shows.",
        },
        {
          question: "What is a good Yoruba typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Yan àkókò rẹ, bẹ̀rẹ̀ sí ní títẹ̀wé, kí o sì wo iyara àti pípéye rẹ lẹ́sẹ̀kẹsẹ̀.",
    },
  ],
};

export default content;
