# T15 — Particle Typography · SCORES

Technique: T15 (packet #1, "Look What I Can Do" @ 1:25–1:40) · Consumer: DLC/multilingual production (word animation · transitions)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut, evidence only, local)

## Attempt 1 — 2026-11-13 (recreation Cycle-002)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 68 | codex/lens-motion-fidelity.md |
| Timing / tempo match | 82 | codex/lens-timing-tempo.md |
| Construction purity | 100 | codex/lens-construction-purity.md |
| Reusability / parameterization | 64 | codex/lens-reusability.md |

**Arithmetic:** (68 + 82 + 100 + 64) / 4 = 314 / 4 = **78.5 average** · minimum lens **64**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 6.5; two lenses (motion 68, reusability 64) sit under the floor. Tier: **IN PROGRESS**.

### Priced gap (what attempt 2 must cure — OWNER items at the head, then the returns)

**OWNER CURE 1 — foreground/background intensity separation (owner's read, 2026-11-14; no lens named it):** word particles and reserve particles currently render at the SAME intensity, so the formed word fights its own background and reads poorly. Cure: borrowed (word) particles render FOREGROUND — separated contrast/opacity/intensity; reserve particles render BACKGROUND — dimmer. In the original this separation is part of why the words read at all.

**OWNER CURE 2 — strict phrase sequencing (owner's read, 2026-11-14; no lens named it):** the next phrase can begin forming while the current one is still mid-lifecycle — overlapping animations. Cure: phase exclusivity in the scheduler — a phrase's formation begins only after the previous phrase's dissolve completes; one lifecycle owns the stage at a time.

**Construction model for cures 1 + 2 + priced cure 1 below (HQ's note, standing):** ONE constant flow field — every particle always carries stream velocity; forming = borrowing particles onto targets (low-amplitude jitter, never zero velocity; a guaranteed reserve fraction is never borrowed); dissolving = releasing back to full stream velocity with continuity. Intensity rides the borrow flag.

1. **Streaming reserve + velocity continuity** (motion 68; reuse concurs on the freeze; SUBSUMED into the flow-field model above): surplus particles currently freeze during FORM (targets = start positions) and the largest phrase leaves zero residual dust during HOLD. Cure: a config-sized reserve share of the pool never takes letterform targets and always streams; velocities persist across phase changes instead of resetting at DISSOLVE→GAP.
2. **Surplus/pool policy** (reuse 64): pool never shrinks after a dense phrase. Cure: configurable surplus policy (drift-off + fade, or capped ambient count).
3. **Fitting bounds** (reuse 64): font fit stops ~14 px with no wrap/height fit — long phrases can clip. Cure: bounded width-AND-height fit with multiline wrap as a config option.
4. **Config validation** (reuse 64): zero durations can NaN; sampleGap 0 hangs; empty phrase array unguarded. Cure: clamp/validate all numeric config at load; guard empty phrases.
5. **Original-tempo preset** (timing 82): default brisk variant (1.5/1.5/1.3) vs original proportions 40:33:27. Cure: ship `preset: "original"` (3000/2500/2000) as the default config and keep "brisk" as a named variant.
6. **Determinism on restart** (reuse 64): restart does not reset RNG/positions. Cure: restart re-seeds and rebuilds the pool.

Own checks before the wave (recreation Cycle-002 RUN): swap test PASS at logic level (5,060 → 2,728 targets on swapped words; pixel render not exercisable from the build session — the comparison page is the render surface) · purity grep zero hits · both scripts pass node --check.

## Attempt 2 — not yet run (routes to the PRACTICE job)
Per the owner's refinement (2026-11-13), re-attempts belong to the practice job — and T15, as the lane's only scored recreation, is its first pick under the lowest-scored rule. Seed order: **OWNER cures 1–2 first** (they are also the flow-field rebuild that carries priced cure 1), then priced cures 2–6 (surplus policy · fit bounds · config validation · tempo preset · restart determinism). **Attempt 2 is scored by FIVE lenses** (readability added 2026-11-14) — its average is a different instrument from attempt 1's four-lens 78.5; the delta prints both lens counts. Floor rule binds: if attempt 2 does not beat 78.5, it files WHY here (plateau named).

## Attempt 2 — 2026-11-14 (practice Cycle 002 Wave 1)

Construction: `build-record-attempt2.md` (construction facts + logic-level diagnostics).
Preserved attempt 1 source: `recreation-attempt-1.html`. Lens returns: `codex/attempt-2/lens-<lens>.md`.

| Lens | Attempt 2 | Attempt 1 (shared lenses) | Return |
|---|---|---|---|
| Motion fidelity | 65 | 68 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 93 | 82 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 58 | 64 | codex/attempt-2/lens-reusability.md |
| Readability (new lens, attempt 2 only) | 84 | — | codex/attempt-2/lens-readability.md |

**Arithmetic (dual filing):**
- Five-lens average: (65 + 93 + 100 + 58 + 84) / 5 = 400 / 5 = **80.0** · minimum lens **58**.
- Four shared lenses: (65 + 93 + 100 + 58) / 4 = 316 / 4 = **79.0**, beside attempt 1's four-lens **78.5**.
- Signed delta, five-lens average vs attempt 1's 78.5: **+1.5** — *instrument-changed (4-lens → 5-lens, readability added), not pure movement.*
- Reading of the delta: on the four comparable lenses the movement is **+0.5** (78.5 → 79.0), a bundled outcome of the attempt's construction changes (per-mechanism diagnostics in the build record prove each mechanism operates; they do not attribute lens movement per mechanism). The remaining +1.0 of the headline delta is the instrument effect of adding the readability lens at 84. Per shared lens: timing +11, purity 0, motion −3, reusability −6.

**Bar:** average ≥ 85 AND no lens under 70 (applied to the five-lens average).
**VERDICT: FAIL** — five-lens average 80.0 misses the bar by 5.0; two lenses sit under the floor (motion 65, reusability 58). Tier: **IN PROGRESS**.

**Floor rule:** the five-lens average (80.0) beats attempt 1's 78.5, so no WHY is filed for this attempt. The lens returns name the standing gaps in their own words: motion — borrowed-particle trajectories do not yet ride the stream during form delays/convergence, ambient flow speed, and dissolve brightness-vs-dispersal ordering (lens-motion.md); reusability — the deferred construction areas (width-and-height fit/wrap, config validation, restart determinism, per RUN.md §8 split to attempt 3) plus direct-duration-vs-preset precedence and hardcoded motion constants (lens-reusability.md); readability — real-font phone-width hold-frame verification outstanding, pixel render unverified this attempt (lens-readability.md; build record PIXEL-UNVERIFIED note).

## Attempt 3 — plan scaffold (practice Cycle 008)

Plan: `hidden_files/study-jobs/practice/runs/2026-11-15-cycle-008-wave-7/plan-T15.md`. Prior: 80.0 five-lens (motion 65 · timing 93 · purity 100 · reuse 58 · readability 84). Target: beat 80.0; aim ≥85, every lens ≥70. Same instrument (5→5). No scores filed in this scaffold.

### WHY scaffold — per-cure outcome slots (filled at close if attempt 3 does not beat 80.0; jev-plateau evidence)

- OC1 intensity separation through dissolve (alpha ramp on released state): outcome — landed (effect verified) · evidence — own-checks: per-particle alpha monotonically non-increasing for all 3,154 released particles; alpha reached 0.5 only after ≥12 px displacement (100%); post-dissolve render alpha 0.16; HOLD sets {1.0} vs {0.28} disjoint
- OC2/M1 borrowed trajectories ride the stream (delay streaming + advected convergence): outcome — landed (effect verified) · evidence — own-checks: delayed particles displace at exactly stream velocity × dt (1,644/1,644); median mid-form deviation from the straight segment 11.87 px, 93% in the stream-perpendicular direction; FORM→HOLD position jump 0.000 px, velocity change 0.27 px/s
- M2 ambient flow speed (CONFIG band raised): outcome — landed (effect verified) · evidence — own-checks: svx band [38, 54] px/s, mean 45.9; reserve 1 s hold-phase displacement 53.2 px
- M3 dissolve dispersal-before-dimming ordering (staggered progressive release): outcome — landed (effect verified) · evidence — own-checks: releaseAt spread 700 ms; at dissolve midpoint mean displacement 50.8 px while mean alpha 0.68
- R1 width-AND-height fit + multiline wrap option: outcome — landed (effect verified) · evidence — own-checks: fits at 960×540 and 390×693 with all targets in bounds; multiline fixture 3 lines fitting both bounds; named over-capacity fixture (70-char word) reported shortfall at the font floor; feasible fixture no shortfall
- R2 config validation/clamps + empty-phrase guard: outcome — landed (effect verified) · evidence — own-checks: all abuse fixtures (reserveFraction 1, sampleGap 0/2.5, holdMs NaN, empty/`|` phrases, invalid enums, all-zero lifecycle, seed NaN, out-of-range alphas/fractions) resolve to the stated effective values and the scheduler progresses
- R3 restart determinism (re-seed + pool rebuild): outcome — landed (effect verified) · evidence — own-checks: restart reproduces fresh-load positions + trace exactly over 400 fixed steps, including after abuse-config normalization
- R4 direct-duration-vs-preset precedence printed + implemented: outcome — landed (effect verified) · evidence — own-checks: preset-only 3000/2500/2000; CONFIG.durations.holdMs 4321 honored; URL holdMs 2222 over direct; URL formMs 1111 moves holdStart to gap+1111 (±50 ms)
- R5 hardcoded motion constants → CONFIG (full consumption census): outcome — landed (effect verified) · evidence — own-checks: consumption census 42/42 entries, one asserted consumed effect per key/key-group including all new keys
- Deferred (interlude · pool shrink · font-readiness): outcome — n/a (deferred in plan, with reasons) · evidence — build record: interlude allocated 0 ms, its reference duration unmeasured in filed evidence; surplus rendering policy-governed (drift-fade / capped-ambient measured), pool itself never shrinks — bounded-memory item remains open

### Stuck-lens hypothesis (pre-drafted)

If motion does not clear 70 despite OC2/M1/M3 landing at own-check level, the plateau hypothesis is: logic-level trajectory effects (advection, ordering) do not price as perceived stream motion under a source-only lens — the lens prices the *rendered* impression, and PIXEL-UNVERIFIED means no filed evidence can distinguish "trajectory still reads straight" from "trajectory reads streamed but the return discounted it." If reuse does not clear 70 despite R1–R5, the hypothesis is: the deferred remainder (pool shrink, interlude-independent bounded behavior) is carrying more of the lens than the plan priced. Plateau name (if non-beating): ___ · lens(es) stuck: ___ · cycles stuck: ___

## Attempt 3 — 2026-11-15 (practice Cycle 008 Wave 7)

Construction: `build-record-attempt3.md` (construction facts + logic-level diagnostics).
Final source sha256: **8cef752faff72a5e6a2e041a48b48391892cacfe110952c72069fcd31736f640** — all five returns below judge this identical source.
Preserved attempt 2 source: `recreation-attempt-2.html` (sha256 3147ed9b…ade6, verified identical before and after Execute — mechanical guard 2).
Lens returns: `codex/attempt-3/lens-<lens>.md`; payloads preserved create-once at `codex/attempt-3/instr-<lens>.txt` before firing, anchor-inspected (no prior scores, averages, targets, or verdict language in any payload).
Own checks: `own-checks-T15.js` (cycle run directory) — all checks pass, 0 fail, against the final source (mechanical guard 1 inputs below recomputed from the filed returns).

| Lens | Attempt 3 | Attempt 2 | Delta | Return |
|---|---|---|---|---|
| Motion fidelity | 76 | 65 | +11 | codex/attempt-3/lens-motion.md |
| Timing / tempo match | 89 | 93 | −4 | codex/attempt-3/lens-timing.md |
| Construction purity | 100 | 100 | 0 | codex/attempt-3/lens-purity.md |
| Reusability / parameterization | 78 | 58 | +20 | codex/attempt-3/lens-reusability.md |
| Readability | 83 | 84 | −1 | codex/attempt-3/lens-readability.md |

**Arithmetic (mechanical guard 1, recomputed from the filed returns of both attempts):**
- Attempt 3: (76 + 89 + 100 + 78 + 83) / 5 = 426 / 5 = **85.2 average** · minimum lens **76**.
- Attempt 2: (65 + 93 + 100 + 58 + 84) / 5 = 400 / 5 = **80.0**.
- Signed delta: **+5.2** — same instrument (5 lenses → 5 lenses); the delta reads as pure movement.

**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average 85.2 clears the bar by 0.2; every lens is at or above 70 (minimum 76). Tier hand-off on PASS is the style-library's act, filed from this pointer.

**Floor rule:** the average beats the prior attempt (85.2 > 80.0), so no WHY is owed for this attempt. The plan scaffold's per-cure slots above are filled with the own-check evidence; its stuck-lens hypothesis was not invoked.

### Per-cure outcomes (private mapping — CA-W1 separation: effect verified / lens observation / attribution)

Attribution rule for this filing: lens movement is JOINT/bundled evidence. No lens delta is attributed to any single cure; per-cure claims below are limited to measured mechanism outcomes and to what the returns themselves say.

- **OC1 (dissolve alpha ramp on a released state)** — effect verified: monotone ramp for all 3,154 released particles; dimming only after ≥12 px displacement (100%); end state at surplusAlpha; composited trail model word 1.00 vs background 0.0052. Lens observation: readability (83) credits the brightness hierarchy (1.0 vs 0.28 vs 0.16) and prices trail accumulation as unproven by the model. Attribution: undetermined (bundled).
- **OC2/M1 (stream-advected borrowed trajectories)** — effect verified: delay displacement = stream velocity × dt exactly (1,644/1,644); median mid-form deviation 11.87 px, 93% stream-perpendicular; FORM→HOLD continuity 0.000 px / 0.27 px/s; HOLD bounded at 0.484 px max. Lens observation: motion (76, +11) credits the lifecycle and displacement-before-fading, and prices residuals the mechanism checks do not cover: formation reads as broad convergence rather than directional stream condensation; at dissolve start every letter particle immediately resumes full stream velocity (releaseAt governs only the added component and alpha), so the word first translates together; anchor wrapping can shift a particle; buildPhrase clears residual release velocity between phrases. Attribution: undetermined (bundled with M2/M3).
- **M2 (ambient stream band raised into CONFIG)** — effect verified: svx band [38, 54] px/s (attempt 2: 18–34), mean 45.9; reserve 1 s displacement 53.2 px. Lens observation: motion (76) still reads the stream as "gentle drifting dust" against the technique's fast streams — perceptual speed remains unverified under PIXEL-UNVERIFIED. Attribution: undetermined.
- **M3 (staggered progressive release)** — effect verified: releaseAt spread 700 ms; midpoint displacement 50.8 px at mean alpha 0.68; release component grows with q. Lens observation: priced jointly with OC2 above (motion return). Attribution: undetermined (bundled with OC1/OC2).
- **R1 (width+height fit, multiline wrap, reported shortfall)** — effect verified: fits at both sizes, multiline fixture 3 lines within both bounds, over-capacity fixture reports shortfall at the floor. Lens observation: reusability (78, +20) credits the fit/wrap surface and prices that a shortfall still draws (can clip), that wrapping splits on whitespace only, and that sparse sampling can yield no targets for small glyphs; readability (83) prices phone-width sampling sparsity on the longest phrase. Attribution: undetermined (bundled with R2–R5).
- **R2 (validation/clamps + empty-phrase guard)** — effect verified: every abuse fixture resolves to its stated effective value; all-zero lifecycle guarded. Lens observation: reusability (78) prices remaining edges: palette endpoints accept six-digit hex only (shorthand/named colors silently misrender), `fontWeight` is neither normalized nor URL-overridable, empty input restores the default phrases (an explicit empty-content policy is absent), and removing `presets.original` while selecting an invalid preset can dereference an undefined preset. Attribution: undetermined (bundled).
- **R3 (restart determinism)** — effect verified: restart reproduces fresh-load positions + trace exactly, including after normalization. Lens observation: reusability (78) names seeded restart a strength, bounded by viewport/font/frame-step sameness. Attribution: undetermined (bundled).
- **R4 (duration precedence: URL > CONFIG.durations > preset, printed)** — effect verified: three-instance precedence plus the holdStart timing effect. Lens observation: reusability (78) confirms the precedence is explicit and usable, and prices that editing the top-level `formMs`/`holdMs`/`dissolveMs` fields alone has no effect (they are resolution outputs — the printed interface names `CONFIG.durations` as the direct-edit surface). Attribution: undetermined (bundled).
- **R5 (motion constants → CONFIG, census)** — effect verified: 42/42 census entries with per-key effect assertions, including every new key. Lens observation: reusability (78) confirms content/palette/layout/motion controls are substantially consumed. Attribution: undetermined (bundled).
- **Timing regression (−4, 93→89)** — the timing return weights proportions 65% / cycle rhythm 35%: the per-phrase arc and 6:5:4 proportions are credited as matching; the segment-level rhythm is priced down for the absent non-typography interlude and the follow-up phrase's later arrival (recreation's second phrase finishes forming at 11 s; the return cites the reference's follow-up re-forming around 9 s into the window). The tempo preset is filed as a retained implementation preset with unverified reference match (no identifiable segment timestamps for individual phase boundaries were filed this cycle).
- **Readability regression (−1, 84→83)** — the return credits separation, stability, and reading interval; the residual is phone-width sampling density on the longest phrase under a stubbed measure model, with real-font verification outstanding.

**Standing limitations printed with this filing:** PIXEL-UNVERIFIED (A-C002-2) — no render route was available; every geometry/readability statement rests on the logic-level suite under a stubbed measure model. Interlude: 0 ms allocated, reference duration unmeasured. Pool: never shrinks (surplus rendering is policy-governed; bounded pool size remains an open item named in the plan's deferrals).
