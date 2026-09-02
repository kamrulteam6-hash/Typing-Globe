import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Gujarati Typing Test · ગુજરાતી | WPM & Accuracy",
  seoDescription:
    "Take a free Gujarati typing test and check WPM and accuracy. Practice vowel signs, virama conjuncts, and Gujarati INSCRIPT or phonetic input.",
  researchedKeywords: [
    "Gujarati typing speed test",
    "Gujarati WPM test",
    "Gujarati keyboard test",
    "ગુજરાતી ટાઇપિંગ ટેસ્ટ",
    "ગુજરાતી ટાઇપિંગ સ્પીડ",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Gujarati script derives from Devanagari but drops the continuous horizontal headline (shirorekha) that connects letters in Devanagari, giving Gujarati text a visually distinct, more open appearance even though the underlying vowel-sign and conjunct system works on the same core principles as Hindi and Marathi.",
        "This test measures how quickly and accurately you can type real Gujarati text, including its vowel signs and virama-based conjuncts.",
      ],
    },

    { type: "heading", text: "No Horizontal Headline, Unlike Devanagari", id: "no-shirorekha" },
    {
      type: "paragraph",
      text: "Devanagari scripts like Hindi and Marathi connect most letters along a continuous horizontal line at the top (shirorekha), but Gujarati dropped this feature historically, leaving individual letters visually separated rather than joined along a top bar. This is purely a visual/historical distinction — the underlying character encoding and typing logic work the same way as other Devanagari-derived scripts, so it doesn't change how you type, only how the result looks.",
    },

    { type: "heading", text: "Vowel Signs Attach Around the Consonant", id: "vowel-signs" },
    {
      type: "paragraph",
      text: "As in Devanagari, Gujarati consonants carry an inherent vowel by default, and dependent vowel signs attach before, after, above, or below the consonant to modify it. The typing sequence follows the input method's logical order, not necessarily the final visual position — the short-i equivalent sign, for example, is entered before the consonant even though it's pronounced after it.",
    },

    { type: "heading", text: "Virama Builds Conjunct Consonants", id: "virama-conjuncts" },
    {
      type: "paragraph",
      text: "Gujarati uses a virama sign to suppress a consonant's inherent vowel, allowing consonants to combine into conjunct clusters, similar in mechanism to Hindi and Marathi conjuncts. These clusters can render as visually joined or stacked shapes, but the underlying Unicode character sequence still matters for accurate typing, searching, and reliable text rendering across devices.",
    },

    { type: "heading", text: "Gujarati INSCRIPT and Phonetic Input", id: "keyboard" },
    {
      type: "paragraph",
      text: "Gujarati is typically typed using the INSCRIPT layout, the standardized fixed-key approach shared across India's Indic scripts, or phonetic transliteration tools that convert Latin-letter input into Gujarati candidate suggestions. These are genuinely different physical tasks — direct key-position recall versus candidate selection — so keep practice and progress comparisons tied to one input method.",
    },

    { type: "heading", text: "What Is a Good Gujarati Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Gujarati typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Why does Gujarati script look different from Hindi?",
          answer:
            "Gujarati derives from Devanagari but dropped the continuous horizontal headline (shirorekha) that connects letters along a top bar in Hindi and Marathi. This is a visual/historical difference, not a change in typing logic.",
        },
        {
          question: "How do Gujarati vowel signs work?",
          answer:
            "Like Devanagari, Gujarati consonants carry an inherent vowel, and dependent vowel signs attach around the consonant. The typing order follows the input method's logical sequence, not the final visual position.",
        },
        {
          question: "Is Gujarati typing the same as Hindi typing?",
          answer:
            "The underlying INSCRIPT and virama-based conjunct system works similarly, but Gujarati uses its own alphabet and vocabulary, so it's a related but distinct typing skill.",
        },
        {
          question: "What is a good Gujarati typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "તમારો સમય પસંદ કરો, ટાઇપ કરવાનું શરૂ કરો, અને તરત જ તમારી ઝડપ અને ચોકસાઈ જુઓ.",
    },
  ],
};

export default content;
