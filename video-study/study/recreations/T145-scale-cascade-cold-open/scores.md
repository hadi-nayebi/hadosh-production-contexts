# scores — T145 Scale-cascade cold open · attempt 1 · Cycle 024 Wave 21 (2026-11-16)
recreation.html SHA-256: 6ad314daf40b85671d0ad60c50356e88cd00d8579eb1e2b3df6a67557f05051d (identical across all five lens payloads and returns)
Schedule basis: segment-anchored (segment 0.00–20.00 s; segment.mp4 cut 0..20.5 after −0.5 clamp, 20.500 s, h264/aac, ffprobe-verified).
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level, comparison.html is the render surface.
jev-prewave: FIRE-WAVE (parameterization 0.90 · purity pre-check 0.90 · own-checks completeness 0.90 · fidelity-plan honesty 0.80; jev-prewave.md) — applied. Its feed limit (packet section + guards command list not fed, priced NOT ASSESSED by the return) is recorded in build-record.md for Condense.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
Own checks: swap test PASS (exact §2b swaps: nodeCount 90→50 still links 164 · boundaries 5000/11000→3500/8000, scale 1.35 at swapped B-end · void →#30160d) · purity grep 0 hits · node --check SYNTAX_OK · determinism verified (buildField/stateAt twice identical; no Math.random/Date.now).
Count assertion: RUN §2b planets table enumerated 5 vs built CONFIG 5 — match; web nodes 90, end stars 40 as bound.

| lens | score | return |
|---|---|---|
| motion | 80 | codex/lens-motion.md |
| timing | 100 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 78 | codex/lens-reusability.md |
| readability | 79 | codex/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 80+100+100+78+79 = 437; average 87.4; minimum 78. Bar: average ≥85 AND minimum ≥70.
**Verdict: PASS — RECREATED.**
Family baseline (A-PLATEAU): T108 a1 avg 84.2 (zoom family) — this attempt's 87.4 beats the baseline, so no WHY/plateau section is owed (Amendment A2). Predicted stuck lens (RUN §2): MOTION — outcome: motion landed at 80, second-lowest and below the 85 cure line as predicted in kind (the cascade-vs-plain-zoom pricing), but the actual minimum was reusability 78; the prediction is recorded as partially borne out.

Priced cures (lenses <85, for the practice pool):
- motion 80 (<85): (1) the observer is drawn outside the shared scale transform (reset before drawObserver), so the arrival reads as a replacement layer rather than the same move settling — cure = carry the observer through the continuous transform with its final position preserved. (2) Scale velocity jumps at 11000 (≈0.0318/s linear → ≈0.075/s at the ease-out's head) before decelerating — cure = velocity-matched settle curve. (3) Spatial correspondence through the overlaps is thin (opacity replacement carries much of the drain) — cure = strengthen positional continuity across stage overlaps.
- reusability 78 (<85): (1) planet exit derives from observer.startMs + dissolveMs while stageBEndMs governs only scale — retiming coupling; cure = derive planet exit from one boundary key with an explicit overlap rule. (2) Canvas backing size (720×405) and the 56.25vw CSS aspect are HTML literals, not CONFIG-driven; cure = initialize canvas size/aspect from CONFIG. (3) hold has two definitions (cascadeMs settle vs cycleMs − holdMs) that agree only under defaults; cure = derive one from the other. (4) "Swap evidence absent" — DISPOSITION: feed gap, not a build defect: the lens payloads carry the source per the wave's standing form; the swap evidence exists and is filed in build-record.md (harness swap PASS with raw output). Recorded here per the advisory-verdicts ruling; the coupling cures (1)–(3) are accepted as priced.
- readability 79 (<85): (1) weak subject interval at 11000 — planets reach zero while observerAlpha is only 0.25; cure = bring the observer to readable opacity before the planets fully leave, or retain the planets longer. (2) Rock #191040 sits close to void #0d0630 at 26 px height — cure = lighten the rock or add a contrasting upper edge. (3) Telescope tripod is drawn before the robe and partly concealed by it; cure = offset the support or draw visible sections after the robe.
Verdict stands PASS; cures recorded, not blocking.
