import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Punjabi Typing Test · ਪੰਜਾਬੀ | WPM & Accuracy",
  seoDescription:
    "Take a free Punjabi typing test and check WPM and accuracy. Practice Gurmukhi vowel signs, tippi, addak, and the Punjabi INSCRIPT keyboard.",
  researchedKeywords: [
    "Punjabi typing speed test",
    "Gurmukhi typing test",
    "Punjabi WPM test",
    "Punjabi keyboard test",
    "ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਟੈਸਟ",
    "ਪੰਜਾਬੀ ਟਾਈਪਿੰਗ ਸਪੀਡ",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Punjabi in India is written in Gurmukhi, a Brahmi-derived abugida developed and standardized for the Sikh scriptures. Like other Indic scripts, consonants carry an inherent vowel that is modified, replaced, or removed by attached signs — but Gurmukhi has its own distinctive marks, including tippi and addak, that don't exist in Devanagari or other related scripts.",
        "This test measures how quickly and accurately you can produce real Gurmukhi text, including vowel signs, nasalization marks, and consonant gemination.",
      ],
    },

    { type: "heading", text: "Gurmukhi Vowel Signs and Their Positions", id: "vowel-signs" },
    {
      type: "paragraph",
      text: "Gurmukhi dependent vowel signs (lāga mātrā) attach above, below, before, or after their base consonant. Some signs are typed after the consonant even though they visually appear elsewhere, because Unicode stores Indic text in logical rather than purely visual order. Learning the input sequence used by your keyboard — rather than trying to type what you see from left to right — is the foundation of accurate Gurmukhi typing.",
    },

    { type: "heading", text: "Tippi and Bindi Mark Nasalization", id: "tippi-bindi" },
    {
      type: "paragraph",
      text: "Gurmukhi uses two distinct marks for nasal sounds: tippi (a small mark used after certain short vowels) and bindi (used after long vowels and independent vowel letters). They are not interchangeable, and choosing the wrong one changes correct spelling. Words such as ਸਿੰਘ (Singh, using tippi) and ਨਾਂ (name, using bindi) are useful examples for practicing the distinction.",
    },

    { type: "heading", text: "Addak Marks Consonant Gemination", id: "addak" },
    {
      type: "paragraph",
      text: "Addak is a Gurmukhi-specific sign placed above and before a consonant to show that the consonant is doubled in pronunciation, as in ਪੱਕਾ (pakkā, ripe/solid). It has no direct equivalent in Devanagari, where gemination is instead shown by writing a conjunct. Because addak is easy to skip at speed, it's worth deliberately practicing words that contain it rather than treating it as optional decoration.",
    },

    { type: "heading", text: "Punjabi INSCRIPT Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "Punjabi is typically typed using the INSCRIPT layout, the standardized fixed-key approach shared across India's Indic scripts. Windows includes a dedicated Punjabi keyboard, and phonetic transliteration tools are also widely used, letting typists enter Punjabi sounds using Latin letters and choose the correct Gurmukhi candidate from suggestions.",
    },

    { type: "heading", text: "What Is a Good Punjabi Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Punjabi typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic figure.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is the difference between tippi and bindi?",
          answer:
            "Both mark nasalization, but tippi follows certain short vowels while bindi follows long vowels and independent vowel letters. They are not interchangeable, and using the wrong one is a real spelling error.",
        },
        {
          question: "What does addak do in Gurmukhi?",
          answer:
            "Addak marks that the following consonant is doubled in pronunciation, as in ਪੱਕਾ. It is a Gurmukhi-specific sign with no direct Devanagari equivalent.",
        },
        {
          question: "Do I need a special keyboard for Punjabi?",
          answer:
            "Yes. Windows includes a dedicated Punjabi INSCRIPT keyboard layout, and phonetic transliteration tools are also commonly used.",
        },
        {
          question: "What is a good Punjabi typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "ਆਪਣਾ ਸਮਾਂ ਚੁਣੋ, ਟਾਈਪ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ, ਅਤੇ ਤੁਰੰਤ ਆਪਣੀ WPM ਅਤੇ ਸਟੀਕਤਾ ਵੇਖੋ।",
    },
  ],
};

export default content;
