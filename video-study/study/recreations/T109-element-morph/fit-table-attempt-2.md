# T109 — guard-measured-fit output, attempt 2 (practice Cycle 020 Wave 19, pre-scoring leg)

Method: font-metric geometry measurement (Arial advance estimates + cap-height factor 0.716, the attempt-1 fit table's model) at the 360 px stage, on attempt 2's NEW geometry. Unit basis = render basis (A-C012-1): every measurement is in CSS px resolved against the #stage box (360 × 224) — the same box the CSS resolves against. Displayed state asserted (A-C004-2), including neighbouring-element overlap (the attempt-1 leg's MISS class, now owned). PIXEL-UNVERIFIED (no render route in this seat; logic-level model only).

## Text fit

| Element | Container | Ink width | Container width | Margin | Ink height | Floor ~11 px |
|---|---|---|---|---|---|---|
| sceneA.title "Motion Design Training" @16 px | search bar 200 px (inner 192 px after CONFIG pad) | ≈176 px | 192 px | ≈16 px | **≈11.5 px** | ✓ |
| swap title "Harness Design Basics" @16 px | search bar 200 px (inner 192 px) | ≈169 px | 192 px | ≈23 px | **≈11.5 px** | ✓ |
| countdown "Scene morph in 3" @22 px bold | stage 360 px (centred) | ≈197 px | 360 px | ≈163 px | 15.8 px | ✓ |

Wrap states (A-C006-3): both titles are single-line at the new inner width (ink width < inner width for the default and the swap title); no wrapped state is reachable, so no second wrap row is owed. Hierarchy: countdown / title ink-height ratio = 15.8 / 11.5 ≈ 1.37.

## Neighbouring-element overlap census (displayed bounds)

| Pair | Displayed bounds | Result |
|---|---|---|
| countdown × cardLow | countdown top = stage.height 224 − countTopOffset 34 = **190**, ink bottom ≈206; cardLow unshrunk footprint y 151–181 | **DISJOINT** — 9 px clear of the unshrunk bottom at every countdown step; during the final step's preparatory collapse cardLow's displayed bottom only recedes (181 − 5q), so the gap grows. Suite-asserted at t = 2500/3500/4500/5000/5399. |
| searchBar × cardTop | searchBar spans y 19–41 (centre 30, h 22); cardTop top edge = 66 − 22 = 44 | **DISJOINT** — 3 px clear. Suite-asserted at hold. |
| outline × cardTop | outline = cardTop bounds expanded by CONFIG inset 6 on every side | Enclosure BY DESIGN (the outline is the card's selection ring); printed here as a named pair, not an overlap defect. |
| field × all elements | field is the stage-sized background container | Containment BY DESIGN (parent), not a pair overlap. |

## Destination bounds

| State | Bounds | Inside stage 360 × 224 |
|---|---|---|
| cardTop terminal (cluster bbox 72 × 52 at centroid 180,90) | x 144–216, y 64–116 | ✓ |
| Triangle cluster at hold B (centres 158–202 / 84–92, s 26) | x 145–215, y 71–105 | ✓ |

## HIT list

**0 HITs.** The attempt-1 HIT (title ink height 7.9 px < floor) is cured at the new geometry (≈11.5 px), and the attempt-1 leg MISS class (countdown × cardLow neighbouring overlap, found by the readability lens at attempt 1) is now measured here and is disjoint by construction at every step.
