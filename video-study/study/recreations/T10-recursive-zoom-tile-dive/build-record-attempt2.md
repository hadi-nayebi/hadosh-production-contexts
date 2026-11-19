# T10 — Recursive Zoom / Tile Dive · BUILD RECORD · Attempt 2

Technique: T10 (packet P1, "Look What I Can Do" @ 0:54–0:56) · Practice Cycle 007 Wave 6 · 2026-11-15
Artifact dir: `hidden_files/study/recreations/T10-recursive-zoom-tile-dive/`
Consumer: transitions — production containers that dive from an overview (mosaic / tile wall / dashboard) into one detail cell; the locator + status pills are the reusable "where am I / what state is it in" overlay pair.
This record contains construction facts, observed anchors, limitations, and own-check evidence only.

## §1 Observed anchors — segment frame measurements (this attempt, firsthand)

Frames extracted from the local `segment.mp4` (960×540, 30 fps, 3.000 s; local ms = (source s − 53.5) × 1000, so source 0:55 ≡ local 1500 ms) with ffmpeg into the run directory `frames-T10/` (f500, f650, f800, f1000, f1250, f1400, f1500, f1600, f1750, f1900, f2000, f2150, f2200, f2300, f2450, f2500 .png) and read firsthand:

| Local ms | Observation |
|---|---|
| 500, 650 | Mosaic overview in motion over the dusk sky/skyline; no tile stack, no locator pill |
| 800 | The 3-tile stack is arriving (motion blur, off-center); locator pill absent |
| 1000 | Stack settled and centered; locator pill "you are here" FULLY visible (complete text, full opacity, pink dot) |
| 1250–1900 | Settled hold: stack at scale 1, locator pill present, no dive motion |
| 2000–2200 | Dive underway (stack enlarging around the middle tile); locator pill still present at 2200 |
| 2300 | Dive advanced; locator pill ABSENT; status pill absent |
| 2450 | Dive complete; status pill "laptop: brought ✓" FULLY visible — a LIGHT pill with green text, anchored right of the enlarged tile at mid-height |
| 2500 | Settled full-dive state; status pill present |

Resolved anchors (frame-measured, binding):
- **Locator onset ∈ (800, 1000] ms; full-visibility ≤ 1000 ms.** Bound: `pillAt = 850`, span-derived fade 149 ms → fully visible at 999 ms, and therefore fully present at local 1500 ms.
- **Locator exit ∈ (2200, 2300] ms** (present at 2200, absent at 2300, during the dive). Bound: `pillOutAt = 2200`, span-derived out-fade 100 ms → absent at 2300 ms.
- **Dive:** not started at 1900, underway at 2150, complete at 2450. Bound: `diveStart = 2000`, `diveEnd = 2450`.
- **Status onset ∈ (2300, 2450] ms; full-visibility ≤ 2450 ms.** Bound: `statusAt = 2325`, span-derived fade 125 ms → fully visible at 2450 ms (= diveEnd).
- **Evidence-conflict resolution:** the measured order is locator BEFORE dive (`pillAt` 850 < `diveStart` 2000) — the checkpoint order was revised to the frame-observed order before construction, and each fade endpoint was derived from its own measured span, independently observed (locator fade from its onset/full-visibility frames; status fade from its own onset/full-visibility frames). The status pill's construction also follows the frames: light background, green text/check, right-side mid-height anchor (`statusLeftPct 58`, `statusTopPct 44`) — not a dark bottom-left pill.

## §2 Construction (what was built)

- **Configuration-normalization stage** (`normalizeConfig`): runs after CONFIG + URL overrides and before any scene construction; `computeState` and all builders consume only the normalized effective table. Candidate-based and ATOMIC: overrides apply to a clone; on any validation failure the whole candidate is discarded, the pre-override configuration stands, and the rejection is recorded in the observable `window.__T10_NORMALIZATION` (also `window.__T10`). A `durationMs`-only change RESCALES all checkpoints proportionally (factor = duration / baseline) and the rescaled timeline completes before wrap; incoherent EXPLICIT checkpoint overrides (e.g. duration 800 + explicit diveEnd 2450) are rejected atomically. Minimum separation is `max(1 ms, durationMs × 4/3000)` — a proportion of the effective duration, coherent under rescaling. Fade durations left null are DERIVED from checkpoint spans inside normalization (locator fade = 11% of the pill-visible span; exit fade = 40% of pillOut→diveEnd; status fade = the statusAt→diveEnd span); no independent fade literal stands outside derivation or explicit validated override.
- **Checkpoints (effective, frame-bound):** `pillAt 850 · diveStart 2000 · pillOutAt 2200 · statusAt 2325 · diveEnd 2450`, duration 3000. The `wallHold` key is REMOVED from the artifact and the comparison face: the hold is inherently the interval before `diveStart` at scale 1, and no distinct constructed effect could be bound to a separate hold key.
- **Locator pill in time and space:** fade-in completes at 999 ms (fully present at local 1500 ms); it exits during the dive (absent from 2300 ms), so at full dive it cannot occlude the enlarged target. The render-time clamp prices the pill's TRANSFORMED bounds: `left + slideOffset + width`, with the slide distance a CONFIG key (`pillSlidePct 12`), clamped against a CONFIG edge margin (`pillEdgeMarginPct 2`).
- **Tile content as CONFIG data:** the per-kind drawing switch is replaced by ONE generic descriptor renderer. Each tile carries an `art` array of shape descriptors ({left, top, width, height, borderRadius?, color}) in CONFIG; the robot/desk/car scenes ship as default descriptor sets with their geometry as data. A descriptor with a missing numeric field or an unknown color role throws the named error `T10DescriptorError` (surfaced as an on-screen error state + `window.__T10_ERROR`); there is no silent fallback scene. A fourth tile scene is suppliable entirely as CONFIG data.
- **Override surface:** tile aspect (`tileAspectW/H`), gradient stop, cloud geometry (height ratio, opacity, specs), skyline geometry (height, windows per building, window left/top bases and steps, window size, opacity), pill slide distance, pill/status positions, label insets, easing choice (named set: easeInOutCubic / easeOutQuad / linear; unknown rejected), z-order keys, and the full palette are CONFIG keys reachable via URL overrides. An explicitly supplied empty string is a parsed decision: applied to text keys, explicitly rejected-and-recorded for color keys — never a silent truthiness no-op. Grid/tile/target consistency is validated in normalization (tile count = cols × rows; target index range-checked).
- **Stacking:** explicit CONFIG-priced z-order — sky (gradient) < clouds (zClouds 1) < skyline (zSkyline 2) < wall (zWall 3) < pills (zPills 4) — assigned at construction regardless of append order.

## §3 Claims corrections (record honesty, this attempt's record and face)

1. Zoom coverage: at zoomScale 3.4 the target tile's displayed height is **≈95.9% of frame height** (displayed-state model, §4), not ~98% (98% would need zoom ≈3.477). The record prints 95.9%.
2. Loop seam: the loop is an **excerpt reset** — a hard cut from scale 3.4 back to 1 at durationMs replaying an excerpt. No specimen loop point is claimed.
3. Swap test: the swap proves **configurable behavior only**. Construction purity rests on the executed grep + asset inventory (§4), not on the swap.
4. "Every shaping variable lives in CONFIG" is replaced by the actual surface: all shaping variables are CONFIG keys (§2), and tile-scene geometry lives in CONFIG as descriptor data. Remaining structural constants, named as structural: descriptor fields are interpreted as percentages by the renderer; the skyline window row phase uses a modulo-4 pattern; the easing set is three named functions in code.
5. No-clipping: the claim is **source-bound and scoped to the modeled states** (pill at entrance / mid-fade / full dive; status at its fade endpoints; target at full dive) at 360 / 390 / 1916 px widths, and is printed **PIXEL-UNVERIFIED** (§5).
6. Swap attribution: `pillAt` affects pill opacity only — not scale. The own-check suite asserts each timing override independently (diveStart→scale only; pillAt→opacity only; statusAt→status only).
7. The comparison face's checkpoint table no longer prints a `wallHold` phase; the key is removed from both artifact and face.

## §4 Own checks (executed this attempt; suite at the run directory `own-checks-T10.js`)

- `node --check` on the extracted inline script: **PASS**.
- **Logic suite: 140 PASS / 0 FAIL**, comprising:
  - *Effect mappings:* scale 1 before the dive, 2.2 at mid-dive (2225 ms), 3.4 at diveEnd; pill opacity 0 at 500 ms, 1 at 1000 ms and at local 1500 ms, 1 at 2200 ms, 0 at 2300 ms (exit); status 0 at 2300 ms, 1 at 2450 ms; transform-origin [50, 50] for the middle target and moving with target overrides; loop wrap at durationMs.
  - *Independent overrides:* diveStart moves scale only; pillAt moves opacity only; statusAt moves status only; duration-only (800 ms) proportionally rescales (factor 0.2667; checkpoints 227/533/587/620/653) and completes before wrap.
  - *Normalization suite:* explicit diveEnd beyond duration, diveEnd ≤ diveStart, pillOut before full visibility (explicit fade), pill fade beyond duration, target out of range, tile count ≠ cols×rows, unknown easing — each rejected atomically with a recorded rejection; URL-level incoherent combinations fall back atomically with the rejection observable.
  - *Descriptor tests:* a fourth tile scene supplied entirely through CONFIG descriptors renders; unknown color role and malformed descriptor each throw `T10DescriptorError`.
  - *Consumed-effect census (every CONFIG key):* **79 census rows, 0 unconsumed** — each key (checkpoints, derived fades, grid, geometry, palette, texts, descriptor data, easing, z-order) was mutated and its named constructed/computed effect observed.
  - *Swap test:* the recorded swap (new pill/status texts, diveStart 300, pillAt 100, violet sky, gold highlight, renamed target tile) plus aspect and easing swaps — all asserted per-state/per-element; swap PASS before any scoring run.
- **Displayed-state model** (source-bound; displayed rects, border-inclusive, transformed endpoints): at 360 px (frame 360×202.5): wall 93.6×175.5 px; target at full dive spans x 20.9–339.1, y 4.2–198.3 → displayed height **95.86%** of frame height, fully contained; locator pill transformed right edge = **352.8 px ≤ 360** at entrance (pill=0, slide 17.5 px), mid-fade (0.5) and full visibility; status pill right edge 351.8 ≤ 360. At 390 and 1916 px the same containments hold (suite-asserted). Pill/status texts are `nowrap` by construction (single-line heights = font + padding at every reachable text, swap texts included); tile labels measured at 1-line and 2-line states inside their tiles at 360 px — contained in both. Occlusion at the diveEnd hold: target tile visible fraction **94%** (the status pill, on the top layer, overlaps 6.0% of the target's area); status pill visible 100% (top layer); locator pill visible 0% — exited by construction per the frame evidence (absent from 2300 ms in the specimen). Z-order census: no cloud paints above wall/pill layers (z values assigned at construction).
- **Purity grep, executed:** `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` on recreation.html → **0 hits**. Asset inventory: recreation.html loads nothing external — sky is a CONFIG gradient; skyline, clouds, and tiles are code-drawn DOM shapes; fonts are the system sans stack. The original appears only as the labeled ORIGINAL side of comparison.html.
- **Comparison check:** labels verbatim, both sides present, controls wired, swap values = the recorded swap, checkpoint text = the new effective table; the ORIGINAL side is byte-unchanged (its attempt-1 snapshot hash stands, §6).

## §5 Limitations

- **PIXEL-UNVERIFIED:** no render route exists in this seat; every rendered conclusion above rests on the source-bound displayed-state model and the logic suite, not on a rendered frame of the recreation. The frame extractions in §1 are specimen evidence (the original segment), not renders of the recreation.
- Pill/status widths in the model are glyph estimates (0.55 em average advance + CONFIG padding/dot/check), not measured rendered widths.
- The specimen's pre-stack mosaic flight (frames at 500–800 ms) is outside this technique's construction: the recreation opens on the settled wall; the mosaic belongs to the preceding technique.

## §6 Preservation record

- `recreation-attempt-1.html`: content copy taken in the Plan phase, sha256 966f96397e5a2e1e5cc0e55fc85b434c2f321a9e7516cf5ec5a377dd7f6bf5e9, inode 4612829 ≠ working file inode 4387182; re-verified immediately after this attempt's first overwrite of `recreation.html` and again at close — unchanged.
- Create-once snapshots taken this attempt BEFORE any edit: `build-record-attempt-1.md` (sha256 4808154809d51a7a6e7ddb2404a5798a19c11d90705cb9796b29a280728114b0, inode 4618063) and `comparison-attempt-1.html` (sha256 49e93649f5b333ed5960906632bc38b4e9fb821444d550e53be6e5ef9ad2a03c, inode 4618064).
- Preservation census immediately after the first overwrite of `recreation.html`: all protected components match the run's preservation baseline — the attempt-1 recreation copy, the attempt-1 build record and its snapshot, comparison.html (pre-correction state at census time), the five prior scoring returns under `codex/`, and `scores.md` (append-only; its prior sections are unchanged by this attempt).

## §7 Freeze

Final `recreation.html` sha256: **4b3058c2185ed10740c6de10dccf122e9301789cefa3a6e75eab7fb647defc70**. A frozen content copy stands in the run directory (`frozen-recreation-T10-attempt2.html`, sha256 verified identical at freeze time). All scoring payloads for this attempt bind to this sha; any later source change invalidates them.
