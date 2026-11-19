# T210 — Threshold grid-map (the road to 270) · scores · attempt 1, Cycle 037 Wave 34

Bound build: recreation.html sha256 `254add09d9893154b845977434d620affb04b635146c56f3705ef806085e5df5` (16,597 B). Segment: segment.mp4, 9.007681 s (source 138.5–147.5 s, window 139–147 s ± 0.5 s handles), sha256 `84408d967b0f1bccfd8d50d265f75ab9b79420d3ef0cc0275a7d8b84f7e2c8f7`.

## Pre-wave gate (jev-prewave)
- **Firing 1** (build sha c025574e…, 16,465 B): **HOLD** — ASSERTED-CHECKS · parameterization 0.85 · purity pre-check 1.00 · own-checks completeness 0.35 · fidelity-plan honesty 0.85. Return: `codex/jev-prewave.md`. One cure round applied (CONFIG-expression probe instants · fuller checkpoint state · expanded receipt index · renderer grid-settle bound to `tGridSettleMs`); fresh own-checks on the cured build 23/23 PASS.
- **Firing 2** (final build above): **HOLD** — ASSERTED-CHECKS · parameterization 0.90 · purity pre-check 1.00 · own-checks completeness 0.45 · fidelity-plan honesty 0.95. Return: `codex/jev-prewave-refire.md`.

## Verdict
**NO VERDICT — two-HOLD stop (Amendment A12).** The five-lens scoring wave was NOT fired on this build; no lens scores exist and none are claimed. The item stands IN PROGRESS (attempt 1, mid-attempt in this job per A3 §3 — it does not route to practice unscored). Its completion — cures filed, fresh own-checks + A6 legs on the cured build, ONE jev-prewave re-fire, then the five-lens wave on FIRE-WAVE — is the next recreation cycle's charge in completion form (A12.3).

## Priced cures for the completion (from firing 2's named defects, verbatim pricing)
1. **Hold-dependent swap probe.** The hold swap (`holdMs` 2000 → 1200, durationMs 8000 → 7200) was probed at `completeAtMs + 1000` = 7000 ms under BOTH schedules — the instant does not move with the swapped key. Cure: probe a hold-dependent expression under both schedules with both evaluated instants + observed state printed (the return names CP6's expression form: `completeAtMs − holdMs` evaluates 4000 default → 4800 swapped).
2. **Stale receipt-index line.** Build-record §5's command-2 line printed the superseded "3000→1950" post-swap movement while its own §2 receipt and C12 row record 3000→2100. Cure: reconcile every index line against its receipt at filing (the A13 reconciliation must diff index text against the raw output it cites, not only check line presence).
3. **CP9 whole-state equality receipt.** CP9 printed per-region (fill/draw/credited) equality + aggregate terms but no single whole-state equality result including gridProgress. Cure: one receipt evaluating deep state equality CP9 vs CP8 (all region terms + aggregates + grid/post/plate terms) with the raw boolean + any differing field named.
4. **Palette swap observed output.** SWAP-PALETTE printed the swapped input (`#2e9e6b`) and cited census sites without recording observed stroke/fill values from the swapped build. Cure: the receipt evaluates the renderer's side-A stroke + fill values under the swapped CONFIG and prints them.

## Own checks + A6 legs on the final build (for the completion's starting state)
Own-checks 23/23 PASS (build-record §2 raw output) · purity grep 0 hits · syntax rc=0 ×3 scripts · RNG absent · fit-table 0 HITs carried · config-census 0 HITs.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable Chrome in this seat): no lens verdicts exist; all own-check evidence is source/harness-based; the comparison page is the render surface.

---

# Cycle 038 Wave 35 — A12.3 COMPLETION (attempt 1, completion of Cycle 037)

Bound build (unchanged): recreation.html sha256 `254add09d9893154b845977434d620affb04b635146c56f3705ef806085e5df5` (16,597 B). Segment: segment.mp4, 9.007681 s, sha256 `84408d967b0f1bccfd8d50d265f75ab9b79420d3ef0cc0275a7d8b84f7e2c8f7`.

## Completion cures (from Firing 2, all applied and measured — build-record §7)
1. Hold-dependent swap probe — CURE1: CP6 form `completeAtMs − holdMs` evaluates **4000** (default, holdMs 2000; observed credited 63/58, pending 95, filled 261, durationMs 8000) → **4800** (swapped, holdMs 1200; observed credited 122/113, pending 25, filled 331, durationMs 7200). Instant moves with the swapped key.
2. Receipt-index diff reconciliation — every §5 index line diffed against its cited raw output (not presence only): one stale line found (§5 cmd 2, "3000→1950") and cured to **3000→2100**, matching its §2 receipt; all other lines match their raw on the fresh run.
3. CP9 whole-state equality — CURE3: single deep-equality receipt CP9 vs CP8, **deepEqual=true, differingFields=[]** (all 16 region terms + aggregates + grid/post/plate terms; credited 258/264, filled 356, gridProgress 1, postProgress 1, plateOpacity 1, plateLayer top).
4. Palette swap observed output — CURE4: renderer side-A **fill=#2e9e6b, stroke=#2e9e6b** observed under the swapped CONFIG (side-B control unchanged #5b84ae).

## Fresh own-checks + A6 legs (Cycle 038, final build)
Own-checks **23/23 PASS** (build-record §7 raw) · purity grep 0 hits · syntax rc=0 ×3 scripts · RNG absent (grep 0). A6 legs re-verified fresh: fit-table **0 HITs** (re-measured ink 58×20 @28 px · height 12 px @16 px · contrasts 18.88:1 / 15.43:1, identical to filed) · config-census **0 HITs** (re-scanned: chrome hexes only, var(-- 0, keys as filed). Neither A6 file changed.

## Pre-wave gate (jev-prewave, A12.3 completion re-fire — ONE firing)
**FIRE-WAVE** — parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.95 · fidelity-plan honesty 0.95. Return: `codex/jev-prewave-completion-cycle038.md` (+ `.raw`). The return notes the §2-era "moved hold probe" wording at 7000 ms is inaccurate as a movement claim and that CURE1 supplies the required movement evidence — recorded here as the return states it; no defect was held against the build.

## Five-lens scoring wave (Cycle 038, identical hash all five)
| Lens | Score | Return |
|---|---:|---|
| motion | 72 | `codex/lens-motion-cycle038.md` |
| timing | 90 | `codex/lens-timing-cycle038.md` |
| purity | 98 | `codex/lens-purity-cycle038.md` |
| reusability | 78 | `codex/lens-reusability-cycle038.md` |
| readability | 88 | `codex/lens-readability-cycle038.md` |

Recomputed (guards.md command 4, from the filed returns): sum 426 · **average 85.2** · **min 72** (motion). All five returns bind sha256 `254add09d9893154b845977434d620affb04b635146c56f3705ef806085e5df5`.

## Verdict
**PASS — average 85.2 ≥ 85 AND min 72 ≥ 70 (the recreation law).** T210 attempt 1 is **RECREATED-tier** on this build. Lowest lenses (motion 72, reusability 78) carry the cure material for any future attempt/practice consumption; no re-fire is owed on this attempt.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable Chrome in this seat): all own-check and lens evidence is source/harness/paperwork-based; the comparison page is the render surface.
