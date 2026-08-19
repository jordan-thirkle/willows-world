# By JTT One-Person Studio Operating System

This file defines how ChatGPT, Codex, GitHub and connected product tools should cooperate on Willow's World.

## Goal

Maximise shipped product quality and learning per unit of Jordan's attention. Minimise duplicated reasoning, chat drift, stacked-branch confusion, speculative infrastructure, and human hand-holding.

## Source-of-truth hierarchy

1. **GitHub `main`** — canonical shipped/project state.
2. **`docs/NOW.md`** — one current objective, latest verified state, next actions.
3. **`AGENTS.md` + product/architecture docs** — durable rules and decisions.
4. GitHub issues/PRs — bounded execution history and evidence.
5. ChatGPT/Codex chats — working sessions only. Chats must not be the only place a durable decision exists.

If chat memory conflicts with `main`, `main` wins unless the conflict is intentionally reconciled and committed.

## Product roles

### ChatGPT = Founder / Product Director / Research Orchestrator
Use ChatGPT for:
- product direction and prioritisation;
- current research and already-solved-system evaluation;
- architecture choices and trade-offs;
- cross-project boundary control;
- launch/growth/SEO/content strategy;
- deciding what Codex should execute next;
- runtime/account actions through connected tools when they are the shortest safe path.

ChatGPT should avoid spending long sequences hand-editing repository code through connector calls when Codex can work directly against the repository, run commands, test, inspect rendered output and manage a worktree.

### Codex = Principal Engineer / Execution Team
Use Codex for:
- repository edits and refactors;
- running the application;
- tests, lint, typecheck and builds;
- browser/device/runtime debugging;
- isolated worktrees and parallel independent tasks;
- PR preparation and code review fixes;
- implementation plans that require repository-wide context.

A Codex task must start with an **execution packet** (below), not a giant transcript dump.

### GitHub = Canonical ledger
GitHub records:
- code;
- current docs;
- bounded issues;
- decisions with durable consequences;
- PR evidence;
- releases.

Do not create an issue for every observation. Create one when there is a user-visible milestone, external blocker, security/release obligation, or independently schedulable unit of work.

### Vercel / Supabase / other platforms = Runtime truth
Use the platform's own tools to inspect and change live state when available. Do not infer live configuration from repository files alone.

## One active product objective

At any time `docs/NOW.md` contains exactly **one Active Objective**.

Everything is classified as:
- **NOW** — directly advances the active objective;
- **NEXT** — blocked on NOW or immediately follows it;
- **LATER** — useful but not allowed to interrupt NOW;
- **DROP** — no longer worth doing.

A task may bypass the queue only for a production outage, privacy/security risk, data-loss risk, or a genuine human-only blocker.

## Founder-speed ratio

Default effort allocation:
- **80%** user-visible/product vertical slice;
- **15%** reliability, privacy, tests and maintainability required by that slice;
- **5%** documentation/process.

If two consecutive work sessions improve infrastructure without making the core product experience materially more real, stop and re-prioritise.

## Best-solved-system-first gate

Before custom implementation of a non-differentiating subsystem:
1. check current official docs;
2. check mature maintained libraries/services;
3. check proven open-source implementations;
4. adapt the strongest fit;
5. custom-build only when the differentiated product requires it or integration cost is genuinely lower.

Evaluate: quality, maintenance, licensing, ecosystem, mobile/web fit, AI-agent friendliness, CI/testing, cost, security/privacy, migration path and lock-in.

Commodity examples: auth, uploads, codecs, rendering primitives, analytics, payments, SEO plumbing, app-store builds, crash reporting, image optimisation, queues.

Differentiated Willow's World work: performance-to-world transformation, story/learning experience, art direction/continuity, child interaction, editorial quality and the one-performance-many-outputs engine.

## Branch and PR rules

### Default
- branch from the **latest `main`**;
- one bounded objective per branch;
- PR targets **`main`**;
- squash merge after verification;
- delete/close stale superseded branches/PRs.

### Stacked PRs
Stacked PRs are exceptional. Use only when there is a clear dependency and explicitly label the stack.

**Never report a stacked PR as shipped because it merged into an intermediate branch.** A feature is shipped only when its commits/content are verified on `main` (and production when applicable).

Before merge, check:
- target branch is intended;
- exact head SHA has green required checks;
- diff contains only intended scope;
- current `main` relationship is understood;
- production impact is known.

## Parallelism

Parallelise only independent work. Codex worktrees are preferred for repository parallelism.

Good parallel work:
- renderer research while another agent fixes an unrelated mobile UI bug;
- SEO copy while an independent test suite runs;
- asset pipeline investigation separate from auth.

Bad parallel work:
- multiple agents editing the same core files;
- two agents solving the same blocker;
- parallel architecture decisions with no single decision owner.

One agent/ChatGPT thread remains **Commander** and owns integration order.

## Execution packet — ChatGPT → Codex

Every substantial Codex task should contain:

**Objective** — one sentence, user-visible outcome.

**Why now** — link to Active Objective.

**Acceptance** — observable pass/fail conditions.

**Constraints** — privacy, rights, product boundaries, stack rules.

**Solved systems to evaluate first** — official docs/libraries/repos relevant to the task.

**Likely files/surfaces** — orientation, not a mandate.

**Verification** — exact commands/runtime checks/device/browser checks expected.

**Merge rule** — PR target, whether autonomous merge is allowed, blockers requiring Jordan.

**Non-goals** — what must not expand into this task.

Codex returns: changes, evidence, unresolved risks, and the exact next best action.

## Session start protocol

Do not reread the whole project or entire chat history.

Read, in order:
1. `docs/NOW.md`;
2. `AGENTS.md`;
3. only the product/architecture doc relevant to the task;
4. current open PR / active issue;
5. live platform state only if the task depends on it.

Then execute.

## Session end protocol

Before saying work is complete:
1. verify the actual result;
2. ensure the intended work is on the intended branch/main;
3. update `docs/NOW.md` only when verified state or priority changed;
4. close/supersede stale PRs/issues;
5. report **what is now real**, **what is not**, and **the next highest-value action**.

Avoid long narrative status reports when a compact evidence-backed checkpoint is enough.

## Blocker protocol

**detect → reproduce → root cause → search solved alternatives → choose durable fix → implement → verify → resume original goal**.

A blocker is not a new project. Time-box investigation. If the ideal route is unavailable, choose the best safe alternative that preserves the product objective.

## Human-interruption policy

Jordan should be interrupted only for:
- irreversible/destructive actions not already authorised;
- legal/rights/publication decisions;
- private/family judgement that AI cannot make;
- account actions unavailable to connected tools;
- spending or plan changes above an already agreed threshold;
- genuinely ambiguous product decisions with materially different outcomes.

Do not ask Jordan to copy values, click dashboards or repeat tests when the connected tools can do it.

## Definition of progress

Progress is not tokens, commits, issues, agents or hours.

For Willow's World, progress is measured by movement toward:
**one real performance → transformed beautifully → played/learned from → rendered for media → parent-approved → safely preserved/published.**

Every week/session should make that loop more real, faster, safer or noticeably better.