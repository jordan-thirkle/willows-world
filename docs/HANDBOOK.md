# Willow's World — Product & Delivery Handbook

This is the durable orientation document for humans and agents joining the project. `AGENTS.md` contains the short always-on execution rules; this handbook explains the decisions behind them.

## 1. Why this exists

Willow's World began with a real family ritual: a parent reads with his five-year-old daughter, teaches her to read the books herself, records her reading, and wants AI production tools to turn those ordinary recordings into exceptional keepsakes and experiences.

The product thesis is that the same workflow can become useful to other families: preserve a child's real voice and progress, transform it into beautiful consistent media, and give the child an evolving world in which reading, learning and creating have visible consequences.

This is not the separate AI-curated childhood-photo/archive product. That product solves camera-roll organisation and memory preservation. Similar family subject matter does not merge the two products.

## 2. North Star

**Record → Transform → Watch / Play → Share**

A normal parent/child recording should be capable of becoming:

- an interactive illustrated read-along in Story Woods;
- a polished landscape episode for YouTube/TV;
- a polished vertical episode for Shorts/TikTok/Reels;
- learning/progression state that changes Willow's World.

All outputs derive from one reviewed performance, one timing model and one canonical art direction rather than being rebuilt separately.

### The magic test

A successful experience should make a parent think: **I recorded that ordinary moment on my phone, and it became this.**

If infrastructure or secondary features are improving while that transformation remains unimpressive, priorities are wrong.

## 3. Product principles

### Real voice is the hero
Keep the child's actual performance: personality, pauses, progress and imperfections. Audio cleanup may improve intelligibility. A synthetic clone must not silently replace the performance.

### Parent + child before platform
The first user is the family making and enjoying the experience. Public growth, monetisation and creator tooling follow proof that the family experience is genuinely valuable.

### One performance, many surfaces
The approved performance is the shared source for app playback and media renders. Timing, captions, scenes and continuity should not fork by platform without a real platform constraint.

### A world, not a dashboard
The child enters an illustrated place. Story Woods is the first destination. Word Garden, Maker Meadow and Discovery Hill can grow later from the same world. Parent production controls may be utilitarian, but the child's surface should feel authored, tactile and magical.

### Progress changes the world
Learning should have visible consequences: words learned, places changing, objects appearing, collections growing and stories becoming part of the world.

### AI stays backstage
AI can clean audio, transcribe, align timing, assist scene planning, create/animate approved visual assets and adapt compositions. The product should foreground the child's creation and experience rather than advertise AI machinery.

### Parent-controlled publishing
Preview and approval precede export/publication. Public distribution and content rights are explicit production concerns rather than assumptions hidden in the pipeline.

## 4. Canonical Willow continuity

For the Willow character used in this project:

- brown hair
- blue eyes
- purple glasses

The current CSS representation is temporary. Production character art needs a canonical character sheet and continuity references before scaling scene generation. Future scenes must derive from those references rather than independently reinventing the character.

## 5. Art direction

Aim for a timeless, warm, tactile illustrated-storybook world with enough personality to become recognisable as Willow's World.

Avoid generic AI-product aesthetics. The child-facing product should not look like a SaaS dashboard, neon game portal, glassmorphism demo, stock educational app or collection of disconnected generated images.

Consistency matters more than novelty: character proportions, palette logic, materials, typography, environments, camera language and animation should feel as though one studio made them.

## 6. Episode 001

The existing real recording of Willow reading *Gruffalo, Where Are You?* is the current development performance. It lets us prove the production machine before asking Willow to record new material.

It is a development/prototype input. Rights/publication questions must be handled explicitly before a public commercial release; the repository should not pretend third-party story text is original Willow's World IP.

Episode 001 is complete only when the same reviewed performance can drive:

1. real voice playback;
2. reviewed timed transcript/word alignment;
3. consistent illustrated scenes;
4. interactive Story Woods playback;
5. visible learning/world progression;
6. a coherent 16:9 render;
7. a coherent 9:16 render;
8. parent preview/approval/export.

## 7. Technical direction

### Canonical source
GitHub repository: `jordan-thirkle/willows-world`.

### Web previews
Vercel project: `willows-world-app`, connected to this repository. PR/feature work should produce reviewable preview deployments; approved `main` is the production source.

### Cross-platform application
Expo + React Native + Expo Router is the intended shared application foundation for iOS, Android and web. Native escape hatches are allowed when platform quality requires them.

### Media rendering
Remotion is the deterministic composition/rendering layer for landscape and vertical episode outputs. Shared performance/timing data should feed both the app and renderer.

### Architecture principle
Keep the domain model portable. Product data — performance, transcript timing, scenes, learned words, progression and approval state — should not be trapped inside a single UI framework or renderer.

## 8. Delivery workflow — By JTT

For meaningful work:

**intent/issue → branch → implementation → verification → PR → Vercel preview → review → merge → production**

GitHub is canonical. Temporary files, local copies and chat attachments are working material, not the authoritative project state.

### Blocker protocol

**detect → reproduce → investigate root cause → identify alternatives → implement durable fix → verify → document → resume the original goal**

Do not turn a temporary tool failure into a product compromise. Do not repeatedly retry a failed path without new evidence. Involve the product owner only when the blocker genuinely requires human authorization, credentials, account action or a product/family decision.

### Drift protocol

Before meaningful work, identify which North-Star step it improves. If work appears to belong to another project or introduces a new product direction, reconcile it in an issue/spec before implementation.

## 9. Current state — 16 August 2026

Completed foundation:

- clean GitHub repository established as source of truth;
- project-boundary and agent instructions merged;
- clean Vercel `willows-world-app` project connected to GitHub;
- Git-backed deployment loop proven with HTTP 200;
- Episode 001 product target established;
- first Story Woods visual vertical slice implemented in PR #4;
- zero-build preview path established so Expo/npm cannot block visual iteration.

Current limitations:

- preview artwork is placeholder-level, not production character/world art;
- real Episode 001 audio is not yet persisted in the public repository or connected to the deployed experience;
- transcript/word timestamps are not yet implemented in the canonical repo;
- Story Woods progression is currently demonstrative rather than persisted domain state;
- 16:9 and 9:16 renders are not yet generated from the shared performance;
- full Expo native application has not yet converged with the thin web preview.

## 10. Immediate roadmap

P0 order:

1. stabilise Preview-vs-Production deployment behaviour;
2. establish canonical character/art bible and production Willow artwork;
3. connect the real Episode 001 recording through an appropriate private/media path;
4. produce and review timed transcript/alignment;
5. drive Story Woods words/scenes from the performance timeline;
6. persist learned words/world changes;
7. produce shared 16:9 and 9:16 compositions;
8. converge the proven experience into the Expo application;
9. verify mobile web + iOS + Android behaviour;
10. parent approval/export flow.

Expansion such as additional destinations, accounts, subscriptions, social systems and broader game mechanics stays behind proof of this loop.

## 11. By JTT product standard

Products should originate in a real problem or lived use case, solve it for real rather than merely demo it, remain understandable to a new contributor, use durable professional engineering practices, and visibly improve through evidence-driven iteration.

For Willow's World specifically, success is not measured by the number of AI tools, screens or features. It is measured by whether real family moments become something worth keeping, replaying and sharing — without losing the child's voice in the machinery.

## 12. Case-study trail

Preserve meaningful decisions, failures, corrections and evidence in GitHub issues/PRs/docs. The eventual By JTT case study should be reconstructed from this record rather than written as retrospective marketing fiction.

The case study should explain: the lived problem, original insight, product evolution, why the architecture was chosen, what failed, how blockers were solved, how AI/humans collaborated, evidence from real use, and what changed between prototype and product.
