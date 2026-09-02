import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Slovak Typing Test · Slovenčina | WPM & Accuracy",
  seoDescription:
    "Take a free Slovak typing test and check WPM and accuracy. Practice Slovak diacritics, the QWERTZ keyboard, and real Slovenčina text.",
  researchedKeywords: [
    "Slovak typing speed test",
    "Slovak WPM test",
    "Slovak keyboard test",
    "test rýchlosti písania",
    "cvičenie písania na klávesnici",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Slovak uses one of the larger diacritic sets among Latin-script European languages, combining carons, acute accents, and the distinctive circumflex-like mark on ô into a single writing system. That density of accented characters, paired with the QWERTZ keyboard layout used across Slovakia, makes Slovak typing noticeably different in rhythm from plain English typing.",
        "This test measures how quickly and accurately you can type real Slovak sentences, including its full range of accented letters.",
      ],
    },

    { type: "heading", text: "Slovak's Three Families of Diacritics", id: "diacritic-families" },
    {
      type: "paragraph",
      text: "Slovak marks long vowels with an acute accent (á, é, í, ó, ú, ý), marks softened consonants with a caron (č, š, ž, ď, ľ, ň, ť), and uses a unique diphthong mark on ô. Each of these is a distinct letter carrying real spelling and grammatical information — not a stylistic flourish — and confusing an accented letter with its plain counterpart changes the word, for example mesto (town) versus mestó, or vidiek (countryside) with a genuinely different consonant if ď is dropped to d.",
    },

    { type: "heading", text: "Ô Is a Genuinely Distinctive Slovak Letter", id: "o-circumflex" },
    {
      type: "paragraph",
      text: "The letter ô, marking a diphthong sound roughly like 'uo,' is largely unique to Slovak among major Latin-script languages and appears in common words such as môj (my) and stôl (table). Because it doesn't have an obvious equivalent in neighboring languages, it's worth deliberate practice rather than assuming intuition from other Slavic or Central European typing experience will transfer automatically.",
    },

    { type: "heading", text: "Slovak Uses a QWERTZ Keyboard", id: "keyboard" },
    {
      type: "paragraph",
      text: "The standard Slovak keyboard layout belongs to the QWERTZ family, sharing the Y/Z position swap found in German and neighboring Central European layouts, with dedicated keys and Alt Gr combinations for the diacritic letters. Typists who move between an English QWERTY layout and Slovak QWERTZ often see Y/Z slip-ups even after years of experience — this is a muscle-memory collision between two layouts, not a sign of weak Slovak, and confirming the active input language before a timed test helps avoid it.",
    },

    { type: "heading", text: "Capital Diacritics Are Used Constantly", id: "capitals" },
    {
      type: "paragraph",
      text: "Uppercase forms such as Á, Č, Ľ, Ô, Š, and Ž appear regularly in names, headings, and sentence beginnings, and should be typed with the same accuracy as their lowercase counterparts rather than simplified because the capital form takes an extra keystroke.",
    },

    { type: "heading", text: "What Is a Good Slovak Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Slovak typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "How many types of diacritics does Slovak use?",
          answer:
            "Three main families: acute accents for long vowels (á, é, í, ó, ú, ý), carons for softened consonants (č, š, ž, ď, ľ, ň, ť), and the unique circumflex-like mark on ô.",
        },
        {
          question: "What is special about the letter ô?",
          answer:
            "It marks a diphthong sound and is largely unique to Slovak among major Latin-script languages, appearing in common words like môj and stôl.",
        },
        {
          question: "Does Slovak use QWERTY or QWERTZ?",
          answer:
            "QWERTZ, the same family used in German and other Central European layouts, which swaps the Y and Z positions found on a US QWERTY keyboard.",
        },
        {
          question: "What is a good Slovak typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Vyberte si svoj čas, začnite písať a hneď uvidíte svoju rýchlosť a presnosť.",
    },
  ],
};

export default content;
