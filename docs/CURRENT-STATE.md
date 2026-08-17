# Willow's World — Current State

Last reconciled: 2026-08-17

## Active gate

**P0 — Product-complete alpha**

## North star

**Record → Transform → Watch / Play → Share**

## Verified foundation now on `main`

- Versioned `StoryPerformance`, `ScenePlan`, `LearningEvent` and `PublicationApproval` contracts exist with zero-dependency tests.
- A publication-safe synthetic Episode 001 fixture proves the public adapter/domain path without exposing private child transcript/audio/source identifiers.
- The current public tree no longer contains the previously exposed real Episode 001 source filename/fingerprints.
- A shared deterministic timeline projects active word, active scene, duration, progress and end state from one performance + scene-plan revision pair.
- Story Woods now consumes that shared timeline rather than maintaining an independent page-specific cue sequence; local preview progress is invalidated when either canonical revision changes.
- Supabase private media infrastructure is live: the `willows-world-private` bucket is non-public, structured media rows use owner-scoped RLS, and Storage policies require both `storage.objects.owner_id` and the owner UUID path prefix to match the authenticated user.
- Supabase security advisors reported zero lints after the ownership hardening migration.
- GitHub CI passes on current `main` and the Git-backed Vercel production deployment is `READY`; recent runtime-error inspection found no errors.

## P0 gates that remain open

1. **Public Git history privacy (#50).** Current-tree remediation is complete, and all currently named branch refs have been advanced to the safe `main` head so stale feature branches no longer pin the known sensitive commits. Historical commits are still directly addressable in GitHub and therefore #50 is **not closed**. Final remediation needs a history rewrite/repository replacement or GitHub-side cached-object removal, followed by independent verification.
2. **Authenticated parent boundary (#54 → #11).** Database/Storage policy foundations are hardened, but the product still needs a real authenticated parent session and client upload path before private Episode 001 can be ingested. Never substitute a service-role credential or weakened RLS.
3. **Real parent-reviewed performance (#12).** Public contracts/fixtures are proof only. The real private transcript/word timing remains unapproved until checked against the private recording and explicitly parent-approved.
4. **Canonical visual reference (#52 → #13).** Descriptive continuity exists, but production likeness-dependent art requires an approved reference/direction first.
5. **Real one-performance output proof (#14).** Interactive Story Woods now uses the shared timeline foundation, but real voice synchronization and actual 1920×1080 / 1080×1920 renders remain pending.
6. **Real publication acceptance (#15).** The fail-closed rights/approval contract exists; no real Episode 001 export/publication is approved.
7. **Final deployment/device QA (#24).** Deployment infrastructure is healthy, but final visual/mobile/native acceptance remains later in the chain.

## Current execution order

`#50 → #54 → #11 → #12 → #52 → #13 → #14 → #15 → #24`

Safe preparatory work may advance a later gate only when it does not fabricate human approval, expose private child material, weaken security, or distract from the earliest unresolved dependency.

## Stop/continue rule

After every slice: verify with fresh evidence, record the result in GitHub, merge only bounded changes, confirm production/deployment health when relevant, then continue to the highest-value unresolved work that can be completed safely without a human-only decision.
