# T128 — measured-fit leg (guard-measured-fit.md) · attempt 3

Instrument: node harness over recreation.html's own measureText/fitRows (the source's fit model; post-fit model measurement, LOGIC level — no browser binary in this seat; PIXEL-UNVERIFIED). Model: monospace stack ("Courier New", Courier, monospace) advance 0.60 em/glyph, cap-height ratio 0.565; serif advance classes caps 0.62 / other letters 0.52 / space 0.30 / punctuation 0.28, cap-height ratio 0.72. Rows are PROXY model measurements from the built source's own instrument (named stand-in metrics: the model's advance classes above), not rendered-pixel measurements.
Build bound: recreation.html sha256 `61771d823dfe0e624ac73773e4d379db1e6141c88823999ee851fe4df7c7d1b1`.
Wrap states: eyebrow and main lines carry `white-space:nowrap` + the fit assertions below, so wrap states are unreachable by construction; typed partial states are enumerated instead (A-C006-3).

| Element | Container | Measured ink (w × h, px) | Container bounds (px) | Binding margin |
|---|---|---|---|---|
| eyebrow "NOT JUST A MURDER." (18 glyphs, typed complete) | stage line (360 wide) | 270.00 × 11.30 (20 px monospace, tracking 3 px) | 360 wide | 45.0 px per side |
| eyebrow at 6 glyphs "NOT JU" | stage line | 90.00 × 11.30 | 360 wide | 135.0 px per side |
| eyebrow at 12 glyphs "NOT JUST A M" | stage line | 180.00 × 11.30 | 360 wide | 90.0 px per side |
| main line "A SPARK." (8 glyphs, typed complete) | stage line | 189.20 × 31.68 (44 px serif) | 360 wide | 85.4 px per side |
| main at 1 glyph "A" | stage line | 27.28 × 31.68 | 360 wide | 166.4 px per side |
| main at 4 glyphs "A SP" | stage line | 95.04 × 31.68 | 360 wide | 132.5 px per side |
| exhibit label "ARCHDUKE FRANZ FERDINAND" | exhibit card text zone (300 − 2×12 = 276) | 227.84 × 11.52 (16 px font) | 276 wide | 24.1 px per side |
| exhibit sub "28 JUNE 1914" | exhibit card text zone (276) | 96.10 × 11.16 (15.5 px font) | 276 wide | 90.0 px per side |
| map label "AUSTRO-HUNGARIAN EMPIRE" | stage line | 263.60 × 11.52 (16 px font; 217.60 advances + 23 × 2 px tracking, tracking now included in the model row) | 360 wide | 48.2 px per side |
| transformed exhibit at exit end | stage 360 × 203 | terminal bounds x [−176.1, −23.9], y [−93.1, −23.9] (rotation-inclusive, scale 0.5) | stage rect | intersection 0.0 px² (clears the stage) |

Hierarchy: main ink 31.68 px vs eyebrow ink 11.30 px — model ratio 2.80:1.
Legibility floor (~11 px ink height at 360 px stage): eyebrow 11.30 ✓ (margin 0.30) · exhibit label 11.52 ✓ · exhibit sub 11.16 ✓ (margin 0.16 — standing watch) · map label 11.52 ✓ · main 31.68 ✓. At 390 px stage width the model scales proportionally (stage-relative model); no separate 390 table is claimed.

## Map-label contrast recheck (post-Stage-F, final type metrics, local vignette background)
Label ink composited at its gated independent opacity over the LOCAL background under the label (field darkened by the temporal term, then by the vignette factor at the label's position, final label weight/line-height in force), sampled throughout the reading window: 5000 ms 14.41:1 · 6000 14.72 · 7000 15.02 · 8000 15.31 · 9000 15.59 · 10000–13000 15.65 · minimum 14.41:1 at 5000 ms. Floor 4.5:1 holds at every sample.

**HIT list: EMPTY** (standing watches, not hits: eyebrow ink margin 0.30 px and exhibit-sub ink margin 0.16 px over the ~11 px floor — both floors met by the model).
