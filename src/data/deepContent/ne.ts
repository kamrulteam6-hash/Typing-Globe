import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Nepali Typing Test · नेपाली | WPM & Accuracy",
  seoDescription:
    "Take a free Nepali typing test and check WPM and accuracy. Practice Devanagari matras, halant, conjuncts, Nepali keyboard input and Lok Sewa-style skill preparation.",
  researchedKeywords: [
    "Nepali typing speed test",
    "Nepali WPM test",
    "Nepali keyboard test",
    "Nepali Unicode typing",
    "नेपाली typing practice",
    "नेपाली टाइपिङ टेस्ट",
    "नेपाली टाइपिङ स्पिड",
    "नेपाली किबोर्ड",
    "देवनागरी टाइपिङ",
    "नेपाली टाइपिङ अभ्यास",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Nepali typing uses Devanagari, but the real challenge is more than finding consonant keys. Matras, the pre-base sign ि, halant, conjuncts, reph-style र् sequences, nasal marks, and Nepali vocabulary all affect the typing rhythm.",
        "Typing Globe's live tool offers 15, 30, 60, and 120-second tests, easy, medium, and hard passages, one- or two-paragraph options, shuffle, custom text, WPM, and accuracy. The page should help users practice authentic नेपाली text while keeping Lok Sewa claims tied to actual Public Service Commission skill-test documents.",
      ],
    },

    { type: "heading", text: "What Is a Nepali Typing Test?", id: "what-is-nepali-typing" },
    {
      type: "paragraph",
      text: "A Nepali typing test measures how quickly and accurately you reproduce नेपाली text in Devanagari. Accuracy includes the full encoded sequence: consonants, vowel signs, halant, conjuncts, punctuation, and spaces.",
    },
    {
      type: "paragraph",
      text: "Use the same input layout and duration when tracking progress. Traditional/fixed keyboard entry and phonetic transliteration do not have the same keystroke workload.",
    },

    { type: "heading", text: "Devanagari Matras Follow Logical Order", id: "matras-logical-order" },
    {
      type: "paragraph",
      text: "Unicode stores Devanagari in logical character order and shapes dependent vowel signs around the consonant. The short-i sign ि displays before the consonant even though it is entered as part of the consonant-vowel sequence.",
    },
    {
      type: "paragraph",
      text: "Practice words such as किताब, शिक्षा, जिल्ला, स्थिति, and लिख्नु until the pre-base appearance of ि stops causing hesitation.",
    },

    { type: "heading", text: "Halant Builds Half Forms and Conjuncts", id: "halant-half-forms" },
    {
      type: "paragraph",
      text: "Unicode uses virama/halant between consonants to form Devanagari half forms and conjuncts. Depending on the font, the same underlying sequence may render as a ligature or as a half consonant plus full consonant.",
    },
    {
      type: "paragraph",
      text: "Practice common Nepali clusters such as प्र, क्र, त्र, श्र, ज्ञ, क्ष, स्त, न्त, and द्य inside real words rather than isolated symbols.",
    },

    { type: "heading", text: "Reph and र् Sequences Need Careful Practice", id: "reph-sequences" },
    {
      type: "paragraph",
      text: "Devanagari has special shaping behavior for ra in consonant clusters. A sequence involving र् may render above or around the following consonant instead of looking like the typed order.",
    },
    {
      type: "paragraph",
      text: "Words such as कार्य, अर्थ, परिवर्तन, and कर्मचारी are useful because they teach you to trust the character sequence rather than the final glyph position.",
    },

    { type: "heading", text: "High-Value Nepali Typing Patterns", id: "typing-patterns" },
    {
      type: "table",
      headers: ["Pattern", "Typing Focus", "Examples"],
      rows: [
        ["ि", "pre-base vowel sign", "किताब, जिल्ला, शिक्षा"],
        ["् + consonant", "halant/conjunct", "प्र, त्र, क्ष, ज्ञ"],
        ["र् + consonant", "reph-like shaping", "कार्य, अर्थ"],
        ["ं / ँ", "nasal marks", "संसार, साँझ"],
        ["Devanagari punctuation", "danda and modern punctuation", "। , ?"],
      ],
    },
    {
      type: "paragraph",
      text: "These are practice categories rather than a complete description of Nepali orthography. Use your own error history to decide which patterns deserve the most time.",
    },

    { type: "heading", text: "The Windows Nepali Keyboard", id: "windows-keyboard" },
    {
      type: "paragraph",
      text: "Microsoft provides a dedicated Nepali keyboard with KLID 00000461, and the default ne-NP input profile maps to that keyboard. Windows can also keep English US available as a secondary profile.",
    },
    {
      type: "paragraph",
      text: "This is more precise than telling every Windows user to choose \"Nepali Traditional or INSCRIPT.\" The documented Microsoft default is the Nepali keyboard 00000461.",
    },

    { type: "heading", text: "Phonetic and Romanized Workflows Are Separate", id: "phonetic-romanized" },
    {
      type: "paragraph",
      text: "Users may also type Nepali through Romanized or phonetic tools, but these rely on transliteration and candidate conversion rather than direct fixed key positions. They can be convenient for everyday text but should not be assumed equivalent to a formal keyboard test.",
    },
    {
      type: "paragraph",
      text: "If an exam or employer specifies a keyboard layout, practice that layout specifically. A fast transliteration score may not transfer to direct keyboard entry.",
    },

    { type: "heading", text: "Preeti Is a Font-Encoding Legacy, Not the Same as Unicode Nepali", id: "preeti-legacy" },
    {
      type: "paragraph",
      text: "Nepal has a long history of Preeti and other font-based typing workflows. A document can look like Nepali while the underlying bytes are not Unicode Devanagari, which creates problems for search, websites, databases, and copy/paste.",
    },
    {
      type: "paragraph",
      text: "For a modern browser typing test, use Unicode Devanagari. If your workplace still uses Preeti, treat conversion and legacy typing as a separate workflow rather than mixing the encodings.",
    },

    { type: "heading", text: "Lok Sewa Uses Computer Skill Tests for Some Posts", id: "lok-sewa-skill-tests" },
    {
      type: "paragraph",
      text: "Current Nepal Public Service Commission notices show that candidates for some Nayab Subba and related posts proceed to a computer skill test after the written examination. An official 2082/83 syllabus reviewed here includes a practical computer skill test with 5 minutes of Devanagari typing, 5 minutes of English typing, and 5 minutes of word processing/formatting.",
    },
    {
      type: "paragraph",
      text: "That is solid evidence that typing can matter in PSC skill testing, but it does not justify a generic claim that 35–45 WPM is the competitive Lok Sewa range for every Kharidar or Nayab Subba post.",
    },

    { type: "heading", text: "Do Not Invent a Universal Lok Sewa WPM Cutoff", id: "no-universal-cutoff" },
    {
      type: "paragraph",
      text: "The live page currently labels 35–45 WPM as competitive for Lok Sewa. The official materials reviewed here confirm computer-skill testing and timed Devanagari typing in some schemes, but they do not establish that universal WPM band.",
    },
    {
      type: "paragraph",
      text: "Typing Globe should cite the exact current syllabus or vacancy when it gives a required speed, duration, scoring method, or keyboard format.",
    },

    { type: "heading", text: "Nepali Numbers, Dates, and Official Text", id: "numbers-dates-official" },
    {
      type: "paragraph",
      text: "Government and office documents mix Devanagari prose with Arabic digits, dates, percentages, English abbreviations, and names. These transitions can be harder than a simple narrative paragraph.",
    },
    {
      type: "paragraph",
      text: "Use Custom Typing Test for realistic office lines if that matches your goal, while keeping a pure Nepali passage as a separate benchmark.",
    },

    { type: "heading", text: "Long Nepali Words and Suffixes Reward Chunking", id: "long-words-chunking" },
    {
      type: "paragraph",
      text: "Nepali uses productive suffixes and postpositions, and formal vocabulary often creates long strings such as व्यवस्थापन, जिम्मेवारी, कर्मचारीहरू, कार्यालयमा, विश्वविद्यालय, and कार्यान्वयन.",
    },
    {
      type: "paragraph",
      text: "Read the stem and following elements in chunks so a late-word matra or conjunct does not disappear under speed.",
    },

    { type: "heading", text: "How WPM Works with Nepali Devanagari", id: "how-wpm-measured" },
    {
      type: "paragraph",
      text: "A visible Nepali syllable can contain several Unicode characters and several keystrokes. Standardized WPM can normalize output, but users should not interpret one visual akshara as one typed character.",
    },
    {
      type: "paragraph",
      text: "The live page's claim that Nepali WPM naturally runs lower than English for comparable effort should be softened unless Typing Globe has controlled data. Input layout and reading fluency matter as much as script complexity.",
    },

    { type: "heading", text: "Accuracy First, Then Speed", id: "accuracy-first" },
    {
      type: "paragraph",
      text: "If a conjunct or reph sequence repeatedly fails, slow down and rebuild the Unicode order correctly. A clean sequence that renders reliably is more valuable than a fast malformed cluster.",
    },
    {
      type: "paragraph",
      text: "Once the sequence becomes automatic, return to a longer passage and see whether the improvement transfers.",
    },

    { type: "heading", text: "Use Custom Text for Lok Sewa or Workplace Vocabulary", id: "custom-text" },
    {
      type: "paragraph",
      text: "Custom practice can target administrative terms, public-service notices, journalism, education, names, or exam-style paragraphs. Use the actual vocabulary you expect to type.",
    },
    {
      type: "paragraph",
      text: "Keep a fresh standard passage as your benchmark because repeated exam text can become memorized.",
    },

    { type: "heading", text: "A 6-Week Nepali Typing Practice Plan", id: "six-week-plan" },
    { type: "subheading", text: "Weeks 1-2: Core Devanagari and Matras" },
    {
      type: "paragraph",
      text: "Stay on one Nepali input layout. Practice common consonants, vowel signs, ि, punctuation, and basic words until you can keep your eyes on the passage.",
    },
    { type: "subheading", text: "Weeks 3-4: Conjuncts, र् Sequences, and Long Words" },
    {
      type: "paragraph",
      text: "Add frequent conjuncts and formal vocabulary. Keep a short error list and rebuild problematic sequences slowly.",
    },
    { type: "subheading", text: "Weeks 5-6: Timed Practical Text" },
    {
      type: "paragraph",
      text: "Use longer passages and, if relevant, match the duration and workflow in the current PSC or employer syllabus you are preparing for.",
    },

    { type: "heading", text: "A Simple 20-Minute Routine", id: "daily-routine" },
    {
      type: "paragraph",
      text: "Warm up with matras, drill one conjunct family and one र् pattern, take one timed passage, then review exact Unicode errors.",
    },
    {
      type: "paragraph",
      text: "If preparing for a PSC skill test, add separate word-processing practice instead of assuming WPM alone represents the whole computer skill component.",
    },

    { type: "heading", text: "Common Nepali Typing Mistakes to Watch", id: "common-mistakes" },
    {
      type: "list",
      items: [
        "Typing ि according to visual position instead of the input method's logical sequence",
        "Dropping halant in a conjunct",
        "Misreading र् / reph-style shaping",
        "Mixing Preeti font encoding with Unicode Devanagari",
        "Assuming Romanized input and the Windows Nepali keyboard are the same task",
        "Publishing 35–45 WPM as a universal Lok Sewa benchmark without an official syllabus",
        "Treating a 5-minute Devanagari component as if it proves one national WPM standard",
      ],
    },

    { type: "heading", text: "Nepali Punctuation Can Mix Danda and Western Marks", id: "punctuation-danda" },
    {
      type: "paragraph",
      text: "Nepali prose may use the Devanagari danda । as well as commas, question marks, parentheses, quotation marks, and Arabic numerals. Practical digital writing often mixes conventions depending on the source.",
    },
    {
      type: "paragraph",
      text: "Follow the passage exactly instead of replacing one punctuation style with another from habit. Punctuation errors count even when the Nepali words are correct.",
    },

    { type: "heading", text: "Preeti Conversion Can Hide Data Problems", id: "preeti-conversion-problems" },
    {
      type: "paragraph",
      text: "A converted Preeti document may look correct after migration to Unicode while still containing inconsistent characters or spacing from imperfect conversion. That matters for a typing corpus because hidden anomalies can create false mismatches.",
    },
    {
      type: "paragraph",
      text: "Typing Globe should prefer natively Unicode source text and manually review converted passages before publishing them as test material.",
    },

    { type: "heading", text: "Nepali-English Bilingual Typing Is a Separate Skill", id: "bilingual-typing" },
    {
      type: "paragraph",
      text: "Government forms, media, education, and technology often mix नेपाली with English acronyms, email addresses, dates, and product names. Switching between scripts can be a larger source of mistakes than the Devanagari clusters themselves.",
    },
    {
      type: "paragraph",
      text: "Practice mixed text separately from your pure Nepali benchmark so you can tell whether the weakness is layout switching or Devanagari composition.",
    },

    { type: "heading", text: "PSC Computer Skill Tests Include More Than Typing", id: "psc-skill-tests" },
    {
      type: "paragraph",
      text: "The official syllabus example reviewed here gives separate marks and time for Devanagari typing, English typing, and word processing/formatting. That means a strong typing score alone does not represent the whole computer skill test.",
    },
    {
      type: "paragraph",
      text: "Candidates should practice formatting, saving, editing, and document operations when the current syllabus includes them instead of treating WPM as the only preparation target.",
    },

    { type: "heading", text: "Use Word Families to Practice Nepali Endings", id: "word-families" },
    {
      type: "paragraph",
      text: "Practice a familiar stem across related forms and postpositions: कार्यालय, कार्यालयमा, कार्यालयको; विद्यार्थी, विद्यार्थीहरू, विद्यार्थीलाई. Repeated stems let you focus on endings and marks without decoding a new word every time.",
    },
    {
      type: "paragraph",
      text: "Then return to unseen text to verify that the skill transfers.",
    },

    { type: "heading", text: "Nepali Names and Place Names Are Excellent Accuracy Drills", id: "names-place-names" },
    {
      type: "paragraph",
      text: "Names such as काठमाडौं, पोखरा, भक्तपुर, ललितपुर, and personal names can contain conjuncts, long vowels, and punctuation patterns that expose keyboard weaknesses quickly.",
    },
    {
      type: "paragraph",
      text: "Practice names inside full sentences so capitalization, punctuation, and surrounding postpositions are part of the movement rather than a memorized list.",
    },

    { type: "heading", text: "Devanagari Digits Are Worth Recognizing", id: "devanagari-digits" },
    {
      type: "paragraph",
      text: "Nepali documents can use Devanagari digits ०१२३४५६७८९ as well as Arabic digits depending on context. A user who only practices words may pause when a date or reference number appears.",
    },
    {
      type: "paragraph",
      text: "Use the exact digit style shown in the source. If your work uses both systems, keep a short numeric drill in the routine.",
    },

    { type: "heading", text: "Error Review Should Separate Script and Layout Problems", id: "error-review" },
    {
      type: "paragraph",
      text: "If the wrong character appears because you forgot a key, that is a layout problem. If you chose the wrong matra or ending while reading, that is a spelling problem. If the visible cluster is malformed despite correct-looking keys, that may be a Unicode sequence problem.",
    },
    {
      type: "paragraph",
      text: "Classifying the error prevents you from solving every mistake with more speed practice when the real issue is input setup or orthography.",
    },

    { type: "heading", text: "Frequently Asked Questions About Nepali Typing", id: "faq-section" },
    {
      type: "faq",
      items: [
        {
          question: "Which Nepali keyboard does Windows use?",
          answer:
            "Microsoft provides the Nepali keyboard with KLID 00000461, and the default ne-NP Windows input profile maps to it.",
        },
        {
          question: "Is Preeti the same as Unicode Nepali?",
          answer:
            "No. Preeti is a legacy font-encoding workflow, while Unicode Devanagari uses standard character code points suitable for the web, search, and modern documents.",
        },
        {
          question: "Does Lok Sewa test Nepali typing?",
          answer:
            "Some Nepal Public Service Commission computer-skill schemes include timed Devanagari typing. Use the current syllabus for the exact post because duration and scoring can vary.",
        },
        {
          question: "Is 35–45 WPM an official Lok Sewa standard?",
          answer:
            "The official materials reviewed here do not establish that universal WPM band. Do not treat it as an official cutoff without a current source.",
        },
        {
          question: "What does halant do?",
          answer:
            "Halant or virama suppresses the inherent vowel and helps form Devanagari consonant clusters and half forms.",
        },
        {
          question: "What is a good Nepali typing speed?",
          answer:
            "There is no transparent universal Nepali WPM benchmark for every user or post. Use a personal baseline and the exact official requirement when preparing for a specific skill test.",
        },
      ],
    },

    { type: "heading", text: "Test Your Nepali Typing Speed Now", id: "cta-heading" },
    {
      type: "cta",
      text: "Start the Nepali Typing Test · नेपाली above and type at the pace that feels natural today. Check WPM and accuracy, then review matras, conjuncts, reph sequences, or layout switches that caused mistakes. Return after focused practice using the same input method and duration. The goal is stable Unicode नेपाली typing and exam-relevant skill—not an unsupported national WPM band.",
    },
  ],
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": "https://www.typingglobe.com/test/nepali-typing-speed-test#app",
      name: "Nepali Typing Test",
      url: "https://www.typingglobe.com/test/nepali-typing-speed-test",
      description:
        "Free Nepali typing test for measuring WPM and accuracy with Unicode Devanagari, matras, conjuncts and Windows Nepali keyboard input.",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      inLanguage: ["en", "ne"],
      publisher: { "@type": "Organization", name: "Typing Globe", url: "https://www.typingglobe.com/" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.typingglobe.com/test/nepali-typing-speed-test#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Which Nepali keyboard does Windows use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Microsoft provides the Nepali keyboard with KLID 00000461, and the default ne-NP Windows input profile maps to it.",
          },
        },
        {
          "@type": "Question",
          name: "Is Preeti the same as Unicode Nepali?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Preeti is a legacy font-encoding workflow, while Unicode Devanagari uses standard character code points suitable for the web, search, and modern documents.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lok Sewa test Nepali typing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Some Nepal Public Service Commission computer-skill schemes include timed Devanagari typing. Use the current syllabus for the exact post because duration and scoring can vary.",
          },
        },
        {
          "@type": "Question",
          name: "Is 35–45 WPM an official Lok Sewa standard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The official materials reviewed here do not establish that universal WPM band. Do not treat it as an official cutoff without a current source.",
          },
        },
        {
          "@type": "Question",
          name: "What does halant do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Halant or virama suppresses the inherent vowel and helps form Devanagari consonant clusters and half forms.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good Nepali typing speed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no transparent universal Nepali WPM benchmark for every user or post. Use a personal baseline and the exact official requirement when preparing for a specific skill test.",
          },
        },
      ],
    },
  ],
};

export default content;
