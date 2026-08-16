# Episode production contract

This document defines the durable shape of a Willow's World episode before the full Expo/Remotion implementation lands.

## One performance, many surfaces

A single approved child reading performance is the source event. We do not separately author the app episode, YouTube video and vertical short.

The pipeline is:

`source recording → immutable media asset → transcript/timing → parent corrections → approved episode manifest → Story Woods playback → landscape render → vertical render`

## Source-media rule

Raw child recordings are **not committed to this public GitHub repository**. Git stores manifests, hashes, timing, derived non-sensitive metadata and code. Private source media belongs in private object storage with explicit access controls.

Until private object storage is provisioned, the existing Episode 001 recording remains an external development input and must not be copied into the public repository simply to unblock development.

## Episode manifest

Every episode should ultimately have a versioned manifest containing:

- stable episode ID
- display title
- source media asset ID (not a public URL)
- source checksum/hash
- duration
- transcript version
- word/phrase timing
- parent corrections and approval status
- scene cues
- learned-word events
- world-state rewards
- character/art pack version
- landscape render status
- vertical render status
- publication-rights status independent of technical readiness

## Provenance states

Content must distinguish:

- **Observed** — directly present in audio/media or deterministic metadata.
- **Known** — confirmed by the parent.
- **Generated** — AI-written/illustrated/animated production material.

AI must not silently convert an inference into a fact about the real child or reading moment.

## Approval gates

1. Source recording accepted.
2. Transcript/timing reviewed.
3. Parent corrections applied.
4. Artwork/scene treatment approved.
5. Interactive episode preview approved.
6. Landscape/vertical renders reviewed.
7. Publication rights/status reviewed separately.
8. Export/publish is an explicit parent action.

## Episode 001

The existing real reading of *Gruffalo, Where Are You?* is the development performance. A replacement recording is deliberately deferred until the pipeline is proven. Third-party text/publication rights remain a separate decision from technical production capability.

## Privacy trajectory

Before real recordings are uploaded into a public-facing product, implement private-by-default storage, least-privilege access, deletion/export, auditability, and a clear child-data retention policy. Public GitHub/Vercel preview code must never imply that raw child media is public.
