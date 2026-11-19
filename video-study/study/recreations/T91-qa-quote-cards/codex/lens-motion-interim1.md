Motion fidelity: **78/100**.

The source implements a coherent quote-card mechanic: frame, tag, mark, quote and attribution enter together through one parent’s opacity and translation. The HUD stays fixed. One DOM card and atomic content replacement ensure one-card-at-a-time sequencing without overlapping authorities.

The allocated entrance is restrained: a linear 450 ms fade with a 12 px rise, followed by a stationary hold. This faithfully presents the card as one designed unit and follows the governing one-unit decision. The three-card order and timing remain allocations; the supplied segment does not establish them.

The main fidelity loss is the omission of the specimen’s demonstrated internal movement: quote lines accumulate while the frame and attribution remain present. Revealing the complete quote during the card entrance changes that reading rhythm. The governed decision explains the difference but does not reproduce the observed motion.

The phase machine also has no exit or card-free interval. At 4200 and 8400 ms, the outgoing card disappears instantly and the incoming card starts at zero opacity. After 12600 ms, the last card remains visible through endhold, then disappears at wrap. These are deterministic boundaries, but they do not demonstrate the observed removal of the Sal Khan card by segment time 12 seconds. Matching the overall 14-second duration does not establish matching motion.

Next-attempt cures:

1. Preserve the whole-card entrance and add an optional progressive quote-reveal mode. Keep the frame and attribution settled while quote lines accumulate, using the observed 1→2→4-line progression as timing anchors.
2. Add an explicit exit and card-free phase. Treat exit easing and duration as allocation until further frames resolve them; verify the card is absent by the observed 12-second point in a segment-matched mode.
3. Check rendered boundary frames and playback for entrance continuity, stable attribution and complete card removal. This assessment uses the supplied source and observations; browser playback was not verified.

The filesystem tool failed to start, so this return could not be persisted.

BODY-WRITE: none (read-only run); consumer must persist this return verbatim at codex/lens-motion.md.
SCORE: 78
