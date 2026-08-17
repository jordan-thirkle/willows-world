# Willow's World — Production Guardrails

Before P2 launch, production architecture must enforce rather than merely document these rules:

- private source media is non-public and access controlled;
- secrets live in deployment secret stores/environment configuration, not source;
- public publication reads from a sanitized approved projection rather than arbitrary private records;
- destructive/delete actions are authorized, auditable where appropriate and tested;
- expensive asynchronous work is idempotent/retryable;
- derived artifacts carry revision/provenance metadata;
- production and development/test data are clearly separated;
- logging/telemetry avoids raw private child content unless strictly necessary and explicitly designed;
- deploy/release rollback is documented and verified;
- backups/exportability protect canonical records from vendor failure.

These guardrails should become automated tests/configuration checks wherever feasible before public launch.
