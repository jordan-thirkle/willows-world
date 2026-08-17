import { validateStoryPerformance } from '../domain/story-performance.mjs';

const CUES = Object.freeze({
  moon: 'Moonlight reaches deeper into the woods.',
  seed: 'A tiny seed takes root beside Willow.',
  glow: 'Fireflies wake and Story Woods begins to glow.',
  home: 'The path home appears. Story Woods remembers what Willow learned.'
});

export function buildStoryWoodsStates(performance) {
  const errors = validateStoryPerformance(performance);
  if (errors.length) {
    throw new Error(`Invalid StoryPerformance: ${errors.join('; ')}`);
  }

  return performance.words
    .map((word) => ({
      word: String(word.text).toLowerCase().replace(/[^a-z'-]/g, ''),
      wordId: word.id,
      startMs: word.startMs,
      endMs: word.endMs
    }))
    .filter((word) => CUES[word.word])
    .map((word) => ({ ...word, message: CUES[word.word] }));
}

export async function loadStoryWoodsPreview(fetchImpl = globalThis.fetch) {
  if (typeof fetchImpl !== 'function') throw new Error('A fetch implementation is required');
  const response = await fetchImpl('/episodes/001/performance.preview.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`Unable to load StoryPerformance (${response.status})`);
  const performance = await response.json();
  const states = buildStoryWoodsStates(performance);
  if (!states.length) throw new Error('StoryPerformance contains no Story Woods cues');
  return { performance, states };
}
