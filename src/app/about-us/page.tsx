import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";

export const metadata: Metadata = {
  title: "About Typing Globe — Who We Are",
  description:
    "Typing Globe is a free, multilingual typing speed test platform built to help people across 70 languages practice accurate, fast keyboard skills.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-16">
        <SectionLabel>Our Story</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Typing Globe
        </h1>
        <p className="mt-6 leading-relaxed text-muted">
          Typing Globe is a free platform built to help people practice typing speed and accuracy across 70 languages. We believe that learning to type well should be accessible to everyone — regardless of their native language, keyboard layout, or the script they use.
        </p>
      </section>

      <section className="mb-16">
        <SeoHeading id="our-mission">Our Mission</SeoHeading>
        <p className="mt-4 leading-relaxed text-muted">
          We created Typing Globe because we saw a gap: most typing practice tools focus exclusively on English or a handful of European languages. For people learning Hindi, Bengali, Arabic, Korean, Thai, Amharic, and dozens of other languages, real typing practice was either unavailable or hidden behind paywalls.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Our mission is to make real typing practice free and accessible for every language we support. That means real sample text in each language, real keyboard layouts, real government exam specifications for those preparing for competitive tests, and no signups, no ads, and no paid "premium" tiers that lock away basic features.
        </p>
      </section>

      <section className="mb-16">
        <SeoHeading id="who-built-this">Who Built This</SeoHeading>
        <p className="mt-4 leading-relaxed text-muted">
          Typing Globe was created by Kamrul Islam, a developer focused on building practical tools for multilingual communities. The platform started as a simple typing test for a handful of languages and has grown to include 70 languages, arcade games, poetry and story typing modes, a 30-day typing course, government exam simulations, and a browser extension.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Every feature on this site has been built with one principle in mind: real value for real people. No fake metrics, no inflated WPM claims, no screenshots pretending the tool works differently than it does.
        </p>
      </section>

      <section className="mb-16">
        <SeoHeading id="why-we-do-this">Why We Do This</SeoHeading>
        <p className="mt-4 leading-relaxed text-muted">
          Typing speed matters in real life. Government job candidates in India, Bangladesh, Pakistan, and dozens of other countries face typing tests as part of their selection process. Journalists, data entry workers, translators, and office professionals need fast, accurate keyboard skills. Students writing dissertations and essays need to keep up with their thoughts without the keyboard becoming a bottleneck.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          But typing practice shouldn't be another paywall. We built Typing Globe to be genuinely free, genuinely useful, and genuinely respectful of your language and your time. No artificial limits. No nag screens. No upsells.
        </p>
      </section>

      <section className="mb-16">
        <SeoHeading id="contact">Have Questions?</SeoHeading>
        <p className="mt-4 leading-relaxed text-muted">
          Reach out anytime at <a href="mailto:kamrulislamkholil@gmail.com" className="font-medium text-primary hover:underline">kamrulislamkholil@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
