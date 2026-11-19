The schedule broadly matches the evidence: two panels enabled at t=0, five enabled by 3500 ms, and six by 5600 ms. The first three arrivals are spaced 1100 ms apart. The final 2200 ms gap breaks the stated ~1–1.2 s cadence, though the sparse source frames cannot establish its exact timing.

At 3500 ms, panel five is still revealing: its opacity completes at 3520 ms and its transform at 3580 ms. Five panels are present, but the fifth has not settled.

Typing correctly accumulates four lines at 42 ms/character from the specified starts. The completed grid holds for 6100 ms before the reset fade begins at 11700 ms, leaving ample time for the lyrics to finish.

The loop boundary needs work. Opacity’s 120 ms CSS transition also affects the continuously updated fade, so sampled `--fade` values do not prove displayed opacity. At wrap, all lyrics disappear abruptly while the two initial panels recover opacity. Their initial `.on` assignment may also animate on load; `initial:true` is never consumed to guarantee an already-settled initial state.

The 2000 ms minimum-duration literal sits outside CONFIG. Other operational timing values are configured.

BODY-WRITE: Record the 2200 ms cadence exception; explicitly suppress transitions for initial-state panels and loop resets, and verify displayed boundary opacity and lyric reset during continuous playback rather than relying on sampled state values.
SCORE: 84
