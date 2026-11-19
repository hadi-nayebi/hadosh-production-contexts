Timing-only verdict: **PASS, 100/100 at LOGIC level; pixel timing remains unverified.**

| Check | Source result |
|---|---|
| HUD out ~0.75 s | Hidden exactly at 750 ms |
| Card entered by 1.0 s | Visible from 750 ms; reduced scale ≈0.726 at 1000 ms, showing 2037 |
| Flip samples | 2034 / 2030 / 2027 at 2000 / 2500 / 3000 ms; exact matches |
| 2026 settled at 4.0 s | Entry completes at 1650 ms; year is 2026 at 4000 ms |
| Ruler complete by 5.0 s | Draw runs 4300–5000 ms |
| Tick samples | 150 ms spacing yields 2 at 6000 ms and 9 at 7000 ms |
| Figure within 7.0–8.0 s | Figure and “?” appear together at 7500 ms |
| Settled hold | State remains settled from 7500 ms until wrap |
| Cycle and wrap | Modulo 14000 maps 14000 ms to the opening state |

The **ALLOCATION** choices comply: ruler draw starts inside 4.0–5.0 s, and figure arrival is exactly the bracket midpoint. These are valid allocations, not independently measured original instants. The logistic interpolation matches all three measured year samples.

No timing cure is required. This lens clears the individual floor; the overall tier still depends on the five-lens result.

BODY-WRITE: Filing `codex/lens-timing.md` was blocked because the execution tool failed to start; this return contains the intended file content, but no filesystem write occurred.
SCORE: 100
