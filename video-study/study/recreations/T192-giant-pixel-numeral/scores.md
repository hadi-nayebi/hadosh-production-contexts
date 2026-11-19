# T192 — Scores · Attempt 1 · Cycle 036 Wave 33 (A12.3 COMPLETION — scored)

**VERDICT: PASS — RECREATED.** Five-lens average 91.0 ≥ 85 AND minimum lens 82 ≥ 70.

- Build scored: recreation.html SHA-256 `2b80f53973790e295db0c9c128b51923d20f48f58a194003eb72f3c5c9644cdd` · 12,754 B (identical hash bound in all five lens payloads; verified before and after firing). Start-of-completion verification: the Wave 32 build d01198b7… (12,288 B) matched its filed hash before any cure was applied.
- Completion cures (jev-prewave firing-2 findings, both applied and re-verified with executable receipts in build-record.md's completion section): (1) seek() modulo wrap cured — seek is a non-looping clamped follower (0…CONFIG-derived cycle end), the standalone loop lives only in the internal clock, comparison slaveRec clamps to api.cycleMs; play/pause/restart/exit/trailing-handle observations filed. (2) Line swap execution evidence filed — harness captured render()'s fillText receiving "SAME FRAME, FIFTY YEARS LATER" (count=1, x=480, y=472.5).
- Pre-wave line: jev-prewave ×2 HOLD on the pre-cure build (Wave 32, filed jev-prewave.md + codex/jev-prewave-interim1.md) → A12.3 completion re-fire on the cured build = **FIRE-WAVE** (parameterization 1.0 · purity 1.0 · own-checks 1.0 · fidelity 1.0), filed verbatim at `jev-prewave-completion.md`, raw `codex/prewave-completion.raw`, payload `codex/payload-prewave-completion.txt` (60,847 B).
- A6 legs on the cured build: guard-measured-fit → `fit-table.md` RE-FILED with PIL rendered measurements (PROXY, stand-in DejaVu Sans Mono Bold): numeral ink 78.9 px at the 360 px stage PASS · line ink 5.0 px = 1 HIT carried ONLY with its specimen-geometry disposition · hierarchy 15.9:1. guard-config-census → `config-census.md` RE-FILED: 0 HITs.
- Own checks on the cured build: ALL PASS — all six A11 checkpoints at default AND swapped instants (each with its A12 executable receipt; timing swap moved 1500/2000/2500 → 1800/2600/3100, fixed anchors stayed), continuity ×3, separation, seek-clamp suite, standalone-loop receipt, swap-line PASS, purity grep 0 hits, both scripts parse.

## Five-lens scoring wave (fired on FIRE-WAVE, score-blind packets, identical-hash binding)
| Lens | Score | Return (verbatim) |
|---|---:|---|
| Motion | 82 | `codex/lens-motion.md` (= `codex/lens-motion-completion.raw`) |
| Timing | 92 | `codex/lens-timing.md` (= `codex/lens-timing-completion.raw`) |
| Purity | 100 | `codex/lens-purity.md` (= `codex/lens-purity-completion.raw`) |
| Reusability | 88 | `codex/lens-reusability.md` (= `codex/lens-reusability-completion.raw`) |
| Readability | 93 | `codex/lens-readability.md` (= `codex/lens-readability-completion.raw`) |

Arithmetic (seat-recomputed from the filed SCORE lines, guards.md command 4): 82 + 92 + 100 + 88 + 93 = 455 · average = 455 / 5 = **91.0** · minimum = **82** (motion). Bar: avg ≥ 85 AND min ≥ 70 → **PASS**.

## Lens findings carried to Condense (advisory, do not change the verdict)
- Motion (82, the minimum): two continuity cures for any future attempt — (a) the released→stream handoff at releaseStart + releaseMs teleports the particle to its seed-anchored streamPos (continue the wrapped stream from the released cell with releaseStart as time origin, check position/velocity across the handoff); (b) borrow-path initial velocity departs abruptly from the field and jitter amplitude does not taper to zero at lock (0.870 px gap at lockAt−1 measured). Both priced inside the named A-EXIT allocation; the specimen exit shape remains unmeasured under D2.
- Timing (92): record correction — D1's wording "build opens black" is inaccurate: PRE renders stream particles (5,898 visible loose at 0 ms); the supported description is "omits the signer tail; opens on the particle field." All six census anchors match in the harness; the follower exit-wrap defect is cleared.
- Reusability (88): gaps beyond the zero-hit census noted in the return (fixed alpha cutoff in sampleTargets; pool switch scope) — census classification stands as filed; priced for Condense.
- Readability (93): the carried line HIT priced knowingly (5.0 px ≈ 45% of floor; specimen-geometry disposition accepted; numeral carries the score at 78.9 px ≈ 7.2× floor).

- Tier: **RECREATED** (attempt 1, completed under A12.3 in Cycle 036 Wave 33).
- Render-proof limitation (guards.md command 2): pixel-level render proof is NOT exercisable from this seat (no browser binary) — printed limitation; the comparison page is the render surface. Playback evidence is logic-harness level (PIXEL-UNVERIFIED).
