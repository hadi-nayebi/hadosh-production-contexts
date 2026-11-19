Motion fidelity: **76/100**.

The source implements a coherent quote-card mechanic: one card owns the stage, and its frame, tag, quote, and attribution fade and rise together over 450 ms. The HUD remains stationary. Content swaps at slot boundaries, so outgoing and incoming cards never overlap.

The governed one-unit entrance is a reasonable allocation for presenting each answer as a designed unit. The segment does not establish an entrance, so the allocated fade and rise cannot be credited as observed fidelity. The main loss is the specimen’s evidenced internal movement: quote lines accumulate while the frame and attribution remain present. Here, the entire quote appears with the entering card.

The phase machine also lacks a card-clear state. Each outgoing card disappears instantly as the next entrance begins; the final card holds until wrap. This preserves exclusivity but does not reproduce the observed departure into another graphic. The evidence establishes disappearance, not a particular exit animation.

Next-attempt cures:

- Add a specimen-faithful mode: keep the frame and attribution settled while progressively revealing quote lines. Retain one-unit entry as the governed alternative.
- Add an explicit clear/transition phase so a card can leave before the next graphic. Do not invent a source-specific exit animation without evidence.
- Verify entrance, intermediate reveals, boundaries, and final clearance in browser frames. This assessment is source-based; rendered motion was not inspected.

Filing failed because the execution tool could not start; `codex/lens-motion.md` was not written. The consumer must persist this return verbatim.

BODY-WRITE: none (read-only run).
SCORE: 76
