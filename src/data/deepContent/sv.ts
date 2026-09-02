import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Swedish Typing Test · Svenska | WPM & Accuracy",
  seoDescription:
    "Take a free Swedish typing test and check WPM and accuracy. Practice å, ä, ö, the Swedish keyboard layout, and real Svenska text.",
  researchedKeywords: [
    "Swedish typing speed test",
    "Swedish WPM test",
    "Swedish keyboard test",
    "skrivhastighetstest",
    "skrivträning svenska",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Swedish adds three letters to the Latin alphabet — å, ä, and ö — that are treated as genuinely separate letters at the end of the alphabet, not as accented variants of a, and o. That distinction matters for typing, alphabetizing, and spelling alike.",
        "This test measures how quickly and accurately you can type real Swedish sentences, including its three extra letters and correct keyboard layout.",
      ],
    },

    { type: "heading", text: "Å, Ä, and Ö Are Independent Letters", id: "extra-letters" },
    {
      type: "paragraph",
      text: "In Swedish, å, ä, and ö sit at the end of the alphabet as their own letters, distinct from a and o rather than accented versions of them — this is why Swedish dictionaries and word lists sort them after z. Common words like sång (song), läsa (to read), and öl (beer) show why substituting the plain vowel changes both the spelling and, often, the meaning entirely.",
    },

    { type: "heading", text: "The Swedish Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "Swedish keyboards place å, ä, and ö on dedicated keys to the right of the standard QWERTY letter block, replacing positions used for punctuation on a US layout. This gives direct, single-keystroke access to all three extra letters, making regular use of a proper Swedish keyboard layout far more efficient than relying on Alt codes or copy-paste, which are better treated as an occasional fallback than a daily typing method.",
    },

    { type: "heading", text: "Compound Words Run Together Without Spaces", id: "compound-words" },
    {
      type: "paragraph",
      text: "Swedish, like other Germanic languages, freely builds long compound nouns by joining words directly together — arbetsmarknad (labor market), sjukhusvistelse (hospital stay) — without spaces between the components. English speakers sometimes insert an incorrect space inside these compounds by habit; reading the compound as meaningful chunks, rather than inserting a break that doesn't belong, keeps the spelling accurate at speed.",
    },

    { type: "heading", text: "Capital Å, Ä, and Ö Appear in Names and Headings", id: "capitals" },
    {
      type: "paragraph",
      text: "Uppercase Å, Ä, and Ö are common in Swedish names, city names such as Örebro or Åre, and headings, and should be typed with the same accuracy as their lowercase forms rather than replaced with plain A or O because the capital form is less familiar to type.",
    },

    { type: "heading", text: "What Is a Good Swedish Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Swedish typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Are å, ä, and ö accented letters or separate letters?",
          answer:
            "They are separate letters in the Swedish alphabet, placed after z, not accented variants of a and o. Swedish word lists and dictionaries sort them accordingly.",
        },
        {
          question: "Does Swedish need a special keyboard?",
          answer:
            "The standard Swedish keyboard layout places å, ä, and ö on dedicated keys for direct single-keystroke access, which is far more efficient than relying on Alt codes for regular typing.",
        },
        {
          question: "Why are Swedish compound words so long?",
          answer:
            "Swedish joins compound nouns directly together without spaces, similar to German. Reading the compound as meaningful word chunks helps avoid inserting an incorrect space.",
        },
        {
          question: "What is a good Swedish typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Välj din tid, börja skriva och se din hastighet och noggrannhet direkt.",
    },
  ],
};

export default content;
