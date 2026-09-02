import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Danish Typing Test · Dansk | WPM & Accuracy",
  seoDescription:
    "Take a free Danish typing test and check WPM and accuracy. Practice æ, ø, å, the Danish keyboard layout, and real Dansk text.",
  researchedKeywords: [
    "Danish typing speed test",
    "Danish WPM test",
    "Danish keyboard test",
    "skrivehastighedstest",
    "skriveøvelser dansk",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Danish adds æ, ø, and å to the Latin alphabet — the same three letters used in Norwegian, though pronounced somewhat differently and, notably, sorted in a different order at the end of the Danish alphabet (æ, ø, å) than in Norwegian (æ, ø, å is actually shared, but be aware Swedish orders them å, ä, ö). These are genuinely independent letters, not accented variants of a, o, or another vowel.",
        "This test measures how quickly and accurately you can type real Danish sentences, including its three extra letters.",
      ],
    },

    { type: "heading", text: "Æ, Ø, and Å Are Independent Letters", id: "extra-letters" },
    {
      type: "paragraph",
      text: "In Danish, æ, ø, and å sit at the end of the alphabet as their own distinct letters, not accented versions of a and o — Danish dictionaries and word lists sort them accordingly, after z. Common words like læse (to read), øl (beer), and år (year) depend on these exact letters; substituting the plain vowel changes the spelling and usually the meaning.",
    },

    { type: "heading", text: "The Danish Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "The Danish keyboard layout places æ, ø, and å on dedicated keys to the right of the standard QWERTY letter block — structurally similar in concept to the Norwegian layout, since both languages share these three letters, though the two countries' physical keyboards aren't identical in every other respect. This gives direct, efficient access to all three special letters without relying on Alt codes for everyday typing.",
    },

    { type: "heading", text: "Compound Words Run Together Without Spaces", id: "compound-words" },
    {
      type: "paragraph",
      text: "Like other Germanic languages, Danish builds long compound nouns by joining words directly together — arbejdsmarked (labor market), sygehusophold (hospital stay) — without spaces between the components. Reading the compound as meaningful chunks, rather than inserting an incorrect space out of English habit, keeps spelling accurate at typing speed.",
    },

    { type: "heading", text: "Capital Æ, Ø, and Å in Names and Headings", id: "capitals" },
    {
      type: "paragraph",
      text: "Uppercase Æ, Ø, and Å appear regularly in Danish names, place names such as Ærø or Ålborg, and headings, and should be typed with the same accuracy as their lowercase forms rather than simplified to plain A or O because the capital form feels less familiar to reach.",
    },

    { type: "heading", text: "What Is a Good Danish Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Danish typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Are æ, ø, and å accented letters or separate letters?",
          answer:
            "They are separate letters in the Danish alphabet, placed after z, not accented variants of a and o. Danish dictionaries and word lists sort them accordingly.",
        },
        {
          question: "Is the Danish keyboard the same as the Norwegian one?",
          answer:
            "Structurally similar since both languages use æ, ø, and å, but the physical keyboards aren't identical in every respect — treat them as related but separately learned layouts.",
        },
        {
          question: "Why are Danish compound words so long?",
          answer:
            "Danish joins compound nouns directly together without spaces, similar to German and Swedish. Reading the compound as meaningful word chunks helps avoid inserting an incorrect space.",
        },
        {
          question: "What is a good Danish typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Vælg din tid, begynd at skrive, og se din hastighed og nøjagtighed med det samme.",
    },
  ],
};

export default content;
