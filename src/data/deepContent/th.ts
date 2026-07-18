import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Thai Typing Test — Free ไทย Typing Speed & WPM Test",
  seoDescription:
    "Free Thai typing test — measure your real ไทย typing speed instantly. Practice Thai keyboard layout for office jobs and data entry. No signup.",
  researchedKeywords: [
    "thai typing test",
    "แบบทดสอบพิมพ์ดีดไทย",
    "thai typing speed test online",
    "thai wpm test",
    "thai keyboard layout kedmanee",
    "พิมพ์ดีดภาษาไทย",
    "thai typing practice",
    "test พิมพ์ไทยเร็ว",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Thai is spoken natively by around 60 million people, mostly within Thailand, where it is the sole official language and the medium of government, education, media, and daily life. Beyond Thailand's borders, Thai is also spoken by expatriate and immigrant communities across Southeast Asia, the United States, and Australia, and it is closely related to languages spoken in parts of Laos.",
        "There's no single nationally famous typing exam for Thai the way some languages have, but typing speed is still a very practical, everyday skill in Thailand's economy. Administrative assistants, data-entry clerks, government office staff, and customer-service agents across Bangkok and beyond are commonly expected to type Thai quickly and accurately, since Thai script's lack of spaces between words and its stacked tone marks and vowel signs make careless typing especially easy to spot. Content creators, translators, and transcribers producing Thai-language material also rely heavily on comfortable Thai keyboard fluency.",
        "This test measures that fluency directly, timing you on real Thai sentences and reporting your typing speed and accuracy the moment you finish.",
      ],
    },
    { type: "heading", text: "How Thai Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "This test reports Thai typing speed in WPM, using the standard international convention of five characters per 'word.' Because Thai is written without spaces between words and relies on context to separate them, WPM in Thai is really a character-throughput measure rather than a count of distinct dictionary words — which is also how most Thai typing-speed tools and typing-tutor software approach it, since counting actual Thai words in real time is far less practical than counting characters.",
    },
    { type: "heading", text: "Keyboard Layout and Special Characters", id: "keyboard" },
    {
      type: "paragraph",
      text: "Thai script has its own alphabet with 44 consonants, over a dozen vowel signs (some written before, above, below, or after the consonant they belong to), and four tone marks — all of which stack in ways that don't exist in Latin-script languages. The standard Thai keyboard layout is called Kedmanee, and it's what ships by default on most keyboards sold in Thailand, though a less common ergonomic alternative called Pattachote also exists.",
    },
    {
      type: "table",
      headers: ["Layout", "Notes"],
      rows: [
        ["Kedmanee", "The default, most widely used Thai keyboard layout in Thailand, similar in spirit to QWERTY's dominance in English"],
        ["Pattachote", "An alternative layout designed for typing efficiency; far less common in practice"],
        ["Tone marks & vowel signs", "Typed as separate keystrokes that stack visually above or below the preceding consonant — no dead-key sequences needed, just direct key presses"],
        ["Switching to Thai script", "Most systems toggle between Thai and Latin input with a dedicated key combination once the Thai keyboard is installed"],
      ],
    },
    {
      type: "table",
      headers: ["Task", "Windows", "Mac"],
      rows: [
        ["Add Thai keyboard", "Settings → Time & Language → Language & region → Add a language → Thai → Add keyboard (Kedmanee)", "System Settings → Keyboard → Input Sources → Edit → + → Thai → Thai (Kedmanee)"],
        ["Switch input language quickly", "Win + Space", "Control + Space"],
      ],
    },
    { type: "heading", text: "Thai Typing Speed Benchmarks (WPM)", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "Level", "Real-World Context"],
      rows: [
        ["Below 15 WPM", "Beginner", "Still learning the Kedmanee layout and where tone marks sit"],
        ["15–25 WPM", "Below Average", "Functional but slower than most office-job expectations"],
        ["25–35 WPM", "Average", "Typical for a casual, self-taught Thai typist"],
        ["35–45 WPM", "Good", "Comfortable for administrative and data-entry roles"],
        ["45–55 WPM", "Professional", "Matches experienced office staff and customer-service agents"],
        ["55+ WPM", "Expert", "Fast enough for transcription and high-volume Thai content production"],
      ],
    },
    { type: "heading", text: "Real Jobs That Value Thai Typing Speed", id: "requirements" },
    {
      type: "table",
      headers: ["Country", "Role or Exam", "Typical Requirement"],
      rows: [
        ["Thailand", "Government office and civil-service clerical posts", "Fast, accurate Thai typing supports high-volume document and record processing"],
        ["Thailand", "Data-entry and administrative-assistant roles", "Employers frequently list Thai keyboard proficiency as a practical hiring screen"],
        ["Thailand", "Call-center and customer-support positions", "Written chat support in Thai depends directly on typing speed and accuracy"],
        ["Regional media and publishing", "Thai content writers, translators, and transcribers", "Output volume and deadlines hinge on comfortable Thai typing speed"],
      ],
    },
    { type: "heading", text: "Thai Around the World", id: "diaspora" },
    {
      type: "table",
      headers: ["Country / Region", "Context"],
      rows: [
        ["Thailand", "Sole official language, spoken by the vast majority of the country's roughly 70 million people"],
        ["Laos", "Thai is widely understood due to close linguistic ties with Lao and heavy exposure to Thai media"],
        ["United States", "Established Thai immigrant communities, especially in California"],
        ["Australia", "Growing Thai-speaking community tied to migration and international education"],
        ["Southeast Asian region", "Thai is a common second language for cross-border trade and tourism"],
      ],
    },
    {
      type: "paragraph",
      text: "Thailand's national epic Ramakien, adapted from the Indian Ramayana, sits at the center of Thai literary and performing-arts tradition, alongside the classical poetry of Sunthorn Phu — often called Thailand's most celebrated poet. That written heritage, combined with Thai script's distinctive tone marks and stacked vowels, makes Thai text a genuinely useful and visually recognizable challenge for building real typing skill.",
    },
    { type: "heading", text: "Who Is This Test Built For", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏛️ Government and civil-service clerical job applicants in Thailand",
        "💻 Data-entry operators and administrative assistants",
        "🎧 Call-center and customer-support agents typing in Thai daily",
        "📰 Content writers, translators, and transcribers producing Thai media",
        "🎓 Students and Thai-language learners practicing the Kedmanee layout",
        "🌍 Thai diaspora in the US, Australia, and beyond maintaining written fluency",
        "⌨️ Anyone switching from a Latin keyboard who wants to build Thai muscle memory",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Thai typing speed?",
          answer:
            "35–45 WPM is comfortable for most administrative and data-entry roles in Thailand, while 45+ WPM is considered professional, transcription-ready speed.",
        },
        {
          question: "Do I need to install a special keyboard for Thai?",
          answer:
            "Yes — you'll need the Thai Kedmanee keyboard layout, which is free to add on both Windows and Mac through system language settings. It's the standard layout used on nearly all keyboards in Thailand.",
        },
        {
          question: "Why doesn't Thai typing use spaces between words?",
          answer:
            "Thai script traditionally doesn't separate words with spaces the way Latin-script languages do; spaces in Thai typically mark sentence or phrase boundaries instead, which is why this test measures speed by character throughput rather than distinct word counts.",
        },
        {
          question: "How is WPM calculated on this test?",
          answer:
            "Every five typed characters counts as one word, the same international convention used for other languages. Net WPM subtracts a penalty for uncorrected errors.",
        },
        {
          question: "Is this Thai typing test free?",
          answer: "Yes — completely free, no signup, no download, and unlimited retakes.",
        },
      ],
    },
    {
      type: "cta",
      text: "เลือกระยะเวลาทดสอบ เริ่มพิมพ์ แล้วดูความเร็วและความแม่นยำของคุณได้ทันที",
    },
  ],
};

export default content;
