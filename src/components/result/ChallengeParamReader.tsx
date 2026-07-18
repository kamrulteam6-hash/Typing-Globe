"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { decodeResult, ShareableResult } from "@/lib/shareResult";

/**
 * Reads a ?challenge=<encoded> or ?share=<encoded> URL param and reports the
 * decoded result to the parent — a plain "share" link is treated the same as
 * a challenge (banner + head-to-head comparison on finish), since otherwise
 * a shared link would silently do nothing for the recipient. Isolated into
 * its own component because useSearchParams requires a Suspense boundary
 * during static rendering — keeping it small means the rest of TypingTest
 * doesn't need to be wrapped.
 */
export function ChallengeParamReader({ onChallenge }: { onChallenge: (result: ShareableResult | null) => void }) {
  const searchParams = useSearchParams();
  const encoded = searchParams.get("challenge") ?? searchParams.get("share");

  useEffect(() => {
    onChallenge(encoded ? decodeResult(encoded) : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [encoded]);

  return null;
}
