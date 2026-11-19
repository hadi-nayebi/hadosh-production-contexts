# T18 — Keynote stage + heckler chat · BUILD RECORD — Attempt 4 (working record, append-only during Execute; snapshotted at freeze)

Technique: T18 (packet P1, "Look What I Can Do" @ 2:02–2:17) · Practice Cycle 014 Wave 13 · Attempt 4 · 2026-11-16
Artifact dir: `hidden_files/study/recreations/T18-keynote-stage-heckler-chat/`
Governing: practice INSTRUCTION §3 + §5 + amendments · plan `runs/2026-11-16-cycle-014-wave-13/plan-T18.md` (binding) · Cycle-013 RUN.md §2 Codex plan-review consumption for T18 (binding conditions, consumed §0b below).
Prior average 79.2 (seat record only; never fed to a lens). Bar: average ≥ 85 AND every lens ≥ 70. PASS needs sum ≥ 425 (+29) with motion 66 and timing 66 both ≥ 70.
**PIXEL-UNVERIFIED** stands over the whole build (A-C002-2): no Chrome/Chromium route in the agent environment; every geometry/legibility claim below is a source-model claim.

## §0 E0 — Preservation re-verified BEFORE any mutation

Baseline: cycle-014 run dir `preservation-baseline-carried.txt` (carried from Cycle 013's machine-written baseline).
- `recreation-attempt-3.html`: sha256 `35ffde9edd21c62aa3e9d82d751ed4209a144a48192fc20016b3244d9ca0f896` = baseline ✓ · inode 4992792 ≠ working `recreation.html` inode 4952833 ✓ (CONTENT copy, not a hardlink).
- `comparison-attempt-3.html`: sha256 `926cac0af408abc1a4c5a417bc8d2860987609b2fcbe249e268a22f6f28e39a1` = baseline ✓ · inode 4992793 ≠ working 4952835 ✓.
- Working `recreation.html` sha at E0 = baseline 35ffde9e… ✓ (untouched since attempt 3 close).
- Prior evidence set inventoried at E0 (build records ×3, all codex/attempt-2 + attempt-3 payloads/returns, legs attempt3 ×2 + run1 ×2, manifests ×2, checkpoints ×3, preserved copies ×6, scores states, segment.mp4) — no prior file is an overwrite target; every attempt-4 output takes an attempt-4-tagged create-once path.

## §0b Binding plan-review conditions (Cycle-013 §2, T18) — how each is discharged

1. **Sweep windows derived independently from specimen frames, NOT anchored to reveal completion; bar presence + character colour specified at each acceptance checkpoint.** → Each title line carries an explicit `sweepStartMs` CONFIG value (§1 derived table prints the frame basis). At the colour-asserted checkpoints the bar state is: t=4000 no bar (L1 revealing) · t=4550 L1 bar ACTIVE over its target word (sweep 4250–4950), line-1 non-target glyphs white · t=4825 bar ABSENT on line 2, "IN" fully yellow (its sweep window is 5700–6400, after the full-title checkpoint) · t=5650 no bar active on any line (L2 sweep starts 5700, L3 sweep 5750) · final hold: all sweeps complete, colours = per-line retained colours. The suite asserts bar presence/absence + per-character colour at every one of these checkpoints (V1/V4 rows).
2. **Attribution: per-cure baseline-vs-after diagnostics; lens movement prints BUNDLED unless isolated.** → §3 cure→probe matrix fixed before building; §6 files baseline (attempt-3 source) vs after (attempt-4 source) diagnostics per cure; scores.md attribution prints BUNDLED.
3. **Partial-prefix geometry prescribed.** → Hidden (unrevealed) characters RESERVE SPACE: every character span exists from build, unrevealed characters carry `visibility:hidden`, so wrapping, word positions and padding are the completed block's geometry at every instant; a word's padding box exists with the word (padding is on the word box, not per revealed character); sweep geometry is driven by the PADDED word box (C4 basis: padding + glyph advances + letter spacing). The suite probes both sides of the title wrap transition (line 1 wraps to 2 rows in the title column at both the partial and complete states; wrap count identical at reveal progress 0.25/0.5/1.0) and under cardinality/text swaps (V3 rows).
4. **Evidence lifecycle.** → This record is append-only during Execute; the scored source is FROZEN before payload generation and its sha binds suite, legs, manifest and every payload; no post-freeze mutation, no preserved-return overwrite, no prior-average edits. Legs file at attempt-tagged create-once paths (`fit-table-attempt4.md`, `config-census-attempt4.md`); the shared paths `fit-table.md`/`config-census.md` do not exist for T18 (attempt-3 legs were already attempt-tagged), so no shared-path preservation is owed — verified by directory listing at E0.
5. **WHY branches.** → The plan's scaffold hypothesis is REPLACED per the review: primary hypothesis = a fully compliant build (per-word onsets landed) that still does not improve — stuck on the deferred camera/loop surface (D1/D3). An explicit improved-but-below-PASS branch is carried in scores.md's Attempt-4 filing. PASS hand-off: style-library board + scores.md pointer (seat's act, named in the filing).

## §1 E1 — Segment densification (A-C006-1 derivation duty)

Frames extracted every 125 ms across segment 3.7–6.4 s (22 frames, ffmpeg fps=8, /tmp scratch) and read firsthand; close crops read for frames 4/7/8/9/13. Recreation t = segment time − 0.5 s.

| Segment | Rec. t | Observed title state |
|---|---|---|
| 3.95 | 3450 | "TH" — line 1 reveal just begun |
| 4.075 | 3575 | "THE GRE" (≈7 chars) |
| 4.45 | 3950 | "THE GREATEST TRANSI" (≈19 chars, mid-word) |
| 4.575 | 4075 | "THE GREATEST TRANSFORMATIO" (≈26 chars) |
| 4.7–5.05 | 4200–4550 | line 1 complete, white |
| 5.2 | 4700 | "IN" present, yellow, alone (line 2) |
| 5.325–5.575 | 4825–5075 | "IN" still alone, yellow |
| 5.7 | 5200 | "IN HU" — HUMAN mid-reveal (≈2 chars), yellow |
| 5.825 | 5325 | "IN HUMAN" complete, yellow |
| 5.95 | 5450 | "IN HUMAN HI" — HISTORY mid-reveal (2 chars) |
| 6.075 | 5575 | full title complete; line 1 white, lines 2–3 yellow |

**Derived reveal records (acceptance = plan §1 checkpoint table):**
- L1 "THE GREATEST TRANSFORMATION" (27 chars): `revealStartMs 3400`, `revealMs 810` (≈30 ms/char, linear fit to the 3450/3575/3950/4075 char counts) → complete 4210. At t=4000: 20 chars revealed ("THE GREATEST TRANSFO…") — strict partial ✓ · complete by 4550 ✓.
- L2 "IN HUMAN" (8 chars): `revealStartMs 4600`, `revealMs 480` (60 ms/char), `wordHoldMs 280` → "IN" complete 4720 (≤4750 ✓, alone at 4750/4900/5100 ✓); HUMAN onset = 4600 + 3 chars×60 + 280 = 5060 → at 5200: 2 chars "HU" ✓ · line complete 5360 (≤5400 ✓). The derived hold (280 ms) sits just under the plan's sparse-sampling range (300–450 ms): the dense frames bound it tighter — "IN" alone at segment 5.575 (t5075) and "HU" by 5.7 (t5200) force HUMAN onset into (5075, ~5150], i.e. hold ∈ (235, 310]; 280 is the in-range value. Filed as a derivation refinement of the plan's range, not a premise conflict: no priced checkpoint (4750–4900 alone · 5400 complete) is contradicted.
- L3 "HISTORY" (7 chars): `revealStartMs 5375`, `revealMs 245` (35 ms/char) → at 5450: 2 chars "HI" ✓ · complete 5620 (≤5650 ✓).

**Sweep windows (frame-derived, independent values — §0b.1):** the specimen's colour event on line 1 is a sweep of its second word after the line completes; lines 2–3 carry no separate bar event inside the checkpoint window (their yellow IS the reveal colour). Windows chosen outside every colour-asserted checkpoint: L1 target word sweep `sweepStartMs 4250`, duration = the line's `highlightMs` 700 → 4250–4950 · L2 target word sweep 5700–6400 · L3 target word sweep 5750–6450. At t=4825 no bar touches line 2 ("IN" yellow ✓); at t=5650 no bar is active anywhere (full title in retained colours ✓).

**No MID-CYCLE PREMISE AMENDMENT is owed:** the dense frames confirm every priced checkpoint in plan §1; the only refinement is the L2 hold derivation above, filed here per A-C006-1.

## §2 Construction prescriptions carried into the stages

- Reveal: per-character spans for EVERY word (not only target words); unrevealed characters reserve space (`visibility:hidden`); revealed characters on a line display in the line's retained colour as they arrive (L1 white; L2/L3 yellow — `retainColor` CONFIG field per line, defaults: `titleColor`).
- Sweep: bar traverses the target word's PADDED box; character darkening thresholds on the padded advance (word padding ×2 + glyph advances + letter spacing per character gap), one unrounded progress fraction drives both bar width and thresholds; after the sweep the word settles to the LINE's retained colour (the per-word permanent yellow hold is abolished).
- Bar glyph coverage: `hlHeightPct` 84 → 100 and `hlTopPct` 8 → 0 (the bar spans the full line box, which contains the cap-height region at the title line-height); the displayed-state model asserts the cap region inside the bar rect.
- Stages: V (C1 reveal family) → CP-V · C (C2 retained colour + C3 reveal-relative-independent sweep + A-C012-2 dependent re-derivation) → CP-C · S (C4 sweep readability) → CP-S · U (C5+C6+C7+C8+C9+C10) → CP-U4. Checkpoint gate (A-C012-4): no stage begins until the prior stage's checkpoint (content copy + stage suite output, create-once, inode-independent) is filed.

## §3 Cure → probe matrix (fixed BEFORE building; baseline = attempt-3 source, after = attempt-4 source)

| Cure | Probe (own-check suite row family) | Baseline (a3) | After (a4) |
|---|---|---|---|
| C1 reveal family | checkpoint prefix states at 4000/4550/4750/4900/5100/5200/5400/5650 (V1/V4) | whole line at tMs; no partial states exist | filed §6 |
| C2 retained colour | per-char colour at 5650 + final hold (V4) | GREATEST yellow forever; HUMAN white | filed §6 |
| C3 sweep windows | sweep start/end per line from CONFIG records; bar presence at checkpoints (V1) | sweep = landing event (start = tMs) | filed §6 |
| C4 sweep basis | padded thresholds: first char threshold > 0 by the padding share; bar width unrounded (V1/V3) | thresholds on glyph widths only; width rounded in render | filed §6 |
| C5a title-column bound | oversized word vs column: rejected (V6) | bound was remaining screen width | filed §6 |
| C5b line-height consumption | `lineHeightNormal` → CSS var consumed by meta + stat rows AND model (V2) | model-only value | filed §6 |
| C5c padding grammar | non-px-pair padding rejected atomically (V11) | any string parsed leniently | filed §6 |
| C5d font metrics | fit table prints fallback-glyph rows by name (legs) | silent fallback substitution | filed §6 |
| C6 schema unification | four keys missing → named error; rotateXDeg non-finite → named error; opacity non-numeric → named error; negative dimension → named error (V11) | four keys unchecked for presence; rotateXDeg unchecked for type | filed §6 |
| C7 blank optional numeric | `lines …~` with blank highlightMs field → whole override rejected (V6/V11) | blank treated as absent | filed §6 |
| C8 DEN scaling | counter-only + duration ×2 scales; stats-only + duration ×2 scales; duration ×3 alone accepted (idle bound scaled) (V6) | text params disabled scaling; idle bound unscaled | filed §6 |
| C9 CSS-parse leg | stylesheet parse row: every declaration parses, braces/parens balanced (V10) | no parse row (DEV-2 gap) | filed §6 |
| C10 purity wording | source header + this record name the fixed conventions outside CONFIG (V13) | header claimed "reads only CONFIG" | filed §6 |
| Held | 7350/7450 adjacency states; loop-boundary state pair (V1) | asserted a3 | re-asserted §6 |

Attribution: BUNDLED unless a row above isolates an effect (per-cure diagnostics isolate CONSTRUCTION effects; lens-score movement prints BUNDLED in scores.md).

## §4 Checkpoint ledger (A-C010-1a + A-C012-4 gate — each stage began only after the prior checkpoint was filed)

| Checkpoint | Source copy sha256 | Inode (≠ working 4952833) | Stage suite output | Result |
|---|---|---|---|---|
| CP-V (reveal family) | 1ae9057301c815483dc50903362d69c7d6cc2bd5858f1755eed98c685a7d400c | 5040361 | `checkpoint-cpV-attempt4.txt` | 33 PASS, 0 FAIL (BASE+V) |
| CP-C (retained colour + sweep windows) | 99bf6bc8de74e7db291bd2579ab344a48efb0fa3407bfce1caea27524ec51584 | 5040551 | `checkpoint-cpC-attempt4.txt` | 43 PASS, 0 FAIL (≤C) |
| CP-S (sweep readability basis) | 26d929daa6777d28d09fd694b23617112d427784c579bdedfb90e54522da3075 | 5040639 | `checkpoint-cpS-attempt4.txt` | 47 PASS, 0 FAIL (≤S) |
| CP-U4 (contract residuals) | b241e9f3eda2b9ad2081609b2bded5aaec9487e9a9c98935a8c63c3abc7258ea | 5041360 | `checkpoint-cpU-attempt4.txt` | 72 PASS, 0 FAIL (FULL) |

File-time order V → C → S → U verified from the directory listing (09:34:39 → 09:35:44 → 09:36:00 → 09:38:11). All copies are content copies; the suite asserts nothing about them — inode independence is census-verified here and again at close (§7).
Post-CP-U4 cleanup (filed, not hidden): exactly one dead line (an empty validation `if` left by the reveal stage) was removed from the working source after CP-U4; the diff against `recreation-cpU-attempt4.html` is that single line and nothing else (diff-verified). The full suite re-ran on the cleaned source: **72 PASS, 0 FAIL**; `checkpoint-cpU-attempt4.txt` holds that final run. The cleaned source is the frozen scored source (§5). CP-U4 therefore stands as the Stage-U checkpoint of the pre-cleanup state, with the one-line delta named here — the same form as attempt 3's two-parenthesis delta against its checkpoints.
Suite-probe corrections during staging (probes fixed, sources unchanged): the CP-S stage output was regenerated once after a probe asserted the last padded threshold as 1.0 where the construction's correct value is (span − trailing pad)/span ≈ 0.932; the CP-C run caught one probe config that shifted a reveal start without its sweep window (the new sweep/reveal validation rejected it — the validation working as designed); two Stage-U probes were corrected (identifier-aware literal stripping; a density-lawful duration for the timing-table test). No source change resulted from any probe correction.

## §5 Freeze + legs + manifest

- **Frozen scored source:** `recreation.html` sha256 **7ae1ef9936c59246477eb4ad23c8e4abb066e64635ad80c459e9f2675dea9968** (63,870 → 63,7xx chars after the §4 cleanup; freeze taken after the full suite + both legs ran on this sha).
- **A-C008 legs on the frozen source, pre-wave:** `fit-table-attempt4.md` — **4 HITs** (advisory: chat body / sender-time / stat label / counter ink heights on the stricter ink basis; disposition in the table; fallback-glyph rows: none — every configured glyph resolves in the width table) · `config-census-attempt4.md` — **0 HITs** (300/300 leaves resolved; CSS custom properties 41 set / 41 used).
- **Payload manifest:** `payload-manifest-attempt4.md` — allowlist-only payloads; assembled-payload anchor scan CLEAN (heads + source comments: 15 comment blocks, no cure codes/labels/commentary; no neutralization required).
- **Comparison:** `comparison.html` updated on the recreation side only (new record interface documented); the ORIGINAL side is byte-identical to `comparison-attempt-3.html` (diff-verified: only the recreation tag line + note paragraphs changed).

## §6 Per-cure baseline-vs-after diagnostics (binding condition 2 — construction effects isolated here; lens movement prints BUNDLED in scores.md)

| Cure | Baseline diagnostic (attempt-3 source) | After diagnostic (attempt-4 frozen source) |
|---|---|---|
| C1 reveal | computeState has no partial-line state: line visible whole at tMs (600/4600/6200) | Prefix states asserted at 8 checkpoints: 4000→"THE GREATEST TRANSFO" (20/27) · 4750/4900/5100→"IN" · 5200→"IN HU" · 5450→"HI" · complete 4210/5360/5620 per line |
| C2 retained colour | charColor hold = highlight colour per swept word: GREATEST yellow at hold, HUMAN white | Hold colours asserted per character at 5650 + 14999: L1 all #ffffff · L2/L3 all #f5c518; retainColor change recolours the hold (effect probe) |
| C3 sweep windows | sweep start = line landing (startMs = tMs), duration default/per-record | Explicit records 4250/5700/5750 in state (startMs field); bar absent on L2 at 4825 and everywhere at 5650; L1 sweeping at 4600 |
| C4 sweep basis | thresholds on glyph widths only (first "IN" threshold 0.278); bar width Math.round'ed; bar height 84% from top 8% | Padded thresholds (first "IN" threshold 0.312, last 0.932 = right edge before trailing pad); render width = unrounded fraction (toFixed(3)); bar 0%/100% covers the cap region (asserted vs line-height 1.04, cap 0.716) |
| C5a column bound | titleWordOverflow vs remaining screen width (328px basis) | vs title column (179.7px) at nominal width + padding: a column-exceeding word ("TRANSFORMATIONS" on L1) is rejected (suite row); the specimen's own longest word fits nominally (173.6 + 3.0 padding < 179.7) |
| C5b line-height | lineHeightNormal consumed by the model only | `--t18-normal-lh` set from CONFIG and consumed by the meta row + stat rows in the stylesheet AND the model (suite asserts the set property at load; census 41/41) |
| C5c padding grammar | padPair leniently parsed any string | Schema type "padding": one/two px values only; "5em" rejected with a named error (suite row) |
| C5d font metrics | fallback glyph width applied silently | Fit table prints fallback-glyph rows by name: none for the default texts (every glyph resolves); the fallback advance is named in the table method |
| C6 schema | 4 keys presence-unchecked; rotateXDeg type-unchecked; opacity non-numeric passed; negatives passed | One schema table drives presence+type+range: deletion of each of the 4 keys is a named error; rotateXDeg non-numeric named; metaOpacity non-numeric named; audSizePx −3 named; non-finite sweep over all 29 numeric detail fields rejected (suite rows) |
| C7 blank optional | `lines`/`messages` blank optional field treated as absent | Present-but-blank highlightMs / popMs reject the whole override atomically with CONFIG unchanged (suite rows) |
| C8 DEN scaling | text-only params (stats/counter) disabled scaling; maxIdleTailMs unscaled | Counter-only + ×2 scales (revealStart 3400→6800, idle bound 2500→5000); stats-only + ×2 scales (last cut 13850→27700); ×3 alone accepted (idle bound 7500); timing-table replacement keeps absolute times (suite rows) |
| C9 CSS parse | no parse row (attempt-3 DEV-2 gap) | Suite stylesheet parse: balanced braces/parens + every declaration well-formed (≥40 declarations) — PASS on the frozen source |
| C10 wording | header claimed the logic "reads only CONFIG" | Header + §2 of this record name the fixed conventions outside CONFIG (DOM topology, circular shapes, tokenization/interpolation rules) |
| Held | adjacency + loop pair asserted a3 | Re-asserted on the new build: 7350/7450 states, wrap equality, boundary framing delta — all PASS in BASE |

Negative controls filed: sweep-inside-reveal rejected · reveal overlap rejected · idle tail priced from sweep ends (inflated duration rejected) · sweep end + min tail past duration rejected.

## §7 Preservation census at close (post-first-overwrite + final)

Post-first-overwrite census (run after Stage V landed): `recreation-attempt-3.html` sha = baseline 35ffde9e… ✓ · `comparison-attempt-3.html` sha = baseline 926cac0a… ✓.
Close census (after the wave, against every filed sha): preserved copies `recreation-attempt-3.html` 35ffde9e… = baseline ✓ · `recreation-attempt-2.html` 413321da… ✓ · `recreation-attempt-1.html` c2350e01… ✓ · `comparison-attempt-3.html` 926cac0a… ✓ — all byte-identical, all inode-independent of the working file. Checkpoints at their filed shas (CP-V 1ae90573… · CP-C 99bf6bc8… · CP-S 26d929da… · CP-U4 b241e9f3…) ✓. Payloads at their manifest shas (all five match `payload-manifest-attempt4.md`) ✓. Working `recreation.html` still at the frozen sha 7ae1ef99… after the wave — no post-freeze mutation ✓.

## §9 Wave result (filed at close)

Five-lens wave fired once against the frozen sha (returns `codex/attempt-4/lens-<lens>.md`, via `-o` create-once paths, one stream per lens): **motion 86 · timing 86 · purity 100 · reusability 82 · readability 84** → sum 438 → **average 87.6** · minimum 82 · **delta +8.4** vs 79.2 · **VERDICT: PASS** (bar avg ≥85 AND min ≥70). WHY: NOT-OWED (beating attempt; plan §7 scaffold marked NOT-OWED in scores.md). The two formerly stuck lenses (motion/timing 66) both rose +20 BUNDLED on the reveal family; the reusability return found two genuine defects outside the suite's coverage (the `titleMs` alias desync and the three-plus-word hold inconsistency in `wordOnsets`) — both filed in scores.md as carried residuals for the next attempt, with the suite rows they demand named there by the lens's own BODY-WRITE. This record is now SNAPSHOTTED: no further appends except a dated correction note.

## §8 Deviation register

- DEV-A4-1 (probe corrections, §4): three suite probes were corrected mid-staging; no source or checkpoint was invalidated; the CP-S stage output was regenerated once for a probe-value correction with the source byte-unchanged (sha match printed in §4).
- DEV-A4-2 (post-CP-U4 one-line cleanup, §4): the frozen source differs from the CP-U4 checkpoint by exactly one removed dead line, diff-verified and re-suited; printed here rather than silently absorbed.
- No other deviations. No premise amendment under A-C008-1 (dense frames confirmed the plan's checkpoints; the L2 hold derivation refinement is filed at §1). Attribution: **BUNDLED** for all lens movement (staged checkpoints + §6 isolate construction effects only).
- **PIXEL-UNVERIFIED** stands over the whole build (no render route): reveal, sweep coverage, camera and loop reads remain source-judged.
