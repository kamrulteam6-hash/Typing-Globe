import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Portuguese Typing Speed Test — Teste de Velocidade de Digitação",
  seoDescription:
    "Free Portuguese typing speed test — teste de digitação em português. ABNT2 (Brazil) & PT-PT (Portugal) layouts. Check your PPM, CPM & accuracy. No signup.",
  researchedKeywords: [
    "portuguese typing test",
    "teste de digitação",
    "teste de velocidade de digitação",
    "velocidade de digitação",
    "abnt2 keyboard typing test",
    "pt-br typing speed test",
    "pt-pt typing test online",
    "palavras por minuto teste",
    "teste de digitação para concurso",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Over 260 million people speak Portuguese as a first language — making it the 6th most spoken language on the planet. From São Paulo to Lisbon, Luanda to Maputo, typing fast and accurately in Portuguese is a core professional skill — for government jobs, administrative roles, content writing, customer support, and everything in between.",
        "Our free Portuguese typing speed test (teste de digitação em português) measures your real WPM, accuracy, and CPM in under a minute. No signup. No ads. Just type and see your result.",
        "Teste agora sua velocidade de digitação em português — escolha seu layout, configure o tempo, e comece a digitar. Seu resultado em PPM (Palavras Por Minuto) e precisão aparecem na hora.",
      ],
    },
    { type: "heading", text: "What We Measure — O Que Seu Resultado Mostra", id: "what-we-measure" },
    {
      type: "paragraph",
      text: "Every time you finish a test on Typing Globe, you get four numbers that actually matter:",
    },
    {
      type: "table",
      headers: ["Metric", "Portuguese Term", "What It Means"],
      rows: [
        ["WPM / PPM", "Palavras Por Minuto", "Words per minute — the universal professional standard"],
        ["CPM", "Caracteres Por Minuto", "Characters per minute — raw keystroke speed"],
        ["Net WPM", "PPM líquido", "Real speed after error deductions — what employers count"],
        ["Accuracy %", "Precisão", "Your correctness rate under timed pressure"],
      ],
    },
    {
      type: "paragraph",
      text: "The formula is the same standard used worldwide:",
    },
    {
      type: "callout",
      icon: "🧮",
      title: "Fórmula PPM",
      text: "PPM líquido = (Total de caracteres ÷ 5 ÷ minutos) − erros",
    },
    {
      type: "paragraph",
      text: "This is how job applications, concursos públicos, and employer typing tests calculate your score — so what you see here is exactly what you'd score in a real exam.",
    },
    { type: "heading", text: "PT-BR vs PT-PT — Two Keyboards, One Language", id: "pt-br-vs-pt-pt" },
    {
      type: "paragraph",
      text: "This is the first thing you need to get right. Brazilian Portuguese and European Portuguese don't just sound different — they use different keyboard layouts, and practicing on the wrong one will hurt your score when it actually counts.",
    },
    {
      type: "table",
      headers: ["Feature", "Brazilian (PT-BR)", "European (PT-PT)"],
      rows: [
        ["Standard Layout", "ABNT2 (Brazilian standard)", "Portuguese (Portugal) ISO layout"],
        ["Ç key", "Dedicated key — right of L", "Dedicated key — different position"],
        ["Tilde (~) for ã, õ", "Dedicated dead key", "Dead key via ´ combinations"],
        ["Accent entry", "Dead keys: ´ → vowel = á / ~ → a = ã", "Similar dead key system, different positions"],
        ["Enter key shape", "Tall vertical Enter (ISO)", "Tall vertical Enter (ISO)"],
        ["Number symbols", "Some symbols shift with AltGr", "Different AltGr mappings"],
        ["Used in", "Brazil 🇧🇷, also common in Portuguese-speaking Africa", "Portugal 🇵🇹, Azores, Madeira"],
      ],
    },
    {
      type: "paragraph",
      text: "Which layout do you need?",
    },
    {
      type: "list",
      items: [
        "Targeting a job or concurso in Brazil? → Use ABNT2",
        "Targeting work in Portugal, EU institutions, or Portuguese public administration? → Use PT-PT",
        "Learning Portuguese as a second language? → Start with ABNT2 — it has more dedicated accent keys and is more intuitive for beginners",
      ],
    },
    {
      type: "callout",
      icon: "💡",
      title: "ABNT2 quick tip",
      text: "The cedilla (ç) has its own dedicated key to the right of L. The tilde has a dedicated dead key — press ~ then a to get ã, press ~ then o to get õ. Master these two and you'll handle 90% of Portuguese accented text effortlessly.",
    },
    { type: "heading", text: "Portuguese Typing Speed Benchmarks — Quantas Palavras Por Minuto é Bom?", id: "benchmarks" },
    {
      type: "paragraph",
      text: "Here's how your PPM / WPM score stacks up against real-world standards in Brazil and Portugal:",
    },
    {
      type: "table",
      headers: ["WPM / PPM", "Level", "Nível", "Real-World Meaning"],
      rows: [
        ["Below 20", "Beginner", "Iniciante", "Hunt-and-peck, just starting"],
        ["20–35", "Basic", "Básico", "Casual use, slow for office work"],
        ["35–50", "Average", "Médio", "Typical adult typist in PT/BR — 40 WPM is the global baseline"],
        ["50–65", "Good", "Bom", "Comfortable for most administrative roles"],
        ["65–80", "Fast", "Rápido", "Professional standard — editors, journalists, translators"],
        ["80+", "Expert", "Expert", "Top-tier — concurso prep, transcription, executive assistants"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Data point",
      text: "According to typing platform data from over 100,000 Portuguese sessions, the average Brazilian typist scores around 40–52 WPM. Professional datilógrafos (typists) and administrative professionals typically hit 65–75 WPM.",
    },
    { type: "heading", text: "Portuguese Typing Requirements by Job — Velocidade Exigida Por Cargo", id: "job-requirements" },
    {
      type: "paragraph",
      text: "Whether you're in Brazil targeting a concurso público or in Portugal applying for an Assistente Administrativo role — here's what the market actually requires:",
    },
    {
      type: "table",
      headers: ["Role", "Min. WPM", "Country", "Notes"],
      rows: [
        ["Concurso público — Digitador / Técnico", "40–60 WPM", "🇧🇷 Brazil", "Official exam; test duration 5–10 min"],
        ["Assistente Administrativo", "50–60 WPM", "🇵🇹 Portugal", "\"elevada velocidade de digitação\" listed in job ads"],
        ["Data entry / Entrada de dados", "60–80 WPM", "Both", "High accuracy (95%+) required alongside speed"],
        ["Secretária / Secretary", "55–70 WPM", "Both", "Accuracy critical; formal documents"],
        ["Jornalista / Content writer", "60–70 WPM", "Both", "Volume output depends on WPM"],
        ["Tradutor / Translator", "55–70 WPM", "Both", "Precision over raw speed"],
        ["Suporte ao cliente / Customer service", "40–55 WPM", "Both", "Real-time chat; response time matters"],
        ["Transcrição / Transcriptionist", "75–90 WPM", "Both", "Near-perfect accuracy, audio-to-text"],
      ],
    },
    {
      type: "paragraph",
      text: "In Portugal, job ads frequently specify \"velocidade de digitação mínima de X PPM\" (minimum typing speed of X PPM) for secretarial and administrative roles. In Brazil, concurso público exams for cargo de Digitador commonly set minimums between 40–60 WPM with strict accuracy requirements.",
    },
    { type: "heading", text: "The Real Challenge — Portuguese Diacritics at Speed", id: "diacritics" },
    {
      type: "paragraph",
      text: "Portuguese has one of the richest accent systems of any Latin-alphabet language. Our test passages include all of them — because skipping an accent is an error, just like it would be in a real exam or professional document.",
    },
    {
      type: "table",
      headers: ["Character", "Name", "Examples", "Dead Key (ABNT2)"],
      rows: [
        ["á, é, í, ó, ú", "Acento agudo", "está, pé, país, avó", "´ → vowel"],
        ["â, ê, ô", "Acento circunflexo", "você, mês, avô, ônibus", "^ → vowel"],
        ["ã, õ", "Til (nasal vowel)", "irmã, mão, não, pão, leões", "~ → vowel"],
        ["à", "Acento grave", "à (contraction only)", "` → a"],
        ["ç", "Cedilha", "você, praça, façanha", "Dedicated key"],
      ],
    },
    {
      type: "callout",
      icon: "⚠️",
      title: "Critical insight",
      text: "The words avó (grandmother) and avô (grandfather) differ only by accent. Você and its informal contraction forms change meaning with accent omission. In Portuguese, accents aren't optional decoration — they change words entirely. Our test counts every missing accent as a full error.",
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "📋 Concurseiros — preparing for Brazilian concursos públicos that include digitação tests",
        "🏢 Administrative professionals in Brazil and Portugal — Assistente Administrativo, Secretária, Técnico de Dados",
        "🌍 Lusophone Africa — Angola 🇦🇴, Mozambique 🇲🇿, Cape Verde 🇨🇻, São Tomé, Guinea-Bissau — Portuguese is the official language and professional standard",
        "✍️ Journalists and content writers working in Brazilian or European Portuguese media",
        "🎓 Portuguese language learners — benchmark your keyboard fluency alongside your language skills",
        "🌐 Bilingual professionals — typing in both Portuguese and English for international companies in Brazil's tech and finance sector",
        "🇵🇹 EU professionals — Portuguese is an official EU language; fast PT-PT typing is valuable for EU institutions and diplomatic roles",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "How many words per minute is good in Portuguese?",
          answer:
            "35–50 WPM is the average adult typist range in Brazil and Portugal. 50–65 WPM is comfortable for most administrative roles, and 65+ WPM is the professional standard for editors, journalists, and translators.",
        },
        {
          question: "Should I learn ABNT2 or PT-PT?",
          answer:
            "Use ABNT2 if you're targeting a job or concurso in Brazil, or if you're learning Portuguese as a second language — it has more dedicated accent keys and is more beginner-friendly. Use PT-PT if you're targeting work in Portugal, EU institutions, or Portuguese public administration.",
        },
        {
          question: "Do missing accents count as errors?",
          answer:
            "Yes — this test counts every missing or incorrect accent as a full error, the same way a real concurso público or professional typing evaluation would. Words like avó and avô, or você and its contracted forms, change meaning entirely based on accents.",
        },
        {
          question: "How is PPM (Net WPM) calculated?",
          answer: "PPM líquido = (Total de caracteres ÷ 5 ÷ minutos) − erros — the same standard formula used worldwide for job applications, concursos públicos, and employer typing tests.",
        },
        {
          question: "Is this Portuguese typing test free?",
          answer: "Yes — completely free, no signup, no ads, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "Escolha seu layout acima — ABNT2 (Brasil) ou PT-PT (Portugal) — configure o cronômetro e comece a digitar. Seu PPM, CPM e precisão aparecem imediatamente após o teste. Pick your layout, set your timer, and start — your PPM result is ready in seconds.",
    },
  ],
};

export default content;
