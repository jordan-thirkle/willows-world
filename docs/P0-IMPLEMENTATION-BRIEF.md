# P0 Implementation Brief — Canonical Episode Contract

## Objective
Make the current Story Woods proving slice consume one safe, versioned canonical Episode 001 record that can later be shared with Expo and Remotion.

## Required domain concepts

### StoryPerformance
Must identify the performance and revision, reference private source media opaquely, carry content/story rights state, transcript/timing revision, scene-plan revision, review/approval state and derived-manifest references.

### ScenePlan
Must define time-ranged scenes independently of React Native, web or Remotion implementation details and reference approved character/world assets by stable IDs/revisions.

### LearningEvent
Must represent explicit replayable progress events rather than hidden component state.

### PublicationApproval
Must bind parent approval to exact performance/scene/render revisions and intended destination. A later changed revision is not covered by stale approval.

## Safe fixture
The repository fixture must not contain the real private recording, a public URL to it, secrets or unnecessary identifying family metadata. Use an opaque source reference and enough representative timing/scenes to exercise the current player.

## First tests

1. canonical performance round-trips through serialization without losing revision/timing/rights/approval data;
2. missing approval is not publishable;
3. approval for revision N does not authorize N+1;
4. fixture validation rejects malformed timing/revision relationships;
5. existing Story Woods adapter can load the canonical fixture.

## Non-goals
No provider/database choice, auth, public API, new world area or native rewrite in this slice.
