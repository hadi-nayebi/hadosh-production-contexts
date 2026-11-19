# FIT TABLE — T20 attempt 2 · measured-fit leg (guard-measured-fit) · pre-scoring

Source: recreation.html at CP5/final state (see build-record-attempt2.md for the frozen sha). Stage basis: 360px wide × 202.5px (16:9 panel as in comparison.html).
**Instrument label (plan-review finding 2): all bounds below are SYNTHETIC-PIPELINE measurements — the build's own sampling/fit pipeline run against a stub raster (5×7 bitmap glyph model). Actual browser glyph rasterization is BLOCKED (no browser binary in the seat). This table therefore does NOT receive an unqualified measured-fit PASS: verdict = PASS-SYNTHETIC, with the actual-raster row carried as a BLOCKED hit (H1). PIXEL-UNVERIFIED.**

## Rows (one per subject text element)
| Element | Container | Measured ink bounds (post-fit) | Container bounds | Margin (binding side) |
|---|---|---|---|---|
| Facade line 1 "LOOK" | sample line band 1 / hero line band at 360px | ink width 201.3px (sample space); fitted font 74px | fit width limit 368px (sampleW × sampleFitRatio); band height 160px sample / ≈55.4px at 360px | width margin 166.7px |
| Facade line 2 "WHAT" | line band 2 | ink width 221.3px; fitted font 74px | 368px / band 160px | width margin 146.7px |
| Facade line 3 "I CAN DO!" | line band 3 | ink width 362.6px; fitted font 74px | 368px / band 160px | **width margin 5.4px (binding)** |
| Facade letters (per letter, all 15) | owned grid cells | ink rows 7–8 (min "!" 7), ink cols: letters 5–7, I 2, ! 1; glyph ink height at 360px = rows × 3.46px cell pitch × 0.76 lit fraction = **18.4–21.0px** | legibility floor 11px ink height | min margin +7.4px over floor |
| Stems / counters | per-letter owned cells | stems present L·H·T·I·K (a column spanning ≥80% of ink height); counters enclosed for O·A·D | — | pass |
| Marquee "LOOK WHAT I CAN DO!" | hero strip at tower base | measured width **125.5px** at fitted font **11px** (floor) | strip width **136.8px** (hero width at 360px) | margin 11.3px |
| Hierarchy (measured ratio) | — | effective luminance: facade 0.936 · marquee 0.520 · neighbor lit 0.390 · edge 0.437 | facade:marquee ratio **1.80** (threshold ≥1.3); marquee absolute scale 0.62 ≥ 0.5 floor | pass |

## Capacity behaviour (asserted, not assumed)
- 26-char single line: fitted 20px, fitStatus ok, width axis respected.
- 5 facade lines: fitted 92px, per-line ink height 92 ≤ band 96.
- 63-char marquee: fitStatus **over-capacity** diagnostic at the font floor — no silent overflow.

## HIT list
- **H1 (BLOCKED, carried): actual browser raster measurement unavailable** — synthetic rows prove pipeline behaviour against the stub mask, not browser glyph geometry (guard §2's formula-claim class is avoided by measuring the pipeline's own mask, but the raster itself is a model). Disposition: printed in scores.md + build record; PIXEL-UNVERIFIED stands; the measurement cure is carried as PARTIALLY UNRESOLVED on this point.
- No other hits: every subject text element has a measured row; no row is formula-derived (ink rows/cols counted from owned cells; widths from the pipeline's measure step at the fitted font); no ink height under the 11px floor; hierarchy measured, not hue-only.
