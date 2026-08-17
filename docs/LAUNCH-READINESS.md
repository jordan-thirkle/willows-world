# Willow's World — Launch Readiness Matrix

This file is a status instrument, not a marketing checklist. A box is checked only when evidence exists in the repository/release system.

## P0 Product Proof

| Capability | Status | Required evidence |
| --- | --- | --- |
| Real recording ingest | Not yet evidenced | private ingest test + source hash |
| Reviewable transcript/timing | Not yet evidenced | test + parent review flow |
| Canonical scene plan/assets | Partial/design exists | revisioned fixture + visual evidence |
| Synchronized Story Woods | Partial/prototype | deterministic tests + playback evidence |
| Persistent progression | Not yet evidenced | restart/replay test |
| Landscape render | Not yet evidenced | rendered master + manifest |
| Vertical render | Not yet evidenced | rendered master + manifest |
| Parent approval gate | Not yet evidenced | rejection/approval tests + UI evidence |
| Web production preview | Existing deployment indicated | verify current production runtime |
| Mobile/accessibility verification | Not yet evidenced | device/browser/a11y evidence |

## P1 Native/Private Beta

Current status: **not started as a release gate**. Architecture direction exists, but architecture documentation is not runtime evidence.

Required before completion: installable iOS/Android builds, durable private persistence, authorization, export/delete, recovery/offline QA, observability and reproducible builds.

## P2 Public/Store Launch

Current status: **not ready**.

Known blockers/gates include publication-rights-safe launch content, public/private projection, legal/support/privacy surfaces, store declarations/assets, verified release candidates, monitoring and rollback.

## P3 Organic Growth

Current status: **design/preparation only**.

Required before completion: production public landing/content architecture, technical SEO verification, Search Console/analytics, approved video/short-form distribution and a measured By JTT launch system.

## Rule

Never convert `Partial`, `design exists`, `prototype`, or `not yet evidenced` into `complete` without fresh verification. If a required environment is unavailable, record the limitation and alternative evidence; do not silently waive the gate.
