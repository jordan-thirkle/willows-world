const RIGHTS_STATES = new Set([
  'private-development-only',
  'owned-original',
  'licensed',
  'public-domain-or-equivalent',
  'permission-required',
  'blocked'
]);

const PUBLISHABLE_RIGHTS = new Set(['owned-original', 'licensed', 'public-domain-or-equivalent']);

export function validateScenePlan(plan) {
  const errors = [];
  if (!plan || typeof plan !== 'object') return ['scene plan must be an object'];
  if (plan.schemaVersion !== 1) errors.push('scene plan schemaVersion must be 1');
  if (!plan.scenePlanId) errors.push('scenePlanId is required');
  if (!plan.revisionId) errors.push('scene plan revisionId is required');
  if (!plan.performanceRevisionId) errors.push('performanceRevisionId is required');
  if (!Array.isArray(plan.scenes) || plan.scenes.length === 0) errors.push('scenes are required');
  const ids = new Set();
  for (const [index, scene] of (plan.scenes || []).entries()) {
    if (!scene.id || ids.has(scene.id)) errors.push(`scene ${index} must have a unique id`);
    ids.add(scene.id);
    if (!Number.isFinite(scene.startMs) || !Number.isFinite(scene.endMs) || scene.startMs < 0 || scene.endMs < scene.startMs) errors.push(`scene ${index} timing is invalid`);
  }
  return errors;
}

export function validateLearningEvent(event) {
  const errors = [];
  if (!event || typeof event !== 'object') return ['learning event must be an object'];
  if (event.schemaVersion !== 1) errors.push('learning event schemaVersion must be 1');
  if (!event.eventId) errors.push('eventId is required');
  if (!event.performanceRevisionId) errors.push('learning event performanceRevisionId is required');
  if (!event.wordId) errors.push('wordId is required');
  if (!event.kind) errors.push('learning event kind is required');
  if (!event.provenance) errors.push('learning event provenance is required');
  return errors;
}

export function validatePublicationApproval(approval) {
  const errors = [];
  if (!approval || typeof approval !== 'object') return ['publication approval must be an object'];
  if (approval.schemaVersion !== 1) errors.push('publication approval schemaVersion must be 1');
  if (!approval.approvalId) errors.push('approvalId is required');
  if (!approval.performanceRevisionId) errors.push('approval performanceRevisionId is required');
  if (!approval.scenePlanRevisionId) errors.push('approval scenePlanRevisionId is required');
  if (!RIGHTS_STATES.has(approval.rightsState)) errors.push('rightsState is invalid');
  if (approval.approved === true && !approval.approvedBy) errors.push('approved publication requires approvedBy');
  if (approval.approved === true && !approval.approvedAt) errors.push('approved publication requires approvedAt');
  return errors;
}

export function canPublishRevision({ performance, scenePlan, approval }) {
  const reasons = [];
  if (!performance || performance.status !== 'parent-approved' || performance.review?.parentApproved !== true) reasons.push('performance is not parent-approved');
  if (!scenePlan || scenePlan.performanceRevisionId !== performance?.revisionId) reasons.push('scene plan does not reference this performance revision');
  if (!approval || validatePublicationApproval(approval).length) reasons.push('publication approval is invalid');
  if (approval?.performanceRevisionId !== performance?.revisionId) reasons.push('approval targets a different performance revision');
  if (approval?.scenePlanRevisionId !== scenePlan?.revisionId) reasons.push('approval targets a different scene plan revision');
  if (approval?.approved !== true) reasons.push('publication is not explicitly approved');
  if (!PUBLISHABLE_RIGHTS.has(approval?.rightsState)) reasons.push('rights state is not publishable');
  return { publishable: reasons.length === 0, reasons };
}
