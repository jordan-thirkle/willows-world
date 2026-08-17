import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  validateScenePlan,
  validateLearningEvent,
  validatePublicationApproval,
  canPublishRevision
} from '../src/domain/episode-state.mjs';

const state = JSON.parse(await readFile(new URL('../episodes/001/state.preview.json', import.meta.url), 'utf8'));
const performance = JSON.parse(await readFile(new URL('../episodes/001/performance.preview.json', import.meta.url), 'utf8'));

test('safe scene plan and learning event satisfy their contracts', () => {
  assert.deepEqual(validateScenePlan(state.scenePlan), []);
  assert.deepEqual(validateLearningEvent(state.learningEvents[0]), []);
});

test('private development state cannot become publishable', () => {
  const result = canPublishRevision({ performance, scenePlan: state.scenePlan, approval: state.publicationApproval });
  assert.equal(result.publishable, false);
  assert.ok(result.reasons.includes('performance is not parent-approved'));
  assert.ok(result.reasons.includes('publication is not explicitly approved'));
  assert.ok(result.reasons.includes('rights state is not publishable'));
});

test('stale approval cannot publish a newer performance revision', () => {
  const approvedPerformance = structuredClone(performance);
  approvedPerformance.status = 'parent-approved';
  approvedPerformance.review.parentApproved = true;
  const approval = {
    ...state.publicationApproval,
    approved: true,
    approvedBy: 'parent-owner',
    approvedAt: '2026-08-17T00:00:00Z',
    rightsState: 'owned-original',
    performanceRevisionId: 'stale-revision'
  };
  const result = canPublishRevision({ performance: approvedPerformance, scenePlan: state.scenePlan, approval });
  assert.equal(result.publishable, false);
  assert.ok(result.reasons.includes('approval targets a different performance revision'));
});

test('explicit matching approval with publishable rights can pass', () => {
  const approvedPerformance = structuredClone(performance);
  approvedPerformance.status = 'parent-approved';
  approvedPerformance.review.parentApproved = true;
  const approval = {
    ...state.publicationApproval,
    approved: true,
    approvedBy: 'parent-owner',
    approvedAt: '2026-08-17T00:00:00Z',
    rightsState: 'owned-original'
  };
  const result = canPublishRevision({ performance: approvedPerformance, scenePlan: state.scenePlan, approval });
  assert.deepEqual(result, { publishable: true, reasons: [] });
});

test('approval contract rejects approval without human evidence', () => {
  const invalid = { ...state.publicationApproval, approved: true, rightsState: 'owned-original' };
  assert.ok(validatePublicationApproval(invalid).some((error) => error.includes('approvedBy')));
  assert.ok(validatePublicationApproval(invalid).some((error) => error.includes('approvedAt')));
});
