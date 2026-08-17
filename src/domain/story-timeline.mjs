import { validateStoryPerformance } from './story-performance.mjs';
import { validateScenePlan } from './episode-state.mjs';

export function createStoryTimeline({ performance, scenePlan }) {
  const performanceErrors = validateStoryPerformance(performance);
  const sceneErrors = validateScenePlan(scenePlan);
  if (performanceErrors.length) throw new Error(`invalid performance: ${performanceErrors.join('; ')}`);
  if (sceneErrors.length) throw new Error(`invalid scene plan: ${sceneErrors.join('; ')}`);
  if (scenePlan.performanceRevisionId !== performance.revisionId) throw new Error('scene plan targets a different performance revision');

  const wordsById = new Map(performance.words.map((word) => [word.id, word]));
  for (const scene of scenePlan.scenes) {
    if (scene.cueWordId && !wordsById.has(scene.cueWordId)) throw new Error(`scene ${scene.id} references unknown cue word ${scene.cueWordId}`);
    if (scene.endMs > performance.source.durationMs) throw new Error(`scene ${scene.id} exceeds performance duration`);
  }

  const durationMs = performance.source.durationMs;

  function frameAt(inputMs) {
    const ms = Math.min(Math.max(Number.isFinite(inputMs) ? inputMs : 0, 0), durationMs);
    const activeWord = performance.words.find((word) => ms >= word.startMs && ms < word.endMs) ?? null;
    const activeScene = scenePlan.scenes.find((scene) => ms >= scene.startMs && ms < scene.endMs) ?? null;
    return {
      performanceRevisionId: performance.revisionId,
      scenePlanRevisionId: scenePlan.revisionId,
      timeMs: ms,
      durationMs,
      progress: durationMs === 0 ? 1 : ms / durationMs,
      ended: ms >= durationMs,
      activeWordId: activeWord?.id ?? null,
      activeSceneId: activeScene?.id ?? null
    };
  }

  return {
    performanceRevisionId: performance.revisionId,
    scenePlanRevisionId: scenePlan.revisionId,
    durationMs,
    frameAt,
    renderDescriptor({ width, height }) {
      if (!Number.isInteger(width) || width <= 0 || !Number.isInteger(height) || height <= 0) throw new Error('render dimensions must be positive integers');
      return {
        width,
        height,
        durationMs,
        performanceRevisionId: performance.revisionId,
        scenePlanRevisionId: scenePlan.revisionId
      };
    }
  };
}
