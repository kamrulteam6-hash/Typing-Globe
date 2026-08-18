import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, SectionLabel } from "@/components/ui/Card";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export const metadata: Metadata = {
  title: "Free Verified Typing Certificate | WPM & Accuracy",
  description:
    "Earn a verified typing speed certificate showing net WPM, accuracy, language, credential ID and QR. Take a 3-stage timed exam in 70 languages.",
  alternates: { canonical: "/typing-certificate" },
};

const faqItems = [
  {
    question: "Is the Typing Globe typing certificate verified?",
    answer:
      "Yes, in the sense defined by Typing Globe: the certificate is tied to an account and a completed certificate exam, and it includes a unique credential ID and QR code connected to a publicly verifiable record. This should not be confused with government accreditation or legal identity verification.",
  },
  {
    question: "Is the first typing certificate free?",
    answer:
      "Yes. Typing Globe currently states that your first certificate is free. A later retake to improve your score or earn a certificate with a different name requires a fresh three-stage exam and a retake fee.",
  },
  {
    question: "What appears on the certificate?",
    answer:
      "The certificate includes the name attached to the exam sitting, average net WPM, per-stage WPM and accuracy, language and script, a unique credential ID, a QR code for verification, and downloadable PNG or PDF formats.",
  },
  {
    question: "How many tests are in the certificate exam?",
    answer:
      "Typing Globe currently uses three timed stages of increasing difficulty and length. The certificate reports the average result across the easy, medium, and hard stages rather than using only one short test.",
  },
  {
    question: "Which languages can I use?",
    answer:
      "Typing Globe currently says the certificate exam is available in all 70 supported languages. Choose the language when starting the exam, and the certificate records the language and script used for that result.",
  },
  {
    question: "Can I retake the exam for a better WPM?",
    answer:
      "Yes. Retakes require completing all three stages again. Typing Globe states that the certificate reflects your best-ever average WPM, so a slower later retake does not lower the best result you previously earned.",
  },
  {
    question: "Can I change the name after earning a certificate?",
    answer:
      "Not on the same earned result. Typing Globe locks the name to the exam sitting. To receive a future certificate under a different name, you must retake the full certificate exam.",
  },
  {
    question: "Can I use the certificate for a job application?",
    answer:
      "You can use it as supporting evidence when the employer accepts independent typing certificates. It does not override an employer's own skills test or a government typing examination. Check the job posting or ask the hiring organization what evidence it accepts.",
  },
];

export default function TypingCertificatePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <SectionLabel>Typing Certificate</SectionLabel>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Earn a Verified Typing Speed Certificate — WPM, Accuracy & QR Verification
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-2">Reviewed by Typing Globe Engineering Team</p>
      </div>

      <div className="mb-12 space-y-3 leading-relaxed text-muted">
        <p>
          A typing-test screenshot can show a number, but it usually does not tell someone when the test was earned,
          which language was used, whether the result belongs to the person sharing it, or whether the page still has a
          record of that attempt. A certificate should provide more context than a cropped score.
        </p>
        <p>
          Typing Globe's certificate exam creates an account-linked record after a three-stage timed test. The
          downloadable certificate includes your average net WPM, accuracy, language and script, per-stage results, a
          unique credential ID, and a QR code that points back to a publicly verifiable record of that certificate.
        </p>
      </div>

      <div className="mb-16 flex justify-center">
        <Button href="/typing-certificate/dashboard" size="lg">
          Earn Your Certificate →
        </Button>
      </div>

      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="what-is-typing-certificate">What Is a Typing Speed Certificate?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A typing speed certificate is a document that records the result of a typing assessment. Depending on the
            provider, it may show WPM, net speed, accuracy, test language, date, or other details. People commonly use one
            as supporting evidence when they want to document a keyboard skill beyond a self-reported number.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Searches for typing certificate, typing speed certificate, verified typing certificate, free typing
            certificate, WPM certificate, and online typing certificate often share the same intent: take a structured
            test, receive a downloadable result, and have something more credible to share than an ordinary practice-test
            screenshot.
          </p>
        </div>

        <div>
          <SeoHeading id="what-verified-means">What "Verified" Means on Typing Globe</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            On Typing Globe, verified means the certificate is tied to an account and issued from a completed certificate
            exam rather than created from an anonymous browser score. The certificate carries a unique credential ID and
            QR code so someone can check the public record associated with that exact certificate.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            It is important not to stretch that word beyond what the system actually does. A Typing Globe certificate is
            not described as a government license, university accreditation, professional-board certification, or
            identity-document verification. Verification confirms the Typing Globe exam record; it does not guarantee that
            every employer or agency will accept it.
          </p>
        </div>

        <div>
          <SeoHeading id="how-certificate-works">How the Typing Globe Certificate Exam Works</SeoHeading>
          <div className="mt-4">
            <DataTable
              headers={["Step", "What Happens"]}
              rows={[
                ["1. Create an account", "Your certificate is tied to your Typing Globe account rather than an anonymous browser session."],
                ["2. Choose a language", "Pick any of the 70 languages currently supported by the certificate exam."],
                [
                  "3. Complete three timed stages",
                  "The exam uses three stages that increase in difficulty and length instead of relying on one short burst.",
                ],
                ["4. Receive an average result", "Your certificate reports the average across the easy, medium, and hard stages."],
                ["5. Download the certificate", "Save the final certificate as a PNG or PDF."],
                ["6. Share the verification", "The credential ID and QR let another person check the certificate record."],
              ]}
            />
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            The three-stage structure is one of the strongest parts of the certificate design. A single short test can be
            influenced by an unusually easy passage or one excellent minute. Averaging several timed stages of increasing
            difficulty gives the final certificate more context than a one-screen speed burst.
          </p>
        </div>

        <div>
          <SeoHeading id="what-included">What Your Typing Certificate Includes</SeoHeading>
          <div className="mt-4">
            <DataTable
              headers={["Certificate Field", "Why It Matters"]}
              rows={[
                [
                  "Name",
                  "Locked to the exam sitting in which the score was earned.",
                ],
                [
                  "Average net WPM",
                  "Mean of the certificate exam's three stage results.",
                ],
                [
                  "Per-stage breakdown",
                  "WPM and accuracy for each of the easy, medium, and hard stages.",
                ],
                [
                  "Language and script",
                  "The language used for the certificate exam.",
                ],
                [
                  "Credential ID",
                  "A unique identifier for the exact certificate record.",
                ],
                [
                  "QR code",
                  "A scannable route to public verification.",
                ],
                [
                  "Download format",
                  "PNG or PDF.",
                ],
              ]}
            />
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            These fields make the result easier to interpret. Instead of seeing only one WPM number, a reviewer can see
            the language, accuracy, stage breakdown, and verification details. That still does not turn the certificate
            into an officially regulated credential, but it gives the result a clearer audit trail than an ordinary
            screenshot.
          </p>
        </div>

        <div>
          <SeoHeading id="net-wpm">Why Net WPM Matters</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Raw speed can look impressive even when a typist makes enough mistakes to slow down real work. Net WPM is
            intended to represent productive speed after errors are taken into account, while accuracy shows how cleanly
            the passage was reproduced. Looking at both gives a more balanced view than gross speed alone.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            For a certificate, this matters because somebody reviewing the document may care as much about error control
            as keyboard pace. A typist who maintains strong accuracy across several stages can present a more informative
            result than someone who posts one unusually fast run with a high correction rate.
          </p>
        </div>

        <div>
          <SeoHeading id="three-stages">Why Three Stages Are Better Than One Lucky Minute</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Short typing tests are useful for practice, but they can be noisy. A familiar passage, an easy word sequence,
            or a strong first minute can produce a result that is difficult to reproduce. Longer or varied stages give
            fatigue, punctuation, vocabulary, and sustained concentration more opportunity to affect the score.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Typing Globe's certificate exam addresses that problem by averaging easy, medium, and hard stages of
            increasing length. It does not make the test immune to variation, but it reduces the chance that the entire
            certificate is based on one unusually favorable passage or one brief peak in performance.
          </p>
        </div>

        <div>
          <SeoHeading id="seventy-languages">70 Languages: A Major Difference from English-Only Certificates</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Typing Globe currently lets users earn the certificate in any of the 70 languages supported by its certificate
            system. That matters because typing skill is not automatically transferable between scripts, keyboard layouts,
            input methods, and writing systems. An English WPM score does not describe how efficiently someone types Arabic,
            Bengali, Hindi, or Chinese.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            The certificate therefore records the language and script used for the exam. If you work in more than one
            language, treat each result as evidence of performance in that specific typing environment rather than assuming
            one certificate proves equal skill across every keyboard or input method.
          </p>
        </div>

        <div>
          <SeoHeading id="resume">Can You Put a Typing Certificate on a Resume?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            You can list a typing certificate on a resume when typing speed is relevant to the role and the employer
            accepts independent evidence. A concise entry can include the provider, language, net WPM, accuracy, and
            credential ID or verification link. Keep the wording factual rather than describing it as a license or
            government qualification.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            For example, a data-entry, transcription, administrative, support, clerical, or document-production role may
            care about measurable keyboard performance. For a role where typing speed is irrelevant, the certificate may
            add little value. Use it where the skill supports the job description rather than adding it automatically to
            every application.
          </p>
        </div>

        <div>
          <SeoHeading id="linkedin">Can You Add It to LinkedIn or a Portfolio?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A verifiable certificate can also be linked from a portfolio, personal website, or professional profile when
            the platform gives you a suitable place for credentials or supporting documents. Include the exact certificate
            title, Typing Globe as issuer, the measured language, and the credential ID rather than inflating the scope of
            the result.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            If you share the PNG or PDF publicly, the QR and credential information make it easier for someone to check the
            underlying record. Before publishing any certificate image, review the visible personal information and make
            sure you are comfortable with what will be available to anyone who sees the document.
          </p>
        </div>

        <div>
          <SeoHeading id="employer-acceptance">Will Every Employer Accept an Online Typing Certificate?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            No independent certificate should promise universal employer acceptance. Some employers are happy to consider a
            verifiable third-party typing result, while others require an internal skills test, a specific provider, a
            government examination, or no certificate at all. The job posting and hiring organization decide what counts.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Use the certificate as supporting evidence, not as a substitute for an employer's required test. If a vacancy
            says candidates must complete a company-administered typing assessment, expect to take that assessment even if
            your Typing Globe certificate shows a higher WPM than the stated requirement.
          </p>
        </div>

        <div>
          <SeoHeading id="vs-government-exam">Typing Certificate vs. Government Exam Typing Test</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A Typing Globe certificate and a government recruitment typing test solve different problems. The certificate
            documents a Typing Globe exam result, while a government skill test determines whether you satisfy the recruiting
            authority's own rules. One does not replace the other unless the authority explicitly says it accepts an outside
            certificate.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            If you are preparing for SSC, RRB, a court recruitment test, public-service exam, or another formal assessment,
            use Typing Globe's{" "}
            <Link href="/government-exam-typing-test" className="text-primary hover:underline">
              Exam Hall
            </Link>{" "}
            for format-specific practice and follow the current official notification. Use the certificate separately when
            you want a general, verifiable record of your measured typing performance.
          </p>
        </div>

        <div>
          <SeoHeading id="vs-screenshot">Typing Certificate vs. a Normal Typing-Test Screenshot</SeoHeading>
          <div className="mt-4">
            <DataTable
              headers={["Feature", "Typing Globe Certificate", "Normal Screenshot", "Why It Matters"]}
              rows={[
                ["Account-linked result", "Yes", "Usually no", "Connects the result to a saved exam record"],
                ["Three-stage exam", "Yes", "Usually one test", "Reduces dependence on one short run"],
                ["Language shown", "Yes", "Sometimes", "Typing performance depends on language/input method"],
                [
                  "Per-stage WPM & accuracy",
                  "Yes",
                  "Usually no",
                  "Provides more context than one number",
                ],
                ["Credential ID", "Yes", "No", "Identifies the exact certificate"],
                ["QR/public verification", "Yes", "No", "Allows another person to check the record"],
                ["PNG/PDF download", "Yes", "Screenshot only", "Gives a cleaner document for sharing"],
              ]}
            />
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            The distinction is not that screenshots are fake. A screenshot can accurately show a practice result. The
            difference is that a certificate creates a persistent record with verification details and a defined exam flow,
            which makes it easier for another person to understand where the score came from.
          </p>
        </div>

        <div>
          <SeoHeading id="other-formats">How Typing Globe Compares with Other Online Certificate Formats</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Online typing certificates are not all designed the same way. TypingTest.com currently describes a five-minute
            English certification test using predefined text, while Ratatype offers a certificate after its typing test and
            requires registration for certification. Those are legitimate models, but their formats differ from Typing
            Globe's system.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Typing Globe's main differentiators are the three-stage average, support for 70 languages, account-linked
            records, per-stage breakdown, credential ID, QR verification, and PNG/PDF downloads. Those features should be
            explained clearly on the page instead of competing through unsupported claims that one certificate is universally
            'more official' than another.
          </p>
        </div>

        <div>
          <SeoHeading id="is-first-free">Is the First Typing Certificate Free?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Typing Globe currently states that the first certificate is free. That gives a new user one complete certificate
            exam and downloadable result without paying for the first credential. The page should keep this wording precise
            because 'free certificate' can become misleading if later attempts are subject to a fee.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Retaking after the first certificate requires a fresh three-stage exam plus a small retake fee. The purpose is
            to make sure a new certificate reflects a newly earned result rather than letting someone edit the old name or
            score without completing another assessment.
          </p>
        </div>

        <div>
          <SeoHeading id="retake">What Happens If You Retake the Certificate Exam?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Typing Globe allows retakes from the user's dashboard. A retake means completing all three stages again from the
            beginning rather than repeating only the weakest stage. The certificate system keeps the best-ever average WPM,
            so a slower retake does not reduce the best result already earned.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            That best-score rule is useful for improvement attempts, but users should still interpret the credential honestly.
            The certificate represents the best recorded average under Typing Globe's exam format, not an average of every
            test the person has ever taken and not a guarantee that the same WPM will appear in every future assessment.
          </p>
        </div>

        <div>
          <SeoHeading id="name-locked">Why the Name Is Locked to the Exam Sitting</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Typing Globe states that the certificate name is locked to the exam sitting in which the score was earned. If
            you want a future certificate under a different name, the system requires a new full exam. That prevents one
            completed test result from simply being reissued under several different names.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            This is a useful anti-relabeling control, but it is not the same as a government identity check. Unless Typing
            Globe adds a documented identity-verification process, the page should not imply that the certificate proves a
            legal identity beyond the account and name attached to the exam record.
          </p>
        </div>

        <div>
          <SeoHeading id="prepare-before">How to Prepare Before Taking the Certificate Exam</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Do not use your free first certificate attempt as your first serious typing session. Take several ordinary
            Typing Globe tests in the same language, confirm that your keyboard or input method is working correctly, and
            practice across easy, medium, and harder text so the certificate stages do not feel unfamiliar.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Focus on repeatable accuracy rather than one personal-best WPM. Because the certificate averages three stages, a
            balanced performance matters more than a dramatic opening burst followed by a weak final stage. Take the exam when
            your normal results are reasonably stable across several passages.
          </p>
        </div>

        <div>
          <SeoHeading id="practice-routine">A 20-Minute Certificate Preparation Routine</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Begin with five minutes of easy, accurate typing to warm up your hands. Spend the next five minutes on the words,
            punctuation, or script combinations that cause repeated mistakes. Then take a medium or harder timed test at
            normal speed without restarting when the score looks imperfect.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Finish with one final test that you treat like an exam attempt: no distractions, no switching layouts, and no score
            chasing. Review both WPM and accuracy afterward. If your performance changes dramatically from one test to the
            next, keep practicing before using the certificate exam as your benchmark.
          </p>
        </div>

        <div>
          <SeoHeading id="four-week-plan">A 4-Week Typing Certificate Preparation Plan</SeoHeading>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">Week 1: Establish Your Real Baseline</h4>
              <p className="mt-2 text-sm text-muted">
                Take several normal typing tests in the exact language you plan to certify. Record WPM and accuracy, but focus
                on the range rather than the single highest score. If your results swing widely, the first goal is consistency
                before speed.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Week 2: Fix Repeated Errors</h4>
              <p className="mt-2 text-sm text-muted">
                Identify the keys, punctuation marks, character combinations, or input-method steps that repeatedly lower
                accuracy. Use targeted practice and custom text to make those movements automatic. A certificate is more useful
                when the result reflects stable control rather than aggressive typing followed by constant corrections.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Week 3: Practice Longer and Harder Passages</h4>
              <p className="mt-2 text-sm text-muted">
                Because the certificate exam contains stages of increasing difficulty and length, include more than short
                one-minute warm-ups. Practice sustained passages and harder vocabulary so concentration does not collapse when
                the exam stops feeling easy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Week 4: Simulate the Exam Mindset</h4>
              <p className="mt-2 text-sm text-muted">
                Take several timed tests without restarting because of an early mistake. Practice staying calm after an error
                and returning to your rhythm. When your WPM and accuracy remain reasonably stable across multiple difficulty
                levels, you are in a better position to take the three-stage certificate exam.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SeoHeading id="highest-wpm">Should You Chase the Highest Possible WPM Before Certifying?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Not necessarily. A certificate can document your current skill level, and you can retake later if you improve.
            Chasing a dramatic peak can encourage poor technique or delay certification indefinitely. A more useful question
            is whether the score you earn is repeatable enough that you would feel comfortable typing in front of an employer.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            If the certificate is for a specific job, compare your normal performance with the employer's stated requirement
            rather than an internet 'average WPM' claim. If no requirement is published, present the measured result without
            pretending that it automatically places you in a universal beginner, professional, or expert category.
          </p>
        </div>

        <div>
          <SeoHeading id="does-not-prove">What a Typing Certificate Does Not Prove</SeoHeading>
          <ul className="mt-4 flex flex-col gap-2">
            {[
              "It does not guarantee that a government agency or employer will accept an outside certificate.",
              "It does not replace a required employer, court, government, or school-administered typing test.",
              "It does not prove legal identity unless a documented identity-verification process is part of the exam.",
              "It does not prove identical speed in every language, keyboard layout, device, or typing environment.",
              "It does not mean one best score will be reproduced under every passage, duration, or pressure level.",
              "It should not be described as accredited or government-approved unless a real accrediting or government body has granted that status.",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            Clear limits make the certificate stronger, not weaker. A credential earns trust when it says exactly what was
            measured, how the result can be verified, and where its authority ends. Typing Globe should compete on transparent
            testing and verification rather than vague claims of official recognition.
          </p>
        </div>

        <Callout icon="🎓" title="Earn Your Typing Certificate" tone="primary">
          Create your Typing Globe account, choose the language you want to certify, and complete all three timed stages. When
          the exam is finished, review the average net WPM, accuracy, and stage breakdown, then download your certificate as a
          PNG or PDF.
        </Callout>

        <div>
          <SeoHeading id="certificate-faq">Frequently Asked Questions About the Typing Certificate</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
