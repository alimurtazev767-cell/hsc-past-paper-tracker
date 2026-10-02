-- Run once in the Supabase dashboard: SQL Editor > New query > paste > Run.
-- One row per signed-in person holding their ticks, marks, added papers and chosen subjects.

create table if not exists public.progress (
  user_id    uuid primary key default auth.uid() references auth.users (id) on delete cascade,
  state      jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  -- keeps one account from storing huge blobs (a full year of ticks is a few KB)
  constraint progress_state_size check (pg_column_size(state) < 262144)
);

-- Row Level Security: each person can only see and change their own row.
alter table public.progress enable row level security;

drop policy if exists "progress: read own"   on public.progress;
drop policy if exists "progress: insert own" on public.progress;
drop policy if exists "progress: update own" on public.progress;
drop policy if exists "progress: delete own" on public.progress;

create policy "progress: read own"   on public.progress for select to authenticated using ((select auth.uid()) = user_id);
create policy "progress: insert own" on public.progress for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "progress: update own" on public.progress for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "progress: delete own" on public.progress for delete to authenticated using ((select auth.uid()) = user_id);

-- Signed-in users reach the table through the Data API; signed-out visitors get nothing.
revoke all on public.progress from anon;
grant select, insert, update, delete on public.progress to authenticated;
