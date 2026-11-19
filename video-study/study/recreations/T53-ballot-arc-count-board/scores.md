# T53 — The ballot-arc count board · scores (attempt 1, Cycle 012 Wave 10)
Bound build: recreation.html sha256 c6f4a29b3a535b82056f64b5236e28b6b991de8228b490bab244f185a3866166 (identical for all five final lens runs; no post-wave source change).
Feeding: score-blind allowed packet per lens (lens instruction with standing header + neutral technique facts + recreation.html + score-blind build record); scores.md never fed; no lens saw a prior score or another lens's return. Interim firings on superseded builds are preserved verbatim and NEVER averaged: codex/lens-motion-interim1.md (62, build 239795fb…) · codex/lens-purity-interim1.md (100, same build) · codex/lens-motion-interim2.md (78, build f181276b…) · codex/lens-timing-interim1.md (59, same build). Each interim defect was cured and the wave re-fired in full on the final build (identical-hash rule).
Pre-wave gate: jev-prewave FIRE-WAVE (parameterization 0.90 · purity pre-check 0.97 · own-checks completeness 0.95 · fidelity-plan honesty 0.80) — codex/jev-prewave.md.

| Lens | Score | Return |
|---|---|---|
| motion | 92 | codex/lens-motion.md |
| timing | 88 | codex/lens-timing.md |
| purity | 94 | codex/lens-purity.md |
| reusability | 74 | codex/lens-reusability.md |
| readability | 80 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 92 + 88 + 94 + 74 + 80 = 428; average = 428 / 5 = 85.6; minimum = 74.
Bar: average ≥ 85 AND minimum ≥ 70 → 85.6 ≥ 85 ✓ · 74 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. CONVERGENT (reusability −10 + purity −4): segment bracket scheduling dispatches on bracket VALUES — `segmentBracketAt` hides the bracket whose value is 19 and delays the one whose value is 9, so a value swap silently re-times the segment act (in the §2b swap the swapped 9 appears at entry and the against-value 4 is delayed). Cure: give brackets stable IDs + explicit segment membership/anchor fields in CONFIG; dispatch on those; extend the swap test to assert segment bracket flags at entry, ~6 s, and hold under swapped values.
2. CONVERGENT (timing −4 + readability −4): the always-present legend announces "19 still needs" during Act 1, before that state exists, and bracket meanings need cross-reference (two brackets share the phrase "still needs"; chips are uniformly gold; tabs carry no color key). Cure: generate the legend per act from the annotations available in that act, name whose votes each bracket counts, and add a compact colored bloc key for the tab colors.
3. CONVERGENT (reusability −2 + purity −2): card geometry/styling/typography and several box/board offsets remain renderer literals outside CONFIG. Cure: move them into named CONFIG fields (card block + offsets), completing the CONFIG surface.
4. Reusability (−6, single lens): bracket arc fractions are independently supplied; the "to win" bracket does not re-derive from threshold, and spans do not follow column/count changes. Cure: semantic anchors — derive bracket spans from threshold + column totals where the specimen's semantics allow, with explicit overrides.
5. Reusability (−4, single lens): URL-override deepMerge preserves trailing default entries, so runtime overrides cannot reduce array cardinality (columns/brackets/card lines). Cure: array-replacement semantics for overrides; verify fewer columns/brackets through effectiveConfig. (The node-harness CONFIG-edit path already replaces wholesale; this binds the browser override path.)
6. Reusability (−4, single lens): CONFIG validity is not enforced at initialization (multiple remainder columns, overallocated counts, incompatible row arrays pass silently; checkpointsOk is exposed but never enforced). Cure: validate at init and refuse or repair loudly.
7. Motion (−5/−3, single lens): the Act 2 reset at 15 s is abrupt (completed board vanishes into slots with no transition), and the lifecycle reveals paper+print+tab together per step where the described count tabs papers already on the board. Cure: a replay transition that retains the completed board until it plays; in Act 2 keep papers + print visible from the reset and animate only the tabs in angular count order.
8. Timing (−6/−2, single lens): durationMs (14000) is declarative — the standalone clock runs the full 23000 ms runtime, so the default presentation exceeds the segment by 9 s; and the entrance settles at 3.0 s against a ~4 s full-frame anchor (±1 s sampling). Cure: a segment playback mode that stops at 14 s with the lifecycle as a separate mode; verify the settle frame at finer sampling.
9. Readability (−6/−6/−4, single lens): the centered title and the left act label collide on the same top row; supporting text (counts 10.5 px, legend 11 px, card 10 px) is small for phone reading; empty slots (dark brown at 0.55 opacity) separate weakly from the board. Cure: separate header rows, enlarge supporting text across deliberate rows with re-measured 360 px bounds, and give slots a contrasting outline / stronger luminance separation.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; fit evidence is layout arithmetic (build-record §5e) + the comparison page as render surface. Act 2's internal timings are a labeled ALLOCATION MODEL (anchors only: 19-bracket state at 465 s, sweep-hand verdict state at 900 s); Act 1 reproduces the measured 278–292 s window anchors. Two §2b swap deviations are recorded in build-record §5a (fillMs from-value superseded by the re-timing cure; sweep target pair roles reversed after the default cure) — altered values and PASS criteria unchanged in both.
