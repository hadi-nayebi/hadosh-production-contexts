# Codex return — lens: MOTION (T12 attempt 1, filed verbatim 2026-11-14)

Motion fidelity: the core choreography is faithful, with one significant impact defect.

- Highlights grow left-to-right behind the text, run sequentially, and remain filled. This reproduces the reading-order sweeps. However, the intended line-wrap handoff depends on viewport width; the source does not guarantee it.
- The stamp accelerates from large to final scale at a fixed −7° rotation, compresses briefly, settles, and remains visible through the hold. These mechanics convey a convincing press.
- The card shakes **before contact**: shake begins when the stamp starts approaching, 190 ms before it reaches final scale. Most shake has decayed by impact, weakening the physical cause and effect.
- The card’s modest fade/rise is additional motion unsupported by the supplied technique facts, though it finishes before highlighting begins.

Assessment is source-based; playback was not verified. The filesystem tool failed, so this return could not be saved to `codex/lens-motion.md`.

BODY-WRITE: Start the card shake at stamp contact (`stampAt + stampPressMs`) and decay it afterward; guarantee the intended line-wrap sweep handoff at the target viewport.
SCORE: 83
