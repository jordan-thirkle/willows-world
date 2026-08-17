# Willow's World — Agent Runbook

Use this runbook when an AI coding session resumes the project.

## Startup

1. Read `README.md`, `docs/PRODUCT.md`, `docs/PROJECT-BOUNDARY.md`, `docs/PLATFORM-ARCHITECTURE.md`, `docs/OPERATING-MODEL.md`, `docs/CURRENT-STATE.md`, `docs/ROADMAP.md` and the active implementation plan.
2. Inspect current branch, recent commits, open PRs/issues and actual runtime/build state before assuming the handoff is current.
3. Reconcile documentation against repository evidence. Repository/runtime truth wins over stale prose.
4. Identify the earliest incomplete release gate and its highest-value unblocked vertical slice.

## Execution

- Use a branch/PR for meaningful work.
- Prefer test-first changes around domain, state, security and regressions.
- Keep changes narrow enough for independent review.
- Preserve existing working visual behavior unless the task intentionally changes it.
- Do not add infrastructure until a proven interface requires it.
- Do not add features merely to make the project look larger.

## Critics

Before merge/release, challenge the work from these perspectives:

- product: does this improve the current gate and real parent/child experience?
- child safety/privacy: can private data leak, be over-collected or be published accidentally?
- rights/provenance: are source rights and generated derivatives clearly distinguished?
- architecture: is source truth durable and vendor/UI coupling replaceable?
- mobile: does it work as a real phone experience rather than a desktop page squeezed smaller?
- accessibility: can child and parent flows be operated/read/understood accessibly?
- reliability: what happens on interruption, restart, partial failure and stale revisions?
- security: are auth/storage/publication boundaries enforced server-side where required?
- release: can a clean environment reproduce the build and can production be rolled back?
- growth: does public discovery amplify a good product without contaminating the private child experience?

A critic must cite evidence or a reproducible concern. Do not invent defects for theatre.

## Verification

Use the strongest available evidence appropriate to the slice: focused tests, full tests, typecheck/lint/build, browser inspection, screenshots, rendered media inspection, native simulator/device runs, accessibility checks, security tests and production health.

Never claim a check passed when it could not run. Record `blocked`, the cause, and the best alternative evidence.

## Handoff

Before stopping:

1. ensure work is committed/pushed or clearly record why not;
2. update current-state/evidence documentation only with verified facts;
3. record unresolved blockers and exact next action;
4. leave the repository in a state another agent can inspect without relying on chat memory.
