-- Gajanan Pumps & Systems — enquiry storage + admin CRM support
-- Run this in the Supabase SQL editor before using the CRM.

create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  company      text,
  email        text not null,
  phone        text not null,
  product      text,
  industry     text,
  application  text,
  city         text,
  state        text,
  flow_rate    text,
  pressure     text,
  viscosity    text,
  temperature  text,
  timeline     text,
  message      text not null,
  source       text not null default 'website',
  status       text not null default 'new'
               check (status in ('new', 'contacted', 'qualified', 'closed')),
  user_agent   text
);

-- Safe upgrades for databases created from the earlier schema.
alter table public.enquiries add column if not exists industry text;
alter table public.enquiries add column if not exists application text;
alter table public.enquiries add column if not exists city text;
alter table public.enquiries add column if not exists state text;
alter table public.enquiries add column if not exists flow_rate text;
alter table public.enquiries add column if not exists pressure text;
alter table public.enquiries add column if not exists viscosity text;
alter table public.enquiries add column if not exists temperature text;
alter table public.enquiries add column if not exists timeline text;

create index if not exists enquiries_created_at_idx
  on public.enquiries (created_at desc);

create index if not exists enquiries_status_idx
  on public.enquiries (status);

create index if not exists enquiries_product_idx
  on public.enquiries (product);

alter table public.enquiries enable row level security;

-- Public website traffic may only INSERT. There is deliberately no SELECT
-- policy for anon/authenticated users: enquiries are read exclusively by the
-- admin CRM through the server-side service-role key after an allow-listed
-- Supabase Auth session has been verified.
drop policy if exists "Public can submit an enquiry" on public.enquiries;
create policy "Public can submit an enquiry"
  on public.enquiries
  for insert
  to anon, authenticated
  with check (true);

-- ---------------------------------------------------------------------------
-- Storage reporting for the CRM.
-- Returns total database size and the size/count of the enquiries table.
-- Only the service_role may execute this function.
-- ---------------------------------------------------------------------------

create or replace function public.database_usage()
returns table (
  database_size bigint,
  enquiries_table_size bigint,
  enquiries_count bigint,
  oldest_enquiry timestamptz,
  newest_enquiry timestamptz
)
language sql
security definer
set search_path = public
as $$
  select
    pg_database_size(current_database())::bigint as database_size,
    pg_total_relation_size('public.enquiries')::bigint as enquiries_table_size,
    (select count(*) from public.enquiries)::bigint as enquiries_count,
    (select min(created_at) from public.enquiries) as oldest_enquiry,
    (select max(created_at) from public.enquiries) as newest_enquiry;
$$;

revoke all on function public.database_usage() from public;
grant execute on function public.database_usage() to service_role;
