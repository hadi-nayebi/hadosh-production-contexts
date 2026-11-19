The checkpoint tempo matches well. `deriveCheckpoints()` produces 1@0 ms, 6@1500 ms and 14@2200 ms. `pageAtTime()` gives 300 ms per page transition before page 6, then 87.5 ms per transition through page 14: a clear acceleration, followed by a 400 ms final-page dwell.

Title timing also fits the measured window. Formation starts at 3100 ms; maximum title arrival is 4477.5 ms, and maximum halo arrival is 4552 ms, before frame quantization. Both complete near the reference’s 4.5–5.5 s resolution window. The hold phase runs from 4600 to 5700 ms, providing a real 1100 ms resolved beat.

Priced timing findings:

- **Rapid-page settlement is less reliable than the build record claims.** The 51.1 ms dwell calculation subtracts travel and stagger from ideal schedule intervals. Actual borrowing starts on the detecting `step()`, and `updateParticles()` captures a delayed particle in one branch but only moves it on a subsequent update. With 50 ms steps, page 7 starts at 1600 ms and page 8 replaces it at 1700 ms: a delayed particle captures at 1650 ms, then gets retargeted before its settling update. **Cost:** some rapid pages never display a settled frame at the permitted cadence. D5’s schedule model does not establish the runtime guarantee. Cure: test actual particle settlement at multiple frame offsets and account for capture/update ordering.

- **The turn is extremely brief.** `travelFlipMs: 28` puts the complete compression-and-return gesture inside approximately 1.7 frames at 60 fps. Frame alignment can miss its strongest compression. **Cost:** checkpoint numbers remain accurate while individual turns can read as flashes or replacements. Cure: verify sampled turn visibility alongside settlement under the preserved anchors.

- **The cycle is 6000 ms, but visual loop closure is unproven.** `TOTAL()` sums correctly and the seam occupies 5700–6000 ms. However, release retains particle positions and accumulated offsets; the next cycle borrows from that continuing state rather than reproducing its opening state. **Cost:** the phase schedule repeats, but a seamless visual loop cannot be certified from these checks.

Overall, the major beat proportions are faithful; runtime settlement and turn visibility keep this below a strong pass.

Body-write status: filesystem execution failed because the tool host was unavailable. Neither `lens-timing.md` nor `scores.md` was written. This return supplies the score and conditional cure list for the named consumer to file; carry-forward remains the five-lens decision.

SCORE: 84
