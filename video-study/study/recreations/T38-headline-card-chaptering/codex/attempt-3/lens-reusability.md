Reusability is strong for well-formed pie and formula chapters: production can replace content, palette, geometry, styling, card count, and durations through CONFIG. The source supports the claimed bindings for weights, gradient, formula styling, and legend positioning; I found no declared-but-unused CONFIG key.

- **Timing and cardinality are substantially reusable.** Cards are constructed by iteration. Starts, boundaries, checkpoints, and total duration derive from card order and durations. Formation includes every staggered label, so added segments affect the deadline check automatically.
- **Hero edge cases have useful safeguards.** A one-segment pie has an explicit full-ellipse construction. Empty or zero-total pies and negative segments prevent card construction.
- **Swap evidence establishes effects.** The record names changed text, moved geometry, shifted downstream checkpoints, and exact formation results. These are meaningful mappings rather than a consumption count alone.

Remaining deductions:

- **−6: Empty card collections escape validation.** `cards: []` produces no validation errors and a zero-duration timeline. Playback then computes time modulo zero. An explicit empty-state or rejection path is needed.
- **−5: Malformed numeric inputs can bypass the fail-closed gate.** Required offsets, finite positive durations, and finite animation durations are not checked. A missing offset makes `formedMs` become `NaN`; the deadline comparison then fails to reject it. Invalid configurations can therefore reach construction.
- **−3: Equivalent CONFIG objects can validate differently.** Offset ordering uses `Object.values(card.relOffsets)`, making validation depend on property insertion order. It should compare named timing fields explicitly.

The fixed pie/formula construction vocabulary is appropriate for this container. Source review supports substantial reuse, while the validation gaps prevent treating it as a fully guarded production interface.

SCORE: 86
BODY-WRITE: This return supplies the verbatim codex/attempt-3/lens-reusability.md filing and the scores.md reusability entry of 86/100, including the three remaining cures; no filesystem write was performed in this review.