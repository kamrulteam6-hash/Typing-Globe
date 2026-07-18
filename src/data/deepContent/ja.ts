import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Japanese Typing Speed Test — 日本語タイピング速度テスト",
  seoDescription:
    "Free Japanese typing speed test — 日本語タイピングテスト. Romaji & Kana input, full IME support. Check your WPM and 文字数/分 instantly. No signup needed.",
  researchedKeywords: [
    "japanese typing test",
    "japanese typing speed test",
    "タイピング速度テスト",
    "日本語タイピングテスト",
    "romaji typing test",
    "japanese ime typing test",
    "hiragana typing test online",
    "japanese typing test online free",
    "jis keyboard typing test",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Japanese is one of the most complex languages to type on a computer — and that complexity is exactly what makes mastering it so rewarding. With 125 million native speakers in Japan and millions more learners worldwide, Japanese typing is a highly valued professional skill — for office work, data entry, translation, journalism, game localization, and content creation.",
        "Our free Japanese typing speed test (日本語タイピング速度テスト) measures your real WPM and characters per minute using the standard Romaji input method with full IME support. No signup. No download. Just type and see your score instantly.",
        "今すぐ日本語タイピング速度を測定しましょう — テスト時間を選んで、入力を開始するだけ。WPM（1分あたりの単語数）と正確さがリアルタイムで表示されます。",
      ],
    },
    { type: "heading", text: "Why Japanese Typing Is Unlike Any Other Language", id: "how-japanese-typing-works" },
    {
      type: "paragraph",
      text: "Japanese typing involves a process no other language requires — a two-step input and conversion workflow that goes through three different writing systems before producing final text. Here's what actually happens every time you type a word in Japanese:",
    },
    {
      type: "table",
      headers: ["Step", "What Happens", "Example"],
      rows: [
        ["1. Type Romaji", "You type phonetic Roman letters on your QWERTY keyboard", "Type: nihon"],
        ["2. IME converts to Hiragana", "The Input Method Editor converts instantly", "Becomes: にほん"],
        ["3. Press Space to convert", "The IME suggests Kanji conversions", "Becomes: 日本"],
        ["4. Press Enter to confirm", "The correct Kanji is locked in", "✅ 日本"],
      ],
    },
    {
      type: "paragraph",
      text: "This means typing Japanese on a standard keyboard always goes through an IME (Input Method Editor) — software like Google Japanese Input (Google 日本語入力) or Microsoft IME that handles the conversion. Your typing speed in Japanese is directly affected by how smoothly you handle this conversion flow, not just how fast your fingers move.",
    },
    { type: "heading", text: "Three Input Methods — ローマ字入力 vs かな入力 vs JIS", id: "input-methods" },
    {
      type: "paragraph",
      text: "Japanese typists use one of three input methods — and your choice significantly affects your ceiling speed:",
    },
    {
      type: "table",
      headers: ["Input Method", "How It Works", "Speed Ceiling", "Best For"],
      rows: [
        ["Romaji input (ローマ字入力)", "Type English letters that phonetically match Japanese sounds — ka → か, shi → し, tsu → つ", "Medium — some sounds need 2–4 keystrokes", "Beginners, learners, users on QWERTY keyboards"],
        ["Kana input (かな入力)", "Each physical key maps directly to one kana character — one keystroke per character", "High — 40–50% fewer keystrokes than Romaji", "Experienced native typists, professional Japanese offices"],
        ["JIS keyboard layout", "A physical keyboard with kana characters printed on the keys — enables direct kana input without memorization", "High — same as kana input", "Professional typists in Japan using Japanese-specific hardware"],
      ],
    },
    {
      type: "paragraph",
      text: "Which should you use?",
    },
    {
      type: "list",
      items: [
        "Starting out or using a QWERTY keyboard? → Use Romaji input. It works on any keyboard, requires zero hardware changes, and is the most widely taught method globally.",
        "Serious about Japanese typing professionally? → Learn Kana input over time. With one keystroke per character, it reduces total keystrokes by nearly half and is what many fast native typists use.",
        "Using a physical Japanese keyboard (JIS)? → JIS kana input is your fastest path — the key labels guide you until muscle memory takes over.",
      ],
    },
    {
      type: "callout",
      icon: "⌨️",
      title: "Romaji multi-keystroke note",
      text: "Some sounds require 3–4 keystrokes in Romaji: tsu (3 keys), chi (3 keys), shi (3 keys), tte (4 keys for the double consonant + te). This is why Romaji WPM naturally runs 10–20% lower than English WPM at the same physical effort level — the keystroke-to-character ratio is higher.",
    },
    { type: "heading", text: "How to Set Up Japanese IME", id: "ime-setup" },
    {
      type: "callout",
      icon: "🖥️",
      title: "Windows",
      text: "Settings → Time & Language → Language & Region → Add Japanese → install Microsoft IME. Switch between English and Japanese with Alt + ` (backtick) or the language bar.",
    },
    {
      type: "callout",
      icon: "🍎",
      title: "Mac",
      text: "System Settings → Keyboard → Input Sources → click + → add Japanese (Romaji) or Japanese (Kana). Switch inputs with Ctrl + Space.",
    },
    {
      type: "paragraph",
      text: "IME shortcuts you need to know:",
    },
    {
      type: "table",
      headers: ["Key", "What It Does"],
      rows: [
        ["Space", "Convert hiragana → kanji candidates"],
        ["Enter", "Confirm and commit current conversion"],
        ["Escape", "Discard current conversion, return to romaji"],
        ["F7", "Convert to Katakana"],
        ["F6", "Convert to Hiragana"],
        ["F10", "Convert to Romaji"],
        ["Tab / ↓", "Cycle through kanji candidates"],
      ],
    },
    { type: "heading", text: "Japanese Typing Speed Benchmarks — タイピング速度の目安", id: "benchmarks" },
    {
      type: "paragraph",
      text: "Japanese typing speed is measured in WPM for international comparison, and 文字数/分 (characters per minute) for formal Japanese contexts. Here's what the numbers actually mean:",
    },
    {
      type: "table",
      headers: ["WPM", "文字数/分 (approx.)", "Level", "レベル", "Real-World Standard"],
      rows: [
        ["Below 20", "<100", "Beginner", "初心者", "Learning layout and IME workflow"],
        ["20–35", "100–175", "Basic", "基礎", "Casual use — emails, messages"],
        ["35–50", "175–250", "Average", "普通", "Typical adult Japanese PC user"],
        ["50–65", "250–325", "Good", "良い", "General office work — 事務職 standard"],
        ["65–80", "325–400", "Professional", "プロ", "Data entry, translation, editorial"],
        ["80–100", "400–500", "Fast", "速い", "Competitive typist, senior data entry"],
        ["100+", "500+", "Elite", "上級者", "タイピング検定 top tier, competition level"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Data point",
      text: "General office users (事務職) in Japan are typically expected to achieve 40–50 WPM in Romaji input. Professional data entry roles (データ入力) at Japan-facing companies commonly require 60+ WPM with 95%+ accuracy. Professional typists and タイピング検定 (typing certification) top tier candidates reach 80–100+ WPM.",
    },
    { type: "heading", text: "The Three Scripts — What You'll Type in Our Test", id: "scripts" },
    {
      type: "paragraph",
      text: "Real Japanese text mixes three writing systems simultaneously — and our test passages reflect that reality:",
    },
    {
      type: "table",
      headers: ["Script", "Name", "Used For", "Examples"],
      rows: [
        ["ひらがな", "Hiragana", "Native Japanese words, grammar particles, verb endings", "です、ます、の、が、は"],
        ["カタカナ", "Katakana", "Foreign loanwords, onomatopoeia, emphasis", "コーヒー、テレビ、コンピューター"],
        ["漢字", "Kanji", "Chinese-origin characters — core nouns, verbs, concepts", "日本語、学校、会社、電話"],
        ["ローマ字", "Romaji", "Acronyms, proper nouns, brand names mixed into text", "IME、PC、AI、DVD"],
      ],
    },
    {
      type: "paragraph",
      text: "Switching fluidly between these four systems mid-sentence is what separates a basic Japanese typist from a truly proficient one. Our test passages are designed to include natural mixed-script text — just like real workplace documents, news articles, and business communications in Japan.",
    },
    { type: "heading", text: "Japanese Typing Speed for Jobs — 仕事に必要なタイピング速度", id: "job-requirements" },
    {
      type: "table",
      headers: ["Role / 職業", "Min. WPM", "Min. 文字/分", "Notes"],
      rows: [
        ["事務職 / General office worker", "40–50 WPM", "200–250", "Standard job ad requirement across Japan"],
        ["データ入力 / Data entry operator", "60–75 WPM", "300–375", "95%+ accuracy essential"],
        ["秘書 / Executive secretary", "55–70 WPM", "275–350", "Mixed Japanese + English often required"],
        ["翻訳者 / Translator", "55–70 WPM", "275–350", "Japanese ↔ English, accuracy over raw speed"],
        ["ゲームローカライズ / Game localizer", "60–80 WPM", "300–400", "Fast turnaround on large text volumes"],
        ["記者・ライター / Journalist / Writer", "60–80 WPM", "300–400", "News portals, digital media, content agencies"],
        ["カスタマーサポート / Customer support", "40–55 WPM", "200–275", "Real-time chat in Japanese"],
        ["文字起こし / Transcriptionist", "80–100 WPM", "400–500", "Audio → Japanese text, near-perfect accuracy"],
      ],
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🎓 Japanese language learners — from beginner hiragana practice to advanced mixed-script fluency (JLPT N5 through N1)",
        "💼 Office job seekers in Japan — 事務職、データ入力、秘書 positions where typing speed is tested in the hiring process",
        "🎮 Anime and gaming community — fans who want to type Japanese quotes, subtitles, and game dialogue accurately",
        "🌍 Translators and localizers — working on Japanese ↔ English, Japanese ↔ Chinese, or Japanese ↔ Korean language pairs",
        "🏢 Remote workers at Japanese companies — engineers, designers, PMs who need fast Japanese email and Slack communication",
        "📰 Digital journalists and content creators — producing Japanese content for web, social media, and streaming platforms",
        "🔬 Researchers and academics — handling Japanese-language sources, papers, and documentation",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Japanese typing speed?",
          answer:
            "35–50 WPM (175–250 文字/分) is typical for an average adult Japanese PC user. 50–65 WPM meets the 事務職 (general office) standard, and 65+ WPM is professional-level — data entry, translation, and editorial work. タイピング検定 top-tier candidates reach 80–100+ WPM.",
        },
        {
          question: "Should I use Romaji or Kana input?",
          answer:
            "Start with Romaji input if you're a beginner or on a QWERTY keyboard — it's the most widely taught method and needs no hardware changes. If you're serious about Japanese typing professionally, learning Kana input reduces total keystrokes by nearly half, since each key maps directly to one kana character.",
        },
        {
          question: "How does Japanese IME conversion work?",
          answer:
            "You type Romaji (phonetic Roman letters), the IME converts it to Hiragana instantly, then pressing Space suggests Kanji conversions, and Enter confirms and commits the final text. Your typing speed depends on how smoothly you handle this conversion flow, not just raw keystroke speed.",
        },
        {
          question: "Why is Japanese Romaji WPM lower than English WPM?",
          answer:
            "Some Japanese sounds need 3–4 keystrokes in Romaji (like tsu, chi, or the double-consonant tte), giving a higher keystroke-to-character ratio than English. This is why Romaji WPM typically runs 10–20% lower than English WPM at the same physical typing effort.",
        },
        {
          question: "Is this Japanese typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "テスト時間を上から選んで — 30秒、1分、5分 — タイピングを開始してください。WPM、文字数/分、正確さがテスト終了後すぐに表示されます。Pick your duration, start typing, and get your Japanese WPM result in seconds.",
    },
  ],
};

export default content;
