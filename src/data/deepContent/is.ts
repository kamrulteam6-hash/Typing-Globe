import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Icelandic Typing Test — Íslensk Hraðritunarpróf (WPM)",
  seoDescription:
    "Free Icelandic typing test — measure your real WPM typing Íslenska with þ, ð, æ, ö and accented vowels. No signup, instant results.",
  researchedKeywords: [
    "icelandic typing test",
    "íslensk innsláttarpróf",
    "hraðritun á íslensku",
    "wpm test icelandic",
    "icelandic keyboard þ ð",
    "typing speed test iceland",
    "íslenskt lyklaborð",
    "practice typing icelandic",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Icelandic is spoken natively by roughly 350,000–370,000 people, almost entirely in Iceland itself, making it one of the smallest national languages with its own dedicated keyboard layout and full digital ecosystem. Small Icelandic-speaking communities also exist in Denmark, Norway, and among descendants of 19th-century emigrants in Canada's Gimli, Manitoba region.",
        "There's no famous national Icelandic typing exam, but keyboard speed still matters in very practical ways: Iceland's economy runs heavily on tourism, fishing, and a compact but modern public and private sector, all of which depend on fast, accurate Icelandic-language correspondence, government forms, and customer service. Icelandic's notoriously conservative spelling — preserving letters and grammar close to Old Norse — also means typing it accurately takes real familiarity with characters that don't exist in English at all.",
        "This test measures your typing speed on real Icelandic sentences, so your WPM reflects how you actually handle þ, ð, æ, ö and the accented vowels, not a simplified English stand-in.",
      ],
    },
    { type: "heading", text: "How Icelandic Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "Icelandic typing speed uses the standard words-per-minute (WPM) metric, where every five typed characters — including spaces and punctuation — counts as one word. Because Icelandic retains letters like þ (thorn) and ð (eth) that require either a native keyboard or a special input method on other layouts, accuracy on these characters is a meaningful part of a realistic Icelandic WPM score.",
    },
    { type: "heading", text: "Keyboard Layout and Special Characters", id: "keyboard" },
    {
      type: "paragraph",
      text: "Iceland uses its own QWERTY-based keyboard layout with dedicated keys for letters that don't exist in English: þ (thorn, an unvoiced \"th\" sound), ð (eth, a voiced \"th\" sound), æ, ö, and the accented vowels á, é, í, ó, ú, ý. These are holdovers from Old Norse that Icelandic kept while other Scandinavian languages dropped them, which is part of why Icelanders can still read medieval sagas in something close to the original spelling.",
    },
    {
      type: "table",
      headers: ["Character", "How to Type It"],
      rows: [
        ["þ / Þ (thorn)", "Dedicated key on the Icelandic layout"],
        ["ð / Ð (eth)", "Dedicated key on the Icelandic layout"],
        ["æ / Æ, ö / Ö", "Dedicated keys on the Icelandic layout"],
        ["á, é, í, ó, ú, ý (accented vowels)", "Dedicated keys or dead-key accent combinations on the Icelandic layout"],
        ["þ, ð, æ, ö on Windows (non-Icelandic keyboard)", "Add the Icelandic keyboard layout, or use Alt + numeric codes (e.g. Alt+0254 for þ, Alt+0240 for ð)"],
        ["þ, ð, æ, ö on Mac (non-Icelandic keyboard)", "Add the Icelandic input source under Keyboard → Input Sources"],
      ],
    },
    {
      type: "table",
      headers: ["Task", "Windows", "Mac"],
      rows: [
        ["Add Icelandic keyboard", "Settings → Time & Language → Language & region → Add a language → Íslenska → Add keyboard", "System Settings → Keyboard → Input Sources → Edit → + → Icelandic"],
        ["Switch input language quickly", "Win + Space", "Control + Space"],
      ],
    },
    { type: "heading", text: "Icelandic Typing Speed Benchmarks (WPM)", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "Level", "Real-World Context"],
      rows: [
        ["Below 15 WPM", "Beginner", "Still locating þ, ð, æ, ö and accented vowels on the layout"],
        ["15–30 WPM", "Below Average", "Functional but slower than typical office-job expectations"],
        ["30–45 WPM", "Average", "Where most untrained adult typists land"],
        ["45–60 WPM", "Good", "Comfortable for administrative, tourism-sector, and customer-service roles"],
        ["60–75 WPM", "Professional", "Matches trained office and correspondence work in Icelandic"],
        ["75+ WPM", "Expert", "Fast enough for high-volume transcription or professional data work"],
      ],
    },
    { type: "heading", text: "Real Jobs That Reward Icelandic Typing Speed", id: "requirements" },
    {
      type: "table",
      headers: ["Country", "Role or Exam", "Typical Requirement"],
      rows: [
        ["Iceland", "Government and municipal (sveitarfélag) administrative roles", "Accurate, fast Icelandic typing is a practical expectation in clerical hiring"],
        ["Iceland", "Tourism and hospitality customer service", "Iceland's large tourism sector needs fast Icelandic-language correspondence and booking-system entry"],
        ["Iceland", "Banking, insurance, and back-office data entry", "Employers commonly expect comfortable 45+ WPM for sustained keyboard work"],
        ["Iceland", "Media, publishing, and translation", "Icelandic's small publishing industry and strong reading culture support steady demand for fast, accurate typists"],
      ],
    },
    { type: "heading", text: "Icelandic Around the World", id: "diaspora" },
    {
      type: "table",
      headers: ["Country / Region", "Context"],
      rows: [
        ["Iceland", "Home to nearly all native Icelandic speakers and the language's sole administrative center"],
        ["Denmark & Norway", "Small Icelandic-speaking communities from student and work migration, given historical ties to Denmark"],
        ["Canada (Gimli, Manitoba)", "Descendants of 19th-century Icelandic emigrants who preserved language and cultural festivals"],
        ["United States", "Small but active Icelandic-American communities, especially in the upper Midwest"],
      ],
    },
    {
      type: "paragraph",
      text: "Icelandic's most famous literary legacy is the medieval sagas — works like Njáls saga and the Prose Edda — which modern Icelanders can still read largely unaltered thanks to the language's remarkably conservative spelling and grammar, a rare case where centuries-old text and everyday typing share nearly the same character set.",
    },
    { type: "heading", text: "Who Is This Test Built For", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏛️ Job seekers applying for government and municipal roles in Iceland",
        "🧳 Tourism and hospitality staff typing Icelandic customer correspondence",
        "🎓 Students and language learners practicing þ, ð, æ, and ö placement",
        "🌍 Diaspora Icelanders in Canada and the US reconnecting with the language",
        "📚 Readers and translators working with Icelandic texts, old and new",
        "💼 Office and back-office workers typing Icelandic daily",
        "⌨️ Anyone curious how their typing speed changes with Icelandic's extra letters",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Icelandic typing speed?",
          answer:
            "45–60 WPM is comfortable for most office and customer-service roles in Iceland. 60–75 WPM is professional-level, and above 75 WPM suits high-volume transcription or data work.",
        },
        {
          question: "Do I need an Icelandic keyboard to take this test?",
          answer:
            "No. You can type þ, ð, æ, ö and Icelandic's accented vowels from any keyboard by adding the Icelandic input language in your OS settings, or using Alt-code shortcuts on Windows.",
        },
        {
          question: "What are þ and ð, and how are they different?",
          answer:
            "Both are holdovers from Old Norse representing \"th\" sounds: þ (thorn) is the unvoiced sound, as in English \"thing,\" and ð (eth) is the voiced sound, as in English \"this.\" Icelandic is one of the few living languages that still uses both letters in everyday writing.",
        },
        {
          question: "How is WPM calculated on this test?",
          answer:
            "Every five typed characters, including spaces and punctuation, counts as one word. Net WPM subtracts a penalty for uncorrected errors, reflecting real, usable typing output.",
        },
        {
          question: "Is this Icelandic typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can practice.",
        },
      ],
    },
    {
      type: "cta",
      text: "Veldu lengd prófsins, byrjaðu að skrifa, og sjáðu WPM-ið þitt og nákvæmni samstundis.",
    },
  ],
};

export default content;
