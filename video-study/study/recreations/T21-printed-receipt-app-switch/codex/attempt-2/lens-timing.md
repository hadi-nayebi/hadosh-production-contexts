Timing is checkpoint-priced throughout: `computeState` reads the table, and render introduces no independent phase boundaries. Paper-row exposure derives from print progress and shared geometry; LED typing derives from the 3200 ms print span, completing at 2080 ms.

The 12-second allocation gives each beat space:

- Print: 0–3200 ms, then 1000 ms fully printed before cards.
- Cards: enter at 4200 ms; settle at 4800 ms, leaving 2200 ms before phone entry.
- Phone/question: entry at 7000 ms; typing runs 7400–9500 ms.
- Reply: begins at 10300 ms, settles at 10650 ms; bridge begins at 11200 ms and settles at 11600 ms before looping.

Overrides remain coherent: `phoneAt` moves typing’s start and recalculates its window; duration-only overrides proportionally scale all checkpoints and subordinate durations. Invalid checkpoint changes are rejected and recorded.

The source strongly satisfies the timing specification. Exact perceptual tempo against the original remains unverified by playback; the supplied frame evidence establishes sequence more firmly than precise boundary timing.

BODY-WRITE: Preserve the checkpoint-derived timing construction; add synchronized reference/recreation playback evidence to verify the remaining perceptual tempo match.
SCORE: 98
