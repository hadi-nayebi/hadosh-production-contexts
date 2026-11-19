# T21 — Printed Receipt Gag + App Switch · BUILD RECORD

Technique: T21 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 006 Wave 4 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T21-printed-receipt-app-switch/`
Consumer: endings — physical-prop gag + app-switch loop restart (a container ending that turns an abstract limit into a held artifact, then restarts the story engine in a rival app's UI).

## §1 Observe (viewed firsthand, this run)

- digest.md T21: "A paper 'USAGE RECEIPT' prints out of the robot (header: 'YOU'VE REACHED YOUR USAGE LIMIT'), held up beside a post reading 'I have an AI slop empire to build.' and a system card: 'You're out of usage credits — Resets Saturday at 3:00 AM'. The character then picks up a phone and types 'Hey ChatGPT?' — and the rival app's chat UI answers in its own voice: 'Heyyy! What are we getting into today?'" Why it works: the abstract limit becomes a physical artifact (a receipt you can hold); the brand switch is told entirely through UI chrome — no narration — and it restarts the story's engine (the loop mechanism).
- Evidence viewed firsthand this run (both frames, `muse.read`):
  - `ev/t175.jpg` (2:55): robot torso close-up — pale rounded belly, gold trim line, a horizontal black printer slot with a gold border at center; top-left a black dot-matrix LED plaque with amber pixel text reading "YOU'VE REACHED / YOUR USAGE LI…" (the line still typing / running off the plaque). The receipt gag is staged as: LED announces → paper issues from the belly slot.
  - `ev/t178.jpg` (2:58): a hand holds a tall black phone; the chat UI shows Chat/Work tabs at top, an input field reading "Hey, ChatG…" over an on-screen keyboard; beside the phone a green-outlined black speech bubble with a tail reads "› Hey ChatGPT?" — the typed prompt is externalized as a callout bubble in the rival app's green accent.
- Source: `source.mp4` 1916×1078, 30 fps, 198.41 s (per charge; segment ffprobe below). Segment window for the cut: 2:49.5–3:02.5 (169.5–182.5 s, ±0.5 s handles around the 2:50–3:02 technique window).
- Sub-beats (12 s window, phase timings are the recreation's checkpoint pricing of the digest's sequence): (a) 0–3.2 s print — LED types the limit line while the paper receipt slides out of the belly slot, its printed rows revealed progressively as it emerges (receiptFull 3200 ms); (b) 4.2 s cards — the held receipt is joined by the post card ("I have an AI slop empire to build.") and the system card ("You're out of usage credits — Resets Saturday at 3:00 AM"); (c) 7.0 s phone — the phone rises, the prompt "Hey ChatGPT?" types into the rival chat UI (typed by 9.5 s), and the reply bubble "Heyyy! What are we getting into today?" pops in at 10.3 s in the rival app's own style; hold to 12 s, loop.
- Variables (§1.3): LED text · receipt header · receipt lines (count + content) · post text · system title · reset line · phone tab labels · phone prompt · phone reply · every phase timing (checkpoint table) · print/reveal rates (derived durations) · palette (torso, trim, LED, paper, cards, phone, rival accent) · receipt full length.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT per guards.md in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `durationMs` | number | `12000` | technique window length (2:50–3:02) |
| `checkpoints` | object | `{printStart:0, receiptFull:3200, cardsAt:4200, phoneAt:7000, typedAt:9500, replyAt:10300}` | CHECKPOINT table: every phase boundary is read from here |
| `ledFraction` | number | `0.65` | LED line completes at this fraction of the print phase |
| `cardsFadeMs` / `phoneRiseMs` / `typeDelayMs` / `replyPopMs` | number | `600 / 700 / 400 / 350` | derived sub-timings (card fade, phone rise, typing start delay, reply pop) |
| `receiptMinHPct` / `receiptMaxHPct` | number | `0 / 46` | receipt window height range (% of its column) — the print length |
| `ledText` | string | `YOU'VE REACHED YOUR USAGE LIMIT` | dot-matrix readout line |
| `receiptHeader` / `receiptLines` | string / string[] | `USAGE RECEIPT` / 4 lines | the printed paper (header + rows, revealed progressively) |
| `postText` | string | `I have an AI slop empire to build.` | post card |
| `systemTitle` / `systemReset` | string | `You're out of usage credits` / `Resets Saturday at 3:00 AM` | system card |
| `tabA` / `tabB` | string | `Chat` / `Work` | phone UI chrome (from t178) |
| `phonePrompt` / `phoneReply` | string | `Hey ChatGPT?` / `Heyyy! What are we getting into today?` | typed prompt + rival-voice reply |
| palette keys | string | `bg #17130f · torsoColor #b9bcc4 · trimColor #d99a2b · ledBg #0a0a0a · ledColor #ffb62e · paperColor #f7f2e4 · paperInk #23201a · cardBg #fdfcf8 · cardInk #191919 · sysBg #2b2f36 · sysInk #f2f4f8 · accent #37c84f · phoneBg #000000 · phoneInk #f4f4f4 · phoneFrame #3a3f46 · replyBg #1d1f24 · inputBg #17181c` | every color the render uses; ALL applied from CONFIG in JS (CSS carries layout only, zero hex) |

URL overrides (swap test + reuse): `?prompt=…&reply=…&post=…&reset=…&led=…&header=…` · `?lines=A;B;C` · `?accent=…&paper=…&ledColor=…` · `?phoneAt=6000` (one checkpoint) · `?durationMs=…` (checkpoints SCALE proportionally — a duration-only change never strands a phase). Config remains the single source; logic reads only CONFIG.

### Construction choice

**DOM/CSS three-phase stage, checkpoint-priced state (chosen):** a pure `computeState(tMs, CONFIG)` maps time → {phase, printProgress, ledChars, visibleRows, cardsProgress, phoneProgress, typedChars, replyProgress}, where every value derives from the `checkpoints` table + the named duration keys. Render applies it: LED text slices char-by-char; the receipt window height grows with printProgress and its rows (header + lines) un-hide progressively as the paper emerges; cards fade/slide in from cardsAt; the phone rises from phoneAt, the prompt types into both the callout bubble and the input bar, and the reply bubble pops (scale) at replyAt in the rival accent's chrome. One rAF clock; play/pause/restart by postMessage from the comparison; loops at durationMs.

Rejected alternatives:
- Canvas render of torso/receipt/phone — REJECTED: DOM keeps every text row and bubble directly inspectable (the node swap test asserts exact text/visibility per element) and makes the 360 px fit a CSS layout property.
- CSS keyframe animations per phase — REJECTED per the charge: timing must be checkpoint-priced data; keyframes bury phase boundaries in CSS where neither the swap test nor a config override can reach them.
- A photographed/traced robot or phone frame — REJECTED: refusal-class (§6.1) and unnecessary; the technique is the print + cards + UI-switch sequence, carried by code-drawn shapes.
- One global timeline percentage per phase hardcoded in render — REJECTED: same defect as a cadence formula; phases must read the checkpoint table so an override (phoneAt, duration scaling) moves the whole sequence coherently.

### Execute checklist
- [x] Segment cut 169.5–182.5 s → `segment.mp4` (scale 960 wide, libx264, faststart, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, checkpoint-tabled three-phase DOM construction, loops, URL overrides, zero external references.
- [x] `comparison.html`: ORIGINAL + RECREATION labeled exactly, shared play/pause/restart/swap controls, phone stacking (flex-wrap, min panel width, ≥48 px buttons).

### Verify checklist
- [x] Purity grep on recreation.html: `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` → 0 hits.
- [x] Node logic swap test: extract the inline script; run defaults + swap (new receipt lines, new prompt/reply, accent palette change, phoneAt timing change) + duration-only scaling; assert checkpoint state, per-row visibility, bubble texts, applied accent.
- [x] Syntax check on the extracted inline script (node vm.Script compile — this seat's `node --check` equivalent).
- [x] Config census: hex colors / URLs outside the CONFIG block → 0.
- [x] Comparison check: labels verbatim, both sides present, controls wired to video + iframe postMessage.
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced)
- **12 s multi-phase pacing (primary):** three phases in 12 s can crowd — the print must read as printing (not a fade), the cards need a beat of their own, and the reply needs hold time before the loop. Priced in the checkpoint table: print owns 0–3.2 s alone, cards enter at 4.2 s (1 s of receipt-only hold after full print), phone at 7.0 s, reply at 10.3 s leaving a 1.7 s hold. All boundaries are data, so a pacing cure is a table edit, not a rebuild.
- **Phone fit of receipt + phone at 360 px:** the stage is % -sized throughout (left column 56%, cards 38%, phone `min(78%, 290px)` centered over the stage in phase 3); receipt rows wrap at ≤520 px (`white-space:normal`) instead of clipping, and every text size is a `clamp()` with a legible floor (receipt lines ≥8 px nominal, prompt ≥11 px). **Phone-first 360 px computed fit is declared:** at 360 px wide the receipt column is ~202 px — the longest default receipt row ("Thank you for building", 22 chars at ≥8 px monospace ≈ 106 px) fits, and the phone at 78% = ~281 px carries the 39-char reply at ≥10 px wrapped over ~3 lines inside its bubble (max-width 92%). No fixed pixel widths anywhere in the recreation.
- **Receipt reveal vs window growth sync:** rows un-hide by `visibleRows = floor(printProgress × totalRows)` while the window height grows on the same printProgress — one shared value, so a row can never appear outside the emerged paper or lag behind it; residual offset is at most one row.
- **Checkpoint coherence under overrides (T04's convergent defect, pre-cured):** a duration-only override scales every checkpoint proportionally (asserted in the swap test: 6000 ms → receiptFull 1600, replyAt 5150); a phoneAt override moves typing with it (typeStart derives from phoneAt). No phase can be stranded past the loop end by a single-key change.
- **Render-proof limitation:** no Chrome binary in this seat (fleet precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 169.5 -i source.mp4 -t 13 -vf scale=960:-2 -c:v libx264 -pix_fmt yuv420p -movflags +faststart -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 13.000 s, 1,859,687 bytes. Window 2:49.5–3:02.5 covers the 2:50–3:02 technique window with ±0.5 s handles.
- `recreation.html` (13,666 bytes): CONFIG at top (checkpoint table + all texts + full palette); DOM robot torso + LED + slot; progressive receipt; post + system cards; phone with rival chat UI; `computeState` checkpoint logic; rAF clock; postMessage play/pause/restart; ≤520 px receipt-row wrapping.
- `comparison.html` (4,553 bytes): labels "ORIGINAL — Look What I Can Do (P1) @ 2:50–3:02" / "RECREATION — T21 Printed receipt gag + app switch, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300 px (phone stacking); buttons min-height 48 px.

## §5 Self-verify (own checks, before Codex) — legs 1–3
- **Leg 1 — Swap test (own, mechanical): PASS 39/39** (node harness, stubbed DOM, real script extracted from recreation.html; syntax compile PASS first).
  Defaults asserted: duration 12000; LED text 31 chars; at 0 ms phase 1 / print 0 / rows 0 / LED 0; at 1600 ms printProgress 0.5, visibleRows 2, ledChars 23; at 3200 ms print 1, rows 5 (header + 4 lines), LED complete; at 4500 ms phase 2, cardsProgress 0.5; at 7000 ms phase 3; typedChars 6 at 8450 ms and the full 12 at typedAt 9500; replyProgress 1 at 10650 ms; loop wraps at 12000 ms. After render(3200) the LED shows the full line and all rows are visible; after render(11000) the prompt bubble reads "› Hey ChatGPT?", the input bar mirrors it, the reply bubble is visible, and the bubble border carries the default accent `#37c84f`.
  Swap (`?lines=Plan: FREE;Tokens: 42;Status: OK&prompt=Hey rival app?&reply=Yo! New thread, new rules.&accent=%23ff2e88&phoneAt=6000`): receipt rebuilds to the 3 new lines (totalRows 4 at full print); phase 3 begins at the overridden 6000 ms; the prompt bubble reads "› Hey rival app?", the reply bubble carries the new reply text, and the applied accent is `#ff2e88`. Duration-only swap (`?durationMs=6000`): checkpoints scale (receiptFull 1600, replyAt 5150) and print completes at the scaled boundary. The technique survives different receipt lines + a different prompt/reply + a palette change + a timing change — swap PASS, Codex wave may fire.
- **Leg 2 — Construction purity (own, mechanical): PASS.** Grep `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(|\.jpg|\.png` on recreation.html → **0 hits**. Config census: hex colors outside the CONFIG block → **0**; URLs outside → **0** (every palette value is a CONFIG key applied from JS; CSS carries layout only). Asset inventory: recreation.html loads NOTHING external — torso, slot, receipt, cards and phone are DOM/CSS code written by this build; fonts are the system stacks. The original appears only as `segment.mp4` in comparison.html, labeled ORIGINAL.
- **Leg 3 — Comparison check (own): PASS.** Labels verbatim per charge; both sides present at matched 16:9; Play/Pause/Restart post the matching command to the recreation in the same click as the video action; Swap button reloads the recreation with the recorded swap values; recreation loop (12 s, the technique window) runs inside the segment's 13 s loop; phone stacking via flex-wrap + min-300 px panels and ≥48 px buttons.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; fleet precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).
- Leg 4 (Codex five-lens wave) + leg 5 (consolidation) are recorded in `scores.md` with returns under `codex/`.
