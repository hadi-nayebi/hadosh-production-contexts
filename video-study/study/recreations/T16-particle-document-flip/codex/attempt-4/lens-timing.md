The checkpoint proportions match closely: `deriveCheckpoints()` produces 1/14 at 0 ms, 6/14 at 1500 ms, and 14/14 at 2200 ms. Page intervals accelerate from 300 ms to 87.5 ms, followed by a 400 ms final-page hold. This reproduces the measured acceleration.

Particle travel fits those intervals: `travelFlipMs:28` plus maximum stagger of 8.4 ms leaves 51.1 ms before the next rapid page. However, the budget omits `turnMs:140` and `registrationMs:300`. The non-restarting turn spans multiple 87.5 ms pages, so some pages disappear while still compressed. The supplied harness’s 66.7 ms maximum rendered settled dwell supports brief readable flashes, but its `isSettled()` predicate excludes turn completion and registration. **Cost:** counter tempo is accurate; individual page gestures sometimes merge.

Title timing is strong. Formation starts at 3100 ms; the title finishes travel by approximately 4478 ms and the halo by 4552 ms. Including registration, both resolve by approximately 4852 ms, leaving about 848 ms before release at 5700 ms. This places condensation inside the measured 4.5–5.5 s band with a real resolved hold.

The phase durations total exactly 6000 ms, but the motion loop is incomplete: `seamReleaseMs:300` truncates `releaseScatterMs:500`. Next-cycle `startTravel()` cancels scattering for reborrowed particles before release finishes. Seam exclusivity prevents assignment overlap, but does not prove continuous motion. **Cost:** the restart can interrupt dispersal despite correct cycle length.

Carry-forward cures: budget visible turn completion alongside particle travel; verify page readability independently of `isSettled()`; complete release within the seam and check motion across 6000 ms.

Body-write status: filesystem tooling failed to start, so I could not read `build-record-attempt4.md` or write `lens-timing.md` / `scores.md`. The score and findings above remain unfiled.

SCORE: 85
