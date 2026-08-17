# Willow's World — Continuity Contract

Chat history is helpful context, but it is not the project's durable memory.

A new session should be able to recover the project from GitHub by reading the documentation map, current state, next slice, active plan, recent commits/PRs/issues and verification evidence.

## Before stopping a work session

- push/commit meaningful work or explicitly record why it cannot be persisted;
- ensure the current branch/PR describes the actual scope;
- update `CURRENT-STATE.md` only when verified facts changed;
- update `NEXT.md` when the next highest-value slice changed;
- record blockers with root cause/alternatives/next action;
- never leave private media as a temporary local artifact that only one chat/session knows about.

## On resumption

Inspect repository/runtime state before trusting prose. If documentation conflicts with current code, deployment or test evidence, reconcile it rather than perpetuating stale state.
