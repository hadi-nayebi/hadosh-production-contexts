# scores — T156 Isometric settlement diorama · attempt 1 · Cycle 025 Wave 22 (2026-11-16)
recreation.html SHA-256: 031cd2269e636fc471317ce441d084d28d1e4900207b8c498c4fdecca37d697d (identical across all five lens payloads and returns)
Segment facts: segment.mp4 cut 329.5–355.5 s from the archived source (window 330–355 ±0.5 handles), ffprobe duration 26.000 s, h264/aac 1920×1080.
Schedule basis: two-act (Act 1 segment-anchored fill, Act 2 allocation-model rise).
Render-proof limitation: LOGIC-level harness; no browser binary in this seat; comparison page is the render surface. PIXEL-UNVERIFIED.
jev-prewave: FIRE-WAVE on the final firing (parameterization 0.85 · purity pre-check and own-checks/fidelity dimensions ≥0.5 per the filed return; jev-prewave.md). Interim1 HOLD (ASSERTED-CHECKS 0.35) was APPLIED and cured — segment ffprobe raw output + determinism census filed in build-record — then re-fired; interim preserved as jev-prewave-interim1.md.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
Swap test: PASS (10-element table + hut palette #4a90d9→#d94a90 in effect at probes, no exception). Purity grep: 0 hits. Syntax: node --check SYNTAX_OK. Count assertion: source 21 vs built 21 — MATCH.

| lens | score | return |
|---|---|---|
| motion | 68 | codex/lens-motion.md |
| timing | 79 | codex/lens-timing.md |
| purity | 88 | codex/lens-purity.md |
| reusability | 82 | codex/lens-reusability.md |
| readability | 74 | codex/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 68+79+88+82+74 = 391; average 78.2; minimum 68. Bar: average ≥85 AND minimum ≥70.
**Verdict: FAIL — IN PROGRESS.**
Family baseline: T149 a1 PASS 92.8 (isometric sibling) — this attempt sits 14.6 below it.

## WHY — against the predicted stuck lens (reusability, RUN §2)
The Plan predicted REUSABILITY as the stuck lens (element-table completeness, T149's lesson). That prediction was half right: the element table IS complete (21/21, swap-proven) and reusability cleared the floor at 82 — but it did not land lowest. The actual floor breach is MOTION at 68 (<70), with timing 79 and readability 74 converging on the same root the reusability lens also touched in part: the rocket's rise geometry. Cubic decelerate over 300 px of travel from pad y=141 puts the rocket centre at y=−121.5 by 17500 ms — the visible ascent occupies only ~1.3 s of the allocated 5 s rise (timing lens), the cloud crossing reads as a single back layer with no foreground occlusion (motion + readability: cloudsFront is never populated), and the fill's later onsets spread the "settled by ~5 s" anchor thin (motion). Reusability's own cures are real but secondary: grid loops use cols for both axes with 6.5 endpoints, stateAt hardcodes holding/fillComplete thresholds, easeOut reads the global CONFIG, rocket tip/flame offsets are fixed.

Priced cures (for the practice pool):
- motion 68 (<70, floor breach): (1) re-map the rise so the visible ascent + cloud crossing occupy the full 15000–20000 window — gentler ease / travel derived from pad-to-top distance, full exit near 20000. (2) Populate cloudsFront so the rocket passes BETWEEN cloud layers (occlusion/reappearance). (3) Tighten Act 1 milestones: camp complete near 2 s, settled village readable near 5 s, later elements as detail.
- readability 74: enlarge sheep/figure/fire glyphs at phone scale, separate the sheep at (4,4) from the pen glyph, give field rows a contrasting colour (field #8a6d3b vs fieldRow #8a6d3b are identical — one row line is invisible).
- timing 79: same rise re-map as motion cure (1); recheck camp completion vs the ~2 s anchor.
- reusability 82: independent cols/rows grid loops with CONFIG-derived endpoints; derive holding/fillComplete from CONFIG; pass easePow through state calls; derive rocket tip/flame geometry from rocket w/h.
Verdict stands FAIL — IN PROGRESS; cures recorded for practice, not blocking.

---

# scores — T156 Isometric settlement diorama · attempt 2 · Cycle 019 Wave 18 (2026-11-17, practice)
recreation.html SHA-256: 7a82f7851e38a36b6821e601f1ed76953c5eaaeb5000b0e265e14cf9e0ff8d61 (identical across all five lens payloads and returns; snapshot codex/attempt-2/recreation-attempt-2-scored.html, same sha)
Plan: runs/2026-11-17-cycle-019-wave-18/plan-T156.md (as revised). Build record: build-record-attempt-2.md (attempt 1 preserved as recreation-attempt-1.html + attempt-tagged copies, Stage-0 inventory 26 files).
Rise-window basis: ALLOCATION (onset not census-resolved) — stated as allocation/unresolved in every payload, never as a measured anchor.
Staged checkpoints (A-C012-4 gate observed; census at close: all checkpoint shas match filed values, file times strictly in stage order 0→4): stage0 preservation · stage1 rise (C1+C2+C4c) · stage2 act1 (C3+C4b-fill) · stage3 config (C4a+C4b-hold+C4d; recomputed lowest rocket point = centre +42.000 exactly, no travel re-derivation) · stage4 glyphs (C5+C6 numerical: contrast 3.56:1 · spacing 6.00px · gap 4.50px · stroke 1.50px).
A-C008 legs (pre-wave, on the new attempt): fit-table.md HITs 0 · config-census.md HITs 0 (83 mutation rows, all consumed; one build-time catch — palette.fieldLine bound-but-unconsumed — cured in-cycle by removing the key).
Own checks: 58 PASS / 0 FAIL (swap test with effect mappings incl. 4×7 rectangular tile swap + easing decoupling swaps · displayed-state assertions incl. occlusion 0.551 @16500 / reappearance 0.000 @17500 · self-start · purity grep 0 · CSS-parse leg PASS). Payload manifest filed before firing (codex/attempt-2/payload-manifest.md); anchor scan CLEAN. PIXEL-UNVERIFIED stands.

| lens | score | delta vs attempt 1 | return |
|---|---|---|---|
| motion | 82 | +14 | codex/attempt-2/lens-motion.md |
| timing | 88 | +9 | codex/attempt-2/lens-timing.md |
| purity | 96 | +8 | codex/attempt-2/lens-purity.md |
| reusability | 89 | +7 | codex/attempt-2/lens-reusability.md |
| readability | 81 | +7 | codex/attempt-2/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 82+88+96+89+81 = 436; average 87.2; minimum 81. Delta vs attempt-1 average 78.2: **+9.0** (signed, one decimal). Bar: average ≥85 AND minimum ≥70.
**Verdict: PASS — bar met (avg 87.2 ≥ 85, min 81 ≥ 70).** Tier hand-off to the style-library board is the seat's act with this scores.md pointer.
WHY: NOT OWED — the attempt beats the prior average (+9.0) and passes the bar, so neither the floor-rule WHY nor the beating-below-bar residual record applies.
Score attribution: BUNDLED across all cures contributing to each lens (no separately scored variant was run): motion BUNDLED C1·C2·C3 · timing BUNDLED C1·C3 · purity BUNDLED C4 (all sub-cures) · reusability BUNDLED C4 · readability BUNDLED C1·C2·C5·C6.
Residual findings carried forward (from the filed returns, for any future attempt): motion — extended fill pacing vs the anchored progression (last hut completes 6.4s) and the trees "clearing" ambiguity; readability — figure/sheep/fire kind recognition at phone size remains proxy-priced (PIXEL-UNVERIFIED), pen stroke 1.5px at phone scale, single path diamond / village connectedness; reusability — glyph shape vocabulary and body corner radius remain code-side, CSS aspect ratio fixed independently of CONFIG stage dims.
Deviations (in build-record-attempt-2.md): D-STAGE-ORDER (minor, dx/dy consumption landed in the Stage-1 edit batch; values + assertions in Stage 4) · D-PLAN-VALUE (sheep dy +2 → 0 under the plan's own containment instrument). MID-CYCLE PREMISE AMENDMENT: none.
