# Willow's World — Branch and PR Policy

Meaningful work uses a named branch and pull request before reaching `main`.

## Branches
Use short purpose-driven names such as `feat/story-performance-domain`, `fix/playback-seek-sync` or `docs/launch-operating-model`.

## Pull requests
A PR should represent one independently reviewable vertical slice or one coherent project-governance change. Include current release gate, why it is priority, evidence, privacy/rights impact and remaining blockers.

## Merge
Merge only after the slice's applicable evidence/review passes. Prefer a clean history that makes outcome-oriented changes easy to locate/revert. Do not bundle unrelated speculative work to make a PR appear substantial.

## Main
Treat `main` as durable project truth suitable for deployment/release workflows, not a scratch branch.
