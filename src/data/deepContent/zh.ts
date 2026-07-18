import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Chinese Typing Speed Test — 中文打字速度测试 / 中文打字速度測試",
  seoDescription:
    "Free Chinese typing test — 打字速度测试. Pinyin, Wubi, Zhuyin & Cangjie input, Simplified & Traditional. Check your CPM (字/分钟) and accuracy. No signup.",
  researchedKeywords: [
    "chinese typing test",
    "chinese typing speed test",
    "打字速度测试",
    "中文打字测试",
    "拼音打字速度测试",
    "mandarin typing test",
    "pinyin typing test",
    "wubi typing speed test",
    "zhuyin bopomofo typing test",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Chinese is the most spoken language on Earth — over 1.3 billion native speakers across mainland China, Taiwan, Hong Kong, Macau, Singapore, and Chinese-speaking communities worldwide. Typing Chinese efficiently is not just about raw speed — it's about mastering a uniquely complex input workflow that no other writing system demands.",
        "Our free Chinese typing speed test (打字速度测试) measures your real WPM and 汉字每分钟 (Chinese characters per minute) using Pinyin input — the most widely used input method globally. We support both Simplified Chinese (简体中文 — mainland China, Singapore) and Traditional Chinese (繁體中文 — Taiwan, Hong Kong, Macau). No signup. No download. Start typing and see your result instantly.",
        "立即测试您的中文打字速度 — 选择测试时长，开始输入，即刻获得您的每分钟字数（CPM）和准确率。",
      ],
    },
    { type: "heading", text: "Why Chinese Typing Is the Most Complex Input System in the World", id: "how-it-works" },
    {
      type: "paragraph",
      text: "Unlike every other language on this site, typing Chinese doesn't produce characters directly. You're always working through an IME (Input Method Editor) — software that converts your keystrokes into Chinese characters through a prediction and selection process. Here's what that looks like with Pinyin:",
    },
    {
      type: "table",
      headers: ["Step", "What Happens", "Example"],
      rows: [
        ["1. Type Pinyin", "Type the romanized pronunciation of the character", "Type: zhongguo"],
        ["2. IME predicts characters", "The IME shows a candidate list of matching Chinese characters", "Shows: 中国、种过、众果..."],
        ["3. Select correct character", "Press Space (or 1–9) to choose the right character", "Select: 中国"],
        ["4. Confirm and continue", "The characters are committed and you move on", "✅ 中国"],
      ],
    },
    {
      type: "paragraph",
      text: "This means your typing speed in Chinese depends on three skills simultaneously: knowing the Pinyin, reading the candidate list quickly, and trusting your IME's first prediction — which with modern AI-powered IMEs like Sogou is correct over 95% of the time for common words.",
    },
    { type: "heading", text: "Five Input Methods — Which One Should You Use?", id: "input-methods" },
    {
      type: "paragraph",
      text: "This is the most important decision for any Chinese typist. The right method depends on where you are, what you're typing, and how fast you want to go.",
    },
    {
      type: "table",
      headers: ["Input Method", "Script Base", "How It Works", "Speed Ceiling", "Used In"],
      rows: [
        ["Pinyin 拼音", "Phonetic (Latin)", "Type romanized pronunciation → select characters", "~100 chars/min for experts", "🇨🇳 Mainland China (dominant)"],
        ["Wubi 五笔", "Shape-based", "Decompose character into stroke components → 4-key code", "~160 chars/min for experts", "🇨🇳 China (professional typists)"],
        ["Zhuyin / Bopomofo 注音", "Phonetic (symbols)", "Type phonetic symbols ㄅㄆㄇㄈ → select characters", "Similar to Pinyin", "🇹🇼 Taiwan (dominant)"],
        ["Cangjie 倉頡", "Shape-based", "Encode character shape using 26-key mapping", "Very high — 100+ chars/min", "🇭🇰 Hong Kong, 🇹🇼 Taiwan"],
        ["Quick 速成 (Simplified Cangjie)", "Shape-based", "First + last Cangjie key only → select from list", "Medium — easier than full Cangjie", "🇭🇰 Hong Kong, 🇲🇴 Macau"],
      ],
    },
    {
      type: "paragraph",
      text: "Quick decision guide:",
    },
    {
      type: "list",
      items: [
        "Learner of Mandarin on QWERTY? → Pinyin — you already know the romanization, zero new symbol set",
        "Professional typist in mainland China targeting max speed? → Wubi — no homophones, no candidate list needed for common words, 160+ chars/min ceiling",
        "Based in Taiwan? → Zhuyin (Bopomofo) — it's what you learned in school, it's on every Taiwan keyboard",
        "Based in Hong Kong? → Cangjie or Quick — standard on HK traditional Chinese systems",
      ],
    },
    {
      type: "callout",
      icon: "⚡",
      title: "Wubi fact",
      text: "Experienced Wubi typists have been documented reaching 160 Chinese characters per minute — because each character requires at most 4 keystrokes and requires zero candidate list reading. That makes Wubi the fastest Chinese input method for fluent users, but it requires 6–12 months to learn properly.",
    },
    { type: "heading", text: "Best IMEs — Sogou vs Microsoft vs Google", id: "best-imes" },
    {
      type: "paragraph",
      text: "The IME you choose affects your speed as much as the input method itself. Here's how the major options compare:",
    },
    {
      type: "table",
      headers: ["IME", "Platform", "Input Methods", "Why People Use It"],
      rows: [
        ["Sogou Pinyin 搜狗拼音", "Windows, Android", "Pinyin, Wubi", "Most popular in China — 83.6% penetration, 300M+ users. Best AI prediction and phrase library"],
        ["Microsoft Pinyin IME", "Windows (built-in)", "Pinyin", "Pre-installed, no download needed. Good for office environments"],
        ["Baidu IME 百度输入法", "Windows, Android, iOS", "Pinyin", "Strong mobile integration, popular in China"],
        ["macOS Chinese IME", "Mac (built-in)", "Pinyin, Zhuyin, Cangjie", "Built into macOS — covers all three major methods natively"],
        ["Google Pinyin", "Android", "Pinyin", "Popular outside China, strong predictive text"],
        ["iFlytek 讯飞输入法", "Windows, Android, iOS", "Pinyin + voice", "Best voice-to-text Chinese input for mobile"],
      ],
    },
    { type: "heading", text: "Chinese Typing Speed Benchmarks — 多少字每分钟算快？", id: "benchmarks" },
    {
      type: "paragraph",
      text: "Chinese typing speed is measured in 字/分钟 (characters per minute, CPM) — not WPM. Here's how the numbers map between systems:",
    },
    {
      type: "table",
      headers: ["汉字/分钟 (CPM)", "WPM (approx.)", "Level", "水平", "Real-World Meaning"],
      rows: [
        ["Below 30", "<15", "Beginner", "初学者", "Just learning Pinyin and IME workflow"],
        ["30–50", "15–25", "Basic", "基础", "Casual use — WeChat, short messages"],
        ["50–80", "25–40", "Average", "一般", "Typical adult Chinese PC user"],
        ["80–100", "40–50", "Good", "良好", "Office work standard — 事务处理, 文字录入"],
        ["100–150", "50–75", "Professional", "专业", "Data entry, secretary, editorial roles"],
        ["150–200", "75–100", "Fast", "高速", "Experienced Wubi/Cangjie user, senior data entry"],
        ["200+", "100+", "Elite", "精英", "Competition typist, professional transcriptionist"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Data point",
      text: "Research comparing Chinese keyboard input showed an average rate of 43 WPM (approximately 86 characters/minute) for experienced Pinyin typists in controlled conditions. Experienced Sogou Pinyin users in professional settings commonly reach 90–100 characters/minute. Wikipedia documents Wubi experts hitting 160 characters/minute.",
    },
    { type: "heading", text: "Simplified vs Traditional — 简体 vs 繁體", id: "simplified-vs-traditional" },
    {
      type: "paragraph",
      text: "This affects your test, your keyboard, and your career. Here's what you need to know:",
    },
    {
      type: "table",
      headers: ["Feature", "Simplified 简体中文", "Traditional 繁體中文"],
      rows: [
        ["Where used", "Mainland China 🇨🇳, Singapore 🇸🇬, Malaysia (partly)", "Taiwan 🇹🇼, Hong Kong 🇭🇰, Macau 🇲🇴, overseas diaspora"],
        ["Character complexity", "Fewer strokes — faster to write by hand", "More strokes — fuller original forms"],
        ["Dominant input method", "Pinyin (Sogou, Microsoft, Baidu)", "Zhuyin (Taiwan), Cangjie (HK)"],
        ["IME differences", "Space bar confirms first Pinyin candidate", "Selection process varies by method"],
        ["Official standard", "PRC government standard since 1950s", "ROC (Taiwan) and Hong Kong standard"],
      ],
    },
    {
      type: "paragraph",
      text: "Our test supports both — select Simplified or Traditional in the language selector before you start.",
    },
    { type: "heading", text: "How to Set Up Chinese IME", id: "ime-setup" },
    {
      type: "callout",
      icon: "🖥️",
      title: "Windows (Simplified — Pinyin)",
      text: "Settings → Time & Language → Language → Add Chinese (Simplified, China) → Microsoft Pinyin installs automatically. Switch between English and Chinese with Ctrl + Space or the language bar.",
    },
    {
      type: "callout",
      icon: "🖥️",
      title: "Windows (Traditional — Zhuyin/Cangjie)",
      text: "Add Chinese (Traditional, Taiwan) for Zhuyin. Add Chinese (Traditional, Hong Kong SAR) for Cangjie.",
    },
    {
      type: "callout",
      icon: "🍎",
      title: "Mac",
      text: "System Settings → Keyboard → Input Sources → + → Chinese (Simplified) for Pinyin, or Chinese (Traditional) for Zhuyin or Cangjie.",
    },
    {
      type: "paragraph",
      text: "Key IME shortcuts:",
    },
    {
      type: "table",
      headers: ["Key", "What It Does"],
      rows: [
        ["Space", "Select first candidate / confirm"],
        ["1–9 number keys", "Quick-select from candidate list"],
        ["Tab / ↓", "Scroll through candidate list"],
        ["Enter", "Commit input as typed (bypass candidate list)"],
        ["Shift", "Toggle between Chinese and English mode"],
        ["Backspace", "Delete last Pinyin letter (not committed character)"],
      ],
    },
    { type: "heading", text: "Chinese Typing Speed for Jobs — 工作对打字速度的要求", id: "job-requirements" },
    {
      type: "table",
      headers: ["Role / 职业", "Min. CPM", "Min. WPM", "Country", "Notes"],
      rows: [
        ["文字录入员 / Data entry operator", "80–120 CPM", "40–60 WPM", "🇨🇳 China", "Core skill; accuracy 98%+ required"],
        ["文秘 / Secretary", "80–100 CPM", "40–50 WPM", "🇨🇳🇹🇼", "Mixed Chinese + English often required"],
        ["翻译 / Translator", "100–140 CPM", "50–70 WPM", "All regions", "Chinese ↔ English bilingual typing speed"],
        ["记者 / Journalist", "100–150 CPM", "50–75 WPM", "🇨🇳 China", "News portals, digital media, fast turnaround"],
        ["客服 / Customer support", "60–80 CPM", "30–40 WPM", "All regions", "Real-time Chinese chat support"],
        ["速记员 / Stenographer", "200+ CPM", "100+ WPM", "🇨🇳🇹🇼", "Court, conference, near-perfect accuracy"],
        ["游戏本地化 / Game localizer", "100–150 CPM", "50–75 WPM", "All regions", "Large text volume, fast deadlines"],
        ["字幕制作 / Subtitle editor", "120–160 CPM", "60–80 WPM", "All regions", "Time-coded subtitles for streaming platforms"],
      ],
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "📚 Mandarin language learners — from beginner Pinyin practice to advanced character selection fluency (HSK 1 through HSK 6)",
        "💼 Office job seekers in China, Taiwan, and Singapore — where Chinese typing speed is tested during hiring",
        "🏢 Data entry and administrative professionals — 文字录入, 文秘, 办公室文员 roles across the Chinese-speaking world",
        "✍️ Translators and localizers — working on Chinese ↔ English, Chinese ↔ Japanese, Chinese ↔ Korean language pairs",
        "📰 Digital journalists and content creators — producing content for Chinese news portals, WeChat, Weibo, and Douyin",
        "🎓 Students preparing for HSK exams — especially HSK 4–6 computer-based tests which include written Chinese input",
        "🌍 Overseas Chinese community — diaspora speakers in USA, UK, Australia, Canada, Southeast Asia maintaining Chinese keyboard fluency",
        "🎮 Gaming and anime community — fans who type Chinese in-game, in forums, or want to read and type Chinese content directly",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Chinese typing speed?",
          answer:
            "50–80 CPM (25–40 WPM) is typical for the average adult Chinese PC user. 80–100 CPM meets the office-work standard, and 100–150 CPM is professional-level — data entry, secretary, editorial roles. Experienced Wubi typists reach 150–200+ CPM.",
        },
        {
          question: "Should I learn Pinyin or Wubi?",
          answer:
            "Learn Pinyin if you're a learner or already know Mandarin romanization — it requires no new symbol set and works on any QWERTY keyboard. Learn Wubi if you're a professional typist in mainland China targeting maximum speed — it avoids homophone candidate lists and has a 160+ chars/min ceiling, though it takes 6–12 months to master.",
        },
        {
          question: "Should I use Simplified or Traditional Chinese?",
          answer:
            "Use Simplified (简体中文) if you're in mainland China or Singapore, typically with Pinyin input. Use Traditional (繁體中文) if you're in Taiwan (Zhuyin/Bopomofo) or Hong Kong/Macau (Cangjie) — select your preference in the language selector before starting.",
        },
        {
          question: "Why is Chinese typing speed measured in CPM instead of WPM?",
          answer:
            "Chinese text doesn't use spaces between words the way English does, and typing goes through an IME that converts phonetic or shape-based input into characters. 字/分钟 (characters per minute) is the standard, meaningful metric — this test shows you the approximate WPM equivalent alongside it.",
        },
        {
          question: "Is this Chinese typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "选择上方的测试时长 — 30秒、1分钟、5分钟 — 使用拼音输入法开始打字。您的汉字每分钟（CPM）、每分钟词数（WPM）以及准确率将在测试结束后立即显示。Pick your duration, select Simplified or Traditional, start typing — your CPM result is ready in seconds.",
    },
  ],
};

export default content;
