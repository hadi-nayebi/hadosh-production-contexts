# T16 attempt 10 — measured-fit table (A-C008 leg, guard-measured-fit)

Source: recreation.html at the attempt-10 freeze, sha256
f9f9462a985c1e3f8cceb97eebeb6b26e9b3d594305951d8155f7490cfafc4e4
(measured on candidate-attempt10.html at the identical hash, before
promotion). Instrument: the frame-loop harness with ALIGNMENT-FAITHFUL
canvas metrics (ink extents reported relative to the context's current
textAlign/textBaseline; ascent 0.8 fs, descent 0.2 fs, so ink height
equals the fitted font size under this instrument). This is the
instrument under which the attempt-9 source refuses its own startup
resize (Stage-0 finding F0); the attempt-10 source loads under it
because fitText now sets the draw alignment and the per-call-site
baseline before measuring (R5b).

## Verdict: 0 hits

Floor: 11 px ink height (guard-measured-fit). A hit is an ink height
below the floor or an ink box outside its container. **Hit count: 0**
across all 8 rows (4 fitted texts x 2 stage sizes).

| text | stage | font px | ink height px | ink box inside container |
|---|---|---|---|---|
| title | 360x640 | 75.94 | 75.94 | yes (stage) |
| page header | 360x640 | 24.95 | 24.95 | yes (page region) |
| counter numeral, worst-case string "14/14" | 360x640 | 38 | 38 | yes (stage) |
| title label (DOM text) | 360x640 | 22 | 22 | yes (stage) |
| title | 320x240 | 71.39 | 71.39 | yes (stage) |
| page header | 320x240 | 22.18 | 22.18 | yes (page region) |
| counter numeral, worst-case string "14/14" | 320x240 | 33 | 33 | yes (stage) |
| title label (DOM text) | 320x240 | 22 | 22 | yes (stage) |

Notes: the counter row prices the worst-case string for the page
count (widest numeral the counter can present); the label row is DOM
text at CONFIG.labelPx, not canvas-fitted. PIXEL-UNVERIFIED: no
real-browser render route exists in this seat; the table is
instrument evidence, and the same source also loads and runs under
the centered-metrics convention attempts 5-9 were instrumented under
(the two conventions agree on this source after R5b).
