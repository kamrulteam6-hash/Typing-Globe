import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "English Typing Speed Test — Check Your WPM in 60 Seconds",
  seoDescription:
    "Free English typing speed test — check your real WPM and accuracy instantly. Average is 40 WPM; see benchmarks by job, age, and skill level. No signup.",
  researchedKeywords: [
    "english typing test",
    "typing speed test online free",
    "wpm test",
    "average typing speed wpm",
    "words per minute test",
    "typing test by job",
    "gross wpm vs net wpm",
    "free typing test no signup",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "The English typing speed test is the global standard for measuring keyboard performance. Whether you're applying for a remote job, prepping for a government exam, gunning for a data entry role, or just genuinely curious how fast you type — your WPM number tells you exactly where you stand.",
        "Take our free English typing speed test right now. No account. No downloads. Just type, and we'll give you your real WPM and accuracy score in under a minute.",
      ],
    },
    { type: "heading", text: "What Does Your WPM Score Actually Mean?", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "WPM stands for Words Per Minute. But here's what most people don't know — in every standard typing test, a \"word\" isn't a real English word. It's any 5 characters, including spaces and punctuation. That keeps scoring fair across short words like \"the\" and long ones like \"incomprehensible.\"",
    },
    {
      type: "paragraph",
      text: "The formula we use:",
    },
    {
      type: "callout",
      icon: "🧮",
      title: "WPM Formulas",
      text: "Gross WPM = Total characters typed ÷ 5 ÷ Minutes. Net WPM = Gross WPM − (Errors ÷ Minutes).",
    },
    {
      type: "paragraph",
      text: "Net WPM is always the number that matters — for job applications, government exams, and any professional benchmark. Gross WPM without accuracy is just vanity.",
    },
    {
      type: "table",
      headers: ["Score Type", "What It Measures", "When It Counts"],
      rows: [
        ["Gross WPM", "Raw speed, all words", "Baseline reference"],
        ["Net WPM", "Speed minus errors", "Job requirements, exams"],
        ["Accuracy %", "Correctness rate", "Quality indicator"],
        ["CPM", "Characters per minute", "Some employer tests"],
      ],
    },
    { type: "heading", text: "What Is the Average English Typing Speed?", id: "average-speed" },
    {
      type: "paragraph",
      text: "Based on analysis of over 10.4 million typing tests from 2023–2025, the global average sits at 40–41.6 WPM for adults. But that headline number hides a lot. Here's the real breakdown by skill level:",
    },
    {
      type: "table",
      headers: ["WPM Range", "Level", "What It Looks Like"],
      rows: [
        ["Below 20", "Beginner", "Hunt-and-peck, two fingers"],
        ["20–35", "Below average", "Slow but functional"],
        ["35–50", "Average", "Typical adult, everyday use"],
        ["50–70", "Above average", "Comfortable professional typist"],
        ["70–90", "Fast", "Top 15% of all typists"],
        ["90–120", "Very fast", "Professional typists, top 5%"],
        ["120+", "Elite", "Competitive typists, top 1–2%"],
      ],
    },
    {
      type: "paragraph",
      text: "The world record for English typing speed is over 200 WPM — but for real-world purposes, 60 WPM with 95%+ accuracy is the sweet spot most professionals aim for.",
    },
    { type: "heading", text: "English Typing Speed Requirements by Job", id: "job-requirements" },
    {
      type: "paragraph",
      text: "Your target WPM depends entirely on what you need it for. Here's what employers and exams actually require:",
    },
    {
      type: "table",
      headers: ["Role / Context", "Minimum WPM", "Accuracy", "Notes"],
      rows: [
        ["General office work", "40–50 WPM", "90%+", "Emails, docs, scheduling"],
        ["Data Entry Operator", "60–80 WPM", "95%+", "Speed + accuracy both critical"],
        ["Customer service / live chat", "35–50 WPM", "90%+", "Response time matters"],
        ["Transcription (general)", "75 WPM", "98%+", "Audio-to-text, no errors"],
        ["Medical transcriptionist", "65–80 WPM", "99%+", "Specialized vocabulary"],
        ["Legal secretary / paralegal", "70–90 WPM", "99%+", "Legal docs, zero tolerance"],
        ["Content writer / journalist", "60–70 WPM", "95%+", "Volume and accuracy"],
        ["Programmer / developer", "50–65 WPM", "95%+", "IDE shortcuts matter more"],
        ["Government clerical (US/UK)", "40–50 WPM", "95%+", "SSC, civil service exams"],
        ["SSC CGL/CHSL (India)", "35 WPM net", "95%+", "10-min test, no backspace"],
        ["Court reporter / stenographer", "200+ WPM", "99%+", "Specialized steno machine"],
      ],
    },
    {
      type: "paragraph",
      text: "A study of 980 full-time employees found legal professionals are the fastest workplace typists, averaging 60.6 WPM. Tech workers spend the most time typing — 82.2% of their workday — but speed alone isn't their priority.",
    },
    { type: "heading", text: "WPM by Age Group — Where Do You Rank?", id: "age-groups" },
    {
      type: "paragraph",
      text: "Typing speed peaks between ages 18–24 (motor peak from gaming and academic intensity), then plateaus with experience:",
    },
    {
      type: "table",
      headers: ["Age Group", "Average WPM", "Notes"],
      rows: [
        ["13–17", "35–45 WPM", "School Chromebooks, heavy texting"],
        ["18–24", "45–55 WPM", "Motor peak, high screen time"],
        ["25–35", "48–55 WPM", "Experience offsets speed dip"],
        ["35–50", "40–50 WPM", "Steady, accuracy-focused"],
        ["50+", "30–45 WPM", "Slower but often more accurate"],
      ],
    },
    {
      type: "paragraph",
      text: "Tech professionals under 40 average closer to 52 WPM — well above the general adult median.",
    },
    { type: "heading", text: "Gross WPM vs Net WPM — Why the Difference Matters", id: "gross-vs-net" },
    {
      type: "paragraph",
      text: "This trips up a lot of people. You finish a test at 75 WPM — but your net score shows 58 WPM. What happened?",
    },
    {
      type: "paragraph",
      text: "Every uncorrected error subtracts from your net score. In most employer tests and government exams, only net WPM counts. Some exams — like SSC in India — don't even let you use backspace, meaning every error is permanent and directly tanks your score.",
    },
    {
      type: "paragraph",
      text: "Our test shows you both numbers so you know exactly where your errors are costing you speed.",
    },
    { type: "heading", text: "Hunt-and-Peck vs Touch Typing — The Speed Ceiling Problem", id: "touch-typing" },
    {
      type: "paragraph",
      text: "If you're typing with 2–4 fingers and looking at the keyboard, your absolute speed ceiling is around 40 WPM — no matter how many years of practice you put in. The physical constraint of searching for keys is the bottleneck.",
    },
    {
      type: "paragraph",
      text: "Touch typists — all 10 fingers, eyes on screen — regularly reach 70–90 WPM, with top practitioners hitting 120+. The difference isn't talent. It's technique.",
    },
    {
      type: "paragraph",
      text: "Research by Pinet et al. (2022) found that total accumulated typing exposure on natural text — not drilling — is the strongest predictor of long-term speed gains. In other words: type more, type often, and your speed follows.",
    },
    { type: "heading", text: "Who Should Use This Test?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "💼 Job applicants — remote work, data entry, admin, customer service, legal",
        "🎓 Students — college assignments, competitive exams, general productivity",
        "🏛️ Government exam aspirants — SSC, civil service, court clerk roles",
        "✍️ Writers and journalists — content output directly depends on WPM",
        "💻 Developers — faster typing means less friction between thinking and code",
        "🌍 Non-native English speakers — benchmark your English keyboard speed separately from your native language",
      ],
    },
    { type: "heading", text: "Before You Start — 3 Quick Tips", id: "tips" },
    {
      type: "list",
      ordered: true,
      items: [
        "Use a desktop keyboard — laptop keyboards and mobile give different results; test on the device you actually use for work",
        "Take 3 tests and average them — one test isn't your real speed; it's your best single run",
        "Aim for 95% accuracy first — if your accuracy is below 90%, slow down before you try to speed up",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good typing speed in WPM?",
          answer:
            "35–50 WPM is average for most adults. 50–70 WPM is above average and comfortable for professional work. 70+ WPM puts you in the top 15% of typists, and 90+ WPM is professional-typist territory.",
        },
        {
          question: "What's the difference between Gross WPM and Net WPM?",
          answer:
            "Gross WPM is raw speed with no penalty for mistakes: total characters ÷ 5 ÷ minutes. Net WPM subtracts your errors, and it's the number that actually counts on job applications, government exams, and professional benchmarks.",
        },
        {
          question: "Why can't I type faster than about 40 WPM?",
          answer:
            "If you're typing with 2–4 fingers and looking at the keyboard, 40 WPM is roughly the physical ceiling — the bottleneck is searching for keys, not effort. Touch typists using all 10 fingers without looking down regularly reach 70–90+ WPM.",
        },
        {
          question: "What typing speed do employers actually require?",
          answer:
            "It depends on the role: general office work wants 40–50 WPM, data entry 60–80 WPM, transcription roles 75+ WPM at 98%+ accuracy, and specialized roles like legal or medical transcription often require 65–90 WPM at 99% accuracy.",
        },
        {
          question: "Is this typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "Set your test duration above, hit Start, and find out exactly where your English typing speed stands today.",
    },
  ],
};

export default content;
