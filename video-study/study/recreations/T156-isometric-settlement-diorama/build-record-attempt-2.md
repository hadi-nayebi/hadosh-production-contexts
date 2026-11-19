# build-record — T156 Isometric settlement diorama · attempt 2 · Cycle 019 Wave 18 (practice)
Governing plan: runs/2026-11-17-cycle-019-wave-18/plan-T156.md (as revised, §13 consumption). Bar: average ≥85 AND min ≥70. Prior attempt 1: avg 78.2 (motion 68 · timing 79 · purity 88 · reusability 82 · readability 74), source sha 031cd226….
Skeleton (§2.6): RUN.md §2.6 names board entry `lane-2026-11-17-cycle019-skeleton` + heartbeat beat 91, read back by the seat before Execute opened — read-back result printed in RUN.md (exactly one entry; beat present in planned state).
Rise-window basis: ALLOCATION (onset not census-resolved) — stated as allocation/unresolved everywhere, never as a measured anchor (plan §2 conflict resolution).
PIXEL-UNVERIFIED stands over all geometry (A-C002-2): every value below is a source-model computation.

## Stage 0 — Preservation
Inventory: 26 files, machine-written, 0 malformed hashes; baseline cross-check MATCH ×3. Content copies filed create-once with inode ≠ working file (checkpoint-stage0-preservation.txt). Post-overwrite census: PENDING (filed below after first overwrite).

## C1 travel derivation (plan §2)
Flame tip = lowest rocket point at centre +42 px (attempt-1 geometry: flame base y+17 centred, polygon to y+34+8p → +42 max). Exit displacement needed = padY 141 + 42 = 183 px. travelPx = 183 + 12 exit margin = 195. Rocket ease decoupled: rocket.easePow 1 (linear) via cfg-passed easeOut(p, cfg) [C4c, Stage 1]. Cloud offset derived from raw riseP.

## Post-overwrite preservation census (A-C004-1)
After the working file's first overwrite, sha256sum -c against the Stage-0 inventory: every preserved copy OK (recreation-attempt-1.html · comparison-attempt-1.html · build-record-attempt-1.md · fit-table-attempt-1.md · config-census-attempt-1.md + all 20 codex/jev/scores files); the ONLY mismatch is recreation.html itself — the working file, mutated by design. Census result: PASS.

## Stage evidence (checkpoints create-once, inode-independent, A-C012-4 gate observed — no stage began before the prior checkpoint filed)
- Stage 1 (C1 + C2 + C4c): checkpoint-stage1-rise.html sha 8ebf5d76… inode 5423612 ≠ 5307275 + checkpoint-stage1-rise-checks.txt. Probes: centre@17500 43.5 · tip@19000 +25.4 · tip@19690 −0.41 · occlusion@16500 0.551 · reappearance@17500 0.000 · cloud offset on raw riseP (invariant under rocket.easePow swap).
- Stage 2 (C3 + C4b-fill): checkpoint-stage2-act1.html sha e3b3b065… inode 5423886 + checks. Camp complete 2000 · settled 9 elements by 5000 · derived fillComplete 12600 (hardcoded 13600 removed in this stage).
- Stage 3 (C4a + C4b-hold + C4d): checkpoint-stage3-config.html sha 2852f051… inode 5424354 + checks. Recomputed lowest displayed rocket point from derived geometry = centre + 42.000 px exactly → travel re-derivation NOT triggered (travelPx stays 195); C1 probes repeated on the Stage-3 source and PASS.
- Stage 4 (C5 + C6): checkpoint-stage4-glyphs.html sha a23eec96… inode 5425016 + checks. C6 numerical: contrast 3.56:1 · spacing 6.00 px · clear gap 4.50 px · stroke 1.50 px.
- Stage 5 (final): own-check suite on the final source — 58 PASS / 0 FAIL (swap test with effect mappings incl. rectangular 4×7 tile swap, rocket.easePow decoupling swaps, cloud layer swap by construction in drawClouds + census layer probe · displayed-state assertions · self-start · purity grep 0 · CSS-parse leg 11 declarations PASS · determinism 0 RNG hits). Syntax: node --check OK.

## A-C008 pre-scoring legs (on the NEW attempt, before the wave)
- guard-measured-fit → fit-table.md: HITs 0 (empty subject-text set + furniture rows + displayed-state model rows).
- guard-config-census → config-census.md: HITs 0 filed (83 mutation rows, all consumed). One build-time catch cured in-cycle: palette.fieldLine was bound-but-unconsumed after both field rows moved to palette.fieldRow — key REMOVED before scoring (recorded in config-census.md).
- Literal census: hex outside CONFIG 0; numeric literals classified per-literal in config-census.md (glyph local shape coordinates as glyph definitions · 0.68/0.32 flame profile · SVG namespace · structural constants). No unlisted literal.

## Comparison (§9 item 8 / Execute step 11)
comparison.html inspected: its recreation side is an iframe by reference (src="recreation.html") — no interface content is embedded in the page, so the new CONFIG keys require no comparison edit; labels unchanged; shared control + __seek −500 ms handle mapping unchanged; ORIGINAL side sha = inventory sha 2beb2b38… (file byte-identical). Comparison check PASS by inspection of the unchanged file + recreation __seek surface intact.

## Deviations printed
- D-STAGE-ORDER (minor): elementState's dx/dy consumption (a C5/Stage-4 mechanism) landed in the Stage-1 edit batch; the offset VALUES and their assertions landed in Stage 4 as planned. No stage gate depended on it; Stage-4 checkpoint asserts the values.
- D-PLAN-VALUE (in-plan adjustment, not a plan breach): sheep (4,4) offset dy +2 (plan value) failed the plan's own containment assertion (worst bbox corner 1.071 > 1); dy set to 0 per plan §10(b)(iii) (containment governs), distance 12.00 px, worst corner 0.976. Recorded in checkpoint-stage4-glyphs-checks.txt.
- MID-CYCLE PREMISE AMENDMENT (A-C008-1): NONE — no plan premise was contradicted by Execute re-observation; the Stage-3 geometry recompute confirmed the 42 px premise exactly.
- Source comments: inspected — all comments are neutral construction descriptions; no cure codes, amendment labels, or commentary present; no neutralization was needed (A-C008-4 scan result filed in the payload manifest).

## Scored source binding
Final recreation.html sha256: 7a82f7851e38a36b6821e601f1ed76953c5eaaeb5000b0e265e14cf9e0ff8d61 — snapshot create-once at codex/attempt-2/recreation-attempt-2-scored.html (inode 5426123 ≠ working 5307275, sha identical). All five lens payloads bind this sha. Payload manifest: codex/attempt-2/payload-manifest.md (filed BEFORE any lens firing).
PIXEL-UNVERIFIED: no browser binary in this seat; all geometry is source-model.

## Rescore wave (five lenses, fed reviews via the local Codex binary, guard codex-rescore-wave)
All five payloads + returns preserved create-once under codex/attempt-2/ (payload-lens-<lens>.txt · lens-<lens>.md), every return binding the identical final source sha 7a82f785…. No empty/interim returns occurred; no re-fires were needed. Working file sha re-verified identical to the scored snapshot after the wave.
- motion 82 · timing 88 · purity 96 · reusability 89 · readability 81
- Arithmetic: 82+88+96+89+81 = 436 → average 87.2 · minimum 81 · delta vs 78.2 = +9.0
- Verdict: PASS (avg ≥85 AND min ≥70). WHY not owed (beating + passing). Attribution BUNDLED per lens (scores.md filing).
- Checkpoint census at close: stage source copies' shas match their filed checkpoint values (8ebf5d76 · e3b3b065 · 2852f051 · a23eec96); file times strictly increasing stage 0 (06:01) → 1 (06:05) → 2 (06:05) → 3 (06:07) → 4 (06:08). CENSUS PASS.
- Floor-rule gate check (guards.md guard 3): new average beats 78.2 → no WHY owed; PLATEAU-UNNAMED does not print.
