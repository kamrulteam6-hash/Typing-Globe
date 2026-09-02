import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Georgian Typing Test · ქართული | WPM & Accuracy",
  seoDescription:
    "Take a free Georgian typing test and check WPM and accuracy. Practice the unique Mkhedruli alphabet, consonant clusters, and the Georgian keyboard.",
  researchedKeywords: [
    "Georgian typing speed test",
    "Georgian WPM test",
    "Georgian keyboard test",
    "ბეჭდვის სისწრაფის ტესტი",
    "ბეჭდვის სავარჯიშოები",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Georgian is written in Mkhedruli, its own unique alphabet unrelated to Latin, Cyrillic, Greek, or Armenian scripts, and one of relatively few living scripts with no distinction between uppercase and lowercase letters at all. It also permits long consonant clusters with no vowels between them, a genuine feature of the language rather than an unusual edge case.",
        "This test measures how quickly and accurately you can type real Georgian text using the standard Georgian keyboard.",
      ],
    },

    { type: "heading", text: "Mkhedruli Has No Case Distinction", id: "no-case" },
    {
      type: "paragraph",
      text: "Unlike Latin, Cyrillic, Greek, or Armenian, modern Georgian's Mkhedruli script has no separate uppercase and lowercase forms — every letter has just one shape, used consistently whether it starts a sentence, a name, or appears in the middle of a word. This actually removes an entire category of typing decisions that matter in other scripts (capitalization rules, Shift-key timing), even as the 33-letter alphabet itself needs to be learned from scratch since it shares no letterforms with more familiar scripts.",
    },

    { type: "heading", text: "Genuine Multi-Consonant Clusters", id: "consonant-clusters" },
    {
      type: "paragraph",
      text: "Georgian permits sequences of several consonants in a row with no vowel between them — words like გვფრცქვნი (a real, if extreme, example often cited for its eight consecutive consonants) illustrate a genuine feature of Georgian phonology, not a typo or unusual loanword. More everyday words like მწვანე (green) and ცხრა (nine) still contain consonant clusters unfamiliar to typists used to more vowel-heavy languages, and they're worth deliberate practice rather than assumed to be rare edge cases.",
    },

    { type: "heading", text: "The Georgian Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows provides a dedicated Georgian keyboard layout mapping the 33-letter Mkhedruli alphabet to specific key positions. Because the script shares no structural similarity with QWERTY, Cyrillic, or other widely known layouts, and because there's no uppercase/lowercase Shift behavior to lean on for orientation, building genuine key-position muscle memory takes sustained, deliberate practice rather than relying on partial transfer from another script.",
    },

    { type: "heading", text: "Georgian Punctuation Follows European Conventions", id: "punctuation" },
    {
      type: "paragraph",
      text: "Unlike scripts that use distinct punctuation systems, modern Georgian generally uses standard European-style punctuation — periods, commas, question marks — directly alongside its unique letterforms. This means punctuation accuracy in Georgian typing comes down to ordinary care rather than learning an entirely separate punctuation system on top of the alphabet.",
    },

    { type: "heading", text: "What Is a Good Georgian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Georgian typing speed. Use your own first clean result as a baseline and track your own improvement over time.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Does Georgian have uppercase and lowercase letters?",
          answer:
            "No. Modern Georgian's Mkhedruli script has just one form per letter, with no case distinction, unlike Latin, Cyrillic, Greek, or Armenian.",
        },
        {
          question: "Why do Georgian words sometimes have so many consonants in a row?",
          answer:
            "Georgian phonology genuinely permits long consonant clusters with no vowels between them. This is a real feature of the language, not an unusual exception or typo.",
        },
        {
          question: "Is Georgian related to Armenian or Cyrillic scripts?",
          answer:
            "No. Georgian's Mkhedruli alphabet is entirely independent, sharing no letterforms with Latin, Cyrillic, Greek, or Armenian scripts.",
        },
        {
          question: "What is a good Georgian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time rather than comparing to an unsourced number.",
        },
      ],
    },

    {
      type: "cta",
      text: "აირჩიეთ თქვენი დრო, დაიწყეთ ბეჭდვა და მაშინვე ნახეთ თქვენი სისწრაფე და სიზუსტე.",
    },
  ],
};

export default content;
