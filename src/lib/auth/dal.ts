import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/**
 * The one source of truth for "is this request authenticated." proxy.ts only
 * does an optimistic cookie check; every Server Component/Action that needs
 * real authorization must call this (or requireSession()) directly — per
 * Next.js's Data Access Layer pattern, session state is never trusted from
 * the proxy layer alone.
 */
export const verifySession = cache(async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

/** Same as verifySession(), but redirects to login if there's no user. */
export async function requireSession(next: string) {
  const user = await verifySession();
  if (!user) {
    redirect(`/typing-certificate/login?next=${encodeURIComponent(next)}`);
  }
  return user;
}

export type CertificateProfile = {
  user_id: string;
  display_name: string;
  country: string | null;
  updated_at: string;
};

export type CertificateSession = {
  id: string;
  user_id: string;
  display_name: string;
  lang_code: string;
  easy_wpm: number;
  easy_accuracy: number;
  medium_wpm: number;
  medium_accuracy: number;
  hard_wpm: number;
  hard_accuracy: number;
  avg_wpm: number;
  avg_accuracy: number;
  issued_at: string;
};

/** Public-safe subset returned by the get_public_certificate() RPC — no user_id. */
export type PublicCertificate = Omit<CertificateSession, "user_id">;

export async function getCertificateProfile(
  userId: string
): Promise<CertificateProfile | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("certificate_profiles")
    .select("*")
    .eq("user_id", userId)
    .maybeSingle();
  return data;
}

export async function getCertificateSessions(
  userId: string
): Promise<CertificateSession[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("certificate_exam_sessions")
    .select("*")
    .eq("user_id", userId)
    .order("issued_at", { ascending: false });
  return data ?? [];
}

/** The session that counts as the current certificate: highest avg WPM, ties broken by most recent. */
export function pickBestSession(
  sessions: CertificateSession[]
): CertificateSession | null {
  if (sessions.length === 0) return null;
  return [...sessions].sort((a, b) => {
    if (b.avg_wpm !== a.avg_wpm) return b.avg_wpm - a.avg_wpm;
    return new Date(b.issued_at).getTime() - new Date(a.issued_at).getTime();
  })[0];
}

/** No auth required — used by the public /typing-certificate/verify/[id] page. */
export async function getPublicCertificate(
  id: string
): Promise<PublicCertificate | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .rpc("get_public_certificate", { cert_id: id })
    .maybeSingle();
  return data as PublicCertificate | null;
}
