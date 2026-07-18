import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Hungarian Typing Test — Magyar Gépelés Sebességteszt (WPM)",
  seoDescription:
    "Free Hungarian typing test — measure your real WPM typing Magyar text with á, é, í, ó, ö, ő, ú, ü, ű. No signup, instant results.",
  researchedKeywords: [
    "hungarian typing test",
    "magyar gépelés teszt",
    "gépírás sebességmérő",
    "wpm teszt magyarul",
    "magyar billentyűzet ő ű",
    "gépelés gyakorlás magyar",
    "tíz ujjas gépírás teszt",
    "typing speed test hungarian",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Hungarian (Magyar) is spoken by roughly 13 million people, the overwhelming majority in Hungary itself, with sizable native-speaking communities in neighboring Romania (Transylvania), Slovakia, Serbia (Vojvodina), Ukraine (Transcarpathia), and Austria — a legacy of borders redrawn after the Treaty of Trianon in 1920. It's a Uralic language, unrelated to its Indo-European neighbors, which gives it a distinctive vocabulary and a agglutinative grammar built from long strings of suffixes.",
        "There's no single famous national typing exam in Hungary, but keyboard fluency in Magyar still matters in very concrete ways: administrative and clerical roles in Hungarian public offices, customer-service and back-office positions at companies serving the domestic market, transcription and translation work, and the growing remote-work and outsourcing sector where Hungarian-language data entry is billed by accuracy and speed. Students and office workers alike also rely on the Hungarian QWERTZ layout daily, which places several accented vowels and punctuation marks in different spots than the international QWERTY layout most typing tutorials assume.",
        "This test measures your typing speed on real Hungarian sentences, so your WPM reflects how you actually perform on the accented characters and layout quirks of Magyar, not a simplified stand-in.",
      ],
    },
    { type: "heading", text: "How Hungarian Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "Hungarian typing speed is measured the same way as in most Latin-script languages: words per minute (WPM), where every five typed characters — including spaces and punctuation — counts as one standard \"word.\" Because Hungarian words are often long and suffix-heavy (agglutination can stack several grammatical markers onto a single root), a Hungarian sentence sometimes contains fewer words but more characters than an equivalent English one, so character-accurate typing of accents matters more than in shorter-word languages.",
    },
    { type: "heading", text: "Keyboard Layout and Special Characters", id: "keyboard" },
    {
      type: "paragraph",
      text: "Hungary uses a QWERTZ keyboard layout (like German and much of Central Europe), not QWERTY — the Y and Z keys are swapped, and several number-row keys produce accented vowels directly without dead keys. Hungarian has nine accented letters beyond the base Latin alphabet: á, é, í, ó, ö, ő, ú, ü, ű. The long-umlaut vowels ő and ű are distinctively Hungarian and don't appear on German or other QWERTZ layouts, which can trip up typists using a non-Hungarian keyboard.",
    },
    {
      type: "table",
      headers: ["Character", "How to Type It"],
      rows: [
        ["á, é, í, ó, ú (short accents)", "Dedicated keys on the Hungarian QWERTZ layout, mostly on the number row"],
        ["ö, ü (umlauts)", "Dedicated keys on the Hungarian layout"],
        ["ő, ű (double acute accents)", "Dedicated keys on the Hungarian layout, distinct from ö/ü — unique to Hungarian"],
        ["Any Hungarian accent on Windows (non-Hungarian keyboard)", "Add the Hungarian keyboard layout, or use Alt + numeric code (e.g. Alt+0245 for ő)"],
        ["Any Hungarian accent on Mac (non-Hungarian keyboard)", "Add the Hungarian input source under Keyboard settings, or use Option-based accent combinations where available"],
      ],
    },
    {
      type: "table",
      headers: ["Task", "Windows", "Mac"],
      rows: [
        ["Add Hungarian keyboard", "Settings → Time & Language → Language & region → Add a language → Magyar → Add keyboard (Hungarian QWERTZ)", "System Settings → Keyboard → Input Sources → Edit → + → Hungarian"],
        ["Switch input language quickly", "Win + Space", "Control + Space"],
      ],
    },
    { type: "heading", text: "Hungarian Typing Speed Benchmarks (WPM)", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "Level", "Real-World Context"],
      rows: [
        ["Below 15 WPM", "Beginner", "Still hunting for keys, including the QWERTZ-specific positions and accented vowels"],
        ["15–30 WPM", "Below Average", "Basic functional typing, slower than most office-job expectations"],
        ["30–45 WPM", "Average", "Where most untrained adult typists in Hungary land"],
        ["45–60 WPM", "Good", "Comfortable for administrative, data-entry, and customer-service roles"],
        ["60–75 WPM", "Professional", "Matches the pace expected of trained office and transcription staff"],
        ["75+ WPM", "Expert", "Fast enough for professional stenography-adjacent or high-volume data work"],
      ],
    },
    { type: "heading", text: "Real Jobs That Reward Hungarian Typing Speed", id: "requirements" },
    {
      type: "table",
      headers: ["Country", "Role or Exam", "Typical Requirement"],
      rows: [
        ["Hungary", "Public administration / önkormányzati (municipal) clerical roles", "Fast, accurate Hungarian typing is commonly listed as a practical requirement"],
        ["Hungary", "Data entry and back-office outsourcing (shared service centers)", "Budapest hosts many multinational shared-service centers where typing speed and accuracy are part of screening"],
        ["Hungary & diaspora", "Customer support and transcription in Hungarian", "Employers typically expect comfortable 45+ WPM for sustained typing work"],
        ["Romania, Slovakia, Serbia (Hungarian minority regions)", "Bilingual administrative and translation roles", "Hungarian keyboard fluency is a practical asset alongside the local national language"],
      ],
    },
    { type: "heading", text: "Hungarian Around the World", id: "diaspora" },
    {
      type: "table",
      headers: ["Country / Region", "Context"],
      rows: [
        ["Hungary", "Home to the vast majority of Hungarian speakers and the language's administrative and cultural center"],
        ["Romania (Transylvania)", "Home to over a million ethnic Hungarians, the largest Hungarian minority outside Hungary"],
        ["Slovakia & Serbia (Vojvodina)", "Significant Hungarian-speaking minority populations with local-language schooling and media"],
        ["United States, Canada, Germany, Austria", "Hungarian diaspora communities from 20th-century emigration waves, including after 1956"],
      ],
    },
    {
      type: "paragraph",
      text: "Hungarian literature has a strong international footprint for a language of its size — Nobel laureate Imre Kertész, and internationally translated novelists like Sándor Márai and Magda Szabó, give Hungarian a body of modern prose that reads naturally at typing-test length, alongside a much older tradition of Hungarian folk poetry and the national anthem-adjacent verse of Sándor Petőfi.",
    },
    { type: "heading", text: "Who Is This Test Built For", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏛️ Job seekers applying for administrative and clerical roles in Hungary",
        "💼 Shared-service-center and back-office employees typing in Hungarian daily",
        "🎧 Customer-support agents handling Hungarian-language tickets and calls",
        "🎓 Students and typing-course learners building QWERTZ muscle memory",
        "🌍 Diaspora Hungarians in Romania, Slovakia, and beyond keeping their keyboard skills sharp",
        "📝 Translators and transcribers working with Hungarian source text",
        "⌨️ Anyone switching between QWERTY and Hungarian QWERTZ layouts who wants to measure the difference",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Hungarian typing speed?",
          answer:
            "45–60 WPM is comfortable for most administrative and customer-service jobs in Hungary. 60–75 WPM is considered professional-level, and above 75 WPM is fast enough for high-volume data or transcription work.",
        },
        {
          question: "Do I need a Hungarian keyboard to take this test?",
          answer:
            "No. You can type Hungarian's accented characters (á, é, í, ó, ö, ő, ú, ü, ű) from any keyboard by adding the Hungarian input language in your OS settings, or using Alt-code shortcuts on Windows.",
        },
        {
          question: "Why is the Hungarian layout different from QWERTY?",
          answer:
            "Hungary uses QWERTZ, the same base layout family as German and much of Central Europe — the Y and Z keys are swapped compared to QWERTY, and several keys are dedicated to Hungarian's accented vowels.",
        },
        {
          question: "How is WPM calculated on this test?",
          answer:
            "Every five typed characters, including spaces and punctuation, counts as one word. Net WPM subtracts a penalty for uncorrected errors, so it reflects real, usable typing output.",
        },
        {
          question: "Is this Hungarian typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can practice.",
        },
      ],
    },
    {
      type: "cta",
      text: "Válaszd ki a teszt hosszát, kezdj el gépelni, és nézd meg azonnal a WPM-edet és pontosságodat.",
    },
  ],
};

export default content;
