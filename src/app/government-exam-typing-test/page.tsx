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
  title: "Government Exam Typing Tests | SSC, RRB & More",
  description:
    "Practice government and competitive exam typing mocks for SSC CHSL, SSC CGL DEST, RRB NTPC, courts, CPCT, BPSC and more. Check current official rules before test day.",
  alternates: { canonical: "/government-exam-typing-test" },
};

const faqItems = [
  {
    question: "Are Typing Globe government exam mocks official?",
    answer:
      "No. Typing Globe's Exam Hall is an independent practice resource and is not affiliated with SSC, RRB, courts, public-service commissions, or the other recruiting authorities listed. Use the mocks for preparation and confirm the current rules in your official notification before test day.",
  },
  {
    question: "What is the SSC CHSL typing speed for LDC and JSA?",
    answer:
      "The SSC CHSL notice currently used for verification states 35 WPM for English and 30 WPM for Hindi, tested on a given passage for 10 minutes. SSC also equates those speeds to about 10,500 and 9,000 key depressions per hour respectively.",
  },
  {
    question: "Is the SSC CHSL DEO test the same as the LDC/JSA typing test?",
    answer:
      "No. The CHSL notice separates them. DEO skill tests use English data-entry key-depression targets over 15 minutes, including 8,000 KDPH for some posts and 15,000 KDPH for specified departments or ministries. Check which DEO standard applies to your post.",
  },
  {
    question: "What is the SSC CGL DEST requirement?",
    answer:
      "The current SSC CGL notice defines DEST as a 15-minute passage of about 2,000 key depressions and states that it is qualifying in nature. Higher standards can be fixed for certain posts, so it is safer to practice the published key-depression format than treat an approximate WPM conversion as the official cutoff.",
  },
  {
    question: "What is the RRB NTPC typing speed?",
    answer:
      "Current RRB instructions available during this review specify a minimum of 30 WPM in English or 25 WPM in Hindi for the Computer Based Typing Skill Test. Typing Globe currently configures its RRB NTPC mock as a 10-minute English/Hindi practice test.",
  },
  {
    question: "What is KDPH?",
    answer:
      "KDPH means Key Depressions Per Hour. SSC's CHSL rules explicitly state that 35 WPM corresponds to about 10,500 KDPH and 30 WPM to about 9,000 KDPH. Other tests may define the required key-depression volume directly instead of starting with WPM.",
  },
  {
    question: "Should I practice with Backspace disabled?",
    answer:
      "Only when it matches your target rules or when you intentionally want stricter practice. Some Typing Globe mocks disable Backspace as a training constraint even when the real exam allows limited correction. Read the individual mock warning and confirm the official instructions.",
  },
  {
    question: "How often can government typing-test rules change?",
    answer:
      "Recruitment rules can change between notifications, posts, categories, and exam cycles. Do not rely on an old cutoff simply because the exam name is unchanged. Recheck the latest official notice, skill-test instructions, and any later corrigendum before the examination.",
  },
];

const countries = Array.from(new Set(mockExams.map((e) => e.country)));

export default function ExamHallPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <SectionLabel>Exam Hall</SectionLabel>
        <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Government & Competitive Exam Typing Tests — Practice the Rules, Not Just WPM
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-2">Reviewed by Typing Globe Engineering Team</p>
      </div>

      <div className="mb-12 space-y-3 leading-relaxed text-muted">
        <p>
          A government typing test is rarely just a normal one-minute WPM check with a different title. The real challenge
          may be a fixed 5, 10, or 15-minute session, a language choice locked before test day, a key-depression target,
          limited correction, a special error rule, or a qualifying cutoff tied to one specific post.
        </p>
        <p>
          Typing Globe's Exam Hall brings those practice formats into one place. The current library contains 16 mock
          assessments covering SSC, RRB, state and court recruitment, South Asian public-service exams, U.S. clerical
          practice, employer assessments, and numeric data entry. Each mock is independent practice, not an official
          examination.
        </p>
      </div>

      <div className="mb-16">
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

      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="what-is-government-exam">What Is a Government Exam Typing Test?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A government exam typing test is a timed keyboard skill assessment used in some recruitment processes after or
            alongside written stages. Depending on the authority, it may measure words per minute, key depressions,
            accuracy, error percentage, or numeric keystrokes rather than relying on one universal typing formula.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            That is why people searching for government exam typing test, competitive exam typing test, SSC typing test
            practice, RRB NTPC typing test, government typing test online, or typing mock test for government jobs often
            need more than a generic speed test. They need practice that resembles the rules of the target exam.
          </p>
        </div>

        <div>
          <SeoHeading id="official-notification-wins">The Most Important Rule: Your Official Notification Wins</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Typing Globe's Exam Hall is an unofficial practice simulator. Recruitment bodies can change duration,
            qualifying standards, accepted language, keyboard or font requirements, error rules, and post-specific
            conditions between cycles. Use the mock to train, but use the current official notice, admit-card instructions,
            and recruiting authority as the final source of truth.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            This matters especially for court recruitment, state examinations, and skill tests that use different rules for
            different posts. A mock can be deliberately stricter or simplified for browser practice. When that happens, the
            page should say so clearly instead of claiming that every detail is an exact official replica.
          </p>
        </div>

        <div>
          <SeoHeading id="why-rules-differ">Why a Regular Typing Test Can Give False Confidence</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Suppose you can type 42 WPM in a relaxed one-minute test where Backspace works normally. That is useful
            information, but it may not answer the question your exam actually asks. A ten-minute test can expose fatigue,
            while a no-correction or limited-correction rule can punish the same mistakes you usually erase without
            thinking.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Government skill tests can also use formal administrative passages instead of casual vocabulary. Hindi tests
            may require a prescribed input environment, court tests can specify fonts or keyboard conventions, and
            data-entry tests may use key depressions rather than WPM. Practice should match those constraints as closely as
            the official instructions require.
          </p>
        </div>

        <div>
          <SeoHeading id="examples-rules-differ">Three Official Examples That Show Why the Rules Differ</SeoHeading>
          <div className="mt-4">
            <DataTable
              headers={["Exam / Skill Test", "Time", "Officially Stated Speed / Volume", "Why It Matters"]}
              rows={[
                [
                  "SSC CHSL LDC / JSA",
                  "10 minutes",
                  "35 WPM English or 30 WPM Hindi",
                  "SSC equates these to about 10,500 / 9,000 KDPH.",
                ],
                [
                  "SSC CHSL DEO / DEO Grade A",
                  "15 minutes",
                  "8,000 KDPH or 15,000 KDPH depending on the specified post/department",
                  "This is a data-entry skill test, not the same 10-minute LDC/JSA typing test.",
                ],
                [
                  "SSC CGL DEST",
                  "15 minutes",
                  "Passage of about 2,000 key depressions",
                  "Qualifying; higher standards can be set for certain posts.",
                ],
                [
                  "RRB NTPC Typing Skill Test",
                  "Typing Globe mock: 10 minutes",
                  "Official RRB instructions specify 30 WPM English or 25 WPM Hindi",
                  "Use current RRB instructions for the exact cycle and eligible posts.",
                ],
              ]}
            />
          </div>
          <p className="mt-4 leading-relaxed text-muted">
            These examples are a good reminder that 'government typing test' is not one standardized event. Even inside
            SSC, CHSL LDC/JSA, CHSL DEO, and CGL DEST use different structures. Preparing for the wrong skill-test format
            can leave you fast on paper but underprepared for the actual screen you face.
          </p>
        </div>

        <div>
          <SeoHeading id="chsl-correction">Important Correction: CHSL LDC/JSA and CHSL DEO Are Not the Same Typing Test</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            The current SSC CHSL notice separates the LDC/JSA typing test from the DEO skill tests. LDC/JSA candidates use
            a 10-minute typing test with the 35 WPM English or 30 WPM Hindi standard. DEO skill tests use English
            key-depression targets over 15 minutes, with 8,000 or 15,000 KDPH depending on the specified post.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            That means a single 'SSC CHSL Typing Test' card should not be treated as sufficient preparation for every CHSL
            post. If your target is DEO, confirm which DEO standard applies to your department or ministry and practice that
            volume and duration rather than assuming the LDC/JSA rule applies.
          </p>
        </div>

        <div>
          <SeoHeading id="dest-correction">Important Correction: SSC CGL DEST Is Not Simply a 27 WPM Test</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            It is tempting to convert 2,000 key depressions in 15 minutes into an approximate WPM figure, but the current
            SSC CGL notice itself defines DEST by passage length and time. It also says DEST is mandatory for all posts,
            subject to stated exemptions, and that higher standards can be used for some posts.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            For SEO and candidate trust, the safer wording is therefore 'about 2,000 key depressions in 15 minutes' rather
            than publishing 27 WPM as if SSC had declared that universal pass mark. A mathematical conversion can be useful
            for practice, but it should be labeled as a conversion, not official wording.
          </p>
        </div>

        <div>
          <SeoHeading id="metrics">WPM, KDPH, Key Depressions, and KPH Are Different Metrics</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            WPM means words per minute and is the most familiar typing-speed measure. KDPH means key depressions per hour,
            and SSC explicitly links 35 WPM to about 10,500 KDPH and 30 WPM to about 9,000 KDPH in its CHSL typing-test
            rules. Those conversions assume a standardized five-keystroke word.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            A numeric 10-key assessment is different again. It is more naturally scored in KPH, or keystrokes per hour,
            because rows of digits do not form normal words. Typing Globe's 10-Key mock correctly reports a numeric KPH
            target rather than pretending that invoice numbers should be measured as prose WPM.
          </p>
        </div>

        <div>
          <SeoHeading id="gross-vs-qualifying">Do Not Confuse Gross Speed with Exam-Qualifying Speed</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A candidate can type quickly and still fail if the exam evaluates mistakes, correct key depressions, minimum
            output, or a separate accuracy rule. That is why your practice record should include more than a single highest
            WPM. Track accuracy, error patterns, completed volume, and whether you met the rules of the specific mock.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            When an official notice publishes an error tolerance, practice below it rather than hovering exactly on the
            line. When the notice does not publish one, do not invent a category-based limit just because a previous
            recruitment cycle used it. Current rules should be checked again each year.
          </p>
        </div>

        <div>
          <SeoHeading id="backspace-correction">Backspace and Correction Rules Can Change Your Strategy</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A typist who automatically corrects every small mistake may lose valuable seconds in an exam where corrections
            are limited or Backspace is disabled. Some Typing Globe mocks intentionally block deletion to reproduce or even
            exceed the strictness of the target format. Read the mock's warning before assuming that behavior is an official
            rule.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            For example, Typing Globe openly states that its UPSSSC mock is stricter than the real correction rule by
            disabling Backspace completely. That is good practice design when clearly disclosed, but it should be presented
            as a deliberate training constraint rather than an exact browser copy of the official examination software.
          </p>
        </div>

        <div>
          <SeoHeading id="english-hindi">English and Hindi: Practice the Language You Will Actually Use</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            If the application form locks your typing medium, do not postpone that decision until the final week. English
            and Hindi are different keyboard tasks, and a candidate who has 40 WPM in English may not have the equivalent
            control in Hindi. Practice in the language and input method required for the target notification.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Court and state recruitment can be especially specific about Hindi fonts, layouts, or input conventions. Do not
            assume that Mangal, KrutiDev, Remington, or another layout is accepted everywhere. Typing Globe's individual
            mock pages flag some of these differences, but the official notification should decide your final setup.
          </p>
        </div>

        <div>
          <SeoHeading id="passage-style">Exam Passage Style Matters More Than People Expect</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A formal government passage can feel slower than conversational text because it contains longer administrative
            words, dates, abbreviations, policy language, punctuation, and unfamiliar sentence structures. If all of your
            practice comes from short everyday word lists, your first full mock may feel harder even though your keyboard
            skill has not disappeared.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Use formal passages during the final phase of preparation so reading difficulty does not become a surprise. The
            goal is not to memorize government vocabulary; it is to become comfortable typing dense, ordinary official prose
            without losing your place every time a sentence becomes long.
          </p>
        </div>

        <div>
          <SeoHeading id="build-baseline">How to Build an Exam-Specific Practice Baseline</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Begin with the exact mock duration rather than your favorite test length. If the target uses ten minutes, take a
            full ten-minute baseline. Record the score, accuracy, completed volume, and the rule you failed first. A
            realistic baseline is more valuable than a flattering one-minute personal best.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Then separate the problem. If speed is low but accuracy is strong, practice continuous rhythm. If speed is high
            but mistakes fail the mock, reduce correction-heavy rushing. If your score collapses after minute six or seven,
            the issue may be endurance rather than raw keyboard knowledge.
          </p>
        </div>

        <div>
          <SeoHeading id="safety-margin">Train Above the Cutoff Without Inventing a Magic Safety Margin</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            It is sensible to become comfortably faster than a published minimum because exam-day nerves, unfamiliar
            hardware, and a difficult passage can reduce performance. What is not sensible is claiming that every candidate
            must train exactly five or ten WPM above the cutoff. The right buffer depends on your consistency.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            A better target is repeatability. When you can clear the official minimum across several full-length mocks with
            strong accuracy rather than only once on your best day, your preparation is more stable. Track a run of recent
            attempts instead of celebrating one unusually good score.
          </p>
        </div>

        <div>
          <SeoHeading id="practice-routine">A 20-Minute Government Typing Practice Routine</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Start with five minutes of slow, accurate typing in the correct language and layout. Then spend the main block
            on one full exam-style attempt or the closest duration your schedule allows. Do not pause the timer to fix
            posture, switch keyboards, or reread instructions once the mock begins.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Use the final minutes to review why you lost points or failed. Write down repeated spelling errors, weak key
            combinations, correction habits, and the minute when your speed dropped. That review turns the mock from a
            pass/fail screen into a practice plan for the next session.
          </p>
        </div>

        <div>
          <SeoHeading id="six-week-plan">A 6-Week Competitive Exam Typing Plan</SeoHeading>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">Weeks 1-2: Build Accurate Base Speed</h4>
              <p className="mt-2 text-sm text-muted">
                Use normal typing practice to remove obvious key hesitation while taking two or three exam-format baselines
                each week. Do not obsess over passing yet. Your first goal is to learn the exact duration, language, scoring
                metric, and correction behavior so there are no surprises later.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Weeks 3-4: Practice the Exact Constraint</h4>
              <p className="mt-2 text-sm text-muted">
                Shift more sessions into the target mock. If the exam is ten minutes, train ten minutes. If it uses key
                depressions, track key depressions. If the browser mock disables Backspace for stricter practice, learn to
                keep moving after small mistakes instead of turning every error into a long interruption.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Weeks 5-6: Build Repeatable Passes</h4>
              <p className="mt-2 text-sm text-muted">
                Run full simulations under consistent conditions and record a sequence of results. Keep one or two lighter
                practice days for technique, but make the final phase exam-specific. Your goal is not a single personal
                record; it is the ability to clear the required standard repeatedly without unusual luck.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SeoHeading id="how-often-mocks">How Often Should You Take Full Mock Exams?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Full mocks are valuable, but taking them endlessly can turn practice into score watching. Early in preparation,
            use fewer full mocks and more targeted drills. Closer to the exam, increase full-duration attempts because
            pacing, fatigue, and exam-specific correction rules need repetition too.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            If two consecutive mocks fail for the same reason, stop taking more identical tests for a moment. Fix the
            underlying problem first. Ten more failed attempts will not automatically teach a key you cannot locate or a
            Hindi input sequence you consistently mistype.
          </p>
        </div>

        <div>
          <SeoHeading id="final-week">What to Practice in the Final Week</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Do not rebuild your entire technique seven days before the test. Use the keyboard layout, language, and
            correction strategy you have already trained. Take a few full-duration mocks, review official instructions
            again, and make sure you understand what counts as a mistake, what can be corrected, and when the test ends.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            Avoid switching to a new font, Hindi layout, keyboard, or typing method because somebody online claims it is
            faster. Last-minute changes can erase muscle memory. The safest final-week preparation is usually consistency
            plus a fresh check of the official recruitment notice.
          </p>
        </div>

        <div>
          <SeoHeading id="across-countries">Government Exam Typing Tests Across Countries</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Typing Globe's Exam Hall is broader than Indian recruitment. The current catalog also includes Pakistan FPSC
            and PPSC mocks, Nepal Lok Sewa practice, Sri Lanka MSO practice, a Bangladesh BCS/BPSC mock, a U.S. federal
            clerk-typist simulation, employer assessments, and a numeric 10-key data-entry test.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            That breadth is useful, but it makes rule verification even more important because each country and authority
            has its own recruitment system. The page should help users find the relevant mock quickly, then send them back to
            the official authority for the current eligibility and skill-test rules.
          </p>
        </div>

        <div>
          <SeoHeading id="common-mistakes">Common Government Typing-Test Mistakes</SeoHeading>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              "Practicing only one-minute speed tests for an exam that lasts 10 or 15 minutes",
              "Using the LDC/JSA CHSL rule when preparing for a DEO skill test",
              "Treating SSC CGL DEST as an official 27 WPM cutoff instead of a key-depression task",
              "Changing Hindi keyboard or font conventions without checking the current notification",
              "Assuming Backspace and correction rules are identical across every exam",
              "Tracking only the highest WPM while ignoring accuracy, completed volume, and repeated failures",
              "Trusting an old coaching article when the recruiting authority has published a newer notice",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-muted">
            The safest preparation habit is simple: identify your exact post, open the latest official notice, write down
            the current typing rules, and then choose the Typing Globe mock that most closely matches them. If a mock is
            stricter or simplified, use that knowingly rather than assuming every detail is official.
          </p>
        </div>

        <Callout icon="🎯" title="Choose Your Exam and Start a Full-Length Mock" tone="primary">
          Open the mock for your exact exam, select the correct language or category when the page offers one, and take the
          full attempt without pausing. Treat the first run as a diagnosis. Your result should tell you whether speed,
          accuracy, endurance, correction habits, or the exam's special rules are the main problem.
        </Callout>

        <div>
          <SeoHeading id="exam-faq">Frequently Asked Questions About Government Exam Typing Tests</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
