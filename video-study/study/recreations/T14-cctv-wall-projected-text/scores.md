# T14 — CCTV Room + Wall-Projected Text · SCORES

Technique: T14 (packet P1, "Look What I Can Do" @ 1:20–1:25) · Consumer: openings (found-footage room where the environment answers)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 1:19.5–1:25.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 006, Wave 4)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 92 | codex/lens-motion.md |
| Timing / tempo match | 88 | codex/lens-timing.md |
| Construction purity | 96 | codex/lens-purity.md |
| Reusability / parameterization | 64 | codex/lens-reusability.md |
| Readability | 68 | codex/lens-readability.md |

**Arithmetic:** (92 + 88 + 96 + 64 + 68) / 5 = 408 / 5 = **81.6 average** · minimum lens **64**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses the bar by 3.4 AND two lenses fall under the 70 floor (reusability 64, readability 68). Tier: **IN PROGRESS** (attempt 2 routes to the practice job).

### Priced gap (what the next attempt — practice job — must cure)

**CONVERGENT 1 (Amendment A1 — purity 96 + reusability 64 name it; primary cure): CONFIG completeness is overstated.** Room/text geometry, the wall width multiplier (0.58 in `fitWall`), glow opacity/blur, shadow radii, TV border width, font sizes/line heights, gradient stops and scanline spacing/black alpha live outside CONFIG, and the build record's "0 non-trivial technique-shaping literals outside CONFIG" claim is unsupported as written. Cure: move the remaining shaping constants into named CONFIG keys (geometry + glow + overlay construction), and correct the census claim in the build record to match the measured census.

**CONVERGENT 2 (Amendment A1 — reusability 64 + readability 68 name it): the fit story is width-only and factor-assumed.** The wall font is computed from an assumed 0.60 glyph-width factor with no measured margin and no height/line-count budget — many-line answers can overlap the TV or leave the stage, and an unbroken long word shrinks with no readability floor. Cure: measure the actual rendered wall text width with a fit margin, add a two-dimensional fit (width AND height/line budget) with a minimum readable font size and explicit long-word handling.

1. **TV follow-up clipped at phone size** (readability 68): at a 360×202.5 stage the TV screen leaves ~42 px for text while the full exchange (2-line question + blank line + follow-up at ~13 px line-height) needs ~52 px — `overflow:hidden` cuts into "To what?". The build record's "typing can never push the set's geometry" claim priced wrapping but not vertical fit. Cure: fit the complete TV exchange vertically (drop the blank line, grow the screen, or cut padding while keeping the 9 px floor) and verify all three holds in rendered 360 px frames.
2. **Checkpoint coherence under overrides** (reusability 64): checkpoint overrides are clamped only at zero — `wallAt=5000&followAt=2000` reverses the room's argument and `wallAt=9000` silences the wall; longer texts can still be typing when the next phase starts, so start-order does not guarantee completion-order. Cure: a normalization/validation stage that checks effective checkpoints against duration and actual text completion times, with a documented scheduling policy or explicit diagnostics; add adversarial swaps (reversed/out-of-window checkpoints, long question, many-line answer, unbroken word).
3. **Wall-onset anchor vs the evidence frame** (timing 88): t82 at 1:22 ≈ 2500 ms into the segment shows NO wall text, but the recreation already shows 2 wall chars at 2500 ms (wallWriteAt 2400). Cure: measure the specimen's first wall character in the moving segment and set the checkpoint to reconcile with the wall-empty frame, preserving the wall's completion hold before the follow-up. Also correct the record's completion times to the actuals the timing lens computed (question full 1940 ms, wall full 3765 ms — the build record's 1995/3830 figures were test deadlines, not completions; the follow-up's 4785 ms was exact).
4. **Loop-boundary + cadence proof** (motion 92): the locked-off construction, char-by-char typing and steady chrome are source-verified, but reveal cadence and the 6 s loop reset are not playback-verified against the specimen. Cure: paired playback comparison of intermediate reveals and the loop boundary when a render surface is available.

Own checks before the wave (build-record.md §5): swap test PASS 28/28 at logic level (new q1/wall/q2 texts + wallAt 2600 checkpoint + amber→#37ffd0 palette, checkpoint gating, phase order, timestamp advance/rollover/wrap, 360 px computed wall fit all asserted) · purity grep zero hits · `node --check` PASS · segment ffprobe-verified (960×540, 6.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — the comparison page is the render surface; phone rendering is visually unverified, as the readability return also notes.

## Attempt 2 — Plan section (Cycle 010 Wave 9, pre-drafted WHY scaffold)

Plan: `practice/runs/2026-11-15-cycle-010-wave-9/plan-T14.md`. Prior avg **81.6** (motion 92 · timing 88 · purity 96 · reuse 64 · readability 68). Target: beat 81.6; aim ≥85, all lenses ≥70. Measured wall-onset anchor (A-C006-1, ffmpeg frame extraction from segment.mp4, this Plan): wall text ABSENT at 2400/2500/2533 ms, first partial wall glyph PRESENT at 2567 ms — bracket (2533, 2567] ms; attempt 2 sets wallWriteAt 2400 → 2567 (wall completion 3765 → 3997 ms; hold before follow-up 635 → 403 ms).

### Cure-by-cure outcome slots (filled at close, whatever the outcome)
- CONVERGENT 1 — CONFIG completeness + census-claim correction: outcome slot ___ (literals migrated ___ / census result filed ___ / purity 96 → ___ · reuse contribution ___)
- CONVERGENT 2 — two-dimensional measured fit (measured width + margin · height/line budget · readable floor · long-word hard-split): outcome slot ___ (fit basis that ran: measured / fallback ___ / readability 68 → ___ · reuse contribution ___)
- R-1 — TV vertical fit of the full exchange (blank line dropped · padding · TV growth only if modelled necessary): outcome slot ___ (all three holds modelled containment + legibility: PASS/FAIL ___)
- U-1 — checkpoint coherence + atomic override rejection with observable rejected-overrides record (A-C006-4): outcome slot ___ (rejected sets asserted ___ · accepted swaps asserted ___ · reuse 64 → ___)
- T-1 — wall-onset anchor 2567 ms + corrected completion record (1940/3997/4785): outcome slot ___ (timing 88 → ___ · the compressed 403 ms hold priced by the lens as ___)
- Motion preservation — locked-off construction untouched except the checkpoint value: outcome slot ___ (motion 92 → ___)
- Attempt 2 result slot: new avg ___ (delta vs 81.6: ___) · min lens ___ · verdict ___

### Stuck-lens hypothesis (pre-committed, before Execute)
If attempt 2 does not beat 81.6, the hypothesized stuck lens is **reusability**: it starts lowest (64), its cure is the broadest (three cure families converge on it), and its attempt-1 return priced a class — content/shaping literals and scheduling coherence — where each fix can expose the next literal or the next incoherent combination (the A-C009-4 classification-dispute class already bit two sibling items). Secondary hypothesis: **readability** sticks if the "measured" fit's measurement basis cannot be exercised by the own-check suite (plan failure point FP-T14-1), leaving the lens to price another factor story. Timing is hypothesized NOT to stick: its cure rests on direct segment-frame evidence, the strongest evidence class this lane has.

### Evidence jev-plateau will need if the attempt does not beat 81.6
1. The five filed attempt-2 lens returns verbatim (codex/attempt-2/), each lens's score beside its attempt-1 score, with the return passage that prices each unmoved cure quoted — not scores.md's summary alone.
2. Cure-by-cure disposition from the slots above: for each cure, the construction change as built (build-record-attempt-2 pointer), the own-check evidence it passed (fit-table.md · config-census.md · literal census · displayed-state model · rejected-overrides record), and the lens passage that did or did not credit it.
3. The anchor evidence: frame times filed in the plan (absent 2533 ms / present 2567 ms) and the timing return's verdict on the 2567 checkpoint and the compressed 403 ms hold — to distinguish "anchor still wrong" from "hold priced against the anchor gain."
4. For a stuck reusability lens: the literal census's unlisted/whitelist dispute list and the validation suite's accepted/rejected branch results — to name whether the plateau is classification, scheduling policy, or fit scope.
5. For a stuck readability lens: which fit basis ran (measured vs fallback), the displayed-state model's wrapped-state results at 360×202.5 for all three holds, and the PIXEL-UNVERIFIED print — to separate a construction plateau from a verification-surface plateau.
6. The delta arithmetic recomputed from filed returns (mechanical guard 1) and the preservation census (guard 2), so the WHY rests on verified numbers and intact evidence.

## Attempt 2 — 2026-11-15 (practice Cycle 010 Wave 9) · FILING

Final source: `recreation.html` sha256 **b530b7372e768f291053dfa5ab1523cc633597fa117cec4702121fce04ee1525** — all five final returns bind to this sha. A run-1 wave on the interim source (sha 2c5a897e…) scored 94/91/100/81/79 and is preserved verbatim at `codex/attempt-2/lens-<lens>-run1.md`; it never enters this average (its reusability + readability returns priced two real defects, cured in-cycle, wave re-fired on the final source — build-record-attempt2.md).

| Lens | Score | Return (final, run 2) |
|---|---|---|
| Motion fidelity | 95 | codex/attempt-2/lens-motion-run2.md |
| Timing / tempo match | 92 | codex/attempt-2/lens-timing-run2.md |
| Construction purity | 100 | codex/attempt-2/lens-purity-run2.md |
| Reusability / parameterization | 87 | codex/attempt-2/lens-reusability-run2.md |
| Readability | 84 | codex/attempt-2/lens-readability-run2.md |

**Arithmetic:** (95 + 92 + 100 + 87 + 84) / 5 = 458 / 5 = **91.6 average** · minimum lens **84**.
**Delta vs attempt 1:** 91.6 − 81.6 = **+10.0** (signed). Per lens: motion 92→95 (+3) · timing 88→92 (+4) · purity 96→100 (+4) · reusability 64→87 (+23) · readability 68→84 (+16). Lens movement prints **BUNDLED** (W1: the convergent cures landed in a combined build pass and two further cures landed in-cycle; staged evidence does not isolate individual lens movement).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average clears the bar by 6.6 and every lens clears the 70 floor. Tier hand-off: filed to the seat for style-library's board with this scores.md pointer (W4 branch iii — the tier move is style-library's act; receipt state: queued = SENT-UNRECEIVED).

### Scaffold outcome slots — COMPLETED (the pre-drafted scaffold above was provisional until this filing)
- CONVERGENT 1 — CONFIG completeness + census-claim correction: **DONE** — 96 leaf CONFIG keys, every key consumed (config-census.md, HIT 0); the attempt-1 "0 literals" claim corrected to the filed census result (14 distinct structural literals outside CONFIG, per-literal whitelist in build-record-attempt2.md) · purity 96 → **100** · reuse contribution bundled.
- CONVERGENT 2 — two-dimensional measured fit: **DONE with a filed limitation** — fit basis that ran: **model-estimated** (no DOM/canvas measurement route exists in this environment; the source measures via canvas in a viewing runtime — fit-table.md HIT-1, readability priced against the model rows per the plan-review disposition); width + height/line budget, 0.04 margin, 14px floor with explicit diagnostic, hard-split long words · readability 68 → **84** · reuse contribution bundled.
- R-1 — TV vertical fit: **DONE** — blank line dropped, padding 7%/8% → 3%/6% via CONFIG, no TV growth needed; displayed-state model: full exchange 39.1px needed vs 52.3px inner at 360×202.5, all three holds containment + legibility **PASS**.
- U-1 — checkpoint coherence + atomic rejection: **DONE** — validation over completion times (span-derived subordinate durations), whole-set atomic rejection with the observable rejected-overrides record; rejected sets asserted (reversed · out-of-window · completion-crossing · overrunning) and accepted swaps asserted (defaults · wallAt=2600 · long-but-coherent) · reuse 64 → **87**.
- T-1 — wall-onset anchor: **DONE** — wallWriteAt 2400 → 2567 (measured bracket (2533, 2567]); completion record corrected to actuals **1940 / 3932 / 4785** — the plan's 3997 wall figure rested on a 23-char count; the wall text is 22 chars, recomputed actual 3932, hold before follow-up **468ms** · timing 88 → **92**.
- Motion preservation: **HELD** — locked-off construction untouched except the checkpoint value and the wall-box position (top 10% → 15% for chrome clearance, in-cycle cure) · motion 92 → **95**.
- Attempt 2 result: new avg **91.6** (delta vs 81.6: **+10.0**) · min lens **84** (readability) · verdict **PASS**.

### Remaining gaps named by the final returns (next attempt's cures, not blockers)
Timing: require a positive final hold for accepted overrides; specimen completion-frame anchors still owed. Reusability: validate the final configuration regardless of input route; whitespace-aware wall wrapping; an observable wall/TV containment acceptance gate. Readability: rendered 360px evidence for all three reading states (PIXEL-UNVERIFIED stands — no render route in this seat); below-floor wall fits currently display at the floor with a diagnostic rather than preventing overflow. No WHY is owed (beating attempt, PASS branch).
