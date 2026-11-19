# T82 — measured-fit leg (guard-measured-fit) · fit-table

Build: recreation.html (final, sha256 in scores.md) · Stage: 360 px wide (geom.stageW), canvas internal 720 (dpr 2).
Method: geometry arithmetic from the build's own CONFIG geometry + Georgia glyph metrics (ink height ≈ 0.72 × fontPx for caps/digits; ink width from per-string advance estimates) — post-fit bounds computed from the rendered layout constants, not from a fitting formula's assertion. PIXEL-UNVERIFIED (no browser in this seat).

Subject text elements in this build: the HUD furniture only (the wall/amber cells are glyphs, not text; there are no labels or captions by fleet law).

| Element | Container | Measured ink bounds @360px | Container bounds | Margin (binding side) |
|---|---|---|---|---|
| HUD year line "2037 · A POSSIBLE TUESDAY" | stage top-left row, y 10–26 | ink ≈ 208 px wide × 11.5 px high (16 px Georgia) | 348 px usable row (x 12–360) | 140 px right |
| HUD clock "06:15" | stage top-left, y 24–60 | ink ≈ 99 px wide × 25.9 px high (36 px Georgia) | 348 px usable row | 249 px right |

- Legibility floor (~11 px ink): year line 11.5 px ✓ (cured pre-wave: hudYearPx raised 11 → 16 after the first fit pass showed ~7.9 px ink — a HIT cured before this final table) · clock 25.9 px ✓.
- Hierarchy: clock/year ink-height ratio 25.9 / 11.5 ≈ 2.25 — measured size hierarchy, not hue-only ✓ (matches the specimen's large-clock / small-yearline relation).

**HIT list: EMPTY (0 HITs) — PASS for this leg (advisory).**
