# T128 — measured-fit leg (guard-measured-fit.md) · attempt 1

Instrument: node harness over recreation.html's own measureText/fitRows (Georgia advance model, post-fit geometry at the 360 px stage). LOGIC level — PIXEL-UNVERIFIED (no browser binary in this seat).
Build bound: recreation.html sha256 `5ab7c6ceb8f0d4891731b7c801b0860916a41018514b705811a958922465e398`.

| Element | Container | Measured ink (w × h, px) | Container bounds (px) | Binding margin |
|---|---|---|---|---|
| eyebrow "NOT JUST A MURDER…" | stage line (360 wide) | 219.76 × 11.52 (16 px font, cap ratio 0.72, tracking 3 px) | 360 wide | 70.1 px per side |
| main line "A SPARK." | stage line (360 wide) | 198.56 × 31.68 (44 px font) | 360 wide | 80.7 px per side |
| exhibit label "ARCHDUKE FRANZ FERDINAND" | exhibit card text zone (wPx 300 − 2×pad 12 = 276) | 227.84 × 11.52 (16 px font) | 276 wide | 24.1 px per side |
| exhibit sub "28 JUNE 1914" | exhibit card text zone (276) | 96.10 × 11.16 (15.5 px font) | 276 wide | 90.0 px per side |
| swap main line "ONE SPARK." | stage line (360 wide) | 253.12 × 31.68 | 360 wide | 53.4 px per side |

Hierarchy: main ink 31.68 px vs eyebrow ink 11.52 px — measured ratio 2.75:1 (size hierarchy measured, not hue-only).
Legibility floor (~11 px): eyebrow 11.52 ✓ · exhibit label 11.52 ✓ · exhibit sub 11.16 ✓ (margin 0.16 px — printed watch) · main 31.68 ✓.
Pre-cure note: eyebrow (13 px font → 9.36 px ink) and exhibit label/sub (9.00 / 7.92 px ink) were under the floor in the first build pass; cured pre-wave by raising the CONFIG type sizes (eyebrowPx 16 · labelPx 16 · subPx 15.5) and widening the exhibit card (wPx 300).

**HIT list: EMPTY** (exhibit-sub ink margin carried as a named watch, not a hit — the floor is met by measurement).
