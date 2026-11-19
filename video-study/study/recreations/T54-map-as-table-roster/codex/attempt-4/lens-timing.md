The camera follows basis B correctly: regional hold to 1100 ms, widening to 2000 ms, full framing through 6000 ms, and pan-away through 7000 ms. The coarser sampling does not justify a deduction. The 84,550 ms run has a continuous allocation through placement, regional passes, return, and the 25,300 ms final hold. Default placement spacing preserves full 120 ms pops with maximum concurrency two.

Deductions from 100:

- **−7 — Opening state sequence differs from the observed segment.** The evidence describes an already-built roster; this run starts empty and spends the opening and full-map dwell assembling it. Matching camera anchors therefore does not reproduce the segment’s temporal state sequence. **Cure:** preload the roster for the observed segment and allocate placement to a separately timed demonstration.
- **−5 — Completion gets only about 78 ms before departure.** The last pop settles at approximately 5922 ms, leaving roughly 78 ms before pan-away. The later final hold is real and substantial, but the opening completion beat is effectively a flash. **Cure:** reserve an explicit completed-state hold before 6000 ms and derive placement spacing from the remaining budget.
- **−4 — Final reading time ignores label length.** Regional holds include a longest-label allowance; final groups receive only base plus 400 ms per name. Longer replacement labels can therefore retain the same exposure despite requiring more reading time. **Cure:** include a text-length allowance in each final group’s step and sum those steps into the duration.

Duration derivation and group coverage otherwise remain coherent on roster changes. Compressed placement schedules that exceed settle or concurrency limits are rejected rather than silently truncating pops. These conclusions assess scheduled time from the source; actual playback cadence remains unverified.

SCORE: 84
BODY-WRITE: Files the timing/tempo score, deductions, and cures for this attempt’s permanent lens record and the practice job’s Verify step.