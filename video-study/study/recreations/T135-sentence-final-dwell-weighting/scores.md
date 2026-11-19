# scores — T135 Sentence-final dwell weighting (punctuation as timing) · attempt 1 · Cycle 022 Wave 19 (2026-11-16)
recreation.html SHA-256: f29b8ee6016dbb7321c6938d30b12dae342cf32a0b37861b51e28045e8f75c51 (identical across all five lens payloads and returns)
Schedule basis: t=0 allocation (baseDwellMs 180 x finalMultiplier 3.0; derived total 13320 ms, tail 680 ms)
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level, comparison.html is the render surface.
jev-prewave: FIRE-WAVE (jev-prewave.md)
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.

| lens | score | return |
|---|---|---|
| motion | 88 | codex/lens-motion.md |
| timing | 82 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 82 | codex/lens-reusability.md |
| readability | 86 | codex/lens-readability.md |

Arithmetic (seat-recomputed from the filed SCORE lines): 88+82+100+82+86 = 438; average 87.6; minimum 82. Bar: average ≥85 AND minimum ≥70.
**Verdict: PASS — RECREATED.**

Priced cures (lenses <85):
- timing 82 (<85): both dwells run 12.5% long against the packet medians (180 vs 160 internal; 540 vs 480 final) — the Plan's priced allocation, and the 680 ms blank tail it creates reads as an extra timing event (motion concurs). Cure for a future attempt: base 160 ms exactly (derived total 11840 ms) with the tail question decided explicitly — either the cycle shortens to the derived total or the tail is distributed; the 3.0 ratio itself scored exact.
- reusability 82 (<85): cures as filed in the return.
Verdict stands PASS; cures recorded, not blocking.
