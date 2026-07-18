"use client";

import { signOut } from "./actions";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="text-xs font-semibold text-muted hover:text-foreground"
    >
      Sign out
    </button>
  );
}
