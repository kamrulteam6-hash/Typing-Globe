import type { Metadata } from "next";
import Link from "next/link";
import { mockExams } from "@/data/mockExams";
import { Card, SectionLabel } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export const metadata: Metadata = {
  title: "Exam Hall — Government & Competitive Exam Typing Tests",
  description:
    "Free mock typing tests built to the exact format of real government and competitive exams — SSC CHSL, SSC CGL DEST, RRB NTPC, CPCT, UPSSSC, and more. Real pass/fail scoring.",
  alternates: { canonical: "/government-exam-typing-test" },
};

const faqItems = [
  {
    question: "Are these mock tests officially affiliated with SSC, RRB, or other exam boards?",
    answer:
      "No — these are independent practice simulations built from publicly available exam notifications and prep resources, matching the real duration, passage style, and pass/fail thresholds as closely as possible. Always confirm exact requirements on your official exam notification before test day.",
  },
  {
    question: "How is this different from a regular timed typing test?",
    answer:
      "Regular tests measure raw WPM and accuracy. These mocks additionally enforce the specific exam's real rules — minimum word counts, category-based error tolerance, disabled backspace, KDPH scoring — and tell you PASS or FAIL against that exam's actual cutoff, not just a generic score.",
  },
  {
    question: "More exams are coming, right?",
    answer:
      "Yes — this is the first batch covering the highest-search exams. More boards and posts are being added over time.",
  },
];

const countries = Array.from(new Set(mockExams.map((e) => e.country)));

export default function ExamHallPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-16 pb-10 text-center sm:px-6 lg:px-8">
        <SectionLabel>Exam Hall</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
          Government &amp; Competitive Exam Typing Tests
        </h1>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
          Free mock typing tests built to the exact format of real exams — same timing, same passage
          style, same pass/fail rules. Find out if you&apos;d pass before test day.
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-6 sm:px-6 lg:px-8">
        {countries.map((country) => (
          <div key={country} className="mb-10">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-muted-2">{country}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {mockExams
                .filter((e) => e.country === country)
                .map((exam) => (
                  <Card key={exam.slug} hover className="flex flex-col">
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">{exam.authority}</p>
                    <h3 className="mt-1 text-base font-bold text-foreground">{exam.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{exam.postName}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <Badge tone="primary">{Math.round(exam.durationSeconds / 60)} min</Badge>
                      <Badge tone="accent">{exam.languageRules.map((r) => r.code.toUpperCase()).join(" / ")}</Badge>
                    </div>
                    <Link
                      href={`/exam/${exam.slug}`}
                      className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                    >
                      Start Mock Test →
                    </Link>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-10 border-t border-border pt-12">
          <div>
            <SeoHeading id="what-is-exam-typing">What Is a Government Exam Typing Test?</SeoHeading>
            <p className="mt-3 leading-relaxed text-muted">
              Many government and competitive-exam recruitment processes include a timed typing round
              as part of selection — a fixed passage, a strict time limit, and a minimum net WPM and
              accuracy threshold you must clear to pass. Unlike a casual typing test, these rounds are
              pass/fail: falling short by even a few WPM can mean disqualification regardless of how
              well you did on the written portion of the exam.
            </p>
          </div>

          <div>
            <SeoHeading id="available-exams">Available Mock Exams</SeoHeading>
            <div className="mt-4">
              <DataTable
                headers={["Exam", "Authority", "Duration", "Pass Mark"]}
                rows={mockExams.map((e) => [
                  e.name,
                  e.authority,
                  `${Math.round(e.durationSeconds / 60)} min`,
                  e.languageRules.map((r) => `${r.passWpm} WPM (${r.code.toUpperCase()})`).join(" / "),
                ])}
              />
            </div>
          </div>

          <Callout icon="🎯" title="Practice with intent" tone="gold">
            For a broader typing credential (not tied to one exam), our{" "}
            <Link href="/typing-certificate" className="text-primary underline underline-offset-2">
              Typing Certificate
            </Link>{" "}
            exam is a genuinely useful complement — a proctored-style 3-stage timed exam that produces
            a verifiable, downloadable result.
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
