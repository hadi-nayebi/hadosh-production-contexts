Timing is largely faithful, with one checkpoint mismatch.

- The 14 s loop matches the segment. At 6.5 s, `floor((6500−500)/700)+1 = 9`: LOOK and WHAT are complete, with only I lit on line 3.
- Cadence derives from the checkpoint span and live letter count. Intermediate timings are explicitly labeled an **ALLOCATION MODEL**, with uncertainty acknowledged rather than presented as measurements.
- The marquee completes at 720 ms, comfortably before the partial-facade anchor.
- **Completion checkpoint defect:** the fifteenth glyph lights at **10,300 ms**, because the first lights immediately at 500 ms. The facade therefore holds for 3.7 s; `lightComplete:11000` does not actually determine completion. Checking “all lit at 11000” misses this early completion.

Cure: define whether checkpoints mark first/last glyph onset or interval boundaries. For first/last onset semantics, derive spacing using `n−1`, recalibrate against the nine-glyph anchor, and verify that the facade is incomplete immediately before the completion checkpoint and complete exactly at it. Preserve the allocation-model label; additional measured intermediate timings cannot be inferred from this evidence.

BODY-WRITE: Record the 700 ms early-completion discrepancy in build-record.md and scores.md; require completion-boundary assertions alongside the existing anchor assertion.
SCORE: 84
