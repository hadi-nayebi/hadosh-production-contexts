# Build record — T16 particle document flip, attempt 10 (practice Cycle-030, Wave 29)

Final source: recreation.html, sha256 f9f9462a985c1e3f8cceb97eebeb6b26e9b3d594305951d8155f7490cfafc4e4.
PIXEL-UNVERIFIED (no render route; all verification source- and instrument-level, stub-canvas harness driving the actual frame() loop).
Score-blind record fed to the wave: build-record-blind-attempt10.md. Payload manifest (filed before firing): payload-manifest-attempt10.md. Pre-scoring legs: fit-table-attempt10.md (0 hits) · config-census-attempt10.md (132 live keys, 0 unconsumed).

## Preservation (Stage 0)

- Machine-written baseline preservation-baseline-T16-attempt10.txt (run dir): 229 entries (227 artifact files + plan + plan-review return), every hash 64-hex validated, count reconciled.
- Create-once content copies (NEVER hardlinks; inode independence asserted mechanically): recreation-attempt-9.html (inode 7276671 ≠ working 4298205), comparison-preserved-attempt-9.html, candidate-attempt10.html (inode 7276673).
- Post-promotion re-verification: 226/227 baseline artifact entries unchanged — the only difference is recreation.html itself (the promotion); recreation-attempt-9.html re-verified at the attempt-9 sha after the first live overwrite; comparison.html and segment.mp4 at baseline hashes.
- Replay copy: comparison-replay-attempt-9.html (create-once) — exactly one line differs from comparison.html (the iframe src points at recreation-attempt-9.html); the original side and the segment.mp4 reference are unchanged.
- Checkpoint: checkpoint-attempt10-stage0-owncheck.txt (filed + read back).
- FINDING F0 (priced at Stage 0, cured at Stage 4): under alignment-faithful canvas metrics the attempt-9 source refuses its startup resize at every tested size — the R5b defect (fit measured before draw alignment is set) is load-blocking under faithful metrics and was invisible under the centered convention prior attempts used. Attempt-9 control numbers were therefore taken under the centered convention; attempt 10 is instrumented under both, faithful primary.

## Stage 1 — R1 head cure (strict-readable gating + strict dwell)

Checkpoint: checkpoint-attempt10-stage1.html (sha 02c4f85b…) + owncheck-attempt10-stage1.txt, filed create-once in order, own-check green. GATE PASSED (no stop).

- Gating construction (the seat-verdict form, built as specified — no counter-correction substitute): presentedPage/presentedCycle state; the counter numeral renders only from presentedPage, which changes only on a strict-readable draw of the named page; qualification resets at every loop seam (a new cycle is un-presented — counter hidden, no numeral — until its own page 1 earns a strict draw); initDom() and resetRun() re-derived to the un-presented state; the presented-values record holds only qualified writes, cycle-tagged as {cycle, value} objects.
- Dwell: new key strictDwellMs (50) caps the effective turn inside every interval and is the feasibility budget's dwell term; minSettledHoldMs retired into the frozen SCHEMA (retiredMinSettledHoldMs) with both consumers and the range check moved. Checkpoint anchors (1@0 · 6@1500 · 14@2200), flipMs 2600 and the interval ladder (300 → 87.5 ms) untouched — dwell bought from the turn, not the anchors.
- Ladder (frame() clock): reserve 20 → window 20 ms, 0 strict draws on 6/8 rapid pages at 50 ms steps FAIL; reserve 37.5 → window 37.5 ms, pages 9+13 at 0 FAIL; reserve 50 → turnEff 37.5, effective strict window exactly 50.0 ms (turn completion binds; registration completes ≈1 ms inside it) — ADOPTED, the first rung meeting both cadences.
- Trace assertion (step 9) on the Stage-1 source: 12/12 grids PASS — cadences {60 fps, 50 ms} × offsets {0, 7.3, 13.1, 29.7} + boundary grids at 0.1 ms before/after the page-6 window edges at both cadences; two full cycles + restart + refused revalidation (a flipMs=50 mutation refused atomically, presentation bit-identical); exactly 3 strict draws per rapid page per cycle at 60 fps and exactly 1 at 50 ms, in both cycles; no second-loop 14/14 leak; seam draws un-presented.
- Attribution probes 9a (same-input scratch copies): P0 baseline / P1 gating alone / P2 dwell alone / P3 both. Strict draws on rapid pages 6–13 (60 fps / 50 ms): P0 8/2 · P1 8/2 · P2 24/8 · P3 24/8. Visible stale-counter ms: P0 1367/1400 · P1 0/0 · P2 1100/1100 · P3 0/0. The dwell buys the draws; the gating removes the stale presentation; neither alone does both.

## Stage 2 — R2 handoff origin/commit

Checkpoint: checkpoint-attempt10-stage2.html (sha 1f13deee…) + owncheck-attempt10-stage2.txt, filed in order.
Turning travel folds the DESTINATION around the pivot (capture origin preserved exactly); at exit completion the folded anchor position and anchor velocity commit before releaseParticle reads them, at both release sites. Own-check (Stage-1 source as control): max origin displacement at the capture tick 2.94 px over 7,075 captures (control 159.98 px); 14,426 exit releases, 0 commit violations (control 14,426/14,426); fold overlap no regression (0.0961 vs Stage-1 0.096, same instrument).

## Stage 3 — R4 scatter-cleared formation start

Checkpoint: checkpoint-attempt10-stage3.html (sha d06cc7da…) + owncheck-attempt10-stage3.txt, filed in order.
One cleared start (last outstanding scatter end, capped at the formation window) governs the label fade, both formation borrows, and hold-phase retries; delayed-borrow travel dates from the cleared start. Forced-scatter reproductions: label hidden and first title/halo borrows exactly at the cleared start with scatter ending inside form (4250) and inside hold (5000). Stage-2 checks re-run unchanged.

## Stage 4 — R5 edge set

Checkpoint: checkpoint-attempt10-stage4.html (sha 5aa43d07…) + owncheck-attempt10-stage4.txt.
R5a foldPlateauFraction deleted from live config (retired into SCHEMA; 0 live references). R5b fitText sets alignment + per-site baseline before measuring — F0 cured: the source now loads under faithful metrics (5,940 particles, 0 refusals; header ink box inside the page region; title ink box inside the stage). R5c empty sampling intersections return empty through the gate (never throw). R5d headerMinShare 0.02 and frameMaxSteps 40 exposed as config keys, consumed at the gate and both loop sites. Live keys 131 − 2 + 3 = 132. Generative sweep over all 132 fields through the validation route: 132/132 completed, zero problems.

## Stage 5 — R6 getter snapshots + restart from committed config

Checkpoint: checkpoint-attempt10-stage5.html (sha 3454192a…) + owncheck-attempt10-stage5.txt.
checkpoints and appliedConfig getters return detached snapshots; resetRun restores the committed configuration before rebuilding. Getter classification: particles / trace / transitions / diagnostics / REJECTED_CONFIGS / fit records remain live-by-design (they expose run state for inspection, not configuration); only the two configuration-bearing getters named by the cure are snapshotted. Own-check: external mutation of returned values changes neither the live anchors nor the rollback state; restart after an unvalidated edit restores the committed title; restarted borrow counts equal a fresh run at the same instant exactly.

## Stage 6 — R8 schedule cache (performance only)

Checkpoint: checkpoint-attempt10-stage6.html (sha f9f9462a… — identical to the final source; Stage 7 changed no source bytes) + owncheck-attempt10-stage6.txt.
computeSchedule caches no-arg resolutions keyed by committed-config identity + a fingerprint of schedule-determining values; candidate evaluations bypass. Own-check: repeated no-arg calls return the identical object (control: distinct objects), stable across 3000 ms of frames; post-commit resolution is a fresh object whose values equal the manual computation.

## Stage 7 — integration, freeze, legs, promotion

owncheck-attempt10-stage7.txt. Full suite on the frozen candidate: 10/10 PASS — dense exercise (84-char title fully assigned over two cycles, hold resolved, 0 seam violations; a 169-char title refused by the fit gate); 40 pages at 6000 ms REFUSED by the feasibility gate (fastest interval cannot carry the 50 ms dwell reserve + travel floor), 40 pages at 15000 ms ACCEPTED with every transition assigned (min interval 168 ms); config-only swap effective; URL route applies including the three new keys; self-start reaches the seam unaided; frameMaxSteps=3 still lets page 6 earn its strict draw at 50 ms callbacks.
Freeze order: comment scan on the candidate (clean — no attempt/score/lens language; no cleanup edit needed) → bytes frozen (sha above) → legs on that exact hash (fit 0 hits · census 132/0) → checkpoint-attempt10-stage7.html filed from the frozen bytes → promoted to recreation.html → promoted hash verified identical. Final-source trace assertion re-run on the promoted file: PASS (60 fps, 50 ms, and the 50 ms boundary grid). CSS parse OK.

## The wave (score-blind, five lenses)

Payloads per payload-manifest-attempt10.md (allowlist only; manifest filed before firing; per-lens scratch cwds containing only the byte-identical payload copy; fed stream, local Codex binary, --skip-git-repo-check; -o originals sha-verified against their create-once copies under codex/attempt-10/). Every firing preserved create-once. One interruption: a service restart killed the first reusability firing before any output existed (empty log, no output file — nothing partial to preserve) and readability had not started; both were re-fired clean and are the governing returns.

| lens | score | return sha256 |
|---|---|---|
| motion | 83 | 97d81e9dbd603773a3fd39b3a13a70537bece1070a00115928e4ca99e60d40b9 |
| timing | 90 | b11e99d862fc1e9705c08ce2a9102d66224cbf4df3b8aab7084e29427564f99f |
| purity | 98 | 1fafdfc988522e066636cbb718bc1c377ae5255b6b38f93a0f2f3c0ca6fb0adb |
| reusability | 83 | c51127b2b39bd112d3742fe87b2e4b597e4e574b9ab179d57fa39dfbc3702e7b |
| readability | 85 | f8c55bf720d4273a08b96417fe185bf2d09bf55a2f296304feee7de950fc08ef |

Total 439 · average 87.8 · minimum 83 · signed delta vs attempt 9's 84.2: +3.6. Verdict and class dispositions: scores.md, Attempt 10 filing.

## Deviations (named, per the binding rules)

1. **Checkpoint-gate sequencing (Stages 4–5):** the Stage-4 and Stage-5 checkpoint + own-check files were filed after the next stage's build had begun (the Stage-4 generative sweep's runtime forced the overlap). Each stage's source bytes were already frozen in scratch at its build, so no evidence was at risk; disclosed in owncheck-attempt10-stage4.txt and owncheck-attempt10-stage5.txt at the time.
2. **Sweep first form:** the generative sweep's first implementation drove assessFeasibility by direct config mutation and exhausted memory; it was rebuilt through the lawful route (mutate + revalidate(), per-field child processes). The OOM draft is disclosed in the Stage-4 own-check, not hidden; the filed sweep result is the rebuilt form's.
3. **Wave interruption:** the service restart above; no firing was lost or double-counted (the killed firing produced no output artifact).
4. **Instrument note (not a step deviation):** the fold-overlap numbers in this record come from the anchor-space checkpoint instrument; attempt 9's filed overlap figures used a different instrument definition, so only adjacent same-instrument comparisons are priced (Stage-1 vs Stage-2 vs a9-control re-measured on the same instrument).
