# T04 — Waveform + Step Sequencer · BUILD RECORD

Technique: T04 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 005 Wave 3 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T04-waveform-step-sequencer/`
Consumer: diagram / music surfaces — production containers that show a song or beat visualizing itself (waveform-as-progress for music explainers; sequencer grid as the beat surface later pop-ins synchronize to).

## §1 Observe (viewed firsthand, this run)

- TECHNIQUES.md T04: "the song's own waveform fills orange behind a sweeping playhead; sequencer cells light on the beat." Feeds: diagram · transition — P1 @ 0:21–0:29 — ev/t23.jpg, ev/t27.jpg.
- digest.md T04: "A DAW-style panel shows the song's own waveform as vertical bars — the played portion in orange, the unplayed in grey — with a playhead sweeping across; beside/under it a step-sequencer grid lights its cells in time with the beat." Why it works: the music visualizes itself; the waveform doubles as a progress bar (viewer sees how much song is left, quietly holding retention); the sequencer gives the beat a visible grid to land on.
- Evidence viewed firsthand this run:
  - `ev/t23.jpg` (0:23): two DAW panels right-of-frame on near-black. Left panel titled "agent-1 look_what_i_can_do.wav": vertical waveform bars, left ~55% orange, right portion grey, a thin green vertical playhead at the orange/grey boundary. Right panel titled "agent-2 beat.mid": a piano-roll/step grid — horizontal lane lines, scattered dim-green square cells, an orange vertical playhead near the left, and one BRIGHT green cell exactly at the playhead's column/row (the live step reads brighter than idle cells).
  - `ev/t27.jpg` (0:27): the same two panels, now the top row of a pop-in collage. Waveform ~50% orange with green playhead at the boundary; sequencer cells scattered across lanes with the orange playhead at the left columns. The panels' internal state (fill fraction, lit column) has advanced with the song — the panels are clocks, not pictures.
- Source: `source.mp4` 1916×1078, 30 fps, 198.41 s (ffprobe). Segment window for the cut: 0:20.5–0:29.5 (±0.5 s handles around the 0:21–0:29 technique window).
- Sub-beats: (a) playhead sweeps continuously left→right across the waveform; bars flip grey→orange as the playhead passes them (fill = progress); (b) at each beat, the sequencer's live column advances one step and its pattern cell(s) flare bright against the dim idle cells; (c) at the window's end the song continues — both panels are excerpts of a longer-running clock, so the recreation loops its 8 s window.
- Variables (§1.3): waveform bar count · bar-height shape (seed) · played/unplayed palette · playhead color · duration · beat timing (BPM / explicit beat checkpoints) · panel titles · sequencer rows · sequencer columns · sequencer pattern (which cells exist) · idle/active cell palette · background/panel colors.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT per guards.md in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `durationMs` | number | `8000` | technique window length (0:21–0:29) |
| `bpm` | number | `120` | beat rate the checkpoint table is built from |
| `beatTimesMs` | number[] | `[0,500,…,7500]` (16 checkpoints) | CHECKPOINT table: the sequencer step at time t = last checkpoint ≤ t |
| `barCount` | number | `64` | waveform bars |
| `seed` | number | `1234` | seeded RNG for bar heights (deterministic shape) |
| `minBarPct` | number | `14` | bar height floor (% of panel) |
| `playedColor` | string | `#f59a3c` | orange — played portion |
| `unplayedColor` | string | `#8a8f98` | grey — unplayed portion |
| `playheadColor` | string | `#3ddc84` | waveform playhead line |
| `seqHeadColor` | string | `#f59a3c` | sequencer playhead line |
| `cellColor` | string | `#5b8f63` | idle pattern cell (dim green) |
| `activeCellColor` | string | `#7dff9a` | pattern cell in the live column (bright) |
| `activeEmptyColor` | string | `#2c3a2e` | empty cell in the live column (faint wash) |
| `waveTitle` / `seqTitle` | string | `agent-1 look_what_i_can_do.wav` / `agent-2 beat.mid` | panel headers |
| `seqRows` / `seqCols` | number | `5` / `16` | sequencer grid dimensions (16 cols = 16 beat checkpoints) |
| `seqPattern` | [row,col][] | 11 cells (see source) | which grid cells hold notes |

URL overrides (swap test + reuse): `?beatMs=667` or `?bpm=90` (checkpoint table REBUILDS from duration) · `?played=…&unplayed=…&playhead=…&cell=…&activeCell=…` · `?bars=…&seed=…` · `?seqRows=…&seqCols=…&pattern=r.c;r.c;…` · `?durationMs=…` · titles. Config remains the single source; logic reads only CONFIG.

### Construction choice

**DOM bars + DOM grid, checkpoint-priced state (chosen):** waveform = `barCount` flex divs whose heights come from a seeded RNG (mulberry32) shaped by a phrase-arc envelope; a pure `computeState(tMs, CONFIG)` maps time → {progress, playedBars, step} where **step is decided by the beatTimesMs checkpoint table** (last checkpoint ≤ t), never by an assumed frame cadence. Render flips bar colors at the played boundary, positions both playheads by % (computed fit — panel sizes are %/flex, no fixed pixel widths), and re-lights the sequencer only when the step changes. One rAF clock drives it; play/pause/restart arrive by postMessage from the comparison.

Rejected alternatives:
- Canvas waveform + canvas grid — REJECTED: DOM bars/cells keep every element's color state directly inspectable (the node swap test asserts exact colors per bar/cell) and the grid layout is CSS-computed, which makes the 360 px fit a layout property rather than a redraw problem.
- One global cadence (`step = floor(t / 500)`) — REJECTED per the charge: timing must be checkpoint-priced; an explicit checkpoint table carries irregular beat maps (rubato, edited grids) that a cadence formula cannot express.
- Audio analysis of the specimen to extract real bar heights — REJECTED: binds the recreation to the specimen's audio (purity risk) and the technique is the *form* (seeded shape + fill), not this song's samples.
- SVG rects for bars/cells — REJECTED: equivalent purity, weaker layout fit story at phone width than flex/grid with % sizing.
- Video/frame-sequence of the specimen — REJECTED: refusal-class (§6.1); original appears only as the labeled comparison side.

### Execute checklist
- [x] Segment cut 0:20.5–0:29.5 → `segment.mp4` (scale 960 wide, libx264, faststart, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, seeded DOM waveform + playhead, checkpoint-tabled sequencer, loops, URL overrides, zero external references.
- [x] `comparison.html`: ORIGINAL + RECREATION labeled exactly, shared play/pause/restart/swap controls, phone stacking (flex-wrap, min panel width, ≥48 px buttons).

### Verify checklist
- [x] Purity grep on recreation.html: `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` → 0 hits.
- [x] Node logic swap test: extract the inline script; run defaults + swap (`beatMs=667`, played palette change, `seqRows=4`, new pattern); assert checkpoint counts, step-at-time, per-bar colors, per-cell colors.
- [x] `node --check` on the extracted inline script.
- [x] Comparison check: labels verbatim, both sides present, controls wired to video + iframe postMessage.
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced)
- **Checkpoint vs cadence drift (primary):** if the sequencer step were derived from a global cadence, a swapped beat map would silently desync from the checkpoint table — cured BY CONSTRUCTION: `computeState` reads only `CONFIG.beatTimesMs`; the swap test rebuilds the table at 667 ms and asserts step-at-time against it.
- **Fill/playhead mismatch:** bars colored by count while the playhead sits by % could disagree at panel edges — bounded: `playedBars = floor(progress × barCount)`, and the playhead % and the bar boundary share the same progress value; residual sub-bar offset is at most one bar width (1/64 of the panel).
- **Phone fit:** two panels side-by-side at 360 px would crush the sequencer cells — cured by computed layout: panels are flex fractions with `min-width:0`, titles clamp/shrink, and at ≤520 px the stage stacks the panels vertically; no fixed pixel widths anywhere in the recreation.
- **Cell legibility:** idle cells vs the live column must separate at a glance (the specimen's bright-cell-at-playhead read) — `activeCellColor` is a distinct bright green, empty live-column cells get only a faint wash so pattern cells own the flare.
- **Render-proof limitation:** no Chrome binary in this seat (fleet precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 20.5 -i source.mp4 -t 9 -vf scale=960:-2 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 9.000 s, 699,581 bytes. Window 0:20.5–0:29.5 covers the 0:21–0:29 technique window with ±0.5 s handles.
- `recreation.html` (9,319 bytes): CONFIG at top; seeded DOM waveform (64 bars) + % playhead; DOM sequencer grid 5×16 with pattern set; `computeState` checkpoint logic; rAF clock; postMessage play/pause/restart; ≤520 px vertical stacking.
- `comparison.html` (4,224 bytes): labels "ORIGINAL — Look What I Can Do (P1) @ 0:21–0:29" / "RECREATION — T04 Waveform + step sequencer, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300 px (phone stacking); buttons min-height 48 px.
- Execute fix (same round): the first purity grep hit a comment naming the evidence-frame filenames — the comment was reworded so the recreation carries zero specimen-media references of any kind, filenames included. Re-grep: 0 hits.

## §5 Self-verify (own checks, before Codex) — legs 1–3
- **Leg 1 — Swap test (own, mechanical): PASS 20/20** (node harness, stubbed DOM, real script extracted from recreation.html; `node --check` PASS first).
  Defaults asserted: 64 bars; 16 checkpoints at 500 ms; deterministic heights (same seed → same shape, different seed → different shape); step at 2600 ms = 5, at 7999 ms = 15; playedBars at 4000 ms = 32; loop wraps at 8000 ms; after render(4000) bar 0 = `#f59a3c` (played) and bar 63 = `#8a8f98` (unplayed); grid built 5 rows × 16 cols; at step 0 the pattern cell [2,0] renders `#7dff9a` (active) while off-step pattern cell [0,6] renders `#5b8f63` (idle).
  Swap (`?beatMs=667&played=%2337c8ff&seqRows=4&pattern=0.0;1.3;2.5;3.7;0.11;2.14`): checkpoint table rebuilt — 12 checkpoints, checkpoint[2] = 1334 ms; step at 1400 ms = 2 (checkpoint-priced, not cadence); rows = 4; pattern set carries the new cells and not the specimen's; played bars render `#37c8ff`; at step 3 the pattern cell [1,3] renders active `#7dff9a`; at step 2 an empty live-column cell renders the faint wash `#2c3a2e`. The technique survives a different beat timing + a palette change + a pattern/rows change — swap PASS, Codex wave may fire.
- **Leg 2 — Construction purity (own, mechanical): PASS.** Grep `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — waveform heights are seeded code, the grid is DOM, fonts are the system monospace stack; every loaded asset is code written by this build. The original appears only as `segment.mp4` in comparison.html, labeled ORIGINAL.
- **Leg 3 — Comparison check (own): PASS.** Labels verbatim per charge; both sides present at matched 16:9; Play/Pause/Restart post the matching command to the recreation in the same click as the video action; Swap button reloads the recreation with the recorded swap values; recreation loop (8 s, the technique window) runs inside the segment's 9 s loop; phone stacking via flex-wrap + min-300 px panels and ≥48 px buttons.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; fleet precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).
- Leg 4 (Codex five-lens wave) + leg 5 (consolidation) are recorded in `scores.md` with returns under `codex/`.
