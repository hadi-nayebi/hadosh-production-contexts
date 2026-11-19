# Build record — T16 particle document flip, attempt 9 (Cycle 029 Wave 28)

Final source: recreation.html, sha256 **c7bdd713ac188769d7c8e3810c09cf1b351952abed0e20192a3098f3cdbd78bb**.
PIXEL-UNVERIFIED: no render route exists for this attempt; all verification is source- and instrument-level (stub-canvas harness). Scores: motion 82 · timing 83 · purity 100 · reusability 77 · readability 79 → **average 84.2, min 77 — FAIL vs the bar (avg ≥85 AND min ≥70)**; the average beats attempt 8's 79.8 by **+4.4**, so no WHY is owed under the floor rule (INSTRUCTION §5.4); the causal disposition stands in §6 regardless (plan-review finding 7).

## §0 — Plan-review consumption (codex-plan-review-T16-return.md, PLAN: REVISE BEFORE GATE, 7 findings)

1. **Presentation counter (per-draw trace form)** — LANDED as specified: unique readable pages / readable draws / qualifying cells derive separately from a per-draw trace (callback timestamp, simulation time, cycle/page identity, required vs registered target identities, both predicates); dwell spans end at the first draw losing the predicate or changing page; cases covered: repeat draws (no double-count), partial assignment, skipped pages, rollover. Own-check asserts exact set equality between the construction's counter and an independent instrument recomputation from the trace, including the empty strict set at 50 ms steps.
2. **Particle handoff (R2/R3/R4/R7 meeting point)** — above-cap behavior chosen and recorded BEFORE building: **the travel cap applies from the release instant on EVERY exit branch** (flip-exit, phase, seam, title-seam), not only at flip exit. Handoff traced through the same boundary on default / dense / short-release inputs via the suite; where evidence cannot isolate a cure's lens effect, attribution stays BUNDLED (printed in the scores entry).
3. **Comparison playable pair** — `comparison-attempt-8-viewer.html` created before the freeze: the preserved comparison markup with ONLY its iframe target changed to `recreation-attempt-8.html` (sha 4c7ec938…); the ORIGINAL side is unchanged. All source changes landed before the freeze; the comment scan ran before the final suite and promotion.
4. **Neutral dispute packet** — the blind build record carries the Stage-0 reconciliation as method/inputs/units/limitations only, with BOTH bases printed (step-state basis 26/32; draw-timestamp basis: 60 fps strict 32/32, 50 ms strict 0/32, geometric 24/32, opportunities 8/32). No lens identities, verdicts, scores, deductions, or expected recovery appear in any payload (A-C010-3: no silently switched basis).
5. **PASS arithmetic corrected** — attempt-8 sum = 399; PASS needs ≥425 total AND ≥+2 each in motion and reusability; the plan's recovery terms sum 54 counting overlap once, and (399 + 54 − 6)/5 = 89.4 is a consistency check, not a forecast; the plan's printed ≈79–83 adverse range is replaced by the per-lens accounting in the scores entry.
6. **Split trigger** — retained interfaces named and held: segment scheduler (`step`/`segStarts`), particle model, samplers, gate (`assessFeasibility`/`revalidate`), `computeSchedule`. No stage failed twice; the trigger never fired. The two stage-6 integration cures resumed from the stage-5b checkpoint state as priced continuations, not restarts.
7. **Close scaffold / causal disposition** — §6 of this record and the scores entry carry the causal disposition: actual mechanism + filed lens evidence + selected next construction/test/rest disposition, per class.

## §1 — Preservation (before any mutation)

- Baseline: `runs/2026-11-18-cycle-029-wave-28/preservation-baseline-T16-attempt9.txt` — machine-written sha256sum, 190 entries (188 artifact files + plan + plan-review return), all hashes 64-hex validated.
- `recreation-attempt-8.html`: content copy (never hardlink), create-once, sha a32c95bb6c16e06998a973e550d51a03e617bc9914d20f5eba2765c4d2dbde95 == the attempt-8 scored sha; inode ≠ recreation.html. Re-verified AFTER the first overwrite of recreation.html: unchanged.
- `comparison-preserved-attempt-8.html` sha 75e2584a…; `segment.mp4` sha c4f0c6f8… — both at baseline hashes post-promotion.
- Close census: `sha256sum -c` against the 190-entry baseline post-promotion — exactly ONE file differs: recreation.html.

## §2 — Stage ledger (checkpoints are content copies, create-once, inode ≠ working file)

| stage | cure | checkpoint sha (prefix) | own-check |
|---|---|---|---|
| 0 | R1 dispute + R5h census reconciliation | checkpoint-attempt9-stage0-owncheck.txt | 60 fps strict 32/32; 50 ms opportunities 8/32, strict 0/32, geometric 24/32; census 131 keys enumerated |
| 1 | R1 presented-readable accounting | b37d167cc6ac… | owncheck-attempt9-stage1.txt |
| 2 | R2 outgoing continuity | 7e19debf1ab1… | owncheck-attempt9-stage2.txt (overlap at/after onset worst 0.000; control 0.935) |
| 3a | R3 flip-exit intensity | ba466cc96ac5… | owncheck-attempt9-stage3a.txt (max scatter α 0.38, ~249k samples) |
| 3b | R4 formation deadline | 5024b02bf0b4… | owncheck-attempt9-stage3b.txt (overlapNeed 844; ends [2650, 2740]; delay 2740 accounted) |
| 4a | R8 borrow budget | d00c557c6161… | owncheck-attempt9-stage4a.txt |
| 4b | R5 binding edges | b3b031ba6a7f… | owncheck-attempt9-stage4b.txt (incl. 81-probe generative sweep, 0 bad) |
| 5a | R6 restart residue | 9d446628128e… | owncheck-attempt9-stage5a.txt |
| 5b | R7 boundary state | c3ca45208f22… | owncheck-attempt9-stage5b.txt |
| 6 | integration + freeze | checkpoint-attempt9-stage6-final.html == final source c7bdd713… | owncheck-attempt9-stage6.txt — full suite 29 PASS / 1 FAIL, the FAIL being the suite file's own dense-run horizon artifact (run stops 6200 ms, hold enters 8000 ms), corrected block PASS (hold RESOLVED, 1100 ms observed, at 9600 ms); effective 30/30 |

Stage-6 integration cures: pool priced for FOUR concurrent page sets (two flip-exit scatter sets overlap a handoff at the 300→87.5 ms tempo drop — the priced R2×pool interaction; pool 3468, borrowable 2706, pageNeed 844 @320×240); registration record finalized from event times at the departing claim and in the exit branch; boundary evaluation at landing-body page dispatches.

## §3 — Legs on the NEW source (A-C008)

- Fit leg: `fit-table-attempt9.md` — header ink 89.8×24.9 in 99.8×30.2 box; title ink 299.8 in 309.6 box; counter worst string fits inline (105 ≤ 106.8). Hit count: 3/3 fit, none condensed.
- Census leg: `config-census-attempt9.md` — **131 keys by enumeration (117 numeric, 14 non-numeric)**, every key consumed (≥1 `CONFIG.<key>` read site and named in a validation/route list); unconsumed 0; 6 frozen schema constants outside the config object. The attempt-8 "118" figure is superseded by this enumeration (it undercounts by 13 and ships no reproducing per-key table).

## §4 — Firing record (five lenses, identical final source)

Payload manifest filed BEFORE firing: `payload-manifest-attempt9.md`. Payloads filed create-once: `codex/attempt-9/payload-<lens>.txt` (scale line + lens instruction + blind build record + final source, single stdin stream). Form: local binary `~/workspace/codex-local/node_modules/.bin/codex exec`, `--skip-git-repo-check`, `-s read-only`, per-lens scratch cwd `~/workspace/.scratch/c029/T16-<lens>/` containing ONLY the packet copies. Session read scopes (A-C019-2): each session's citations reach only its packet copies (lens instruction, blind build record, recreation.html) inside its own scratch cwd; no session read scores.md, prior returns, or another lens's files. Returns: `-o` originals in `~/workspace/.scratch/c029/lens-<lens>-attempt9-original.md`, content-copied to `codex/attempt-9/lens-<lens>.md` in the same invocation, sha256-verified identical (motion 0db79f3f… · timing b94b77e6… · purity 0db9e3c1… · reusability e5297379… · readability 3a0c1b76…). No interim or non-governing firings occurred. Comment contamination scan before firing: 203 comments, 0 cure-code/attempt/lens/score anchors (only the fold-plateau geometry term); no neutralization edits needed.

## §5 — Scores and deltas (seat arithmetic from the filed returns)

| lens | a8 | a9 | Δ |
|---|---|---|---|
| motion | 68 | 82 | +14 |
| timing | 84 | 83 | −1 |
| purity | 98 | 100 | +2 |
| reusability | 68 | 77 | +9 |
| readability | 81 | 79 | −2 |
| **average** | **79.8** | **84.2** | **+4.4** |

Min 77 (≥70 floor holds). Verdict: **FAIL vs the bar** (average 84.2 < 85) — a beating, non-passing attempt; no tier move claimed.

## §6 — Causal disposition (per class; mechanism + filed evidence + next step)

- **R1 presentation-truth — PLATEAU (test fires, §7).** Mechanism: the counter is now draw-bound (undrawn values are never presented; instrument equality at draw timestamps is exact), but the numeral is NOT gated on the strict-readable predicate — three lenses converge on this exact mechanism (timing −6 "a visible 6/14 confirms the page change while the page itself may still be turning"; readability: "the DOM update sits outside that branch"; motion: "writes curPage outside either check"). Next construction (changed, not a retry): gate the numeral on a strict-readable draw of the page it names (hold the last strict-presented value otherwise) and lengthen the fast pages' strict window so a strict draw exists at supported cadences. This class rests from incremental patching until that re-derivation is built.
- **R2 outgoing-continuity — landed, residuals named.** Identity-retained departing set, no edge teleport, fold never returns (own-check overlap 0.000 at/after onset). Motion's residuals: the incoming fold scales the interpolated anchor including its stream-side origin (possible lateral snap on capture); `releaseParticle()` reads `p.x/p.y` before the folded position commits, then clears `captured` (callback-dependent scatter origin). Next: fold the destination while preserving the capture origin; commit outgoing position/velocity at the scheduled release instant before scatter.
- **R3 flip-exit-intensity — landed.** Cap binds from the release instant on every branch; readability confirms scatter starts at/below 0.38 and fades, and deducts nothing for it. No next step owed for this class.
- **R4 formation-deadline — landed, residual named.** Shared end-time helpers feed gate, pool bound, and runtime; overlap bound 844 > 0; formation delay accounted (2740 ms on the 50/50 case). Motion's residual: on delayed-borrow configs the label fades while scatter is active, travel backdates to nominal entry, and hold retries borrow without the scatter gate. Next: one scatter-cleared start time for label, title, and halo, including retries.
- **R5 binding-edges — landed, residuals named.** Header asserted separately; resize commits only on gate pass; padding floored; deep copies in/out; two-page anchor explicit; zero-fade guard; URL routes incl. onset fraction. Reusability's residuals: `foldPlateauFraction` is inert under the no-return exit profile (remove the key or restore a profile branch that consumes it); `fitText()` measures under pre-alignment settings while placement assumes drawn alignment/baseline; a valid-range stack offset can make preflight sampling throw on an empty intersection instead of refusing through the gate; the 2% header share and 40-step ceiling sit outside config. Next: price each as a named edge cure.
- **R6 restart-residue — landed, residual named.** Refused revalidation preserves the live presentation exactly; reset clears all run-local maxima/records and re-seeds the counter text. Reusability's residual: the API getters still expose live `checkpoints`/`appliedConfig` references, and restart rebuilds from mutable CONFIG rather than the committed snapshot. Next: detached snapshots from every getter; restart from the committed configuration.
- **R7 boundary-state — landed.** Stream clock + boundary evaluation at segment entries and page dispatches; settled-set identity 839/839 across 120 ms vs 10 ms steps (worst 0.00 px); coverage == assignments across multi-event coarse callbacks. No residual priced by any lens.
- **R8 borrow-budget — landed.** Initial borrow priced from the shared dwell table (`turnEffForPage(1)`); one-page/60 ms registration completes inside the flip; pool sized pre-playback. Reusability notes a performance residual only: `computeSchedule()` rescans the flip window in 0.5 ms increments on callback/simulation paths. Next (optional): cache the resolved schedule per committed configuration.

**Feeder defect (mine, named):** the blind build record's census-anchor mapping table conflated the final page's arrival (2200 ms, the checkpoint end anchor = flipMs 2600 × checkpointEndTimeFraction) with the flip phase's end, and printed a 5600 ms cycle against the source's 6000 ms (2600+500+1500+1100+300); the same record's counter sentence overstated the construction ("only with values whose page was actually drawn in a readable state" — the numeral is draw-bound, not strict-gated). Four of five lenses caught the schedule conflict from source and corrected it; timing's hold finding prices the conflict in part. The mapping table's census anchors themselves (1@0, 6@1500, 14@2200) are correct as arrival anchors.

## §7 — Plateau test (pre-committed; pairings per the plan)

Fires only if ALL legs hold: (a) same class priced in substantially the same terms by its primary lens on the final source; (b) primary lens Δ ≤ 0; (c) cure-stage checkpoint filed create-once in order, own-check green where same-input reproduction of the defect FAILS on the final source.

- **R1 presentation-truth → timing:** (a) YES — timing prices the counter-vs-strict-readable relation in the same terms as attempt 8's dispute. (b) YES (Δ −1). (c) YES — stage-1 checkpoint filed; S1 own-check green; the a8 defect (counter crediting states never drawn) does not reproduce. **FIRES — plateau for this class.**
- **R2 outgoing-continuity → motion:** (a) NO — terms moved (existence/return → handoff origin mechanics). (b) NO (Δ +14). **Does not fire.**
- **R3 flip-exit-intensity → readability:** (a) NO — readability confirms the capped scatter and deducts nothing for it; its deductions sit in R1's class and stack brightness during the turn. (b) YES (Δ −2). (c) YES. **Does not fire** (leg a fails).
- **R4 formation-deadline → reusability:** (a) NO — reusability does not price the deadline class (motion prices the adjacent delayed-borrow path). (b) NO (Δ +9). **Does not fire.**
- **R5 binding-edges → reusability:** (a) YES in part — binding edges are priced again in the class's terms (inert key, fit basis, degenerate throw). (b) NO (Δ +9). **Does not fire.**
- **R6 restart-residue → reusability:** (a) YES — snapshot isolation priced in the same class terms. (b) NO (Δ +9). (c) NO — the getter-exposure residue reproduces on the final source. **Does not fire.**
- **R7 boundary-state → motion:** (a) NO — not priced in boundary-state terms. (b) NO (Δ +14). **Does not fire.**
- **R8 borrow-budget → reusability:** (a) NO — budget confirmed; the priced term is schedule-rescan cost. (b) NO (Δ +9). **Does not fire.**

**Disposition: the plateau test fires for exactly one class — presentation-truth (R1).** The technique does not rest; R1 rests from incremental patching pending the re-derived numeral gating named in §6.

## §8 — Deviations (named)

- **D1 (checkpoint production form):** stage checkpoints were produced by deterministic replay of the stage patch sequence from the attempt-8 copy (checkpoint filed after each stage) rather than live between-stage filing during the first build pass; the replayed stage-5b state was byte-identical to the working candidate, so every checkpoint is a genuine stage state and the create-once order holds.
- **D2 (scratch loss):** a service restart wiped /tmp mid-run, destroying the harness/suite scripts (no artifact-dir evidence lost); both were rebuilt under `~/workspace/.scratch/c029/` and the full suite re-run on the frozen source.
- **D3 (own-check redesign):** the first R7 check (free-particle identity across step sizes) was invalid — free-particle identity is step-size-dependent through scatter-commit timing; replaced by settled-set identity at matched simulation time, which caught two real defects (registration-record finalization; landing-body boundary evaluation) before passing.
- **D4 (threshold naming):** the R2 overlap sweep's threshold (intersection ÷ outgoing bbox ≤ 0.10 at/after onset) is the builder's operationalization of the plan's sweep; the pre-onset control (0.935) is filed beside it.
- **D5 (feeder defect):** the blind record's schedule mapping + counter overstatement — see §6.
- **D6 (suite horizon artifact):** see §2 stage 6.
- **D7 (own-check timing):** per-stage own-check files were transcribed from the cumulative suite evidence measured across the build (the suite ran as one instrument per stage block), rather than filed as separate executions at each stage gate; the stage checkpoints themselves are genuine (D1).

## §9 — Receipt index

Plan + review: run dir `2026-11-18-cycle-029-wave-28/` (plan-T16.md, codex-plan-review-T16-return.md, preservation-baseline-T16-attempt9.txt). Artifact dir: checkpoints stage0–stage6, owncheck-attempt9-stage0–6 txts, fit-table-attempt9.md, config-census-attempt9.md, build-record-blind-attempt9.md, payload-manifest-attempt9.md, comparison-attempt-8-viewer.html, codex/attempt-9/ (payloads + five returns). Scores: scores.md Attempt 9 (appended; prior bytes verified an exact prefix post-append).
