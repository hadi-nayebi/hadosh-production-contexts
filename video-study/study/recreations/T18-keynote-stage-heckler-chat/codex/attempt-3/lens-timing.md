Timing is table-driven, but the title sequence misses the supplied frame checkpoints substantially.

- **Title build:** Line one appears complete at 600ms; the specimen still has it partially typed at 4000ms and complete by 4550ms. Line two appears complete at 4600ms, so it cannot reproduce the isolated yellow “IN” with the remaining words absent at 4750–4900ms. Line three appears at 6200ms, missing the full-title checkpoint at 5650ms. Per-line reveal-start, reveal-progress and completion records are needed.
- **Density:** Four chat pops span 1200–10600ms. Six hard cuts at 2400–13850ms broadly reproduce the requested fast-cut density. Title arrivals occupy the first half, but their internal tempo differs from the evidence.
- **Sweep:** The 700–800ms durations are proportionate to roughly 2400ms shot intervals and support per-line overrides. However, the sweep begins alongside an already complete line, losing the specimen’s word-build timing.
- **Close events:** The 7300ms cut and 7400ms chat pop remain independent. At 7350ms the new framing holds without the chat; at 7450ms the chat is 50ms into its 220ms pop. This is sound timing design.
- **Overrides:** Duration-only overrides scale event checkpoints and animation durations coherently within validation limits. Replacement tables retain absolute timing and receive ordering, overlap and tail checks. Residual inconsistency: text-only parameters such as `stats`, `counter` or `titles` also disable duration scaling; `maxIdleTailMs` remains unscaled, potentially rejecting longer proportional timelines.

This lens falls below the 70 floor. The reported harness supports implementation consistency, but its passing checks do not resolve the explicit specimen-checkpoint mismatches.

BODY-WRITE: Carry forward a required title reveal checkpoint table matching 4000/4550/4750–4900/5400/5650ms, verify partial-word states independently of highlight sweeps, and make duration scaling depend on timing-table replacement rather than unrelated text overrides.
SCORE: 66