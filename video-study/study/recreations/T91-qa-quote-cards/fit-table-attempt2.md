# T91 — guard-measured-fit leg (Amendment A6) · fit-table · attempt 2

Build bound: recreation.html sha256 `64c636b00e52fe7ae1819749e8e4f6793315f523618999350d59c2527e12e5a7`.
Method: PIL measurement, DejaVu Serif (regular) + Liberation Serif Italic as stand-ins for the configured Georgia stack — the same metric basis the recreation's fit contract and the own-check harness consume (one basis for fitting and rendering logic). The Georgia typeface is not present in this seat (fontconfig finds only Georgian-language Noto fonts), so this leg prints **GEORGIA-UNVERIFIED** beside the standing **PIXEL-UNVERIFIED** (no browser binary in this seat).
Fit contract (deterministic, ordered): shrink the quote size in 1px steps down to the 20px floor until the quote block fits the quote zone; if it still does not fit at the floor, reject naming the card and the overflow in px. Speaker exactly 1 line; role at most 4 lines (contract term amended on this leg's measured evidence — see HIT H1); attribution block at most geom.attrH.
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
| card0.role | attribution, width 243.6 | 15 | 4 | 104.0 = attrH 104 | worst case across both widths — see H1 |
| card1.role / card2.role | attribution, width 243.6 | 15 | 2 | 65.0 | — |
| all speakers | attribution, width 243.6 | 20 | 1 | — | exactly 1 line at both widths ✓ |

Hierarchy (measured): quote ink 21.0 vs speaker ink 14.0 vs role ink 13.0 — a size hierarchy, not hue-only ✓.
Fit-contract outcomes per card: every settled card + the swap card fits at the configured 24px (no shrink engaged) at both widths; the shrink path and the reject path are exercised in the own-check suite (shrink 24→22 on a 40-word probe; reject at the 20px floor with +26px overflow on a 50-word probe at the earlier zone — re-verified in the suite against the final zone).

## HIT list — 1 HIT, cured pre-wave
- **H1 (cured):** on the shared DejaVu basis, the Schneier role wraps to **4 lines** at the 320px attribution width (243.6px), needing a 104.0px attribution block against the inherited 92px reservation (which was sized for the 3-line 360px worst case). Cure landed in the build: geom.attrH 92 → **104** (sized for the worst case across BOTH widths), the quote zone re-derives to 226px and every quote still fits with ≥67.6px spare, and the fit contract's role term is amended from "at most 3 lines" to "at most 4 lines with the block inside geom.attrH" (printed as deviation D-T91-1 in the build record — the alternative, shrinking the role type to 13px, would have spent the readability floor on the primary width to satisfy the narrow one). Final list after the cure: **EMPTY (PASS for this leg)**, with GEORGIA-UNVERIFIED + PIXEL-UNVERIFIED standing.
