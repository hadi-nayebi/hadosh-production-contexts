Timing score: **78/100**.

- Cards nominally swap every **1,300 ms**. The **950 ms** counter finishes with 350 ms to spare.
- Stamp lands at **8,600 ms**, holds for **1,100 ms**, then fades before the **10,000 ms** loop boundary.
- The whip’s full motion envelope is roughly **540 ms**: 180 ms out, 180 ms holding the incoming offset, and 180 ms returning. That exceeds the intended brief ~180 ms whip.
- Nested relative timeouts accumulate scheduling delays rather than correcting against an absolute timeline.
- Loop restart preserves `cardIdx` and restarts its counter. The card beginning at 9,100 ms gets interrupted at 10,000 ms, **50 ms before its counter completes**, then repeats.

The execution tool failed to start, so I could not write `lens-timing.md`, `build-record.md`, or `scores.md`. Findings are source-based; playback was not verified.

SCORE: 78
BODY-WRITE: No files written; pending record findings are correct nominal card/stamp/loop timing, an overlong whip envelope, drift-prone timeout scheduling, and a loop-boundary counter interruption with repeated card.
