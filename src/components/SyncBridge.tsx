"use client";

import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/client";

type CertInfo = {
  hasCertificate: boolean;
  avgWpm: number;
  avgAccuracy: number;
  langCode: string;
  issuedAt: string;
} | null;

/**
 * Invisible bridge for the Typing Globe browser extension's content script,
 * which reads #typing-globe-sync-bridge's data attributes to sync the
 * logged-in user's identity and certificate status. Extension-side auth
 * cookies aren't sent cross-origin (SameSite=Lax), so this DOM handoff is
 * how the extension learns who's logged in without any new backend.
 */
export function SyncBridge() {
  const [user, setUser] = useState<User | null>(null);
  const [cert, setCert] = useState<CertInfo>(null);

  useEffect(() => {
    const supabase = createClient();

    async function loadCert(userId: string) {
      const { data: session } = await supabase
        .from("certificate_exam_sessions")
        .select("avg_wpm, avg_accuracy, lang_code, issued_at")
        .eq("user_id", userId)
        .order("avg_wpm", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (session) {
        setCert({
          hasCertificate: true,
          avgWpm: session.avg_wpm,
          avgAccuracy: session.avg_accuracy,
          langCode: session.lang_code,
          issuedAt: session.issued_at,
        });
      } else {
        setCert(null);
      }
    }

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
      if (data.user) loadCert(data.user.id);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, authSession) => {
      const nextUser = authSession?.user ?? null;
      setUser(nextUser);
      if (nextUser) {
        loadCert(nextUser.id);
      } else {
        setCert(null);
      }
    });

    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  if (!user) {
    return <div id="typing-globe-sync-bridge" style={{ display: "none" }} />;
  }

  const userData = JSON.stringify({
    email: user.email,
    username: user.email?.split("@")[0],
    isPremium: false,
  });

  return (
    <div
      id="typing-globe-sync-bridge"
      style={{ display: "none" }}
      data-user={userData}
      data-cert={cert ? JSON.stringify(cert) : undefined}
    />
  );
}
