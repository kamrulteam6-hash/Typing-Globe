import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Estonian Typing Test · Eesti | WPM & Accuracy",
  seoDescription:
    "Take a free Estonian typing test and check WPM and accuracy. Practice õ ä ö ü, three-way sound length distinctions, and real Eesti text.",
  researchedKeywords: [
    "Estonian typing speed test",
    "Estonian WPM test",
    "Estonian keyboard test",
    "kirjutamiskiiruse test",
    "trükkimisharjutused eesti keeles",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Estonian adds õ, ä, ö, and ü to the Latin alphabet, and õ in particular is genuinely distinctive — it doesn't appear in Finnish, Estonian's closest major relative, even though the two languages share ä, ö, and ü. Estonian also distinguishes three degrees of sound length rather than the simple short/long split found in many other languages.",
        "This test measures how quickly and accurately you can type real Estonian sentences, including its four accented letters.",
      ],
    },

    { type: "heading", text: "Õ Is Uniquely Estonian", id: "o-tilde" },
    {
      type: "paragraph",
      text: "Õ represents a vowel sound not found in most neighboring languages, including Finnish, and appears in extremely common words such as õun (apple) and õpetaja (teacher). Because it has no close equivalent that a typist might already have muscle memory for, it deserves dedicated practice rather than being lumped in with the more internationally familiar ä, ö, and ü.",
    },

    { type: "heading", text: "Three Degrees of Sound Length", id: "three-way-length" },
    {
      type: "paragraph",
      text: "Estonian distinguishes short, long, and overlong sounds for many vowels and consonants — a three-way system rather than the simpler short/long contrast found in Finnish or German. Written Estonian doesn't always mark this distinction explicitly with doubled letters the way Finnish does, which means correct spelling depends more on knowing the specific word than on a consistent visual rule, making accurate transcription from a real source especially important rather than typing from assumed pronunciation.",
    },

    { type: "heading", text: "The 32-Letter Estonian Alphabet", id: "alphabet" },
    {
      type: "paragraph",
      text: "The standard Estonian alphabet has 32 letters, including š and ž (used mainly in loanwords and foreign names) alongside õ, ä, ö, and ü. Letters c, q, w, x, and y appear only in foreign words and names, not in native Estonian vocabulary, similar to the pattern seen in several other Nordic and Baltic-adjacent languages.",
    },

    { type: "heading", text: "The Estonian Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "The standard Estonian keyboard layout is QWERTY-based and provides dedicated keys for õ, ä, ö, and ü, avoiding the need for Alt codes during regular typing. Confirming the correct Estonian layout is active before a timed test — rather than a similar-looking Finnish or generic Nordic layout — helps ensure all four special characters are reachable exactly where expected.",
    },

    { type: "heading", text: "What Is a Good Estonian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Estonian typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Is õ used in Finnish too?",
          answer:
            "No. Õ is a distinctively Estonian letter representing a vowel sound not found in Finnish, even though the two languages share ä, ö, and ü.",
        },
        {
          question: "How many sound lengths does Estonian have?",
          answer:
            "Three: short, long, and overlong. This is a genuine three-way distinction rather than the simpler short/long contrast found in many other languages, and it isn't always marked explicitly in spelling.",
        },
        {
          question: "How many letters are in the Estonian alphabet?",
          answer:
            "32, including õ, ä, ö, ü, and š/ž (used mainly in loanwords). Letters c, q, w, x, and y appear only in foreign words and names.",
        },
        {
          question: "What is a good Estonian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Vali oma aeg, alusta trükkimist ja näe kohe oma kiirust ning täpsust.",
    },
  ],
};

export default content;
