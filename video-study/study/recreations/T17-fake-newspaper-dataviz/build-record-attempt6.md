# T17 fake-newspaper dataviz — build record, attempt 6 (practice Cycle 026 Wave 25)

Governing: practice INSTRUCTION §3/§5 · plan-T17.md + its Addendum (plan-review consumption, 8 findings applied) · RUN.md §2a T17 dispositions. Final source: `recreation.html` sha256 `96341c01696d67b0be4578ce81332258287cf7101b5ebe09acabc9fc916c9780`. Prior governing attempt 5: 84.4 avg (82/82/100/81/77). Attribution: **BUNDLED** unless a checkpoint separately measures an effect (none claimed separately).

## Preservation (verified before any mutation)

`recreation-attempt-5.html` sha `3d5d108a…` = baseline `recreation.html` sha, inode distinct ✓ · `comparison.html` sha `f6d34482…` = baseline, NEVER edited this attempt; its resolved recreation source was verified = attempt-5 source before the first edit to `recreation.html` ✓ · `comparison-attempt-6.html` created after own checks passed (content copy of comparison.html, sha `f6d34482…`; its recreation side resolves to the attempt-6 `recreation.html`; ORIGINAL side unchanged) · baseline file `preservation-baseline-T17-attempt6.txt` untouched (23 lines; scores.md line differs only by the Plan-filed WHY-scaffold append, documented in the plan Addendum).

## Checkpoint ledger (A-C012-4 order per stage: dependent re-derivation → stage checks → create-once checkpoint; A-C024-2 paths named as each stage closed)

1. `checkpoints/attempt-6/stage-1-transition-floor.html` (sha 3ef8f0d4…) + `stage-1-checks.txt`
2. `checkpoints/attempt-6/stage-2-fig23-fig24.html` (sha 10d50f35…) + `stage-2-checks.txt`
3. `checkpoints/attempt-6/stage-3-stamp-badge.html` (sha 169894d0…) + `stage-3-checks.txt`
4. `checkpoints/attempt-6/stage-4-fit-census-mount.html` (sha 08f4b913…) + `stage-4-checks.txt`
5. `checkpoints/attempt-6/stage-5-readability-residuals.html` (sha 659a1750…) + `stage-5-checks.txt`

All CONTENT copies, inode ≠ working file at filing. Per-stage purity grep + CSS-parse + literal checks ran inside each stage (plan §7(i) moved into E3 by finding F3): no subject-media hits at any stage; CSS overrides appended at stage 5 parse as plain declarations.

## Cure-by-cure outcomes (vs the scores.md WHY-scaffold slots; implementation probe vs return wording kept separate)

- **C1 transition visibility floor** — LANDED (probe): `transitionState` holds the outgoing figure at `transitionFloorOpacity` 0.35 until incoming ≥0.5 (`transitionFloorRelease`); suite minimum combined displayed opacity across all handoff samples = **0.350** (was ≈0.046 combined at midpoint). Separate CONFIG-move check: BEFORE — `s/0.55` and `(s-0.45)` literals present in `transitionState`; AFTER — absent, replaced by `transitionOutSpan/transitionInStart/transitionInSpan` CONFIG keys, consumed (census: mutation). Return wording: ___ (filed at close from the attempt-6 returns).
- **C2 FIG.23 reporting connectors** — LANDED (probe): org factory mounts an SVG connector layer; `orgState.connectors[i]` = clamp01((q − nodeThresholds[i]) / connectorDrawSpan), asserted equal to the threshold formula for all 4 nodes; connectors assemble WITH their nodes.
- **C3 FIG.24 trace origin + final-"1" hold** — LANDED (probe): (i) the trace's drawn extent is now exactly the animation progress (the sample-step floor that forced ≥2% drawn progress is removed); `collapseN(0)=0`, counter text at p=0 = the start value, counter monotone non-increasing. Dependent re-derivation under the NEW mapping asserted: cliff marker + dashed marker derive from `animFraction` with `counterHoldSec`; cliffAt 0.68 < limit 0.720 ✓; defaults still validate. (ii) Hold table: programmed fully-opaque hold = **0.850s**; displayed hold after the 0.225s handoff overlap = **0.625s ≥ 0.6s** ✓ (Verify assertion added per finding F2). No other figure's window changed.
- **C4 stamp vertical bounds** — LANDED (probe): `stampMetrics` width now includes letter-spacing (0.08em × length) + 2× border width; height includes 2× border width (stamp box @360: w 190.8px under the full model). Upward extension reserve = (rotated AABB height − box height) × cap / 2, carried inside the correction figure's block: **22.2px @360 · 24.2px @390 · 35.5px @960**, and fig25 still fits at all three widths.
- **C5 badge glyph clearance** — LANDED (probe): `badgeCap` targets cleared width = contentW − `badgeClearancePx` 16 (was the full 328px); badge width is the max of the per-font segment measurement (hand segment at hand size, sans segment at body size, via `badgeHandFont/badgeSansFont`) and the wrapped-line model at the cleared width; entrance AABB asserted inside the cleared width at 360/390/960.
- **C6 fit truth + census honesty + mount contract** — LANDED (probe): `figureGeom` maxW is now the figure's ACTUAL maximum rendered width (waffle: max(content, grid width) — the 60-dot/20-column case reports 392px; counter row: chart + gap + card on desktop). Validation rejects any figure whose actual width exceeds phone content width with a named error, BEFORE layout — the wide-waffle regression now errors by name instead of silently passing `fitReport`. Per-field-class string-length bounds added (summary/title/label/card/stamp/note/node/ceo). `palette.muted` gained a rendered reader (header meta line color). The 5% pre-cliff bound is now `timing.preCliffDropMaxFrac`. `window.T17.rebuild(next)` validates a replacement configuration, refuses it with named errors when invalid, otherwise remounts and re-renders.
- **C7 readability residuals** — LANDED (probe): the "you" label is absolutely positioned at its dot's grid coordinates (dot column 2, row 1 for index 7 of 5 columns) with the arrow text directed at the dot, replacing the counter-row placement; bar-label baseline sits `barLabelDescenderPx` 6px above the SVG bottom (descender room ≥ label descender + 2px, asserted); stylesheet now carries explicit line-heights for the meta and source lines (1.3, matching the model) and non-wrapping summary/title spans; the y-axis pad is derived from measured label widths (`yAxisPad`: 61px @360, 69px @960 for the current labels) and shared by the model (`lineLabelBounds`) and the renderer — the fixed 48px anchor survives only as a floor.
- **Q10 self-start regression** — ASSERTED, not re-cured: top-level auto-start only when the recreation is the top window; suite form check passes.

## Own-check suite (frozen final source; displayed-state assertions)

43 assertions: **42 PASS + 1 over-broad probe corrected on inspection** — the purity grep's generic `http://` pattern matched only the two SVG XML namespace identifiers (no external asset, no specimen media; the substantive purity test passes). Coverage: defaults valid · C1 floor + combined opacity · C2 connector presence + threshold formula · C3 origin/monotonicity/cliff re-derivation/displayed hold · C4 stamp model + reserve at 3 widths · C5 cleared-width AABB at 3 widths · C6 wide-waffle rejection + maxW truth + long-content bounds + magnitude sweep (400-nines counter rejected) + direct-edit path (string-typed duration, null group member, absent group all rejected) · C7 youDot coordinates + yAxisPad ≥ measured need at 2 widths + descender room · fit ok at 360/390/960 · Q10 form · literal census (transition literals + validation 0.05 literal absent) · swap tests (stack counts 10/14/1/2 all reach their count; edited-config validation paths). Comment neutralization: source comments scanned — 5 neutral construction comments, no cure codes/scores/attempt references; neutralization a verified no-op, suite rerun AFTER that scan and BEFORE the freeze (finding F2 order).

## A-C008 legs (on the NEW source)

- Leg 1 measured fit → `fit-table-attempt6.md`: **0 HITs**; tightest margin fig25 @960 (3.5px headroom) named.
- Leg 2 config census → `config-census-attempt6.md`: 203 non-figure leaves, 116 mutation-resolved + 87 textual-site-resolved, **0 HITs**.

## D1 render re-attempt

One Chromium attempt (`/opt/meta-chromium/chrome --headless`, 360×640, virtual-time budget): FAILED at startup — "Hatch WebGL domain policy is required for browser startup", no screenshot. **PIXEL-UNVERIFIED stands (sixth attempt)**: perceived handoff continuity, stamp/badge entrances, rendered glyph bounds, and normal-speed playback remain unverified; all evidence above is logic-level.

## Deviations (printed)

- **DEV-1 (own-check correction after stage 5):** the first C4 reserve formula evaluated to 0.0 at every width (it compared the AABB at cap against itself); the suite caught it, the formula was corrected to (AABB height − box height) × cap / 2, and a double-count of the reserve in `figureRequired` (which had broken the 960px fit) was removed — both fixes landed after the stage-5 checkpoint and before the freeze, with the full suite re-run green. The stage checkpoints stand as filed (create-once); the final source differs from the stage-5 checkpoint by exactly these two C4 accounting fixes.
- **DEV-2:** none other. No checklist step skipped; comparison.html untouched per finding F5.

## WHY-scaffold restatement (finding F4)

Baseline: motion 82 · timing 82 · purity 100 · reusability 81 · readability 77 · avg 84.4. New scores + per-cure return wording + checkpoint evidence + jev-plateau slot are completed in the scores.md Attempt 6 filing at close (scaffold slots stand there; Branch A completes the WHY + jev-plateau disposition if the average does not beat 84.4, Branch B files the residual inventory; PASS hands the tier decision to the seat with this file's pointer).
