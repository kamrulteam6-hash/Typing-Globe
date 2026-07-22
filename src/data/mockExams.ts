import type { Difficulty } from "@/data/texts";

export type ScoringMode = "wpm-kdph" | "wpm-adjusted" | "kph-numeric";

export type ExamLanguageRule = {
  /** Language code matching src/data/languages.ts */
  code: string;
  passWpm: number;
  /** Key Depressions Per Hour — the unit most Indian government exams actually score in (1 word = 5 depressions). */
  passKdph?: number;
  minWordCount?: number;
  passAccuracy?: number;
};

export type ErrorTolerance =
  | { type: "percent"; general: number; obcEws?: number; scStPwd?: number }
  | { type: "maxErrors"; max: number };

export type MockExam = {
  slug: string;
  name: string;
  authority: string;
  country: string;
  postName: string;
  durationSeconds: number;
  difficulty: Difficulty;
  scoringMode: ScoringMode;
  languageRules: ExamLanguageRule[];
  /** Some real exams (e.g. RRB NTPC) disable backspace entirely during the test. */
  restrictBackspace?: boolean;
  errorTolerance?: ErrorTolerance;
  /** "language" (default) pulls from the site's per-language sample text pools; "numeric" types a generated digit-group passage instead (10-key/data-entry style tests). */
  passageType?: "language" | "numeric";
  /** Overrides the results screen's speed-unit label (defaults to "KDPH" whenever passKdph is set). */
  displayUnit?: "KDPH" | "KPH";
  /** Shown only on lower-confidence entries whose figures are aggregated from prep sources, not an official circular. */
  confidenceNote?: string;
  seo: {
    intro: string;
    howItWorks: string[][];
    faq: { question: string; answer: string }[];
  };
};

export const mockExams: MockExam[] = [
  {
    slug: "ssc-chsl-typing-test",
    name: "SSC CHSL Typing Test",
    authority: "Staff Selection Commission (SSC)",
    country: "India",
    postName: "LDC / Junior Secretariat Assistant, Data Entry Operator",
    durationSeconds: 600,
    difficulty: "hard",
    scoringMode: "wpm-kdph",
    languageRules: [
      { code: "en", passWpm: 35, passKdph: 10500 },
      { code: "hi", passWpm: 30, passKdph: 9000 },
    ],
    seo: {
      intro:
        "SSC CHSL's skill test is a qualifying-only round — clear it and you're through, fall short and no amount of written-exam marks saves you. It's a 10-minute typing test on a formal, bureaucratic passage, and the language you choose at registration (English or Hindi) is locked in for the whole exam. This mock reproduces the same duration, the same style of passage, and the same net-WPM pass mark so you know exactly where you stand before test day.",
      howItWorks: [
        ["Duration", "10 minutes, single sitting"],
        ["Language", "English or Hindi — chosen once, matches the real exam's locked-in choice"],
        ["Passage style", "Formal government-office English (policy, administration, public-service topics)"],
        ["Pass mark", "35 WPM English (≈10,500 KDPH) or 30 WPM Hindi (≈9,000 KDPH)"],
        ["Scoring", "Qualifying only — no partial credit for speed above/below the cutoff"],
      ],
      faq: [
        {
          question: "Is SSC CHSL's typing test scored, or just pass/fail?",
          answer:
            "Pass/fail only. Speed above the minimum doesn't add marks — it just clears the skill-test round so your written-exam score can be considered.",
        },
        {
          question: "What is KDPH and why does SSC use it instead of WPM?",
          answer:
            "Key Depressions Per Hour — the government-exam convention where 1 word = 5 keystrokes. 35 WPM and 10,500 KDPH describe the same speed; SSC's official notifications use KDPH, so this mock shows both.",
        },
        {
          question: "Can I switch between English and Hindi during the real exam?",
          answer:
            "No — SSC locks your language choice at registration. This mock lets you freely try both so you can decide which one you're actually faster in before the real deadline to choose.",
        },
      ],
    },
  },
  {
    slug: "ssc-cgl-dest-typing-test",
    name: "SSC CGL DEST (Data Entry Speed Test)",
    authority: "Staff Selection Commission (SSC)",
    country: "India",
    postName: "Data Entry Operator (Tier 2)",
    durationSeconds: 900,
    difficulty: "hard",
    scoringMode: "wpm-kdph",
    languageRules: [{ code: "en", passWpm: 27, passKdph: 8000 }],
    errorTolerance: { type: "percent", general: 20, obcEws: 25, scStPwd: 30 },
    seo: {
      intro:
        "DEST is the mandatory Tier-2 skill test for candidates targeting the Data Entry Operator post specifically — 15 minutes, English only, and the one SSC typing round with genuine category-based error tolerance instead of a flat cutoff. This mock reproduces both the 8,000 KDPH speed target and the exact error-tolerance percentages for each reservation category.",
      howItWorks: [
        ["Duration", "15 minutes, English only"],
        ["Depression target", "2,000 key depressions minimum (≈8,000 KDPH)"],
        ["Error tolerance — General/UR", "Up to 20% of typed depressions may be errors"],
        ["Error tolerance — OBC/EWS", "Up to 25%"],
        ["Error tolerance — SC/ST/PwD", "Up to 30%"],
        ["Scoring", "Qualifying only — speed and error rate both have to clear your category's line"],
      ],
      faq: [
        {
          question: "Why does DEST have different error limits per category?",
          answer:
            "That's how SSC's own notification defines it — General/UR candidates are held to a stricter 20% error ceiling, while OBC/EWS gets 25% and SC/ST/PwD gets 30%. Select your category in the picker below to see your exact tolerance.",
        },
        {
          question: "Is DEST the same test as the SSC CHSL typing test?",
          answer:
            "No — DEST is specific to the CGL Data Entry Operator post and only runs in English, with a 15-minute duration and category-based error tolerance. CHSL's test is 10 minutes, offers a Hindi option, and has a flat pass mark for everyone.",
        },
      ],
    },
  },
  {
    slug: "rrb-ntpc-typing-test",
    name: "RRB NTPC Typing Skill Test",
    authority: "Railway Recruitment Board (RRB)",
    country: "India",
    postName: "NTPC clerical & graduate-level posts",
    durationSeconds: 600,
    difficulty: "hard",
    scoringMode: "wpm-kdph",
    languageRules: [
      { code: "en", passWpm: 30, passKdph: 9000, minWordCount: 300 },
      { code: "hi", passWpm: 25, passKdph: 7500, minWordCount: 250 },
    ],
    restrictBackspace: true,
    seo: {
      intro:
        "RRB NTPC's skill test has two ways to fail that catch people off guard: falling under the WPM cutoff, or clearing the WPM cutoff but not typing enough total words in the 10 minutes — a hard minimum-output rule most candidates don't find out about until it's too late. Backspace is also fully disabled on the real exam. This mock enforces both rules exactly, so you find out now, not on test day.",
      howItWorks: [
        ["Duration", "10 minutes, English or Hindi (locked at application)"],
        ["Pass mark", "30 WPM English / 25 WPM Hindi"],
        ["Hard minimum output", "300 words English / 250 words Hindi — required even if your WPM clears the bar"],
        ["Backspace", "Fully disabled — this mock blocks deletions the same way"],
      ],
      faq: [
        {
          question: "Can I really fail RRB NTPC even with a high enough WPM?",
          answer:
            "Yes — if you type quickly but stop early or pause too long, you may finish under the 300/250-word floor even with a passing WPM. Both rules are enforced independently in this mock.",
        },
        {
          question: "Why can't I use backspace here?",
          answer:
            "The real RRB NTPC exam disables backspace entirely, so mistakes stay in your typed text. This mock matches that constraint so you build the habit of typing forward and accepting small errors instead of stopping to fix them.",
        },
      ],
    },
  },
  {
    slug: "cpct-typing-test",
    name: "CPCT Typing Test",
    authority: "MAP-IT (Madhya Pradesh Agency for Promotion of Information Technology)",
    country: "India (Madhya Pradesh)",
    postName: "Clerk, DEO, LDC, ASI, Assistant Grade-III, and 50+ other MP state posts",
    durationSeconds: 900,
    difficulty: "medium",
    scoringMode: "wpm-kdph",
    languageRules: [
      { code: "en", passWpm: 30 },
      { code: "hi", passWpm: 20 },
    ],
    confidenceNote:
      "CPCT itself just certifies a score — the exact cutoff each recruiting department accepts can vary by notification. The figures here are the commonly-cited baseline; this mock also simplifies CPCT's real format (English and Hindi in the same 15-minute sitting) into one language at a time, so you can drill each separately.",
    seo: {
      intro:
        "CPCT isn't a one-time exam — it's a standing certificate (valid 7 years) that over 50 Madhya Pradesh state government posts require before you can even apply. The real test runs English and Hindi typing back-to-back in one 15-minute sitting; this mock lets you drill each language separately at the same duration and pass mark.",
      howItWorks: [
        ["Duration", "15 minutes per language (real CPCT runs both in one sitting)"],
        ["Pass mark", "30 Net WPM English / 20 Net WPM Hindi"],
        ["Certificate validity", "7 years — used across 50+ MP state recruitment notifications"],
      ],
      faq: [
        {
          question: "Do I need to pass both English and Hindi to get a CPCT certificate?",
          answer:
            "CPCT certifies your score in each language independently — some posts only require one. Check your target post's specific notification for which language(s) it needs.",
        },
        {
          question: "Does this mock combine English and Hindi like the real CPCT?",
          answer:
            "No — for focused practice, this mock runs one language per attempt. The real test gives you both in a single 15-minute sitting; once you're comfortable with each language separately, practicing back-to-back sessions is good final preparation.",
        },
      ],
    },
  },
  {
    slug: "upsssc-junior-assistant-typing-test",
    name: "UPSSSC Junior Assistant Typing Test",
    authority: "UP Subordinate Services Selection Commission (UPSSSC)",
    country: "India (Uttar Pradesh)",
    postName: "Junior Assistant, Junior Clerk, Assistant Grade-III",
    durationSeconds: 300,
    difficulty: "medium",
    scoringMode: "wpm-kdph",
    languageRules: [
      { code: "en", passWpm: 30 },
      { code: "hi", passWpm: 25 },
    ],
    restrictBackspace: true,
    confidenceNote:
      "UPSSSC's real backspace rule only allows correcting the current and immediately-preceding word, not full free editing. This mock simplifies that to backspace fully disabled, which is stricter practice than the real exam — a good thing to train against.",
    seo: {
      intro:
        "UPSSSC's typing round is short — just 5 minutes — which means every stumble costs proportionally more than in a 10 or 15-minute exam. English and Hindi are both tested the same day. This mock uses a stricter, fully-disabled backspace rule than the real exam's limited-correction allowance, so if you can clear this mock, the real thing's slightly more forgiving rules should feel easier.",
      howItWorks: [
        ["Duration", "5 minutes per language, both tested same day"],
        ["Pass mark", "30 WPM English / 25 WPM Hindi"],
        ["Error rule", "Real exam: first 5 wrong words are free, then each extra error deducts 5 words from your net count"],
        ["Backspace", "Real exam allows limited correction (current + previous word only); this mock blocks it entirely for stricter practice"],
      ],
      faq: [
        {
          question: "Why is this mock's backspace rule different from the real UPSSSC exam?",
          answer:
            "The real exam allows correcting your current and immediately-previous word, which is hard to replicate precisely in a browser. This mock instead disables backspace completely — a stricter constraint, so practicing here builds more typing discipline than the real exam actually requires.",
        },
        {
          question: "Is 5 minutes really enough time to prove your typing speed?",
          answer:
            "It's short by design — UPSSSC's format tests whether you can hit full speed immediately without a warm-up. Practicing at this exact duration is the best way to build that instant-start habit.",
        },
      ],
    },
  },
  {
    slug: "us-federal-clerk-typist-test",
    name: "US Federal Clerk-Typist Test",
    authority: "US Office of Personnel Management (OPM), GS-322 series",
    country: "United States",
    postName: "Clerk-Typist and related GS-300 clerical positions",
    durationSeconds: 300,
    difficulty: "medium",
    scoringMode: "wpm-adjusted",
    languageRules: [{ code: "en", passWpm: 40 }],
    errorTolerance: { type: "maxErrors", max: 3 },
    seo: {
      intro:
        "OPM's classic clerical-series typing standard: a 5-minute business-correspondence passage, a 40 WPM floor, and no more than 3 errors — one of the most widely-referenced typing benchmarks in US government and state-level clerical hiring (several state systems, including California's CalCareers, use the same band). This mock reproduces the exact duration, speed target, and error ceiling.",
      howItWorks: [
        ["Duration", "5 minutes"],
        ["Passage style", "Standard business/office correspondence"],
        ["Pass mark", "40 WPM"],
        ["Error tolerance", "3 errors maximum — a 4th error fails the test regardless of speed"],
      ],
      faq: [
        {
          question: "Is 40 WPM / 3 errors an official, universal US government standard?",
          answer:
            "It's the long-standing OPM benchmark for the GS-322 Clerk-Typist series and closely related clerical roles, and several state hiring systems use the same band. Individual agencies and roles can set their own thresholds, so always check your specific job posting.",
        },
        {
          question: "What happens if I make exactly 3 errors?",
          answer:
            "You still pass — the limit is a maximum of 3, so 3 errors is the last acceptable count. A 4th error fails the test even if your WPM clears 40.",
        },
      ],
    },
  },
  {
    slug: "epfo-ssa-typing-test",
    name: "EPFO SSA Typing Test",
    authority: "Employees' Provident Fund Organisation (EPFO)",
    country: "India",
    postName: "Social Security Assistant (SSA), Stenographer",
    durationSeconds: 600,
    difficulty: "hard",
    scoringMode: "wpm-kdph",
    languageRules: [
      { code: "en", passWpm: 35, passKdph: 10500 },
      { code: "hi", passWpm: 30, passKdph: 9000 },
    ],
    seo: {
      intro:
        "EPFO की Social Security Assistant (SSA) भर्ती का टाइपिंग टेस्ट (typing test) उसी 35/30 WPM ढांचे पर चलता है जो SSC CHSL में दिखता है — 10 मिनट, अंग्रेज़ी या हिंदी, और qualifying-only स्कोरिंग। EPFO's skill test doesn't add marks for extra speed — it simply has to be cleared, exactly like SSC CHSL's format, using the same 10,500/9,000 KDPH (key depressions per hour) benchmark.",
      howItWorks: [
        ["Duration", "10 minutes, single sitting"],
        ["Language", "English or Hindi — locked in at registration, same as SSC CHSL"],
        ["Pass mark", "35 WPM English (≈10,500 KDPH) or 30 WPM Hindi (≈9,000 KDPH)"],
        ["Scoring", "Qualifying only — क्वालिफाइंग टेस्ट, कोई अतिरिक्त अंक नहीं"],
      ],
      faq: [
        {
          question: "Is EPFO SSA's typing test the same format as SSC CHSL?",
          answer:
            "Yes — same 10-minute duration, same 35 WPM English / 30 WPM Hindi pass mark, and same KDPH convention. If you've prepared for CHSL's DEST, you're already prepared for EPFO SSA's.",
        },
        {
          question: "Kya EPFO ka typing test hindi mein diya ja sakta hai?",
          answer:
            "Haan — EPFO ka skill test English ya Hindi dono mein diya ja sakta hai, lekin aapko registration ke time hi apni language choose karni hoti hai.",
        },
      ],
    },
  },
  {
    slug: "fpsc-stenotypist-typing-test",
    name: "FPSC Stenotypist Typing Test",
    authority: "Federal Public Service Commission (FPSC)",
    country: "Pakistan",
    postName: "Stenotypist (federal posts)",
    durationSeconds: 300,
    difficulty: "medium",
    scoringMode: "wpm-kdph",
    languageRules: [{ code: "en", passWpm: 40 }],
    confidenceNote:
      "This mock covers only the English typing portion of FPSC's Stenotypist test (40 WPM, sourced from FPSC's official recruitment PDF). The full post also requires an 80 WPM shorthand dictation round, which needs audio playback and isn't built yet — treat this as typing-speed practice only, not the complete skill test.",
    seo: {
      intro:
        "FPSC کے Stenotypist بھرتی کے عمل میں ایک باقاعدہ ٹائپنگ ٹیسٹ (typing test) شامل ہے — 40 WPM انگریزی — جو شارٹ ہینڈ ڈکٹیشن سے پہلے یا الگ سے لیا جاتا ہے۔ FPSC's own recruitment notification confirms a straightforward 40 WPM English typing requirement, worth 50 marks, ahead of the separate 80 WPM shorthand round. This mock reproduces the typing portion exactly.",
      howItWorks: [
        ["Duration", "5 minutes, English"],
        ["Pass mark", "40 WPM (officially sourced — FPSC recruitment PDF)"],
        ["Marks", "50 marks for typing (out of 100 total, alongside the separate shorthand round)"],
        ["Not covered here", "The 80 WPM shorthand dictation round — needs audio playback, planned separately"],
      ],
      faq: [
        {
          question: "کیا یہ FPSC کے مکمل Stenotypist ٹیسٹ کی مشق ہے؟",
          answer:
            "نہیں — یہ صرف ٹائپنگ والا حصہ ہے (40 WPM انگریزی)۔ حقیقی امتحان میں شارٹ ہینڈ ڈکٹیشن کا حصہ بھی شامل ہے جو اس وقت دستیاب نہیں۔",
        },
        {
          question: "Is 40 WPM the only requirement for FPSC Stenotypist?",
          answer:
            "For the typing portion, yes — 40 WPM English. The full post additionally requires 80 WPM English shorthand dictation, tested separately and not covered by this mock.",
        },
      ],
    },
  },
  {
    slug: "ppsc-junior-clerk-typing-test",
    name: "PPSC Junior Clerk Typing Test",
    authority: "Punjab Public Service Commission (PPSC)",
    country: "Pakistan",
    postName: "Junior Clerk, Senior Assistant",
    durationSeconds: 300,
    difficulty: "easy",
    scoringMode: "wpm-kdph",
    languageRules: [{ code: "en", passWpm: 30 }],
    errorTolerance: { type: "percent", general: 8 },
    confidenceNote:
      "Figures are aggregated from PPSC exam-prep sources, not a single official circular — pass marks genuinely vary by cadre and advertisement (some list 25 WPM, others 35 WPM). This mock uses the commonly-cited 30 WPM / 8% error baseline. Verify against your specific vacancy notice.",
    seo: {
      intro:
        "پی پی ایس سی (PPSC) جونیئر کلرک بھرتی میں تحریری ٹیسٹ پاس کرنے کے بعد ایک کمپیوٹر ٹائپنگ ٹیسٹ (typing test) ہوتا ہے — اردو اور انگریزی دونوں میں۔ PPSC's Junior Clerk typing round runs after the 100-mark MCQ written test clears, testing computer typing speed with an error-tolerance ceiling rather than a flat pass/fail line.",
      howItWorks: [
        ["Duration", "5 minutes, English (after the MCQ written test)"],
        ["Pass mark", "~30 WPM, varies by cadre/advertisement (25–35 WPM range reported)"],
        ["Error tolerance", "Up to 8% of typed content may be errors"],
        ["Keyboard", "Urdu Phonetic layout used for the Urdu-language variant"],
      ],
      faq: [
        {
          question: "PPSC Junior Clerk ka typing test kitni speed manga hai?",
          answer:
            "Zyada tar advertisements mein 25 se 35 WPM ke darmiyan speed manga jata hai — is mock mein 30 WPM ka aam tor par istemal hone wala baseline use kiya gaya hai. Apni specific vacancy ka notice zaroor check karein.",
        },
        {
          question: "Does PPSC test both Urdu and English typing?",
          answer:
            "Depends on the post and department — some cadres (e.g. Police Department Junior Clerk) require both English and Urdu typing, while others test English only. Check your advertisement for the exact language requirement.",
        },
      ],
    },
  },
  {
    slug: "lok-sewa-aayog-kharidar-typing-test",
    name: "Lok Sewa Aayog Kharidar / Nayab Subba Typing Test",
    authority: "Public Service Commission (लोक सेवा आयोग)",
    country: "Nepal",
    postName: "Kharidar, Nayab Subba",
    durationSeconds: 300,
    difficulty: "easy",
    scoringMode: "wpm-kdph",
    languageRules: [
      { code: "ne", passWpm: 20 },
      { code: "en", passWpm: 35 },
    ],
    confidenceNote:
      "पद अनुसार गति फरक हुन सक्छ — Kharidar/Nayab Subba tahमा सामान्यतया 20 WPM नेपाली माग गरिन्छ, Section Officer tahमा झन्डै 25 WPM, र bilingual posts (जस्तै Foreign Affairs) मा 35 WPM अंग्रेजी। यो mock ले Kharidar/Nayab Subba को baseline प्रयोग गर्छ — आफ्नो vacancy notice अनुसार पक्का गर्नुहोस्।",
    seo: {
      intro:
        "लोक सेवा आयोगको Kharidar र Nayab Subba दरबन्दीको लागि टाइपिङ परीक्षा (typing exam) नेपाली युनिकोड वा प्रीति लेआउटमा लिइन्छ, सामान्यतया 5 मिनेटको एउटा अनुच्छेद टाइप गरेर। Nepal's Public Service Commission tests both Nepali (Devanagari) and, for bilingual posts, English typing speed — this mock reproduces the 5-minute format with the commonly-cited Kharidar/Nayab Subba pass mark.",
      howItWorks: [
        ["Duration", "5 minutes"],
        ["Language", "Nepali (Devanagari) or English, depending on the specific post"],
        ["Pass mark", "20 WPM Nepali (Kharidar/Nayab Subba) or 35 WPM English (bilingual posts)"],
        ["Keyboard", "Preeti or Unicode/Devanagari layout — varies by vacancy notice"],
        ["Scoring", "Net WPM = Gross WPM − errors"],
      ],
      faq: [
        {
          question: "के यो सबै लोक सेवा आयोगको जागिरका लागि उही मापदण्ड हो?",
          answer:
            "होइन — Kharidar/Nayab Subba तह २० WPM नेपाली प्रयोग गर्छ, तर Section Officer तह र bilingual posts (Foreign Affairs, Customs) मा फरक मापदण्ड हुन सक्छ। सधैं आफ्नो vacancy notice जाँच गर्नुहोस्।",
        },
        {
          question: "Does the real exam use Preeti or Unicode keyboard layout?",
          answer:
            "It varies by vacancy notice — Lok Sewa Aayog has used both Preeti and Unicode/Devanagari layouts across different cycles. Since this mock renders standard Unicode text, it's good speed practice regardless of which layout your real exam specifies.",
        },
      ],
    },
  },
  {
    slug: "sri-lanka-mso-typing-test",
    name: "Sri Lanka Management Service Officer (MSO) Typing Test",
    authority: "Public Service Commission of Sri Lanka",
    country: "Sri Lanka",
    postName: "Management Service Officer (MSO), Management Assistant",
    durationSeconds: 300,
    difficulty: "easy",
    scoringMode: "wpm-kdph",
    languageRules: [{ code: "en", passWpm: 30 }],
    confidenceNote:
      "Sourced from a Management Service Officer recruitment circular citing \"not less than 30 words per minute in English typing.\" Exact duration and passage-topic details vary by gazette notice — Sinhala and Tamil-medium typing tests also exist via provincial Public Service Commissions for related posts. Verify against your specific circular.",
    seo: {
      intro:
        "Sri Lanka's Public Service Commission recruits Management Service Officers (MSO) and Management Assistants with a typing-speed requirement cited in recruitment circulars as \"not less than 30 words per minute in English.\" This mock reproduces that baseline as a short, focused speed check.",
      howItWorks: [
        ["Duration", "5 minutes, English"],
        ["Pass mark", "30 WPM (cited in MSO recruitment circulars)"],
        ["Other languages", "Sinhala and Tamil-medium typing tests exist separately via provincial PSCs"],
      ],
      faq: [
        {
          question: "Is this the exact official Sri Lankan PSC exam format?",
          answer:
            "The 30 WPM figure comes from a real MSO recruitment circular, but exact duration and passage style vary by gazette notice — always confirm against your specific circular from the Department of Examinations or your recruiting PSC.",
        },
        {
          question: "Does this cover Sinhala or Tamil typing tests?",
          answer:
            "Not yet — this mock is English-only. Sinhala and Tamil-medium clerical typing tests exist through Sri Lanka's provincial Public Service Commissions and may be added in a future update.",
        },
      ],
    },
  },
  {
    slug: "delhi-high-court-typist-test",
    name: "Delhi High Court Typist / JJA Typing Test",
    authority: "Delhi High Court",
    country: "India",
    postName: "Typist, Junior Judicial Assistant (JJA)",
    durationSeconds: 600,
    difficulty: "hard",
    scoringMode: "wpm-kdph",
    languageRules: [
      { code: "en", passWpm: 35 },
      { code: "hi", passWpm: 30 },
    ],
    confidenceNote:
      "Delhi High Court runs its own recruitment (not through SSC) and figures shift slightly by cycle — some notifications list 40 WPM English specifically for the Typist post. This mock uses the commonly-cited 35/30 WPM JJA baseline. Delhi HC also mandates Mangal Unicode for Hindi (KrutiDev is not accepted here, unlike some other courts) — always verify against your current notification.",
    seo: {
      intro:
        "दिल्ली हाई कोर्ट अपनी खुद की भर्ती चलाता है (SSC के माध्यम से नहीं) — Typist और Junior Judicial Assistant (JJA) पदों के लिए टंकण परीक्षा (typing test) 10 मिनट की होती है, अंग्रेज़ी या हिंदी में। Delhi High Court's clerical typing round uses formal, legal-administrative English (or Hindi in Mangal Unicode specifically), distinct from SSC's general-administration passages.",
      howItWorks: [
        ["Duration", "10 minutes"],
        ["Language", "English or Hindi"],
        ["Pass mark", "35 WPM English / 30 WPM Hindi (some cycles list 40 WPM English for Typist specifically)"],
        ["Hindi font", "Mangal Unicode required — KrutiDev is not accepted at Delhi HC"],
        ["Passage style", "Legal/administrative formal English"],
      ],
      faq: [
        {
          question: "Kya Delhi High Court ka typing test SSC CHSL jaisa hi hai?",
          answer:
            "Format similar hai (10 minute, English/Hindi, qualifying-only) lekin Delhi High Court apni khud ki recruitment chalata hai — SSC ke through nahi. Hindi ke liye sirf Mangal Unicode accept hota hai, KrutiDev nahi.",
        },
        {
          question: "Why does the WPM requirement vary between notifications?",
          answer:
            "Delhi HC runs separate recruitment cycles for JJA and Typist posts, and each notification can set its own exact figure. This mock uses the commonly-cited baseline — always check your specific notification before test day.",
        },
      ],
    },
  },
  {
    slug: "rajasthan-high-court-ldc-typing-test",
    name: "Rajasthan High Court LDC Typing Test",
    authority: "Rajasthan High Court (HCRAJ)",
    country: "India",
    postName: "LDC / Junior Assistant",
    durationSeconds: 300,
    difficulty: "medium",
    scoringMode: "wpm-kdph",
    languageRules: [
      { code: "en", passWpm: 27, passKdph: 8000 },
      { code: "hi", passWpm: 27, passKdph: 8000 },
    ],
    confidenceNote:
      "The real HCRAJ exam runs English and Hindi in the same sitting (5 min each, 25 marks each) plus a separate 10-minute MS Word efficiency test. This mock simplifies that to one language per attempt, matching CPCT's approach — practice each separately, then try back-to-back sessions as final prep. Rajasthan HC mandates KrutiDev 010/Remington for Hindi (Mangal is not accepted here — the opposite of Delhi HC).",
    seo: {
      intro:
        "राजस्थान हाई कोर्ट (HCRAJ) की LDC भर्ती में दोनों भाषाओं — अंग्रेज़ी और हिंदी — का टंकण परीक्षा (typing test) एक ही दिन, 5-5 मिनट में लिया जाता है, साथ ही एक अलग MS Word efficiency test भी होता है। Rajasthan HC's format is distinctive for requiring KrutiDev/Remington Hindi — the opposite convention from Delhi HC's Mangal-only rule.",
      howItWorks: [
        ["Duration", "5 minutes per language (real exam: same sitting, both languages)"],
        ["Pass mark", "~8,000 KDPH in each language (English and Hindi)"],
        ["Hindi font", "KrutiDev 010 / Remington required — Mangal is NOT accepted at Rajasthan HC"],
        ["Also tested", "A separate 10-minute MS Word efficiency test (not covered by this mock)"],
      ],
      faq: [
        {
          question: "Kya Rajasthan High Court aur Delhi High Court ka Hindi font rule same hai?",
          answer:
            "Nahi — bilkul ulta hai. Rajasthan HC KrutiDev/Remington maangta hai aur Mangal accept nahi karta, jabki Delhi HC sirf Mangal Unicode accept karta hai. Apne specific court ka notification zaroor check karein.",
        },
        {
          question: "Does this mock include the MS Word efficiency test?",
          answer:
            "No — this mock covers only the typing-speed portion. The real HCRAJ exam also includes a separate 10-minute MS Word test, which isn't built here.",
        },
      ],
    },
  },
  {
    slug: "bcs-bpsc-typing-test",
    name: "BCS / BPSC Typing Test",
    authority: "Bangladesh Public Service Commission (BPSC)",
    country: "Bangladesh",
    postName: "BCS cadre clerical posts, Data Entry Operator",
    durationSeconds: 600,
    difficulty: "medium",
    scoringMode: "wpm-kdph",
    languageRules: [
      { code: "bn", passWpm: 20 },
      { code: "en", passWpm: 20 },
    ],
    confidenceNote:
      "These figures are aggregated from typing-practice and exam-prep sites, not a directly-sourced BPSC circular — treat as indicative, not official. The commonly-cited format is a 10-minute Bangla test plus a 10-minute English test, 20 WPM pass mark, 95% accuracy, using the mandatory Bijoy keyboard layout. Confirm against your specific BCS/BPSC notification.",
    seo: {
      intro:
        "BCS ক্যাডার এবং অন্যান্য BPSC নিয়োগে টাইপিং টেস্ট (typing test) সাধারণত বাংলা ও ইংরেজি উভয় ভাষায় নেওয়া হয় — প্রতিটির জন্য ১০ মিনিট, বিজয় কীবোর্ড লেআউট (Bijoy keyboard) ব্যবহার করে। Bangladesh Public Service Commission's clerical and Data Entry Operator recruitment typically tests both Bangla and English typing speed using the mandatory Bijoy layout, though exact figures vary by circular.",
      howItWorks: [
        ["Duration", "10 minutes Bangla + 10 minutes English"],
        ["Pass mark", "~20 WPM per language, ~95% accuracy (commonly cited, not officially confirmed)"],
        ["Keyboard", "Bijoy layout mandatory for Bangla"],
        ["Also seen", "Similar Bijoy-layout typing tests in Bangladesh Bank / Sonali / Janata / Agrani / Rupali Bank officer recruitment"],
      ],
      faq: [
        {
          question: "এই তথ্যগুলো কি অফিসিয়াল BPSC সার্কুলার থেকে নেওয়া?",
          answer:
            "না — এই সংখ্যাগুলো টাইপিং-প্র্যাকটিস ও প্রস্তুতি সাইট থেকে সংগৃহীত, সরাসরি কোনো BPSC সার্কুলার থেকে নয়। নিজের নির্দিষ্ট বিজ্ঞপ্তি (notification) যাচাই করে নেওয়া জরুরি।",
        },
        {
          question: "Does this apply to bank recruitment typing tests too?",
          answer:
            "The same Bijoy-layout, Bangla-typing format is commonly reported for Sonali, Janata, Agrani, and Rupali Bank officer/DEO recruitment — this mock's Bangla practice is useful prep for those as well, though exact bank-specific circulars should be checked separately.",
        },
      ],
    },
  },
  {
    slug: "employer-typing-assessment-test",
    name: "Employer Pre-Employment Typing Assessment",
    authority: "Common format across Indeed, Kenexa Prove It / SHL, and similar hiring platforms",
    country: "Global",
    postName: "Admin Assistant, Data Entry, Customer Service, and similar roles",
    durationSeconds: 300,
    difficulty: "medium",
    scoringMode: "wpm-adjusted",
    languageRules: [{ code: "en", passWpm: 40, passAccuracy: 96 }],
    confidenceNote:
      "Employer-set thresholds vary widely across platforms and job postings — commonly 35–45 WPM at 95–98% accuracy. This mock uses a representative mid-range standard (40 WPM / 96% accuracy); always check your specific job posting or assessment invite for its actual requirement.",
    seo: {
      intro:
        "Most pre-employment typing assessments — Indeed's built-in Typing Test, Kenexa Prove It (now under SHL), TestGorilla, Criteria Corp — share the same core shape: a short timed passage, scored on adjusted WPM (raw speed minus an error penalty) and accuracy, with the employer setting their own pass line. This mock uses the common 40 WPM / 96% accuracy mid-range standard so you can rehearse the format before a real hiring assessment.",
      howItWorks: [
        ["Duration", "5 minutes (platforms commonly use 3–5 minutes)"],
        ["Passage style", "General business/office correspondence"],
        ["Typical pass line", "35–45 WPM, 95–98% accuracy — this mock uses 40 WPM / 96%"],
        ["Scoring", "Adjusted WPM — raw speed minus an error penalty, same as Kenexa Prove It's model"],
      ],
      faq: [
        {
          question: "Will this match the exact assessment my employer is using?",
          answer:
            "Not exactly — every platform (Indeed, Prove It/SHL, TestGorilla, Criteria Corp) sets its own duration and threshold, and individual employers customize further. This mock uses a realistic, common mid-range standard for general practice, not a specific vendor's exact test.",
        },
        {
          question: "What's \"adjusted WPM\" and why does it matter?",
          answer:
            "It's raw typing speed minus a penalty for errors — the same idea as \"net WPM,\" and the metric platforms like Kenexa Prove It actually report. Accuracy matters as much as raw speed for passing.",
        },
      ],
    },
  },
  {
    slug: "10-key-data-entry-test",
    name: "10-Key Numeric Data Entry Test",
    authority: "Common format across TestGorilla, Criteria Corp, and other data-entry hiring assessments",
    country: "Global",
    postName: "Data Entry Clerk, 10-Key/Numeric Operator roles",
    durationSeconds: 300,
    difficulty: "medium",
    scoringMode: "kph-numeric",
    passageType: "numeric",
    displayUnit: "KPH",
    languageRules: [{ code: "en", passWpm: 33, passKdph: 10000, passAccuracy: 95 }],
    errorTolerance: { type: "percent", general: 5 },
    confidenceNote:
      "KPH (Keystrokes Per Hour) benchmarks vary by employer: under 6,000 is beginner, 8,000–10,000 is a common entry-level baseline, 10,000–12,000 is considered strong. This mock uses the 10,000 KPH / 95% accuracy line as a representative \"good\" target.",
    seo: {
      intro:
        "Unlike prose-based typing tests, 10-key data entry tests measure how fast and accurately you can enter pure numeric records — invoice numbers, account codes, amounts — the way TestGorilla, Criteria Corp, and similar platforms test for data-entry and numeric-operator roles. Scored in KPH (Keystrokes Per Hour) rather than WPM, this mock generates a realistic numeric passage in grouped-digit records, just like real invoice/account data.",
      howItWorks: [
        ["Duration", "5 minutes"],
        ["Passage style", "Randomly generated numeric records (grouped digits), no letters"],
        ["Pass mark", "10,000 KPH, 95% accuracy — a common \"good\" baseline"],
        ["Scoring", "KPH (Keystrokes Per Hour) — the standard 10-key/numeric-entry metric"],
      ],
      faq: [
        {
          question: "Why is this scored in KPH instead of WPM?",
          answer:
            "Numeric data entry has no \"words\" — every keystroke is a digit, so the standard metric is Keystrokes Per Hour rather than Words Per Minute. This mock reports your speed the same way real 10-key assessments do.",
        },
        {
          question: "Is 10,000 KPH a hard official standard?",
          answer:
            "No single official number exists — benchmarks widely cited across data-entry hiring range from under 6,000 KPH (beginner) to 12,000+ (advanced). 8,000–10,000 KPH is commonly described as a solid entry-level target, which this mock uses as its pass line.",
        },
      ],
    },
  },
];

export function getMockExamBySlug(slug: string): MockExam | undefined {
  return mockExams.find((e) => e.slug === slug);
}
