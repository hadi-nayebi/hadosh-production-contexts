TIMING/TEMPO — **86/100**

The supplied source implements the allocated timing exactly: LAND occupies 0–1099 ms, HOLD begins at 1100 ms, and the cycle resets at 14000 ms. The cubic easing reaches 99.925% completion by 1000 ms, consistent with the specimen’s approximately one-second settle.

The main tempo mismatch is the hold. The measured specimen remains settled from 5.0–12.5 s, with replacement occurring before 13.5 s: approximately 7.5–8.5 seconds after settling. The build holds for 12.9 seconds. This follows the printed allocation, but matching the segment’s total duration does not reproduce its internal rhythm. The allocated hold reads substantially slower.

At the loop boundary, the fully visible card instantly resets to opacity 0, scale 0.92, and a 14 px rise offset. The clock wraps deterministically, but the visual reset is abrupt; the specimen instead advances to another card.

Next-attempt cures:
- To improve specimen tempo fidelity, revise the allocation explicitly: retain the approximately one-second landing and shorten the settled hold toward the measured interval.
- Define the loop’s visual handoff explicitly and verify playback across 13999→14000 ms. Arithmetic continuity alone does not establish a smooth visual loop.

Assessment uses the supplied source and measured-frame record; playback was not independently verified. The execution tool failed to start, so `codex/lens-timing.md` could not be written. The consumer should persist this return verbatim.

BODY-WRITE: none (read-only run).
SCORE: 86
