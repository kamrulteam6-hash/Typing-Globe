import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Dutch Typing Test · Nederlands | WPM & Accuracy",
  seoDescription:
    "Take a free Dutch typing test and check WPM and accuracy. Practice the ij digraph, doubled vowels for length, diaeresis, and real Nederlands text.",
  researchedKeywords: [
    "Dutch typing speed test",
    "Dutch WPM test",
    "Dutch keyboard test",
    "typetest Nederlands",
    "typoefeningen Nederlands",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Dutch spelling relies on doubled vowels and consonants to mark sound length rather than accent marks, and its distinctive ij digraph — sometimes treated as a single letter unit and even capitalized together, as in IJsselmeer — trips up typists who aren't expecting it.",
        "This test measures how quickly and accurately you can type real Dutch sentences, including its vowel-length spelling rules and the ij digraph.",
      ],
    },

    { type: "heading", text: "Doubled Vowels Mark Long Sounds", id: "vowel-length" },
    {
      type: "paragraph",
      text: "Dutch spelling uses doubled vowels — aa, ee, oo, uu — to show a long vowel sound in a closed syllable, while a single vowel in that position marks a short sound: maan (moon) versus man (man), or boot (boat) versus bot (bone). This is a real spelling rule with grammatical consequences (plural and conjugated forms often shift between single and double vowels), not a random doubling, so dropping a letter changes the word rather than just looking careless.",
    },

    { type: "heading", text: "The IJ Digraph Behaves Like a Single Unit", id: "ij-digraph" },
    {
      type: "paragraph",
      text: "Ij represents a single diphthong sound in Dutch and is treated as a unit strong enough that both letters are capitalized together at the start of a sentence or name — IJsland (Iceland), IJmuiden — rather than only the first letter. Typing Nederland or a similar word with only I capitalized where IJ starts the word is a common and noticeable error for non-native typists.",
    },

    { type: "heading", text: "Diaeresis Marks a Vowel Break", id: "diaeresis" },
    {
      type: "paragraph",
      text: "Dutch uses a diaeresis (two dots) over a vowel to show that it starts a new syllable rather than combining with the preceding vowel, as in coördinatie (coordination) or zeeën (seas). This is a pronunciation-clarifying mark required by standard spelling, not an optional accent, and appears often enough in ordinary formal writing to be worth deliberate practice.",
    },

    { type: "heading", text: "The Dutch Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "The Dutch keyboard layout keeps the QWERTY letter arrangement but relocates several punctuation and symbol keys compared to a US layout, and it provides direct access to the diaeresis as a dead key. Confirming the active layout before a timed test avoids punctuation-position mistakes being confused with genuine language errors.",
    },

    { type: "heading", text: "What Is a Good Dutch Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Dutch typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Why does Dutch double so many vowels?",
          answer:
            "Doubled vowels (aa, ee, oo, uu) mark a long vowel sound in a closed syllable, while a single vowel marks a short sound. It's a real spelling rule, not random repetition, and often shifts between singular and plural or conjugated forms.",
        },
        {
          question: "Is ij one letter or two?",
          answer:
            "Functionally it behaves as one unit representing a single diphthong sound, which is why both letters are capitalized together at the start of a word, as in IJsland.",
        },
        {
          question: "What does the diaeresis do in Dutch?",
          answer:
            "It marks that a vowel begins a new syllable rather than blending with the previous one, as in coördinatie. It's a required spelling mark, not an optional accent.",
        },
        {
          question: "What is a good Dutch typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Kies je tijd, begin met typen en bekijk direct je snelheid en nauwkeurigheid.",
    },
  ],
};

export default content;
