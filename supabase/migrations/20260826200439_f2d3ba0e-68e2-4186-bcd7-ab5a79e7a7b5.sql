create type public.app_role as enum ('admin','moderator','user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create policy "Users can view their own roles"
on public.user_roles for select to authenticated
using (auth.uid() = user_id);

create policy "Admins can view all roles"
on public.user_roles for select to authenticated
using (public.has_role(auth.uid(), 'admin'));

create table public.blocked_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  reason text not null,
  score numeric,
  name text,
  email text,
  page text,
  user_agent text
);

grant select on public.blocked_submissions to authenticated;
grant all on public.blocked_submissions to service_role;

alter table public.blocked_submissions enable row level security;

create policy "Admins can view blocked submissions"
on public.blocked_submissions for select to authenticated
using (public.has_role(auth.uid(), 'admin'));

create index blocked_submissions_created_at_idx on public.blocked_submissions (created_at desc);