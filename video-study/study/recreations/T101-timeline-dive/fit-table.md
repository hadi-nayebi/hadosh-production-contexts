# T101 — guard-measured-fit output (A6 leg 1, FINAL build after interim-wave cure, pre-wave re-fire)

Method: font-metric geometry measurement (Arial advance widths + cap-height factor 0.716) at the 360 px stage. Two states measured per element: the wide (approach) state and the HOLD state — the hold is the card text's reading state, where the camera reveals only stage.width / dive.endScale = 360 / 2.6 = **138.46 px of card-local width**; text must fit THAT width (the interim1 readability lens, 54, caught the first build failing exactly here — title ink 168.3 px and brand ink 140.4 px both exceeded 138.46 px and were cropped for the whole hold; cured by titleSize 30→22 and brandSize 16→12, brandSpacing→0).

| Element | Container | Ink width (card-local) | Visible width at hold | Margin at hold | Ink height: wide / hold |
|---|---|---|---|---|---|
| card.title "QUICK TIPS" @22 px | card 196×126 px | 123.4 px | 138.46 px | **15.0 px** | 15.8 / 41.0 px |
| card.brand "SCHOOL OF MOTION" @12 px | card 196×126 px | 121.3 px | 138.46 px | **17.1 px** | 8.6 / 22.3 px |
| swap title "DEEP DIVE" @22 px | card | 118.6 px | 138.46 px | 19.8 px | 15.8 / 41.0 px |

Hierarchy: title/brand ink-height ratio = 15.8 / 8.6 = 1.84 (wide), identical at hold — measured size hierarchy, not hue-only. ✓
Legibility floor (~11 px ink height): title clears it in both states (15.8 / 41.0). Brand clears it in its reading state (hold, 22.3 px); in the wide approach state it measures 8.6 px — **HIT-1 (carried, disposition below)**.

HIT list: **1 HIT carried** — brand wide-state ink height 8.6 px < ~11 px floor. Disposition: the brand is a secondary mark whose reading state is the hold (22.3 px, floor cleared with 2× margin); the wide state lasts the 2.6 s travel approach, during which the brand rides the card as a mark, not as read text. Shrinking the brand further is impossible (hold-width margin binds from above at 12 px) and enlarging it re-crops it at hold — the two constraints meet at this size; the lens wave prices it with this table in the packet.
