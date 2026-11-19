T16 attempt 10 closely matches the measured tempo. The counter accelerates sharply, and the title and halo settle within the catalogue window with a full hold. The main timing deduction is that the counter displays each checkpoint after its scheduled page entry.

`recreation.html`’s `deriveCheckpoints()` and `pageAtTime()` schedule five page changes in 1,500 ms and eight in the next 700 ms. That brings the interval down from 300 ms to 87.5 ms per page, a 3.43× increase in pace. `turnEffForInterval()` leaves a 37.5 ms turn and a 50 ms strict-readable window on the rapid pages. The supplied frame-loop record reports three qualifying draws per rapid page at 60 fps and one at 50 ms callbacks. That supports a rapid flip with distinct counter updates. The visual legibility of the fold remains unverified.

`draw()` waits for `isReadable()` before advancing the numeral. From `startTravel()` and the turn schedule, page 1 needs about 98 ms to register, page 6 can first qualify at 1,537.5 ms, and page 14 can first qualify at 2,340 ms, each followed by the wait for a draw. The 6/14 beat is close to the catalogue checkpoint. The opening starts without a numeral, and 14/14 lands at least 140 ms after its 2.2 s anchor, softening the end of the acceleration. If the combined verdict is FAIL, the timing cure is to initialize page 1 in its readable state and tune page 14 against its first qualifying draw while preserving the rapid pages’ readable dwell.

`segStarts()` and `TOTAL()` put release at 2.600 s, formation at 3.100 s, hold at 4.600 s, and seam release at 5.700 s in a 6.000 s cycle. The default phase-release scatter ends at 3.100 s, and the halo starts at 3.450 s. From `startTravel()`, the maximum scheduled travel plus stagger is 1,377.5 ms for the title and 1,102 ms for the halo. Both arrive before 4.600 s, and registration is capped at hold entry under these defaults. That puts joint resolution within the catalogue’s 4.5–5.5 s band and leaves 1.100 s of resolved hold. The checkpoints support the overall beat order and proportions. The catalogue gives no separate measured boundary for the release-to-form transition.

Limits. This review uses source-derived timing and the supplied stub-canvas record. Browser paint cadence and the perceived tempo against the specimen footage were unverified.

Body-write: none (read-only run)  
The timing score and findings are for `lens-timing.md` and `scores.md`. If the combined verdict is FAIL, the next attempt inherits the checkpoint timing cure above.

SCORE: 90