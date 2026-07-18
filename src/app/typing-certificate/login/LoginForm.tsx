"use client";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Card, SectionLabel } from "@/components/ui/Card";
import { signIn, signUp, type AuthActionState } from "./actions";

const initialState: AuthActionState = { error: null, message: null };

export function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/typing-certificate/dashboard";
  const [tab, setTab] = useState<"signin" | "signup">("signin");

  const [signInState, signInAction, signInPending] = useActionState(
    signIn,
    initialState
  );
  const [signUpState, signUpAction, signUpPending] = useActionState(
    signUp,
    initialState
  );

  const state = tab === "signin" ? signInState : signUpState;
  const action = tab === "signin" ? signInAction : signUpAction;
  const pending = tab === "signin" ? signInPending : signUpPending;

  return (
    <Card>
      <SectionLabel>Typing Certificate</SectionLabel>
      <h1 className="mt-4 text-2xl font-bold text-foreground">
        {tab === "signin" ? "Sign in" : "Create your account"}
      </h1>
      <p className="mt-2 text-sm text-muted">
        {tab === "signin"
          ? "Sign in to continue to your certificate dashboard."
          : "Create an account to start your certificate exam."}
      </p>

      <div className="mt-6 flex gap-2 rounded-lg border border-border bg-surface-2 p-1">
        <button
          type="button"
          onClick={() => setTab("signin")}
          className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
            tab === "signin" ? "bg-primary text-primary-foreground" : "text-muted hover:text-foreground"
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => setTab("signup")}
          className={`flex-1 rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
            tab === "signup" ? "bg-primary text-primary-foreground" : "text-muted hover:text-foreground"
          }`}
        >
          Sign Up
        </button>
      </div>

      <form action={action} className="mt-6 space-y-4">
        <input type="hidden" name="next" value={next} />
        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-muted">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete={tab === "signin" ? "current-password" : "new-password"}
            className="w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary/50"
          />
        </div>

        {state.error && (
          <p className="rounded-lg border border-[color:var(--danger)]/30 bg-[color:var(--danger)]/10 px-3 py-2 text-sm text-[color:var(--danger)]">
            {state.error}
          </p>
        )}
        {state.message && (
          <p className="rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-primary">
            {state.message}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 disabled:opacity-60"
        >
          {pending ? "Please wait…" : tab === "signin" ? "Sign In" : "Create Account"}
        </button>
      </form>
    </Card>
  );
}
