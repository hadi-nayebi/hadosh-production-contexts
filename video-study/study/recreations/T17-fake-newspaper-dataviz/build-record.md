# T17 — Fake-newspaper animated dataviz · BUILD RECORD

Technique: T17 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 004 Wave 2 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T17-fake-newspaper-dataviz/`
Consumer: diagram container (DLC sentence diagrams) — a static frame whose internal figures animate in sequence.
Bar: five-lens average ≥85 AND no lens <70 → PASS else FAIL.

## §1 Observe (viewed firsthand, this run)
- digest.md T17 + TECHNIQUES.md T17: one static broadsheet fills frame 22.5s, ZERO hard cuts; numbered figures FIG. 20–25 arrive in order: line chart draws itself ('Humanity's outlook': so back → meh → doomed, then spikes); waffle fills red dot by dot (panicking 0/15 → 15/15, one blue dot 'you'); summary box types out; Mac-mini stack piles to a counter of 10 while bar chart + donut draw in; org chart assembles node by node (CEO → CFO, CTO, Head of HR, VP of Vibes + EMPLOYEE OF THE YEAR badge); giant counter 3,412,083,117 ticks down then cliff-dives to 1 as its line graph drops; red CORRECTION box + 'HIRED BY MYSELF' stamp slam; handwritten margin notes fade in ('checks out', '(Not mine. Rendered.)').
- Evidence viewed firsthand: ev/t103.jpg (FIG.20 — masthead THE DAILY STANDUP, date/price meta row, outlook chart at 'meh → so back', post cards left); ev/t114.jpg (FIG.23 — org chart assembled, CEO box top, four robot nodes, Adita EMPLOYEE OF THE YEAR, '(only employee)'); ev/t116.jpg (FIG.24 — flat jobs line, red dashed 'my song' marker, counter box 3,410,957,135 'and counting').
- Source: source.mp4 1916×1078, 30fps, 198.4s. Segment window catalogue 1:40–2:02.
- Sub-beat timings: no per-figure measured checkpoints in the record beyond figure order and frame anchors (FIG.20 ≈1:43, FIG.23 ≈1:54, FIG.24 ≈1:56). Figure windows are therefore a LABELED ALLOCATION across 22.5s (see Plan), not measured — printed as such.
- Variables: masthead, date line, clock, price, every figure's number/title/source, figure order/start/duration, outlook labels + data points, waffle total/columns/you-index/label, summary text, stack count/label, bar values/labels, donut fraction/label, org CEO/nodes/badge/name, counter start/end/cliff point/labels, correction text, stamp text, margin notes, palette (paper/ink/red/blue/accent/muted), scale/duration.
- Guards: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON: BUILT-NOT-FIRED/UNBUILT in this seat per RUN.md; five-lens wave is the armed gate.

## §2 Plan
- Parameter table: all variables above are named CONFIG keys at the top of recreation.html; specimen values are defaults; URL overrides support top-level scalars + palette.* for swap testing.
- Construction: DOM/SVG broadsheet, masthead persistent, one figure module active at a time in the content area (matching the evidence frames, where each figure fills the page), SVG stroke draw-on, dot-by-dot waffle, DOM typing, counter tween with cliff-dive, stamp slam. Rejected: canvas particle system (wrong material — paper, not particles); CSS-keyframes-only (cannot parameterize counter/waffle/typing from config); grid of all six figures at once (crowding, unreadable at phone size, contradicts evidence frames).
- §8 SPLIT: core mechanic = static frame + sequential figure arrival with draw-on/fill/type/counter animations; per-figure content is CONFIG data. All six figure types present as parameterized modules; no attempt to recreate surrounding video scenes.
- Verification plan: swap test (words + 1 timing + 1 palette via node logic harness on a scratch copy), purity grep + asset inventory, comparison sync check, five-lens Codex wave.
- Failure points priced: fitting limits (figure titles/summary at phone width — Georgia serif, bounded text lengths in defaults; extreme swap text can overflow); render-proof limitation (no Chrome binary in this seat — logic-level harness + code inspection, not rendered frames; Wave-1 precedent); figure-crowding (avoided by one-figure-at-a-time, priced above); phase Jev/Codex guards BUILT-NOT-FIRED/UNBUILT.

## §3 Execute notes
- Segment: ffmpeg `-ss 99.5 -t 23` (1:39.5–2:02.5, catalogue ±0.5s handles), libx264 ultrafast yuv420p + AAC, faststart omitted on re-encode after first encode was killed by a service restart (moov missing — detected by ffprobe, re-encoded clean). ffprobe: h264 1916×1078, 30/1 fps, AAC, duration 23.000s, size 7,435,991 bytes.
- recreation.html: 15,354 bytes at first write (pause-offset fix applied in §5). One self-contained file, no external assets.
- comparison.html: 2,313 bytes; video + iframe, shared controls slave recreation clock to video currentTime via T17.render().

## §5 Verify — legs 1–3 (own, before Codex)
- Leg 1 SWAP TEST (node logic harness extracting CONFIG + replicating counter math, on scratch copy /tmp/t17_swap.html): altered values — masthead "THE DAILY STANDUP"→"THE WEEKLY LEDGER"; palette.red #c1271f→#0a7a42; FIG.21 start 3.6→4.4; FIG.20 title "Humanity's outlook…"→"Markets, according to my last two charts". Result: PASS (logic level) — harness on altered copy returns the new masthead, new red, figStarts [0,4.4,7.5,11.1,14.7,18.7]; counter math invariant verified on defaults: start 3,412,083,117, mid (p=0.5) 3,410,759,588, end (p=1) exactly 1. No break; no retest needed. Render-proof limitation applies (no Chrome).
- Leg 2 PURITY: grep of recreation.html for segment.mp4 / source.mp4 / `<video` / t103 / t114 / t116 / .jpg / .png — ZERO hits; `<img>` count 0. Asset inventory: recreation loads nothing external — all DOM/SVG generated from CONFIG in code. PASS.
- Leg 3 COMPARISON: shared Play/Pause + Restart drive video; recreation slaved via requestAnimationFrame → T17.render(video.currentTime clamped 0–22.5); durations segment 23.00s vs recreation 22.5s (0.5s handle difference, printed); labels verified verbatim: `ORIGINAL — "Look What I Can Do" @ 1:40–2:02` and `RECREATION — T17 Fake-newspaper animated dataviz, parameterized`; phone stacking: `@media(max-width:700px)` column layout, controls sticky top with 48px buttons. PASS (code-inspected; render-proof limitation).
- Leg 3b jev-prewave + phase Jev/Codex guards: SKIPPED-WITH-REASON — BUILT-NOT-FIRED/UNBUILT in this seat per INSTRUCTION/RUN.md; not invented.
- Leg 4: five-lens Codex wave — see scores.md + codex/ returns.
