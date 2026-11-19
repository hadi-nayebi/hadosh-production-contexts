# fit-table — T122 attempt 2 (guard-measured-fit, pre-wave, final build SHA fafb1e68a866dc4497dbd09c3ecc36b263ab13e7bc6faf9cc658cea4ba52d03c)
Method: logic-level geometry at 360px stage (PIXEL-UNVERIFIED). Ink widths use the source's own estimator (estWidth: caps .68, lower .55, space .32, apostrophe .30, arrow .90 × fontPx) — conservative vs attempt-1 Arial table.
Checklist offsets [0,600,1200]/warnAt 1800 are retained construction defaults; source fidelity UNVERIFIED (plan-review finding 3).

| element | container | fontPx | ink w | inner/container w | binding margin |
|---|---|---|---|---|---|
| headline b1 "I'll show you step by step" | 324 | 20 | 260.6 | 324 | 63.4 |
| headline b2 "Follow these exact steps" | 324 | 20 | 252.8 | 324 | 71.2 |
| headline b3 "Or the quality won't match" | 324 | 20 | 265.2 | 324 | 58.8 |
| headline b4 "Don't skip any part" | 324 | 20 | 192.8 | 324 | 131.2 |
| insert label, 2-line wrap state | card 250×80 pad10 | 13 | lines 189.3 / 106.1 | 230 inner | 40.7 |
| insert label, 3-line wrap state (enumerated) | card 250×80 pad10 | 13 | height 66.8 (3×13×1.2+20) | 80 high | 13.2 vertical |
| insert label, 2-line height | card 250×80 | 13 | height 51.2 | 80 high | 28.8 vertical |
| checklist rows "✓  Step N" | row 210×24 | 12 | 52.7 | 190 inner | 137.3 |
| warning "Skip a step → lower quality results" | warnW 280 | 12 | 220.2 | 264 inner | 43.8 |

Cures priced: insert margin 5 → 40.7 (C7, font 11→13 + card h 62→80, BOTH wrap states inside); warning margin 9 → 43.8 (C8, warnW 280 decoupled from check.w 210).
Stack check: support top 86 + checklist stack (3×24 rows + 3×6 gaps + warning 24.4) = bottom 200.4 of 203 stage — no clipping, margin 2.6.
HIT list: EMPTY (0 HITs).
