Timing architecture is data driven, but the title sequence misses the supplied specimen checkpoints substantially.

- At 4000ms, the recreation has shown the entire first line since 600ms; the specimen is still typing it. There are no character-reveal checkpoints.
- At 4750–4900ms, the recreation already displays all of “IN HUMAN,” while the specimen shows only “IN.” “HISTORY” lands at 6200ms, at least 550ms after the specimen’s full-title checkpoint at 5650ms.
- The first line’s highlighted word remains yellow after 1300ms; the specimen requires that line complete and white by 4550ms. Sweep completion and colour restoration need separate timing records.
- Six cut records at 2400–13850ms and four chat pops at 1200–10600ms provide appropriate overall density. The 700–800ms sweeps are reasonable relative to roughly 2400ms cut intervals.
- The cut at 7300ms and chat at 7400ms remain independently timed, preserving the deliberate 100ms separation without imposing a global cadence.
- Override coherence is incomplete: duration-only scaling leaves `maxIdleTailMs` unchanged, so a 45000ms override rejects the proportionally scaled 3450ms tail. Text-only overrides such as `counter` also disable checkpoint scaling when combined with a duration change.

The reported harness supports internal consistency; it does not establish specimen timing fidelity.

BODY-WRITE: Carry forward a requirement for per-line character-reveal, completion, sweep, and colour-restoration checkpoints matching 4000–5650ms; separate text-only overrides from timing replacements and make duration-scaling tail policy coherent.
SCORE: 64