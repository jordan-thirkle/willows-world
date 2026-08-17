# Willow's World — Evidence and Uncertainty Contract

Agents working on Willow's World must distinguish:

- **repository evidence** — code/config/docs/commits/tests actually inspected;
- **runtime evidence** — builds, browser/device behavior, rendered outputs and production observations actually run/seen;
- **external evidence** — current primary-source platform/vendor documentation actually checked;
- **inference** — a reasoned conclusion that has not yet been directly verified.

Do not convert inference into project fact. Do not report a feature as present because the architecture says it should exist. Do not report a platform requirement as current without checking it when the decision depends on freshness.

When evidence conflicts, prefer direct current runtime/repository evidence and update stale project documentation.
