import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Portuguese Typing Test · Português | WPM & Accuracy",
  seoDescription:
    "Take a free Portuguese typing test and check WPM and accuracy. Practice nasal tildes, cedilla, accent marks, and real Português text.",
  researchedKeywords: [
    "Portuguese typing speed test",
    "Portuguese WPM test",
    "Portuguese keyboard test",
    "teste de velocidade de digitação",
    "exercícios de digitação",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Portuguese uses one of the richer diacritic systems among Romance languages, combining nasal tildes, a cedilla, and three distinct accent types (acute, circumflex, and grave) that each carry real grammatical or pronunciation information rather than being interchangeable decorations.",
        "This test measures how quickly and accurately you can type real Portuguese sentences, including its full range of accented characters.",
      ],
    },

    { type: "heading", text: "Nasal Vowels: ã and õ", id: "nasal-tildes" },
    {
      type: "paragraph",
      text: "The tilde over ã and õ marks nasalization — a genuinely distinct vowel sound, not an accent showing stress — and appears in extremely common words such as não (no), mãe (mother), and pão (bread). Because these are everyday high-frequency words, dropping the tilde is one of the most common and noticeable Portuguese typing errors.",
    },

    { type: "heading", text: "Cedilla and the Ç Sound", id: "cedilla" },
    {
      type: "paragraph",
      text: "Ç represents an s-sound before a, o, or u, where plain c would otherwise represent a k-sound — coração (heart) and cabeça (head) rely on this distinction to keep the correct pronunciation and spelling. It's a required letter in standard orthography, not an optional flourish.",
    },

    { type: "heading", text: "Three Accent Types with Different Jobs", id: "accent-types" },
    {
      type: "paragraph",
      text: "Portuguese uses acute accents (á, é, í, ó, ú) to mark stress on an otherwise unpredictable syllable, circumflex accents (â, ê, ô) to mark stress on a closed vowel sound, and a grave accent (à) specifically to mark crasis — the contraction of the preposition a with a following a-initial article or pronoun, as in Vou à escola (I'm going to the school). These aren't interchangeable stylistic choices; each accent type has a distinct grammatical function.",
    },

    { type: "heading", text: "Brazilian vs. European Spelling Differences", id: "brazil-vs-portugal" },
    {
      type: "paragraph",
      text: "Brazilian and European Portuguese have some genuine spelling differences even after the 1990 Acordo Ortográfico attempted to unify major conventions — word choices, occasional accent placement, and keyboard layouts (Brazil's ABNT2 layout differs from Portugal's standard layout) can vary by region. A typing test should be understood as measuring one specific variety's conventions, not a universal Portuguese standard.",
    },

    { type: "heading", text: "What Is a Good Portuguese Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Portuguese typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What does the tilde over ã and õ mean?",
          answer:
            "It marks nasalization, a distinct vowel sound, appearing in common words like não, mãe, and pão. It's not a stress marker — it's part of the letter's actual sound.",
        },
        {
          question: "Why does ç have a cedilla?",
          answer:
            "The cedilla shows that ç represents an s-sound before a, o, or u, where plain c would otherwise represent a k-sound, as in coração and cabeça.",
        },
        {
          question: "Is Brazilian Portuguese typed the same as European Portuguese?",
          answer:
            "Largely, but real spelling and keyboard-layout differences remain even after the 1990 spelling accord. Treat the two as related but not identical typing tasks.",
        },
        {
          question: "What is a good Portuguese typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Escolha o seu tempo, comece a digitar e veja imediatamente a sua velocidade e precisão.",
    },
  ],
};

export default content;
