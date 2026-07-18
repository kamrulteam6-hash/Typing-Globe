import type { Metadata } from "next";
import QRCode from "qrcode";
import { getPublicCertificate } from "@/lib/auth/dal";
import { getLanguage } from "@/data/languages";
import { Card, SectionLabel } from "@/components/ui/Card";
import { CertificateCard } from "@/components/certificate/CertificateCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const cert = await getPublicCertificate(id);
  if (!cert) {
    return { title: "Certificate Not Found", robots: { index: false } };
  }
  const lang = getLanguage(cert.lang_code);
  return {
    title: `Verify ${cert.display_name}'s Typing Certificate`,
    description: `${cert.display_name} earned a Typing Globe certificate at ${cert.avg_wpm} WPM average in ${lang?.name ?? cert.lang_code}. Verify this credential.`,
    robots: { index: true },
  };
}

export default async function VerifyCertificatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cert = await getPublicCertificate(id);

  if (!cert) {
    return (
      <div className="mx-auto max-w-lg px-4 py-20 text-center">
        <SectionLabel>Typing Certificate</SectionLabel>
        <h1 className="mt-4 text-2xl font-bold text-foreground">Certificate not found</h1>
        <p className="mt-2 text-sm text-muted">
          This credential ID doesn&apos;t match any issued Typing Globe certificate.
        </p>
      </div>
    );
  }

  const verifyUrl = `https://www.typingglobe.com/typing-certificate/verify/${cert.id}`;
  const qrDataUrl = await QRCode.toDataURL(verifyUrl, { margin: 0, width: 200 });

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="mb-8 text-center">
        <SectionLabel>✓ Verified Certificate</SectionLabel>
        <h1 className="mt-4 text-2xl font-bold text-foreground">
          {cert.display_name}&apos;s Typing Certificate
        </h1>
        <p className="mt-2 text-sm text-muted">
          This is a genuine, unedited Typing Globe certificate record.
        </p>
      </div>

      <div className="flex justify-center">
        <CertificateCard session={cert} qrDataUrl={qrDataUrl} verifyUrl={verifyUrl} />
      </div>

      <Card className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Credential ID</p>
        <p className="mt-1 font-mono text-sm text-foreground">{cert.id}</p>
      </Card>
    </div>
  );
}
