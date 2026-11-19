# T238 — scores · Cycle 041 Wave 38 · FIRST ATTEMPT

- **Segment binding:** source.mp4 75–81 s (PES "Fresh Guacamole", DnjdJiwcfY); filed `segment.mp4` = 74.5–81.5 s window (±0.5 s handles), h264 1920×1080 + AAC, 7.000 s, 2,797,305 B, sha256 `9e25397532d53b21dfc0c48d6800e9ebc47dfe16b75829bc42be6601c3a58250`.
- **Build:** `recreation.html` — sha256 `3f6dba3118c22ffc273c60a716f7a68e18581423fd2790a30c44849060b21846`, 17,349 B. Comparison `comparison.html` sha256 `7de5b23b5ba3dba3330bb2c65117f5588a1e157fa2c461ed50e7c321dc496136`, 3,222 B.

## Phase A gate verdicts (wave run dir, dispositions in observe-plan §2b)
- codex-observe → **CONFIRMED-WITH-GAPS** (gaps closed by the fine census).
- jev-observe-exit → **ADVANCE-WITH-GAPS** (0.5 prior-scores/mechanics; charges applied).
- codex-plan-review → **REVISE** (all cures applied to the Plan pre-Execute).
- jev-plan-exit → **REVISE**, primary UNBOUND-SCHEDULE (all charges applied pre-Execute).

## Own checks
- Harness: v1 30/30 PASS → after the prewave cure round **48/48 PASS** (raw output in build-record.md). Count assertion: cohort sum 5+5+5+5+4 = 24 = built 24 — MATCH. Swaps (content/timing/palette + 2 negatives) all PASS, run separately. Syntax `node --check` rc=0 ×4. Purity grep 0 specimen hits; `Math.random` 0 hits.
- A6: fit-table.md HIT list EMPTY (PIL/DejaVu Sans Bold PROXY, 5 rows + positioned bounds); config-census.md HIT list EMPTY (19 first-scan shaping literals cured in CONFIG; rngSeed bound in the cure round).

## Prewave history — TWO HOLDs → NO VERDICT (INSTRUCTION §2.3: cure once + re-fire once; second HOLD stops the item)
- **jev-prewave #1 → HOLD** (ASSERTED-CHECKS; dims: parameterization 0.90 · purity 1.00 · own-checks 0.35 · fidelity-plan honesty 1.00). Grounds: fixed probes lacked CONFIG-derived companions; rngSeed unbound in the census; fit table lacked positioned placement evidence. **Cure round applied** (build unchanged): 18 companion/dual-form harness lines incl. moved CP4/CP6 companions under the timing swap, P0 rest-position assertion at the CONFIG instant, F-500/F-2500/F-3500/F-4500 receipts, rngSeed census binding, positioned fit bounds → harness 48/48.
- **jev-prewave #2 → HOLD** (ASSERTED-CHECKS; dims: parameterization 1.00 · purity 1.00 · own-checks 0.45 · fidelity-plan honesty 1.00). Remaining grounds, priced for a future attempt:
  1. COMP-C1000 / COMP-C1250 companions omit the readable-count predicate (24) that §2.3 binds at those instants — add readableCount === 24 to both companion predicates and print it.
  2. C2500/C3500/C4500 receipts print fixed times as names without the evaluated CONFIG expression + equality check beside them, and the fixed side is not executed separately — file expression + computed value + fixed-side run for each.
  3. P7/P8 lack CONFIG-derived runs (P7 full-field equality + step transition at derived instants; P8 opacity predicates at derived interior samples) and moved P7/P8 samples under the timing swap.
  4. Cure-paragraph coordinate error (536,246) vs the executable (516,144) — **corrected in build-record.md** in this filing.
- Per the two-HOLD rule the five-lens scoring wave **did not fire**. No lens scores exist for T238.

## Verdict
**NO VERDICT** — stopped at the jev-prewave gate after the second HOLD (own-checks completeness 0.45; parameterization, purity and fidelity-plan honesty all scored 1.00 by the second prewave). The build, segment, comparison page, harness (48/48), A6 legs and the full receipt index stand filed; the four priced cures above are the next attempt's entry conditions.

**PIXEL-UNVERIFIED limitation:** no browser binary exists in this seat; all state claims are logic-level (pure stateAt). The comparison page is the render surface for the owner's visual verdict.

## Cycle 042 Wave 39 — A12.3 COMPLETION (build unchanged)

- **Build:** `recreation.html` sha256 `3f6dba3118c22ffc273c60a716f7a68e18581423fd2790a30c44849060b21846`, 17,349 B — UNCHANGED (all cures are harness/record completions in `harness-t238.js` + build-record.md; no new sha).
- **Cures applied (ONLY the firing-2 priced list):** (1) COMP-C1000/COMP-C1250 companions now assert `readableCount === 24` and print it (`readable=24 readableCount===24:true` on both lines). (2) C2500/C3500/C4500 now file DERIVED receipts printing the CONFIG expression, its expansion, evaluated value and equality check (`setupEnd+strokeDurMs+stepMs=1500+900+100=2500, expr==2500:true` · `setupEnd+2*strokeDurMs+2*stepMs=…=3500` · `setupEnd+3*strokeDurMs+3*stepMs=…=4500`) plus FIXED receipts executing the fixed side separately at each literal instant. (3) P7/P8 CONFIG-derived runs added — P7-DERIVED (full-field equality + step transition at `setupEnd+pressSteps*stepMs+stepMs`=2000) and P8-DERIVED (opacity predicates at four derived interior samples 2500/3000/3500/4000) — plus moved samples under the timing swap: P7-SWAPPED (expression instant 4000→4600, equality + step 7→8) and P8-SWAPPED (samples move to 2800/3300/4100/4600, predicates hold). Cure 4 (coordinate correction) already stood in build-record.md from Wave 38.
- **Fresh own-checks:** harness **55/55 PASS** (exit 0; 48 inherited assertions whole — 3 lines expanded into DERIVED+FIXED pairs, 4 lines added, 2 companion lines amended; raw output in build-record.md). Syntax `node --check` rc=0 ×4. Purity grep **0 specimen hits**; `Math.random` 0 hits. Count assertion 24 = 24 MATCH.
- **Fresh A6 legs (final build):** fit-table.md HIT list **EMPTY (0)** — PIL/DejaVu Sans Bold re-measurement reproduced all five filed ink bounds exactly. config-census.md HIT list **EMPTY (0)** — re-scan found only the classified `#241a10` page chrome outside CONFIG, `var(--` 0, `rngSeed` bound at its mulberry32 site. A13 RECEIPT INDEX in build-record.md reconciled whole (guards.md commands 1–8 + every A11 assertion incl. inherited set, each with expression + evaluated value + raw result, or its NOT-DEMANDED line).
- **jev-prewave completion re-fire → HOLD** (ASSERTED-CHECKS; return filed verbatim at run dir `item-T238-jev-prewave-completion-return.md` + artifact `codex/jev-prewave-completion.md`). Dimension scores: parameterization **0.85** · purity pre-check **0.80** · own-checks completeness **0.40** · fidelity-plan honesty **0.85**. The return credits the completion's additions by name (readable-count predicates on COMP-C1000/C1250 · the C2500/C3500/C4500 fixed+derived pairs · P8's same four expressions under both timing configurations) and prices two remaining receipt grounds (below). It also records as limits that the payload it was fed lacked the standalone technique packet and the guards.md command list named in the guard's §3 contract, and that it could not inspect the on-disk build/harness — the payload composition followed this cycle's task charge exactly (guard + build-record + CONFIG block + fit-table + config-census + census-anchor mapping); the packet/guards.md feed gap is carried into the cure list for the next firing's payload.
- **New priced cures (verbatim in substance, for the next attempt):**
  1. Several checkpoint receipts omit required observations. Observe Plan §2.3 requires output opacity 0 at P0, phase 5/9 and loss 0.76 at CP2, and eased press at C@1750. The build record's P0 line prints inputO=1 alone. C2000 and COMP-C2000 omit phase and loss. C1750 and COMP-C1750 print pressRaw alone, while the CONFIG selects easeInOut for the stroke. File raw results for the missing predicates on the required calls, including the fixed and CONFIG-derived calls where the plan requires both.
  2. P7 does not file a paired run at one CONFIG expression. P7-DERIVED executes the full quantization predicate at setupEnd + pressSteps*stepMs + stepMs = 2000. P7-SWAPPED executes it at setupEnd + 2*strokeDurMs + 7*stepMs = 4600 and reports that this expression evaluates to 4000 on default CONFIG. The default C4000 receipts show step, integrity, and readability; they omit the full same-bucket equality and next-step transition. File those results at the same expression under both configurations.
  3. (Feeder cure, from the return's Limits) The next firing's payload must also carry the standalone technique packet section and the guards.md command list per jev-prewave.md §3's context contract, so the judge prices the build against them rather than recording them as unavailable.
- **Five-lens scoring wave: NOT FIRED** (HOLD branch — no lens scores exist for T238).

## Verdict (Cycle 042)
**NO VERDICT** — the single authorized completion re-fire returned HOLD (own-checks completeness 0.40). The next re-fire stands **PENDING AUTHORIZATION (consumer HQ)**; the item remains IN PROGRESS, mid-attempt in this job, and does not route to practice. The build, segment, comparison page, harness (55/55), A6 legs (0 HITs each) and the full reconciled receipt index stand filed; the priced cures above are the next attempt's entry conditions.

**PIXEL-UNVERIFIED limitation stands:** no browser binary exists in this seat; all state claims are logic-level (pure stateAt). The comparison page is the render surface for the owner's visual verdict.
