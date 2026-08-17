import { createParentAuthBoundary } from '/src/studio/parent-auth.mjs';

const PROJECT_URL = 'https://vkeqfjblzqovczndnjck.supabase.co';
const PUBLISHABLE_KEY = 'sb_publishable_ZB2QfWBk3187VGFEjwXUWA_9Aa_Uq0A';

const status = document.querySelector('#auth-status');
const form = document.querySelector('#magic-link-form');
const signedInActions = document.querySelector('#signed-in-actions');
const signOutButton = document.querySelector('#sign-out');

function setStatus(message) {
  status.textContent = message;
}

function renderParent(parent) {
  const signedIn = Boolean(parent?.id);
  form.hidden = signedIn;
  signedInActions.hidden = !signedIn;
  setStatus(signedIn ? 'Authenticated parent session verified.' : 'No authenticated parent session.');
}

async function boot() {
  if (!globalThis.supabase?.createClient) {
    setStatus('Private sign-in is unavailable because the authentication client did not load.');
    return;
  }

  const client = globalThis.supabase.createClient(PROJECT_URL, PUBLISHABLE_KEY, {
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
    setStatus('Unable to verify a parent session. Private operations remain locked.');
  }

  client.auth.onAuthStateChange(async () => {
    try {
      renderParent(await parentAuth.currentParent());
    } catch {
      form.hidden = false;
      signedInActions.hidden = true;
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
      setStatus('If that address is an approved parent account, a sign-in link has been sent.');
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
      setStatus('Sign-out could not be confirmed. Refresh before attempting private work.');
    } finally {
      signOutButton.disabled = false;
    }
  });
}

boot();
