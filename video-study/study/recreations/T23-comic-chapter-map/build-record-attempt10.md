# T23 comic chapter map — build record, attempt 10

Artifact: `recreation.html` (single self-contained file; pure model + DOM engine, no build step).
Predecessor source (attempt 9 final, preserved byte-identical): sha256 `244a0c2c2f8a229bca3792d3e055cdafd1dee52a77503c2d09592f3c90f19572`.
Segment basis: `segment.mp4` is source 130.0–137.0 s; segment-local t=0 ≡ source 130.0 s. Filed frame brackets: cut-in 6.133–6.167 s; full grid ≈6.533 s; dive into panel 09 complete ≈6.867 s; appearance window ≈700–734 ms continuous. Construction binds the continuous-window interpretation (approach ≈365 ms + dive ≈335 ms = 700 ms, cycle 2100 ms); the alternative flash→hold→dive interpretation is carried as a named reference interpretation, not constructed.
Render status: no render route exists in this environment (route hunt filed at Stage 0); all geometry/label evidence below is source-model and harness evidence. PIXEL-UNVERIFIED.

## Checkpoint form (uniform, stages 0–7)

Each stage files: (a) a checkpoint — a content copy of the stage source (create-once, distinct inode) — and (b) that stage's check output file; the interim entry below names both paths and the stage source hash BEFORE the next stage opens. The seat's read-back of checkpoints happens at the cycle's Verify census; no live seat read-back is claimed here. Checkpoint copies are produced by file-tool transcription because exec-side copies fail under the measured write fault (EPERM after any read); each copy is verified by sha256 against its source.

## Finding-by-finding application table (plan review, 7 findings)

| # | Finding (short name) | Application in this build |
|---|---|---|
| 1 | Discriminating probes per stage | Predecessor probes run on the stage-0 source and successor probes on each stage source; results filed in each stage's check output (see stage entries). Grouped cures carry their own probes; effects that cannot be separated are recorded at stage level. |
| 2 | Dispatch residual disposition + count/budget corrections | The primitive-kind dispatch residual is dispositioned in Stage 3 as a partial cure + named deferral with per-dimension disposition (Stage 3 entry). Construction inventory stands at 16 construction cures + 1 evidence action; budget overlaps are named in the seat's filing, not in this record. |
| 3 | Scaffold causal tests tightened | Filed in the seat's scores record (this record stays score-blind); the geometric hypothesis is tested only by a controlled labels.maxTabHeightFraction change with other inputs fixed; unresolved outcomes are allowed per hypothesis. |
| 4 | Filing order + payload leak check + conditional probes | Comparison re-point happens only after final own-checks pass and is checked afterward; a score-blind payload check is part of the anchor-leak disposition (payload manifest); the route-hunt condition did not open, so the conditional same-instrument probes on predecessor/final sources are recorded not-applicable at Stage 0; scratch destinations are resolved and checked before use at the firing stage. |
| 5 | Fresh segment observations + fit-conflict record | Stage 0 check output files the segment re-observation with brackets, offset, derivation and tolerances, and the fit-conflict disposition with preserved hash, viewport and both methods' full 12-mode results at 240 px. |
| 6 | Firing form | Per-lens allowlist named in the payload manifest before copying; anchor + score-leak scan runs over the actual assembled inputs including the prompt; returns are captured from tool output within a verified bound, persisted via the file tool, read back and hash-filed; a failed launch or truncated capture counts as a failed firing. |
| 7 | Uniform checkpoint exit condition | Applied as the checkpoint form stated above; the preservation re-verification runs immediately after the working file's first overwrite (Stage 1 entry). |

## Stage entries (interim, filed before the next stage opens)

### Stage 0 — re-observation, no construction
- Source: `recreation.html` sha256 `244a0c2c2f8a229bca3792d3e055cdafd1dee52a77503c2d09592f3c90f19572` (unchanged).
- Checkpoint: `checkpoint-attempt10-stage0.html` — sha256 `244a0c2c2f8a229bca3792d3e055cdafd1dee52a77503c2d09592f3c90f19572` (byte-identical content copy, distinct inode).
- Check output: `own-checks-attempt10-stage0.txt` (route hunt, segment re-observation, 12-label model table at 240/360 px, predecessor probe expectations).
- Result: no render route (PIXEL-UNVERIFIED stands); segment duration 7.000 s with continuous frame change across the appearance window; dive easing fraction at 0.75 measured 0.4009 on the predecessor source.

### Stage 1 — engine resume + entry reconciliation
- Source: `recreation.html` sha256 `1da3df6afdcebe3d93e3b28cb2a8de45fe081010e111f80e141ba5c1c91f3060`.
- Checkpoint: `checkpoint-attempt10-stage1-delta.md` — delta form (see the deviation note in that file: full content copies stand at Stages 0 and 7; stages 1–6 file exact old→new deltas against the predecessor checkpoint, hash-verifiable).
- Check output: `own-checks-attempt10-stage1.txt`.
- Changes: play()'s resume-with-deferred-apply branch now also arms the deadline timer for the current phase's remaining time; applyStep captures the scheduled cycle key at entry, the dive re-derivation compares phase + appearance + cycle, and the entry-render skip record carries the scheduled key.
- Preservation re-verification after the working file's first overwrite: both preserved copies hash to their baseline values (recorded in the Stage 1 check output).
- Probe result: the pause-in-pending-window scenario stalls on the Stage 0 source (no timer after resume, presentations frozen) and continues on this stage's source (timer armed, presentations continue, zero skips).

### Stage 2 — labels: separate parts end-to-end + span-structure counting
- Source: `recreation.html` sha256 `f2301bd648b92ad34ed2187959de58c5035c9d142f4629b0e25fed91f727114c`.
- Checkpoint: `checkpoint-attempt10-stage2-delta.md`.
- Check output: `own-checks-attempt10-stage2.txt`.
- Changes: a parts-based two-line construction (number and title travel separately through the model policy and the DOM refinement; a separator inside a title is content, never a split point); the refinement's line count reads the rendered span structure instead of a Range over assembled contents.
- Probe result: under a Range fixture reporting 4 rects for any content, the predecessor source forces all 12 tabs to number-only with a recorded count of 4; this stage's source keeps the policy modes with counts 1–2. Stage 1's resume probe still passes.

### Stage 3 — configuration: trusted defaults, route parity, validate-before-commit, detail keys, dispatch lock
- Source: `recreation.html` sha256 `f98fa7a3430d0e35880f537452426ee1da4e28eabb4191ce4790f4f2b3e09201`.
- Checkpoint: `checkpoint-attempt10-stage3-delta.md`.
- Check output: `own-checks-attempt10-stage3.txt` (29 probes, 0 fails; Stages 1–2 probes re-run green).
- Changes: load-time deep-frozen trusted-defaults snapshot with CONFIG itself frozen; approachFromScale range guard; routes for every CONFIG key (cut/detail groups, top-level scalars, viewBox origin); boolean route values trimmed consistently; whitespace-only header/title/separator rejected in validation; filled and registry routes validate before committing (out-of-range filled preserves appearances; a registry replacement that validates to nothing restores the prior entry); a CONFIG.detail group carries the art detail branch's cutoff/multipliers/fallbacks and the viewBox gains an origin; the primitive-kind list has one home consumed by validator and renderer, with the suite asserting the renderer's branches and the validator's cases name exactly those kinds. The per-kind rendering/validation bodies remain separate code — that residual is deferred, recorded in the Stage 3 check output.

### Stage 4 — geometry: feasibility mirror, header break, overlap, resolved art height
- Source: `recreation.html` sha256 `ae227c05b60f7122ab44b34320b35177d1bbc1de4e08ed657edcd8e6118468d8`.
- Checkpoint: `checkpoint-attempt10-stage4-delta.md`.
- Check output: `own-checks-attempt10-stage4.txt` (13 probes, 0 fails; Stages 1–3 probes re-run green).
- Changes: the validation feasibility model now mirrors the layout computation exactly (stage padding + inter-column gaps), so combinations the layout cannot build are caught at validation; the header fit reads the configured break mode (no wrap fallback under "normal", so no wrapped growth the setting forbids); the tab overlap is validated against the smallest tab band and the resolved art rectangle accounts for it; the top-right tab anchor uses flex alignment instead of an inert offset; the renderer's detail branch is priced on the resolved art height from the same record the camera consumes, not a fixed-fraction proxy.

### Stage 5 — header wrap refinement, approach transform target, completion channel
- Source: `recreation.html` sha256 `eaf7a63acdc343c371b6a31833de2fe62f87d6f362639a5df1a480255c8f4097`.
- Checkpoint: `checkpoint-attempt10-stage5-delta.md`.
- Check output: `own-checks-attempt10-stage5.txt` (10 probes, 0 fails; Stages 1–4 probes re-run green).
- Changes: a measured header wrap in the refinement pass now takes the configured wrap line-height and refreshes the grown line metadata; the approach transform applies to the grid element only (the masthead is never approach-scaled) and clears when the approach phase leaves; completed panels carry a second, art-independent completion channel — an in-flow bar after the art element — alongside the face tint and tab state.

### Stage 6 — cut-held scene, dive curve, approach easing key
- Source: `recreation.html` sha256 `79f89c062a90ef3224b9caa124645a66a4cbaf1fc7f5210e00b9494e89ce352d`.
- Checkpoint: `checkpoint-attempt10-stage6-delta.md`.
- Check output: `own-checks-attempt10-stage6.txt` (10 probes, 0 fails; Stages 1–5 probes re-run green).
- Changes: at the chapter cut the arrived scene is held in a stage overlay carrying the target panel's art from the cut until the deferred apply has advanced the grid (released on the flush; it survives a pause inside the held window and is released by the resumed flush; restart and handoff release hide it); the dive curve's shipped default now reaches 0.738 of the endpoint at three-quarter progress under the source's own easing measure (predecessor 0.4009) with the dive duration unchanged; the approach consumes its own easing key, and the dive key governs the dive only.

### Stage 7 — full suite, pre-scoring legs, comparison check (no construction)
- Source: `recreation.html` sha256 `79f89c062a90ef3224b9caa124645a66a4cbaf1fc7f5210e00b9494e89ce352d` (identical to Stage 6 — this stage verifies and files only).
- Checkpoint: `checkpoint-attempt10-stage7-delta.md` (empty delta; the Stage 1 delta note's forward statement that a full copy would stand at Stage 7 is superseded here: full content copy stands at Stage 0, delta form at Stages 1–7, reconstruction byte-exact and hash-verifiable at every stage).
- Check output: `own-checks-attempt10-stage7.txt` (full suite 82 checks, 0 fails; legs filed: fit-table-attempt10.md HIT 1, config-census-attempt10.md HIT 0 of 164 leaves, CSS-parse leg clean; literal census whitelisted there; comment check found no non-neutral commentary to strip, so this sha is the scored sha).
- Comparison: checked after the suite passed — comparison.html loads recreation.html by reference (no re-point edit exists); comparison.html is byte-identical to its preserved copy, original side untouched.
