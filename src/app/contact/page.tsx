import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact Typing Globe",
  description: "Get in touch with us. Email, questions, feedback, and suggestions are all welcome.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <section>
        <SectionLabel>Get In Touch</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contact Us</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Have a question? Found a bug? Want to suggest a feature? We'd love to hear from you.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Email</h2>
        <p className="mt-4 text-lg text-muted">
          The fastest way to reach us is by email:
        </p>
        <p className="mt-4">
          <a
            href="mailto:kamrulislamkholil@gmail.com"
            className="inline-block rounded-lg border border-primary bg-primary/5 px-6 py-3 font-medium text-primary hover:bg-primary/10 transition-colors"
          >
            kamrulislamkholil@gmail.com
          </a>
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">What We'd Like to Hear About</h2>
        <ul className="mt-4 list-inside space-y-2 text-muted">
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Bug reports: if something doesn't work as expected</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Feature requests: languages, test modes, or improvements you'd like to see</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Keyboard layout corrections: if a layout needs fixing for your language</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>Sample text improvements: corrections or better examples for any language</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary">→</span>
            <span>General feedback: what's working, what isn't, what you'd change</span>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-foreground">Response Time</h2>
        <p className="mt-4 text-muted">
          We aim to respond to all emails within 48 hours. For urgent issues, please mention that in your subject line.
        </p>
      </section>
    </div>
  );
}
