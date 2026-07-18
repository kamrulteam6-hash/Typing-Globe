-- Typing Certificate v2: 3-stage exam sessions + public verification
-- Run this in the Supabase SQL editor after 0001_typing_certificate.sql.

drop table if exists certificate_attempts;

create table if not exists certificate_exam_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  display_name text not null,
  lang_code text not null,
  easy_wpm integer not null,
  easy_accuracy integer not null,
  medium_wpm integer not null,
  medium_accuracy integer not null,
  hard_wpm integer not null,
  hard_accuracy integer not null,
  avg_wpm integer not null,
  avg_accuracy integer not null,
  issued_at timestamptz not null default now()
);

create index if not exists certificate_exam_sessions_user_idx on certificate_exam_sessions (user_id);
create index if not exists certificate_exam_sessions_user_best_idx
  on certificate_exam_sessions (user_id, avg_wpm desc, issued_at desc);

alter table certificate_exam_sessions enable row level security;

create policy "own sessions read" on certificate_exam_sessions
  for select using (auth.uid() = user_id);
create policy "own sessions write" on certificate_exam_sessions
  for insert with check (auth.uid() = user_id);

-- SECURITY DEFINER function for public verification: returns only public-safe
-- columns (no user_id), bypassing RLS internally so anonymous visitors can
-- look up one certificate by ID without being able to browse anyone else's rows.
create or replace function get_public_certificate(cert_id uuid)
returns table (
  id uuid,
  display_name text,
  lang_code text,
  easy_wpm integer,
  easy_accuracy integer,
  medium_wpm integer,
  medium_accuracy integer,
  hard_wpm integer,
  hard_accuracy integer,
  avg_wpm integer,
  avg_accuracy integer,
  issued_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  select id, display_name, lang_code, easy_wpm, easy_accuracy, medium_wpm, medium_accuracy,
         hard_wpm, hard_accuracy, avg_wpm, avg_accuracy, issued_at
  from certificate_exam_sessions
  where id = cert_id;
$$;

grant execute on function get_public_certificate(uuid) to anon, authenticated;
