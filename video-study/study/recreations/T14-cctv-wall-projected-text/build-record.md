# T14 — CCTV Room + Wall-Projected Text · BUILD RECORD

Technique: T14 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 006 Wave 4 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T14-cctv-wall-projected-text/`
Consumer: openings — a found-footage room where the environment answers (the wall as second screen; the room argues with the television).

## §1 Observe (viewed firsthand, this run)

- Task-charged mechanics (digest.md T14): the scene switches to a security-camera frame ('CAM 01 LIVING RM', REC dot, running timestamp '2026-11-08 03:14:09', 'PTZ 2X'): a dark room, TV on a stand. On the TV, pixel/amber text types: 'What are your qualifications?' The answer writes itself onto the WALL in large glowing letters: 'I HAVE A SUBSCRIPTION.' The TV then types: 'To what?' Why: the found-footage frame licenses a locked-off camera + slow pace; the wall as second screen turns text into architecture.
- Evidence viewed firsthand this run:
  - `ev/t82.jpg` (1:22): full CCTV frame. Top-left 'CAM 01  LIVING RM' over the timestamp '2026-11-08  03:14:09'; top-right a red REC dot + 'REC' and 'PTZ 2X' below it. Green-grey vertically-striped wallpaper; white horizontal blinds at the left edge; the TV sits center-right on a low dark stand, its screen black with amber pixel text — a '*' prompt, then 'What are your qualifications?' in two lines — and a soft glow halo on the wall above/behind the set. The wall answer is NOT yet on the wall in this frame: the question types first, the wall writes second (phase order is part of the technique).
- Source: `source.mp4` 1916×1078, 198.41 s (task-stated). Segment window for the cut: 1:19.5–1:25.5 (±0.5 s handles around the 1:20–1:25 technique window).
- Sub-beats: (a) CCTV chrome is live from the first frame — the timestamp runs in real time; (b) the TV types its question char by char in amber; (c) the answer writes onto the wall in large glowing letters (the room replies, not the TV); (d) the TV types its follow-up 'To what?'; (e) the camera never moves — locked-off stillness is what makes the writing-on-the-wall read as an event.
- Variables (§1.3): cam label · REC/PTZ labels · timestamp base · TV prompt · TV question text · wall answer text · TV follow-up text · TV typing speed · wall write speed · phase checkpoints (question start / wall start / follow-up start) · loop duration · wallpaper/blinds/stand/TV palette · TV text color · wall text + glow colors · TV glow color · overlay color · REC color · scanline intensity · vignette intensity · blinds count · wall line wrap + fit factors.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT per guards.md in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `durationMs` | number | `6000` | segment window length (1:19.5–1:25.5) |
| `camLabel` / `recLabel` / `ptzLabel` | string | `CAM 01  LIVING RM` / `REC` / `PTZ 2X` | CCTV chrome |
| `timestampBase` | string | `2026-11-08 03:14:09` | frame-evidenced clock base; advances in real time |
| `tvPrompt` | string | `* ` | TV line prompt glyph (frame-evidenced) |
| `tvLine1` | string | `What are your qualifications?` | TV question |
| `wallText` | string | `I HAVE A SUBSCRIPTION.` | the wall's answer |
| `tvLine2` | string | `To what?` | TV follow-up |
| `tvCharMs` / `wallCharMs` | number | `55` / `65` | typing / write-on speeds |
| `checkpoints` | object | `{tvTypeStart:400, wallWriteAt:2400, tvFollowAt:4400}` | CHECKPOINT table: each phase starts at its checkpoint, never a cadence |
| `wallLineMaxChars` / `wallCharWidthFactor` / `wallMaxFontPx` | number | `13` / `0.60` / `64` | wall wrap + computed-fit inputs |
| `blindsCount` | number | `11` | blind slats |
| palette keys | string | wall `#5f7263` · shade `#46564a` · blind `#c9cfc4` · stand `#23282a` · tvBg `#050505` · tvText `#ffb347` · wallText `#ffe9a8` · wallGlow `#ffd75e` · tvGlow `#9db8a2` · overlay `#d8dde2` · rec `#e33b3b` | full palette |
| `scanlineIntensity` / `vignetteIntensity` | number | `0.16` / `0.55` | CCTV surface degradation |

URL overrides (swap test + reuse): `?q1=…&wall=…&q2=…` (texts) · `?wallAt=…&followAt=…&tvStart=…` (checkpoints) · `?tvCharMs=…&wallCharMs=…` · `?amber=…&glow=…&wallpaper=…` (palette) · `?cam=…&ts=…` · `?durationMs=…`. Config remains the single source; logic reads only CONFIG.

**Computed wall-text fit (declared):** the wall answer wraps at word boundaries into lines of ≤ `wallLineMaxChars` (13) chars → specimen lines `I HAVE A` / `SUBSCRIPTION.`, longest line 13 chars. Font size = `min(wallMaxFontPx, wallBoxWidth / (longestLine × wallCharWidthFactor))` where wallBoxWidth = 58% of stage width. At 360 px stage: box = 208.8 px → font = 208.8 / (13 × 0.60) = **26.8 px**, and 13 × 0.60 × 26.8 = 208.8 px = exactly the box width — the longest line fits by construction and reads at phone size. `fitWall()` re-derives the size on resize from the live stage width.

### Construction choice

**DOM/CSS room + checkpoint-priced text state (chosen):** the room is DOM — a gradient wallpaper wall, a flex column of blind slats at the left, a bordered TV box on a stand div with a blurred glow halo behind it, and CCTV chrome as positioned text. A pure `computeState(tMs, CONFIG)` maps time → {tv1Chars, wallChars, tv2Chars, phase, timestamp} where every count is decided by the `checkpoints` table (typed chars = floor((t − checkpoint)/speed) + 1, gated at the checkpoint), never by an assumed cadence. The timestamp is a pure function of the CONFIG base (parsed as UTC components, timezone-free) + elapsed loop time. The wall reveal walks the wrapped lines char by char. Scanlines + vignette are gradient overlays whose opacity is the CONFIG intensity. One rAF clock; play/pause/restart by postMessage from the comparison. **No camera motion of any kind** — no transform, no pan, no zoom: locked-off IS the technique.

Rejected alternatives:
- Canvas room — REJECTED: DOM keeps every text element's content and color directly inspectable (the node swap test asserts rendered TV/wall/timestamp strings) and the wall fit is a layout computation, not a redraw problem.
- A single global typing cadence for all three text events — REJECTED per the charge: timing must be checkpoint-priced; the checkpoint table carries the specimen's uneven phase gaps (question → pause → wall → follow-up) that one cadence cannot express.
- Pixel-font rendering of the TV text (canvas bitmap font / tiny block grid per glyph) — REJECTED for attempt 1: the technique is the *typing + the wall reply*, not the glyph raster; monospace + amber glow carries the read, and a bitmap font would bind the build to specimen glyph shapes. Named as a candidate cure if the motion/readability lenses price the glyph fidelity.
- Video/frame-sequence of the specimen — REJECTED: refusal-class (§6.1); original appears only as the labeled comparison side.

### Execute checklist
- [x] Segment cut 1:19.5–1:25.5 → `segment.mp4` (scale 960 wide, libx264, faststart, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, DOM room + CCTV chrome + running timestamp, checkpoint-tabled typing/wall/follow-up phases, computed wall fit, loops, URL overrides, zero external references.
- [x] `comparison.html`: ORIGINAL + RECREATION labeled exactly per charge, shared play/pause/restart/swap controls, phone stacking (flex-wrap, min panel width, ≥48 px buttons).

### Verify checklist
- [x] Purity grep on recreation.html: `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` → 0 hits.
- [x] Node logic swap test: extract the inline script; run defaults + swap (`q1`/`wall`/`q2` texts, `wallAt=2600` checkpoint, `amber=#37ffd0` palette); assert checkpoint gating, phase order, timestamp advance/rollover/loop-wrap, line wrap, computed fit at 360 px, rendered strings.
- [x] `node --check` on the extracted inline script.
- [x] Comparison check: labels verbatim, both sides present, controls wired to video + iframe postMessage.
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced)
- **Wall-text fit at phone width (primary):** the wall answer is the technique's payoff and the longest string in the build; unwrapped at a display size it would overflow the wall or shrink unreadable — cured BY CONSTRUCTION: word-boundary wrap to ≤13-char lines + font derived from box width / longest line (26.8 px at 360 px stage, asserted in the swap test).
- **Timestamp realism:** a static or frame-counted clock would break the found-footage license — the timestamp is a pure function of base + elapsed real time, asserted at +5 s, at minute rollover (+61 s), and across the loop wrap.
- **Phase bleed:** if the wall began before the question finished (or the follow-up before the wall), the room's "argument" would collapse into simultaneous text — checkpoints are strictly ordered (400 < 2400 < 4400) and the swap test asserts each phase is gated at its own checkpoint; phase exclusivity follows from the table.
- **TV text overflow:** the question is longer than the TV is wide at phone size — the TV box wraps its text (pre-wrap) inside a %-sized screen, so typing can never push the set's geometry.
- **Glow wash:** the TV halo + wall glow could wash the chrome — glow layers sit behind the chrome (z-order) and the wall text carries its own text-shadow glow rather than a background halo.
- **Render-proof limitation:** no Chrome binary in this seat (fleet precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 79.5 -i source.mp4 -t 6 -vf scale=960:-2 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 6.000 s, 1,338,073 bytes. Window 1:19.5–1:25.5 covers the 1:20–1:25 technique window with ±0.5 s handles.
- `recreation.html` (12,745 bytes): CONFIG at top; DOM room (wallpaper gradient, 11 blind slats, TV on stand + glow halo); CCTV chrome (cam label, REC dot, PTZ, live timestamp); checkpoint-priced phases — TV types the question, the wall writes its answer in glowing wrapped lines at computed fit, the TV types the follow-up; scanline + vignette overlays at CONFIG intensity; locked-off (zero camera motion); 6 s loop; postMessage play/pause/restart; URL overrides.
- `comparison.html` (4,397 bytes): labels "ORIGINAL — Look What I Can Do (P1) @ 1:20–1:25" / "RECREATION — T14 CCTV room + wall-projected text, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300 px (phone stacking); buttons min-height 48 px.

## §5 Self-verify (own checks, before Codex) — legs 1–3
- **Leg 1 — Swap test (own, mechanical): PASS 28/28** (node harness, stubbed DOM, real script extracted from recreation.html; `node --check` PASS first).
  Defaults asserted: duration 6000; checkpoints {400, 2400, 4400}; state at 0 = idle with timestamp `2026-11-08 03:14:09`; TV typing gated at 400 (0 chars at 399, 1 at 400) and complete by 1995 ms; wall gated at 2400 and complete by 3830 ms; follow-up gated at 4400 and complete by 4785 ms; phase order question → wall → follow at 1000/3000/5000 ms; timestamp +5 s = `03:14:14`, minute rollover at +61 s = `03:15:10`, loop wrap at 6100 ms returns to base; `splitLines` wraps the specimen answer to `I HAVE A` / `SUBSCRIPTION.`; computed fit at 360 px stage = 26.8 px with the longest line exactly filling its box; 11 blind slats built; TV text renders in CONFIG amber `#ffb347`; render(5000) shows the full question + full follow-up on the TV, the full two-line answer on the wall, and the advanced timestamp.
  Swap (`?q1=Are you even awake?&wall=YES. ALWAYS.&q2=Since when?&wallAt=2600&amber=%2337ffd0`): all three texts replaced; the wall checkpoint moved — 0 wall chars at 2500 ms, 1 at 2600 ms (checkpoint-priced, not cadence); the TV palette renders `#37ffd0` end-to-end; the swapped wall text renders through the same wrap/reveal path. The technique survives different texts + a changed checkpoint + a palette change — swap PASS, Codex wave may fire.
- **Leg 2 — Construction purity (own, mechanical): PASS.** Grep `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — the room is DOM/CSS, the texts are CONFIG strings, fonts are the system monospace stack; every loaded asset is code written by this build. Config census: the only color literals outside CONFIG are the two black falloff stops inside the scanline/vignette gradient strings (structural black; each overlay's strength is the CONFIG intensity key) — **0 non-trivial technique-shaping literals outside CONFIG**; layout geometry lives in CSS/DOM positioning as in the fleet's form. The original appears only as `segment.mp4` in comparison.html, labeled ORIGINAL.
- **Leg 3 — Comparison check (own): PASS.** Labels verbatim per charge; both sides present at matched 16:9; Play/Pause/Restart post the matching command to the recreation in the same click as the video action; Swap button reloads the recreation with the recorded swap values; recreation loop (6 s) matches the segment length (6 s); phone stacking via flex-wrap + min-300 px panels and ≥48 px buttons.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; fleet precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).
- Leg 4 (Codex five-lens wave) + leg 5 (consolidation) are recorded in `scores.md` with returns under `codex/`.
