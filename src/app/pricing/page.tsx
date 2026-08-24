import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Pricing — Typing Globe",
  description: "Typing Globe is completely free. No hidden costs, no paywalls, no paid tiers.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="text-center">
        <SectionLabel>Simple & Clear</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Typing Globe is 100% Free
        </h1>
        <p className="mt-6 text-lg text-muted">
          No hidden costs. No paywalls. No "premium" tiers that lock away basic features. Everything you see is free, forever.
        </p>
      </section>

      <section className="mt-16">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Everything</h2>
            <Badge tone="primary">Free</Badge>
          </div>
          <p className="mb-6 text-5xl font-bold text-primary">$0</p>
          <ul className="space-y-3 text-left text-muted">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Typing tests in 70 languages</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Unlimited test attempts</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Custom typing test (paste your own text)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Typing practice (untimed, no pressure)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Poetry, stories, and song lyrics typing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>6 arcade typing games</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Government exam simulations (SSC, RRB, CPCT, etc.)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>30-day English typing course</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>Chrome extension for any webpage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>No signup required</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">✓</span>
              <span>No ads</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">Why Everything Is Free</h2>
        <p className="mt-4 leading-relaxed text-muted">
          We believe typing practice should be accessible to everyone, regardless of their ability to pay. That's why every feature on Typing Globe is completely free.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          We don't believe in paywalls that hide basic features, unnecessary premium tiers that duplicate free functionality, or charging for things that should be free (like saving your test results or accessing basic keyboard layouts).
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          If you're preparing for a government exam, learning a new language, or just want to practice typing faster — you shouldn't have to pay for it.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">How We Sustain This</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Typing Globe is maintained by a small team and runs on affordable infrastructure. We don't have expensive sales, marketing, or investor payouts driving up costs. We use Google Analytics to understand how people use the site, but we don't use invasive tracking or sell your data.
        </p>
        <p className="mt-4 leading-relaxed text-muted">
          Our goal is to keep the site free and sustainable long-term. If you'd like to support continued development, you can reach out via our contact page — but it's never required to use the platform.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">Still Have Questions?</h2>
        <p className="mt-4 text-muted">
          See our <a href="/privacy-policy" className="text-primary hover:underline">privacy policy</a> and <a href="/terms-of-service" className="text-primary hover:underline">terms of service</a> for more details, or <a href="/contact" className="text-primary hover:underline">contact us</a> if you have other questions.
        </p>
      </section>
    </div>
  );
}
