# T128 — measured-fit leg (guard-measured-fit.md) · attempt 2

Instrument: node harness over recreation.html's own measureText/fitRows on the RECOMPUTED ink model (plan C3.3): monospace stack ("Courier New", Courier, monospace) advance 0.60 em/glyph, cap-height ratio 0.565 (Courier New cap height ≈ 0.565 em — the selected stack's own factor, printed per the plan; attempt 1's eyebrow model — Georgia-class 0.72 on the old stack — is NOT inherited); serif advance classes caps 0.62 / other letters 0.52 / space 0.30 / punctuation 0.28, cap-height ratio 0.72. LOGIC level — every rendered metric is RENDERED-UNVERIFIED (no browser binary in this seat; PIXEL-UNVERIFIED).
Build bound: recreation.html sha256 `d6b9e473b27344c288ece36c95edf46fecea961f4be44cb61d35a0542a75915f`.
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
| map label "AUSTRO-HUNGARIAN EMPIRE" | stage line | 217.60 × 11.52 (16 px font; 263.60 incl. 2 px tracking) | 360 wide | 71.2 px per side (48.2 with tracking) |
| swap eyebrow "NOT JUST A WAR." | swap stage line (400 wide) | 225.00 × 11.30 | 400 wide | 87.5 px per side |
| swap main "ONE SMALL SPARK." (16 glyphs) | swap stage line (400) | 393.36 × 31.68 | 400 wide | 3.3 px per side |
| swap exhibit label "ARCHDUKE FERDINAND" | exhibit text zone (276) | 173.44 × 11.52 | 276 wide | 51.3 px per side |
| swap exhibit sub "SARAJEVO 1914" | exhibit text zone (276) | 113.77 × 11.16 | 276 wide | 81.1 px per side |

Hierarchy (RECOMPUTED, post-Stage-D re-run): main ink 31.68 px vs eyebrow ink 11.30 px — model ratio **2.80:1** (31.68 / 11.30 = 2.803). Attempt 1's 2.75:1 rested on the old eyebrow stack's metrics and is not re-printed as a claim.
Legibility floor (~11 px): eyebrow 11.30 ✓ (margin 0.30 px — printed watch) · exhibit label 11.52 ✓ · exhibit sub 11.16 ✓ (margin 0.16 px — attempt-1 watch re-measured, unchanged) · map label 11.52 ✓ · main 31.68 ✓.
Strike geometry (recomputed model): strike width = full eyebrow ink width 270.00 px; strike top 89 px (line-box centre 90 px = eyebrow ink mid 90.0 px on the recomputed model); thickness 2 px (CONFIG type.strikePx).

**HIT list: EMPTY** (two named watches carried, not hits: eyebrow ink margin 0.30 px and exhibit-sub ink margin 0.16 px over the ~11 px floor — both floors met by measurement).
