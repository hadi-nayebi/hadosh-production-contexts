# scores — T133 Countdown pre-announcement with scaling numerals · attempt 1 · Cycle 022 Wave 19 (2026-11-16)
recreation.html SHA-256: 0748d3babe40dc4d248af4b0d256d5eb018797850a5adadb2bc2d40e308c7962 (identical across all five lens payloads and returns)
Schedule basis: segment-anchored (segment 0.00–14.00 s; numeral onsets 400/1200/2000 ms, dwells 800/800/1000 ms)
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level, comparison.html is the render surface.
jev-prewave: FIRE-WAVE (jev-prewave.md)
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.

| lens | score | return |
|---|---|---|
| motion | 74 | codex/lens-motion.md |
| timing | 100 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 78 | codex/lens-reusability.md |
| readability | 88 | codex/lens-readability.md |

Arithmetic (seat-recomputed from the filed SCORE lines): 74+100+100+78+88 = 440; average 88.0; minimum 74. Bar: average ≥85 AND minimum ≥70.
**Verdict: PASS — RECREATED.**

Priced cures (lenses <85):
- motion 74 (<85): growth is continuous-linear interpolation where the specimen's scale states were detector-sampled at three states; the lens prices the stepped-vs-continuous uncertainty plus the census-derived taper's sampling risk. Cure for a future attempt: sample scale at more states from the segment frames and bind scaleFrom/scaleTo per numeral from measurement, not taper inference.
- reusability 78 (<85): cures as filed in the return (per-numeral scale keys are arrays whose index semantics ride on the numerals array order — documented in build-record; a named-key form is the priced improvement).
Verdict stands PASS; cures are recorded for the library entry, not blocking.
