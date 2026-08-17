import { createStoryTimeline } from '../domain/story-timeline.mjs';
import { buildStoryWoodsStates } from './performance-adapter.mjs';

export function createStoryWoodsTimeline({ performance, scenePlan }) {
  const timeline = createStoryTimeline({ performance, scenePlan });
  const cueStates = buildStoryWoodsStates(performance);
  const cuesByWordId = new Map(cueStates.map((cue) => [cue.wordId, cue]));

  return {
    performanceRevisionId: timeline.performanceRevisionId,
    scenePlanRevisionId: timeline.scenePlanRevisionId,
    durationMs: timeline.durationMs,
    frameAt(timeMs) {
      const frame = timeline.frameAt(timeMs);
      const cue = frame.activeWordId ? cuesByWordId.get(frame.activeWordId) ?? null : null;
      return {
        ...frame,
        activeCue: cue ? { word: cue.word, wordId: cue.wordId, message: cue.message } : null
      };
    }
  };
}

export async function loadStoryWoodsTimeline(fetchImpl = globalThis.fetch) {
  if (typeof fetchImpl !== 'function') throw new Error('A fetch implementation is required');
  const [performanceResponse, stateResponse] = await Promise.all([
    fetchImpl('/episodes/001/performance.preview.json', { cache: 'no-store' }),
    fetchImpl('/episodes/001/state.preview.json', { cache: 'no-store' })
  ]);
  if (!performanceResponse.ok) throw new Error(`Unable to load StoryPerformance (${performanceResponse.status})`);
  if (!stateResponse.ok) throw new Error(`Unable to load EpisodeState (${stateResponse.status})`);
  const performance = await performanceResponse.json();
  const state = await stateResponse.json();
  if (!state?.scenePlan) throw new Error('EpisodeState contains no ScenePlan');
  return { performance, scenePlan: state.scenePlan, timeline: createStoryWoodsTimeline({ performance, scenePlan: state.scenePlan }) };
}
