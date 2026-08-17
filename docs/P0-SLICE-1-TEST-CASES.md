# P0 Slice 1 — Canonical Contract Test Cases

These are acceptance tests to translate into the repository's actual test framework after inspecting it.

1. `StoryPerformance` serialization round-trip preserves performance ID, revision, source opaque reference/hash, rights state, transcript words/timing, scene-plan revision and review state.
2. Validation rejects word timing whose end precedes start.
3. Validation rejects scene ranges that reference an unknown scene/asset revision where the domain requires a known reference.
4. `canPublish`/equivalent returns false with no approval.
5. Approval bound to performance revision 1 returns false for performance revision 2.
6. Approval bound to scene-plan revision A returns false after scene-plan revision B becomes active.
7. Rights state `private-development-only`, `permission-required` or `blocked` cannot satisfy public publication eligibility.
8. Repository-safe Episode 001 fixture validates and contains no HTTP/public source recording URL or embedded private media.
9. Existing Story Woods adapter renders/loads from the validated canonical fixture.

Exact function/type names should be finalized against current code conventions in the implementation branch; behavior is the contract.
