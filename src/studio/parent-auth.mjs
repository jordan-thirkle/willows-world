export function createParentAuthBoundary(authClient) {
  if (!authClient?.auth) throw new Error('auth client is required');

  async function currentParent() {
    const { data, error } = await authClient.auth.getUser();
    if (error) throw error;
    return data?.user ?? null;
  }

  async function requestMagicLink({ email, redirectTo }) {
    if (!email || typeof email !== 'string') throw new Error('parent email is required');
    const options = { shouldCreateUser: false };
    if (redirectTo) options.emailRedirectTo = redirectTo;
    const { error } = await authClient.auth.signInWithOtp({ email, options });
    if (error) throw error;
    return { requested: true };
  }

  async function requireParent() {
    const user = await currentParent();
    if (!user?.id) throw new Error('authenticated parent session required');
    return user;
  }

  async function signOut() {
    const { error } = await authClient.auth.signOut();
    if (error) throw error;
  }

  return { currentParent, requestMagicLink, requireParent, signOut };
}
