# Willow's World — Architecture Decision Rules

Prefer a technical decision when it measurably improves one or more of:

- source preservation;
- reproducibility/versioning;
- privacy/safety;
- rights/provenance enforcement;
- cross-platform product quality;
- provider/vendor replaceability;
- failure recovery;
- verification/testability;
- contributor/agent comprehension;
- the current release gate.

Be suspicious when a proposal mainly adds layers, services, abstractions or dependencies without a proven caller or release-gating problem.

## Provider choice

Choose concrete database/storage/AI/hosting providers at the latest responsible point after required interfaces/access patterns are evidenced. Record provider metadata for reproducibility, but do not shape canonical domain truth around one vendor's response objects.

## Shared code

Share domain rules and deterministic behavior. Do not force every visual/native implementation through one abstraction when platform-native behavior materially improves quality.
