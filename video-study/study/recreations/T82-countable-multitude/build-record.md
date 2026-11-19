# T82 — Countable multitude · build record (attempt 1, Cycle 014 Wave 12)

Queue #39 · Packet #4 (The Good Takeoff, YouTube jkDBk8QFcyY) · P4-T09
Artifact dir: `hidden_files/study/recreations/T82-countable-multitude/`
Governing: recreation INSTRUCTION.md §1–§6 + Amendments A1/A2/A3/A5/A6/A7; wave RUN.md §1/§2/§2b (AMENDED plan governs).
Consumer: DLC assembler DIAGRAM surface — countable-multitude grid with one lit cell (distribution claims drawn as grids).
Schedule basis (A7): `segment-anchored` — measured anchors below bind the schedule; labeled allocation where noted.

## §1 Observe — gate-out
- **Mechanics:** a multitude claim is drawn as a countable wall — ~1,080 tiny scan glyphs on a grid (40×27), exactly one lit cell at the center (the protagonist's), a small amber grid block beside the wall, HUD furniture (2037 · A POSSIBLE TUESDAY / 06:15) persisting top-left. Digest P4-T09 + TECHNIQUES T82 agree; evidence ev/t41.jpg viewed firsthand by builder (dense pale grid on deep blue, larger lit scan at center, amber block lower-left, yellow figure at edge — figure is scene furniture, not the technique; not built).
- **Caption exclusion (named):** the frame's bottom narration line ("in history put together.") is narration CAPTION text — fleet law bans captions in the recreation. Not reproduced anywhere.
- **codex-observe:** CONFIRMED-WITH-GAPS (verbatim `codex/codex-observe.md`). Gaps disposed: (1) highlight treatment — resolved firsthand from segment frames: the lit cell is an enlarged scan thumbnail standing in the grid at center (not an ordinary cell, not a detached overlay) → construction renders it enlarged in place, clamped. (2) Amber behavior — resolved from frames: amber block is absent during wall expansion, grows in after the wall completes, full by seg 6.5 s; no per-cell data encoding is evidenced → construction grows it in count order as a plain block. (3) Timing — measured firsthand (below). (4) Prior-attempt absence — seat census in RUN §1 (36 dirs, none for T82).
- **Variables:** hud{year,dayLine,clock} · grid{cols,rows} · lit{index,scale} · amber{cols,rows} · palette{bg,cell,lit,amber,hudInk,panel} · buildMs · pulseMs · holdMs · timeline{litAloneMs,amberDoneMs} · type{font} · geom{…}.

## MEASURED anchor bounds (OBSERVED vs ALLOCATION) — filed BEFORE the lens wave (§2b charge 11)
Segment frames extracted at 1 s spacing (f01–f14, segment t = frame−1 s) + 0.5 s brackets around the wall moment (b01–b06, segment t = 4.0 + (n−1)×0.5 s); all viewed firsthand.
| Anchor | OBSERVED bound | Evidence |
|---|---|---|
| Lit cell lights | ≤ seg 4.0 s — the lit scan stands ALONE on the blue field at seg 4.0 s and 4.5 s, before any wall cell exists | f05 (t=4), b02 (t=4.5) |
| Wall expansion | under way at seg 5.0 s (oval, incomplete) | f06 (t=5) |
| Wall stands complete | in (5.0, 5.5] s — rectangular and complete at seg 5.5 s, amber partial (3 rows) | b04 (t=5.5) |
| Amber block complete | in (5.5, 6.5] s — full 8-wide block at seg 6.5 s | b06 (t=6.5), f07/f08 |
| Hold | wall + lit + amber persist unchanged through seg 13 s | f08–f14 |
| Pre-wall beats | seg 0–4 s are the lung-scan scene (a different beat) | f01–f04 |
- **ALLOCATION (labeled):** the recreation isolates the technique (§8): the lung-scan beats (seg 0–4 s) are a named deferral; the lit-alone state observed at seg 4.0–4.5 s is carried from loop 0 for its measured endpoint duration (litAloneMs 4500). All later anchors sit at their measured segment times.
- **Re-anchoring (recorded change + evidence):** Plan buildMs 2600 + holdMs 11400 → **buildMs 5500** (the measured wall-complete upper bound; buildMs = wall-complete time, population runs litAloneMs 4500 → buildMs 5500 in count order) · **amberDoneMs 6500** (measured) · **holdMs 7500** (post-amber hold: 6500 + 7500 = 14 000 ms loop). Evidence: bracket frames above.

## §2 Plan binding + guard dispositions
- **Parameter table:** as built in CONFIG (recreation.html top): hud{year:2037,dayLine:"A POSSIBLE TUESDAY",clock:"06:15"} · grid{cols:40,rows:27} · lit{index:539,scale:3} · amber{cols:8,rows:10} · palette{bg:"#0d2150",cell:"#7d9cc9",lit:"#ffffff",amber:"#e8a91c",hudInk:"#f5f2e6",panel:"#12305e"} · buildMs:5500 · pulseMs:900 · holdMs:7500 · timeline{litAloneMs:4500,amberDoneMs:6500} · type{font:"Georgia, 'Times New Roman', serif"} · geom{stageW:360,stageH:320,dpr:2,HUD/wall/amber geometry,glyph ratios,shade range,pulseGain,glowPx}.
- **Construction:** canvas grid, one reusable glyph primitive (`drawGlyph`), cells generated from CONFIG bounds only — no per-cell markup. Rejected: DOM 1,080 nodes (heavier, no mechanic served) · video/frame embedding (refusal-class) · traced redraw (refusal-class).
- **codex-plan-review:** REVISE (verbatim `codex/codex-plan-review.md`). Disposition — APPLIED as construction requirements: (1) phone geometry defined in geom (stage 360, wall 272×240, cell pitch 6.8×8.9 px, glyph footprint ~5.6×7.3 px); (2) lit footprint specified — scale 3 (≈20×27 px), white on pale field, glow 8 px, clamped inside wall (edge-safe for any index, incl. swapped 123); (3) phase timeline CONFIG-driven with explicit lit-alone/build/amber/hold boundaries at measured anchors (above); (4) timing swap moves phase boundaries coherently via the swap CONFIG set (recorded in §5a); (5) lens predictions stated: motion 88 · timing 86 · purity 97 · reusability 84 · readability 76 (predicted minimum; density is the honest risk) — total 431, avg 86.2 if predictions hold; (6) size discipline — one primitive, bounded CONFIG, file 6 KB.
- **Owner Cures translated:** Cure 1 — lit cell foreground intensity by construction (white #ffffff, 3× footprint, glow; field cells ≤ #7d9cc9 at shade 0.55–1.0 alpha). Cure 2 — phase exclusivity by the phase machine in `computeState` (lit-alone → build → amber → hold; one phase owns the stage; completed phases persist, none overlap).

## §3 Execute
1. codex-observe fired FIRST (one stream, `cat payload | codex exec --skip-git-repo-check -`, no stdin field) ✓ → `codex/codex-observe.md`.
2. codex-plan-review fired the same way ✓ → `codex/codex-plan-review.md`; disposition above.
3. Segment cut: source 34–48 s → `segment.mp4`, ffprobe **14.000 s**, 8,780,784 bytes, sha256 35cbb892cd354bf4a15f12ad55daf87ba1bdbf3c64660b516958b057f260493b, faststart.
4. Measured anchors ✓ (table above, before the wave).
5. recreation.html ✓ — self-contained, CONFIG-first, seekable `__render(t)`, no captions, no specimen media. Final sha256: see scores.md.
6. comparison.html ✓ — ORIGINAL (segment.mp4) + recreation iframe (`?slave=1`, slaved to video currentTime via `__render`), ONE synchronized control set, labels "ORIGINAL — The Good Takeoff @ 34–48s" / "RECREATION — T82 Countable multitude, parameterized", phone stacking (flex-wrap, 360 px figures, 48 px buttons).

## §5 Own checks (recorded results)
- **(a) Swap test (node harness, `?cfg=` override route, EXACT amended values):** hud.clock "06:15"→"09:45" ✓ · lit.index 539→123 ✓ · buildMs anchored 5500→1400 (timing; accompanying phase keys in the swap CONFIG set, recorded: timeline.litAloneMs 4500→1100, amberDoneMs 6500→1700, holdMs 7500→12300 — loop stays 14 000 ms) ✓ · palette.amber "#e8a91c"→"#3fd68f" ✓. Results: TOTAL 14000 both builds · default phases exact (lit-alone <4500 · build 540/1080 at 5000 · wall complete 5500 · amber 40 at 6000 · hold at 6500) · swapped build completes at 1400 with all 1080 cells, amber full at 1700. **17/17 assertions PASS. SWAP: PASS.**
- **(b) Purity:** grep `segment\.mp4|source\.mp4|ev/|t41\.|jkDBk8QFcyY|video-digests` on recreation.html → **0 hits**; `<video` 0; `<img` 0. Asset inventory: recreation.html loads NO external assets — every cell is code-drawn by `drawGlyph`; segment.mp4 exists only as the comparison's labeled ORIGINAL side.
- **(c) Syntax:** inline script extracted, `node --check` → OK.
- **(d) Comparison:** both sides labeled as above; shared Play/Restart drives video + recreation render(t) from video.currentTime; durations: segment 14.000 s vs recreation loop 14 000 ms ✓; stacking by CSS flex-wrap.
- **(e) A6 legs:** `fit-table.md` HITs 0 · `config-census.md` HITs 0 (two pre-census cures: glyph inner-line color literal → palette.bg; shade/pulse/glyph-line constants → geom keys).

## Fidelity plan
Implemented: countable wall in count order · lit-before-wall sequence · one enlarged lit cell at CONFIG index · amber block growing after wall completion · measured phase anchors · HUD persistence · pulse during hold (pulseMs CONFIG; the specimen's lit cell appears static in stills — pulse is a named, CONFIG-bounded emphasis choice, priced by the wave).
Deferred (named): lung-scan pre-beats (seg 0–4 s, different beat) · yellow figure + room scene (scene furniture, §8 size discipline) · per-cell scan imagery detail (cells are generic code glyphs by purity law §6.1 — the multitude's countability is the technique, not any scan's content).

## Limitations
PIXEL-UNVERIFIED: no browser binary exercisable in this seat; verification is LOGIC level (node harness) + geometry arithmetic (fit-table) + the comparison page as render surface. Cell count 40×27 = 1,080 is the Plan's binding reading of "roughly a thousand" + the seat's ~40×27 frame estimate; the frame itself was not cell-counted mechanically.
