# Willow's World — Execution Mode

For implementation, prefer task-isolated execution with independent review between vertical slices. A fresh implementation context should receive the active spec/plan, inspect repository truth, implement one slice, then pass product/spec and engineering-quality review before merge.

When parallel work is used, only dispatch independent tasks that do not modify the same canonical state or depend on unfinished interfaces. The critical path remains serial where domain contracts feed player/review/renderer/persistence.
