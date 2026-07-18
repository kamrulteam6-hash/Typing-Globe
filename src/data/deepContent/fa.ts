import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "تست تایپ فارسی — Persian Typing Speed Test (Free, ISIRI Keyboard, ICDL Practice)",
  seoDescription:
    "Free Persian (Farsi) typing speed test on the standard ISIRI keyboard. Check your WPM and accuracy for office jobs, ICDL, and data entry — no signup.",
  researchedKeywords: [
    "تست سرعت تایپ فارسی",
    "persian typing test",
    "farsi typing speed test online free",
    "isiri 2901 keyboard layout",
    "persian typing test for jobs",
    "icdl typing test farsi",
    "تمرین تایپ ده انگشتی فارسی",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Persian (Farsi) is spoken natively by roughly 70 million people, the large majority of them in Iran, where it's the sole official language across an 88-million-person population. Related varieties — Dari in Afghanistan and Tajik in Tajikistan — bring the total number of Persian speakers worldwide to well over 100 million.",
        "In Iran, fast, accurate Persian typing is a genuine workplace skill, not a formality: office administration, content and journalism roles, translation, customer support, and data-entry positions in Tehran, Isfahan, and Shiraz regularly expect solid typing speed alongside standard software fluency, and ICDL (International Computer Driving Licence) certification — a common credential in Iranian job listings — includes a typing/word-processing component.",
        "This test scores real right-to-left Persian text on the standard national keyboard layout, the same one built into Windows and macOS. Free, no signup.",
      ],
    },
    { type: "heading", text: "Why Persian Typing Speed Matters", id: "why-it-matters" },
    {
      type: "paragraph",
      text: "Persian is the working language of Iran's government, education system, media, and private sector, and it's also the primary digital-communication language for a large global Persian-speaking diaspora — including Afghan Dari speakers and Tajik speakers, who share close mutual intelligibility with Iranian Persian even where scripts or accents diverge. Reliable keyboard fluency is a practical requirement wherever Persian is the working language of an office, newsroom, or classroom.",
    },
    { type: "heading", text: "How Persian Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "This test uses the standard five-characters-per-word formula, applied to the real right-to-left character stream you type. Net WPM — gross WPM minus a penalty for uncorrected errors — is the figure that matters, since Persian letters change shape depending on their position in a word and a single wrong keystroke can visibly distort the whole word.",
    },
    {
      type: "table",
      headers: ["Metric", "How It Works"],
      rows: [
        ["Gross WPM", "Total characters typed ÷ 5, divided by minutes elapsed"],
        ["Net WPM", "Gross WPM minus an error penalty — the realistic, employer-relevant figure"],
        ["Accuracy", "Professional Persian typing roles typically expect 95%+ accuracy"],
      ],
    },
    { type: "heading", text: "Persian Keyboard Layout and Script Input", id: "keyboard" },
    {
      type: "paragraph",
      text: "Persian is written right to left in a modified Perso-Arabic script. It shares its base letterforms with Arabic but is a distinct writing system: Persian adds four letters — پ (p), چ (ch), ژ (zh), and گ (g) — for sounds Arabic doesn't have, uses its own set of digit glyphs for some numerals, and follows different typographic conventions in places. The standard Persian keyboard is the national ISIRI standard (ISIRI 2901, refined by later revisions), built into Windows, macOS, iOS, and Android as the default Persian layout — distinct from an Arabic keyboard, which lacks direct keys for Persian's extra letters.",
    },
    {
      type: "table",
      headers: ["Special Character", "Notes"],
      rows: [
        ["پ (p), چ (ch), ژ (zh), گ (g)", "Persian's four additions to the Arabic alphabet, mapped directly on the ISIRI layout"],
        ["Persian digits (۰–۹)", "Distinct glyph shapes from Arabic-Indic numerals for 4, 5, and 6"],
        ["Zero-width non-joiner (نیم‌فاصله)", "Used to correctly separate certain letter/word combinations; supported on the standard layout"],
      ],
    },
    {
      type: "list",
      items: [
        "Windows: Settings → Time & Language → Language & Region → Add a language → Persian. Windows installs the ISIRI-standard layout automatically; switch with Windows + Space.",
        "Mac: System Settings → Keyboard → Input Sources → + → add Persian. macOS offers both Persian – Standard (ISIRI) and Persian – QWERTY options; Standard is the layout used in Iranian offices and schools.",
      ],
    },
    { type: "heading", text: "Persian Typing Speed Benchmarks", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "Level", "Real-World Context"],
      rows: [
        ["Below 15 WPM", "Beginner (مبتدی)", "Still building right-to-left keyboard familiarity"],
        ["15–25 WPM", "Basic (پایه)", "Comfortable casual Persian messaging"],
        ["25–35 WPM", "Average (متوسط)", "Typical everyday Persian computer use"],
        ["35–50 WPM", "Good (خوب)", "Standard expectation for office admin, content, and support roles"],
        ["50–65 WPM", "Advanced (پیشرفته)", "Fast, sustained professional Persian typing"],
        ["65+ WPM", "Expert (متخصص)", "Elite-level speed among career typists and transcribers"],
      ],
    },
    { type: "heading", text: "Persian Typing Requirements for Jobs and Certification", id: "jobs" },
    {
      type: "paragraph",
      text: "There is no single nationwide government-mandated Persian typing exam publicized the way some countries run civil-service typing tests, but typing proficiency is embedded in real hiring practice across Iran. ICDL certification — widely referenced in Iranian job postings for administrative and office roles — includes word-processing and typing assessment modules. Office administrator, translator, content-creation, and customer-support listings in major cities commonly expect 40+ WPM with 95%+ accuracy, and transcription work (increasingly common as remote/freelance work for Persian, Dari, and Tajik speakers) depends directly on sustained accurate typing speed.",
    },
    {
      type: "table",
      headers: ["Role / Context", "Typical Expectation"],
      rows: [
        ["Office administration & data entry", "40+ WPM with 95%+ accuracy commonly expected"],
        ["ICDL-certified professional roles", "Typing/word-processing module included in the standard certification track"],
        ["Transcription & translation (Persian, Dari, Tajik)", "Speed plus accuracy weighted heavily; often freelance/remote"],
        ["Journalism & content creation", "No fixed government threshold; newsroom pace expectations set internally"],
      ],
    },
    { type: "heading", text: "Farsi, Dari, and Tajik", id: "diaspora" },
    {
      type: "paragraph",
      text: "Iranian Persian (Farsi), Afghan Dari, and Tajikistani Tajik are mutually intelligible varieties of the same language family, with real practical differences: Dari, like Farsi, uses the Perso-Arabic script, while Tajik is written in a Cyrillic-based alphabet — a genuinely different typing setup requiring its own keyboard layout, distinct from ISIRI. Afghanistan counts tens of millions of Dari speakers, and Tajikistan several million Tajik speakers, alongside a substantial global Persian-speaking diaspora across North America and Europe who keep typing in Persian to stay connected with family, media, and community.",
    },
    {
      type: "callout",
      icon: "📖",
      title: "A literary language, still in daily use",
      text: "Persian has one of the world's richest continuous poetic traditions — Hafez, Rumi, and Ferdowsi remain widely quoted in everyday Iranian speech and writing — and that tradition continues in active contemporary publishing, not just as classroom material.",
    },
    { type: "heading", text: "Who This Test Is Built For", id: "who-its-for" },
    {
      type: "list",
      items: [
        "💻 Office administrators and data-entry staff in Iranian workplaces",
        "🎓 ICDL certification candidates practicing the typing module",
        "📰 Journalists and content creators writing for Persian-language media",
        "🌐 Translators working between Persian, Dari, Tajik, and English",
        "🎧 Transcribers and freelancers taking remote Persian/Dari transcription work",
        "📞 Customer support staff handling Persian-language chat and ticketing",
        "🌍 The Persian-speaking diaspora typing to stay connected in their first language",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Persian typing speed for office jobs?",
          answer:
            "35–50 WPM with 95%+ accuracy is the standard professional benchmark for office administration, content, and support roles in Iran. 25–35 WPM is typical for everyday casual use.",
        },
        {
          question: "What's the difference between the Persian and Arabic keyboard layouts?",
          answer:
            "The standard Persian keyboard (ISIRI 2901) adds direct keys for four letters Arabic doesn't have — پ, چ, ژ, گ — plus Persian's own digit glyphs and support for the zero-width non-joiner. An Arabic keyboard lacks direct access to these, making it a genuinely different layout despite the shared base script.",
        },
        {
          question: "Is Dari the same as Farsi for typing purposes?",
          answer:
            "Dari and Farsi share the same Perso-Arabic script and keyboard logic, with minor regional vocabulary and accent differences. Tajik, spoken in Tajikistan, is written in Cyrillic instead and requires a completely different keyboard layout.",
        },
        {
          question: "How does this test calculate WPM for Persian?",
          answer:
            "Every five typed characters, including spaces, counts as one word — the standard convention. Net WPM subtracts a penalty for uncorrected errors, matching how professional and ICDL-style typing assessments score.",
        },
        {
          question: "Is this Persian typing test free?",
          answer: "Yes — completely free, with no signup and no download required.",
        },
      ],
    },
    {
      type: "cta",
      text: "مدت زمان تست خود را انتخاب کنید و تایپ را شروع کنید تا سرعت و دقت واقعی خود را فوراً ببینید.",
    },
  ],
};

export default content;
