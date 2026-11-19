# T107 — guard-measured-fit output (A6 leg 1, FINAL build, pre-wave)

Method: font-metric geometry measurement (Arial advance widths + cap-height factor 0.716) at the 360 px stage. States measured per element: the approach state (scene A at world scale 1.0) and the reading state (at/after the cut, where each element is actually read). Build: recreation.html sha256 5a874eb3d683f7df6dcf64408a1c5dd03ef747fe5fc255b755be8593b40778ba (final build after the jev-prewave cure; the cure changed no text size or container, so every measurement below is unchanged from the pre-cure build 43976b14…).

| Element | Container | Ink width | Container width | Margin | Ink height: approach / reading |
|---|---|---|---|---|---|
| sceneA.title "Results — before" @16 px (search bar) | search text area 224×18 px | 126.3 px | 224 px | **97.7 px** | 11.5 / 13.5 px (grows with the push to cut scale 1.18) |
| anchor.label "MARK" @16 px (both scenes, shared primitive) | anchor box 64 px wide at cut (54.2 px at base) | 47.1 px at cut · 39.9 px at base | 64 px · 54.2 px | **16.9 px · 14.3 px** | 9.7 / 11.5 px (approach = effective 13.6 px font inside the base-size tile; reading = at cut 11.5 px, settled 18.4 px) |
| anchor.label swap "LOGO" @16 px | anchor box 64 px | 45.3 px | 64 px | 18.7 px | as above |
| sceneB.title "Logo — after" @17 px (wordmark) | full-width strip 360 px, centred | 93.6 px | 360 px | **133.2 px per side** | — / 12.2 px (reading state = settled hold-B, opacity 1, dx 0) |

Hierarchy: measured ink heights — wordmark 12.2 px · search title 11.5 px · anchor label 11.5 px at cut; the mark glyph itself measures 26.9 px tall at the cut and 43.0 px settled, dominating by size as designed. No hue-only hierarchy is claimed. ✓
Legibility floor (~11 px ink height): search title clears it in both states (11.5 / 13.5); wordmark clears it in its reading state (12.2); anchor label clears it in its reading states (11.5 at cut, 18.4 settled) but measures 9.7 px in the approach state — **HIT-1 (carried, disposition below)**.

HIT list: **1 HIT carried** — anchor label approach-state ink height 9.7 px < ~11 px floor. Disposition: the label rides inside the anchor tile as part of the mark cluster during the pre-push hold; its reading states are the cut instant (11.5 px) and scene B (11.5 → 18.4 px settled), where the floor clears. Enlarging the label breaks the anchor box fit at the cut (label box + glyph = 58.1 of 64 px at 16 px font; a larger font overflows the box the mechanism proof binds). The lens wave prices it with this table in the packet.
