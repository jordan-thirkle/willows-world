# Willow's World — Review Protocol

## For every meaningful vertical slice

1. **Spec/current-gate check:** does the diff implement the intended slice without unrelated scope?
2. **Behavior check:** do focused tests and runtime evidence prove the promised behavior?
3. **Regression check:** did existing Story Woods/product behavior remain intact unless intentionally changed?
4. **Data/privacy/rights check:** could the change expose private data, weaken revision approval or blur rights state?
5. **Reliability check:** what happens under retry, stale state, restart or partial failure?
6. **Platform check:** use browser/native/render evidence matching the platform claim.
7. **Maintainability check:** is canonical truth located in a clear durable boundary rather than duplicated in UI/provider glue?

Review findings should be concrete and evidence-based. Resolve valid findings before merge; document rejected findings with technical reasoning rather than dismissing them silently.
