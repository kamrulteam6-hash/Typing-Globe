import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Czech Typing Test · Čeština | WPM & Accuracy",
  seoDescription:
    "Take a free Czech typing test and check WPM and accuracy. Practice háček and acute accent diacritics, the QWERTZ keyboard, and real Čeština text.",
  researchedKeywords: [
    "Czech typing speed test",
    "Czech WPM test",
    "Czech keyboard test",
    "test rychlosti psaní",
    "cvičení psaní na klávesnici",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Czech combines two families of diacritics — the háček (caron) and the acute accent — into one of the more visually dense Latin-script writing systems in Europe, and includes ř, a consonant sound widely regarded as one of the hardest in any language for non-native speakers to pronounce, let alone type correctly at speed.",
        "This test measures how quickly and accurately you can type real Czech sentences, including its full diacritic set.",
      ],
    },

    { type: "heading", text: "Háček Marks Softened Consonants", id: "hacek" },
    {
      type: "paragraph",
      text: "The háček (caron) appears on č, ř, š, ž, ě, and occasionally ď, ň, ť, softening or altering the base consonant's sound. These are distinct letters carrying real spelling information — čas (time) is not the same word as cas, and dropping the háček is a genuine spelling error rather than a minor stylistic simplification.",
    },

    { type: "heading", text: "Ř Is a Genuinely Unique Sound", id: "r-hacek" },
    {
      type: "paragraph",
      text: "Ř represents a sound combining elements of a rolled r and a fricative ž sound simultaneously, and it's frequently cited as one of the most difficult consonants in any language for non-native speakers to produce — words like Dvořák (the composer's name) and řeka (river) depend on it. There's no equivalent letter in most other Latin-script languages, so it deserves dedicated typing practice rather than assumed familiarity from another Slavic language.",
    },

    { type: "heading", text: "Acute Accents Mark Vowel Length", id: "acute-accents" },
    {
      type: "paragraph",
      text: "Separately from the háček family, Czech uses acute accents (á, é, í, ó, ú, ý) to mark long vowels, distinct in function from the consonant-softening háček. Vowel length is meaningful in Czech — dropping the accent can change a word's grammatical form or meaning, so it's a real spelling target, not decoration.",
    },

    { type: "heading", text: "The Czech QWERTZ Keyboard", id: "keyboard" },
    {
      type: "paragraph",
      text: "The standard Czech keyboard layout belongs to the QWERTZ family, sharing the Y/Z position swap found in German and neighboring Central European layouts, with dedicated keys and Alt Gr combinations for Czech's extensive diacritic set. Typists moving between English QWERTY and Czech QWERTZ can develop Y/Z slip-ups even with substantial experience — confirming the active layout before a timed test helps rule this out as an error source.",
    },

    { type: "heading", text: "What Is a Good Czech Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Czech typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What does the háček mark do in Czech?",
          answer:
            "It softens or alters a consonant's sound, appearing on č, ř, š, ž, ě, and occasionally ď, ň, ť. These are distinct letters, and dropping the mark is a real spelling error.",
        },
        {
          question: "Why is ř considered so difficult?",
          answer:
            "It represents a sound combining elements of a rolled r and a fricative ž simultaneously, widely cited as one of the hardest consonants in any language for non-native speakers, with no direct equivalent in most other Latin-script languages.",
        },
        {
          question: "What's the difference between háček and acute accents in Czech?",
          answer:
            "The háček softens consonant sounds (č, ř, š, ž), while the acute accent (á, é, í, ó, ú, ý) marks vowel length. They serve different functions and appear on different letters.",
        },
        {
          question: "What is a good Czech typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Vyberte si svůj čas, začněte psát a hned uvidíte svou rychlost a přesnost.",
    },
  ],
};

export default content;
