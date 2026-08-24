import type { Metadata } from "next";
import { SectionLabel } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Privacy Policy — Typing Globe",
  description: "How Typing Globe handles your data and privacy.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="mb-12">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: August 24, 2026</p>
      </section>

      <section className="mb-12 space-y-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">1. Overview</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Typing Globe respects your privacy. This policy explains what data we collect, how we use it, and your rights regarding your information.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">2. What Data We Collect</h2>
          <div className="mt-3 space-y-2 text-muted">
            <p>
              <strong>Without an account:</strong> We collect only what your browser sends — IP address, browser type, pages visited. This data is used solely for server analytics and security.
            </p>
            <p>
              <strong>With an account (if you sign up):</strong> Email address, full name, country, typing test results (WPM, accuracy, language tested, date/time).
            </p>
            <p>
              <strong>Browser extension:</strong> If you use our Chrome extension, it stores your typing results locally in your browser only. No data is sent to our servers unless you explicitly sync it.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">3. How We Use Your Data</h2>
          <div className="mt-3 space-y-2 text-muted">
            <ul className="list-inside space-y-2">
              <li>→ To display your test results and progress</li>
              <li>→ To save your preferences and practice history</li>
              <li>→ To improve the platform (understanding which features are used, which languages are tested most)</li>
              <li>→ To communicate with you if you contact us</li>
            </ul>
            <p className="mt-3">
              We do NOT sell, rent, or share your data with third parties.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">4. Google Analytics</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We use Google Analytics to understand how visitors use our site — page traffic, countries, devices, and how long people spend on pages. This helps us improve the site. Google Analytics does not identify you personally; it collects anonymized usage data.
          </p>
          <p className="mt-3 text-muted">
            You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">5. Cookies</h2>
          <p className="mt-3 text-muted leading-relaxed">
            We use cookies only for essential functions: keeping you logged in, remembering your preferences, and preventing abuse. We do not use cookies for tracking or advertising.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">6. Data Security</h2>
          <p className="mt-3 text-muted leading-relaxed">
            Your data is encrypted in transit (HTTPS) and at rest on our servers. We use Supabase for authentication and data storage, which follows industry-standard security practices.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">7. Your Rights</h2>
          <div className="mt-3 space-y-2 text-muted">
            <p>You have the right to:</p>
            <ul className="list-inside space-y-2 mt-2">
              <li>→ Access your data</li>
              <li>→ Request a copy of your data</li>
              <li>→ Delete your account and all associated data</li>
              <li>→ Correct inaccurate information</li>
            </ul>
            <p className="mt-3">
              Email <a href="mailto:kamrulislamkholil@gmail.com" className="text-primary hover:underline">kamrulislamkholil@gmail.com</a> to request any of these.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">8. Changes to This Policy</h2>
          <p className="mt-3 text-muted leading-relaxed">
            If we make changes to this privacy policy, we'll post the updated version on this page with a new "Last updated" date. Continued use of Typing Globe means you accept the updated policy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-foreground">9. Contact Us</h2>
          <p className="mt-3 text-muted">
            Questions about this policy? Email <a href="mailto:kamrulislamkholil@gmail.com" className="text-primary hover:underline">kamrulislamkholil@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
