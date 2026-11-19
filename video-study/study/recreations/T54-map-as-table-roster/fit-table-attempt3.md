# T54 attempt 3 — measured-fit table (guard-measured-fit leg, pre-scoring, on the NEW source)
Scope: recreation.html sha256 `1ee27ef80cd62382bfdb561e0446034e416e2191e3dd1664fa0bdb9506e629c2`.
Method: source-bound geometry arithmetic at the 360 px stage width. Ink height = font size × camera scale × 0.716 (Arial bold cap-height factor). Widths measured from the CONFIG glyph-metrics table (per-letter thousandths), the same table the renderer consumes for plate/tag/initials widths. PIXEL-UNVERIFIED: no exercisable Chrome in this seat; rows are measured from the constants the renderer consumes, verified by the node harness (own-checks 50/50).

| Element | Container | Font (units) | Displayed scale(s) | Measured ink height @360px | Measured width vs container | Margin (binding side) |
|---|---|---|---|---|---|---|
| Chip initials (55) | disc Ø18 units, inner Ø14 | 12 | 1.0 (full) · 1.6 (opening) · 1.5–2.0 (waves) | 8.6 px (full) · 13.8 px (opening) · ≥12.9 px (waves) | natural ≤20.7 units (worst pair); displayed clamped to ≤14 via textLength | 0 units/side after clamp (clamp width = inner diameter) |
| Name plates (55, shown per beat) | plate rect, width derived per label from the glyph table | 15 | opening 1.6 · waves 1.5–2.0 · full (latest + final index) 1.0 | 17.2 px (opening) · ≥16.1 px (waves) · 10.7 px (full) | widest plate 168.4 units total; glyph-table text 158.4 vs inner 158.4 | 5 units/side (padding by construction) |
| Elect tags (10) | tag rect 36.9×18 units | 13 | 1.0 (full) · 1.5–2.0 (waves) | 9.3 px (full) · ≥14.0 px (waves) | glyph-table text 28.9 vs inner 28.9 | 4 units/side (padding by construction) |
| Full-roster plate "{n} ON THE MAP" | HTML plate, auto width + CONFIG padding | 16 px | 1.0 (HTML overlay) | 11.5 px | text ≈150 px vs stage 360 px | ≈105 px/side (centred); reserve derived in code = 38 units (16 × 1.2 line-height + 2×5 padY + 8 bottom) |

Hierarchy check: no size hierarchy is claimed between initials, plates, and tags (distinct element classes); plate prominence is contrast/position, not a measured size ratio — no hierarchy row is owed and none is asserted.

## HIT list
- **HIT 1 (initials at full view):** initials ink 8.6 px at scale 1.0 is below the ~11 px floor. Disposition: carried into the scoring wave as a known row — initials are not the identity channel at full view; identity at full view is carried by name plates (latest-chip plate + the final index groups), and initials measure ≥12.9 px at every regional/wave scale where discs are read individually. Disc diameter was reduced this attempt (18 vs 26 units) toward the specimen's relative chip size, which is the cause of this row.
- **HIT 2 (name plates at full view, borderline):** plate ink 10.7 px at scale 1.0, the same borderline row as the prior attempt's fit table. Disposition: carried — the full-view plates are the latest-chip marker and the final index; the same identities measure ≥16.1 px in their pass waves.
- **HIT 3 (Elect tags at full view):** tag ink 9.3 px at scale 1.0 below the floor. Disposition: carried — tags measure ≥14.0 px at every wave scale; the tag size was reduced this attempt so a collision-free tag position exists for every elect chip (0 fallbacks, verified).
- All other rows PASS the leg's floor and fit tests.
**Leg result: 3 HITs, all carried with dispositions above.**
