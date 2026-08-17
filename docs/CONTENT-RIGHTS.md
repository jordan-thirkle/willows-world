# Willow's World — Content Rights States

Rights metadata prevents a technical pipeline from accidentally becoming a publishing decision.

Suggested domain states:

- `private-development-only` — may be used privately to prove the product but is not eligible for public publication.
- `owned-original` — original material owned/controlled for intended publication.
- `licensed` — publication is permitted within recorded license scope/territory/destinations.
- `public-domain-or-equivalent` — eligibility supported by recorded source/jurisdiction review.
- `permission-required` — do not publish until permission evidence is attached/recorded.
- `blocked` — explicitly not eligible for public publication.

The exact implementation enum/schema is established in the domain-contract slice and must carry enough provenance/evidence to justify the state. Do not infer rights from familiarity, availability online or successful rendering.
