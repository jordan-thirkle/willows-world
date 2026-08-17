# Willow's World — Pull Request Checklist

Use the relevant items; do not tick checks that were not run.

## Scope
- [ ] Change advances the earliest incomplete gate or removes a material gate risk.
- [ ] No unrelated feature/refactor scope was added.
- [ ] Working user behavior was preserved unless intentionally changed.

## Product/data
- [ ] Canonical source/approved data remains distinct from generated derivatives.
- [ ] No private child media, secrets or production credentials entered GitHub.
- [ ] Rights/publication implications were reviewed when content/output changed.

## Verification
- [ ] Focused tests pass.
- [ ] Relevant typecheck/lint/build passes.
- [ ] Runtime/visual/native evidence exists where applicable.
- [ ] Failure/restart/stale-revision behavior was tested when affected.
- [ ] Any blocked check is explicitly recorded rather than implied to pass.

## Review
- [ ] Product critic considered.
- [ ] Privacy/rights critic considered.
- [ ] Engineering/reliability critic considered.
- [ ] Platform-specific critic considered for web/iOS/Android/rendering changes.

## Handoff
- [ ] PR explains user-visible/system impact and evidence.
- [ ] Current-state/readiness docs changed only if verified status changed.
- [ ] Next action/blocker is clear.
