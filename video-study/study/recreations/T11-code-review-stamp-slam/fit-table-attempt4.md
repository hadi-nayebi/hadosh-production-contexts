# T11 attempt 4 — measured-fit leg (guard-measured-fit) · pre-scoring, 2026-11-15

Target: final recreation.html, sha256 fcdc5bb1b5ff5da2287f91e295cfbbd70e20aeb7ffe54c64eb82d0770be9d1c1. Stage priced at 360px width / 300px minimum height. Measurement basis: the build's source-bound geometry model (own-checks-T11-attempt4.js fit model — line-box heights and monospace advance widths as the source computes them, wrapping and worst-case check set included). PIXEL-UNVERIFIED: no browser render route exists in this session, so these are modelled measurements, not rendered ink.

| Element | Container | Measured bounds (360px stage) | Container bounds | Margin (binding side) |
|---|---|---|---|---|
| PR number (#1111) | header line | 39.0px wide · 16.3px line box (13px type) | 344px inner width | shared header budget below |
| PR title (longest: "ship: rage-against-the-ml.mp4", 29ch) | header line | 226.2px wide · 16.3px line box | header remainder ≈241px after number + pill + gaps | ≈15px (ellipsis guards overflow) |
| Open pill (label now CONFIG labels.openPill, 10px) | header line | ≈52px wide · 13px line box | header line | inside header budget |
| Stats labels (11px, CONFIG labels) | stats line | line box 13.8px | 344px | — |
| Approvals digit columns (14px glyphs in 17px digit boxes ×3) | stats line | 51px wide · 17px box height | stats line height 17px (binding) | 0px — box IS the line height, total accounted |
| Lines-read value (14px) | stats line | line box 17.5px modelled, capped by stats line 17px digit box | stats line | fits (modelled) |
| Checks heading (13px, CONFIG labels.checksHeading) | checks panel | line box 16.3px + 5px margin | panel inner ≈128.5px wide | — |
| Check row single-line (12px) | checks panel | 18.4px row height | panel inner ≈128.5px | width ≈92px, margin ≈36px |
| Check row WRAPPED (12px, worst-case set) | checks panel | ink width 133.6px > 128.5px inner → wraps to 2 lines · 33.2px row height | panel inner ≈128.5px | wrap measured and height-accounted (see totals) |
| Status pill (11px) | checks panel | line box 14.3px + padding | panel inner | fits |
| Stamp text (CONFIG stampText, 34px) | stage overlay | ≈132px wide incl. padding+border at scale 1 · 42px line box | 344px stage width, centred at CONFIG left/top % | ≈106px each side at scale 1 (slam-peak scale is transient, priced by the motion lens) |
| Reviewer head glyph (7px mark from CONFIG marks, inside 9px head) | reviewers row | 9px head box | row height 26px min | decorative mark, not subject text |
| Arch glyphs (6.4px pattern characters) | arch block 36×28 | block ≈188.2px tall (28 rows × 6.72px) | main region height = block height (binding) | pattern texture, not subject text — excluded from the legibility floor by class |
| Arch crown profile (new this attempt) | arch block | row-2 displayed half-width 0.556 of half-frame; crown peakedness 0.228 | halfTop 0.72 | profile measured from the cell function, both states |

Vertical totals (modelled, own-checks fit model): single-line check state 281.5px ≤ 300px · wrapped check-row state 281.5px ≤ 300px (arch block binds the main region in both states).

Legibility floor (subject text, line-box basis): smallest subject line box = stats labels 13.8px and pill 14.3px — all ≥11px. PASS on this leg's basis.
Hierarchy: approvals digits (17px box) > stats labels (11px type) — measured ratio 1.55 in box height; title 13px vs number 13px equal by design (weight carries the hierarchy, printed here as the measured fact).

## HIT list
**0 HITs.** Every subject text element carries a measured row; the one wrapping element is measured at its wrapped state with its height accounted in both totals. Advisory carried to the wave: all bounds are modelled (PIXEL-UNVERIFIED) — rendered wrap/ink may differ.
