# Plan Amendment — T208 · Cycle 037 · Wave 34 (filed BEFORE any build script, per charge)

Item record (NOT retro-edited): `runs/2026-11-18-cycle-037-wave-34/item-T208-observe-plan.md`. This amendment cures every charge from the two wave exit gates. Gate returns consumed in full: `jev-observe-exit-T208-return.md` (ADVANCE-WITH-GAPS, all dimensions 1.0, 4 named gaps) and `jev-plan-exit-T208-return.md` (REVISE, primary UNBOUND-SCHEDULE; dimensions param 0.70 · construction 0.90 · execute 0.75 · verify 0.75 · failure 0.85 · plateau 1.00; 4 named charges). Item-record §P9 R1–R5 (codex-plan-review cures) remain binding and are incorporated, except where this amendment corrects R2's cascade anchor (charge C1 below).

**Charges cured: 8** (4 plan-exit charges + 4 observe-exit gaps; the Texas-anchor gap appears in both returns and is cured once as C1/G4).

## C1 / G4 — Texas cascade reconciled with the census (plan-exit charge 1 = observe-exit gap 4)

The defect: item-record §P3's build clock is `buildMs = (sourceT − 84.0) × 1000 + 500`, i.e. build 0 = source 83.5 s. The spoken "36" at source 90.43 s therefore maps to build **6930 ms**, not §P9 R2's 5430 ms (which maps to source 88.93 s). A cascade starting at 6930 ms with a 2000 ms window would end at 8930 ms — after CP4 (8000 ms) requires all 36 dots visible. 

**Cure — cascade onset is separated from the spoken cue.** The census (§O2 frames 5–7) shows the cascade brackets the count sentence: dots are already landing at source 90.5 s and the grid is complete at 91.5 s; the sentence "Texas has 36 representatives" runs 89.43–92.21 s. The compiled schedule therefore carries TWO distinct values:
- `columns[tx].events.spokenCueMs = 6930` — the spoken "36" (90.43 − 83.5 = 6.93 s), a narration anchor only; no animation starts on it.
- `columns[tx].events.revealAnchorMs = 6430` — the cascade ONSET (source 89.93 s, mid-sentence, ≈0.5 s after the sentence opens at 89.43 s and ≈0.5 s before the spoken "36"), from which the landing window runs.

**Compiled defaults** (derived by the one compiled schedule: stagger = (cascadeMs − dotSettleMs) / max(count−1,1); start_i = onset + i×stagger in column-wise order; settled_i = start_i + dotSettleMs; a reveal is clamped to predecessor completion per R2c):
- cascadeMs = 1350, dotSettleMs = 220 → stagger = (1350−220)/35 = **32.286 ms**; first dot starts 6430, last dot starts 6430 + 35×32.286 = 7560, last settles **7780 ms**.
- Tile fade (see C2 contrast): fadeStart = onset − 600 = 5830, tileFadeMs = 900 → faded level reached 6730; tile then dissolves to 0 at cascade end 7780.

**Compiled defaults printed against every named census state** (default configuration; segment-relative build ms; source t = build/1000 + 83.5):

| Census instant | Build ms | Compiled state at that instant |
|---|---|---|
| CP1 · 85.5 s TX alone, pop counting | 2000 | TX visible (entrance complete 1500); popDisplay strictly between 0 and 25,268,000 (count-up 1500→3300, at 2000: 27.8% → ≈7,024,444); VT absent (entrance 3630) |
| CP2 · 89.5 s both tiles, pops complete | 6000 | pops at full CONFIG values (TX done 3300, VT done 5630); dots landed 0 (cascade onset 6430); VT square placeholder not yet (appears 6900) |
| CP3 · 90.5 s cascade mid-flight | 7000 | TX dots: started = 18 (starts ≤7000: i ≤ (7000−6430)/32.286 = 17.7 → i=0..17), settled = 11 (settled ≤7000: start ≤6780 → i ≤ 10.8 → 11 dots — matches census ≈11 landed), in-flight = 7 (≥1 ✓ per R1); TX tile opacity = 0.12 (< 0.5 ✓); VT round dots = 0, VT placeholder square present |
| CP4 · 91.5 s TX grid complete | 8000 | TX dots settled = 36 (last settled 7780 ✓); TX tile opacity = 0; VT round dots = 0 (zero-state anchor, guards.md #8) |
| VT sample · 94.0 s morph mid-flight | 10500 | morph progress = (10500−10210)/600 = 0.483 → VT dot present, scale strictly between placeholder and full, ink < full (matches supplementary frame 20) |
| VT sample · 94.5 s morph complete | 11000 | morph progress = 1 → VT dot full size/full ink (matches supplementary frame 21) |
| CP5 · 95.0 s VT dot present | 11500 | VT dots = 1; TX = 36; ratio labels visible = 0 (annotation compiled start 13000) |
| CP6 · 98.0 s arrows drawing | 14500 | both ratio labels visible, derived 702,000 / 630,000; arrow progress = (14500−13000)/3000 = 0.5 → dash-offset strictly between 0 and full ✓ |
| CP7 · 100.5 s final state | 17000 | arrows complete (16000); full paired state holds |

**Fixed census instants vs CONFIG-derived probe movement (shown separately, per the charge):** the fidelity check above evaluates at the FIXED census instants (2000/6000/7000/8000/10500/11000/11500/14500/17000) under the default CONFIG. The A11 assertions additionally carry CONFIG-expression evaluation instants that MOVE under the timing swap (cascadeMs ×1.5 = 2025): CP3-eval = `revealAnchorMs + round(0.42 × cascadeMs)` = 6430+567 = **6997** default → 6430+851 = **7281** swapped; CP4-eval = `revealAnchorMs + cascadeMs + dotSettleMs` = **8000** default → **8675** swapped. The timing-swap receipt in build-record.md shows both moved instants with their raw results (A12).

## C2 — CONFIG defaults completed (plan-exit charge 2; observe-exit gaps G1/G2/G3 folded)

Every key below is a CONFIG default in recreation.html; the item record §P1 stands for all keys not listed here.

- **Column positions / board top:** `boardTop = 150` (stage px); `columns[tx].x = 130`, `columns[vt].x = 570` (column left edges, stage px); `labelBandH = 104`, `annotationBandH = 96` (reserved bands, badge note).
- **Ratio label offsets:** `columns[].ratioLabelDx / ratioLabelDy` — TX {dx: 300, dy: 6}, VT {dx: −150, dy: 6} (stage px, relative to the column's grid origin; labels sit in the centre annotation band between/below the grids).
- **Arrow curvature:** `arrowCurve = 0.35` (cubic control-point offset as a fraction of the label→grid distance, applied perpendicular).
- **Annotation onset:** `annotationAnchorMs = 13000` (source 96.5 s, where census motion findings place the draw-on window 96.5–99.5 s); compiled annotation start = max(annotationAnchorMs, lastRevealSettle + holdAfterCountMs) = max(13000, 10810+1200) = **13000**; `arrowDrawMs = 3000` (complete 16000, source 99.5 s ✓ census "near-complete at 99.5, complete by 100.5").
- **Count-up easing bound separately from duration (G2):** `countUpEasing = 'linear'` is its own CONFIG key; durations are per-column `columns[].countUpMs` — TX 1800 (1500→3300, complete before census 87.0 s ✓), VT 1500 (4130→5630, complete before CP2 ✓). `countUpMs` never encodes easing.
- **Vermont morph (G1):** scheduled start = spoken "one" 93.71 s → `columns[vt].events.revealAnchorMs = 10210`; `placeholderMorphMs = 600` → completes 10810 (source 94.31 s), inside the observed ≈93.7–94.5 s bracket; the planned morph is checked against the sampled states at 94.0 s (mid-flight) and 94.5 s (complete) in the table above.
- **Silhouettes (G3):** `columns[].tile.silhouette` ∈ {'tx','vt','none'} stays a CONFIG token selecting a simplified code-drawn path; fidelity check = the silhouette path is non-degenerate (bbox ≥ 40% of tile width and height) and present throughout the tile hold (CP1/CP2 tile opacity = 1) — recognizability priced as presence + proportion, the lawful proxy in this seat (PIXEL-UNVERIFIED stands).
- **Supported count/spacing bounds:** per column count ∈ [1, 64]; gridCols ∈ [1, 12]; grid pitch = 2×dotR + dotGap = 47 stage px; a column's grid must satisfy gridCols × pitch ≤ 360 and ceil(count/gridCols) × pitch ≤ 330 (the reserved board); ratio derivation requires count ≥ 1 and population ≥ 0 (division by zero is unrepresentable: count 0 fails CONFIG validation in the harness). Defaults (36 @ 6 cols → 282 × 282 px) sit inside the bounds.
- **Contrast gate (plan-review R2a, carried):** `tileContrastGate = 0.55`; dots and tiles render on separate layers; the earliest landing is probed: at first-dot start 6430, TX tile opacity = 1 − ((6430−5830)/900) × (1 − 0.12) = **0.413 ≤ 0.55** ✓ (tile faded level `tileFadedOpacity = 0.12`, reached 6730, then dissolving to 0 at cascade end 7780).
- **Landing geometry (R1, carried):** `dotLandScaleFrom = 1.6`, `dotLandDy = −8`, settling over dotSettleMs; CP3 asserts ≥1 in-flight dot (scale strictly between 1 and 1.6) and ≥1 settled dot at the same instant (compiled: 7 in flight, 11 settled ✓).
- **Events per column (R2b, completed):** TX events {entranceMs: 500, countUpStartMs: 1500, revealMode: 'cascade', revealAnchorMs: 6430, spokenCueMs: 6930}; VT events {entranceMs: 3630, countUpStartMs: 4130, revealMode: 'morph', revealAnchorMs: 10210, spokenCueMs: 10210}. Vermont has exactly ONE reveal (the morph); no cascade path exists for a 'morph' column. VT placeholder: square appears at 6900 (VT tile fades 6000→6900 as the TX cascade runs, per census frame 6) and holds until the morph.
- **Ratio rounding (Phase A, carried):** `ratioMode = 'derived'`, `ratioRounding = 1000`; ratio = round(population/count/1000)×1000 → TX: 25,268,000/36 = 701,888.89 → **702,000**; VT: 630,000/1 = **630,000**.

## C3 — Verify instruments completed (plan-exit charge 3)

- **Loaded-asset inventory (the recreation loads exactly these):** (1) recreation.html itself — inline CSS + inline JS only; (2) NO external scripts, stylesheets, fonts, images, or media — the texture is a CSS gradient, silhouettes are inline SVG paths drawn from CONFIG tokens, dots are SVG circles generated from `columns[]`; (3) comparison.html loads segment.mp4 (the labeled ORIGINAL side only) + recreation.html in an iframe. Any other loaded asset is a purity defect.
- **Exact checkpoint expressions** (harness-evaluated against `stateAt(CONFIG, t)`; S = compiled schedule): CP1: `cols[0].visible && cols[0].popDisplay>0 && cols[0].popDisplay<cols[0].population && !cols[1].visible` @2000 · CP2: `cols.every(c=>c.popDisplay===c.population) && totalStarted===0` @6000 · CP3: `tx.settled>=8 && tx.settled<=16 && tx.inFlight>=1 && tx.tileOpacity<0.5 && vt.roundDots===0` @7000 (CONFIG-eval twin @`revealAnchor+round(0.42*cascadeMs)`) · CP4: `tx.settled===36 && tx.tileOpacity===0 && vt.roundDots===0` @8000 (CONFIG-eval twin @`revealAnchor+cascadeMs+dotSettleMs`) · VT94.0: `vt.morphProgress>0 && vt.morphProgress<1` @10500 · VT94.5: `vt.morphProgress===1` @11000 · CP5: `vt.roundDots===1 && tx.settled===36 && ratioVisible===0` @11500 · CP6: `ratioVisible===2 && ratioText===['702,000','630,000'] && arrowProgress>0 && arrowProgress<1` @14500 · CP7: `arrowProgress===1 && tx.settled===36 && vt.roundDots===1` @17000 · EARLIEST: `tileOpacityAt(tx, firstDotStart) <= CONFIG.tileContrastGate` @6430 · ANNOT-GATE: `ratioVisible===0` @12009 (one ms before the compiled hold completes).
- **Executable swap fixtures (full replacement columns, events + layout included):**
  - *Content (2-col):* Alpha {x:130, population:1200000, count:12, gridCols:4, tile:{w:290,h:290,silhouette:'none'}, events:{entranceMs:500, countUpStartMs:1500, revealMode:'cascade', revealAnchorMs:6430}} · Beta {x:570, population:300000, count:3, gridCols:3, tile:{w:175,h:175,silhouette:'none'}, events:{entranceMs:3630, countUpStartMs:4130, revealMode:'cascade', revealAnchorMs:6430}} → derived ratios 100,000 / 100,000; dot totals 12 / 3; Beta's cascade is clamped to Alpha's settle completion by the compiled schedule.
  - *1-column:* [Alpha as above] → totals 12; ratios ['100,000']; no second column rendered; annotation still draws.
  - *3-column:* Alpha 12/4 as above · Beta 3/3 as above · Gamma {x:570→ layout rule: x = 130 + idx×300 for idx≥2 → 730 exceeds stage; therefore 3-col fixture uses x = 60 + idx×300 (60/360/660), boardTop 150 for all, tile w 240} Gamma {population:250000, count:5, gridCols:3, events:{entranceMs:6760, countUpStartMs:7260, revealMode:'cascade', revealAnchorMs:6430}} → totals 12/3/5; ratios 100,000 / 100,000 / 50,000; each fixture asserts event order (entrances non-decreasing, reveals clamped non-overlapping), generated dot totals, derived ratios, and reserved-band non-collision (label ink widths measured in fit-table form ≤ band width).
  - *Timing:* cascadeMs 1350 → 2025 (×1.5) on the default columns; CP3/CP4 CONFIG-eval instants move 6997→7281 and 8000→8675 (receipt shows both).
  - *Palette:* palette.arrow '#5b84ae' → '#c2543a' only.

## C4 — Entrance transition accounted (plan-exit charge 4)

Census §O2 names an entrance transition at 84.5–85.5 s (the prior Capitol scene exits as the Texas column enters). **Specification:** `entranceTransitionMs = 1000`; each column fades + rises (opacity 0→1, translateY 12→0 stage px) over [entranceMs, entranceMs+1000] — TX [500,1500] (source 84.0–85.0, completing as the census transition completes at 85.5), VT [3630,4630]. **Reduction recorded with reason:** the source transition is a crossfade FROM the prior T06 Capitol scene; that scene is a different technique and is NOT recreated (item-record §P9 R5: the opening handle shows the empty paper stage with texture only). The recreation therefore renders the incoming half of the transition (column fade/rise on the empty stage) and omits the outgoing half; the reduction is priced here, not silently dropped.

## Standing items carried unchanged
Schedule basis = segment-anchored; segment 83.5–102.5 s (19.0 s); handles per R5 (opening = empty paper stage; closing = final paired state holding; T209 not recreated); PIXEL-UNVERIFIED limitation; bar = five-lens average ≥85 AND min ≥70; plateau prediction (reusability minimum; family benchmark 87.0) stands per R4.
