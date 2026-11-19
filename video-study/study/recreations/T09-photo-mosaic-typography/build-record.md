# T09 — Photo-mosaic typography · BUILD RECORD

Technique: T09 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 006 Wave 4 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T09-photo-mosaic-typography/`
Consumer: openings — a title built from the piece's own material (the opening container whose letterforms are assembled from the work's own thumbnail tiles).

## §1 Observe (viewed firsthand, this run)

- digest.md T09: "The tile wall bursts apart; hundreds of thumbnails stream up through a dusk sky over the city and re-assemble, tile by tile, into giant letterforms — t52 catches 'LOOK' mid-formation (letters are outlines built from small thumbnail tiles with cyan glow) with more tiles still rising from the rooftops to complete 'LOOK WHAT I CAN DO'." Why it works: form = content — the title is literally made of the projects the song brags about; a ~3 s construction instead of a reveal turns a credit into a set piece.
- Evidence viewed firsthand this run: `ev/t52.jpg` (0:52) — dusk gradient sky (deep navy top → blue-violet → pink horizon), pale code-like clouds mid-sky, dark city skyline along the bottom with lit windows and a dense cluster of thumbnail tiles still pooled over the rooftops at lower-right. In the upper-left sky, the letters L·O·O·K stand as outlines built from small square thumbnail tiles, each tile a tiny varied picture panel, with a cyan glow halo around the formed letters. More tiles are mid-flight below the letters. The letters read as *outlines* (hollow tile borders), not solid fills.
- Source: `source.mp4` 1916×1078, 198.41 s (per charge; segment ffprobe below). Technique window 0:50–0:53; segment cut 49.5–53.5 (±0.5 s handles, 4.0 s).
- Sub-beats: (a) burst — the tile wall/pool over the rooftops breaks apart; (b) rise — hundreds of tiles stream upward through the dusk sky, staggered, over ~3 s; (c) assembly — tiles land one by one on letterform targets, the word becoming readable progressively (t52 is mid-formation: LOOK nearly complete, later words not yet formed); (d) hold — the completed title holds readable with its cyan glow while stragglers finish rising.
- Variables (§1.3): title text · tile size · sampling density (tile count) · tile palette / per-tile variation · sky gradient (top/mid/horizon) · skyline shape + lit-window color · cloud color/alpha · glow color/strength · rise duration · per-tile stagger · burst origin (skyline) · assembly-complete time · hold duration · seed.
- Guards at Observe: jev-observe-exit / jev-plan-exit / jev-prewave / codex-observe / codex-plan-review — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT in this seat per the job's guards record; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `titleText` | string | `LOOK` | the words being formed (t52 state) |
| `fontFamily` / `fontWeight` | string/number | Arial stack / 900 | probe rendering for sampling |
| `maxWidthRatio` / `maxFontPx` | number | 0.88 / 170 | computed fit bounds |
| `titleCenterYRatio` | number | 0.34 | title vertical placement (upper sky, as t52) |
| `sampleGap` | number | 13 | sampling step px → tile count/density |
| `tileSize` / `tileGap` | number | 11 / 2 | tile panel size |
| `seed` | number | 20261113 | seeded RNG (deterministic choreography) |
| `durationMs` | number | 4000 | loop length = segment length |
| `checkpoints` | object | `{burstAt:0, riseStart:150, assemblyComplete:3000, holdEnd:4000}` | CHECKPOINT table: phases decided from this data only |
| `riseDurationMs` / `staggerMs` | number | 2100 / 900 | per-tile flight time + seeded stagger spread |
| `holdGlowPulse` / `jitterPx` | number | 0.18 / 0.5 | hold life: glow pulse + on-target jitter |
| `ambientTileCount` / `ambientAlpha` | number | 46 / 0.5 | background rising stream (dimmer than letters) |
| `skyTop` / `skyMid` / `skyHorizon` | string | `#141d3d` / `#3d4d85` / `#c98ba0` | dusk gradient |
| `skylineColor` / `skylineLitColor` | string | `#0a0f22` / `#ffd98a` | skyline + lit windows |
| `cloudColor` / `cloudAlpha` | string/number | `#7d89b8` / 0.55 | clouds |
| `glowColor` / `glowAlpha` | string/number | `#7fe7ff` / 0.55 | cyan letter glow (t52) |
| `tilePalette` | string[] | 8 warm/varied colors | per-tile thumbnail-panel colors (seeded pick) |
| `tileInnerColor` / `probeColor` | string | `#10131f` / `#ffffff` | tile inner detail / sampling mask |
| `skylineHeightRatio` / `cloudCount` / `cloudSpeedPxS` | number | 0.22 / 6 / 3.5 | scene dressing |

URL overrides (swap test + reuse): `?title=…` · `?durationMs=…&assemblyComplete=…` · `?glow=…&skyTop=…&skyMid=…&skyHorizon=…&skyline=…` · `?tileSize=…&sampleGap=…&seed=…&riseDurationMs=…&staggerMs=…`. Config remains the single source; logic reads only CONFIG.

**Computed fit (phone legibility, declared):** the probe font size starts at `maxFontPx` and shrinks in 4 px steps until the measured title width fits `maxWidthRatio` (0.88) of the stage width — font size is *derived from stage width and text length*, never fixed. At 360 px stage with the specimen title "LOOK" the harness-measured fit resolves to 126 px (vs 170 px at 960 px), and the sampled letter height scales with it, so the formed title spans ~88% of phone width by construction.

### Construction choice

**Canvas tiles + runtime text sampling (chosen, Amendment A1 precedent):** an offscreen canvas renders `CONFIG.titleText` in the fitted font; alpha sampling on a `sampleGap` grid yields letterform targets. One canvas tile per target: a code-generated colored mini-panel (seeded palette pick + inner detail bar suggesting a thumbnail — never an image) that starts pooled on the code-drawn skyline, flies to its target with easeOutCubic over `riseDurationMs` plus a seeded stagger, then holds with sub-pixel jitter and a cyan glow pass (`shadowBlur` in `glowColor`) once assembled. Phases come only from the `checkpoints` table via a pure `computePhase(t, CONFIG)`. Ambient tiles stream upward at `ambientAlpha` 0.5 — background intensity, never letter intensity (Owner Cure 1 separation). Sky = CONFIG gradient; skyline + lit windows + clouds all code-drawn from seeded RNG. Seeded RNG (mulberry32) makes the whole choreography deterministic. Loop = `durationMs`.

Rejected alternatives:
- DOM tiles (one div per target) — REJECTED: hundreds of tiles with per-frame transforms + glow is canvas's home ground; DOM would also make the glow pass and skyline layering heavier for no inspectability gain the swap test needs (the test asserts target sets + phases, which the API exposes).
- Traced letter paths / hand-placed tile coordinates for "LOOK" — REJECTED: refusal-adjacent tracing and fails the swap test by construction; A1 names runtime sampling of config-rendered text as the lawful construction.
- Solid-fill sampling (fill the whole glyph) — REJECTED as default density choice, noted honestly: t52's letters are tile *outlines*. The build samples the full glyph raster at gap 13, which reads as a dense tile mosaic; at the specimen's coarser tile scale the outline character dominates. Priced as a known fidelity gap for the wave (motion/readability lenses) rather than hidden.
- Pre-rendered sprite sheet of thumbnail images — REJECTED: specimen-media risk and purity; tiles must be code-generated panels.
- CSS keyframe rise — REJECTED: per-tile stagger + target geometry is data, not keyframes; a cadence/keyframe model cannot express checkpoint-priced assembly.

### Execute checklist
- [x] Segment cut 49.5–53.5 → `segment.mp4` (scale 960 wide, libx264, yuv420p, faststart, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, runtime-sampled letterforms, seeded tiles rising from code-drawn skyline through dusk gradient, checkpoint phases, loops, URL overrides, postMessage play/pause/restart, zero external references.
- [x] `comparison.html`: ORIGINAL + RECREATION labeled exactly per charge, shared play/pause/restart/swap controls ≥48 px, flex-wrap phone stacking.

### Verify checklist
- [x] Swap test (node harness, stubbed canvas/DOM): title swap changes target count + geometry; timing + palette swaps asserted; phase/tileProgress/config-census assertions.
- [x] Purity grep on recreation.html: `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` → 0 hits; asset inventory filed.
- [x] Config census: shaping literals outside CONFIG counted (hex scan + review).
- [x] `node --check` on the extracted inline script.
- [x] Comparison check: labels verbatim, controls wired, swap values recorded.
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced)
- **Phone legibility of the formed title (primary):** a fixed font size would overflow or shrink unreadably at 360 px — cured BY CONSTRUCTION: computed fit derives font size from stage width × text length (harness-verified: 126 px at 360 px stage, title spans the 0.88 width ratio). Residual risk: very long override titles shrink toward the 12 px floor and would read poorly — accepted as an override-only edge, defaults are safe.
- **Tile-target sampling density:** too coarse a gap → letters dissolve into dots; too fine → thousands of tiles and muddy fill. `sampleGap` 13 at `tileSize` 11 gives near-continuous mosaic at specimen-like scale (211 targets for LOOK at 960×540 in the harness raster). The outline-vs-fill divergence from t52 is the priced residual (see rejected alternatives).
- **Glow washing the tiles:** the glow pass draws only for tiles at progress 1 and at 0.5 × `glowAlpha` under the tiles themselves, so tile colors stay the foreground read.
- **Ambient competition:** ambient stream capped at alpha 0.5 and smaller tiles, so background never reaches letter intensity (Owner Cure 1).
- **Render-proof limitation:** no Chrome binary in this seat (fleet precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 49.5 -i source.mp4 -t 4 -vf scale=960:-2 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 4.000 s, 1,228,888 bytes. Window 49.5–53.5 covers the 0:50–0:53 technique window with ±0.5 s handles.
- `recreation.html` (11,763 bytes): CONFIG at top (all keys above); runtime sampling; seeded tile build; checkpoint phases; canvas render (gradient sky, clouds, ambient stream, glow pass, tiles, skyline); rAF clock; postMessage play/pause/restart; `window.T09_API` inspection hook.
- `comparison.html` (4,228 bytes): labels "ORIGINAL — Look What I Can Do (P1) @ 0:50–0:53" / "RECREATION — T09 Photo-mosaic typography, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300 px (phone stacking); buttons min-height 48 px.
- Execute fix (same round): config census found the probe mask color `#ffffff` as a hex literal outside CONFIG — moved into CONFIG as `probeColor` and the sampler now reads `cfg.probeColor`. Re-census: 0 hex literals outside CONFIG; swap test re-run 28/28.

## §5 Self-verify (own checks, before Codex) — legs 1–3
- **Leg 1 — Swap test (own, mechanical): PASS 28/28** (node harness, stubbed canvas/DOM with a deterministic per-character raster stub for the probe; real script extracted from recreation.html; `node --check` PASS first).
  Defaults asserted: title `LOOK`; checkpoints assemblyComplete 3000 / holdEnd 4000 = durationMs; sampling LOOK → 211 targets (>100); tile count = target count; phases burst@100 ms / assemble@1500 ms / hold@3500 ms; loop wraps at 4000 ms to burst; tileProgress 0 in burst, 1 in hold; sampling + tile build deterministic (same seed → identical tiles; seed 99 → different origins).
  Title swap (the core proof): `sampleTargets("DO")` → 118 targets, `sampleTargets("HELLO")` → 250 targets, centroid geometry differs from LOOK — a different title produces a different target set in count and geometry.
  Full URL swap (`?title=DO&durationMs=5200&assemblyComplete=3900&glow=%23ffd75e&skyTop=%23301a4d`): title/duration/checkpoint all follow (holdEnd follows duration to 5200); palette follows (glow `#ffd75e`, skyTop `#301a4d`); built tile count 118 ≠ 211; phase at 3500 ms = assemble under the new checkpoint where the default build already holds, and hold at 4500 ms — timing is checkpoint-priced, not cadence.
  Phone fit asserted: computed fit at 360 px stage = 126 px font, measured width within the 0.88 ratio, smaller than the 960 px fit (170 px).
- **Leg 2 — Construction purity (own, mechanical): PASS.** Grep `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — tiles are code-drawn colored panels (seeded palette + inner detail bar), sky/skyline/clouds are code-drawn, letterforms are runtime-sampled from CONFIG text; every asset is code written by this build. The original appears only as `segment.mp4` in comparison.html, labeled ORIGINAL.
  Config census: hex literals outside the CONFIG block → **0** after the `probeColor` fix; remaining non-CONFIG numbers are structural (canvas math constants, easing) — 0 non-trivial shaping literals.
- **Leg 3 — Comparison check (own): PASS.** Labels verbatim per charge; both sides present at matched 16:9; Play/Pause/Restart post the matching command to the recreation in the same click as the video action; Swap button reloads the recreation with the recorded swap values (`?title=DO&durationMs=5200&assemblyComplete=3900&glow=%23ffd75e&skyTop=%23301a4d`); recreation loop (4 s) matches the segment length (4.000 s); phone stacking via flex-wrap + min-300 px panels and ≥48 px buttons.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; fleet precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).
- Leg 4 (Codex five-lens wave) + leg 5 (consolidation) are recorded in `scores.md` with returns under `codex/`.
