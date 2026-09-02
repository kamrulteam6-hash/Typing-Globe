import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Burmese Typing Test · မြန်မာ | WPM & Accuracy",
  seoDescription:
    "Take a free Burmese typing test and check WPM and accuracy. Practice Myanmar script stacked consonants, tone marks, and Unicode vs. Zawgyi encoding.",
  researchedKeywords: [
    "Burmese typing speed test",
    "Myanmar language typing test",
    "Burmese WPM test",
    "Burmese keyboard test",
    "မြန်မာ စာစီစာရိုက်စမ်းသပ်ချက်",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Burmese is written in the rounded Myanmar script, an abugida that stacks certain consonants below their base letter rather than placing them side by side, and Burmese digital text has a notable, real-world complication: the older Zawgyi font encoding and modern Unicode encoding are visually similar but technically incompatible, causing widespread display problems when they're mixed.",
        "This test measures how quickly and accurately you can type real Burmese text in standard Unicode encoding.",
      ],
    },

    { type: "heading", text: "Stacked Consonants Are a Genuine Structural Feature", id: "stacked-consonants" },
    {
      type: "paragraph",
      text: "Myanmar script allows certain consonants to stack directly below their base consonant rather than appearing in a simple left-to-right sequence, forming a genuine visual cluster that represents a consonant combination. This differs from the fused-ligature conjuncts seen in some other Brahmi-derived scripts — the stacking is a distinct visual convention specific to Myanmar script's structure, and typing it correctly means learning the specific input sequence your keyboard method uses.",
    },

    { type: "heading", text: "Zawgyi vs. Unicode: A Real, Ongoing Compatibility Problem", id: "zawgyi-vs-unicode" },
    {
      type: "paragraph",
      text: "For years, much Burmese digital text used Zawgyi, a non-standard font encoding that predates widespread Unicode support for Myanmar script and remains common on some older devices and in some existing content. Zawgyi and Unicode Burmese text look similar when displayed with the matching encoding but are technically incompatible — mixing them, or viewing Zawgyi text with a Unicode-only font, produces garbled, unreadable output. Myanmar's government and major platforms have pushed a transition to Unicode, and this test uses standard Unicode Burmese text, which is the correct target for modern, cross-platform-compatible typing.",
    },

    { type: "heading", text: "Burmese Often Doesn't Use Spaces Between Every Word", id: "spacing" },
    {
      type: "paragraph",
      text: "Similar to Thai and Lao, Burmese traditionally doesn't place a space after every individual word — spaces more commonly separate phrases or clauses, though modern digital writing sometimes adds more spacing than traditional print convention did. This means a typing test's word-per-minute score functions best as a standardized character-output measure rather than a literal count of space-separated words.",
    },

    { type: "heading", text: "Tone Marks Are Real, Meaningful Characters", id: "tone-marks" },
    {
      type: "paragraph",
      text: "Burmese is a tonal language, and its script includes tone-marking diacritics that are genuine, required characters in correct spelling, not optional additions. Omitting or misplacing a tone mark changes the written word, so a typing test measuring authentic Burmese text needs to score these marks with the same care as base consonants and vowel signs.",
    },

    { type: "heading", text: "What Is a Good Burmese Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Burmese typing speed. Use your own first clean result as a baseline and track your own improvement over time.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is the difference between Zawgyi and Unicode Burmese?",
          answer:
            "Zawgyi is an older, non-standard font encoding that predates full Unicode support for Myanmar script and remains in some older content. It looks similar to Unicode when rendered with a matching font, but the two are technically incompatible, and mixing them produces garbled text.",
        },
        {
          question: "Does Burmese put spaces between every word?",
          answer:
            "Not traditionally — spaces more commonly separate phrases or clauses rather than every individual word, similar to Thai and Lao, though modern digital writing sometimes adds more spacing.",
        },
        {
          question: "What are stacked consonants in Burmese script?",
          answer:
            "A structural feature where certain consonants attach directly below their base consonant rather than appearing in a simple left-to-right sequence, forming a genuine visual cluster.",
        },
        {
          question: "What is a good Burmese typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time rather than comparing to an unsourced number.",
        },
      ],
    },

    {
      type: "cta",
      text: "သင့်အချိန်ကို ရွေးချယ်ပါ၊ စာစီစာရိုက်စတင်ပါ၊ သင့်အမြန်နှုန်းနှင့် တိကျမှုကို ချက်ချင်းကြည့်ပါ။",
    },
  ],
};

export default content;
