The counter accelerates correctly: `pageAtTime()` advances five pages over 1100 ms (220 ms/page), then eight over 1100 ms (137.5 ms/page). Page 14 lands at 2200 ms, followed by a 400 ms pause before release.

The middle checkpoint is early. CONFIG places page 6 at 1100 ms against the measured approximately 1500 ms; at 1500 ms the recreation displays page 8. Cost: the early flip beat is compressed, reducing fidelity to the measured acceleration.

Particle motion cannot finish between most counter changes. `travelFlipMs:230` plus randomized delays up to 103.5 ms gives 230–333.5 ms arrival times, exceeding both page intervals. Each change calls `releaseAll()` before borrowing new targets. Cost: the counter hits its marks while pages repeatedly lose their targets before settling, weakening the readable flipping cadence.

The resolution timing is strong. Title formation starts at 3100 ms and finishes by approximately 4478 ms; the delayed halo finishes by approximately 4552 ms. Both meet the measured 4500–5500 ms resolution window. The explicit hold runs from 4600–6000 ms, providing 1400 ms of resolved title and halo.

Timing cure priorities: move the middle anchor toward the measured 1500 ms while retaining the final anchor near 2000–2200 ms; shorten particle travel and stagger to fit the resulting page intervals. Preserve the title-resolution timing and final hold.

Body-write status: this return contains the score and findings for `codex/lens-timing.md` and subsequent `scores.md` consolidation. Filesystem tooling failed to start, so neither file was written. If the combined review fails, the timing cures above should carry into attempt 2.

SCORE: 80
