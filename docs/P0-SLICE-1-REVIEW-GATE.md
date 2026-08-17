# P0 Slice 1 — Review Gate

Approve the canonical Episode contract slice only if:

- it uses actual repository conventions rather than imposing speculative structure;
- private media is represented opaquely/safely;
- revision/approval semantics make stale approval impossible by construction or validation;
- rights state is explicit enough to prevent accidental public eligibility;
- Story Woods consumes the canonical fixture through a clear boundary;
- existing visual behavior is preserved unless intentionally improved and verified;
- tests prove negative publication/revision cases, not only happy-path serialization;
- no database/auth/native/public feature creep enters the slice.

If the current codebase already has equivalent types, deepen/consolidate them rather than duplicating a parallel domain model.
