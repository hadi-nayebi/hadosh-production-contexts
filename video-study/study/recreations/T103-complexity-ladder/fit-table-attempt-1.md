# T103 — measured-fit leg (guard-measured-fit) · final build
Build: recreation.html sha256 16b9a7e3abbabc648b57dc5fb54ebb017982082e748ec82b61e57505aea9fc15 (final file; harness + purity re-run after the --acc fallback cure)
Method: text widths measured with PIL ImageFont (DejaVu Sans Bold / Oblique at exact CONFIG px sizes — DejaVu is wider than the CONFIG Arial stack, so widths are conservative upper bounds); ink height = ascender ink (0.716 em bold names, 0.72 em items) at the 360 px stage; contrast computed by WCAG relative-luminance formula from the CONFIG palette pair. Stage: 360 × 442 px (geom: rowTop 44 ×2 + rowH 118 ×3). Text column: x = geom.padX 84 → available width 276 px.

| Element | Container | Font | Measured ink (h × w) | Container bounds | Margin (binding side) |
|---|---|---|---|---|---|
| row[0].name "Easy" | card row 0 | bold 30 px | 21.5 × 78.2 px | 276 px wide | 197.8 px right |
| row[1].name "Intermediate" | card row 1 | bold 30 px | 21.5 × 220.3 px | 276 px wide | 55.7 px right |
| row[2].name "Difficult" | card row 2 | bold 30 px | 21.5 × 132.4 px | 276 px wide | 143.6 px right |
| row[0].items "Hard cut" / "Dissolve" | under name, row 0 | italic 16 px | 11.5 × 68.6 / 67.0 px (+bullet ≈10 px) | 276 px wide | ≥197 px right |
| row[1].items "Cut on action" / "Match cut" | under name, row 1 | italic 16 px | 11.5 × 107.0 / 79.2 px (+bullet) | 276 px wide | ≥159 px right |
| row[2].items "Dynamic zoom" / "Element morph" | under name, row 2 | italic 16 px | 11.5 × 119.3 / 123.6 px (+bullet) | 276 px wide | ≥142 px right |
| marker triangle | left of active name | geom.markerSize 22 px | 22 × 22 px at x=48 | name starts x=84 | 14 px gap to name ink |

Hierarchy (measured): name ink 21.5 px vs item ink 11.5 px → ratio 1.87 (size hierarchy real, not hue-only).
Legibility floor (~11 px ink): every subject text ≥ 11.5 px ✓.
Contrast (Owner Cure 1, computed): ink #ffffff on card #1e2a78 = 12.67:1 · inkDim #b9c2e8 on card = 7.21:1 · accent #f28c28 (bullets) on card = 5.16:1 — all ≥ 4.5:1 ✓. Swap marker #2fd4c4 on card = 6.84:1 ✓.
HIT list: EMPTY — PASS for this leg.
