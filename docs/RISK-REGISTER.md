# Willow's World — Risk Register

| Risk | Impact | Current mitigation / gate |
| --- | --- | --- |
| Private child media accidentally enters public GitHub/public URLs | Critical | repository policy; private storage boundary; publication projection tests |
| Third-party story material is technically rendered then treated as publishable | High | explicit rights metadata; rights-safe P2 launch gate |
| Prototype web UI is mistaken for native iOS/Android readiness | High | P1 native evidence gate and verification matrix |
| Multiple outputs drift into separate episode definitions | High | canonical StoryPerformance/ScenePlan consumed by player + renderer |
| AI/provider output becomes canonical truth | High | source/parent-approved revisions canonical; providers replaceable |
| Failed processing destroys/requires redoing source work | High | immutable source + versioned/idempotent derived pipeline |
| Scope expands into generic children's activity app before core works | High | earliest-gate priority; P0 feature freeze on speculative destinations |
| SEO/marketing pressures expose private family details | High | public/private projection; growth policy; approved public-safe content only |
| Store declarations become stale/inaccurate | Medium/High | derive declarations from verified release candidate and current platform requirements |
| Agent claims completion without running platform evidence | High | status definitions, verification matrix and launch evidence gate |
| Vendor/tool limitation stalls original goal indefinitely | Medium | blocker lifecycle requires alternatives and resumption of original goal |
| Architecture work consumes implementation capacity | Medium | vertical-slice rule and meta-work budget |

Update this register when evidence materially changes probability/impact or a new release-gating risk is discovered.
