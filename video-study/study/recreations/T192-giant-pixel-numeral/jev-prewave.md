# T192 — jev-prewave, FINAL firing (firing 2 of 2) · Cycle 035 Wave 32

Verdict: **HOLD · ASSERTED-CHECKS** (own-checks completeness 0.5; parameterization 1.0 · purity 1.0 · fidelity-plan honesty 1.0).
Firing 1 (against build 8892f056…): HOLD · ASSERTED-CHECKS — swap log incomplete (CP-23.5/CP-26.0 swap results missing) + comparison Play/Pause did not drive the recreation. Both findings cured, re-verified, re-fired once per the gate rule. Firing 1's verdict section is filed verbatim at `codex/jev-prewave-interim1.md`; its full session raw at `codex/prewave-attempt1.raw` (157,618 B).
Firing 2 (against final build d01198b7…): the verdict below, verbatim from the Codex return (full session raw at `codex/prewave-attempt2.raw`, 138,263 B; payload at `codex/payload-prewave.txt`). The swap finding is CLEARED; a new comparison finding stands (seek() modulo wraps the exit checkpoint to PRE through the trailing handle) plus a line-swap execution-evidence gap.
Disposition (task rule): second HOLD = STOP — the five-lens wave was NOT fired. The item remains IN PROGRESS. No third firing was attempted in this cycle.

---

**HOLD · ASSERTED-CHECKS** — T192 attempt 1, Cycle 035 Wave 32. The re-fire clears the six-checkpoint swap finding. The comparison still wraps to PRE at the exit checkpoint, contradicting the filed synchronization check.

| Dimension | Score |
|---|---:|
| Parameterization | 1.0 |
| Purity pre-check | 1.0 |
| Own-checks completeness | 0.5 |
| Fidelity-plan honesty | 1.0 |

## Findings

- **The A11 swap evidence is complete.** The final log records results for all six binding checkpoints. The duration swap moves CP-23.5, CP-24.0, and CP-24.5 to 1,800, 2,600, and 3,100 ms. CP-23.0, CP-26.0, and CP-27.0 stay at 1,000, 4,000, and 5,000 ms. The previously missing results are explicit. CP-23.5 reports above-front occupancy of 1.000 and 1,341 rain particles. CP-26.0 reports occupancy of 1.000. [Build record](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/build-record.md:53) · [Binding amendment](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/plan-amendment-cycle035.md:23)
- **The comparison shows the wrong phase at the exit and through the trailing handle.** I executed both filed scripts with stubbed media and canvas APIs. At video time 5.499 s, the seek handler displays recreation time 4,999 ms in RELEASE. At 5.500 s, the mapping passes 5,000 ms to `seek()`, whose modulo wraps it to 0 ms in PRE. At the 6.000 s cut end, it displays 500 ms in PRE. The cure is to make comparison playback a non-looping follower of the video clock, clamped from 0 through the CONFIG-derived cycle end, and file the observed play, pause, restart, exit, and trailing-handle results. Standalone playback can retain its loop. [Filed comparison check](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/build-record.md:82) · [Comparison clock](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/comparison.html:35) · [Recreation clock](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/recreation.html:228)
- **The planned line swap has an application site and still needs an execution result.** The record describes the alternate line as a CONFIG-only change. The raw output records numeral, palette, and timing swaps. A harness result showing `fillText` receiving `SAME FRAME, FIFTY YEARS LATER` would close the line-swap check. [Swap output and summary](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/build-record.md:53) · [Line render](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/recreation.html:217)
- **Parameterization, purity, and fidelity disclosure clear the paperwork check.** CONFIG drives runtime glyph sampling and rendering. The recreation hash matches the record, both inline scripts pass syntax checks, and the specimen and external-reference scan returned zero hits. The fidelity plan names the omitted signer tail, allocated exit, and line fade. The binding Observe disposition resolves the digest’s particle-line wording in favor of the crisp line seen in the census. The fit leg carries its disclosed line-height hit at 360 px, where 10.9 × 0.375 ≈ 4.1 px. [CONFIG census](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/config-census.md:17) · [Fidelity plan](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/build-record.md:89) · [Observe plan](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-034-wave-31/item-T192-observe-plan.md:11) · [Fit table](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T192-giant-pixel-numeral/fit-table.md:4)

**Limits** — The comparison probe used stubbed APIs. Live browser playback, rendered pixels, phone legibility, and the builder’s original rasterizer harness remain independently unverified.

**Body-write: none (read-only run)**
tokens used
45,585
