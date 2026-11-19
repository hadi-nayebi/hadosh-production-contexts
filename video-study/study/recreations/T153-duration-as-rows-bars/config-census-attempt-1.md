# config-census — T153 · Cycle 024 Wave 21 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)
Instrument: node census script over the final recreation.html — every CONFIG leaf key resolved to application sites in the code after the CONFIG block; value-flow read by the builder (a site counts only where the value constructs its named subject). Pre-cure note: the first census run found stageW/stageH unapplied and the starfield LCG coefficients as literals outside CONFIG — both cured before the wave (stageW/stageH now set the stage aspect-ratio; LCG coefficients moved to CONFIG stars.lcgA/lcgC/lcgM) and the census re-run below is on the final build. Unapplied keys on final build: [].

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| cycleMs | 3 | stateAt cycle modulo |
| stageW | 1 | stage aspect-ratio setter (with stageH) |
| stageH | 1 | stage aspect-ratio setter (with stageW) |
| void | 1 | stage background |
| fontFamily | 4 | header + label font-family setters |
| header.sun | 7 | headerAt sun state + initial header text |
| header.dwarf | 13 | headerAt dwarf state (count includes substring matches in code paths) |
| header.swapMs | 1 | headerAt swap test |
| header.fontPx | 1 | header font-size setter |
| header.fontWeight | 3 | header font-weight setter (+ matches) |
| header.color | 3 | header colour setter (+ matches) |
| header.xPx | 3 | header left (+ row x matches by leaf name) |
| header.yPx | 1 | header top |
| row.heightPx | 3 | row height + track height + row top stride |
| row.gapPx | 1 | row top stride |
| row.labelW | 1 | label width setter |
| row.labelFontPx | 1 | label font-size setter |
| row.labelWeight | 1 | label font-weight setter |
| row.labelColor | 1 | label colour setter |
| row.firstRowYPx | 1 | first row top |
| row.xPx | 3 | row left/right offsets |
| sun.label | 3 | buildRows sun row label |
| sun.colour | 4 | buildRows sun row colour |
| sun.fraction | 3 | buildRows sun fraction |
| sun.onsetMs | 3 | buildRows sun onset |
| sun.sweepMs | 4 | buildRows sun sweep |
| dwarf.label | 3 | buildRows first dwarf row label |
| dwarf.colour | 4 | buildRows dwarf row colour |
| dwarf.rows | 3 | buildRows loop bound + expected count |
| dwarf.fraction | 3 | buildRows dwarf fraction |
| dwarf.startMs | 2 | buildRows dwarf onset derivation + completeMs |
| dwarf.rowIntervalMs | 2 | buildRows onset derivation + completeMs |
| dwarf sweep (derived) | — | no independent key by design (prewave cure): buildRows sets each dwarf row's sweepMs := dwarf.rowIntervalMs, so continuity holds for any interval |
| stars.count | 1 | starfield loop bound |
| stars.seed | 1 | LCG seed initialisation |
| stars.colour | 4 | speck background |
| stars.opacity | 2 | speck opacity |
| stars.sizePx | 2 | speck width/height |
| stars.lcgA | 1 | rnd() multiplier |
| stars.lcgC | 1 | rnd() increment |
| stars.lcgM | 2 | rnd() modulus + normaliser |

## Literal scan outside CONFIG
- Hex colours outside CONFIG: ['#000'] — '#000' is the page void outside the stage (structural, not a subject colour; void/header/label/bar/star colours all read from CONFIG).
- Numeric literals in engine code after CONFIG: 0, 1, 100 — classified structural: loop/index identities (0, 1) and the percent identity (100 in the bar-width percent conversion, which scales with the CONFIG fraction it converts). No subject-shaping literal stands outside CONFIG (A9.6): row geometry, onsets, sweeps, fractions, colours, header texts, starfield count/seed/opacity/size and its LCG coefficients are all CONFIG data.
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
