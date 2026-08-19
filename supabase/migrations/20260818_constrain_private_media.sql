-- Reconcile the already-applied live hardening for Willow's World private media.
update storage.buckets
set file_size_limit = 262144000,
    allowed_mime_types = array[
      'audio/mp4','audio/m4a','audio/x-m4a','audio/mpeg','audio/wav','audio/webm',
      'image/jpeg','image/png','image/webp','image/heic','image/heif',
      'video/mp4','video/quicktime','video/webm'
    ]::text[],
    public = false
where id = 'willows-world-private';
