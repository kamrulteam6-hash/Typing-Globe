-- Self-serve blog: admin_users (who can write), blog_posts, and a public
-- Storage bucket for cover/inline images.
-- Run this in the Supabase SQL editor after 0001 and 0002.

create table if not exists admin_users (
  user_id uuid primary key references auth.users (id) on delete cascade
);
-- No RLS-exposed read/write policy for this table itself — it's only ever
-- consulted via `auth.uid() in (select user_id from admin_users)` inside the
-- policies below. After signing up through the existing certificate login
-- (/typing-certificate/login), find your user id in the Supabase dashboard
-- under Authentication -> Users, then run:
--   insert into admin_users (user_id) values ('<your-user-id-here>');
-- There is no bootstrapping UI for the first admin by design.

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  content_html text not null,
  cover_image_url text,
  author_name text not null,
  category text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  reading_time_minutes integer not null default 1,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_published_idx
  on blog_posts (published_at desc) where status = 'published';

alter table admin_users enable row level security;
alter table blog_posts enable row level security;

-- A user must be able to read their own admin_users row — both for the
-- app-layer isAdmin() check and because the `auth.uid() in (select ...)`
-- subqueries below run under the calling user's RLS, not as superuser.
create policy "read own admin row" on admin_users
  for select using (auth.uid() = user_id);

-- Public can read published posts only.
create policy "public read published" on blog_posts
  for select using (status = 'published');

-- Admins can read/write everything, including drafts.
create policy "admin full access" on blog_posts
  for all using (auth.uid() in (select user_id from admin_users))
  with check (auth.uid() in (select user_id from admin_users));

-- Storage bucket for cover/inline images — public read, admin-only write.
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;

create policy "public read blog images" on storage.objects
  for select using (bucket_id = 'blog-images');

create policy "admin upload blog images" on storage.objects
  for insert with check (
    bucket_id = 'blog-images'
    and auth.uid() in (select user_id from admin_users)
  );

create policy "admin delete blog images" on storage.objects
  for delete using (
    bucket_id = 'blog-images'
    and auth.uid() in (select user_id from admin_users)
  );
