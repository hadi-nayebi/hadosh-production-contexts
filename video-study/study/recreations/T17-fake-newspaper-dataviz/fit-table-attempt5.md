# T17 attempt 5 — measured-fit leg output (guard-measured-fit, recreation guards)

Source: recreation.html sha256 3d5d108a9f3bb4d0e89c076673c7936a88c17f4e0c5092e4d9fac900fc7a1a47 · Stage widths 360/390/960 · PIXEL-UNVERIFIED (render route blocked at startup — "Hatch WebGL domain policy is required for browser startup", re-attempted this attempt; rows are deterministic-model measurements, glyph ink = fontPx x 0.716 named estimator).

Fit @360: ok=true stageH=553 headerH=99.2 metaRows=2 mastLines=1 budgetOk=true fontsOk=true clearance=8px
Fit @390: ok=true stageH=553 headerH=99.2 metaRows=2 mastLines=1 budgetOk=true fontsOk=true clearance=8px
Fit @960: ok=true stageH=540 headerH=107.5 metaRows=1 mastLines=1 budgetOk=true fontsOk=true clearance=0px

## Figure rows (360px)
| Element | Container | Font px @360 | Modelled ink height | Container bounds | Binding margin |
|---|---|---|---|---|---|
| masthead | stage header | 20 | 14.3px | content width 328px | centred, word-model 1 line |
| meta line (date/clock/price) | header meta, wrapped 2 rows @360 | 12 | 8.6px | meta width 304px | greedy flex rows from modelled span widths |
| FIG. 20 figure number | figure head | 12 | 8.6px | content width 328px | — |
| FIG. 20 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from word-model line count (2 lines); renders as model line spans |
| FIG. 20 source line | figure foot | 12 | 8.6px | displayed bottom vs stage | reserve = word-model lines (1); renders as model line spans |
| FIG. 20 block | figure body | 12 | 8.6px | required 309.0px | stage total incl. header + 8px clearance <= 640 |
| FIG. 21 figure number | figure head | 12 | 8.6px | content width 328px | — |
| FIG. 21 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from word-model line count (1 lines); renders as model line spans |
| FIG. 21 source line | figure foot | 12 | 8.6px | displayed bottom vs stage | reserve = word-model lines (1); renders as model line spans |
| FIG. 21 block | figure body | 12 | 8.6px | required 249.8px | stage total incl. header + 8px clearance <= 640 |
| FIG. 22 figure number | figure head | 12 | 8.6px | content width 328px | — |
| FIG. 22 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from word-model line count (1 lines); renders as model line spans |
| FIG. 22 source line | figure foot | 12 | 8.6px | displayed bottom vs stage | reserve = word-model lines (1); renders as model line spans |
| FIG. 22 block | figure body | 12 | 8.6px | required 445.8px | stage total incl. header + 8px clearance <= 640 |
| FIG. 23 figure number | figure head | 12 | 8.6px | content width 328px | — |
| FIG. 23 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from word-model line count (1 lines); renders as model line spans |
| FIG. 23 source line | figure foot | 12 | 8.6px | displayed bottom vs stage | reserve = word-model lines (1); renders as model line spans |
| FIG. 23 block | figure body | 12 | 8.6px | required 222.2px | stage total incl. header + 8px clearance <= 640 |
| FIG. 24 figure number | figure head | 12 | 8.6px | content width 328px | — |
| FIG. 24 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from word-model line count (1 lines); renders as model line spans |
| FIG. 24 source line | figure foot | 12 | 8.6px | displayed bottom vs stage | reserve = word-model lines (1); renders as model line spans |
| FIG. 24 block | figure body | 12 | 8.6px | required 298.4px | stage total incl. header + 8px clearance <= 640 |
| FIG. 25 figure number | figure head | 12 | 8.6px | content width 328px | — |
| FIG. 25 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from word-model line count (1 lines); renders as model line spans |
| FIG. 25 source line | figure foot | 12 | 8.6px | displayed bottom vs stage | reserve = word-model lines (1); renders as model line spans |
| FIG. 25 block | figure body | 12 | 8.6px | required 301.7px | stage total incl. header + 8px clearance <= 640 |

Badge rows: ink width 293.8px, height 24.2px, entrance cap 1.117 (fitted, stamp-family construction); AABB at cap: left 0.0 right 328.0 inside content width 328; transformed height reserved in figure height (27.0px).
Summary rows: 68 chars, word-model lines at card inner width 301px = 2 lines; the summary renders as exactly those line spans (renderer-consumed layout).

## HIT list
HIT meta line (date/clock/price) — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 20 figure number — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 20 source line — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 20 block — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 21 figure number — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 21 source line — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 21 block — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 22 figure number — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 22 source line — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 22 block — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 23 figure number — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 23 source line — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 23 block — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 24 figure number — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 24 source line — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 24 block — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 25 figure number — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 25 source line — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor
HIT FIG. 25 block — modelled ink 8.6px at the 12px label floor vs the leg's ~11px ink floor

HIT count: 19 rows. Disposition (advisory, priced as in the prior attempt's leg): the 12px label floor is the build's enforced type floor; ink is a 0.716 estimator, not a measurement; containment, wrapped-state reserves and 8px bottom clearance pass at all three widths, and secondary text contrast models at 6.03:1. The hits are the standing evidence-class gap (no rendered measurement exists — PIXEL-UNVERIFIED); they are carried into the scoring wave printed, not cured by raising the estimator.
