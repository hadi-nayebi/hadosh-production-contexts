# T15 — Particle Typography · BUILD RECORD (attempt 2 construction)

Artifact: `recreation.html` (single self-contained HTML/canvas file) · Face: `comparison.html`
Construction: parameterized HTML/CSS/JS only. Letterform targets are derived at runtime by
rendering the configured text to an offscreen canvas and sampling its alpha channel. No media
files, no external references, no baked letterform geometry.

## Configuration surface (all values read from CONFIG at runtime)

- Content: `phrases` (ordered, looped), `fontFamily`, `fontWeight`, `maxFontPx`, `maxWidthRatio`, `sampleGap`.
- Tempo: `preset` selects a named entry of `presets`; the resolved entry writes the effective
  `formMs` / `holdMs` / `dissolveMs`. Entries: `original` = 3000 / 2500 / 2000 (the default),
  `brisk` = 1500 / 1500 / 1300. `gapMs` = 250 sits between phrases. Explicit per-duration URL
  overrides win over the preset.
- Pool: `reserveFraction` (0.22 default) sizes the never-borrowed share of the pool;
  `surplusPolicy` is `drift-fade` (default) or `capped-ambient` (with `ambientCap` = 140).
- Intensity: `foregroundAlpha` = 1.0 (borrowed particles), `reserveAlpha` = 0.28 (reserve
  particles), `surplusAlpha` = 0.16 (surplus particles under `drift-fade`).
- Field/palette: `windX` = 26, `windY` = -9 (stream drift, px/s), `jitter` = 0.35 px,
  `particleRadius` = 1.6, `colorA` / `colorB` palette ends, `background`, `seed` (mulberry32).

URL overrides: `phrases`, `preset`, the duration/density/intensity numerics, `reserveFraction`,
`surplusPolicy`, and the palette keys — the same override mechanism the swap test uses.

## Motion model (one constant flow field)

- Every particle is created with a fixed role — borrowable or reserve — and a persistent stream
  velocity: the shared wind plus a small per-particle drift fixed at creation.
- FORM: borrowable particles are borrowed onto the sampled targets of the current phrase. Each
  borrowed particle starts from wherever the stream currently is (`sx,sy` = current position),
  travels with a per-particle stagger delay and cubic ease-out, and on arrival settles into the
  hold jitter. Reserve particles keep streaming.
- HOLD: borrowed particles sit on their targets with a low-amplitude sinusoidal jitter
  (amplitude = `jitter` per axis); every non-borrowed particle streams at full stream velocity.
- DISSOLVE: borrowing ends. Position is untouched and stream velocity is untouched; a release
  component (per-particle, bounded) is added on top of the stream velocity and decays over
  ~900 ms after the dissolve phase.
- GAP: all particles stream; the next phrase's targets are sampled and assigned only in the
  GAP → FORM transition.
- Render order is reserve first, surplus second, borrowed last; each particle's render alpha is
  assigned from its current role/borrow state every frame (`renderAlpha` field on the particle).

## Scheduler

States: `gap → form → hold → dissolve → gap`, one phrase lifecycle at a time. A
`schedulerTrace` array records `{event, phrase, t}` for `gapStart`, `formStart`, `holdStart`,
`dissolveStart`, `dissolveEnd` against an accumulated logical clock. `window.T15_API` exposes
CONFIG, the sampler, the particle array, the current phase/phrase, and the trace for
logic-level inspection; it has no effect on rendering.

## Component map

- RETAINED — runtime target sampling (`samplePhrase`) · canvas render skeleton · CONFIG +
  URL-override mechanism · mulberry32 seeded RNG · persistent particle pool across phrases ·
  comparison play/pause/restart message hooks.
- MODIFIED — scheduler (explicit sequential state machine with a recorded trace) · particle
  update (persistent per-particle stream velocity in every phase) · render intensity
  (assigned per frame from role/borrow state) · pool growth (role-aware capacity: borrowable
  coverage plus a reserve share of the whole pool).
- REPLACED — the velocity/phase model: one stream model runs underneath all phases, phases
  do not assign positions or velocities per phase, and borrowing is a temporary assignment
  layered on the stream model.

## Cure-to-evidence matrix

Diagnostics were run at logic level in Node against the extracted inline script with a stubbed
canvas (deterministic text-measure model: width = 0.55 × fontPx × character count; alpha
rectangle as the sampled glyph area), driving the animation callback in 50 ms steps.
Evidence pointer for every row: the diagnostic run output of this build session, summarized in
the Observed column; the harness drives the artifact's own `T15_API`, sampler, and trace.

| # | Construction element | Intended effect | Isolated diagnostic | Observed result | Interactions / confounds |
|---|---|---|---|---|---|
| 1 | Intensity rides the borrow flag | Borrowed (word) particles render at one configured intensity; reserve particles at a second, dimmer configured intensity, in every phase | During HOLD, collect the set of `renderAlpha` values over borrowed vs reserve particles | Borrowed set = {1.0} = `foregroundAlpha`; reserve set = {0.28} = `reserveAlpha`; the two sets are disjoint and equal the configured values | Render order (reserve drawn first) also separates the layers visually; the diagnostic isolates the alpha values themselves, not the order |
| 2 | Phase exclusivity in the scheduler | A phrase's formation begins only after the preceding phrase's dissolve has completed | Read `schedulerTrace` over two phrase lifecycles | Trace: gapStart(0)@0 · formStart(0)@250 · holdStart(0)@3250 · dissolveStart(0)@5750 · dissolveEnd(0)@7750 · formStart(1)@8000 · holdStart(1)@11000 · dissolveStart(1)@13500 — formStart(1) occurs strictly after dissolveEnd(0), separated by the 250 ms gap | The gap beat is part of the measured separation; exclusivity is a scheduler property and does not by itself measure how the dissolve looks |
| 3 | Constant flow field / velocity continuity | No particle's position is reset at any phase change; stream velocity persists underneath borrowing and release | (a) Toroidal (wrap-aware) per-particle displacement between the last pre-form frame and the formStart frame of phrase 1; (b) hold-phase deviation of borrowed particles from their targets | (a) Maximum toroidal displacement 7.8 px in one 50 ms frame (edge-wrap overshoot); borrowed particles ≤1.8 px — no particle teleports. (b) Borrowed hold deviation: max 0.35 px (= `jitter`), mean 0.283 px over 258,400 samples — borrowed particles are never at rest and never leave their targets | Form-phase travel itself is long-distance by design; the continuity claim is priced only at the phase boundary, where a reset would appear as a displacement of hundreds of px |
| 4 | CONFIG-sized reserve, never borrowed | A reserve share of the pool streams in every phase, is never assigned a target, and is never removed or hidden | Sample every frame of a full two-phrase cycle under each surplus policy: count reserve particles with `borrowed = true`; track the reserve count | Violations: 0 under both policies. Reserve count, once established at the first phrase (609 particles), only grows (849 at the denser phrase) and never drops; under `drift-fade` a HOLD frame draws the full pool (2,767 particle draws at the first phrase) | Pool growth is monotonic, so the reserve count steps up at denser phrases; the invariant checked is non-decrease plus never-borrowed, per frame |
| 5 | Surplus policy (`drift-fade`) | Particles beyond a phrase's target count keep streaming at a dim surplus intensity | Dense phrase followed by a short phrase; at the short phrase's HOLD, count surplus particles and their `renderAlpha` set | Surplus = 852 particles, all at `renderAlpha` 0.16 = `surplusAlpha`, while 2,158 are borrowed and 849 are reserve | Surplus count depends on the pool's history (largest phrase seen); the policy governs rendering, not pool size |
| 6 | Surplus policy (`capped-ambient`) | At most `ambientCap` surplus particles are drawn; reserve and borrowed particles are always drawn | Same dense→short sequence under `capped-ambient`; count particle draws in a HOLD frame of the short phrase and compare with borrowed + reserve + cap | Draws = 3,147 = 2,158 borrowed + 849 reserve + 140 = `ambientCap`, although 852 surplus particles exist — the cap binds exactly, and the reserve is fully drawn | The cap binds only when surplus exceeds it; with a small pool the two policies are indistinguishable at render |
| 7 | Target coverage at reserve extremes | Borrowing covers every sampled target of the densest phrase even when the reserve share is large | Fresh instances at `reserveFraction` 0.1 and 0.5, single densest phrase; compare borrowed count with the sampler's target count and compute reserve/pool | Targets 3,010; borrowed 3,010 at both settings (coverage 1.000). Reserve/pool = 0.100 at 0.1 (335 / 3,345) and 0.500 at 0.5 (3,010 / 6,020) | At 0.5 the pool doubles; rendering cost scales with pool size, not with the phrase |
| 8 | Tempo preset | The default configuration resolves to the `original` entry; the `brisk` entry is selectable by config alone | Read resolved CONFIG in a default instance and in a `preset=brisk` instance | Default: preset `original`, form 3000 / hold 2500 / dissolve 2000. Brisk instance: 1500 / 1500 / 1300 | Scheduler trace times in row 2 corroborate the default durations (form 250→3250, hold 3250→5750, dissolve 5750→7750) |
| 9 | Formed-word containment | Sampled targets of the longest configured phrase lie inside the frame at desktop and phone widths | Collect sampler targets for the longest phrase at 960×540 and at 390×693; check bounds and fitted text width against `maxWidthRatio` | 960: 3,010 targets, all in bounds; fitted width 857 ≤ bound 883 (fitted font 82 px under the stub measure model). 390: 534 targets, all in bounds; fitted width 355 ≤ bound 359 (fitted font 34 px) | Widths come from the stub's measure model, not a real font engine; pixel-level containment is separately listed as unverified below |

## Own checks

- Swap test (logic level): instance configured with phrases `HELLO|WORLD`, the `brisk` preset,
  and a gold palette via URL overrides — borrowed count 2,678 equals the sampler's target count
  for `HELLO` (2,678), phase progression reaches HOLD, palette and preset values are the
  overridden ones. Content, tempo, and palette all move by configuration alone.
- Purity grep over `recreation.html` for specimen/media references (media file names, media
  extensions, `video`/`img` tags, external URLs): 0 hits.
- Syntax: the extracted inline script passes `node --check`.
- PIXEL-UNVERIFIED: a headless render was attempted with the lane's Chromium
  (`/opt/meta-chromium/chrome`, private debugging port 9413, 960×540 screenshot). Launch
  failed before any page load with the error “Hatch WebGL domain policy is required for
  browser startup” and no screenshot was produced. Geometry statements in this record
  therefore rest on the deterministic logic-level diagnostics above (rows 7 and 9), which use
  a stubbed measure model rather than a real font engine.
