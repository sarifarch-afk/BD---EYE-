-- BD Eye database setup.
-- Paste this whole file into Supabase: SQL Editor -> New query -> Run.
-- It is safe to run more than once.

-- ---------- People ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  name text not null default '' check (char_length(name) <= 60),
  created_at timestamptz not null default now()
);

-- Make a profile automatically when someone signs up (email link or Facebook).
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, name)
  values (
    new.id,
    left(coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1), ''), 60)
  )
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- Reports ----------
create table if not exists public.reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  category text not null check (category in ('traffic','water','outage','safety','prices','service','other')),
  title text not null check (char_length(title) between 3 and 90),
  description text not null default '' check (char_length(description) <= 600),
  area text not null check (char_length(area) <= 40),
  place text not null default '' check (char_length(place) <= 80),
  lang text not null default 'en',
  status text not null default 'reported' check (status in ('reported','acknowledged','solved')),
  photos text[] not null default '{}' check (cardinality(photos) <= 3),
  hidden boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists reports_created_idx on public.reports (created_at desc);

-- ---------- Confirm / Not true ----------
create table if not exists public.votes (
  report_id uuid not null references public.reports(id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  kind text not null check (kind in ('confirm','false')),
  created_at timestamptz not null default now(),
  primary key (report_id, user_id)
);

-- ---------- Conversation (comments and status changes) ----------
create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  report_id uuid not null references public.reports(id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  body text not null default '' check (char_length(body) <= 500),
  status text check (status in ('reported','acknowledged','solved')),
  reply_to uuid references public.comments(id) on delete set null,
  flag_count int not null default 0,
  created_at timestamptz not null default now()
);
create index if not exists comments_report_idx on public.comments (report_id, created_at);

create table if not exists public.flags (
  comment_id uuid not null references public.comments(id) on delete cascade,
  user_id uuid not null default auth.uid() references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (comment_id, user_id)
);

-- Keep a running count of how many people reported a comment.
create or replace function public.bump_flag_count() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update public.comments set flag_count = (select count(*) from public.flags where comment_id = new.comment_id)
  where id = new.comment_id;
  return new;
end $$;
drop trigger if exists on_flag_added on public.flags;
create trigger on_flag_added after insert on public.flags
  for each row execute function public.bump_flag_count();

-- Anyone signed in can move a report's status; it is recorded in the conversation.
create or replace function public.set_report_status(p_report uuid, p_status text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'Sign in first'; end if;
  if p_status not in ('reported','acknowledged','solved') then raise exception 'Unknown status'; end if;
  update public.reports set status = p_status, updated_at = now() where id = p_report and status <> p_status;
  if found then
    insert into public.comments (report_id, user_id, status) values (p_report, auth.uid(), p_status);
  end if;
end $$;
revoke all on function public.set_report_status(uuid, text) from public, anon;
grant execute on function public.set_report_status(uuid, text) to authenticated;

-- ---------- Feed view with counts ----------
create or replace view public.report_feed with (security_invoker = on) as
select r.*,
  p.name as author_name,
  (select count(*) from public.votes v where v.report_id = r.id and v.kind = 'confirm') as confirms,
  (select count(*) from public.votes v where v.report_id = r.id and v.kind = 'false') as disputes,
  (select count(*) from public.comments c where c.report_id = r.id and c.body <> '') as comment_count
from public.reports r
join public.profiles p on p.id = r.user_id
where not r.hidden;

-- ---------- Who may do what ----------
alter table public.profiles enable row level security;
alter table public.reports  enable row level security;
alter table public.votes    enable row level security;
alter table public.comments enable row level security;
alter table public.flags    enable row level security;

drop policy if exists "profiles readable" on public.profiles;
create policy "profiles readable" on public.profiles for select using (true);
drop policy if exists "edit own profile" on public.profiles;
create policy "edit own profile" on public.profiles for update using (id = auth.uid()) with check (id = auth.uid());

drop policy if exists "reports readable" on public.reports;
create policy "reports readable" on public.reports for select using (not hidden or user_id = auth.uid());
drop policy if exists "post own report" on public.reports;
create policy "post own report" on public.reports for insert to authenticated with check (user_id = auth.uid() and status = 'reported' and not hidden);
drop policy if exists "delete own report" on public.reports;
create policy "delete own report" on public.reports for delete using (user_id = auth.uid());

drop policy if exists "votes readable" on public.votes;
create policy "votes readable" on public.votes for select using (true);
drop policy if exists "vote as yourself" on public.votes;
create policy "vote as yourself" on public.votes for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "change own vote" on public.votes;
create policy "change own vote" on public.votes for update using (user_id = auth.uid()) with check (user_id = auth.uid());
drop policy if exists "remove own vote" on public.votes;
create policy "remove own vote" on public.votes for delete using (user_id = auth.uid());

drop policy if exists "comments readable" on public.comments;
create policy "comments readable" on public.comments for select using (true);
drop policy if exists "comment as yourself" on public.comments;
create policy "comment as yourself" on public.comments for insert to authenticated
  with check (user_id = auth.uid() and status is null and flag_count = 0 and char_length(body) > 0);
drop policy if exists "delete own comment" on public.comments;
create policy "delete own comment" on public.comments for delete using (user_id = auth.uid());

drop policy if exists "flag as yourself" on public.flags;
create policy "flag as yourself" on public.flags for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "see own flags" on public.flags;
create policy "see own flags" on public.flags for select using (user_id = auth.uid());

-- ---------- Photos ----------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('photos', 'photos', true, 1048576, array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

drop policy if exists "upload own photos" on storage.objects;
create policy "upload own photos" on storage.objects for insert to authenticated
  with check (bucket_id = 'photos' and (storage.foldername(name))[1] = auth.uid()::text);
drop policy if exists "delete own photos" on storage.objects;
create policy "delete own photos" on storage.objects for delete to authenticated
  using (bucket_id = 'photos' and (storage.foldername(name))[1] = auth.uid()::text);

-- ---------- Live updates ----------
do $$ begin
  begin alter publication supabase_realtime add table public.reports;  exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.votes;    exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.comments; exception when duplicate_object then null; end;
end $$;
