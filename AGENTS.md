# Willow's World agent instructions

## Identity gate — read before every change

This repository is **Willow's World**, the reading-to-media-and-interactive-world product.

North star: **Record → Transform → Watch / Play → Share**.

The founding input is a real child reading performance. AI assists production into a consistent illustrated read-along, interactive Story Woods experience, and 16:9 / 9:16 media outputs. The real voice remains the hero.

Canonical Willow continuity: **brown hair, blue eyes, purple glasses**.

Before planning or writing, read `README.md`, `docs/PRODUCT.md`, the active GitHub issue, and **`docs/HANDBOOK.md` whenever the task affects product direction, architecture, art/character continuity, delivery workflow, roadmap, publishing, or contributor handoff**. Read **`docs/PLATFORM-ARCHITECTURE.md` for changes involving domain data, persistence, media, AI providers, Expo/native, web, rendering, public publishing, privacy, or cross-platform boundaries**. If requested work conflicts with those sources, reconcile the conflict before implementation.

## Project-boundary check

Classify every proposed feature against the north star before adding it. Work belongs here when it directly improves the reading/learning/creative world, the transformation pipeline, Story Woods, shared episode outputs, parent-controlled production, or the later Willow's World destinations explicitly defined by this repository.

Concepts from other projects must arrive through an explicit product decision recorded in this repository before implementation. Similar subject matter, family context, names, or prior conversations are not sufficient evidence that a feature belongs here.

## Durable-data rule

**Source performances are durable; generated interpretations are replaceable.** Preserve original recordings and parent-approved corrections as canonical source material. Treat transcripts, timings, generated art, animation, captions and renders as versioned derivatives. Keep product/domain data independent of a particular UI, AI provider, storage vendor or renderer.

Private child recordings and secrets never belong in Git. Publishing is parent-controlled and off by default; a public episode must derive from an explicit approved publication record rather than exposing private family state.

## Current focus

Until GitHub Issue #1 is complete, prioritize only work that materially advances Episode 001 and **Record → Transform → Watch / Play → Share**. Keep unrelated expansion deferred.

## Blockers

When blocked: **detect → reproduce → investigate root cause → identify alternatives → implement the durable fix → verify → document → continue the original goal**.

Do not repeatedly retry the same failing path without new evidence. GitHub is canonical; preserve meaningful decisions and fixes in issues, commits, PRs, or durable repository docs.
