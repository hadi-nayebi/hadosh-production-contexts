# Plan — T132 Serial presentation (RSVP replacement) · attempt 2 · Practice Cycle 022 / Wave 21

**Item:** T132 serial presentation · **Prior attempt:** 1 (recreation Wave 19, 2026-11-16)
**Prior scores (filed, `study/recreations/T132-serial-presentation/scores.md`):** motion 76 · timing 82 · purity 100 · reusability 76 · readability 82 — **avg 83.2, min 76 — FAIL** (bar: avg ≥85 AND no lens <70, five lenses).
**Attempt-1 source SHA-256:** `c8423a660141fd240dfbdabee84c345c2bd5200a54d957f8d0c4a81c5293ae04` (identical across all five lens payloads/returns).
**Evidence read firsthand for this plan:** scores.md (priced cures + per-lens minima) · all five attempt-1 Codex lens returns under `codex/` (motion/timing/purity/reusability/readability — verdict tails, not only the scores.md summary) · Packet #7 evidence: `study/video-digests/2026-11-16-vimeo-honda-keep-up/digest.md` §3 T01 + `onset-table.csv` (rows re-counted by this agent) · practice INSTRUCTION.md §2/§5 + amendments A-C006-1, A-C006-2, A-C008-3, A-C005-2, A-C010-1, A-C021-1/2/3 (and A-C009-3, A-C011-2, A-C012-4 where they bind below).
**PIXEL-UNVERIFIED stands** (A-C002-2): no browser binary in this seat; all verification is source/logic-level, comparison.html is the render surface.
**Consumption (A-C006-2):** consumer = DLC / multilingual production — the assembler's repeat-after-me and word-animation containers (Packet #7 §2). This attempt's engine changes (derived onsets, dwell scale, defined swap semantics) are precisely the surface that consumer drives from CONFIG; a pass that production cannot drive CONFIG-only does not count as consumed-ready.

---

## §A — Anchor re-observation (A-C006-1 — priced anchors resolved against segment evidence BEFORE Execute binds them)

Two priced anchors in the attempt-1 returns conflict with the packet's own measured record. Per A-C006-1 the segment evidence governs; both conflicts + resolutions file here and must also file in the item's scores.md at attempt-2 filing.

| # | Priced claim (attempt-1 return) | Segment evidence (onset-table.csv, re-counted) | Resolution binding attempt 2 |
|---|---|---|---|
| R1 | Timing 82: "no table entry has an 80 ms dwell, despite the reference's measured 80 ms floor"; scores.md priced cure: audit rows 8–57 for sub-120 ms dwells | **No 80 ms dwell exists anywhere in the film.** Minimum dwell over ALL word rows = **120 ms** (rows 33/35/36/39 in-segment: "I/not/be/top" at 0.12 s). In-segment dwells run 120–1160 ms. The "80–320 ms" figure entered via the lens payloads' neutral facts, not the packet CSV | **Do NOT fabricate an 80 ms dwell.** The table stays verbatim. The cure is evidentiary: the own-check packet carries the full 56-row reconciliation (below) stating the measured floor = 120 ms, so the re-score's neutral facts can be corrected at the seat's filing. Expected timing recovery comes from R2 + the overflow cure (C4), not from inventing a dwell |
| R2 | Motion 76 + Timing 82: "You ends 13,120 ms; can starts 13,280 ms — 160 ms blank, reconcile against the onset record" | Row 58 "You" onset 15.36 s / dwell 0.76 s → segment 12,360–13,120 ms. **Row 59 = SPECIAL "TRANSITION (no word legible)", onset 16.12 s, dwell 0.16 s → segment 13,120–13,280 ms.** Row 60 "can" onset 16.28 s → segment 13,280 ms. The gap is a measured specimen beat, not a table error | Keep the 160 ms exactly. Cure its *status*, not its duration: model it as an explicit typed transition phase (C6) so the stream is continuous-by-construction and window accounting is complete, instead of an unexplained hole between word rows |
| R3 | Build record basis: "rows 8–57" for 56 words | Recreation's 56 words = rows **8–58** (51 words) + row 59 transition (no word) + rows **60–64** (can · surprise · yourself. · Suddenly · you). Last word row 64: onset 16.92 s, dwell 0.12 s → segment onset 13,920 ms, ends **14,040 ms** — 40 ms past the filed 14,000 ms cycle (attempt-1 build record's overflow note is correct) | Attempt-2 table audit cites rows 8–64 with row 59 accounted as the transition. `cycleMs` is cured under C4 so the final 120 ms dwell plays in full |

All other priced anchors re-observed clean: "Limits." 1160 ms hold (row 8: 3.00 s / 1.16 s) · pan 18 px/s × wrap 120 px = wrap every 6.67 s (source: `panPxPerSec: 18`, `panWrapPx: 120`) · word ink `#e63329` on sky `#a9c6d4` ≈ 2.41:1 (seat-recomputed 2.41, matches readability return's ≈2.4:1) · far/near ridge polylines span 0–720 px with **no period-120 repetition** (y at x=0 ≠ y at x=120 on either ridge) — the motion defect is real as priced.

---

## §B — Delta targets per lens (tied to named cures in §C)

Bar arithmetic: prior sum 416 → PASS needs sum ≥425 (avg ≥85) with min ≥70. Targets below are the cure-complete ceilings; the **floor-needed column** shows the minimum each lens must contribute if the others hit target — the plan passes with buffer, it does not pass on any single lens's heroics.

| Lens | Prior | Target | Δ | Floor-needed | Carrying cures |
|---|---|---|---|---|---|
| motion | 76 | **88** | +12 | ≥80 | C1 (seamless tiled pan, continuous clock, sun un-panned) · C6 (transition typed, not a hole) |
| timing | 82 | **90** | +8 | ≥84 | C5 (56-row audit + R1 correction filed) · C6 (row-59 accounting) · C4 (final dwell plays complete — no 80 ms truncation) |
| purity | 100 | **100** | 0 | ≥95 (no-regression guard) | No cure attempted; every cure is parameterized construction (tiled geometry generated from CONFIG tile points, no specimen media, no traced redraw). Any purity drop = a cure built by embedding — stop and rebuild |
| reusability | 76 | **89** | +13 | ≥84 | C3 (onsets derived in-engine, `dwellScale`) · C4 (swap semantics defined + validated) · C7 (canvas geometry in CONFIG) · C8 (typography fit policy) · C9 (mode contracts declared + validated) |
| readability | 82 | **89** | +7 | ≥85 | C2 (darkened red, convergent cure) · C8 (fit policy keeps the longest word unclipped at 360 px) |
| **Average** | **83.2** | **91.2** | **+8.0** | — | Sum at target 456 vs 425 needed = **+31 sum / +6.2 avg buffer**. At 60% cure yield on every cured lens the wave still lands ≈88.0 avg — PASS with min-lens risk concentrated in reusability (see §F) |

Targets live in this plan and the seat's filing only. They never enter a lens payload (A-C005-2 / A-C019-2: payload headers carry the bar, never a prior or target score).

---

## §C — Cure plan (convergent first)

Convergent defects lead, per scores.md's CONVERGENT-LENS RULE and INSTRUCTION §2.2: (i) background-motion defect — named by motion on T132/T135/T137, tiled-pan is the RSVP-family cure; (ii) red-on-pale contrast — named by readability on T132/T134/T135. Both head this plan. Single-lens cures follow in lens-score order (reusability 76 → timing 82).

### Convergent cures

**C1 — Seamless tiled landscape on a continuous pan clock** *(motion 76; convergent defect i)*
- Construction: ridge geometry becomes a **tile**: CONFIG carries `plate.tilePx` (the repeat period) + far/near tile point sets whose y at x=0 **equals** y at x=`tilePx` by construction (the closing point is generated from the opening point, not hand-matched). The renderer draws the tile repeated across `canvasW + tilePx` so the viewport is covered at every offset. Pan offset = `−((elapsedMs/1000 × panPxPerSec) mod tilePx)` where `elapsedMs` is the **total elapsed clock, never reduced modulo `cycleMs`** — the cycle-boundary reset dies with the modulo that caused it. `panWrapPx` is deleted as an independent key: wrap ≡ tile period, one fact in one place (a second key that can disagree with the tile is the attempt-1 defect's shape).
- The **sun leaves the pan group**: in attempt 1 the sun sits inside `#pan` and wraps with the ridges — a sun teleporting every 6.67 s is part of the same discontinuity. Sun becomes a static CONFIG-positioned element (the specimen plate is a driving shot; the word anchor zone is sky, and no return priced a moving sun).
- Named parameters, all CONFIG: `tilePx`, `panPxPerSec`, tile point sets, sun cx/cy/r. No geometry literal survives in engine code (A-C008-3 census in §E).

**C2 — Darkened red ink** *(readability 82; convergent defect ii)*
- Construction: `wordColor` `#e63329` → **`#b91f16`** — seat-computed contrast vs sky `#a9c6d4`: **3.58:1** (from 2.41:1), same red hue family as the specimen's red (packet census: all specimen text RED, 9 frames firsthand; the packet prices hue, not a hex — the recreation's sky is its own, so the hex is the recreation's to cure). `numeralColor` takes the same value so a mode swap cannot re-import the defect. Sky is **not** darkened: the plate's pale sky is specimen-faithful (digest §3 T01: pale blue sky over white salt flat) and darkening it would trade a readability cure for a motion/fidelity defect.
- Verify asserts the computed ratio ≥3.5:1 from the two CONFIG values mechanically, not by eyeball (§E).

### Single-lens cures

**C3 — Onset derivation moves into the engine** *(reusability 76 — the scores.md priced cure, carried whole)*
- Construction: CONFIG `words` entries shrink to `{t, dwellMs}` (+ optional `gapAfterMs`, see C6). `buildTimeline` derives onsets cumulatively. New key **`dwellScale`** (default 1) multiplies every dwell inside the derivation. `cycleMs` becomes **derived** (= Σ scaled dwells + gaps) unless explicitly set, in which case validation (C4) prices any mismatch instead of silently truncating. A table swap is now CONFIG-only end to end — the attempt-1 harness recomputed onsets *outside* `buildTimeline` in the probe, which is exactly what the reusability return priced.

**C4 — Schedule swap semantics defined, validated, and the overflow cured** *(reusability 76 · timing 82)*
- Semantics, stated in the build record and enforced in code: gaps exist **only** as explicit transition entries (C6) — derived onsets make accidental gaps and overlaps impossible by construction; overflow cannot occur because the cycle is the derived total (**14,040 ms** for the specimen table — the final "you" plays its full 120 ms; attempt 1's loop truncated it to 80 ms, timing return's third finding).
- Validation (A-C011-2): zero/negative/non-finite dwell, empty word list, non-positive `dwellScale`, and a set-`cycleMs` shorter than the derived total are **rejected atomically** (timeline unchanged) with the rejection recorded in an observable rejected-config record the own-check suite asserts. Extreme magnitudes are swept per A-C021-3 (§E).

**C5 — Full table audit against the packet** *(timing 82; A-C006-1 execution)*
- Construction change: none to the values (the audit *is* the cure for two of timing's three findings — R1/R3 above). The builder reconciles all 56 recreation rows against onset-table.csv rows 8–64 (onset − 3.00 s, dwell verbatim), row by row, and files the reconciliation in the own-check packet: 56/56 word rows + row 59 accounted + measured floor 120 ms + final-row end 14,040 ms. Any row that does **not** match the CSV is a build defect to fix in the table, never a discrepancy to narrate.

**C6 — The transition beat becomes a typed phase** *(motion 76 · timing 82; carries R2)*
- Construction: the timeline gains `{kind:'transition', dwellMs:160}` at segment 13,120 ms (via `gapAfterMs: 160` on "You", or an explicit transition entry — builder's choice, one mechanism only). The render state for a transition is *plate panning, word slot empty by type* — a displayed state the own-check suite asserts at the hold checkpoint (A-C006-3 displayed-state rule), distinct from "no current word" as a fall-through. Window accounting (A-C007-1): words 13,880 ms + transition 160 ms = cycle 14,040 ms, every millisecond of the window owned by a named phase.

**C7 — Canvas geometry enters CONFIG** *(reusability 76)*
- Construction: `canvasW` / `canvasH` keys (720 / 405) drive the SVG `viewBox`, the sky/ground rect widths, and the stage aspect (stage CSS aspect derived from the same keys at init). The hardcoded 720×405 / 16:9 literals the reusability return named are consumed from CONFIG or whitelisted as structural under A-C008-3 with the classification printed per literal.

**C8 — Typography fit policy** *(reusability 76 · readability 82)*
- Construction: CONFIG `fitPolicy: 'shrink'` + `minFontPx`: at render, a word whose modelled ink width exceeds the stage width is shrunk toward `minFontPx` instead of clipping under `white-space:nowrap`. The policy is asserted on the specimen's longest word ("yourself.", 190.4 px ink at 360 px stage per attempt-1 fit-table) **and** on a synthetic over-long swap word (§E swap test) — the swap case is the reusability claim, the specimen case is the readability claim.

**C9 — Mode contracts declared and validated** *(reusability 76)*
- Attempt 1 ships three modes (table / derived / countdown) whose non-table modes require undeclared keys (`baseDwellMs`, `finalMultiplier`, `finalMarks`, `numerals`, `numeralOnsetsMs`, …) and whose `numeralFontPx`/`numeralColor` sit inactive in table mode. Cure: a per-mode required-key contract, validated at init for the **active** mode (missing key = atomic rejection per C4), and the build record declares each mode's key set. Inactive-in-active-mode keys are named as such in the config census — priced, not hidden. Source comments stay neutral: no cure codes or lens commentary in the source (A-C008-4 — comments are payload surface).

### Deferrals — each priced under EVERY lens (A-C009-3)

| # | Deferred | Reason | motion | timing | purity | reusability | readability |
|---|---|---|---|---|---|---|---|
| D1 | Photographic salt-flat plate (texture, vehicles, dust) | Attempt-1 deferral stands: texture is T141's territory; T132's claim is the word schedule over a moving plate | 0 — the lens priced pan *continuity*, never texture; C1 cures the priced defect | 0 — schedule unaffected | **+protective** — a photo/traced plate is the refusal class; deferral is what keeps 100 | 0 — plate geometry stays CONFIG either way | 0 — words sit on the sky band in both forms |
| D2 | Countdown segment 0.40–3.00 s (packet T02, scaling numerals) | Different technique (T02/T133's catalogue entry); T132's window is the word segment 3.00–17.04 s. The countdown *mode machinery* already in the source is contracted under C9 but not exercised by this attempt's table | 0 — outside the priced window | 0 — timing lens prices the segment window; window accounting (C6) names the exclusion | 0 | **−0..−2 residual risk** — a lens may price unexercised modes as dead surface despite C9's contract; accepted, named here, not hidden | 0 |
| D3 | Full 138-word manifesto (window stays: 56 words, rows 8–64) | The recreation's evidenced window is the filed segment; extending the window is a new attempt's scope, not a cure for any priced finding | 0 | 0 — the audit (C5) makes the window's bounds explicit; no return priced window length | 0 | 0 | 0 |
| D4 | Pixel/render verification | No browser binary in this seat (attempt-1 scores.md, standing) | −0..−2 — source-level pan proof only; PIXEL-UNVERIFIED printed, never cited as rendered verification (A-C002-2) | 0 — schedule is logic-provable | 0 | 0 | −0..−3 — contrast is computed from hex values, legibility modelled at 360 px; the attempt-1 readability score was already provisional on this basis and the cure is priced inside that basis |
| D5 | Length-weighted dwell | **Rejected, not deferred:** packet T05 is a negative finding — median dwell 0.16 s in *every* length band; the specimen's clock is a metronome bent only by punctuation (T04). Building length weighting would be unfaithful | 0 | **+protective** — implementing it would *cost* timing fidelity | 0 | 0 | 0 |

No other attempt-1 finding is unaccounted: motion's 2 findings → C1 + C6 · timing's 3 → C5/R1 + C6/R2 + C4 · reusability's 5 → C3 + C4 + C7 + C8 + C9 · readability's 1 → C2 (+ C8) · purity's 0 → no-regression guard.

---

## §D — Execute checklist (INSTRUCTION §3, staged under A-C010-1a + A-C012-4 checkpoint gate)

Preservation and staging bind every stage: **no stage's Execute opens until the prior stage's checkpoint is filed and read back** (A-C012-4); attribution prints BUNDLED unless the staged checkpoints isolate an effect (A-C010-1a).

- [ ] **P0 — Preservation before any mutation (A-C010-1b widened set):** inventory + hash the item's COMPLETE prior evidence set — attempt-1 `recreation.html` → create-once content copy `recreation-attempt-1.html`, attempt-1 build records (both), fit-table, config-census, all codex payloads/returns, `comparison.html` + its referenced assets. Copies are **content copies, never hardlinks** (A-C004-1); baseline is **machine-written** sha256 output, validated (64-hex, count matches inventory) before capture counts (A-C003-2); every destination is **create-once** — existing destination with mismatching sha stops execution (A-C005-1). Preservation census re-verifies preserved copies **after** the working file's first overwrite, not only at close (A-C004-1).
- [ ] **Stage 1 — Engine (C3 + C4 + C6):** words → `{t, dwellMs}`; onsets derived; `dwellScale` consumed in derivation; `cycleMs` derived/validated; transition as typed phase; validation + atomic rejection record. → **Checkpoint 1:** create-once source copy + stage own-check output; suite asserts checkpoint inode ≠ working-file inode and checkpoint sha frozen at filing (A-C010-1a).
- [ ] **Stage 2 — Plate (C1):** tile geometry generated periodic (y(0) ≡ y(tilePx) by construction); continuous elapsed pan clock; `panWrapPx` deleted; sun out of the pan group. → **Checkpoint 2** (same form).
- [ ] **Stage 3 — Surface (C2 + C7 + C8 + C9):** `wordColor`/`numeralColor` → `#b91f16`; canvas keys consumed; fit policy live; mode contracts validated. → **Checkpoint 3** (same form).
- [ ] **Score-blind build record** (`build-record-blind.md` form, attempt-2 tagged, create-once): mechanics, construction, deferrals D1–D5 named, swap-test result, purity grep result, SHA-256 of the final source. **No prior scores, target scores, or cure-to-lens commentary anywhere in it** (A-C005-2); source comments scanned and neutralized if contaminated (A-C008-4).
- [ ] **Comparison page re-pointed only after** the new attempt passes its own checks (§E legs 1–6); comparison-preservation copy taken create-once before re-pointing.
- [ ] PIXEL-UNVERIFIED printed in the build record; no filing cites a pixel step (A-C002-2).

## §E — Verify checklist (INSTRUCTION §5 — the wave, again)

Own legs first, then the five-lens re-score wave. Every leg names its instrument; an intention without an instrument does not count (jev-plan-exit floor: verify-instrument-specificity).

1. [ ] **Fit leg** — `guard-measured-fit` re-run on the final source: every word's ink width/height + margin at the 360 px stage, HITs = 0 required. Includes the C8 cases: "yourself." under the shrink policy, and the synthetic over-long swap word (fit asserted at its shrunk size, ≥ `minFontPx` floor or the failure printed). Displayed-state basis (A-C004-2/A-C006-3): the transition phase's displayed state (plate visible, slot empty) asserted at its 13,120–13,280 ms hold checkpoint; word vertical position from `anchorYFrac` as displayed, not as configured proxy.
2. [ ] **Config-census leg** — `guard-config-census` (v3.1 + Cycle-021 addenda) re-run: HITs = 0 required. **Consumption, not binding (A-C006-2, DEMONSTRATED form):** for **every** CONFIG key (including new keys `dwellScale`, `tilePx`, `canvasW/H`, `fitPolicy`, `minFontPx`, `gapAfterMs`), a **mutation-based effect mapping** — mutate the key, assert the named rendered/computed effect changes (key → effect printed per key). A key bound but unconsumed fails the suite. Deleted `panWrapPx` asserted absent.
3. [ ] **Literal census (A-C008-3 + A-C009-4):** source scanned for numeric/color literals outside CONFIG against a build-record whitelist of named structural constants, printed per literal. Unit identities (1000 ms/s) and loop/index arithmetic may whitelist as structural; **no content-carrying literal** (colours, geometry, dwells, positions) may take a structural classification. Unlisted literal = suite failure. Known attempt-1 survivor to re-check: `#000` page void (structural, printed in attempt-1 census — re-print, don't inherit silently).
4. [ ] **Effect mappings (A-C002-1):** the suite asserts mappings, not counts — word index → displayed word at its derived onset; `dwellScale` 1 → 1.5 → every dwell and the derived cycle scale together; tile period → pan wrap identity (offset at t and t + tilePx/panPxPerSec identical plate state); transition entry → slot-empty displayed state at its checkpoint; documented overrides (seek via `window.__T132`) → parsed behaviour re-asserted on the new engine.
5. [ ] **Swap test (logic level; CONFIG-only end to end — the C3 claim):** replace the word table with a 3-word table carrying **words + dwells only** (no onsets supplied — supplying onsets in the swap is an automatic FAIL of the C3 cure), scale via `dwellScale`, swap palette + tile geometry; assert the regenerated timeline, cycle total, and plate state from CONFIG alone. Palette leg: render-only keys change no timeline value.
6. [ ] **Purity leg:** purity grep over the final source (0 hits) + asset inventory (no external assets, no specimen media, no embedded frames); determinism (no `Math.random` / `Date.now`); syntax check PASS. Self-start asserted (A-C010-2): the piece reaches its scheduled ending (14,040 ms + loop) under its own startup path.
7. [ ] **Magnitude sweep (A-C021-3) + adversarial validation (A-C011-2):** for **every** numeric CONFIG field (`dwellMs`, `gapAfterMs`, `dwellScale`, `fontPx`, `minFontPx`, `panPxPerSec`, `tilePx`, `anchorYFrac`, tile/sun/ground coordinates, `canvasW/H`, any set `cycleMs`) — a 400-nines-class value, plus zero / negative / NaN / Infinity / wrong-type cases: each is either consumed sanely or rejected atomically with the timeline unchanged and the rejection in the observable record. A field that parses an oversized literal to Infinity and consumes it fails the leg.
8. [ ] **Contrast assertion (C2):** computed ratio of `wordColor` vs `plate.sky` from CONFIG values ≥ 3.5:1, printed with both hex values; same check for `numeralColor`.
9. [ ] **Pan-continuity assertion (C1):** plate state sampled at offsets straddling (a) several tile wraps and (b) the 14,040 ms cycle boundary: offset(t) is continuous at both — no jump at wrap (tile identity) and no reset at cycle wrap (continuous clock). Sun position asserted invariant across the full cycle.
10. [ ] **Table-audit assertion (C5/R1–R3):** machine diff of the final table (derived onsets re-expanded) against onset-table.csv rows 8–64: 56/56 word rows equal, row 59 transition accounted, min dwell 120 ms, final end 14,040 ms. Any mismatch prints the row and fails the leg.
11. [ ] **Payload discipline (A-C005-2 / A-C008-4 / A-C010-1c / A-C019-2 / A-C021-1 / A-C021-2):** payload manifest filed before any firing (allowlist = neutral source + neutral own-check packet incl. the C5 reconciliation; exclusions named; anchor scan over assembled payloads **including filenames, labels, and source comments**, numerical + qualitative). Each lens session runs in a **dedicated per-lens scratch cwd** containing only content copies of the allowlisted packet files (A-C021-1). Returns are `-o`-written to /tmp first, then content-copied to their create-once destinations with sha256 verified identical (A-C021-2). Session scope is score-blind: no RUN.md, scores.md, prior returns, or target scores in any payload or session (A-C019-2).
12. [ ] **Re-score wave:** five lenses (`guards/codex-rescore-wave.md`), one firing per lens on the final source's single SHA (the scored source is snapshotted and bound to its payloads, A-C010-1b). Seat recomputes arithmetic from the filed SCORE lines.
13. [ ] **Mechanical guards (guards.md):** delta arithmetic · attempt-preservation census (post-wave re-verification) · floor-rule gate check — all three run and printed.
14. [ ] **Filing:** scores.md gains the Attempt-2 entry — per-lens scores, average, minimum, **signed delta vs 83.2**, verdict vs the bar, the R1/R2/R3 conflict resolutions, and (non-beating branch only) the WHY from §G's scaffold. `jev-plateau` fires at close on a non-beating outcome; an applied PLATEAU-UNNAMED keeps the close open.

## §F — Failure-point evaluation (priced per item; jev-plan-exit §2.4 standing points priced or ruled out)

| # | Failure point | Price / mitigation |
|---|---|---|
| F1 | **Tile seam by hand-matching:** if the builder hand-tunes tile endpoints instead of generating the closing point from the opening one, a sub-pixel seam survives every logic check and motion stays ≈76–80 | Construction rule in C1 (generation, not matching) + Verify leg 9 samples *at* the wrap. Residual risk: moderate — this is the plan's single most likely partial cure |
| F2 | **Continuous clock vs seek:** `seek()` resets `start`; if pan derives from the seek-adjusted clock inconsistently with the word cycle, pan and words desynchronize after a seek | Effect mapping in leg 4 asserts seek → both word phase and pan offset from the same elapsed basis |
| F3 | **Derived onsets silently change a dwell:** the C3 refactor touches all 56 rows; a transcription slip in `{t, dwellMs}` form changes the specimen table while looking like a refactor | Leg 10 machine-diffs the re-expanded table against the CSV — the refactor cannot pass with a changed table |
| F4 | **R1 correction not believed:** the re-score's timing lens may still price the absent 80 ms dwell if its neutral facts repeat the attempt-1 claim | The C5 reconciliation rides in the allowlisted own-check packet (leg 11) — evidence, not commentary. Residual: if the lens prices it anyway, timing lands ≈84–86 and the wave passes on the other lenses' buffer; the WHY scaffold (§G) pre-names this branch |
| F5 | **Reusability scope creep:** C7+C8+C9 together are the broadest cure surface; a builder who rebuilds instead of curing risks purity and the staged-checkpoint discipline | Stages are gated (A-C012-4); each of C7/C8/C9 is independently checkpointed inside Stage 3's sub-steps if the seat directs, and any stage that cannot checkpoint files attribution BUNDLED rather than claiming isolation |
| F6 | **Darker red priced as drift:** a lens could read `#b91f16` as departing from the specimen's bright red | Low: the readability return *prescribed* darkening ("Darken the red… while retaining the red ink"); hue family retained; sky untouched. Priced −0..−2 on readability in the worst case, still ≥87 |
| F7 | **Score-blind contamination:** cure vocabulary ("tiled", "C1", amendment labels) leaking into source comments or payload filenames contaminates every lens (A-C008-4's two Cycle-008 detections are the precedent) | Leg 11's anchor scan covers comments + filenames pre-firing; contaminated source is neutralized (comments only, suite re-run) before payloads are generated |
| F8 | **Preservation by hardlink / late census** (the Cycle-004 T13 + Cycle-010 T11 defect class) | P0's content-copy + inode/sha assertions and the post-overwrite re-census are checklist items, not intentions |
| F9 | **Reduction risk:** quietly narrowing the window, dropping the transition, or trimming the final dwell to fit 14,000 ms would make several cures "easier" | Named and banned: C4/C6 carry the full 14,040 ms; D3 prints the window as a scope fact, not a reduction. The plan's only lawful outcomes are a higher average filed, or a non-beating WHY filed — no third outcome |

Ruled out with reason: tempo/fitting interaction of the T15 type (no fitting motion exists here — words are static per dwell, scale 1→1 in table mode); wrapped-state vertical overflow (single centred word, no wrapping element — A-C006-3's wrapped clause has no surface; its displayed-state clause is carried in leg 1).

## §G — WHY scaffold (pre-drafted, INSTRUCTION §2 standing product — filed at close on the non-beating branch, never improvised)

**Cure-by-cure outcome slots** (fill from the filed returns, verbatim SCORE lines bound):
- C1 tiled pan / continuous clock / sun: motion outcome ___ (moved / partially / not — return wording: ___)
- C2 darkened red: readability outcome ___
- C3 derived onsets + `dwellScale`: reusability outcome ___
- C4 swap semantics + validation + overflow: reusability ___ · timing ___
- C5 table audit + R1 correction: timing outcome ___ (incl. whether the 80 ms claim was re-priced — F4 branch)
- C6 typed transition: motion ___ · timing ___
- C7/C8/C9 geometry / fit / contracts: reusability outcome ___

**Stuck-lens hypothesis (pre-committed):** if the attempt does not beat 83.2, the stuck lens is most likely **reusability** — it carries the broadest cure surface (five cures) and the attempt-1 return's objections were architectural (semantics *undefined*, not merely unimplemented); a lens that prices undefined semantics can keep pricing residual undefined corners (D2's unexercised modes) after every named cure lands. Second candidate: **motion**, via F1 (a seam the logic suite cannot see, PIXEL-UNVERIFIED cutting both ways).

**Plateau evidence `jev-plateau` will need (assembled at close, not gathered after):** per-cure checkpoint shas + own-check outputs (staged attribution) · the leg-9/leg-10 assertion outputs · the C5 reconciliation as filed in the payload · both attempts' SCORE lines per lens · the F4 disposition if timing re-prices R1. Plateau naming must distinguish: (a) *cure-not-built* (a slot above shows the construction absent — not a plateau, a non-delivery), (b) *cure-built-not-credited* (construction + assertions filed, lens unmoved — the plateau claim, with the lens's own wording as evidence), (c) *evidence-disputed* (R1 class — the lens's premise conflicts with the packet CSV; priced under A-C014-1's dispute-risk rule from the basis the segment evidence supports).

**Consequence slot:** if non-beating, T132 returns to the pool at its new average for the next cycle's pick rule (lowest-first will re-price it against the pool); the WHY files in scores.md before the cycle closes (§5.4 floor rule) and `jev-plateau` fires at close.

---
*Plan agent, Cycle 022 Wave 21 — plan only. No build performed; `recreation.html` untouched (SHA stands at the attempt-1 value above). Next: seat fires Codex plan review (`guards/codex-plan-review.md`) on this plan + `jev-plan-exit`, consumes both, writes the A-C015-1 skeleton, then Execute opens under §D.*
