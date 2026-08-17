import test from 'node:test';
import assert from 'node:assert/strict';
import { createParentAuthBoundary } from '../src/studio/parent-auth.mjs';

function fakeClient({ user = null, authError = null, otpError = null } = {}) {
  const calls = [];
  return {
    calls,
    auth: {
      async getUser() { calls.push(['getUser']); return { data: { user }, error: authError }; },
      async signInWithOtp(input) { calls.push(['signInWithOtp', input]); return { error: otpError }; },
      async signOut() { calls.push(['signOut']); return { error: null }; }
    }
  };
}

test('requires an authenticated parent before private work', async () => {
  const boundary = createParentAuthBoundary(fakeClient());
  await assert.rejects(boundary.requireParent(), /authenticated parent session required/);
});

test('returns the authenticated parent identity from server-verified auth', async () => {
  const user = { id: 'parent-123', email: 'parent@example.test' };
  const boundary = createParentAuthBoundary(fakeClient({ user }));
  assert.equal(await boundary.requireParent(), user);
});

test('requests an existing-user magic link without silently creating accounts', async () => {
  const client = fakeClient();
  const boundary = createParentAuthBoundary(client);
  await boundary.requestMagicLink({ email: 'parent@example.test', redirectTo: 'https://example.test/studio' });
  assert.deepEqual(client.calls[0], ['signInWithOtp', {
    email: 'parent@example.test',
    options: { shouldCreateUser: false, emailRedirectTo: 'https://example.test/studio' }
  }]);
});

test('propagates authentication failures instead of bypassing them', async () => {
  const boundary = createParentAuthBoundary(fakeClient({ authError: new Error('auth unavailable') }));
  await assert.rejects(boundary.requireParent(), /auth unavailable/);
});
