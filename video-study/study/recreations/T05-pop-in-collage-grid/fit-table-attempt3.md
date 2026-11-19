# T05 attempt 3 — measured-fit leg (guard-measured-fit, fired by reference)

Source: `recreation.html` · sha256 `7d4a5da7d12ec75d1d20ff06836cbc47a12efee30cbe0cbf72ea2b8e1d507cac` (frozen before this leg)
Method: DOM-stub harness executing the real script; layout applied at the 360×202.5 stage; text bounds are the post-fit modelled bounds from the applied font sizes and the configured monospace advance (0.6 em) — MODELLED, not rendered pixels. **PIXEL-UNVERIFIED** stands.
Prior shared-path file: none existed (`fit-table.md` absent at firing) — nothing to preserve; this attempt-tagged file is the first filing.

## Rows — panel labels (container: label strip, panel width 69.33 px, strip avail 54.71 px after both borders + left padding + check reservation)

| Element | Text (post-fit) | Font px | Modelled width | Container avail | Margin | Fit |
|---|---|---|---|---|---|---|
| panel 0 label | waveform | 8.25 | 39.60 | 54.71 | 15.11 | ✓ |
| panel 1 label | sequencer | 8.25 | 44.55 | 54.71 | 10.16 | ✓ |
| panel 2 label | scene ask | 8.25 | 44.55 | 54.71 | 10.16 | ✓ |
| panel 3 label | room walls | 8.25 | 49.50 | 54.71 | 5.21 | ✓ |
| panel 4 label | planet pro | 8.25 | 49.50 | 54.71 | 5.21 | ✓ |
| panel 5 label | spiral | 8.25 | 29.70 | 54.71 | 25.01 | ✓ |

Label strip height 12.31 px vs panel height 36.47 px → occupancy 33.8% (named ceiling 40%). Check glyph: 7.7 px inside an 8.62 px reservation ✓. Combined footprint (longest label + largest check, reference width 960): 90.0 ≤ 170.9 ✓ (own-check s2_fitmodel).

## Rows — lyric lines (container: lyric block, width 187.2 px, avail 170.24 px after prompt advance + prompt margin + cursor footprint)

| Element | Chars | Font px | Modelled width | Container avail | Margin | Fit |
|---|---|---|---|---|---|---|
| lyric line 0 | 29 | 9.35 | 162.69 | 170.24 | 7.55 | ✓ |
| lyric line 1 | 27 | 9.35 | 151.47 | 170.24 | 18.77 | ✓ |
| lyric line 2 | 30 | 9.35 | 168.30 | 170.24 | 1.94 | ✓ |
| lyric line 3 | 30 | 9.35 | 168.30 | 170.24 | 1.94 | ✓ |

Grid-to-lyric clearance at 360×202.5: grid bottom 117.45 px, completed lyric block top 128.65 px → 11.2 px (named floor 10 px) ✓.

## Rows — brand line

| Element | Font px | Modelled width | Container avail | Fit |
|---|---|---|---|---|
| brand left (34 chars) | 7.00 | 142.80 | 334.80 | ✓ |

## Hierarchy (measured, applied sizes at 360 px)

lyric 9.35 : label 8.25 : check 7.70 : brand 7.00 — ratios 1.13 : 1.00 : 0.93 : 0.85 against the label base; the hierarchy is size-carried, not hue-only.

## HIT list (advisory)

Container-fit hits: **0** — every subject text element fits its container post-fit at 360 px and 390 px (own-check s2_fitmodel).

Legibility-reference advisories (the leg's generic ~11 px ink-height reference at 360 px, against this technique's own named floors): panel labels 8.25 px (item floor 8) · lyric lines 9.35 px (item floor 9) · check glyphs 7.7 px · brand line 7.0 px (item floor 7) — **4 advisory HITs carried into the wave** with disposition: the small monospace type is the specimen-evidenced design (labels/checks/brand are chrome at collage scale; the build's named floors are met with margin) and rendered legibility remains **PIXEL-UNVERIFIED** — the scoring wave's readability lens prices this surface directly. **Leg hit count for the wave record: 4 (all advisory, 0 container-fit).**
