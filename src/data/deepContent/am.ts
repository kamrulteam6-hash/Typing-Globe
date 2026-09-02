import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Amharic Typing Test · አማርኛ | WPM & Accuracy",
  seoDescription:
    "Take a free Amharic typing test and check WPM and accuracy. Practice the Ge'ez fidel syllabary, consonant-vowel orders, and phonetic keyboard input.",
  researchedKeywords: [
    "Amharic typing speed test",
    "Amharic WPM test",
    "Amharic keyboard test",
    "የአማርኛ የመተየብ ፍጥነት ፈተና",
    "የመተየብ ልምምድ",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Amharic is written using the Ge'ez script, a genuine syllabary rather than an alphabet — each character (called a fidel) represents a full consonant-plus-vowel syllable, and the same base consonant appears in seven different visual forms depending on which of seven vowel sounds follows it. That structure makes Amharic typing fundamentally different from typing in an alphabetic script.",
        "This test measures how quickly and accurately you can type real Amharic text using the fidel syllabary.",
      ],
    },

    { type: "heading", text: "Fidel Are Syllables, Not Individual Sounds", id: "fidel-syllabary" },
    {
      type: "paragraph",
      text: "Unlike an alphabet, where you combine a consonant letter and a vowel letter separately, each Amharic fidel character already represents a specific consonant-vowel combination as a single unit. The consonant ha (ሀ) has seven related but visually distinct forms — ሀ, ሁ, ሂ, ሃ, ሄ, ህ, ሆ — each pairing that same consonant with a different one of the seven core vowel sounds. Learning Amharic typing means learning to select the correct combined form directly, not building it from separate consonant-plus-vowel keystrokes.",
    },

    { type: "heading", text: "Over 200 Base Characters", id: "character-count" },
    {
      type: "paragraph",
      text: "With roughly 33 consonant series multiplied across the seven vowel orders, plus additional labialized and historical forms, the Ge'ez fidel set used for Amharic runs to well over 200 distinct characters. This is far larger than a typical alphabet's 20-40 letters, which is exactly why direct memorization of every character's keyboard position is impractical, and phonetic input methods are almost universally used instead.",
    },

    { type: "heading", text: "Phonetic Input Is the Standard Method", id: "phonetic-input" },
    {
      type: "paragraph",
      text: "Because memorizing 200+ distinct key positions isn't practical, Amharic is typically typed using a phonetic transliteration method: you type the Latin-letter approximation of a syllable's sound (such as 'ha', 'hu', 'hi'), and the input software converts it to the correct fidel character automatically. This makes the underlying keyboard itself an ordinary Latin QWERTY layout — the specialized part is the conversion software, not the physical keys.",
    },

    { type: "heading", text: "Why Direct Key-Position Typing Isn't Common", id: "no-direct-layout" },
    {
      type: "paragraph",
      text: "Unlike Devanagari's INSCRIPT or similar fixed-key Indic layouts, Amharic doesn't have a widely standardized direct-entry hardware keyboard layout comparable in adoption to phonetic input tools, precisely because the character count is too large for practical key-position memorization. If you're building typing speed in Amharic, your practice should center on phonetic input fluency and candidate-selection accuracy rather than trying to memorize hundreds of fixed key positions.",
    },

    { type: "heading", text: "What Is a Good Amharic Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Amharic typing speed. Use your own first clean result as a baseline and track your own improvement over time.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Is Amharic script an alphabet?",
          answer:
            "No, it's a syllabary. Each fidel character represents a complete consonant-vowel syllable as a single unit, rather than combining separate consonant and vowel letters the way an alphabet does.",
        },
        {
          question: "How many characters does Amharic use?",
          answer:
            "Roughly 33 consonant series multiplied across seven vowel orders, plus additional forms, bringing the total to well over 200 distinct fidel characters.",
        },
        {
          question: "How do people actually type Amharic on a keyboard?",
          answer:
            "Almost universally through phonetic transliteration: you type a Latin-letter approximation of the sound, and software converts it to the correct fidel character, since memorizing 200+ key positions isn't practical.",
        },
        {
          question: "What is a good Amharic typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time rather than comparing to an unsourced number.",
        },
      ],
    },

    {
      type: "cta",
      text: "ጊዜዎን ይምረጡ፣ መተየብ ይጀምሩ፣ እና ፍጥነትዎንና ትክክለኛነትዎን ወዲያውኑ ይመልከቱ።",
    },
  ],
};

export default content;
