# Plan — T14 CCTV wall projected text · Attempt 2 · Cycle 010 Wave 9 (Plan phase only)

Item: T14 · Artifact dir: `hidden_files/study/recreations/T14-cctv-wall-projected-text/`
Prior: attempt 1, avg **81.6** (motion 92 · timing 88 · purity 96 · reuse 64 · readability 68), min 64 — FAIL (avg <85, reuse + readability under the 70 floor).
Target: **beat 81.6; aim ≥85 with every lens ≥70** (needs +17 lens-points net; reuse +6 and readability +2 just to clear floors).
Sources read firsthand this Plan: scores.md in full · all five attempt-1 Codex lens returns (codex/lens-{motion,timing,purity,reusability,readability}.md) · build-record.md · recreation.html source in full · RUN.md §1 cure inventory · INSTRUCTION.md §1–§2 · guards/jev-plan-exit.md §2.4.

## Measured wall-onset anchor (A-C006-1 — binds this attempt)

ffmpeg WAS available (ffmpeg 8.1.2). Frames extracted from the artifact's own `segment.mp4` (6.000 s, 960×540, 30 fps; time origin = segment start = original 1:19.5) into /tmp/t14frames/ (intermediates, not the artifact dir) and inspected firsthand:

| Segment time | Wall text? | Evidence |
|---|---|---|
| 2400 ms | NO | TV question complete with cursor block; wall bare |
| 2500 ms | NO | TV question complete; wall bare — confirms the timing return's wall-empty frame (t82 ≈2500 ms) |
| 2533 ms | NO | last wall-empty frame extracted |
| 2567 ms | **YES — first partial glyph** | a single glowing partial stroke of the wall "I" above the TV, upper-centre-left; the 2600 ms extraction is the identical source frame (same sha) |
| 3000 ms | YES | "I HAVE A" complete, "SU…" writing on line 2 |

**Measured first-wall-character time: bracket (2533, 2567] ms — first evidenced presence at 2567 ms, ± one frame (33 ms) granularity. Nominal anchor filed: 2567 ms.**
Attempt 1's checkpoint `wallWriteAt: 2400` shows 2 wall chars at 2500 ms (floor((2500−2400)/65)+1 = 2) — contradicted by the segment evidence, exactly as the timing lens (88) priced it. Per A-C006-1 the segment evidence wins over the priced anchor.
Construction consequence (priced, not hidden): moving wallWriteAt 2400 → 2567 moves wall completion (23 chars at 65 ms/char, last char at start + 22×65) from the timing lens's actual 3765 ms to **3997 ms**; the wall's hold before the follow-up (4400 ms) compresses 635 ms → **403 ms** — still a positive, named hold. Question completion (1940 ms) and follow-up completion (4785 ms) are unchanged. The build record's completion figures are corrected to the timing lens's actuals (question full 1940 · wall full 3765 at the old anchor · follow-up 4785), with the new wall completion (3997 ms) recomputed and filed by Execute.

## (a) Cure plan — convergent findings first

### CONVERGENT 1 (purity 96 + reuse 64): CONFIG completeness + census-claim correction
Attempt 1's claim "0 non-trivial technique-shaping literals outside CONFIG" is unsupported (both lenses, convergently). Literals verified in the source this Plan, outside CONFIG:
- wall width multiplier **0.58** in `fitWall()` (`w * 0.58`) and the wall box CSS width 58% / left 24% / top 10%;
- room/text geometry: blinds (left 0, top 16%, width 17%, height 56%, slat margin 6%), tvGlow (left 30%, top 26%, width 52%, height 44%, **opacity 0.35**, CSS `blur(18px)`), stand (31%/84%/46%/11%), TV (34%/47%/40%/36%, **borderWidth 6px**, radius 3px), tvText padding 7%/8%;
- glow/shadow: TV textShadow blur 6px, wall textShadow blurs 10px/26px;
- font sizes/line heights: chrome `clamp(9px,2.2vw,17px)`, TV `clamp(9px,2.4vw,19px)`, TV line-height 1.45, wall line-height 1.3, chrome letter-spacing .04em;
- gradient stops: wallpaper 0%/72%/100%, vignette `transparent 52%`;
- scanline construction: `rgba(0,0,0,0.55)` stops at 0/1px, spacing 3px; vignette falloff `rgba(0,0,0,0.85)`.

Construction changes:
1. Add named CONFIG keys for every class above (geometry group · glow group — tvGlowOpacity, tvGlowBlurPx, tvTextShadowBlurPx, wallGlowBlurPx/wallGlowBlur2Px · TV borderWidthPx/borderRadiusPx · font group — chrome/TV font clamp triples, tvLineHeight, wallLineHeight, chromeLetterSpacingEm · gradient-stop group · scanline group — scanlineColor/alpha, scanlineLinePx, scanlinePeriodPx, vignetteStopPct, vignetteAlpha) and apply them from JS exactly as the palette is applied today; the 0.58 multiplier becomes `wallBoxWidthFraction` consumed by BOTH the CSS-width application and `fitWall()`.
2. Correct the census claim: build-record-attempt-2 replaces the "0 non-trivial literals" sentence with the measured A-C008-3 literal-census result (see Verify leg); no completeness claim is printed that the census does not support. Per A-C009-4, any literal claimed structural is printed per-literal in the build record, and content literals are never classified structural.

### CONVERGENT 2 (reuse 64 + readability 68): two-dimensional measured fit
Attempt 1's fit is width-only, from an assumed 0.60 glyph-width factor, no margin, no height/line budget; many-line answers can overlap the TV or leave the stage, and an unbroken long word shrinks with no floor.
Construction changes:
1. **Measured width:** the fit measures the actual rendered wall text width (canvas `measureText` against the element's actual font stack at a reference size, scaled — or an equivalent DOM measurement), with an explicit fit margin (named CONFIG key, e.g. `wallFitMarginFraction`); the 0.60 factor survives, if at all, only as a documented fallback when measurement is unavailable, and the build record prints which basis ran. The own-check fit table (Verify) files measured widths per line, not factor products.
2. **Two-dimensional budget:** font size = min(width-fit, height-fit, `wallMaxFontPx`), where height-fit = wall box height (named CONFIG fraction of stage height, bounded above by the TV's top edge so wall lines cannot reach the TV) ÷ (line count × wall line-height). Line count comes from the actual wrap of the actual text.
3. **Readable floor + long-word handling:** a named minimum wall font (`wallMinFontPx`, justified in the build record against the 9px chrome floor and the phone stage); an unbroken word longer than `wallLineMaxChars` is hard-split at the char limit into continuation lines (so it enters the same wrap/fit path) instead of shrinking unboundedly; if the floor still cannot be met within the 2D budget, the build emits an explicit diagnostic (observable, asserted by the suite) rather than silently shrinking below the floor. Specimen default is invariant under this cure: lines stay `I HAVE A` / `SUBSCRIPTION.` (longest word = 13 = the limit), asserted by the suite.

### Single-lens cure R-1 (readability 68): TV vertical fit of the complete exchange
At a 360×202.5 stage the TV screen leaves ~42px for text; the full exchange (2-line question + blank line + follow-up at ~13px line-height) needs ~52px; `overflow:hidden` cuts "To what?".
Construction change (combined, in this order): (i) drop the blank-line separator — the follow-up joins with a single `\n` instead of `\n\n` (saves one full line, ~13px); (ii) reduce tvText vertical padding via the new CONFIG padding keys; (iii) only if (i)+(ii) still fail the displayed-state model, grow the TV screen height fraction via CONFIG geometry — priced against wall-box bottom / stand top containment in the same model. The 9px font floor stands. All three holds (question-only · question+wall · full exchange) must pass the source-bound displayed-state model (Verify leg) for BOTH containment AND legibility, including wrapped states.

### Single-lens cure U-1 (reuse 64): checkpoint coherence + atomic override rejection (A-C006-4)
Attempt 1 clamps overrides only at zero: `wallAt=5000&followAt=2000` reverses the argument, `wallAt=9000` silences the wall, and start-order does not guarantee completion-order for longer texts.
Construction changes:
1. A validation/normalization stage runs after overrides are parsed and BEFORE any state is rendered: it computes actual completion times from the effective CONFIG (tv1Complete = tvTypeStart + (len(tvLine1)−1)×tvCharMs, wallComplete likewise, followComplete likewise) and requires strict completion-order — tv1Complete < wallWriteAt, wallComplete < tvFollowAt, followComplete ≤ durationMs, all checkpoints inside [0, durationMs) — under a documented scheduling policy printed in the source header/build record.
2. **Atomic rejection (A-C006-4):** an invalid combination rejects the WHOLE override set (timeline/CONFIG unchanged from defaults — no partial application) and appends the rejected combination + reason to an observable rejected-overrides record (e.g. `window.__rejectedOverrides` plus a DOM-readable diagnostic node) that the own-check suite asserts. Valid swaps — including attempt 1's filed swap (`wallAt=2600`) and the new default schedule — must still be accepted; the suite asserts both branches.
3. Adversarial swaps in the suite: reversed checkpoints, out-of-window checkpoints (wallAt ≥ duration), long question (completion crossing wall start), many-line answer, unbroken long word.

### Single-lens cure T-1 (timing 88): wall-onset anchor re-observation
Construction change: `checkpoints.wallWriteAt: 2400 → 2567` (measured bracket above; A-C006-1). No other checkpoint or speed changes. Build record corrected to actual completion times (1940 / 3997 new / 4785) and the anchor's evidence (frame times + bracket) filed in build-record-attempt-2 and scores.md at filing.

### Deferrals (in writing, risk priced under EVERY lens that can see the beat — A-C009-3)
- **D-1: Paired playback comparison of intermediate reveals + the 6s loop boundary (motion cure 4).** Reason: no working render surface in this seat (A-C002-2 — headless Chrome blocked; PIXEL-UNVERIFIED stands). Risk by lens: **motion** — reveal cadence and loop reset remain source-verified only; motion (92) can hold but cannot be claimed specimen-matched, and a cadence defect invisible in source would go unpriced again; **timing** — segment-measured anchor (this Plan) covers onset, but intermediate per-char tempo vs the specimen stays unverified in playback; **readability** — rendered phone holds unverified; mitigated, not cured, by the source-bound displayed-state model; **purity** — no risk (no media is introduced by deferring); **reuse** — no risk (playback is not a reuse surface; parameter behaviour is suite-asserted at logic level).
- **D-2: Pixel/bitmap glyph raster for the TV text.** Reason: no lens priced glyph raster as a defect — attempt 1's Plan rejected it and the motion/readability returns priced typing, fit and clipping, not glyph shape; building it now is unpriced scope. Risk by lens: **motion** — glyph fidelity gap, if any, stays inside the 92's existing source-verified margin; **readability** — monospace at the 9px floor remains the read; a bitmap font could help or hurt and is untested either way; **timing / purity / reuse** — no visible beat (no timing, media, or parameter surface changes).
- **D-3: Wall brightness/glow behaviour over time** (readability noted the wall brightness never decreases — an observation, not a priced cure). Reason: not in the priced gap; changing it risks the motion construction all lenses credited. Risk by lens: **readability** — the observation may be re-noted; it cost no named points in attempt 1; **motion** — steady glow is part of the credited locked-off construction; **timing / purity / reuse** — no visible beat.

## (b) Execute checklist (numbered — Execute follows this order)

1. Verify preservation BEFORE touching the working file: `recreation-attempt-1.html` exists as a CONTENT copy (done in this Plan — see §Preservation below); re-verify its sha256 equals recreation.html's sha and the seat baseline entry; after the working file's FIRST overwrite, re-verify the preserved copy's sha again (A-C004-1 census).
2. Rebuild `recreation.html` in cure order: CONVERGENT 1 (CONFIG migration + application from CONFIG) → CONVERGENT 2 (measured 2D fit + floor + long-word split) → R-1 (TV vertical fit) → U-1 (validation stage + atomic rejection + rejected-overrides record) → T-1 (wallWriteAt 2567 + corrected completion figures). Motion construction (locked-off, per-char slicing, steady chrome, 6s loop) is NOT otherwise altered.
3. Config-first / purity preserved throughout: no specimen media, no traced artwork, no external references; every new shaping value enters as a named CONFIG key consumed by an effect (A-C006-2); source comments carry NO cure codes or cure-to-lens commentary (A-C008-4 — payload hygiene).
4. Default-invariance checks while building: specimen lines, phase order, timestamp behaviour, and attempt 1's accepted swap set must render identically except where a named cure changes them (wall onset, TV separator line, fit basis).
5. Run the own-check suite (Verify legs 1–7 below) and iterate until green; file `fit-table.md` + `config-census.md` on the NEW attempt (A-C008 pre-scoring legs) in the artifact directory.
6. Swap test (logic level minimum) BEFORE any scoring wave fires.
7. Update `comparison.html` ONLY if the recreation's interface changed (new CONFIG keys / rejected-overrides diagnostic surface count as interface change — decide and print the decision in the build record); the ORIGINAL side never changes.
8. File build-record-attempt-2 (create-once): construction per cure, measured-fit basis that ran, scheduling policy, per-literal structural whitelist (A-C009-4), anchor evidence, PIXEL-UNVERIFIED print.
9. Do NOT fire the lens wave in Execute — the wave is Verify's step, fired by the seat's tasking with allowlist-only payloads.

## (c) Verify checklist (numbered — instruments, not intentions)

1. **Swap test** (logic level minimum, pixel where a browser exists; A-C002-2 PIXEL-UNVERIFIED prints while the Chrome route is blocked): defaults + attempt-1 swap + new adversarial set (U-1 list); assert checkpoint gating, phase order, timestamp advance/rollover/wrap, wrap, fit, rendered strings.
2. **Purity grep + asset inventory**: the attempt-1 grep pattern on the NEW recreation.html → 0 hits required; inventory every loaded asset (expected: none external).
3. **Comparison check**: labels verbatim, both sides present, controls wired, ORIGINAL side byte-unchanged.
4. **A-C008 pre-scoring legs on the NEW attempt** (before the wave fires): `fit-table.md` (measured 2D fit: per-line measured widths, height/line budget, floor behaviour) + `config-census.md` (consumption census against THIS attempt's CONFIG) filed in the artifact directory; the wave RUN cites each leg's path + hit count.
5. **A-C002-1 / A-C006-2 effect-mapping + consumption census**: for EVERY CONFIG key, assert key → consumed rendered/computed effect (mutation-style where feasible); a bound-but-unconsumed key fails the suite; the census is a mapping, never a count alone.
6. **A-C008-3 literal census**: scan the NEW source for numeric/color literals outside CONFIG against build-record-attempt-2's per-literal structural whitelist (A-C009-4: content literals never structural); an unlisted literal fails the suite; the filed census — not a prose claim — is what CONVERGENT 1's correction prints.
7. **A-C003-3 / A-C004-2 source-bound displayed-state model**: assert BOTH containment (rects inside the stage, border-inclusive, accumulated offsets) AND legibility (modelled type size at phone widths ≥ named floors) — including the vertical fit of the FULL TV exchange (question + follow-up, no blank line) at 360×202.5 and all three holds; and per **A-C006-3**, enumerate WRAPPED states (each wrap state the wall/TV content can actually reach — many-line answer, long question, wrapped follow-up) with displayed bounds measured at each state, not single-line proxies.
8. **A-C006-4 atomic override rejection**: feed reversed (`wallAt=5000&followAt=2000`), out-of-window (`wallAt=9000`), and completion-crossing override sets; assert (i) CONFIG/timeline completely unchanged (atomic), (ii) each rejection appears in the observable rejected-overrides record with its reason, (iii) valid swaps (defaults, `wallAt=2600`, a long-but-coherent schedule) are accepted and take effect.
9. **Five-lens Codex rescore wave** (`codex-rescore-wave.md`): same five lenses, allowlist-only payloads (A-C005-2), source comments scanned as payload content (A-C008-4), prior scores in seat tasking ONLY — never inside a lens run; returns filed verbatim, create-once, under `codex/attempt-2/` (A-C003-1, A-C007-2: `-o` output files, never capped stdout).
10. **Mechanical guards**: delta arithmetic recomputed from filed returns of both attempts (guard 1) · attempt-preservation census, sha before/after incl. the post-overwrite re-verify (guard 2) · floor-rule gate check (guard 3).
11. **Floor rule / WHY**: if the new average does NOT beat 81.6, scores.md Attempt 2 carries the WHY before close — filed FROM the pre-drafted scaffold appended to scores.md in this Plan (cure-by-cure outcome slots, stuck-lens hypothesis, jev-plateau evidence list); `jev-plateau` fires at close; a non-beating attempt without WHY prints PLATEAU-UNNAMED and the cycle reports failed.
12. **Tier hand-off on PASS** (avg ≥85 AND min ≥70): file to style-library's board with the scores.md pointer; the tier move is style-library's act.

## (d) Failure-point evaluation (jev-plan-exit §2.4 standing points + item-specific)

Standing points (a)–(g) as listed in jev-plan-exit §2 dimension 4:
- **(a) Big-rebuild risk — PRICED, medium.** This is not a flow-field rebuild, but CONVERGENT 1 touches nearly every style application in the file, so a regression could be hard to attribute cure-by-cure. Mitigation: Execute checklist order is cure-by-cure with default-invariance checks (step 4) after each; the suite's sections map to cures so a failure names its cure.
- **(b) Cure interaction — PRICED, high (the plan's main risk).** Three named interactions: (i) T-1's +167ms wall delay compresses the wall→follow hold 635→403ms — the timing lens may price the shorter hold against the anchor gain; (ii) R-1 growing the TV (fallback iii) shrinks the vertical space CONVERGENT 2's height budget assumes, and many-line wall answers already approach the TV's top edge — both cures are therefore asserted in ONE displayed-state model, not two; (iii) U-1's validation must accept the NEW default schedule (wallComplete 3997 < followAt 4400 — margin only 403ms) and attempt 1's filed swap (`wallAt=2600`: question completes 1940 < 2600 ✓) — a validation written against the old anchor's margins would reject lawful schedules.
- **(c) Prior-attempt overwrite / premature comparison re-point — RULED OUT by construction, census still owed.** Preservation copy taken in Plan, before any Execute write (below); comparison re-point gated on Verify leg 3 + the printed interface decision (Execute step 7).
- **(d) Anchor leak — PRICED, controlled.** Prior scores (81.6 and per-lens) live in RUN.md, this plan, and scores.md only; lens payloads are allowlist-only (Verify leg 9) and the rebuilt source's comments are barred from cure commentary (Execute step 3, A-C008-4). The delta is computed by the seat from filed returns, never negotiated with a lens.
- **(e) Instrument-change misread — RULED OUT.** Attempt 1 was already scored under the same five lenses and the same bar; 81.6 is a five-lens average. No 4-lens boundary exists for T14 (contrast T15).
- **(f) Wave fan-out cross-contamination — PRICED, low.** One item per artifact directory; this Plan wrote only plan-T14.md (run dir), the scores.md scaffold append, and the T14 preservation copy. Execute/Verify tasking for T14 must name the T14 artifact dir exclusively; the preservation census (guard 2) covers all four wave items' dirs, so a stray write surfaces.
- **(g) Size-split evaded — RULED OUT.** The attempt takes the two convergent cures + three single-lens cures; the remainder (D-1 playback, D-2 glyph raster, D-3 glow behaviour) is deferred IN WRITING above with per-lens risk — that is the §8 split, not an evasion. No rebuild-from-scratch is taken.

Item-specific failure points:
- **FP-T14-1: "Measured" fit that is secretly still assumed.** If Execute implements canvas measurement that the node suite cannot run, the fit claim could repeat attempt 1's factor story under a new name. Priced: Verify leg 4 requires the fit TABLE to file measured per-line widths; if the measurement basis cannot run in the suite, the build record prints the fallback basis honestly and the claim is priced as such by the lenses.
- **FP-T14-2: Atomic rejection rejecting lawful reuse.** Over-strict validation (e.g. requiring holds the specimen itself doesn't have) would trade reuse points for diagnostics. Priced: Verify leg 8 asserts accepted-branch swaps explicitly, including a long-but-coherent schedule.
- **FP-T14-3: Long-word hard-split altering the specimen default.** Ruled out by construction IF the split triggers only above `wallLineMaxChars` (specimen's longest word = 13 = the limit); the suite asserts the default wrap is byte-identical to attempt 1's.
- **FP-T14-4: Anchor over-precision.** The segment is 30fps; the evidence supports a 33ms bracket, not an exact onset. The plan files the bracket and sets the checkpoint at the first evidenced frame (2567) — claiming more precision than the frames carry would itself be a timing defect.
- **FP-T14-5: Census overcorrection.** Replacing one unsupported "zero literals" claim with another. Priced: CONVERGENT 1's correction prints the A-C008-3 census RESULT (leg 6), and any structural classification is per-literal (A-C009-4).

## (e) Per-lens delta targets (tied to named cures)

| Lens | Prior | Target | Delta | Carrying cures |
|---|---|---|---|---|
| Motion fidelity | 92 | ≥92 (hold) | +0 | No motion change except T-1's checkpoint value; locked-off construction preserved (Execute step 2). A regression here means a cure broke credited construction — read (a)/(b) first. |
| Timing / tempo | 88 | 93 | +5 | T-1 measured anchor (2567, bracket-filed) + corrected completion record (1940/3997/4785). Residual risk: the compressed 403ms wall hold, priced in (b)(i). |
| Construction purity | 96 | 98 | +2 | CONVERGENT 1 CONFIG migration + census-claim correction. Risk: literals introduced by the new fit/validation code — gated by Verify leg 6. |
| Reusability | 64 | 78 | +14 | CONVERGENT 1 (geometry/glow/font keys) + CONVERGENT 2 (2D fit, floor, long-word) + U-1 (validation, atomic rejection, adversarial swaps). Floor need is only +6; target carries buffer for the A-C009-4 classification dispute class. |
| Readability | 68 | 80 | +12 | CONVERGENT 2 (measured width + margin + height budget) + R-1 (full TV exchange vertical fit, all holds modelled). Floor need is only +2; target reflects that both named defects are cured by construction. |
| **Average** | **81.6** | **88.2** | **+6.6** | Sum of targets 441/5 — clears the ≥85 aim with headroom; the binding constraint remains the two floors, not the average. |

## Preservation (§2.3) — done in this Plan, before any Execute write

- `recreation-attempt-1.html` did NOT exist; created as a CONTENT copy (`cp`, never hardlink) of the current `recreation.html`.
- sha256: copy = recreation.html = **f426898f96324034c9a969b9c452176d53d049088767ab02482705914b8f63ca** — equals the seat baseline entry for `T14-cctv-wall-projected-text/recreation.html` in `preservation-baseline.txt`. ✓
- Distinct inodes (copy 4845292 vs working 4387142) confirm a content copy, not a hardlink (A-C004-1). Post-overwrite re-verification is owed by Execute/Verify (Execute step 1, Verify leg 10).
- recreation.html and comparison.html are UNCHANGED by this Plan (sha still the baseline value at Plan close).

Plan status: PLAN ONLY — no rebuild, no Codex lens wave fired by this agent. Next: seat fires codex-plan-review + jev-plan-exit on this plan (§2.4–§2.5), then Execute spawns under A-C009-1.
