import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Dutch Typing Speed Test — Typesnelheidstest Nederlands",
  seoDescription:
    "Free Dutch typing speed test — typesnelheidstest Nederlands. Check your WPM, aanslagen per minuut (APM) and nauwkeurigheid instantly. No signup needed.",
  researchedKeywords: [
    "dutch typing test",
    "typesnelheidstest nederlands",
    "aanslagen per minuut",
    "dutch typing speed test",
    "typetest online gratis",
    "dutch typing test online free",
    "blind typen tien vingers",
    "typevaardigheid test",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Dutch is spoken by over 24 million native speakers across the Netherlands, Belgium (Flanders), Suriname, Aruba, and Curaçao — making it the most widely spoken Germanic language after English and German. In the Netherlands and Belgium, typevaardigheid (typing proficiency) is a core, tested skill for administrative, secretarial, and data entry roles. Employers don't just want to know if you can type — they want to know exactly how many aanslagen per minuut you can produce, reliably, under timed pressure.",
        "Our free Dutch typing speed test (typesnelheidstest Nederlands) measures your real WPM, aanslagen per minuut (APM), and nauwkeurigheid in real time. No signup. No download. Just type and get your score.",
        "Test nu je typesnelheid in het Nederlands — kies je testduur, begin met typen en zie je woorden per minuut (WPM) en aanslagen per minuut (APM) direct na de test.",
      ],
    },
    { type: "heading", text: "The Dutch Typing Metric — Aanslagen Per Minuut", id: "apm-metric" },
    {
      type: "paragraph",
      text: "Here's what separates the Dutch and Belgian job market from most of the English-speaking world: employers in the Netherlands and Belgium almost universally use aanslagen per minuut (APM) — not WPM — as their standard typing metric. Understanding the difference before you apply for any Dutch administrative role is non-negotiable.",
    },
    {
      type: "table",
      headers: ["Metric", "Dutch Term", "Abbreviation", "What It Measures"],
      rows: [
        ["Characters Per Minute", "Aanslagen Per Minuut", "APM", "Total keystrokes including spaces — the Dutch professional standard"],
        ["Words Per Minute", "Woorden Per Minuut", "WPM", "Net speed (5 chars = 1 word) — international comparison"],
        ["Net WPM", "Netto WPM", "—", "Speed after error deductions — what job tests actually score"],
        ["Accuracy", "Nauwkeurigheid", "%", "Percentage of correct characters"],
        ["Errors", "Fouten", "—", "Total incorrect keystrokes"],
      ],
    },
    {
      type: "callout",
      icon: "📋",
      title: "Real job listing example",
      text: "The conversion is direct: 250 APM = 50 WPM. A real 2024 Rotterdam job listing for an Administratief Medewerker at a major logistics company stated: \"Een uitstekende typevaardigheid is vereist (minimaal 250 aanslagen per minuut). Dit zal worden getest.\" — that's exactly 50 WPM. Our test shows you both numbers so you always know precisely where you stand against Dutch job market requirements.",
    },
    {
      type: "paragraph",
      text: "According to typetuin.nl — one of the Netherlands' leading typing training platforms — an experienced typiste (professional typist) reaches 350 APM (70 WPM), while someone who has learned blind typen met tien vingers (ten-finger touch typing) from a young age and types regularly at work can realistically exceed 200 APM (40 WPM) as a comfortable floor. People who hunt-and-peck with a few fingers rarely exceed 135 aanslagen per minuut (27 WPM).",
    },
    { type: "heading", text: "The Dutch QWERTY Keyboard — Almost English, But Not Quite", id: "keyboard" },
    {
      type: "paragraph",
      text: "The Netherlands and Belgium both use a QWERTY layout — the same base as English. But Dutch QWERTY has a few key differences that catch non-native typists off guard, and even native Dutch speakers who learned on English keyboards need to watch for:",
    },
    {
      type: "table",
      headers: ["Feature", "Dutch QWERTY", "US QWERTY", "Why It Matters"],
      rows: [
        ["Accented vowels", "Dead key system — ' + vowel = é, ` + vowel = è, \" + vowel = ë", "No dead keys by default", "Dutch uses ë, é, è, ï, ö, ü in words like zëgen, één, café, naïef"],
        ["IJ digraph", "Typed as two separate keys — I + J", "Not applicable", "The Dutch IJ (as in IJssel, IJsland, rijden) is treated as a near-letter — critical in word-initial position: IJsland NOT ijsland"],
        ["@ symbol", "AltGr + Q on Dutch keyboard", "Shift + 2", "Affects anyone switching between Dutch and US keyboard layouts"],
        ["Euro sign €", "AltGr + 5", "Not a standard key", "Frequent in business documents"],
      ],
    },
    {
      type: "callout",
      icon: "⚠️",
      title: "The IJ capitalization rule",
      text: "This is the biggest trap for learners and non-native typists: when ij starts a sentence or proper noun, both letters are capitalized — IJsland, IJssel, IJmuiden. Typing Ijsland with only a capital I is a spelling error that our test counts correctly.",
    },
    { type: "heading", text: "Dutch Compound Words — The Speed Challenge Nobody Talks About", id: "compound-words" },
    {
      type: "paragraph",
      text: "Dutch has one of the most productive compound word systems of any European language. Words like kindercarnavalsoptochtvoorbereidingswerkzaamheden (preparations for children's carnival parade — a real Dutch word) are extreme examples, but everyday Dutch text is full of long compound nouns that slow down typists from other languages significantly.",
    },
    {
      type: "list",
      items: [
        "werkzaamheden (work activities) — 14 characters",
        "verantwoordelijkheid (responsibility) — 20 characters",
        "gemeentesecretaris (municipal secretary) — 19 characters",
        "gegevensinvoer (data entry) — 14 characters",
        "beleidsmedewerker (policy officer) — 18 characters",
        "klantenservice (customer service) — 14 characters",
      ],
    },
    {
      type: "paragraph",
      text: "These aren't exceptions — they're the vocabulary of Dutch office life. Our test passages use authentic Dutch professional text, including compound words, so your APM score reflects real-world typing conditions, not just short easy words.",
    },
    { type: "heading", text: "Dutch Typing Speed Benchmarks — Wat Is Een Goede Typesnelheid?", id: "benchmarks" },
    {
      type: "table",
      headers: ["APM (aanslagen/min)", "WPM (approx.)", "Level", "Niveau", "Real-World Standard"],
      rows: [
        ["Below 100", "<20", "Beginner", "Beginner", "Eerste kennismaking — hunt-and-peck"],
        ["100–175", "20–35", "Basic", "Basis", "Casual gebruik — e-mail, WhatsApp"],
        ["175–250", "35–50", "Average", "Gemiddeld", "Typical Dutch adult — Typetuin gemiddelde"],
        ["250–350", "50–70", "Good", "Goed", "Kantoorstandaard — administratief medewerker minimum"],
        ["350–450", "70–90", "Professional", "Professioneel", "Secretaresse, typiste, juridisch medewerker"],
        ["450–550", "90–110", "Fast", "Snel", "Senior data-entry, medisch secretaresse"],
        ["550+", "110+", "Elite", "Elite", "Schoevers topniveau, stenograaf"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Schoevers benchmark",
      text: "Schoevers — the Netherlands' most respected secretarial and administrative training institute — sets a minimum of 150 APM (30 WPM) as the entry certification target for its typevaardigheid course, with the practical exam aimed at professional office competency. An experienced typiste is expected to reach 350 APM (70 WPM) error-free on professional Dutch text.",
    },
    { type: "heading", text: "Dutch Typing Speed for Jobs — Vereiste Typesnelheid Per Functie", id: "job-requirements" },
    {
      type: "table",
      headers: ["Role / Functie", "Min. APM", "Min. WPM", "Notes"],
      rows: [
        ["Administratief medewerker", "200–250 APM", "40–50 WPM", "Standard NL/BE requirement — widely tested"],
        ["Secretaresse / Secretary", "250–350 APM", "50–70 WPM", "Blind typen (touch typing) often required"],
        ["Gegevensinvoer / Data entry", "300–400 APM", "60–80 WPM", "95%+ nauwkeurigheid required"],
        ["Juridisch medewerker / Legal assistant", "300–400 APM", "60–80 WPM", "Formal Dutch, zero tolerance for errors"],
        ["Medisch secretaresse / Medical secretary", "350–450 APM", "70–90 WPM", "Medical terminology + speed both critical"],
        ["Journalist / Redacteur", "300–400 APM", "60–80 WPM", "NRC, de Volkskrant, Telegraaf, Nu.nl"],
        ["Vertaler / Translator", "250–350 APM", "50–70 WPM", "Dutch ↔ English, Dutch ↔ French, Dutch ↔ German"],
        ["Klantenservice / Customer service", "200–250 APM", "40–50 WPM", "Real-time Dutch chat support"],
        ["Notuliste / Minutes taker", "300–400 APM", "60–80 WPM", "Real-time meeting transcription in Dutch"],
      ],
    },
    {
      type: "paragraph",
      text: "Job listings on Jobbird.com and Indeed.nl confirm that typetest met aanslagen per minuut is a standard part of the hiring process for secretarial and administrative roles across the Netherlands. Jobbird notes that candidates for typiste roles \"kunnen een typetest doen waarmee je laat zien hoeveel aanslagen per minuut je haalt\" — making it clear this is actively tested, not just listed as a preference.",
    },
    { type: "heading", text: "Blind Typen — The Dutch Standard for Professional Typing", id: "blind-typen" },
    {
      type: "paragraph",
      text: "In the Netherlands, the professional benchmark for serious typists is blind typen met tien vingers — ten-finger touch typing without looking at the keyboard. It's taught at MBO Secretaresse niveau 4 courses, offered by institutions like Schoevers and Typetuin, and listed as a requirement or strong preference in many Dutch administrative job descriptions.",
    },
    {
      type: "paragraph",
      text: "The home row on Dutch QWERTY is identical to English: left hand on A-S-D-F, right hand on J-K-L-;. Every key has an assigned finger and every stroke returns to the home row. Typists who learn blind typen properly from a structured course report significantly higher APM than self-taught typists — Dutch Wikipedia's typesnelheid article confirms that self-taught multi-finger typists cap around 180 APM, while trained ten-finger touch typists regularly surpass 200–350 APM in daily work.",
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "💼 Dutch job applicants in the Netherlands and Belgium targeting administratief medewerker, secretaresse, gegevensinvoer, and juridisch medewerker roles where a typetest met APM is actively part of the hiring process",
        "🎓 MBO Secretaresse students and Schoevers course participants benchmarking their typevaardigheid progress toward certification",
        "🇧🇪 Flemish professionals in Belgium — Dutch is one of three official Belgian languages and the dominant language of Flanders' thriving economy and public sector",
        "🌍 Suriname, Aruba, and Curaçao — Dutch is the official language and administrative standard across all three territories; professional typing competency matters throughout the Dutch Caribbean",
        "✍️ Translators and EU professionals — Dutch is an official EU language; fast Dutch typing is essential for Brussels-based EU institution roles",
        "🎓 Dutch language learners benchmarking keyboard fluency alongside vocabulary — from basic Dutch QWERTY familiarity through professional APM targets",
        "🌐 Dutch diaspora in Germany, Belgium, the US, and Australia who type Dutch regularly for work and family communication",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Dutch typing speed?",
          answer:
            "250–350 APM (50–70 WPM) meets the office standard and is the administratief medewerker minimum. 350+ APM (70+ WPM) is professional-typiste level, and 550+ APM (110+ WPM) is Schoevers top-level or stenographer territory.",
        },
        {
          question: "What's the difference between APM and WPM?",
          answer:
            "APM (aanslagen per minuut) counts every keystroke including spaces — the standard metric Dutch and Belgian employers actually use. WPM counts every 5 characters as one word, the international standard. The conversion is direct: 250 APM = 50 WPM.",
        },
        {
          question: "Why is the IJ digraph capitalized specially in Dutch?",
          answer:
            "When ij starts a sentence or proper noun, both letters are capitalized together — IJsland, IJssel, IJmuiden — not just the first letter. Typing \"Ijsland\" with only a capital I is a real spelling error, and this test counts it correctly.",
        },
        {
          question: "Why does Dutch typing speed feel slower than English?",
          answer: "Dutch has one of the most productive compound-word systems in Europe — words like gegevensinvoer or verantwoordelijkheid are common in everyday professional text, and their length naturally slows typing speed compared to shorter English equivalents.",
        },
        {
          question: "Is this Dutch typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "Kies hierboven je testduur — 30 seconden, 1 minuut, 5 minuten — en begin met typen. Je WPM, aanslagen per minuut (APM) en nauwkeurigheid verschijnen direct na afloop van de test. Pick your duration, start typing, and get your APM + WPM result in seconds.",
    },
  ],
};

export default content;
