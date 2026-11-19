**HOLD · ASSERTED-CHECKS** — T241 attempt 1, cured record.

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.45 |
| Fidelity-plan honesty | 1.00 |

- **A11/A13 — CP0’s receipt misstates the executed input.** The build record indexes `stateAt(CONFIG, CONFIG.timing.tReticleMs)`, but the filed harness calls `stateAt(CONFIG, 0)` and labels the result with the CONFIG expression. Both evaluate to 0 under the default CONFIG, so the PASS line hides the discrepancy. The receipt clears this finding when the harness evaluates `CONFIG.timing.tReticleMs`, passes that value to `stateAt`, and prints the evaluated instant and observed result. [Build record](../../../../study/recreations/T241-probability-board-opening/build-record.md) · [Harness line 25](../../../../study/recreations/T241-probability-board-opening/harness-t241.js:25)
- **A11/A12 — The array-only hold still lacks a CONFIG-derived in-interval check.** CP8m executes at a literal 9500 ms. CP8 executes at `durationMs` (13000 ms), beyond the mapped 7000–12900 ms census interval. A probe at `(dissolveEndMs + durationMs) / 2` preserves the 9500 ms default and moves to 10175 ms under the filed timing swap. The receipt needs the observed hold predicate at both evaluated instants. [Observe/Plan §2.2](item-T241-observe-plan.md) · [Harness line 57](../../../../study/recreations/T241-probability-board-opening/harness-t241.js:57)
- **Other evidence supports the build.** The cured log shows CP5 and CP5b executing at shifted instants of 5250 and 5050 ms. The fit table identifies PIL `ImageFont.getbbox` and DejaVu Serif as its measurement instrument and proxy font. The construction describes CONFIG-driven SVG and carries a zero-hit purity receipt. The binding Plan names the opening allocation, expansion offset, and T242 deferral. [Build record](../../../../study/recreations/T241-probability-board-opening/build-record.md) · [Fit table](../../../../study/recreations/T241-probability-board-opening/fit-table.md) · [Observe/Plan §2.2–2.3](item-T241-observe-plan.md)

**Limits** — Paperwork review with source inspection of the filed harness. Harness execution and browser pixels were outside this review.

**Body-write: none (read-only run)**
