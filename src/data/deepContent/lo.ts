import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Lao Typing Test · ລາວ | WPM & Accuracy",
  seoDescription:
    "Take a free Lao typing test and check WPM and accuracy. Practice Lao consonants, preposed vowels, tone marks ່ ້ ໊ ໋, combining marks and the Windows Lao keyboard.",
  researchedKeywords: [
    "Lao typing speed test",
    "Lao WPM test",
    "Lao keyboard test",
    "Lao Unicode typing",
    "ພາສາລາວ typing practice",
    "ທົດສອບພິມພາສາລາວ",
    "ຄວາມໄວພິມ",
    "ແປ້ນພິມລາວ",
    "ຝຶກພິມລາວ",
    "ພິມພາສາລາວ",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Lao typing is not just a line of consonants followed by vowels. Vowel signs can appear before, after, above, or below a consonant, tone marks stack with other marks, and ordinary Lao does not separate every word with a space. That makes character order and visual placement central to accurate typing.",
        "A reliable Lao typing page should therefore explain the script honestly: tone marks are real characters, some preposed vowels are encoded before the consonant, and WPM is a standardized character-output metric rather than a literal count of space-delimited Lao words.",
      ],
    },

    { type: "heading", text: "What Is a Lao Typing Test?", id: "what-is-lao-typing" },
    {
      type: "paragraph",
      text: "A Lao typing test measures how quickly and accurately you can reproduce ພາສາລາວ text. Lao letters, vowel signs, and tone marks combine around a base consonant, so visual placement and actual character order are both important.",
    },
    {
      type: "paragraph",
      text: "Typing Globe's live Lao tool offers 15, 30, 60, and 120-second modes, easy, medium, and hard passages, one- or two-paragraph options, shuffle, custom text, WPM, and accuracy.",
    },

    { type: "heading", text: "Lao Does Use Tone Marks", id: "lao-tone-marks" },
    {
      type: "paragraph",
      text: "The existing live page says Lao has 'no tone marks in the Latin sense,' but that wording is misleading. Unicode explicitly encodes four Lao tone marks: ່ MAI EK, ້ MAI THO, ໊ MAI TI, and ໋ MAI CATAWA.",
    },

    { type: "heading", text: "The Four Lao Tone Marks", id: "four-tone-marks" },
    {
      type: "table",
      headers: ["Tone Mark", "Unicode Name", "Typing Focus"],
      rows: [
        ["່", "mai ek", "combining tone mark"],
        ["້", "mai tho", "combining tone mark"],
        ["໊", "mai ti", "combining tone mark"],
        ["໋", "mai catawa", "combining tone mark"],
      ],
    },
    {
      type: "paragraph",
      text: "Tone in Lao depends on more than the mark alone, but the marks are real characters and must be typed when the source contains them.",
    },

    { type: "heading", text: "Lao Vowels Can Appear in Several Positions", id: "vowel-positions" },
    {
      type: "paragraph",
      text: "Lao vowel signs can render before, after, above, or below a consonant. Unlike Indic scripts such as Devanagari, some left-side Lao vowel signs are actually encoded before the consonant in memory, reflecting the historical Thai/Lao encoding model.",
    },
    {
      type: "paragraph",
      text: "That means 'always type the consonant first' is not a safe universal rule for Lao. Learn the sequence used by the Lao layout for each vowel pattern instead of guessing from the final visual shape.",
    },

    { type: "heading", text: "Combining Marks Stack Above and Below", id: "combining-marks-stack" },
    {
      type: "paragraph",
      text: "Several Lao vowels and tone marks combine around the same consonant. Unicode documents ordering constraints because two marks typed in an invalid sequence can be a real input error, not merely a font preference.",
    },
    {
      type: "paragraph",
      text: "When a mark appears in the wrong vertical position, check the character sequence. Do not assume the font will repair a logically invalid order.",
    },

    { type: "heading", text: "Lao Usually Does Not Use Spaces Between Words", id: "no-spaces-between-words" },
    {
      type: "paragraph",
      text: "Unicode states that regular word spacing is not used in Lao; spaces separate phrases or sentences instead. That is a major difference from English and a key correction to any explanation of Lao 'words per minute.'",
    },
    {
      type: "paragraph",
      text: "A standardized five-character WPM score can still be useful, but it should be described as normalized character output. It is not literally counting the number of Lao lexical words separated by spaces.",
    },

    { type: "heading", text: "The Windows Lao Keyboard", id: "windows-keyboard" },
    {
      type: "paragraph",
      text: "Microsoft provides a dedicated Lao keyboard with KLID 00000454, and Windows maps the lo-LA input profile to it. English US can remain installed as a secondary input profile.",
    },
    {
      type: "paragraph",
      text: "Before a timed test, type common consonants, a preposed vowel, an above/below vowel, and each tone mark. A quick setup check prevents an incorrect input layout from distorting the score.",
    },

    { type: "heading", text: "Lao Keyboard Muscle Memory Is Different from Thai", id: "lao-vs-thai-keyboard" },
    {
      type: "paragraph",
      text: "Lao and Thai scripts are related, but the alphabets and keyboard layouts are not identical. A Thai typist may recognize structural ideas yet still need separate Lao key-position practice.",
    },
    {
      type: "paragraph",
      text: "Keep Thai and Lao benchmarks separate. Similar-looking vowel placement does not mean the same physical keystroke or exact Unicode character.",
    },

    { type: "heading", text: "Special Lao Ligatures ໜ and ໝ", id: "lao-ligatures" },
    {
      type: "paragraph",
      text: "Unicode includes the Lao ligatures ໜ HO NO and ໝ HO MO. They represent combinations related to h plus n or m and have tonal implications. These are real Lao characters, not decorative font forms.",
    },
    {
      type: "paragraph",
      text: "If your source uses them, reproduce them exactly. If your keyboard enters an equivalent sequence in a specific workflow, make sure the final Unicode text matches the test's source character expectations.",
    },

    { type: "heading", text: "The Repetition Mark ໆ", id: "repetition-mark" },
    {
      type: "paragraph",
      text: "Lao also has the repetition mark ໆ, encoded separately in Unicode. It may appear in normal text and should be treated as a character-level typing target, not as doubled punctuation.",
    },
    {
      type: "paragraph",
      text: "Practice it only after the core consonants, vowels, and tone marks feel comfortable. It is useful to recognize, but it should not dominate beginner drills.",
    },

    { type: "heading", text: "How WPM Works with Lao Text", id: "how-wpm-measured" },
    {
      type: "paragraph",
      text: "Because Lao does not normally put spaces between every word, a five-character standardized WPM measure is more meaningful than simply counting space-delimited tokens. Typing Globe should explain the calculation clearly instead of suggesting it is counting ordinary Lao words.",
    },
    {
      type: "paragraph",
      text: "Do not artificially insert spaces into authentic Lao text only to make it look more like English. That changes the writing system and trains the wrong spacing habit.",
    },

    { type: "heading", text: "What Is a Good Lao Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no transparent national Lao WPM dataset supporting the current page's 15–55+ ladder or claims about administrative screens, bank staff, translators, and government typing speeds.",
    },
    {
      type: "paragraph",
      text: "Use your first clean result as a personal baseline. If you begin at 24 WPM with 92% accuracy, first reduce vowel-order and tone-mark errors. For a specific employer or ministry, use its own assessment if one is published.",
    },

    { type: "heading", text: "Accuracy First, Then Speed", id: "accuracy-first" },
    {
      type: "paragraph",
      text: "Lao typing errors often involve a correct base consonant with a wrong vowel or tone-mark sequence. Slow down enough to build the whole orthographic pattern correctly, then repeat the word until the sequence becomes automatic.",
    },
    {
      type: "paragraph",
      text: "Do not judge only by appearance. Two sequences can look similar in one font while behaving differently in search, cursor movement, or normalization.",
    },

    { type: "heading", text: "A 6-Week Lao Typing Practice Plan", id: "six-week-plan" },
    { type: "subheading", text: "Weeks 1-2: Core Consonants and Vowels" },
    {
      type: "paragraph",
      text: "Learn the Lao layout and practice common consonant-vowel patterns, especially preposed and above/below vowels. Reduce keyboard hunting before adding many tone marks.",
    },
    { type: "subheading", text: "Weeks 3-4: Tone Marks and Multi-Mark Syllables" },
    {
      type: "paragraph",
      text: "Add ່ ້ ໊ ໋ and practice valid mark order in common words. Keep an error list of sequences that repeatedly render incorrectly.",
    },
    { type: "subheading", text: "Weeks 5-6: Phrase-Level Rhythm" },
    {
      type: "paragraph",
      text: "Use longer authentic Lao passages without inserting English-style word spaces. Mix 60- and 120-second tests with custom text from work or study.",
    },

    { type: "heading", text: "A Simple 20-Minute Routine", id: "daily-routine" },
    {
      type: "paragraph",
      text: "Warm up with consonant-vowel patterns, drill one tone-mark family, take one timed passage, then inspect character-order errors instead of immediately chasing another score.",
    },
    {
      type: "paragraph",
      text: "If most errors involve one preposed vowel or one tone mark, build the next session around that exact sequence.",
    },

    { type: "heading", text: "Preposed Vowels Need Visual-to-Logical Discipline", id: "preposed-vowels" },
    {
      type: "paragraph",
      text: "Some Lao vowels appear to the left of a consonant and are encoded before that consonant. For a Latin-script typist, this can feel more intuitive visually than Khmer or Indic behavior, but it still requires learning the exact Lao keyboard sequence rather than applying one rule to every vowel.",
    },
    {
      type: "paragraph",
      text: "Practice one preposed-vowel family at a time, then mix it with tone marks and final consonants. This isolates whether your error comes from key location, ordering, or mark stacking.",
    },

    { type: "heading", text: "Lao Tone Marks Share Vertical Space with Vowels", id: "tone-marks-vertical-space" },
    {
      type: "paragraph",
      text: "Tone marks can appear above a consonant or above another combining element, and Unicode defines expected ordering so the stack renders correctly. A word may look crowded even when the sequence is valid.",
    },
    {
      type: "paragraph",
      text: "When two marks collide or appear reversed, check the input order before blaming the font. Rebuild the syllable slowly in a modern Unicode editor and compare it with the source.",
    },

    { type: "heading", text: "Phrase Spacing Changes How You Read Ahead", id: "phrase-spacing" },
    {
      type: "paragraph",
      text: "Because spaces separate phrases rather than every lexical word, a Lao typist cannot use the next space as a reliable signal that a word is ending. Reading ahead becomes more about recognizing syllable and phrase patterns inside a continuous run of text.",
    },
    {
      type: "paragraph",
      text: "Practice authentic paragraphs at normal spacing. Artificial word-by-word spaces make the passage easier in a way that does not transfer to real Lao documents.",
    },

    { type: "heading", text: "Lao Digits, Latin Digits, and Mixed Text", id: "lao-digits-mixed" },
    {
      type: "paragraph",
      text: "Modern Lao documents may contain Lao text beside Arabic numerals, Latin abbreviations, URLs, English names, or Thai terms. These mixed sequences break the normal rhythm and are worth practicing separately.",
    },
    {
      type: "paragraph",
      text: "Use Custom Typing Test for dates, prices, phone numbers, addresses, and bilingual notices if that reflects your real work. Do not treat mixed-script speed as identical to pure Lao WPM.",
    },

    { type: "heading", text: "Font and Browser Rendering Can Affect Stacked Marks", id: "font-rendering" },
    {
      type: "paragraph",
      text: "Lao combining marks require proper shaping and vertical placement. A poor font can make a correct sequence look crowded or misaligned, so a web typing tool should visually test its source passages across modern browsers and Lao-capable fonts.",
    },
    {
      type: "paragraph",
      text: "If users report a mark appearing in the wrong place, verify both the Unicode sequence and the rendering environment before assuming the user typed it incorrectly.",
    },

    { type: "heading", text: "Use Custom Text Without Changing Lao Orthography", id: "custom-text" },
    {
      type: "paragraph",
      text: "Custom practice is ideal for ministry terminology, NGO reports, school material, subtitles, customer service, or names. Paste the text as it is actually written, preserving phrase spaces and combining marks.",
    },
    {
      type: "paragraph",
      text: "Use repeated custom material to fix a weak sequence, then return to a fresh standard passage to see whether the skill transfers.",
    },

    { type: "heading", text: "Common Lao Typing Mistakes to Watch", id: "common-mistakes" },
    {
      type: "list",
      items: [
        "Claiming Lao has no tone marks",
        "Assuming every Lao vowel is typed after its consonant",
        "Inserting English-style spaces between every word",
        "Stacking vowel and tone marks in an invalid order",
        "Confusing Thai and Lao key positions or characters",
        "Ignoring Lao-specific characters such as ໜ, ໝ, or ໆ when present",
        "Publishing unsupported 15–55+ WPM/job bands as Lao national standards",
      ],
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq-section" },
    {
      type: "faq",
      items: [
        {
          question: "Does Lao have tone marks?",
          answer:
            "Yes. Unicode encodes four Lao tone marks: ່ mai ek, ້ mai tho, ໊ mai ti, and ໋ mai catawa.",
        },
        {
          question: "Does Lao put spaces between every word?",
          answer:
            "No. Unicode notes that regular word spacing is not used in Lao; spaces generally separate phrases or sentences.",
        },
        {
          question: "Are all Lao vowels typed after the consonant?",
          answer:
            "No. Some Lao vowel signs that appear to the left of a consonant are encoded before the consonant, while other vowels and marks follow and combine around it.",
        },
        {
          question: "Does Windows have a Lao keyboard?",
          answer:
            "Yes. Microsoft provides the Lao keyboard with KLID 00000454, and the lo-LA Windows input profile maps to it.",
        },
        {
          question: "What are ໜ and ໝ?",
          answer:
            "Unicode encodes them as Lao HO NO and HO MO ligatures. They are Lao characters with specific orthographic and tonal functions.",
        },
        {
          question: "What is a good Lao typing speed?",
          answer:
            "There is no transparent universal Lao WPM benchmark for every person or job. Use a personal baseline and compare similar authentic Lao tests over time.",
        },
      ],
    },

    { type: "heading", text: "Test Your Typing Speed Now", id: "cta-heading" },
    {
      type: "cta",
      text: "Start the Lao Typing Test · ລາວ above and type at the pace that feels natural today. Check WPM and accuracy when the test ends, then review the language-specific characters, sequences, or keyboard movements that interrupted your rhythm. Return after a few focused practice sessions and test again using the same layout, duration, and similar difficulty. The goal is not to beat an invented national average. It is to make your typing cleaner, steadier, and more comfortable every time you come back.",
    },
  ],
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": "https://www.typingglobe.com/test/lao-typing-speed-test#app",
      name: "Lao Typing Test",
      url: "https://www.typingglobe.com/test/lao-typing-speed-test",
      description:
        "Take a free Lao typing test and check WPM and accuracy. Practice Lao consonants, preposed vowels, tone marks ່ ້ ໊ ໋, combining marks and the Windows Lao keyboard.",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      inLanguage: ["en", "lo"],
      publisher: { "@type": "Organization", name: "Typing Globe", url: "https://www.typingglobe.com/" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.typingglobe.com/test/lao-typing-speed-test#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does Lao have tone marks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Unicode encodes four Lao tone marks: ່ mai ek, ້ mai tho, ໊ mai ti, and ໋ mai catawa.",
          },
        },
        {
          "@type": "Question",
          name: "Does Lao put spaces between every word?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Unicode notes that regular word spacing is not used in Lao; spaces generally separate phrases or sentences.",
          },
        },
        {
          "@type": "Question",
          name: "Are all Lao vowels typed after the consonant?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Some Lao vowel signs that appear to the left of a consonant are encoded before the consonant, while other vowels and marks follow and combine around it.",
          },
        },
        {
          "@type": "Question",
          name: "Does Windows have a Lao keyboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Microsoft provides the Lao keyboard with KLID 00000454, and the lo-LA Windows input profile maps to it.",
          },
        },
        {
          "@type": "Question",
          name: "What are ໜ and ໝ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unicode encodes them as Lao HO NO and HO MO ligatures. They are Lao characters with specific orthographic and tonal functions.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good Lao typing speed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no transparent universal Lao WPM benchmark for every person or job. Use a personal baseline and compare similar authentic Lao tests over time.",
          },
        },
      ],
    },
  ],
};

export default content;
