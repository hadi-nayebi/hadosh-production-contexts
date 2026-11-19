# scores — T154 Window ellipse + players-joined chart · attempt 1 · Cycle 024 Wave 21 (2026-11-16)
recreation.html SHA-256: 6b9cabfb00636b4fc380401e6f73148872b3e578cbd80a1d053eeb01e3ff4522 (identical across all five lens payloads and returns)
Schedule basis: segment-anchored (segment 270.00–291.00 s; entrant onsets at RUN §2b clip/census-bound segment-relative times; segment.mp4 cut with ±0.5 s handles, comparison maps recreationMs = videoMs − 500)
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level, comparison.html is the render surface.
jev-prewave: HOLD on the final firing (parameterization 0.80 · purity pre-check 1.00 · own-checks completeness 0.35 · fidelity-plan honesty 0.90; jev-prewave.md) — SET ASIDE by the builder under the advisory-verdicts ruling, reason recorded: the HOLD's remaining charge is the A6 measured-fit instrument itself (a character-width table priced as formula-claimed rather than measured). That instrument is the lane's demonstrated fit instrument — the identical method passed jev-prewave at T139 attempt 1 (FIRE-WAVE) — and no browser binary exists in this seat to produce rendered ink bounds; the limitation is printed as PIXEL-UNVERIFIED in every record of this attempt. The three earlier prewave firings' HOLDs were APPLIED and cured before this disposition: interim1 (payload lacked the packet section + guards command list — feed cured), interim2 (A6 leg contents not fed + summed-area coverage priced as fill evidence — legs fed in full; fill claim re-based on grid-sampled occupancy), interim3 (occupancy measured against disc approximations, not the rendered polygons — cured: occupancy now point-in-polygon against the actual blobVertices polygons, 0.906; stage viewBox + feed scale also moved into CONFIG). Interim payloads/returns preserved as codex/payload-prewave-interim1..3.txt + jev-prewave-interim1..3.md.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
Count assertion: RUN §2b tables 6 entrants + 11 feed events vs built 6 + 11 — MATCH (harness counts in build-record.md).

| lens | score | return |
|---|---|---|
| motion | 78 | codex/lens-motion.md |
| timing | 94 | codex/lens-timing.md |
| purity | 94 | codex/lens-purity.md |
| reusability | 84 | codex/lens-reusability.md |
| readability | 80 | codex/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 78+94+94+84+80 = 430; average 86.0; minimum 78. Bar: average ≥85 AND minimum ≥70.
**Verdict: PASS — RECREATED.**
Family baseline (A-PLATEAU): T82 a1 PASS 87.2 — this attempt's 86.0 passes the bar but sits 1.2 below the family baseline; the predicted stuck lens (motion, RUN §2) did land lowest at 78, as priced in Plan.

Priced cures (lenses <85, for the practice pool):
- motion 78 (<85): (1) bunching is underexpressed — join gaps are a near-steady 2200/2200/2200/2200/1800 ms procession and the last territory completes at 15500 ms, leaving 5500 ms of static fill before the hold; cure = concentrate later arrivals + swells nearer the concluding fill while keeping per-entrant serial phases. (2) Territories are not contained by construction — no ellipse clip; occupancy measures interior coverage, not exterior spill; cure = clip/constrain territories to the ellipse and verify containment. (3) Entrant onset discontinuity — the territory cap appears at topR × capFrac while column height is still zero; cure = grow the cap continuously during the rise.
- readability 80 (<85): (1) the six-line feed overlaps the ellipse's bounding box with no dark backing — white lines can cross bright territory fills in the filled state; cure = a reserved dark feed region or opaque backing, verified across all six lines at the filled state. (2) The oldest feed line at opacity 0.40 depends on the overlapping background for contrast — priced with cure (1). (3) No window clipping (convergent with motion cure 2) weakens the ellipse boundary the chart's claim rides on.
- reusability 84 (<85): (1) #stage height 56.25vw + the fixed renderScale only partially derive presentation from stageW/stageH — cure = derive stage aspect + feed display scale from CONFIG/rendered size. (2) easeOut reads the global CONFIG, so stateAt(cfg) with a distinct config is not fully isolated — cure = pass the easing exponent through the state calls. (3) endHoldFromMs sets stateAt().holding but frame() never consumes it — the hold is emergent, not enforced; cure = implement the hold policy and verify with an entrant whose growth crosses 19000 ms. (4) feedText's participant noun "Player " is a logic literal — cure = participant noun / message template as a CONFIG key.
Verdict stands PASS; cures recorded, not blocking.
