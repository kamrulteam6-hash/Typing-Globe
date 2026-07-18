-- Blog SEO controls + decoration: per-post meta title/description overrides,
-- a noindex flag, an accent color for badges/cards, and a featured flag for
-- the /blog hero slot. Run this in the Supabase SQL editor after 0003.

alter table blog_posts
  add column if not exists meta_title text,
  add column if not exists meta_description text,
  add column if not exists noindex boolean not null default false,
  add column if not exists accent text not null default 'primary' check (accent in ('primary', 'accent', 'gold')),
  add column if not exists featured boolean not null default false;
