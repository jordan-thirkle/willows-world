# Willow's World — Durable Platform Architecture

## Purpose

Willow's World is a cross-platform creative learning world built around real parent/child recordings. This document applies the same By JTT engineering discipline used across serious products without merging Willow's World with the separate childhood-archive product.

The goal is longevity: the real recording, reviewed performance, story scene plan, learning state and publication approvals must outlive any one UI, AI provider, renderer or hosting vendor.

## Architecture rule

**Source performances are durable. Generated interpretations are replaceable.**

The original recording and parent-approved corrections are canonical source evidence. Transcripts, alignments, generated illustrations, animations, captions, thumbnails and platform renders are derived artefacts that can be regenerated or replaced.

## Target repository shape

```text
apps/
  mobile/          Expo + React Native + Expo Router (iOS/Android)
  web/             Next.js public/product web where server-rendered web adds value
  studio/          parent production/review surface if it becomes large enough
  renderer/        Remotion compositions and render entrypoints

packages/
  domain/          StoryPerformance, ScenePlan, LearningState, approvals
  media/           source/derivative media contracts
  player/          deterministic playback/timing engine
  progression/     learned words and world-state rules
  content/         story/source/rights metadata
  ai/              provider-neutral transcription/vision/art interfaces
  storage/         durable media-storage contracts
  database/        persistent structured state
  design-system/   canonical Willow's World visual language
  character/       Willow continuity/art references and validation metadata
  telemetry/       privacy-safe product quality signals

workers/
  ingest/           audio/media preparation
  transcription/    transcription + word timing
  artwork/          approved scene asset production
  rendering/        landscape/vertical render jobs
```

This is a target structure, not permission for a disruptive rewrite. Migrate only when a package boundary earns its existence.

## Canonical domain

### StoryPerformance

One recording becomes one reviewed performance. It owns or references:

- immutable source recording reference + content hash;
- source/story identity and rights metadata;
- transcript revisions;
- word-level timing/alignment revisions;
- parent approval state;
- scene-plan revision;
- derived asset manifests;
- learning/progression events;
- publication approvals and destinations.

The app, video renderer and captions consume the same approved performance revision.

### ScenePlan

A scene plan describes what the audience should see during a time range without coupling the plan to Remotion, React Native or a specific image generator. Scene assets reference canonical character/world continuity.

### LearningState

Learning state is explicit domain data, not component state. Completing/attempting a word produces events from which Word Garden/world progression can be reproduced.

### Rights metadata

Every story/content source carries explicit rights/provenance fields. Technical capability to render or publish never implies publication rights.

## Media lifecycle

Use a deterministic, resumable pipeline rather than a single request:

`imported → hashed → preserved → transcribed → reviewed → aligned → scene-planned → assets-approved → playable → rendered → parent-approved → publishable`

Each expensive step should be idempotent and versioned. A failed render must not require retranscribing the recording. Updating one illustration must not destroy the approved transcript.

## Storage model

Structured state belongs in a relational database. Large recordings, artwork and rendered media belong in object storage.

Source media and derivatives are separate namespaces. Source recordings are treated as immutable once ingested; edits create new revisions/derivatives.

Never use GitHub for private child recordings or secrets. The repository contains code, schemas, safe fixtures and documentation only.

## AI/provider boundaries

Use capabilities rather than provider-shaped domain objects:

- `TranscriptionProvider`
- `AlignmentProvider`
- `ScenePlanningProvider`
- `ArtworkProvider`
- `AnimationProvider`
- `ModerationProvider`

Persist provider/model/version metadata for reproducibility, but keep the canonical performance independent of them. We should be able to replace an AI provider without migrating Willow's learning history.

## Cross-platform strategy

### Mobile

Expo/React Native is the primary child/family application foundation for iOS and Android. Use native APIs/components when they materially improve media capture, audio playback, accessibility, performance or platform quality. Do not chase 100% UI sharing at the cost of native quality.

### Web

Web has two jobs: a high-quality family/product surface and a discoverable public publishing surface. Next.js is appropriate where routing, metadata, SEO, server rendering or account workflows matter. The current thin web experience remains useful as a fast visual proving ground while the native app converges.

### Renderer

Remotion is a deterministic output adapter, not the owner of episode state. It consumes the same performance and scene plan as the interactive player to create 16:9 and 9:16 outputs.

## Mobile-first design contract

The primary design viewport is a phone. Desktop expands the world; it does not define it.

Child-facing surfaces should prioritize direct manipulation, large touch targets, short reading distances, clear audio state and immersive illustration. Parent production/review controls may be denser but must remain usable on mobile.

## Public distribution architecture

Public Willow's World and private family state are separate trust zones.

A public episode is created only from an explicit parent-approved publication record. Public pages may contain approved video, artwork, episode metadata and original supporting copy. Private recordings, drafts, learning history and family data are not implicitly exposed by publishing an episode.

YouTube/short-form platforms are distribution destinations, not canonical storage. Canonical approved masters and metadata remain under the product's control.

## Privacy and child-safety baseline

- publishing off by default;
- parent approval before any public export/publish action;
- no child DMs or public social graph;
- no precise location exposure;
- no behavioural advertising aimed at children;
- no silent voice cloning;
- minimum necessary processing;
- explicit deletion/export pathways before broad family beta;
- private media never uses guessable public URLs.

## Observability and quality

Measure product quality without turning the child into an engagement metric. Useful signals include render failures, playback sync drift, crash/error rates, import success, accessibility failures, parent approval/rejection reasons and completion of the production loop.

Do not optimize for compulsive time-in-app, streak pressure or child engagement at any cost.

## Portability

Define versioned exportable records for performances, transcripts, timings, scene plans, learning events and publication metadata. The long-term test is whether a future Willow's World client can reconstruct the experience even if today's UI or AI vendors no longer exist.

## Migration strategy

1. Preserve the current working visual slice.
2. Establish canonical domain types and fixtures.
3. Move playback/timing out of page-specific state.
4. Introduce durable storage behind interfaces.
5. Connect the real Episode 001 media through a private path.
6. Make app + renderer consume one performance fixture/revision.
7. Persist learning/world events.
8. Converge the proven experience into Expo.
9. Add public publishing only through explicit approval records.

Avoid premature microservices and infrastructure theatre. Extract workers/services only for genuine asynchronous, security or scaling boundaries.

## By JTT longevity test

A technical decision is preferred when it improves at least one of:

- preservation of real source material;
- reproducibility of outputs;
- replaceability of vendors;
- cross-platform product quality;
- privacy/safety;
- contributor/agent comprehension;
- verification and rollback;
- the founding `Record → Transform → Watch / Play → Share` loop.

If it does none of these, it is probably architecture for architecture's sake.
