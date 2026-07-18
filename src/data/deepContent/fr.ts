import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "French Typing Speed Test — Test de Vitesse de Frappe en Français",
  seoDescription:
    "Free French typing speed test — test de dactylographie français. AZERTY, QWERTY & BÉPO layouts. Check your MPM (WPM) and accuracy instantly. No signup.",
  researchedKeywords: [
    "french typing test",
    "test de vitesse de frappe en français",
    "test de dactylographie français",
    "azerty typing test",
    "bépo typing test",
    "mpm mots par minute",
    "french typing test online free",
    "qwerty vs azerty",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "French is spoken by over 300 million people across 29 countries — from Paris and Lyon to Montreal, Dakar, Brussels, and Geneva. And whether you're a native Francophone, a language learner, or a professional who needs to type in French at work, your MPM (Mots Par Minute) score tells you exactly where your fingers stand.",
        "Take our free French typing speed test (test de dactylographie français) right now. No signup needed. Just pick your layout, hit start, and get your real typing speed in under a minute.",
        "Testez votre vitesse de frappe en français dès maintenant — choisissez votre disposition de clavier, lancez le chrono, et obtenez votre MPM en quelques secondes.",
      ],
    },
    { type: "heading", text: "What We Measure — Ce Que Nous Mesurons", id: "what-we-measure" },
    {
      type: "paragraph",
      text: "Every French typing test on Typing Globe gives you four live metrics:",
    },
    {
      type: "table",
      headers: ["Metric", "French Term", "What It Means"],
      rows: [
        ["WPM / MPM", "Mots Par Minute", "Words per minute — the global standard score"],
        ["CPM", "Caractères Par Minute", "Characters per minute — used in many French professional tests"],
        ["Net WPM", "MPM net", "Real speed after error deduction — what exams actually count"],
        ["Accuracy %", "Précision", "Your correctness rate under time pressure"],
      ],
    },
    {
      type: "paragraph",
      text: "The formula is standard across all languages:",
    },
    {
      type: "callout",
      icon: "🧮",
      title: "Formule MPM",
      text: "MPM net = (Total caractères ÷ 5 ÷ Minutes) − Erreurs",
    },
    {
      type: "paragraph",
      text: "This is the same calculation used by French employers, professional typing certifications, and international institutions — so your score here reflects real-world conditions.",
    },
    { type: "heading", text: "The AZERTY Problem — Why French Typing Is Harder Than You Think", id: "azerty-problem" },
    {
      type: "paragraph",
      text: "Here's something most typing tests don't tell you: a 40 WPM score in French is not the same as 40 WPM in English. According to global typing speed research, French typists often score lower on raw WPM tests not because they're slower — but because the AZERTY layout requires significantly more finger travel for common symbols, accents, and numbers.",
    },
    {
      type: "paragraph",
      text: "The standard French keyboard is AZERTY — named after the first six keys on the top row. It differs from English QWERTY in critical ways:",
    },
    {
      type: "table",
      headers: ["Feature", "AZERTY (French)", "QWERTY (English)"],
      rows: [
        ["A and Q position", "Swapped compared to QWERTY", "Standard"],
        ["W and Z position", "Swapped", "Standard"],
        ["Numbers row", "Requires Shift to type numbers (accents are default)", "Numbers are default"],
        ["Accented characters", "é, è, à, ç, ù have dedicated keys", "Requires shortcuts"],
        ["Capital accents", "Difficult — É, Ç often require workarounds", "Not applicable"],
        ["Ligatures", "œ, æ not accessible on standard AZERTY", "Not applicable"],
      ],
    },
    {
      type: "callout",
      icon: "⚠️",
      title: "A documented layout limitation",
      text: "The French Culture Ministry itself noted that the standard AZERTY layout makes it impossible to type certain correct French characters like É, Ç (capital), œ and æ without workarounds. Many French typists unknowingly skip accents on capital letters as a result.",
    },
    { type: "heading", text: "AZERTY vs QWERTY vs BÉPO — Which Layout Should You Use?", id: "layout-comparison" },
    {
      type: "table",
      headers: ["Layout", "Best For", "Where It's Used"],
      rows: [
        ["AZERTY", "Native French typists, office work in France/Belgium", "France 🇫🇷, Belgium 🇧🇪"],
        ["QWERTY (US-International)", "Bilingual typists, French learners, non-French keyboards", "Global, expats, students"],
        ["BÉPO", "Ergonomic French touch typing, developers", "France (niche, growing)"],
        ["QWERTY-fr", "Bilingual users who need both French accents and English speed", "Cross-language professionals"],
      ],
    },
    {
      type: "paragraph",
      text: "AZERTY is the default for France and Belgium — public computers, schools, and offices all use it. If you're working or studying in a French-speaking country, this is the layout you need.",
    },
    {
      type: "paragraph",
      text: "BÉPO is France's answer to Dvorak — an ergonomic layout optimized for French letter frequency. It puts the most common French letters on the home row and significantly reduces finger movement. It has a steep learning curve (expect a full month to recover your speed), but dedicated users swear by it for comfort in long typing sessions.",
    },
    {
      type: "paragraph",
      text: "QWERTY US-International is the practical choice for French learners and bilingual professionals on non-French keyboards. Using dead keys: type ' then e → é, type ` then a → à, type \" then u → ü.",
    },
    { type: "heading", text: "French Typing Speed Benchmarks — Quelle Est Votre Vitesse?", id: "benchmarks" },
    {
      type: "paragraph",
      text: "Where does your French MPM score actually place you? Here's a realistic breakdown:",
    },
    {
      type: "table",
      headers: ["MPM (Net)", "Level", "Ce Que Ça Signifie"],
      rows: [
        ["Below 20", "Débutant", "Just starting — hunt-and-peck"],
        ["20–35", "Basique", "Slow but functional for casual use"],
        ["35–50", "Moyen", "Average adult Francophone typist"],
        ["50–65", "Bon", "Comfortable professional speed"],
        ["65–80", "Rapide", "Top 15% — secretarial, administrative work"],
        ["80+", "Expert", "Professional dactylographe, top 5%"],
      ],
    },
    {
      type: "callout",
      icon: "💡",
      title: "Key insight",
      text: "Research from the 2026 Global Typing Index shows a 40 MPM score in French represents the same finger dexterity as roughly 45 WPM in English — because AZERTY requires more complex key combinations for everyday French text. Don't compare your French MPM directly to your English WPM; they're not the same effort.",
    },
    { type: "heading", text: "Accents, Cedillas, and Special Characters — La Vraie Difficulté", id: "special-characters" },
    {
      type: "paragraph",
      text: "This is where French typing separates beginners from confident typists. Our test passages include the full range of French special characters so you're practicing what actually matters:",
    },
    {
      type: "list",
      items: [
        "Accents aigus — é (the most common: dans, été, différent)",
        "Accents graves — è, à, ù (très, là, où)",
        "Accents circonflexes — ê, â, î, ô, û (être, château, île)",
        "Tréma — ë, ï, ü (Noël, naïf)",
        "Cédille — ç (français, garçon, leçon)",
        "Ligatures — œ, æ (œil, œuf, cœur, Œdipe)",
        "Guillemets français — « » (instead of \"quotation marks\")",
        "Espace insécable — the narrow non-breaking space before : ; ! ?",
      ],
    },
    {
      type: "paragraph",
      text: "Skipping accents is one of the most common mistakes French typists make at speed. Our test counts every missing accent as an error — just like a real professional or academic evaluation would.",
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🇫🇷 Native French speakers in France and Belgium benchmarking their professional speed",
        "🇨🇦 Québécois typists — Canada uses French extensively in federal government and bilingual roles",
        "🌍 Francophone Africa — DRC, Côte d'Ivoire, Senegal, Cameroon, Morocco — French is a key professional language across the continent",
        "🎓 French language learners practicing keyboard fluency alongside vocabulary",
        "💼 International professionals working with French-speaking clients, EU institutions, or UN bodies",
        "🏛️ EU / diplomatic staff — French remains one of the three working languages of the European Union",
        "✍️ Translators and interpreters who type in French as part of their daily output",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good French typing speed?",
          answer:
            "35–50 MPM (net) is average for a Francophone typist. 50–65 MPM is a comfortable professional speed, and 65+ MPM puts you in the top 15%. Remember that French MPM isn't directly comparable to English WPM, since AZERTY requires more complex key combinations for accents.",
        },
        {
          question: "Should I learn AZERTY, QWERTY, or BÉPO?",
          answer:
            "AZERTY is the default in France and Belgium and what most native speakers should learn. QWERTY (US-International) with dead keys is the practical choice for French learners and bilingual professionals on non-French keyboards. BÉPO is an ergonomic option with a steep learning curve, mostly used by developers and dedicated touch typists.",
        },
        {
          question: "Why does the AZERTY layout make some French characters hard to type?",
          answer:
            "AZERTY places numbers behind the Shift key (accented lowercase letters are the default), and capital accented letters like É and Ç, plus ligatures like œ and æ, often require workarounds — a limitation the French Culture Ministry itself has acknowledged. As a result, many typists skip accents on capitals even in careful writing.",
        },
        {
          question: "Do accents count as errors if I skip them?",
          answer: "Yes — this test counts every missing or incorrect accent as an error, the same way a real professional or academic French typing evaluation would.",
        },
        {
          question: "Is this French typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "Choisissez votre disposition de clavier ci-dessus — AZERTY, QWERTY, ou BÉPO — réglez votre minuterie, et commencez à taper. Votre MPM et votre taux de précision seront prêts en quelques secondes. Pick your layout, set your timer, and start typing — your MPM result is seconds away.",
    },
  ],
};

export default content;
