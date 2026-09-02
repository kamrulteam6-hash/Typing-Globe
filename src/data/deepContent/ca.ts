import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Catalan Typing Test · Català | WPM & Accuracy",
  seoDescription:
    "Take a free Catalan typing test and check WPM and accuracy. Practice l·l geminated l, open/closed accents, ç, and real Català text.",
  researchedKeywords: [
    "Catalan typing speed test",
    "Catalan WPM test",
    "Catalan keyboard test",
    "prova de velocitat d'escriptura",
    "exercicis de mecanografia",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Catalan uses a genuinely unique character among Romance languages: l·l, a geminated (doubled) l separated by a punt volat (interpunct dot), representing a distinct pronunciation from a plain doubled ll. Catalan also distinguishes open and closed vowel sounds through different accent marks on the same base vowel, a level of accent precision beyond what Spanish or French require.",
        "This test measures how quickly and accurately you can type real Catalan sentences, including its distinctive punt volat and full accent system.",
      ],
    },

    { type: "heading", text: "L·l: A Character Unique to Catalan", id: "punt-volat" },
    {
      type: "paragraph",
      text: "The punt volat (flying dot, ·) separates a doubled l in words like col·legi (school) or paral·lel (parallel), marking that the two l's are pronounced as separate geminated sounds rather than the single palatal sound represented by plain ll in Catalan (as in the common surname element -llar). This character is specific to Catalan among major Romance languages and is easy to omit by habit since it doesn't exist in Spanish, French, Portuguese, or Italian typing.",
    },

    { type: "heading", text: "Open vs. Closed Accent Marks", id: "open-closed-accents" },
    {
      type: "paragraph",
      text: "Catalan distinguishes open vowel sounds (marked with a grave accent: è, ò) from closed vowel sounds (marked with an acute accent: é, ó) on the same base letter — a level of precision not required in Spanish, which uses only the acute accent for stress regardless of vowel openness. Café uses é (closed), while cafè-adjacent open-vowel words use è — getting the accent direction wrong is a real spelling error, not a stylistic variant.",
    },

    { type: "heading", text: "Ç Marks an S-Sound Before A, O, U", id: "cedilla" },
    {
      type: "paragraph",
      text: "As in French and Portuguese, ç in Catalan shows that c represents an s-sound before a, o, or u, where plain c would otherwise indicate a k-sound — plaça (square/plaza) relies on this distinction. It's a required standard letter, not an optional flourish.",
    },

    { type: "heading", text: "The Catalan Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "Windows and most systems provide a dedicated Catalan keyboard layout with direct access to à, è, é, í, ï, ò, ó, ú, ü, ç, and the punt volat, avoiding the need for Alt codes or copy-paste for everyday Catalan typing. Confirming the correct Catalan layout is active — rather than a generic Spanish layout that lacks direct punt volat access — matters for efficient, accurate typing.",
    },

    { type: "heading", text: "What Is a Good Catalan Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Catalan typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is the punt volat?",
          answer:
            "A flying dot (·) that separates a geminated l in words like col·legi, marking a distinct pronunciation from plain doubled ll. It's a character specific to Catalan among major Romance languages.",
        },
        {
          question: "Why does Catalan use two different accent marks on vowels?",
          answer:
            "Catalan distinguishes open vowel sounds (grave accent: è, ò) from closed vowel sounds (acute accent: é, ó), a precision level not required in Spanish, which uses only the acute accent regardless of vowel openness.",
        },
        {
          question: "Is Catalan the same as Spanish for typing purposes?",
          answer:
            "No. Catalan has its own distinct character set, including the punt volat and the open/closed accent distinction, that Spanish typing doesn't require.",
        },
        {
          question: "What is a good Catalan typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Tria el teu temps, comença a escriure i veuràs a l'instant la teva velocitat i precisió.",
    },
  ],
};

export default content;
