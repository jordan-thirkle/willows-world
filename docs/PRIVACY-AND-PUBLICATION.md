# Willow's World — Privacy and Publication Contract

## Core rule

Private family material does not become public because it exists, because an AI processed it, or because a renderer can export it.

Publication is a deliberate state transition requiring explicit parent approval and publication-rights eligibility.

## Private canonical data

Examples include source recordings, unapproved transcript revisions, detailed learning history, private family metadata, internal review notes and unpublished generated assets.

These records live in authenticated/private systems and are never embedded in the public repository or exposed through guessable public URLs.

## Public projection

A public item is a sanitized projection created from an explicitly approved immutable revision. It contains only fields/assets required for that destination. The projection must not expose private source-media locations, unrelated learning history or internal production data.

## Approval semantics

Approval references exact revisions. Editing a transcript, timing, scene plan, artwork/render or other publication-relevant input after approval creates a new state requiring appropriate re-review. Approval for one destination does not automatically grant every destination when rights/privacy expectations differ.

## Rights semantics

Each content source carries rights/provenance state. `technically renderable` is not equivalent to `publishable`. Public projection requires both valid approval and an eligible rights state.

## AI semantics

Generated art, transcript suggestions, alignment, cleanup and scene plans are derived artifacts. Preserve provider/model/version metadata where useful for reproducibility, but do not let provider objects become the canonical family record.

## Safety verification

Before public beta/launch, automated tests should attempt to access unpublished projections, stale approvals, cross-account media and private source references. Browser/API inspection should verify public pages do not accidentally serialize private fields into HTML, JSON payloads or client bundles.
