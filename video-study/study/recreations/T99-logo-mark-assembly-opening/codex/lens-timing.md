Timing/tempo earns **100/100** against the named **t=0 allocation**, rather than measured source timing.

- **Assembly:** starts at 0, 350, and 700 ms; each piece runs for 1900 ms. Completion times are 1900, 2250, and **2600 ms**, so the staggers are included correctly.
- **Resolve:** `allSettled && t >= CONFIG.assembleMs` prevents overlap with assembly. Wordmark progress runs from **2600–3800 ms**, exactly 1200 ms.
- **Hold:** completed mark and wordmark remain through **3800–14000 ms**, exactly 10200 ms.
- **Loop:** `2600 + 1200 + 10200 = 14000`; modulo resets the animation at that boundary, matching the segment duration.
- **Basis disclosure:** the record explicitly distinguishes allocated timings from the catalogue’s 0–3 s window and measured disassembly. No silent rebasing.

No timing cure is required. File access failed because the execution host was unavailable, so no score file was written.

SCORE: 100
BODY-WRITE: none (read-only run)
