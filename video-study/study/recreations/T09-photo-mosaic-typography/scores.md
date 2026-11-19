# T09 — Photo-mosaic typography · SCORES

Technique: T09 (packet P1, "Look What I Can Do" @ 0:50–0:53) · Consumer: openings (title built from the piece's own material)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 49.5–53.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 006, Wave 4)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 66 | codex/lens-motion.md |
| Timing / tempo match | 78 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 58 | codex/lens-reusability.md |
| Readability | 78 | codex/lens-readability.md |

**Arithmetic:** (66 + 78 + 100 + 58 + 78) / 5 = 380 / 5 = **76.0 average** · minimum lens **58**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 9.0 and two lenses sit under the 70 floor (motion 66, reusability 58). Tier: **IN PROGRESS** (attempt 1 filed; attempt 2 belongs to the practice job, lowest-scored first). No rounding applied.

### Priced gap (what the next attempt — practice job — must cure)

**CONVERGENT (Amendment A1 — two lenses name it; primary cure): checkpoint/flight incoherence.** Timing (78) + reusability (58) both name: per-tile flight timing (`riseDurationMs` 2100 + `staggerMs` 900 from riseStart) is set independently of the checkpoint table, so tiles can still be in flight after `assemblyComplete` (3000) declares the phase "hold" — the checkpoint prices the phase label, not the actual last arrival. Cure: derive tile delays + flight durations from the checkpoint assembly interval (riseStart → assemblyComplete), preserving relative proportions so the latest arrival coincides with assemblyComplete; validate checkpoint ordering on overrides; test actual tile progress immediately before and at completion under default and swapped configs (phase-label assertions alone cannot verify tempo).

1. **Formation fidelity** (motion 66): (a) the specimen's letters are tile *outlines*; this build samples the full glyph raster, so the formation reads as a filled mosaic rather than outline construction — cure: contour-only target sampling (edge extraction from the probe raster). (b) The burst origin reads as scattered skyline starts, not a visible rooftop tile wall/pool that bursts apart — cure: an explicit pooled cluster over the rooftops at burstAt that visibly breaks apart. (c) Arrivals cluster too uniformly — broaden the stagger distribution; ensure the loop restart reads as a fresh construction.
2. **Parameterization completeness** (reusability 58): `tileGap` is declared in CONFIG but never applied; some design constants remain in logic (cloud/building/window geometry ratios, glow blur factor); no multiline title fitting (long multi-word titles — the specimen's full 'LOOK WHAT I CAN DO' — hit the single-line fit floor); `sampleGap` accepts non-integer steps and there is no tile budget for very large stages/titles. Cure: apply or remove every declared key, lift remaining shaping constants into CONFIG, add configurable multiline fitting + density limits, enforce integer sampling steps and a tile budget, and test long multi-word titles with real canvas sampling.
3. **Phone mosaic topology** (readability 78): the computed fit scales the font with stage width, but `tileSize`/`sampleGap` do not scale — at 360 px the tile-to-letter proportion changes and the mosaic can coarsen relative to the glyph; ambient tiles can also exceed letter-tile size (ambient size factor up to ~1.05 × tileSize). Cure: derive tileSize/sampleGap from stage width (or from the fitted font size), cap ambient tile size strictly below letter tiles, and verify with real-browser 360 px frames when a render surface is available (this attempt's phone claim is logic-level only — printed limitation, shared with the readability return).

Own checks before the wave (build-record.md §5): swap test PASS 28/28 at logic level (title swap changes sampled target count + geometry: LOOK 211 / DO 118 / HELLO 250; timing swap moves phase boundaries; palette swap asserted; computed fit 126 px at 360 px stage) · purity grep zero hits · config census 0 hex literals outside CONFIG · `node --check` PASS · segment ffprobe-verified (960×540, 4.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — the comparison page is the render surface; phone rendering is visually unverified, as the readability return also notes. Note, priced by the reusability return: the build record's "0 non-trivial shaping literals" census counted hex literals only; non-hex shaping constants in scene-dressing geometry were not covered by that census — the claim stands corrected by cure 2 above, not repeated.

## Attempt 2 — 2026-11-14 (practice Cycle 005, Wave 4)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 86 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 88 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 79 | codex/attempt-2/lens-reusability.md |
| Readability | 83 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (86 + 88 + 100 + 79 + 83) / 5 = 436 / 5 = **87.2 average** · minimum lens **79**.
**Delta vs Attempt 1:** 87.2 − 76.0 = **+11.2** (signed). Per lens: motion 66→86 (+20) · timing 78→88 (+10) · purity 100→100 (0) · reusability 58→79 (+21) · readability 78→83 (+5).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average clears by 2.2 and every lens is at or above the 70 floor. Tier recommendation: **RECREATED** (tier move is style-library's act; hand-off cites this Attempt 2 pointer, this arithmetic, the floor result — min 79 ≥ 70 — and the filed returns under `codex/attempt-2/`). No WHY owed (the attempt beats the prior average; floor rule not triggered).
**Final source binding:** all five final returns judge the identical recreation.html sha256 `fd7196391e53a4eac8b46d877f92a3dc9526dc842bb11522d33d6b9c44641cca`. An interim wave against sha `18a220ee…` (motion 80 · timing 88 · purity 100 · reusability 77 · readability 79, avg 84.8) is preserved in full at `codex/attempt-2/lens-<lens>-run1.md` with its payloads; its named defects were cured in-cycle and the final wave re-fired against the final source (A-C002-4 / A-C003-1), per `build-record-attempt2.md`.

### Cure → check mapping (seat's private ledger, filed here per CA-2)
- Checkpoint-derived flights (convergent timing+reuse) → D3 arrival distribution (latest exactly 3000 ms, span 2428 ms, stdev 659 ms) + D4 boundary progress under default and swapped configs + D8 checkpoint-order validation / D15 atomic fallback. Timing 78→88, reuse 58→79.
- Contour-only target sampling → D1 (0 interior targets). Motion 66→86 (with pooled origin + density).
- Pooled rooftop cluster + separation → D2 pool geometry/separation + D5 reset state; launch-continuity cure on the interim return's finding → D13.
- Broadened stagger + fresh-construction restart → D3 stdev/span + D5 wrap state.
- Parameterization (tileGap applied and font-scaled, shaping constants lifted — 90+ CONFIG keys, census 0 unused — multiline fitting + height constraint, integer sampling, tile budget) → D6/D7/D9. Reuse 58→79; residual named by the final reuse return: holdEnd is validation-bound rather than a rendering control, flight paths remain straight-line, and sampling still allocates a full-stage raster — the priced gap for any future attempt, not a floor breach.
- Phone topology (tile/sample geometry derived from fitted font; ambient capped against the DRAWN letter size; glow blur font-scaled) → D10 (ratio 0.053 at both 960 px and 360 px) + D14. Readability 78→83; residual: PIXEL-UNVERIFIED — no rendered 360 px frames exist in this environment (A-C002-2), and the final readability return prices assembly-phase recognition and cloud overlap as source-level judgments only.

Own checks before the final wave (build-record-attempt2.md): **37/37 PASS** (D1–D16, deterministic node harness, stubbed canvas raster; `node --check` PASS; purity grep 0 hits). Preservation census at close: `recreation-attempt-1.html` sha `9cd417b3deacb7aaa618be9286aea5b38378a62f5bf036483c0af1c6a299c883` intact after the working file's overwrites; `comparison-attempt-1.html` sha `7f766305c6148efc6722fd0f68b9d95f86903e53a3ae49a352cb1bcebe899fc7` preserved create-once before the comparison's recreation-side text update (interface changed: legacy riseDurationMs/staggerMs/sampleGap/tileSize keys replaced by checkpoint-derived flight + font-ratio geometry keys; ORIGINAL panel unchanged).
