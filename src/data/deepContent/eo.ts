import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Esperanto Typing Test · Esperanto | WPM & Accuracy",
  seoDescription:
    "Take a free Esperanto typing test and check WPM and accuracy. Practice ĉ ĝ ĥ ĵ ŝ ŭ, the h-system and x-system fallbacks, and real Esperanto text.",
  researchedKeywords: [
    "Esperanto typing speed test",
    "Esperanto WPM test",
    "Esperanto keyboard test",
    "tajpa rapideca testo",
    "tajpaj ekzercoj Esperanto",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Esperanto was designed in the 1880s to be perfectly phonetic — every letter represents exactly one sound, with no silent letters or irregular spellings — but it adds six accented letters that don't correspond to standard keyboard keys, which has led to well-established fallback typing conventions when a proper Esperanto layout isn't available.",
        "This test measures how quickly and accurately you can type real Esperanto sentences, including its six accented consonants and one accented vowel.",
      ],
    },

    { type: "heading", text: "Six Letters Not Found on a Standard Keyboard", id: "accented-letters" },
    {
      type: "paragraph",
      text: "Esperanto adds ĉ, ĝ, ĥ, ĵ, ŝ (each with a circumflex) and ŭ (with a breve) to the Latin alphabet, representing sounds like English ch, j, a guttural h, the s in 'measure', sh, and a w-like sound respectively. None of these appear on a standard international keyboard by default, which is unusual for a constructed language explicitly designed for maximum simplicity everywhere else.",
    },

    { type: "heading", text: "The H-System and X-System Fallbacks", id: "fallback-systems" },
    {
      type: "paragraph",
      text: "Because typing the true accented letters wasn't always practical, especially in the pre-Unicode era, the Esperanto community developed two standardized ASCII fallback conventions: the h-system, which follows the base letter with h (ch, gh, hh, jh, sh, uh — Ĝis via revido becomes Gxis via revido under the x-system, or Ghis via revido under the h-system), and the more common x-system, which follows the base letter with x (cx, gx, hx, jx, sx, ux). These are recognized substitution conventions, not incorrect spelling, when a proper accented keyboard isn't available — but a genuine typing test should still score the actual accented characters when the source uses them.",
    },

    { type: "heading", text: "Esperanto Is Perfectly Phonetic", id: "phonetic-spelling" },
    {
      type: "paragraph",
      text: "Unlike English, French, or many other natural languages, Esperanto has no irregular spellings, silent letters, or homophones to worry about — every letter is pronounced exactly one way, always. This removes an entire category of typing errors common in natural languages; the main accuracy risk in Esperanto is specifically the six accented letters, not general spelling unpredictability.",
    },

    { type: "heading", text: "No Standard Physical Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "There is no single universally standard hardware keyboard layout for Esperanto the way there is for many national languages, since Esperanto has no single country or government maintaining an official one. Typists commonly use Unicode-aware compose-key setups, custom input methods, or on-screen character pickers to enter the six accented letters directly, alongside the h-system and x-system as text-based fallbacks.",
    },

    { type: "heading", text: "What Is a Good Esperanto Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Esperanto typing speed. Use your own first clean result as a baseline and track your own improvement over time.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Which letters does Esperanto add to the Latin alphabet?",
          answer:
            "Ĉ, ĝ, ĥ, ĵ, ŝ (with circumflexes), and ŭ (with a breve) — six accented letters representing sounds not covered by plain Latin letters.",
        },
        {
          question: "What is the x-system?",
          answer:
            "A widely used ASCII fallback where each accented letter is written as the base letter followed by x (cx for ĉ, gx for ĝ, and so on), used when a proper Esperanto keyboard isn't available.",
        },
        {
          question: "Is Esperanto spelling regular?",
          answer:
            "Yes, completely — every letter represents exactly one sound with no exceptions, silent letters, or homophones, which removes an entire category of errors common in natural languages.",
        },
        {
          question: "What is a good Esperanto typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time rather than comparing to an unsourced number.",
        },
      ],
    },

    {
      type: "cta",
      text: "Elektu vian tempon, komencu tajpi, kaj tuj vidu vian rapidecon kaj precizecon.",
    },
  ],
};

export default content;
