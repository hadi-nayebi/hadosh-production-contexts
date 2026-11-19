Timing/tempo score: **92/100** for the supplied hash `8d0c6dea…703b276`.

The cured source defaults to **segment mode**, superseding the earlier cycle description:

| Phase | Measured specimen | Recreation |
|---|---|---|
| Entry | ~3.5–4.5 s | 3.5–4.5 s |
| Full-size hold | ~4.5–8.5 s | 4.5–8.5 s |
| Recession | Resumes ~9.0 s; tiny by ~9.5 s | 8.5–9.0 s |
| Reduced hold | ~9.5–14.0 s | 9.0–14.0 s |

**Deduction −8 — recession arrives early.** The recreation starts shrinking at 8.5 s and finishes at 9.0 s, approximately 500 ms ahead of the measured recession landmarks. Cure: set `segment.recedeAtMs: 9000`, retain `recedeMs: 500`, and document 8.5–9.0 s as the approximate transition shoulder.

Entry and full-size hold match the measured allocation: 1000 ms entering, followed by 4000 ms holding. These proportions are defensible.

The optional three-card cycle is a livery demonstration, not a timing match: its 550 ms entries and 2400 ms holds compress the specimen’s allocation and repeat within the window. **No deduction applies to the default segment playback**, which uses one specimen card and stops at 14 seconds.

This judgment covers supplied source and records only; rendered playback, perceived tempo, and actual legibility remain unverified. This lens clears the minimum of 70; no overall tier recommendation is computed.

BODY-WRITE: Not filed. The execution tool failed to start, preventing the write to `hidden_files/study/recreations/T56-recreated-press-cards/codex/lens-timing.md`; the complete return is above.
SCORE: 92
