"use client";

import { useActionState } from "react";
import { Card } from "@/components/ui/Card";
import { saveProfile, type ProfileActionState } from "./actions";

const initialState: ProfileActionState = { error: null };

export function ProfileForm({
  defaultName,
  defaultCountry,
}: {
  defaultName: string;
  defaultCountry: string;
}) {
  const [state, action, pending] = useActionState(saveProfile, initialState);

  return (
    <Card>
      <h1 className="text-xl font-bold text-foreground">Personal Details</h1>
      <p className="mt-2 text-sm text-muted">
        This is the name that will appear on your certificate.
      </p>

      <form action={action} className="mt-6 space-y-4">
        <div>
          <label htmlFor="displayName" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
            Full name
          </label>
          <input
            id="displayName"
            name="displayName"
            defaultValue={defaultName}
            required
            minLength={2}
            maxLength={80}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
          />
        </div>
        <div>
          <label htmlFor="country" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
            Country <span className="normal-case text-muted-2">(optional)</span>
          </label>
          <input
            id="country"
            name="country"
            defaultValue={defaultCountry}
            maxLength={60}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
          />
        </div>

        {state.error && (
          <p className="rounded-lg border border-[color:var(--danger)]/30 bg-[color:var(--danger)]/10 px-3 py-2 text-sm text-[color:var(--danger)]">
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
        >
          {pending ? "Saving…" : "Continue to Exam →"}
        </button>
      </form>
    </Card>
  );
}
