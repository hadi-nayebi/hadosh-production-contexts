# Scores — T208 paired dot counts, House stage · Wave 34 · Cycle 037 · Attempt 1

**Verdict: NO VERDICT** (two-HOLD stop, INSTRUCTION A12/A13 form: a second jev-prewave HOLD files NO VERDICT with cures priced; the five-lens wave was NOT fired on this build).

## Build bound
recreation.html sha256 `42d33e6be5327b6e059db39a3aa8fc99b5f6d7857889387e5488bc7e4fb9eaca` · 15,115 B (unchanged across both prewave firings; both cure rounds were record/harness-only). Segment 19.016 s. Plan amendment: `plan-amendment-cycle037.md` — 8 gate charges cured (4 jev-plan-exit REVISE charges + 4 jev-observe-exit gaps; the Texas-anchor charge appears in both returns, cured once).

## Own checks (final build)
Harness 1 (fixed census instants + fixtures): **31 PASS / 0 FAIL** (CP1–CP7, VT 94.0/94.5 samples, earliest-landing contrast 0.413 ≤ 0.55, annotation gate, timing/palette/content swaps, 1-/3-column fixtures; raw output in build-record.md). Extension harness (cure round 1): **18 PASS / 0 FAIL**. Purity grep: NO HITS. Syntax: core + render `node --check` OK. A9.3 counts: columns 2 · dots 37 · ratios derived 702,000 / 630,000 (25,268,000/36 = 701,888.89 → 702,000 at ratioRounding 1000).

## A6 legs
- fit-table.md: final HIT list **0** (2 pre-cure floor HITs — population ink 9.4 px @360 at typeScale 30 — cured by typeScale.population 30→36, re-measured 11.6 px).
- config-census.md: HITs carried **3** (seed unapplied · countUpEasing unapplied · arrow-start baseline offset literal 14) + 1 classification note (bounds keys). Dispositions printed in that file; the prewave judge priced them as "disclosed" in both firings.

## Receipt index (A13)
Reconciled before firing 1: 20 lines (8 guards.md commands + 12 A11 assertions), every line receipted or NOT-DEMANDED with citation. Cure round 1 extended the A11 lines with CONFIG-expression-instant receipts for all nine checkpoints (default + timing-swapped).

## jev-prewave outcomes
- **Firing 1 — HOLD** (ASSERTED-CHECKS): parameterization 0.82 · purity pre-check 0.98 · own-checks completeness 0.40 · fidelity-plan honesty 0.96. Return verbatim: `codex/jev-prewave.md` (46,552 B). Defects: (1) seven of nine checkpoints lacked CONFIG-derived evaluation instants; (2) the moving CP3/CP4 probes carried partial predicates; (3) config-census overstated the countUpEasing and tileContrastGate application sites.
- **Cure round 1** (build unchanged): extension harness evaluating all nine checkpoints at CONFIG-expression instants with FULL predicates, default + timing-swap (18/18 PASS); census §2 corrected, countUpEasing recorded unapplied (HIT count 2→3). Filed in build-record.md "Cure round 1".
- **Firing 2 — HOLD** (ASSERTED-CHECKS): parameterization 0.82 · purity pre-check 0.98 · own-checks completeness 0.48 · fidelity-plan honesty 0.96. Return verbatim: `codex/jev-prewave-refire.md` (50,794 B). Defects below.

## Cure list priced for the completion cycle (NO VERDICT — the wave is not spent)
1. **A11 timing-swap movement evidence for the remaining seven checkpoints.** The cascadeMs swap moves only CP3 (6997→7281) and CP4 (8000→8675) because the other checkpoints' expressions do not read cascadeMs. Cure: for each remaining checkpoint, swap the timing input its assertion actually reads and file the changed instant + raw full-predicate result — CP1/CP2 via `countUpStartMs`/`countUpMs` (or revealAnchorMs), VT40/VT45 via `placeholderMorphMs` (and/or the VT revealAnchorMs), CP5 via `holdAfterCountMs`, CP6/CP7 via `annotationAnchorMs`/`arrowDrawMs`. Each receipt: CONFIG expression · default instant · swapped instant · raw predicate result at the swapped instant.
2. **Guard #2 geometry receipt.** The swap fixtures currently receipt ratios, settled counts, and reveal starts. Cure: add a logic-level geometry receipt — recomputed dot positions/extents (grid bounding boxes + per-dot coordinates sample) under a content swap vs the default, showing the geometry regenerates from CONFIG (the traced-copy test in guards.md #2's own terms).

On both cures: fresh own-checks + A6 legs on the (record-cured; build changes only if a cure requires it) build, A13 receipt index re-reconciled, then the completion cycle's single authorized jev-prewave re-fire (A12.3 form), and on FIRE-WAVE the five-lens wave bound to that build. The item stays mid-attempt HERE (A3 §3); it does not route to practice unscored.

## Lens scores
NOT FIRED — no lens scores exist; none are claimed. Bar (standing): five-lens average ≥85 AND min ≥70.

## Limitation
PIXEL-UNVERIFIED: no browser binary in this seat; fit evidence is PIL rendered measurement with the named stand-in font DejaVuSans (PROXY rows in fit-table.md); all state evidence is logic-level from the build's own core functions; comparison.html is the render surface.

---

# Scores — T208 paired dot counts, House stage · Wave 35 · Cycle 038 · A12.3 COMPLETION

**Verdict: NO VERDICT** (jev-prewave completion re-fire returned HOLD; INSTRUCTION A12/A13 form: the five-lens wave was NOT fired on this build).

## Build bound
recreation.html sha256 `42d33e6be5327b6e059db39a3aa8fc99b5f6d7857889387e5488bc7e4fb9eaca` · 15,115 B (unchanged; both Cycle 038 cures were record/harness-only).

## Completion cures filed (from Wave 34 firing-2 cure list)
1. **A11 timing-swap movement for the remaining seven checkpoints — FILED.** Harness3 (`node /tmp/t208-harness3.js recreation.html`, exit 0, 8 PASS / 0 FAIL incl. cure 2): CP1 via countUpStartMs 1500→2000, instant 2000→2500, full predicate raw true (popDisplay 7018889) · CP2 via TX revealAnchorMs 6430→7000, 6000→6570, raw true · VT40 via placeholderMorphMs 600→900, 10500→10650, raw true (morphProgress 0.4889) · VT45 via placeholderMorphMs 600→900, 11000→11300, raw true (morphProgress 1) · CP5 via holdAfterCountMs 1200→600, 11500→12100, raw true · CP6 via arrowDrawMs 3000→4500, 14500→15250, raw true (arrowProgress 0.5) · CP7 via annotationAnchorMs 13000→14000, 17000→18000, raw true (arrowProgress 1). With CP3/CP4's cascade receipts, all nine checkpoints now carry a moved-instant + full-predicate timing-swap receipt. The prewave judge explicitly supported this cure ("The seven new timing receipts and the two inherited CP3/CP4 receipts account for all nine binding checkpoints").
2. **Guard #2 geometry receipt — FILED.** Same harness: recomputed dot positions/extents from dotOrderIndex + the render cx/cy formula — default TX bbox x 130–391 / count 36 (sample i3 (143,304), last i35 (378,398)) vs content-swap Alpha bbox x 130–297 / count 12 (i3 moves to (190,163)) and Beta count 3, bbox x 570–690. The prewave judge explicitly supported this cure.

## Fresh own-checks (Cycle 038)
Harness 1 re-run: **31 PASS / 0 FAIL**. Extension harness re-run: **18 PASS / 0 FAIL**. Cure harness: **8 PASS / 0 FAIL**. Purity grep: NO HITS. Syntax: core + render `node --check` OK. A9.3 counts: columns 2 · dots 37 · ratios derived 702,000 / 630,000.

## A6 legs (fresh)
- fit-table.md: fresh PIL re-measurement (heights @360 identical: 12.0 / 11.6 / 13.1 px; widths within 2 stage px) — **HIT list 0**.
- config-census.md: fresh scan; carried HITs re-priced — **3 carried, none resolved** (seed unapplied · countUpEasing unapplied · arrow-start baseline offset literal 14), dispositions printed in that file. (The completion HOLD below names a fourth census defect — a missing §2 entry, a different class from the carried HITs.)

## A13 receipt index
Re-reconciled in build-record.md "Cycle 038 completion cures": 20 lines (8 guards.md commands + 12 A11 assertions inherited whole, A13.2), every line receipted or NOT-DEMANDED cited (#4). The reconciliation's CONFIG-key claim was, however, falsified by the completion prewave on one key — see the HOLD defect below; the claim stands corrected by this section, not retro-edited in the index.

## jev-prewave completion re-fire (A12.3, the single authorized re-fire)
- **HOLD — ASSERTED-CHECKS**: parameterization **0.86** · purity pre-check **0.98** · own-checks completeness **0.94** · fidelity-plan honesty **0.97**. Return verbatim: `codex/jev-prewave-completion-cycle038.md` (+ `.raw`, 76,066 B, sha256 309f0bc5…); payload: `codex/payload-prewave-completion-cycle038.txt` (72,038 B).
- **Blocking defect (verified firsthand by the builder after the return):** CONFIG declares `fillOrder: 'column'` (recreation.html line 44) and `dotOrderIndex` reads `cfg.fillOrder` (line 101) to select column-major vs row-major placement — but `config-census.md` §2 carries NO application-site entry for `fillOrder` (grep: no `fillOrder` occurrence in config-census.md or build-record.md). A13 makes a missing expected CONFIG entry an ASSERTED-CHECKS ground regardless of the other scores. The defect is real; the Cycle 038 A13 reconciliation missed this key.
- All other priced material passed the judge: both Wave 34 cures supported, fit rows measured, fidelity plan's reductions named. Own-checks completeness rose 0.48 → 0.94 across the completion.

## Cure list priced for the next completion (NO VERDICT — the wave is not spent)
1. **config-census §2: add the `fillOrder` key → application-site entry** (`dotOrderIndex` branch in the core script; consumed also by the render loop's circle placement via dotOrderIndex), then re-reconcile the A13 receipt index against the build's expected CONFIG keys with a mechanical key-extraction diff (every CONFIG key, nested/array included, extracted from the build and diffed against §2's entry list — the manual reconciliation that missed `fillOrder` is the defect's mechanism, not just its instance).
2. On that cure: fresh own-checks + A6 legs on the (record-cured; build unchanged unless the cure requires it) build, A13 index re-reconciled with the diff receipt filed, then ONE jev-prewave re-fire — **PENDING AUTHORIZATION (HQ)**: the A12.3 authorization covered this Cycle 038 re-fire only, and it is spent. The item stays mid-attempt HERE (A3 §3); it does not route to practice unscored.

## Lens scores
NOT FIRED — no lens scores exist; none are claimed. Bar (standing): five-lens average ≥85 AND min ≥70.

## Limitation
PIXEL-UNVERIFIED: no browser binary in this seat; fit evidence is PIL rendered measurement with the named stand-in font DejaVuSans (PROXY rows in fit-table.md); all state evidence is logic-level from the build's own core functions; comparison.html is the render surface.
