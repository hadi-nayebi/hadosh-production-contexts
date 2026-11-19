The checkpoint proportions match well. `pageAtTime()` advances pages 1–6 at 300 ms intervals, then pages 6–14 at 87.5 ms intervals: a 3.43× acceleration, reaching page 6 at 1500 ms and page 14 at 2200 ms. The final page then holds for 400 ms before release.

The main timing defect is that the settled-dwell guarantee ignores frame scheduling. `computeSchedule()` subtracts 63.84 ms of travel and stagger from each ideal interval, claiming 23.66 ms minimum dwell. Actual assignments occur only during `step()`, and `updateParticles()` spends the capture frame without interpolating toward the target. At 60 fps, some rapid-page intervals become approximately 83.33 ms, with the slowest particles reaching their targets only on the replacement frame; the permitted 50 ms steps can remove settled dwell altogether. **Cost:** the accelerated counter remains accurate, but some pages may never visibly settle. Cure: verify settled rendered frames for every rapid page at realistic frame cadences, then budget against those observed intervals.

Title resolution is correctly proportioned. Formation starts at 3100 ms; maximum nominal title completion is 4477.5 ms, and halo completion is 4552 ms (`350 + 760 + 342` ms after formation begins). Both finish within the measured 4500–5500 ms resolution window, leaving approximately 1148 ms fully resolved before seam release at 5700 ms. The build record’s 4478 ms completion applies to the title alone.

The phases total exactly 6000 ms. The dedicated 300 ms seam releases assignments before the next page borrowing, supporting a clean lifecycle transition. Pixel continuity across that seam remains unverified: particle positions and RNG state continue across cycles, so this is a repeating schedule rather than an identical frame loop.

Body-write: this return supplies the timing score and frame-budget cure for `lens-timing.md`, for the seat to incorporate into `scores.md` and any carried-forward cure list. Direct filesystem writing was unavailable because the execution tool failed to start; no file update is claimed.

SCORE: 89
