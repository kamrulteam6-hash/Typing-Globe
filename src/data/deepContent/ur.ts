import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "اردو ٹائپنگ ٹیسٹ — Urdu Typing Speed Test (Free WPM Test for FPSC & PPSC)",
  seoDescription:
    "Free Urdu typing speed test — check your WPM and accuracy for FPSC, PPSC, and clerical exams. Right-to-left, Nastaliq-compatible, no signup. اپنی رفتار جانچیں۔",
  researchedKeywords: [
    "اردو ٹائپنگ ٹیسٹ",
    "urdu typing test",
    "urdu typing speed test online free",
    "fpsc urdu typing test",
    "ppsc urdu typing test wpm",
    "urdu phonetic keyboard",
    "urdu typing practice for jobs",
    "نستعلیق ٹائپنگ",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Urdu is spoken and understood by roughly 230–270 million people, including around 70 million native speakers in India and over 22 million in Pakistan, where it is the national language and the working language of most government offices, courts of first instance, and public communication — despite English dominating higher administration.",
        "For most people who search for an Urdu typing test, the reason is practical: Pakistan's federal and provincial recruitment bodies (FPSC, PPSC, and others) run mandatory Urdu typing tests for clerical, computer operator, and secretarial posts, and a slow or inaccurate typist fails the test regardless of how well they otherwise qualify. Journalists at Urdu-language outlets, translators, transcribers, and data-entry staff across Pakistan and North India all depend on the same keyboard fluency.",
        "This test scores real right-to-left Urdu text the way exam boards and employers actually measure it — free, no signup, no download.",
      ],
    },
    { type: "heading", text: "Why Urdu Typing Speed Matters", id: "why-it-matters" },
    {
      type: "paragraph",
      text: "Urdu functions as Pakistan's lingua franca across ethnic and provincial lines and remains an officially recognized language in India, particularly in Uttar Pradesh, Bihar, Telangana, and Jammu & Kashmir. Government forms, court paperwork, school administration, and a large share of Pakistan's press — Jang, Express, and Geo among the biggest outlets — run in Urdu, which means Urdu typing speed is a direct, testable job requirement rather than a nice-to-have.",
    },
    { type: "heading", text: "How Urdu Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "Like most South Asian typing exams, Urdu speed is scored in WPM using the standard five-characters-per-word rule, applied to the actual right-to-left character stream. Net WPM — gross speed minus a penalty for errors — is what recruitment boards score, since Urdu's contextual letterforms mean a single misplaced character can distort a whole word.",
    },
    {
      type: "table",
      headers: ["Metric", "How It Works"],
      rows: [
        ["Gross WPM", "Total characters typed ÷ 5, divided by minutes elapsed"],
        ["Net WPM", "Gross WPM minus an error penalty — the number exam boards and employers actually use"],
        ["Accuracy threshold", "Most Pakistani government typing tests require 95%+ accuracy regardless of raw speed"],
      ],
    },
    { type: "heading", text: "Urdu Keyboard Layout and Script Input", id: "keyboard" },
    {
      type: "paragraph",
      text: "Urdu is traditionally set in Nastaliq — a cascading, diagonal calligraphic style — while most everyday digital text renders in the simpler, more rectilinear Naskh style because it's easier for software to typeset. Both are the same underlying character sequence; this test scores the text itself, not the rendering style.",
    },
    {
      type: "paragraph",
      text: "There are two distinct ways Urdu gets typed on a keyboard, and knowing which one you're learning matters. The Urdu Phonetic Keyboard — developed for Unicode Urdu and now the default on Windows and macOS — maps letters to their closest English sound, so B is bay (ب), P is pay (پ), K is kaaf (ک), and G is gaaf (گ). The older InPage layout, still common in Urdu newspaper and desktop-publishing workflows, is non-phonetic and uses traditional key positions that don't correspond to English sounds — most new typists should start with Phonetic, since it builds on QWERTY muscle memory.",
    },
    {
      type: "table",
      headers: ["Urdu Letter", "Typed As (Phonetic Keyboard)"],
      rows: [
        ["ب bay", "B"],
        ["پ pay", "P"],
        ["ک kaaf", "K"],
        ["گ gaaf", "G"],
        ["ٹ ڈ ڑ (retroflex, unique to Urdu vs. Arabic/Persian)", "T, D, R + modifier combinations"],
        ["ں (noon ghunna / nasalization)", "Dedicated key, distinct from regular ن"],
      ],
    },
    {
      type: "list",
      items: [
        "Windows: Settings → Time & Language → Language & Region → Add a language → Urdu, then select the Urdu Phonetic keyboard under language options.",
        "Mac: System Settings → Keyboard → Input Sources → + → add Urdu. macOS renders right-to-left text and Urdu keyboard layouts natively.",
      ],
    },
    { type: "heading", text: "Urdu Typing Speed Benchmarks", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "Level", "Real-World Context"],
      rows: [
        ["Below 15 WPM", "Beginner (ابتدائی)", "Still building right-to-left keyboard familiarity"],
        ["15–25 WPM", "Basic (بنیادی)", "Comfortable casual Urdu messaging"],
        ["25–35 WPM", "Average (اوسط)", "Typical everyday use; near the minimum for many Pakistani clerical exams"],
        ["35–50 WPM", "Good (اچھا)", "Standard for office, administrative, and computer-operator roles"],
        ["50–65 WPM", "Advanced (اعلیٰ)", "Fast, sustained professional Urdu typing"],
        ["65+ WPM", "Expert (ماہر)", "Elite-level speed, common among career transcriptionists and stenotypists"],
      ],
    },
    { type: "heading", text: "Urdu Typing Requirements for Jobs and Exams", id: "jobs" },
    {
      type: "paragraph",
      text: "Pakistan's Federal Public Service Commission (FPSC) and Provincial Public Service Commissions (PPSC) both administer Urdu typing tests for clerical, stenographer, and computer-operator recruitment. Standard clerical posts generally require 25–35 WPM in Urdu with accuracy of 95% or higher, and error tolerance is typically capped around 3–5% of words typed before automatic disqualification. Competitive posts such as Junior Computer Operator are more comfortably secured at 40+ WPM. Because these are Net Speed tests, raw speed without accuracy will not pass.",
    },
    {
      type: "table",
      headers: ["Role / Context", "Typical Requirement"],
      rows: [
        ["FPSC/PPSC clerical & data-entry posts", "25–35 WPM Urdu, 95%+ accuracy (Net Speed)"],
        ["Junior Computer Operator (competitive)", "40+ WPM recommended for a secure margin"],
        ["Urdu-language journalism (Jang, Geo, Express, etc.)", "No fixed government threshold; newsroom speed and accuracy expectations are set internally"],
        ["Translation & localization", "Accuracy and consistency weighted alongside speed"],
      ],
    },
    { type: "heading", text: "Urdu Beyond Pakistan", id: "diaspora" },
    {
      type: "paragraph",
      text: "Urdu is also one of India's officially recognized languages, with tens of millions of speakers concentrated in Uttar Pradesh, Bihar, Telangana, and Jammu & Kashmir, alongside an active Urdu press and literary publishing scene. A sizable diaspora — including over 400,000 Urdu speakers in the United Kingdom, plus communities across the Gulf states and North America — relies on Urdu keyboards to stay connected with family and community media in their first language.",
    },
    {
      type: "callout",
      icon: "✒️",
      title: "A living literary tradition",
      text: "Urdu's ghazal and nazm poetic forms remain widely read and actively published today, and typing fluency now underpins how that tradition moves online — from digital literary journals to social media.",
    },
    { type: "heading", text: "Who This Test Is Built For", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏛️ FPSC/PPSC exam candidates preparing for clerical and computer-operator posts",
        "📰 Journalists and sub-editors at Urdu-language newspapers and news sites",
        "🎓 Students in Urdu-medium schools and colleges across Pakistan and North India",
        "🌐 Translators and localization professionals working between Urdu and English",
        "💻 Data-entry and administrative staff in government and private offices",
        "✍️ Writers, poets, and publishers working in the ghazal and nazm traditions",
        "🌍 The Urdu-speaking diaspora in the UK, Gulf states, and North America",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What Urdu typing speed do I need for FPSC or PPSC exams?",
          answer:
            "Most clerical and data-entry posts require 25–35 WPM in Urdu with at least 95% accuracy, scored as Net Speed. Competitive posts like Junior Computer Operator are more safely cleared at 40+ WPM.",
        },
        {
          question: "Should I learn the Urdu Phonetic keyboard or InPage layout?",
          answer:
            "Most new typists should start with the Urdu Phonetic keyboard — it's the Windows/macOS default and maps letters to familiar English sounds (B for bay, P for pay). InPage's non-phonetic layout is mainly relevant if you work in legacy newspaper or desktop-publishing workflows.",
        },
        {
          question: "How does this test measure WPM for Urdu?",
          answer:
            "Every five typed characters, including spaces, counts as one word — the standard convention. Net WPM subtracts a penalty for uncorrected errors, matching how Pakistani government typing exams score.",
        },
        {
          question: "Does this test support Nastaliq rendering?",
          answer:
            "It scores the correct right-to-left character sequence regardless of whether your system displays Urdu in Nastaliq or the more common Naskh style — both represent the same underlying text.",
        },
        {
          question: "Is this Urdu typing test free?",
          answer: "Yes — completely free, with no signup and no download required.",
        },
      ],
    },
    {
      type: "cta",
      text: "اپنے ٹیسٹ کا دورانیہ منتخب کریں اور ٹائپنگ شروع کریں — choose your test duration and start typing to see your real WPM and accuracy instantly.",
    },
  ],
};

export default content;
