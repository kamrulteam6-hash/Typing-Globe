import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Korean Typing Test · 한국어 | WPM & Accuracy",
  seoDescription:
    "Take a free Korean typing test and check WPM and accuracy. Practice Hangul syllable assembly, 2-set keyboard input, 받침, double consonants and Korean-English switching.",
  researchedKeywords: [
    "Korean typing speed test",
    "Hangul typing test",
    "Korean WPM test",
    "Korean keyboard test",
    "한글 타자 속도",
    "한글 타자 속도 테스트",
    "타자 연습",
    "한글 키보드",
    "두벌식 타자",
    "한국어 타이핑",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Korean typing is satisfying because every keystroke visibly builds the word in front of you. You enter individual jamo, and the IME assembles them into Hangul syllable blocks in real time. Once that composition becomes automatic, Korean stops feeling like character construction and starts feeling like normal writing.",
        "The right training target is not an invented office WPM table. It is clean jamo sequencing, stable 받침 handling, accurate double consonants and vowels, and confident switching between Hangul and English when real text requires both.",
      ],
    },

    { type: "heading", text: "What Is a Korean Typing Test?", id: "what-is-korean-typing" },
    {
      type: "paragraph",
      text: "A Korean typing test measures how quickly and accurately you can enter 한국어 text through a Korean input method. Hangul is built from jamo, and the IME assembles those jamo into syllable blocks as you type.",
    },
    {
      type: "paragraph",
      text: "Typing Globe's live Korean tool offers 15, 30, 60, and 120-second tests, easy, medium, and hard passages, one- or two-paragraph options, shuffle, custom text, WPM, and accuracy.",
    },

    { type: "heading", text: "Hangul Syllables Are Built from Jamo", id: "hangul-jamo" },
    {
      type: "paragraph",
      text: "Unicode describes modern Hangul syllables in terms of choseong, jungseong, and optional jongseong: an initial consonant, a vowel, and sometimes a final consonant. The IME combines these components into one square syllable block.",
    },

    { type: "heading", text: "Jamo Composition Stages", id: "jamo-composition-stages" },
    {
      type: "table",
      headers: ["Stage", "Jamo Role", "Example"],
      rows: [
        ["초성", "initial consonant", "ㅎ"],
        ["중성", "vowel", "ㅏ"],
        ["종성", "optional final consonant", "ㄴ"],
        ["Completed block", "assembled syllable", "한"],
      ],
    },
    {
      type: "paragraph",
      text: "That real-time assembly is the defining mechanical difference from English typing. You press jamo keys, but the screen continuously rebuilds the current syllable block.",
    },

    { type: "heading", text: "받침: Final Consonants Need Their Own Rhythm", id: "batchim-final-consonants" },
    {
      type: "paragraph",
      text: "A jongseong, commonly called 받침, sits at the bottom of a syllable block. When the next keystroke begins a new syllable, the IME has to decide whether a consonant remains as a final or becomes the next initial based on the input sequence.",
    },
    {
      type: "paragraph",
      text: "Practice words such as 한국, 사람, 학교, 입력, 정확, 읽기, and 앉다. Do not stare at the final block after every key; learn the sequence that produces it.",
    },

    { type: "heading", text: "Double Consonants Use Shift", id: "double-consonants-shift" },
    {
      type: "paragraph",
      text: "Modern Korean uses tense/double consonants such as ㄲ, ㄸ, ㅃ, ㅆ, and ㅉ. On the common Windows Korean keyboard, Shift is used with the related consonant keys to enter these forms.",
    },
    {
      type: "paragraph",
      text: "Useful drills include 꼭, 따로, 빨리, 쓰다, and 짜다. Treat the Shift movement as part of the word rather than a separate correction after a single consonant appears.",
    },

    { type: "heading", text: "Compound Vowels Are Also Built from Key Sequences", id: "compound-vowels" },
    {
      type: "paragraph",
      text: "Vowel combinations such as ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, and ㅢ are assembled from component vowel inputs in ordinary Korean typing. This adds a second kind of composition beyond final consonants.",
    },
    {
      type: "paragraph",
      text: "Practice words containing these combinations until your hands recognize the component sequence automatically: 과, 왜, 외국, 워드, 웨이, 위, 의.",
    },

    { type: "heading", text: "The Common 2-Set Keyboard Pattern", id: "two-set-keyboard" },
    {
      type: "paragraph",
      text: "Korean PC typing commonly uses the two-set, or 두벌식, arrangement in which consonant and vowel keys are separated into groups. The live page currently claims exact 99% usage and calls it a legal standard; those precise claims should be removed unless a current primary source supports them.",
    },
    {
      type: "paragraph",
      text: "For Typing Globe, it is enough to say that two-set input is the conventional mainstream layout users are most likely to encounter, while other Korean layouts exist.",
    },

    { type: "heading", text: "Windows Uses Microsoft IME for Korean", id: "windows-ime" },
    {
      type: "paragraph",
      text: "Microsoft's default ko-KR input profile uses Microsoft IME. Microsoft also lists the Korean keyboard identifier 00000412. Users can keep English input available and switch between Korean and Latin modes.",
    },
    {
      type: "paragraph",
      text: "Before a timed test, confirm that the IME is in Hangul mode. If you accidentally begin in English, the first few keystrokes can become Latin letters and make the score meaningless.",
    },

    { type: "heading", text: "Korean-English Switching Is a Real Workplace Skill", id: "korean-english-switching" },
    {
      type: "paragraph",
      text: "Modern Korean documents often mix Hangul with English product names, URLs, file names, code, model numbers, and email addresses. Being able to switch input mode without losing punctuation or spacing is part of practical Korean keyboard fluency.",
    },
    {
      type: "paragraph",
      text: "Use Custom Typing Test to practice realistic mixed text if your work includes bilingual support, software, academic citations, or online content.",
    },

    { type: "heading", text: "Backspace and Composition Behavior", id: "backspace-composition" },
    {
      type: "paragraph",
      text: "During active IME composition, Backspace behavior can differ from deleting a completed Latin character because the IME may remove the most recent jamo from the current syllable. That is useful, but it can also encourage excessive micro-correction.",
    },
    {
      type: "paragraph",
      text: "Practice clean sequences so you do not rely on constant rebuilding. A stable jamo pattern is faster than typing a block incorrectly and then dismantling it one component at a time.",
    },

    { type: "heading", text: "Spacing Matters in Korean", id: "spacing" },
    {
      type: "paragraph",
      text: "Korean uses spaces between syntactic units more than Japanese or Chinese, but correct spacing is still a language skill rather than a simple 'space after every word' rule. A typing test should reproduce the source spacing exactly.",
    },
    {
      type: "paragraph",
      text: "Do not add or remove spaces because a phrase looks more natural to you. Exact transcription is the cleanest rule for a speed test.",
    },

    { type: "heading", text: "How WPM Relates to Korean Keystrokes", id: "wpm-keystrokes" },
    {
      type: "paragraph",
      text: "Korean typing is sometimes discussed in keystrokes per minute, while international typing tools often use WPM. These measures are related but not identical because one visible Hangul syllable can require two, three, or more jamo keystrokes.",
    },
    {
      type: "paragraph",
      text: "Typing Globe should document its own WPM calculation and avoid presenting a simple 5× conversion as a universal Korean 타수/분 standard unless the counting method is explicitly matched.",
    },

    { type: "heading", text: "What Is a Good Korean Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "The current page publishes precise WPM and 타수/분 bands, claims an average adult score, and assigns minimum speeds to Samsung, Naver, Kakao, journalists, translators, and TOPIK. Those claims are too specific without current primary evidence.",
    },
    {
      type: "paragraph",
      text: "Use a personal baseline instead. If you start at 38 WPM with 94% accuracy, reduce 받침, double-consonant, and mode-switch errors before pushing faster. For TOPIK or an employer, use the current official instructions for that specific assessment.",
    },

    { type: "heading", text: "TOPIK Typing: Do Not Invent a Speed Cutoff", id: "topik-typing" },
    {
      type: "paragraph",
      text: "TOPIK IBT can involve typed responses, but a generic third-party recommendation should not be turned into an official characters-per-minute requirement. If Typing Globe wants an exam section, cite the current TOPIK instructions and describe only what they actually require.",
    },

    { type: "heading", text: "Accuracy First, Then Speed", id: "accuracy-first" },
    {
      type: "paragraph",
      text: "Korean errors often come from one wrong jamo changing the whole syllable. Slow down enough to assemble the correct block, especially when double consonants, compound vowels, or 받침 are involved.",
    },
    {
      type: "paragraph",
      text: "Try \"정확하고 빠른 한글 입력은 꾸준한 연습으로 좋아집니다.\" Type it cleanly first, then increase pace without sacrificing the syllable blocks.",
    },

    { type: "heading", text: "A 6-Week Korean Typing Practice Plan", id: "six-week-plan" },
    { type: "subheading", text: "Weeks 1-2: Jamo and Basic Blocks" },
    {
      type: "paragraph",
      text: "Stay in one Korean layout, practice simple consonant-vowel blocks, and learn the core jamo positions without looking down.",
    },
    { type: "subheading", text: "Weeks 3-4: 받침, Double Consonants, Compound Vowels" },
    {
      type: "paragraph",
      text: "Add final consonants, tense consonants, and compound vowels. Keep an error list of syllables that repeatedly break during composition.",
    },
    { type: "subheading", text: "Weeks 5-6: Mixed Text and Sustained Rhythm" },
    {
      type: "paragraph",
      text: "Mix 60- and 120-second Korean passages with realistic Korean-English custom text. Review whether mode switching or punctuation causes more errors than Hangul itself.",
    },

    { type: "heading", text: "A Simple 20-Minute Routine", id: "daily-routine" },
    {
      type: "paragraph",
      text: "Warm up with jamo and short syllables, drill one 받침 or compound-vowel pattern, take one timed passage, then review the exact syllables that failed.",
    },
    {
      type: "paragraph",
      text: "If errors cluster around one jamo or Shift consonant, isolate that movement. Do not solve every problem by retaking full tests.",
    },

    { type: "heading", text: "Complex Final Consonants Can Increase Error Rates", id: "complex-final-consonants" },
    {
      type: "paragraph",
      text: "Some Korean syllables end in complex final consonants such as ㄳ, ㄵ, ㄶ, ㄺ, ㄻ, ㄼ, ㄽ, ㄾ, ㄿ, ㅀ, and ㅄ. The IME assembles these from component jamo sequences, so one wrong key can reshape the entire final block.",
    },
    {
      type: "paragraph",
      text: "Do not begin with rare finals if basic 받침 is still unstable. Add them gradually in real words and focus on the exact jamo sequence rather than memorizing the final square shape.",
    },

    { type: "heading", text: "Syllable Reflow Can Surprise Beginners", id: "syllable-reflow" },
    {
      type: "paragraph",
      text: "While composing Hangul, the newest consonant can move from a final position into the next syllable when a vowel follows. That visual reflow is normal IME behavior, but it feels like the computer changed a character you had already typed.",
    },
    {
      type: "paragraph",
      text: "Practice slowly enough to watch several examples. Once you understand the rule, stop monitoring every intermediate shape and trust the jamo sequence.",
    },

    { type: "heading", text: "Korean Punctuation and Numbers Still Need Practice", id: "punctuation-numbers" },
    {
      type: "paragraph",
      text: "Most modern Korean digital text uses familiar punctuation, Arabic numerals, parentheses, slashes, and quotation marks. Their key positions may feel simple compared with Hangul, but they interrupt the consonant-vowel rhythm and can expose accidental English-mode switches.",
    },
    {
      type: "paragraph",
      text: "Use custom passages with dates, prices, percentages, model numbers, email addresses, and Korean-English product names if your real work includes them.",
    },

    { type: "heading", text: "Hanja Conversion Is Optional, Not Core Typing Speed", id: "hanja-conversion" },
    {
      type: "paragraph",
      text: "Microsoft keyboards can provide Hanja conversion, but ordinary modern Korean prose is primarily Hangul. Do not turn Hanja candidate selection into a required part of a basic Korean WPM benchmark unless the source passage actually contains Hanja.",
    },
    {
      type: "paragraph",
      text: "If your academic, legal, historical, or naming workflow uses Hanja, practice it separately because conversion adds a selection step that changes the task.",
    },

    { type: "heading", text: "Normalization Matters in Hangul Data", id: "normalization" },
    {
      type: "paragraph",
      text: "Unicode can represent modern Hangul as precomposed syllables or as conjoining jamo sequences that are canonically related. Most users never need to think about this, but web applications do: comparison code should normalize text consistently so visually equivalent Hangul does not create false mismatches.",
    },
    {
      type: "paragraph",
      text: "For Typing Globe engineering, this is a backend QA issue rather than visible user instruction. Keep the source text in a consistent normalization form and test copy/paste behavior.",
    },

    { type: "heading", text: "Use Custom Text for Korean-English Workflows", id: "custom-text" },
    {
      type: "paragraph",
      text: "Customer support, software, gaming, academic writing, and content creation often mix Korean with English. A custom passage lets you practice 한/영 switching in realistic places rather than toggling randomly.",
    },
    {
      type: "paragraph",
      text: "Keep a pure Korean passage as a stable benchmark. Mixed text is best treated as a separate practical skill because mode switching changes the keystroke workload.",
    },

    { type: "heading", text: "Common Korean Typing Mistakes to Watch", id: "common-mistakes" },
    {
      type: "list",
      items: [
        "Starting the test in English mode instead of Hangul mode",
        "Misplacing a consonant as 받침 or the next syllable initial",
        "Missing Shift on ㄲ, ㄸ, ㅃ, ㅆ, or ㅉ",
        "Breaking compound vowels into the wrong sequence",
        "Treating a visible syllable block as one keystroke",
        "Converting WPM to 타수/분 with an unsupported universal formula",
        "Publishing unsupported company/job/TOPIK speed thresholds as official standards",
      ],
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq-section" },
    {
      type: "faq",
      items: [
        {
          question: "How does Korean typing build syllable blocks?",
          answer:
            "The IME combines jamo into a block with an initial consonant, vowel, and optional final consonant. Unicode describes these roles as choseong, jungseong, and jongseong.",
        },
        {
          question: "What is 받침?",
          answer:
            "받침 is the final consonant position at the bottom of a Hangul syllable block. In Unicode terms it corresponds to the optional jongseong part of a modern syllable.",
        },
        {
          question: "Does Windows use Microsoft IME for Korean?",
          answer:
            "Yes. Microsoft's default ko-KR profile uses Microsoft IME, and Microsoft lists the Korean keyboard identifier as 00000412.",
        },
        {
          question: "Is Dubeolsik the only Korean keyboard?",
          answer:
            "No. Two-set input is the common mainstream pattern, but other Korean layouts exist. Typing Globe should avoid unsupported claims such as exact 99% usage unless sourced.",
        },
        {
          question: "Is there an official Korean WPM requirement for TOPIK?",
          answer:
            "Do not assume one. Use the current official TOPIK instructions for the specific test version. Third-party typing recommendations are not official cutoffs.",
        },
        {
          question: "What is a good Korean typing speed?",
          answer:
            "There is no transparent universal Korean WPM benchmark for every person or job. Use a personal baseline and compare similar tests over time.",
        },
      ],
    },

    { type: "heading", text: "Test Your Typing Speed Now", id: "cta-heading" },
    {
      type: "cta",
      text: "Start the Korean Typing Test · 한국어 above and type at the pace that feels natural today. Check WPM and accuracy when the test ends, then review the language-specific characters, sequences, or keyboard movements that interrupted your rhythm. Return after a few focused practice sessions and test again using the same layout, duration, and similar difficulty. The goal is not to beat an invented national average. It is to make your typing cleaner, steadier, and more comfortable every time you come back.",
    },
  ],
  schemas: [
    {
      "@context": "https://schema.org",
      "@type": ["SoftwareApplication", "WebApplication"],
      "@id": "https://www.typingglobe.com/test/korean-typing-test#app",
      name: "Korean Typing Test",
      url: "https://www.typingglobe.com/test/korean-typing-test",
      description:
        "Take a free Korean typing test and check WPM and accuracy. Practice Hangul syllable assembly, 2-set keyboard input, 받침, double consonants and Korean-English switching.",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      inLanguage: ["en", "ko"],
      publisher: { "@type": "Organization", name: "Typing Globe", url: "https://www.typingglobe.com/" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://www.typingglobe.com/test/korean-typing-test#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does Korean typing build syllable blocks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The IME combines jamo into a block with an initial consonant, vowel, and optional final consonant. Unicode describes these roles as choseong, jungseong, and jongseong.",
          },
        },
        {
          "@type": "Question",
          name: "What is 받침?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "받침 is the final consonant position at the bottom of a Hangul syllable block. In Unicode terms it corresponds to the optional jongseong part of a modern syllable.",
          },
        },
        {
          "@type": "Question",
          name: "Does Windows use Microsoft IME for Korean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Microsoft's default ko-KR profile uses Microsoft IME, and Microsoft lists the Korean keyboard identifier as 00000412.",
          },
        },
        {
          "@type": "Question",
          name: "Is Dubeolsik the only Korean keyboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Two-set input is the common mainstream pattern, but other Korean layouts exist. Typing Globe should avoid unsupported claims such as exact 99% usage unless sourced.",
          },
        },
        {
          "@type": "Question",
          name: "Is there an official Korean WPM requirement for TOPIK?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Do not assume one. Use the current official TOPIK instructions for the specific test version. Third-party typing recommendations are not official cutoffs.",
          },
        },
        {
          "@type": "Question",
          name: "What is a good Korean typing speed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no transparent universal Korean WPM benchmark for every person or job. Use a personal baseline and compare similar tests over time.",
          },
        },
      ],
    },
  ],
};

export default content;
