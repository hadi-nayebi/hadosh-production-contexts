Timing-only verdict: **passes this lens, 94/100**, based on the supplied source; pixel timing remains unverified.

| Check | Source behavior | Verdict |
|---|---|---|
| HUD out ~0.75 s | Hidden at 750 ms | Pass |
| Card entered by 1.0 s | Enters from 750 ms; visible at reduced scale at 1000 ms | Pass |
| Flip samples | 2034 / 2030 / 2027 at 2.0 / 2.5 / 3.0 s | Pass |
| 2026 settled at 4.0 s | Entry completes at 1650 ms; year is 2026 at 4000 ms | Pass |
| Ruler complete by 5.0 s | Draws 4300–5000 ms | Pass; 4300 ms is ALLOCATION |
| Tick samples | 2 at 6000 ms; 9 at 7000 ms | Pass |
| Figure within 7–8 s | Appears at 7500 ms | Pass; bracket midpoint is ALLOCATION |
| Settled hold through 14.0 s | Ruler changes from ink to accent at 12000 ms | Minor timing defect |
| Cycle and wrap | Modulo 14000; exactly 14000 ms returns to opening HUD | Pass |

**Next-attempt cure:** remove the 12000 ms ruler-color change so the completed composition remains unchanged from 7500 ms until loop wrap. Allocation choices satisfy the measured brackets but are not independently measured original boundaries.

I could not write `codex/lens-timing.md`: both filesystem-tool attempts failed because the execution host is missing. This verdict does not determine the five-lens aggregate tier.

BODY-WRITE: No file written; intended destination: codex/lens-timing.md. Review returned here for filing.
SCORE: 94
