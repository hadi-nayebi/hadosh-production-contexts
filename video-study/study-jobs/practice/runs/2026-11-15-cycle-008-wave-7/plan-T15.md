# Plan — T15 particle typography · Attempt 3 · practice Cycle 008 Wave 7

PLAN PHASE ONLY. Governing: practice INSTRUCTION §1–§2, §5 amendments (A-C002-1 effect mappings · A-C002-2 PIXEL-UNVERIFIED · A-C003-2 machine baseline · A-C004-1 content copies · A-C005-1 create-once · A-C006-1 priced-anchor re-observation · A-C006-2 CONFIG consumption). Seat inventory: RUN.md §1 of this run dir.

## Prior vector + delta target

Prior (attempt 2, 2026-11-14, practice C002): **80.0 five-lens — motion 65 · timing 93 · purity 100 · reuse 58 · readability 84**; min 58. Bar: avg ≥85 AND no lens <70.
Target: **beat 80.0; aim ≥85, every lens ≥70** (needs +25 lens-points: reuse 58→≥70 = +12, motion 65→≥70 = +5 minimum; the remaining +8 from motion/reuse above floor, readability/timing held). Attempt 2→3 is **same-instrument (5→5 lenses)** — the delta reads as pure movement. (Attempt 1→2 was instrument-changed 4→5; never compare attempt 3 against attempt 1's 78.5 as pure movement.)

## Read list (FULL-RECORD READ — closes R-OBS-1 for this item)

Read firsthand this Plan session, in full or as noted:
1. practice `INSTRUCTION.md` §0–§2 + §5 amendments (incl. A-C002-1/-2, A-C003-2, A-C004-1, A-C005-1, A-C006-1/-2).
2. This run's `RUN.md` §1 (pool, picks, T15 cure inventory) + `preservation-baseline.txt` (T15 recreation.html hash line).
3. `scores.md` in full — OWNER CURES 1+2 at its head (filed 2026-11-14), attempt-1 priced cures 1–6, attempt-2 filing (dual arithmetic, floor note naming the standing gaps).
4. ALL prior Codex lens returns: attempt 1 — `codex/lens-motion-fidelity.md` (68), `lens-timing-tempo.md` (82), `lens-construction-purity.md` (100), `lens-reusability.md` (64); attempt 2 — `codex/attempt-2/lens-motion.md` (65), `lens-timing.md` (93), `lens-purity.md` (100), `lens-reusability.md` (58), `lens-readability.md` (84).
5. `recreation.html` source in full (attempt-2 working file, 13,883 bytes).
6. `recreation-attempt-1.html` (skim — pre-flow-field model: per-phase velocities, surplus freeze, brisk default).
7. `comparison.html` (face; ORIGINAL side = segment.mp4, never changed).
8. `build-record-attempt2.md` in full (config surface, motion model as claimed, cure-to-evidence matrix rows 1–9, PIXEL-UNVERIFIED note).
9. Packet evidence: digest `hidden_files/study/video-digests/2026-11-13-ig-dfk4sfvvjjq/digest.md`, T15 catalogue entry [1:25–1:40] — silver streams condense into 'WHAT' then 'LOOK WHAT I CAN DO!', hold to read, stream away; evidence frames t88.jpg (1:28, final word still streaming in), t94.jpg (1:34, lockup); binary-tree interlude between phrases noted.
10. Guards: `guards/jev-plan-exit.md` (§2 incl. §2.4 standing failure points a–g), `guards/guards.md` (mechanical guards 1–3), `guards/codex-rescore-wave.md` (five-lens instrument, score-blind feeding contract).

## Preservation record (§2.3, A-C004-1, A-C005-1)

- Destination `recreation-attempt-2.html` did NOT exist → created by plain `cp` (content copy, NEVER hardlink).
- sha256 source `recreation.html` = **3147ed9b53df39a48a56a81b39cb2ec004b3432df454e18878b56c6832dfade6** — matches the seat's `preservation-baseline.txt` line for T15 recreation.html exactly.
- sha256 copy `recreation-attempt-2.html` = **3147ed9b53df39a48a56a81b39cb2ec004b3432df454e18878b56c6832dfade6** — copy == source ✔.
- Distinct inodes verified (source 4175572 · copy 4691104) — not a hardlink.
- `recreation.html` and `comparison.html` NOT edited in this Plan phase.

## OWNER-CURE CONSUMPTION AUDIT (attempt-2 source vs what the returns priced)

**Headline: the scheduler and the alpha table were consumed; the flow field underneath them was not. Attempt 2 implemented both owner cures as *state* (borrow flag → alpha; sequential phases) but not as *motion* — borrowed particles never ride the stream the model claims, and the borrow flag's own flip at dissolve undoes Cure 1 at the exact moment it matters.**

### Cure 1 — foreground/background intensity separation (rides the borrow flag)
- **Source DOES:** CONFIG `foregroundAlpha 1.0` / `reserveAlpha 0.28` / `surplusAlpha 0.16`; `renderAlpha` assigned per frame from role/borrow state; draw order reserve → surplus → borrowed (foreground last). Build-record diagnostic row 1 verified disjoint alpha sets {1.0} vs {0.28} during HOLD.
- **Returns PRICED:** readability (84) credits the separation on hold frames, with the caveat that trail accumulation (background fade `globalAlpha 0.32` per frame) can make dust brighter than the single-frame values. Motion (65) prices the violation the alpha table hides: `releaseBorrowed()` clears `borrowed` at dissolveStart, so a released particle's alpha drops **1.0 → 0.16 in one frame, before it has dispersed** — the word dims away instead of streaming away. Cure 1 therefore holds in FORM/HOLD and is *reversed* in DISSOLVE.
- **Verdict: PARTIALLY CONSUMED** — static separation yes; dissolve ordering no; trail-brightening unpriced by the build's own diagnostics.

### Cure 2 — strict phrase sequencing / phase exclusivity + ONE constant flow field
- **Source DOES (exclusivity):** explicit state machine `gap → form → hold → dissolve → gap`; `buildPhrase(N+1)` runs only in the gap→form transition; `schedulerTrace` proves formStart(1)@8000 strictly after dissolveEnd(0)@7750 (build-record row 2). No phrase overlap exists.
- **Source DOES NOT (flow field):** in the FORM branch, a borrowed particle's position is pure interpolation `sx + (tx−sx)·easeOut(lt)` with `lt = clamp((t − delay)/(1 − delay))`. While `t < delay`, lt=0 → the particle sits **exactly at sx, frozen**; during convergence its stored stream velocity (`svx,svy`) contributes **nothing** — svx/svy are read only in the non-borrowed branch. In HOLD, position is overwritten by target + jitter each frame. So "every particle always carries stream velocity; velocity never zero" is true of reserve/surplus particles and **false of borrowed particles** — the majority of the pool during the visible act.
- **Returns PRICED:** motion (65) names exactly this — "formation replaces streaming with straight, staggered, cubic ease-out trips; delayed particles remain frozen; stored stream velocities do not contribute to borrowed particles' movement, so the claimed continuous flow underneath borrowing is absent." Build-record row 3 priced continuity only at phase *boundaries* (no teleport), never within FORM — the claim outran its diagnostic.
- **Verdict: exclusivity CONSUMED; the constant-flow-field carrier NOT CONSUMED for borrowed particles.** This — not a missing alpha value — is why motion fell 68→65 despite the "flow-field rebuild": the rebuild changed the scheduler and the bookkeeping, not the borrowed trajectory.

### Why reuse fell 64→58 in the same attempt
Attempt 2 spent its build on the flow-field/scheduler layer and landed only priced cure 5 (original preset) of cures 2–6; the §8 split deferred fit/validation/determinism, and the attempt-2 return added two new priced defects on top: direct `CONFIG.formMs/holdMs/dissolveMs` edits are silently overwritten by preset resolution, and the motion constants (stagger 0.45, drift 16/10, release 60/45, decay 900 ms, jitter frequencies, trail 0.32, wrap ±4) remain hardcoded literals. The reuse complex below is therefore not optional polish — it is +12 of the +25 points the target needs.

## Quantitative anchors re-observed (A-C006-1)

- **Tempo (holds):** original proportions form:hold:dissolve = 40:33:27 → preset `original` 3000/2500/2000 ms + gapMs 250; attempt-2 timing return (93) confirms proportions and the 7.75 s cycle / 15.5 s two-phrase span against the ~15 s segment window [1:25–1:40]. **No conflict — anchors stand; do not retime.**
- **Ambient flow speed (conflict priced, no replacement invented):** attempt-2 source gives horizontal stream velocities 18–34 px/s (windX 26 ± drift 8). The motion return calls this "gentle rather than fast" against the digest's "streams blow across" + frame t88 (final word still streaming in mid-formation). No identifiable segment measurement (frame pair + time origin) establishes a px/s figure, so per A-C006-1 the plan sets NO numeric speed anchor from narrative: Cure M2 configurizes and raises the stream, and its own-check asserts the *distribution shift + configurability* (effect), while the lens — not this plan — prices whether the result reads fast.
- **Dissolve ordering (ordinal anchor):** dispersal-before-dimming is an ordering claim, measurable in-source (displacement accumulated before alpha falls below a stated fraction) — no external anchor needed.

## Cure plan (owner cures HEAD; then attempt-2 motion gaps; then reuse complex)

### OC1 — Intensity separation completed through DISSOLVE (OWNER CURE 1)
- **Construction:** released particles keep a decaying foreground-derived alpha through dissolve: alpha interpolates foreground→surplus/reserve over dissolve progress (or tied to accumulated release displacement), instead of flipping 1.0→0.16 at `releaseBorrowed()`. Borrow flag for *rendering* separates from borrow flag for *targeting* (a `released` state carries its own alpha ramp). Trail fade stays CONFIG (see R5).
- **Own-check (A-C002-1 effect):** sample a dissolving particle per frame: assert alpha is monotonically non-increasing, stays ≥0.5×foreground until its displacement from target exceeds a stated px threshold, and reaches surplusAlpha only near dissolve end. Assert HOLD sets remain disjoint {foreground} vs {reserve} as before.

### OC2 — ONE constant flow field, consumed by borrowed particles (OWNER CURE 2 carrier)
- **Construction:** borrowed trajectory = stream-advected start + convergence: during the stagger delay the particle keeps streaming (`x += svx·dt`); during convergence its position is the eased trip *plus* the cumulative stream advection (equivalently, sx/sy advect with the stream while the ease runs), so the path curves with the field instead of cutting straight. HOLD jitter unchanged (already non-zero). Scheduler exclusivity code is NOT touched except as needed for the above.
- **Own-check:** (i) a delayed borrowed particle's per-frame displacement ≈ its stream velocity × dt (non-zero, direction-matched) for every delay frame; (ii) a converging particle's path deviates from the straight sx→tx segment in the stream direction by a stated minimum at mid-form; (iii) scheduler trace still shows formStart(N+1) strictly after dissolveEnd(N) (exclusivity regression guard).

### M1 — Borrowed trajectories ride the stream (attempt-2 motion gap 1)
Subsumed by OC2's construction (same defect, named by the lens in trajectory terms). Priced separately in the WHY scaffold because the lens will score it separately; no second construction.

### M2 — Ambient flow speed (attempt-2 motion gap 2)
- **Construction:** stream speed becomes first-class CONFIG (wind + per-particle drift ranges, see R5) and defaults raise the ambient distribution above the attempt-2 18–34 px/s band; reserve/surplus particles visibly cross the frame during a hold.
- **Own-check:** velocity distribution census over the pool: assert min/max/mean match the CONFIG-derived band (effect mapping, not a narrative "faster"), and a reserve particle's hold-phase displacement over 1 s ≥ the band minimum.

### M3 — Dissolve brightness-vs-dispersal ordering (attempt-2 motion gap 3)
Subsumed by OC1's construction (alpha ramp) PLUS spatially staggered release: release delay per particle (small, CONFIG) so dispersal is progressive, not simultaneous; release component grows over dissolve instead of constant-then-decay-after.
- **Own-check:** at dissolve midpoint, assert mean displacement of released particles > stated threshold while mean alpha still > midpoint of foreground→surplus; release-time spread across particles > 0.

### R1 — Width-AND-height fit + multiline wrap config option (reuse deferred)
- **Construction:** `samplePhrase` gains a layout step: CONFIG `wrap: "single"|"multiline"` + `maxLines`; in multiline mode, words wrap to lines that jointly fit width AND height bounds (font shrinks until both fit or the floor is reached and the shortfall is *reported* via T15_API, not silently clipped). Single-line mode keeps attempt-2 behavior but gains the height check + reported shortfall.
- **Own-check:** long phrase at 390×693 in multiline mode: targets >1 line, all targets in bounds on both axes, fitted block height ≤ bound; in single mode the same phrase's shortfall flag is set (effect asserted, not just target counts).

### R2 — Config validation/clamps + empty-phrase guard (reuse deferred)
- **Construction:** `normalizeConfig()` at load, before any sampling: clamp `reserveFraction` to (0, 0.9], `sampleGap` to integer ≥1, durations/gap to finite ≥0, alphas to [0,1], `ambientCap` to integer ≥0; non-finite numerics fall back to defaults; `phrases` filtered to non-empty strings, and an empty result falls back to the default phrase list (never indexes undefined). Every clamp writes the *effective* CONFIG that T15_API exposes.
- **Own-check (per-key effect, A-C006-2):** feed each abuse case (`reserveFraction: 1`, `sampleGap: 0`, `sampleGap: 2.5`, `holdMs: NaN`, `phrases: []`, `phrases: [""]`) and assert the effective value/behavior (terminates, samples, loops an ambient-or-default beat) — no hang, no NaN phase.

### R3 — Restart determinism (reuse deferred)
- **Construction:** the `recreation:restart` handler re-seeds the RNG from CONFIG.seed, clears and rebuilds the pool, and resets current/phase/phaseT/clockMs/trace — restart reproduces the fresh-load state, not just the scheduler vars (attempt 2 resets only scheduler vars; pool + RNG state persist).
- **Own-check:** run → restart → run under fixed-step driving: particle positions + trace at matched logical times are identical across the two runs (and identical to a fresh load).

### R4 — Direct-duration-vs-preset precedence, printed (reuse deferred)
- **Construction:** precedence made explicit and printed in the source header + build record: **URL duration override > direct CONFIG duration edit > preset**. Implement by resolving the preset first, then applying any explicitly-set direct durations (direct fields are treated as set when they differ via a dedicated `durations` override object / documented key), so a direct edit can no longer be silently overwritten. The resolved effective durations are exposed via T15_API.
- **Own-check:** three instances (preset-only, direct-edit, URL-over-direct) assert the effective formMs/holdMs/dissolveMs follow the printed precedence exactly (A-C002-1 override→effect mapping).

### R5 — Hardcoded motion constants → CONFIG (reuse deferred)
- **Construction:** move to CONFIG: stagger fraction 0.45, drift ranges 16/10, release ranges 60/45, release decay 900 ms, jitter frequencies 0.004/0.0034, trail/background fade 0.32, wrap margins ±4. No motion literal remains in logic except structural constants (0, 1, 2π).
- **Own-check (A-C006-2):** full CONFIG consumption census — for EVERY CONFIG key (old + new), one asserted consumed effect (key → rendered/computed effect it drives); a key bound but unconsumed fails the suite. Plus a mutation probe: changing each newly-moved constant changes its measured effect (stagger spread, decay window, trail persistence).

### Deferred cures (deliberate, with reasons — §2.2)
- **Binary-tree interlude between phrases** (timing return residual; digest catalogue): DEFERRED — timing already 93; the interlude is a new content mechanism (new sampler + scheduler state), a §8-size addition that risks the tempo the attempt just won. Named for attempt 4.
- **Bounded pool shrink on large→small phrase swaps** (attempt-2 reuse return): DEFERRED — interacts with the reserve-fraction guarantee and R3's rebuild; surplus *rendering* is already policy-governed. Attempt 4, priced with R3 landed.
- **Real-font phone-width hold-frame pixel verification:** NOT A CURE — PIXEL-UNVERIFIED stands (A-C002-2, Chrome route blocked); priced as a standing limitation in every filing, discharged only when a render route exists.
- **Font-loading readiness / complex-script shaping guarantees:** DEFERRED — browser text shaping already carries spaces/diacritics; no priced failure against the configured phrases; revisit if a production swap names a script the stub cannot price.

## Execute checklist (Execute agent — in cure order)
- [ ] Re-verify preservation: sha of `recreation-attempt-2.html` == 3147ed9b…ade6 before touching `recreation.html`; STOP on mismatch (create-once).
- [ ] OC2/M1: stream-advected borrowed trajectories (delay streaming + advected convergence); scheduler exclusivity untouched.
- [ ] OC1/M3: dissolve alpha ramp on a released-state flag + staggered progressive release.
- [ ] M2/R5: stream/drift/release/decay/jitter/trail/wrap constants into CONFIG; raised ambient defaults.
- [ ] R1: width+height fit, multiline wrap option, reported shortfall.
- [ ] R2: normalizeConfig clamps + empty-phrase guard, effective CONFIG exposed.
- [ ] R4: printed duration precedence implemented + header updated.
- [ ] R3: restart re-seed + pool rebuild.
- [ ] Run every own-check above (effect mappings, not counts); node --check; purity grep.
- [ ] Swap test (logic level minimum) BEFORE any scoring wave; file build-record-attempt3.md (score-blind).
- [ ] comparison.html re-pointed ONLY if the interface changed (new CONFIG keys documented); ORIGINAL side never changed.

## Verify checklist
- [ ] Five-lens re-score wave per `guards/codex-rescore-wave.md` — score-blind packets (lens instruction + neutral facts + NEW recreation.html + score-blind build record); prior scores in seat tasking only, NEVER in a lens payload.
- [ ] Mechanical guard 1 (guards.md): delta arithmetic recomputed from filed returns of attempts 2 and 3.
- [ ] Mechanical guard 2: attempt-preservation census — attempt-1 + attempt-2 copies sha-identical before/after Execute.
- [ ] Mechanical guard 3 + floor rule: if attempt 3 does not beat 80.0, WHY filed from the scaffold below (plateau named) and `jev-plateau` fired at close.
- [ ] Purity grep + asset inventory: zero specimen/media/external hits.
- [ ] PIXEL-UNVERIFIED printed in the filing (A-C002-2) unless a working render route discharges it.

## Failure-point evaluation (jev-plan-exit §2.4, priced per point)
- **(a) Attribution:** OC1+OC2+M1+M3 ride one trajectory/render rewrite — a motion regression could be unattributable. Mitigation: per-cure own-checks isolate each effect (delay displacement, path deviation, alpha-vs-displacement ordering) BEFORE the wave, so a lens movement can be read against which effect checks passed.
- **(b) Cure interactions:** faster ambient flow (M2) + advected convergence (OC2) can smear letterforms and cost readability (84, only +14 headroom to fall matters at the floor); wrap/fit (R1) changes target counts → pool size → reserve counts → timing feel; the dissolve alpha ramp (OC1) lengthens perceived dissolve against the 2000 ms anchor. Mitigation: hold-phase jitter and hold durations untouched; R1 defaults preserve attempt-2 single-line behavior for the configured phrases.
- **(c) Overwrite/re-pointing:** preservation is filed and sha-verified in THIS plan, before Execute; comparison untouched until the attempt passes its own checks.
- **(d) Anchor leak:** scores/targets live in this plan and seat tasking only; lens payloads are score-blind per the rescore contract.
- **(e) Instrument misread:** 5→5 lenses — delta is pure movement; the filing must not quote attempt 1's four-lens 78.5 as the comparison.
- **(f) Cross-contamination:** this plan touches only the T15 artifact dir + this run dir; one item per directory.
- **(g) Size split evaded:** the plan is a targeted rework of two functions (trajectory/render) + sampler + config layer — not a rebuild-from-scratch; the genuinely large remainder (interlude, pool shrink) is deferred in writing above, per §8.

## WHY scaffold (pre-drafted — also appended to scores.md)
Per-cure outcome slots (landed / partial / missed + evidence), stuck-lens hypothesis, and plateau naming live in scores.md under "## Attempt 3 — plan scaffold (practice Cycle 008)" — filed at close from the scaffold, not improvised.
