# Timing / tempo match — 66/100

**Verdict: below the 70-point lens floor.** The cycle duration matches, but the seed-state hold materially misses the measured window.

- **Cycle:** `3 × 4200 + 1400 = 14000 ms`, exactly matching the 14.000 s segment.
- **Entry:** the transition runs at 4.200–4.550 s, within the observed 3–6 s entry bracket. This is a compatible allocation; the evidence does not establish the exact 350 ms duration.
- **Hold and return:** the build begins returning at 8.400 s and settles to scene year 2037 by 8.750 s. The original still shows year 2026 and the card at 13.500 s. Thus, the recreation contradicts the observed state for at least 4.750 s before that final sample.
- **Allocation honesty:** the return and equal-length phases are explicitly declared allocations. No concealment penalty applies. Disclosure, however, does not establish a timing match.
- **End hold:** the 1.400 s extension is honestly named and implemented. Combined with the third scene phase, it extends a state unsupported by this window.
- **Loop:** the default final and initial states are identical, giving a logically continuous wrap at 14.000 s. This is source-level evidence only.

**Next-attempt cure:** retain an entry within the measured 3–6 s bracket and hold the seed state through at least 13.500 s. Resolve the return and loop closure separately as explicit allocations; independent phase durations would permit this. Measure additional source frames before claiming an exact transition duration.

BODY-WRITE: Filing `codex/lens-timing.md` failed because the execution host was unavailable; this return supplies its intended contents. No workspace file was changed.

SCORE: 66
