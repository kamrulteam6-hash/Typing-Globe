import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Finnish Typing Test · Suomi | WPM & Accuracy",
  seoDescription:
    "Take a free Finnish typing test and check WPM and accuracy. Practice ä ö, doubled letters for length, long inflected words, and real Suomi text.",
  researchedKeywords: [
    "Finnish typing speed test",
    "Finnish WPM test",
    "Finnish keyboard test",
    "kirjoitusnopeustesti",
    "näppäilyharjoitukset",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Finnish spelling is famously consistent — nearly every sound maps to exactly one letter, and vice versa — but that same consistency means doubled letters carry real, load-bearing grammatical weight: tuli (fire), tuuli (wind), and tulli (customs) are three completely different words distinguished only by vowel and consonant length.",
        "This test measures how quickly and accurately you can type real Finnish sentences, including its precise doubled-letter spelling and heavily inflected word forms.",
      ],
    },

    { type: "heading", text: "Doubled Letters Are Not Optional Emphasis", id: "doubled-letters" },
    {
      type: "paragraph",
      text: "Finnish distinguishes short and long vowels, and short and long consonants, purely by whether the letter is written once or twice — tuli/tuuli/tulli above is the classic example, but this pattern recurs throughout the language. A missing or extra doubled letter isn't a minor typo; it produces an entirely different, unrelated word, which makes doubled-letter accuracy one of the most consequential typing skills in Finnish.",
    },

    { type: "heading", text: "Ä and Ö Complete the Alphabet", id: "a-o-umlaut" },
    {
      type: "paragraph",
      text: "Finnish adds ä and ö to the Latin alphabet — shared visually with Swedish and German, though pronounced somewhat differently — and treats them as fully independent letters positioned at the end of the alphabet, not as accented variants of a and o. Common words like äiti (mother) and työ (work) rely on these letters being typed exactly, not approximated with plain vowels.",
    },

    { type: "heading", text: "Agglutination Creates Very Long Words", id: "agglutination" },
    {
      type: "paragraph",
      text: "Finnish is a highly agglutinative language with around fifteen grammatical cases, building meaning by stacking suffixes onto a word stem rather than using separate preposition words the way English does. This regularly produces long, dense words — a single Finnish word can express what takes an entire phrase in English — so reading the stem and following suffix chain as one unit, rather than typing letter by letter, becomes essential once passages get beyond simple vocabulary.",
    },

    { type: "heading", text: "The Finnish Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "The standard Finnish keyboard layout, shared in structure with the Swedish layout, is QWERTY-based with dedicated keys for ä and ö positioned to the right of the standard letter block. This gives efficient, direct access to both extra letters without relying on Alt codes for everyday typing.",
    },

    { type: "heading", text: "What Is a Good Finnish Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Finnish typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Why do doubled letters matter so much in Finnish?",
          answer:
            "Finnish distinguishes short and long vowels and consonants purely by writing a letter once or twice. Tuli, tuuli, and tulli are three unrelated words differing only in doubled letters, so getting this wrong changes the meaning entirely.",
        },
        {
          question: "Are ä and ö accented letters?",
          answer:
            "No, they're treated as fully independent letters at the end of the Finnish alphabet, similar in status to å, ä, ö in Swedish, not as accented versions of a and o.",
        },
        {
          question: "Why are Finnish words so long?",
          answer:
            "Finnish is highly agglutinative with around fifteen grammatical cases, building meaning by stacking suffixes onto a stem rather than using separate preposition words, which naturally produces long, dense forms.",
        },
        {
          question: "What is a good Finnish typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Valitse aikasi, aloita kirjoittaminen ja katso heti nopeutesi ja tarkkuutesi.",
    },
  ],
};

export default content;
