import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Romanian Typing Test — Test de Viteză la Tastatură (WPM)",
  seoDescription:
    "Free Romanian typing test — measure your real WPM typing ă, â, î, ș, ț correctly. Practice for office jobs and admissions exams across Romania and Moldova.",
  researchedKeywords: [
    "romanian typing test",
    "test de viteza la tastatura",
    "test dactilografie romana",
    "viteza de scriere la tastatura",
    "tastatura romaneasca diacritice",
    "wpm test romana",
    "cate cuvinte pe minut",
    "exercitii dactilografie online",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Romanian is spoken natively by roughly 24-26 million people, the vast majority in Romania and neighboring Moldova, where it is the official language (referred to there historically as Moldovan). Sizeable Romanian-speaking communities also exist in Italy, Spain, Germany, and the UK, home to some of Europe's largest Romanian diaspora populations built up over two decades of labor migration.",
        "There is no single nationwide typing exam in Romania the way some countries run civil-service dictation tests, but keyboard speed still matters in concrete ways: administrative and secretarial job listings (secretară, referent, operator introducere date) routinely name a WPM or CPM figure, call-center and BPO employers hiring for Romanian-language support screen candidates on typing tests, and university and high-school computer-science curricula still include typing/keyboarding as a practical skill. For the large outsourcing and shared-services sector concentrated in Bucharest, Cluj-Napoca, and Iași, fast, accurate Romanian typing is a genuine hiring differentiator.",
        "This test measures your typing the same way those employers do — live WPM and accuracy on real Romanian sentences, diacritics included.",
      ],
    },
    { type: "heading", text: "How Romanian Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "Romanian typing speed is measured in WPM (cuvinte pe minut), following the same five-characters-equals-one-word convention used internationally, alongside CPM (caractere pe minut) in some older dactilografie (typewriting) course materials. Because Romanian words routinely carry diacritical marks that must be typed correctly to count, accuracy on ă, â, î, ș, and ț has a direct, outsized effect on your net score.",
    },
    { type: "heading", text: "Keyboard Layout and Special Characters", id: "keyboard" },
    {
      type: "paragraph",
      text: "Modern Romanian uses the \"Romanian (Standard)\" layout, which places ă, â, î, ș, and ț as dedicated keys or Alt Gr combinations rather than dead-key accents. An older \"Romanian (Legacy)\" layout exists too, remapping some punctuation keys differently, which occasionally causes confusion for typists switching between the two.",
    },
    {
      type: "table",
      headers: ["Character", "How to Type It"],
      rows: [
        ["ă / Ă", "Dedicated key on the Romanian Standard layout (Alt Gr + Q on many configurations)"],
        ["â / Â", "Alt Gr + X on the Romanian Standard layout"],
        ["î / Î", "Alt Gr + I on the Romanian Standard layout"],
        ["ș / Ș", "Alt Gr + comma-adjacent key, or Alt Gr + S depending on layout version"],
        ["ț / Ț", "Alt Gr + T on the Romanian Standard layout"],
        ["Diacritics on a non-Romanian keyboard (Windows)", "Add the Romanian (Standard) input language, or use Alt-code numeric entry"],
        ["Diacritics on Mac", "System Settings → Keyboard → Input Sources → add Romanian, then use the Alt Gr equivalent (Option key)"],
      ],
    },
    {
      type: "table",
      headers: ["Task", "Windows", "Mac"],
      rows: [
        ["Add Romanian keyboard", "Settings → Time & Language → Language & region → Add a language → Română → Add keyboard (choose Standard)", "System Settings → Keyboard → Input Sources → Edit → + → Romanian"],
        ["Switch input language quickly", "Win + Space", "Control + Space"],
      ],
    },
    { type: "heading", text: "Romanian Typing Speed Benchmarks (WPM)", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "Level", "Real-World Context"],
      rows: [
        ["Below 20 WPM", "Beginner", "Still hunting for keys, including the diacritic combinations"],
        ["20–35 WPM", "Below Average", "Workable but slower than most administrative job screens"],
        ["35–45 WPM", "Average", "Typical for an untrained adult typist"],
        ["45–60 WPM", "Good", "Meets most secretariat and data-entry job postings"],
        ["60–75 WPM", "Professional", "Competitive for call-center, BPO, and shared-services roles"],
        ["75+ WPM", "Expert", "Fast, accurate typing suitable for transcription and high-volume data entry"],
      ],
    },
    { type: "heading", text: "Real Jobs That Value Romanian Typing Speed", id: "requirements" },
    {
      type: "table",
      headers: ["Country", "Role or Exam", "Typical Requirement"],
      rows: [
        ["Romania", "Secretară / Referent / Operator introducere date postings", "Job ads frequently specify 200+ characters/minute or a comparable WPM figure"],
        ["Romania", "BPO and shared-services centers (Bucharest, Cluj-Napoca, Iași)", "Typing assessments are a standard part of hiring for Romanian-language support roles"],
        ["Moldova", "Public administration and clerical roles", "Fast, accurate Romanian/Moldovan typing is valued for document processing"],
        ["Diaspora (Italy, Spain, Germany)", "Bilingual customer-service and translation work", "Romanian typing speed matters for remote and hybrid support roles serving Romanian clients"],
      ],
    },
    { type: "heading", text: "Romanian Around the World", id: "diaspora" },
    {
      type: "table",
      headers: ["Country / Region", "Context"],
      rows: [
        ["Romania", "Home to the large majority of native speakers and the country's growing outsourcing sector"],
        ["Moldova", "Official language of the country, historically also called Moldovan"],
        ["Italy", "One of the largest Romanian diaspora communities in Europe"],
        ["Spain, Germany, UK", "Substantial Romanian-speaking communities built through decades of labor migration"],
      ],
    },
    {
      type: "paragraph",
      text: "Romanian literature carries a distinct voice in European letters, from the poetry of Mihai Eminescu, still central to Romanian schooling, to the absurdist plays of Eugène Ionesco, who wrote in both Romanian and French. Typing accurate Romanian text means reproducing exactly the diacritics that give words like ș and ț their meaning — a small but genuine test of precision.",
    },
    { type: "heading", text: "Who Is This Test Built For", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏢 Administrative and secretarial job applicants across Romania and Moldova",
        "📞 Call-center and BPO candidates typing Romanian-language support tickets",
        "🎓 Students learning to place ă, â, î, ș, and ț accurately",
        "💻 Data-entry and back-office staff processing Romanian documents",
        "🌍 Diaspora Romanians in Italy, Spain, or Germany keeping their written Romanian sharp",
        "✍️ Writers and translators working with Romanian text daily",
        "⌨️ Anyone switching between the Standard and Legacy Romanian keyboard layouts",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Romanian typing speed?",
          answer:
            "45–60 WPM covers most administrative and data-entry job postings in Romania. 60–75 WPM is competitive for call-center and BPO roles, and 75+ WPM is considered expert-level.",
        },
        {
          question: "How do I type ă, â, î, ș, and ț without a Romanian keyboard?",
          answer:
            "Add the Romanian (Standard) input language in your operating system's keyboard settings — it maps all five diacritics to Alt Gr key combinations. Windows also supports Alt numeric codes as a fallback.",
        },
        {
          question: "What's the difference between the Standard and Legacy Romanian keyboard layouts?",
          answer:
            "Romanian (Standard) follows the modern SR 13392 layout with diacritics on Alt Gr combinations. Romanian (Legacy) is an older layout with some punctuation keys in different positions — most new installations default to Standard.",
        },
        {
          question: "How is WPM calculated on this test?",
          answer:
            "Every five typed characters, including spaces and punctuation, counts as one word. Net WPM subtracts a penalty for uncorrected errors, including missed or wrong diacritics.",
        },
        {
          question: "Is this typing test free?",
          answer: "Yes — completely free, no signup, no download, and you can retake it as many times as you like.",
        },
      ],
    },
    {
      type: "cta",
      text: "Alege durata testului, începe să scrii, și vezi-ți viteza WPM și acuratețea în timp real.",
    },
  ],
};

export default content;
