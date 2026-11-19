# T102 — measured-fit leg (guard-measured-fit.md) · attempt 1

Instrument: node harness over recreation.html's own layoutModel/textWidthPx (Arial advance-width model, post-fit geometry at the 360 px stage). LOGIC level — PIXEL-UNVERIFIED (no browser binary in this seat).

| Element | Container | Measured ink (w × h, px) | Container bounds (px) | Binding margin |
|---|---|---|---|---|
| title "TRANSITIONS" | card text zone (cardW 281) | 219.1 × 19.33 (27 px font, cap ratio 0.716) | 281 wide | 31.0 px per side |
| body line 1 "Animated changes between two scenes" | body block (bodyMaxW 264.1) | 260.9 × 11.25 (15 px font, ink ratio 0.75) | 264.1 wide | 1.6 px per side |
| body line 2 "to provide visual continuity" | body block (bodyMaxW 264.1) | 207.5 × 11.25 | 264.1 wide | 28.3 px per side |
| swap title "OPENINGS" | card text zone | 159.2 × 19.33 | 281 wide | 60.9 px per side |
| swap body line 1 "A designed first frame that teaches" | body block | ≤264.1 × 11.25 (wrap model) | 264.1 wide | ≥0 |
| swap body line 2 "the eye where to look" | body block | ≤264.1 × 11.25 (wrap model) | 264.1 wide | ≥0 |

Hierarchy: title ink 19.33 px vs body ink 11.25 px — measured ratio 1.72:1 (size hierarchy measured, not hue-only).
Legibility floor (~11 px): body ink 11.25 px ≥ 11 — PASS, margin thin (0.25 px) and printed as such.
Contrast (Cure 1, measured by the harness's worstCaseContrast over all gradient stops + interpolated midpoints, ink over the CONFIG textBack composite): default worst case **6.38:1** (over the pure cyan stop, which the text footprint never crosses in the specimen) · swap (amber stop) worst case **7.31:1** · both ≥ 4.5:1.

**HIT list: EMPTY** (thin body-ink margin carried as a named watch, not a hit — the floor is met by measurement).
