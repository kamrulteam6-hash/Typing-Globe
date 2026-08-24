import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Latin Typing Test · Latina | WPM & Accuracy",
  seoDescription:
    "Take a free Latin typing test and check WPM and accuracy. Practice Classical Latin spelling, I/V conventions, macrons, punctuation and scholarly transcription.",
  researchedKeywords: [
    "Latin typing speed test",
    "Latin WPM test",
    "Classical Latin typing",
    "Latin macron typing",
    "Latin transcription practice",
    "probatio scribendi Latine",
    "celeritas scribendi",
    "exercitatio Latina",
    "textus Latinus",
    "macra Latina",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Latin typing looks easy because the letters are familiar, but a serious Latin page has to make one choice explicit: which editorial convention is being typed? Classical inscriptions, school texts with macrons, modern scholarly editions, ecclesiastical Latin, and scientific names can all use slightly different letter and punctuation conventions.",
        "Typing Globe's live test currently offers 15, 30, 60, and 120-second modes, easy, medium, and hard passages, one- or two-paragraph options, shuffle, custom text, WPM, and accuracy. The strongest benchmark is therefore consistent transcription under one clearly defined text convention, not an invented \"professional Latin\" speed band.",
      ],
    },

    { type: "heading", text: "What Is a Latin Typing Test?", id: "what-is-latin-typing" },
    {
      type: "paragraph",
      text: "A Latin typing test measures how quickly and accurately you reproduce Latin text as printed in the source. That last phrase matters: the mechanical task changes when an edition uses macrons, consonantal I/J conventions, U/V distinctions, abbreviations, editorial punctuation, or specialized scientific notation.",
    },
    {
      type: "paragraph",
      text: "Use source fidelity as the central rule. If the passage prints iuvenis, type iuvenis. If a classroom edition prints jūvenis or marks vowel length with macrons, copy those characters exactly rather than silently converting the edition into your preferred Latin style.",
    },

    { type: "heading", text: "The Classical Latin Alphabet and Modern Editorial Conventions", id: "classical-alphabet-conventions" },
    {
      type: "paragraph",
      text: "Dickinson College's Allen and Greenough grammar describes the traditional Latin alphabet as lacking J, U, and W. It also explains that ancient I and V served both vowel and consonant functions. Modern editors commonly separate vowel u from consonantal v, and some traditions also use j for consonantal i.",
    },
    {
      type: "paragraph",
      text: "That means \"Latin uses a 23-letter alphabet\" is useful only when the convention is explained. A modern Latin student may still type U every day because the edition being studied uses U/V differentiation. Typing Globe should not imply that J or U are simply errors in all Latin contexts.",
    },

    { type: "heading", text: "I and J: Do Not Normalize the Source Mid-Test", id: "i-and-j" },
    {
      type: "paragraph",
      text: "Classical spelling used I for both the vowel /i/ and consonantal /j/ sound. Many modern school and scholarly editions keep I/i for both, while some ecclesiastical, pedagogical, or older modern editions use J/j in selected words.",
    },
    {
      type: "paragraph",
      text: "A typing test should not try to enforce one historical theory while the user is copying a passage. If the source says Iulius, type Iulius; if the chosen edition says Julius, copy Julius. The benchmark is exact transcription, not editorial conversion.",
    },

    { type: "heading", text: "U and V Need the Same Editorial Discipline", id: "u-and-v" },
    {
      type: "paragraph",
      text: "Ancient Latin used V for both vowel and consonant functions in monumental capitals, while modern editions typically print u for the vowel and v for the consonant. Dickinson's grammar explicitly uses U for vowel u and V for consonantal u in its editorial convention.",
    },
    {
      type: "paragraph",
      text: "That makes words such as iuvenis a useful practice example: the letters look modern, but they represent an editorial decision. Keep the convention consistent throughout a passage instead of switching between V-only and U/V spelling.",
    },

    { type: "heading", text: "Macrons Are Useful, but the Current Page Oversimplifies Their History", id: "macrons-history" },
    {
      type: "paragraph",
      text: "The live page says ancient Latin \"used no diacritics at all.\" That is too absolute. Cambridge research on Roman orthography documents the ancient apex, a mark used above or beside vowels to indicate length, and also i-longa for certain long i sounds.",
    },
    {
      type: "paragraph",
      text: "Modern macrons ā, ē, ī, ō, ū are not the same graphic system as the ancient apex. They are widely used in dictionaries and teaching editions to make vowel quantity explicit. The accurate distinction is that modern macrons are editorial or pedagogical marks, while ancient writers did sometimes mark vowel length with other devices.",
    },

    { type: "heading", text: "Macron Practice", id: "macron-practice" },
    {
      type: "table",
      headers: ["Character", "Typing Focus", "Practice Examples"],
      rows: [
        ["ā / Ā", "long a", "māter, Rōmānus, amāre"],
        ["ē / Ē", "long e", "vidēre, mē, habēre"],
        ["ī / Ī", "long i", "fīlius, dīcere, vīta"],
        ["ō / Ō", "long o", "Rōma, nōmen, dōnum"],
        ["ū / Ū", "long u", "lūna, tū, mūrus"],
      ],
    },
    {
      type: "paragraph",
      text: "If your course or edition uses macrons, practice them from the beginning. Typing unmarked a every time and adding ā later trains the wrong motor pattern for that specific source. If your edition omits macrons, do not add them during the test simply because you know the vowel is long.",
    },

    { type: "heading", text: "Apex vs. Macron: Why the Difference Matters", id: "apex-vs-macron" },
    {
      type: "paragraph",
      text: "The ancient apex was used selectively rather than placed over every long vowel. Cambridge's study cites Quintilian's discussion of using an apex where vowel length helps distinguish meaning. A modern classroom text that marks every long vowel with a macron is therefore a teaching convention, not a photographic copy of Roman spelling.",
    },
    {
      type: "paragraph",
      text: "This distinction improves both historical accuracy and user trust: students learn why they see ā in textbooks without being told that Romans never used any length mark.",
    },

    { type: "heading", text: "Punctuation and Word Spacing Are Editorial Too", id: "punctuation-editorial" },
    {
      type: "paragraph",
      text: "Ancient inscriptions and manuscripts do not map neatly onto modern punctuation habits. Contemporary editions usually add spaces, commas, periods, quotation marks, and capitalization according to editorial practice.",
    },
    {
      type: "paragraph",
      text: "For typing practice, do not attempt to \"restore\" ancient punctuation while the source uses modern editorial punctuation. Copy exactly what is displayed. This keeps the exercise measurable and avoids mixing paleography with keyboard training.",
    },

    { type: "heading", text: "Latin Is Not Mechanically Identical to English", id: "not-identical-to-english" },
    {
      type: "paragraph",
      text: "Unmarked modern Latin can be typed on a standard Latin-letter keyboard, but that does not make the task identical to English. Vocabulary familiarity, inflected endings, unfamiliar letter sequences, proper names, macrons, and editorial conventions can all change reading and typing rhythm.",
    },
    {
      type: "paragraph",
      text: "The current page's implication that English WPM benchmarks transfer directly to Latin should be removed. Standardized WPM can be calculated the same way, but comparable scores do not prove identical cognitive difficulty.",
    },

    { type: "heading", text: "Long Inflected Forms Reward Reading Ahead", id: "long-inflected-forms" },
    {
      type: "paragraph",
      text: "Latin endings carry case, number, tense, voice, mood, and person information, so many words are morphologically dense. Practice seeing the stem and ending as one movement rather than waiting until you have consciously parsed the grammar.",
    },
    {
      type: "paragraph",
      text: "Useful forms include civitatem, imperatoribus, scripserunt, intellegere, peregrinationem, observationem, appellationibus, and responderunt. The goal during a speed test is recognition, not grammatical analysis.",
    },

    { type: "heading", text: "Doubled Consonants Need Exact Control", id: "doubled-consonants" },
    {
      type: "paragraph",
      text: "Latin contains doubled consonants in common vocabulary and names. A fast typist can lose one letter in littera, annus, bellum, appellare, accipere, or currere because the result still looks plausible.",
    },
    {
      type: "paragraph",
      text: "Drill the complete word several times, then place it back into a sentence. This is more transferable than tapping the same key repeatedly without context.",
    },

    { type: "heading", text: "Names, Abbreviations, and Roman Numerals", id: "names-abbreviations-numerals" },
    {
      type: "paragraph",
      text: "Classical and historical Latin texts often contain personal names, conventional abbreviations, Roman numerals, or editorial expansions. These can disrupt normal prose rhythm and deserve separate practice if your academic work uses them.",
    },
    {
      type: "paragraph",
      text: "Use Custom Typing Test for the material you actually transcribe: inscriptions, liturgical text, medieval charters, scientific nomenclature, or classroom prose. Domain-specific practice is more useful than a generic list of rare forms.",
    },

    { type: "heading", text: "Scientific and Ecclesiastical Latin Are Different Workflows", id: "scientific-ecclesiastical" },
    {
      type: "paragraph",
      text: "Scientific names use Latin or Latinized binomials inside modern-language documents, while ecclesiastical Latin often appears in liturgical or institutional contexts. Neither task is identical to copying a Ciceronian prose passage.",
    },
    {
      type: "paragraph",
      text: "Keep benchmarks separate when punctuation, capitalization, italics, macrons, abbreviations, or modern-language switching change the workload. One generic Latin WPM score cannot represent every domain equally well.",
    },

    { type: "heading", text: "Macron Input Should Be Practical, Not a Copy-and-Paste Ritual", id: "macron-input-practical" },
    {
      type: "paragraph",
      text: "If macrons are part of your normal work, use an input method that lets you enter ā, ē, ī, ō, and ū reliably without stopping for Character Map every few words. Unicode-friendly keyboard layouts, compose methods, or text-expansion workflows can all work if they are consistent.",
    },
    {
      type: "paragraph",
      text: "Do not benchmark a macronized text with a workflow that requires manual copy-and-paste for every marked vowel. That measures interface friction more than Latin typing fluency.",
    },

    { type: "heading", text: "How WPM Works with Latin", id: "how-wpm-measured" },
    {
      type: "paragraph",
      text: "Typing Globe can use the same standardized five-character WPM method used for other Latin-script pages. That gives a consistent character-output metric even when Latin words vary in length.",
    },
    {
      type: "paragraph",
      text: "Do not call the result an exact measure of reading proficiency, translation ability, or editorial expertise. A user can type a familiar passage quickly without understanding every sentence, and a strong Latinist may type slowly because the text uses unfamiliar macron or punctuation conventions.",
    },

    { type: "heading", text: "What Is a Good Latin Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no transparent dataset supporting the current page's 20–70+ WPM ladder or claims that 60–70 WPM represents professional classicists and editors. Those categories should be removed unless Typing Globe can publish a real Latin transcription dataset and methodology.",
    },
    {
      type: "paragraph",
      text: "Use your first clean result as a personal baseline. If you begin at 38 WPM with 96% accuracy, aim to preserve that accuracy when adding macrons or more difficult prose rather than chasing a fictional professional threshold.",
    },

    { type: "heading", text: "A 6-Week Latin Typing Practice Plan", id: "six-week-plan" },
    { type: "subheading", text: "Weeks 1-2: Fix One Editorial Convention" },
    {
      type: "paragraph",
      text: "Choose the exact Latin style you normally read: I/J convention, U/V convention, macrons or no macrons. Stay consistent so your hands learn the text you actually need.",
    },
    { type: "subheading", text: "Weeks 3-4: Add Inflections and Difficult Letter Patterns" },
    {
      type: "paragraph",
      text: "Practice longer prose, doubled consonants, names, and repeated endings. Keep a small error list and drill the whole word rather than isolated letters.",
    },
    { type: "subheading", text: "Weeks 5-6: Add Domain-Specific Text" },
    {
      type: "paragraph",
      text: "Use longer passages plus custom material from your course, liturgy, research, or scientific work. Compare only tests using similar editorial conventions.",
    },

    { type: "heading", text: "A Simple 20-Minute Routine", id: "daily-routine" },
    {
      type: "paragraph",
      text: "Warm up with common Latin words, spend several minutes on your recurring spelling or macron errors, take one normal-speed passage, then review the exact characters that failed.",
    },
    {
      type: "paragraph",
      text: "If your work rarely uses macrons, do not spend half the session on them. Practice the orthography that matches your real use case.",
    },

    { type: "heading", text: "Common Latin Typing Mistakes to Watch", id: "common-mistakes" },
    {
      type: "list",
      items: [
        "Treating J and U as universally wrong in every modern Latin edition",
        "Claiming ancient Latin used no vowel-length marks at all",
        "Confusing modern macrons with the ancient apex",
        "Changing I/J or U/V conventions while copying the passage",
        "Dropping a doubled consonant because the result still looks plausible",
        "Comparing macronized and unmacronized WPM as if the input workload were identical",
        "Treating unsupported 20–70+ WPM bands as professional Latin standards",
      ],
    },

    { type: "heading", text: "Latin Prose, Verse, and Inscriptions Create Different Typing Tasks", id: "prose-verse-inscriptions" },
    {
      type: "paragraph",
      text: "Prose passages usually give you familiar word spacing and modern editorial punctuation, while poetry may include line breaks, elision-sensitive forms, and unusual word order. Inscriptions can add abbreviations, capitals, damaged-text conventions, or editorial brackets. These are all Latin, but they are not the same typing workload.",
    },
    {
      type: "paragraph",
      text: "Keep separate benchmarks for prose, verse, and inscriptional transcription if you use all three. A single WPM number becomes less informative when the source format changes as much as the vocabulary.",
    },

    { type: "heading", text: "Brackets, Editorial Marks, and Critical Editions", id: "brackets-editorial-marks" },
    {
      type: "paragraph",
      text: "Scholarly editions can include square brackets, angle brackets, daggers, ellipses, superscript references, or editorial expansions. Those symbols may be more difficult to type than ordinary Latin letters and can interrupt touch-typing rhythm.",
    },
    {
      type: "paragraph",
      text: "If your academic work includes critical apparatus or epigraphic transcription, use Custom Typing Test with the actual editorial symbols you need. Do not compare that score directly with a plain classroom prose passage.",
    },

    { type: "heading", text: "Capitalization Conventions Vary by Edition", id: "capitalization-conventions" },
    {
      type: "paragraph",
      text: "Ancient monumental inscriptions often appear in capitals, while modern editions use normal sentence capitalization and lowercase text. Some ecclesiastical or ceremonial material also uses capitalization differently from a school textbook.",
    },
    {
      type: "paragraph",
      text: "Follow the source exactly. A typing test should not convert OMNIA to Omnia or vice versa while measuring speed, because capitalization changes both the keystrokes and the editorial form.",
    },

    { type: "heading", text: "Practice Familiar Morphological Families", id: "morphological-families" },
    {
      type: "paragraph",
      text: "One efficient Latin drill is to keep a familiar stem while changing endings: puella, puellae, puellam, puellarum; bonus, bona, bonum; scribo, scribis, scribit, scribimus. This reduces vocabulary difficulty and lets you focus on clean ending patterns.",
    },
    {
      type: "paragraph",
      text: "Later, mix the forms into full sentences so the skill transfers to normal prose instead of remaining a memorized paradigm exercise.",
    },

    { type: "heading", text: "Latin Keyboard Practice Should Match Your Study Method", id: "match-study-method" },
    {
      type: "paragraph",
      text: "A beginner translating sentence by sentence may benefit from short, punctuation-heavy passages. A scholar digitizing a manuscript needs longer sustained transcription. A teacher preparing worksheets may care more about macrons and consistent editorial spelling than raw speed.",
    },
    {
      type: "paragraph",
      text: "Set the practice text to the real task. The best Latin typing page helps users build a repeatable workflow rather than pretending one speed target fits every kind of Latin work.",
    },

    { type: "heading", text: "Frequently Asked Questions About Latin Typing", id: "faq-section" },
    {
      type: "faq",
      items: [
        {
          question: "How many letters are in the Classical Latin alphabet?",
          answer:
            "Traditional Classical Latin is commonly described with 23 letters, excluding J, U, and W. Ancient I and V served both vowel and consonant functions, while modern editors often use U and V separately and sometimes J.",
        },
        {
          question: "Did ancient Latin really have no diacritics?",
          answer:
            "No. Ancient Latin inscriptions could use the apex to mark vowel length and i-longa for certain long i sounds. Modern macrons are a different editorial convention used widely in teaching and reference works.",
        },
        {
          question: "Do I need macrons to type Latin correctly?",
          answer:
            "It depends on the source. Many editions omit them; dictionaries and teaching texts often include them. In a typing test, reproduce the source exactly.",
        },
        {
          question: "Is Latin typing the same as English typing?",
          answer:
            "The same standardized WPM formula can be used, but the task is not necessarily equally difficult. Vocabulary, inflections, macrons, names, and editorial conventions affect typing rhythm.",
        },
        {
          question: "Do I need a special Latin keyboard?",
          answer:
            "Usually not for unmarked modern Latin. If your text uses macrons or specialist symbols, use a Unicode-friendly input method that makes those characters practical.",
        },
        {
          question: "What is a good Latin typing speed?",
          answer:
            "There is no transparent universal Latin WPM benchmark for students, scholars, clergy, or editors. Use your own clean baseline and compare like-for-like passages.",
        },
      ],
    },

    { type: "heading", text: "Test Your Latin Typing Speed Now", id: "cta-heading" },
    {
      type: "cta",
      text: "Start the Latin Typing Test · Latina above and type at the pace that feels natural today. Check WPM and accuracy when the test ends, then review whether the mistakes came from vocabulary, doubled consonants, editorial punctuation, or macrons. Return after focused practice and retest with the same editorial convention. The goal is accurate, repeatable Latin transcription, not an invented \"professional classicist\" WPM band.",
    },
  ],
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": "https://www.typingglobe.com/test/latin-typing-speed-test#app",
      name: "Latin Typing Test",
      url: "https://www.typingglobe.com/test/latin-typing-speed-test",
      description:
        "Free Latin typing test for measuring WPM and accuracy with Classical and editorial Latin text, including I/V conventions and optional macrons.",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      inLanguage: ["en", "la"],
      publisher: { "@type": "Organization", name: "Typing Globe", url: "https://www.typingglobe.com/" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.typingglobe.com/test/latin-typing-speed-test#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many letters are in the Classical Latin alphabet?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Traditional Classical Latin is commonly described with 23 letters, excluding J, U, and W. Ancient I and V served both vowel and consonant functions, while modern editors often use U and V separately and sometimes J.",
          },
        },
        {
          "@type": "Question",
          name: "Did ancient Latin really have no diacritics?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Ancient Latin inscriptions could use the apex to mark vowel length and i-longa for certain long i sounds. Modern macrons are a different editorial convention used widely in teaching and reference works.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need macrons to type Latin correctly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on the source. Many editions omit them; dictionaries and teaching texts often include them. In a typing test, reproduce the source exactly.",
          },
        },
        {
          "@type": "Question",
          name: "Is Latin typing the same as English typing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The same standardized WPM formula can be used, but the task is not necessarily equally difficult. Vocabulary, inflections, macrons, names, and editorial conventions affect typing rhythm.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a special Latin keyboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually not for unmarked modern Latin. If your text uses macrons or specialist symbols, use a Unicode-friendly input method that makes those characters practical.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good Latin typing speed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no transparent universal Latin WPM benchmark for students, scholars, clergy, or editors. Use your own clean baseline and compare like-for-like passages.",
          },
        },
      ],
    },
  ],
};

export default content;
