import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card, SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export const metadata: Metadata = {
  title: "Typing Certificate",
  description:
    "Take a timed typing exam in any of 70 languages and earn a downloadable, verifiable typing speed certificate — free, account required.",
  alternates: { canonical: "/typing-certificate" },
};

const faqItems = [
  {
    question: "Do I need an account to get a certificate?",
    answer:
      "Yes. Unlike the regular practice tests, the certificate is tied to your account so your result is saved, verifiable later, and can't be re-taken anonymously to game the score.",
  },
  {
    question: "Is it free?",
    answer:
      "Your first certificate is free. Retaking the exam afterward — whether to improve your WPM or put a different name on a future certificate — requires a fresh full 3-stage exam plus a small retake fee, so a score can never be relabeled without actually earning it again.",
  },
  {
    question: "Can I retake the exam to get a better score?",
    answer:
      "Yes, from your dashboard. Retaking always means redoing all 3 stages from scratch, and your certificate reflects your best-ever average WPM, so a slower retake never lowers it.",
  },
  {
    question: "Can I change the name on my certificate?",
    answer:
      "Only by retaking the full exam. Names are locked to the score they were earned with, so nobody can take one exam and reissue the same result under different names.",
  },
  {
    question: "Which languages can I take the exam in?",
    answer:
      "Any of the 70 languages supported on Typing Globe. Pick your language when you start the exam.",
  },
];

export default function TypingCertificatePage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-10 text-center sm:px-6 lg:px-8">
        <SectionLabel>Typing Certificate</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
          Earn a verified typing speed certificate
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          Take a timed exam in any of our 70 languages, and get a downloadable
          certificate showing your net WPM, accuracy, and language — tied to
          your account so it&apos;s a real, verifiable record, not just a
          screenshot.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/typing-certificate/dashboard" size="lg">
            Get Certificate →
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-10 border-t border-border pt-12">
          <div>
            <SeoHeading id="how-it-works">How It Works</SeoHeading>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <Card>
                <p className="text-sm font-semibold text-primary">1. Sign up</p>
                <p className="mt-2 text-sm text-muted">
                  Create a free account so your certificate is tied to you, not
                  just a browser session.
                </p>
              </Card>
              <Card>
                <p className="text-sm font-semibold text-primary">2. Take the exam</p>
                <p className="mt-2 text-sm text-muted">
                  Pick a language and complete 3 timed stages of increasing
                  difficulty and length. Your certificate shows the average.
                </p>
              </Card>
              <Card>
                <p className="text-sm font-semibold text-primary">3. Download</p>
                <p className="mt-2 text-sm text-muted">
                  Get your certificate as a PNG or PDF. Retaking to improve
                  your WPM means redoing all 3 stages plus a retake fee.
                </p>
              </Card>
            </div>
          </div>

          <div>
            <SeoHeading id="whats-included">What Your Certificate Includes</SeoHeading>
            <div className="mt-4">
              <DataTable
                headers={["Field", "Description"]}
                rows={[
                  ["Name", "Locked to the exam sitting it was earned in"],
                  ["Average net WPM", "Mean of your easy/medium/hard stage scores"],
                  ["Per-stage breakdown", "Your WPM and accuracy for each of the 3 stages"],
                  ["Language & script", "Which of the 70 languages you tested in"],
                  ["Credential ID & QR", "A unique, publicly verifiable record of this exact certificate"],
                  ["Format", "Downloadable PNG or PDF"],
                ]}
              />
            </div>
          </div>

          <Callout icon="📄" title="Free first certificate" tone="primary">
            Your first certificate costs nothing. Retaking afterward — to
            improve your WPM or change the name — requires a fresh full exam
            and a small retake fee, so a certificate always reflects a real,
            freshly-earned result.
          </Callout>

          <div>
            <SeoHeading id="certificate-faq">Frequently Asked Questions</SeoHeading>
            <div className="mt-4">
              <SeoFaqBlock items={faqItems} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
