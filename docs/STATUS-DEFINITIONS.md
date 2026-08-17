# Willow's World — Status Definitions

Use these terms consistently in issues, PRs, handoffs and readiness documents.

- **planned** — accepted into a release gate but implementation has not started.
- **in progress** — implementation exists on an active branch/PR but has not passed its evidence gate.
- **prototype** — demonstrates an idea/experience but is not yet durable/release evidence.
- **partial** — some required behavior is implemented and evidenced; the capability is not complete.
- **blocked** — a named dependency prevents the next required verification or implementation step; cause and next alternative/action must be recorded.
- **implemented** — code/configuration exists and focused verification passes, but broader release-gate checks may remain.
- **verified** — the capability passed the evidence defined by `VERIFICATION-MATRIX.md` for the relevant commit/build.
- **release ready** — every applicable capability in the current release gate is verified and release operations are prepared.
- **released** — the verified artifact is actually live/distributed and post-release health has been checked.

Never use `done`, `complete`, `10/10` or `production ready` as substitutes for the evidence-bearing statuses above unless the relevant release gate genuinely passes.
