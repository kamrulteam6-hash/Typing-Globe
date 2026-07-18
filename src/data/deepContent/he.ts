import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Hebrew Typing Test — מבחן הקלדה בעברית (WPM)",
  seoDescription:
    "Free Hebrew typing test — measure your real WPM typing עברית right-to-left. Practice for jobs, exams, and everyday keyboard fluency. No signup.",
  researchedKeywords: [
    "hebrew typing test",
    "מבחן הקלדה בעברית",
    "hebrew typing speed test online",
    "wpm test hebrew",
    "hebrew keyboard layout",
    "type hebrew online free",
    "הקלדה עיוורת בעברית",
    "hebrew rtl typing practice",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Hebrew is spoken by roughly 9 million people, the vast majority in Israel, where it is the primary official language and the language of daily government, media, and business life. It is also studied and spoken by Jewish communities worldwide, particularly in the United States, and remains central to religious and liturgical life for Jews globally regardless of their everyday spoken language.",
        "Typing speed in Hebrew carries real weight in Israel's job market: administrative, legal, and government clerical roles frequently list Hebrew typing speed as a screening criterion, and dedicated הקלדה עיוורת (touch-typing) certification courses are common preparation for office and secretarial positions. Because Hebrew is written right-to-left, comfortable typing also requires real familiarity with how cursor direction and mixed Hebrew-English text behave — a skill distinct from left-to-right typing that takes practice to master.",
        "This test measures your Hebrew typing speed with real right-to-left sentences, giving you a live WPM and accuracy score you can trust.",
      ],
    },
    { type: "heading", text: "How Hebrew Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "Hebrew typing speed is measured in WPM (words per minute), using the international standard of five characters per word. Because Hebrew is normally written without vowel points (niqqud) in everyday text, typing speed reflects consonantal script entry rather than fully vocalized text, which is reserved mostly for children's books, poetry, and religious texts.",
    },
    { type: "heading", text: "Keyboard Layout and Special Characters", id: "keyboard" },
    {
      type: "paragraph",
      text: "Hebrew uses its own right-to-left script and a dedicated keyboard layout that maps the 22-letter Hebrew alphabet onto standard QWERTY key positions. Typing direction automatically flows right-to-left in Hebrew input mode, and most operating systems handle switching between Hebrew and Latin text (for numbers, URLs, or English words) automatically within the same line.",
    },
    {
      type: "table",
      headers: ["Character", "How to Type It"],
      rows: [
        ["Final letters (ך ם ן ף ץ)", "Automatically inserted by most Hebrew input methods at the end of a word, or typed via dedicated keys"],
        ["Niqqud (vowel points)", "Available via Alt Gr / Shift combinations on the Hebrew layout, rarely used in everyday typing"],
        ["Switching Hebrew ↔ Latin text mid-line", "Handled automatically by bidirectional text rendering in most modern software"],
        ["Hebrew on a non-Hebrew keyboard (Windows)", "Add the Hebrew input language and switch with the language-switch shortcut"],
        ["Hebrew on Mac (any layout)", "System Settings → Keyboard → Input Sources → add Hebrew, then switch with Control + Space"],
      ],
    },
    {
      type: "table",
      headers: ["Task", "Windows", "Mac"],
      rows: [
        ["Add Hebrew keyboard", "Settings → Time & Language → Language & region → Add a language → עברית → Add keyboard", "System Settings → Keyboard → Input Sources → Edit → + → Hebrew"],
        ["Switch input language quickly", "Win + Space", "Control + Space"],
      ],
    },
    { type: "heading", text: "Hebrew Typing Speed Benchmarks (WPM)", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "Level", "Real-World Context"],
      rows: [
        ["Below 20 WPM", "Beginner", "Still adjusting to the right-to-left flow and letter positions"],
        ["20–35 WPM", "Below Average", "Functional but slower than most office-role expectations"],
        ["35–45 WPM", "Average", "Typical for a comfortable, untrained adult typist"],
        ["45–60 WPM", "Good", "Meets most Israeli administrative and customer-service job requirements"],
        ["60–75 WPM", "Professional", "Competitive for secretarial, legal, and transcription roles"],
        ["75+ WPM", "Expert", "Top-tier speed among trained Hebrew touch-typists"],
      ],
    },
    { type: "heading", text: "Real Jobs Where Hebrew Typing Speed Matters", id: "requirements" },
    {
      type: "table",
      headers: ["Country", "Role or Exam", "Typical Requirement"],
      rows: [
        ["Israel", "Government and municipal clerical positions", "Hebrew typing speed is a common screening criterion, often assessed with a timed test"],
        ["Israel", "Legal secretary and law-office administrative roles", "Fast, accurate Hebrew typing is a routine hiring requirement, frequently backed by הקלדה עיוורת certification"],
        ["Israel", "Data-entry and customer-service positions", "Employers frequently list a comfortable WPM range in job postings"],
        ["Israel", "Court reporting and medical transcription", "High accuracy on formal Hebrew text is prioritized alongside speed"],
      ],
    },
    { type: "heading", text: "Hebrew Around the World", id: "diaspora" },
    {
      type: "table",
      headers: ["Country / Region", "Context"],
      rows: [
        ["Israel", "Home to the vast majority of native and daily Hebrew speakers; primary official language"],
        ["United States", "Large Jewish community with Hebrew taught widely in day schools and synagogues"],
        ["United Kingdom, France & Canada", "Sizable Jewish communities maintaining Hebrew for religious and cultural life"],
        ["Global Jewish diaspora", "Hebrew remains the shared liturgical language across Jewish communities worldwide"],
      ],
    },
    {
      type: "paragraph",
      text: "Hebrew's literary continuity spans from the Hebrew Bible (Tanakh) through medieval poets like Yehuda Halevi to modern Nobel laureate S. Y. Agnon and contemporary writers like Amos Oz — a rare linguistic thread connecting ancient and modern text, and a genuinely rich source for typing practice.",
    },
    { type: "heading", text: "Who Is This Test Built For", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏛️ Job seekers preparing for government and administrative roles in Israel",
        "⚖️ Legal secretaries and office staff typing Hebrew daily",
        "💻 Data-entry and customer-service professionals across Israel",
        "🎓 Students and Hebrew-school learners building keyboard fluency",
        "🕎 Diaspora Jews reconnecting with reading and writing עברית",
        "📝 Writers and content creators producing Hebrew-language material",
        "⌨️ Anyone new to right-to-left typing building muscle memory",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Hebrew typing speed?",
          answer:
            "45–60 WPM is comfortable for most administrative and customer-service work in Israel, while 60+ WPM is considered professional-level, especially for secretarial and legal roles.",
        },
        {
          question: "Is Hebrew typing harder because it's right-to-left?",
          answer:
            "It takes adjustment if you're used to left-to-right typing, but most operating systems handle the direction switch and mixed Hebrew-English text automatically, so fluency comes with practice rather than special technique.",
        },
        {
          question: "Do I need to type Hebrew vowel points (niqqud)?",
          answer:
            "No — everyday Hebrew text, including this test, is written without niqqud. Vowel points are mostly reserved for children's books, poetry, and religious texts.",
        },
        {
          question: "How is WPM calculated on this test?",
          answer:
            "Every five typed characters, including spaces and punctuation, counts as one word. Net WPM subtracts a penalty for uncorrected errors, reflecting real usable output.",
        },
        {
          question: "Is this typing test free?",
          answer: "Yes — completely free, no signup, no download, and unlimited attempts.",
        },
      ],
    },
    {
      type: "cta",
      text: "בחר את משך המבחן, התחל להקליד, וצפה במהירות ה-WPM ובדיוק שלך באופן מיידי.",
    },
  ],
};

export default content;
