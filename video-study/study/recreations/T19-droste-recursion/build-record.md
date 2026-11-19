# T19 — Droste Recursion · BUILD RECORD

Technique: T19 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 007 Wave 5 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T19-droste-recursion/`
Consumer: thumbnail (one-off) — one image states the recursive premise; the most screenshot-worthy frame in the piece.

## §1 Observe (viewed firsthand, this run)

- Task-charged mechanics (digest.md T19 + TECHNIQUES.md): the framed picture labeled "THIS VIDEO" contains the same scene, same character, same frame, recursively. Why: one image states the recursive premise (a video about making videos); the most pause-worthy, screenshot-worthy frame in the piece. Segment section: "Viking hall + Droste frame" 2:17–2:30 — the recursion is a held composition with a slow push, not a cut-driven beat.
- Evidence viewed firsthand this run:
  - `ev/t141.jpg` (t=2:21): candlelit Viking hall. A hooded figure with a pale oval face sits right of frame, candles and a glowing staff behind, red draped backdrop. Lower-left, an ornate framed picture stands on a table: a dark header bar reading "THIS VIDEO" with a star medallion, red side curtains. Inside the frame the SAME scene recurs — figure, candles, staff, framed picture — and inside that a third, smaller iteration. Three nesting levels are legible in a single still.
- Source: `source.mp4` 1916×1078, 30 fps, 198.41 s (task-stated). Segment window for the cut: 2:16.5–2:30.5 (±0.5 s handles around the 2:17–2:30 technique window). Segment binding (guards.md command 5): cut at §3, ffprobe facts recorded there.
- Sub-beats: (a) the held composition — hall, figure, and framed picture all present from the first frame; (b) a slow push-in toward the framed picture deepens the recursion (the anchor frame t141 at 4.5 s into the segment shows the held composition mid-push); (c) the recursion itself is the event — no cuts, no text changes, no second action.
- Variables (§1.3): frame label text · recursion depth · zoom start/end + anchor · phase checkpoints · hall palette (drape/candle/robe/face/frame) · candle count · figure placement/scale · table/frame geometry · hold + duration.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT per guards.md in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `durationMs` | number | `14000` | segment window length (2:16.5–2:30.5) |
| `labelText` | string | `THIS VIDEO` | framed picture's header text (the technique's subject text) |
| `depth` | number | `3` | recursion depth — nesting levels from the one renderer |
| `candleCount` / `figureButtons` | number | `3` / `3` | cluster + robe detail counts |
| `checkpoints` | object | `{pushStartMs:800, anchorMs:4500, pushEndMs:9500, holdEndMs:13000}` | CHECKPOINT table: push start, the t141 anchor (4.5 s into the segment), push end, hold end |
| `zoomStart` / `zoomEnd` | number | `0.94` / `1.20` | push-in scale range |
| `zoomAnchorXPercent` / `zoomAnchorYPercent` | number | `28` / `64` | push anchor = frame centre (asserted = frameLeft + frameWidth/2, frameTop + frameHeight/2) |
| `flickerAmp` | number | `0.18` | deterministic candle-flame flicker amplitude |
| `levelScale` | number | `0.42` | per-level width ratio (legibility math + nested stage width) |
| `labelFontFactor` / `labelMinPx` | number | `0.05` / `11` | label size per stage-width px; legibility floor (depths 0–1) |
| `medallionText` | string | `✶` | header medallion glyph |
| palette keys | string | hall `#171019` · drape `#7e1f2b` · drapeDark `#4a121d` · candleBody `#e8dcc0` · flame `#ffca7a` · glow `#ffb35c` · staffOrb `#ffc46b` · robe `#2c3a5e` · hood `#14100e` · face `#f0d7ae` · frameBg `#10182e` · frameBorder `#d9b96a` · curtain `#8e2434` · label `#e9cf8f` (+ shades) | full palette, 23 hex values, all inside CONFIG |
| `geometry` | object | frame L6/T38/W44/H52 · figure R3/T6/W36/H82 · candles L33/T30 · staff L43/T10 · table T86/H14 · drape L55/W45 · header 20% · curtains 9% | every stage-geometry % |

URL overrides (swap test + reuse): `?label=…&depth=…` (subject + recursion) · `?pushStart=…&anchor=…&pushEnd=…&holdEnd=…&durationMs=…` (checkpoints) · `?zoomStart=…&zoomEnd=…` · `?drape=…&face=…&robe=…&candle=…` (palette) · `?candles=…`. Config remains the single source; logic reads only CONFIG.

**Checkpoint model (labeled allocation, per wave Plan):** the packet supplies ONE timed anchor — t141 at 2:21 = 4500 ms into the segment, showing the held composition. pushStart/pushEnd/holdEnd are a LABELED ALLOCATION MODEL around that anchor (a slow push across most of the window, then a hold), stated uncertainty: intermediate timings are allocated, not measured. At the anchor the state prices scale ≈ 1.041 (smoothstep progress 0.389) — near the specimen's composed scale, asserted in the swap test.

**Legibility pricing (declared):** label font = stageWidth × `labelFontFactor` × `levelScale`^level, floored at `labelMinPx` (11) for levels 0–1 only. At a 360 px stage: level 0 = 18.0 px, level 1 = 11.0 px (floored; raw 7.56 px), level 2 = 3.18 px raw — **the label stops being legible at level 2** (`labelLegibilityStopLevel` = 2, asserted). The recursion's legibility claim is 3 SCENE levels (figure/candles/frame readable), not 3 label reads — matching the specimen still, where the third level's header is a glyph-band, not readable text.

### Construction choice

**One recursive DOM/SVG-style scene renderer (chosen):** `buildScene(cfg, level, stageWidthPx)` code-draws the hall from CONFIG — gradient draped backdrop with fold stripes, a candle cluster (CONFIG count, radial-gradient flames), a glowing staff (rod + orb), a hooded figure (robe, hood, radial oval face, CONFIG buttons), a table — and the ornate framed picture (header bar with medallion + CONFIG label, red side curtains, interior). The interior's content is `buildScene(cfg, level + 1, …)` — the SAME function, so nested levels are the renderer at smaller scale by construction, never copies. Recursion ends when `level + 1 >= depth`, leaving the deepest interior dark. A pure `computeState(tMs, CONFIG)` prices the push: smoothstep progress between the push checkpoints, scale = zoomStart + (zoomEnd − zoomStart) × progress, applied to a wrapper whose transform-origin is the CONFIG frame-centre anchor; phases settle → push → hold → reset; the loop wraps at durationMs. Checkpoint coherence is mechanical: `validateCheckpoints` reports ordered + within-duration, and `effectiveCheckpoints` normalizes (sort + clamp) so a reordered table can never produce a non-monotonic state. Deterministic: the only time-varying ornament is the flame flicker, a pure sine of loop time (no randomness anywhere).

Rejected alternatives:
- Nested image of a captured frame (the framed picture as a specimen still, recursed) — REJECTED: refusal-class (§6.1); specimen media appears only as the labeled comparison side.
- CSS transform on a screenshot of the scene — REJECTED: same refusal class, and a transform of a bitmap is not a renderer.
- Hand-drawn nested copies (three separately built scenes at three sizes) — REJECTED: not one renderer; a depth swap could not re-render them, and the copies would drift from each other — the technique IS the single definition recurring.
- Canvas raster scene — REJECTED for attempt 1: DOM keeps every level's node census directly countable (the swap test asserts rendered node counts per depth as the recursion proof) and the label a real text element whose size the legibility math prices.

### Execute checklist
- [x] Segment cut 2:16.5–2:30.5 → `segment.mp4` (scale 960 wide, libx264, yuv420p, faststart, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, one recursive scene renderer, checkpoint-priced push-in anchored at the frame centre, computed label legibility with floor at depths 0–1, loops, URL overrides, zero external references.
- [x] `comparison.html`: ORIGINAL + RECREATION labeled exactly per charge, shared play/pause/restart/swap controls, phone stacking (flex-wrap, min panel width, ≥48 px buttons).

### Verify checklist
- [x] Purity grep on recreation.html (segment/source/frame patterns, media tags, external URLs) → 0 hits.
- [x] Node logic swap test: extract the inline script; run defaults + swap (label + depth 4 + pushEnd timing + drape palette) + depth-2 re-render + reordered-checkpoint adversarial case; assert checkpoint gating/coherence, anchor scale, phase order, loop wrap, rendered node counts per depth (true recursion), label legibility per level, anchor = frame centre.
- [x] `node --check` on the extracted inline script.
- [x] Config-census v2: ALL shaping literals outside CONFIG counted (hex + rgba + durations + geometry % + px bounds), printed with classification.
- [x] Comparison check: labels verbatim, both sides present, controls wired to video + iframe postMessage, durations matched (14 s = 14 s).
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced, from Waves 3–4)
- **Reusability config leaks (Waves 3–4 stuck lens):** shaping literals outside CONFIG are the fleet's recurring reusability defect — priced here by census v2 (§5 leg 2): stage geometry, palette, durations and font factors are all CONFIG; the residual outside-CONFIG literals are counted and classified in the open, not claimed away.
- **Checkpoint incoherence (Wave 4 cure class):** overrides are not merely clamped — `validateCheckpoints` + `effectiveCheckpoints` make order/window violations explicit and the state monotonic under any table; the swap test carries the reordered-checkpoint adversarial case.
- **Recursion depth vs legibility:** deeper nesting shrinks every nested element by `levelScale` per level; at depth 3 the third scene level stays legible as a scene while its label does not (priced above). Depth swaps 2/3/4 re-render cleanly because depth is a loop bound on one renderer, asserted by node counts (56 / 84 / 112).
- **Phone legibility:** the frame header is the technique's only text; its floor (≥11 px at 360 px at depths 0–1) is computed and asserted, not eyeballed.
- **Push-anchor drift:** a push anchored anywhere but the frame's centre would slide the outer scene instead of deepening the recursion — the anchor is a CONFIG pair asserted equal to the frame geometry's centre.
- **Render-proof limitation:** no Chrome binary in this seat (fleet precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 136.5 -i source.mp4 -t 14 -vf scale=960:-2 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 14.000 s, 2,570,980 bytes. Window 2:16.5–2:30.5 covers the 2:17–2:30 technique window with ±0.5 s handles.
- `recreation.html` (16,615 bytes): CONFIG at top; ONE recursive DOM scene renderer (draped backdrop, 3-candle cluster with flickering flames, glowing staff, hooded figure with oval face, table, ornate framed picture with "THIS VIDEO" header + medallion + red curtains) whose framed interior is the same renderer one level deeper, to CONFIG depth 3; checkpoint-priced slow push-in (0.94 → 1.20, anchor = frame centre 28%/64%) then hold, 14 s loop; checkpoint validation + normalization; computed label legibility (floor at depths 0–1, stop level priced); postMessage play/pause/restart; URL overrides.
- `comparison.html` (4,416 bytes): labels "ORIGINAL — Look What I Can Do (P1) @ 2:17–2:30" / "RECREATION — T19 Droste recursion, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300 px (phone stacking); buttons min-height 48 px.

## §5 Self-verify (own checks, before Codex) — legs 1–3
- **Leg 1 — Swap test (own, mechanical): PASS 34/34** (node harness, stubbed DOM, real script extracted from recreation.html; `node --check` PASS first).
  Defaults asserted: duration 14000; depth 3; label "THIS VIDEO"; checkpoints coherent; state at 0 = settle at scale 0.94; progress 0 at 799 ms; anchor at 4500 ms prices scale 1.0412 (progress 0.389); push complete at 9500 ms (scale 1.20, phase hold); hold at 12000 ms; reset phase at 13500 ms; loop wrap at 18500 ms returns to the anchor state; rendered node count = 84 = `sceneNodeCount` (3 levels × 28) with exactly 3 `.scene` levels and 3 frame labels, all reading "THIS VIDEO"; label sizes at 360 px stage: level 0 = 18 px, level 1 = 11 px (floored), level 2 raw < 11 px, legibility stop level = 2; zoom anchor asserted = frame centre (28%, 64%) and applied as the wrapper's transform-origin; specimen drape `#7e1f2b` rendered from CONFIG.
  Swap (`?label=SAME HALL AGAIN&depth=4&pushEnd=7000&drape=%23331a4d`): label replaced at all 4 rendered levels; depth 4 renders 4 scenes / 112 nodes (> 84 — node count grows with depth, proving true recursion from one renderer); push completes at 7000 ms under the swapped checkpoint while the default build is still mid-push at 7000 ms; violet drape `#331a4d` rendered end-to-end. Depth-2 swap renders cleanly (2 scenes / 56 nodes). Adversarial reordered checkpoints (`?pushStart=9000&pushEnd=2000`): flagged incoherent by `validateCheckpoints`, normalized ordered by `effectiveCheckpoints`, and the priced state stays monotonic (scale at 1000 ≤ 5000 ≤ 10000 ms). The technique survives a new label + a depth change + a timing change + a palette change — swap PASS, Codex wave may fire.
- **Leg 2 — Construction purity (own, mechanical): PASS.** Grep `segment\.mp4|source\.mp4|t141|<video|<img|\.jpg|\.png|http://|https://|url\(` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — the hall is DOM/CSS gradients, the label is a CONFIG string, the medallion a CONFIG glyph, fonts are the system serif stack; every loaded asset is code written by this build. **Config-census v2 (real counts, classified):** hex literals outside CONFIG = **0** (all 23 palette hex values live inside CONFIG); the single `rgba(` occurrence outside CONFIG is the `hexToRgba` helper constructing a color from a CONFIG hex + a call-site alpha — no literal color; px literals outside CONFIG = **7 occurrences / 3 distinct values** (drape-fold gradient rhythm 9 px / 18 px, stated twice across the two fold gradients, plus the frame border 2 px; the 0 px stops are gradient origins) — these three are genuine residual shaping values outside CONFIG, printed as the census finding, not claimed away; percent literals outside CONFIG = 47, all intra-element proportions (candle/flame/face/button sizing inside their CONFIG-placed parent boxes, full-bleed 100% / 0% structural fills) — stage geometry (every hall element's position and size on the stage) is 100% CONFIG-priced. The original appears only as `segment.mp4` in comparison.html, labeled ORIGINAL.
- **Leg 3 — Comparison check (own): PASS.** Labels verbatim per charge; both sides present at matched 16:9; Play/Pause/Restart post the matching command to the recreation in the same click as the video action (recreation carries the fleet postMessage play/pause/restart listener); Swap button reloads the recreation with the recorded swap values; recreation loop (14 s) matches the segment length (14 s); phone stacking via flex-wrap + min-300 px panels and ≥48 px buttons.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; fleet precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).
- Leg 4 (Codex five-lens wave) + leg 5 (consolidation) are recorded in `scores.md` with returns under `codex/`.
