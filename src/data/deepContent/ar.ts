import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Arabic Typing Speed Test — اختبار سرعة الكتابة بالعربية",
  seoDescription:
    "Free Arabic typing speed test — اختبار الكتابة العربية. Right-to-left interface, Arabic 101 keyboard, harakat support. Check your WPM & accuracy. No signup.",
  researchedKeywords: [
    "arabic typing test",
    "arabic typing speed test",
    "اختبار الكتابة العربية",
    "اختبار سرعة الكتابة",
    "arabic keyboard typing test",
    "rtl typing test arabic",
    "arabic 101 keyboard typing test",
    "arabic typing test online free",
    "arabic typing test with harakat",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Arabic is the 4th most spoken language on Earth — with over 400 million native speakers across 22 countries, and an additional 1.8 billion people who read Arabic script for religious purposes. In the Middle East and North Africa, fast and accurate Arabic typing isn't just a nice-to-have — it's a baseline job requirement for government roles, administrative work, legal documentation, media, and data entry across the entire region.",
        "Our free Arabic typing speed test (اختبار سرعة الكتابة بالعربية) measures your real WPM, accuracy, and CPM — in a proper right-to-left interface, using authentic Arabic text, with full support for the Arabic 101 keyboard layout. No signup. No download. Just type and see your score.",
        "اختبر الآن سرعة كتابتك بالعربية — اختر مدة الاختبار، واضغط ابدأ، وستحصل على كلمات في الدقيقة (WPM) ونسبة دقتك فوراً.",
      ],
    },
    { type: "heading", text: "What Makes Arabic Typing Uniquely Challenging", id: "why-different" },
    {
      type: "paragraph",
      text: "Arabic is fundamentally different from every left-to-right language — and that affects your typing in ways most test tools don't acknowledge. Here's what you're actually dealing with:",
    },
    {
      type: "table",
      headers: ["Feature", "Arabic Script", "Latin Scripts"],
      rows: [
        ["Direction", "Right-to-left (RTL) — كتابة من اليمين إلى اليسار", "Left-to-right (LTR)"],
        ["Letter forms", "Each of the 28 letters has 4 positional forms — initial, medial, final, isolated", "Single fixed form"],
        ["Connected letters", "Most letters connect to both neighbors — ligatures form automatically", "Letters are separate"],
        ["Vowels", "Usually omitted in everyday text — reader infers from context", "Always written"],
        ["Harakat / Tashkeel", "Diacritical marks (فَتْحة، كَسْرة، ضَمَّة) typed via Shift combinations", "Not applicable"],
        ["Numerals", "Both Eastern (١٢٣) and Western (123) Arabic numerals used", "Western only"],
        ["Special ligature", "لا (lam-alef) is a mandatory single connected form", "Not applicable"],
      ],
    },
    {
      type: "paragraph",
      text: "This complexity means Arabic typists typically score 20–30% lower than their English WPM on their first attempt — not because they're slow, but because the script demands a fundamentally different kind of spatial and muscle memory. Once the layout is automatic, speed improves rapidly.",
    },
    { type: "heading", text: "The Arabic 101 Keyboard — لوحة المفاتيح العربية 101", id: "keyboard-layout" },
    {
      type: "paragraph",
      text: "The standard layout for Arabic typing worldwide is the Arabic (101) keyboard — also called Arabic QWERTY. It maps Arabic letters to English QWERTY key positions, with the most commonly used letters on the home row for efficient touch typing. Key things you need to know before your test:",
    },
    {
      type: "list",
      items: [
        "Home row: your fingers rest on أ-س-د-ف (left) and ج-ك-ل-؛ (right)",
        "Harakat via Shift: Shift+Q = فتحة (fatha ـَ) | Shift+A = كسرة (kasra ـِ) | Shift+E = ضمة (damma ـُ) | Shift+W = شدة (shadda ـّ) | Shift+S = سكون (sukun ـْ)",
        "لا ligature: the lam-alef combination (لا) appears as a single connected form — most keyboards have a dedicated key for it",
        "Two number systems: Eastern Arabic numerals (١، ٢، ٣) are available via keyboard — used in Arabic documents across the Gulf and North Africa",
        "Arabic 101 vs Arabic 102: almost identical — same letter positions, minor symbol differences. Build your muscle memory on Arabic 101 and you can adapt to either instantly.",
      ],
    },
    {
      type: "callout",
      icon: "⌨️",
      title: "How to enable Arabic keyboard",
      text: "Windows: Settings → Time & Language → Language → Add Arabic → select Arabic (101). Mac: System Settings → Keyboard → Input Sources → add Arabic – PC keyboard. Linux: Settings → Region & Language → Input Sources → Arabic (Egypt) or Arabic.",
    },
    { type: "heading", text: "Arabic Typing Speed Benchmarks — كم كلمة في الدقيقة جيدة؟", id: "benchmarks" },
    {
      type: "paragraph",
      text: "Here's where your Arabic WPM score actually places you — based on real data from across the MENA region:",
    },
    {
      type: "table",
      headers: ["WPM", "Level", "المستوى", "Real-World Standard"],
      rows: [
        ["Below 15", "Beginner", "مبتدئ", "Just learning the layout"],
        ["15–25", "Basic", "أساسي", "Casual use, simple messages"],
        ["25–35", "Average", "متوسط", "Typical adult Arabic typist"],
        ["35–50", "Good", "جيد", "Administrative and office roles — MENA standard"],
        ["50–60", "Fast", "سريع", "Professional typists — secretaries, legal clerks"],
        ["60+", "Expert", "خبير", "Senior professionals, transcriptionists, journalists"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Data point",
      text: "Research from Arabic typing platforms shows casual typists average 25–35 WPM, while professional typists in Riyadh, Dubai, Cairo, and Casablanca typically hit 40–60 WPM. Non-native typists on their first attempt typically score 20–30% below their English WPM.",
    },
    { type: "heading", text: "Arabic Typing Speed Requirements by Job & Country", id: "job-requirements" },
    {
      type: "paragraph",
      text: "Whether you're job hunting in Saudi Arabia, UAE, Egypt, or Morocco — here's what employers actually need:",
    },
    {
      type: "table",
      headers: ["Role", "Min. WPM", "Country / Region", "Notes"],
      rows: [
        ["سكرتير / Secretary", "40–50 WPM", "🇸🇦 Saudi, 🇦🇪 UAE", "Arabic + English often both required"],
        ["مدخل بيانات / Data Entry Operator", "45–60 WPM", "All MENA", "95%+ accuracy critical"],
        ["موظف حكومي / Government Clerk", "35–45 WPM", "🇸🇦🇦🇪🇪🇬🇯🇴", "Arabic typing test in hiring process"],
        ["محرر صحفي / Journalist / Editor", "55–65 WPM", "🇪🇬 Egypt, Pan-Arab media", "Al Jazeera, Al Arabiya, Asharq Al-Awsat"],
        ["مترجم / Translator", "50–60 WPM", "All MENA", "Arabic ↔ English bilingual typing"],
        ["موظف استقبال / Receptionist", "30–40 WPM", "🇦🇪 UAE, 🇸🇦 Saudi", "Arabic typing mandatory in many roles"],
        ["مراكز الطباعة / Typing Center Staff", "50–65 WPM", "🇦🇪 UAE (Dubai, JAFZA)", "Arabic typing proficiency mandatory"],
        ["كاتب عدل / Legal Notary Typist", "50–60 WPM", "🇸🇦🇪🇬🇲🇦", "Formal Arabic, high accuracy required"],
        ["صحفي رقمي / Digital Content Writer", "55–70 WPM", "Pan-Arab", "Social media, news portals, digital publishing"],
      ],
    },
    {
      type: "paragraph",
      text: "According to job listings on Bayt.com and Glassdoor Middle East, Arabic typing proficiency — often listed as \"إجادة الطباعة على الحاسوب بالعربية\" — appears in the majority of administrative, legal, and government job postings across Saudi Arabia, UAE, and Egypt.",
    },
    { type: "heading", text: "Harakat and Tashkeel — الحركات والتشكيل", id: "harakat" },
    {
      type: "paragraph",
      text: "Most everyday Arabic text skips harakat entirely — readers infer vowels from context. But formal Arabic, Quranic text, children's educational content, and some legal documents require full tashkeel. Our test offers both modes:",
    },
    {
      type: "table",
      headers: ["Mark", "Name", "Sound", "Shift Shortcut"],
      rows: [
        ["ـَ", "فتحة Fatha", "Short \"a\" sound", "Shift + Q"],
        ["ـِ", "كسرة Kasra", "Short \"i\" sound", "Shift + A"],
        ["ـُ", "ضمة Damma", "Short \"u\" sound", "Shift + E"],
        ["ـّ", "شدة Shadda", "Doubled/emphasized consonant", "Shift + W"],
        ["ـْ", "سكون Sukun", "No vowel after letter", "Shift + S"],
        ["ـً", "تنوين Tanween an", "\"-an\" nunation ending", "Shift + R"],
      ],
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏛️ Government job applicants across Saudi Arabia, UAE, Egypt, Jordan, Kuwait, and Morocco — where Arabic typing tests are part of the official hiring process",
        "💼 Typing center professionals in Dubai and across the UAE — Arabic typing proficiency is mandatory and tested",
        "✍️ Journalists and editors at Arab media organizations — Al Jazeera, Al Arabiya, MBC, Arab News",
        "🎓 Arabic language learners — diaspora Arabs, Quran students, and language learners benchmarking keyboard fluency",
        "📋 Data entry operators across the MENA region handling Arabic documents, records, and databases",
        "🌍 Bilingual professionals typing in both Arabic and English for international companies in the Gulf",
        "📖 Religious content creators producing Arabic Islamic content with full tashkeel and harakat",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Arabic typing speed?",
          answer:
            "25–35 WPM is typical for a casual Arabic typist. 35–50 WPM meets most MENA administrative and office role standards, and 50+ WPM is professional-level, reached by secretaries, legal clerks, and journalists. Non-native typists often score 20–30% below their English WPM at first.",
        },
        {
          question: "Why is Arabic typing harder than English typing?",
          answer:
            "Arabic is written right-to-left, each letter has up to 4 positional forms depending on where it sits in a word, letters connect into ligatures automatically, and formal text uses harakat (diacritical marks) typed via Shift combinations — none of which exist in Latin-script typing.",
        },
        {
          question: "What's the difference between Arabic 101 and Arabic 102 keyboards?",
          answer:
            "They're almost identical, with the same letter positions and only minor symbol differences. Build your muscle memory on Arabic 101 (the more common standard) and you'll be able to adapt to Arabic 102 instantly.",
        },
        {
          question: "Do I need to type harakat (diacritical marks) on this test?",
          answer:
            "It depends on the mode — most everyday Arabic text skips harakat since readers infer vowels from context, and our standard test reflects that. Full tashkeel is available for practicing formal, Quranic, or educational Arabic text.",
        },
        {
          question: "Is this Arabic typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "اختر مدة الاختبار أعلاه — 30 ثانية، دقيقة، 5 دقائق — وابدأ الكتابة. ستحصل على سرعتك بالكلمات في الدقيقة (WPM) ونسبة دقتك فور انتهاء الاختبار. Pick your duration above, start typing, and get your Arabic WPM in seconds.",
    },
  ],
};

export default content;
