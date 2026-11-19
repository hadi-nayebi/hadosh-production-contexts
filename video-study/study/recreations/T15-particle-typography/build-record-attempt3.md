# T15 — Particle Typography · BUILD RECORD (attempt 3 construction)

Artifact: `recreation.html` (single self-contained HTML/canvas file) · Face: `comparison.html`
Final source sha256: **8cef752faff72a5e6a2e041a48b48391892cacfe110952c72069fcd31736f640**
Preserved prior source: `recreation-attempt-2.html`, sha256 3147ed9b53df39a48a56a81b39cb2ec004b3432df454e18878b56c6832dfade6 (verified identical before and after this build).
Construction: parameterized HTML/CSS/JS only. Letterform targets are derived at runtime by
rendering the configured text to an offscreen canvas and sampling its alpha channel. No media
files, no external references, no baked letterform geometry.

## Configuration surface (all values read from CONFIG at runtime; effective CONFIG exposed via T15_API)

- Content/layout: `phrases` (ordered, looped), `fontFamily`, `fontWeight` (900), `maxFontPx` (150),
  `fontFloorPx` (12), `maxWidthRatio` (0.92), `maxHeightRatio` (0.92), `wrap` ("single" | "multiline"),
  `maxLines` (3), `lineHeightRatio` (1.15), `sampleGap` (4).
- Tempo: `preset` selects a named entry of `presets` (`original` = 3000/2500/2000, `brisk` = 1500/1500/1300);
  `gapMs` = 250 between phrases. Duration precedence (printed in the source header):
  URL duration parameter > `CONFIG.durations` object > preset entry. Resolved effective durations
  are written to `CONFIG.formMs` / `holdMs` / `dissolveMs`.
  Tempo label: the `original` entry is a retained implementation preset; its reference match is
  UNVERIFIED — no identifiable segment timestamps for the individual phase boundaries were filed
  this cycle.
- Validation: `normalizeConfig()` runs at load before sampling. Every numeric key is clamped to a
  stated range or falls back to its default on a non-finite value; integer keys are floored;
  `reserveFraction` clamps to (0, 0.9]; alphas clamp to [0,1]; the enums `wrap`, `surplusPolicy`,
  and `preset` resolve to a named member or their default; preset entries are validated per
  duration; `CONFIG.durations` entries are validated per key; `phrases` is filtered to non-empty
  strings and an empty result restores the default phrase list. An all-zero lifecycle
  (form+hold+dissolve+gap = 0) restores `gapMs` to its default. Every fallback/clamp decision is
  recorded in a normalization-notes list exposed via T15_API.
- Pool: `reserveFraction` (0.22) sizes the never-borrowed share; `surplusPolicy` is `drift-fade`
  (default) or `capped-ambient` (with `ambientCap` = 140).
- Intensity: `foregroundAlpha` = 1.0, `reserveAlpha` = 0.28, `surplusAlpha` = 0.16.
- Field/motion: `windX` = 46, `windY` = -14 (px/s), `driftXRange` = 16, `driftYRange` = 10,
  `staggerFraction` = 0.45, `jitter` = 0.35 px, `jitterFreqX` = 0.004, `jitterFreqY` = 0.0034,
  `releaseRangeX` = 60, `releaseRangeY` = 45, `releaseBiasY` = 0.6,
  `releaseStaggerFraction` = 0.35, `releaseDecayMs` = 900, `trailFade` = 0.32, `wrapMargin` = 4.
- Palette/misc: `particleRadius` = 1.6, `colorA` / `colorB`, `background`, `seed` (mulberry32).

URL overrides: `phrases`, `preset`, every numeric key listed above, the duration parameters, and
the string keys — the same override mechanism the swap test and the own-check suite use.

## Motion model (one constant flow field)

- Every particle is created with a fixed role — borrowable or reserve — and a persistent stream
  velocity: the shared wind plus a per-particle drift drawn from the configured drift ranges.
- FORM: a borrowed particle's trajectory is `position = a(t) + (target − a(t))·e + jitterOffset(t)·e`,
  where `a(t)` is its form-start anchor advected by its own stream velocity every frame,
  `e = easeOutCubic(clamp((phaseProgress − delay)/(1 − delay)))`, and `jitterOffset` is the same
  sinusoidal offset used in HOLD. During the stagger delay (e = 0) the particle sits exactly on
  its advecting anchor, i.e. it streams. At e = 1 the position equals `target + jitterOffset(t)`
  (the HOLD expression) and, since de/du = 0 at u = 1, the velocity equals the HOLD jitter
  velocity; both were measured continuous across the boundary (own-check results below). HOLD
  deviation from target is bounded by the jitter amplitude.
- HOLD: borrowed particles sit at target + jitterOffset; every non-borrowed particle streams.
- DISSOLVE: each borrowed particle enters a released state with a staggered release time
  (`releaseAt`, spread over `releaseStaggerFraction` of the dissolve). Its release progress q runs
  0→1 over its own release window; its velocity is stream + release component × q; its render
  alpha is `foregroundAlpha + (surplusAlpha − foregroundAlpha)·q`. At the dissolve→gap boundary
  every release is finalized (q = 1, borrowed/released flags cleared), so a released particle
  enters the gap as ordinary surplus. After dissolve, the release component decays over
  `releaseDecayMs`.
- GAP: all particles stream; the next phrase's targets are sampled and assigned only in the
  GAP → FORM transition.
- Render order is reserve first, surplus/released second, borrowed last; each particle's render
  alpha is assigned from its current role/state every frame.
- All motion integrates in seconds from the frame dt (clamped at 64 ms); jitter is a function of
  the absolute logical clock.

## Scheduler

States: `gap → form → hold → dissolve → gap`, one phrase lifecycle at a time. A
`schedulerTrace` array records `{event, phrase, t}` for `gapStart`, `formStart`, `holdStart`,
`dissolveStart`, `dissolveEnd` against an accumulated logical clock. Default trace (own-check
run): gapStart(0)@0 · formStart(0)@250 · holdStart(0)@3250 · dissolveStart(0)@5750 ·
dissolveEnd(0)@7750 · formStart(1)@8000 — the next phrase's formation begins strictly after the
previous dissolve ends. `window.T15_API` exposes CONFIG, the sampler, the particle array, the
current phase/phrase, the trace, the last layout record, and the normalization notes; it has no
effect on rendering.

## Layout

`samplePhrase` lays the phrase out before sampling: in single mode the whole phrase is one line;
in multiline mode words wrap greedily to at most `maxLines` lines. The font shrinks from
`maxFontPx` until the widest line fits `maxWidthRatio` of the canvas AND the block height
(lines × fontPx × `lineHeightRatio`) fits `maxHeightRatio`, or `fontFloorPx` is reached. The
layout record (`T15_API.getLayout()`) reports lines, fontPx, measured widths/heights, bounds, and
a `shortfall` flag when the floor is reached without fitting.

## Restart

The `recreation:restart` handler re-seeds the RNG from the effective `CONFIG.seed`, clears the
particle pool (it rebuilds at the next formation), and resets current/phase/phaseT/clock/trace.
Restart reproduces the fresh-load state exactly under fixed-step driving (own-check result below).

## Surplus disposition

Surplus rendering is policy-governed: under `drift-fade` every surplus particle is drawn at
`surplusAlpha`; under `capped-ambient` at most `ambientCap` surplus particles are drawn in a
frame (reserve and borrowed always drawn). The pool itself never shrinks: its size is set by the
largest phrase sampled so far, and the reserve count is non-decreasing across phrases. Bounded
pool shrinkage is not implemented in this attempt.

## Interlude accounting

No interlude beat is allocated: the configured cycle allocates 0 ms to any between-phrase
interlude. The reference interlude's duration is not measured in the filed evidence available to
this build.

## Size-split statement

No split was invoked for this attempt. The plan's deferred items (interlude mechanism, bounded
pool shrink) were already split out in writing in the plan; everything else in the plan was
executed in this attempt, in the plan's cure order, inside the single recreation file.

## Own checks (suite: `own-checks-T15.js` in the cycle run directory; run with node)

Logic-level suite against the extracted inline script with a stubbed canvas (deterministic
text-measure model: width = 0.55 × fontPx × character count; alpha rectangle as the sampled
glyph area), driving the animation callback at fixed steps. Final run against the final source
above: **all checks pass, 0 fail** (exit code 0). Coverage, with measured values:

- Scheduler: phase exclusivity over two lifecycles; default trace deltas match the resolved
  durations.
- Stream-advected formation: delayed borrowed particles displace at exactly stream velocity × dt
  (1,644/1,644 sampled); median mid-form deviation from the straight start→target segment
  11.87 px (threshold 2.5 px), 93% of sampled particles deviating in the stream-perpendicular
  direction (threshold 70%).
- Boundary continuity: max position jump across FORM→HOLD 0.000 px (threshold 0.6); max velocity
  change 0.27 px/s (threshold 10); HOLD deviation max 0.484 px, mean 0.341 px (bound 0.515).
- Dissolve: HOLD alpha sets {1.0} borrowed vs {0.28} reserve, disjoint; release-time spread
  700 ms (threshold >100); per-particle alpha monotonically non-increasing for all 3,154 released
  particles; alpha reached 0.5 only after ≥12 px displacement for 100% of released particles
  (threshold ≥90%); at dissolve midpoint mean displacement 50.8 px with mean alpha 0.68
  (thresholds >20 px, >0.58); after dissolve, formerly borrowed particles render at 0.16.
- Composited trail model (modelled, not rendered): word-pixel steady intensity 1.00, background
  steady intensity 0.0052 at the measured reserve hit-rate (thresholds >0.95, <0.10).
- Stream band: per-particle svx within [38, 54] px/s, mean 45.9; a reserve particle's 1 s
  hold-phase displacement 53.2 px (threshold ≥38).
- Fit: default phrases fit at 960×540 and 390×693 with all targets in bounds; multiline fixture
  at 390×693 produced 3 lines fitting both bounds; a named over-capacity fixture (70-character
  single word, stub width 475 px vs 359 px bound at the font floor) reported `shortfall` at
  fontPx = 12; a feasible fixture reported no shortfall.
- Validation fixtures: reserveFraction 1→0.9 with target coverage intact; sampleGap 0→1 and
  2.5→2; holdMs NaN→preset value; empty/`|`-only phrases→defaults; invalid wrap/surplusPolicy/
  preset enums→defaults; all-zero lifecycle→gap restored to 250 with the scheduler progressing;
  seed NaN→1337; trailFade 7→1; foregroundAlpha −1→0; staggerFraction 2→0.95; ambientCap −3→0.
- Duration precedence: preset-only instance resolves 3000/2500/2000; a source variant with
  `CONFIG.durations.holdMs = 4321` resolves holdMs 4321; the same variant with `?holdMs=2222`
  resolves 2222; a `?formMs=1111` instance moves holdStart to gap+1111 (±50 ms).
- Restart: positions + trace after restart are byte-identical to a fresh load over 400 fixed
  steps, including after an abuse-valued configuration was normalized.
- Frame-rate: reserve-particle positions at 2,000 logical ms agree between dt=20 and dt=50
  driving within 1.55 px (toroidal distance; threshold 2.5).
- Resize: after a 960×540 → 390×693 resize during HOLD, the size rebuilds and all borrowed
  targets lie in the new bounds with a layout record present.
- Reassignment: after a phrase swap, borrowed count equals the new phrase's target count and
  every borrowed target belongs to the new phrase's target set.
- Swap test (logic level): instance configured with phrases `HELLO|WORLD`, the `brisk` preset,
  and a gold palette via URL overrides — borrowed count 3,914 equals the sampler's target count
  for `HELLO`, phase progression reaches HOLD, palette and preset values are the overridden ones.
- CONFIG consumption census: 42 entries, each asserting one consumed effect per key or key
  group (content, layout, tempo, validation, field, release, intensity, palette, seed) — 42/42
  passing.
- Purity grep over `recreation.html` for specimen/media references (media file names, media
  extensions, `video`/`img` tags, external URLs, base64, `url(`): 0 hits.
- Syntax: the extracted inline script passes `node --check`.
- One defect was found by this suite during the build (releases were not finalized at the
  dissolve→gap boundary in an interim source) and was corrected; the full suite was then re-run
  against the final source with the result above.
- PIXEL-UNVERIFIED: no working render route was available to this build session, so all geometry
  and readability-relevant statements rest on the deterministic logic-level suite above, which
  uses a stubbed measure model rather than a real font engine. No pixel/render verification is
  claimed.

## Comparison face

`comparison.html` was updated on its RECREATION side only (config-surface description and the
tempo-preset label), because the recreation's interface changed (new CONFIG keys, the
`CONFIG.durations` interface, multiline wrap). The ORIGINAL side (panel, label, and
`segment.mp4` element) was not changed.

## Deviations

- None from the plan's construction list or from the wave amendments handed to this build.
  The frame-rate check measures wrap-aware (toroidal) distance, because the wrap teleport makes
  raw coordinate distance meaningless across a wrap event; this is a measurement definition in
  the suite, not a construction change.
