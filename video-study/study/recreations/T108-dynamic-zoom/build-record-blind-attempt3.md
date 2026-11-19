# T108 — Dynamic / infinite zoom · score-blind build record (for scoring packets)

Construction summary (no scores, no verdicts): one self-contained HTML file. A CONFIG block at the top of the script carries all geometry, text, palette, and timing. A frozen DEFAULTS block outside CONFIG supplies validation fallbacks only. Validation is a single schema pass before any derivation: malformed groups, fields, nested structures, and inconsistent ranges are substituted from DEFAULTS and named in an errors list; construction proceeds on validated values only.

Mechanics as built:
- One world transform (translate + scale), one ease family with two registered curves, a single clock. The webpage content is nested inside the clipped laptop screen from construction; the camera move is a continuous scale change with no scene swap.
- The camera travel time is a CONFIG duration (750 ms); the travel fraction is derived in source as travel ÷ transition span (750/2600 ≈ 0.288). Full scale arrives at 2150 ms on the build clock.
- Until the cursor's screen-entry moment, the camera target is the screen centre, so the laptop stays centred while the cursor approaches from the right inside that frame. From entry to arrival the target blends from the centre to the cursor's path position, whose endpoint is the screen centre. The cursor fades across the final 220 ms before arrival, reaching opacity 0 at arrival.
- After arrival, a content settle envelope runs inside the remaining transition span: displacement is zero during travel and at arrival, rises smoothly to a peak (scale 0.94, 5 px offset), and returns to zero at the span's end. No step exists in the envelope.
- Inside the same span, the search pill grows from 0.35 of its width to full width while its text types in character by character (onset and duration are separate CONFIG fractions of the span: 0.1429 and 0.2857). The result rows then arrive staggered (onsets 0.45 and 0.62 of the span), each fading and sliding in; all are present at the span's end. Before arrival the pill presents as an empty shell and the rows are absent.
- Phases: distant hold 1400 ms, transition 2600 ms, and a single arrived hold whose duration is derived (cycle 14000 − 1400 − 2600 = 10000 ms). There is no phase boundary inside the hold.
- Fit: the title's wrapped line count is counted by word wrapping at the available width and budgeted in the stack height; the fit scale derives from the resulting stack and the cover scale (max of the stage/screen width and height ratios). At default geometry the cover scale equals the width ratio (2.034), so the default end pose matches a width-derived scale.
- The loop resets at zero world opacity under a 500 ms fade at each seam.

Own-check packet: the neutral check names and results are filed in the wave's payload parts (camera, settle, cursor, pill, rows, hold, fit, geometry, ease, validation, consumption, swap, CSS-parse, and self-start checks — all passing on this source).
Measured-fit and config-census leg outputs for this build are filed beside this record (fit-table and config-census files for this build round).
