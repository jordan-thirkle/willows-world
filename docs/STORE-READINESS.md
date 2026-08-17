# Willow's World — iOS and Android Store Readiness

Store submission is a release gate, not a final administrative afterthought.

## Product/runtime prerequisites

Before preparing final store claims/assets, verify the release candidate itself:

- P0 loop works in the native client;
- private data authorization/storage boundaries work;
- parent approval/publication behavior matches the product promise;
- export/deletion/support paths are reachable;
- permissions are minimal and explained;
- crashes/errors and recovery are tested;
- no private development media, secrets or test endpoints ship.

## Store metadata source of truth

Keep version-controlled source copy for app name/subtitle/short description/long description, support/privacy URLs, category/age-content answers, release notes and screenshot plan. Final declarations must be checked against the actual release candidate and current platform forms at submission time.

## iOS evidence gate

Require a reproducible signed/release build, installation/runtime smoke test, permission review, privacy/data-use review, accessibility pass, screenshots from the actual current UI, support/privacy URLs and a recorded submission checklist.

## Android evidence gate

Require a reproducible release bundle/build, installation/runtime smoke test, permission review, Data Safety declarations derived from implemented behavior, accessibility pass, screenshots from the actual current UI, support/privacy URLs and a recorded submission checklist.

## Human/account actions

Certificates, agreements, developer-account declarations, final store submission and other account-owner actions may require a human or explicit confirmation. Treat these as bounded release steps, not reasons to leave the technical product unprepared.

## Accuracy rule

Platform requirements and forms change. At submission time, verify current Apple/Google requirements from primary sources rather than relying on this repository document as timeless policy.
