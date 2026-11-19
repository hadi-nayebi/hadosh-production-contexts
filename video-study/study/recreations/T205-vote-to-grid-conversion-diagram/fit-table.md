# T205 — Measured-fit leg (A6 / guard-measured-fit) — final build (completion cure round, Cycle 037)

Build: recreation.html sha256 `64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3` (18,570 B). Re-run on the cured final build by the completion builder (label geometry unchanged by the cure round; hash re-bound, measurements re-measured, not carried).
Instrument (A12.2 form (ii)): rendered measurement with a NAMED stand-in font — PIL 10.2.0, DejaVu Sans Bold (`/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf`), rendered at 4× supersample and divided back; rows labeled PROXY. Stage scale: 360/960 = 0.375. The build's label font stack is Georgia/serif bold; DejaVu Sans Bold is the stand-in (wider than Georgia bold, so widths are conservative).

| Element | Container | Instrument | Fitted geometry | Measured ink bounds | Container bounds | Margin (binding side) |
|---|---|---|---|---|---|---|
| content.ballotLabel "VOTE" (SVG text on ballot box) | ballot box, geom.boxWPx 170 design px | PIL rendered measurement, PROXY DejaVu Sans Bold, font geom.labelFontPx 40 design px → 15.00 px at 360 stage | text-anchor middle at disc centre | ink 116.0 × 30.2 design px → **43.5 × 11.3 px at 360 stage** | 170 design px → 63.8 px at 360 stage | width margin 20.2 px at stage; ink height 11.3 px vs ~11 px floor — PASS (above floor, thin margin noted) |
| content.ballotLabel swap "CAST" | same box | same instrument, same size | same | ink 114.5 × 30.2 design px → **42.9 × 11.3 px at 360 stage** | 63.8 px at stage | width margin 20.8 px; ink height 11.3 px — PASS |
| content.blockLabel | — | NOT APPLICABLE: CONFIG value is null (absence is the specimen value; the converting block carries no label) — no text element exists to measure | — | — | — | — |

Hierarchy check (guard check 4): only one subject text element exists; no neighbouring-text hierarchy is claimed. N/A printed, not skipped silently.

## HIT list
**EMPTY — 0 HITs.** Note carried (not a HIT): the label ink height at phone width is 11.3 px against the ~11 px floor — the floor passes with 0.3 px margin under a wider-than-build stand-in font; the readability lens prices motion legibility separately.
