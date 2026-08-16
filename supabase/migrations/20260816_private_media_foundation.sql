-- Willow's World private Episode media foundation.
-- Raw child media must never be stored in the public Git repository.

create table if not exists public.willows_world_media_assets (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  episode_id text not null,
  storage_bucket text not null default 'willows-world-private',
  storage_path text not null,
  sha256 text,
  mime_type text,
  size_bytes bigint,
  duration_ms bigint,
  provenance text not null default 'observed' check (provenance in ('observed','known','generated')),
  created_at timestamptz not null default now(),
  unique (storage_bucket, storage_path)
);

alter table public.willows_world_media_assets enable row level security;

create policy "willows_world_media_assets_owner_select"
on public.willows_world_media_assets for select
to authenticated
using ((select auth.uid()) = owner_id);

create policy "willows_world_media_assets_owner_insert"
on public.willows_world_media_assets for insert
to authenticated
with check ((select auth.uid()) = owner_id);

create policy "willows_world_media_assets_owner_update"
on public.willows_world_media_assets for update
to authenticated
using ((select auth.uid()) = owner_id)
with check ((select auth.uid()) = owner_id);

create policy "willows_world_media_assets_owner_delete"
on public.willows_world_media_assets for delete
to authenticated
using ((select auth.uid()) = owner_id);

insert into storage.buckets (id, name, public)
values ('willows-world-private', 'willows-world-private', false)
on conflict (id) do update set public = false;

-- Object paths MUST begin with the authenticated owner's UUID:
-- <auth.uid()>/<episode-id>/<opaque-filename>
create policy "willows_world_private_objects_owner_select"
on storage.objects for select
to authenticated
using (bucket_id = 'willows-world-private' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "willows_world_private_objects_owner_insert"
on storage.objects for insert
to authenticated
with check (bucket_id = 'willows-world-private' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "willows_world_private_objects_owner_update"
on storage.objects for update
to authenticated
using (bucket_id = 'willows-world-private' and (storage.foldername(name))[1] = (select auth.uid())::text)
with check (bucket_id = 'willows-world-private' and (storage.foldername(name))[1] = (select auth.uid())::text);

create policy "willows_world_private_objects_owner_delete"
on storage.objects for delete
to authenticated
using (bucket_id = 'willows-world-private' and (storage.foldername(name))[1] = (select auth.uid())::text);
