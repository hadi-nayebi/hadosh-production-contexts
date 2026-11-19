# scores — T160 Expansion-front envelopment · attempt 1 · Cycle 025 Wave 22 (2026-11-16)
recreation.html SHA-256: 94c3e4672c174d8347616dd08cf9b66dee527a7873e3e7dcba29a88c3cb8b791 (identical across all five lens payloads and returns)
Segment facts: window 446.00–456.00 s; segment.mp4 cut 445.5–456.5 (±0.5 s handles), 11.000 s, h264/aac, ffprobe-verified; schedule basis segment-anchored (census: 447/449 no territory · 452 yellow entering right · 455 both fronts ~70% closed); comparison maps recreationMs = videoMs − 500.
Render-proof limitation: PIXEL-UNVERIFIED — no browser binary in this seat; verification is LOGIC-level (node harness over the state function); lens scores are source/logic-level, comparison.html is the render surface.
jev-prewave: FIRE-WAVE (parameterization 0.90 · purity pre-check 0.95 · own-checks completeness 0.95 · fidelity-plan honesty 0.90; jev-prewave.md). One feed-hygiene note in the return: the build record's fidelity paragraph carried the family baseline score, contrary to the definition's NEVER-FED restriction — the judge excluded it from its judgment; the lens payloads were cured score-blind before firing (baseline stripped, verified 0 occurrences).
Own checks: swap PASS (exact §2 swap: single top front #57d977 startMs 2000 growMs 6000 · planet x 360→300 — side set ["top"] + planet x in effect at probe times) · purity grep 0 hits · node --check PASS · frontier advance measured (left 177.92→305, right 581.36→415 between 6000 and 9000 ms) · end-state gap MEASURED 110 (= trappedGapPx).
A6 legs (pre-wave, final build): fit-table.md HITs 0 (no text elements — empty row set filed) · config-census.md HITs 0.
Count assertion: RUN §2b/§2c fronts source-count 2 vs built 2 — MATCH (harness counts in build-record.md).

| lens | score | return |
|---|---|---|
| motion | 84 | codex/lens-motion.md |
| timing | 68 | codex/lens-timing.md |
| purity | 97 | codex/lens-purity.md |
| reusability | 86 | codex/lens-reusability.md |
| readability | 86 | codex/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 84+68+97+86+86 = 421; average 84.2; minimum 68. Bar: average ≥85 AND minimum ≥70.
**Verdict: FAIL — IN PROGRESS.**
Family baseline (A-PLATEAU): T154 a1 PASS 86.0 — this attempt's 84.2 sits 1.8 below the family baseline and below the bar on both terms.
WHY against the predicted stuck lens: Plan predicted MOTION (frontier growth reading as expansion vs a sliding shape). Motion landed 84 — below 85 but NOT the binding failure, and its core charge FAILED TO LAND: both the motion and timing returns confirm the frontier form is genuine per-point radial growth (origin + (endPoint − origin) × progress, seeded wobble in the end points), not a slide or scale. The binding failure is TIMING at 68 (below the 70 floor), on a defect neither lens attributes to the growth form: the RUN §2b-prescribed onset schedule itself conflicts with the segment-anchored census it claims to bind. Mapped to the window (446 s = 0 ms), the census state "no territory" holds at 449 s = 3000 ms, but purple's prescribed startMs 2500 already gives 8.33% progress (mean frontier ≈25.4 px inside the frame) at that instant; and at 452 s = 6000 ms ("yellow front entering") yellow is already 45.45% grown (mean frontier 581.36, ≈139 px inside the right edge) with purple 58.33% grown. The build implemented the prescribed schedule exactly (its own probes verified 0/2000 ms, not the 3000/6000 ms census instants); the schedule, not the construction, is what the wave priced down. Motion's deduction is the same onset defect seen from its side (convergent naming: timing 68 + motion 84 both cite the 449 s state) — under the convergent-lens rule this onset/census conflict is the next attempt's primary cure, and it is a PLAN-level cure (the seat's §2b schedule), not a builder cure.

Priced cures (for the practice pool / next attempt):
- timing 68 (<70, binding): (1) defer purple onset until after the 449 s census instant (startMs ≥3000) and shorten growMs to retain completion by 9000; add an explicit harness probe at 3000 ms asserting zero visible territory. (2) Move yellow onset close to the 452 s instant (≈6000 ms) with a shortened growMs retaining the 9000 ms endpoint, so "entering from frame right" is the state at 6000 ms rather than 45% grown. (3) Re-price the §2b schedule against the census mapping (window start = 0 ms) before the next build — the prescribed table and the census cannot both stand as written.
- motion 84 (<85): the same onset cure (its only named defect is the 449 s territory presence); the frontier growth form itself needs no cure — priced as passing by both returns that examined it.
- readability 86 (≥85, cure recorded): establish local frontier-to-ring clearance across the ring's vertical span during the final hold (mean gap 110 leaves ≈9.5 px total clearance at 360 px display beside the ring's outer diameter; wobble is independent per point, so the mean does not establish local clearance); constrain nearby frontier endpoints if wobble crowds the dashed contour.
- reusability 86 (≥85, cures recorded): (1) canvas backing dimensions are HTML literals 720×405 while geometry reads CONFIG.stageW/stageH — initialize canvas width/height and stage aspect from CONFIG. (2) endHoldFromMs labels state without controlling animation — define the hold explicitly (territory hold) and clamp the relevant animation time at the boundary. (Purity 97 names cure (1) convergently.)
Verdict stands FAIL — IN PROGRESS; cures recorded, headed by the plan-level schedule cure.

## Attempt 2 — Plan WHY scaffold (practice Cycle 025)

Pre-drafted at Plan (practice INSTRUCTION §2 standing product; plan: `study-jobs/practice/runs/2026-11-18-cycle-025-wave-24/plan-T160.md`). If attempt 2 does not beat 84.2, the WHY is filed by completing these slots at close — not improvised at close. Attempt-1 text above is untouched.

Cure-by-cure outcome slots (one line per cure, filled at close with the lens evidence):
- C1 (purple onset re-based: startMs 2500→7000, growMs 6000→2000 — convergent timing+motion cure): outcome = ___ (timing return wording on the 449/452 census states: ___ · motion return wording: ___)
- C2 (yellow onset re-based: startMs 3500→6000, growMs 5500→3000): outcome = ___ (timing state at 6000 ms as priced: ___)
- C3 (schedule re-priced against the census mapping, plan §(f), mapping fed to the timing lens): outcome = ___ (did the lens price the resolved basis or the replaced one: ___)
- C4 (local frontier-to-ring clearance: ringClearancePx clamp; attempt-1 measured local minima −0.20 left / −1.84 right in the ring span): outcome = ___ (asserted minimum clearance in the new build: ___ · readability return wording: ___)
- C5 (canvas backing + stage aspect from CONFIG — convergent reusability+purity): outcome = ___ (reusability wording: ___ · purity wording: ___)
- C6 (endHoldFromMs as a controlling territory hold): outcome = ___ (reusability wording: ___)
- Deferrals D1–D4 as priced in the plan: any deferral a return priced against its plan price: ___

Stuck-lens hypothesis (falsifiable, named at Plan): **TIMING is the hypothesized stuck lens.** Attempt 2 binds every census instant exactly (zero territory at 1000/3000 ms by probe · yellow entering at 6000 ms · purple absent at 6000/7000 ms per census frames f452/f453 · both complete at 9000 ms), implementing the timing return's own prescribed cure and extending it on frame evidence. The hypothesis: if timing still lands <70, the cause is NOT onset placement — it is the growth-duration shape (purple's full traverse compressed into 2000 ms, yellow's into 3000 ms) being priced as too fast against the specimen's continuous approach, i.e. the census instants and the evidenced durations cannot both be satisfied inside a 10000 ms cycle that also holds the credited 9000 ms completion. Falsifier: a timing return ≥70 refutes it; a timing return <70 whose wording prices onsets/states (not durations) refutes the duration-shape mechanism and re-opens the schedule basis itself.

Evidence `jev-plateau` will need (pre-committed at Plan): per-cure outcome lines above, each bound to a filed return passage (not a score delta alone) · the attempt-2 build record's raw census-anchor probe output (3000 ms zero-territory probe result verbatim) · the measured local-clearance minima per front at 9000/9500 ms · the staged-checkpoint ledger (S1–S4 paths + read-backs) for cure attribution · the A-C014-1 adverse price from the plan (timing −0..−5 on velocity) beside the charged amount, so the plateau judgment prices the plan's own foresight, not only the build.

### Scaffold amendment (Execute Stage-0, 2026-11-18 — per binding plan-review finding 5, filed BEFORE the build)

The Plan-stage claim that every census instant is matched exactly does NOT stand: Stage-0 firsthand re-measurement of the census frames (build-record-attempt-2.md, Stage-0) shows the originally planned yellow state at 6000 ms (progress 0) contradicts the visible sliver in f452 (measured mean ingress ≈24.5 stage px, progress ≈0.08), and a purely linear yellow schedule completing at 9000 ms predicts ≈0.39 progress at 7000 ms, outside f453's measured band (mean ≈0.225, per-row range ≈0.12–0.33). The build therefore carries a MID-CYCLE PREMISE AMENDMENT (A-C008-1, in the build record): yellow binds startMs 4816 · growMs 4184 · easePow 2 (progress 0.080 at 6000 ms, 0.272 at 7000 ms — inside the measured band), and 9000 ms completion is labelled a RETAINED DESIGN CONSTRAINT (f455's pulled-back framing establishes both fronts present with a remaining gap, not completion). Purple 7000/2000 stands (absent at 6000 ms and at the 7000 ms instant in the frames; present at 9000 ms).

The stuck-lens hypothesis above is accordingly split into two distinguishable mechanisms, to be told apart by the timing return's own wording at close:
- **H-STATE (state mismatch):** timing <70 with wording pricing onsets/states at census instants (a state the build presents differs from the frame state at that instant). This refutes the amended schedule basis itself.
- **H-VELOCITY (velocity/duration criticism):** timing <70 with wording pricing growth speed/duration shape while the census-instant states are accepted. This confirms the Plan hypothesis's mechanism (instants vs durations cannot both be satisfied under the retained 9000 ms completion).
- **Slot for non-beating with timing ≥70 (added per finding 5):** if the average does not beat 84.2 while timing lands ≥70, the timing hypothesis is REFUTED as the stuck-lens explanation; the WHY is then completed from the other four lenses' outcome lines above (which lens fell, on what wording), and this slot records that trace so the rejected hypothesis leaves evidence, not silence.
- Velocity pricing note (finding 2): the plan's printed adverse deductions (timing −0..−5, motion −0..−4) are UNQUANTIFIED estimates; at the stated aims that scenario totals 85.8 with minimum 75 and CLEARS both bars — it cannot by itself explain a plateau or floor failure, and no larger deduction is evidence-grounded at filing time.


## Attempt 2 — five-lens re-score (practice Cycle 025, Wave 24, Execute 2026-11-18)

Source scored: recreation.html sha256 `e6676f689794bb4c2dd4661354efa9e774e0aab39e42aff78ab58a224ee766fd` (identical embedded copy hash-verified in all five payloads). Payloads preserved create-once at `codex/attempt-2/instr-<lens>.txt` with the allowlist manifest at `codex/attempt-2/payload-manifest.md` (anchor scan clean on all five). Returns filed verbatim at `codex/attempt-2/lens-<lens>.md`. Lens count: 5 fired → 5 clean returns, all on the identical final sha.

| Lens | Attempt 1 | Attempt 2 | Δ | Return |
|---|---|---|---|---|
| Motion | 84 | 86 | +2 | codex/attempt-2/lens-motion.md |
| Timing | 68 | 82 | +14 | codex/attempt-2/lens-timing.md |
| Purity | 97 | 95 | −2 | codex/attempt-2/lens-purity.md |
| Reusability | 86 | 83 | −3 | codex/attempt-2/lens-reusability.md |
| Readability | 86 | 88 | +2 | codex/attempt-2/lens-readability.md |

Arithmetic: 86 + 82 + 95 + 83 + 88 = 434 · 434 / 5 = **86.8 average** · **minimum 82** (timing).
**Signed delta vs attempt 1 average (84.2): +2.6.**
**Verdict vs bar (average ≥85 AND minimum ≥70): PASS** — both conditions met (86.8 ≥ 85 · 82 ≥ 70). Tier hand-off: the score clears the RECREATED bar; the style-library tier promotion is the seat's Verify/Condense act on this filing.

Floor rule: the attempt BEATS 84.2, so the WHY scaffold above is not triggered; its slots stand uncompleted by design. Timing note for the record: timing rose 68 → 82 (≥70), and its remaining criticism is velocity-side — the return prices the gold front advancing ≈32% faster than the measured 452→453 s displacement across the 6000→7000 ms interval, the cost of the retained 9000 ms completion (H-VELOCITY wording in the amended scaffold's terms; the census-instant states themselves are accepted, with the 6000 ms state matching to 0.05 stage px). That residue is the next attempt's priced starting point, not a WHY. PIXEL-UNVERIFIED stands over the whole wave (verification is logic/DOM level, A-C002-2).
