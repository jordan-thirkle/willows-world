# Willow's World Public Launch Roadmap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move Willow's World from its current Episode 001 proving slice through product proof, native/private beta, public App Store/Play Store launch, and an organic By JTT discovery system without diluting the founding loop.

**Architecture:** Treat `StoryPerformance`, `ScenePlan`, learning events and publication approval as shared durable domain records. Expo/React Native becomes the family client, Next.js owns discoverable/public web, and Remotion remains a deterministic renderer consuming the same approved performance. Private source media lives outside GitHub in protected object storage; public derivatives cross the trust boundary only through explicit approval records.

**Tech Stack:** Expo + React Native + Expo Router; Next.js; TypeScript; Remotion; relational database; private object storage; provider-neutral AI adapters; GitHub PR workflow; Vercel for web delivery; native iOS/Android release tooling.

## Global Constraints

- Preserve **Record → Transform → Watch / Play → Share** as the product north star until P0 passes.
- The real child voice is canonical; no silent voice-clone substitution.
- Private child recordings, credentials and secrets never enter GitHub.
- Public publishing is off by default and requires explicit parent approval.
- Publication rights are independent from technical rendering capability.
- Mobile is the primary family viewport; desktop expands rather than defines the experience.
- Generated interpretations are replaceable; source performances and parent-approved corrections are durable.
- Do not optimize child time-in-app, streak pressure or behavioural advertising.
- Do not expand Maker Meadow, Discovery Hill, broad social, subscriptions or speculative mini-games before earlier gates pass.

---

## Workstream map

The four gates contain independent subsystems, so implementation is deliberately split into sequential vertical-slice plans rather than one giant rewrite. Each slice must ship working/testable software and preserve the current visual proof while replacing mocks with durable contracts.

### Task 1: Establish P0 canonical performance contract and safe Episode 001 fixture

**Files:**
- Create: `packages/domain/src/story-performance.ts`
- Create: `packages/domain/src/scene-plan.ts`
- Create: `packages/domain/src/learning-event.ts`
- Create: `packages/domain/src/publication.ts`
- Create: `packages/domain/src/index.ts`
- Create: `packages/domain/test/story-performance.test.ts`
- Create: `fixtures/episode-001.safe.json`
- Modify only the current Story Woods data adapter needed to consume the canonical fixture; do not rewrite unrelated UI.

**Interfaces:**
- Produces: `StoryPerformance`, `ScenePlan`, `LearningEvent`, `PublicationApproval` and versioned IDs/revision references.
- `StoryPerformance` must reference source media by opaque private storage identifier/hash, never a public child-media URL.
- `PublicationApproval` must identify exactly which performance/scene/render revision is approved and for which destination.

- [ ] Write domain tests proving an approved performance revision can be serialized/deserialized without losing transcript timing, scene-plan revision, rights status or approval state.
- [ ] Write a test proving a performance without explicit publication approval is not publishable.
- [ ] Write a test proving a publication approval for revision N cannot authorize revision N+1.
- [ ] Run the focused tests and record the expected failures before implementation.
- [ ] Implement the minimum versioned TypeScript contracts and validation needed to pass them.
- [ ] Create a repository-safe Episode 001 fixture containing synthetic/redacted media references rather than private child media.
- [ ] Adapt Story Woods to read this fixture through one boundary rather than page-local duplicate state.
- [ ] Run focused tests, typecheck and existing regression tests.
- [ ] Commit as one independently reviewable vertical slice.

### Task 2: Extract deterministic Story Woods playback and progression

**Files:**
- Create: `packages/player/src/playback-engine.ts`
- Create: `packages/player/test/playback-engine.test.ts`
- Create: `packages/progression/src/reducer.ts`
- Create: `packages/progression/test/reducer.test.ts`
- Modify: current Story Woods player/component files only where needed to consume these packages.

**Interfaces:**
- Consumes: approved `StoryPerformance` + `ScenePlan` revision.
- Produces: deterministic active word/scene state for timestamp `t` and explicit `LearningEvent[]` on completion/attempt.

- [ ] Test timestamp boundaries, pauses, seeking, final-word completion and scene transitions.
- [ ] Test that replaying the same learning events reconstructs identical world state.
- [ ] Verify failures before implementation.
- [ ] Implement pure playback/progression functions without React state ownership.
- [ ] Wire Story Woods to the deterministic engine while preserving the current visual experience.
- [ ] Verify synchronized playback against the safe fixture and add a measurable sync-drift assertion/tolerance.
- [ ] Run regression tests/typecheck and capture browser/mobile evidence.
- [ ] Commit.

### Task 3: Make parent review/approval a real gate

**Files:**
- Create or modify the smallest existing parent-review surface.
- Create: `packages/domain/src/review.ts`
- Create: `packages/domain/test/review.test.ts`
- Modify renderer/export entrypoints to require approved revisions.

**Interfaces:**
- Produces immutable review decisions referencing transcript/timing/scene/render revisions.
- Export/render/publication functions reject stale or missing approval.

- [ ] Test transcript correction creating a new revision and invalidating downstream stale approval.
- [ ] Test scene replacement invalidating only affected derived approval state.
- [ ] Test export rejection without valid parent approval.
- [ ] Implement review revisioning and minimal parent UI.
- [ ] Verify the user can inspect/correct/approve Episode 001 before export.
- [ ] Commit.

### Task 4: Prove one-performance/many-outputs with Remotion

**Files:**
- Modify/create renderer composition files under the existing renderer location.
- Create renderer tests for landscape/vertical composition props and timing.
- Create a manifest writer for captions, poster and rendered master metadata.

**Interfaces:**
- Consumes only approved canonical performance + scene plan + approved asset manifest.
- Produces 1920×1080 and 1080×1920 masters plus captions/thumbnail metadata tied to the same revision IDs.

- [ ] Test that both aspect-ratio compositions resolve identical approved timing and scene identities.
- [ ] Test that render metadata records performance/scene revision and source hash reference.
- [ ] Render short deterministic test outputs from the safe fixture.
- [ ] Verify audio/caption/scene synchronization and no manual duplicate episode definition.
- [ ] Commit.

### Task 5: Introduce durable private persistence behind interfaces

**Files:**
- Create focused storage/database adapters matching the architecture document; exact provider implementation is chosen only after inspecting current dependencies/deployment constraints.
- Create integration tests using isolated test storage/database resources or local emulators where supported.

**Interfaces:**
- Structured records: versioned performances, reviews, learning events, approvals and publication records.
- Object storage: immutable source namespace and separate derivative namespace.

- [ ] Define provider-neutral repository interfaces from the already-proven domain calls rather than speculative CRUD APIs.
- [ ] Test immutable source ingestion/content hashing/idempotency.
- [ ] Test restart/reload reconstructing approved performance and progression.
- [ ] Test private media URLs/objects are not anonymously enumerable or guessable.
- [ ] Implement one production-suitable relational + object-storage adapter.
- [ ] Migrate Episode 001 through the private path without committing its real media.
- [ ] Verify backup/export semantics for canonical records.
- [ ] Commit.

### Task 6: Converge the proven family experience into Expo

**Files:**
- Establish/modify `apps/mobile/` only after inspecting current repo structure and Expo state.
- Reuse `packages/domain`, `packages/player`, `packages/progression` and design tokens rather than reimplementing their logic.

**Interfaces:**
- Mobile consumes the same versioned domain/player contracts as web/renderer.

- [ ] Add tests for mobile navigation into Story Woods and parent-gated surfaces.
- [ ] Implement mobile audio/media permission and playback lifecycle handling.
- [ ] Implement large-touch-target child interaction and accessible labels/focus semantics.
- [ ] Verify interrupted playback, background/foreground transition, offline/reconnect and restart persistence.
- [ ] Run iOS simulator/device and Android emulator/device smoke flows where infrastructure permits; record any environment limitation explicitly rather than claiming success.
- [ ] Commit.

### Task 7: Add private-beta account, export and deletion boundaries

**Files:**
- Add the minimum identity/session boundary required by remote private data.
- Add export/delete domain/application services and tests.

**Interfaces:**
- Parent identity can access only authorized family/private records.
- Export produces a versioned portable package of canonical records and permitted media.
- Delete removes/revokes private data according to documented retention semantics.

- [ ] Test unauthorized cross-account/private-media access is rejected.
- [ ] Test export completeness for performance/transcript/timing/learning/publication metadata.
- [ ] Test deletion/revocation semantics and stale media links.
- [ ] Implement minimum UI and services.
- [ ] Security-review the trust boundary before beta.
- [ ] Commit.

### Task 8: Build the public/private publication boundary and public web

**Files:**
- Establish/modify `apps/web/` public routes.
- Create publication projection/service that copies only explicitly approved public fields/assets.
- Add tests for accidental private-field leakage.

**Interfaces:**
- Private canonical state → explicit `PublicationApproval` → sanitized public projection.
- Public web never queries arbitrary private performance/media records directly.

- [ ] Test that unpublished episodes return no public projection.
- [ ] Test approved projections omit private source media, learning history and internal review data.
- [ ] Implement product landing, safe episode/editorial route shape and support/privacy routes.
- [ ] Add intentional metadata, canonical URLs, Open Graph, sitemap and robots behavior.
- [ ] Verify crawlability and rendered metadata from production-like builds.
- [ ] Commit.

### Task 9: Establish App Store and Play Store release readiness

**Files:**
- Add platform configuration, icons/splash assets, release documentation and store-metadata source files under version control.
- Add `docs/release/APP-STORE-CHECKLIST.md` and `docs/release/PLAY-STORE-CHECKLIST.md`.

**Interfaces:**
- Store declarations must be derived from actual implemented data behavior, not marketing assumptions.

- [ ] Produce release builds from clean checkout/environment.
- [ ] Verify no secrets, private fixtures, dev endpoints or debug-only screens ship.
- [ ] Validate permission strings and only request permissions actually required.
- [ ] Prepare screenshots/metadata/age-content/privacy declarations from the verified build.
- [ ] Verify support/privacy/delete-account routes from the store-facing configuration.
- [ ] Record signing/submission steps and any human-account action that cannot be automated.
- [ ] Commit.

### Task 10: Establish By JTT organic discovery and media distribution

**Files:**
- Add public-web SEO tests/configuration where needed.
- Add a versioned episode distribution manifest consumed by renderer/publication tooling.
- Add `docs/growth/ORGANIC-LAUNCH.md` with measurable, non-spam launch workflow.

**Interfaces:**
- One approved public-safe performance revision can produce web metadata, YouTube landscape metadata and short-form metadata without duplicating canonical episode facts.

- [ ] Verify sitemap/canonical/metadata/schema behavior on representative public pages.
- [ ] Connect privacy-safe public analytics/Search Console configuration through environment-safe deployment settings.
- [ ] Define YouTube/short-form output naming, descriptions, thumbnails and revision traceability.
- [ ] Define X launch/progress/storytelling cadence as authored distribution, not auto-post spam.
- [ ] Establish metrics for qualified discovery → landing conversion → parent production-loop success; explicitly exclude child time-in-app as a growth KPI.
- [ ] Commit.

### Task 11: Release evidence gate and production launch

**Files:**
- Create: `docs/release/LAUNCH-EVIDENCE.md`
- Create/modify CI/release workflows only as required by the repository's actual build topology.

**Interfaces:**
- A release candidate is launchable only when every applicable P0/P1/P2 gate links to fresh evidence.

- [ ] Run clean-install, unit/integration, typecheck, lint and production-build verification.
- [ ] Run browser QA for public web and parent web surfaces.
- [ ] Run iOS and Android end-to-end smoke flows on release candidates.
- [ ] Run accessibility, privacy/security, publication-leak and recovery checks.
- [ ] Verify production deployment, monitoring and rollback procedure.
- [ ] Record exact commit/build/version/deployment evidence in `LAUNCH-EVIDENCE.md`.
- [ ] Only after the evidence gate passes, submit/publish through the relevant store/web release paths with explicit account-level confirmation where required.
- [ ] Tag/release the verified version and preserve release notes.

## Self-review

- **Spec coverage:** P0 product proof, P1 native/private beta, P2 public/store launch and P3 organic growth all map to explicit tasks.
- **Safety/rights:** private child media, parent publication approval, rights metadata, deletion/export and public/private trust separation are explicit gates rather than assumptions.
- **Architecture:** the plan migrates incrementally from the current visual slice; it does not mandate a disruptive monorepo rewrite before a boundary is earned.
- **Product focus:** speculative destinations/social/monetization remain outside the critical path until the founding loop passes.
- **Verification:** every gate ends in observable tests/device/browser/build evidence; environment limitations must be recorded rather than converted into success claims.
