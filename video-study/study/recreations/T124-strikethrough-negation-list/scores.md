# scores — T124 strikethrough negation list · Cycle 021 Wave 18 · attempt 1
Hash binding: recreation.html SHA-256 546f1104611932252a7e363b3622d7ef73a308cbbd80b810facde4882510a276 — identical in all five lens payloads (codex/payload-<lens>.txt) and all five returns. recreation.html was not modified by this wave.
Schedule basis: segment-anchored (segment 308–322s of source; headlineAtMs 4000 · cards atMs [5000,7000,10000] · strikes at atMs + 800 ms over strikeMs 700 · flipAtMs 11500 · cycleMs 14000).
PIXEL-UNVERIFIED: no browser binary in this seat; verification logic-level, comparison.html is the render surface.
Pre-wave: jev-prewave FIRE-WAVE (parameterization 0.95 · purity pre-check 0.95 · own-checks completeness 0.90 · fidelity-plan 0.90) — jev-prewave.md.
A6 legs: fit-table.md HITs 0 · config-census.md HITs 0 (both pre-wave, final build).

| lens | score | return |
|---|---|---|
| motion | 98 | codex/lens-motion.md |
| timing | 100 | codex/lens-timing.md |
| purity | 98 | codex/lens-purity.md |
| reusability | 82 | codex/lens-reusability.md |
| readability | 86 | codex/lens-readability.md |

Arithmetic: 98+100+98+82+86 = 464; 464/5 = 92.8 average. Minimum = 82 (reusability).
Verdict vs bar (avg ≥85 AND min ≥70): 92.8 ≥ 85 AND 82 ≥ 70 → **PASS → RECREATED**.

Plateau prediction carried from Cycle-020: timing 80 predicted — actual timing lens: 100.

Priced cures (lenses <85):
- reusability 82 — PRIMARY (only lens below 85): `deepMerge` array handling preserves trailing defaults on `?cfg=` override — supplying two tasks still produces three cards, and shorter headline/flipHeadline span arrays retain old trailing spans, so clean content replacement through CONFIG override is blocked. Cure: replace arrays wholesale on override (or add an explicit array-replace rule in resolveConfig), re-run the swap test with a 2-task / shortened-headline override and record the re-derived card count and spans.

Pre-wave disclosed risks — how the lenses priced them:
- The ~1.5 s anchor tension (§2b anchors vs the builder's 0.25 s census, which places card 3 and the flip up to ~1.5 s earlier): the timing lens scored 100 against the §2b segment-anchored anchors as the Plan of record, required no timing cure, and left the finer-census discrepancy as a named reconciliation item for the consumer (Condense/practice) — it did not deduct for the disclosed delta.
- The tile-scene exclusion (the post-flip Claude/plugin tile scene, segment's last ~3.5 s, has no recreation counterpart by §8 design): no lens deducted for it; motion scored 98 with no cure identified and purity 98 with no cure required — the named exclusion was accepted as scope, not priced as a fidelity gap.
- Related watch carried by the pre-wave (0.25 px card-ink margin, 11.25 px vs the ~11 px floor): readability scored 86 with cures to dim the card borders, verify struck words at native phone size, and measure actual browser text widths for strike endpoints (the character-width estimate cannot establish alignment) — advisory for practice, not a bar failure.
