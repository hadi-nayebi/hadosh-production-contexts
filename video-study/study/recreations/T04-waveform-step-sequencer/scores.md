# T04 — Waveform + Step Sequencer · SCORES

Technique: T04 (packet P1, "Look What I Can Do" @ 0:21–0:29) · Consumer: diagram / music surfaces
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 0:20.5–0:29.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 005, Wave 3)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 94 | codex/lens-motion.md |
| Timing / tempo match | 88 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 74 | codex/lens-reusability.md |
| Readability | 84 | codex/lens-readability.md |

**Arithmetic:** (94 + 88 + 100 + 74 + 84) / 5 = 440 / 5 = **88.0 average** · minimum lens **74**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average clears by 3.0; every lens clears the 70 floor (lowest: reusability 74). Tier: **RECREATED** (tier move itself is the style-library job's act on this evidence).

### Priced gap (what the next attempt — practice job — must cure)

**CONVERGENT (Amendment A1 — two lenses name it; primary cure): checkpoint-table coherence under overrides.** Timing (88) + reusability (74) both name: the `beatTimesMs` table rebuilds only when bpm/beatMs is overridden — a duration-only override (`?durationMs=10000`) leaves the specimen's 16 checkpoints standing (step holds at 15 for the last 2.5 s), and a faster tempo can push the step index past the 16 sequencer columns so no column lights and the sequencer head leaves the grid. Cure: a configuration-normalization stage that (a) rebuilds checkpoints from the resolved duration + tempo unless an explicit table is supplied, (b) defines the checkpoint→column mapping explicitly (derive columns from checkpoint count or wrap/mod the step), (c) validates timing inputs as finite and positive before rebuilding (a negative beatMs/bpm can loop the table generator forever).

1. **Palette + shaping completeness** (reusability 74): `panelBg` is declared in CONFIG but never applied (the panel color lives in CSS as `#101216`); URL overrides omit bg/panelBg/seqHeadColor/activeEmptyColor; the waveform envelope constants (0.55/0.45 arc, 1.15 gain, 0.08 offset) sit inside `barHeights` instead of CONFIG; `?pattern=` (empty) preserves the specimen pattern instead of clearing it. Cure: apply every declared palette key from CONFIG, expose the shaping constants as config keys, support an explicitly empty pattern.
2. **Phone title legibility** (readability 84): `.ptitle` clamp resolves to 8 px at 360 px wide — the panel titles fit but are not comfortably legible. Cure: 11–12 px titles at phone width with wrapping allowed for longer titles; slightly strengthen the empty-live-column wash while keeping it clearly dimmer than idle pattern cells; verify rendered 360 px states with both occupied and empty live columns.
3. **Loop-boundary proof** (motion 94): the 7999→8000 ms wrap is logic-verified (both displays reset together, no drift) but not playback-verified; the played-bar `+0.0001` epsilon should be removed or justified. Cure: verify the boundary in playback when a render surface is available.

Own checks before the wave (build-record.md §5): swap test PASS 20/20 at logic level (beatMs 667 checkpoint rebuild + played-palette swap + seqRows 4 + new pattern, all asserted per-bar/per-cell) · purity grep zero hits · `node --check` PASS · segment ffprobe-verified (960×540, 9.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — the comparison page is the render surface; phone rendering is visually unverified, as the readability return also notes.
