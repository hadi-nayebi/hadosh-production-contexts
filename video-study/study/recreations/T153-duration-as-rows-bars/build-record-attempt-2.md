# build-record — T153 Duration-as-rows comparison bars · Cycle 019 Wave 18 · attempt 2 (practice)
Artifact: hidden_files/study/recreations/T153-duration-as-rows-bars/
Plan: practice runs/2026-11-17-cycle-019-wave-18/plan-T153.md (as revised, §14 consumed). Score attribution prints BUNDLED — the staged checkpoints below establish construction effects only; no stage is credited or charged with a lens-score movement.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface (A-C002-2). Named limitations (plan §4 D4): rendered playback inspection of the completed hold + first handoff is not available at source level — printed as a limitation, never an exemption.

## Preservation (plan §5, executed before any touch)
- Complete prior-evidence snapshot (create-once, content copies, never hardlinks): prior-evidence-attempt-1/ — the five working artifacts + scores.md + jev-prewave.md + the entire codex/ tree (23 files, path-preserving), hash manifest at prior-evidence-attempt-1/MANIFEST.md, checked against the run baseline (recreation.html e6726920fd4f3914d47221f06a2baa394a1791d6e313c3b139d5dbc2b7fbff4a ✓ · comparison.html 22dee589… ✓ · scores.md 4bcd3c57… ✓).
- Five working-artifact content copies: recreation-attempt-1.html · build-record-attempt-1.md · fit-table-attempt-1.md · config-census-attempt-1.md · comparison-attempt-1.html.
- Inode independence asserted: working recreation.html 5237593 ≠ recreation-attempt-1.html 5404398 ≠ snapshot 5404403; build-record.md 5238372 ≠ build-record-attempt-1.md 5404399.
- Post-first-overwrite re-verification (plan §9 step 3, immediately after Stage 1's first overwrite, before Stage 2): recreation-attempt-1.html and snapshot recreation.html still e6726920…; snapshot scores.md still 4bcd3c57…; snapshot codex/lens-timing.md still 2a360a3f… — CLEAN.
- Write-protection: every pre-existing codex/ file untouched for the whole attempt; attempt-2 material only under codex/attempt-2/ (verified at close, plan §10 item 7).

## Schedule (final, after Stage 2)
| beat | allocation |
|---|---|
| Opening dwell | 0–800: void + starfield + header "Lifespan of", no bar begun |
| Sun sweep | onset 800, sweep 2200 → full at 3000 (fraction 0.42), held full thereafter |
| Sun-full dwell | 3000–9800: Sun full, header still "Lifespan of", dwarf not begun |
| Dwarf row 1 | onset 9800, sweep 2000 → full at 11800; at 10000 fill = 0.10 |
| Header swap | swapMs 11000 (header "Lifespan of a Red Dwarf" from 11000) |
| Dwarf row 2 | onset 11800, sweep 800 → full at 12600; at 12000 fill = 0.25 |
| Dwarf rows 3–8 | onsets 12600 · 12850 · 13100 · 13350 · 13600 · 13850, sweep 250 each → row 8 full at 14100 |
| Completion / hold | completeMs 14100 (derived in source as the last dwarf row's onset+sweep, not a literal); hold 14100–15000 = 900 ms; cycleMs 15000 |

Window accounting (A-C007-1): 0–800 dwell (800) · 800–3000 Sun sweep (2200) · 3000–9800 Sun-full dwell (6800) · 9800–11800 row 1 (2000) · 11800–12600 row 2 (800) · 12600–14100 rows 3–8 (1500) · 14100–15000 hold (900). Sum = 15000. Every ms allocated to an in-window beat; no pre-window offset, no unallocated gap.

Acceleration, disclosed as allocation: per-row sweep steps 2000 → 800 → 250 ms (2.5×, then 3.2×; 8× against row 1 overall). It is a stepwise allocated acceleration, not a claim about the specimen's unmeasured onsets — the census binds only the two checkpoints; every post-checkpoint onset is allocation and is named as such everywhere it appears.

Construction change: CONFIG dwarf phase keys — dwarf.startMs 9800, dwarf.firstSweepMs 2000, dwarf.secondSweepMs 800, dwarf.restSweepMs 250 replace the uniform dwarf.rowIntervalMs; header.swapMs 3000→11000. buildRows derives onsets cumulatively (onset_{i+1} = onset_i + sweep_i; each row's sweep read from CONFIG), so overflow continuity holds by construction for any values. stateAt derives completeMs from the built rows. Sun, geometry, palette, starfield, row count (1 + 8) unchanged. Source comments are neutral (no cure/amendment wording — A-C008-4 scan clean).

## Both-bases statement — SEAT form (§2.3a of the plan; seat record only, never in a payload)
> **Basis A (builder's retained basis, SUPERSEDED):** attempt-1 §2b allocation — header swap 3000, dwarf start 3400, uniform interval 1100, completion 12200, hold 2800. It satisfied neither census checkpoint (timing 45).
> **Basis B (census basis, GOVERNING):** the two seat-census states at segment-relative 10000 ms and 12000 ms (plan §2.1), segment-anchored 240.00–255.00 s.
> **Dispute, printed:** whether attempt-1's completion 12200 / hold 2800 is itself part of the bound basis (Basis A residue) or an allocation internal to the build that the cure may re-derive (Basis B reading, adopted here — completion 14100 / hold 900). The timing lens's own attempt-1 return frames 12200 completion + 2800 hold as passing *at source level* under the old allocation while prescribing checkpoint preservation + explicit post-checkpoint allocation; it does not bind 12200 as a census fact.
> Prior scores and reviewer conclusions live here and in scores.md only; they are not payload material.
Premise conflicts P1/P2 (plan §8) resolved as the plan directs; no mid-cycle premise amendment was needed — Execute re-observation confirmed every plan premise (A-C008-1: no amendment filed).

## Staged checkpoints (A-C012-4 gate — each stage filed create-once before the next began)
- Stage 1 (ONE exact interim schedule): Sun full 3000 · swapMs 11000 · dwarf startMs 9800, firstSweepMs 2000, rows 2–8 at uniform interim sweep 2000 (onsets 11800–23800), interim completeMs derived = 25800, printed INTERIM, no hold asserted. Own checks 16/16 PASS (checkpoint-1 census state exact; header states at 9999/10000/11000/12000). Filed: checkpoints/stage-1-source.html (SHA-256 93595636b9f42c71f53fbd8a8d76a20b0537006c93b329d8b04f32fb5711b8cd, inode 5416390 ≠ working 5237593) + checkpoints/stage-1-checks.txt.
- Stage 2 (the precise delta only): secondSweepMs 2000→800 (row 2 full 13800→12600) · restSweepMs 2000→250 (rows 3–8 onsets re-derived 12600–13850, row 8 full 25800→14100) · completeMs derived 25800→14100 · hold 900 asserted. Stage 1's Sun/swap/start/firstSweep untouched. Own checks: full final suite (below). Filed: checkpoints/stage-2-source.html (SHA-256 8330ec1911d712b8afca63d560d340905f7ca9771450359417e258fc0368416b = final source, inode 5418780 ≠ working) + checkpoints/stage-2-checks.txt.
- Stage 3: dependents re-derived (headerAt threshold = new swapMs; completeMs/stateAt derived; swap tests redesigned for phase keys; comparison spot-states re-verified — comparison.html drives by __seek and references no CONFIG key, byte-identical to its preserved copy, no re-pointing; spot table = the schedule table above).

## Own-check suite on the final source (Verify items 1–7, pre-scoring) — 42/42 PASS
Raw output filed at checkpoints/stage-2-checks.txt (identical suite). Coverage: counts 9/9 · continuity predicate (default + every swapped CONFIG) · fills non-increasing across dwarf rows (sampled) · min dwarf sweep 250 ≥ 200 pop floor · self-start rAF assertion (A-C010-2: the file starts its own loop; no external caller required) · completeMs 14100 derived + hold 900 · displayed-state assertions at BOTH census checkpoints (A-C004-2): stateAt(10000) = header "Lifespan of" ∧ Sun 0.42 ∧ dwarf r1 0.10 ∧ rows 2–8 0; stateAt(12000) = header "Lifespan of a Red Dwarf" ∧ r1 1.0 ∧ r2 0.25 ∧ rows 3–8 0 · boundary probes 9799/9800, 10999/11000, 11799/11800, 14099/14100, 14999 (hold fully accumulated) · swap tests with effect mappings (A-C002-1): rows 8→5 (built 6, completeMs 13350, accumulation holds) · header text swap (effect at 11000) · dwarf colour swap (all dwarf rows) · firstSweep 2000→1000 (completeMs 13100) · secondSweep 800→400 (completeMs 13700) · restSweep 250→500 (completeMs 15600), continuity under each · CONFIG consumption census (A-C006-2): 42/42 leaves consumed, 0 unconsumed · literal census (A-C008-3): JS-after-CONFIG literals {0, 1, 100} all whitelisted structural (per-literal justification in config-census.md); hex outside CONFIG = #000 only (page void, structural) · window accounting sums 15000 · min-height derivation 300 px at 9 rows.
- Purity grep (Verify item 5): (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9) over recreation.html = 0 hits. Asset inventory: single self-contained file, no external assets, no media.
- Comparison check (Verify item 6): comparison.html sha 22dee589… byte-identical to baseline/preserved copy; ORIGINAL side never changes; handles mapping recreationMs = videoMs − 500 unchanged.
- Syntax: node --check on the extracted inline script: SYNTAX_OK.

## Pre-scoring legs (A-C008, on the NEW attempt, before the wave)
- guard-measured-fit → fit-table.md (attempt-2 headed): HITs 0.
- guard-config-census → config-census.md (attempt-2 headed, against attempt 2's own CONFIG incl. all phase keys): HITs 0.

## Scored source
recreation.html SHA-256: 8330ec1911d712b8afca63d560d340905f7ca9771450359417e258fc0368416b (snapshotted at checkpoints/stage-2-source.html; the same sha is bound to every attempt-2 lens payload).
Payload manifest: codex/attempt-2/payload-manifest.md (filed before firing).
Deviations printed during Execute: NONE through the build + legs (any wave-stage deviation files in scores.md's Attempt 2 entry).


## Wave outcome (post-wave filing)
Five-lens rescore wave (all returns bound to SHA 8330ec19…, filed verbatim create-once under codex/attempt-2/): motion 93 · timing 92 · purity 100 · reusability 89 · readability 86. Arithmetic (Verify item 8, post-wave, from the filed SCORE lines): 93+92+100+89+86 = 460; average 92.0; minimum 86; signed delta vs 81.6 = +10.4. Verdict: PASS (avg ≥85 AND min ≥70). No WHY/residual owed (PASS branch). Tier hand-off filed to style-library HQ.json as practice-2026-11-17-t153-a2 and read back confirmed (exactly one entry, matching id/scores/pointer/SHA) — LANDED; the tier move itself is style-library's act.
Close census (Verify item 7): five preserved attempt-1 copies + complete snapshot manifest 30/30 OK; every pre-existing codex/ file byte-identical to baseline (write-protection held).
Deviations: NONE in construction, checks, legs, manifest, or wave. One observation (not a payload defect): the purity and readability returns show the reviewers also read artifact-dir files from disk (the local binary's read access) — the purity return cites the prior purity score from scores.md. The payloads themselves were anchor-scanned clean before firing (manifest); the scores are filed as returned.
