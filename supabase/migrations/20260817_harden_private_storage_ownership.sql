-- Defense in depth for Willow's World private child media.
-- Require both Supabase Storage's immutable owner_id and the owner-scoped path
-- to agree with the authenticated user. Never weaken this to path-only access.

drop policy if exists "willows_world_private_objects_owner_select" on storage.objects;
drop policy if exists "willows_world_private_objects_owner_insert" on storage.objects;
drop policy if exists "willows_world_private_objects_owner_update" on storage.objects;
drop policy if exists "willows_world_private_objects_owner_delete" on storage.objects;

create policy "willows_world_private_objects_owner_select"
on storage.objects for select
to authenticated
using (
  bucket_id = 'willows-world-private'
  and owner_id = (select auth.uid()::text)
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "willows_world_private_objects_owner_insert"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'willows-world-private'
  and owner_id = (select auth.uid()::text)
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "willows_world_private_objects_owner_update"
on storage.objects for update
to authenticated
using (
  bucket_id = 'willows-world-private'
  and owner_id = (select auth.uid()::text)
  and (storage.foldername(name))[1] = (select auth.uid())::text
)
with check (
  bucket_id = 'willows-world-private'
  and owner_id = (select auth.uid()::text)
  and (storage.foldername(name))[1] = (select auth.uid())::text
);

create policy "willows_world_private_objects_owner_delete"
on storage.objects for delete
to authenticated
using (
  bucket_id = 'willows-world-private'
  and owner_id = (select auth.uid()::text)
  and (storage.foldername(name))[1] = (select auth.uid())::text
);
