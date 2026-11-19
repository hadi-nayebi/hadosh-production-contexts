# T103 — Complexity ladder · build record (attempt 2, practice Cycle 012 Wave 11)

Artifact dir: `hidden_files/study/recreations/T103-complexity-ladder/`
Governing: practice INSTRUCTION §3 + §5, plan-T103.md (Cycle 012 Wave 11), RUN.md Plan gate conditions W-G + W-T103.
Consumer: DIAGRAM · OPENING — complexity-ladder menu card; the diagram / section-navigation surface.
Final frozen source: recreation.html sha256 `04a53914f71e55eb8a777d6abddc72c2a54cea8f195f9607a2b5d88f5260e38a`. All five scoring returns must bind this sha.
PIXEL-UNVERIFIED: no exercisable browser route in this seat; every geometry/readability claim below is source-modelled (fit-table method). No filing cites a pixel step as rendered verification.

## §1 Preservation (before any mutation — complete prior-evidence inventory)
Baseline: Cycle-012 preservation-baseline.txt. Content copies created (never hardlinks; every copy's inode asserted ≠ the working file's inode — recreation.html inode 4928979, recreation-attempt-1.html inode 4951965):
| Copy | sha256 | Baseline match |
|---|---|---|
| recreation-attempt-1.html | 16b9a7e3abbabc648b57dc5fb54ebb017982082e748ec82b61e57505aea9fc15 | ✓ |
| comparison-attempt-1.html | cd3bae156301130d4b69493ad2d7506daa31d4fd4d0fd5c77c5e82c39ac7ce72 | ✓ |
| comparison-attempt-1-replay.html | ac641054809f186ea60d37018abcd50880787c0de8ce42d97059c4581978b33f (new file: attempt-1 comparison bytes with only the iframe source re-pointed at recreation-attempt-1.html, so attempt-1 behaviour stays replayable while the working comparison loads the mutable file) | n/a |
| fit-table-attempt-1.md | ca0a355140e202de3cb18fb82b94382d040dde6297baeac1a86e8c2fdfb5f55f | ✓ |
| config-census-attempt-1.md | 59e59c43d1070c2d3f86bf3ad3b5cd75f7ef293bab29356eec22d77d3586b9d5 | ✓ |
| jev-prewave-attempt-1.md | f3710b68dea0f5d5d557c84434a2573316fbf4c98d9ce655668172162b0132b1 | ✓ |
| build-record-attempt-1.md | b044af8143aff7dd29e505d00e93105d51b52a35ff7bf673feebeec83ed4d721 | ✓ |
| scores-attempt-1.md | 6621d10acfb3f8a0fad960603bb986f5465fa2d92ea578cf32cdcc86b49bc331 — filed as the first 5836 bytes of the then-current scores.md (attempt-1 bytes; the Plan's scaffold append is pure-append after byte 5836, verified by this sha) | ✓ |
| codex/attempt-1/ | copies of the five attempt-1 lens returns + five payloads (copied, never moved) | ✓ |
Post-first-overwrite census: all copies above re-hashed after recreation.html's first overwrite — every sha unchanged ✓ (re-verified again at close; see scores.md filing).

## §2 Densified frame sampling (250 ms, seg 8.5–13.0 s, from segment.mp4) + MID-CYCLE PREMISE AMENDMENT
| Seg t | Observed state |
|---|---|
| 8.50 | Intro text card ("Here are a few popular transitions organized by complexity:") — no ladder |
| 9.00 | Empty gradient field — no ladder |
| 9.25 | "Easy" entering from below, low in frame, faint — assembly already under way |
| 9.50 | "Easy" mid-frame, "Intermediate" entering low; orange marker tip just entering at the top edge |
| 9.75 | All three names near settled positions; marker descending from the top, not yet beside "Easy" |
| 10.00 | Names-only: all three names settled, ALL dimmed, marker beside "Easy", NO items |
| 10.25 | Easy full-white, items "• Hard cut" / "• Dissolve" already visible (fading in) |
| 10.50–12.00 | Easy-marked state holds (Easy full-white + items; others dimmed, no items) |
| 12.25 | Ladder GONE — flat pink field (next scene already cut in) |
| 12.50 | Pink scene with "Hard cut in 3" label |

**MID-CYCLE PREMISE AMENDMENT (A-C008-1):** Premise (plan-T103 §1 C1): items boundary 10500 ms, departure boundary 12500 ms. Contradicting evidence: items are already visible at seg 10.25 (onset ∈ (10.00, 10.25]) and the ladder is already gone at seg 12.25 (departure ∈ (12.00, 12.25]) — both plan boundaries sit more than 250 ms after the last possible evidence-consistent value. Revised construction (built to the evidence): `seg.itemsAtMs` 10500 → **10250**, `seg.departAtMs` 12500 → **12250**; the names-only phase is therefore [10000, 10250) and the Easy-marked phase [10250, 12250). Assembly onset ∈ (9.00, 9.25] and names-settled at 10.00 confirm the plan's 9000 / 10000 boundaries within the sampling tolerance — those stand unamended. Both bases are printed in the neutral facts fed to the scoring lenses (amended basis governing, dispute printed).

## §3 Construction (as built)
- **Two acts, config-selected.** `act: "segment"` (default) = Act 1, segment-anchored, total 14000 ms, partitioned with no residual: absent [0,9000) · assembly [9000,10000) · names-only [10000,10250) · Easy-marked [10250,12250) · departed [12250,14000). `act: "stepping"` = Act 2, a separately identified allocation act carrying the three-tier stepping.
- **Act 2 complete interval table** (per tier k = 0,1,2 in traversal order from marker.startRow; per-tier block = allocNamesMs 500 + stepMs 2000 + allocReturnMs 600 = 3100 ms):
  | Tier | Names-only | Marked (row full ink + its items) | Return gap (device absent) |
  |---|---|---|---|
  | k=0 (row startRow) | [0, 500) | [500, 2500) | [2500, 3100) |
  | k=1 (row startRow+1) | [3100, 3600) | [3600, 5600) | [5600, 6200) |
  | k=2 (row startRow+2) | [6200, 6700) | [6700, 8700) | none — terminal hold instead |
  Terminal hold: the final marked state continues [8700, 9700) (holdMs 1000 appended to the last tier's marked span), then the cycle wraps to t=0 (names-only of tier k=0). Total = 3 × 3100 − 600 + 1000 = 9700 ms. Departure is a hard cut to absent; return is the next tier's names-only state. Traversal with startRow = 1 asserted: marked rows 1 → 2 → 0.
- **Staged reveal.** Items visibility is a phase output of stateAt (itemsVisible), never a row output: items render only in marked phases. Assembly: each row's vertical offset interpolates from geom.entryDy (56 px below settled) to 0 and the marker interpolates from above the stage's top edge to beside the first row, both derived from the settle fraction (t − 9000)/1000 clamped by the phase machine — matching the densified frames (names rising from below, marker descending from the top). No opacity is used anywhere in the file (suite-asserted): dimming is colour-based at every state, so settled-state opacity = 1 holds by construction.
- **Derived row heights.** Row height = nameLine + nameItemGap + items × (itemLine + itemGap) + rowPad, lines derived from type sizes × type.lineScale; row tops are cumulative; stage height = last top + last height + rowTop (= 406 px at defaults). The fixed row-height key from attempt 1 is retired.
- **Validation.** validateConfig runs on any override before it is applied: rows non-empty with non-empty names and item arrays; marker.startRow an integer in range; every seg key finite ≥ 0 with ordering assemblyStart < namesAt < itemsAt < departAt ≤ totalMs; stepMs > 0; holdMs / allocNamesMs / allocReturnMs ≥ 0 (finite). An invalid override is rejected atomically (the prior valid configuration stays in force) and recorded in window.__rejected, which the suite asserts on.
- **Clock ownership.** Standalone, the file owns its clock: a top-level requestAnimationFrame loop starts at load with no external caller and renders elapsed time from its own first frame timestamp; render(t) is a pure function of elapsed time, so the loop wraps indefinitely. External control (the comparison page) may call __render(t) at any moment — it cannot corrupt the standalone clock (the loop's start timestamp is private and render holds no accumulated state), and ownership returns to the loop on its next frame. Pause/seek under external control are exact because state is derived from t alone. Verified at logic level by the suite (self-start presence + phase determinism); rendered playback is PIXEL-UNVERIFIED.
- **Comparison.** Act 1 total is still 14000 ms and the interface (CONFIG via ?cfg=, __render/__stateAt/__totalMs) is unchanged; the recreation iframe height in comparison.html was updated 442 → 406 px to the new derived stage height, after own checks passed. The ORIGINAL side is untouched.

## §4 Own-check suite (125 assertions, all passing on the frozen source; output at attempt-2/checkpoints/checkpoint-final-ownchecks.txt)
Effect mappings asserted, not counts: Act 1 phase at 12 boundary instants; absent/departed hide card + marker; names-only shows zero item lists and no full-ink name; marked shows exactly the marked row's items with that row full ink and the others dim; 50 ms sweeps of both acts (phase/effect consistency; exactly one marked row in Act 2; device absent in return gaps); assembly settle fractions 0 / 0.5 / 1 with row-offset and marker-position interpolation; derived heights for 0/1/2/4-item rows and cumulative tops under a content swap; the exact swap set (items → ["Wipe","Push"], marker colour → #2fd4c4, one seg boundary moved with ordering still valid, act → "stepping" with derived total 9700 and traversal order; untouched group: palette.card); an 11-case adversarial invalid-override set (ordering violation, fractional + out-of-range startRow, NaN / Infinity / zero timings, null rows / marker / seg groups, empty rows, empty name) each rejected atomically with a __rejected entry; CONFIG consumption (every leaf key name consumed outside the CONFIG block + mutation spot-checks on itemPx, entryDy, departAtMs); literal census (only the body-chrome hex outside CONFIG); purity grep 0 hits; self-start (top-level rAF loop present). node --check on the extracted script: OK.

Per-cure assertion ledger (thresholds from the plan, committed before the wave; attribution prints BUNDLED unless a check isolates an effect):
| Cure slot | Before (attempt-1 construction) | After (this build) | Assertion |
|---|---|---|---|
| Schedule basis | flat step machine, ladder visible 100% of cycle | segment phase table; device present only [9000,12250) | phase boundaries + 50 ms sweep |
| Act 2 stepping | none (stepping inside the scored cycle) | separate config-selected act, 9700 ms derived | interval table + traversal + sweep |
| Names-only state | items shown from t=0 | itemsVisible is a phase output | names phases show zero item lists |
| Assembly entrance | none (instant appearance) | settle-derived offsets for rows + marker | settle fractions + offset values |
| Departure/return | none (continuously visible) | hard cut at 12250; Act 2 return gaps | departed/return phases hide the device |
| Derived heights | fixed 118 px rows | content-derived heights | 0/1/2/4-item heights + tops |
| Validation guard | none | validateConfig + __rejected | 11-case adversarial set, atomic |
| CONFIG-ized styling | weight/style/glyph/radius hard-coded | type.nameWeight, type.itemStyle, style.bullet, geom.markerRadius in CONFIG | consumption census |
| Inactive contrast pair | #b9c2e8 on card = 7.21:1 | #9aa6d8 on card = 5.32:1 (≥ 4.5 floor, materially darker) | recomputed from CONFIG pair in fit table |
| Item size | 16 px | 17 px (ink 12.2 px ≥ 11 floor) | fit table |

## §5 Pre-wave legs (on this attempt, before the wave)
- guard-measured-fit → fit-table-attempt2.md (also at fit-table.md): HITs 0.
- guard-config-census → config-census-attempt2.md (also at config-census.md): HITs 0.

## §6 Deviations
- DEV-1 (staged checkpoints): the build was executed in one continuous pass, so per-stage checkpoints were not preserved during construction; the filed checkpoint is the final build (attempt-2/checkpoints/checkpoint-final-recreation.html, content copy, inode 4953398 ≠ working 4928979, sha = frozen sha) with its own-check output. Consequence: per-cure lens attribution prints BUNDLED (the standing expectation for a multi-cure attempt in any case).
- No other deviations. Comment hygiene: the source carries no cure codes, amendment labels, cycle references, or lens-target language in any comment (grep-verified before payloads were assembled).

## §7 Deferrals carried (printed, risk accepted at Plan)
Gradient field surface (rows sit on the CONFIG card colour, not the specimen's blue→teal gradient) · Intermediate/Difficult marked states inside Act 1 (they exist only in Act 2) · digest revisit windows as content · upright item text (italic is specimen-observed) · neighbouring devices as absence-fill · boundary precision finer than the 250 ms densification (residual ±250 ms on the assembly/names boundaries; items/departure boundaries amended to the densified evidence).
