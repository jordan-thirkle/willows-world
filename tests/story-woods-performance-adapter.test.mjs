import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { buildStoryWoodsStates, loadStoryWoodsPreview } from '../src/story-woods/performance-adapter.mjs';

const fixture = JSON.parse(await readFile(new URL('../episodes/001/performance.preview.json', import.meta.url), 'utf8'));

test('publication-safe fixture drives the four existing Story Woods cues', () => {
  const states = buildStoryWoodsStates(fixture);
  assert.deepEqual(states.map(({ word }) => word), ['moon', 'seed', 'glow', 'home']);
  assert.equal(states.length, 4);
  assert.ok(states.every(({ message }) => typeof message === 'string' && message.length > 0));
});

test('adapter preserves canonical word identity and timing', () => {
  const states = buildStoryWoodsStates(fixture);
  assert.deepEqual(
    states.map(({ wordId, startMs, endMs }) => ({ wordId, startMs, endMs })),
    fixture.words.map(({ id: wordId, startMs, endMs }) => ({ wordId, startMs, endMs }))
  );
});

test('invalid performance is rejected instead of silently becoming UI truth', () => {
  assert.throws(() => buildStoryWoodsStates({ ...fixture, revisionId: '' }), /revisionId is required/);
});

test('loader validates HTTP success and returns the canonical revision', async () => {
  const fetchImpl = async () => ({ ok: true, status: 200, json: async () => fixture });
  const { performance, states } = await loadStoryWoodsPreview(fetchImpl);
  assert.equal(performance.revisionId, 'episode-001-story-woods-preview-r1');
  assert.equal(states.at(-1).word, 'home');
});

test('loader fails closed when the fixture cannot be loaded', async () => {
  const fetchImpl = async () => ({ ok: false, status: 404 });
  await assert.rejects(() => loadStoryWoodsPreview(fetchImpl), /Unable to load StoryPerformance/);
});
