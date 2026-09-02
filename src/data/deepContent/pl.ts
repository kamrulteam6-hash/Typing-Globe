import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Polish Typing Test · Polski | WPM & Accuracy",
  seoDescription:
    "Take a free Polish typing test and check WPM and accuracy. Practice ą ć ę ł ń ó ś ź ż, digraphs, and the Polish Programmers keyboard layout.",
  researchedKeywords: [
    "Polish typing speed test",
    "Polish WPM test",
    "Polish keyboard test",
    "test szybkości pisania",
    "ćwiczenia pisania na klawiaturze",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Polish adds nine diacritic letters to the Latin alphabet — more than most European languages — and combines them with a set of digraphs (cz, sz, rz, dz, dź, dż) that represent single sounds. That density of special characters and multi-letter sound units makes Polish orthography genuinely demanding, even though the base script is familiar Latin.",
        "This test measures how quickly and accurately you can type real Polish sentences, including its full diacritic set and key digraphs.",
      ],
    },

    { type: "heading", text: "Nine Diacritic Letters", id: "diacritics" },
    {
      type: "paragraph",
      text: "Polish uses ą, ć, ę, ł, ń, ó, ś, ź, and ż — each a distinct letter, not a stylistic accent on a plainer base. Ą and ę mark nasal vowels (similar in concept to Portuguese nasal tildes), ó represents a sound historically distinct from o, and ł is pronounced like an English w rather than a traditional l sound. Dropping any of these changes the word, and several — like ż versus ź — represent genuinely different consonant sounds that a fast typist can easily confuse.",
    },

    { type: "heading", text: "Digraphs Represent Single Sounds", id: "digraphs" },
    {
      type: "paragraph",
      text: "Polish uses cz, sz, rz, dz, dź, and dż as two- or three-character sequences representing single consonant sounds, similar in concept to English 'ch' or 'sh' but more extensive. These aren't accidental letter pairs — czas (time), szkoła (school), and rzeka (river) all rely on their digraph being typed as a complete, correct unit rather than approximated with a single letter.",
    },

    { type: "heading", text: "The Polish Programmers Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "The Polish Programmers layout is the standard modern Polish keyboard, keeping the familiar QWERTY letter positions and accessing the nine diacritic letters through Alt Gr combinations on the corresponding plain letter (Alt Gr + a for ą, Alt Gr + z for ż, and so on). An older, less common Polish Typist layout rearranges the letters entirely and is rarely used today outside specific legacy contexts.",
    },

    { type: "heading", text: "Ż vs. Ź: A Genuine Confusion Point", id: "z-dot-vs-acute" },
    {
      type: "paragraph",
      text: "Ż (with a dot above) and ź (with an acute accent) represent different sounds and are not interchangeable, even though they can look similar at a glance — możny (mighty) versus a word using ź illustrates the real spelling distinction. Practicing minimal pairs that isolate this contrast is one of the more efficient ways to build Polish typing accuracy.",
    },

    { type: "heading", text: "What Is a Good Polish Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Polish typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "How many diacritic letters does Polish have?",
          answer:
            "Nine: ą, ć, ę, ł, ń, ó, ś, ź, and ż. Each is a distinct letter carrying real spelling and often pronunciation information, not a decorative accent.",
        },
        {
          question: "Why is ł pronounced like a w?",
          answer:
            "Ł represents a sound that shifted historically from a traditional l sound to a w-like sound in modern standard Polish, but it remains its own distinct letter in spelling.",
        },
        {
          question: "How do I type Polish diacritics on a standard keyboard?",
          answer:
            "The Polish Programmers layout, the modern standard, keeps QWERTY letter positions and accesses diacritics through Alt Gr plus the corresponding plain letter.",
        },
        {
          question: "What is a good Polish typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Wybierz swój czas, zacznij pisać i od razu zobacz swoją szybkość i dokładność.",
    },
  ],
};

export default content;
