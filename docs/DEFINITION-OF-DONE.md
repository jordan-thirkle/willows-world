# Willow's World — Definition of Done

## A vertical slice is done when

1. its intended user/system behavior exists;
2. focused automated tests pass where appropriate;
3. typecheck/lint/build checks affected by the change pass;
4. platform-appropriate runtime/visual evidence exists when behavior is experiential;
5. privacy/rights/publication implications were considered;
6. documentation/evidence is updated only with verified facts;
7. the change is committed on a meaningful branch and ready for independent review/PR.

## A release gate is done when

Every required capability in that gate is `verified` under `STATUS-DEFINITIONS.md`, unresolved blockers are zero or explicitly non-gating, and the relevant release evidence is tied to the candidate commit/build.

## Not done

A task is not done merely because an agent wrote code, generated an asset, created a document, produced a screenshot from an unrelated build, or reached a tool/time limit.

When a required check cannot run, the task may be `implemented` or `blocked`; it is not silently promoted to `verified`.
