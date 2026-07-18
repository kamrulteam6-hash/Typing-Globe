import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Czech Typing Test — Test Rychlosti Psaní na Klávesnici (WPM)",
  seoDescription:
    "Free Czech typing test — measure your real WPM typing Čeština, including á, č, ě, ř, š, ů, ž. Practice for office and admin jobs. No signup needed.",
  researchedKeywords: [
    "czech typing test",
    "test rychlosti psaní",
    "psaní na klávesnici test",
    "wpm test čeština",
    "česká klávesnice",
    "test psaní všemi deseti",
    "typing test český jazyk",
    "rychlost psaní online",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Czech (Čeština) is the native language of roughly 10.7 million people, spoken predominantly in the Czech Republic, with additional speaker communities in Slovakia, and diaspora populations in the United States, Austria, Germany, and Canada. It belongs to the West Slavic language family, closely related to Slovak and more distantly to Polish, and is written in the Latin alphabet extended with a distinctive set of diacritics — háček (ˇ) and čárka (´) marks — that give Czech text its recognizable look.",
        "Czech has a notable formal tradition here: touch-typing (psaní všemi deseti, \"typing with all ten fingers\") was historically taught as a graded school and vocational subject, and typing-speed competitions and certifications still exist in Czech secondary and business schools. Beyond that tradition, typing speed matters practically for administrative assistants, court and notary clerks, data-entry staff, and customer-support agents across Czech companies and public offices, where fast, accurate keyboard work is a routine hiring consideration.",
        "This test measures your speed and accuracy on real Czech sentences, diacritics and all, the same way a Czech office or classroom would actually judge it.",
      ],
    },
    { type: "heading", text: "How Czech Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "This test reports speed in WPM (words per minute), the standard international measure where every five typed characters — including spaces and punctuation — counts as one word. Czech touch-typing courses and school competitions traditionally also track čisté slovo za minutu (net words per minute) with error penalties, a close cousin of the net-WPM scoring used here, so the numbers translate naturally for Czech typists familiar with that tradition.",
    },
    { type: "heading", text: "Keyboard Layout and Special Characters", id: "keyboard" },
    {
      type: "paragraph",
      text: "The Czech keyboard layout (Česká klávesnice) is a QWERTZ-based layout, distinct from both US QWERTY and standard German QWERTZ, with numbers requiring the Shift key to type directly and punctuation moved to the number row. All of Czech's diacritic letters have dedicated keys or Shift/AltGr combinations, so fluent Czech typists rarely need dead-key sequences.",
    },
    {
      type: "table",
      headers: ["Character", "How to Type It"],
      rows: [
        ["á, é, í, ý (čárka / acute accent)", "Dedicated keys on the Czech QWERTZ layout, mostly along the top number row"],
        ["č, ě, ř, š, ž (háček / caron)", "Dedicated keys on the Czech layout, mostly along the top number row with Shift"],
        ["ď, ň, ť (soft consonants)", "Available via the Czech layout, often combined with the dead-key caron key"],
        ["ů (kroužek / ring above u)", "Dedicated key on the Czech layout, distinct from ú"],
        ["Any diacritic on a US keyboard (Windows)", "Add the Czech keyboard layout, or use Alt-code / character map input"],
        ["Any diacritic on Mac (US layout)", "Add Czech input source in System Settings, or use Option-key combinations where available"],
      ],
    },
    {
      type: "table",
      headers: ["Task", "Windows", "Mac"],
      rows: [
        ["Add Czech keyboard", "Settings → Time & Language → Language & region → Add a language → Čeština → Add keyboard", "System Settings → Keyboard → Input Sources → Edit → + → Czech"],
        ["Switch input language quickly", "Win + Space", "Control + Space"],
      ],
    },
    { type: "heading", text: "Czech Typing Speed Benchmarks (WPM)", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "Level", "Real-World Context"],
      rows: [
        ["Below 20 WPM", "Beginner", "Still learning finger placement across the QWERTZ layout and diacritic keys"],
        ["20–35 WPM", "Below Average", "Functional, but below most administrative-job expectations"],
        ["35–45 WPM", "Average", "Typical for an adult typing without formal touch-typing training"],
        ["45–60 WPM", "Good", "Meets most office and customer-service typing expectations"],
        ["60–80 WPM", "Professional", "The range associated with trained touch-typists and administrative specialists"],
        ["80+ WPM", "Expert", "Competition-level speed, comparable to top psaní všemi deseti finishers"],
      ],
    },
    { type: "heading", text: "Jobs and Training Where Czech Typing Speed Matters", id: "requirements" },
    {
      type: "table",
      headers: ["Country", "Role or Exam", "Typical Requirement"],
      rows: [
        ["Czech Republic", "Psaní všemi deseti (touch-typing) school courses and competitions", "Graded on speed and accuracy; historically a standard business-school subject"],
        ["Czech Republic", "Administrative assistant, court/notary clerk", "Fast, accurate typing routinely listed as a job requirement"],
        ["Czech Republic", "Data entry and back-office roles", "Speed and low error rate valued in banking, insurance, and public administration"],
        ["Czech Republic", "Customer support / call center", "Typing while handling calls or chat is a core daily task"],
      ],
    },
    { type: "heading", text: "Czech Around the World", id: "diaspora" },
    {
      type: "table",
      headers: ["Country / Region", "Context"],
      rows: [
        ["Czech Republic", "Official language, native to the vast majority of the country's roughly 10.5 million people"],
        ["Slovakia", "Widely understood due to the mutual intelligibility of Czech and Slovak and shared 20th-century history"],
        ["United States", "Historic Czech immigrant communities, notably in Texas and the Midwest"],
        ["Austria & Germany", "Long-standing Czech-speaking communities near the border regions"],
        ["Canada", "Smaller but active Czech diaspora communities and cultural associations"],
      ],
    },
    {
      type: "paragraph",
      text: "Czech literature has a strong international profile, from Franz Kafka (who wrote mostly in German but lived and worked in Prague) to Milan Kundera and Karel Čapek — the writer credited with coining the word \"robot.\" Czech's phonetic spelling and consistent diacritic rules make its written form especially well suited to structured typing practice.",
    },
    { type: "heading", text: "Who Is This Test Built For", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏢 Administrative and office staff across the Czech Republic",
        "⚖️ Court, notary, and legal-clerk staff who type formal documents daily",
        "🎧 Customer-support and call-center agents typing in Czech",
        "🎓 Students practicing psaní všemi deseti and diacritic accuracy",
        "💻 Data-entry and back-office employees at Czech companies",
        "🌍 Czech diaspora in the US, Austria, and Germany keeping their typing fluent",
        "⌨️ Anyone learning the QWERTZ-based Czech keyboard layout",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Czech typing speed?",
          answer:
            "45–60 WPM covers most office and administrative expectations, while 60+ WPM is considered professional, trained touch-typist territory.",
        },
        {
          question: "Do I need the Czech keyboard layout to type diacritics?",
          answer:
            "It helps a lot. The Czech QWERTZ layout puts every diacritic — čárka and háček marks — on a dedicated key. Without it, you can still type diacritics using Alt-codes or a character map, just more slowly.",
        },
        {
          question: "How is WPM calculated on this test?",
          answer:
            "Every five typed characters, including spaces and punctuation, counts as one word. The reported score is net WPM, which deducts a penalty for uncorrected errors.",
        },
        {
          question: "Is touch-typing still taught in Czech schools?",
          answer:
            "Psaní všemi deseti (typing with all ten fingers) has a long tradition as a graded subject in Czech business and vocational schools, and speed competitions in this discipline still take place.",
        },
        {
          question: "Is this typing test free?",
          answer: "Yes — completely free, no signup, no download, and you can retake it as many times as you like.",
        },
      ],
    },
    {
      type: "cta",
      text: "Vyber si délku testu, začni psát, a hned uvidíš svou rychlost i přesnost.",
    },
  ],
};

export default content;
