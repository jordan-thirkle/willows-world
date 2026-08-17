# Willow's World — P1 Acceptance Contract

P1 proves the P0 experience is a real private family application on iOS and Android.

## Scenario

Given an authorized parent with private Willow's World data,
when the parent/child uses the iOS or Android application,
then the proven Story Woods loop works with native media lifecycle behavior,
private state persists durably across sessions/devices as designed,
unauthorized access is rejected,
and the parent can export/delete their private data through documented pathways.

## Required evidence

- iOS runtime smoke flow on a release-relevant build;
- Android runtime smoke flow on a release-relevant build;
- permission/media lifecycle and interruption/recovery checks;
- persistence and authorization integration tests;
- export/deletion tests;
- accessibility checks;
- privacy-safe crash/error observability;
- reproducible clean build/test process.

A responsive web build or Expo project existing in source control is insufficient by itself.
