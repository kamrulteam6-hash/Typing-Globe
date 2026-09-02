import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Armenian Typing Test · Հայերեն | WPM & Accuracy",
  seoDescription:
    "Take a free Armenian typing test and check WPM and accuracy. Practice the unique Armenian alphabet, the և ligature, and the Windows Armenian keyboard.",
  researchedKeywords: [
    "Armenian typing speed test",
    "Armenian WPM test",
    "Armenian keyboard test",
    "հայերենի մուտքագրման տեստ",
    "մուտքագրման արագության վարժություններ",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Armenian is written in its own alphabet, created in the early 5th century by Mesrop Mashtots and used continuously since — it shares no letters with Latin, Cyrillic, or Greek scripts, so it requires its own dedicated keyboard layout rather than a variant of a more familiar one.",
        "This test measures how quickly and accurately you can type real Armenian text using the standard Armenian keyboard.",
      ],
    },

    { type: "heading", text: "A Fully Independent 39-Letter Alphabet", id: "independent-alphabet" },
    {
      type: "paragraph",
      text: "The classical Armenian alphabet has 36 original letters, with two more added later for Western Armenian sounds, bringing the modern total to 39 letters with distinct uppercase and lowercase forms. Because it doesn't overlap visually or phonetically with Latin, Cyrillic, or Greek, there's no shortcut through familiarity with another script — every key position has to be learned specifically for Armenian.",
    },

    { type: "heading", text: "The Ech-Yiwn Ligature (և)", id: "ech-yiwn-ligature" },
    {
      type: "paragraph",
      text: "Armenian includes a required ligature, և (ech-yiwn), historically formed from the combination of ե and ւ but functioning as its own letter in modern usage and appearing on its own dedicated keyboard key. It's a genuine, distinct character in ordinary Armenian text — not a stylistic combination you build manually from two separate letters — and should be typed as the single character it is.",
    },

    { type: "heading", text: "Eastern vs. Western Armenian", id: "eastern-western" },
    {
      type: "paragraph",
      text: "Armenian has two major standardized varieties — Eastern Armenian, spoken in Armenia, and Western Armenian, historically spoken across the diaspora and the Ottoman Empire — which differ in pronunciation and some vocabulary but share the same alphabet and script. A typing test doesn't need a different keyboard for the two varieties, but the vocabulary in a passage may reflect one tradition or the other.",
    },

    { type: "heading", text: "The Windows Armenian Keyboard", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows provides a dedicated Armenian keyboard layout mapping the full 39-letter alphabet, including և, to specific key positions. Because the layout shares no structural similarity with QWERTY, Cyrillic, or other familiar layouts, building genuine key-position muscle memory — rather than relying on visual hunting — takes deliberate, sustained practice.",
    },

    { type: "heading", text: "What Is a Good Armenian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Armenian typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "How many letters does the Armenian alphabet have?",
          answer:
            "36 original letters from the 5th-century creation by Mesrop Mashtots, plus two later additions for Western Armenian sounds, bringing the modern total to 39 letters.",
        },
        {
          question: "What is և?",
          answer:
            "Ech-yiwn is a required ligature functioning as its own letter in modern Armenian, with a dedicated key on the Armenian keyboard. It's a distinct character, not something typed by combining two separate letters manually.",
        },
        {
          question: "Does Armenian use the same alphabet as Russian or Greek?",
          answer:
            "No. Armenian's alphabet shares no letters with Latin, Cyrillic, or Greek scripts — it's fully independent and requires its own dedicated keyboard.",
        },
        {
          question: "What is a good Armenian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Ընտրեք ձեր ժամանակը, սկսեք մուտքագրել և անմիջապես տեսեք ձեր արագությունը և ճշգրտությունը։",
    },
  ],
};

export default content;
