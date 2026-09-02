import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Arabic Typing Test · العربية | WPM & Accuracy",
  seoDescription:
    "Take a free Arabic typing test and check WPM and accuracy. Practice right-to-left script, letter shape changes, and the Windows Arabic keyboard.",
  researchedKeywords: [
    "Arabic typing speed test",
    "Arabic WPM test",
    "Arabic keyboard test",
    "اختبار سرعة الكتابة بالعربية",
    "تمارين الطباعة العربية",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Arabic script runs right to left and is cursive by nature — most letters connect to their neighbors and change shape depending on whether they appear at the start, middle, or end of a word, or standing alone. That means typing Arabic accurately involves more than knowing the letters; it means trusting the input method to render the correct connected form rather than typing what the isolated letter shape looks like.",
        "This test measures how quickly and accurately you can type real Arabic text, including its right-to-left flow and correctly shaped letters.",
      ],
    },

    { type: "heading", text: "Arabic Letters Change Shape by Position", id: "letter-shapes" },
    {
      type: "paragraph",
      text: "Most Arabic letters have up to four distinct visual forms — isolated, initial, medial, and final — depending on where they fall in a word and which neighboring letters connect to them. This shaping happens automatically based on the underlying character you type; you don't select a specific shape yourself, and the same logical letter produces different connected forms depending on context, which is normal correct behavior, not a rendering glitch.",
    },

    { type: "heading", text: "Short Vowels Are Often Left Unwritten", id: "unwritten-vowels" },
    {
      type: "paragraph",
      text: "Standard Arabic text typically omits short-vowel diacritics (harakat) in everyday writing, relying on readers' knowledge of the language and context to supply the correct vowel sounds — only religious texts, children's material, and some educational content mark them fully. A typing test should reproduce whatever the source actually shows: an unvocalized passage and a fully diacritic-marked one are different typing tasks and shouldn't be benchmarked as equivalent.",
    },

    { type: "heading", text: "Right-to-Left Text with Embedded Numbers", id: "rtl-numbers" },
    {
      type: "paragraph",
      text: "Arabic runs right to left, while numerals and any embedded Latin text display left to right within the same line, governed by the Unicode Bidirectional Algorithm. A number or English word appearing to interrupt the visual flow of an Arabic sentence reflects correct rendering, not a typing error — and Arabic text itself commonly uses Eastern Arabic-Indic digit forms (٠١٢٣٤٥٦٧٨٩) in many regions, alongside Western numerals in others.",
    },

    { type: "heading", text: "Lam-Alef and Other Required Ligatures", id: "ligatures" },
    {
      type: "paragraph",
      text: "The combination of lam (ل) followed by alef (ا) is mandatorily written as a single ligature, لا, rather than as two separate connected letters — this isn't a stylistic choice but a required part of correct Arabic orthography. Typing lam and alef in sequence with a proper Arabic keyboard or input method produces this ligature automatically.",
    },

    { type: "heading", text: "What Is a Good Arabic Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Arabic typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Why do Arabic letters look different in different words?",
          answer:
            "Most Arabic letters have up to four shapes depending on their position in the word (isolated, initial, medial, final). This shaping is automatic and correct — you type the same underlying letter regardless of which visual form appears.",
        },
        {
          question: "Do I need to type Arabic vowel marks?",
          answer:
            "Usually not. Standard everyday Arabic text typically omits short-vowel diacritics, relying on context. Reproduce the source exactly — some passages include them, most don't.",
        },
        {
          question: "Why do numbers appear left to right in Arabic text?",
          answer:
            "Arabic script is right to left, but numerals and embedded Latin text display left to right within the same line. This is normal Unicode bidirectional behavior, not an error.",
        },
        {
          question: "What is a good Arabic typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "اختر وقتك، ابدأ الكتابة، وشاهد سرعتك ودقتك على الفور.",
    },
  ],
};

export default content;
