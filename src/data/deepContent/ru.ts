import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Russian Typing Speed Test — Тест Скорости Набора Текста на Русском",
  seoDescription:
    "Free Russian typing speed test — тест скорости печати на русском. ЙЦУКЕН keyboard, WPM & ЗВМ (characters per minute). No signup, get your result now.",
  researchedKeywords: [
    "russian typing test",
    "russian typing speed test",
    "тест скорости печати",
    "тест скорости набора текста",
    "cyrillic typing test",
    "йцукен typing test",
    "russian keyboard typing test",
    "russian typing test online free",
    "знаков в минуту тест",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Russian is the most widely spoken Slavic language on Earth — with over 250 million speakers across Russia, Ukraine, Belarus, Kazakhstan, and the broader CIS region. Millions more Russian speakers live in Europe, the US, Israel, and Central Asia. For all of them, fast and accurate Cyrillic typing is a daily professional need — for office work, translation, legal documents, journalism, government roles, and digital content.",
        "Our free Russian typing speed test (тест скорости печати на русском) measures your real WPM and знаков в минуту (characters per minute) using the standard ЙЦУКЕН keyboard layout — the same layout used on every Russian computer since 1917. No signup. No download. Just type and get your result.",
        "Проверьте прямо сейчас свою скорость набора текста на русском — выберите продолжительность теста, начните печатать и получите результат в знаках в минуту (ЗВМ) и словах в минуту (СВМ) мгновенно.",
      ],
    },
    { type: "heading", text: "Two Metrics — WPM vs ЗВМ (Знаков в Минуту)", id: "wpm-vs-zvm" },
    {
      type: "paragraph",
      text: "Here's something critical that most typing tests get wrong for Russian: Russia uses CPM (characters per minute), not WPM, as the official professional standard.",
    },
    {
      type: "table",
      headers: ["Metric", "Russian Term", "Abbreviation", "Used For"],
      rows: [
        ["Characters Per Minute", "Знаков в минуту", "ЗВМ / зн/мин", "Official Russian professional standard — job ads, government, legal"],
        ["Keystrokes Per Minute", "Ударов в минуту", "УВМ", "Same as ЗВМ — synonymous in Russian professional context"],
        ["Words Per Minute", "Слов в минуту", "СВМ", "Understood conversationally, but never used in formal Russian testing"],
        ["Net WPM", "Чистая скорость", "—", "International comparison, after error deductions"],
      ],
    },
    {
      type: "paragraph",
      text: "The conversion is direct: 200 ЗВМ = 40 WPM. So when a Russian job listing says \"скорость печати от 200 знаков в минуту\" — that's 40 WPM. Our test shows you both numbers so you always know exactly where you stand whether you're comparing locally or internationally.",
    },
    { type: "heading", text: "The ЙЦУКЕН Keyboard — Раскладка Клавиатуры", id: "keyboard-layout" },
    {
      type: "paragraph",
      text: "The standard Russian keyboard layout is called ЙЦУКЕН — named after the first six letters on the top row. It's been the official Russian layout since 1917 and is used identically across Russia, Belarus, Kazakhstan, Kyrgyzstan, and Tajikistan. Here's how the three keyboard rows look on ЙЦУКЕН:",
    },
    {
      type: "table",
      headers: ["Row", "Keys"],
      rows: [
        ["Top row", "Й Ц У К Е Н Г Ш Щ З Х Ъ"],
        ["Home row", "Ф Ы В А П Р О Л Д Ж Э"],
        ["Bottom row", "Я Ч С М И Т Ь Б Ю"],
      ],
    },
    {
      type: "paragraph",
      text: "Your home row fingers rest on Ф-Ы-В-А (left) and П-Р-О-Л (right) — not on the same keys as English QWERTY. This is the first major adjustment when switching from English. Most common Russian vowels and consonants concentrate in the center of the layout — once you're comfortable, Russian typing flows surprisingly naturally.",
    },
    {
      type: "paragraph",
      text: "ЙЦУКЕН vs Phonetic layout — which should you use?",
    },
    {
      type: "table",
      headers: ["Layout", "How It Works", "Best For"],
      rows: [
        ["ЙЦУКЕН", "Standard Russian layout — letters arranged by Cyrillic frequency", "Native speakers, professionals, long-term learners"],
        ["Phonetic (Translit)", "Russian letters map to similar English sounds — А→A, Б→B, В→V", "Beginners, occasional users, diaspora Russians on English keyboards"],
      ],
    },
    {
      type: "callout",
      icon: "💡",
      title: "Our recommendation",
      text: "If you're serious about Russian typing speed, learn ЙЦУКЕН. The phonetic layout caps your ceiling — it's not what Russian employers test on and not what native speakers use. Start with phonetic to get comfortable, then transition to ЙЦУКЕН within 2–3 weeks.",
    },
    {
      type: "callout",
      icon: "⌨️",
      title: "How to enable Russian keyboard",
      text: "Windows: Settings → Time & Language → Language → Add Russian → Russian (ЙЦУКЕН). Switch with Alt+Shift or Win+Space. Mac: System Settings → Keyboard → Input Sources → add Russian. Switch with Ctrl+Space. Linux: Settings → Region & Language → Input Sources → Russian (Russia).",
    },
    { type: "heading", text: "The 4 Letters That Trip Everyone Up", id: "tricky-letters" },
    {
      type: "paragraph",
      text: "Russian has 33 Cyrillic letters — 7 more than English. Four of them cause the most errors for learners and non-native typists:",
    },
    {
      type: "table",
      headers: ["Letter", "Name", "What It Does", "Where It Is"],
      rows: [
        ["Ё", "Yo", "Sounds like \"yo\" — often replaced with Е in casual text but required in formal writing, names, and children's books", "Top-left key (where ` is on QWERTY)"],
        ["Ъ", "Tvyordy znak (Hard sign)", "Prevents palatalization — no sound itself. Changes word meaning if omitted.", "Far right, top row"],
        ["Ь", "Myagky znak (Soft sign)", "Makes preceding consonant \"soft\" (palatalized) — no sound itself. Essential for correct spelling", "Bottom row, after Т"],
        ["Ы", "Yery", "A unique back vowel with no English equivalent — sounds between \"i\" and \"u\"", "Home row, second from left"],
      ],
    },
    {
      type: "paragraph",
      text: "Confusing Ъ and Ь or skipping Ё are instantly recognized as errors by native Russian speakers and counted as full mistakes in professional tests. Our passages include all four to make sure your practice reflects real Russian text.",
    },
    { type: "heading", text: "Russian Typing Speed Benchmarks — Какая Скорость Считается Хорошей?", id: "benchmarks" },
    {
      type: "paragraph",
      text: "Here's where your result actually places you — in both ЗВМ (Russian standard) and WPM (international):",
    },
    {
      type: "table",
      headers: ["ЗВМ (зн/мин)", "WPM (approx.)", "Level", "Уровень", "Real-World Standard"],
      rows: [
        ["Below 100", "<20", "Beginner", "Начинающий", "Just learning the layout"],
        ["100–200", "20–40", "Basic", "Базовый", "Casual use, messages, emails"],
        ["200–250", "40–50", "Average", "Средний", "Typical native Russian adult typist"],
        ["250–300", "50–60", "Good", "Хороший", "Office work, administrative roles"],
        ["300–400", "60–80", "Professional", "Профессиональный", "Secretarial standard, data entry"],
        ["400–500", "80–100", "Fast", "Быстрый", "Journalist, legal typist, translator"],
        ["500+", "100+", "Elite", "Элитный", "Competition level, court reporter"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Data point",
      text: "The average native Russian adult typist reaches 40–50 WPM (200–250 ЗВМ). Professional roles — секретарь, делопроизводитель, переводчик — typically require 50–75 WPM (250–375 ЗВМ). Fast professional typists hit 75+ WPM (375+ ЗВМ) on sustained 10-minute tests.",
    },
    { type: "heading", text: "Russian Typing Speed for Jobs — Требования к Скорости Печати", id: "job-requirements" },
    {
      type: "paragraph",
      text: "Whether you're in Moscow, Minsk, Almaty, or working remotely for a Russian-speaking employer — here's what different roles actually require:",
    },
    {
      type: "table",
      headers: ["Role", "Min. ЗВМ", "Min. WPM", "Notes"],
      rows: [
        ["Секретарь / Secretary", "200–250", "40–50", "Standard requirement in Russian job ads"],
        ["Делопроизводитель / Records Manager", "200–250", "40–50", "Government and corporate offices"],
        ["Оператор ввода данных / Data Entry", "250–350", "50–70", "Accuracy 95%+ alongside speed"],
        ["Переводчик / Translator", "250–350", "50–70", "Russian ↔ English bilingual typing"],
        ["Журналист / Journalist", "300–400", "60–80", "Digital media, news portals, RBC, Kommersant"],
        ["Юридический секретарь / Legal Secretary", "300–400", "60–80", "Formal Russian, zero tolerance for errors"],
        ["Стенографист / Stenographer", "500+", "100+", "Real-time dictation transcription"],
        ["Технический писатель / Technical Writer", "250–300", "50–60", "IT documentation, user manuals"],
      ],
    },
    {
      type: "paragraph",
      text: "Russian job postings on hh.ru (HeadHunter) — the leading Russian job platform — regularly list typing speed requirements as \"скорость печати не менее 200 знаков в минуту\" for administrative and secretarial roles, and \"300+ зн/мин\" for senior data entry and legal positions.",
    },
    { type: "heading", text: "Ё — The Most Skipped Letter in Russian", id: "yo-letter" },
    {
      type: "paragraph",
      text: "The letter Ё deserves its own mention. It's technically one of the 33 official Russian letters — but it gets omitted constantly in casual text, replaced with the visually similar Е. In practice this creates two rules you need to know:",
    },
    {
      type: "list",
      items: [
        "Informal text (messages, social media, most websites): Е is usually acceptable in place of Ё",
        "Formal text (official documents, children's books, names, legal papers): Ё is required and omitting it is an error",
      ],
    },
    {
      type: "paragraph",
      text: "On the ЙЦУКЕН keyboard, Ё lives in the top-left corner — where the backtick (`) sits on a QWERTY keyboard. It's easy to reach but easy to forget. Our test flags every missing Ё in formal passage mode so your accuracy score reflects real professional standards.",
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏛️ Russian government and administrative job applicants — секретарь, делопроизводитель, оператор ПК positions across Russia, Belarus, and Kazakhstan",
        "✍️ Translators and interpreters handling Russian ↔ English, Russian ↔ German, Russian ↔ Chinese language pairs",
        "📰 Journalists and editors at Russian-language media — RBC, Kommersant, Meduza, Russian digital newsrooms",
        "🎓 Russian language learners — students at universities and language schools benchmarking keyboard fluency",
        "🌍 Russian diaspora across Europe, USA, Israel, UAE, and Central Asia — staying sharp in their native language",
        "💼 Remote workers employed by Russian-speaking companies who need certified Cyrillic typing speed",
        "🔬 Researchers and academics working with Russian-language sources and documents",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What's a good Russian typing speed?",
          answer:
            "200–250 ЗВМ (40–50 WPM) is typical for a native adult typist. 250–300 ЗВМ (50–60 WPM) is good for office work, and 300+ ЗВМ (60+ WPM) is professional secretarial/data-entry standard. Стенографисты (stenographers) reach 500+ ЗВМ (100+ WPM).",
        },
        {
          question: "Should I learn ЙЦУКЕН or the phonetic layout?",
          answer:
            "Learn ЙЦУКЕН if you're serious about Russian typing speed — it's the official layout used by Russian employers and native speakers since 1917. The phonetic (translit) layout is easier to start with but caps your long-term speed; most beginners transition to ЙЦУКЕН within 2–3 weeks.",
        },
        {
          question: "Why does Russian use characters per minute instead of WPM?",
          answer:
            "Знаков в минуту (ЗВМ, characters per minute) is the official Russian professional standard used in job ads, government hiring, and legal contexts. WPM is understood conversationally but isn't used in formal Russian typing tests. The conversion is direct: 200 ЗВМ = 40 WPM.",
        },
        {
          question: "Is it okay to skip the letter Ё?",
          answer:
            "In informal text (messages, social media, most websites), Е is commonly used in place of Ё. But in formal text — official documents, legal papers, names, children's books — Ё is required, and omitting it counts as an error on this test in formal passage mode.",
        },
        {
          question: "Is this Russian typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "Выберите продолжительность теста выше — 30 секунд, 1 минута, 5 минут — и начните печатать. Ваша скорость в знаках в минуту (ЗВМ), слова в минуту (СВМ) и точность отобразятся сразу после теста. Pick your duration, start typing, and get your Russian WPM + ЗВМ result in seconds.",
    },
  ],
};

export default content;
