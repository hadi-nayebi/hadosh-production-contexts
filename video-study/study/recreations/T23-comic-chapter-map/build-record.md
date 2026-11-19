# T23 — Comic Chapter-Map Motif · BUILD RECORD

Technique: T23 (packet P1, "Look What I Can Do" @aditazzz.music) · Recreation Cycle 005, Wave 3 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T23-comic-chapter-map/`
Consumer: series design · openings — a recurring chapter-map / progress-tracker surface for serialized shorts (DLC / multilingual lane): between acts, the map flashes, shows how far the series has come, and dives into the next chapter.

## §1 Observe (viewed firsthand, this run)

- TECHNIQUES.md T23 + digest.md T23: between acts a storyboard grid flashes — header 'ADITAZZZ — A COMIC OF EVERYTHING WE MADE — ISSUE #1', numbered panels naming scenes (03 SHIP IT, 04 THE COMMENTS, 07 THE DAILY STANDUP, 09 THE SEERESS, 10 I KNEW IT, 11 PLEASE HOLD, 12 USAGE LIMIT); later appearances show more panels filled; the map is a series progress tracker.
- Evidence frames named by the catalogue — VIEWED, with discrepancies recorded:
  - `ev/t132.jpg` (filed as "t=2:12 — chapter map, later panels"): actually shows the keynote chat scene (Marcus/Priya/Ted messages), NOT the map. The map flash at that act sits at ≈2:16, after this frame's moment.
  - `ev/t171.jpg` (filed as "t=2:51 — panels 11-12"): actually shows the neon tower scene. The map at 2:51 is real but this frame catches the scene before it.
  - `ev/t172.jpg` (not named for T23): DOES show the map — camera zoomed onto panel "12 · USAGE LIMIT" with its yellow tab, black border, cream page around it.
- Source probed directly (ffmpeg frame sheets at 0.5 s steps + hi-res stills at 67.7 / 122.6 / 136.5 / 171.6 s; source 1916×1078, 30 fps, 198.41 s):
  - Map appearance ≈122.5–123.5 s: grid, then camera already diving toward panel 07 (hi-res 122.6: yellow tab "07 · THE DAILY STANDUP" in heavy condensed black capitals, overlapping the panel's top-left corner, thick black panel border, cream page `#e9e5d6`-family).
  - Map appearance ≈136.0–136.9 s (the "2:12" appearance of the charge — digest timestamps run ≈4 s early here): near-full grid, 4 columns × 3 rows; visible tabs: 05 · IN THE WALLS, 06 · THE SWARM, 07 · THE DAILY STANDUP, 08 · THE KEYNOTE, 09 · THE SEERESS, 10 · I KNEW IT, 11 · PLEASE HOLD, 12 · USAGE LIMIT. Every panel carries a miniature of its scene; tabs sit ON the panel's top edge, left-aligned, yellow with black border.
  - Map appearance ≈171.4–172.5 s: grid again (tabs 11 · PLEASE HOLD, 12 · USAGE LIMIT legible), then the camera dives into panel 12 and the bench scene plays — the dive target is the chapter about to play.
  - The header line named in the digest is not legible in any hi-res frame viewed (the camera crops the page top in every appearance); it is carried as config text on the digest's authority, exactly as T08 carried its second phrase.
  - Panel titles 01/02 are not legible in any frame viewed; defaults "THE TERMINAL" / "THE WALL" are PLACEHOLDER config values (their scenes are the terminal dialogue and the tile wall), flagged here, swappable like all panel data.
- Sub-beats: (a) preceding scene; (b) HARD flash/cut to the comic page (grid + header), framing varies (full page or cropped-zoomed); (c) brief hold, under ~1 s in the specimen; (d) camera zoom-dives into the next chapter's panel; (e) that panel's scene takes over full-frame. The recreation lengthens the dwell (config `dwellMs` 1500) so the map can actually be read as a tracker — a deliberate, config-level deviation, priced in Plan.
- Variables (§1.3): header text · panel count · per-panel number + title · per-panel miniature art kind · filled-count per appearance · appearance count/order · dive target per appearance · dwell · dive duration/scale · zoom hold · loop pause · columns (wide/narrow) · panel aspect · gap · border weight · palette (paper, ink, tab yellow, dim tab, empty face, accent) · label font size + fit floor.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT in this seat; the five-lens scoring wave (§5 leg 4) is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `headerText` | string | `ADITAZZZ — A COMIC OF EVERYTHING WE MADE — ISSUE #1` | page header strip (digest authority) |
| `panels[]` | {n, title, art}[] | 12 panels; titles per §1 (01/02 placeholders) | the chapter list — pure config data |
| `appearances[]` | {filled, dive}[] | `[{4,4},{8,8},{12,11}]` | appearance N fills panels up to `filled`; camera dives into panel `dive` |
| `dwellMs` | number | `1500` | grid hold per appearance (specimen flash ≈<1000; lengthened for tracker readability — see failure points) |
| `diveMs` / `diveScale` | number | `650` / `3.1` | zoom-dive duration / factor |
| `holdZoomMs` / `loopPauseMs` | number | `350` / `400` | full-zoom hold; dark beat between appearances |
| `colsWide` / `colsNarrow` / `narrowBreakpointPx` | number | `4` / `3` / `520` | phone re-flow: 3 columns below 520 px stage so tabs stay legible |
| `panelAspect` / `gapPx` / `borderPx` | number | `1.55` / `10` / `4` | panel geometry |
| `palette` | object | paper `#e9e5d6`, ink `#141414`, tab `#ffd21f`, tabDim `#b9b091`, empty `#d9d3bf`, accent `#e2483d`, dark `#20201c` | all color from config |
| `labelFontPx` / `minLabelFontPx` | number | `15` / `9` | tab label size at 960 px stage; measured-fit floor |

URL overrides (swap test + reuse): `?panels=A|B|…&filled=7&dwellMs=900&tab=%23ff9f1c&paper=…&header=…` — parsed at load; the config object remains the single source.

### Construction choice

**DOM grid + generated inline-SVG miniatures (chosen):** the page is a DOM grid; each panel's miniature is an inline SVG string built by a pure function from the panel's config `art` kind — simple shapes and typography only (terminal lines, tile grid, node graph, spotlight cone, tower windows, receipt card…). Nothing is traced or embedded from the specimen. The sequence engine walks a pure timeline (dwell → dive → hold → pause per appearance); the dive is a CSS transform scale on the whole page wrapper with its origin computed from the dive panel's measured center. Tab labels use measured shrink-to-fit (real `scrollWidth` in the browser; a 0.52 em/glyph approximation in the pure helper) with a 9 px floor — shrink, never clip. Below the 520 px breakpoint the grid re-flows to 3 columns × 4 rows and the label base size is boosted ×1.25, because 4 columns at 360 px gives ≈84 px panels whose tabs cannot stay legible.

Rejected alternatives:
- Canvas rendering of the page — REJECTED: the technique is typographic/layout; DOM gives real text measurement for the label fit and free re-flow at phone widths.
- CSS-keyframe-only sequence — REJECTED: appearance data (filled counts, dive targets) is config; a JS timeline built from config is the parameterized form, keyframes would hardcode the sequence.
- Photographic / frame-grab panel miniatures — REJECTED: refusal-class (§6.1); miniatures are code-drawn glyphs of scene *kinds*, not copies of frames.
- Fixed 4×3 grid at all widths — REJECTED: fails the phone readability trap named in the charge (≈84 px panels, clipped tabs).
- Literal specimen dwell (≈0.5–1 s) — REJECTED as default: at that dwell the 12-panel map is a flash, unreadable as the progress tracker the consumer (series openings) needs; kept reachable via `dwellMs` config.

### Execute checklist
- [x] Segment cut: source 130–137 s (2:10–2:17, the charged window; flash verified inside at ≈136–136.9 s) → `segment.mp4`, re-encoded h264 960×540, faststart, no audio, ffprobe-verified 7.000 s.
- [x] `recreation.html` — one self-contained file, CONFIG at top, DOM grid + SVG miniatures, no captions/subtitles (header + tab titles ARE the technique's subject text).
- [x] `comparison.html` — labeled sides, ONE sync control set (postMessage play/pause/restart + swap reload), phone stacking via flex-wrap + 560 px breakpoint.
- [x] Self-verify legs 1–3 (§5) before any Codex run.

### Verify checklist
- Swap test: altered titles (12 new) + filled 7 + dwellMs 900 (timing) + tab `#ff9f1c` (palette), via `resolveConfig` in node — exact values + result in §5.
- Purity: grep recreation.html for `segment.mp4`, `source.mp4`, `<video`, `<img`, frame names, image extensions — 0 hits required; asset inventory = the file itself only.
- Syntax: extracted script through `node --check`.
- Label fit: pure-helper check at phone geometry (360 px stage, 3 cols, ≈96 px tab) for all 12 swapped titles + DOM measured fit in the build.
- Comparison check: labels, control wiring, stacking rule — read + logic inspection (no Chrome binary in this seat; pixel render unexercisable, printed as a limitation).
- Five-lens Codex wave (§5 leg 4): motion · timing · purity · reusability · readability, separate runs, verbatim returns in `codex/`.

### Failure-point evaluation (priced from this job's record)
- **Phone readability (the named trap):** 12 panels at 360 px — mitigated by construction (3-col re-flow + measured label fit with floor); residual risk: floor 9 px is small; the readability lens prices it.
- **Flash-vs-tracker tension:** specimen dwell <1 s vs consumer needing a readable tracker — dwell is config; default 1500 ms is a priced deviation, named for the timing lens.
- **Zoom-origin drift:** dive origin is measured from live layout (getBoundingClientRect at dive start); a resize mid-dive could misalign — accepted, restart re-renders.
- **Placeholder titles 01/02:** unverified against the specimen; config data, flagged in §1 — a fidelity gap the motion/timing lenses cannot see; printed here instead.
- **Render-proof limitation:** no Chrome in this seat — phone rendering is verified by geometry arithmetic + the pure fit helper, not by screenshot; same limitation as T08 attempt 1.

### Plateau pricing (Amendment A2)
First attempt — no prior score. Family note: DOM/config builds in this lane (T08) averaged 88.6; the stuck-lens hypothesis for a grid build is readability at phone width.

- Guards at Plan: jev-plan-exit / codex-plan-review — SKIPPED-WITH-REASON (BUILT-NOT-FIRED / UNBUILT in this seat; five-lens wave is the armed gate).

## §3 Execute

Built per the checklist above. One Execute-round fix: appearance 2's dive target corrected 6 → 8 (the dive target is the *next* chapter = panel index `filled`; appearance 1 (4→4) and the swap case (7→7) already obeyed it; appearance 3 dives 11, the final panel, since no 13th exists). Segment cut window: source 130.0–137.0 s exactly (7.000 s), containing the ≈136 s map flash at its tail — the charged 2:10–2:17 window, verified against the frame sheets rather than assumed.

## §5 Verify — legs 1–3 (own, before Codex)

1. **Swap test — PASS (logic level, node).** Default: 12 panels, appearances [{4,4},{8,8},{12,11}] (dive corrected), timeline total 8700 ms. Swapped via `resolveConfig("?panels=OPENING DAY|FIRST SALE|THE INBOX|RIVALS|THE PIVOT|NIGHT SHIFT|THE DEMO|FEEDBACK|THE LEAK|VERDICT|INTERMISSION|FINALE&filled=7&dwellMs=900&tab=%23ff9f1c")`: titles land by position (panels[6]="THE DEMO", panels[11]="FINALE"); filled count computed from `panelState` = exactly 7; dive = panel index 7 (the next chapter, correctly unfilled); dwell 900 → single-appearance timeline 2300 ms (= 900+650+350+400, arithmetic checks); palette tab = `#ff9f1c`. Label fit: pure helper at phone geometry (96 px tab avail) — all 12 swapped titles fit above the 9 px floor (no NOFIT lines). The comparison's Swap button carries the same override string for the browser-level check.
2. **Construction purity — PASS.** Grep of recreation.html: `segment.mp4` 0 · `source.mp4` 0 · `<video` 0 · `<img` 0 · `t132`/`t171` 0 · source-slug 0 · `.jpg`/`.png` 0. Asset inventory: recreation.html loads NOTHING external — all art is inline SVG generated from config; comparison.html alone references segment.mp4 (the labeled ORIGINAL side, lawful).
3. **Comparison check — PASS (read/logic).** Labels exactly "ORIGINAL — “Look What I Can Do” @ 2:12" / "RECREATION — T23 Comic chapter-map motif, parameterized"; one control set drives video + iframe via postMessage (play/pause/restart/swap); panels stack at ≤560 px; controls precede the panels and stay reachable. Durations: segment 7.000 s vs recreation cycle 8.7 s — not frame-locked; the sync claim is shared-start, printed on the face.
- Syntax: extracted `<script>` passes `node --check`.
- Pre-wave Jev gate (jev-prewave): SKIPPED-WITH-REASON — UNBUILT in this seat; legs 1–3 above are its evidence base, the five-lens wave is the armed gate.
- Pixel render: not exercisable from this seat (no Chrome binary) — limitation printed, as in T08.

## Faithfulness trace (§7, condensed for a per-item record)

| § | State |
|---|---|
| §1 Observe | DONE — catalogue + frames + source frame-sheets viewed firsthand; discrepancies (ev frame labels, header authority, 01/02 titles, ≈4 s timestamp drift) recorded in §1 |
| §2 Plan | DONE — parameter table, construction + 5 rejected alternatives, checklists, failure points, plateau priced |
| §3 Execute | DONE — segment + recreation + comparison on disk; one dive-target fix |
| §5 Verify | legs 1–3 DONE (above); leg 4 five-lens wave filed in `codex/`; leg 5 consolidation in `scores.md` |
| §6 Guards | purity refusal-class: PASS (leg 2); no captions/subtitles: PASS (only technique-subject text); tier honesty: verdict in scores.md only |
| Choice log | DOM grid over canvas; JS timeline over CSS keyframes; 3-col phone re-flow over fixed 4×3; dwell 1500 over literal <1000 — each with its rejected alternative in §2 |
| Deviation register | dwell lengthened vs specimen (config, priced in §2); digest timestamps ≈4 s early at the 2:12 appearance (segment window verified by frame sheet); ev/t132 + ev/t171 labels do not match their contents (recorded §1) |
| Evidence binding | segment.mp4 ffprobe: h264 960×540, 7.000 s, 944732 bytes · recreation.html 16110 bytes at build (pre dive-fix edit) · source ffprobe: 1916×1078, 198.41 s |
| Git corroboration | UNCORROBORATED-BY-LOCAL-GIT (lane sync extension pending, per INSTRUCTION §7) |
