# Willow's World — Privacy Design Questions

For features touching family data, answer before implementation/review:

1. What exact data is required for the user outcome?
2. Can less data achieve it?
3. Is it canonical source, parent-confirmed data, generated derivative or telemetry?
4. Where is it stored and who can access it?
5. Does any client/public URL expose a private identifier or raw media location?
6. What happens on export/delete/revocation?
7. Does publication require a separate sanitized projection?
8. Does logging/error reporting accidentally capture private content?
9. What automated negative test proves unauthorized/public access fails?

These questions guide engineering design; launch privacy/legal disclosures still require review against actual product behavior and applicable current requirements.
