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


---

# scores — T153 Duration-as-rows comparison bars · attempt 2 · practice Cycle 019 Wave 18 (2026-11-17)
recreation.html SHA-256: 8330ec1911d712b8afca63d560d340905f7ca9771450359417e258fc0368416b (identical across all five final lens payloads and returns; snapshotted at checkpoints/stage-2-source.html)
Plan: practice runs/2026-11-17-cycle-019-wave-18/plan-T153.md (as revised). Build record: build-record-attempt-2.md. Score attribution prints BUNDLED (staged checkpoints establish construction effects only).
Preservation: complete prior-evidence snapshot at prior-evidence-attempt-1/ (manifest-verified at close, 30/30 OK) + five working-artifact attempt-1 content copies; post-first-overwrite re-verification clean; every pre-existing codex/ file byte-identical at close (attempt-2 material only under codex/attempt-2/).
Cure carried (sole priced cure, convergent): timing re-allocation around the two census checkpoints — dwarf row 1 onset 9800 sweep 2000 (fill 0.10 at segment-relative 10000 ms, header still "Lifespan of"), header swap 11000, row 2 onset 11800 sweep 800 (fill 0.25 at 12000 ms, row 1 full, header "Lifespan of a Red Dwarf"), rows 3–8 onsets 12600–13850 sweep 250, completeMs 14100 derived, hold 900. CONFIG phase keys (firstSweepMs/secondSweepMs/restSweepMs) replace the uniform rowIntervalMs; onsets derived cumulatively. Acceleration disclosed as allocation: per-row sweeps step 2000 → 800 → 250 ms; post-checkpoint onsets are allocation, not measured specimen tempo.
Premise conflicts (plan §8, filed here per its charge): P1 — attempt 1's priced-cure wording ("dwarf start after the 250 s state") read literally gives fill 0 at checkpoint 1, contradicting the census "just begun"; resolved per A-C006-1 (segment evidence governs): onset 9800, state at 10000 just-begun. P2 — attempt-1 completion 12200 / hold 2800 treated as allocation, not census, and re-derived to 14100 / 900; the dispute was fed to every lens in the neutral §2.3b packet form (both schedules + the question printed as unresolved). Outcome on the dispute: the timing return (92) explicitly declines to bind 12200/2800 over the checkpoint-satisfying schedule ("I therefore do not treat them as an additional binding requirement"); the readability return (−2) prices the shortened hold as reduced reading reserve — the §2.4 adverse shape fired only on readability, at the mild end.
Own checks on the final source: 42/42 PASS (checkpoints/stage-2-checks.txt) — both census checkpoints asserted exact, swap tests with effect mappings for every phase key, CONFIG consumption 42/42 leaves, literal census clean, window accounting 15000/15000, self-start asserted, purity grep 0.
A-C008 legs (pre-scoring, on the new attempt): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level, comparison.html is the render surface.

| lens | attempt 1 | attempt 2 | delta | return |
|---|---|---|---|---|
| motion | 88 | 93 | +5 | codex/attempt-2/lens-motion.md |
| timing | 45 | 92 | +47 | codex/attempt-2/lens-timing.md |
| purity | 100 | 100 | 0 | codex/attempt-2/lens-purity.md |
| reusability | 87 | 89 | +2 | codex/attempt-2/lens-reusability.md |
| readability | 88 | 86 | −2 | codex/attempt-2/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines, post-wave): 93+92+100+89+86 = 460; average 92.0; minimum 86 (readability). Prior average 81.6; signed delta **+10.4**. Bar: average ≥85 AND minimum ≥70.
**Verdict: PASS — RECREATED-eligible.** No WHY owed (beating attempt; §12 scaffold does not file on PASS). Tier hand-off filed to style-library's board as `practice-2026-11-17-t153-a2` (see that entry for the read-back state); the tier move IN PROGRESS → RECREATED is style-library's act.
Residuals carried (not blocking): reusability return names the cycleMs-truncation class for non-default CONFIG (derive cycle from completion + hold, or validate/reject) and the subjects-array/header-events structure (plan deferrals D1–D3, priced and deferred in writing); readability return asks for a rendered 360 px playback check of the 14100–15000 hold when a render route exists (D4, PIXEL-UNVERIFIED).
