import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "German Typing Speed Test — Tippgeschwindigkeitstest Deutsch",
  seoDescription:
    "Free German typing speed test — Tippgeschwindigkeitstest Deutsch. QWERTZ layout, WPM & APM (Anschläge pro Minute). Standards for DACH office jobs. No signup.",
  researchedKeywords: [
    "german typing test",
    "tippgeschwindigkeitstest deutsch",
    "schreibgeschwindigkeit test",
    "qwertz typing test",
    "anschläge pro minute",
    "zehnfingersystem test",
    "german typing test online free",
    "apm to wpm",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Germany has one of the highest keyboard-proficiency expectations in the world. German employers don't just want fast typists — they expect Zehnfingersystem (10-finger touch typing) as a baseline skill, measured in Anschläge pro Minute (APM) rather than WPM. Whether you're job hunting in the DACH region, learning German, or benchmarking your Schreibgeschwindigkeit — our free German typing speed test gives you your real numbers in under a minute.",
        "Testen Sie jetzt Ihre Tippgeschwindigkeit auf Deutsch — wählen Sie Ihr Layout, starten Sie den Timer, und erhalten Sie sofort Ihre WPM, APM und Genauigkeit.",
      ],
    },
    { type: "heading", text: "Two Metrics, One Test — WPM and APM Explained", id: "wpm-vs-apm" },
    {
      type: "paragraph",
      text: "This is where German typing is genuinely different from English. In Germany, Austria, and Switzerland, the professional standard metric isn't WPM — it's APM (Anschläge pro Minute), meaning keystrokes per minute. Every key press counts, including Shift for capital letters. Here's how they connect:",
    },
    {
      type: "table",
      headers: ["Metric", "German Term", "Formula", "What It Measures"],
      rows: [
        ["WPM", "Wörter pro Minute (WpM)", "Total characters ÷ 5 ÷ minutes", "Net typing speed (standard global)"],
        ["APM / CPM", "Anschläge pro Minute", "Total keystrokes ÷ minutes", "Gross keystroke rate — the German professional standard"],
        ["Net WPM", "WpM netto", "Gross WPM − errors", "Real speed after deductions"],
        ["Accuracy", "Genauigkeit", "% correct characters", "Quality under pressure"],
      ],
    },
    {
      type: "paragraph",
      text: "The conversion is direct: 200 APM = 40 WPM. So when a German job listing says \"230 Anschläge pro Minute,\" that's roughly 46 WPM. Our test shows you both numbers so you're never confused about where you stand.",
    },
    {
      type: "callout",
      icon: "📌",
      title: "How Anschläge are counted",
      text: "In official German typing competitions and exams, capital letters count as 2 Anschläge — the letter stroke plus the Shift key. Spaces count as 1 Anschlag. Our test follows this standard.",
    },
    { type: "heading", text: "The QWERTZ Keyboard — What Makes German Typing Different", id: "qwertz" },
    {
      type: "paragraph",
      text: "The standard German keyboard layout is QWERTZ — and if you're used to QWERTY, there are several things that will immediately trip you up:",
    },
    {
      type: "table",
      headers: ["Difference", "QWERTZ (German)", "QWERTY (English)", "Why It Matters"],
      rows: [
        ["Z and Y swapped", "Z is top row, Y is bottom", "Y is top row, Z is bottom", "Z is far more common in German — words like zwischen, zehn, Zeit hit instantly"],
        ["Umlauts on home row", "Ä, Ö, Ü have dedicated keys", "No dedicated umlaut keys", "German text uses umlauts constantly — they're right where your fingers rest"],
        ["Eszett (ß) key", "Dedicated key on right side", "Not available", "straße, heiß, groß — the ß appears regularly in everyday German"],
        ["Numbers require Shift", "Top row shows symbols/umlauts by default", "Numbers are default", "Typing numbers in German text slows you down more than in English"],
        ["M key position", "Shifted one position right", "Standard position", "Catches QWERTY typists off guard"],
      ],
    },
    {
      type: "paragraph",
      text: "These differences mean your German WPM will typically run 10–20% lower than your English WPM when you first switch layouts — especially for nouns (every German noun is capitalized, requiring constant Shift use). Give yourself 2–4 weeks of daily practice before comparing scores across languages.",
    },
    { type: "heading", text: "German Typing Speed Benchmarks — Wie Schnell Sind Sie?", id: "benchmarks" },
    {
      type: "paragraph",
      text: "German professional standards are significantly higher than the global average. Here's the full benchmark table used in German-speaking workplaces and education:",
    },
    {
      type: "table",
      headers: ["APM (Anschläge/min)", "WPM (approx.)", "Level", "Deutsch Level", "Real-World Standard"],
      rows: [
        ["Below 100", "<20", "Beginner", "Anfänger", "Learning phase, no professional use"],
        ["100–180", "20–36", "Basic", "Grundkenntnisse", "Vocational school minimum (Abschrift: 180 APM)"],
        ["180–230", "36–46", "Average", "Durchschnittlich", "Office assistant, general Bürojob"],
        ["230–300", "46–60", "Good", "Gut", "Büromanagement exam standard (230 APM required)"],
        ["300–400", "60–80", "Professional", "Professionell", "Sekretärin, executive assistant, 10-Finger certified"],
        ["400–550", "80–110", "Fast", "Schnell", "Europasekretärin certification (300+ APM error-free)"],
        ["550+", "110+", "Elite", "Elite", "Competition level — Deutsche Meisterschaften standard"],
      ],
    },
    {
      type: "callout",
      icon: "🏆",
      title: "Real data point",
      text: "At the 2010 German Typing Championships (Deutsche Meisterschaften), the winner achieved 542 APM (≈108 WPM) error-free over 10 minutes. The current world record, held by Helena Matouskova, stands at 955 APM (≈191 WPM).",
    },
    { type: "heading", text: "Professional Requirements in the DACH Region", id: "job-requirements" },
    {
      type: "paragraph",
      text: "If you're job hunting in Germany, Austria, or Switzerland, here's what employers and certification bodies actually expect:",
    },
    {
      type: "table",
      headers: ["Role / Certification", "APM Required", "WPM (approx.)", "Notes"],
      rows: [
        ["Bürojob (general office)", "180–230 APM", "36–46 WPM", "Standard minimum for office work"],
        ["Kaufmann/-frau für Büromanagement", "230 APM", "~46 WPM", "Official exam requirement, 10-min test"],
        ["Sekretärin / Secretary", "250–300 APM", "50–60 WPM", "Error-free expected"],
        ["Europasekretärin", "300+ APM", "60+ WPM", "Certification requires 300 APM, fehlerlos"],
        ["Berufsschule / VHS course minimum", "180 APM", "~36 WPM", "End-of-course Abschrift standard"],
        ["Data entry / Dateneingabe", "300–400 APM", "60–80 WPM", "High accuracy required, 95%+"],
        ["Transcription / Protokoll", "400+ APM", "80+ WPM", "Near-perfect accuracy, fast turnaround"],
      ],
    },
    { type: "heading", text: "The Zehnfingersystem — Why Germany Takes It Seriously", id: "zehnfingersystem" },
    {
      type: "paragraph",
      text: "In German-speaking countries, Zehnfingersystem (10-finger touch typing) isn't just a productivity tip — it's a formal skill taught in Berufsschulen (vocational schools) and listed on CVs. The system is based on strict home-row technique:",
    },
    {
      type: "list",
      items: [
        "Left hand rests on A-S-D-F (QWERTZ: A-S-D-F)",
        "Right hand rests on J-K-L-Ö",
        "Every key is assigned to a specific finger — no guessing, no looking",
        "Shift is always pressed with the opposite hand from the letter",
      ],
    },
    {
      type: "paragraph",
      text: "The hard ceiling for non-touch typists in German is around 150–180 APM (30–36 WPM) — because constant noun capitalization, umlaut access, and the ß key all become bottlenecks without proper 10-finger technique. The payoff for learning the system properly: practiced Zehnfingerschreiber comfortably reach 200–400 APM in everyday use.",
    },
    { type: "heading", text: "German Special Characters — Das Müssen Sie Beherrschen", id: "special-characters" },
    {
      type: "paragraph",
      text: "Our test passages include all the characters that define real German typing proficiency:",
    },
    {
      type: "list",
      items: [
        "Umlauts — ä, ö, ü (and capitalized: Ä, Ö, Ü) — appear in für, können, über, Österreich",
        "Eszett (ß) — Straße, heiß, Spaß, Fuß — dedicated key on QWERTZ, right of Ö",
        "Capitalized nouns — every noun in German gets a capital: Tisch, Arbeit, Tastatur — that's a Shift press for the majority of content words",
        "Swiss exception — Switzerland uses ss instead of ß entirely. Swiss QWERTZ keyboards don't have a ß key. If you're in Switzerland, ss is always correct.",
      ],
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "💼 DACH job applicants — Germany, Austria, Switzerland office, admin, and secretarial roles",
        "🎓 Berufsschule and VHS students — preparing for the 10-minute Abschrift exam",
        "📋 Kaufmann/-frau für Büromanagement candidates — targeting the 230 APM certification requirement",
        "🌍 German language learners — building keyboard fluency alongside language skills",
        "🇨🇭 Swiss professionals — QWERTZ with ss instead of ß, specific to Swiss standard",
        "✍️ Translators and technical writers — working in German for EU, automotive, engineering, and pharma sectors",
        "💻 Developers working in German-speaking companies — IDE, documentation, email all in Deutsch",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What's a good German typing speed?",
          answer:
            "230 APM (about 46 WPM) meets the official Kaufmann/-frau für Büromanagement exam standard. 300+ APM (60+ WPM) is professional secretarial level, and 400+ APM (80+ WPM) is fast, near-transcription-level typing. The German competitive world record is 955 APM (≈191 WPM).",
        },
        {
          question: "What's the difference between WPM and APM?",
          answer:
            "WPM (Wörter pro Minute) counts every 5 characters as one word. APM (Anschläge pro Minute) counts every individual keystroke, including the Shift key for capital letters — the standard metric in German, Austrian, and Swiss professional typing. Roughly, 200 APM equals 40 WPM.",
        },
        {
          question: "Why is my German typing speed lower than my English speed?",
          answer:
            "QWERTZ moves several keys compared to QWERTY, umlauts (ä, ö, ü) and ß need dedicated keystrokes, and every German noun is capitalized — all of which add real Shift-key overhead. Expect your German WPM to run 10–20% lower than English at first; this gap closes with 2–4 weeks of practice.",
        },
        {
          question: "Do Swiss keyboards use ß?",
          answer: "No — Switzerland uses ss instead of ß entirely, and Swiss QWERTZ keyboards don't even have a dedicated ß key. If you're testing for a Swiss role, ss is always the correct form.",
        },
        {
          question: "Is this German typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "Wählen Sie oben Ihr Layout — QWERTZ oder QWERTY — stellen Sie Ihren Timer ein, und beginnen Sie zu tippen. Ihre Tippgeschwindigkeit (WPM + APM) und Genauigkeit werden sofort angezeigt. Set your timer, pick your layout, and start typing — your APM and WPM are ready in seconds.",
    },
  ],
};

export default content;
