Motion fidelity is strong for the assembly, weaker at the loop boundary.

The four animated arrivals occur individually at 1200/2300/3400/5600 ms, with ample separation. Hidden panels expose neither skeleton nor placeholders. The initial two panels match the supplied segment-start state.

The scale mechanism is valid: `--popFrom: 0.82` inherits from the stage; `.panel` consumes it; `.panel.on` resolves to `scale(1)`; and the transition explicitly animates transform over 180 ms and opacity over 120 ms. During normal playback, later panels have an established off-state before activation, so their scale transitions can run. The easing adds a small overshoot consistent with a pop.

Arrived panels hold their positions and scale. Absolute panel geometry prevents accumulating lyric rows from shifting the grid. The completed-grid hold is consistent with the supplied schedule.

The main weakness is the reset: fading **every** panel toward zero makes the field perceptually almost empty before the initial pair returns. This is an intentional boundary, but weakens the continuous discovered-panel rhythm. CSS opacity transitions also smooth the continuously updated fade target, so actual boundary opacity differs from the recorded arithmetic samples. Visible motion remains browser-unverified.

BODY-WRITE: Preserve the initial two panels through the reset and fade only later arrivals; verify actual browser interpolation across the boundary before claiming continuous discovery without an empty-field impression.
SCORE: 87
