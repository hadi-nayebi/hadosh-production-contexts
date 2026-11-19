# T123 — measured-fit leg (guard-measured-fit.md) · attempt 2

Instrument: node harness over the NEW recreation.html's own layoutModel/textWidthPx (Arial advance-width model, post-fit geometry at the 360 px stage). Ink height = fontPx × 0.716 (cap/ascender ratio — every subject line carries caps or ascenders). LOGIC level — PIXEL-UNVERIFIED (no browser binary in this seat). Bound source SHA-256: 3928315188461b72ef8103012d699064d36711f74da445c68246546e392b197a.

## Default configuration (two steps)

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

Vertical fit (measured from CONFIG geometry, wrapped states enumerated): tile content stack — step 1: padTop 9 + numeral 24×1.15 (27.6) + gap 5 + title 16×1.25 (20.0) + gap 3 + sub 2 lines × 16×1.25 (40.0) = 104.6 ≤ tileH 112 ✓ · step 2: 1 line (20.0) = 84.6 ≤ 112 ✓. Tile slots (computed layout): solo tile 01 centred at x=101; pair slots x=16 / 186; row total 328 ≤ 360 ✓. Tile bottom 178 ≤ stage 203 ✓. Headline zone (top 12 + 18×1.15 line ≈ 20.7) clears tileY 66 ✓.
Hierarchy: numeral ink 17.18 vs title/sub ink 11.46 — measured ratio 1.50:1; headline ink 12.89 vs tile title 11.46 — ratio 1.12:1 (headline also carries weight + operative color/chip).
Legibility floor (~11 px): smallest subject ink = title/sub 11.46 px ≥ 11 — PASS, margin thin (0.46 px), carried as the standing watch; the settled-state inspection at native 360 px width passes (clean two-line wrap of "link in the description", all wrapped states inside the tile), so the conditional size raise does not fire this attempt.

## Demonstrated three-step configuration (override: tileW 104 · tileGap 8 · tileH 128 · shorter step-3 texts · step 1 operative span in chip style)

| Element | Container | Measured ink (w × h, px) | Container bounds (px) | Binding margin |
|---|---|---|---|---|
| headline 3 "Then, review the result" | stage top line | 213.2 × 12.89 | 360 wide | 73.4 px per side |
| tile title "Download" / "Add it" / "Review" | tile inner (86 wide) | 73.3 / 51.5 / 55.6 × 11.46 | 86 wide | 6.4 / 17.3 / 15.2 px per side |
| tile sub "linked" / "below" (step 1, 2 lines) | tile inner | 49.9 / 41.6 × 11.46 | 86 wide | 18.1 / 22.2 px per side |
| tile sub "to Claude" / "check it" | tile inner | 73.6 / 62.7 × 11.46 | 86 wide | 6.2 / 11.7 px per side |

Row total 3×104 + 2×8 = 328 ≤ 360 ✓ · slots x=16 / 128 / 240 · tile bottom 66+128=194 ≤ 203 ✓ · vertical stacks 104.6 / 84.6 / 84.6 ≤ tileH 128 ✓ · validation accepts the configuration (no errors).

**HIT list: EMPTY** (thin title/sub ink margin carried as a named watch, not a hit — the floor is met by measurement in both configurations).
