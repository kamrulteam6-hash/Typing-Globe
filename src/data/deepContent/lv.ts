import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Free Latvian Typing Test · Latviešu | WPM & Accuracy",
  seoDescription:
    "Take a free Latvian typing test and check WPM and accuracy. Practice ā č ē ģ ī ķ ļ ņ š ū ž, Latvian Standard keyboard input and real Latviešu text.",
  researchedKeywords: [
    "latvian typing test",
    "latvian typing speed test",
    "latvian WPM test",
    "latvian keyboard test",
    "latviešu rakstīšanas ātruma tests",
    "rakstīšanas ātrums",
    "latviešu tastatūra",
    "ātrrakstīšana",
    "rakstīšanas vingrinājumi",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Latvian is the official language of Latvia, spoken natively by around 1.5 million people, with additional speakers among the Latvian diaspora in Ireland, the United Kingdom, the United States, and elsewhere in the European Union. It belongs to the small Baltic language family, alongside only one other living relative, Lithuanian, making it one of Europe's more linguistically distinct national languages.",
        "Latvia's digital economy is unusually advanced for its size — the country has invested heavily in e-government services, and most public administration, banking, and business correspondence runs digitally in Latvian. There is no single famous national typing-speed exam, but typing fluency in Latvian, including its extended diacritic alphabet, is a genuine practical requirement for administrative, customer-service, translation, and data-entry roles across both the public and private sectors.",
        "This test times you typing real Latvian sentences, diacritics included, and reports your live words-per-minute score so you get an honest read on your actual typing speed in the language.",
      ],
    },

    { type: "heading", text: "How Latvian Typing Speed Is Measured", id: "wpm-explained" },
    {
      type: "paragraph",
      text: "This test scores Latvian typing in WPM (words per minute), following the standard convention of counting every five typed characters, including spaces, as one 'word.' Because Latvian words are frequently longer than English ones due to its heavily inflected grammar, and because several letters require diacritics, typing speed in Latvian often runs somewhat lower than English WPM for a typist of comparable raw dexterity.",
    },

    { type: "heading", text: "Keyboard Layout and Special Characters", id: "keyboard" },
    {
      type: "paragraph",
      text: "The standard Latvian keyboard layout is a QWERTY variant that places the language's diacritic letters — ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū, ž — on dedicated or Alt Gr-modified keys, replacing some punctuation positions found on the US layout. Many Latvian typists on non-Latvian keyboards instead use dead-key or Alt-code combinations.",
    },

    { type: "heading", text: "The 33-Letter Latvian Alphabet with Diacritics", id: "latvian-alphabet" },
    {
      type: "paragraph",
      text: "Modern standard Latvian uses an alphabet of 33 letters, including 11 diacritics: ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū, and ž. These are not optional style choices; they represent core parts of the Latvian writing system, and omitting them changes the text.",
    },

    { type: "heading", text: "The Eleven Diacritics You Need to Master", id: "diacritics" },
    {
      type: "table",
      headers: ["Character", "Typing Focus", "Practice Words"],
      rows: [
        ["ā / Ā", "long a", "māte, sāls, bārs"],
        ["č / Č", "soft ch", "čeklis, čūska, ilgčūska"],
        ["ē / Ē", "long e", "ēka, tēls, skrēļi"],
        ["ģ / Ģ", "soft g", "ģints, ģērbolis, ziemeļģermāņi"],
        ["ī / Ī", "long i", "īpašs, vīrs, grīda"],
        ["ķ / Ķ", "soft k", "ķieģelis, ķermenis, kuķis"],
        ["ļ / Ļ", "soft l", "ļaudis, ļauns, ļoti"],
        ["ņ / Ņ", "soft n", "ņemšana, bīņa, pūņa"],
        ["š / Š", "soft sh", "šķūnis, šķidrums, nešķirts"],
        ["ū / Ū", "long u", "pūlis, ūdens, mūzika"],
        ["ž / Ž", "soft zh", "žirafe, sāžņi, gumijas"],
      ],
    },

    { type: "heading", text: "Do Not Replace Diacritics with Apostrophes or Omit Them", id: "no-substitutions" },
    {
      type: "paragraph",
      text: "A common typist error is to replace ā with a', č with c', or simply drop the diacritic entirely. That produces different characters and changes the spelling. Modern Latvian keyboard input and Unicode support make these substitutions unnecessary.",
    },

    { type: "heading", text: "Three Available Latvian Keyboard Layouts", id: "three-layouts" },
    {
      type: "paragraph",
      text: "Windows offers three Latvian keyboards to Latvian users. The standard Latvian (Standard) layout is the most common choice and the recommended default for most typists. The other options are Latvian (QWERTY) and Latvian (Legacy), which may suit specific preferences but are less frequently taught.",
    },

    { type: "heading", text: "Diacritics on a Non-Latvian Physical Keyboard", id: "alt-codes" },
    {
      type: "table",
      headers: ["Character", "Windows Alt Code", "Latvian Keyboard Key"],
      rows: [
        ["ā", "Alt + 0257", "dedicated key"],
        ["č", "Alt + 0269", "Alt Gr + C"],
        ["ē", "Alt + 0275", "Alt Gr + E"],
        ["ģ", "Alt + 0291", "Alt Gr + G"],
        ["ī", "Alt + 0299", "Alt Gr + I"],
        ["ķ", "Alt + 0311", "Alt Gr + K"],
        ["ļ", "Alt + 0316", "Alt Gr + L"],
        ["ņ", "Alt + 0326", "Alt Gr + N"],
        ["š", "Alt + 0353", "Alt Gr + S"],
        ["ū", "Alt + 0363", "Alt Gr + U"],
        ["ž", "Alt + 0382", "Alt Gr + Z"],
      ],
    },

    { type: "heading", text: "How to Add the Latvian Keyboard in Windows", id: "add-latvian-windows" },
    {
      type: "paragraph",
      text: "Open Settings > Time & Language > Language & region, add Latvian if needed, and select the Latvian (Standard) keyboard. You can keep English installed as a secondary layout for mixed-language typing.",
    },

    { type: "heading", text: "Latvian Inflection Creates Long, Predictable Words", id: "inflection" },
    {
      type: "paragraph",
      text: "Latvian is heavily inflected, which means word endings change based on case, number, gender, and grammatical role. That creates longer words than English uses, but the endings are predictable once you recognize the stem.",
    },

    { type: "heading", text: "Digraphs dz and dž Function as Single Alphabet Units", id: "digraphs" },
    {
      type: "paragraph",
      text: "Latvian treats dz and dž as alphabet units rather than separate letters. They appear as part of the standard alphabet sequence and recur in ordinary words, so learning to recognize them as single typing chunks helps reading-ahead.",
    },

    { type: "heading", text: "What Is a Good Latvian Typing Speed?", id: "good-speed" },
    {
      type: "paragraph",
      text: "There is no transparent national dataset supporting a universal Latvian WPM ladder. Use your first clean result as a personal baseline. If you begin at 38 WPM with 92% accuracy, first reduce diacritic omissions before pushing faster.",
    },

    { type: "heading", text: "Accuracy First, Then Speed", id: "accuracy-first" },
    {
      type: "paragraph",
      text: "If any diacritic causes repeated corrections, slowing down to hit the correct key every time trains more stable Latvian. Once the diacritic becomes automatic, the pace naturally increases.",
    },

    { type: "heading", text: "A 6-Week Latvian Typing Practice Plan", id: "six-week-plan" },
    { type: "subheading", text: "Weeks 1-2: Make Diacritics Automatic" },
    {
      type: "paragraph",
      text: "Use the Latvian keyboard layout and practice ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū, ž inside short, familiar words. Reduce how often you look down.",
    },

    { type: "subheading", text: "Weeks 3-4: Add Longer Inflected Forms" },
    {
      type: "paragraph",
      text: "Practice longer everyday vocabulary and inflected endings. Keep a short error list and reuse problematic words in Custom Typing Test sessions.",
    },

    { type: "subheading", text: "Weeks 5-6: Build Sustained Rhythm" },
    {
      type: "paragraph",
      text: "Mix short 30-second checks with 60- and 120-second passages. Longer tests reveal whether accuracy drops after the initial burst.",
    },

    { type: "heading", text: "A Simple 20-Minute Latvian Routine", id: "daily-routine" },
    {
      type: "paragraph",
      text: "Warm up with diacritic-heavy words, spend several minutes drilling any recurring mistake, take one normal-speed test, then review errors instead of immediately retaking.",
    },

    { type: "heading", text: "Common Latvian Typing Mistakes to Watch", id: "common-mistakes" },
    {
      type: "list",
      items: [
        "Replacing ā with a or omitting the diacritic entirely",
        "Typing c instead of č, or g instead of ģ",
        "Losing diacritics on s (š), z (ž), or l (ļ)",
        "Treating dz and dž as separate letters instead of digraph units",
        "Confusing the three available Latvian keyboard layouts and using an unfamiliar one mid-test",
        "Treating unsupported WPM bands as official Latvian job standards",
      ],
    },

    { type: "heading", text: "Frequently Asked Questions", id: "faq-section" },
    {
      type: "faq",
      items: [
        {
          question: "What are the diacritics in Latvian?",
          answer:
            "The standard Latvian alphabet includes 11 diacritical marks: ā, č, ē, ģ, ī, ķ, ļ, ņ, š, ū, and ž. They are core alphabet letters, not optional decorations.",
        },
        {
          question: "Does Windows have a Latvian keyboard?",
          answer:
            "Yes. Windows provides three Latvian keyboard options, with Latvian (Standard) being the most commonly taught default.",
        },
        {
          question: "Can I type Latvian diacritics without the Latvian keyboard?",
          answer:
            "Yes, using Windows Alt codes or a dead-key system, but these methods are slower than the dedicated Latvian layout. If you type Latvian regularly, add the proper layout.",
        },
        {
          question: "Why are Latvian words so long?",
          answer:
            "Latvian is heavily inflected, which means word endings change to show case, number, gender, and other grammatical features. That creates longer words than English but predictable patterns once you recognize the stem.",
        },
        {
          question: "Is WPM measured the same way in Latvian as in English?",
          answer:
            "Yes — every five typed characters counts as one 'word,' regardless of language. However, Latvian tends to have longer words, so Latvian WPM often runs somewhat lower than English WPM for the same raw typing speed.",
        },
        {
          question: "What is a good Latvian typing speed?",
          answer:
            "There is no transparent universal Latvian WPM benchmark for every person or job. Use your first clean result as a baseline and compare similar tests over time.",
        },
      ],
    },

    {
      type: "cta",
      text: "Test Your Latvian Typing Speed Now — Start the Latvian Typing Test · Latviešu above and type at the pace that feels natural today. Check WPM and accuracy when the test ends, then notice which diacritics, long words, or keyboard positions interrupted your rhythm. Return after a few focused practice sessions and test again.",
    },
  ],
};

export default content;
