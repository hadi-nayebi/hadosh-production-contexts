Timing/tempo verdict: PASS at source/logic level; attempt 2 improves on its predecessor by satisfying both census states. Pool exit remains conditional on the complete five-lens result.

1. **Both census checkpoints pass.** At 10000 ms, the header is “Lifespan of,” the Sun is fully accumulated at 0.42, and dwarf row 1 is `(10000−9800)/2000 = 0.10` filled. At 12000 ms, the dwarf header is active, row 1 is full, and row 2 is `(12000−11800)/800 = 0.25` filled; later rows remain empty. These independently executed states match the supplied census descriptions. Evidence: `recreation.html:23–26,43–54`.

2. **Header timing is compatible, though its exact fidelity is unmeasured.** The switch occurs at 11000 ms, between the two binding observations: the initial header remains at 10000 and the dwarf header appears by 12000. The census establishes this interval, not an exact 11000 ms specimen transition. Evidence: `recreation.html:23,48`.

3. **Continuous growth and ending pass.** Cumulative onsets prevent gaps between row sweeps. Completion is `9800 + 2000 + 800 + 6×250 = 14100 ms`, leaving `15000−14100 = 900 ms` fully accumulated. Execution confirmed the final row at 0.996 at 14099, all rows full at 14100 and 14999, and reset at 15000. Evidence: `recreation.html:18,26,32–54`.

4. **Allocation is disclosed appropriately.** The 2000→800→250 ms sweeps provide an explicit accelerating allocation compatible with both checkpoints. They establish implementation timing, not measured specimen tempo. The packet leaves the predecessor’s 12200 ms completion and 2800 ms hold unresolved; I therefore do not treat them as an additional binding requirement overriding this lens’s explicit 14100 ms completion.

Further-attempt cure list: no demonstrated timing defect requires another build. To establish closer specimen fidelity, measure the actual header transition and later row progression, then compare playback of the allocated acceleration and 900 ms hold.

Limits: source/logic assessment only; no specimen playback or browser tempo assessment. Disk SHA-256 independently matches the supplied hash. This lens cannot establish the five-lens average or final tier.

SCORE: 92
BODY-WRITE: none (read-only run); consumer to file this return verbatim as codex/attempt-2/lens-timing.md and extract SCORE into scores.md.