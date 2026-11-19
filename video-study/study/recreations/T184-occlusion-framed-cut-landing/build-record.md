# build-record — T184 Occlusion-framed cut landing · attempt 1 · Cycle 028 Wave 25 (queue #87)

- **Item:** T184 — Occlusion-framed cut landing (Packet #10, Watchtower of Turkey — Leonardo Dalessandri, Vimeo 108018156) · P10 T07 · cut at source 102.40 s.
- **Schedule basis: `segment-anchored`** (RUN §2 T184, as amended by §2c.4 + §2d.2 — binding). Cut instant anchored at build t=1500 ms; the landing hold past the specimen's outgoing cut (between 102.80 and 103.10 s) and ALL post-checkpoint clearing are a printed ALLOCATION (departure below) — no reveal is observed in the specimen (§1f).
- **Final build SHA-256:** `4ff829ce715e306fa9495de0e92cf604afaed27df5ce6915c17c3ae1e6b921d8` (recreation.html; identical in all five lens payloads).
- **PIXEL-UNVERIFIED** — no browser binary in this seat; verification is LOGIC level (node harness over the build's own state/coverage functions) and comparison.html is the render surface (§2c.1d limitation, printed in scores.md).

## Segment facts
- Source: `hidden_files/study/video-digests/2026-11-16-vimeo-watchtower/source.mp4` (h264 1920×1080, 25 fps, AAC, 212.68 s — run probe-source.txt).
- Cut: `ffmpeg -ss 100.90 -i source.mp4 -t 3.50` (re-encoded h264/yuv420p + AAC, faststart) → `segment.mp4`.
- ffprobe (raw): `codec_name=h264 · width=1920 · height=1080 · r_frame_rate=25/1 · codec_name=aac · duration=3.520000 · size=2467354` (3.52 s at frame boundaries vs 3.50 s nominal). Evidence only: appears solely as the labeled ORIGINAL side of comparison.html.
- segment.mp4 SHA-256: `a9b970089367fbf7f521749499b310502686ef34638d883a4bdcfd4b1e42a3cc`.

## Census-anchor mapping + departure (A10.2)
Offset −100.90 s · census states: 600 ms townscape pan · 1100 ms townscape (f102.00) · 1900 ms guitarist OCCLUDED, majority-dark foreground (f102.80) · 2900 ms (f103.80) specimen has CUT AWAY.
Prescribed build states: t<1500 scene A (townscape panning at panPxPerSec) · t≥1500 scene B with coverage(cutMs+1)=0.6257 measured (≥0.55, within ±0.01 of landingCoverage 0.62) · coverage(1900)=0.6261 measured post-drift (≥0.51) · clearing only over [1900, 3500].
**DEPARTURE (allocation):** the specimen's landing shot ends between 102.80 and 103.10 s and NO reveal is observed in it (§1e/§1f); the build holds the landing scene 1900→3500 ms with the occluders drifting then clearing outward so the landing's reveal can be studied. Printed here, in §2, and fed to every lens — never presented as measured.

## §2 — Gate returns consumed BEFORE any build script (A9.2)
Order of work honoured: codex-observe and codex-plan-review payloads were assembled and fired FIRST; no build script existed before both returns were filed.
- **codex-observe** (`codex/codex-observe.md`, payload `codex/payload-observe.txt`): **CONFIRMED WITH GAPS** — packet §T07 and register agree on mechanics/timestamps/evidence; family arithmetic consistent where supplied (T104 426/5=85.2 · T106 442/5=88.4 · six-score mean 83.7). Gaps priced: (1) sibling bindings for T105/T107/T108/T109 not in the fed stream (vectors absent) — accepted as a feed-scope limit; the wave RUN §1d already binds the family lines from verdict-history, and no T184 mechanic depends on them. (2) Build window (100.90–104.40) differs from the packet clip span (100.00–103.50) — already priced in RUN §2 T184 (the clip is overlapping evidence, not the segment); preserved on this record's face. (3) Reveal checkpoint vs the measured dark band — the build's clearing is an allocation in full (§1f governs over §1e's bound; both printed). (4) Exact outgoing boundary of the landing shot unlocated beyond the 102.80–103.10 bracket — carried as the departure above; no landing-hold fact is claimed from the specimen. Disposition: APPLIED — all four gaps are either already priced in the binding RUN record or carried here; none blocks the build.
- **codex-plan-review** (`codex/codex-plan-review.md`, payload `codex/payload-plan-review.txt`): **REVISE** with four cures — ALL APPLIED in the build:
  1. *Clearing continuity* — clearing offsets are computed FROM each occluder's drifted position (`occluderOffsetsAt`: drift + clear, where the clear distance is solved from `driftedX`), so no position jump exists at revealStartMs.
  2. *Degenerate drift interval under the swap (cutMs=1900)* — drift progress is `span > 0 ? clamp01(...) : 0`; at cutMs≥1900 drift is exactly 0 and all positions stay finite (harness swap leg exercises this: PASS).
  3. *Solver termination guarantee* — the solver is bounded at 240 steps and THROWS on an unreachable target (a CONFIG error state, never silent tuning); both coverage targets were exercised through the same solver (default 0.62 → 0 steps, swapped 0.45 → 44 steps; raw below).
  4. *Subject-visibility check* — a guitar-bbox visibility instrument was added and asserted: visibility 0.5833 at cutMs+1 and 0.4167 at 1900 (partly legible inside occlusion), 1.0000 at 1900+revealMs (legible). The musician was also shifted left (musicianCx/guitar cx 452→432) so the landing occlusion bites: visibility at the landing frame fell 0.7500→0.5833. Predicted minimum lens: READABILITY (RUN §2c.8), basis: global coverage alone cannot prove the subject reads inside occlusion — the visibility instrument is the build-side answer; the lens itself prices the rendered read.
  Set-asides: NONE.

## Mechanics implemented (packet §T07)
Panning minaret townscape → INSTANT cut (zero transition frames) at cutMs → dark interior landing ALREADY occluded at the first landing frame (solved coverage = landingCoverage at the cut instant) → small live drift of the foreground masses to the 1900 ms checkpoint (§1f: the foreground shifts slightly, 102.50→102.80) → clearing outward as a printed allocation. Implemented in full; deliberate deferrals: NONE. The specimen's outgoing cut (≤103.10 s) is NOT reproduced — the build holds the landing per the §2 departure, printed above.

## Construction
One self-contained recreation.html. CONFIG at top carries every subject-shaping value (A9.6) — the §2 T184 keys as amended (cutMs 1500 · durationMs 3500 · panPxPerSec 26 · occluderCount 2 · occluderWidths [0.38, 0.34] · occluderColor #0a0908 · occluderDriftPx 18 · landingCoverage 0.62 · revealMs 1600 · guitarColor #c98d4e · skyColor #a8c8cc · accentLabel "guitarist") plus stage, occluder head/torso geometry, townscape geometry/palette, interior/musician/guitar geometry. **`coverageAt1900` is ABSENT (§2d.2 retired)** — the 1900 checkpoint is a Plan bound in the `revealStartMs = max(cutMs, 1900)` formula. Scene A: SVG townscape (hills, 8 houses with roofs, minaret) in a group translating at panPxPerSec. Scene B: SVG interior — seated musician (head/torso/legs) + guitar (ellipse body + rotated neck) — behind 2 soft-edged (SVG blur, CONFIG stdDeviation) dark occluder figures (head circle + torso rect). Occluder placement is SOLVED by the §2d.2 deterministic solver (anchors 0.06W / 0.97W; 0.005W steps; 100×56 grid evaluator, centre-coverage, alpha≥0.5 contour = geometric boundary): **default solver step count = 0** (the anchored placement already measures 0.6257, within ±0.01 of 0.62); swapped (0.45) step count = 44 (rightward steps, figure partly exiting frame right). Drift: left +18 px, right −9 px, linear over [cutMs, 1900]. Clearing: outward over [revealStartMs, revealStartMs+revealMs], easeOutQuad, from the drifted positions. `window.__rec` API (play/pause/seek/time) + `__config`/`__stateAt`/`__solve` harness surface (+ module.exports). No rendered text anywhere; no external assets; no specimen media.

## Count assertion (A9.3)
CONFIG.occluderWidths = 2 entries vs occluderCount 2 vs solved occluders 2 — **MATCH** (solver consumes both width members; harness states bind scene/coverage from the solved pair).

## Fidelity plan
Implemented: pan · instant cut · occluded-at-first-frame landing (measured coverage) · live pre-checkpoint drift · majority-dark foreground sustained through the checkpoint (0.6261 at 1900). Deferred/allocated (named, lawful): the post-checkpoint clearing + extended landing hold — an ALLOCATION with no specimen counterpart (§1f: no reveal observed), printed in §2, here, and in every lens payload.

## Asset inventory
recreation.html loads NO external assets — all content is inline code (SVG generated from CONFIG). The single `url(` occurrence is `url(#soften)`, an in-file SVG filter fragment (guards.md Cycle-026 classification — not an asset, not a specimen reference). segment.mp4 is referenced only by comparison.html as the labeled ORIGINAL side. No generated imagery files.

## Own checks — RAW output (A9.4, from the final build)
Harness: node, inline script extracted from recreation.html, evaluated via module.exports; the §2c.4 coverage evaluator is the build's own `coverageOf` (100×56 grid). Swap applied to a deep copy of CONFIG (guitarColor→#7a4fc9 · cutMs 1500→1900 · landingCoverage 0.62→0.45 · accentLabel "guitarist"→"harbour").

```
config.cutMs: 1500 durationMs: 3500 landingCoverage: 0.62 hasCoverageAt1900: false
PASS config.noCoverageAt1900Key
solver.default.steps: 0 solver.default.coverage: 0.6257
state@cutMs-1: {"scene":"A","t":1499,"panPx":38.974,"coverage":0,"guitarVisibility":0,"revealStartMs":1900}
state@cutMs+1: {"scene":"B","t":1501,"panPx":39.026,"coverage":0.6257142857142857,"guitarVisibility":0.5833333333333334,"revealStartMs":1900}
PASS sceneA@cutMs-1 :: A
PASS sceneB@cutMs+1 :: B
coverage.default@cutMs+1: 0.6257  coverage.default@1900: 0.6261
PASS default.coverage(cutMs+1)>=0.55 :: 0.6257
PASS default.coverage(1900)>=0.51 :: 0.6261
PASS default.coverage(cutMs+1)~landingCoverage±0.01 :: 0.6257
guitarVisibility.default@cutMs+1: 0.5833  @1900: 0.4167
PASS default.guitarPartlyVisible@cutMs+1 (>=0.10) :: 0.5833
PASS default.guitarPartlyVisible@1900 (>=0.10) :: 0.4167
guitarVisibility.default@1900+revealMs: 1.0000  coverage@end: 0.0000
PASS default.subjectLegibleBy1900+revealMs (visibility>=0.80) :: 1.0000
solver.swapped.steps: 44 solver.swapped.coverage: 0.4580
swap.state@cutMs-1: {"scene":"A","t":1899,"panPx":49.374,"coverage":0,"guitarVisibility":0,"revealStartMs":1900}
swap.state@cutMs+1: {"scene":"B","t":1901,"panPx":49.426,"coverage":0.45821428571428574,"guitarVisibility":0.5833333333333334,"revealStartMs":1900}
PASS swap.sceneA@cutMs-1 :: A
PASS swap.sceneB@cutMs+1 :: B
PASS swap.accentLabelLoaded
coverage.swapped@cutMs+1: 0.4582  target: 0.45
PASS swap.coverage(cutMs+1) within ±0.07 of 0.45 :: 0.4582
swap.revealStartMs: 1900
PASS swap.revealStartMs==1900 (formula max(cutMs,1900)) :: 1900
swap.coverage@durationEnd: 0.0000  clearedFraction: 1.0000  floor: 0.9000
PASS swap.revealStartLegibilityRule (cleared>=floor) :: 1.0000 >= 0.9000
guitarVisibility.swapped@cutMs+1: 0.5833
PASS swap.guitarPartlyVisible@cutMs+1 (>=0.10) :: 0.5833
HARNESS: ALL PASS
```

1. **Swap test (EXACT §2 values):** guitarColor #c98d4e→#7a4fc9 · cutMs 1500→1900 · landingCoverage 0.62→0.45 · accentLabel "guitarist"→"harbour". Result: scene switch follows the swapped cutMs (A@1899, B@1901); the solver re-solves to 0.4582 (within ±0.07 of 0.45); revealStartMs formula yields 1900; the §2c.4 swapped legibility rule passes (cleared fraction 1.0000 ≥ floor 0.9000); the build loads under the swapped label with every checkpoint assertion passing. **PASS.**
2. **Purity grep** (§2c.1a exact): `grep -nEi 'segment\.mp4|source\.mp4|<video|<img|108018156|watchtower|vimeo' recreation.html` → **0 hits** (grep exit 1, no lines printed). Permitted exceptions: NONE.
3. **Asset inventory** (§2c.1b): `grep -oE '(src|href)="[^"]+"|url\(|@import|fetch\(' recreation.html` → one hit: `url(` — the in-file `url(#soften)` SVG filter fragment; **0 external references**.
4. **Syntax:** `node --check` on the extracted inline script: **PASS**.
5. **Checkpoint assertions (§2c.6 — all CONFIG-derived):** scene at cutMs−1/cutMs+1 under BOTH configs · coverage floors at cutMs+1 and at 1900 (post-drift) · swapped-coverage tolerance · swapped revealStart legibility rule · subject legibility at 1900+revealMs — all PASS (raw above).
7. **Determinism census (guards.md command 3 — recorded under jev-prewave firing-1 HOLD cure):** `grep -nE 'Math\.random|seed|Date\.now' recreation.html` → **0 hits** (grep exit 1). No randomness is used anywhere in the build: every state is a pure function of (t, CONFIG) — the solver is a deterministic step loop, the coverage/visibility evaluators are fixed grids, and the only clock reads are `performance.now` ×3 in the browser render loop (playback position only; they feed no content decision). Double-evaluation proof (raw): `determinism.stateAt1900.run1: {"scene":"B","t":1900,"panPx":49.4,"coverage":0.6260714285714286,"guitarVisibility":0.4166666666666667,"revealStartMs":1900}` · run2 identical · `determinism.identical: true`.
6. **Comparison check (§2c.1c, node assertions on comparison.html):** `PASS one video (segment side) · PASS segment src · PASS recreation iframe present · PASS exactly one control set (3 buttons) · PASS label ORIGINAL verbatim · PASS label RECREATION verbatim · PASS clock slaved to video currentTime · PASS phone stacking @media 640px → COMPARISON: ALL PASS`. The recreation clock is slaved to the video's currentTime (shared Play/Pause/Restart; timeupdate/seeked sync calls `__rec.seek(orig.currentTime * 1000)`). Labels verbatim: "ORIGINAL — Watchtower of Turkey @ 100.90–104.40 (cut at 102.40)" / "RECREATION — T184 occlusion-framed cut landing, parameterized". PIXEL-UNVERIFIED (§2c.1d).

## A6 legs (final build)
- fit-table.md — HITs **0** (text-free priced N/A + geometry measured: coverage/visibility table).
- config-census.md — HITs **0** (all-literal scan + classification; `coverageAt1900` ABSENT verified; every key resolved to an application site).

## Pre-wave gate (jev-prewave)
- Firing 1 (`jev-prewave-interim1.md`, payload `codex/payload-prewave-interim1.txt`): **HOLD — ASSERTED-CHECKS** (parameterization 0.85 · purity 0.90 · own-checks 0.45 · fidelity-plan 0.95). Sole cure: the guard-3 determinism census was unrecorded. Plus a feed gap: the payload carried CONFIG + prose but not the HTML construction sections.
- Cure applied: determinism census recorded (own-check 7 above — 0 RNG hits + double-evaluation identical) and the re-fire payload carries the FULL recreation.html. Re-fired once per the gate's form; final return at `jev-prewave.md`.
- Firing 2 (`jev-prewave-interim2.md`, payload `codex/payload-prewave-interim2.txt`): **HOLD — FEED-COMPLETENESS only** (dimensions 0.85/0.95/0.85/0.95; the determinism cure expressly accepted, no build defect established): the feeder's rebuilt payload had dropped the A6 outputs. Disposed per jev-prewave.md §3 as a feed-completeness miss (the judge's own classification), NOT a build HOLD — the complete payload was re-fed.
- Firing 3 (final, `jev-prewave.md`, payload `codex/payload-prewave.txt`): **FIRE-WAVE** — parameterization 0.90 · purity pre-check 0.95 · own-checks completeness 0.90 · fidelity-plan honesty 0.95; rejection taxonomy: none. Nonblocking qualification carried to the wave: the geometric evaluator tests unblurred primitives while the render applies feGaussianBlur — recorded coverage is geometric coverage, not pixel coverage (the standing PIXEL-UNVERIFIED limitation). Disposition: APPLIED — the wave fired on this build.

## Item faithfulness trace
- **Trace:** packet §T07 mechanics → RUN §1b/§1c/§1e/§1f (census + measured playback + visual playback) → RUN §2 T184 as amended §2c.4/§2d.2 → this build (solver-placed occluders, formula revealStart, drift, allocated clearing) → own checks (raw above) → A6 legs → jev-prewave → five-lens wave → scores.md. No § of the item's charge is UNACCOUNTED.
- **Choice log (≥2 alternatives):** (1) Occluder placement — CHOSEN: §2d.2 deterministic solver over anchored figures (reproducible, swap-following) vs hand-tuned positions (rejected: builder tuning is exactly what §2d.2 bars; the solver's 0-step default + 44-step swap prove the mechanism, not a tuned pair). (2) Clearing construction — CHOSEN: offsets composed as drift+clear from the drifted position (plan-review cure 1) vs clearing from the solved anchor positions (rejected: a position jump at revealStartMs). (3) Occluder shape — CHOSEN: head-circle + torso-rect primitives shared verbatim between the SVG render and the grid evaluator (one geometry, two consumers) vs freeform path silhouettes (rejected: the evaluator and the render would diverge, and coverage would stop being the rendered truth).
- **Deviations:** D-ALLOCATION (standing, printed): post-checkpoint clearing + landing hold past the specimen's outgoing cut are allocations (§2 departure) — disclosed to every lens. No other deviation: gate order (A9.2) honoured · no coverageAt1900 key · no build before gate returns.
- **Evidence binding:** recreation.html SHA-256 `4ff829ce715e306fa9495de0e92cf604afaed27df5ce6915c17c3ae1e6b921d8` · segment.mp4 SHA-256 `a9b970089367fbf7f521749499b310502686ef34638d883a4bdcfd4b1e42a3cc` · comparison.html SHA-256 `c2bcbcbc0d2418a6cc44564f586ff738f3cdb478e3865f97e0a881634488b5e0` · solver step counts: default 0 · swapped 44 (raw harness above).

## Pointers
Packet: digest.md §T07 · register: style-library/techniques-transitions.md (T184) · RUN: runs/2026-11-17-cycle-028-wave-25/RUN.md §1b/§1c/§1e/§1f/§2/§2c/§2d · gates: codex/codex-observe.md + codex/codex-plan-review.md · prewave: jev-prewave.md (artifact root) · wave: codex/lens-*.md · verdict: scores.md.
