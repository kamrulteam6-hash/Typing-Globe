import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Turkish Typing Speed Test — Türkçe Yazma Hızı Testi",
  seoDescription:
    "Free Turkish typing speed test — Türkçe yazma hızı testi. TR-Q & TR-F keyboard layouts. Check your WPM (DKS), DVS and doğruluk instantly. No signup.",
  researchedKeywords: [
    "turkish typing test",
    "türkçe yazma hızı testi",
    "tr-q tr-f klavye testi",
    "turkish typing speed test",
    "dakikada kelime sayısı",
    "turkish typing test online free",
    "türkçe klavye testi",
    "kpss bilgisayar operatörü daktilo",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Turkish is spoken by over 88 million people across Turkey, Northern Cyprus, and Turkish-speaking communities throughout Germany, the Netherlands, Austria, and Central Asia. It's one of the most agglutinative languages in the world — long compound words, vowel harmony rules, and a unique letter set that no standard English keyboard covers. Typing Turkish fast and accurately is a genuine professional skill across Turkey's booming economy, public administration, media, and growing tech sector.",
        "Our free Turkish typing speed test (Türkçe yazma hızı testi) measures your real WPM, Dakikada Vuruş Sayısı — DVS (characters per minute), and accuracy using both the TR-Q and TR-F keyboard layouts. No signup. No download. Just type and see your result.",
        "Şimdi Türkçe yazma hızınızı ölçün — test süresini seçin, yazmaya başlayın ve DKS (Dakikada Kelime Sayısı) ile doğruluk oranınızı anında görün.",
      ],
    },
    { type: "heading", text: "Turkish Typing Metrics — DKS, DVS, and Doğruluk", id: "metrics" },
    {
      type: "paragraph",
      text: "Turkey uses its own terminology for typing metrics — and knowing these terms is essential if you're applying for any job or government position that requires a typing test.",
    },
    {
      type: "table",
      headers: ["Metric", "Turkish Term", "Abbreviation", "What It Measures"],
      rows: [
        ["Words Per Minute", "Dakikada Kelime Sayısı", "DKS", "Net typing speed — standard job and exam metric"],
        ["Characters Per Minute", "Dakikada Vuruş Sayısı", "DVS", "Total keystrokes per minute — used in data entry job ads"],
        ["Gross WPM", "Brüt Yazma Hızı", "—", "Raw speed including errors"],
        ["Net WPM", "Net Yazma Hızı", "—", "Speed after error penalty — what government exams count"],
        ["Accuracy", "Doğruluk", "%", "Correct characters as percentage of total typed"],
        ["Errors", "Hatalar", "—", "Total incorrect keystrokes"],
      ],
    },
    {
      type: "callout",
      icon: "🧮",
      title: "DKS Formula",
      text: "DKS (Net) = (Toplam karakter ÷ 5 ÷ dakika) − hatalar",
    },
    {
      type: "paragraph",
      text: "Turkish private sector job ads — especially veri girişi (data entry) and sekreter roles — frequently list requirements in DVS (vuruş/dakika). A real job listing in Istanbul might read: \"Dakikada en az 250 vuruş hızına sahip olmak\" — that's approximately 50 WPM. Knowing how DVS and DKS relate means you'll never be caught out by the number.",
    },
    { type: "heading", text: "Three Keyboard Layouts — TR-Q, TR-F, and TR-E", id: "keyboard-layouts" },
    {
      type: "paragraph",
      text: "This is the most interesting and most misunderstood aspect of Turkish typing. Turkey has three active keyboard layouts, each with a different history, a different speed ceiling, and a different user base.",
    },
    {
      type: "table",
      headers: ["Layout", "Official Name", "Top Row Starts With", "Who Uses It", "Speed Advantage"],
      rows: [
        ["TR-Q", "Türkçe Q Klavye", "Q W E R T Y...", "~95%+ of all Turkish users today", "Most accessible, works on any QWERTY device"],
        ["TR-F", "Türkçe F Klavye (F Keyboard)", "F G Ğ I O D...", "~5% — professional typists, government records", "Ergonomically optimized for Turkish — 17 world typing records"],
        ["TR-E", "Türkçe E Klavye", "Designed in 2014", "Experimental — minimal adoption", "Claimed faster than F, limited real-world data"],
      ],
    },
    {
      type: "paragraph",
      text: "TR-Q is your practical starting point — it's what every Turkish laptop, phone, and office computer ships with, and what virtually everyone practices on.",
    },
    {
      type: "paragraph",
      text: "TR-F is the fascinating one. Designed in 1955 by Dr. İhsan Sıtkı Yener using data from 29,934 Turkish words analyzed by the Turkish Language Association, it placed the 9 most frequently used Turkish letters — a, e, i, n, r, l, ı, t, k — on the home row. The result: less finger travel, more balanced hand load (49% left, 51% right), and 17 world stenography records held by TR-F users. Empirical research published in 2019 confirmed that TR-F has significantly lower completion time and physical demand than the newer TR-E layout.",
    },
    {
      type: "paragraph",
      text: "Despite being Turkey's official national keyboard standard since 1955 — and the government attempting to mandate it in the public sector as recently as 2013 — TR-F never overtook TR-Q in daily use. Laptops, code shortcuts, and international keyboard compatibility kept TR-Q dominant. But if you type Turkish professionally and want maximum long-term speed, TR-F remains the ergonomically superior choice.",
    },
    { type: "heading", text: "Turkish Special Characters — The 6 Letters That Don't Exist in English", id: "special-characters" },
    {
      type: "paragraph",
      text: "Turkish uses 29 letters — the 26 standard Latin letters plus 6 unique characters that exist nowhere else in the Latin alphabet. Every single one of them appears constantly in everyday Turkish text, and missing any of them counts as a full error.",
    },
    {
      type: "table",
      headers: ["Character", "Name", "Sound", "Common Words", "Key on TR-Q"],
      rows: [
        ["ç", "Çe", "\"ch\" as in church", "çok, çalışmak, içmek, geç", "Dedicated key — right of L"],
        ["ş", "Şe", "\"sh\" as in ship", "şimdi, işte, şehir, başlamak", "Dedicated key — right of Ç"],
        ["ğ", "Yumuşak ge (soft G)", "Lengthens preceding vowel — silent", "dağ, yağmur, öğrenci, ağırlık", "Dedicated key — right of G on TR-Q"],
        ["ı (dotless i)", "Dotless ı", "A unique back vowel — no English equivalent", "ılık, ışık, kızılırmak, bırakmak", "Dedicated key — critical distinction from i"],
        ["ö", "Ö", "Like German ö — rounded front vowel", "önce, öğretmen, gözlük, dört", "Dedicated key"],
        ["ü", "Ü", "Like German ü — rounded front vowel", "ülke, üst, güzel, dünya", "Dedicated key"],
      ],
    },
    {
      type: "callout",
      icon: "⚠️",
      title: "ı vs i is critical",
      text: "Turkish is the only major language with both a dotted i (i) and a dotless ı (ı) — and they are completely different letters with completely different sounds and meanings. Confusing them changes words: kız (girl) vs kiz is wrong; ışık (light) typed as isik is wrong. Our test counts every dotless-i/dotted-i confusion as a full error — exactly as a professional evaluation would.",
    },
    { type: "heading", text: "Turkish Typing Speed Benchmarks — İyi Bir Yazma Hızı Nedir?", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM (DKS)", "DVS (approx.)", "Level", "Seviye", "Real-World Standard"],
      rows: [
        ["Below 20", "<100", "Beginner", "Başlangıç", "Learning the layout — avcı-toplayıcı yazımı"],
        ["20–35", "100–175", "Basic", "Temel", "Casual use — emails, social media, WhatsApp"],
        ["35–50", "175–250", "Average", "Ortalama", "Typical Turkish adult PC user — 40–55 WPM average"],
        ["50–65", "250–325", "Good", "İyi", "General office standard — büro işleri"],
        ["65–80", "325–400", "Professional", "Profesyonel", "Sekreter, veri girişi, KPSS hazırlık üst sınırı"],
        ["80–100", "400–500", "Fast", "Hızlı", "Gazeteci, çevirmen, hukuk sekreteri"],
        ["100+", "500+", "Elite", "Elit", "Stenografi yarışması, TR-F uzmanı"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Research data point",
      text: "A 2019 empirical study on Turkish keyboard layouts (arxiv.org) found the average TR-Q typist reaches 49.5 WPM (standard deviation: 12.46, range: 34–71 WPM). Experienced TR-Q typists in the top group averaged 57 WPM. The same study confirmed that TR-F produces significantly lower completion times — meaning TR-F typists finish the same text faster with less physical effort.",
    },
    { type: "heading", text: "Turkish Typing Speed for Jobs and Exams", id: "job-requirements" },
    {
      type: "paragraph",
      text: "Whether you're targeting a government position through KPSS or a private sector veri girişi role in Istanbul or Ankara — here's what Turkey's job market actually requires:",
    },
    {
      type: "table",
      headers: ["Role / Görev", "Min. WPM", "Min. DVS", "Notes"],
      rows: [
        ["Büro memuru / Office clerk", "40–50 WPM", "200–250 DVS", "Standard for public and private sector admin roles"],
        ["Veri girişi operatörü / Data entry", "55–70 WPM", "275–350 DVS", "Accuracy 95%+ required — common in Istanbul finance sector"],
        ["Sekreter / Secretary", "55–70 WPM", "275–350 DVS", "Mixed Turkish + English often required"],
        ["Hukuk sekreteri / Legal secretary", "65–80 WPM", "325–400 DVS", "Formal Turkish, zero tolerance for special character errors"],
        ["Gazeteci / Journalist", "65–80 WPM", "325–400 DVS", "Turkish digital media — Sabah, Hürriyet, NTV, Sözcü"],
        ["Çevirmen / Translator", "55–70 WPM", "275–350 DVS", "Turkish ↔ English, Turkish ↔ German, Turkish ↔ Arabic"],
        ["Müşteri hizmetleri / Customer service", "40–55 WPM", "200–275 DVS", "Real-time Turkish chat — WhatsApp Business, live chat"],
        ["KPSS — Bilgisayar operatörü", "50–60 WPM", "250–300 DVS", "Government clerical exam — net kelime hedefi"],
        ["Stenograf / Stenographer", "100+ WPM", "500+ DVS", "Court, assembly, conference — TR-F layout standard"],
      ],
    },
    {
      type: "paragraph",
      text: "Job listings on Turkey's leading recruitment platform kariyer.net and sekreternet.com regularly specify \"dakikada en az 250–300 vuruş\" for secretarial and data entry roles. Government positions tested through KPSS bilgisayar işletmeni exams evaluate both speed and accuracy on Turkish text, with the net word count being the deciding metric.",
    },
    { type: "heading", text: "Vowel Harmony — Why Turkish Text Flows Differently", id: "vowel-harmony" },
    {
      type: "paragraph",
      text: "One of the most fascinating things about typing Turkish at speed is how sesli harf uyumu (vowel harmony) shapes the rhythm of the text. Turkish words obey strict vowel harmony rules — front vowels (e, i, ö, ü) stay together and back vowels (a, ı, o, u) stay together within a word. This creates a natural alternating rhythm between consonants and vowels that experienced TR-F typists exploit for speed — because vowels are grouped on the left side of the TR-F keyboard.",
    },
    {
      type: "paragraph",
      text: "The practical implication for typing: Turkish words tend to be long (agglutination adds suffixes upon suffixes — gidebilecekmisiniz is one word) but phonetically very regular. Once your fingers know the rhythm of Turkish vowel-consonant patterns, your speed builds faster than in less phonetically consistent languages.",
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "🏛️ KPSS adayları — government exam candidates preparing for bilgisayar işletmeni and büro memuru typing assessments across Turkey's public administration",
        "💼 Istanbul and Ankara job applicants targeting veri girişi, sekreter, and büro memuru roles where yazma hızı testi is part of the hiring process",
        "🌍 Turkish diaspora in Germany 🇩🇪, Netherlands 🇳🇱, Austria 🇦🇹, Belgium 🇧🇪, and France 🇫🇷 — over 5 million Turkish speakers abroad who type Turkish daily for work and family",
        "✍️ Translators and content creators working in Turkish ↔ English, Turkish ↔ German, Turkish ↔ Arabic for international clients",
        "🎓 Turkish language learners — from beginner keyboard fluency through advanced professional speed, building confidence with ç, ş, ğ, ı, ö, ü",
        "📰 Journalists and digital media professionals at Turkish news organizations — Sabah, Hürriyet, Milliyet, NTV, Sözcü, Cumhuriyet",
        "🇨🇾 Northern Cyprus professionals — where Turkish is the official language and the same keyboard standards apply",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Turkish typing speed?",
          answer:
            "35–50 WPM is a common baseline for everyday office typing. 50–65 WPM meets the general office standard (büro işleri), and 65+ WPM is professional level — sekreter, veri girişi, and KPSS preparation upper range. 100+ WPM is stenography competition level, typically TR-F specialists.",
        },
        {
          question: "Should I learn TR-Q or TR-F?",
          answer:
            "TR-Q is your practical starting point — it's what every Turkish device ships with and what virtually everyone uses. TR-F, designed in 1955 based on Turkish letter frequency, is ergonomically superior with 17 world stenography records, but the relearning cost usually outweighs the benefit unless you're pursuing competitive typing or stenography specifically.",
        },
        {
          question: "Why does the dotless ı matter so much?",
          answer:
            "Turkish is the only major language with both a dotted i and a dotless ı — two completely different letters with different sounds and meanings. Confusing them changes real words (kız vs kiz), so this test counts every dotless/dotted-i confusion as a full error, matching professional evaluation standards.",
        },
        {
          question: "How is WPM (DKS) calculated on this test?",
          answer: "DKS (Net) = (Toplam karakter ÷ 5 ÷ dakika) − hatalar — every 5 typed characters counts as one word, with a penalty subtracted for uncorrected errors, matching the formula used across Turkish professional typing evaluations.",
        },
        {
          question: "Is this Turkish typing test free?",
          answer: "Yes — completely free, no signup, no download, and unlimited retakes.",
        },
      ],
    },
    {
      type: "cta",
      text: "Yukarıdan test sürenizi seçin — 30 saniye, 1 dakika, 5 dakika — TR-Q veya TR-F klavye düzeninizi belirleyin ve yazmaya başlayın. DKS (WPM), DVS (CPM) ve doğruluk oranınız test biter bitmez ekranda görünecek. Pick your layout, set your duration, start typing — your DKS result is ready in seconds.",
    },
  ],
};

export default content;
