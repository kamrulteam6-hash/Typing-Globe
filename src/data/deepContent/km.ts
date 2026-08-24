import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Khmer Typing Test · ខ្មែរ | WPM & Accuracy",
  seoDescription:
    "Take a free Khmer typing test and check WPM and accuracy. Practice Khmer Unicode, coeng/subscript consonants, dependent vowels, shifters and Khmer keyboard layouts.",
  researchedKeywords: [
    "Khmer typing speed test",
    "Khmer WPM test",
    "Khmer keyboard test",
    "Khmer Unicode typing",
    "Khmer NIDA keyboard practice",
    "តេស្តវាយអក្សរខ្មែរ",
    "ល្បឿនវាយអក្សរ",
    "ក្តារចុចខ្មែរ",
    "វាយអក្សរខ្មែរ Unicode",
    "អនុវត្តវាយអក្សរ",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Khmer typing becomes much easier once you stop thinking of the script as a row of visual symbols and start thinking in Unicode sequences. A single cluster can contain a base consonant, coeng consonant, vowel sign, shifter, and other marks that the font rearranges around one compact shape.",
        "That is why a good Khmer typing page needs to teach logical input order, not only key locations. The skill is building correct Unicode text that remains correct when it moves to another browser, font, document, or device.",
      ],
    },

    { type: "heading", text: "What Is a Khmer Typing Test?", id: "what-is-khmer-typing" },
    {
      type: "paragraph",
      text: "A Khmer typing test measures how quickly and accurately you can reproduce ខ្មែរ text in Unicode. Khmer is visually dense because one orthographic syllable can combine a base consonant, one or more coeng consonants, a dependent vowel, shifters, and other marks.",
    },
    {
      type: "paragraph",
      text: "Typing Globe's live Khmer tool offers 15, 30, 60, and 120-second modes, easy, medium, and hard passages, one- or two-paragraph options, shuffle, custom text, WPM, and accuracy.",
    },

    { type: "heading", text: "Khmer Is a Unicode Shaping Script", id: "unicode-shaping-script" },
    {
      type: "paragraph",
      text: "Modern Khmer digital text is not a font trick. Unicode stores the characters in a defined sequence, then the font and shaping engine arrange subscript consonants, split vowels, and marks into the final visual cluster.",
    },
    {
      type: "paragraph",
      text: "That is why copying the visible shape from left to right can be misleading. Learn the logical keystroke order used by the Khmer input method instead of trying to reverse-engineer the final glyph after it appears.",
    },

    { type: "heading", text: "Base Consonants and Two Consonant Series", id: "consonant-series" },
    {
      type: "paragraph",
      text: "Khmer consonants historically fall into two series, and the same dependent vowel sign can be pronounced differently depending on the consonant series. For typing, the practical point is simple: the base consonant matters before you add the vowel sign.",
    },
    {
      type: "paragraph",
      text: "Do not treat a vowel sign as an independent Latin-style vowel key. It combines with the consonant cluster and the font renders the completed syllable.",
    },

    { type: "heading", text: "Coeng Builds Subscript Consonants", id: "coeng-subscript" },
    {
      type: "paragraph",
      text: "Unicode represents a Khmer subscript consonant, or coeng, with U+17D2 KHMER SIGN COENG followed by a consonant. Unicode's current Khmer syllable documentation allows up to two coeng sequences in an orthographic syllable in known modern usage.",
    },

    { type: "heading", text: "Khmer Cluster Patterns", id: "cluster-patterns" },
    {
      type: "table",
      headers: ["Pattern", "Underlying Idea", "Practice Focus"],
      rows: [
        ["Base + vowel", "one consonant plus dependent vowel", "learn common syllables"],
        ["Base + coeng + consonant", "subscript consonant cluster", "recognize stacked forms"],
        ["Base + coeng + consonant + vowel", "cluster plus dependent vowel", "keep logical order"],
        ["Base + two coengs + vowel", "more complex cluster", "advanced accuracy"],
      ],
    },
    {
      type: "paragraph",
      text: "The coeng mark is one of the most important Khmer typing skills because the subscript consonant may appear below or beside the base even though the input sequence is linear.",
    },

    { type: "heading", text: "Dependent Vowels Can Render Before, After, Above, Below, or Around", id: "dependent-vowels" },
    {
      type: "paragraph",
      text: "Khmer dependent vowels occupy several visual positions. Some vowel shapes are split across more than one side of the consonant cluster, which can make beginners think they typed the components in the wrong order.",
    },
    {
      type: "paragraph",
      text: "Trust the keyboard sequence and Unicode shaping. If the final cluster is wrong, review the encoded order rather than dragging the cursor around the visual pieces.",
    },

    { type: "heading", text: "Shifters and Diacritics Add Another Layer", id: "shifters-diacritics" },
    {
      type: "paragraph",
      text: "Khmer uses shifter signs and other marks that can alter vowel behavior or pronunciation. These marks are part of the orthographic cluster, not decorative symbols. In timed practice, a missing shifter can be a real character-level error.",
    },
    {
      type: "paragraph",
      text: "Practice them only after common consonant-vowel patterns and basic coeng sequences are comfortable. Beginner sessions should not be dominated by the rarest stacked combinations.",
    },

    { type: "heading", text: "Khmer Usually Does Not Put Spaces Between Every Word", id: "spacing" },
    {
      type: "paragraph",
      text: "Khmer spacing differs from English. Spaces often separate phrases or larger units rather than every lexical word. That means a space-count-based sense of 'word length' can be misleading in Khmer.",
    },
    {
      type: "paragraph",
      text: "A five-character standardized WPM metric can still be used, but Typing Globe should be transparent that WPM is a normalized character-output measure rather than a count of actual Khmer lexical words.",
    },

    { type: "heading", text: "Khmer and Khmer (NIDA) Are Separate Windows Layouts", id: "khmer-nida-layouts" },
    {
      type: "paragraph",
      text: "Microsoft currently lists two Windows Khmer layouts: Khmer with KLID 00000453 and Khmer (NIDA) with KLID 00010453. The default km-KH Windows input profile maps to Khmer 00000453.",
    },
    {
      type: "paragraph",
      text: "That is an important correction to the existing page: NIDA should not be described as the one universal modern layout or the Windows default. Users may encounter either layout depending on device, training, workplace, or installed input method.",
    },

    { type: "heading", text: "Unicode vs. Legacy Font-Based Khmer", id: "unicode-vs-legacy" },
    {
      type: "paragraph",
      text: "Older Khmer workflows sometimes relied on font-specific encodings, which could display correctly only when the matching font was installed. Unicode avoids that problem by assigning standard characters that can move between browsers, documents, and systems.",
    },
    {
      type: "paragraph",
      text: "For a modern web typing test, use Unicode Khmer source text. Do not train users to reproduce a legacy font encoding merely because an older office document still contains it.",
    },

    { type: "heading", text: "How to Add Khmer Input in Windows", id: "add-khmer-windows" },
    {
      type: "paragraph",
      text: "Add Khmer through Windows language settings, then confirm which Khmer layout is active. If your workplace uses NIDA, install and practice NIDA specifically rather than assuming the default Khmer layout has identical key positions.",
    },
    {
      type: "paragraph",
      text: "Before a timed test, type a few common Khmer words plus at least one coeng cluster and a dependent vowel. If the shaping looks wrong, solve the layout/font problem before using the score as a benchmark.",
    },

    { type: "heading", text: "Character Count, WPM, and Khmer Clusters", id: "character-count-wpm" },
    {
      type: "paragraph",
      text: "One visible Khmer cluster can contain several Unicode characters, so a screen that looks like one compact unit may require multiple keystrokes. That makes 'visible glyphs per minute' different from encoded characters per minute.",
    },
    {
      type: "paragraph",
      text: "Typing Globe should document what it counts. If WPM is based on typed characters, say so clearly and keep the method consistent across tests.",
    },

    { type: "heading", text: "What Is a Good Khmer Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no transparent nationwide Khmer WPM dataset supporting universal beginner, office, professional, and expert bands. The current page's job-oriented benchmarks should be removed unless Typing Globe can document the source and methodology.",
    },
    {
      type: "paragraph",
      text: "Use a personal baseline. If you begin slowly because coeng and dependent vowels still require conscious attention, focus first on accuracy and cluster formation. For a specific employer, use that employer's actual test if one exists.",
    },

    { type: "heading", text: "Accuracy First, Then Speed", id: "accuracy-first" },
    {
      type: "paragraph",
      text: "Khmer errors often come from cluster order rather than simple wrong-key substitutions. Slow down enough to build the correct base, coeng, vowel, and mark sequence, then repeat the same word until the visual shaping becomes predictable.",
    },
    {
      type: "paragraph",
      text: "Do not 'repair' a malformed cluster by adding random marks until it looks right. Learn the underlying sequence; otherwise the text may render differently in another font or application.",
    },

    { type: "heading", text: "A 6-Week Khmer Typing Practice Plan", id: "six-week-plan" },
    { type: "subheading", text: "Weeks 1-2: Base Consonants and Common Vowels" },
    {
      type: "paragraph",
      text: "Stay on one Khmer layout and practice frequent consonant-vowel combinations. Build confidence with simple clusters before adding heavy stacking.",
    },
    { type: "subheading", text: "Weeks 3-4: Add Coeng and Shifters" },
    {
      type: "paragraph",
      text: "Practice common subscript consonants and the shifters that appear in real words. Keep a list of malformed clusters and drill their exact input sequence.",
    },
    { type: "subheading", text: "Weeks 5-6: Longer Unicode Text" },
    {
      type: "paragraph",
      text: "Use 60- and 120-second passages to test whether cluster accuracy holds under sustained reading. Add custom text from school, work, or publishing vocabulary.",
    },

    { type: "heading", text: "A Simple 20-Minute Routine", id: "daily-routine" },
    {
      type: "paragraph",
      text: "Warm up with simple Khmer syllables, spend several minutes on coeng clusters, take one normal-speed passage, then inspect the exact character errors instead of only the WPM number.",
    },
    {
      type: "paragraph",
      text: "If the same cluster breaks repeatedly, isolate that word and rebuild it slowly in a plain Unicode editor before returning to the timed test.",
    },

    { type: "heading", text: "Learn the Difference Between Character Order and Visual Order", id: "character-vs-visual-order" },
    {
      type: "paragraph",
      text: "A Khmer cluster can place a vowel component to the left of a consonant even though the input sequence is defined by Khmer encoding rules rather than simple visual order. This is one of the biggest mental shifts for users coming from Latin-script typing.",
    },
    {
      type: "paragraph",
      text: "When a cluster looks wrong, avoid moving the cursor around the visible pieces and retyping them in screen order. Delete the cluster and rebuild the logical sequence from the base consonant outward.",
    },

    { type: "heading", text: "Word Boundaries and Line Breaking Are Not English-Like", id: "word-boundaries" },
    {
      type: "paragraph",
      text: "Because Khmer does not normally place a visible space after every word, line breaking and word segmentation may rely on dictionary-aware software or invisible opportunities rather than obvious spaces. That is another reason a typing test should avoid describing every space-delimited segment as a literal Khmer word.",
    },
    {
      type: "paragraph",
      text: "For custom practice, paste authentic Khmer prose with its original spacing. Do not insert extra spaces merely to make the passage easier to count.",
    },

    { type: "heading", text: "Khmer Digits and Latin Digits Can Both Appear", id: "khmer-digits" },
    {
      type: "paragraph",
      text: "Modern Khmer documents may contain Khmer numerals, European digits, dates, prices, URLs, and English abbreviations. These mixed forms require more than alphabet memory, especially when the input layout changes punctuation and number-row behavior.",
    },
    {
      type: "paragraph",
      text: "Add short practical lines to custom practice: dates, phone numbers, percentages, names, and web addresses. That improves real-world fluency without confusing it with a formal national typing exam.",
    },

    { type: "heading", text: "Font Rendering Is Part of Khmer QA", id: "font-rendering" },
    {
      type: "paragraph",
      text: "Khmer Unicode text depends on a shaping-capable font. A malformed display can come from the font or rendering engine even when the stored characters are correct, so publishers should test the page in modern Khmer-capable fonts and browsers.",
    },
    {
      type: "paragraph",
      text: "Typing Globe should keep source text normalized and visually review every difficulty level after content changes. A cluster that renders correctly in one font but collides in another can create false user errors.",
    },

    { type: "heading", text: "Practice Cluster Families Instead of Random Complexity", id: "cluster-families" },
    {
      type: "paragraph",
      text: "Take one base consonant and practice it with several dependent vowels, then add a common coeng sequence. This controlled progression teaches how the cluster grows and where errors enter.",
    },
    {
      type: "paragraph",
      text: "Once that is stable, move to words from your own school, workplace, or publishing vocabulary. Advanced Khmer typing should grow from recurring real clusters, not from assembling the rarest possible stack.",
    },

    { type: "heading", text: "Use Custom Text for Modern Unicode Workflows", id: "custom-text" },
    {
      type: "paragraph",
      text: "Custom passages are useful for NGO reports, government terminology, school material, subtitles, customer messages, and names. They are especially valuable when an organization previously used legacy fonts and is migrating to Unicode.",
    },
    {
      type: "paragraph",
      text: "Keep a standard fresh passage for benchmarking. Repeated custom text measures mastery of that material; fresh Unicode text measures transferable Khmer typing skill.",
    },

    { type: "heading", text: "Common Khmer Typing Mistakes to Watch", id: "common-mistakes" },
    {
      type: "list",
      items: [
        "Treating the visual order of split vowels as the required keystroke order",
        "Skipping U+17D2 coeng when a subscript consonant is required",
        "Adding marks in random order until the cluster only looks correct in one font",
        "Assuming Khmer (NIDA) is the only modern Windows Khmer layout",
        "Using legacy font encodings instead of Unicode source text",
        "Treating spaces as if they mark every Khmer word",
        "Publishing unsupported Khmer WPM/job bands as national standards",
      ],
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq-section" },
    {
      type: "faq",
      items: [
        {
          question: "What is a coeng in Khmer typing?",
          answer:
            "A coeng is the subscript-consonant mechanism. Unicode represents it with KHMER SIGN COENG followed by a consonant, and the shaping engine renders the consonant below or beside the base.",
        },
        {
          question: "Does Khmer put spaces between every word?",
          answer:
            "No. Khmer spaces commonly separate phrases or larger units rather than every lexical word. That is why a standardized character-based WPM measure should be explained carefully.",
        },
        {
          question: "Is Khmer (NIDA) the default Windows Khmer keyboard?",
          answer:
            "Not according to Microsoft's current default input profile. km-KH maps to Khmer 00000453, while Khmer (NIDA) is a separate layout with KLID 00010453.",
        },
        {
          question: "Why do Khmer vowels look like they move around the consonant?",
          answer:
            "Dependent vowels can render before, after, above, below, or around the consonant cluster. Unicode stores a logical character sequence and the font shapes the final visual form.",
        },
        {
          question: "Should I practice legacy Limon-style font typing?",
          answer:
            "Only if a specific legacy workflow requires it. For modern web and document interoperability, Unicode Khmer is the correct target.",
        },
        {
          question: "What is a good Khmer typing speed?",
          answer:
            "There is no transparent universal Khmer WPM benchmark for every person or job. Use a personal baseline and compare similar Unicode tests over time.",
        },
      ],
    },

    { type: "heading", text: "Test Your Typing Speed Now", id: "cta-heading" },
    {
      type: "cta",
      text: "Start the Khmer Typing Test · ខ្មែរ above and type at the pace that feels natural today. Check WPM and accuracy when the test ends, then review the language-specific characters, sequences, or keyboard movements that interrupted your rhythm. Return after a few focused practice sessions and test again using the same layout, duration, and similar difficulty. The goal is not to beat an invented national average. It is to make your typing cleaner, steadier, and more comfortable every time you come back.",
    },
  ],
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": "https://www.typingglobe.com/test/khmer-typing-speed-test#app",
      name: "Khmer Typing Test",
      url: "https://www.typingglobe.com/test/khmer-typing-speed-test",
      description:
        "Take a free Khmer typing test and check WPM and accuracy. Practice Khmer Unicode, coeng/subscript consonants, dependent vowels, shifters and Khmer keyboard layouts.",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      inLanguage: ["en", "km"],
      publisher: { "@type": "Organization", name: "Typing Globe", url: "https://www.typingglobe.com/" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.typingglobe.com/test/khmer-typing-speed-test#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a coeng in Khmer typing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A coeng is the subscript-consonant mechanism. Unicode represents it with KHMER SIGN COENG followed by a consonant, and the shaping engine renders the consonant below or beside the base.",
          },
        },
        {
          "@type": "Question",
          name: "Does Khmer put spaces between every word?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Khmer spaces commonly separate phrases or larger units rather than every lexical word. That is why a standardized character-based WPM measure should be explained carefully.",
          },
        },
        {
          "@type": "Question",
          name: "Is Khmer (NIDA) the default Windows Khmer keyboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not according to Microsoft's current default input profile. km-KH maps to Khmer 00000453, while Khmer (NIDA) is a separate layout with KLID 00010453.",
          },
        },
        {
          "@type": "Question",
          name: "Why do Khmer vowels look like they move around the consonant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dependent vowels can render before, after, above, below, or around the consonant cluster. Unicode stores a logical character sequence and the font shapes the final visual form.",
          },
        },
        {
          "@type": "Question",
          name: "Should I practice legacy Limon-style font typing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Only if a specific legacy workflow requires it. For modern web and document interoperability, Unicode Khmer is the correct target.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good Khmer typing speed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no transparent universal Khmer WPM benchmark for every person or job. Use a personal baseline and compare similar Unicode tests over time.",
          },
        },
      ],
    },
  ],
};

export default content;
