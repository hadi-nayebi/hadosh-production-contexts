# T10 — Recursive Zoom / Tile Dive · SCORES

Technique: T10 (packet P1, "Look What I Can Do" @ 0:54–0:56) · Consumer: transitions (dive from overview into one detail cell)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 53.5–56.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 006, Wave 4)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 90 | codex/lens-motion.md |
| Timing / tempo match | 68 | codex/lens-timing.md |
| Construction purity | 96 | codex/lens-purity.md |
| Reusability / parameterization | 62 | codex/lens-reusability.md |
| Readability | 82 | codex/lens-readability.md |

**Arithmetic:** (90 + 68 + 96 + 62 + 82) / 5 = 398 / 5 = **79.6 average** · minimum lens **62**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 5.4 AND two lenses fall under the 70 floor (timing 68, reusability 62). Tier: **IN PROGRESS** (attempt 2 routes to the practice job, lowest-scored first).

### Priced gap (what the next attempt — practice job — must cure)

**CONVERGENT (Amendment A1 — two lenses name the same defect; primary cure): checkpoint-table coherence.** Timing (68) + reusability (62) both name it: `checkpoints.wallHold` is declared but never used; fade durations sit outside the checkpoint derivation; overrides carry no validation or normalization — a duration-only override (`durationMs=800`) wraps before the dive completes or either pill appears, `diveEndMs` beyond duration prevents completion, `diveEndMs` before `diveStartMs` collapses the dive into a step, and changing duration alone does not rescale the checkpoints. Cure: a configuration-normalization stage that validates checkpoint order, derives fades from checkpoint intervals (or prices them as checkpoints), rescales or rejects incoherent timing overrides, and either uses `wallHold` or removes it.

**CONVERGENT (co-primary): the locator pill is wrong in time and in space.** Timing (68) measured the anchor: source 0:55 = local 1500 ms, where the evidence frame already shows "you are here" fully present — the recreation's pill is still at opacity 0 there (fade 1750→2100 ms = source 55.25–55.60). Readability (82) names the spatial half: the pill clamp protects its layout box but not its transformed bounds during the slide-in (transient right-edge clipping possible), and at full dive the fixed pill sits over the enlarged target (occlusion risk). Cure: advance `pillAt` so the pill is visible at local 1500 ms (measure onset/full-visibility against more frames), clamp transformed bounds, and verify pill placement at entrance, mid-fade and full dive on a phone frame.

**CONVERGENT (record honesty): build-record claims exceed their evidence.** Motion (endpoint is ~95.9% of frame height with grid gaps, not the claimed ~98% — zoom ≈3.477 would reach it), timing (the loop seam is an excerpt reset, not a proven specimen-matched loop point), purity (the swap test proves configurable behavior, not absence of tracing; the lens's own grep was source inspection — its execution tool failed to start), reusability (the "every shaping variable" claim overstates the supported surface), readability (the no-clipping claim is unconditional where the proof is computed/source-level). Cure: correct each claim in the record at attempt 2 and carry rendered-playback evidence where a claim needs it.

1. **CONFIG-only tile content** (reusability 62): the three glyph scenes are a fixed robot/desk/car switch in `drawTileArt` (85 % geometry literals); a fourth kind requires a new code branch, and an unknown kind silently renders the car. Cure: CONFIG-supplied shape descriptors or an artwork registry + explicit unknown-kind rejection; expose the remaining scene/layout values (tile aspect, gradient stop, cloud/skyline geometry, pill slide distance, easing choice) and the full palette via overrides; enforce grid/tile/target consistency (range-checked target, tile count = cols×rows).
2. **Background stacking** (readability 82): clouds are appended after the wall/pills with no explicit stacking control, so translucent clouds can paint over foreground content. Cure: explicit z-order (sky < skyline < wall < pills).
3. **Status-pill timing unverified** (timing 68): status 2150→2450 ms has no frame anchor in the supplied evidence. Cure: verify against additional frames around 0:55–0:56 at attempt 2.

Own checks before the wave (build-record.md §5): swap test PASS 26/26 at logic level (pill/status/tile texts + diveStart/pillAt timing + skyTop/highlight palette, all asserted per-state/per-element) · purity grep zero hits · config census filed (0 hex colors, 0 timing durations in logic outside CONFIG; glyph geometry disclosed) · `node --check` PASS · segment ffprobe-verified (960×540, 3.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — the comparison page is the render surface; phone rendering is visually unverified, as the readability return also notes.

## Attempt 2 — 2026-11-15 (practice Cycle 007, Wave 6)

Bound source: `recreation.html` sha256 **4b3058c2185ed10740c6de10dccf122e9301789cefa3a6e75eab7fb647defc70** (frozen copy in the run directory; all five returns bind to this sha). Build record: `build-record-attempt2.md` (score-blind). Own checks before the wave: logic suite 140 PASS / 0 FAIL (effect mappings · independent override assertions · normalization rejection suite · descriptor tests · consumed-effect census 79 rows / 0 unconsumed · displayed-state model · swap test) · purity grep 0 hits, executed · `node --check` PASS · PIXEL-UNVERIFIED (no render route in this seat).

| Lens | Score | Δ vs Attempt 1 | Return |
|---|---|---|---|
| Motion fidelity | 92 | +2 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 87 | +19 | codex/attempt-2/lens-timing.md |
| Construction purity | 98 | +2 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 74 | +12 | codex/attempt-2/lens-reusability.md |
| Readability | 87 | +5 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (92 + 87 + 98 + 74 + 87) / 5 = 438 / 5 = **87.6 average** · minimum lens **74**.
**Signed delta vs Attempt 1:** 87.6 − 79.6 = **+8.0**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS — RECREATED.** Average clears by 2.6 and every lens clears the 70 floor (lowest: reusability 74). Tier hand-off QUEUED on the style-library job's HQ.json (entry `practice-2026-11-15-t10-a2`) with this section as the scores pointer. No WHY is filed — the attempt beats 79.6 and passes the bar (three-branch close, passing branch).

### Cure-by-cure outcome (evidence: build-record-attempt2.md + own-check suite + the filed returns)

| Cure | Outcome | Evidence |
|---|---|---|
| CC1 checkpoint-table coherence (normalization stage, atomic rejection, duration-only proportional rescale, span-derived fades) | LANDED | Normalization suite cases all pass (rescale factor 0.2667 asserted; incoherent explicit overrides rejected atomically + recorded); timing lens 68 → 87 (+19), reusability 62 → 74 (+12) |
| CC2 locator pill in time + space (frame-bound pillAt, transformed-bounds clamp, full-dive occlusion) | LANDED | Frames: onset ∈ (800, 1000], full ≤ 1000 ms; bound pillAt 850 + derived fade 149 → full at 999 ms and at local 1500 ms; transformed right edge 352.8/360 at entrance/mid/full; locator exits during the dive (frame-evidenced) so full-dive overlap is zero by construction |
| R1 CONFIG-only tile content (descriptor renderer, unknown-kind rejection, full override surface, grid/tile/target consistency) | LANDED with priced gap | Fourth kind renders entirely from CONFIG descriptors; malformed/unknown descriptors throw `T10DescriptorError`; census 79/79 keys consumed. Priced gap from the reusability return (74): the override parser is hand-listed rather than schema-driven, and some production-facing overrides lack per-key validation — named for any future attempt; the floor and bar are met |
| RD1 explicit z-order (sky < clouds < skyline < wall < pills) | LANDED | Z values assigned at construction and census-asserted; readability lens 82 → 87 (+5) |
| T1 status-pill timing verification (frames around 0:55–0:56) | LANDED | Frames: status absent at 2300, fully visible at 2450; bound statusAt 2325 + derived fade 125 → full at 2450 = diveEnd; the frames also corrected the status pill's construction (light pill, green text, right-side anchor) |
| Claims corrections 1–7 | ALL FILED | build-record-attempt2.md §3 (95.9% coverage · excerpt-reset loop · swap = configurable behavior only · actual CONFIG surface + named structural constants · source-bound PIXEL-UNVERIFIED no-clipping scope · pillAt→opacity-only attribution · wallHold removed from artifact and face) |

### Priced gaps carried forward (no further attempt scheduled — technique passes)

- Reusability return (74): schema-driven parsing/validation of every production-facing override is the named next step if this machinery is ever re-opened; the build record's override claims stand as demonstrated, per the return's BODY-WRITE.
- Motion (92) and readability (87) returns both carry the standing limitation: rendered side-by-side playback verification does not exist in this seat; all rendered conclusions remain PIXEL-UNVERIFIED until a render route exists.
- Timing return (87): cross-phase endpoint validation (positive fades, endpoint relationships) beyond the current suite is named as a hardening step for the shared normalization pattern.
