# T123 — measured-fit leg (guard-measured-fit.md) · attempt 1

Instrument: node harness over recreation.html's own layoutModel/textWidthPx (Arial advance-width model, post-fit geometry at the 360 px stage). Ink height = fontPx × 0.716 (cap/ascender ratio — every subject line carries caps or ascenders). LOGIC level — PIXEL-UNVERIFIED (no browser binary in this seat).

| Element | Container | Measured ink (w × h, px) | Container bounds (px) | Binding margin |
|---|---|---|---|---|
| headline 1 "First, download the free plugin" | stage top line (360 wide) | 288.0 × 12.89 (18 px font) | 360 wide | 36.0 px per side |
| headline 2 "Ask Claude to install it" (chip span incl. CONFIG chip padding) | stage top line | 225.8 × 12.89 (+ 2×6 px chip pad on the chip span) | 360 wide | 67.1 px per side |
| tile numeral "01" / "02" | tile inner (140 wide) | 28.3 × 17.18 (24 px font) | 140 wide | 55.9 px per side |
| tile title "Download" | tile inner | 73.3 × 11.46 (16 px font) | 140 wide | 33.4 px per side |
| tile title "Add it" | tile inner | 51.5 × 11.46 | 140 wide | 44.2 px per side |
| tile sub line 1 "link in the" | tile inner | 83.8 × 11.46 (16 px font) | 140 wide | 28.1 px per side |
| tile sub line 2 "description" | tile inner | 91.5 × 11.46 | 140 wide | 24.2 px per side |
| tile sub "to Claude" | tile inner | 73.6 × 11.46 | 140 wide | 33.2 px per side |
| swap title "Prepare" | tile inner | 64.4 × 11.46 | 140 wide | 37.8 px per side |

Vertical fit (measured from CONFIG geometry): tile content stack = padTop 9 + numeral 24×1.15 (27.6) + gap 5 + title 16×1.25 (20.0) + gap 3 + sub — step 1: 2 lines × 16×1.25 (40.0) = 104.6 ≤ tileH 112 ✓ · step 2: 1 line (20.0) = 84.6 ≤ 112 ✓. Tile row total width 328 ≤ 360 ✓ (16 px per side). Tile bottom 178 ≤ stage 203 ✓. Headline zone (top 12 + ~22 px line) clears tileY 66 ✓.
Hierarchy: numeral ink 17.18 vs title/sub ink 11.46 — measured ratio 1.50:1; headline ink 12.89 vs tile title 11.46 — ratio 1.12:1 (headline also carries weight + operative color/chip; the size step is small and printed here, not hidden).
Legibility floor (~11 px): smallest subject ink = title/sub 11.46 px ≥ 11 — PASS, margin thin (0.46 px) and printed as a watch (this family's named risk: numeral + tile text legibility at phone size; the numeral itself is 17.18 px, comfortably over).

**HIT list: EMPTY** (thin title/sub ink margin carried as a named watch, not a hit — the floor is met by measurement).
