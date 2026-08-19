import { createParentAuthBoundary } from '/src/studio/parent-auth.mjs';

const PROJECT_URL = 'https://vkeqfjblzqovczndnjck.supabase.co';
const PUBLISHABLE_KEY = 'sb_publishable_ZB2QfWBk3187VGFEjwXUWA_9Aa_Uq0A';
const PRIVATE_BUCKET = 'willows-world-private';
const EPISODE_ID = 'episode-001';

const status = document.querySelector('#auth-status');
const form = document.querySelector('#magic-link-form');
const authGate = document.querySelector('#auth-gate');
const workspace = document.querySelector('#workspace');
const sessionLabel = document.querySelector('#session-label');
const signOutButton = document.querySelector('#sign-out');
const uploadForm = document.querySelector('#episode-upload-form');
const uploadStatus = document.querySelector('#upload-status');
const uploadCheck = document.querySelector('#upload-check');
const integrityCheck = document.querySelector('#integrity-check');

let client;
let currentParent;

function setStatus(message) {
  if (status) status.textContent = message;
}

function setUploadStatus(message) {
  if (uploadStatus) uploadStatus.textContent = message;
}

function renderParent(parent) {
  currentParent = parent?.id ? parent : null;
  const signedIn = Boolean(currentParent);
  form.hidden = signedIn;
  authGate.hidden = signedIn;
  workspace.hidden = !signedIn;
  signOutButton.hidden = !signedIn;
  sessionLabel.textContent = signedIn ? 'Private session verified' : 'Private access locked';
  setStatus(signedIn ? 'Private session verified.' : 'Sign in to enter Parent Studio.');
}

function safeExtension(file) {
  const raw = file.name.includes('.') ? file.name.split('.').pop() : '';
  return raw && /^[a-z0-9]{1,8}$/i.test(raw) ? `.${raw.toLowerCase()}` : '';
}

async function sha256Hex(file) {
  const digest = await crypto.subtle.digest('SHA-256', await file.arrayBuffer());
  return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function archiveEpisode(event) {
  event.preventDefault();
  const file = document.querySelector('#episode-file')?.files?.[0];
  const button = document.querySelector('#episode-upload');
  if (!currentParent?.id || !file) {
    setUploadStatus('Choose a recording while signed in.');
    return;
  }

  button.disabled = true;
  let storagePath = null;
  try {
    setUploadStatus('Checking the recording and calculating its integrity fingerprint…');
    const hash = await sha256Hex(file);
    const objectName = `${crypto.randomUUID()}${safeExtension(file)}`;
    storagePath = `${currentParent.id}/${EPISODE_ID}/${objectName}`;

    setUploadStatus('Archiving the original privately…');
    const { error: uploadError } = await client.storage
      .from(PRIVATE_BUCKET)
      .upload(storagePath, file, {
        contentType: file.type || 'application/octet-stream',
        upsert: false,
      });
    if (uploadError) throw uploadError;

    const { error: rowError } = await client.from('willows_world_media_assets').insert({
      owner_id: currentParent.id,
      episode_id: EPISODE_ID,
      storage_bucket: PRIVATE_BUCKET,
      storage_path: storagePath,
      sha256: hash,
      mime_type: file.type || null,
      size_bytes: file.size,
      provenance: 'observed',
    });

    if (rowError) {
      await client.storage.from(PRIVATE_BUCKET).remove([storagePath]);
      throw rowError;
    }

    uploadCheck.textContent = '✓ Verified private upload';
    integrityCheck.textContent = `✓ SHA-256 recorded · ${hash.slice(0, 12)}…`;
    setUploadStatus('Episode 001 is privately archived. The original is not publicly exposed.');
    uploadForm.reset();
  } catch (error) {
    console.error('Private ingest failed', error);
    setUploadStatus(`Archive failed safely: ${error?.message || 'no private media was published.'}`);
  } finally {
    button.disabled = false;
  }
}

async function boot() {
  if (!globalThis.supabase?.createClient) {
    form.hidden = false;
    sessionLabel.textContent = 'Private access unavailable';
    setStatus('Private sign-in is unavailable because the authentication client did not load.');
    return;
  }

  client = globalThis.supabase.createClient(PROJECT_URL, PUBLISHABLE_KEY, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  });

  const parentAuth = createParentAuthBoundary(client);

  try {
    renderParent(await parentAuth.currentParent());
  } catch {
    form.hidden = false;
    renderParent(null);
    setStatus('Unable to verify a parent session. Private operations remain locked.');
  }

  client.auth.onAuthStateChange(async () => {
    try {
      renderParent(await parentAuth.currentParent());
    } catch {
      renderParent(null);
      setStatus('Unable to verify a parent session. Private operations remain locked.');
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submit = form.querySelector('button[type="submit"]');
    const email = new FormData(form).get('email')?.toString().trim();
    submit.disabled = true;
    setStatus('Requesting a private sign-in link…');
    try {
      await parentAuth.requestMagicLink({ email, redirectTo: `${location.origin}/studio/` });
      form.reset();
      setStatus('If that address is approved, a private sign-in link has been sent.');
    } catch {
      setStatus('The sign-in request could not be completed. No private access was granted.');
    } finally {
      submit.disabled = false;
    }
  });

  signOutButton.addEventListener('click', async () => {
    signOutButton.disabled = true;
    try {
      await parentAuth.signOut();
      renderParent(null);
    } catch {
      sessionLabel.textContent = 'Sign-out unconfirmed';
    } finally {
      signOutButton.disabled = false;
    }
  });

  uploadForm?.addEventListener('submit', archiveEpisode);
}

boot();
