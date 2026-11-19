# T45 — Number-anchored beats · scores (attempt 1, Cycle 008 Wave 6)
Bound build: recreation.html sha256 89e2f061e8ec597e07abd53d4195acf1b2eae8ac614363478afdbe9591f79c09 (identical for all five lens runs; no post-wave source change).
Feeding: score-blind allowed packet per lens (lens instruction + neutral T20 facts + recreation.html + score-blind build-record.md); scores.md never fed. Returns filed verbatim under codex/.

| Lens | Score | Return |
|---|---|---|
| motion | 88 | codex/lens-motion.md |
| timing | 84 | codex/lens-timing.md |
| purity | 97 | codex/lens-purity.md |
| reusability | 78 | codex/lens-reusability.md |
| readability | 94 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 88 + 84 + 97 + 78 + 94 = 441; average = 441 / 5 = 88.2; minimum = 78.
Bar: average ≥ 85 AND minimum ≥ 70 → 88.2 ≥ 85 ✓ · 78 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. CONVERGENT (purity −3 + reusability −7): sphere-lighting geometry `sr/3` highlight offsets and `sr/6` inner radius sit OUTSIDE CONFIG in drawHero — visual shaping constants the build record's census wrongly classified as structural and reported as zero shaping literals. Cure: expose both as CONFIG.hero fractions, consume them in drawHero, and correct the census classification (gradient-geometry ratios are shaping).
2. CONVERGENT (motion −6 + reusability −5): reveal times and the count-end checkpoint are independently scheduled — lengthening countDurationMs leaves checkpoints/reveals stale and can reveal the callout before counting finishes. Cure: derive calloutAt/sublineAt/count-end checkpoint from count completion + CONFIG offsets, or validate the relationships in checkpointsOk() and exercise shorter AND longer count durations in the swap test.
3. CONVERGENT (timing −6 + motion −2): subline fade completes at 10.2 s, after the 17:32 final-state anchor (10.0 s); the build record's "final state reached before the anchor" guarantee is therefore overstated for the subline. Cure: start the fade by 9.2 s or shorten to ≤600 ms; correct the guarantee's wording.
4. Timing (−10, single lens): callout begins 8.4 s (17:30.4), just outside the 17:24–17:30 counters/callout window, pop completing 8.85 s. Cure: complete the count earlier and finish the callout reveal by 8.0 s, preserving order.
5. Reusability (−10, single lens): counter cardinality is fixed at exactly two (panels, applyVars, computeCallout operands assume two; a third counter fails, a single counter cannot initialize; URL array merge retains stale entries on shorter arrays). Cure: generate panels from CONFIG, name callout operands explicitly, support array replacement for cardinality changes.
6. Readability (−2/−4, single lens): panel inner width is ~127 px after borders (record said 131 px) — digits still fit, guard may shrink slightly; fit evidence rests on a substitute font with no browser pixels. Cure: browser-verify the settled 360 px frame (actual font, counter bounds, no clipping) when a browser is exercisable.
7. Motion (−4, single lens): swirl reads as a shimmering ring — rotation 0.05 rad/s over a near-uniform ellipse gives weak directional legibility. Cure: CONFIG-driven particle clustering or trails; verify visible circulation in playback.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable Chrome in this seat): all lens verdicts are source-based; the comparison page is the render surface for the seat's firsthand check. Timing sub-beats remain a labeled ALLOCATION MODEL (anchors only: counters/callout 17:24–17:30, final state by 17:32).
