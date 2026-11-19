# scores — T157 Detection-UI gag · attempt 1 · Cycle 025 Wave 22 (2026-11-16)
recreation.html SHA-256: 0cea8be577e6a3db76c92cfdf78ae6a8aa5be49188990e8d8b5d5f3c148cf1f8 (identical across all five lens payloads and returns)
Schedule basis: t=0 allocation (named; segment 380.00–395.00 s; phases allocated against census states at segment-relative ~8500 ms scope standing and ~14500 ms banner; segment.mp4 cut 379.5–395.5 with ±0.5 s handles, 16.000 s, comparison maps recreationMs = videoMs − 500). The timing lens was told this basis explicitly in its payload and scored 82 against it.
Segment facts: segment.mp4 16.000 s, h264/aac 1920×1080, ffprobe-verified.
Render-proof limitation: LOGIC-level harness only; no browser binary in this seat; comparison.html is the render surface. (This limitation is priced in the returns: the readability and reusability lenses both caught a DOM-placement defect the logic harness could not see — see cures.)
jev-prewave: HOLD (parameterization 0.75 · purity pre-check 0.90 · own-checks completeness 0.35 · fidelity-plan honesty 0.95; primary ASSERTED-CHECKS; jev-prewave.md) — SET ASIDE by the builder under the advisory-verdicts ruling, reason recorded: the HOLD's charges are (1) the A6 measured-fit instrument itself (a character-width table priced as formula-claimed rather than measured) — the lane's demonstrated fit instrument, the identical method carried at T154/T139, and no browser binary exists in this seat to produce rendered ink bounds; the limitation is printed PIXEL-UNVERIFIED in every record; and (2) census site counts aggregated over shared property names — the census's value-flow read is per-object in the build record, and the wave's reusability lens independently resolved the real application sites (it found the genuine defect elsewhere, in the badge text's missing y). The wave fired over the HOLD with this disposition printed (WAVE-OVER-HOLD, recorded).
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
Own checks: swap PASS (exact §2 swap: banner text → "Signal Acquired" · badge → (562,128) · banner colour → #2b6ae0; no exception, swapped values in effect at the 14500 ms probe) · purity grep 0 hits · node --check PASS.
Count assertion: RUN tables bars 7 vs built 7 — MATCH (harness counts in build-record.md).

| lens | score | return |
|---|---|---|
| motion | 64 | codex/lens-motion.md |
| timing | 82 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 80 | codex/lens-reusability.md |
| readability | 58 | codex/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 64+82+100+80+58 = 384; average 76.8; minimum 58. Bar: average ≥85 AND minimum ≥70.
**Verdict: FAIL — IN PROGRESS.**
Family baselines: T11 a1 FAIL 80.4 · T22 a1 PASS 88.2 — this attempt's 76.8 sits below both siblings.
WHY against the predicted stuck lens (readability, RUN §2): the prediction landed — readability is the minimum at 58 — but NOT through the priced mechanism. The banner text fit, the priced failure class, PASSES on the lens's own read (ink 177.6 px vs 235 px ribbon at 360 stage, 15 px effective font, white bold on opaque magenta). Readability failed on two unpriced defects: (1) the badge glyph "!" never renders inside its badge — badgeT's y attribute was never set, so the glyph sits at the SVG origin while its circle sits at (218,292); the state harness cannot see DOM placement, so every own check passed over it; (2) the galaxy arms + core render at opacity 0.70 (reserveIntensity 0.45 + galaxyOpacityBoost 0.25), violating the Owner Cure 1 reserve ceiling ≤0.5 the build claimed to implement. Both are real, mechanically checkable defects — priced as the practice pool's primary cures.

Priced cures (for practice):
- readability 58 (<70, the floor failure): (1) set badgeT y = cfg.badge.y (one line; convergent — the reusability lens named the same defect independently) and verify the glyph centres in the badge at both the original and swapped badge positions. (2) Cap galaxy arms + core opacity at the CONFIG reserve 0.45 — remove or negate galaxyOpacityBoost so the scope never exceeds 0.5.
- motion 64 (<70, convergent with timing): (1) the region does not draw on — the dashed ellipse (dasharray 9 7) is fully revealed the moment regionP > 0 and the dashoffset only marches the dashes; cure = a progressive perimeter reveal (separate continuous stroke mask / path-length reveal) over 4500–6500 ms, verified by visible-perimeter coverage at start/midpoint/completion, not regionP alone. (2) the banner entrance is a uniform scale (the priced scale-trick class); cure = a positional slam with travel overshoot + settle over 450 ms at fixed banner dimensions. (3) secondary: speck twinkle uses sin(cyc/period) without 2π, so the configured 1100 ms period actually oscillates at ~6912 ms; cure = sin(cyc/period × 2π + phase).
- reusability 80 (<85): (1) badge glyph y (convergent with readability cure 1). (2) #stage height 56.25vw is CSS-fixed while viewBox derives from CONFIG — derive stage aspect from CONFIG. (3) galaxy arm count (2) and grid stroke-width (1) are code literals outside CONFIG — expose as keys or narrow the contract claim.
- timing 82 (<85): the region's visible draw duration (convergent with motion cure 1); allocated milestones, serial onsets, and both census states otherwise pass on the lens's own read.
Verdict stands FAIL — IN PROGRESS; cures recorded for the practice pool, not blocking this filing.

# scores — T157 Detection-UI gag · attempt 2 · Cycle 019 Wave 18 (2026-11-17, practice)
recreation.html SHA-256: 65826bd6e0a298dd102749edec6f27a1ac2ea5e91e4dfdbe704e6545338f8b49 (identical across all five lens payloads and the filed source snapshot, codex/attempt-2/source-snapshot.html)
Schedule basis: t=0 allocation (named; segment 380.00–395.00 s; phases allocated against census states at segment-relative ~8500 ms scope standing and ~14500 ms banner; segment.mp4 cut 379.5–395.5 with ±0.5 s handles, 16.000 s, comparison maps recreationMs = videoMs − 500). The neutral-facts packet carried this basis plus the allocated-vs-observed onset distinction to every lens.
Plan: practice runs/2026-11-17-cycle-019-wave-18/plan-T157.md (as revised; plan-review consumption in its §11). Build record: build-record.md (attempt 2; attempt-1 record preserved at build-record-attempt-1.md). Preservation: full baseline equality 12/12 before any touch; five content copies taken create-once, each verified in the act (hash + inode); post-overwrite census PASS, 0 mismatches. Staged checkpoints S1–S5 filed under checkpoints/attempt-2/ under the A-C012-4 gate (no stage began before its predecessor's checkpoint).
A-C008 legs (pre-scoring, on the NEW attempt): fit-table.md HITs 0 · config-census.md HITs 0 (103 CONFIG keys, mutation census 103/103 consumed).
Own checks: full suite PASS — swap test with effect mappings (A-C002-1) · config consumption census (A-C006-2) 103/103 · literal census (A-C008-3) no content literals outside CONFIG · displayed-state + DOM-placement assertions (A-C004-2/A-C008-2) at original and swapped badge positions · independent mask verification · self-start assertion (A-C010-2) · CSS-parse leg · purity grep (single internal mask fragment reference, no specimen media or external loads) · node --check PASS · comparison check PASS (ORIGINAL side byte-identical to its preservation copy). PIXEL-UNVERIFIED stands (no browser binary in this seat).

| lens | attempt 1 | attempt 2 | delta | return |
|---|---|---|---|---|
| motion | 64 | 93 | +29 | codex/attempt-2/lens-motion.md |
| timing | 82 | 98 | +16 | codex/attempt-2/lens-timing.md |
| purity | 100 | 100 | 0 | codex/attempt-2/lens-purity.md |
| reusability | 80 | 94 | +14 | codex/attempt-2/lens-reusability.md |
| readability | 58 | 88 | +30 | codex/attempt-2/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 93+98+100+94+88 = 473; average 94.6; minimum 88 (readability). Delta vs attempt 1 average 76.8: +17.8 (signed, one decimal). Bar: average ≥85 AND minimum ≥70.
**Verdict: PASS — RECREATED-tier eligible (tier move is style-library's act, on this filing).**
Cure outcomes (mechanical landing per the S1–S5 checkpoints; score attribution BUNDLED — only the combined source was scored): K1 Owner Cure 1 (galaxy opacity bounded at the CONFIG reserve, ceiling 0.5 enforced at both sites) LANDED — readability's return credits the cap by name ("caps arms/core opacity at 0.5; default is 0.45"). K2 badge glyph y from CONFIG LANDED — readability prices the badge readable inside its region; reusability confirms badge position drives circle/text/pivot. K3 mask-based progressive region reveal LANDED — motion: "Region drawing matches… No scale/opacity substitute"; timing: no schedule correction indicated. K4 positional banner slam at fixed dimensions LANDED — motion credits the −520 → +36 overshoot → 0 translation over 450 ms with dimensions preserved. K5 twinkle 2π LANDED (period assertion in own checks; no lens deduction). K6 stage aspect from CONFIG + K7 armCount/grid strokeW keys LANDED — reusability 94 with the 103/103 mutation census cited.
Residuals priced by the wave (none blocks PASS; recorded for any future attempt): motion names a minor cycle-wrap continuity defect (bars/specks phases reset at the 15000 ms wrap; cure: drive ambient oscillations from unwrapped elapsed time); reusability suggests an independent banner centre key (banner geometry/text currently anchor on the scope centre) and variant-safety guards (bar-count capacity, longer-text fit); readability notes the badge is relatively small at pulse minimum and suggests badge r 20 / glyphFontPx 28 as an optional strengthening, with rendered confirmation at 360 px still owed under PIXEL-UNVERIFIED (plan D3/D4 dispositions stand).
WHY: NOT OWED — attempt 2 beats attempt 1 (94.6 > 76.8) and passes the bar; the floor rule does not fire. No PLATEAU-UNNAMED.
