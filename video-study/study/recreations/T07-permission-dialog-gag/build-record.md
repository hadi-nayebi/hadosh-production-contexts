# T07 — Permission-dialog gag · BUILD RECORD

Technique: T07 (packet P1, "Look What I Can Do" @aditazzz.music) · Recreation Cycle 005 Wave 3 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T07-permission-dialog-gag/`
Consumer: openings (hook) · fake-UI family — an approval-dialog hook for production containers (e.g. "Allow this word to change its meaning?" per the packet's idea bank #7).

## §1 Observe (viewed firsthand, this run)

- TECHNIQUES.md T07: "an OS permission modal cycles escalating requests; the highlight steps down the options as the timing device." Feeds: opening (hook) — P1 @ 0:35–0:43 — ev/t41.jpg.
- digest.md T07: center-frame, a Claude-Code-style permission modal cycles: 'Allow Adita to direct?' → 'Allow Adita to produce?' → 'Allow Adita to win an Oscar?', each with options '1. Yes / 2. Yes, and don't ask again / 3. No, let's not get ahead-'. The selection highlight steps down the list across the three modals. Why it works: shared approval-prompt friction becomes comedy; the modal's stillness against the moving song makes the final option's selection feel like a held breath.
- Evidence viewed firsthand this run: `ev/t41.jpg` (0:41): third modal — title "Allow Adita to win an Oscar?" in bold white monospace; options in grey-white monospace; option 3 "No, let's not get ahead—" highlighted in orange text on a translucent orange-brown bar with a ❯ marker at its left; modal is a dark near-black box with a thin orange border and rounded corners, sitting center-left over a very dim collage of video tiles; top chrome line reads "adita@studio ~/look-what-i-can-do" / "claude · pre-chorus · 0:41" (set dressing, not the technique).
- Source segment watched via cut (§3): source.mp4 1916×1078, 30 fps, 198.41 s. Segment window 0:34.5–0:43.5 covers the full gag (digest section 0:35–0:43, zero hard cuts — all motion is intra-shot: modal swaps + highlight steps).
- Sub-beats: (a) modal 1 appears center-frame, still; (b) highlight rests on its final option; (c) modal is replaced by modal 2 (escalated request), highlight one step further down; (d) modal 3, highlight on option 3 — the punchline selection — held. The stepping across modals IS the escalation clock; within-modal stepping is the same device read at finer grain (see Plan construction).
- Variables (§1.3): request texts + count/order · option texts + count · final selection per modal · per-modal dwell (step timing + hold after final) · highlight step interval · palette (bg, modal bg, border, text, highlight fg/bg) · modal scale/width ratio · typeface (monospace) · background dimming/tiles.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: phase guards are BUILT-NOT-FIRED / UNBUILT in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `requests` | string[] | `["Allow Adita to direct?", "Allow Adita to produce?", "Allow Adita to win an Oscar?"]` | escalating request titles, in order |
| `options` | string[] | `["Yes", "Yes, and don't ask again", "No, let's not get ahead—"]` | the three option lines (numbered at render) |
| `finalSelections` | number[] | `[0, 1, 2]` | final highlighted option per modal — steps DOWN across the cycle |
| `stepMs` | number | `650` | dwell on each highlight position before it steps down |
| `holdAfterMs` | number | `1100` | still hold on the final selection before the next modal |
| `modalInMs` | number | `250` | still beat after a modal appears, before stepping starts |
| `bg` | string | `#050807` | stage background (near-black, green tint) |
| `modalBg` | string | `#0a0c0a` | modal fill |
| `border` | string | `#e8912d` | modal border (safety orange) |
| `fg` / `optFg` | string | `#f2f2f2` / `#c9c9c9` | request title / unselected option color |
| `highlightFg` / `highlightBg` | string | `#f5a83d` / `rgba(232,145,45,0.28)` | selected option text / bar |
| `modalWidthRatio` | number | `0.62` | modal width as fraction of stage width |
| `modalScale` | number | `1` | overall modal scale multiplier |
| `fontFamily` | string | `ui-monospace, Menlo, Consolas, monospace` | UI monospace stack (system only) |
| `tileCount` / `tileOpacity` | number | `8` / `0.5` | faint code-drawn background tiles behind the scrim |

URL overrides (swap test + reuse): `?requests=A?|B?|C?&options=X|Y|Z&finals=0|1|2&stepMs=400&holdAfterMs=700&border=%2300ccff&highlightFg=%2300ccff&bg=%23111111` — parsed at load; CONFIG remains the single source. Default cycle: modal 1 = 250+650+1100 = 2000 ms; modal 2 = 250+650+650+1100 = 2650 ms; modal 3 = 250+650+650+650+1100 = 3300 ms; total ≈ 7.95 s of stepping + holds inside the 9 s segment loop.

### Construction choice

**DOM modal + timer state machine (chosen):** one modal element, one request line, option rows rebuilt per state. A single timer chain runs each modal's cycle to completion — highlight starts at option 1, steps down one position per `stepMs` until the modal's `finalSelections` entry, holds `holdAfterMs` — and only then replaces the modal instantly with the next request. Strict sequencing by construction (Owner Cure 2 analog): one modal owns the stage at a time; no overlap, no fade. The modal itself never moves — stillness against the song is the gag; the only motion is the highlight stepping and the instant modal swap. Fit is measured, not guessed: canvas `measureText` on the longest request/option line at a reference size, font scaled so the line fits the modal's inner width; modal width is stage-relative and capped at 94% of stage width, so a 360 px phone stage cannot clip.

Rejected alternatives:
- CSS keyframe highlight animation — REJECTED: keyframes bake the step count/timing into CSS, breaking per-modal finals from CONFIG and strict sequencing control.
- Video/frame-sequence of the specimen modal — REJECTED: refusal-class (§6.1); original appears only as the labeled comparison side.
- Canvas-rendered modal — REJECTED: DOM text stays crisp/selectable and the measured-fit path is simpler and honest; canvas adds purity risk for a static UI.
- Traced screenshot redraw of ev/t41.jpg — REJECTED: refusal-class tracing; the modal is rebuilt from CONFIG text + palette only.
- All three modals stacked/visible at once — REJECTED: falsifies the mechanic (one modal at a time, replaced).

### Execute checklist
- [x] Segment cut 0:34.5–0:43.5 → `segment.mp4` (scale 960 wide, libx264, no audio), ffprobe-verified.
- [x] `recreation.html`: self-contained, CONFIG at top, DOM modal, strict per-modal sequencing, measured fit, loops, URL overrides, zero external references.
- [x] `comparison.html`: labels "ORIGINAL — "Look What I Can Do" (P1) @ 0:35–0:43" / "RECREATION — T07 Permission-dialog gag, parameterized", shared play/pause/restart/swap controls, phone stacking (flex-wrap, min panel 300px, ≥48px buttons).

### Verify checklist
- [x] Purity grep on recreation.html: `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(` → 0 hits.
- [x] Node logic swap test: different request texts + changed stepMs (timing) + changed border/highlightFg (palette); assert sequence order, per-modal finals 0/1/2, timer delays derive from CONFIG, 360 px fit.
- [x] Syntax: node parse of the extracted script (`new Function`) PASS.
- [x] Comparison check: labels verbatim, both sides present, controls wired to video + iframe postMessage.
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced)
- **Highlight-step reading (primary):** the digest says the highlight steps down "across the three modals" — a within-modal step that also lands progressively further down per modal (finals 0→1→2) satisfies both readings; a purely cross-modal jump with no visible stepping would lose the timing device. Priced into the construction; the timing/motion lenses judge it.
- **Text fitting:** the longest option ("Yes, and don't ask again") at specimen scale would overflow a phone-width modal — cured BY CONSTRUCTION via measured shrink-to-fit against the longest line (request or option, whichever measures wider); node test verifies fit at 360 px stage.
- **Modal overlap:** timer-chain single-modal construction makes overlap impossible (phase exclusivity by construction, Owner Cure 2).
- **Set-dressing scope:** the specimen's top chrome line and real video tiles behind the modal are scene dressing, not the technique; the recreation carries only faint code-drawn tile rectangles behind a scrim to hold the dim-field read (§8: technique, not scene).
- **Render-proof limitation:** no Chrome binary in this seat (T15/T08 precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON: jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — all BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 34.5 -i source.mp4 -t 9 -vf scale=960:-2 -c:v libx264 -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 9.000 s, 645,766 bytes. Window 0:34.5–0:43.5 covers the gag at 0:35–0:43 with ±0.5 s handles.
- `recreation.html` (8,691 bytes): CONFIG at top; DOM modal; timer state machine (runModal → stepDown → nextModal); measured fit; faint code-drawn tiles + scrim; loops; URL overrides; postMessage play/pause/restart for comparison sync.
- `comparison.html` (4,066 bytes at first build): exact charged labels; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300px (phone stacking); buttons min-height 48px.

## §5 Self-verify (own checks, before Codex)
- **Purity grep:** `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — system monospace stack only; background tiles are code-drawn divs; all content is code + CONFIG text.
- **Node logic swap test** (stubbed DOM/canvas measure, real script extracted from recreation.html; syntax PASS): **ALL ASSERTIONS PASS** —
  defaults: requests in specimen order; finals resolve 0,1,2; state sequence driven through the real timer chain: modal 0 holds sel 0 → modal 1 steps 0→1 → modal 2 steps 0→1→2 → loop; timer delays derive from CONFIG (first-modal chain 900 = modalInMs 250 + stepMs 650, then holdAfterMs 1100; modal 3 chain adds one 650 step per extra position).
  swap (`?requests=Allow Mina to review?|Allow Mina to approve?|Allow Mina to publish?&stepMs=400&border=%2300ccff&highlightFg=%2300ccff`): new requests load verbatim; stepMs 400 appears in the driven delays (650→400 positions); border + highlightFg both #00ccff; same strict state sequence.
  fit @360 px stage: modalW 223.2 ≤ 338.4 bound (94% cap not binding; ratio governs), reqPx 11 / optPx 10 at stub metrics (0.6 em/char) — no line exceeds the modal inner width by construction (measured shrink-to-fit).
- **Comparison check:** labels verbatim per charge; controls wired to both sides in one click; recreation cycle ≈ 7.95 s inside the segment's 9 s loop.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; T15/T08 precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON (UNBUILT in this seat; five-lens wave is the gate).

- **Post-wave BODY-WRITE addendum (Codex wave, 2026-11-14):** scores 86 / 78 / 96 / 68 / 72 → avg 80.0, min 68 → FAIL, tier IN PROGRESS (full priced gap in scores.md). Two corrections to this record's claims stand: (1) the fit claim in §2/§5 is BOUNDED — proven for the specimen defaults and the tested swap values; the font floors can override measured fit at longer lengths, and measurement omits border/padding/marker/bold weight. (2) The within-modal re-descent construction (finals reached by resetting to option 1 per modal) was priced in §2 as satisfying both readings of the digest; motion + timing converged that the reset dilutes the specimen's cross-modal step-down and that escalation-by-traversal gives the third modal no distinctive final hold — the practice re-attempt's primary cure, ahead of single-lens findings (Amendment A1).
