# Willow's World agent instructions

## Identity gate — read before every change

This repository is **Willow's World**, the reading-to-media-and-interactive-world product.

North star: **Record → Transform → Watch / Play / Learn → Share → Remember**.

The founding input is a real child reading performance. AI assists production into a consistent illustrated read-along, interactive Story Woods experience, age-appropriate early-learning derivatives, and 16:9 / 9:16 media outputs. The real voice remains the hero.

Canonical Willow continuity: **brown hair, blue eyes, purple glasses**.

## Fast orientation

For every meaningful task, read in this order:
1. `docs/NOW.md` — the single active objective and current verified state;
2. this file;
3. only the product/architecture doc relevant to the task;
4. the active issue/PR if one exists.

Read `docs/OPERATING-SYSTEM.md` for ChatGPT/Codex/GitHub responsibilities, branch/PR rules, research-first workflow, human-interruption policy and session handoffs.

Read `docs/HANDBOOK.md` when work affects product direction, art/character continuity, delivery workflow, roadmap, publishing or contributor handoff. Read `docs/PLATFORM-ARCHITECTURE.md` for domain data, persistence, media, AI providers, Expo/native, web, rendering, public publishing, privacy or cross-platform boundaries.

Do **not** reread the whole repository or rely on giant chat transcripts when the current objective can be recovered from these durable sources.

## Project-boundary check

Classify every proposed feature against the north star before adding it. Work belongs here when it directly improves the reading/learning/creative world, the transformation pipeline, Story Woods, shared episode outputs, parent-controlled production, or later Willow's World destinations explicitly defined by this repository.

Concepts from other projects require an explicit product decision recorded here before implementation. Similar family subject matter is not enough.

## Best-solved-system-first

Before custom-building a commodity subsystem, check current official docs, mature maintained libraries/services and proven open-source implementations. Prefer thin adaptation over reinvention. Record a reason when custom implementation wins.

Custom effort belongs primarily in Willow's World differentiation: performance-to-world transformation, child experience, learning design, art continuity and the one-performance-many-outputs engine.

## Durable-data rule

**Source performances are durable; generated interpretations are replaceable.** Preserve original recordings and parent-approved corrections as canonical source material. Treat transcripts, timings, generated art, animation, captions and renders as versioned derivatives. Keep product/domain data independent of a particular UI, AI provider, storage vendor or renderer.

Private child recordings and secrets never belong in Git. Publishing is parent-controlled and off by default; a public episode must derive from an explicit approved publication record rather than exposing private family state.

## Current focus

`docs/NOW.md` owns the one Active Objective. Work outside NOW/NEXT is deferred unless it is a production outage, privacy/security risk, data-loss risk or genuine human-only blocker.

Default effort ratio: **80% product vertical slice / 15% required reliability & safety / 5% process/docs**.

If two consecutive sessions improve infrastructure without making the real Episode 001 experience materially more real, stop and re-prioritise.

## Branch / merge discipline

Default to a fresh branch from latest `main`, one bounded objective, PR back to `main`, exact-head verification, then squash merge.

Stacked PRs are exceptional. **A merge into an intermediate branch is not shipped.** Do not report work as landed until the intended content is verified on `main` (and production when relevant).

Use Codex worktrees for independent parallel repository tasks rather than having multiple agents edit the same files or solve the same blocker.

## Blockers

When blocked: **detect → reproduce → investigate root cause → search solved alternatives → implement the durable fix → verify → continue the original goal**.

Do not repeatedly retry the same failing path without new evidence. Do not turn a temporary tool failure into a product compromise.

## Completion rule

Before declaring success: verify the actual result, confirm it landed on the intended branch/main, clean up stale PRs/issues, update `docs/NOW.md` when state changed, and report what is real, what is not, and the next highest-value action.

GitHub is canonical. Chats are working sessions, not the only home of durable project truth.