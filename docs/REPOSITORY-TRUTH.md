# Willow's World — Repository Truth Hierarchy

When project artifacts disagree, reconcile using this order:

1. current verified runtime/build/device behavior;
2. current code/configuration and automated tests;
3. approved durable decisions/specifications;
4. current-state/evidence documents;
5. implementation plans/roadmaps;
6. old issues, chat transcripts and historical notes.

Higher layers do not erase important historical intent; they determine what can currently be claimed as true. If runtime/code reveal a stale specification, pause the affected change long enough to reconcile the design rather than silently implementing against contradictory truth.
