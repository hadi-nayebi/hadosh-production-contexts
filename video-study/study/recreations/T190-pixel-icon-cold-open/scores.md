# Scores — T190 pixel-icon cold open · attempt 1 · Cycle 036 Wave 33 (completion of Cycle 035 Wave 32)

**NO VERDICT — IN PROGRESS** (§6.4). The five-lens scoring wave was NOT fired in this completion: the single Amendment A12.3 jev-prewave re-fire on the cured build returned **HOLD**, and the wave does not fire over a HOLD. No lens scores exist — none are claimed.

## Build binding
- Cured build on disk (verified firsthand at this completion's start): recreation.html 14,989 B · sha256 `1996454c4c69593c85b4de1aea4770c27981b0f9e690963d3b12bfe81ea78a23` — byte-identical to the build the Wave-32 close filed; no code cure was priced or applied in this completion.

## Prewave line — all three firings
1. First firing (Cycle 035, pre-cure build 14,942 B · sha256 `c77e922b…`): **HOLD — ASSERTED-CHECKS** (`codex/jev-prewave-interim1.md`): parameterization 0.90 · purity 1.00 · own-checks 0.25 · fidelity-plan 0.90. Cures applied in full and confirmed by firing 2's finding 2.
2. Second firing (Cycle 035, same pre-cure build): **HOLD — ASSERTED-CHECKS** (`jev-prewave.md`; raw `codex/jev-prewave-return.md`): parameterization 0.85 · purity 1.00 · own-checks 0.45 · fidelity-plan 0.90. Its finding 1 named a real renderer defect (fitted caption fontPx never applied; caption band usable height mis-accounted) — cured post-HOLD in the build above (renderer applies `lay.fontPx`; caption band content-box, usable 64 px ≥ 61.6 px stack).
3. Completion re-fire (Cycle 036, Amendment A12.3, cured build `1996454c…`): **HOLD — ASSERTED-CHECKS** (`jev-prewave-completion.md`; raw `codex/jev-prewave-completion-return.raw`; payload `codex/payload-prewave-completion.txt`): parameterization 0.90 · purity 1.00 · own-checks 0.45 · fidelity-plan 0.95. Findings 3–4 CONFIRM the completion's A12 executable receipts (build-record completion section R0–R8: CP1–CP8 + CP5b + band sweep at both tempos, renderer-cure arithmetic, fresh PIL measured fit, purity zero hits, fidelity deferrals named). Findings 1–2 are the cure list below — both verified firsthand as real record defects; neither indicts the build.

## Cure list (from the completion re-fire, both cures FILED post-HOLD in this completion — they do not change the HOLD)
1. **Seeded-RNG census receipt missing** (guards.md command 3's determinism leg): R6 filed `node --check` only. Cure filed in build-record.md's completion-result section: `grep -nE 'Math\.random|[Ss]eed|RNG|random' recreation.html` → exit 1, zero hits — no RNG in the build; `stateAt` is a pure function of (t, CONFIG).
2. **`scenes[].id` missing from config-census §2 + R8's key-for-key claim overstated**: the key exists in all five scene objects and IS applied (`stateAt` returns it as `sceneId`; CP receipts price it), but the census table omitted its row. Cure filed: the application-site row added to config-census.md §2 with post-HOLD provenance printed on it, and R8's claim corrected on the face of build-record.md.

## Own-check summary (cured build, fresh this completion — full receipts in build-record.md)
Harness ALL PASS (CP1–CP8 + CP5b + band sweep 140 samples/0 violations + count predicate poses==6 + fit rows + renderer-cure assertions + swap at beatScale 0.8 with every instant moved as its CONFIG expression predicts + 71-char swap fit at fitted fontPx 27.4 + ink swap) · purity PASS (0 hits, both patterns, grep exit 1) · syntax PASS (`node --check`, logic 10,890 B + render 3,041 B) · A6 legs PASS (fit-table measured rows reproduced by a fresh PIL run, Receipt R7 · config-census HIT list empty after the `scenes[].id` row cure).

## Next act (named consumer: the seat / next recreation cycle)
A further prewave firing on this build is not authorized by A12.3's single re-fire. The seat prices at its next cycle: a new firing authorization on the now-cured record, or a paperwork-standard amendment first (R6-form receipts must include the command-3 determinism leg; census key enumerations must be extracted mechanically). Until a firing returns FIRE-WAVE and the five-lens wave runs bound to sha `1996454c…`, this item prints IN PROGRESS and no lens scores exist.

Render-proof limitation (guards.md command 2): pixel-level render proof is not exercisable from this seat; the comparison page is the render surface. Registration limits: bound film is a trade-press re-upload — version fidelity UNVERIFIED · cut count UNVERIFIED.
