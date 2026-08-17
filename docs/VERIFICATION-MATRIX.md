# Willow's World — Verification Matrix

| Claim | Minimum credible evidence |
| --- | --- |
| Domain behavior works | focused automated tests + typecheck |
| Story Woods is synchronized | deterministic timing tests + real playback inspection |
| Progress survives restart | persistence integration test + runtime restart flow |
| Parent approval gates export | negative/positive automated tests + UI flow |
| Landscape/vertical share one source | render manifests + output inspection |
| Web UI is production quality | production build + browser QA at target viewports + accessibility checks |
| iOS app works | native iOS release/dev build runtime evidence on simulator/device as appropriate |
| Android app works | native Android release/dev build runtime evidence on emulator/device as appropriate |
| Private media is private | authorization/storage tests + attempted anonymous/cross-account access |
| Public projection is safe | leakage tests + HTML/API/client-payload inspection |
| SEO is configured | production-rendered metadata/canonical/sitemap/robots inspection and crawlability checks |
| Store ready | clean release build + current store requirement checklist + actual metadata/assets/declarations |
| Production ready | release candidate evidence + monitoring + rollback/recovery proof |

## Evidence freshness

Evidence should identify the relevant commit/build/revision. Old screenshots or a previously passing build do not prove a materially changed release candidate.

## Blocked checks

If a check cannot run because of an external environment/account/tool limitation, mark it blocked and state why. Use an alternative check when useful, but do not rename the alternative as the missing evidence.
