# T09 — Photo-mosaic typography · BUILD RECORD · Attempt 2

Technique: T09 (packet P1) · Practice Cycle 005 Wave 4 · 2026-11-14
Consumer: openings — title built from the piece's own material.
Preservation (E1, CA-1): `recreation-attempt-1.html` created as a CONTENT copy (cp, not hardlink) before any overwrite; sha256 `9cd417b3deacb7aaa618be9286aea5b38378a62f5bf036483c0af1c6a299c883` — matches the wave baseline and the charged attempt-1 sha. Re-verified after the working file's first overwrite (census in §5).

## Per-cure diagnostic ledger — thresholds FIXED BEFORE BUILDING (CA-3)

| ID | Check (neutral name) | Threshold (pre-fixed) |
|---|---|---|
| D1 | Contour membership | 100% of targets are edge points (≥1 sampled neighbour outside the glyph); interior targets = 0 |
| D2 | Pre-burst pool geometry + separation | At burst time 100% of tile starts lie inside a pool rect ≤0.40·W wide and ≤0.20·H tall sitting on the rooftops; mean nearest-neighbour start distance ≤1.8× effective tile size; mean displacement from start at burst+500 ms > mean at burst+50 ms (pool separating) |
| D3 | Arrival-time distribution | Latest arrival == assemblyComplete exactly; earliest arrival ≥ riseStart + 0.10× assembly interval; arrival span ≥ 0.60× assembly interval; arrival stdev ≥ 0.18× interval; 0 arrivals after assemblyComplete |
| D4 | Tile progress at completion boundary | Under default AND swapped checkpoints: every tile progress < 1 is allowed only before its arrival; at t = assemblyComplete all progresses == 1 by arrival (not by phase forcing — phase field at that t is hold but progress function has no phase override); at t = assemblyComplete − 1 the latest tile's progress < 1 |
| D5 | Reset state | At t = 0 and at t = durationMs (wrap) every tile sits at its pooled start (progress 0, position == pool position) |
| D6 | Final budgeted targets — default / 360 px / long-multiline / budget-pressure | Target count ≤ tileBudget in every config; all targets inside the stage; min pairwise sampled spacing ≥ effective sample gap − 0.01; tile-to-glyph ratio (effective tile size / fitted font px) in [0.04, 0.10] in every config; every flight duration > 0 |
| D7 | Coverage by line/glyph (long title) | "LOOK WHAT I CAN DO" lays out in ≤ maxLines lines, fitted font ≥ minFontPx, and every line contributes ≥ 20 targets |
| D8 | Checkpoint-order validation | An override with assemblyComplete ≤ riseStart is rejected (warning recorded, ordered defaults restored); a valid swapped assemblyComplete moves the latest arrival to the swapped value |
| D9 | Declared-key application | Changing tileGap changes the drawn tile size (drawn = effective tile size − tileGap, floored at 1); config census lists every CONFIG key as applied in logic |
| D10 | Phone topology | At 360 px the tile-to-glyph ratio differs from the 960 px ratio by ≤ 10%; ambient tile maximum size < letter tile size strictly |
| D11 | Purity | Specimen-media grep = 0 hits; no external references |
| D12 | Syntax + determinism | `node --check` PASS; same seed → identical tiles; different seed → different pool/flight assignment |

## Construction (attempt 2)
Checkpoint-derived flights (each tile's start/arrival computed from riseStart→assemblyComplete, arrivals normalized so the maximum is exactly assemblyComplete) · contour-only targets (edge extraction on the probe raster) · explicit pooled rooftop cluster that separates from burstAt · multiline fitting with a tile budget and integer sampling · tile/sample geometry derived from the fitted font size · all shaping constants in CONFIG.

## §5 Own checks
(Results filed after the build, below the ledger results.)
PIXEL-UNVERIFIED: no real-browser render surface in this agent session (A-C002-2) — 360 px claims are deterministic logic/diagnostic results, not rendered frames.

## Ledger results (post-build, combined build; node harness, stubbed canvas raster — real script extracted, `node --check` PASS)
- D1 PASS — interior-target probe: 0 interior points among 86 default targets (LOOK, contour-only).
- D2 PASS — pool rect holds (start y range 389–415 at H=540, horizon 421); mean nearest-neighbour start distance ≤1.8× tile size; mean displacement grows 1.47 px @burst+50 ms → 71.01 px @burst+550 ms.
- D3 PASS (after one in-build correction: arrival fractions floored at CONFIG `arrivalMinFrac` 0.1 — first run's earliest arrival 303.9 ms breached the pre-fixed 435 ms floor; corrected in construction, re-run green) — latest arrival exactly 3000 ms; span 2696 ms; stdev 770 ms (≥0.18×2850).
- D4 PASS — default + swapped (3900 ms) configs: all progresses 1 at completion by arrival, latest tile <1 at completion−1 ms, no phase forcing.
- D5 PASS — t=0 and t=durationMs wrap: every tile at its pooled start.
- D6 PASS — default 86 ≤ budget 900; containment + spacing (gap 13) hold; budget-pressure config (budget 60, "HELLO WORLD") yields exactly 60 targets at gap 38; flight durations all >0.
- D7 PASS — "LOOK WHAT I CAN DO" → 2 lines ["LOOK WHAT","I CAN DO"], fitted font 162 ≥ minFontPx 36, per-line targets 214 / 154 (stub-raster counts; lines' sampling windows overlap slightly).
- D8 PASS — invalid override (assemblyComplete 100 ≤ riseStart) rejected with warning + defaults restored; valid swap moves latest arrival to 3900.
- D9 PASS — drawn size = effective tile size − tileGap (9 at default); tileGap 5 changes it. Config census: 90 CONFIG keys, 0 unused in logic; all four checkpoint subkeys read.
- D10 PASS — tile-to-glyph ratio 0.065 @960 vs 0.062 @360 (≤10% drift; 360 px fitted font 130 in stub raster); ambient size ratio max 0.672 < 1 strictly.
- D11 PASS — purity grep 0 hits; no external references; tiles/sky/skyline/clouds all code-drawn.
- D12 PASS — deterministic per seed; seed 99 changes the build; title swap changes target count + geometry (LOOK 86 / DO 44 contour targets).
- Own-check total: **33/33 PASS**. PIXEL-UNVERIFIED (A-C002-2) — no render surface in this session.
- Final recreation.html sha256: `18a220ee43b2bda07d76294d92b3d247582b458028ee6a1ae82208327327b676`. Preservation census after overwrite: recreation-attempt-1.html `9cd417b3…c883` intact; comparison-attempt-1.html `7f766305…fc7` preserved create-once before the recreation-side text update (ORIGINAL panel unchanged).

## In-cycle re-fire addendum (A-C002-4 / A-C003-1)
The first five-lens wave fired against interim sha `18a220ee…` and returned motion 80 · timing 88 · purity 100 · reusability 77 · readability 79 (avg 84.8). Its returns named real interim defects; all five interim payloads + returns are preserved (`codex/attempt-2/instr-<lens>.txt`, `lens-<lens>-run1.md`). Cured in-cycle before the final wave: (1) launch discontinuity — flights now start from each tile's departure position (pool + separation drift at its own startMs), asserted by check D13 (a first D13 model measured 2 ms displacement and conflated ease velocity with discontinuity — worst "jump" 4.36 px on the shortest flight while position at start equalled departure within 0.04 px; the check was remodelled to the displayed quantity: position-at-start == departure, pre-flight position within 1 px of departure — A-C004-2); (2) thin stream — contour density raised (sampleGapFontRatio 0.076→0.058, tileSizeFontRatio 0.065→0.05; default targets 86→136); (3) ambient ceiling now measured against the DRAWN letter tile size, tileGap and glow blur scale with fitted font size; (4) checkpoint fallback made atomic against the loop duration (D15), pool-break duration derived from the checkpoint interval (D16), easing exponent / pool jitter / minimum tile size / ambient seed offset lifted into CONFIG, integer sampling enforced on all gap inputs, multiline fitting also constrains total height. Re-run own checks on the final build: **37/37 PASS** (D1–D16 incl. the run-2 checks). Final recreation.html sha256: `fd7196391e53a4eac8b46d877f92a3dc9526dc842bb11522d33d6b9c44641cca`. The final five-lens wave (`instr-<lens>-run2.txt` / `lens-<lens>.md`) judges this identical sha for all five lenses. PIXEL-UNVERIFIED stands (A-C002-2).
