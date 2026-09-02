import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Croatian Typing Test · Hrvatski | WPM & Accuracy",
  seoDescription:
    "Take a free Croatian typing test and check WPM and accuracy. Practice č, ć, đ, š, ž, the Croatian keyboard, and real Hrvatski text.",
  researchedKeywords: [
    "Croatian typing speed test",
    "Croatian WPM test",
    "Croatian keyboard test",
    "test brzine tipkanja",
    "vježbe tipkanja hrvatski",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Croatian adds five diacritic letters to the Latin alphabet, and two of them — č and ć — look almost identical but represent genuinely different sounds. That single distinction accounts for a large share of everyday Croatian typing mistakes, since a font at normal reading size can make the two accents hard to tell apart at a glance.",
        "This test measures how quickly and accurately you can type real Croatian sentences, including its full set of diacritic letters.",
      ],
    },

    { type: "heading", text: "Č and Ć: Two Distinct Letters That Look Alike", id: "c-caron-vs-acute" },
    {
      type: "paragraph",
      text: "Č carries a caron and represents a harder sound, while ć carries an acute accent and represents a softer sound — and Croatian has minimal pairs that depend entirely on this distinction, such as kuča (a made-up but illustrative contrast) versus kuća (house). Because the caron and acute accent look similar in many fonts, this is the single most common Croatian typing error, and it's worth deliberate practice with real word pairs rather than treating the two marks as interchangeable.",
    },

    { type: "heading", text: "Đ Represents a Distinct Consonant", id: "dj-crossbar" },
    {
      type: "paragraph",
      text: "Đ (crossed d) marks its own consonant sound and appears in common words like đak (student) and rođendan (birthday). It has no visual similarity trap the way č/ć does, but it's easy to fall back to a plain d under time pressure, which — like the other diacritics — is a genuine spelling error rather than a stylistic simplification.",
    },

    { type: "heading", text: "Š and Ž Complete the Diacritic Set", id: "s-z-caron" },
    {
      type: "paragraph",
      text: "Š and ž, both marked with a caron, round out Croatian's five special letters and appear constantly in ordinary text — šuma (forest), život (life). Practicing them inside real words rather than as isolated symbols builds the habit of reaching for the accented form automatically.",
    },

    { type: "heading", text: "The Croatian Keyboard Layout", id: "keyboard" },
    {
      type: "paragraph",
      text: "The standard Croatian keyboard layout belongs to the QWERTZ family and provides dedicated keys for č, ć, đ, š, and ž, avoiding the need for Alt codes during regular typing. Switching between an English QWERTY layout and Croatian QWERTZ can produce occasional Y/Z slip-ups even for experienced typists — confirming the active input language before a timed test helps rule that out as the source of an error.",
    },

    { type: "heading", text: "What Is a Good Croatian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no published, verifiable universal benchmark for Croatian typing speed. Use your own first clean result as a baseline, and for a specific exam or employer's requirement, rely on that source's actual published rule rather than a generic number.",
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is the difference between č and ć?",
          answer:
            "Č uses a caron and represents a harder sound, while ć uses an acute accent and represents a softer sound. They are genuinely different letters, and the visual similarity between the two marks is the most common source of Croatian typing errors.",
        },
        {
          question: "What does đ represent in Croatian?",
          answer:
            "Đ, a d with a crossbar, marks its own distinct consonant sound and appears in common words like đak and rođendan. It is a separate letter, not a stylized d.",
        },
        {
          question: "Does Croatian use QWERTY or QWERTZ?",
          answer:
            "The standard Croatian keyboard layout is QWERTZ, which swaps the Y and Z positions found on a US QWERTY keyboard and provides direct keys for č, ć, đ, š, and ž.",
        },
        {
          question: "What is a good Croatian typing speed?",
          answer:
            "There is no verified universal benchmark. Track your own progress over time and use a specific employer or exam's published requirement when one actually exists.",
        },
      ],
    },

    {
      type: "cta",
      text: "Odaberite svoje vrijeme, počnite tipkati i odmah pogledajte svoju brzinu i točnost.",
    },
  ],
};

export default content;
