# T06 — Multiplying Tile Wall · BUILD RECORD

Technique: T06 (packet P1, "Look What I Can Do" @aditazzz.music) · recreation Cycle 004 Wave 2 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T06-multiplying-tile-wall/`
Consumer: transitions · accumulation visual — a growth/accumulation beat for production containers (DLC/multilingual lane): a wall that visibly multiplies under a legible counter.

## §1 Observe (viewed firsthand, this run)

- TECHNIQUES.md T06: "tile grid grows in waves under a climbing counter badge (1 → 5 → 11 → 24)." Feeds: transition — P1 @ 0:31–0:53 — ev/t31.jpg, ev/t47.jpg.
- digest.md T06: a wall of small video tiles grows in rounds; counter badge starts at '1 things last night' and climbs (5, 11, …) as each sung 'I made…' line lands and new tiles arrive; later the same device becomes a video-call wall whose participant counter climbs as tiles subdivide the frame (24 in this meeting by t=0:47, with four hero tiles in front). Tiles arrive in waves, not all at once. Why it works: the counter badge makes exponential growth legible at a glance.
- Evidence viewed firsthand this run:
  - `ev/t31.jpg` (0:31): left side carries a GIANT amber numeral '1' over the words 'things last night'; right ~57% of frame is a grid of ~8 video tiles (waveform, pixel, clip thumbnails with agent-file name tags); a lyric list types below-left (the lyric list is a neighbouring technique's surface — T06's subject is the wall + counter, not the lyrics).
  - `ev/t47.jpg` (0:47): the device re-formed as a video-call wall in front of a city screen: badge top-right reads '24 / IN THIS MEETING'; FOUR larger hero tiles stand in front (2×2, bottom-right), each a small room with a figure; the background wall behind reads as a dense participant mosaic.
- Source: source.mp4 is 1916×1078, 30 fps, 198.41 s (ffprobe). Segment window 0:30.5–0:53.5 (catalogue 0:31–0:53 ±0.5 s handles).
- Sub-beats: (a) wall exists at low density with counter at 1; (b) discrete growth ROUNDS — each sung line lands a new wave of tiles and the counter steps (5, 11, …), never a continuous trickle; (c) device re-forms as a call wall; participant counter climbs by subdivision to 24; (d) four hero tiles sit IN FRONT of the wall at the 24 checkpoint.
- Variables (§1.3): wave schedule (per-wave time, tile count, counter value) · counter label templates (both phases) · phase-2 switch time · hero-tile count/size/timing · tile content (seeds, palette, names, motifs) · grid geometry · entrance duration/stagger · background · counter color.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON per wave RUN.md: phase guards are BUILT-NOT-FIRED / UNBUILT in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default | Role |
|---|---|---|---|
| `durationMs` | number | `23000` | segment window length |
| `waves` | array | 8 entries (see below) | per-wave `{timeMs, phase, tileCount, counterValue}` — tile count and counter are INDEPENDENT keys (counter counts things/participants, not tiles) |
| `phase2StartMs` | number | `13500` | wall re-forms as call wall (model allocation) |
| `counterLabel1` | string | `"things last night"` | phase-1 badge suffix |
| `counterLabel2` | string | `"IN THIS MEETING"` | phase-2 badge label |
| `waveEntranceMs` | number | `380` | per-wave arrival animation |
| `tileStaggerMs` | number | `45` | stagger inside one wave |
| `heroTileCount` | number | `4` | hero tiles in front, phase 2 |
| `heroAppearMs` | number | `16500` | heroes land with the 24 checkpoint |
| `tileSeed` | number | `1234` | deterministic tile-content seed |
| `palette` | string[] | 10 colors | tile gradient palette |
| `tileNames` / `heroNames` | string[] | specimen-flavoured stand-ins | tile tags / hero names (abstract stand-ins, invented, not traced) |
| `bg` / `counterColor` | string | `#05070a` / `#e8a33d` | frame bg / phase-1 numeral color |

### Wave schedule — checkpoint-priced timing
Measured checkpoints from the record: **counter 1 @ 500 ms** (= 0:31 in source) and **counter 24 @ 16500 ms** (= 0:47). Intermediate rounds are a LABELED ALLOCATION MODEL between them: phase 1 waves at 500/3000/5500/8000/10500 ms with counters 1/5/11/16/21 (5 and 11 are digest-attested; 16 and 21 interpolated) and tile counts 8/12/18/24/32 (8 ≈ the t31 frame's visible grid); phase 2 waves at 13500/15000/16500 ms with counters 12/18/24 and tile counts 12/18/24 (subdivision to the measured 24).

### Construction choice
DOM grid + code-drawn tiles: two grid walls (phase 1 right-side wall, phase 2 full-frame wall) whose column count is recomputed per wave; every tile is a DOM element whose content (gradient pair, waveform bars / geometric blocks / orbit motif, name tag, initials) is generated deterministically from `tileSeed` by a mulberry32 PRNG. The counter badge is DOM text updated in the same `render(t)` pass that reveals the wave, so badge and tiles cannot desync. All screen state is a pure function of timeMs (`render(t)` / `stateAt(ms)`), which makes the recreation scrubbable and slaved to the comparison's video clock. Rejected alternatives: canvas tile rendering (DOM gives per-tile tags/motifs and trivial hero layering for less machinery); CSS keyframe timeline (not scrubbable, desyncs from the comparison clock); one grid morphing between phases (the specimen RE-FORMS the device — two walls model the re-formation honestly).

### Verification plan
Swap test via URL overrides + a node logic harness counting tiles/counter per wave (words/label, one timing, one palette, one counter value); purity grep (§6.1 patterns) + asset inventory; comparison sync check (recreation slaved to video currentTime via `RECREATION.setTime`); five-lens Codex wave.

### Failure points priced
- **Tile-count arithmetic:** tileCount ≠ counterValue in phase 1 (counter counts 'things', tiles are the wall) — conflating them is the natural defect; priced by keeping them separate config keys and harness-checking both at every wave.
- **Counter sync:** badge must step in the same render pass as its wave lands — priced by the pure-function-of-time construction (no independent badge timer exists to drift).
- **Fitting at max density:** phase 1 peaks at 32 tiles in a 56%-width wall — grid columns are solved per wave (near-square fit) so tiles shrink rather than overflow; phase 2 peaks at 24 + 4 heroes overlaid, heroes are positioned in front by design (occlusion is the specimen's form, not a defect).
- **Phase re-formation:** the phase-2 switch is a hard re-form (wall 1 hides, wall 2 shows) — a leftover phase-1 tile or badge would be visible; harness checks display state at t=17000.
- **Render-proof limitation:** no Chrome binary in this seat — verification is logic-level (node harness over the real source) + Codex reading, per Wave-1 precedent; no screenshot proof is claimed.

## §3 Execute
1. Segment: `ffmpeg -ss 30.5 -t 23` from source.mp4, libx264/yuv420p + AAC, faststart → `segment.mp4`. ffprobe: h264, 1916×1078, 30 fps, duration 23.000 s, 23,093,139 bytes. (First encode was killed mid-write by a session timeout and produced a moov-less file; re-encoded and re-probed clean — recorded, not hidden.)
2. `recreation.html` (13,212 bytes at build; edited once post-build to remove evidence-frame filenames from two code comments so the purity grep reads clean — no logic change, harness re-run PASS): one self-contained file, CONFIG at top, no external assets, no captions/subtitles chrome (the counter labels are the technique's subject, not captions).
3. `comparison.html` (2,816 bytes): ORIGINAL (segment.mp4) + RECREATION (iframe) side by side at matched 16:9, labels as charged, ONE control set (Play both / Pause both / Restart both) driving both, recreation slaved to the video's currentTime each animation frame, stacking vertically under 700 px with 48 px-tall controls.

## §5 Verify — own legs (BEFORE Codex)
- **Leg 1 — swap test (node harness over the real recreation.html source, DOM-stubbed):** default run — all 9 checkpoints exact (counter/tiles/phase at 500…22000 ms); render checks: t=17000 → 24 phase-2 tiles visible + heroes shown; t=6000 → 18 phase-1 tiles visible. SWAP run with altered values — `wave2Counter=99` (counter value), `counterLabel1="objects yesterday"` (words), `phase2StartMs=12000` + `waveEntranceMs=900` (timings), `palette0=#ff0000` (palette): all applied, badge renders the swapped label, state machine intact. **Result: ALL PASS.**
- **Leg 2 — purity:** grep of recreation.html for `segment.mp4|source.mp4|t31|t47|<video|<img>|.jpg|.png|http(s)://|url(` → **ZERO HITS**. Asset inventory: recreation.html loads NOTHING external; every tile is code-drawn by this build (seeded gradients + CSS motifs + invented name tags/initials); hero figures are CSS shapes (circle head + body block), not traced imagery. segment.mp4 is referenced ONLY by comparison.html as the labeled ORIGINAL side.
- **Leg 3 — comparison check:** both sides 16:9 matched; recreation clock slaved to video currentTime via rAF sync + seeked handler; labels carry specimen name + timestamps and technique name + "parameterized"; controls ≥48 px; vertical stacking under 700 px. Duration match: recreation CONFIG durationMs 23000 = segment 23.000 s.
- **Pre-wave Jev gate (jev-prewave):** SKIPPED-WITH-REASON — BUILT-NOT-FIRED/UNBUILT in this seat per INSTRUCTION arming states; the five-lens scoring wave is the armed deliverable gate and fires next.

## §5 Verify — Codex scoring wave (leg 4) + consolidation (leg 5)
Five separate Codex runs (one stream each: `cat instr-<lens>.txt recreation.html | codex exec -`), returns filed verbatim at `codex/lens-<lens>.md`, each carrying its BODY-WRITE line and exactly one SCORE line:
- Motion fidelity **66** · Timing **80** · Purity **100** · Reusability **62** · Readability **64**
- **Consolidation (mechanical):** (66+80+100+62+64)/5 = 372/5 = **74.4 average**, minimum **62** → bar (avg ≥85 AND min ≥70) NOT met → **FAIL**. Tier: IN PROGRESS; attempt 2 routes to practice.
- **Convergent finding (A1):** motion + timing + readability all name the established-tile reset at wave boundaries (entrance progress computed from the current wave's timeMs for every tile) — priced as attempt 2's primary cure in scores.md, together with the harness blind spot that let it pass leg 1 (no boundary-window sampling). Full priced gaps: scores.md.
