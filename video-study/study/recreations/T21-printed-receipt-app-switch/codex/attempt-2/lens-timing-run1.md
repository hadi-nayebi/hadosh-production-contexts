Timing is checkpoint-priced and closely matches the requested 12-second allocation:

- Print: 0–3200 ms, followed by a 1000 ms receipt hold. LED typing derives from 65% of the print span; row reveals derive from fed paper length.
- Cards: enter at 4200 ms, finish fading at 4800 ms, hold until phone entry at 7000 ms.
- Phone/question: phone enters at 7000 ms; typing runs 7400–9500 ms.
- Reply: starts at 10300 ms, finishes at 10650 ms, holds fully until the bridge at 11200 ms. The bridge completes at 11600 ms, leaving 400 ms before restart.

`computeState` reads the checkpoint table throughout; render introduces no independent phase boundaries. A `phoneAt` override moves typing onset through the derived `typeStart`. Duration-only overrides scale every checkpoint and subordinate duration together.

The remaining uncertainty is specimen fidelity: the supplied frame evidence establishes sequence, but does not independently establish these exact original transition times. The source strongly satisfies the prescribed timing model; frame-exact tempo matching remains unverified.

BODY-WRITE: Preserve the checkpoint-derived timing construction; add specimen-relative transition timestamps to the permanent timing record so future scores can distinguish prescribed allocation from measured tempo fidelity.
SCORE: 96
