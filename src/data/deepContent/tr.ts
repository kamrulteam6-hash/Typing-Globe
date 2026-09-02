import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Turkish Typing Test · Türkçe | WPM & Accuracy",
  seoDescription:
    "Take a free Turkish typing test and check WPM and accuracy. Practice the dotted/dotless I distinction, ç ğ ö ş ü, and the Turkish Q keyboard.",
  researchedKeywords: [
    "Turkish typing speed test",
    "Turkish WPM test",
    "Turkish keyboard test",
    "yazma hızı testi",
    "Türkçe klavye alıştırması",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Turkish's most distinctive typing challenge isn't its five accented letters — it's the dotted and dotless I distinction, where İ/i and I/ı are four genuinely different letters rather than two letters with a capitalization quirk. This single fact breaks a lot of software written without Turkish in mind, and it matters just as much for a human typist.",
        "This test measures how quickly and accurately you can type real Turkish sentences, including its full letter set and correct capitalization.",
      ],
    },

    { type: "heading", text: "İ/i and I/ı Are Four Different Letters", id: "dotted-dotless-i" },
    {
      type: "paragraph",
      text: "In Turkish, dotted İ/i and dotless I/ı are separate letters representing different vowel sounds, not a single letter with inconsistent capitalization. The lowercase of İ is i (keeping its dot), and the uppercase of ı is I (staying dotless) — capitalizing i to a plain English I, or lowercasing I to a dotted i, produces the wrong Turkish letter and a genuine spelling error, even though it's an extremely common mistake for software and typists trained on English conventions.",
    },

    { type: "heading", text: "Five Additional Accented Letters", id: "accented-letters" },
    {
      type: "paragraph",
      text: "Turkish also adds ç, ğ, ö, ş, and ü to the Latin base. Ğ (yumuşak g, soft g) is unusual among them: in modern standard Turkish it's typically silent or lengthens the preceding vowel rather than being pronounced as a distinct consonant sound, but it's still a required, meaningful letter in spelling — dağ (mountain) is not the same written word as da.",
    },

    { type: "heading", text: "The Turkish Q Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "Most Turkish keyboards use the Turkish Q layout, a QWERTY-based arrangement with the extra Turkish letters mapped to available positions, giving direct single-keystroke access to ç, ğ, ö, ş, ü, and both forms of I. A separate Turkish F layout, designed from scratch for Turkish letter frequency rather than adapted from QWERTY, also exists but is far less common today.",
    },

    { type: "heading", text: "Why This Distinction Trips Up Software and Typists Alike", id: "software-and-typing" },
    {
      type: "paragraph",
      text: "Because English-trained software and typing habits assume I and i are simply the capital and lowercase of one letter, the Turkish İ/I distinction is a famous source of real-world bugs and typos — a filename, username, or word processed with English capitalization rules can silently corrupt Turkish text. For typing practice specifically, that means deliberately checking capital and lowercase I forms rather than assuming muscle memory from English will transfer correctly.",
    },

    { type: "heading", text: "What Is a Good Turkish Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Turkish typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Are İ and I really different letters?",
          answer:
            "Yes. Turkish has four distinct forms — İ/i (dotted) and I/ı (dotless) — representing different vowel sounds, not one letter with a capitalization inconsistency. Applying English capitalization rules produces the wrong letter.",
        },
        {
          question: "Is ğ pronounced in Turkish?",
          answer:
            "In modern standard Turkish it's typically silent or lengthens the preceding vowel rather than being pronounced as its own consonant, but it's still a required letter in correct spelling.",
        },
        {
          question: "What keyboard layout does Turkish use?",
          answer:
            "Most Turkish keyboards use the Turkish Q layout, a QWERTY-based arrangement adapted with Turkish letters. A separate Turkish F layout also exists but is much less common.",
        },
        {
          question: "What is a good Turkish typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Süreni seç, yazmaya başla ve hızını ile doğruluğunu hemen gör.",
    },
  ],
};

export default content;
