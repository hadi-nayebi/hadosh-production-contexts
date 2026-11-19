# config-census — T153 · Cycle 019 Wave 18 · attempt 2 (guard-config-census v3.1, Amendment A-C008 leg)
Instrument: node census script over attempt 2's recreation.html (SHA-256 8330ec1911d712b8afca63d560d340905f7ca9771450359417e258fc0368416b) — every CONFIG leaf key resolved to application sites in the code after the CONFIG block; value-flow read by the builder (a site counts only where the value constructs its named subject). Attempt 2's CONFIG change: the uniform dwarf.rowIntervalMs key is replaced by phase keys dwarf.firstSweepMs / dwarf.secondSweepMs / dwarf.restSweepMs; dwarf.startMs 3400→9800; header.swapMs 3000→11000. Unapplied keys on attempt 2: []. All 42 leaves consumed (own-check suite asserts the same census with effect mappings: each phase-key swap re-derives downstream onsets + completeMs).

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| cycleMs | 3 | stateAt cycle modulo |
| stageW | 1 | stage aspect-ratio setter (with stageH) |
| stageH | 1 | stage aspect-ratio setter (with stageW) |
| void | 1 | stage background |
| fontFamily | 4 | header + label font-family setters |
| header.sun | 8 | headerAt sun state + initial header text (count includes substring matches) |
| header.dwarf | 14 | headerAt dwarf state (count includes substring matches in code paths) |
| header.swapMs | 1 | headerAt swap threshold — value 11000 |
| header.fontPx | 1 | header font-size setter |
| header.fontWeight | 3 | header font-weight setter (+ matches) |
| header.color | 3 | header colour setter (+ matches) |
| header.xPx | 3 | header left (+ row x matches by leaf name) |
| header.yPx | 1 | header top |
| row.heightPx | 4 | row height + track height + row top stride + min-height derivation |
| row.gapPx | 2 | row top stride + min-height derivation |
| row.labelW | 2 | label width setter (+ matches) |
| row.labelFontPx | 1 | label font-size setter |
| row.labelWeight | 1 | label font-weight setter |
| row.labelColor | 1 | label colour setter |
| row.firstRowYPx | 2 | first row top + min-height derivation |
| row.xPx | 3 | row left/right offsets |
| sun.label | 9 | buildRows sun row label (count includes substring matches) |
| sun.colour | 6 | buildRows sun row colour (+ matches) |
| sun.fraction | 5 | buildRows sun fraction (+ matches) |
| sun.onsetMs | 6 | buildRows sun onset (+ matches) |
| sun.sweepMs | 5 | buildRows sun sweep (+ matches) |
| dwarf.label | 9 | buildRows first dwarf row label (count includes substring matches) |
| dwarf.colour | 6 | buildRows dwarf row colour (+ matches) |
| dwarf.rows | 18 | buildRows loop bound + expected count + min-height derivation (+ matches) |
| dwarf.fraction | 5 | buildRows dwarf fraction (+ matches) |
| dwarf.startMs | 1 | buildRows cumulative onset seed (onset_0); completeMs derives from the built rows |
| dwarf.firstSweepMs | 1 | buildRows sweep selection for dwarf row 1 (i===0 branch) — swap-asserted: 2000→1000 re-derives completeMs 14100→13100 |
| dwarf.secondSweepMs | 1 | buildRows sweep selection for dwarf row 2 (i===1 branch) — swap-asserted: 800→400 re-derives completeMs 14100→13700 |
| dwarf.restSweepMs | 1 | buildRows sweep selection for dwarf rows 3–8 (else branch) — swap-asserted: 250→500 re-derives completeMs 14100→15600 |
| stars.count | 1 | starfield loop bound |
| stars.seed | 1 | LCG seed initialisation |
| stars.colour | 6 | speck background (+ matches) |
| stars.opacity | 2 | speck opacity |
| stars.sizePx | 2 | speck width/height |
| stars.lcgA | 1 | rnd() multiplier |
| stars.lcgC | 1 | rnd() increment |
| stars.lcgM | 2 | rnd() modulus + normaliser |

## Literal scan outside CONFIG
- Hex colours outside CONFIG: ['#000'] — '#000' is the page void outside the stage (structural, not a subject colour; void/header/label/bar/star colours all read from CONFIG).
- Numeric literals in engine code after CONFIG: 0, 1, 100 — classified structural per literal: loop/index identities (0, 1) and the percent identity (100 in the bar-width percent conversion, which scales with the CONFIG fraction it converts). No subject-shaping literal stands outside CONFIG: row geometry, onsets, phase sweeps, fractions, colours, header texts, starfield count/seed/opacity/size and its LCG coefficients are all CONFIG data.
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
