# T11 attempt 3 — measured-fit leg (guard-measured-fit) · pre-scoring, 2026-11-15

Target: final recreation.html, sha256 8b80ebfea4908445d851a5213164fbd45a7aba92187114ae83378675f44c481e. Stage priced at 360px width / 300px minimum height. Measurement basis: the build's source-bound geometry model (own-checks-T11.js fit model — line-box heights and monospace advance widths as the source computes them, wrapping and worst-case check set included). PIXEL-UNVERIFIED: no browser render route exists in this session, so these are modelled measurements, not rendered ink.

| Element | Container | Measured bounds (360px stage) | Container bounds | Margin (binding side) |
|---|---|---|---|---|
| PR number (#1111) | header line | 39.0px wide · 16.3px line box (13px type) | 344px inner width | shared header budget below |
| PR title (longest: "ship: rage-against-the-ml.mp4", 29ch) | header line | 226.2px wide · 16.3px line box | header remainder ≈241px after number + pill + gaps | ≈15px (ellipsis guards overflow) |
| Open pill ("Open", 10px) | header line | ≈52px wide · 13px line box | header line | inside header budget |
| Stats labels (11px) | stats line | line box 13.8px | 344px | — |
| Approvals digit columns (14px glyphs in 17px digit boxes ×3) | stats line | 51px wide · 17px box height | stats line height 17px (binding) | 0px — box IS the line height, total accounted |
| Lines-read value (14px) | stats line | line box 17.5px modelled, capped by stats line 17px digit box | stats line | fits (b height ≤ digit box +0.5px tolerance, modelled) |
| Checks heading (13px) | checks panel | line box 16.3px + 5px margin | panel inner ≈128.5px wide | — |
| Check row single-line (12px, e.g. "✓ build / pass") | checks panel | 18.4px row height | panel inner ≈128.5px | width ≈92px, margin ≈36px |
| Check row WRAPPED (12px, "✕ prod / prod is down", worst-case set) | checks panel | ink width 133.6px > 128.5px inner → wraps to 2 lines · 33.2px row height | panel inner ≈128.5px | wrap measured and height-accounted (see totals) |
| Status pill (11px) | checks panel | line box 14.3px + padding | panel inner | fits |
| Stamp text ("LGTM", 34px) | stage overlay | ≈132px wide incl. padding+border · 42px line box | 344px stage width, centred at CONFIG left/top % | ≈106px each side at scale 1 (slam start scale is transient, priced by the motion lens) |
| Reviewer head glyph (7px ✓ inside 9px head) | reviewers row | 9px head box | row height 26px min | decorative mark, not subject text |
| Arch glyphs (6.4px pattern characters) | arch block 36×28 | block ≈188px tall (28 rows × 6.72px) | main region height = block height (binding) | pattern texture, not subject text — excluded from the legibility floor by class |

Vertical totals (modelled): single-line check state 281.4px ≤ 300px · wrapped check-row state 281.4px ≤ 300px (arch block, not the panel, binds the main region in both states; the wrapped panel height ≈131px stays under the arch block).

Legibility floor (subject text, line-box basis): smallest subject line box = stats labels 13.8px and pill 14.3px — all ≥11px. PASS on this leg's basis.
Hierarchy: approvals digits (17px box) > stats labels (11px type) — measured ratio 1.55 in box height; title 13px vs number 13px equal by design (weight carries the hierarchy, printed here as the measured fact).

## HIT list
**0 HITs.** Every subject text element carries a measured row; the one wrapping element is measured at its wrapped state with its height accounted in both totals. Advisory note carried to the wave: all bounds are modelled (PIXEL-UNVERIFIED) — rendered wrapping/ink remains for the readability lens to price.
