import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free English Typing Test · WPM & Accuracy",
  seoDescription:
    "Take a free English typing test and check WPM and accuracy. Practice touch typing, punctuation, contractions, and real English sentences.",
  researchedKeywords: [
    "English typing speed test",
    "English WPM test",
    "typing test online free",
    "touch typing practice",
    "words per minute test",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "English typing looks simple because there are no accents or extra letters to reach for, but the language's irregular spelling, frequent homophones, and contraction-heavy punctuation still create real accuracy challenges — the mechanical keyboard task is easy, but the exact-transcription task is not automatic.",
        "This test measures how quickly and accurately you can type real English sentences, on the standard QWERTY keyboard layout used across most of the world.",
      ],
    },

    { type: "heading", text: "The QWERTY Layout Wasn't Designed for Speed", id: "qwerty-history" },
    {
      type: "paragraph",
      text: "The QWERTY keyboard layout, patented in the 1870s for early mechanical typewriters, arranges letters partly to reduce adjacent-key jams on those machines rather than to maximize typing speed on a modern keyboard. Alternative layouts such as Dvorak and Colemak claim ergonomic and speed advantages, but QWERTY remains the near-universal standard because of how deeply it's embedded in hardware, muscle memory, and software defaults — switching layouts is a real decision with real relearning costs, not a simple settings toggle.",
    },

    { type: "heading", text: "Homophones Are a Real Accuracy Trap", id: "homophones" },
    {
      type: "paragraph",
      text: "English has an unusually large number of homophones — words that sound identical but are spelled differently, such as there/their/they're, to/too/two, and its/it's. Because a typing test scores exact spelling, not meaning, these pairs are worth deliberate practice: typing from what a sentence sounds like in your head, rather than reading the actual letters on screen, is a common source of otherwise-avoidable errors.",
    },

    { type: "heading", text: "Contractions and the Apostrophe", id: "contractions" },
    {
      type: "paragraph",
      text: "English contracts words constantly in ordinary writing — don't, it's, we'll, shouldn't've — and each contraction places the apostrophe in a specific, non-negotiable position. A missing or misplaced apostrophe is a real spelling error even though the word usually remains readable, so contraction-heavy passages are a genuinely useful accuracy drill, not just a speed one.",
    },

    { type: "heading", text: "Silent Letters and Irregular Spelling", id: "silent-letters" },
    {
      type: "paragraph",
      text: "English spelling doesn't map cleanly onto pronunciation — words like knight, through, and Wednesday keep letters that aren't spoken, a legacy of centuries of borrowing from multiple source languages without a major spelling reform. Typing accuracy in English depends more on visual memory of correct spelling than on sounding a word out, which is why unfamiliar or irregularly spelled vocabulary can slow down even a fast, confident typist.",
    },

    { type: "heading", text: "What Is a Good English Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "Typing speed varies enormously by individual, task, and how much correction is tolerated, so use your own first clean result as a personal baseline rather than an unsourced universal number. For a specific employer or exam's requirement, use that source's actual published rule.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "Why is the keyboard arranged as QWERTY?",
          answer:
            "QWERTY dates to 1870s mechanical typewriters and was arranged partly to reduce adjacent-key jams on those machines, not to optimize typing speed. It remains standard mainly because of deep entrenchment in hardware and habit, not because it's proven fastest.",
        },
        {
          question: "Why do homophones cause typing errors?",
          answer:
            "Words like there/their/they're sound identical but are spelled differently. A typing test scores exact spelling, so typing from sound rather than reading the actual letters on screen is a common source of avoidable mistakes.",
        },
        {
          question: "Do contractions count as typing errors if the apostrophe is wrong?",
          answer:
            "Yes. A missing or misplaced apostrophe in a contraction like don't or it's is a real spelling error even though the word is usually still readable.",
        },
        {
          question: "What is a good English typing speed?",
          answer:
            "There is no single universal benchmark that applies to everyone. Use your own first clean result as a baseline and a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Choose your time, start typing, and see your speed and accuracy instantly.",
    },
  ],
};

export default content;
