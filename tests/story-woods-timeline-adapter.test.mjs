import test from 'node:test';
import assert from 'node:assert/strict';
import { createStoryWoodsTimeline, loadStoryWoodsTimeline } from '../src/story-woods/timeline-adapter.mjs';

const performance = {
  schemaVersion: 1,
  performanceId: 'safe-preview',
  revisionId: 'safe-preview-r1',
  status: 'draft',
  source: { sha256: 'synthetic', durationMs: 4000 },
  review: { parentApproved: false },
  words: [
    { id: 'w1', text: 'moon', startMs: 0, endMs: 900 },
    { id: 'w2', text: 'seed', startMs: 1000, endMs: 1900 },
    { id: 'w3', text: 'glow', startMs: 2000, endMs: 2900 },
    { id: 'w4', text: 'home', startMs: 3000, endMs: 3900 }
  ]
};

const scenePlan = {
  schemaVersion: 1,
  scenePlanId: 'safe-scenes',
  revisionId: 'safe-scenes-r1',
  performanceRevisionId: performance.revisionId,
  scenes: [
    { id: 's1', startMs: 0, endMs: 900, cueWordId: 'w1' },
    { id: 's2', startMs: 1000, endMs: 1900, cueWordId: 'w2' },
    { id: 's3', startMs: 2000, endMs: 2900, cueWordId: 'w3' },
    { id: 's4', startMs: 3000, endMs: 3900, cueWordId: 'w4' }
  ]
};

test('projects Story Woods cue and scene from the canonical timeline', () => {
  const timeline = createStoryWoodsTimeline({ performance, scenePlan });
  assert.equal(timeline.frameAt(100).activeSceneId, 's1');
  assert.equal(timeline.frameAt(100).activeCue.word, 'moon');
  assert.equal(timeline.frameAt(950).activeCue, null);
  assert.equal(timeline.frameAt(2050).activeCue.word, 'glow');
  assert.equal(timeline.frameAt(4000).ended, true);
});

test('loader requires both validated performance and scene-plan state', async () => {
  const fetchImpl = async (url) => ({
    ok: true,
    status: 200,
    async json() { return url.includes('performance') ? performance : { scenePlan }; }
  });
  const loaded = await loadStoryWoodsTimeline(fetchImpl);
  assert.equal(loaded.timeline.performanceRevisionId, performance.revisionId);
  assert.equal(loaded.timeline.scenePlanRevisionId, scenePlan.revisionId);

  await assert.rejects(
    loadStoryWoodsTimeline(async (url) => ({ ok: true, status: 200, async json() { return url.includes('performance') ? performance : {}; } })),
    /no ScenePlan/
  );
});
