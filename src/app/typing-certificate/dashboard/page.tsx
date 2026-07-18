import type { Metadata } from "next";
import QRCode from "qrcode";
import { requireSession, getCertificateProfile, getCertificateSessions, pickBestSession } from "@/lib/auth/dal";
import { SectionLabel } from "@/components/ui/Card";
import { ProfileForm } from "./ProfileForm";
import { ExamFlow } from "./ExamFlow";
import { CertificateView } from "./CertificateView";
import { SignOutButton } from "./SignOutButton";

export const metadata: Metadata = {
  title: "Your Certificate Dashboard",
  robots: { index: false },
};

export default async function CertificateDashboardPage() {
  const user = await requireSession("/typing-certificate/dashboard");
  const profile = await getCertificateProfile(user.id);
  const sessions = profile ? await getCertificateSessions(user.id) : [];
  const best = pickBestSession(sessions);

  const verifyUrl = best ? `https://www.typingglobe.com/typing-certificate/verify/${best.id}` : "";
  const qrDataUrl = best ? await QRCode.toDataURL(verifyUrl, { margin: 0, width: 200 }) : "";

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <SectionLabel>Typing Certificate</SectionLabel>
        <SignOutButton />
      </div>

      {!profile ? (
        <ProfileForm defaultCountry="" defaultName={user.email?.split("@")[0] ?? ""} />
      ) : !best ? (
        <ExamFlow displayName={profile.display_name} />
      ) : (
        <CertificateView session={best} sessionCount={sessions.length} qrDataUrl={qrDataUrl} verifyUrl={verifyUrl} />
      )}
    </div>
  );
}
