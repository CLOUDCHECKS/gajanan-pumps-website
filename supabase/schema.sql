-- Gajanan Pumps & Systems — enquiry storage
-- Run this once in the Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null,
  company     text,
  email       text not null,
  phone       text not null,
  product     text,
  message     text not null,
  source      text not null default 'website',
  status      text not null default 'new'
              check (status in ('new', 'contacted', 'qualified', 'closed')),
  user_agent  text
);

create index if not exists enquiries_created_at_idx
  on public.enquiries (created_at desc);

create index if not exists enquiries_status_idx
  on public.enquiries (status);

alter table public.enquiries enable row level security;

-- Public website traffic may only INSERT. There is deliberately no SELECT
-- policy for anon/authenticated users: enquiries are readable exclusively by
-- the admin panel (which will use an authenticated, allow-listed account).
drop policy if exists "Public can submit an enquiry" on public.enquiries;
create policy "Public can submit an enquiry"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);
