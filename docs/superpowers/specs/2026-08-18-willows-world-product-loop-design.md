# Willow's World — Canonical Product Loop

## Goal
Ship Willow's World as a child-safe, parent-controlled learning and storytelling brand that turns a real child performance into multiple useful experiences without duplicating production work.

## Canonical loop
**Record → privately ingest → verify → transform → review → publish → play/watch/learn → preserve.**

One approved performance is the source asset. Derived outputs may include:

1. Story Woods interactive playback.
2. A focused phonics / Year 1-and-below learning activity when pedagogically appropriate.
3. A landscape episode suitable for YouTube.
4. A vertical short suitable for Shorts/social discovery.
5. A private preserved family memory with provenance.

The product must never require all five outputs for every recording. The parent approves what becomes public.

## Product surfaces

### Story Woods
The child-facing web experience. It prioritises story, play, voice, and age-appropriate learning. It must not expose private parent tooling or source media.

### Parent Studio
The private production surface. Authentication, ingestion, source review, story notes, transformations, publication approval, and archive status live here. Private source assets fail closed.

### Published media
Approved episodes and shorts are derivatives, never the source of truth. Publication metadata is separable from private source metadata.

### Native apps
Future Expo iOS/Android clients consume the same domain/API contracts rather than becoming a separate product implementation. Native capabilities are used for recording, media selection, notifications, offline/resumable work, and child-friendly playback.

## Learning boundary
Phonics and early-learning content must be intentional rather than automatically inferred from arbitrary recordings. Each learning activity records its learning objective, target age/stage, source performance, parent/editor approval, and content version. Avoid claims of formal curriculum compliance until mapped and reviewed against the relevant current curriculum.

## Media architecture
Original recordings are immutable private assets. Each original receives an integrity hash and owner-scoped storage path. Derived audio/video/images/transcripts are reproducible assets linked to the original. Large media uses a mature resumable-upload protocol rather than a custom chunking implementation.

## Privacy and safety
- No public bucket for originals.
- No guessable private-media URLs.
- No public child profile or social feed.
- No silent publication.
- No training general/public models on private family media.
- Parent approval gates public derivatives.
- Public pages contain only explicitly approved derivative assets and metadata.
- Private Studio routes are noindex/noarchive and fail closed.

## One-person-studio rule
For commodity problems use, in order: current official documentation; mature maintained platform/library; proven open-source implementation; thin adaptation; custom implementation only where Willow's World is genuinely differentiated.

Do not custom-build auth, cryptography, resumable upload protocols, media codecs, analytics primitives, SEO plumbing, or app-store build infrastructure without a documented reason.

## Definition of the first feature-complete vertical slice
A parent can authenticate, ingest one real Episode 001 recording privately, verify its integrity/persistence, attach truthful story context, create at least one child-facing Story Woods experience from it, review the result, and explicitly approve a public derivative. The child can then play/watch the approved result without any access path to the private original.

The same source must be capable of feeding a landscape episode and vertical-short render pipeline without re-uploading or manually duplicating the source. A learning derivative is included only when Episode 001 naturally supports a legitimate learning objective.

## Public-ready end state
Before calling the product public-ready: production web deployment and custom By JTT subdomain; privacy/terms/support surfaces; accessibility and performance checks; analytics with child/privacy constraints; SEO metadata/sitemap/structured content for public marketing pages; tested parent auth and recovery; tested private storage/RLS; deletion/export; backup/integrity strategy; publication moderation/approval; error monitoring; and a repeatable content-production workflow.

App Store / Play readiness additionally requires native Expo builds, store metadata/assets, privacy disclosures, age/category decisions, platform permission strings, account/deletion flows where required, device QA, and successful release-candidate builds. Web readiness does not imply store readiness.

## Success criterion
The first milestone is not 'more infrastructure'. It is: **one real Willow performance safely becomes something Willow can enjoy and learn from, something publishable people can discover, and something privately preserved — through one coherent production workflow.**
