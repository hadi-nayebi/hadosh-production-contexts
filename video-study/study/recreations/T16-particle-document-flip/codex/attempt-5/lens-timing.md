The checkpoint proportions match closely: `deriveCheckpoints()` places pages 1, 6 and 14 at 0, 1500 and 2200 ms. `pageAtTime()` gives 300 ms early intervals followed by 87.5 ms rapid intervals—a clear acceleration—then holds page 14 for 400 ms.

Rapid-page settlement is fragile. `turnEffForInterval()` reserves only 20 ms after each 67.5 ms turn; the build reports 16.7 ms of readable dwell at 60 fps and readable frames on only 2–4 rapid pages at 50 ms sampling. Cost: the intended rapid flip lands, but fully registered pages can disappear between displayed frames. Additionally, turns use scheduled timestamps while `startTravel()` uses detection time, so late frames can push registration beyond the nominal turn end.

Title timing fits the measured resolution window, although the named hold starts prematurely. Formation begins at 3100 ms; maximum title travel plus stagger ends at 4477.5 ms, followed by 300 ms registration, giving full resolution around 4777.5 ms. The ring resolves around 4852 ms. Both therefore finish inside the reference’s 4500–5500 ms range, leaving approximately 848 ms of genuinely resolved hold before the 5700 ms seam.

The cycle totals exactly 6000 ms, but seamless playback is not guaranteed by that arithmetic. `releaseAll()` timestamps seam releases at the frame that detects seam entry. Late detection moves their completion past the boundary; `borrowFresh()` then excludes those still-scattering particles when the next page is assigned. Also, `frame()` caps elapsed time at 50 ms, so slow frames lengthen the cycle in wall time. Cost: possible incomplete first-page formation and tempo drift under load. Pixel-unverified evidence leaves the perceived seam unconfirmed.

Carry-forward timing cures: anchor lifecycle events to scheduled boundaries, verify complete first-page assignment across frame offsets at rollover, and measure resolved dwell using registration completion rather than phase labels.

Body-write status: filesystem tooling failed to start, so I could not write `codex/attempt-5/lens-timing.md`. The score and findings above are the review return; no file update is claimed.

SCORE: 86