import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old auto-generated Bengali slug -> new keyword-research-backed canonical slug.
      { source: "/test/bengali-typing-speed-test", destination: "/test/bengali-typing-test", permanent: true },
      // Alternate Bangla-keyword-targeting slugs, all consolidating to the canonical page.
      { source: "/bangla-typing-test", destination: "/test/bengali-typing-test", permanent: true },
      { source: "/bijoy-bangla-typing-test", destination: "/test/bengali-typing-test", permanent: true },
      { source: "/online-bangla-typing-test", destination: "/test/bengali-typing-test", permanent: true },
      // Old auto-generated Hindi slug -> new keyword-research-backed canonical slug.
      { source: "/test/hindi-typing-speed-test", destination: "/test/hindi-typing-test", permanent: true },
      { source: "/hindi-typing-speed-test", destination: "/test/hindi-typing-test", permanent: true },
      // Old auto-generated English slug -> new keyword-research-backed canonical slug.
      { source: "/test/english-typing-speed-test", destination: "/test/english-typing-test", permanent: true },
      { source: "/english-typing-speed-test", destination: "/test/english-typing-test", permanent: true },
      // Old auto-generated French slug -> new keyword-research-backed canonical slug.
      { source: "/test/french-typing-speed-test", destination: "/test/french-typing-test", permanent: true },
      { source: "/french-typing-speed-test", destination: "/test/french-typing-test", permanent: true },
      // Old auto-generated German slug -> new keyword-research-backed canonical slug.
      { source: "/test/german-typing-speed-test", destination: "/test/german-typing-test", permanent: true },
      { source: "/german-typing-speed-test", destination: "/test/german-typing-test", permanent: true },
      // Old auto-generated Portuguese slug -> new keyword-research-backed canonical slug.
      { source: "/test/portuguese-typing-speed-test", destination: "/test/portuguese-typing-test", permanent: true },
      { source: "/portuguese-typing-speed-test", destination: "/test/portuguese-typing-test", permanent: true },
      // Old auto-generated Arabic slug -> new keyword-research-backed canonical slug.
      { source: "/test/arabic-typing-speed-test", destination: "/test/arabic-typing-test", permanent: true },
      { source: "/arabic-typing-speed-test", destination: "/test/arabic-typing-test", permanent: true },
      // Old auto-generated Russian slug -> new keyword-research-backed canonical slug.
      { source: "/test/russian-typing-speed-test", destination: "/test/russian-typing-test", permanent: true },
      { source: "/russian-typing-speed-test", destination: "/test/russian-typing-test", permanent: true },
      // Old auto-generated Japanese slug -> new keyword-research-backed canonical slug.
      { source: "/test/japanese-typing-speed-test", destination: "/test/japanese-typing-test", permanent: true },
      { source: "/japanese-typing-speed-test", destination: "/test/japanese-typing-test", permanent: true },
      // Old auto-generated Chinese slug -> new keyword-research-backed canonical slug.
      { source: "/test/chinese-typing-speed-test", destination: "/test/chinese-typing-test", permanent: true },
      { source: "/chinese-typing-speed-test", destination: "/test/chinese-typing-test", permanent: true },
      // Old auto-generated Korean slug -> new keyword-research-backed canonical slug.
      { source: "/test/korean-typing-speed-test", destination: "/test/korean-typing-test", permanent: true },
      { source: "/korean-typing-speed-test", destination: "/test/korean-typing-test", permanent: true },
      // Old auto-generated Italian slug -> new keyword-research-backed canonical slug.
      { source: "/test/italian-typing-speed-test", destination: "/test/italian-typing-test", permanent: true },
      { source: "/italian-typing-speed-test", destination: "/test/italian-typing-test", permanent: true },
      // Old auto-generated Turkish slug -> new keyword-research-backed canonical slug.
      { source: "/test/turkish-typing-speed-test", destination: "/test/turkish-typing-test", permanent: true },
      { source: "/turkish-typing-speed-test", destination: "/test/turkish-typing-test", permanent: true },
      // Old auto-generated Vietnamese slug -> new keyword-research-backed canonical slug.
      { source: "/test/vietnamese-typing-speed-test", destination: "/test/vietnamese-typing-test", permanent: true },
      { source: "/vietnamese-typing-speed-test", destination: "/test/vietnamese-typing-test", permanent: true },
      // Old Aesop hub slug -> new keyword-research-backed canonical slug.
      { source: "/aesop-typing-speed-test", destination: "/aesop-fables-typing-test", permanent: true },
    ];
  },
};

export default nextConfig;
