import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Hausa Typing Test · Hausa | WPM & Accuracy",
  seoDescription:
    "Take a free Hausa typing test and check WPM and accuracy. Practice hooked letters ɓ, ɗ, ƙ, doubled vowels for length, and real Hausa text.",
  researchedKeywords: [
    "Hausa typing speed test",
    "Hausa WPM test",
    "Hausa keyboard test",
    "gwajin saurin buga rubutu",
    "atisayen buga rubutu",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Modern Hausa is written in Boko, a Latin-based orthography extended with three hooked letters — ɓ, ɗ, and ƙ — representing implosive and ejective consonant sounds not found in English. Hausa also uses doubled vowels to mark vowel length, a meaningful spelling distinction rather than a stylistic choice.",
        "This test measures how quickly and accurately you can type real Hausa sentences in the Boko orthography.",
      ],
    },

    { type: "heading", text: "Three Hooked Consonant Letters", id: "hooked-letters" },
    {
      type: "paragraph",
      text: "Hausa's alphabet adds ɓ (hooked b), ɗ (hooked d), and ƙ (hooked k) to represent implosive and ejective consonants distinct from ordinary b, d, and k. These are genuinely different sounds and letters, not stylistic variants — bulala (whip) versus a word using ɓ illustrates a real spelling and meaning distinction, and substituting the plain unhooked letter is a real error.",
    },

    { type: "heading", text: "Doubled Vowels Mark Length", id: "vowel-length" },
    {
      type: "paragraph",
      text: "Hausa distinguishes short and long vowels, with length shown by doubling the vowel letter — a genuine phonemic distinction that can change word meaning, similar in principle to the vowel-doubling systems found in some other African and Bantu languages. Dropping a doubled vowel isn't a minor simplification; it changes the written word.",
    },

    { type: "heading", text: "Tone Is Not Usually Marked in Everyday Writing", id: "tone-unmarked" },
    {
      type: "paragraph",
      text: "Hausa is a tonal language, but standard everyday writing generally does not mark tone explicitly, relying on context for disambiguation — this differs from some other tonal languages where tone marking is more consistently required in ordinary text. A typing test should reproduce the source exactly: if tone marks appear (in specialized linguistic or educational material), type them; if the everyday passage omits them, don't add them.",
    },

    { type: "heading", text: "Hausa Was Also Historically Written in Ajami", id: "ajami-history" },
    {
      type: "paragraph",
      text: "Before the widespread adoption of Boko, Hausa was written for centuries in Ajami, an Arabic-derived script adapted for Hausa's sounds, and Ajami remains in some religious and traditional use today. A Boko typing test and an Ajami typing task are entirely different scripts and keyboard skills, and this page focuses specifically on the modern Latin-based Boko orthography.",
    },

    { type: "heading", text: "No Special Keyboard Layout Is Typically Needed", id: "keyboard" },
    {
      type: "paragraph",
      text: "Because ɓ, ɗ, and ƙ aren't present on a standard QWERTY keyboard, typists commonly rely on a Unicode-aware input method, compose-key setup, or a dedicated Hausa keyboard layout where available, rather than a completely standard international keyboard. Relying on copy-paste or character-map lookups as a primary method is a poor long-term workflow for anyone typing Hausa regularly.",
    },

    { type: "heading", text: "What Is a Good Hausa Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Hausa typing speed. Use your own first clean result as a baseline and track your own improvement over time.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What are ɓ, ɗ, and ƙ?",
          answer:
            "Hooked consonant letters in Hausa's Boko orthography, representing implosive and ejective sounds distinct from ordinary b, d, and k. They are genuinely different letters, not stylistic variants.",
        },
        {
          question: "Does Hausa mark tone in writing?",
          answer:
            "Usually not in everyday text, even though Hausa is a tonal language. Tone marking is more common in specialized linguistic or educational material. Reproduce whatever the actual source shows.",
        },
        {
          question: "Is Hausa always written in Latin script?",
          answer:
            "No. Modern Hausa is primarily written in the Latin-based Boko orthography, but it was historically written for centuries in Ajami, an Arabic-derived script, which remains in some religious and traditional use today.",
        },
        {
          question: "What is a good Hausa typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time rather than comparing to an unsourced number.",
        },
      ],
    },

    {
      type: "cta",
      text: "Zaɓi lokacinka, fara buga rubutu, sannan ka ga saurinka da daidaitonka nan take.",
    },
  ],
};

export default content;
