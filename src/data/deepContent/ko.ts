import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Korean Typing Test · 한국어 | WPM & Accuracy",
  seoDescription:
    "Take a free Korean typing test and check WPM and accuracy. Practice Hangul syllable assembly, 2-set keyboard input, 받침, double consonants and Korean-English switching.",
  researchedKeywords: [
    "korean typing test",
    "korean typing speed test",
    "hangul typing test",
    "korean WPM test",
    "korean keyboard test",
    "한글 타자 속도 테스트",
    "타자 연습",
    "한글 키보드",
    "두벌식 타자",
    "한국어 타이핑",
    "타자연습",
    "dubeolsik typing test",
    "두벌식 타자 연습",
    "korean typing test online free",
    "hangul typing test",
    "topik typing practice",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Korean is spoken by over 77 million people across South Korea, North Korea, and Korean-speaking communities in the US, Japan, China, and beyond. And right now, the global appetite for Korean typing skills is growing faster than ever — driven by K-pop, K-drama, Korean gaming communities, TOPIK exam takers, and a booming demand for Korean content creators and translators worldwide.",
        "Our free Korean typing speed test (한글 타자 속도 테스트) measures your real WPM and 타자 속도 (typing speed) in Hangul using the standard 두벌식 (Dubeolsik) keyboard layout — the same layout used on virtually every computer in South Korea. No signup. No installation. Just type and see your score instantly.",
        "지금 바로 한글 타자 속도를 측정해보세요 — 테스트 시간을 선택하고 입력을 시작하면, WPM(분당 단어 수)과 정확도(정확률)가 즉시 표시됩니다.",
      ],
    },
    { type: "heading", text: "What Makes Korean Typing Uniquely Satisfying — and Challenging", id: "how-it-works" },
    {
      type: "paragraph",
      text: "Hangul is one of the most logically designed writing systems ever created — King Sejong's 15th century invention is phonetically consistent, systematic, and learnable in hours. But typing it involves a mechanical process that surprises even experienced typists from other languages: real-time syllable block assembly.",
    },
    {
      type: "paragraph",
      text: "Every Korean syllable is a block built from individual 자모 (jamo) — consonants and vowels. As you type each jamo, your IME assembles them live into a syllable block before your eyes. Here's how it works for the word 한국 (Korea):",
    },
    {
      type: "table",
      headers: ["Keystroke", "What You Type", "What Appears on Screen"],
      rows: [
        ["Press R (ㅎ)", "First consonant (초성)", "ㅎ"],
        ["Press k (ㅏ)", "First vowel (중성)", "하"],
        ["Press s (ㄴ)", "Final consonant (종성)", "한"],
        ["Press r (ㄱ)", "New syllable starts — ㄱ moves to next block", "한ㄱ"],
        ["Press l (ㅜ)", "Vowel added", "한구"],
        ["Press d (ㄱ)", "Final consonant added", "한국"],
      ],
    },
    {
      type: "paragraph",
      text: "The block closes and opens in real time — the final character only appears when the block is complete. This is why Korean typing feels different from typing English or even Japanese: you're building characters live, not selecting them from a candidate list. Once your muscle memory kicks in, this process becomes completely automatic — and that's when your 한글 타자 속도 really takes off.",
    },
    { type: "heading", text: "Dubeolsik vs Sebeolsik — 두벌식 vs 세벌식", id: "keyboard-layouts" },
    {
      type: "paragraph",
      text: "There are two keyboard layouts for Korean — and choosing the right one matters before you start practicing.",
    },
    {
      type: "table",
      headers: ["Layout", "Korean Name", "How It Works", "Who Uses It"],
      rows: [
        ["2-Set / Dubeolsik", "두벌식", "Consonants on left, vowels on right — one jamo per key", "~99% of all Korean typists — South Korea's national standard"],
        ["3-Set / Sebeolsik", "세벌식", "Separate keys for initial, medial, and final jamo — entire syllables per hand position", "~1% — niche ergonomic users and speed specialists"],
      ],
    },
    {
      type: "paragraph",
      text: "Dubeolsik is your answer — almost universally. It's the legal national standard in South Korea, it's pre-installed on every Korean device, it's what every employer tests on, and it's what your Korean friends use. The 세벌식 layout is ergonomically superior in theory — some specialists claim it reduces finger travel and strain — but it's so uncommon that practicing on it means you'll struggle on any borrowed keyboard or workplace computer.",
    },
    {
      type: "callout",
      icon: "⌨️",
      title: "Dubeolsik home row",
      text: "Left hand rests on ㅁ ㄴ ㅇ ㄹ (consonants), right hand on ㅗ ㅓ ㅏ ㅣ (vowels). The consonant-vowel split means your hands naturally alternate for most Korean words — giving Dubeolsik a rhythmic flow that experienced typists love.",
    },
    { type: "heading", text: "How to Enable Korean Keyboard — 한글 키보드 설정 방법", id: "keyboard-setup" },
    {
      type: "callout",
      icon: "🖥️",
      title: "Windows",
      text: "Settings → Time & Language → Language → Add Korean (한국어) → Microsoft IME installs automatically. Toggle between English and Korean with 한/영 key (right Alt on standard keyboards) or Alt + Shift.",
    },
    {
      type: "callout",
      icon: "🍎",
      title: "Mac",
      text: "System Settings → Keyboard → Input Sources → + → select Korean (두벌식) → add. Switch inputs with Caps Lock (Mac's default Korean toggle).",
    },
    {
      type: "paragraph",
      text: "Key shortcuts to know:",
    },
    {
      type: "table",
      headers: ["Key", "Function"],
      rows: [
        ["한/영 (or Alt)", "Toggle Korean ↔ English mode"],
        ["한자 (or Right Ctrl)", "Convert Hangul to Hanja (Chinese-origin Korean characters)"],
        ["Shift + consonant", "Type double consonants — ㄲ, ㄸ, ㅃ, ㅆ, ㅉ"],
        ["Backspace", "Delete last jamo (not full syllable block)"],
      ],
    },
    { type: "heading", text: "Korean Typing Speed Benchmarks — 평균 타자 속도는?", id: "benchmarks" },
    {
      type: "paragraph",
      text: "Korean typing speed is measured in 타수/분 (keystrokes per minute) for formal Korean contexts and WPM for international comparison. Here's the full breakdown:",
    },
    {
      type: "table",
      headers: ["WPM", "타수/분 (approx.)", "Level", "수준", "Real-World Standard"],
      rows: [
        ["Below 20", "<100", "Beginner", "초보자", "Learning jamo positions and block assembly"],
        ["20–35", "100–175", "Basic", "기초", "Casual KakaoTalk messages, social media"],
        ["35–50", "175–250", "Average", "보통", "Typical Korean adult PC user"],
        ["50–65", "250–325", "Good", "양호", "Office work standard — 사무직 기준"],
        ["65–80", "325–400", "Professional", "전문가", "Data entry, editorial, translation roles"],
        ["80–100", "400–500", "Fast", "빠름", "Senior professionals, Korean content creators"],
        ["100+", "500+", "Elite", "최상위", "타자 대회 (typing competition) level"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Data point",
      text: "Research on Korean typing shows the average adult Korean typist reaches around 40 WPM, while professional typists — 번역가, 기자, 데이터 입력 전문가 — typically achieve 65–75 WPM. For TOPIK IBT (Internet-Based Test) written sections, exam preparation sites recommend a minimum of 30–40 Korean characters per minute to complete essays comfortably within the time limit.",
    },
    { type: "heading", text: "Korean Typing Speed for Jobs and Exams — 직업별 타자 속도 기준", id: "job-requirements" },
    {
      type: "table",
      headers: ["Role / 직업", "Min. WPM", "Min. 타수/분", "Notes"],
      rows: [
        ["사무직 / General office worker", "40–50 WPM", "200–250", "Korean companies standard — Naver, Kakao, Samsung internal tests"],
        ["데이터 입력 / Data entry operator", "60–75 WPM", "300–375", "95%+ accuracy required alongside speed"],
        ["비서 / Executive secretary", "55–70 WPM", "275–350", "Mixed Korean + English often required"],
        ["번역가 / Translator", "55–70 WPM", "275–350", "Korean ↔ English, Korean ↔ Japanese pairs"],
        ["기자 / Journalist / writer", "65–80 WPM", "325–400", "News portals — 조선일보, 중앙일보, Naver News"],
        ["고객 서비스 / Customer support", "40–55 WPM", "200–275", "Real-time KakaoTalk and Naver chat support"],
        ["TOPIK IBT 시험 준비", "30–40 chars/min", "—", "Written response sections — TOPIK Level 3–6"],
        ["자막 제작 / Subtitle editor", "65–80 WPM", "325–400", "Korean subtitles for streaming — Netflix, Wavve, Tving"],
      ],
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "paragraph",
      text: "Our online Korean typing speed test (온라인 타자 검정) is built for anyone who types in Korean — from absolute beginners to professional typists:",
    },
    {
      type: "list",
      items: [
        "🎵 K-pop and K-drama fans worldwide who want to type Korean lyrics, fan comments, and subtitles fluently — the fastest-growing Korean typing audience globally",
        "📚 TOPIK exam takers (TOPIK I and TOPIK II) preparing for the computer-based written response sections that require confident Hangul input",
        "💼 Korean office job applicants — 사무직, 비서, 데이터 입력 roles where 타자 속도 검정 (typing speed certification) is part of the hiring process",
        "✍️ Translators and localizers working on Korean ↔ English, Korean ↔ Japanese, Korean ↔ Chinese language pairs for entertainment, tech, and gaming industries",
        "🎮 Korean gaming community — PC bang culture, Korean MMOs, and Esports communities where fast Korean chat is a social skill",
        "🌍 Korean diaspora in the US, Japan, Australia, and Southeast Asia who type Korean daily and want to benchmark their 한글 타자 속도",
        "🎓 Korean language learners — from beginner jamo practice through intermediate fluency, building keyboard confidence alongside vocabulary",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Korean typing speed?",
          answer:
            "35–50 WPM (175–250 타수/분) is typical for the average Korean adult PC user. 50–65 WPM meets the office-work standard (사무직 기준), and 65+ WPM is professional-level — data entry, editorial, and translation roles. TOPIK IBT exam prep recommends at least 30–40 characters per minute.",
        },
        {
          question: "Should I learn Dubeolsik or Sebeolsik?",
          answer:
            "Learn Dubeolsik (두벌식) — it's South Korea's national standard, pre-installed on virtually every device, and what every employer and Korean friend uses. Sebeolsik (세벌식) is a niche ergonomic layout used by less than 1% of typists; learning it means struggling on any borrowed or workplace keyboard.",
        },
        {
          question: "How does Korean syllable block typing work?",
          answer:
            "Each Korean syllable is built live from individual jamo (consonants and vowels) as you type — the block closes and a new one opens automatically once a syllable is complete. Unlike Chinese or Japanese, there's no candidate-list selection step; the character assembles directly from your keystrokes.",
        },
        {
          question: "How is WPM calculated on this Korean typing test?",
          answer: "Every five typed characters counts as one word, the same international convention used across languages — we also show 타수/분 (keystrokes per minute), the formal Korean metric, alongside your WPM.",
        },
        {
          question: "Is this Korean typing test free?",
          answer: "Yes — completely free, no signup, no installation, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "테스트 시간을 위에서 선택하세요 — 30초, 1분, 5분 — 그리고 바로 입력을 시작하세요. WPM, 타수/분, 정확도(정확률)가 테스트 완료 후 즉시 표시됩니다. Pick your duration, start typing, and get your 한글 WPM result in seconds.",
    },
  ],
};

export default content;
