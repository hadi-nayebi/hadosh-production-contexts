# T104 — guard-measured-fit output (A6 leg 1, FINAL build, pre-wave)

Method: font-metric geometry measurement (Arial advance model: uppercase 0.72 em · lowercase 0.50 em · space 0.28 em · digit 0.56 em · bold ×1.02; ink height = cap-height factor 0.716 × font size) at the 360 px stage. Containers are the CONFIG geometry boxes the text is placed in; margins are container width minus measured ink width on the binding (horizontal) side. Vertical fit checked per scene: scene A screen stack = pad 8 + title 18×1.2 + gap 10 + 2 lines × (16×1.2 + 5) = 88.0 px ≤ screen inner height 80 px + line-height slack — measured stack from code positions: title top 8, line tops at 8+18+10=36 and 36+16+5=57, last line bottom 57+19.2=76.2 ≤ 80 ✓. Scene B hero stack: title top 10 (tileY−2), lines at 33 and 54, last bottom 54+19.2=73.2 vs heroH 72 — 1.2 px into the hero's bottom edge zone but inside the stage and inside the hero's radius box tolerance; printed here as a measured near-fit, not hidden (see HIT note).

| Element | Container | Ink width | Container width | Margin | Ink height |
|---|---|---|---|---|---|
| sceneA.title "Easy" @18 bold | laptop screen (150−2×8=134 px) | 40.8 px | 134 px | 93.2 px | 12.9 px |
| sceneA.lines[0] "Hard cut" @16 | laptop screen, text offset 24 px (110 px avail) | 64.0 px | 110 px | 46.0 px | 11.5 px |
| sceneA.lines[1] "Dissolve" @16 | laptop screen, text offset 24 px | 67.5 px | 110 px | 42.5 px | 11.5 px |
| sceneA swap title "Basics" @18 bold | laptop screen | 59.1 px | 134 px | 74.9 px | 12.9 px |
| sceneB.heading "Motion Design Training" @16 | search bar (332−16−26 dot zone=290 px avail) | 179.5 px | 290 px | 110.5 px | 11.5 px |
| sceneB.title "Easy" @18 bold | hero card, text offset 54 px (278 px avail) | 40.8 px | 278 px | 237.2 px | 12.9 px |
| sceneB.lines[0] "Hard cut" @16 | hero card, text offset 54 px | 64.0 px | 278 px | 214.0 px | 11.5 px |
| sceneB.lines[1] "Dissolve" @16 | hero card, text offset 54 px | 67.5 px | 278 px | 210.5 px | 11.5 px |
| sceneB swap lines "Jump cut" / "Fade out" @16 | hero card, text offset 54 px | 64.0 / 64.0 px | 278 px | 214.0 px | 11.5 px |

Hierarchy: title/line ink-height ratio = 12.9 / 11.5 = 1.12 in both scenes — a measured size hierarchy (title larger than lines), not hue-only. ✓
Legibility floor (~11 px ink height): every subject text element clears it (minimum 11.5 px). ✓

HIT list: **empty — PASS for this leg (0 HITs).** One measured near-fit printed, not counted as a HIT: scene B hero's last line bottom (73.2 px) exceeds heroH (72 px) by 1.2 px — the line's ink (cap-height zone ≈ 54+2.3 → 54+13.8 = 67.8 px) sits fully inside the hero; only the line-height box overhangs, over the cardB field below the hero's edge, with no other element within 6 px (next card top at 120 px stage = hero bottom 114 + 6). The scoring wave prices it with this table in the packet.
