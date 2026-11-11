-- À exécuter une fois dans Supabase : SQL Editor > New query > Run

create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('vehicle','goods')),
  slug text not null unique,
  title text not null,
  price numeric,
  currency text not null default 'USD',
  status text not null default 'available' check (status in ('available','reserved','sold')),
  year int,
  brand text,
  mileage int,
  fuel text,
  transmission text,
  origin text,
  category text,
  description text not null default '',
  images text[] not null default '{}',
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists listings_kind_created on public.listings (kind, created_at desc);

-- Toutes les lectures/écritures passent par le serveur (clé service_role) : on bloque l'accès direct.
alter table public.listings enable row level security;

-- Bucket public pour les photos
insert into storage.buckets (id, name, public)
values ('listings', 'listings', true)
on conflict (id) do nothing;
