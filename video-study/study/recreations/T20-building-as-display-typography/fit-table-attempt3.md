# FIT TABLE — T20 attempt 3 · measured-fit leg (guard-measured-fit) · pre-scoring

Source: recreation.html sha256 `5f6e609d2f249ffec7bd84da5e1a0314a361cdf7f52b2bd5b9ffefca9199f507`. Stage basis: 360px wide × 202.5px (16:9 panel as in comparison.html).
**Instrument label: all bounds below are SYNTHETIC-PIPELINE measurements — the build's own sampling/fit pipeline run against a stub raster (5×7 bitmap glyph model). Actual browser glyph rasterization is BLOCKED (no browser binary in the seat). Verdict = PASS-SYNTHETIC, with the actual-raster row carried as a BLOCKED hit (H1). PIXEL-UNVERIFIED.**

## Rows (one per subject text element)
| Element | Container | Measured ink bounds (post-fit) | Container bounds | Margin (binding side) |
|---|---|---|---|---|
| Facade line 1 "LOOK" | sample line band 1 / hero line band at 360px | ink width 201.3px (sample space); fitted font 74px; **full-region extent 74px, ink rows 43–116 of band 0–160**; in-band height 74px | fit width limit 368px (sampleW × sampleFitRatio); band height 160px sample / ≈55.4px at 360px | width margin 166.7px; height extent margin 86px |
| Facade line 2 "WHAT" | line band 2 | ink width 221.3px; fitted font 74px; **extent 74px, rows 203–276 of band 160–320**; in-band 74px | 368px / band 160px | width margin 146.7px; extent margin 86px |
| Facade line 3 "I CAN DO!" | line band 3 | ink width 362.6px; fitted font 74px; **extent 74px, rows 363–436 of band 320–480**; in-band 74px | 368px / band 160px | **width margin 5.4px (binding)**; extent margin 86px |
| Facade letters (per letter, all 15) | owned grid cells | ink rows 7–8 (min "!" 7), ink cols: letters 5–7, I 2, ! 1; glyph ink height at 360px = **18.4–21.0px** (unchanged basis) | legibility floor 11px ink height | min margin +7.4px over floor |
| Stems / counters | per-letter owned cells | stems present L·H·T·I·K; counters enclosed for O·A·D | — | pass |
| Marquee "LOOK WHAT I CAN DO!" | hero strip at tower base | measured width **125.5px** at fitted font **11px** (floor); **drawn clipped to the strip rect at every fit status** (recording-stub verified) | strip width **136.8px** (hero width at 360px) | margin 11.3px |
| Hierarchy (measured ratio) | — | effective luminance: facade 0.936 · marquee 0.520 · neighbor lit 0.390 · edge 0.437 | facade:marquee ratio **1.80** (threshold ≥1.3); marquee absolute scale 0.62 ≥ 0.5 floor | pass |

## Height axis — measurement basis changed this attempt (both bases printed)
Height is now measured per line on an **isolated, vertically padded surface**, with ink bounds mapped back to the line's intended band; a line passes only when its full extent fits inside its own band (extent ≤ band AND top ≥ band top AND bottom < band bottom). The composite draw is kept for grid sampling only. Constructed proof (stage checkpoint CP4): a 6-line fixture at a pinned 92px font has in-band height 80px = band height (the previous basis passes it) while its full-region extent is 92px crossing into the neighbouring band — the new axis reports over-capacity with binding axis "height"; a first line at a pinned 200px font records inkTopPx −20 (above the canvas edge) and a last line inkBottomPx 499 (past 480) — both fail the height axis.

## Capacity behaviour (asserted, not assumed)
- 26-char single line: fitted 20px, fitStatus ok, width axis respected.
- 5 facade lines: fitted 92px, per-line ink height 92 ≤ band 96; extents inside bands.
- 63-char marquee: fitStatus **over-capacity** at the font floor; drawn **clipped** — modelled full width 412.2px, displayed width under clip = strip 136.8px; the render decision records the marquee refusal.
- Facade over-capacity (61-line swap): the render decision withholds the lit-cell passes entirely (recording stub: 0 glow/lit draws), the unlit grid + towers + marquee still render, and the hero edge draws in the refusal color.
- Floor-jump fixture: a line fitting only at the floor font (30px) is re-measured at the floor and reports fitStatus **ok** at fitted font 30 (the previous construction reported over-capacity without re-measuring).

## HIT list
- **H1 (BLOCKED, carried): actual browser raster measurement unavailable** — synthetic rows prove pipeline behaviour against the stub mask, not browser glyph geometry. Per-char band ownership vs whole-string kerning and all glyph-survival claims for browser-rendered Arial Black / fallback fonts are **unverifiable** and are not claimed anywhere in this attempt's filings. Disposition: printed in scores.md + build record; PIXEL-UNVERIFIED stands.
- No other hits: every subject text element has a measured row; no row is formula-derived; no ink height under the 11px floor; hierarchy measured, not hue-only.
