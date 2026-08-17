# Willow's World — Implementation Dependency Order

The architecture should emerge from proven callers in this order:

`domain contracts → deterministic player/progression → review/approval → renderer → durable persistence → Expo client → identity/export/delete → public projection/web → store release → growth`

## Why

- Domain contracts establish what must survive every UI/provider.
- Player/progression proves the core experience before infrastructure expands.
- Review/approval establishes parent authority before public/export paths.
- Renderer proves one-performance/many-output against the same records.
- Persistence is then designed around actual domain access patterns.
- Expo reuses proven logic rather than becoming a parallel rewrite.
- Identity/data controls arrive when remote private state requires them.
- Public projection is built only after private canonical state/approval are trustworthy.
- Store/growth work amplifies a verified product.

Breaking this order requires a documented material blocker or safety need, not impatience.
