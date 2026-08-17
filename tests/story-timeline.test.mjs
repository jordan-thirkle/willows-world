import test from 'node:test';
import assert from 'node:assert/strict';
import { createStoryTimeline } from '../src/domain/story-timeline.mjs';

const performance = {
  schemaVersion: 1,
  performanceId: 'synthetic-performance',
  revisionId: 'synthetic-performance-r1',
  status: 'draft',
  source: { sha256: 'synthetic-public-fixture', durationMs: 4000 },
  review: { parentApproved: false },
  words: [
    { id: 'w1', text: 'Moon', startMs: 0, endMs: 900 },
    { id: 'w2', text: 'Seed', startMs: 1000, endMs: 1900 },
    { id: 'w3', text: 'Glow', startMs: 2000, endMs: 2900 },
    { id: 'w4', text: 'Home', startMs: 3000, endMs: 3900 }
  ]
};

const scenePlan = {
  schemaVersion: 1,
  scenePlanId: 'synthetic-scenes',
  revisionId: 'synthetic-scenes-r1',
  performanceRevisionId: performance.revisionId,
  status: 'draft',
  scenes: [
    { id: 'moon', startMs: 0, endMs: 900, cueWordId: 'w1' },
    { id: 'seed', startMs: 1000, endMs: 1900, cueWordId: 'w2' },
    { id: 'glow', startMs: 2000, endMs: 2900, cueWordId: 'w3' },
    { id: 'home', startMs: 3000, endMs: 3900, cueWordId: 'w4' }
  ]
};

test('projects deterministic word and scene state including gaps and end', () => {
  const timeline = createStoryTimeline({ performance, scenePlan });
  assert.deepEqual(timeline.frameAt(0), {
    performanceRevisionId: 'synthetic-performance-r1', scenePlanRevisionId: 'synthetic-scenes-r1',
    timeMs: 0, durationMs: 4000, progress: 0, ended: false, activeWordId: 'w1', activeSceneId: 'moon'
  });
  assert.equal(timeline.frameAt(950).activeWordId, null);
  assert.equal(timeline.frameAt(950).activeSceneId, null);
  assert.equal(timeline.frameAt(1000).activeWordId, 'w2');
  assert.equal(timeline.frameAt(4000).ended, true);
  assert.equal(timeline.frameAt(9999).timeMs, 4000);
});

test('fails closed on stale revisions and unknown cue words', () => {
  assert.throws(() => createStoryTimeline({ performance, scenePlan: { ...scenePlan, performanceRevisionId: 'stale' } }), /different performance revision/);
  const badScenes = { ...scenePlan, scenes: [{ ...scenePlan.scenes[0], cueWordId: 'missing' }] };
  assert.throws(() => createStoryTimeline({ performance, scenePlan: badScenes }), /unknown cue word/);
});

test('renderer descriptors share canonical revisions and duration across aspect ratios', () => {
  const timeline = createStoryTimeline({ performance, scenePlan });
  const landscape = timeline.renderDescriptor({ width: 1920, height: 1080 });
  const portrait = timeline.renderDescriptor({ width: 1080, height: 1920 });
  assert.equal(landscape.durationMs, portrait.durationMs);
  assert.equal(landscape.performanceRevisionId, portrait.performanceRevisionId);
  assert.equal(landscape.scenePlanRevisionId, portrait.scenePlanRevisionId);
  assert.throws(() => timeline.renderDescriptor({ width: 0, height: 1080 }), /positive integers/);
});
