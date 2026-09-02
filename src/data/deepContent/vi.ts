import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Vietnamese Typing Test · Tiếng Việt | WPM & Accuracy",
  seoDescription:
    "Take a free Vietnamese typing test and check WPM and accuracy. Practice tone marks, Telex/VNI input, and real Tiếng Việt text with full diacritics.",
  researchedKeywords: [
    "Vietnamese typing speed test",
    "Vietnamese WPM test",
    "Vietnamese keyboard test",
    "Telex typing test",
    "bài kiểm tra tốc độ gõ",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Vietnamese carries one of the heaviest diacritic loads of any Latin-script language: six tones marked with accent symbols stack on top of vowel-quality marks already present on letters like ă, â, ê, ô, ơ, and ư, meaning a single vowel can carry two layers of diacritics at once. Because no standard physical keyboard has enough keys for every combination directly, Vietnamese typists rely on input methods like Telex or VNI that build these combinations from ordinary keystrokes.",
        "This test measures how quickly and accurately you can type real Vietnamese sentences, including its full tone-and-vowel diacritic system.",
      ],
    },

    { type: "heading", text: "Six Tones Marked with Accent Symbols", id: "six-tones" },
    {
      type: "paragraph",
      text: "Vietnamese marks six tones: level (unmarked), sắc (acute accent, rising), huyền (grave accent, falling), hỏi (hook above, dipping-rising), ngã (tilde, creaky-rising), and nặng (dot below, heavy). Because Vietnamese has extremely dense homophone-like sets that differ only by tone, these marks aren't decorative — ma, má, mà, mả, mã, and mạ are six genuinely different words distinguished purely by tone.",
    },

    { type: "heading", text: "Tone Marks Stack on Top of Vowel-Quality Diacritics", id: "double-diacritics" },
    {
      type: "paragraph",
      text: "Vietnamese's base vowel letters already include diacritic-modified forms — ă, â, ê, ô, ơ, ư — each representing a distinct vowel quality, and a tone mark then attaches on top of that already-modified letter, producing forms like ấ, ằ, ệ that carry two separate layers of diacritic information simultaneously. Typing these accurately means getting both the vowel-quality mark and the tone mark correct, not just one or the other.",
    },

    { type: "heading", text: "Telex and VNI Input Methods", id: "telex-vni" },
    {
      type: "paragraph",
      text: "Because no standard keyboard has a dedicated key for every possible vowel-plus-tone combination, Vietnamese typists commonly use Telex (where you type extra Latin letters after a base vowel — for example, aa produces â, and typing s after a vowel adds the sắc tone) or VNI (where numbers after a vowel add tone marks, such as a1 for á). These are genuine input methods requiring their own learned key sequences, not simplified shortcuts, and switching between them mid-practice will disrupt your typing rhythm.",
    },

    { type: "heading", text: "Đ Is a Separate Letter from D", id: "d-stroke" },
    {
      type: "paragraph",
      text: "Đ (d with a horizontal stroke) represents a distinct consonant sound from plain d and is treated as its own letter in the Vietnamese alphabet — đi (to go) is not interchangeable with di. It's typed as its own character in both Telex (usually dd) and VNI (usually d9), not built from a plain d plus a diacritic mark.",
    },

    { type: "heading", text: "What Is a Good Vietnamese Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Vietnamese typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "How many tones does Vietnamese mark in writing?",
          answer:
            "Six: level (unmarked), sắc, huyền, hỏi, ngã, and nặng. Because so many Vietnamese words are otherwise identical except for tone, these marks are essential, not decorative.",
        },
        {
          question: "What are Telex and VNI?",
          answer:
            "Standard Vietnamese input methods that build accented and tone-marked letters from ordinary keystrokes — Telex uses extra Latin letters, VNI uses numbers — since no keyboard has a dedicated key for every combination.",
        },
        {
          question: "Is đ the same letter as d?",
          answer:
            "No, đ represents a distinct consonant sound and is treated as its own letter in the Vietnamese alphabet, separate from plain d.",
        },
        {
          question: "What is a good Vietnamese typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Chọn thời gian của bạn, bắt đầu gõ, và xem ngay tốc độ cùng độ chính xác của bạn.",
    },
  ],
};

export default content;
