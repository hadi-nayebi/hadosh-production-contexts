# T17 attempt 3 — measured-fit leg output (guard-measured-fit, recreation guards)

Source: recreation.html sha256 b2012a7a9fd8eaef1b6187754f52d233699be0528357fbd29949819a7bf0fc91 · Stage widths 360/390/960 · PIXEL-UNVERIFIED (render route blocked; rows are deterministic-model measurements, glyph ink = fontPx x 0.716 named estimator).

Fit constraint: phone stage budget 640px (CONFIG layout.phoneStageBudgetPx); fitReport ok at 360 (stage 528.8px, meta 2 rows), 390 (528.8px, 2 rows), 960 (540px, 1 row). Every figure required <= budget - header at phone widths, including FIG.22 at the maximum supported stack count (14) with wrapped masthead and arrival reserve (608.8px total).

| Element | Container | Font px @360 | Modelled ink height | Container bounds | Binding margin |
|---|---|---|---|---|---|
| masthead | stage header | 20 | 14.3px | content width 328px | centred, no overflow modelled |
| meta line (date/clock/price) | header meta, wrapped 2 rows @360/390, 1 row @960 | 11 | 7.9px | meta width 304px; span widths 116/61/143px | rows derived from measured span widths |
| FIG. 20 figure number | figure head | 11 | 7.9px | content width | — |
| FIG. 20 title "Humanity's outlook, accordin…" | figure head, reserved 40.8px (modelled) | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 20 source line | figure foot | 11 | 7.9px | displayed bottom at 380.7px vs stage 528.8px | inside stage at completion |
| FIG. 21 figure number | figure head | 11 | 7.9px | content width | — |
| FIG. 21 title "Are people panicking?…" | figure head, reserved 20.4px (modelled) | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 21 source line | figure foot | 11 | 7.9px | displayed bottom at 332.8px vs stage 528.8px | inside stage at completion |
| FIG. 22 figure number | figure head | 11 | 7.9px | content width | — |
| FIG. 22 title "Compute, stacked…" | figure head, reserved 20.4px (modelled) | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 22 source line | figure foot | 11 | 7.9px | displayed bottom at 528.8px vs stage 528.8px | inside stage at completion |
| FIG. 23 figure number | figure head | 11 | 7.9px | content width | — |
| FIG. 23 title "Org chart: Agents, Inc. (fou…" | figure head, reserved 20.4px (modelled) | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 23 source line | figure foot | 11 | 7.9px | displayed bottom at 322.8px vs stage 528.8px | inside stage at completion |
| FIG. 24 figure number | figure head | 11 | 7.9px | content width | — |
| FIG. 24 title "Jobs on Earth, before and af…" | figure head, reserved 20.4px (modelled) | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 24 source line | figure foot | 11 | 7.9px | displayed bottom at 384.5px vs stage 528.8px | inside stage at completion |
| FIG. 25 figure number | figure head | 11 | 7.9px | content width | — |
| FIG. 25 title "Correction…" | figure head, reserved 20.4px (modelled) | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 25 source line | figure foot | 11 | 7.9px | displayed bottom at 396.3px vs stage 528.8px | inside stage at completion |
| FIG.20 x-label "post 1" | SVG chart 328px wide | 11 | 7.9px | displayed bounds [48.0,88.9] | 48.0px binding side |
| FIG.20 x-label "post 2" | SVG chart 328px wide | 11 | 7.9px | displayed bounds [277.1,318.0] | 10.0px binding side |
| FIG.25 stamp text | correction block, rotated AABB | 12 | 8.6px | AABB at capped entrance scale 328.0px wide vs block 328px | entrance scale capped by AABB, not clipped |
| FIG.24 giant counter | counter card | 20 | 14.3px | card width 328px | — |
| FIG.21 summary text | summary card | 12 | 8.6px | card inner width 304px | typed in full at completion; hold 1.068s |

## HIT list (17 rows)

Label-class text at the 11px type floor has modelled ink height 7.9px, below this leg's ~11px ink floor: meta line (date/clock/price) · FIG. 20 figure number · FIG. 20 source line · FIG. 21 figure number · FIG. 21 source line · FIG. 22 figure number · FIG. 22 source line · FIG. 23 figure number · FIG. 23 source line · FIG. 24 figure number · FIG. 24 source line · FIG. 25 figure number · FIG. 25 source line · FIG.20 x-label "post 1" · FIG.20 x-label "post 2" · FIG.25 stamp text · FIG.21 summary text. Disposition (advisory): the 11px figure is the CONFIG type floor the construction shares with the prior attempt; containment passes at every width and no row overflows its container. The legibility question at this size is priced by the scoring wave on this same evidence; the floor itself is not lowered.
