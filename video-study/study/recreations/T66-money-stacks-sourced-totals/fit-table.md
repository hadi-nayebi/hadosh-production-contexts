# T66 — measured-fit leg (guard-measured-fit) · attempt 1
Build bound: recreation.html sha256 a30b374eb21468a89c058f7de6a47b752f7f7a4dea7f22960b8dcaa271f3a626 (final build, after the cures below).
Instrument: deterministic geometry measurement of the build's own layout model at the 360 px stage — text ink width = sum of Arial advance widths for the exact CONFIG strings at the configured font size (bold × 1.02); ink height = cap-height factor 0.716 × font size for caps/digit strings. Post-fit values from the node harness run on the final build's real inline script + CONFIG. PIXEL-UNVERIFIED (no exercisable browser in this seat) — the comparison page is the render surface.

## Measured rows (one per subject text element)
| Element | Text (from CONFIG) | Font | Measured ink (w × h) | Container | Margin (binding side) | Floor ~11 px |
|---|---|---|---|---|---|---|
| tag[0].sponsor | "SENATE MAJORITY PAC" | 16 px | 186.7 × 11.5 px | tag inner width 202 px (tagW 248 − pads 38/8), tagH 58 | +15.3 px width | OK (11.5) |
| tag[0].total | "$67 million" | 22 px bold | 112.3 × 15.8 px | tag inner width 202 px | +89.7 px width | OK (15.8) |
| tag[1].sponsor | "SENATE MAJORITY PAC" | 16 px | 186.7 × 11.5 px | tag inner width 202 px | +15.3 px width | OK (11.5) |
| tag[1].total | "$65 million" | 22 px bold | 112.3 × 15.8 px | tag inner width 202 px | +89.7 px width | OK (15.8) |
| counter.label (CONFIG-gated, measured in the enabled configuration) | "NEW VOTERS REGISTERED" | 16 px | 216.0 × 11.5 px | counter inner width 228 px (counterW 244 − 16), counterH 60 | +12.0 px width | OK (11.5) |
| counter.total (CONFIG-gated, enabled configuration) | "100,000" | 18 px bold | 66.4 × 12.9 px | counter inner width 228 px | +161.6 px width | OK (12.9) |
| swap-proof row: tag[0].sponsor under the §2b swap | "TEST PAC" | 16 px | 78.2 × 11.5 px | tag inner width 202 px | +123.8 px width | OK (11.5) |

Hierarchy (measured): total ink height 15.8 px vs sponsor 11.5 px → ratio 1.37 (size hierarchy is measured, not hue-only). Vertical fit: sponsor top 8 + 11.5 ink ≤ total top 28; total 28 + 15.8 = 43.8 ≤ tagH 58 ✓. Counter: label top 7 + 11.5, total ends 28 + 12.9 = 40.9 ≤ counterH 60 ✓.

## HIT list
- PRE-CURE HIT (cured before scoring, leg re-run): sponsor ink 186.7 px vs tag inner width 186 px (tagW 240, pads 42/12) — margin −0.7 px (overflow). CURE: tagW 240→248, tagPadLeftPx 42→38, tagPadRightPx 12→8 → inner 202 px, margin +15.3 px.
- PRE-CURE HIT (cured before scoring, leg re-run): counter.label at 15 px → ink height 10.7 px, under the ~11 px floor; and at 16 px its ink width 216.0 px left 0.0 px margin in counterW 232. CURE: counterLabelPx 15→16, counterW 232→244 → ink 11.5 px, margin +12.0 px.
- FINAL BUILD HIT LIST: **EMPTY — 0 hits.** All rows measured post-fit on the final build; no formula-claimed fit stands (widths are advance-table measurements of the exact strings, heights from the cap-height factor, both printed above).
