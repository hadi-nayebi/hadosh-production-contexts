Verdict: TIMING / TEMPO MATCH does not support lifting the machinery as-is. Nominal arithmetic passes; endpoint scheduling and the claimed presentation interval need correction.

1. **Timeline arithmetic is correct.** In `recreation.html`, `buildTimeline`, `stateAt`, and `phaseAt` (lines 1006–1036) produce three appearances × (300 + 430 + 0 + 0) = **2,190 ms**. Executed boundary probes confirm dives start at 300, 1,030, and 1,760 ms; subsequent appearances start at 730 and 1,460 ms; wrap occurs at 2,190 ms. Half-open intervals correctly exclude zero-duration hold/pause steps.

2. **Total-window agreement conceals a tempo difference.** `build-record-attempt7.md`, “Evidence basis,” describes continuous camera motion without an observed static hold. The recreation spends **300/730 ≈ 41%** of each appearance stationary. Its 730 ms total fits the reported window, but its internal rhythm is an adaptation, not a demonstrated match. The dwell provides a brief tracker glance; reliable recognition of completed versus illustrated-target membership remains unverified. Cost: the reading task and specimen tempo cannot both be treated as established.

3. **The duration/scale pairing plausibly produces a dive.** Executing the source model gives endpoint scales of approximately **15.96× at 360 px** and **4.80× at 960 px**, rather than merely the configured 3.1× minimum. The configured easing reaches approximately 3%, 15%, and 40% interpolation at quarter, half, and three-quarter time. That concentrates substantial enlargement late in the 430 ms interval, supporting an accelerating plunge. This is a source-based assessment, not a viewed-motion verdict.

4. **Absolute scheduling prevents cumulative drift, but lateness reduces visible phase time.** `tick` schedules from the current phase’s remaining time; `startCam` evaluates current progress instead of restarting. Wholly elapsed phases can be skipped, as recorded. However, “never … compress a phase” in the build record’s construction notes is too broad: late entry necessarily leaves less displayed time before the unchanged deadline. Additionally, `flushPending` and `tick`’s post-render reconciliation can advance phases without calling `logSkipped`. Cost: the skip log is not a complete account of elapsed, undisplayed phases.

5. **Endpoint commitment exists, but “exactly one frame” is not guaranteed.** `presentEndpoint` commits the endpoint and deduplicates competing claims; `tick` normally defers reset through `requestAnimationFrame` (`recreation.html`, lines 1444–1545). However:
   - A camera-first claim does not itself schedule the deferred reset; its duration depends on the timer callback.
   - `tick`’s post-render reconciliation can call `applyStep` while an endpoint reset is pending, bypassing that deferral.
   - With nonzero configured hold/pause phases, the interval is not necessarily charged against a following dwell.

   Cost: the model’s blanket presentation-duration claim exceeds the source guarantee. A queued frame callback also does not establish a browser paint, correctly acknowledged under “Limitations.”

6. **Restart retains stale presentation identities.** `restart` resets elapsed time but does not clear `presentedKeys` or transition bookkeeping (`recreation.html`, lines 1434–1447, 1575). Previously used cycle/appearance keys therefore suppress new endpoint commitments after restart. Cost: repeated playback through the exposed restart command does not preserve the claimed endpoint behavior.

Limits: Read both permitted disk files; source SHA-256 matches the supplied hash. Independently executed arithmetic, boundary, easing, and model-scale probes. Browser painting, perceived motion, and tracker recognition were not verified; the reported harness suite was not independently rerun.

SCORE: 77
BODY-WRITE: none (read-only run); this verdict supplies the build record with verified timeline arithmetic and next-attempt findings on tempo adaptation, incomplete lateness logging, endpoint interval guarantees, and restart state.