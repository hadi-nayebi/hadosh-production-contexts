# T10 — Recursive Zoom / Tile Dive · BUILD RECORD

Technique: T10 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 006 Wave 4 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T10-recursive-zoom-tile-dive/`
Consumer: transitions — production containers that dive from an overview (mosaic / tile wall / dashboard) into one detail cell; the locator + status pills are the reusable "where am I / what state is it in" overlay pair.

## §1 Observe (viewed firsthand, this run)

- digest.md T10 (per charge): "Immediately after the mosaic, camera pushes back down into a single cell of the tile wall — one desk, one avatar — while locator UI appears: pill 'you are here' and status pill 'laptop: brought' with check mark. Why: scale whiplash city→one desk; every tile is a visitable place."
- Evidence viewed firsthand this run: `ev/t55.jpg` (0:55) — dusk sky (deep blue → mauve → peach horizon) with soft clouds over a dark city skyline (lit windows); center frame, a vertical stack of three tiles: top = orange robot head (label "Claude"), middle = a person at a desk with a laptop in a mint room, carrying a MINT highlight border (label "You"), bottom = a purple sports car (label "GT3 RS"). To the right of the highlighted middle tile, a dark pill with a pink dot reads "you are here". The stack occupies ~26% of frame width and ~87% of frame height.
- Source: `source.mp4` 1916×1078, 198.41 s (per charge; segment cut ffprobe-verified in §3). Technique window 0:54–0:56; segment cut 53.5–56.5 (±0.5 s handles, 3.0 s).
- Sub-beats: (a) the tile wall holds over the city (the mosaic's overview state); (b) the camera dives — a continuous scale push into the single highlighted desk tile until that one cell fills the frame (recursive zoom: the overview cell becomes the next scene); (c) during/after the dive the locator pill "you are here" fades/slides in beside the target tile; (d) the status pill "laptop: brought ✓" appears — the visited cell carries its state with it.
- Variables (§1.3): tile contents/labels · grid cols/rows · target tile index · highlight color · zoom scale + easing · checkpoint timings (wall hold, dive start/end, pill at, status at) · pill texts + dot color · status text + check mark · sky palette (top/mid/low) · skyline/cloud colors · wall width fraction.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT per guards.md in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `durationMs` | number | `3000` | loop length = segment length (53.5–56.5) |
| `checkpoints` | object | `{wallHold:0, diveStart:650, pillAt:1750, statusAt:2150, diveEnd:2450}` | CHECKPOINT table: every phase boundary is data |
| `pillFadeMs` / `statusFadeMs` | number | `350` / `300` | pill fade-in durations |
| `gridCols` / `gridRows` | number | `1` / `3` | tile wall grid (evidence: vertical stack of 3) |
| `targetIndex` | number | `1` | the middle (desk) tile — the dive target |
| `wallWidthPct` | number | `26` | wall width % of frame (evidence-measured ~26%) |
| `zoomScale` | number | `3.4` | full-dive scale: target tile → ~98% of frame height |
| `skyTop/skyMid/skyLow` | string | `#2b3a6e / #7a5f8e / #d99a8a` | dusk gradient |
| `highlightColor` | string | `#7fe3c3` | mint border on the target tile |
| `pillText` / `statusText` / `checkMark` | string | `you are here` / `laptop: brought` / `✓` | locator + status pill contents |
| `pillDotColor` | string | `#ff6fa5` | pink locator dot |
| `tiles[]` | {kind,label,bg,accent,detail} | robot "Claude" · desk "You" · car "GT3 RS" | tile contents, code-drawn per kind |
| skyline/cloud/pill/status palettes + font/padding sizes | — | see CONFIG | every color and pill size is a key |

URL overrides (swap test + reuse): `?pill=…&status=…&tile1=…` (texts) · `?diveStartMs=…&pillAtMs=…&statusAtMs=…&diveEndMs=…&durationMs=…` (timing) · `?skyTop=…&highlight=…&pillDot=…` (palette) · `?zoom=…&target=…&cols=…&rows=…`. Config remains the single source; logic reads only CONFIG.

### Construction choice

**DOM tile wall + transform camera dive, checkpoint-priced state (chosen):** the scene is a code-drawn dusk sky (CSS gradient from CONFIG) + DOM skyline/clouds behind a CSS-grid tile wall whose three tiles are code-drawn glyph scenes (robot / desk / car from shaped divs). A pure `computeState(tMs, CONFIG)` maps time → {scale, pill, status, origin} where **every phase boundary comes from the `checkpoints` table**; the dive is `transform: scale()` on the wall with `transform-origin` at the target tile's center and easeInOutCubic over the diveStart→diveEnd interval — at zoomScale 3.4 the target tile (wall height 86.7% of frame ÷ 3 rows) reaches ~98% of frame height, i.e. it fills the frame as in the specimen. The locator pill fades/slides in from `pillAt`; the status pill from `statusAt`; both are DOM siblings of the wall (they do not scale with it — locator UI lives in screen space, as in the specimen). One rAF clock; play/pause/restart by postMessage from the comparison; loop = durationMs.

Rejected alternatives:
- Canvas scene — REJECTED: DOM tiles keep every tile's border/label/pill state directly inspectable (the node swap test asserts exact colors/text per element) and the grid fit is a CSS layout property at phone width.
- CSS keyframe animation for the dive — REJECTED: keyframes bake the checkpoint timings into the stylesheet; the checkpoint table must stay data the swap test can move (diveStartMs override) and `computeState` can be asserted at exact times.
- Nested-zoom recursion (render the wall inside the target tile, zoom forever) — REJECTED: the specimen's move is ONE dive from overview into one cell within the 2 s window; infinite recursion is a different technique and balloons the build (§8 size discipline).
- SVG tiles — REJECTED: equivalent purity, weaker text/pill layout story; DOM divs carry the labels and pills natively.
- Video/frame-sequence of the specimen — REJECTED: refusal-class (§6.1); original appears only as the labeled comparison side.

### Execute checklist
- [x] Segment cut 53.5–56.5 → `segment.mp4` (scale 960 wide, libx264, faststart, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, DOM skyline + tile wall, checkpoint-tabled dive, locator + status pills, loops, URL overrides, zero external references.
- [x] `comparison.html`: ORIGINAL + RECREATION labeled exactly per charge, shared play/pause/restart/swap controls, phone stacking (flex-wrap, min panel width, ≥48 px buttons).

### Verify checklist
- [x] Purity grep on recreation.html: `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` → 0 hits.
- [x] Node logic swap test: extract the inline script; run defaults + swap (pill/status/tile texts, diveStart + pillAt timing, skyTop + highlight palette); assert checkpoint-derived scale/pill/status at exact times, transform-origin, per-tile border color, pill DOM text.
- [x] `node --check` on the extracted inline script.
- [x] Config census: shaping literals outside the CONFIG block counted and filed (§5).
- [x] Comparison check: labels verbatim, both sides present, controls wired to video + iframe postMessage, swap values match the recorded swap.
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced)
- **Pill overflow at phone width (found + cured in Execute):** the locator pill sits at left 67% of frame; at 360 px wide its ~157 px width would cross the right edge by ~38 px. Cured BY CONSTRUCTION: `render()` clamps the pill's left so it never crosses the frame's right edge (2% margin). Computed fit at 360 px (frame 360×202.5): wall 93.6 px wide × 175.5 px high (fits, 87% of height as in the specimen); status pill ~130 px at left 4% fits; target tile at full dive = 98% of frame height, no clipping of the target.
- **Dive-target drift:** scaling around the wall's center instead of the target's center would push the desk tile off-frame for any non-center target — cured by construction: `transform-origin` is computed from targetIndex/grid in `computeState` (asserted [50,50] for the specimen's middle tile, and it moves with `?target=`).
- **Checkpoint vs cadence drift:** phase boundaries read only from `CONFIG.checkpoints`; the swap test moves diveStart/pillAt and asserts the scale at 1550 ms changes to the checkpoint-derived value (2.696).
- **Pill scaling with the wall:** if the pills were children of the wall they would balloon 3.4× during the dive — they are stage siblings (screen-space UI), priced from the specimen where the pill stays readable beside the tile.
- **Loop seam:** at durationMs the scale snaps 3.4→1; the specimen's window also cuts (it is an excerpt of a longer move) — the loop restarts the whole wall→dive move, matching the segment's own loop point.
- **Render-proof limitation:** no Chrome binary in this seat (fleet precedent) — verification is logic-level (node) + source census + computed phone fit; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 53.5 -i source.mp4 -t 3 -vf scale=960:-2 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 3.000 s, 578,784 bytes. Window 53.5–56.5 covers the 0:54–0:56 technique window with ±0.5 s handles.
- `recreation.html` (14,127 bytes): CONFIG at top (checkpoint table, tiles, pills, palette, zoom); code-drawn dusk sky + skyline + clouds; DOM tile wall 1×3 with code-drawn robot/desk/car glyph scenes; transform dive with target-centered origin; locator + status pills in screen space; rAF clock; postMessage play/pause/restart; pill phone-fit clamp in render().
- `comparison.html` (4,319 bytes): labels "ORIGINAL — Look What I Can Do (P1) @ 0:54–0:56" / "RECREATION — T10 Recursive zoom / tile dive, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300 px (phone stacking); buttons min-height 48 px.
- Execute fix (same round): the phone-fit computation found the locator pill overflowing at 360 px before any lens was spent — cured with the render-time clamp above and re-verified (harness 26/26 after the fix).

## §5 Self-verify (own checks, before Codex) — legs 1–3
- **Leg 1 — Swap test (own, mechanical): PASS 26/26** (node harness, stubbed DOM, real script extracted from recreation.html; `node --check` PASS first).
  Defaults asserted: pill/status texts ("you are here" / "laptop: brought"); targetIndex 1; 3 tiles built; scale at t=0 = 1, at diveEnd (2450 ms) = 3.4, at mid-dive (1550 ms) = 2.2 (easeInOutCubic midpoint); pill opacity 0 at t=0 and 1 at 2200 ms; status 1 at 2500 ms; transform-origin [50,50] for the middle tile; loop wraps at 3000 ms (scale back to 1); render(2450) sets wall transform `scale(3.4000)` and status pill display flex; render(0) hides it.
  Swap (`?pill=FOUND YOU&status=keys: brought&diveStartMs=300&pillAtMs=1400&skyTop=%23331144&highlight=%23ffd75e&tile1=MY DESK`): pill + status texts replaced in CONFIG and in the DOM; diveStart/pillAt checkpoints moved; scale at 1550 ms = 2.696 (the checkpoint-derived value for the earlier dive, not the default 2.2); skyTop and highlight palette replaced; target tile's border renders the swapped highlight `#ffd75e`; target tile label = "MY DESK". The technique survives different texts + one timing change (two checkpoints) + palette changes — swap PASS, Codex wave may fire.
- **Leg 2 — Construction purity (own, mechanical): PASS.** Grep `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — sky is a CONFIG gradient, skyline/clouds/tiles are code-drawn DOM shapes, fonts are the system sans stack; every loaded asset is code written by this build. The original appears only as `segment.mp4` in comparison.html, labeled ORIGINAL.
  Config census: hex colors outside the CONFIG block = **0**; timing durations in logic outside CONFIG = **0** (the ≥3-digit numerals outside CONFIG are percent bases `100`, CSS `font-weight:700`, the override comment's example values, and one 800 ms sanity floor on the durationMs override clamp). Disclosed non-CONFIG geometry: the three tile glyph scenes are drawn with % coordinates inside `drawTileArt` (85 % literals) — glyph construction geometry (what a robot/desk/car glyph is), not specimen-shaping variables; the technique's variables (contents, labels, target, timings, palette, zoom) are all CONFIG keys. Filed honestly for the reusability lens to price.
- **Leg 3 — Comparison check (own): PASS.** Labels verbatim per charge (grep-verified, 1 hit each); both sides present at matched 16:9; Play/Pause/Restart post the matching command to the recreation in the same click as the video action; Swap button reloads the recreation with exactly the swap values recorded in Leg 1; recreation loop (3 s) matches the segment's 3 s loop; phone stacking via flex-wrap + min-300 px panels and ≥48 px buttons; recreation's own phone fit computed in §2 (wall 93.6×175.5 px in a 360×202.5 frame; pill clamped inside the right edge; target tile fills ~98% of frame height at full dive, no clipping).
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; fleet precedent) — logic-level proof + computed fit stand; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).
- Leg 4 (Codex five-lens wave) + leg 5 (consolidation) are recorded in `scores.md` with returns under `codex/`.
