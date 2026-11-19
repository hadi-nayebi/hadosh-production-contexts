Timing/tempo: **78/100**.

The source defines a 14,000 ms cycle using modulo arithmetic:

| Phase | Interval | Duration |
|---|---:|---:|
| Enter | 0–1,400 ms | 1,400 ms |
| Draw | 1,400–2,300 ms | 900 ms |
| Burst | 2,300–3,100 ms | 800 ms |
| Hold | 3,100–14,000 ms | 10,900 ms |

The `t=0 allocation` label is honest: these durations are prescribed, not measured source timings. Changing draw duration preserves the cycle by consuming residual hold time. Visible transitions remain subject to animation-frame scheduling.

Priced deductions:

- **−12:** The source’s pencil/check and subsequent punctuation occupy approximately 3.5–5.0 s in the sampled evidence. The recreation stretches its active sequence to 3.1 s, weakening the quick sting tempo. Half-second sampling limits exact comparison.
- **−7:** The 10.9 s checked-state hold occupies **77.9%** of the cycle. The measured source continues into cursor and transition beats; this hold is an extraction choice without measured timing support.
- **−3:** Entry finishes at the tick’s endpoint; drawing immediately starts at its beginning. That boundary creates an instantaneous positional jump, interrupting temporal continuity.

Next attempt: measure source onset and disappearance boundaries more finely, shorten the active allocation accordingly, and make entry terminate at the drawing start. Preserve the labeled extraction basis and 14,000 ms cycle.

Hash binding supplied: `4097261127138c7adc93de5fe632a25dc4d1ae7d0ef71b3e82f3db0e1f68ead4`. **Independent hash confirmation and file writing were unavailable because the execution tool failed to start.** This assessment uses the pasted source.

SCORE: 78
BODY-WRITE: No file written; intended destination is hidden_files/study/recreations/T100-pencil-check-task-sting/codex/lens-timing.md.
