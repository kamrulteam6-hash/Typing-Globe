import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Terms of Service — Typing Globe",
  description: "Terms and conditions for using Typing Globe.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-12">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: August 24, 2026</p>
      </section>

      <section className="mb-12 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p className="mt-3 text-muted leading-relaxed">
            By accessing and using Typing Globe, you accept and agree to be bound by these terms. If you do not agree to any part of these terms, you may not use the service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">2. Use License</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Typing Globe grants you a non-exclusive, non-transferable license to use this platform for personal, non-commercial practice and testing. You may not:
          </p>
          <ul className="mt-3 list-inside space-y-2 text-muted">
            <li>→ Modify or copy materials from this site</li>
            <li>→ Use this site for any commercial purpose without permission</li>
            <li>→ Attempt to gain unauthorized access to any portion of the site</li>
            <li>→ Transmit any abusive, defamatory, or otherwise objectionable material</li>
            <li>→ Disrupt the normal operation of the site through spam or denial-of-service attacks</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">3. Disclaimer of Warranties</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Typing Globe is provided "as is" without any warranties, express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
          </p>
          <p className="mt-3 text-muted">
            While we aim for accuracy in language content, keyboard layouts, and exam specifications, we make no guarantee that all information is 100% accurate or current. Always verify exam requirements with the official recruiting authority.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">4. Limitation of Liability</h2>
          <p className="mt-3 text-muted leading-relaxed">
            In no event shall Typing Globe, its creators, or its contributors be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of or inability to use the service, even if advised of the possibility of such damages.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">5. Accuracy of Content</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We strive to provide accurate typing tests, keyboard layouts, and exam information. However, content may contain errors or be outdated. Government exam specifications and typing requirements change frequently — always check the official government or recruiting authority website for the most current requirements.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">6. User Accounts</h2>
          <p className="mt-3 text-muted leading-relaxed">
            If you create an account, you are responsible for maintaining the confidentiality of your login credentials and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">7. Service Modifications</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We reserve the right to modify or discontinue the service, or any part of it, at any time. We will not be liable to you for any modification, suspension, or discontinuance of the service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">8. Third-Party Links</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Typing Globe may contain links to external websites (government recruitment sites, resources, etc.). We are not responsible for the content of external sites or any damage you may incur from visiting them.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">9. Governing Law</h2>
          <p className="mt-3 text-muted leading-relaxed">
            These terms are governed by the laws of Bangladesh, and any disputes shall be subject to the jurisdiction of the courts of Bangladesh.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">10. Changes to Terms</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We reserve the right to modify these terms at any time. Changes take effect immediately upon posting. Continued use of the service after changes means you accept the updated terms.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">11. Contact</h2>
          <p className="mt-3 text-muted">
            Questions about these terms? Email <a href="mailto:kamrulislamkholil@gmail.com" className="text-primary hover:underline">kamrulislamkholil@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
