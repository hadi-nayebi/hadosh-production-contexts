Timing score: **82/100**. This lens clears the 70-point floor; the five-lens average remains undetermined.

| Phase | Derived timing | Finding | Deduction |
|---|---|---|---:|
| Card entry | 2.8–3.1 s | Respects the empty 0–2.5 s window; title appears ahead of the ~3.5 s combined beat. | −2 |
| First line | 3.4–3.7 s | Close to ~3.5 s, but still entering at that anchor. | −2 |
| Remaining lines | Starts 4.0/4.6 s; complete 4.9 s | Main mismatch: all lines should be present by ~4.5 s. The 600 ms cadence stretches the reveal. | −8 |
| Count | Starts 5.3 s; complete 5.6 s | Follows the complete list coherently. No measured count-entry anchor supports a deduction. | 0 |
| Hold | Fade starts 10.5 s | Full-opacity hold ends ~0.5 s before ~11 s. | −3 |
| Exit | Fully gone 11.1 s | Finishes ~0.4 s before the ~11.5 s anchor. | −3 |
| Duration | 14.000 s | Exact match. | 0 |

Next attempt: use `lineMs: 400`, preserving line starts at **3.4/3.8/4.2 s**, with completion at **4.5 s**. With `countDelayMs: 400`, count entry becomes **4.9 s**; set `holdMs: 6100` and `fadeMs: 500` to hold until **11.0 s** and disappear at **11.5 s**. Preserve `durationMs: 14000`.

Source-based assessment only; **PIXEL-UNVERIFIED**.

BODY-WRITE: No file written: the execution tool failed to start (`codex-code-mode-host` missing). Intended destination: `codex/lens-timing.md`; the verdict is returned here.
SCORE: 82
