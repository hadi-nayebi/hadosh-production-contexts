# T91 — guard-measured-fit leg (Amendment A-C008) · fit-table · attempt 3

Build bound: recreation.html sha256 `10a4da2d1a78664f910ab20fdd27d0f0b588b6372d7a9a94e78a48c819184e83`.
Method: PIL measurement, DejaVu Serif (regular) + Liberation Serif Italic as stand-ins for the configured Georgia stack — the same metric basis the recreation's fit contract and the own-check harness consume (one basis for fitting and rendering logic). The Georgia typeface is not present in this seat, so this leg prints **GEORGIA-UNVERIFIED** beside the standing **PIXEL-UNVERIFIED** (no browser binary in this seat). Measurement data: `fit-T91-attempt3.json` in the Cycle 018 wave run directory (generator `fit-T91-attempt3.py`, the attempt-2 generator re-run on this build's unchanged geometry).
Fit contract (deterministic, ordered): shrink the quote size in fixed steps down to the 20px floor until the quote block fits the quote zone in height and every wrapped line fits in width; if it still does not fit at the floor, reject naming the card and the overflow in px. Speaker exactly 1 line and no speaker token wider than the attribution width; role at most fit.roleMaxLines (4) lines with the attribution block inside geom.attrH; no role token wider than the attribution width.
Quote zone depth (derived): cardH 412 − attrBottom 18 − attrH 104 − quoteY 64 = **226px** at both widths (vertical geometry does not scale).
Contrast (computed WCAG ratios on the configured colors, unchanged palette): ink on card 14.64:1 · accent on card 10.09:1 · ink on bg (HUD) 8.67:1 · ink on chip 15.89:1 — every pair ≥ 4.5:1 ✓.

## Stage width 360 (scale 1.000, quote width 256, attribution text width 274)

| Element | Container | Font px | Measured ink W × H (px) | Lines | Margin / note |
|---|---|---|---|---|---|
| hud.line "2037 · A POSSIBLE TUESDAY" | stage top-left | 15 | 296.9 × 11.0 | 1 | R ~47 to stage edge at 360 |
| hud.clock "19:00" | stage top-left | 34 | — × 25.0 | 1 | — |
| tag "QUOTE" | chip inside card | 12 | 65.8 × 11.0 | 1 | — |
| mark "“" | card body left | 46 | — × 35.0 | 1 | decorative glyph, accent |
| card0.quote (Schneier) | card body, width 256 | 24 italic | line ink H 21.0, block H 95.0 | 3 | zone 226, spare 131.0 |
| card1.quote (Berners-Lee) | card body, width 256 | 24 italic | line ink H 21.0, block H 95.0 | 3 | spare 131.0 |
| card2.quote (Sal Khan) | card body, width 256 | 24 italic | line ink H 21.0, block H 126.7 | 4 | spare 99.3 |
| swap.quote (Ada) | card body, width 256 | 24 italic | line ink H 21.0, block H 63.4 | 2 | spare 162.6 |
| card0.speaker "Bruce Schneier" | attribution, width 274 | 20 | 156.8 × 14.0 | 1 | — |
| card1.speaker "Tim Berners-Lee" | attribution, width 274 | 20 | — × 14.0 | 1 | — |
| card2.speaker "Sal Khan" | attribution, width 274 | 20 | — × 14.0 | 1 | — |
| card0.role (3 lines) | attribution, width 274 | 15 | ink H 13.0, block 84.5 ≤ attrH 104 | 3 | worst case at this width |
| card1.role | attribution, width 274 | 15 | ink H 13.0, block 65.0 | 2 | — |
| card2.role | attribution, width 274 | 15 | ink H 13.0, block 65.0 | 2 | — |

## Stage width 320 (scale 0.889, quote width 227.6, attribution text width 243.6)

| Element | Container | Font px | Lines | Block H | Margin / note |
|---|---|---|---|---|---|
| card0.quote (Schneier) | card body, width 227.6 | 24 italic | 4 | 126.7 | zone 226, spare 99.3 |
| card1.quote (Berners-Lee) | card body, width 227.6 | 24 italic | 3 | 95.0 | spare 131.0 |
| card2.quote (Sal Khan) | card body, width 227.6 | 24 italic | 5 | 158.4 | spare 67.6 |
| swap.quote (Ada) | card body, width 227.6 | 24 italic | 2 | 63.4 | spare 162.6 |
| card0.role | attribution, width 243.6 | 15 | 4 | 104.0 = attrH 104 | worst case across both widths |
| card1.role / card2.role | attribution, width 243.6 | 15 | 2 | 65.0 | — |
| all speakers | attribution, width 243.6 | 20 | 1 | — | exactly 1 line at both widths ✓ |

Hierarchy (measured): quote ink 21.0 vs speaker ink 14.0 vs role ink 13.0 — a size hierarchy, not hue-only ✓.
Fit-contract outcomes per card: every settled card + the swap card fits at the configured 24px (no shrink engaged) at both widths; the shrink path, the floor clamp, the step bound, and the horizontal single-word reject paths (quote/speaker/role, both widths) are exercised in the own-check suite (V9).

## HIT list — EMPTY (PASS for this leg)
No HITs on this build. The attempt-2 HIT (narrow-width attribution height) stays cured: attrH 104 stands and the 320px worst case measures exactly 104.0. GEORGIA-UNVERIFIED + PIXEL-UNVERIFIED stand.
