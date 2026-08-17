# Willow's World — Operating Cadence

The project uses evidence-driven checkpoints rather than meetings for their own sake.

## Per vertical slice
1. select highest-value current-gate slice;
2. define acceptance/failure cases;
3. implement test-first where appropriate;
4. verify on relevant platform;
5. run critic review;
6. fix valid findings;
7. PR/merge when evidence is sufficient;
8. update current state/next action;
9. continue.

## Per release candidate
Run the complete applicable verification matrix and create a release evidence record tied to exact commit/build/version.

## Periodic roadmap review
Reprioritize only when new user evidence, technical evidence, safety/rights constraints or launch requirements materially change the critical path. Avoid roadmap churn driven by novelty.
