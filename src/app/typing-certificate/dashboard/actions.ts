"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireSession } from "@/lib/auth/dal";
import { createClient } from "@/lib/supabase/server";
import { languages } from "@/data/languages";

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/typing-certificate");
}

const profileSchema = z.object({
  displayName: z.string().trim().min(2, "Enter your full name.").max(80),
  country: z.string().trim().max(60).optional(),
});

export type ProfileActionState = { error: string | null };

export async function saveProfile(
  _prevState: ProfileActionState,
  formData: FormData
): Promise<ProfileActionState> {
  const user = await requireSession("/typing-certificate/dashboard");

  const parsed = profileSchema.safeParse({
    displayName: formData.get("displayName"),
    country: formData.get("country") || undefined,
  });
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid details." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("certificate_profiles").upsert({
    user_id: user.id,
    display_name: parsed.data.displayName,
    country: parsed.data.country ?? null,
    updated_at: new Date().toISOString(),
  });
  if (error) return { error: error.message };

  revalidatePath("/typing-certificate/dashboard");
  return { error: null };
}

const stageResultSchema = z.object({
  wpm: z.number().int().min(0).max(400),
  accuracy: z.number().int().min(0).max(100),
});

const sessionSchema = z.object({
  langCode: z.string().refine((code) => languages.some((l) => l.code === code), {
    message: "Unknown language.",
  }),
  easy: stageResultSchema,
  medium: stageResultSchema,
  hard: stageResultSchema,
});

export async function recordExamSession(input: {
  langCode: string;
  easy: { wpm: number; accuracy: number };
  medium: { wpm: number; accuracy: number };
  hard: { wpm: number; accuracy: number };
}) {
  const user = await requireSession("/typing-certificate/dashboard");

  const parsed = sessionSchema.safeParse(input);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid result." };
  }

  const supabase = await createClient();
  const profile = await supabase
    .from("certificate_profiles")
    .select("display_name")
    .eq("user_id", user.id)
    .maybeSingle();
  if (!profile.data) return { error: "Complete your personal details first." };

  const { easy, medium, hard } = parsed.data;
  const avgWpm = Math.round((easy.wpm + medium.wpm + hard.wpm) / 3);
  const avgAccuracy = Math.round((easy.accuracy + medium.accuracy + hard.accuracy) / 3);

  const { error } = await supabase.from("certificate_exam_sessions").insert({
    user_id: user.id,
    display_name: profile.data.display_name,
    lang_code: parsed.data.langCode,
    easy_wpm: easy.wpm,
    easy_accuracy: easy.accuracy,
    medium_wpm: medium.wpm,
    medium_accuracy: medium.accuracy,
    hard_wpm: hard.wpm,
    hard_accuracy: hard.accuracy,
    avg_wpm: avgWpm,
    avg_accuracy: avgAccuracy,
  });
  if (error) return { error: error.message };

  revalidatePath("/typing-certificate/dashboard");
  return { error: null };
}

/**
 * Only called from the retake gate (ExamFlow), never as a standalone edit —
 * a name change must always be paired with a fresh full exam sitting, so
 * nobody can relabel an already-earned score under a different name for free.
 */
export async function confirmRetakeName(name: string): Promise<ProfileActionState> {
  const user = await requireSession("/typing-certificate/dashboard");

  const parsed = profileSchema.shape.displayName.safeParse(name);
  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? "Invalid name." };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from("certificate_profiles")
    .update({ display_name: parsed.data, updated_at: new Date().toISOString() })
    .eq("user_id", user.id);
  if (error) return { error: error.message };

  revalidatePath("/typing-certificate/dashboard");
  return { error: null };
}
