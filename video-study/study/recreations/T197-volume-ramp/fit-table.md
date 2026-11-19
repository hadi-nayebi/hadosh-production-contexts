# fit-table — T197 volume ramp · Cycle 036 Wave 33 COMPLETION (guard-measured-fit, Amendment A6 + A12.2)

Build: recreation.html SHA-256 **65b4de69d1d384601613ba93e5cc892c55693d7b1decd68b593690dcfb9f0dcf** (12,819 B — post-completion-cure; the Wave-32 build 42578a0d… is superseded for this leg).

**Method — MEASUREMENT, A12.2 form (ii), PROXY (stand-in font named):** every row below is a rendered measurement, not a formula product. Instrument: PIL ImageFont rendering at supersample ×8; ink bounds are the rendered glyphs' actual ink bounding boxes. Stand-in font: **Liberation Sans** (Regular; **Liberation Sans Bold** for words whose state weight ≥ 600 — the nearest named static face to the build's variable `wght` axis; Roboto Flex is not installed in this seat, the instrument limit printed, not hidden). Per-word states (sizeRatio · weight · fontPx) come from the cured build's own `buildStateAt` evaluator (node harness, Cycle 036 completion run). Wrap geometry: greedy inline wrap driven by the rendered ADVANCE widths inside the build's inner box (stage 360 px − 2 × 2vw padding = **345.6 px**), exactly as the build's inline spans lay out; row height = CONFIG lineHeight 1.25 × the row's largest fontPx. Liberation runs ≈15% wider than the film's Roboto Flex (T195 cross-check), so every width margin here is conservative. The Wave-32 character-width × 0.72-factor MODEL rows are REMOVED by this filing — no model row stands as a measurement (guard-measured-fit §2).

Stage: **360×640 portrait** (the leg's reference stage). Base fontPx = 640 × CONFIG baseSizePctOfStage 6.1% = **39.04**. Line tops on this stage are the CONFIG narrow-stage values (completion layout cure): Line A top = 11% × 640 = **70.4 px** · Line B top = 49% × 640 = **313.6 px** (predicate: 360/640 = 0.5625 ≤ CONFIG narrowStageAspectMax 0.75).

## Word rows — 360×640 stage (instrument: PIL/Liberation as above; container = line inner box 345.6 px; margin = binding-side slack = inner width − measured ink width, the unbreakable-word bound)

| element | state | fontPx | wght (face) | measured ink w (px) | measured ink h (px) | margin (px) | flag |
|---|---|---|---|---|---|---|---|
| The | base | 39.04 | 400 (Regular) | 67.25 | 28.62 | 278.4 | |
| system | base | 39.04 | 400 (Regular) | 123.50 | 33.38 | 222.1 | |
| brings | base | 39.04 | 400 (Regular) | 106.25 | 36.38 | 239.4 | |
| in | base | 39.04 | 400 (Regular) | 30.38 | 28.25 | 315.2 | |
| varying | base | 39.04 | 400 (Regular) | 125.75 | 36.38 | 219.9 | |
| type | base | 39.04 | 400 (Regular) | 73.75 | 33.38 | 271.9 | |
| sizes, | base | 39.04 | 400 (Regular) | 99.75 | 33.25 | 245.9 | |
| sizes, | PEAK 1.35× | 52.70 | 760 (Bold) | 143.75 | 46.38 | 201.9 | peak row |
| weights | base (weight-only peak 800 in-envelope) | 39.04 | 400 (Regular) | 132.38 | 36.38 | 213.2 | widest base Line A word by ink |
| and | base | 39.04 | 400 (Regular) | 65.12 | 28.62 | 280.5 | |
| animation, | base | 39.04 | 400 (Regular) | 179.88 | 33.25 | 165.7 | |
| so | base | 39.04 | 400 (Regular) | 41.25 | 21.38 | 304.4 | |
| you | base | 39.04 | 400 (Regular) | 62.88 | 29.12 | 282.7 | |
| can | base | 39.04 | 400 (Regular) | 62.88 | 21.38 | 282.7 | |
| feel | base | 39.04 | 400 (Regular) | 62.88 | 28.62 | 282.7 | |
| when | base | 39.04 | 400 (Regular) | 93.38 | 28.62 | 252.2 | |
| my | base | 39.04 | 400 (Regular) | 52.00 | 29.12 | 293.6 | |
| voice | base | 39.04 | 400 (Regular) | 91.00 | 28.62 | 254.6 | |
| gets | base | 39.04 | 400 (Regular) | 73.75 | 33.38 | 271.9 | |
| louder | base | 39.04 | 400 (Regular) | 108.38 | 28.62 | 237.2 | |
| louder | PEAK 2.0× | 78.08 | 820 (Bold) | 238.75 | 57.38 | 106.9 | widest element overall |
| or | base | 39.04 | 400 (Regular) | 34.62 | 21.38 | 311.0 | |
| or | SHRUNK 0.45× (persisted) | 17.57 | 300 (Regular) | 15.62 | 9.62 | 330.0 | see floor note + HIT-D |
| softer | base | 39.04 | 400 (Regular) | 97.50 | 28.62 | 248.1 | |
| softer | SHRUNK 0.45× (persisted) | 17.57 | 300 (Regular) | 44.12 | 12.88 | 301.5 | min-state row |

Guide rules (for the record): measured from CONFIG geometry — left 8% × 360 = 28.8 px, width 84% × 360 = 302.4 px, thickness 2 px; margin 28.8 px/side. (Geometry row, not a text element.)

## Wrapped-block rows — MEASURED post-fit rendered geometry (the completion cure for HIT-B)

Instrument as above; block height = Σ row heights (1.25 × row-max fontPx) over the measured greedy wrap; block ink width = widest row's summed word ink. States from the build's own evaluator at the census instants.

| stage | instant | line | rows | measured block ink w (px) | measured block h (px) | block top (px) | block bottom (px) | clearance to next line top / stage bottom (px) |
|---|---|---|---|---|---|---|---|---|
| 360×640 | t=100 (base) | A | 4 | 297.25 | 195.20 | 70.4 | 265.60 | 48.00 to B top |
| 360×640 | t=100 (base) | B | 3 | 310.12 | 146.40 | 313.6 | 460.00 | 180.00 to stage bottom |
| 360×640 | t=3000 (sizes, PEAK) | A | 4 | 297.00 | 212.28 | 70.4 | 282.68 | **30.92 to B top** |
| 360×640 | t=3000 | B | 3 | 310.12 | 146.40 | 313.6 | 460.00 | 180.00 |
| 360×640 | t=7500 (louder PEAK) | A | 4 | 297.25 | 195.20 | 70.4 | 265.60 | 48.00 to B top |
| 360×640 | t=7500 (louder PEAK) | B | 4 | 310.12 | 244.00 | 313.6 | 557.60 | 82.40 to stage bottom |
| 360×640 | t=8500 (shrink landed) | A | 4 | 297.25 | 195.20 | 70.4 | 265.60 | 48.00 to B top |
| 360×640 | t=8500 (shrink landed) | B | 3 | 310.12 | 146.40 | 313.6 | 460.00 | 180.00 |

**Overlap verdict (measured): NO OVERLAP at any measured instant on the cured build.** Worst case is the sizes-peak instant: Line A bottom 282.68 vs Line B top 313.6 → 30.92 px clearance. Pre-cure reproduction with the same instrument (filed for the record): Line A worst bottom 404.28 (top 192.0 + 212.28) vs Line B top 358.4 → 45.88 px overlap — the Wave-32 flag confirmed by measurement, then cured by CONFIG (narrowLineTopPctOfStage [11, 49] + narrowStageAspectMax 0.75; wide-stage tops unchanged).

## 16:9 stage check (640×360 — the cure must not break wide behavior)

Wide predicate false (640/360 = 1.7778 > 0.75) → original CONFIG lineTopPctOfStage [30, 56] governs: A top 108.0 · B top 201.6. Measured (same instrument, inner width 614.4, basePx 21.96): A worst bottom 172.51 (t=3000) → 29.09 px clearance to B top · B worst bottom 256.50 (t=7500) → 103.50 px to stage bottom. No overlap; wide-stage layout form unchanged by the cure.

## Hierarchy (measured, guard check 4)
louder peak ink height 57.38 vs its base 28.62 = **2.00×** ✓ (the claimed ratio, measured) · sizes, peak ink height 46.38 vs base 33.25 = 1.39× (fontPx ratio exactly 1.35; the ink-height excess is the Bold face's taller bbox at wght 760 — printed, not rounded away) · softer shrunk 12.88 vs base 28.62 = **0.45×** ✓ · or shrunk 9.62 vs base 21.38 = **0.45×** ✓.

## Legibility floor (~11 px at the 360 px stage, guard check 3)
Smallest subject size class is the persisted shrink state at fontPx 17.57: softer full ink height **12.88 px ≥ 11 ✓** · cap height at that fitted size (rendered 'H', same instrument) **12.12 px ≥ 11 ✓** · `or` full ink height **9.62 px** — below 11 on the full-ink reading; `or` is two x-height glyphs with no ascender or capital, so its full ink is x-height-bound at ANY faithful rendering, including the source's own 0.45× shrink state (the specimen's ratio, CONFIG-floored at minSizePctOfStage 2.7). Filed as HIT-D below with disposition — printed, never hidden inside an average.

## Comparison surface (360×203 iframe) — measured this cycle (same instrument)
Base fontPx = 203 × 6.1% = 12.38 · softer base ink height 9.12 px · louder peak (24.77 px, Bold) ink 75.62 × 18.12 px · shrink state (5.57 px): softer ink height **4.12 px**, or ink height 3.00 px — below the ~11 px floor. **HIT-C (this surface only), carried with disposition (unchanged from Wave 32):** the comparison iframe is a reduced-scale inspection surface; the reduction is IDENTICAL on the original side — the source's own text at 6.1% of its 1080 px height scaled to a 203 px-high frame is the same ≈9 px base / ≈4 px shrink ink. The recreation matches the original's physical text size in the comparison exactly (that parity is the comparison's purpose); the legibility floor governs the recreation's own playback stage (360×640 above), where the size class clears it. Enlarging type only in comparison would break size parity with the ORIGINAL — the defect would be the cure. Disposition: CARRIED, priced, not cured by construction.

## Hit list (revised at completion)
- **HIT-A (Wave 32: model-derived rows) — CURED:** every row above is a rendered measurement with instrument + stand-in font named; the model rows are removed, not relabeled.
- **HIT-B (Wave 32: wrapped blocks unmeasured + portrait overlap) — CURED:** blocks measured post-fit at four census instants; overlap reproduced by measurement on the pre-cure build (45.88 px) and eliminated on the cured build (worst clearance 30.92 px) by the CONFIG narrow-stage layout cure; 16:9 behavior verified unchanged in form.
- **HIT-C (comparison-surface scale parity) — CARRIED** with disposition above.
- **HIT-D (`or` full-ink 9.62 px at the persisted shrink state) — CARRIED** with disposition in the floor section: cap height at the same fitted size is 12.12 px and the line's other shrink word clears full-ink at 12.88 px; curing by enlarging `or` alone would break the shared-envelope 0.45× specimen ratio that IS the technique's end state.

HITs: **2 carried (C · D), both dispositioned · 0 undispositioned · 0 on the recreation's own stage without disposition**

## ADDENDUM — post-HOLD cure evidence (filed AFTER the Cycle 036 completion prewave re-fire returned HOLD; NOT part of the table the re-fire judged)

The re-fire's finding 2 priced the wrapped-block rows above as a layout CALCULATION over measured advances (summed word ink cannot establish a row's placed ink extent). Cure evidence, filed for the next re-fire: **placed-line rendered measurement** — each wrapped line rendered AS PLACED with PIL ImageDraw (same named stand-in, Liberation Sans Regular/Bold, supersample ×4): greedy wrap by rendered advances in the 345.6 px inner box, rows centered in the 360 px stage, words drawn at their placed positions and sizes; the reported bounds are the whole block's rendered ink bounding box. Instrument states from the cured build's own evaluator, cured narrow tops (A 70.4 · B 313.6).

| instant | line | rows | line-box h (px) | placed ink w (px) | placed ink h (px) | ink left–right (px) | ink top (px) | ink bottom (px) |
|---|---|---|---|---|---|---|---|---|
| t=100 | A | 4 | 195.20 | 316.50 | 179.75 | 21.5–338.0 | 77.65 | 257.40 |
| t=100 | B | 3 | 146.40 | 341.50 | 126.25 | 8.5–350.0 | 320.85 | 447.10 |
| t=3000 (sizes, PEAK) | A | 4 | 212.28 | 316.50 | 196.75 | 21.5–338.0 | 77.65 | **274.40** |
| t=3000 | B | 3 | 146.40 | 341.50 | 126.25 | 8.5–350.0 | 320.85 | 447.10 |
| t=7500 (louder PEAK) | A | 4 | 195.20 | 316.50 | 179.75 | 21.5–338.0 | 77.65 | 257.40 |
| t=7500 (louder PEAK) | B | 4 | 244.00 | 341.50 | 224.00 | 8.5–350.0 | 320.85 | 544.85 |
| t=8500 (shrink landed) | A | 4 | 195.20 | 316.50 | 179.75 | 21.5–338.0 | 77.65 | 257.40 |
| t=8500 (shrink landed) | B | 3 | 146.40 | 341.50 | 126.25 | 8.5–350.0 | 320.85 | 447.10 |

Placed-ink verdict: Line A's worst placed ink bottom (274.40, sizes-peak instant) vs Line B's placed ink top (320.85) → **46.45 px placed-ink clearance**; the line-box clearance (30.92 px, table above) remains the conservative bound. Line B's widest placed ink extent (right edge 350.0) sits inside the 360 px stage. Both bounds forms now stand on rendered measurement: per-word ink (table) + placed-line ink (this addendum).
