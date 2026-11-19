# T54 attempt 2 — measured-fit table (guard-measured-fit leg, pre-scoring)
Method: source-bound geometry arithmetic at the 360 px stage width. Ink height = font size × camera scale × 0.716 (Arial bold cap-height factor). Widths measured from the CONFIG glyph-width table (per-letter thousandths), not from the fitting formula's own factor, wherever a table exists. PIXEL-UNVERIFIED: no exercisable Chrome in this seat; rows are measured from the same constants the renderer consumes, verified by the node harness.

| Element | Container | Font (units) | Displayed scale(s) | Measured ink height @360px | Measured width vs container | Margin (binding side) |
|---|---|---|---|---|---|---|
| Chip initials (55) | disc Ø26 units, inner Ø22 | 16 | 1.0 (full) · 1.095–2.0 (regions) | 11.5 px (full) · ≥12.5 px (regions) | natural ≤27.6 units (worst pair WO); displayed clamped to ≤20 via textLength | ≥1 unit/side after clamp; ≥2 units for 53 of 55 unclamped |
| Name plates (55, shown per state) | plate rect, width derived per label | 15 | opening 1.9 · west 1.095 · central 1.368 · midwest 1.815 · south 2.0 · northeast 1.5 · full (latest only) 1.0 | 20.4 · 11.8 · 14.7 · 19.5 · 21.5 · 16.1 px regionally; 10.7 px for the single latest-chip plate at full view | widest plate 169.6 units total; glyph-table text ≈157.5 vs inner 159.6 | ≈1 unit (longest plate); ≥5 units all others (padding by construction) |
| Elect tags (10) | tag rect 46.4×22 units | 16 | 1.0 (full) · ≥1.095 (regions) | 11.5 px (full) · ≥12.5 px (regions) | glyph-table text 36.5 vs inner 38.4 | ≈1.9 units |
| Full-roster plate "{n} ON THE MAP" | HTML plate, auto width + CONFIG padding | 16 px | 1.0 (HTML overlay) | 11.5 px | text ≈150 px vs stage 360 px | ≈105 px/side (centred) |

Hierarchy check: no size hierarchy is claimed between initials, plates, and tags (distinct element classes); plate prominence is contrast/position, not a measured size ratio — no hierarchy row is owed and none is asserted.

## HIT list
- **HIT (borderline, 1):** the single latest-chip name plate displayed during full-view holds measures ink 10.7 px against the ~11 px floor. Disposition: carried into the scoring wave as a known borderline — the same identity is re-exposed at ≥11.8 px ink in its roster-pass region, and the full-view plate is a transient featured marker, not the roster's identity channel. Font 15 is load-bearing for plate packing inside the opening window (see build record §3 plate checks).
- All other rows PASS the leg's floor and fit tests.
