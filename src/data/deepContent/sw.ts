import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Swahili Typing Test · Kiswahili | WPM & Accuracy",
  seoDescription:
    "Take a free Swahili typing test and check WPM and accuracy. Practice Kiswahili spelling, standard Latin keyboard, and real Swahili sentences.",
  researchedKeywords: [
    "Swahili typing speed test",
    "Kiswahili WPM test",
    "Swahili keyboard test",
    "jaribio la kuandika Kiswahili",
    "kuandika Kiswahili kwa kasi",
    "mazoezi ya kuandika Kiswahili",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Kiswahili is written entirely with the standard Latin alphabet, so the keyboard itself is not the challenge. The real typing skill is spelling discipline: Kiswahili is a Bantu language with a regular but distinctive noun-class and verb-agreement system, which means prefixes attach to nearly every word and change depending on grammatical class.",
        "This test measures how quickly and accurately you can type real Kiswahili sentences, using a standard QWERTY layout with no special characters required.",
      ],
    },

    { type: "heading", text: "The Kiswahili Alphabet Uses Standard Latin Letters", id: "alphabet" },
    {
      type: "paragraph",
      text: "Kiswahili orthography, standardized in the early 20th century and maintained today by bodies such as Tanzania's Baraza la Kiswahili la Taifa (BAKITA), uses the 26 Latin letters with no diacritics or accented vowels in ordinary writing. The letters q and x do not appear in native Kiswahili vocabulary, and c is used only in the digraph ch. That makes a standard US or UK QWERTY keyboard fully sufficient — Microsoft does not maintain a separate Kiswahili keyboard layout because none is needed.",
    },

    { type: "heading", text: "Digraphs and Consonant Clusters Worth Practicing", id: "digraphs" },
    {
      type: "paragraph",
      text: "Kiswahili spelling relies on a small set of consistent digraphs: ch, dh, gh, kh, ng', ny, sh, and th. The apostrophe in ng' is meaningful — it distinguishes the velar nasal ng' (as in ng'ombe, cow) from the ordinary ng cluster (as in ngoma, drum). Dropping that apostrophe changes the spelling and is one of the most common typing errors in Kiswahili text. Practice words such as ng'ombe, ng'ambo, and kung'oa until the apostrophe becomes automatic rather than an afterthought.",
    },

    { type: "heading", text: "Noun-Class Prefixes Create Long, Predictable Words", id: "noun-class-prefixes" },
    {
      type: "paragraph",
      text: "Kiswahili organizes nouns into classes (m-/wa-, ki-/vi-, and others), and verbs must agree with the class of their subject and object through prefixes. This produces words that look long to a beginner but follow very regular patterns: mtu (person), watu (people), anasoma (he/she is reading), wanasoma (they are reading). Typing speed improves quickly once you recognize the prefix-plus-stem structure instead of typing each word as an unfamiliar string of letters.",
    },

    { type: "heading", text: "Vowels Are Always Pronounced and Always Written", id: "vowels" },
    {
      type: "paragraph",
      text: "Kiswahili has five vowels — a, e, i, o, u — and every vowel is pronounced clearly and written out; there are no silent letters or vowel reductions to worry about. This makes Kiswahili spelling largely phonetic: if you can say a word correctly, you can usually spell it correctly. The main typing risk is therefore not missing letters but dropping the apostrophe in ng' or mistyping a doubled vowel in words like saa (hour) or maisha (life).",
    },

    { type: "heading", text: "What Is a Good Kiswahili Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable national or regional benchmark for Kiswahili typing speed. Use your own first clean result as a baseline, and if you are preparing for a specific employer's assessment, use that employer's own stated requirement rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Does Kiswahili need a special keyboard?",
          answer:
            "No. Kiswahili uses the standard Latin alphabet with no accented letters, so an ordinary QWERTY keyboard works without any extra setup.",
        },
        {
          question: "What does the apostrophe in ng' mean?",
          answer:
            "It marks the velar nasal sound in words like ng'ombe (cow), distinguishing it from the ordinary ng cluster in words like ngoma (drum). Dropping it is a real spelling error, not a stylistic choice.",
        },
        {
          question: "Why do Kiswahili words look so long?",
          answer:
            "Kiswahili attaches noun-class and verb-agreement prefixes to nearly every word. Once you recognize the prefix-plus-stem pattern, these words become predictable rather than intimidating.",
        },
        {
          question: "What is a good Kiswahili typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer's stated requirement when one is actually published.",
        },
      ],
    },

    {
      type: "cta",
      text: "Chagua muda wa jaribio lako, anza kuandika, na uone WPM na usahihi wako papo hapo.",
    },
  ],
};

export default content;
