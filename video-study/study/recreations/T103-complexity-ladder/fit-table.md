# T103 — measured-fit leg (guard-measured-fit) · attempt 2 (practice C012)
Build: recreation.html sha256 04a53914f71e55eb8a777d6abddc72c2a54cea8f195f9607a2b5d88f5260e38a
Method: text widths measured with PIL ImageFont (DejaVu Sans Bold at 30 px for names; DejaVu Sans at 17 px for items — no Sans Oblique face is installed in this seat, so item widths are regular-face measurements at the exact CONFIG size, cross-checked against attempt 1's oblique measurements scaled 17/16: widest item agrees within 1 px). DejaVu is wider than the CONFIG Arial stack, so widths are conservative upper bounds. Ink height = ascender ink (0.716 em names, 0.72 em items) at the 360 px stage. Contrast computed by the WCAG relative-luminance formula from the CONFIG palette pairs, recomputed by the own-check suite from the CONFIG values (not from a printed constant). Stage: 360 × 406 px (derived: rowTop 44 + cumulative derived row heights 106 ×3 + rowTop 44). Text column: x = geom.padX 84 → available width 276 px. Combined interaction check (derived heights × assembly offset × marker geometry × item size × inactive contrast) is asserted in the own-check suite at the 360 px stage and modelled at 390 px (stage width is a CONFIG value; at stage.width 390 the text column grows to 306 px and every margin below widens).

| Element | Container | Font | Measured ink (h × w) | Container bounds | Margin (binding side) |
|---|---|---|---|---|---|
| row[0].name "Easy" | derived row 0 (106 px) | bold 30 px (nameWeight 700) | 21.5 × 78.2 px | 276 px wide | 197.8 px right |
| row[1].name "Intermediate" | derived row 1 (106 px) | bold 30 px | 21.5 × 220.3 px | 276 px wide | 55.7 px right |
| row[2].name "Difficult" | derived row 2 (106 px) | bold 30 px | 21.5 × 132.4 px | 276 px wide | 143.6 px right |
| row[0].items "Hard cut" / "Dissolve" | under name, derived row 0 | italic 17 px | 12.2 × 72.9 / 71.2 px (+bullet 15.4 px) | 276 px wide | ≥188 px right |
| row[1].items "Cut on action" / "Match cut" | under name, derived row 1 | italic 17 px | 12.2 × 113.7 / 84.1 px (+bullet) | 276 px wide | ≥147 px right |
| row[2].items "Dynamic zoom" / "Element morph" | under name, derived row 2 | italic 17 px | 12.2 × 126.7 / 131.3 px (+bullet) | 276 px wide | ≥129 px right |
| marker triangle | left of marked row's name | geom.markerSize 22 px | 22 × 22 px at x=48 | name starts x=84 | 14 px gap to name ink |

Vertical fit (derived heights): each row's content height = nameLine 36 + nameItemGap 6 + 2 × (itemLine 21 + itemGap 4) = 92 px ≤ derived row height 106 px (rowPad 14 slack) — no inter-row overlap at 0/1/2/4-item contents (suite-asserted for 0/1/4). Assembly offset (+56 px max at settle 0) shifts rows down inside the stage: lowest row bottom at settle 0 = 256 + 56 + 92 = 404 ≤ 406 stage height — contained, margin 2 px (binding at the assembly start instant only; the card is clipped by the stage's overflow, never overlapping another row, since all rows shift together).
Hierarchy (measured): name ink 21.5 px vs item ink 12.2 px → ratio 1.76 (size hierarchy real, not hue-only).
Legibility floor (~11 px ink): every subject text ≥ 12.2 px ✓.
Contrast (computed from CONFIG pairs): ink #ffffff on card #1e2a78 = 12.67:1 · inkDim #9aa6d8 on card = 5.32:1 · accent #f28c28 (bullets/marker) on card = 5.16:1 — all ≥ 4.5:1 ✓.
Oversized-token policy (bounded behaviour): names/items are single-line by construction; a single token wider than the 276 px column is clipped at the stage edge by the stage's overflow rule — it cannot wrap into or overlap another row (rows are vertically separated by derived heights). This is the defined fitting policy for oversized tokens; validation does not reject them.
Wrap states: none reachable — every text element is nowrap single-line by construction; the suite asserts single-line fit at 360 px and the model at 390 px rather than modelling wrap states that cannot occur.
PIXEL-UNVERIFIED: all rows above are source-model measurements; no rendered phone view was available in this seat.
HIT list: EMPTY — PASS for this leg.
