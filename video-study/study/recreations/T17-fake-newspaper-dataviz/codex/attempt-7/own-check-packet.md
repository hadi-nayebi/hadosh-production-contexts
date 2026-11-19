# T17 — own-check packet (neutral: check names, inputs, results)

Instrument: stub-DOM mount harness executing the file's own builders + pure-logic suites. Result on the scored source: 45 checks, 45 PASS, 0 FAIL. Claim census: every modelled claim in the harness's inventory has a mounted counterpart asserted — emitted-structure rows (E) and source-derived geometry rows (G) counted separately; browser-measurement rows: 0 (PIXEL-UNVERIFIED).

Mounted-structure checks (E):
- Connector layer mounted between CEO and report row @360 and @390: PASS (child order card, connector layer, row, connector layer, row, badge).
- Connector endpoints distinct per report @360 and @390: PASS (4 distinct endpoints).
- Stamp wrapper mounted top inset equals modelled reserve @360/@390/@960: PASS (22.2 / 24.2 / 35.5 px).
- Badge handwritten segment mounted font size equals modelled size: PASS (14 = 14).
- Every CSS class selector matches an emitted class: PASS (0 dead selectors; validation-branch classes excluded by construction).
- Non-wrapping rule binds the emitted title class: PASS.
- Stack unit explicit line height fits inside its borders: PASS (line height 12, inner height 12, label size 12).
- Remount palette reader applies the new palette to the new meta row: PASS.

Source-derived geometry checks (G):
- Stamp projected AABB above its box within the cleared inset: PASS (22.2 projected vs 38.2 cleared @360).
- Callout arrow direction toward its dot: PASS (label centre 43.3, dot centre 76.0, label right edge 60.0, dot left edge 64).
- Handoff outgoing opacity continuous at 1 ms sampling: PASS (max step 0.0061, bound 0.01); visibility floor held over its interval: PASS (minimum 0.350).
- Final counter value displayed hold: PASS (0.625 s, floor 0.6 s).
- Post-construction fit at 360/390/960: PASS at all widths (stage heights 553 / 553 / 540); long-content stamp case priced by fit; rejected-fit case (wide waffle) reports not-ok on the final sizing.

Validation corpus (each input produces named errors; validation never throws):
- Defaults valid: PASS (0 errors). String-typed duration: named error. Missing fonts group: named error. Missing line-chart labels member: named error. Zero sample step: named error. Null figure: named error. Missing org-chart nodes: named error. Empty org-chart nodes: named error. Infinite-magnitude (400-nines) duration: named error. Huge finite sample step: named error. String-typed timing value: named error. Missing layout group: named error.
- Fit report retains the rejected figure and reports not-ok: PASS (6 rows retained).
- Rebuild: invalid input rejected without mutating the live configuration: PASS. Construction failure after valid input restores the prior configuration and returns a named error: PASS. Rebuild with a changed palette succeeds and applies it: PASS.
- Single-source values: parallel stamp-padding keys absent: PASS. Pre-cliff diagnostic derives its printed bound from its configuration key: PASS. No hardcoded label line-height literal in the stylesheet: PASS. Label line-height key consumed by the layout model: PASS (header height moves with the key).

Measured fit (source-derived, 360/390/960): all six figures fit and width-ok at all three widths; 0 failing containment rows. Fonts at 360: masthead 20, title 17, body 12, label 12, big counter 20, hand 14.

Configuration census (mutation-based, against this file's own configuration): 206 non-content leaves probed, 164 consumed by the generic probe; the remaining 42 each carry a named consumer in the census record (page chrome at top level, equality selector keys, validation-boundary keys, clamp-masked geometry keys, easing keys consumed at intermediate samples).

Self-start: the piece starts playback on its own as a top-level document: PASS.
