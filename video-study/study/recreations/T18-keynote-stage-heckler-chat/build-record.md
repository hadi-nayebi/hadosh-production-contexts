# T18 — Keynote stage + heckler chat · BUILD RECORD

Technique: T18 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 006 Wave 4 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T18-keynote-stage-heckler-chat/`
Consumer: openings / diagrams — stage slide-build with live audience chat layer (presentation software becomes a stage; chat as laugh track motivating cuts).

## §1 Observe (viewed firsthand, this run)

- digest.md T18: "An arena stage with a huge curved screen: the slide title builds line by line with highlight bars ('THE GREATEST TRANSFORMATION / IN HUMAN / HISTORY'), stat cards read 'MINUTES 18 / SLIDES 0', a slide counter shows '2 / 40'. Audience chat bubbles pop in at the side ('he's buffering', 'It's a pause. for effect', 'Great point, will circle back on this!'). This is the fastest-cut section of the video: 6 hard cuts in 14.5 s." Why: presentation software becomes a stage; chat is a laugh track that also motivates the cuts; empty-slide stats tell the joke before the speaker speaks.
- Evidence viewed firsthand this run: `ev/t127.jpg` (t=2:07): dark arena, huge curved screen under spotlights, tiny speaker silhouette on a lit pool at bottom centre, audience heads as a dark dotted row along the bottom. On the screen the title's first line reads 'THE GREATEST TRANSFORMATION' in white bold capitals, the second line has begun with 'IN' in YELLOW (mid-build, highlight state), over a dark slide that also carries a small illustration panel at left and a sticky-note at right. Chat bubbles overlay the screen's centre-right: a blue 'You 9:19 — the file?' bubble at top, then avatar rows — green Sam 'he's buffering', purple P Priya 9:38 'it's a pause. for effect', orange T Ted 9:40 'Great point, will circle back on this!' — sender names + times + coloured avatar circles. Top-right of the slide: 'DEEP DIVE' / 'MOONSHOT' labels.
- Source: `source.mp4` 1916×1078, 30 fps, 198.41 s (ffprobe). Segment window for the cut: 121.5–137.5 s (±0.5 s handles around the 2:02–2:17 technique window), 16.0 s.
- Sub-beats: (a) title lines land one by one, each swept by a highlight bar as it lands (the swept word holds the highlight colour — 'IN' yellow at t127); (b) stat cards (MINUTES 18 / SLIDES 0) and the slide counter (2 / 40) sit on the slide throughout — the joke is present before the title completes; (c) chat bubbles pop in one by one at the screen's side, each with sender/time/avatar; (d) the framing jumps on hard cuts — 6 cuts in 14.5 s (≈ one cut per 2.4 s), the fastest-cut section of the video; (e) the speaker stays a tiny silhouette under the screen for the whole window — scale contrast is the stage joke.
- Variables (§1.3): title lines · title line times · highlight colour/duration/word · stat card labels/values · slide counter · chat messages (sender, time, text, avatar colour, pop time) · cut times + framing states · palette (background, screen, title, chat, speaker, spot, audience) · duration · audience dot count · title size.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT per guards.md in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `durationMs` | number | `15000` | technique window length (2:02–2:17) |
| `titleLines` | string[] | `THE GREATEST TRANSFORMATION / IN HUMAN / HISTORY` | slide title, builds line by line |
| `titleTimesMs` | number[] | `[600, 3400, 6200]` | CHECKPOINT table: line i visible when t ≥ titleTimesMs[i] |
| `highlightMs` / `highlightColor` | number/string | `700` / `#f5c518` | highlight-bar sweep duration + yellow |
| `highlightWordIndex` | number | `1` | highlighted word on line 1 |
| `titleColor` / `titleSizeVw` | string/number | `#ffffff` / `5.2` | title colour + size (vw, clamp-floored) |
| `statCards` | {label,value}[] | `MINUTES 18 · SLIDES 0` | the empty-slide joke cards |
| `slideCounter` | string | `2 / 40` | slide counter |
| `chatMessages` | {sender,time,text,color,tMs}[] | 4 messages (You/Sam/Priya/Ted) | CHECKPOINT table: bubble i pops when t ≥ its tMs |
| `cutTimesMs` | number[] | `[0, 2400, 4850, 7300, 9700, 12150]` | CHECKPOINT table: 6 hard cuts in the window |
| `framings` | {scale,x,y}[] | 6 states | framing state per cut index — jumps, never slides |
| `bg` / `screenBg` / `chatBg` / `chatColor` | string | `#030305` / `#101426` / dark / `#eef1f8` | palette |
| `speakerColor` / `spotColor` / `audienceColor` / `audienceCount` | string/string/string/number | near-black / warm pool / `#2a2e44` / `90` | stage dressing |

URL overrides (swap test + reuse): `?titles=A|B|C` · `?chats=x;y;…` · `?highlight=…&screen=…&title=…` · `?titleMs=…` · `?chatMs=…` · `?cutMs=…` · `?durationMs=…`. Config remains the single source; logic reads only CONFIG.

### Construction choice

**DOM/CSS arena stage, checkpoint-priced state (chosen):** the screen is a DOM panel with a curved suggestion (border-radius + perspective rotateX + inset glow); the title is DOM word spans, each highlighted word carrying a highlight-bar span whose width is priced from the line's checkpoint + `highlightMs`; chat bubbles are DOM rows (avatar circle = sender initial on the message's colour) shown when the pure `computeState(t, CONFIG)` says their checkpoint has passed, with a 220 ms pop scale priced from their age; hard cuts are a `cutTimesMs` checkpoint table — the framing (scale/translate on the screen wrapper) jumps to `framings[cutIndex]` with NO transition, so a cut is a state change, not an animation. Speaker silhouette + spotlight pool + audience dot row are CSS/DOM shapes. One rAF clock; play/pause/restart by postMessage.

Rejected alternatives:
- Canvas stage — REJECTED: DOM keeps title/chat text directly inspectable and wrappable (the node swap test asserts text, colours and checkpoint states per element) and makes the 360 px fit a layout property.
- CSS keyframe timeline for title/chat/cuts — REJECTED per the charge: timing must be checkpoint-priced data; keyframes hardcode the specimen's cadence into the stylesheet where a swap cannot reach it.
- Framing cuts as smooth zoom transitions — REJECTED: the specimen's cuts are HARD (broadcast camera switches); a transition would invent motion the technique does not have.
- Traced slide illustration / sticky-note from t127 — REJECTED: ornament, not the technique; the technique is title-build + stats + chat + cuts on a stage. (The slide's left illustration panel is not recreated — printed limitation, ornament split per §8.)
- Video/frame-sequence of the specimen — REJECTED: refusal-class (§6.1); original appears only as the labeled comparison side.

### Execute checklist
- [x] Segment cut 121.5–137.5 → `segment.mp4` (scale 960 wide, libx264, faststart, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, checkpoint tables for title/chat/cuts, loops, URL overrides, zero external references.
- [x] `comparison.html`: ORIGINAL + RECREATION labeled exactly, shared play/pause/restart/swap controls, phone stacking (flex-wrap, min panel width, ≥48 px buttons).

### Verify checklist
- [x] Purity grep on recreation.html: `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` → 0 hits.
- [x] Node logic swap test: extract the inline script; run defaults + swap (new title lines, new chat texts, highlight palette, earlier title timing, cut-table override); assert checkpoint counts, visibility-at-time, highlight progress, cut index/framing.
- [x] Syntax check on the extracted inline script (vm.Script compile, `node --check` equivalent).
- [x] Comparison check: labels verbatim, both sides present, controls wired to video + iframe postMessage.
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced)
- **15 s density vs readability (primary):** title build + 4 chat pops + 6 cuts in 15 s can read as clutter — bounded by construction: title owns the left 62% of the screen, chat owns a fixed 29% column at the side, cuts change only framing (scale/translate), never layout, so no element ever moves house mid-window.
- **Phone fit (computed, declared):** at 360 px wide the screen is ≈331 px (4% margins each side); the title column is 62% ≈ 205 px and the title font resolves to ≈18.7 px (5.2 vw, clamp floor 13 px) — 'THE GREATEST TRANSFORMATION' wraps to ~2 lines inside its column and stays inside the screen; chat bubbles are 29% of the screen (≈96 px) with text at clamp floor 8 px wrapping to ~5 lines for the longest message — fits, but small: the known tight leg, priced for the readability lens. Bubbles are sized as % of stage, never fixed px, so the fit scales with the stage.
- **Cut vs pop confusion:** a framing jump landing close to a chat pop could read as the bubble moving — CORRECTED at Verify (Codex timing lens): the nearest default gap is 100 ms (chat 7400 ms follows cut 7300 ms), NOT the 550 ms first claimed here; the collision risk stands as a named defect for the next attempt.
- **Highlight persistence:** the specimen's 'IN' holds yellow after its sweep — construction colours a swept highlighted word with `highlightColor` once its sweep completes, and the bar itself returns to 0, so the state at t127 (yellow IN, no bar mid-word on other lines) is reachable.
- **Render-proof limitation:** no Chrome binary in this seat (fleet precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 121.5 -i source.mp4 -t 16 -vf scale=960:-2 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 16.000 s, 2,231,148 bytes. Window 121.5–137.5 covers the 2:02–2:17 technique window with ±0.5 s handles.
- `recreation.html` (11,529 bytes): CONFIG at top; DOM curved screen + title word spans with highlight bars; stat cards + counter; chat column with avatar circles; checkpoint tables for title/chat/cuts; 6 framing states; speaker silhouette + spotlight + 90 audience dots; rAF clock; postMessage play/pause/restart.
- `comparison.html` (4,471 bytes): labels "ORIGINAL — Look What I Can Do (P1) @ 2:02–2:17" / "RECREATION — T18 Keynote stage + heckler chat, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300 px (phone stacking); buttons min-height 48 px.

## §5 Self-verify (own checks, before Codex) — legs 1–3
- **Leg 1 — Swap test (own, mechanical): PASS 18/18** (node harness, stubbed DOM, real script extracted from recreation.html; syntax compile PASS first).
  Defaults asserted: 3 title lines (line 2 = 'IN HUMAN'); cut count = 6 from the table; 4 chat messages (msg 2 = "he's buffering"); line 1 hidden at 0 ms, visible at 700 ms (checkpoint 600); line 2 hidden at 3000 ms, visible at 3500 ms (checkpoint 3400); highlight sweep progress at 1000 ms = 400/700 priced from the checkpoint; chat priced at 5000 ms (Sam in, Priya not yet) and Ted in at 11000 ms; cut index follows the table (0 at 100 ms, 1 at 2500 ms, 5 at 13000 ms) with framing scale jumping 1.00 → 1.10 discretely; loop wraps at 15000 ms; render(5000) returns chat-visible state.
  Swap (`?titles=SMALL STEPS|BUILD DAILY|SHIP IT&chats=first!;nice pace;keep going;done yet?&highlight=#37c8ff&titleMs=400,2600,4800`): new title lines applied; new chat texts applied; highlight palette = `#37c8ff`; line 2 visible at 2700 ms under the swap table while still hidden under the default table (timing is data, not branches); cut count still read from the table (6). Cut-table override (`?cutMs=0,1000,2000,3000`): 4 cuts, cut index at 2500 ms = 2 priced from the new table. The technique survives different words + different chat + a palette change + a timing change — swap PASS, Codex wave may fire.
- **Leg 2 — Construction purity (own, mechanical): PASS.** Grep `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — screen, title, chat, speaker and audience are DOM/CSS shapes and code; fonts are the system sans stack; every loaded asset is code written by this build. The original appears only as `segment.mp4` in comparison.html, labeled ORIGINAL. Config census: hex literals outside CONFIG occur only in the static CSS `background:#030305` on html/body, which duplicates `CONFIG.bg` (JS also applies `CONFIG.bg` to body/stage at runtime, so the runtime colour is config-sourced); all other palette/shape/timing literals live inside CONFIG — non-trivial outside-CONFIG literals: 0.
- **Leg 3 — Comparison check (own): PASS.** Labels verbatim per charge; both sides present at matched 16:9; Play/Pause/Restart post the matching command to the recreation in the same click as the video action; Swap button reloads the recreation with the recorded swap values; recreation loop (15 s, the technique window) runs inside the segment's 16 s loop; phone stacking via flex-wrap + min-300 px panels and ≥48 px buttons.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; fleet precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).
- Leg 4 (Codex five-lens wave) + leg 5 (consolidation) are recorded in `scores.md` with returns under `codex/`.
