# Willow's World — Next

## Next implementation slice

**P0 / Canonical Episode Contract**

The next code change should establish the smallest durable data boundary that lets the existing Story Woods experience, later Expo client and Remotion renderer agree on one approved performance.

### Deliverable

A safe, versioned Episode 001 fixture and tested TypeScript contracts for:

- `StoryPerformance`
- `ScenePlan`
- `LearningEvent`
- `PublicationApproval`

Then adapt the existing Story Woods data-loading boundary to consume the canonical fixture without redesigning the experience.

### Acceptance

- serialization/reload preserves revision identity, timing, rights and approval state;
- unapproved/stale revisions cannot be treated as publishable;
- the fixture contains no private child recording or secret/public media URL;
- existing Story Woods behavior still renders from the new canonical adapter;
- focused tests + relevant typecheck/build pass;
- browser evidence confirms no accidental visual regression.

### Explicit non-goals for this slice

No database vendor migration, authentication system, new world destination, subscription system, social features, public publishing or native rewrite. Those are later work after the canonical contract is proven.
