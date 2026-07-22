import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockExams, getMockExamBySlug } from "@/data/mockExams";
import { SectionLabel } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";
import { MockExamRunner } from "@/components/exam/MockExamRunner";

export function generateStaticParams() {
  return mockExams.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exam = getMockExamBySlug(slug);
  if (!exam) return {};

  return {
    title: `${exam.name} — Free Mock Test`,
    description: `Practice ${exam.name} in the exact real-exam format — ${Math.round(exam.durationSeconds / 60)} minutes, real pass/fail scoring. Free, no signup.`,
    alternates: { canonical: `/exam/${slug}` },
  };
}

export default async function MockExamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exam = getMockExamBySlug(slug);
  if (!exam) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 text-center">
        <SectionLabel>{exam.country}</SectionLabel>
        <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">{exam.name}</h1>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
          {exam.authority} · {exam.postName}
        </p>
      </div>

      <MockExamRunner exam={exam} />

      {exam.confidenceNote && (
        <div className="mx-auto mt-6 max-w-2xl">
          <Callout icon="⚠️" title="Verify against your official notification" tone="gold">
            {exam.confidenceNote}
          </Callout>
        </div>
      )}

      <section className="mx-auto mt-16 flex max-w-2xl flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="about-this-exam">About {exam.name}</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">{exam.seo.intro}</p>
        </div>

        <div>
          <SeoHeading id="exam-format">Exam Format</SeoHeading>
          <div className="mt-4">
            <DataTable headers={["Rule", "Detail"]} rows={exam.seo.howItWorks} />
          </div>
        </div>

        <Callout icon="🎯" title="This is a mock test" tone="primary">
          This is an unofficial practice simulation built to mirror {exam.name}&apos;s real format and
          pass criteria — it is not affiliated with {exam.authority}. Always confirm exact requirements
          on your official exam notification.
        </Callout>

        <div className="flex flex-wrap gap-2">
          <Badge tone="primary">{Math.round(exam.durationSeconds / 60)} minutes</Badge>
          <Badge tone="accent">{exam.languageRules.length} language{exam.languageRules.length > 1 ? "s" : ""}</Badge>
          {exam.restrictBackspace && <Badge tone="danger">Backspace disabled</Badge>}
        </div>

        <div>
          <SeoHeading id="exam-faq">Frequently Asked Questions</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={exam.seo.faq} />
          </div>
        </div>
      </section>
    </div>
  );
}
