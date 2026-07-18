import { LanguageDeepContent } from "@/data/deepContent/types";

const content: LanguageDeepContent = {
  seoTitle: "Vietnamese Typing Speed Test — Kiểm Tra Tốc Độ Đánh Máy Tiếng Việt",
  seoDescription:
    "Free Vietnamese typing speed test — kiểm tra tốc độ đánh máy. Telex & VNI input methods. Check your WPM, CPM and độ chính xác instantly. No signup.",
  researchedKeywords: [
    "vietnamese typing test",
    "kiểm tra tốc độ đánh máy tiếng việt",
    "telex vs vni",
    "vietnamese typing speed test",
    "unikey typing test",
    "vietnamese typing test online free",
    "gõ tiếng việt online",
    "vietnamese typing test no signup",
  ],
  blocks: [
    {
      type: "hero",
      narrative: [
        "Vietnamese is spoken by over 97 million people — making it one of Southeast Asia's most important languages and the fastest-growing language community in several parts of the world, including the US, Australia, France, Germany, and Japan. Vietnam's rapidly expanding tech sector, manufacturing economy, and digital media industry have made fast, accurate Vietnamese typing a genuinely valuable professional skill — not just for locals in Hanoi and Ho Chi Minh City, but for the entire global Vietnamese diaspora.",
        "Our free Vietnamese typing speed test (kiểm tra tốc độ đánh máy tiếng Việt) measures your real WPM, ký tự mỗi phút (CPM), and độ chính xác in real time. We support both Telex and VNI input methods — the two dominant ways Vietnamese is typed on a standard QWERTY keyboard worldwide. No signup. No download. Type and see your score instantly.",
        "Kiểm tra ngay tốc độ gõ phím tiếng Việt của bạn — chọn phương thức nhập (Telex hoặc VNI), đặt thời gian và bắt đầu gõ. Kết quả từ mỗi phút (WPM) và độ chính xác hiển thị ngay lập tức.",
      ],
    },
    { type: "heading", text: "Why Vietnamese Typing Is Uniquely Complex", id: "why-complex" },
    {
      type: "paragraph",
      text: "Vietnamese uses the Latin alphabet — so at first glance it looks like it should be straightforward to type. But Vietnamese is one of the most diacritic-rich languages in the world. A single syllable can carry both a vowel modifier and a tone mark simultaneously — stacked on top of each other — turning what looks like a simple letter into a 3-key typing sequence.",
    },
    {
      type: "paragraph",
      text: "The Vietnamese alphabet has 29 letters — 12 vowels and 17 consonants — plus 5 tone marks that apply to vowels. That gives Vietnamese an enormous range of distinct syllable shapes. Here's what that looks like in practice:",
    },
    {
      type: "table",
      headers: ["Base Vowel", "With Modifier", "With Tone", "Final Character", "Meaning"],
      rows: [
        ["a", "ă (breve)", "ắ (acute)", "ắ", "As in bắt (to catch)"],
        ["u", "ư (horn)", "ứ (acute)", "ứ", "As in ứng (to apply)"],
        ["o", "ô (circumflex)", "ổ (hook)", "ổ", "As in ổn (stable)"],
        ["e", "ê (circumflex)", "ề (grave)", "ề", "As in về (to return)"],
        ["a", "â (circumflex)", "ậ (dot below)", "ậ", "As in bậc (level)"],
      ],
    },
    {
      type: "paragraph",
      text: "None of these exist as single keys on a standard QWERTY keyboard. Every single one requires an input method to produce — which is why Telex and VNI exist, and why mastering them is the first real milestone of Vietnamese typing fluency.",
    },
    { type: "heading", text: "Telex vs VNI — Phương Thức Nào Nhanh Hơn?", id: "telex-vs-vni" },
    {
      type: "paragraph",
      text: "This is the most important question for any Vietnamese typist. Both methods produce identical Unicode output — the difference is in how you generate the characters, and which one becomes automatic faster for your hands.",
    },
    {
      type: "paragraph",
      text: "Telex uses letter combinations to represent diacritics:",
    },
    {
      type: "table",
      headers: ["Telex Input", "Vietnamese Output", "Tone / Modifier"],
      rows: [
        ["aa", "â", "Circumflex on a"],
        ["aw", "ă", "Breve on a"],
        ["ow", "ơ", "Horn on o"],
        ["uw", "ư", "Horn on u"],
        ["dd", "đ", "D with stroke"],
        ["s after vowel", "sắc (´)", "Acute tone — rising"],
        ["f after vowel", "huyền (`)", "Grave tone — falling"],
        ["r after vowel", "hỏi (ả)", "Hook tone — dipping"],
        ["x after vowel", "ngã (~)", "Tilde tone — broken rising"],
        ["j after vowel", "nặng (.)", "Dot below — heavy falling"],
      ],
    },
    {
      type: "paragraph",
      text: "VNI uses numbers after the vowel:",
    },
    {
      type: "table",
      headers: ["VNI Input", "Vietnamese Output", "Tone / Modifier"],
      rows: [
        ["a6", "â", "Circumflex on a"],
        ["a8", "ă", "Breve on a"],
        ["o7", "ơ", "Horn on o"],
        ["u7", "ư", "Horn on u"],
        ["d9", "đ", "D with stroke"],
        ["a1", "á", "Acute tone"],
        ["a2", "à", "Grave tone"],
        ["a3", "ả", "Hook tone"],
        ["a4", "ã", "Tilde tone"],
        ["a5", "ạ", "Dot below"],
      ],
    },
    {
      type: "paragraph",
      text: "Which should you use?",
    },
    {
      type: "table",
      headers: ["Factor", "Telex", "VNI"],
      rows: [
        ["Learning curve", "Steeper — must memorize letter codes", "Easier — numbers are logical (1–5 = 5 tones)"],
        ["Speed ceiling", "Higher for touch typists — no number row movement", "Slightly lower — number row access slows rhythm"],
        ["Popularity", "Dominant among younger typists, social media, tech", "Popular in professional settings, older users"],
        ["Best for", "Long-form typing, content writers, developers", "Beginners, occasional users, office workers"],
      ],
    },
    {
      type: "paragraph",
      text: "Telex is the phương thức gõ phổ biến nhất (most popular input method) among Vietnamese speakers under 35, heavy social media users, and tech workers — particularly because it keeps your fingers on the letter rows without reaching for numbers. VNI is favored in many professional office environments and by users who learned Vietnamese typing before Telex became dominant.",
    },
    {
      type: "callout",
      icon: "💡",
      title: "UniKey supports both",
      text: "Both Telex and VNI are supported by UniKey — Vietnam's most widely used free Vietnamese IME, with millions of installations across Vietnam and the diaspora.",
    },
    { type: "heading", text: "How to Set Up Vietnamese Typing — UniKey and IME Setup", id: "setup" },
    {
      type: "callout",
      icon: "⌨️",
      title: "UniKey (Windows) — the Vietnamese standard",
      text: "Download UniKey from unikey.org (free, trusted, 20+ years of development). Install → select input method (Telex or VNI) → switch between English and Vietnamese with Alt + Z (default) or configure your own shortcut. UniKey supports all major Vietnamese encoding standards including Unicode (recommended) and legacy TCVN.",
    },
    {
      type: "callout",
      icon: "🖥️",
      title: "Windows built-in IME",
      text: "Settings → Time & Language → Language → Add Vietnamese → Microsoft Vietnamese IME installs automatically. Switch inputs with Windows + Space.",
    },
    {
      type: "callout",
      icon: "🍎",
      title: "Mac",
      text: "System Settings → Keyboard → Input Sources → + → Vietnamese → select Vietnamese (supports Telex by default). Switch with Ctrl + Space.",
    },
    { type: "heading", text: "Vietnamese Typing Speed Benchmarks — Tốc Độ Bao Nhiêu Là Tốt?", id: "benchmarks" },
    {
      type: "table",
      headers: ["WPM", "CPM (approx.)", "Level", "Trình Độ", "Real-World Standard"],
      rows: [
        ["Below 20", "<100", "Beginner", "Mới bắt đầu", "Learning Telex/VNI sequences and tone marks"],
        ["20–35", "100–175", "Basic", "Cơ bản", "Casual messaging — Zalo, Facebook, email"],
        ["35–50", "175–250", "Average", "Trung bình", "Typical Vietnamese adult user — 40 WPM"],
        ["50–65", "250–325", "Good", "Khá", "General office work — văn phòng, hành chính"],
        ["65–80", "325–400", "Professional", "Chuyên nghiệp", "Content writer, translator, journalist"],
        ["80–100", "400–500", "Fast", "Nhanh", "Senior data entry, legal secretary"],
        ["100+", "500+", "Elite", "Chuyên gia", "Top-tier professional, competition typist"],
      ],
    },
    {
      type: "callout",
      icon: "📊",
      title: "Data point",
      text: "Professional Vietnamese typists reach 65–75 WPM. Beginners typically start at 20–30 WPM and can improve to 50+ WPM with daily 15–30 minute practice sessions focused on accuracy first. The complexity of simultaneous vowel modifiers and tone marks means Vietnamese WPM naturally runs slightly lower than English WPM at equivalent skill levels — the sheer number of keystrokes per syllable is higher.",
    },
    { type: "heading", text: "The 6 Tones of Vietnamese — Sáu Thanh Điệu", id: "six-tones" },
    {
      type: "paragraph",
      text: "This is what makes Vietnamese genuinely unique among all the languages on this site — and the reason why Vietnamese typing mastery is such a meaningful skill. Vietnamese has 6 tones — each changing the meaning of a syllable completely. Every tone mark is a separate keystroke in Telex or VNI:",
    },
    {
      type: "table",
      headers: ["Tone", "Diacritic", "Telex", "VNI", "Example", "Meaning"],
      rows: [
        ["Ngang", "No mark", "No key", "No key", "ma", "ghost"],
        ["Huyền", "Grave accent `", "f", "2", "mà", "but"],
        ["Sắc", "Acute accent ´", "s", "1", "má", "mother"],
        ["Hỏi", "Hook above ả", "r", "3", "mả", "tomb"],
        ["Ngã", "Tilde ~", "x", "4", "mã", "horse"],
        ["Nặng", "Dot below .", "j", "5", "mạ", "rice seedling"],
      ],
    },
    {
      type: "callout",
      icon: "⚠️",
      title: "Six words, one syllable",
      text: "Six completely different words. One base syllable. All six tones must be typed correctly — skipping or mistyping a tone mark doesn't just slow you down, it changes the meaning of the word entirely. Our test counts every missing or incorrect tone mark as a full error, exactly as a professional Vietnamese editor or government document checker would.",
    },
    { type: "heading", text: "Vietnamese Typing Speed for Jobs — Yêu Cầu Tốc Độ Gõ Phím", id: "job-requirements" },
    {
      type: "table",
      headers: ["Role / Vị Trí", "Min. WPM", "Notes"],
      rows: [
        ["Nhân viên văn phòng / Office admin", "40–50 WPM", "Standard across Vietnam's corporate sector"],
        ["Nhập liệu / Data entry operator", "55–70 WPM", "95%+ accuracy essential — diacritics counted"],
        ["Thư ký / Secretary", "55–70 WPM", "Formal Vietnamese — government and corporate"],
        ["Biên tập viên / Editor", "60–75 WPM", "VnExpress, Tuổi Trẻ, Thanh Niên, Zing News"],
        ["Phóng viên / Journalist", "60–75 WPM", "Breaking news turnaround speed critical"],
        ["Dịch thuật / Translator", "55–70 WPM", "Vietnamese ↔ English, Vietnamese ↔ Chinese"],
        ["Công chức nhà nước / Government clerk", "45–60 WPM", "Official document typing — formal register"],
        ["Nội dung số / Digital content creator", "55–70 WPM", "Blog, social media, e-commerce — Shopee, Lazada"],
        ["Hỗ trợ khách hàng / Customer service", "40–55 WPM", "Zalo Business, live chat — real-time response"],
      ],
    },
    { type: "heading", text: "Who Is This Test Built For?", id: "who-its-for" },
    {
      type: "list",
      items: [
        "💼 Vietnamese office and admin job seekers in Hanoi, Ho Chi Minh City, Da Nang, and across Vietnam where tốc độ đánh máy is tested in hiring",
        "🌍 Vietnamese diaspora in the US — 2.1 million Vietnamese-Americans, the fourth largest Asian-American community, many maintaining active Vietnamese keyboard fluency",
        "🇦🇺 Vietnamese diaspora in Australia — over 300,000 Vietnamese Australians, especially in Melbourne and Sydney",
        "🇫🇷 Vietnamese diaspora in France — one of Europe's largest Vietnamese communities, with strong ties to Vietnamese-language media and business",
        "🎓 Vietnamese language learners — benchmarking keyboard fluency alongside tone and vocabulary study",
        "✍️ Content creators and bloggers writing Vietnamese content for platforms like Zalo, Facebook Vietnam, TikTok Vietnam, and Shopee",
        "📰 Journalists and editors at VnExpress, Tuổi Trẻ, Thanh Niên, Zing News — Vietnam's major digital publications",
        "🔄 Translators and localizers working on Vietnamese ↔ English, Vietnamese ↔ Chinese, Vietnamese ↔ Korean for tech, gaming, and e-commerce industries",
      ],
    },
    { type: "heading", text: "Frequently Asked Questions", id: "faq" },
    {
      type: "faq",
      items: [
        {
          question: "What is a good Vietnamese typing speed?",
          answer:
            "35–50 WPM is typical for the average Vietnamese adult user. 50–65 WPM meets the general office standard, and 65+ WPM is professional level — content writers, translators, journalists. Senior data entry and legal secretaries reach 80–100 WPM.",
        },
        {
          question: "Should I learn Telex or VNI?",
          answer:
            "Telex is dominant among younger typists, social media users, and tech workers, and has a higher speed ceiling for touch typists since it keeps your fingers on the letter rows. VNI is easier to learn (numbers 1–5 map logically to the 5 tones) and is common in professional office settings and among users who learned Vietnamese typing before Telex became dominant.",
        },
        {
          question: "Why is Vietnamese typing considered complex?",
          answer:
            "A single Vietnamese syllable can stack a vowel modifier and a tone mark simultaneously — turning what looks like one letter into a 3-key sequence. With 6 distinct tones that each change a word's meaning entirely, every tone mark must be typed correctly, which is why Vietnamese WPM runs slightly lower than English WPM at equivalent skill levels.",
        },
        {
          question: "Do missing tone marks count as errors?",
          answer: "Yes — skipping or mistyping a tone mark changes the meaning of the word entirely (ma/mà/má/mả/mã/mạ are six different words), so this test counts every missing or incorrect tone mark as a full error, just like a professional Vietnamese editor would.",
        },
        {
          question: "Is this Vietnamese typing test free?",
          answer: "Yes — completely free, no signup, no download, and no limit on how many times you can test.",
        },
      ],
    },
    {
      type: "cta",
      text: "Chọn thời gian kiểm tra ở trên — 30 giây, 1 phút, 5 phút — chọn Telex hoặc VNI, và bắt đầu gõ. WPM, CPM và độ chính xác của bạn sẽ hiển thị ngay sau khi hoàn thành bài kiểm tra. Pick your input method, set your duration, start typing — your Vietnamese WPM result is ready in seconds.",
    },
  ],
};

export default content;
