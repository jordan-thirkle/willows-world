# Willow's World — P0 Acceptance Contract

P0 exists to prove that one ordinary real reading performance can become a durable, polished Willow's World experience.

## Scenario

Given a private Episode 001 source recording and its rights metadata,
when the parent imports it, reviews/corrects the timed performance, approves its scene plan/assets and opens Story Woods,
then the child can hear the real approved performance while words/scenes respond deterministically,
and completion changes persistent learning/world state,
and the same approved revision can render landscape and vertical outputs,
and nothing can be publicly published without a valid parent approval and eligible rights state.

## Failure cases that must be tested

- source ingest is retried;
- transcript/timing revision changes after approval;
- scene/art revision changes after approval;
- playback seeks across word/scene boundaries;
- app/process restarts after progression;
- a render fails and is retried;
- export/publication is attempted with missing or stale approval;
- public access is attempted for an unpublished/private record.

## Exit

P0 passes only when the scenario and relevant failure cases have automated/runtime evidence tied to the candidate commit. A polished static Story Woods screen alone cannot pass P0.
