# T92 — guard-measured-fit leg (Amendment A6) · fit-table — ATTEMPT 3

Method: PIL measurement with DejaVu Serif / DejaVu Serif Bold as stand-ins for the CONFIG Georgia stack (same method as attempts 1–2; this attempt's run reproduces every attempt-2 filed width exactly, max delta 0.0 px across all 15 rows, verified before re-basing). Card inner width = cardW 320 − 2×cardPad 14 − borderW 3 = **289 px** (border-box; `#card` carries `box-sizing:border-box` and a 3 px left border). This corrects the inner-width figure printed in the attempt-2 fit table — that file stands as filed evidence (preserved as `fit-table-attempt-2.md`) and is not edited; the correction is stated here, in the attempt-3 method line. Ink bounds are post-fit measurements (textbbox at the configured px size, letter-spacing added). PIXEL-UNVERIFIED: no browser binary can start in this seat (see the render-route record in build-record-attempt3.md). RENDER-FRAME-UNVERIFIED: the 360 px rendered-frame check could not be exercised (the one binary on disk is policy-blocked at startup); the fallback is this source-bound model + the PIL re-measurement.
Build bound: recreation.html sha256 `bfea416b49f0dca74db065ccf62f268f5b25d362f00943af045284fff320f70d` (attempt-3 final candidate).

| Element | Container | Font px | Measured ink W × H (px) | Lines | Margin @289 (binding side) |
|---|---|---|---|---|---|
| hud.year "2025" | stage line | 26 | 66.0 × 19 | 1 | — |
| hud.day "A POSSIBLE TUESDAY" | stage line | 15 | 209.6 × 11 | 1 | — |
| hud.clock "19:00" | stage line | 30 | 86.0 × 22 | 1 | — |
| beat0.status "ALREADY MEASURED" | card line | 18 | 263.8 × 13 | 1 | R 25.2 |
| beat0.place "USA · 2025" | card line | 18 | 122.4 × 13 | 1 | R 166.6 |
| beat0.claim "AI research system: about 1 in 5 claims did not hold up" | card body | 20 | 562.0 × 19 | 2 | — |
| beat0.source "KOSMOS · ARXIV 2511.02824" | card foot | 17 | 277.3 × 12 | 1 | R 11.7 |
| beat0.value "1 in 5" | stage row | 46 | 132.0 × 35 | 1 | — |
| beat1.status "ALREADY TESTED" | card line | 18 | 220.8 × 13 | 1 | R 68.2 |
| beat1.place "TURKEY · 2025" | card line | 18 | 167.9 × 13 | 1 | R 121.1 |
| beat1.claim "Plain chatbot: exam scores 17% lower without it · tutor with guardrails: no such drop" | card body | 20 | 868.0 × 19 | 4 | — |
| beat1.source "BASTANI ET AL. · PNAS 2025" | card foot | 17 | 276.0 × 12 | 1 | R 13.0 |
| beat1.value "-17%" (SVG text) | chart | 46 | 118.0 × 35 | 1 | — |
| swap.claim "About 1 in 4 claims did not hold up" | card body | 20 | 357 × 19 | 2 | — |
| swap.value "-25%" (SVG text) | chart | 46 | 118 × 35 | 1 | — |

Hierarchy (measured): value ink 35.0 vs claim ink 19.0 → ratio 1.84; value vs status 13.0 → 2.69 ✓ — the value numeral remains measurably the largest text on each beat.

Wrap states (enumerated, at inner width 289): every status/place/source row is exactly 1 line at the configured content and at both swap contents (widest: beat0.source 277.3 ≤ 289, margin R 11.7; source at 18 px would measure 294.3 > 289, which is why sourcePx is 17, ink 12.0). Claims wrap by design: beat0 2 lines, beat1 4 lines, swap claim 2 lines — heights carried in the card model below.

Card-to-chart clearance (source-bound displayed-state model; line heights 1.2×px single-line rows, claim 1.3×px per wrapped line):
- beat0: claim lines 2, card height 176.6, card bottom 268.6, chart top 332.0, clearance 63.4px (chart hidden on this beat; the bound priced is card bottom ≤ stageH 540 ✓)
- beat1: claim lines 4, card height 228.6, card bottom 320.6, chart top 332.0, clearance 11.4px
- chart bottom 522.0 stageH 540.0
The in-page canvas-measure variant of this clearance check is UNVERIFIED-in-page (no canvas measurement is implemented in the page); this leg's wrapped model is what carries it, as the build record prints.

Chart-internal ink containment (measured this attempt): the question-step marks' ink top under the displayed-state model is +1 px inside the chart (beamY 68 − 3 rises of 16 − mark gap 4 − mark size 15); the stand-in font's actual glyph ink extends 11 px above its baseline, giving an actual ink top of +5 px. Bar tops sit 4 px below the chart top (max bar height 64 against beamY 68).

## HIT list — EMPTY for measured rows (PASS for this leg)
Secondary text stands as measured in attempt 2 (status/place ink 13.0 px, source ink 12.0 px, HUD day-line ink 11.0 px) — unchanged sizes, re-measured widths identical. Open item, printed not hidden: **RENDER-FRAME-UNVERIFIED** — no rendered frame at 360 px could be produced in this session (the one binary on disk fails at startup on a platform policy error), so wrapping/clearance rest on the model above; consumer: the readability lens.
