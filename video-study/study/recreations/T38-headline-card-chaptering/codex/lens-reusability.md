Reusability falls below the 70-point lens floor. Most content is driven by CONFIG, but a disconnected geometry key and incomplete swap evidence prevent production clearance.

- **Unapplied sizing key:** `geom.pieSize` is declared as `34cqw`, and `pieSVG()` reads `var(--pieSize)`, but construction never sets that CSS variable. Changing CONFIG cannot control the pie’s displayed width. Add `pieSize` to the geometry property loop.
- **Shaping literals outside CONFIG:** CSS fixes headline/label/pill weights at `800`, other weights at `700`, the background gradient endpoint at `70%`, and formula styling to italic. These are visual decisions that contradict the claimed complete geometry/style surface.
- **Cardinality limits:** `CONFIG.cards.map()` supports additional cards, but the pie renderer’s single SVG arc cannot draw a complete 360° segment correctly. A one-segment pie needs an explicit full-ellipse case. Empty or zero-total segment lists also lack validation.
- **Swap evidence is incomplete:** §5(a) reports a useful three-card swap, palette change, data change, and timing change. However, no executable harness or outputs accompany this packet, and the stated structural checks do not establish rendered sizing or fit. The missed `pieSize` binding undermines §5(c)’s “unapplied CONFIG keys: 0” claim.
- **Timing remains manually coordinated:** adding or moving cards requires editing absolute checkpoints, start/end times, and total duration separately. CONFIG can express those changes, but no runtime validation prevents incoherent sequences.
- **Minor census discrepancy:** `timingModel.anchorNote` is unused. It is documentary metadata, but the census should distinguish metadata from applied rendering controls.

The strongest reusable parts are the card-list construction, two hero renderers, data-derived pie angles, segment labels, formula parts, palette, and entrance parameters.

Prioritize wiring `pieSize`, exposing the remaining style decisions, handling pie edge cases, and preserving reproducible swap checks with rendered evidence.

SCORE: 68
BODY-WRITE: This return supplies the verdict for codex/lens-reusability.md and citation from scores.md; no files were written because the execution tool failed to start.
