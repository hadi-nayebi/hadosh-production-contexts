# scores — T153 Duration-as-rows comparison bars · attempt 1 · Cycle 024 Wave 21 (2026-11-16)
recreation.html SHA-256: e6726920fd4f3914d47221f06a2baa394a1791d6e313c3b139d5dbc2b7fbff4a (identical across all five final lens payloads and returns)
Schedule basis: segment-anchored (segment 240.00–255.00 s; segment.mp4 cut 239.5–255.5 with ±0.5 s handles, 16.000 s, h264/aac; comparison maps recreationMs = videoMs − 500)
ALLOCATION LINE: row onsets are a named ALLOCATION (RUN §2b) — the seat census binds states at 250 s (dwarf begun) and 252 s (row 1 full + row 2 begun), not a full onset schedule; this was stated in build-record.md, here, and in the timing-lens payload.
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level, comparison.html is the render surface.
jev-prewave: FIRE-WAVE on firing 3 (parameterization 0.90 · purity pre-check 0.90 · own-checks completeness 0.85 · fidelity-plan honesty 0.90; jev-prewave.md). Firings 1–2 returned HOLD and were cured before the wave (firing 1: packet section + guards command list supplied · firing 2: dwarf sweep derived from rowIntervalMs in source + seeded-RNG census recorded); both returns preserved verbatim at codex/jev-prewave-interim1.md and codex/jev-prewave-interim2.md.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
Row count: CONFIG (1 Sun + 8 dwarf) = 9 vs built 9 — match (harness, build-record.md).
No filed sibling: comparison-bars family has no prior scored attempt (RUN §2) — no family baseline average exists for this attempt.
Interim wave (on SHA 5c47f749…): motion 94 · timing 45 · purity 100 · reusability 82 · readability 68 — preserved verbatim as codex/lens-<lens>-interim1.md, never in the final average. Its readability return priced a real phone-height clipping defect (last four dwarf rows outside the 202.5 px stage at 360 px width); cured in source (stage height from CONFIG aspect + CONFIG-derived 300 px minimum height, binding row geometry unchanged), own checks re-run clean, all five lenses re-fired on the final build below.

| lens | score | return |
|---|---|---|
| motion | 88 | codex/lens-motion.md |
| timing | 45 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 87 | codex/lens-reusability.md |
| readability | 88 | codex/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 88+45+100+87+88 = 408; average 81.6; minimum 45. Bar: average ≥85 AND minimum ≥70.
**Verdict: FAIL — IN PROGRESS.**
Predicted stuck lens (RUN §2, named in Plan before Execute): TIMING — it landed exactly as predicted, and it is the sole lens below both the floor and 85.

WHY / plateau (priced against the predicted stuck lens): the timing lens does not fault the build's internal schedule — continuity, completion at 12200 ms, and the 2800 ms hold all pass at source level, and the allocation is priced as disclosed, not hidden. It faults the allocation's COMPATIBILITY with the two census states the same RUN record binds: at segment-relative 10000 ms (250 s) the census holds header "Lifespan of" + dwarf just begun, while the §2b allocation (swap 3000 · dwarf start 3400 · interval 1100) already shows the dwarf header and six full rows; at 12000 ms (252 s) the census holds row 1 full + row 2 begun, while the allocation shows seven full rows. The defect therefore sits in the wave's Plan layer, not the build: RUN §2b's binding defaults and RUN §1c's binding census states cannot both be satisfied by any single progression that also completes eight rows at 12200 ms without a disclosed late acceleration (the lens's own practice cure: preserve both census checkpoints, then allocate the remaining growth explicitly and disclose the acceleration). That re-allocation is a Plan amendment for the seat's Condense / practice attempt 2 — the builder could not cure it inside this attempt without violating the binding §2b defaults it was charged with.

Priced cures (lenses <85, for the practice pool):
- timing 45 (<85, sole cure): re-allocate the progression around the two census checkpoints — header swap and dwarf start after the 250 s state (header "Lifespan of", Sun full, dwarf just begun at 10000 ms segment-relative), row 1 full + row 2 begun at 12000 ms (252 s), remaining rows allocated explicitly after that checkpoint with the resulting acceleration disclosed as allocation; completion/hold arithmetic re-derived from the new allocation.
Verdict stands FAIL — IN PROGRESS; the cure is recorded for practice, not blocking this filing.
