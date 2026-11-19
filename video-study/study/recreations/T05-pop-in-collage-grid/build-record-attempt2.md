# T05 — Pop-in Collage Grid · BUILD RECORD (filing of 2026-11-14)

Technique: T05 (packet P1, "Look What I Can Do") · Artifact dir: `hidden_files/study/recreations/T05-pop-in-collage-grid/`
Consumer: transitions · diagram containers — a loose collage grid that assembles panel-by-panel can open a diagram container or bridge two containers by accumulating evidence panels instead of cutting to a finished layout.
Final source: `recreation.html` · sha256 `7a4b25f1a6f0705931b0cebe87f3c690f5e2a1b8025e3491a51bb3e9b6ac182f`

## Construction form

Targeted rework of the retained construction: DOM loose grid, code-drawn panel contents (canvas + inline vector shapes), one elapsed-time clock with seek, and a declarative configuration object read by all logic. No from-scratch rebuild; the grid, clock, and rendering architecture are unchanged in kind.

## Schedule — source time → recreation time

The evidence segment runs 0:23.5–0:35.5 (12 s); recreation time 0 = source 0:23.5.

| Panel | Source state | Recreation time | State kind |
|---|---|---|---|
| waveform | visible at segment start (frame at 0:23 shows it present) | 0 ms | initial state — rendered arrived at load, not an animated arrival |
| sequencer | visible at segment start (frame at 0:23 shows it present) | 0 ms | initial state — rendered arrived at load, not an animated arrival |
| scene | present by source 0:27 (frame shows 5 panels) | 1200 ms | animated arrival |
| room | present by source 0:27 | 2300 ms | animated arrival |
| planet | present by source 0:27 | 3400 ms | animated arrival |
| spiral | grid denser by source 0:31 | 5600 ms | animated arrival |

Arrival spacing after t=0 is 1100 ms between the three arrivals that complete the five-panel state at recreation 3500 ms (= source 0:27), matching the evidenced count at that moment. No arrivals were invented for the remaining window: after 5600 ms the completed grid holds while the typed lines finish (last line completes ≈8160 ms), and the loop boundary (below) closes the cycle.

Loop boundary: the final 300 ms of each 12000 ms cycle fades all arrived panels together (a per-panel opacity variable driven from the configuration value `resetFadeMs`); at wrap the state returns to the two initial panels — the field is never empty at any point of the cycle.

## Configuration surface — exact scope

The configuration object declares: loop length and reset fade; the full drawing palette (field, panel chrome, accents, label strip, and every per-type drawing color); brand line text, position, size and minimum; pop start scale, transform duration, opacity duration, and both easing curves; grid position, size, columns, rows, gap, border width and radius; panel list (display label, type, arrival time, initial flag); label typography (reference size, minimum, padding, line height); check-mark text, typography, and position; canvas design space (320×180) and vector design space (160×96); lyric lines, per-line start times, character interval, layout (left, bottom, width, line height), typography (reference size, minimum), prompt text and color, cursor dimensions; and the deterministic seed. The secondary color (`mutedColor`) is consumed by two rendered elements: the brand line and each panel's check mark. Runtime canvas element references live in a separate array outside the panel objects. Per-type vector shape coordinates inside the drawing routines are authored code; every color those routines use is read from the configuration surface. URL overrides cover labels, lyric text, per-panel arrival times and types, three palette entries, loop length, and seed — each validated (see Check V1).

## Named floors, margins, and tolerances (fixed before scoring)

- Panel label size at a 360 px stage: ≥ 8 px (modelled 8.25 px).
- Lyric size at a 360 px stage: ≥ 9 px (modelled 9.35 px).
- Grid-to-lyric clearance at a 360 px stage: ≥ 10 px (modelled 11.2 px).
- Label strip occupancy: ≤ 40% of panel height (modelled 33.8%).
- Longest supported display label must fit the label strip width under the modelled monospace advance of 0.6 em (longest label 10 characters → 49.5 px modelled vs 49.6 px available).
- Arrival completion: transform duration 180 ms and opacity duration 120 ms, both shorter than the minimum arrival interval of 1100 ms; completion is asserted at every arrival and at the loop boundary.
- Containment: every panel rectangle inside the stage at 360×202.5 (rightmost edge modelled 352.8 px).

## Diagnostic ledger (per check: variables changed · controls held · expected effect · measured result)

Checks ran first in isolation against the construction, then again as one integrated regression on the final frozen source (identical result: 38 of 38 assertions passed, DOM-stub harness executing the real script).

| Check | Changed variables | Controls held | Expected effect | Measured result |
|---|---|---|---|---|
| P1 arrival scale/opacity mapping | start-scale delivery (custom property from configuration; class rule consumes it), both transition tracks and easings declared in configuration | schedule, geometry, labels | off-state scale = configured start value; on-state scale = 1; opacity 0 → 1; transition string carries both configured tracks | PASS — property value 0.82 on the stage; class rules resolve off = var, on = 1; no inline transform assignment exists in the source; transition reads "transform 180 ms cubic-bezier(.2,1.6,.4,1), opacity 120 ms ease-out" |
| C1 declarative coverage | transition tracks, easings, lyric layout, typography, cursor, check styling, brand styling, design spaces, drawing colors moved into the configuration object | behavior timings and geometry values | all named presentation values read from the configuration object | PASS — source inspection: the values named in the scope statement appear only in the configuration object; drawing routines read palette keys |
| C2 secondary color wiring | brand line color and check-mark color read the secondary color key | all other colors | both rendered elements carry the configured secondary color | PASS — brand element color and check element color both equal the configured value in the stub render |
| T1 arrival schedule states | initial state (two panels at t=0), arrival times 1200/2300/3400/5600 | pop durations, geometry | state counts: t=0 → 2; t=3500 → 5; t=5600 → 6; no arrival before its time | PASS — sampled states match at 0 / 1199 / 1200 / 3500 / 5600 ms |
| T2 loop boundary states | reset fade window 300 ms in configuration | schedule | fade variable 0.5 at 11850 ms, ≈0 at 11999 ms; at wrap exactly the two initial panels are on with fade 1 | PASS — all three boundary samples match |
| R1 phone geometry | grid position/size (left 38%, top 20%, width 60%, height 38%, gap 4), short display labels (identifying word first), dark label strip | panel count, schedule | containment, label fit, strip occupancy, clearance, and both type floors hold at 360×202.5 under the longest supported labels | PASS — right edge 352.8 px; label 8.25 px; longest label 49.5 ≤ 49.6 px; strip 33.8%; clearance 11.2 px; lyric 9.35 px |
| V1 input validation | validation rules with named warnings: panel capacity, unknown type (configuration and URL), malformed color (configuration and URL), malformed arrival value, short duration, stranded content, label width, lyric width, geometry sanity | default configuration | each invalid case produces its named warning and a safe fallback; the default configuration produces no warnings | PASS — 9 cases: BAD_POP_URL, UNKNOWN_PANEL_TYPE_URL, BAD_COLOR_URL, BAD_DURATION + DURATION_STRANDS_CONTENT, LABEL_TOO_WIDE, LYRIC_TOO_WIDE, PANEL_OVERFLOW with the rendered set capped at capacity, UNKNOWN_PANEL_TYPE with fallback rendering; default case warning list empty |
| V2 renderer registry | panel types resolve through a registry object; unknown types fall back to a registered pattern renderer | panel list | an unknown type renders visible content, never a blank panel | PASS — fallback vector content present in the panel for the unknown-type case |
| V3 alternate compositions | swap case (labels, lyric text, one arrival time, one palette entry, one panel type via URL) and a 2-column × 3-row configuration | technique mechanics | swapped values change behavior measurably; the alternate composition stays contained and completes its schedule | PASS — arrival at the swapped time observed at t=1000; swapped label/palette/lyric present; 2×3 composition: 6 panels, all rectangles inside the stage, all arrived by 5600 ms, no warnings |

## Own-check summary

- Effect mappings (Check P1, T1, T2): asserted as state mappings, not counts alone — PASS.
- Containment and legibility (Check R1): source-bound geometry model at 360×202.5 — PASS on all named floors.
- Swap tests (Check V3): logic level, node DOM-stub harness running the real script — PASS.
- Purity grep: patterns for specimen file names, media elements, and external URLs — 0 hits.
- Syntax: the inline script parses cleanly under node's parser.
- PIXEL-UNVERIFIED: no browser binary exists in this session (checked: no chromium/chrome/headless shell on PATH, no browser cache) — rendered-pixel claims (actual font metrics, rendered contrast, visible pop) are NOT verified by the modelled checks above and are carried as unverified.
