import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Japanese Typing Test · 日本語 | WPM & Accuracy",
  seoDescription:
    "Take a free Japanese typing test and check WPM and accuracy. Practice Romaji or Kana input, IME conversion, hiragana, katakana, kanji and Japanese punctuation.",
  researchedKeywords: [
    "Japanese typing speed test",
    "Japanese WPM test",
    "Japanese IME typing test",
    "Romaji typing test",
    "Japanese typing practice",
    "日本語タイピングテスト",
    "タイピング速度",
    "日本語入力",
    "ローマ字入力",
    "かな入力",
    "文字入力",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Japanese typing is not a simple one-keystroke-to-one-character task. You may enter sounds with Romaji or Kana, compose text through an IME, choose a kanji conversion candidate, confirm the result, and then switch smoothly among hiragana, katakana, kanji, numbers and Latin text.",
        "Start the Japanese Typing Test above and type at the pace that feels natural today. Typing Globe currently offers 15, 30, 60, and 120-second tests, easy, medium, and hard passages, one- or two-paragraph options, shuffle, and custom text while showing WPM and accuracy.",
      ],
    },

    { type: "heading", text: "What Is a Japanese Typing Test?", id: "what-is-japanese-typing" },
    {
      type: "paragraph",
      text: "A Japanese typing test measures how quickly and accurately you can produce committed Japanese text. People may search for the same tool as Japanese typing speed test, 日本語タイピングテスト, Japanese WPM test, ローマ字入力 test, かな入力 practice, or 日本語入力 speed test.",
    },
    {
      type: "paragraph",
      text: "The key difference from alphabet-only tests is conversion. The physical keys you press are not always the same number as the final Japanese characters. That makes input method, candidate selection and conversion accuracy part of the real typing skill.",
    },

    { type: "heading", text: "Japanese Typing Uses an IME", id: "japanese-ime" },
    {
      type: "paragraph",
      text: "Microsoft's Japanese IME lets Windows users type Japanese with ordinary 101–105-key hardware. It can enter hiragana or katakana and convert the composed reading into kanji. Microsoft also lets users switch between Kana input and Romaji input.",
    },
    {
      type: "paragraph",
      text: "A simple example is 春. In Romaji mode, typing haru produces はる, and conversion can change it to 春. The important skill is not only typing h-a-r-u quickly; it is selecting and confirming the correct final text without disrupting the sentence.",
    },

    { type: "heading", text: "The IME Conversion Workflow", id: "ime-workflow" },
    {
      type: "table",
      headers: ["Stage", "What You Do", "Example"],
      rows: [
        ["Input reading", "Type Romaji or Kana", "haru → はる"],
        ["Compose", "IME holds the reading", "はる"],
        ["Convert", "Choose a candidate", "春 / 貼る / 張る …"],
        ["Commit", "Confirm the intended text", "春"],
      ],
    },

    { type: "heading", text: "Romaji and Kana Are Input Modes; JIS Is a Hardware/Layout Context", id: "romaji-kana-jis" },
    {
      type: "paragraph",
      text: "The current live page describes Romaji, Kana and JIS as three separate input methods. That is misleading. Microsoft IME directly distinguishes Romaji input and Kana input. A Japanese JIS keyboard is a physical/key-layout environment that can support those modes; it is not a third linguistic conversion method by itself.",
    },
    {
      type: "paragraph",
      text: "A 106/109-key Japanese keyboard includes dedicated keys such as 半角/全角, ひらがな and conversion-related keys, while a 101/102-key keyboard can still use Microsoft IME. Choose the setup that matches your real device rather than changing hardware only to chase a theoretical speed ceiling.",
    },

    { type: "heading", text: "Romaji Input: Familiar Keys, More Keystrokes", id: "romaji-input" },
    {
      type: "paragraph",
      text: "Romaji input maps Latin-letter sequences to Japanese syllables. Examples include ka → か, shi → し, tsu → つ, kyo → きょ and gakkou → がっこう. It is easy to learn for people already comfortable with QWERTY.",
    },
    {
      type: "paragraph",
      text: "The tradeoff is that the raw keystroke count can be much larger than the final Japanese character count. That is why a final-text WPM score should not be interpreted as a direct measure of finger keystrokes or compared casually with English WPM.",
    },

    { type: "heading", text: "Kana Input: Direct Kana Keying", id: "kana-input" },
    {
      type: "paragraph",
      text: "Kana input assigns kana directly to keys on a Japanese layout. Microsoft IME lets users switch between Kana and Romaji input when the relevant setting is enabled. Experienced users may prefer Kana because the mapping is direct, but it requires a different keyboard map and muscle memory.",
    },
    {
      type: "paragraph",
      text: "Do not promise that Kana is always 40–50% faster or has a higher universal \"speed ceiling.\" Real speed depends on the typist, hardware, conversion habits, vocabulary, candidate selection and the exact scoring method.",
    },

    { type: "heading", text: "Hiragana, Katakana and Kanji All Belong in Real Japanese Text", id: "mixed-scripts" },
    {
      type: "paragraph",
      text: "Natural Japanese mixes hiragana for grammar and many native forms, katakana for loanwords and other uses, and kanji for a large part of content vocabulary. Modern text can also include Latin letters, acronyms and digits.",
    },
    {
      type: "paragraph",
      text: "A useful typing test should therefore contain mixed-script text rather than one script only. Practice phrases such as 日本語を勉強する, コンピューターを使う, and AIサービスを利用する so switching does not become a pause.",
    },

    { type: "heading", text: "Script Usage in Japanese Typing", id: "script-usage-table" },
    {
      type: "table",
      headers: ["Script", "Typical Typing Use", "Examples"],
      rows: [
        ["ひらがな", "grammar, readings, native forms", "です、ます、から、する"],
        ["カタカナ", "loanwords, names, emphasis", "コンピューター、サービス"],
        ["漢字", "content words, names, concepts", "日本、会社、学校、情報"],
        ["Latin / digits", "acronyms, brands, numbers", "AI, PC, 2026"],
      ],
    },

    { type: "heading", text: "Conversion Accuracy Matters More Than the First Candidate", id: "conversion-accuracy" },
    {
      type: "paragraph",
      text: "Japanese IME prediction and candidate windows can make common words fast, but the first candidate is not always the intended one. Homophones make this especially important: the same reading can map to different kanji depending on context.",
    },
    {
      type: "paragraph",
      text: "Train yourself to read the committed phrase, not only the phonetic reading. If the candidate is wrong, correct it before moving on. A fast passage with the wrong kanji is not accurate Japanese typing.",
    },

    { type: "heading", text: "Small っ and Small ゃゅょ Need Clean Romaji Patterns", id: "small-kana" },
    {
      type: "paragraph",
      text: "Romaji input includes patterns that do not map one-to-one to English syllables. A doubled consonant often creates small っ, as in gakkou → がっこう, while sequences such as kya, kyu and kyo produce きゃ, きゅ and きょ.",
    },
    {
      type: "paragraph",
      text: "These patterns are worth practicing because one missing consonant or extra vowel can create a different reading. Use complete words such as きっぷ, がっこう, きょう, りょこう and しゅくだい rather than isolated kana drills.",
    },

    { type: "heading", text: "Katakana Long Vowel Mark ー", id: "long-vowel-mark" },
    {
      type: "paragraph",
      text: "Katakana loanwords often use the prolonged sound mark ー, as in コーヒー, コンピューター and メーカー. In exact typing, the mark is part of the source text and should not be dropped just because the word remains recognizable.",
    },
    {
      type: "paragraph",
      text: "Include katakana-heavy passages in medium or hard practice so switching to loanwords does not slow you down. Real Japanese office and web text contains many technical and international terms.",
    },

    { type: "heading", text: "Japanese Punctuation and Width Modes", id: "punctuation-width-modes" },
    {
      type: "paragraph",
      text: "Japanese text commonly uses punctuation such as 、 and 。 alongside brackets, quotation marks, numbers and Latin punctuation. Microsoft IME also supports full-width and half-width alphanumeric or katakana modes, which can matter in technical text and legacy data entry.",
    },
    {
      type: "paragraph",
      text: "For a general browser typing test, reproduce the source exactly instead of normalizing width or punctuation on your own. If the passage shows full-width katakana or a Japanese comma, match it.",
    },

    { type: "heading", text: "Useful Microsoft IME Shortcuts", id: "ime-shortcuts" },
    {
      type: "paragraph",
      text: "Microsoft documents F6 for hiragana, F7 for full-width katakana, F8 for half-width katakana, F9 for full-width alphanumeric and F10 for half-width alphanumeric conversion. Japanese hardware keyboards also expose dedicated mode and conversion keys.",
    },
    {
      type: "paragraph",
      text: "Shortcuts can improve workflow, but they are not mandatory for a good benchmark. Learn the commands that match your real typing environment and avoid turning shortcut memorization into a substitute for accurate reading and candidate selection.",
    },

    { type: "heading", text: "How Typing Globe Measures Japanese WPM", id: "how-wpm-measured" },
    {
      type: "paragraph",
      text: "Typing Globe's live Japanese page reports WPM and accuracy on committed Japanese text. Because IME composition can require multiple physical keystrokes for one final character, this WPM is a platform-specific final-text metric rather than a transparent raw-keystroke measure.",
    },
    {
      type: "paragraph",
      text: "The live SEO copy should not convert WPM directly into \"文字数/分\" with a universal ×5 assumption and then call those figures Japanese professional standards. If Typing Globe wants CPM, it should calculate committed characters per minute directly and label the method.",
    },

    { type: "heading", text: "What Is a Good Japanese Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no transparent national Japanese WPM ladder proving that 35–50 WPM is average, 50–65 WPM is office standard and 65+ WPM is professional across Romaji, Kana and different IME settings. Those methods have different raw keystroke costs.",
    },
    {
      type: "paragraph",
      text: "Use your first clean result as a personal baseline under one input method. If you start at 28 WPM with 94% accuracy using Romaji IME, first improve conversion accuracy and reduce candidate-selection errors before comparing yourself with another typist using Kana input.",
    },

    { type: "heading", text: "Accuracy First, Then Speed", id: "accuracy-first" },
    {
      type: "paragraph",
      text: "Japanese typing errors are often conversion errors rather than missing keys. A quick phonetic sequence followed by the wrong kanji can look polished while being semantically wrong. Slow down enough to verify the committed text.",
    },
    {
      type: "paragraph",
      text: "Practice a sentence such as \"日本語の入力は、正確な変換と毎日の練習で上達します。\" Type the reading, convert carefully, confirm the intended kanji and punctuation, then repeat the sentence with a smoother rhythm.",
    },

    { type: "heading", text: "A 6-Week Japanese Typing Practice Plan", id: "six-week-plan" },
    { type: "subheading", text: "Weeks 1-2: Lock In One Input Mode" },
    {
      type: "paragraph",
      text: "Choose Romaji or Kana and stay with it for your benchmark. Practice hiragana, common particles, small っ, small ゃゅょ and basic conversion without chasing speed.",
    },
    { type: "subheading", text: "Weeks 3-4: Improve Conversion and Mixed Script" },
    {
      type: "paragraph",
      text: "Add common kanji phrases, katakana loanwords, numbers, Latin acronyms and punctuation. Keep a list of conversion errors and practice those readings in context rather than memorizing candidate positions.",
    },
    { type: "subheading", text: "Weeks 5-6: Build Sustained IME Rhythm" },
    {
      type: "paragraph",
      text: "Mix 30-second checks with 60- and 120-second passages. Longer tests reveal whether candidate selection and punctuation accuracy fall after the first minute. Review the recurring conversion problem, then return to fresh text.",
    },

    { type: "heading", text: "A Simple 20-Minute Japanese Routine", id: "daily-routine" },
    {
      type: "paragraph",
      text: "Warm up with hiragana and your chosen input mode, then spend several minutes on small kana, katakana or conversion patterns that caused previous mistakes. Take one normal-speed test and finish by reviewing committed-text errors rather than only the WPM number.",
    },
    {
      type: "paragraph",
      text: "If the wrong kanji keeps appearing, practice the phrase in context. If small っ is missing, drill doubled-consonant Romaji. If katakana slows you down, use a short loanword list and F7 or your preferred mode workflow.",
    },

    { type: "heading", text: "Use Custom Text for Real Japanese Vocabulary", id: "custom-text" },
    {
      type: "paragraph",
      text: "Typing Globe's Custom Typing Test is useful for study notes, workplace terminology, game localization, customer-support phrases, research vocabulary or your own Japanese writing. Use text you have the right to practice with and keep a fresh standard passage as a separate benchmark.",
    },
    {
      type: "paragraph",
      text: "Familiar custom text becomes easier through repetition, so use it for targeted IME repair rather than as your only measure of progress.",
    },

    { type: "heading", text: "Okurigana Makes Conversion More Than a Kanji Lookup", id: "okurigana" },
    {
      type: "paragraph",
      text: "Japanese verbs and adjectives often combine kanji with following hiragana, as in 書く, 読んだ, 高い and 新しい. The hiragana ending carries grammatical information, so accurate typing requires the correct conversion boundary as well as the correct kanji.",
    },
    {
      type: "paragraph",
      text: "When conversion selects too much or too little of the phrase, adjust the segment instead of accepting a visually plausible result. Practice ordinary verb and adjective forms so the kanji-plus-hiragana pattern becomes familiar.",
    },

    { type: "heading", text: "Particles Can Be Easy to Read but Easy to Mistype", id: "particles" },
    {
      type: "paragraph",
      text: "Japanese particles such as は, へ and を are common and short, which makes them easy to skip when typing quickly. Their pronunciation in context can differ from what a beginner expects from the kana spelling, so visual copying is safer than typing purely from sound.",
    },
    {
      type: "paragraph",
      text: "Practice full sentences and keep your eyes on the source. A speed test measures the written Japanese character, not whether a spoken phrase sounded approximately correct in your head.",
    },

    { type: "heading", text: "Candidate Segmentation Is a Real Advanced Skill", id: "candidate-segmentation" },
    {
      type: "paragraph",
      text: "Long phonetic strings can produce many possible conversion candidates. Experienced Japanese input is often efficient because users convert at sensible phrase boundaries rather than one character at a time or an entire complex sentence at once.",
    },
    {
      type: "paragraph",
      text: "For practice, type short meaningful chunks, confirm the intended kanji, then continue. This reduces expensive backtracking when the IME chooses the wrong homophone deep inside a long composition.",
    },

    { type: "heading", text: "Prediction Can Help, but It Changes the Task", id: "prediction" },
    {
      type: "paragraph",
      text: "Microsoft IME includes prediction candidates. Accepting a predicted phrase can reduce physical keystrokes, which is useful in real work but complicates speed comparisons between users who rely on different prediction settings.",
    },
    {
      type: "paragraph",
      text: "If you want a clean training benchmark, keep prediction settings consistent from session to session. If your goal is real productivity, use prediction normally and treat the score as a workflow measure rather than a pure finger-speed test.",
    },

    { type: "heading", text: "Japanese Text Can Mix Full-Width and Half-Width Forms", id: "width-forms" },
    {
      type: "paragraph",
      text: "Data-entry environments sometimes distinguish full-width and half-width forms for numbers, Latin letters or katakana. Microsoft IME provides explicit conversion modes for these forms because they can matter in forms, legacy systems and technical data.",
    },
    {
      type: "paragraph",
      text: "Do not add width complexity to beginner passages unnecessarily. But if your real work requires a specific width convention, use Custom Typing Test material that reproduces it exactly and keep that benchmark separate from ordinary prose.",
    },

    { type: "heading", text: "Why Raw Keystrokes and Final Characters Should Stay Separate", id: "keystrokes-vs-characters" },
    {
      type: "paragraph",
      text: "Romaji input can require several Latin keys to create one kana, while prediction can commit several Japanese characters after fewer explicit keystrokes. Kana input has a different mapping again. These workflows make \"characters per minute\" ambiguous unless the product states whether it counts source characters, committed characters or physical key events.",
    },
    {
      type: "paragraph",
      text: "For Typing Globe, the clearest public metric is the text result it actually computes. If a future Japanese-specific CPM or KPM metric is added, document the unit and IME behavior so users know exactly what they are comparing.",
    },

    { type: "heading", text: "Common Japanese Typing Mistakes to Watch", id: "common-mistakes" },
    {
      type: "list",
      items: [
        "Treating JIS hardware as a third input method instead of distinguishing Romaji vs. Kana input",
        "Accepting the first kanji candidate without checking context",
        "Missing small っ or small ゃゅょ in Romaji input",
        "Dropping the katakana long-vowel mark ー",
        "Comparing Romaji and Kana WPM as if they require the same raw keystrokes",
        "Converting WPM directly into characters per minute and calling it a Japanese professional standard",
      ],
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq-section" },
    {
      type: "faq",
      items: [
        {
          question: "Should I use Romaji or Kana input?",
          answer:
            "Use the method that matches your real workflow. Microsoft IME supports both Romaji and Kana input. Romaji is familiar to QWERTY users; Kana requires a different key map. Keep one method consistent when comparing progress.",
        },
        {
          question: "Is JIS a separate Japanese input method?",
          answer:
            "Not in the same sense. JIS refers to Japanese hardware/layout conventions. The IME input choice is typically Romaji or Kana, and Japanese hardware keyboards provide dedicated keys that make those modes easier to control.",
        },
        {
          question: "How does Japanese IME conversion work?",
          answer:
            "You enter a reading in hiragana through Romaji or Kana input, then the IME offers conversion candidates such as kanji. You choose the intended candidate and commit it. Microsoft's example types haru → はる and converts it to 春.",
        },
        {
          question: "What do F6 through F10 do in Microsoft IME?",
          answer:
            "Microsoft documents F6 for hiragana, F7 for full-width katakana, F8 for half-width katakana, F9 for full-width alphanumeric and F10 for half-width alphanumeric conversion.",
        },
        {
          question: "Why should Japanese WPM be interpreted carefully?",
          answer:
            "IME composition means several physical keystrokes can produce one committed Japanese character. A final-text WPM score therefore does not directly equal raw keystrokes per minute and should be compared under the same input method.",
        },
        {
          question: "What is a good Japanese typing speed?",
          answer:
            "There is no transparent universal Japanese WPM standard across Romaji, Kana, IME settings and job types. Use your own baseline and compare similar tests with the same input method; follow a specific employer's test rules when they exist.",
        },
      ],
    },

    { type: "heading", text: "Test Your Japanese Typing Speed Now", id: "cta-heading" },
    {
      type: "cta",
      text: "Start the Japanese Typing Test · 日本語 above and type at the pace that feels natural today. Check WPM and accuracy when the test ends, then notice whether the slowdown came from raw keying, small kana, script switching, candidate selection, or punctuation. Return after focused practice and test again with the same input mode, duration and similar difficulty. The goal is not to beat an invented national average. It is to make 日本語入力 cleaner, faster and more reliable.",
    },
  ],
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": "https://www.typingglobe.com/test/japanese-typing-test#app",
      name: "Japanese Typing Test",
      url: "https://www.typingglobe.com/test/japanese-typing-test",
      description:
        "Free Japanese typing test for measuring WPM and accuracy with Japanese IME input, hiragana, katakana, kanji and mixed-script text.",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      inLanguage: ["en", "ja"],
      publisher: { "@type": "Organization", name: "Typing Globe", url: "https://www.typingglobe.com/" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.typingglobe.com/test/japanese-typing-test#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Should I use Romaji or Kana input?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use the method that matches your real workflow. Microsoft IME supports both Romaji and Kana input. Romaji is familiar to QWERTY users; Kana requires a different key map. Keep one method consistent when comparing progress.",
          },
        },
        {
          "@type": "Question",
          name: "Is JIS a separate Japanese input method?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not in the same sense. JIS refers to Japanese hardware/layout conventions. The IME input choice is typically Romaji or Kana, and Japanese hardware keyboards provide dedicated keys that make those modes easier to control.",
          },
        },
        {
          "@type": "Question",
          name: "How does Japanese IME conversion work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You enter a reading in hiragana through Romaji or Kana input, then the IME offers conversion candidates such as kanji. You choose the intended candidate and commit it. Microsoft's example types haru → はる and converts it to 春.",
          },
        },
        {
          "@type": "Question",
          name: "What do F6 through F10 do in Microsoft IME?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Microsoft documents F6 for hiragana, F7 for full-width katakana, F8 for half-width katakana, F9 for full-width alphanumeric and F10 for half-width alphanumeric conversion.",
          },
        },
        {
          "@type": "Question",
          name: "Why should Japanese WPM be interpreted carefully?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IME composition means several physical keystrokes can produce one committed Japanese character. A final-text WPM score therefore does not directly equal raw keystrokes per minute and should be compared under the same input method.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good Japanese typing speed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no transparent universal Japanese WPM standard across Romaji, Kana, IME settings and job types. Use your own baseline and compare similar tests with the same input method; follow a specific employer's test rules when they exist.",
          },
        },
      ],
    },
  ],
};

export default content;
