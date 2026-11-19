# Item T241 — Phase A (Observe + Plan) · Wave 38 · Cycle 041

- **Item:** T241 — Probability board as the opening shot (formula first, story second) · queue #106 · FIRST ATTEMPT · Packet #14 (@ensan.besham "Hope = Failure (?)", IG DffiIpmMAC3), packet-local T02.
- **Artifact directory:** `hidden_files/study/recreations/T241-probability-board-opening/`
- **Segment window (source):** 0–13 s per digest §T02 + style-library techniques-openings.md §T241. Segment cut at Execute: 0–13.5 s (window + 0.5 s handle), re-encoded h264+AAC.
- **Schedule basis (A7):** **two-act** — Act 1 is a **t=0 allocation**: the layered draw-on (reticle → magnifier+star → array → formula) is compressed into build 0–1400 ms, because the census shows the board already standing at segment t=0 (its build happened at/before the window edge; the digest's "draw on in layers over the first seconds" is the technique's claim and the task charge names this order). Act 2 is **segment-anchored**: expansion type-on, slot fill, hold and board dissolve sit at their census-measured segment times (type-on completes ≈3.4 s · slot filled by 4.0 s · dissolve 5.4–6.2 s). Departures are printed in the census-anchor mapping (§2.2).
- **Bar (standing §2.3):** five-lens average ≥85 AND no lens <70 → PASS, else FAIL.
- **Consumer:** DLC assembler opening / diagram containers (task charge; digest §2 names the diagram container surface).

## §1 — OBSERVE

- **Queue state (read this cycle):** QUEUE.md recreation section, Wave 37 update line: rows #106–#113 stand OWED from Packet #14 (T241 · T242 · T243 · T244 · T247 · T248 · T249 · T250); T241 = #106, DESCRIBED/OWED, first attempt owned by this job (A3 §3). Wave RUN.md §0b/§1 concurs. No prior scores.md, no verdict-history line, no prior attempt for T241 — FIRST ATTEMPT, no plateau to price (A2 inapplicable; stated here so Plan-exit leg 6 is answered, not skipped).
- **Consumer (named, §1.4):** the **DLC assembler opening container / diagram container** — an explainer cold-open that must establish a quantitative claim before any narrative: the board machinery (reticle + magnified subject + population array + typeset formula) is lifted whole as the opening shot of a diagram-led piece.

### 1.1 Catalogue mechanics (read firsthand)
- Digest §T02 (0–13 s): "the piece opens mid-diagram, not on a title: a targeting-reticle icon at top, the star figure inside a magnifier circle labelled (paraphrase) 'cause of failure no. 1', a 40-icon population array below, and the conditional-probability line P(F|H) ≈ 0.98 with its Bayes expansion typeset underneath. Elements draw on in layers over the first seconds while the voice states the thesis." Why: "the AI persona's authority is established by showing its native notation before any narrative."
- Style-library techniques-openings.md §T241: agrees verbatim on mechanics, window (P14 @ 0–13 s), evidence (ev/001 · ev/005 · clips/000). Tier DESCRIBED — OWED #106. No digest↔register disagreement.
- **Firsthand corrections / priced readings (binding on the build):**
  1. The board is ALREADY standing at segment t=0 (census f-0): reticle, magnifier+star+callout, full 40-icon array, formula line and expansion line 1 (partial) are all present in the first frame. The in-window motion is: expansion lines type on character-by-character (line 1 completes ≈0.8 s, line 2 ≈2.2 s, line 3 lands ≈3.4 s), corner brackets appear around the star (≈3 s), the formula's dashed condition slot fills with the condition word (≈3.5–4.0 s), the reticle pulses/dims (≈5 s), then the whole board except the array dissolves (≈5.4–6.2 s) leaving the array with the selected icon ringed. The task charge's draw-on order (reticle → magnifier+star → array → formula) is therefore built as Act 1's compressed allocation — named as a departure in §2.2, not hidden.
  2. The array is 4 rows × 10 = 40 icons (counted firsthand, ev/001 + census f-0); every small icon carries a small plus/star chest glyph; the selected icon (row 1, index 5, 0-based col 5) is circled and is the magnifier's source (two diagonal connector lines run from the magnifier circle down to it).
  3. The expansion is THREE typeset lines under the formula (ev/005 + census f-3/f-4), not one: line 1 the Bayes ratio with values, line 2 a summation/Poisson line, line 3 the result line "⇒ P(F|H) = 0.9811 ± 0.004 (p < 0.001)". ev/001 shows only line 1 because it is an earlier settled frame.
  4. The creator's burned-in karaoke captions along the bottom are a specimen property, NOT part of this technique — excluded from the build (fleet no-captions law; §6.5). The Persian callout/formula words are technique text (subject), rendered from CONFIG strings in Latin transliteration of the same notation (P(F|H) form) — the build's default texts are the notation lines themselves, which are language-neutral; the callout default is the English gloss "cause of failure no. 1" / "failure" (digest's own gloss), priced here as a reading, not smuggled as specimen text.

### 1.2 Motion census (A10.3 — seat frames, viewed firsthand, full SHA-256)
Frames extracted from source.mp4 into artifact `census/` (source 720×1280, 30 fps):
| frame | sha256 (full) | state |
|---|---|---|
| f-0 (0.0 s) | 9bc05554a8c7c416b2ae91b5b8e7ffb7dacc343f3cd92215b084a4bc61db17ec | board standing; expansion L1 partial; slot dashed-empty |
| f-0_5 (0.5 s) | fab70ef3bb25a908ccd5bf4df89605a41d1d741d9ae0a8618da6a0fa0256aae1 | L1 near-complete |
| f-1 (1.0 s) | 91c00efb32aa18b5c053a6417d079c9a70282cb7ba64159fb0b0d2cc148cc1a1 | L1 complete with values; L2 started |
| f-2 (2.0 s) | e1d9db50066e4a4a861545cdc7fb10b84f9225f4547a50d1aaec454b5b857780 | L2 typing (caret visible) |
| f-3 (3.0 s) | b7ffff3f343bf8320f28cd83305b46c0756c6532c62f5be66442d17d01abe6b6 | L3 landed; star brackets present; slot still dashed |
| f-4 (4.0 s) | 64566a482c65603b5e63096f89632881fdc29cfe39843ae85d51272c4cdea09f | slot filled (condition word in); board complete |
| f-5 (5.0 s) | 5e6f230ed5b33c08d0f72b5fe722bfdc75d4c109159b1203da270889b0a105c8 | board holds; reticle dimmed (pulse spent) |
| f-6 (6.0 s) | 47ed9ce5bec2ce60690a24d58a7103fd81cb3bbdf463b5f60279d244fc6e2453 | board gone; array only, selected icon ringed |
| f-7 (7.0 s) | d64ec78d067edb8041f696beaef0f4cf94dc7d42acba9b4ff0800ce4e26c966e | T242 bars rising (sibling technique — out of scope) |
| f-8 (8.0 s) | 0dc3454da481eed21fa9b07e74d632deddf6465225dd701d1d7ce34a834aa62a | bars standing (T242) |
| f-9 (9.0 s) | e9263076b31ce9ded286ae6e59dfe90977738ac87217d34c27a2c8242a73cc0b | bars (T242) |
| f-10 (10.0 s) | 71fefd3ab6728afa6d3cf1ea20622dd6b93bcdfb9ee2bcf684f702641541e257 | bars (T242) |
| f-11 (11.0 s) | a4ace5e522362d5cb0ad9bf4db34ba7276d7f5e8bf2832967b2dd8a9fd77d | bars (T242) |
| f-12 (12.0 s) | c7d752506d500d084efe8f2b292baffdae981e14ed704df98be0149aa8a21c89 | bars (T242) |
| f-12_9 (12.9 s) | c9be534ef63db2a317fce0da3af319e0902e49dda9871bc1c7217a727d5c03d1 | bars + 2% stubs (T242) |
Clip frames c-0_1 / c-0_25 from clips/000-bayes-board-build.mp4 (sha e74d6eff… / e4ef7069…) confirm the clip opens on the same standing board.
**Motion findings:** motion instants = expansion type-on 0–3.4 s (continuous, character-wise) · star brackets ≈3 s · slot fill ≈3.5–4.0 s · reticle dim ≈5 s · board dissolve 5.4–6.2 s (scene-census diff peak 5.4–7.0 in the packet's scene-census.json concurs). Holds: board complete 4.0–5.4 s. After 6.2 s the T241 board is gone; 6.5–13 s belongs to T242 (named deferral, §2.5).

### 1.3 Sub-beats (build schedule, ms)
SB-A reticle draw-on 0–300 · SB-B magnifier circle + star figure + connectors + callout 250–750 · SB-C array icons stagger in 600–1150 (40 icons, row-major; stagger 10 ms, iconDur 160 ms → last completes 600+39×10+160=1150) · SB-D formula line + rule 1000–1400 · SB-E expansion lines type-on sequentially 1400–3150 (L1 1400–1950, L2 2000–2550, L3 2600–3150) · SB-E2 star corner-brackets fade in 2900–3200 · SB-F slot fill 3500–3900 · SB-G full-board hold 3900–5300 (reticle dims from completeAtMs) · SB-H board dissolve (all but array) 5300–6000 · SB-I array-only hold 6200–13000.

### 1.4 Variables (§1.3 extraction)
1. Texts — callout lines (2), formula text, slot word, expansion lines (3, array).
2. Array — columns, rows (count = cols×rows, asserted), selected index, icon size/gaps.
3. Geometry — stage W/H, reticle centre/radius/tick length, magnifier centre/radius, star scale, figure scale, array origin/gaps, formula/expansion baselines, callout anchor.
4. Timing — every sub-beat start/duration above + total duration; phase starts are independent keys ONLY where the census anchors them (Act 2), Act-1 starts chained in CONFIG order (each start a key; derive() asserts ordering).
5. Palette — bg, ink, dim (array glyphs), faint (expansion text), slot dash colour.
6. Typography — font family stack, formula size, expansion size, callout size, stroke widths (figure, circle, reticle).
7. Easing — draw-on ease name, type-on is linear character reveal (count = floor(progress × length)).

### 1.5 Guidance dispositions (inline, A9.5)
- A1 §2 typography precedent: NOT APPLICABLE as construction — no particle typography; formula/expansion are typeset DOM/SVG text rendered from CONFIG strings (runtime text, not sampled letterforms). The precedent's substance (text comes from CONFIG, never traced) is carried.
- A5 Owner Cures 1–2: NOT APPLICABLE as particle cures — no particle field, no phrase lifecycle. Analogue carried: intensity separation by construction — subject layers (magnifier/formula) render at palette.ink, the population array at palette.dim, expansion at palette.faint, so the claim's hierarchy survives at phone size (the digest's B-a bad: the specimen's own expansion is illegible at phone scale — the recreation keeps the hierarchy but sizes expansion text at/above the 11 px floor at 360 px stage, priced in the fit leg).
- A5 §4 flow-field: NOT APPLICABLE — no particle pool.
- A9.1 plate: NOT APPLICABLE — background is a still black field; no moving plate.
- Family siblings: T242/T243 (same packet, this wave) share the line-icon system but different mechanics; no scored family record exists. Packet #14 digestion gaps: digest §3 B-a (opening board illegible at phone scale) touches THIS technique — priced above; no other packet gap touches T02.

## §2 — PLAN

### 2.1 Parameter table (every variable = a CONFIG key; specimen value = default)
```
stage: {w:720, h:1280}
palette: {bg:"#000000", ink:"#ffffff", dim:"#9a9a9a", faint:"#8a8a8a", slot:"#cfcfcf"}
texts: {callout:["cause of failure no. 1","failure"], formula:"P(F|H) ≈ 0.98", slotWord:"hope",
  expansion:["P(F|H) = P(H|F)·P(F) / Σᵢ P(H|Aᵢ)·P(Aᵢ) = (0.97 × 0.612) / 0.6051",
             "Σₖ C(n, k)·pᵏ(1 − p)ⁿ⁻ᵏ · Πₜ (1 − e^(−λt)) ,  λ = 0.02 ,  n = 8·10⁹",
             "⇒ P(F | H) = 0.9811 ± 0.004   (p < 0.001)"]}
array: {cols:10, rows:4, selected:5, iconW:34, iconH:46, gapX:30, gapY:26, originX:52, originY:548}
geom: {reticleCx:360, reticleCy:196, reticleR:44, tick:16,
  magCx:360, magCy:422, magR:118, figureScale:1.0, starScale:1.0,
  formulaY:906, ruleY:926, expansionY:[958,990,1022], calloutX:492, calloutY:398, bracketLen:14, bracketGap:6}
type: {family:"Georgia, 'Times New Roman', serif", formulaPx:46, expansionPx:24, calloutPx:29, smallPx:20}
stroke: {figure:3, circle:3, reticle:3, connector:2, bracket:3}
timing: {tReticleMs:0, reticleDurMs:300, tMagMs:250, magDurMs:500, tArrayMs:600, iconDurMs:160, arrayStaggerMs:10,
  tFormulaMs:1000, formulaDurMs:400, tExpandMs:1400, expandLineDurMs:550, expandGapMs:50,
  tBracketsMs:2900, bracketsDurMs:300, reticleDimOpacity:0.45, tDimMs:5000, tPulseMs:4800, pulseDurMs:400, pulseScale:1.12, slotGapMs:350, holdMs:1400,
  tSlotMs:3500, slotDurMs:400, tDissolveMs:5300, dissolveDurMs:700, durationMs:13000}
ease: {draw:"easeOutCubic"}
```
Derived (derive(cfg), asserted): arrayCount = cols×rows (renderedCount === cols×rows asserted on EVERY config; the specimen count 40 is asserted only on the default config) · selected index < count asserted; ring + connector endpoints derived from selected index + grid geometry · arrayEndMs = tArrayMs + (count−1)×stagger + iconDur = 1150 · expandStart[i] = tExpandMs + i×(expandLineDur+expandGap) · expandEndMs (=3150 default) · **slotStartMs = max(tSlotMs, expandEndMs + slotGapMs)** (=3500 default; under the timing swap expandEndMs=4500 → slotStartMs=4850 — the slot can never precede the expansion) · completeAtMs = slotStartMs + slotDurMs · **dissolveStartMs = max(tDissolveMs, completeAtMs + holdMs)** (=5300 default; swap: 6650) · dissolveEndMs = dissolveStartMs + dissolveDurMs ≤ durationMs asserted · reticleDim applies for t ≥ tDimMs (5000, the census cue) at reticleDimOpacity · reticle pulse: scale pulseScale over [tPulseMs, tPulseMs+pulseDurMs]. Phase-order assertions (hold after expansion AND slot; dissolve after hold) are harness-checked on default AND swapped configs.

### 2.2 Census-anchor mapping (A10.2) + departure table
Window-start offset: build t=0 = segment 0 ms (Act 2 segment-anchored; Act 1 allocation as named).
| census state (segment ms) | prescribed build state at that instant |
|---|---|
| 0 — board standing, L1 partial, slot empty | DEPARTURE (below): build shows reticle raw 0 (Act-1 allocation) |
| 500 — L1 near-complete | build: reticle complete, magnifier drawing (250–750), array 0 — DEPARTURE (Act-1 shift, named) |
| 1000 — L1 complete, L2 started | build: array drawing (25/40 icons complete at 1000: 600+10i+160 ≤ 1000 → i ≤ 24), formula starts (tFormulaMs=1000), expansion 0 chars — DEPARTURE (Act-1 shift, corrected under plan gates: an earlier draft of this row claimed all 40 complete, which the CONFIG arithmetic refutes) |
| 2000 — L2 typing | build: L1 complete; L2 reveal progress is 0 at its exact onset instant 2000 and types 2000–2550 — the census's 'typing at 2000' vs the build's onset instant differ by the reveal's first character interval (≤36 ms), printed as a micro-departure |
| 3000 — L3 landed, brackets on, slot dashed | build: L3 typing 2600–3150 (at 3000 it is 73% typed vs census landed — ≤150 ms tail, printed); brackets fade 2900–3200 ✓ aligned to the ≈3 s cue |
| 4000 — slot filled, board complete | build: slot filled at 3900 ✓ (completeAtMs=3900) |
| 5000 — board hold, reticle dimmed | build: full-board hold, reticle opacity dimmed after slot fill (reticleDim applies from completeAtMs) ✓ |
| 6000 — array only, selected ringed | build: dissolve 5300–6000 → at 6000 board opacity 0, array full ✓ aligned (cured under jev-observe-exit charge 2) |
| 7000–12900 — T242 bars | build: array-only hold (T242 deferred, §2.5) — DEPARTURE by scope |
**Departure table (named, priced):** (D-a) Act-1 draw-on 0–1400 ms replaces the census's already-standing board at 0–1400 ms — the task charge + digest name the layered draw-on as the technique ("the build order is the claim"); the allocation is the technique's own claim form, compressed. (D-b) Expansion type-on shifted +1400 ms at L1 start (the Act-1 allocation), reconverging by L3 (build L3 ends 3150 vs census L3 landed by ≈3.0–3.4 s). (D-c) 6200–13000 ms holds the array instead of the sibling's bars — scope boundary, T242 is its own item this wave.

### 2.3 Construction choice
**Layered inline SVG inside one HTML stage, driven by a pure `stateAt(cfg,t)` + `render(cfg,t)` (DOM/SVG), CONFIG at top.** Draw-on = stroke-dashoffset progress per layer group; type-on = character-count reveal from CONFIG strings; figures = one parameterized `<g>` icon (head circle + body path + chest glyph) instantiated for the magnifier figure (large, star glyph) and all array icons (small, plus glyph), selected icon gets ring + connectors.
Rejected: canvas particle system (no particle mechanic; would import A5 machinery with no subject) · CSS keyframes (timings would live in CSS literals, unswappable by CONFIG and unprobeable by the node harness) · traced frame sequence / specimen imagery (refusal class, §6.1) · generated imagery (the line-icon system is exact vector geometry; raster would blur the one-line-weight claim).

### 2.4 Swap values (exact)
- Content: texts.formula "P(F|H) ≈ 0.98" → "P(S|R) ≈ 0.87" · texts.slotWord "hope" → "luck" · texts.expansion[0] → "P(S|R) = P(R|S)·P(S) / Σᵢ P(R|Aᵢ)·P(Aᵢ) = (0.91 × 0.402) / 0.4205" · texts.expansion[2] → "⇒ P(S | R) = 0.8695 ± 0.006   (p < 0.001)" (the claim unit swaps whole — formula, expansion and result move together) · array.cols 10 → 8 (count 40 → 32; renderedCount===rows×cols re-asserted, specimen-40 assertion applies to default only).
- Timing: timing.expandLineDurMs 550 → 1000 (expandEndMs = 1400 + 2×(1000+50) + 1000 = 4500; slotStartMs moves 3500 → 4850 and dissolveStartMs 5300 → 6650 by the derived chaining; CP instants derived from expandLineDurMs move).
- Palette: palette.ink "#ffffff" → "#7fd4ff" (observed in render output).

### 2.5 Failure points (priced)
- Convergent freeze / intensity collapse: array at ink intensity would fight the magnifier — cured by construction (array=dim, expansion=faint, subject=ink).
- Phrase overlap analogue: layers must not pre-appear — stateAt clamps every layer's raw progress to [0,1] with starts chained; harness asserts strict layer order at boundary instants.
- Fitting limits: expansion L2 is the longest line (66 chars) — fit leg measures it. Defined overflow behavior (no builder choice at Execute): expansionPx may reduce to the floor 22 native (=11 px at the 360 stage); below that the line WRAPS to two centered lines with pitch expansionY pitch (32) — the fit leg checks ink height + 4 ≤ pitch for collision against adjacent baselines, and a line that can neither fit at floor nor wrap within its pitch band is a build FAIL, not a judgment call.
- Phone legibility (digest B-a): expansion at 24 px native = 12 px at 360 stage — above the ~11 px floor but tight; fit leg must MEASURE, and a HIT is cured by raising expansionPx, never by dropping a line.
- Render-proof limitation: no browser binary in this seat — logic-level harness + PIL fit measurement; comparison page is the render surface (PIXEL-UNVERIFIED carried to scores.md).
- Count assertion (A9.3): source count 40 (4×10 counted firsthand) vs built count cols×rows — harness prints both and halts on mismatch.

### 2.6 Execute checklist
1. Cut segment.mp4: source 0–13.5 s → artifact dir, re-encode h264+AAC, ffprobe + sha256 recorded.
2. Build recreation.html per §2.1/§2.3 (CONFIG at top, stateAt/render, window.__T241 exposed for harness).
3. Build comparison.html (labels: ORIGINAL — ensan.besham Hope = Failure (?) @ 0–13 s · RECREATION — T241, parameterized; one synchronized control set; phone stacking). Duration policy: the recreation's clock is 13000 ms; the segment cut is 13.5 s (0.5 s handle); the shared clock runs to the video's end (13500 ms) and the recreation holds its final array-only state for the last 500 ms — the handle is evidence tail, not technique time.
4. Self-verify (§5 legs 1–3) via harness-t241.js; file A6 legs; assemble A13 receipt index; fire jev-prewave.

### 2.7 Verify checklist (instruments named)
- Swap test: node harness-t241.js with swapped CONFIGs (§2.4 exact values) — state assertions + render-string checks.
- Purity: `grep -nE "segment\.mp4|source\.mp4|<video|<img|DffiIpmMAC3" recreation.html` → 0 specimen hits; asset inventory = recreation.html alone.
- Syntax: extract inline script → `node --check`. Seeded RNG: none needed (no randomness in construction) — census prints NOT-APPLICABLE with reason.
- A11 checkpoints CP0–CP8 (§2.2 instants, CONFIG-derived expressions) in harness, each with executable receipt; timing swap must move CP instants tied to expandLineDurMs.
- A6: fit-table.md (PIL, named stand-in font, every text element incl. formula + all 3 expansion lines + callout lines) · config-census.md (literal scan classified; every key incl. nested texts.expansion[]/array.* resolved to a site).
- Comparison assertions (own, mechanical): both labels verbatim ×1 · segment.mp4 referenced exactly once (original side) · @media (max-width:560px) stacking rule present · shared-start control wiring present (one play/pause/restart set driving video.currentTime and the recreation clock) · recreation durationMs read from CONFIG at runtime.
- jev-prewave after legs 1–3 + A6 + A13 index; five-lens Codex wave only on FIRE-WAVE. Lens names: motion fidelity · timing/tempo · construction purity · reusability/parameterization · readability.

## §2b — Gate dispositions (all four fired and consumed BEFORE any build script — A9.2 held)
- **codex-observe → CONFIRMED-WITH-GAPS** (return: `item-T241-codex-observe-return.md`). G1 (board already standing at t=0; ev/005's "array drawing on" caption is wrong — the array stands complete there) — APPLIED: priced reading 1 + Act-1 allocation + departure D-a. G2 (board exit ≈6 s is separate from the 13 s window end; clip is 12 s, last 1 s checked in the archive) — APPLIED: census f-6/f-7 + SB-H/§2.5 deferral. G3 (callout is a paraphrase; small text uncertain) — APPLIED: priced reading 4 (gloss labeled as gloss; notation lines are language-neutral).
- **jev-observe-exit → ADVANCE-WITH-GAPS** (queue 1.0 · prior 1.0 · mechanics 1.0 · variables 0.5 · guidance 1.0 · consumer 1.0; return: `item-T241-jev-observe-exit-return.md`). Charge 1 (bind star brackets + reticle dim) — APPLIED: tBracketsMs/bracketsDurMs + bracket geometry/stroke keys + tDimMs/reticleDimOpacity + pulse keys added. Charge 2 (reconcile L3/dissolve anchors) — APPLIED: expandLineDurMs 650→550 (L3 ends 3150), dissolve 5300+700=6000 aligned to f-6.
- **codex-plan-review → REVISE** (return: `item-T241-codex-plan-review-return.md`). ALL findings APPLIED: (1) convergent-freeze closed by construction — noted, no cure needed; (2) sequencing — derived chaining (slotStartMs/dissolveStartMs) + phase-order assertions on default and swapped configs + fills/labels gated at entry in stateAt (every layer carries an opacity/raw gate, not strokes alone); (3) parameterization — specimen-40 asserted on default only, renderedCount===rows×cols + selected-valid on every config, ring/connectors derived from selected index, expansion[2] added to the content swap so the claim unit moves whole; (4) predicted minimum timing — accepted as priced risk (the Act-1 departure is the technique's named claim form; the fit fallback is now defined, §2.5); (5) size — comparison duration policy stated (§2.6 step 3).
- **jev-plan-exit → REVISE · UNBOUND-SCHEDULE** (parameter 0.75 · construction 1.00 · execute 0.75 · verify 0.75 · failure 0.75 · plateau 1.00; return: `item-T241-jev-plan-exit-return.md`). ALL charges APPLIED: array stagger/iconDur corrected (10/160, end 1150) and the 1000 ms census row corrected to 25/40 with the departure named · 500 ms census row added · L2-onset micro-departure printed · swap arithmetic corrected (4500, not 4450) · bracket geometry + pulse timing/amplitude keyed · comparison duration policy + comparison assertions + five lens names added to the Verify checklist · fit overflow behavior defined with pitch/collision check. Execute opens on the Plan AS AMENDED above.
