# T20 — Building-as-Display Typography · BUILD RECORD

Technique: T20 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 007 Wave 5 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T20-building-as-display-typography/`
Consumer: openings — the title at architectural scale: a tower's lit windows spell the words, discovered in the world rather than overlaid.

## §1 Observe (viewed firsthand, this run)

- Task-charged mechanics (digest.md T20): a neon night-city finale — the facade of a central tower lights letter by letter until its window grid reads "LOOK WHAT I CAN DO!"; the camera orbits the tower while it completes; a marquee at the tower's base carries the same line. Why: the title at architectural scale is the triumph beat; letters made of lit windows feel discovered in the world, not overlaid.
- Evidence viewed firsthand this run:
  - `ev/t163.jpg` (t=2:43, 6.5 s into the segment): central dark tower filling the frame with a cyan neon edge outline; its window grid spells the title in small lit cells — line 1 "LOOK" complete, line 2 "WHAT" complete, line 3 begun (the "I" formed, the rest dark) — pale pink-white cells on the dark facade; the cyan marquee strip at the tower's base ALREADY reads the full "LOOK WHAT I CAN DO!" while the facade is still partial (the marquee leads, the facade is the slow reveal); surrounding towers carry warm scattered lit windows under a purple night sky.
- Source: `source.mp4` 1916×1078, 30 fps, 198.41 s (task-stated). Segment window for the cut: 2:36.5–2:50.5 (±0.5 s handles around the 2:37–2:50 technique window).
- Sub-beats: (a) night skyline established, hero tower dark-facaded with its cyan edge live; (b) facade letters light one by one in reading order (the anchor frame catches 9 of 15 letters at 6.5 s); (c) the base marquee is complete early and holds; (d) the camera orbits slowly throughout — parallax between skyline layers and a slight hero shift; (e) the completed facade holds to the window's end.
- Variables (§1.3): facade text/lines · marquee text · facade grid cols/rows · lit/unlit cell colors + glow · sky + tower palettes · neighbor tower layout/density/seed · letter-lighting checkpoints · orbit/parallax amounts · marquee typing speed · hold + loop duration · sample font/fit · cell geometry factors.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT per guards.md in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `durationMs` | number | `14000` | segment window length (2:36.5–2:50.5) |
| `facadeLines` | string[] | `["LOOK","WHAT","I CAN DO!"]` | facade text, one entry per facade line (15 letters) |
| `marqueeText` | string | `LOOK WHAT I CAN DO!` | base marquee line |
| `marqueeCharMs` | number | `40` | marquee typing speed (frame-evidenced complete while facade partial) |
| `checkpoints` | object | `{lightStart:500, lightComplete:11000}` | CHECKPOINT table; per-letter interval DERIVED = span / live letter count (700 ms at specimen) |
| `gridCols` / `gridRows` | number | `40` / `48` | hero facade window grid |
| `sampleW` / `sampleH` / `sampleFontPx` / `sampleMask` / `sampleFitRatio` / `sampleAlphaMin` | mixed | `400` / `480` / `92` / `#ffffff` / `0.92` / `128` | runtime-sampling inputs incl. auto-fit |
| `fontFamily` | string | `bold {px}px 'Arial Black', Arial, sans-serif` | sample raster font |
| `hero` | object | `{xPct:31, yPct:6, wPct:38, hPct:82}` | hero tower geometry % |
| `marquee` | object | `{hPct:7.5, fontMinPx:11, fontMaxPx:24, fontFactor:0.034}` | marquee geometry + font bounds |
| `orbit` | object | `{farPx:5, midPx:11, heroPx:3}` | parallax drift per layer |
| `neighborTowers` / `neighborCols` / `neighborRows` / `neighborDensity` / `neighborSeed` | mixed | 8-tower layout / `7` / `16` / `0.30` / `20261114` | skyline layout + seeded lit windows |
| `geom` | object | cell/neighbor insets+sizes, glow pad, edge width/blur, ground % | render geometry factors |
| palette keys | string | sky `#2a1052`→`#6d2a7a` · neighbor `#17122b` · neighborLit `#ffd9a0` · neighborUnlit `#241b40` · heroFacade `#0d1420` · heroEdge `#37f4e4` · cellLit `#ffe9f6` · cellLitGlow `rgba(255,120,220,0.55)` · cellUnlit `#1b2a3d` · marqueeBg `#062a30` · marqueeText `#5ff7ec` · ground `#07050f` | full palette |

URL overrides (swap test + reuse): `?lines=…|…` (facade lines) · `?marquee=…` · `?lightStart=…&lightComplete=…` (checkpoints) · `?lit=…&sky=…` (palette) · `?density=…&seed=…` · `?durationMs=…`. Config remains the single source; logic reads only CONFIG.

**Checkpoint anchor (ALLOCATION MODEL, labeled):** the packet supplies ONE timed anchor — the 2:43 frame at 6.5 s into the segment, showing 9 of 15 letters lit. `lightStart 500` + derived per-letter `(11000−500)/15 = 700 ms` reproduces exactly 9 lit at 6500 ms (`floor(6000/700)+1 = 9`). Intermediate letter times are allocated evenly across the span; the uncertainty is the full span — no other timed anchor exists, and the model is printed as an allocation, never as measured fact. Subordinate durations are derived: per-letter interval from the span and the LIVE letter count, so a cardinality-changed text re-derives its cadence; `validateCheckpoints` flags and normalizes reordered or out-of-duration tables (clamped + re-ordered, diagnostics surfaced in state).

**Legibility price (declared):** facade glyphs are cell-blocks, not font text. Cell size at 360 px stage = `360 × 0.38 / 40 = 3.42 px` per glyph cell (≥3 px floor, asserted in the swap test); a specimen letter spans ~8–9 cells, so a glyph reads ~29 px tall at phone width. Marquee font = `max(11, min(24, stageW × 0.034))` → **12.2 px at 360 px** (≥11 px floor, asserted).

### Construction choice

**Canvas skyline + runtime-sampled facade grid (chosen):** one canvas draws the purple-gradient sky, seeded neighbor towers in two parallax layers, and the hero tower. The hero facade is a 40×48 window-cell grid; which cells form letters is decided by RUNTIME SAMPLING — the CONFIG facade lines are drawn to an offscreen canvas (auto-fit if the widest line overflows), its alpha mask is read back, and each grid cell is assigned to the letter whose char-band contains the cell centre (the T15 precedent, Amendment A1.2). Letters light in reading order from the checkpoint table; unlit cells render as dim facade windows, lit cells as glowing blocks over a glow pad. The orbit is a sinusoidal parallax drift (far/mid/hero factors from CONFIG) — no camera transform of the facade itself, so the grid never distorts. The base marquee types the CONFIG marquee text fast and holds. One rAF clock; play/pause/restart by postMessage from the comparison.

Rejected alternatives:
- Hand-placed letter cells traced from the evidence frame — REJECTED: refusal-class tracing (§6.1) and not parameterized; a different title would need a new trace.
- DOM divs per facade cell (1,920 nodes) — REJECTED: canvas draws the same grid in one pass and keeps the sampling mask and the render in one coordinate system; DOM would also make the node logic test heavier for no fidelity gain.
- Font text drawn directly on the facade (fillText as the "windows") — REJECTED: the technique IS letters made of discrete lit windows; smooth font glyphs lose the cell-block read that makes it architecture.
- Video/frame-sequence of the specimen — REJECTED: refusal-class (§6.1); original appears only as the labeled comparison side.

### Execute checklist
- [x] Segment cut 2:36.5–2:50.5 → `segment.mp4` (scale 960 wide, libx264, faststart, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, canvas skyline + sampled facade grid + checkpoint-tabled letter lighting + marquee, loops, URL overrides, zero external references.
- [x] `comparison.html`: ORIGINAL + RECREATION labeled exactly per charge, shared play/pause/restart/swap controls, phone stacking (flex-wrap, min panel width, ≥48 px buttons).

### Verify checklist
- [x] Purity grep on recreation.html: `segment\.mp4|source\.mp4|t163|<video|<img|specimen|\.jpg|\.png|https?://|url\(` → 0 hits.
- [x] Node logic swap test: extract the inline script; run defaults + swap (facade lines + marquee texts, lightComplete checkpoint, cellLit palette) + cardinality-longer text + reordered/out-of-duration checkpoint adversarial cases; assert anchor state, sampling regeneration, derived cadence, checkpoint normalization, legibility floors, RNG determinism.
- [x] Config-census v2: hex/rgba/clamp literals outside CONFIG counted → 0.
- [x] `node --check` on the extracted inline script.
- [x] Comparison check: labels verbatim, both sides present, controls wired to video + iframe postMessage, durations matched (14 s = 14 s).
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced, from Waves 3–4)
- **Reusability config leaks (Wave 4's stuck lens):** shaping literals outside CONFIG sank reusability fleet-wide — cured BY CONSTRUCTION here: palette, geometry %, cell/neighbor inset factors, glow, edge, sample inputs and font bounds all live in CONFIG; census v2 counts hex/rgba/clamp outside CONFIG = 0 (below).
- **Checkpoint incoherence:** overrides or cardinality changes that reorder/overflow the table — cured by `validateCheckpoints` (flag + normalize + diagnostics in state) and derived per-letter cadence; adversarial cases asserted in the swap test before the wave.
- **Phone legibility (Waves 2–4's other stuck lens):** cell-blocks can shrink below readability — priced in Plan (3.42 px/cell at 360 px, ~29 px glyph height; marquee 12.2 px) and asserted mechanically.
- **Fitting limits:** a longer facade line could clip at the sample stage — the sampler auto-fits its font to the sample width, and a 23-letter cardinality case is asserted to still sample and complete.
- **Anchor sparsity:** one timed anchor for fifteen letter events — the allocation model is labeled with its uncertainty; the timing lens is charged to judge the anchor consistency, not invented intermediate times.
- **Render-proof limitation:** no Chrome binary in this seat (fleet precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 156.5 -i source.mp4 -t 14 -vf scale=960:-2 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 14.000 s, 4,124,123 bytes. Window 2:36.5–2:50.5 covers the 2:37–2:50 technique window with ±0.5 s handles.
- `recreation.html` (15,881 bytes): CONFIG at top; canvas night skyline (8 seeded neighbor towers, two parallax layers); hero facade 40×48 window grid whose letter cells come from runtime sampling of the CONFIG text; checkpoint-tabled letter-by-letter lighting reproducing the 6.5 s anchor state (9/15); sinusoidal orbit drift; base marquee typed from CONFIG; 14 s loop; postMessage play/pause/restart; URL overrides.
- `comparison.html` (4,537 bytes): labels "ORIGINAL — Look What I Can Do (P1) @ 2:37–2:50" / "RECREATION — T20 building-as-display typography, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300 px (phone stacking); buttons min-height 48 px.

## §5 Self-verify (own checks, before Codex) — legs 1–3
- **Leg 1 — Swap test (own, mechanical): PASS 36/36** (node harness, stubbed canvas document, real script extracted from recreation.html; `node --check` PASS first).
  Defaults asserted: duration 14000; lines LOOK/WHAT/I CAN DO! = 15 letters; checkpoints valid; derived per-letter 700 ms; 0 lit at 0 and 499 ms, 1 at lightStart 500; **ANCHOR: exactly 9 lit at 6500 ms** (the 2:43 frame state); all 15 at lightComplete 11000 and held at 13999 (phase "hold"); phase "lighting" at the anchor; marquee complete at 6500 (frame-evidenced) and empty at 0; runtime sampling yields >100 facade cells with **every one of the 15 letters owning ≥1 cell**; glyph cell 3.42 px at 360 px stage (≥3 floor); marquee font 12.2 px at 360 px (≥11 floor); seeded RNG deterministic across instances.
  Swap (`lines=WE|ARE ONE`, `marquee=WE ARE ONE!`, `lightComplete=8000`, `cellLit=#aef7ff`): letter count re-derived 15 → 8; per-letter re-derived to 937.5 ms; 7 lit at 6500, all 8 at the new checkpoint 8000; sampling regenerates for the new words (every swapped letter owns cells); the palette swap flows to the render color end-to-end while defaults stay intact. Cardinality-longer case (`ABCDEFGHIJ/KLMNOPQRST/UVW`, 23 letters): cadence re-derives, all 23 complete at the checkpoint, sampling still yields cells. Adversarial checkpoints: reordered `{9000, 2000}` is flagged, normalized to `{2000, 9000}`, state stays monotonic across the loop and the diagnostic surfaces in state; out-of-duration `lightComplete=99999` is flagged and clamped to the duration. The technique survives different words + a changed checkpoint + a palette change + adversarial tables — swap PASS, Codex wave may fire.
- **Leg 2 — Construction purity (own, mechanical): PASS.** Grep `segment\.mp4|source\.mp4|t163|<video|<img|specimen|\.jpg|\.png|https?://|url\(` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — skyline, towers, facade grid and marquee are canvas code; letterforms are runtime-sampled from CONFIG strings; fonts are the system Arial stack. **Config-census v2:** hex literals outside CONFIG **0** · rgba outside CONFIG **0** · clamp outside CONFIG **0** — every palette value, geometry %, duration, grid dimension, sample input and font bound lives in CONFIG (incl. the `geom` factors and sampler mask/fit/alpha keys); remaining literals outside CONFIG are structural math constants (0, 1, 2, cell-centre 0.5, π). The original appears only as `segment.mp4` in comparison.html, labeled ORIGINAL.
- **Leg 3 — Comparison check (own): PASS.** Labels verbatim per charge; both sides present at matched 16:9; Play/Pause/Restart post the matching command to the recreation in the same click as the video action; Swap button reloads the recreation with the recorded swap values; recreation loop (14 s) matches the segment length (14 s); phone stacking via flex-wrap + min-300 px panels and ≥48 px buttons.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; fleet precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).
- Leg 4 (Codex five-lens wave) + leg 5 (consolidation) are recorded in `scores.md` with returns under `codex/`.
