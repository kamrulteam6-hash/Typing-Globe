import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Ukrainian Typing Test · Українська | WPM & Accuracy",
  seoDescription:
    "Take a free Ukrainian typing test and check WPM and accuracy. Practice ukrainian-specific Cyrillic letters і, ї, є, ґ, and the Ukrainian keyboard.",
  researchedKeywords: [
    "Ukrainian typing speed test",
    "Ukrainian WPM test",
    "Ukrainian keyboard test",
    "тест на швидкість друку",
    "вправи для друку",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Ukrainian Cyrillic includes four letters that don't exist in Russian — і, ї, є, and ґ — making Ukrainian typing a genuinely different keyboard task from Russian, even though the two languages share the same underlying Cyrillic script family. A Russian-trained typist doesn't automatically have Ukrainian muscle memory.",
        "This test measures how quickly and accurately you can type real Ukrainian text, including its four Ukrainian-specific letters.",
      ],
    },

    { type: "heading", text: "Four Letters That Don't Exist in Russian", id: "ukrainian-specific-letters" },
    {
      type: "paragraph",
      text: "Ukrainian Cyrillic uses і, ї, є, and ґ — none of which appear in standard Russian, which instead uses ы, э, and ъ, letters that Ukrainian in turn doesn't use. Common words like і (and), їжа (food), є (is/exists), and ґанок (porch) rely on these letters, and substituting a similar-looking Russian letter for one of them is a real spelling error, not a minor variation between two similar languages.",
    },

    { type: "heading", text: "The Ukrainian Keyboard Layout Differs from Russian", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows provides a dedicated Ukrainian keyboard layout, distinct from the Russian one, with key positions arranged to give direct access to і, ї, є, and ґ. Because the two Cyrillic layouts are related but not identical, typists switching between Russian and Ukrainian keyboards should confirm the correct layout is active before a timed test rather than assuming the two are interchangeable.",
    },

    { type: "heading", text: "Ukrainian Apostrophe Has Real Spelling Function", id: "apostrophe" },
    {
      type: "paragraph",
      text: "Ukrainian uses the apostrophe (') as a genuine orthographic character marking a hard separation between a consonant and following iotated vowel, as in м'ясо (meat) or сім'я (family). It is not optional punctuation flair — dropping it changes correct spelling, and it should be typed exactly where the source shows it.",
    },

    { type: "heading", text: "Ukrainian and Russian Vocabulary Diverge, Not Just Alphabet", id: "vocabulary-differences" },
    {
      type: "paragraph",
      text: "Beyond the alphabet difference, Ukrainian and Russian have diverged vocabulary and spelling conventions, so a Russian speaker typing a Ukrainian passage may recognize the grammar but still need to learn the correct Ukrainian word forms rather than assuming direct transfer. Keep Ukrainian and Russian typing practice as separate benchmarks.",
    },

    { type: "heading", text: "What Is a Good Ukrainian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Ukrainian typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Which Ukrainian letters don't exist in Russian?",
          answer:
            "І, ї, є, and ґ are Ukrainian-specific Cyrillic letters not found in standard Russian, which instead uses ы, э, and ъ.",
        },
        {
          question: "Is the Ukrainian keyboard the same as the Russian one?",
          answer:
            "No. Windows provides a separate Ukrainian keyboard layout with key positions arranged for і, ї, є, and ґ, distinct from the Russian layout.",
        },
        {
          question: "Does the apostrophe matter in Ukrainian spelling?",
          answer:
            "Yes. The apostrophe marks a real hard separation between a consonant and a following iotated vowel, as in м'ясо. Dropping it is a genuine spelling error.",
        },
        {
          question: "What is a good Ukrainian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Оберіть свій час, почніть друкувати та відразу перегляньте свою швидкість і точність.",
    },
  ],
};

export default content;
