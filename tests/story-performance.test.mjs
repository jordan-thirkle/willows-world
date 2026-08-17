import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validateStoryPerformance } from '../src/domain/story-performance.mjs';

const fixture = JSON.parse(await readFile(new URL('../episodes/001/performance.draft.json', import.meta.url), 'utf8'));

test('Episode 001 draft satisfies the StoryPerformance contract', () => {
  assert.deepEqual(validateStoryPerformance(fixture), []);
});

test('rejects words whose timing moves backwards', () => {
  const invalid = structuredClone(fixture);
  invalid.words[1].startMs = invalid.words[0].startMs - 1;
  assert.ok(validateStoryPerformance(invalid).some((error) => error.includes('monotonic')));
});

test('rejects words outside source duration', () => {
  const invalid = structuredClone(fixture);
  invalid.words.at(-1).endMs = invalid.source.durationMs + 1;
  assert.ok(validateStoryPerformance(invalid).some((error) => error.includes('source duration')));
});

test('requires stable unique word ids', () => {
  const invalid = structuredClone(fixture);
  invalid.words[1].id = invalid.words[0].id;
  assert.ok(validateStoryPerformance(invalid).some((error) => error.includes('unique word id')));
});

test('draft cannot claim parent approval', () => {
  const invalid = structuredClone(fixture);
  invalid.status = 'draft';
  invalid.review.parentApproved = true;
  assert.ok(validateStoryPerformance(invalid).some((error) => error.includes('parentApproved')));
});
