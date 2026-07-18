import type { Metadata } from "next";
import Link from "next/link";
import { ComingSoonPage } from "@/components/ComingSoonPage";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export const metadata: Metadata = {
  title: "Exam Hall — Government Exam Typing Practice",
  description:
    "Timed, exam-format typing simulations for SSC, CPCT, RRB, and state PSC typing rounds. Coming soon to Typing Globe.",
  alternates: { canonical: "/government-exam-typing-test" },
};

const faqItems = [
  {
    question: "Which exams typically include a typing test?",
    answer:
      "In India and Bangladesh, common examples include SSC (Steno/CHSL/CGL typing rounds), CPCT, RRB clerical exams, and various state PSC clerical and stenographer posts. Requirements vary by board and post, so always confirm the exact WPM and accuracy threshold on your specific exam notification.",
  },
  {
    question: "Will Exam Hall replicate the exact scoring rules of my exam?",
    answer:
      "That's the goal — exam-format simulations built to match the timing, passage length, and pass/fail thresholds of specific exam boards, rather than a generic timed test. This feature is still in development, so exact board coverage will expand over time.",
  },
  {
    question: "What can I use right now to prepare for a typing exam?",
    answer:
      "Our Typing Certificate exam is the closest live equivalent today — a proctored-style 3-stage timed exam (60s, 90s, 120s) that produces a verifiable, downloadable result, which is good practice for the pass/fail pressure of a real exam typing round. For open-ended practice, our standard timed tests also let you set the duration to match your exam's typing round length and track net WPM and accuracy the same way an exam would score you.",
  },
];

export default function ExamPage() {
  return (
    <>
      <ComingSoonPage
        label="Exam Hall"
        title="Government Exam Typing Practice"
        description="Exam-format typing simulations that mirror the timing, passage length, and scoring rules of SSC, CPCT, RRB, and state PSC typing rounds."
        bullets={[
          "Exam-accurate timing and passage formats",
          "Pass/fail thresholds matched to real exam boards",
          "Practice in English, Hindi, and other exam-recognized languages",
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-10 border-t border-border pt-12">
          <div>
            <SeoHeading id="what-is-exam-typing">What Is a Government Exam Typing Test?</SeoHeading>
            <p className="mt-3 leading-relaxed text-muted">
              Many government recruitment exams include a timed typing round as part of the selection
              process — a fixed passage, a strict time limit, and a minimum net WPM and accuracy
              threshold you must clear to pass. Unlike a casual typing test, these rounds are
              pass/fail: falling short by even a few WPM can mean disqualification regardless of how
              well you did on the written portion of the exam.
            </p>
          </div>

          <div>
            <SeoHeading id="common-exams">Common Exams With a Typing Component</SeoHeading>
            <p className="mt-3 text-sm text-muted">
              Requirements below are general references, not official figures — always confirm exact
              thresholds on your specific exam&apos;s official notification.
            </p>
            <div className="mt-4">
              <DataTable
                headers={["Exam / Post Type", "Typical Focus", "Region"]}
                rows={[
                  ["SSC CHSL / CGL (typing posts)", "English or Hindi typing speed test", "India"],
                  ["CPCT (Computer Proficiency)", "Typing speed + accuracy certification", "Madhya Pradesh, India"],
                  ["RRB clerical / stenographer posts", "English or Hindi typing round", "India (Railways)"],
                  ["State PSC clerical posts", "Regional language + English typing", "Various Indian states"],
                  ["BCS / bank recruitment typing rounds", "Bengali or English typing speed", "Bangladesh"],
                ]}
              />
            </div>
          </div>

          <Callout icon="🎯" title="Practice with intent" tone="gold">
            While Exam Hall is in development, our{" "}
            <Link href="/typing-certificate" className="text-primary underline underline-offset-2">
              Typing Certificate
            </Link>{" "}
            exam is a genuinely useful stand-in — it&apos;s already timed, multi-stage, and pass/fail
            in spirit. For open-ended drilling, set a standard typing test to the exact duration your
            exam uses (often 10 or 15 minutes) and track your <strong>net</strong> WPM specifically —
            most exam boards score net WPM, not gross WPM, and the difference matters more than most
            candidates expect.
          </Callout>

          <div>
            <SeoHeading id="exam-faq">Frequently Asked Questions</SeoHeading>
            <div className="mt-4">
              <SeoFaqBlock items={faqItems} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
