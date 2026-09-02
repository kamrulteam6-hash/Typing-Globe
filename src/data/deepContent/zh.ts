import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Chinese Typing Test · 中文 | WPM & Accuracy",
  seoDescription:
    "Take a free Chinese typing test and check WPM and accuracy. Practice Pinyin input, tone entry, candidate selection, and real Chinese text.",
  researchedKeywords: [
    "Chinese typing speed test",
    "Chinese WPM test",
    "Pinyin typing test",
    "Chinese keyboard test",
    "打字速度测试",
    "打字练习",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Chinese typing doesn't map one keystroke to one character the way alphabetic typing does — instead, most typists use Pinyin input, typing the Romanized pronunciation of a word and then selecting the correct Chinese character from a list of candidates, since many different characters share the same or similar Pinyin spelling.",
        "This test measures how quickly and accurately you can produce real Chinese text through standard Pinyin input, including correct candidate selection.",
      ],
    },

    { type: "heading", text: "Pinyin Input: Typing Sound, Then Choosing the Character", id: "pinyin-input" },
    {
      type: "paragraph",
      text: "Pinyin is the standard Romanization system for Mandarin Chinese, and Pinyin-based input methods let you type a word's pronunciation using Latin letters, after which the input method editor (IME) presents a list of Chinese character candidates matching that sound for you to select. This means raw keystroke count and final character count are never the same thing — typing 'zhongguo' to produce 中国 (China) involves more physical keystrokes than the two-character result suggests.",
    },

    { type: "heading", text: "Homophone Density Makes Candidate Selection a Real Skill", id: "homophones" },
    {
      type: "paragraph",
      text: "Mandarin has an unusually large number of characters sharing identical or near-identical Pinyin spellings, differing only by tone or by being genuinely different words with the same sound — typing 'shi' alone can bring up dozens of candidate characters. Efficient Chinese typing therefore depends heavily on quickly and correctly picking the intended character from the candidate list, not just on typing the Pinyin quickly.",
    },

    { type: "heading", text: "Tone Numbers Are Often Optional in Modern IMEs", id: "tone-input" },
    {
      type: "paragraph",
      text: "Some Pinyin input methods let or require you to specify tone using a number after the syllable (ma1, ma2, ma3, ma4 for the four tones plus a neutral tone), which can narrow the candidate list, while many modern IMEs work without tone numbers at all, relying instead on frequency and context to guess the intended character. Which approach your input method uses is a real workflow difference worth knowing before comparing typing speed across different setups.",
    },

    { type: "heading", text: "Simplified vs. Traditional Characters", id: "simplified-traditional" },
    {
      type: "paragraph",
      text: "Mainland China primarily uses simplified characters, while Taiwan, Hong Kong, and Macau primarily use traditional characters — the two systems share most vocabulary and grammar but use visually different character forms for many common words. A typing test's source text should specify which system it uses, since simplified and traditional Chinese are genuinely different typing tasks even though both are read the same way linguistically.",
    },

    { type: "heading", text: "What Is a Good Chinese Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Chinese typing speed, and because IME composition means physical keystrokes and final character count aren't the same, comparisons across different input methods aren't meaningful anyway. Use your own first clean result under one consistent input method as a personal baseline.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "How does Chinese typing actually work?",
          answer:
            "Most typists use Pinyin input: you type a word's Romanized pronunciation, and the input method editor presents a list of matching Chinese characters for you to select, since many characters share similar Pinyin spellings.",
        },
        {
          question: "Do I need to type tone numbers when using Pinyin input?",
          answer:
            "It depends on the input method. Some let or require a tone number after the syllable to narrow candidates, while many modern IMEs work without them, relying on frequency and context instead.",
        },
        {
          question: "Is simplified Chinese the same as traditional Chinese?",
          answer:
            "They share most vocabulary and grammar but use visually different character forms. Mainland China primarily uses simplified characters, while Taiwan, Hong Kong, and Macau primarily use traditional ones — they're different typing tasks.",
        },
        {
          question: "What is a good Chinese typing speed?",
          answer:
            "There is no verified universal benchmark, and comparisons across different input methods aren't meaningful since keystroke count and character count differ. Track your own progress under one consistent method.",
        },
      ],
    },

    {
      type: "cta",
      text: "选择您的时间，开始打字，立即查看您的速度和准确率。",
    },
  ],
};

export default content;
