import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Finnish Typing Test — Suomenkielinen Pikakirjoitustesti (WPM)",
  seoDescription:
    "Free Finnish typing test — measure your real WPM typing suomi with ä and ö. Practice for office jobs, exams, and everyday keyboard fluency. No signup.",
  researchedKeywords: [
    "finnish typing test",
    "suomenkielinen kirjoitustesti",
    "pikakirjoitustesti suomi",
    "wpm testi suomeksi",
    "kirjoitusnopeustesti",
    "finnish keyboard ä ö",
    "typing speed test finland",
    "näppäimistötesti",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Finnish is spoken natively by roughly 5 million people, the overwhelming majority in Finland, where it holds official status alongside Swedish, plus smaller communities in Sweden, Norway, Estonia, and among Finnish-American and Finnish-Canadian diaspora populations. As a Uralic language unrelated to its Nordic neighbors, Finnish has a famously regular, phonetic spelling system — what you hear is almost always what you type.",
        "There's no single nationwide typing exam in Finland, but keyboard speed still matters in very concrete ways: Finland's public sector and private employers routinely screen administrative, customer-service, and data-entry candidates on typing proficiency, and the country's high rate of digital public services (from Kela benefits to tax filing via Vero) means comfortable, accurate typing is close to a baseline life skill. Finnish's long compound words and agglutinative grammar — where a single word can carry what would be a whole phrase in English — also make raw typing endurance more valuable than in shorter-word languages.",
        "This test measures your Finnish typing speed the way it actually gets used day to day: real sentences, live WPM, and an accuracy score you can trust.",
      ],
    },
    { type: "heading", text: "How Finnish Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "Finnish typing speed is measured in WPM (words per minute), the same standard used internationally, where every five typed characters — including spaces — counts as one word. Because Finnish words tend to run longer than English ones due to case endings and compounding, a given WPM figure in Finnish often reflects more total keystrokes than the same WPM in English, so don't be discouraged if your Finnish score looks lower at first.",
    },
    { type: "heading", text: "Keyboard Layout and Special Characters", id: "keyboard" },
    {
      type: "paragraph",
      text: "Finland uses the Finnish-Swedish keyboard layout, a QWERTY variant shared with Sweden. Its defining feature is three extra vowel keys — ä, ö, and å — placed to the right of L, along with an ISO layout that shifts several punctuation keys compared to the US layout.",
    },
    {
      type: "table",
      headers: ["Character", "How to Type It"],
      rows: [
        ["ä / Ä", "Dedicated key on the Finnish layout, right of L"],
        ["ö / Ö", "Dedicated key on the Finnish layout, right of ä"],
        ["å / Å", "Dedicated key on the Finnish layout, right of P"],
        ["ä/ö on a non-Finnish keyboard (Windows)", "Alt + 132 (ä) / Alt + 148 (ö), or switch to the Finnish input language"],
        ["ä/ö on Mac (US layout)", "Hold Option and press U, release, then press A for ä or O for ö"],
      ],
    },
    {
      type: "table",
      headers: ["Task", "Windows", "Mac"],
      rows: [
        ["Add Finnish keyboard", "Settings → Time & Language → Language & region → Add a language → Suomi → Add keyboard", "System Settings → Keyboard → Input Sources → Edit → + → Finnish"],
        ["Switch input language quickly", "Win + Space", "Control + Space"],
      ],
    },
    { type: "heading", text: "Finnish Typing Speed Benchmarks (WPM)", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "Level", "Real-World Context"],
      rows: [
        ["Below 20 WPM", "Beginner", "Still adjusting to the ä, ö, å keys and long compound words"],
        ["20–35 WPM", "Below Average", "Usable but slower than most office-role expectations"],
        ["35–45 WPM", "Average", "Typical for an untrained adult typist"],
        ["45–60 WPM", "Good", "Comfortable for administrative and customer-service work"],
        ["60–75 WPM", "Professional", "Fast enough for transcription, journalism, and heavy data entry"],
        ["75+ WPM", "Expert", "Top-tier speed, rare even among trained professional typists"],
      ],
    },
    { type: "heading", text: "Real Jobs Where Finnish Typing Speed Matters", id: "requirements" },
    {
      type: "table",
      headers: ["Country", "Role or Exam", "Typical Requirement"],
      rows: [
        ["Finland", "Government and municipal clerical roles (kunta, valtio)", "Typing accuracy and speed commonly assessed during hiring, no fixed national number"],
        ["Finland", "Customer service and call-center roles", "Employers frequently list a comfortable WPM range in job postings"],
        ["Finland", "Data entry and administrative assistant positions", "Fast, accurate Finnish typing is a routine screening criterion"],
        ["Finland", "Court and medical transcription", "High accuracy on long compound terminology is prioritized over raw speed"],
      ],
    },
    { type: "heading", text: "Finnish Around the World", id: "diaspora" },
    {
      type: "table",
      headers: ["Country / Region", "Context"],
      rows: [
        ["Finland", "Home to nearly all native Finnish speakers; co-official with Swedish"],
        ["Sweden", "Historic Finnish-speaking minority, particularly in northern regions and Stockholm"],
        ["Estonia", "Close linguistic relative; growing cross-border business and tourism ties"],
        ["United States & Canada", "Descendants of 19th–20th century Finnish emigrant communities, especially in the Upper Midwest"],
      ],
    },
    {
      type: "paragraph",
      text: "Finnish has a rich literary and oral tradition anchored by the Kalevala, the national epic compiled from oral folk poetry by Elias Lönnrot in the 19th century, and later by internationally translated authors like Tove Jansson and Sofi Oksanen — a strong pool of authentic source text for anyone practicing the language's long words and vowel-heavy rhythm.",
    },
    { type: "heading", text: "Who Is This Test Built For", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏢 Job seekers preparing for administrative and customer-service roles in Finland",
        "💻 Data-entry and office professionals typing suomi daily",
        "🎓 Students and language learners building fluency with ä, ö, å placement",
        "🌍 Finnish-diaspora heritage speakers reconnecting with the written language",
        "📝 Writers and translators working in Finnish on deadline",
        "⌨️ Anyone switching from a US or UK keyboard who wants to master the Finnish layout",
        "🧑‍🎓 Immigrants and new residents practicing Finnish for daily digital life",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Finnish typing speed?",
          answer:
            "45–60 WPM is comfortable for most office and customer-service work in Finland, while 60+ WPM is considered professional-level, especially given how much longer Finnish words tend to run compared to English.",
        },
        {
          question: "How do I type ä, ö, and å without a Finnish keyboard?",
          answer:
            "On Windows, use Alt + 132 for ä or Alt + 148 for ö, or add the Finnish keyboard in language settings. On Mac, hold Option and press U, release, then press A or O for the umlauted vowels.",
        },
        {
          question: "Why does my Finnish WPM look lower than my English WPM?",
          answer:
            "Finnish words are typically longer due to case endings and compounding, so the same typing effort produces a lower word count than in English, even at equal keystroke speed.",
        },
        {
          question: "How is WPM calculated on this test?",
          answer:
            "Every five typed characters, including spaces and punctuation, counts as one word. Net WPM subtracts a penalty for uncorrected errors, reflecting real usable output.",
        },
        {
          question: "Is this typing test free?",
          answer: "Yes — completely free, no signup, no download, and unlimited attempts.",
        },
      ],
    },
    {
      type: "cta",
      text: "Valitse testin pituus, aloita kirjoittaminen ja näe WPM-nopeutesi ja tarkkuutesi heti.",
    },
  ],
};

export default content;
