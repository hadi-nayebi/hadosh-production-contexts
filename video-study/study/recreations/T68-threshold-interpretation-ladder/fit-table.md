# T68 — measured-fit table (A6 leg 1, pre-scoring)
File measured: recreation.html sha256 110a25fcdab596f487e7324b4000f5dcdf8ec88ed771e6307f2b09bf983af4d8
Re-filed on the final build after the codex-plan-review cure (per-band measured fit: each band shrinks from bandPx toward bandMinPx until it wraps within maxBandLines=2; fitOk() rejects a config that cannot fit at the floor — the rows below were re-verified against the final build's harness metrics: default cardH 137.25, swap cardH 178.25, all bands 2 lines at 14 px).
Method: PIL glyph measurement with DejaVu Sans Bold (Regular for weekday) as the Arial stand-in at the 360 px stage (stage 360×203, card x104 w244, padding 14 → inner 216 px, band text avail 203 px after bullet+gap), cross-checked against the build's own wrap/fit model in the Node harness (charWidthFrac 0.56). Rows are post-fit measurements of the wrapped geometry, not formula assertions. PIXEL-UNVERIFIED (no browser route in this seat); the build's canvas fitPx measures the real font at runtime and shrinks the title to the same bound.

| Element | Container | Measured ink / bounds | Container bounds | Margin (binding side) |
|---|---|---|---|---|
| Card title "December 1: the number" | card head, 1 line (nowrap + fitPx) | post-fit 15 px under stand-in: 212.0 px wide · ink height 11 px | 216 px inner width | 4.0 px |
| Band 1 "45 or more: louder on TV than in the room" | band row, wraps to 2 lines by design | one-line 335.0 px at 14 px → 2 wrapped lines, each ≤203 px · ink height 11 px · row height 35 px | 203 px text avail | wraps, no clipping (no nowrap, no fixed row height) |
| Band 2 "Mid-30s: a leader who owes people" | band row, wraps to 2 lines | one-line 278.0 px at 14 px → 2 wrapped lines · ink height 14 px · row height 35 px | 203 px | wraps, no clipping |
| Complete card (default, 2 bands) | stage | height 137.25 px, bottom at 151.25 px | 203 px stage height | 51.75 px |
| Calendar month "Dec" | calendar head strip | 34.0 px wide at 16 px · ink height 12 px | 88 px cal width · 24 px head height | 54.0 px |
| Calendar day "1" | calendar body | 22.0 px wide at 32 px · ink height 23 px | 88 px cal width | 66.0 px |
| Calendar weekday "Tuesday" | calendar body | 54.0 px wide at 13 px · ink height 14 px | 88 px cal width | 34.0 px |
| Calendar block | stage | 88×94 px at (10,102), bottom 196 px; card starts x104 — no overlap | 360×203 stage | 7 px vertical, 6 px horizontal |
| SWAP band 1 "50+: swap band one proves config" | band row, 2 lines | one-line 272.0 px → 2 lines · ink 14 px | 203 px | wraps, no clipping |
| SWAP band 2 "Low-20s: swap band two proves config" | band row, 2 lines | one-line 306.0 px → 2 lines · ink 14 px | 203 px | wraps, no clipping |
| SWAP band 3 "Teens: third band proves the list is data" | band row, 2 lines | one-line 316.0 px → 2 lines · ink 14 px | 203 px | wraps, no clipping |
| SWAP complete card (3 bands) | stage | height 178.25 px, bottom at 192.25 px | 203 px stage height | 10.75 px |
| SWAP title "Swap date: the number" | card head, 1 line | post-fit 16 px under stand-in: 212.8 px wide · ink ≈12 px | 216 px | 3.2 px |

Hierarchy: title post-fit 15–17 px vs band 14 px — near-equal by design (the specimen's title is set modestly larger than its bands); hierarchy is carried by color (accent gold vs white ink) and weight, with measured sizes printed here so the claim is not hue-only: ratio ≈1.07–1.21.

## HIT list
**0 HITs — PASS for this leg.** Cures applied during the leg (pre-scoring, on earlier hashes): (1) calendar month raised 14→16 px after its measured ink height came in at 10 px, under the ~11 px floor — re-measured at 12 px. Notes carried (not hits): (1) band 1 ink height 11 px sits AT the ~11 px floor, not below it; (2) title and swap-title margins are tight (4.0 / 3.2 px under the stand-in) — the runtime canvas fitPx enforces the same bound against the real font; (3) the specimen's own second band clips mid-word during its wipe reveal — the recreation never clips: every band wraps whole and is fully present at its hold.
