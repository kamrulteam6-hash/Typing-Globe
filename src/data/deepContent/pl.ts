import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Polish Typing Speed Test — Test Szybkości Pisania po Polsku",
  seoDescription:
    "Free Polish typing speed test — test szybkości pisania po polsku. Polish Programmers layout. Check your WPM, znaki na minutę (ZNM) and dokładność. No signup.",
  researchedKeywords: [
    "polish typing test",
    "test szybkości pisania",
    "polish programmers layout",
    "polish typing speed test",
    "znaki na minutę",
    "polish typing test online free",
    "altgr polish keyboard",
    "test pisania na klawiaturze",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Polish is spoken by over 45 million people — making it the most widely spoken West Slavic language on Earth and the second most spoken Slavic language after Russian. But Polish doesn't stay inside Poland's borders. Over 21 million Poles live abroad — the largest diaspora in Europe — with major communities in the UK, Germany, USA, the Netherlands, and Australia, all typing Polish daily for work, family, and business.",
        "Our free Polish typing speed test (test szybkości pisania) measures your real WPM, znaki na minutę (ZNM) — characters per minute — and dokładność in real time, using the standard Polish Programmers keyboard layout. No signup. No download. Type and see your result instantly.",
        "Sprawdź teraz swoją szybkość pisania po polsku — wybierz czas testu, zacznij pisać i natychmiast poznaj swoje słowa na minutę (SNM) oraz poziom dokładności.",
      ],
    },
    { type: "heading", text: "Polish Typing Metrics — SNM, ZNM, and Dokładność", id: "metrics" },
    {
      type: "paragraph",
      text: "Poland uses its own terminology for typing speed — and understanding it is essential if you're applying for any Polish administrative role or sitting an official employment typing test.",
    },
    {
      type: "table",
      headers: ["Metric", "Polish Term", "Abbreviation", "What It Measures"],
      rows: [
        ["Words Per Minute", "Słów Na Minutę", "SNM", "Net typing speed — standard for Polish job market"],
        ["Characters Per Minute", "Znaków Na Minutę", "ZNM", "Total keystroke rate — used in data entry roles"],
        ["Net WPM", "Netto SNM", "—", "Speed after error penalty deductions"],
        ["Accuracy", "Dokładność", "%", "Percentage of correctly typed characters"],
        ["Errors", "Błędy", "—", "Total incorrect keystrokes during the test"],
      ],
    },
    {
      type: "callout",
      icon: "🧮",
      title: "SNM Formula",
      text: "SNM (netto) = (Łączna liczba znaków ÷ 5 ÷ minuty) − błędy",
    },
    {
      type: "paragraph",
      text: "Polish job listings for sekretarka, asystentka, and operator wprowadzania danych roles regularly list both SNM and ZNM requirements — just as Dutch listings use APM and Italian listings use battute al minuto. Knowing both metrics means you're interview-ready from day one.",
    },
    { type: "heading", text: "The Polish Programmers Layout — The Smartest Way to Type Polish", id: "keyboard-layout" },
    {
      type: "paragraph",
      text: "This is where Polish typing gets genuinely interesting — and where your competitive advantage starts. Most countries either adapt their physical keyboard (Germany's QWERTZ, France's AZERTY) or use a completely different script. Poland took a third path: the Polish Programmers layout keeps the full QWERTY base intact and adds all 9 Polish special characters via the Right Alt (AltGr) key. It's elegant, practical, and the dominant input method used on virtually every computer in Poland today.",
    },
    {
      type: "paragraph",
      text: "Here are all 9 Polish diacritics, their AltGr shortcuts, what they sound like, and how commonly they appear in text:",
    },
    {
      type: "table",
      headers: ["Polish Letter", "AltGr Shortcut", "Sound / Type", "Frequency", "Common Words"],
      rows: [
        ["ą", "AltGr + A", "Nasal \"on\" vowel — ogonek", "Common", "ją, są, mąż, ząb"],
        ["ć", "AltGr + C", "Soft \"ch\" — kreska", "Moderate", "ćma, być, więcej, ćwiczenie"],
        ["ę", "AltGr + E", "Nasal \"en\" vowel — ogonek", "Very common", "się, też, będę, pięć, między"],
        ["ł", "AltGr + L", "English \"w\" sound", "Very common", "ło, był, wziął, łatwy, głos"],
        ["ń", "AltGr + N", "Soft \"ny\" — kreska", "Moderate", "koń, uczeń, dzień"],
        ["ó", "AltGr + O", "Closed \"oo\" sound — kreska", "Common", "król, wróć, córka, mówić"],
        ["ś", "AltGr + S", "Soft \"sh\" — kreska", "Moderate", "śnieg, świat, środa, być"],
        ["ź", "AltGr + X", "Soft \"zh\" — kreska", "Rare", "źródło, źle, wróżka"],
        ["ż", "AltGr + Z", "Hard \"zh\" — dot above", "Common", "już, żeby, może, żona, też"],
      ],
    },
    {
      type: "callout",
      icon: "⚠️",
      title: "ż vs ź is critical",
      text: "Both make a \"zh\" sound, but ż (dot above) is hard and ź (kreska) is soft — and they mark completely different words. Może (maybe) vs źle (badly). Our test counts every ż/ź confusion as a full error, exactly as professional Polish spell-check does.",
    },
    {
      type: "paragraph",
      text: "The ł is the one that surprises every learner. It's not pronounced like \"l\" — it sounds exactly like the English letter \"w.\" Łódź is pronounced \"Woodge.\" Wziął sounds like \"vzyow.\" Getting your AltGr+L reflex automatic is one of the first milestones of Polish typing fluency.",
    },
    {
      type: "paragraph",
      text: "Polish 214 layout — the alternative. While Polish Programmers dominates, some older Polish offices and government systems use the Polish 214 layout, where special characters have their own dedicated keys rather than AltGr combinations. If you see a job listing specifying 214 layout, that's the one to practice.",
    },
    { type: "heading", text: "How to Set Up Polish Keyboard — Windows, Mac, Linux", id: "keyboard-setup" },
    {
      type: "callout",
      icon: "🖥️",
      title: "Windows",
      text: "Settings → Time & Language → Language → Add Polish → select Polish (Programmers) — not \"Polish (214)\". Switch between English and Polish with Left Alt + Shift or Win + Space.",
    },
    {
      type: "callout",
      icon: "🍎",
      title: "Mac",
      text: "System Settings → Keyboard → Input Sources → + → Polish → select Polish Pro (recommended for learners) or Polish. Switch with Ctrl + Space or the menu bar.",
    },
    {
      type: "table",
      headers: ["Action", "Shortcut"],
      rows: [
        ["Type ą", "AltGr (Right Alt) + A"],
        ["Type ę", "AltGr + E"],
        ["Type ó", "AltGr + O"],
        ["Type ł", "AltGr + L"],
        ["Type ż", "AltGr + Z"],
        ["Type ź", "AltGr + X"],
        ["Type ś", "AltGr + S"],
        ["Type ć", "AltGr + C"],
        ["Type ń", "AltGr + N"],
        ["Capital versions", "Shift + AltGr + letter"],
      ],
    },
    { type: "heading", text: "Polish Typing Speed Benchmarks — Co To Jest Dobra Szybkość Pisania?", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM (SNM)", "ZNM (approx.)", "Level", "Poziom", "Real-World Standard"],
      rows: [
        ["Below 20", "<100", "Beginner", "Początkujący", "Learning the layout and AltGr combinations"],
        ["20–35", "100–175", "Basic", "Podstawowy", "Casual e-mail, social media, Messenger"],
        ["35–50", "175–250", "Average", "Średni", "Typical Polish adult typist — 40–55 WPM"],
        ["50–65", "250–325", "Good", "Dobry", "Office standard — biuro, administracja"],
        ["65–80", "325–400", "Professional", "Profesjonalny", "Sekretarka, asystentka, redaktor"],
        ["80–100", "400–500", "Fast", "Szybki", "Senior data entry, tłumacz, dziennikarz"],
        ["100+", "500+", "Elite", "Elitarny", "Competition typist, stenograf"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Data point",
      text: "According to dozro.com Polish typing benchmark data, the average native Polish typist reaches 40–55 WPM in everyday use. Professional administrative roles typically require 50–65 WPM as a minimum, while senior secretarial and data entry roles expect 65–80 WPM with 95%+ dokładność. Touch typists who learned proper dziesięciopalcowa metoda pisania (ten-finger typing) from a structured course consistently outperform self-taught typists by 20–30 WPM.",
    },
    { type: "heading", text: "Polish Typing Speed for Jobs — Wymagana Szybkość Pisania", id: "job-requirements" },
    {
      type: "table",
      headers: ["Role / Stanowisko", "Min. SNM", "Min. ZNM", "Notes"],
      rows: [
        ["Asystentka / Assistant", "45–55 WPM", "225–275 ZNM", "Standard across Polish corporate offices"],
        ["Sekretarka / Secretary", "55–70 WPM", "275–350 ZNM", "Blind typing often listed as requirement"],
        ["Operator wprowadzania danych / Data entry", "60–75 WPM", "300–375 ZNM", "95%+ accuracy essential — especially for diacritics"],
        ["Redaktor / Editor", "60–75 WPM", "300–375 ZNM", "Gazeta Wyborcza, Rzeczpospolita, Onet, WP"],
        ["Tłumacz / Translator", "55–70 WPM", "275–350 ZNM", "Polish ↔ English, Polish ↔ German, Polish ↔ French"],
        ["Prawnik / prawnik asystent", "60–75 WPM", "300–375 ZNM", "Formal legal Polish, zero tolerance for diacritic errors"],
        ["Obsługa klienta / Customer service", "40–55 WPM", "200–275 ZNM", "Real-time Polish chat — Allegro, InPost, PKO BP"],
        ["Dziennikarz / Journalist", "65–80 WPM", "325–400 ZNM", "Fast turnaround on breaking news, editorial copy"],
        ["Transkrypcja / Transcriptionist", "75–90 WPM", "375–450 ZNM", "Audio-to-text, near-perfect diacritic accuracy"],
      ],
    },
    { type: "heading", text: "The AltGr Rhythm — Why Polish Speed Builds Differently", id: "altgr-rhythm" },
    {
      type: "paragraph",
      text: "Polish typing has a unique rhythm that no other QWERTY-based language produces. Every time a diacritic appears — and in natural Polish text, that's very frequent — your right thumb hits AltGr while your finger simultaneously hits the base letter. This two-key press becomes a single fluid gesture with practice, almost like a chord on a piano.",
    },
    {
      type: "paragraph",
      text: "The most common diacritics in everyday Polish text by frequency are ę, ą, ó, ż, and ł — and they appear in some of the most common Polish words: się (reflexive particle — appears in thousands of verbs), są (they are), też (also), już (already), był (he was). Once your AltGr combinations become automatic for these five, your practical Polish typing speed jumps significantly — because you stop hesitating on the most common words in the language.",
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "💼 Polish job applicants in Poland targeting sekretarka, asystentka, operator wprowadzania danych, and redaktor roles where szybkość pisania is a tested requirement",
        "🌍 Polish diaspora in the UK — over 800,000 Polish speakers in Britain who type Polish daily for work, banking, government services, and family",
        "🇩🇪 Polish diaspora in Germany — nearly 2 million Polish speakers, many working in bilingual Polish-German business environments",
        "🇺🇸 Polish-Americans — 9+ million people of Polish descent in the US, many maintaining active Polish keyboard fluency",
        "✍️ Translators and localization specialists working on Polish ↔ English, Polish ↔ German, Polish ↔ French for EU, legal, tech, and gaming industries",
        "🎓 Polish language learners — benchmarking keyboard fluency from first AltGr combination through professional diacritic accuracy",
        "📰 Polish journalists and content creators at Gazeta Wyborcza, Rzeczpospolita, Onet.pl, Wirtualna Polska, and Polish digital media outlets",
        "🏛️ EU institution staff — Polish is one of the EU's 24 official languages; fast Polish typing is valuable for Brussels and Strasbourg-based roles",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Polish typing speed?",
          answer:
            "40–55 WPM is typical for the average native Polish typist. 50–65 WPM meets the office standard, and 65+ WPM is professional level — sekretarka, asystentka, redaktor roles. Senior data entry and transcription roles reach 75–90 WPM.",
        },
        {
          question: "What's the Polish Programmers keyboard layout?",
          answer:
            "It's the dominant Polish input method — it keeps the full QWERTY base intact and adds all 9 Polish special characters (ą, ć, ę, ł, ń, ó, ś, ź, ż) via the AltGr (Right Alt) key, rather than remapping the physical keyboard the way Germany's QWERTZ or France's AZERTY do.",
        },
        {
          question: "Why is the ż vs ź distinction important?",
          answer:
            "Both letters make a similar \"zh\" sound, but ż (dot above) is hard and ź (kreska) is soft, marking completely different words — może (maybe) vs źle (badly). This test counts every ż/ź confusion as a full error, matching professional Polish spell-check standards.",
        },
        {
          question: "How is SNM (WPM) calculated on this test?",
          answer: "SNM (netto) = (Łączna liczba znaków ÷ 5 ÷ minuty) − błędy — every 5 characters counts as one word, with a penalty subtracted for errors, the international standard formula used across the Polish job market.",
        },
        {
          question: "Is this Polish typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "Wybierz czas testu powyżej — 30 sekund, 1 minuta, 5 minut — i zacznij pisać. Twoje SNM (WPM), ZNM (ZPM) i dokładność pojawią się natychmiast po zakończeniu testu. Pick your duration, start typing, and get your Polish WPM + ZNM result in seconds.",
    },
  ],
};

export default content;
