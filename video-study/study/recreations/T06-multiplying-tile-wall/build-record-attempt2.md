# T06 — Multiplying Tile Wall · BUILD RECORD (Attempt 2)

Artifact dir: `hidden_files/study/recreations/T06-multiplying-tile-wall/`
Technique: T06 — a wall of small tiles grows in rounds under a climbing counter badge; the device later re-forms as a call wall with larger foreground panels.

## E1 — Additional construction requirements filed before building

The following requirements are part of this build's construction contract, stated as current-build requirements:

- R-A: Foreground panels arrive through a timed entrance sequence (own duration and stagger parameters) and end at full opacity and unit scale in their foreground positions.
- R-B: Each cohort's internal stagger is a named parameter; the first call-wall cohort uses the same stagger machinery as every other cohort so a cohort reads as one round.
- R-C: The visible phase is derived from the wave schedule through ONE shared state calculation used by both the renderer and the time-query API. A phase-switch time that disagrees with the schedule's first phase-2 wave is normalized to that wave's time, with the normalization recorded in a warnings list.
- R-D: All configurable text (tile tags, panel names, counter labels) is inserted as text content, never parsed as markup.
- R-E: The stage background and both phases' counter colors are applied from configuration.
- R-F: The phase-2 counter panel carries an opaque backing with padding and reserved space. Foreground panels carry a named border and shadow. Type sizes, gaps, and tag/initial sizes scale with stage width (container-relative units).
- R-G: Every numeric, color, and label override is validated at load; an invalid value falls back to its default and records a named warning.

## Parameter boundary

CONFIG (production-facing, editable without touching logic): duration · wave schedule (time, phase, tile count, counter value per wave) · phase-switch time · both counter labels · both counter colors · stage background · entrance duration · cohort stagger · foreground-panel count, appearance time, entrance duration, stagger · tile seed · palette · tile names · foreground names · badge geometry and type sizes for both phases · wall geometry for both phases (position, size, gap) · grid aspect targets · entrance starting scale · tile tag/initial type sizes · motif parameters (bar count range, block count, orbit proportions) · foreground panel geometry, border, and shadow · control styling.
Construction (not parameters): the per-tile birth-cohort calculation, the fixed-cell layout calculation, the deterministic seeded content generator, the clock, and the validation rules themselves.

## Construction facts

- All screen state is a pure function of time: one state calculation prices, for every tile, its birth cohort (the first wave whose tile count includes it), its entrance progress from that cohort's start time plus its position inside the cohort, its fixed cell rectangle, and its display state.
- A tile whose entrance progress is complete renders at opacity 1 and scale 1 at every later time, including at and after every later wave boundary.
- Tiles beyond the current wave's count are removed from layout (display:none). Tiles occupy fixed cells priced from the phase's maximum tile count, so a tile's cell rectangle does not depend on the current count.
- Before the first wave, the state is explicitly cleared: zero tiles displayed, foreground panels hidden, phase-1 counter number empty with its label shown, phase-2 panel hidden.
- Seeking is deterministic: rendering any time t after any sequence of earlier renders produces the same element state as rendering t directly.
- Foreground panels enter with their own timed entrance and remain in front (stacking order, border, shadow).

## Own-check evidence

All checks run against the final source through a node harness that loads the real inline script with a stubbed document and reads element state from the shared state calculation. Diagnostic outputs are filed in this artifact directory.

- Per-cohort entrance check (diag-cohort.txt): at every wave boundary (sampled at boundary −1ms, +0ms, +50ms), every tile whose birth wave precedes the current wave and whose entrance is complete renders at opacity 1 and scale 1; every such tile's cell rectangle is identical at the three sample times. A swapped entrance duration of 9000ms (longer than the 2500ms wave spacing) was also loaded: tiles still entering price their progress from their birth wave's start (asserted numerically per tile), and tiles whose birth-priced entrance is complete stand at opacity 1 and scale 1. Result: ALL PASS (359 assertions).
- Layout occupancy check (diag-layout.txt): with entrances complete, the number of displayed tiles equals the current wave's tile count at every wave; tiles beyond the current count carry display:none; every tile's rectangle equals the fixed-cell model. Modelled separation at 360px and 960px stage widths: the phase-1 counter block's right edge stays left of the wall's left edge (122.4 < 149.4 at 360px; 298.4 < 398.4 at 960px), and the phase-2 counter panel's bottom edge stays above the foreground panels' top edge (45.2 < 87.1 at 360px; 93.8 < 232.2 at 960px). The 32-tile phase-1 state and the 24-tile + 4-panel phase-2 state both price correctly. Result: ALL PASS (32 assertions). These separation numbers are modelled geometry from the configuration values, not rendered measurements.
- Combined state check (diag-combined.txt): all 11 checkpoints price exactly (cleared state at 0ms and 499ms; counter/tile pairs at every wave through 22000ms); at t=0 the rendered counter number is empty and its label is present; a backward seek (20000ms → 6000ms) and a restart both reproduce the direct-render tile state at 6000ms exactly; foreground panels are mid-entrance inside their entrance window and settled at opacity 1 and scale 1 at its end. Result: ALL PASS (18 assertions).
- Override swap check (diag-swap.txt): changed counter value (99), label ("objects yesterday"), tile count (20 at the second wave), entrance duration (900), and palette entry (#ff0000) all apply and the state machine stays coherent; an invalid color value and a negative timing are rejected to their defaults with warnings recorded; a phase-switch override that disagrees with the schedule is normalized to the schedule's first phase-2 wave time with a warning recorded; the renderer and the time-query API agree on the phase at 13499ms and 13500ms. Result: ALL PASS (10 assertions).
- Integrated regression (diag-integrated.txt): all four suites re-run on the final source in one pass. Result: ALL PASS (419 assertions).
- Syntax: the inline script compiles clean (node vm.Script). Purity grep over the final source for specimen filenames, video/image tags, image/media file extensions, external URLs, and CSS url references: zero hits.
- PIXEL-UNVERIFIED: a headless Chrome render was attempted (the chromium binary under /opt/meta-chromium) and the browser refused to start with "Hatch WebGL domain policy is required for browser startup"; no screenshot exists. Layout and separation claims in this record rest on the modelled-geometry checks above and are not rendered measurements.

## Final source binding

- Final recreation.html sha256: `ed129cbd87d844f04fbdad0a4c1a24917fd5412adf00c313ffa4a2bd7dde30fb`
- Payload inspection: each assembled payload was scanned before firing for excluded content (any earlier scores, averages, target thresholds, verdicts, or comparative wording). Result: none present — the only matches were the standing header's required SCORE-line format, the word "floor" inside the Math.floor function name in the source, and the factual render-attempt sentence in the PIXEL-UNVERIFIED note. All five payloads carry this record and the final source at the sha above.
