import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Tamil Typing Test · தமிழ் | WPM & Accuracy",
  seoDescription:
    "Take a free Tamil typing test and check WPM and accuracy. Practice Tamil vowel signs, pulli, conjuncts, and Tamil99 or phonetic keyboard input.",
  researchedKeywords: [
    "Tamil typing speed test",
    "Tamil WPM test",
    "Tamil keyboard test",
    "Tamil99 typing",
    "தமிழ் தட்டச்சு பயிற்சி",
    "தமிழ் தட்டச்சு வேகம்",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Tamil is written in its own script, one of the oldest continuously used writing systems in the world, with a smaller consonant inventory than most other Indic scripts but its own distinctive vowel-sign and pulli (virama-equivalent) system. Because Tamil doesn't use conjunct ligatures the way Devanagari or Telugu do, consonant clusters are shown differently — through the pulli mark rather than fused shapes.",
        "This test measures how quickly and accurately you can type real Tamil text, including its vowel signs and pulli-marked consonant clusters.",
      ],
    },

    { type: "heading", text: "Tamil Vowel Signs Attach Around the Consonant", id: "vowel-signs" },
    {
      type: "paragraph",
      text: "Tamil consonants carry an inherent vowel by default, and dependent vowel signs modify that vowel by attaching before, after, above, or below the consonant depending on which vowel sign it is. As with other Indic scripts, the typing sequence follows the input method's logical order rather than the final visual position, so learning that sequence — not guessing from what you see on screen — is the core Tamil typing skill.",
    },

    { type: "heading", text: "Pulli Marks a Bare Consonant", id: "pulli" },
    {
      type: "paragraph",
      text: "Tamil uses a small dot called pulli (or the virama-equivalent) above a consonant to show that it has no vowel attached — functionally similar to virama in other Indic scripts, but without producing the fused conjunct ligatures seen in Devanagari or Telugu. A pulli-marked consonant is a real, distinct character in the text, and dropping it changes the word even when the surrounding letters are correct.",
    },

    { type: "heading", text: "Tamil Has a Smaller Consonant Set Than Sanskrit-Derived Scripts", id: "consonant-set" },
    {
      type: "paragraph",
      text: "Because Tamil developed its own script tradition somewhat independently of the Sanskrit-heavy conjunct system used in scripts like Devanagari, it uses fewer base consonant letters, with certain letters covering multiple related sounds depending on position. This makes the alphabet itself relatively compact, but it also means correct spelling relies more on knowing Tamil-specific conventions than transferring assumptions from Hindi or other Indic-script languages.",
    },

    { type: "heading", text: "Tamil99 and Phonetic Keyboard Layouts", id: "keyboard" },
    {
      type: "paragraph",
      text: "Tamil99 is a widely used standardized keyboard layout designed specifically for Tamil, mapping consonants and vowel signs to fixed key positions. Phonetic transliteration tools are also common, letting typists enter Tamil sounds using Latin letters and select the correct Tamil candidate — a genuinely different physical task from Tamil99's direct key-position typing, so keep practice and progress tracking tied to one method.",
    },

    { type: "heading", text: "What Is a Good Tamil Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Tamil typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is pulli in Tamil?",
          answer:
            "Pulli is a small dot placed above a consonant to show it has no attached vowel, similar in function to virama in other Indic scripts, but Tamil doesn't form fused conjunct ligatures the way Devanagari or Telugu do.",
        },
        {
          question: "Does Tamil have fewer letters than Hindi?",
          answer:
            "Tamil uses a smaller set of base consonant letters than Sanskrit-heavy scripts like Devanagari, with some letters covering multiple related sounds depending on position in the word.",
        },
        {
          question: "What is Tamil99?",
          answer:
            "Tamil99 is a widely used standardized keyboard layout designed specifically for typing Tamil, mapping consonants and vowel signs to fixed key positions.",
        },
        {
          question: "What is a good Tamil typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "உங்கள் நேரத்தைத் தேர்ந்தெடுக்கவும், தட்டச்சு செய்யத் தொடங்கவும், உங்கள் வேகத்தையும் துல்லியத்தையும் உடனே பாருங்கள்.",
    },
  ],
};

export default content;
