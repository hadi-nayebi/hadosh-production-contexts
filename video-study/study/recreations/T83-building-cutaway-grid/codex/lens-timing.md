Timing lens: **94/100 — clears this lens’s threshold.** Source-only review; pixels remain unverified.

- **Pull-back:** completes at exactly 3000 ms, matching the observed wide-by-~3 s bound.
- **Settled hold:** the composition remains unchanged from 3000–9500 ms, matching the observed ~3–~9 s hold. The labeled `holdMs: 4200` does not describe this actual visible interval; it is schedule bookkeeping.
- **Rings:** absent at 8000 ms; the first floor fades in from 9500–9800 ms and is present at 10000 ms. All floors finish by 12400 ms. This satisfies the measured onset bounds. The stagger order is honestly labeled ALLOCATION.
- **Dim:** ramps from 12000 ms to the cycle boundary, consistent with end-window darkening. Its exact start and duration are allocations rather than measured timings.
- **Cycle:** modulo 14000 matches the 14.000 s segment exactly. The standalone loop resets at that boundary.

**Next-attempt cures:** distinguish the actual 3000–9500 ms settled interval from the bookkeeping phases; explicitly label the precise ring onset, stagger spacing, fade duration, and dim interval as allocations within observed bounds. These are documentation precision deductions, not demonstrated timing failures.

The filesystem tool failed to start, so I could not save `codex/lens-timing.md`.

BODY-WRITE: No file written; the timing verdict is returned above for filing verbatim at codex/lens-timing.md.
SCORE: 94
