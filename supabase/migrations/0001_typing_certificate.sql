-- Typing Certificate feature schema
-- Run this in the Supabase SQL editor (Project > SQL Editor > New query) once.

create table if not exists certificate_profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null,
  country text,
  updated_at timestamptz not null default now()
);

create table if not exists certificate_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  lang_code text not null,
  wpm integer not null,
  accuracy integer not null,
  correct_chars integer not null,
  taken_at timestamptz not null default now()
);

create index if not exists certificate_attempts_user_id_idx on certificate_attempts (user_id);
create index if not exists certificate_attempts_user_wpm_idx on certificate_attempts (user_id, wpm desc, taken_at desc);

alter table certificate_profiles enable row level security;
alter table certificate_attempts enable row level security;

create policy "own profile read" on certificate_profiles
  for select using (auth.uid() = user_id);
create policy "own profile write" on certificate_profiles
  for insert with check (auth.uid() = user_id);
create policy "own profile update" on certificate_profiles
  for update using (auth.uid() = user_id);

create policy "own attempts read" on certificate_attempts
  for select using (auth.uid() = user_id);
create policy "own attempts write" on certificate_attempts
  for insert with check (auth.uid() = user_id);
