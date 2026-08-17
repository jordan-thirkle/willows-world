const STATUSES = new Set(['draft', 'reviewed', 'parent-approved', 'superseded']);

export function validateStoryPerformance(performance) {
  const errors = [];
  if (!performance || typeof performance !== 'object') return ['performance must be an object'];
  if (performance.schemaVersion !== 1) errors.push('schemaVersion must be 1');
  if (!performance.performanceId) errors.push('performanceId is required');
  if (!performance.revisionId) errors.push('revisionId is required');
  if (!STATUSES.has(performance.status)) errors.push('status is invalid');
  if (!performance.source?.sha256) errors.push('source sha256 is required');
  if (!Number.isFinite(performance.source?.durationMs) || performance.source.durationMs <= 0) errors.push('source duration must be positive');
  if (!Array.isArray(performance.words) || performance.words.length === 0) errors.push('words are required');

  const ids = new Set();
  let previousStart = -1;
  for (const [index, word] of (performance.words || []).entries()) {
    if (!word.id || ids.has(word.id)) errors.push(`word ${index} must have a unique word id`);
    ids.add(word.id);
    if (!word.text) errors.push(`word ${index} text is required`);
    if (!Number.isFinite(word.startMs) || !Number.isFinite(word.endMs) || word.startMs < 0 || word.endMs < word.startMs) errors.push(`word ${index} timing is invalid`);
    if (word.startMs < previousStart) errors.push(`word ${index} timing must be monotonic`);
    if (word.endMs > performance.source?.durationMs) errors.push(`word ${index} exceeds source duration`);
    previousStart = word.startMs;
  }

  if (performance.status !== 'parent-approved' && performance.review?.parentApproved === true) errors.push('parentApproved requires parent-approved status');
  if (performance.status === 'parent-approved' && performance.review?.parentApproved !== true) errors.push('parent-approved status requires parentApproved');
  return errors;
}
