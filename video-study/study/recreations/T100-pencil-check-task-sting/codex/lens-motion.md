Motion fidelity: **74/100**.

The source implements a coherent enter → draw → burst → hold sequence. ENTER now lands at `(160,198)`, the tick’s start; DRAW moves the pencil along the same path used for stroke reveal. The former phase-boundary jump is cured. Pencil and burst visibility are explicitly exclusive, and HOLD clears both transients.

Priced deductions:

- **−9:** Top-left entry reverses the measured top-right movement.
- **−7:** The straight, angular check replaces the measured curved stroke.
- **−7:** Fixed-position radial marks scale outward locally; they omit the separate curved-arrow and scattered-confetti movement.
- **−3:** The persistent checkbox and held checked state change the measured disappearance sequence.

Next attempt: preserve the repaired pencil/path continuity and phase isolation while restoring the measured entry direction, curved draw, checkbox disappearance, and arrow/confetti punctuation.

Hash binding requested: `a8c80b2a674e476c06789e0cd5046629a126be38f6ce8e34c71aa2d78b925fab`. **Not independently confirmed:** the execution tool failed before filesystem access. This review is based on the supplied source; no rendered playback was inspected.

SCORE: 74
BODY-WRITE: None; tool failure prevented filing codex/lens-motion.md. This return requires preservation there before consumption by scores.md.
