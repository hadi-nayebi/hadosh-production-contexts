# T124 — measured-fit leg (guard-measured-fit.md) · attempt 1

Instrument: node harness over recreation.html's own layoutModel/textWidthPx (Arial advance-width model, post-fit geometry at the 360 px stage). LOGIC level — PIXEL-UNVERIFIED (no browser binary in this seat).

| Element | Container | Measured ink (w × h, px) | Container bounds (px) | Binding margin |
|---|---|---|---|---|
| headline "You don't need to manually…" | stage headline line (360 wide) | 271.2 × 14.32 (20 px font, ink ratio 0.716) | 360 wide | 44.4 px per side |
| flip headline "Claude handles all of that" (chip padding incl.) | stage headline line | 285.5 × 14.32 | 360 wide | 37.2 px per side |
| card 1 text "Arrange the images" | card inner (card.w 250 − 2×padX 14 = 222) | 143.7 × 11.25 (15 px font, ink ratio 0.75) | 222 wide | 39.2 px per side |
| card 2 text "Create animations" | card inner | 139.3 × 11.25 | 222 wide | 41.4 px per side |
| card 3 text "Add anything on a timeline" | card inner | 202.1 × 11.25 | 222 wide | 9.9 px per side |
| swap card 1 text "Sync the audio clips" | card inner | 156.4 × 11.25 | 222 wide | 32.8 px per side |

Strike alignment (the leg's item-specific row, per RUN failure point "strike misaligned with text ink"):
- Strike endpoints derive from the card text's measured ink width in layoutModel: strikeFullW = inkW + 2 × overshootPx (3) — card 1: 149.7 px · card 2: 145.3 px · card 3: 208.1 px; strike left edge sits at card text x − 3 px (padX 14 − overshoot 3 from card edge: strikeX = 66 px stage-absolute for every card, textX = 69 px). The strike therefore starts 3 px before the first glyph and ends 3 px after the last glyph — the specimen's measured overshoot form (builder's frame census: the blue rule extends slightly past the text on both sides).
- Strike vertical placement is tied to the text metrics, not the card box: strike centre = line-box top + lineH (19.5 px) × yFracOfLine 0.54 − thickness/2; strikeY (stage-absolute) = 80.3 / 124.3 / 168.3 px for cards 1–3, i.e. the rule crosses the lowercase body at its x-height midline, matching the specimen frames (strike crosses "Arrange the images" through the x-height band, below the cap top).
- Strike thickness 3 px (CONFIG strike.thicknessPx) vs card text ink height 11.25 px — the rule reads as a drawn rule over the ink, not a band covering it.

Hierarchy: headline ink 14.32 px vs card ink 11.25 px — measured ratio 1.27:1 (size hierarchy measured, not hue-only; weight hierarchy 800 vs 700 rides with it).
Legibility floor (~11 px): card ink 11.25 px ≥ 11 — PASS, margin thin (0.25 px) and printed as a watch, same class as T102's body-ink watch. Headline ink 14.32 px clears comfortably.
List containment: listBottom = 186 px ≤ stage height 203 px (17 px spare); card right edge 305 px ≤ 360.

**HIT list: EMPTY** (thin card-ink margin carried as a named watch, not a hit — the floor is met by measurement).
