import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";
import { CustomTypingTest } from "@/components/CustomTypingTest";
import { SeoHeading } from "@/components/seo/SeoHeading";
import { DataTable } from "@/components/seo/DataTable";
import { Callout } from "@/components/seo/Callout";
import { SeoFaqBlock } from "@/components/seo/SeoFaqBlock";

export const metadata: Metadata = {
  title: "Custom Typing Test – Practice With Your Own Text | Typing Globe",
  description:
    "Create a custom typing test with your own text. Paste notes, scripts, work-safe samples, or multilingual text and check WPM and accuracy instantly.",
  alternates: { canonical: "/custom-typing-test" },
};

const faqItems = [
  {
    question: "Can I create a typing test with my own text?",
    answer:
      "Yes. Paste or write the passage you want to practice into Typing Globe's custom-text field, start the test, and reproduce the text as it appears. The tool measures WPM and accuracy while you type, letting you practice material that is relevant to your own work, study, or language goals.",
  },
  {
    question: "Is my pasted text saved or uploaded?",
    answer:
      "The current Typing Globe page states that custom text is processed in your browser for the session and is not uploaded to its servers, logged, or shared. Even with browser-only processing, follow any workplace, school, legal, or confidentiality rules that apply to the material you choose to practice.",
  },
  {
    question: "Can I use a language that does not have a dedicated Typing Globe test?",
    answer:
      "Yes. Custom text is designed for text beyond the preset language pages. Paste a passage in the language or script you want to practice, switch to the keyboard or input method you normally use, and enable right-to-left mode when the script requires that direction.",
  },
  {
    question: "Can I use Arabic, Urdu, or Hebrew text?",
    answer:
      "Yes. Typing Globe includes a right-to-left toggle for custom passages. Turn it on before starting when your text uses an RTL script such as Arabic, Urdu, or Hebrew. Mixed numbers, URLs, and Latin abbreviations can still change visual flow, so include them when they are part of your real typing.",
  },
  {
    question: "What is the best length for a custom typing test?",
    answer:
      "A paragraph of roughly 50 to 100 words is practical for a quick session, while several paragraphs can test longer-term consistency. Use shorter text when drilling one specific weakness and longer text when you want a WPM benchmark that is less affected by a few unusually fast or slow keystrokes.",
  },
  {
    question: "Can I paste study notes or work documents?",
    answer:
      "Yes, when you have the right to use the material and it does not violate confidentiality rules. For work documents, we recommend replacing private names, account numbers, patient details, passwords, and other restricted information with realistic placeholders while keeping the vocabulary and formatting you want to practice.",
  },
  {
    question: "Should I use the same custom passage every time?",
    answer:
      "Keep at least one benchmark passage unchanged if you want a clearer way to compare progress. You can use different passages for daily practice, but changing vocabulary and difficulty makes WPM less directly comparable. Occasionally use unfamiliar preset text as well so memorization does not inflate your benchmark.",
  },
  {
    question: "Is a custom typing test better than a regular typing test?",
    answer:
      "Neither is universally better. Custom tests are stronger for relevant, targeted practice with your own vocabulary, scripts, or documents. Preset tests are stronger for standardized benchmarking and unfamiliar text. Using both gives you a better balance between real-world practice and consistent performance measurement.",
  },
];

export default function CustomPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <SectionLabel>Custom Typing Test</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
          Practice With Your Own Text
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted">
          Paste the text you actually need to type and turn it into a live typing test in seconds. Typing Globe's Custom Typing Test lets you practice with study notes, work-safe sample documents, speeches, scripts, language-learning material, or any other text you have the right to use while tracking WPM and accuracy as you type.
        </p>
      </div>
      <CustomTypingTest />

      {/* Long-form SEO content */}
      <section className="mt-20 flex flex-col gap-10 border-t border-border pt-12">
        <div>
          <SeoHeading id="what-is-test">What Is a Custom Typing Test?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            A custom typing test is a typing-speed test created from text that you choose yourself. You paste or write the passage, start the test, and then reproduce that exact material while the tool measures your performance. The content can be ordinary prose, technical vocabulary, notes, a script, or text in another language.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            People search for this kind of tool as custom typing test, create your own typing test, typing test with your own text, paste text typing test, custom WPM test, personal typing test, and typing practice with custom text. The search terms vary, but the intent is the same: the user wants control over the passage.
          </p>
        </div>

        <div>
          <SeoHeading id="why-different">Why Practice With Your Own Text?</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Preset typing tests are useful because they give you a consistent benchmark, but they cannot always match what you type in real life. Your own text can include the exact product names, technical terms, punctuation patterns, abbreviations, numbers, or foreign-language characters that make your everyday keyboard work difficult.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            That makes custom practice especially useful when your problem is specific rather than general. Maybe you type ordinary English quickly but slow down on legal terminology, medical terms, code-like strings, customer-support phrases, academic vocabulary, or a second language. A custom passage lets you bring that difficulty directly into the practice box.
          </p>
        </div>

        <div>
          <SeoHeading id="how-works">How Typing Globe's Custom Typing Test Works</SeoHeading>
          <p className="mt-3 leading-relaxed text-muted">
            Paste or write the text you want to practice into the custom-text field, then start the test. Typing Globe turns that passage into a scored typing session with live WPM and accuracy tracking. You are not limited to a preset story, language list, or random-word bank because the passage comes from you.
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            If your text uses a right-to-left script such as Arabic, Urdu, or Hebrew, turn on the right-to-left option before starting. That keeps the visual direction aligned with the script so you can focus on reproducing the passage instead of fighting a left-to-right interface that was designed around English.
          </p>
        </div>

        <Callout icon="🔒" title="Privacy: What Happens to the Text You Paste?" tone="primary">
          The current Typing Globe page states that custom text is processed entirely in the browser for the session and is not uploaded to Typing Globe's servers, logged, or shared. Closing the tab ends that session, so the passage is not being added automatically to a public library of typing tests.
        </Callout>

        <div>
          <SeoHeading id="custom-vs-preset">Custom Typing Test vs. Preset Typing Test at a Glance</SeoHeading>
          <div className="mt-3">
            <DataTable
              headers={["Feature", "Custom Typing Test", "Preset Typing Test"]}
              rows={[
                ["Text source", "You paste or write it", "Prepared by the site"],
                ["Best use", "Targeted practice", "Consistent benchmarking"],
                ["Vocabulary", "Your real terms and phrases", "General curated vocabulary"],
                ["Language/script", "Any supported by your browser/input method", "Only available preset languages"],
                ["RTL handling", "Manual right-to-left toggle", "Handled by each dedicated test"],
                ["Progress comparison", "Best with the same benchmark passage", "Easier across repeated preset tests"],
              ]}
            />
          </div>
        </div>

        <div>
          <SeoHeading id="use-cases">Custom Typing for Different Goals</SeoHeading>
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-semibold text-foreground">Use Study Notes as Typing Practice</h4>
              <p className="mt-2 text-sm text-muted">
                Students can turn lecture notes, definitions, revision summaries, vocabulary lists, or short explanations into custom typing sessions. The benefit is practical: you are spending keyboard-practice time on material you already need to revisit instead of typing a random passage that has no connection to your current coursework.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Practice Work Documents and Professional Vocabulary</h4>
              <p className="mt-2 text-sm text-muted">
                Custom typing is especially useful when your work includes terminology that rarely appears in generic passages. Use representative material rather than confidential data, replacing real customer names, account numbers, or other restricted information with realistic placeholders.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Create Custom Practice for Job-Specific Typing</h4>
              <p className="mt-2 text-sm text-muted">
                If you are preparing for a role that uses specialized vocabulary, build passages that resemble the language and formatting you expect to handle. Create separate passages for separate weaknesses to make the practice diagnostic.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Custom Typing for Language Learners</h4>
              <p className="mt-2 text-sm text-muted">
                Language learners can paste vocabulary sentences from their current lesson and practice them with the correct keyboard layout or input method. Keep the language level appropriate to your current skill and use the exact setup you intend to use outside the test.
              </p>
            </div>
          </div>
        </div>

        <div>
          <SeoHeading id="common-mistakes">Common Mistakes When Creating Your Own Typing Test</SeoHeading>
          <ul className="mt-4 flex flex-col gap-3">
            {[
              "The first mistake is choosing text only because it is easy. If every word is effortless, your WPM may look impressive while your weak keys remain untouched.",
              "The second mistake is changing the passage every session and then treating every score as directly comparable. Different text creates different difficulty.",
              "The third mistake is pasting sensitive information without thinking. Browser-only processing is useful, but privacy and workplace rules still matter.",
              "The fourth mistake is retaking the same passage at full speed without reviewing the errors. If a word keeps causing trouble, stop and practice it deliberately.",
              "The fifth mistake is using an input method that does not match your real environment. Consistent input conditions make your score much easier to interpret.",
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-0.5 text-primary">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SeoHeading id="frequently-asked-questions">Frequently Asked Questions About Custom Typing Tests</SeoHeading>
          <div className="mt-4">
            <SeoFaqBlock items={faqItems} />
          </div>
        </div>

        <Callout icon="📝" title="Create Your Custom Typing Test Now" tone="primary">
          Paste the text you actually want to practice and turn it into a typing test built around your goal. Use non-sensitive study notes, professional vocabulary, an original script, a language-learning passage, technical text, or any other material you are allowed to use, then type naturally and review both WPM and accuracy.
        </Callout>
      </section>
    </div>
  );
}
