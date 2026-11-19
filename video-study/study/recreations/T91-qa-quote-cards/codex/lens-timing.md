Timing score: **62/100**. The cycle arithmetic is exact, but matching the window’s duration does not reproduce its rhythm.

The supplied phase machine yields:

| Time | State |
|---|---|
| 0–450 ms | Schneier enters |
| 450–4200 ms | Schneier holds |
| 4200–4650 ms | Sal Khan enters |
| 4650–8400 ms | Sal Khan holds |
| 8400–8850 ms | Berners-Lee enters |
| 8850–14000 ms | Berners-Lee holds, including endhold |
| 14000 ms | Wrap to Schneier, entrance progress zero |

Slot boundaries have deterministic, exclusive ownership. The 12600 ms endhold boundary produces no visible change; it extends the last card’s residence to 5600 ms. Browser painting remains frame sampled, so mathematical boundary precision does not establish frame-exact presentation.

The main deficit is the allocation: the observed Sal Khan card is already present at window start, remains through approximately 10 seconds, and disappears by 12 seconds. Here it receives 4200 ms, including its entrance. Its 23-word quote has only 3750 ms at full opacity, before counting attribution reading. The three-card carousel therefore compresses the sustained authority beat substantially.

The source’s progressive quote growth also supplies internal pacing; the replacement presents all words together. That deferral is disclosed and governed, but still costs timing fidelity. Without dialogue or claim cue timestamps, the evidence cannot establish that these cards appear “at the moment of the claim.” The allocation label is honest; it does not establish equivalent rhythm.

Next-attempt cures:

1. Add a specimen-timed default: Sal Khan present at zero, retained through approximately 10 seconds, and absent by 12 seconds. Treat the precise exit time within that bracket as allocation.
2. Keep the three-card demonstration separately labeled, using per-card durations and claim cues where evidence exists.
3. Restore evidenced text-reveal pacing when permitted, or explicitly retain that fidelity limitation.
4. Verify rendered frames around slot boundaries and wrap, including initial paint and restart. Source logic alone cannot rule out an initial full-opacity flash before the first animation callback.

The execution tool failed to start, so I could assess only the supplied source and record; I could not verify the on-disk hash or persist `codex/lens-timing.md`.

BODY-WRITE: none (read-only run); consumer must persist this return verbatim to codex/lens-timing.md.
SCORE: 62
