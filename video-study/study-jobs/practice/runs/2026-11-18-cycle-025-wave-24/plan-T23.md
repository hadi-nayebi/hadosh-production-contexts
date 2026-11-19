# Plan — T23 comic chapter map → attempt 10 (practice Cycle 025, Wave 24)

Plan agent output, PLAN ONLY (INSTRUCTION §2). No rebuild, no lens fired.
Prior attempt: 9 (Cycle 024) — motion 76 · timing 78 · purity 94 · reusability 69 · readability 68 — avg **77.0**, min 68. Verdict FAIL, non-beating (−4.6 vs attempt 8's 81.6), WHY filed, attribution BUNDLED (checkpoint gate deviated on stages 1–6).
Attempt-9 final source sha256: `244a0c2c2f8a229bca3792d3e055cdafd1dee52a77503c2d09592f3c90f19572`.
Delta target (RUN.md §1): **avg ≥ 85.0, min ≥ 70** — a +8.0 average move, +40 lens-points minimum (385 → 425).

---

## §A Preservation record (§2.3, A-C004-1, A-C005-1, A-C003-2)

- **Baseline**: `preservation-baseline-T23-attempt10.txt` in this run dir — sha256sum of every file in the artifact dir, captured read-only via exec in three bounded batches, written via the file tool.
- **Census**: **253 files**. Validation (mechanical, exec read-only): an initial pass found 5 lines with 63-char hashes and 1 well-formed-but-wrong hash (`codex/attempt-2/lens-timing-run2.md`) — all 6 corrected via file-tool edits against fresh single-file captures. **Final validation: 253 lines, 0 malformed (every hash 64 hex chars), `sha256sum -c` = 253/253 OK, 0 FAILED.** The baseline is the pre-Plan state (scores.md hash predates the §F scaffold append — correct by construction).
- **Attempt-9 content copies** (destinations did not exist; fresh copies, no reuse/mismatch branch triggered):
  - `recreation-attempt-9.html` — sha256 `244a0c2c2f8a229bca3792d3e055cdafd1dee52a77503c2d09592f3c90f19572` = source `recreation.html` ✓ byte-exact, 112,782 bytes, distinct inode (content copy, not hardlink).
  - `comparison-preserved-attempt-9.html` — sha256 `3fdbe113d26ecf0e0a8b61f1daeaac663aef4a248be413ac80438973162731a8` = source `comparison.html` ✓ byte-exact, 10,156 bytes, distinct inode.
- Environment note: one early exec attempt to redirect sha256sum output into the baseline file failed EPERM and truncated it to 0 bytes (the standing write-fault); recovered by file-tool writes + the mechanical validation above. All writes in this Plan used file tools only.

## §B Cure inventory — convergent-lens findings first

### Convergent (priced by ≥2 lenses, or one lens + WHY)

**C-10-01 — M-2 pause/resume timer re-arm stall** (motion −5, timing −8; WHY item 2).
WHY: pause clears the deadline timer; resume queues the deferred flush and returns; the flush applies the next phase without rearming the timer; the following dive never starts in standalone playback.
Construction change: every resume branch (flush-applied, flush-pending, no-pending) rearms the deadline timer as part of the resume act itself, not as a side effect of a later tick. Own-check: simulated-clock probe asserting timer rearm + following-dive start in all three branches. **Stage S1.**

**C-10-02 — CV-4a label separation through refinement** (purity −6 in part, readability −17 in part, reusability −2; WHY item 1).
WHY: attempt 9 introduced pre-split label spans for the model, but DOM refinement still re-splits the assembled label text at the first separator, and the assembled text is what gets measured.
Construction change: number and title travel as separate inputs through DOM refinement end-to-end; refinement never re-splits assembled label text (splitTwoLines remains a model-side arrangement function only). **Stage S2.**

**C-10-03 — CV-4b/RD-1 line counting over rendered structure** (readability −17 root, purity −6 in part; WHY item 1).
WHY: the Range line counter runs over the assembled tab contents; pre-split spans make a fitting two-line label count as up to 4 lines, forcing number-only fallback.
Construction change: line count derived from the rendered span structure (one line per block span, Range rects counted per span node, never over assembled contents). Own-check: DOM model asserts all 12 labels' modes at 240px and 360px; the S0 re-observation (§H conflict 3) is re-run against the new counter and filed. **Stage S2** (interaction with C-10-02 priced in §G(b)).

**C-10-04 — New-key override coverage + both-routes negative validation** (reusability −8 in part, purity −6 in part; WHY item 5).
WHY: keys introduced in attempt 9 (`approachFromScale`, `artDetailMinPx`, `headerBreak`, `cut.mode`) have no URL override route and `cut` is absent from the cfg: group list; an in-memory edit to −2 passed silently where the URL route would warn.
Construction change: every CONFIG key gains a route in the same stage that introduces it (standing rule, not just these four); the config census (§E leg) asserts route coverage per key mechanically; negative/out-of-domain values validate identically on URL and in-memory routes. **Stage S3** (with C-10-10).

**C-10-05 — Endpoint paint / rendered evidence** (motion −7/−2 limits, timing −5, readability −4 verification; CV-2/RD-5 UNDISCHARGED).
Not a construction cure — a standing evidentiary risk. Execute S0 re-runs the render-route hunt (chrome/chromium/firefox binaries, puppeteer/playwright) and files the outcome verbatim before any build. If a route exists, pixel captures discharge CV-2/RD-5 this attempt; if not, the NOT-VERIFIED list carries verbatim and the risk stays priced in §C (D-10-2). **Stage S0.**

### Motion (76)

**C-10-06 — CV-3 visible scene cut** (motion −7).
WHY: a cut callback exists and fires, but standalone playback hard-resets to the grid; no visible scene state exists at the transition (scene content itself was deferral D-1).
Construction change: the cut becomes a visible state change — at the transition the arrived panel's scene (existing registry art at endpoint presentation) remains the presented state through the cut point, and the grid returns already advanced to the next appearance's state; the viewer never sees scene → identical grid → advance. No new scene content is authored (D-10-1 stays deferred). Own-check: presentation-log + DOM-state assertion of the state sequence at cut−1 frame, cut, cut+1 frame. **Stage S6.**
Opening-beat dispute (−10): NOT a cure. The lens brief prices flash → static hold → dive; the build binds Basis B (continuous ≈700ms window, segment-measured). Construction unchanged; the packet prints both bases and the dispute (A-C010-3) and the plan prices the −10 as a standing dispute risk under motion, not as recoverable points. Arrival-frame −2 is inside C-10-05's unverified risk.

### Timing (78)

**C-10-07 — T-1 residual: scheduled cycle key through entry/reconciliation** (timing −5).
WHY: the dive-entry render check compares phase+appearance only; an entry rendered across a cycle boundary can land on the same dive in the wrong cycle, and an expired cycle-0 entry produced no skip record.
Construction change: the scheduled cycle key is carried through dive entry, render reconciliation, and skip logging; every rejected/expired entry writes a skip record carrying its scheduled key. Own-check: forced-late-entry probe in cycle 0 and cycle ≥1 asserting skip records with correct keys. **Stage S1.**
Baseline/tracker read (−5): priced as Basis-B dispute (no stationary reading beat exists in the segment window); no construction change; packet carries both bases. Dive feel (−4) → C-10-08. Endpoint order (= M-2) → C-10-01.

**C-10-08 — Dive curve shape** (timing −4).
WHY: 335ms dive with ~40% of transform by the 3/4 mark and ~60% in the last 84ms reads as a snap, not a dive. No segment anchor exists for intra-dive curve shape (segment prices total dive ≈334ms only) — this is a judgment cure, labeled as such in the packet.
Construction change: dive easing default reshaped so the fraction at 0.75 of the dive is ≥ 0.55, verified by a model probe over transformAt; total dive duration unchanged (335ms, segment-anchored). **Stage S6** (with C-10-09).

**C-10-09 — Approach/dive easing separation** (reusability −8 in part).
WHY: `cfg:layout.diveEasing=step-end` silently governs the approach too (approach stuck at 0.88 at 90%).
Construction change: approach gains its own easing key (`approachEasing`), routed and censused under C-10-04's rule; diveEasing governs the dive only. **Stage S6** (key introduced in S3's schema pass, behaviour wired in S6).

### Reusability (69 — floor breach)

**C-10-10 — R-DE trusted-defaults separation** (reusability −7; A-C024-1, named in RUN.md §1).
WHY: attempt 9 claimed independent trusted defaults but the edited CONFIG *is* the trusted copy — `diveMs=-20` survived a reset warning, `CONFIG.layout=null` throws inside validation, whitespace-only header/title survived, negative `approachFromScale` produced a negative starting scale.
Construction change: a pristine defaults object is frozen at load and never aliased by the editable CONFIG; both routes (URL, in-memory) validate against the pristine schema; reset restores from pristine. Own-check: both-routes corpus over the priced cases (negative durations, null groups, whitespace strings, negative scales) asserting identical reject/warn behaviour and zero throws, with the field enumeration filed. **Stage S3.**

**C-10-11 — One geometry model** (reusability −6).
WHY: feasibility uses gutter where perimeter padding decides (paddingPx=100 passes validation, then computes a 6.67px panel at 240px); tab anchor right offset is zero on a stretched element; negative overlap inside a clipping panel is unvalidated; resolved art geometry ignores overlap; the header fit model never reads `headerBreak` though the DOM honours it.
Construction change: a single geometry model serves validation, layout, and camera — feasibility computed from perimeter padding; tab anchoring resolved against the panel box; overlap validated against the clipping panel; resolved art rect accounts for overlap; header fit reads the same `headerBreak` policy the DOM applies. **Stage S4.**

**C-10-12 — Miniature-detail constants become CONFIG** (reusability −5 in part).
WHY: the detail branch hardcodes the text cutoff (14 units), graph multipliers (2 / 1.6), fallback edge width (1) and node radius (4), and the SVG viewBox origin is fixed `0 0`.
Construction change: all five become CONFIG keys with routes (censused under C-10-04); viewBox origin configurable. **Stage S3** (keys) — behaviour consumed by C-10-14 in S4.

**C-10-13 — Malformed-URL consistency: validate before commit** (reusability −3).
WHY: `filled=999` replaced three appearances with one clamped appearance; a whitespace-only separator was accepted silently while padded `true` was rejected; the registry accepted a malformed path silently; an object-weight text primitive warned but still deleted the original kind and redirected the panel to `tiles`.
Construction change: replacements validate before committing — a rejected replacement preserves the prior valid entry; count-clamping warns per appearance and never collapses the appearance list; string parsing trims consistently across types. Own-check: the priced malformed corpus, each case asserting prior-state preservation. **Stage S3.**

Label wrapping losing the number/title boundary (−2) is the reusability face of CV-4 → C-10-02/C-10-03.

### Readability (68 — floor lens)

**C-10-14 — RD-3 miniature detail from post-refinement art height** (readability −4; WHY item 6; named in RUN.md §1).
WHY: the renderer receives a 37.71px proxy (60.82 × 0.62 estimate), selects detailed art for every panel against the 30px threshold, while modelled two-line tabs leave only 22.53–26.28px for art; panel 07's 21-unit inscription renders ≈5.5px.
Construction change: detail selection consumes the resolved art height from the post-refinement record (inner height − measured tab band), the same record the camera consumes. Own-check: per-panel detail-branch assertion at 240/360px from resolved heights (panel 07's inscription suppressed below threshold). **Stage S4** (single-model rule with C-10-11 priced in §G(b)).

**C-10-15 — RD-2a wrap-branch line-height + growth refresh** (readability −4 in part; WHY/RUN.md §1).
WHY: the wrap branch retains the original fixed line-height when measured refinement switches nowrap→wrap, and measured growth metadata is not refreshed on every pass.
Construction change: every wrap entry path (model wrap and refinement wrap) applies `typography.headerWrapLineHeight`; growth metadata (grown px, line count) is refreshed on every layout pass including refinement-triggered wraps. **Stage S5.**

**C-10-16 — RD-2b masthead scale during approach** (readability −4 in part).
WHY: the approach transform scales the whole zoomwrap, masthead included — 11px × 0.88 = 9.68px at entry.
Construction change: the approach transform applies to the grid only; the masthead is never approach-scaled. Own-check: header computed size constant across approach progress in the model. **Stage S5.**

**C-10-17 — Progress at a glance** (readability −3).
WHY: an illustrated target can read as completed — the SVG covers the face tint, leaving only the orange tab + accent outline to carry the distinction, judged on a moving glimpse at ~94% scale.
Construction change: completed state gains a second, art-independent visual channel that art cannot occlude (completion treatment on the panel's tab + a frame treatment outside the art rect); the distinction must survive the occlusion-pair enumeration (completed vs illustrated-target) in own-checks. **Stage S5.**

Cure count: **17 construction cures** (C-10-01…C-10-04, C-10-06…C-10-17) + 1 evidentiary action (C-10-05). Disputes carried, not cured: opening beat (motion −10), tracker read (timing −5).

## §C Deferred cures — risk priced under EVERY lens (A-C009-3)

**D-10-1 — Chapter-scene content authoring at the cut** (attempt-9 deferral D-1 continues). Reason: no scene content exists in evidence beyond registry art; authoring scenes is content production, not wiring. Risk: motion — the cut's *content* richness stays unpriced beyond C-10-06's visibility cure (residual up to −3 of the −7 class); timing — none; purity — none (no media introduced); reusability — none; readability — arrival-frame recognition stays model-only (inside D-10-2's risk).
**D-10-2 — Rendered/pixel evidence (CV-2/RD-5)** if the S0 route hunt fails again. Reason: no render route existed in this environment at attempt 9 (Chromium off PATH, headless launch failed); not within the builder's power to cure by construction. Risk: motion — endpoint/arrival limits stand (−2, part of −7); timing — endpoint paint −5 stands; purity — none (swap probe is source-level and clean); reusability — none; readability — −4 verification class stands in full.
**D-10-3 — Per-appearance timing/trajectory overrides.** Reason: only the middle appearance is evidenced; per-appearance values for the others would be invented anchors. Risk: motion — none priced; timing — none; purity — none; reusability — part of the −8 class stands (four durations remain global); readability — none.
**D-10-4 — Basis A reading-beat preset (1,550ms).** Reason: the build binds Basis B on segment evidence; Basis A is a design alternative, not evidence. Risk: motion — none; timing — the −5 tracker-read class stands as a dispute; purity — none; reusability — none (the preset mechanism exists via durations); readability — none.

## §D Delta target and per-lens movement aims

PASS bar: avg ≥ 85.0 (total ≥ 425, i.e. +40) and min ≥ 70.

| Lens | a9 | Aim | Δ | Recovery priced from |
|---|---|---|---|---|
| Motion | 76 | 85 | +9 | C-10-01 (+5), C-10-06 (+4 of 7); −10 dispute and D-10-2 limits stand |
| Timing | 78 | 86 | +8 | C-10-01 (+8 shared with motion — separate lens budgets, not double-counted points), C-10-07 partial, C-10-08 partial; −5 dispute stands |
| Purity | 94 | 98 | +4 | C-10-02/C-10-04 cluster (−6) mostly recovered |
| Reusability | 69 | 82 | +13 | C-10-10 (+7), C-10-04 (+5), C-10-11 (+3), C-10-13 (+2), C-10-12 partial — aims held below the arithmetic sum |
| Readability | 68 | 85 | +17 | C-10-02/03 (+12 of 17), C-10-14 (+4), C-10-15/16 (+2 of 4), C-10-17 (+2 of 3); −4 verification stands under D-10-2 |
| **Avg** | **77.0** | **87.2** | **+10.2** | Aim total 436 vs 425 required — margin +11; min aim 82 vs 70 required |

Aims are targets for Verify to price against, not predictions. The binding risks to the aim are the two disputes (motion −10, timing −5 stand regardless of construction) and D-10-2.

## §E Execute checklist (numbered)

1. **S0 — Re-observation & route hunt (no construction).** Re-run the render-route hunt (binaries + puppeteer/playwright) and file the outcome verbatim; re-run the label model at 240px filing all 12 labels (§H conflict 3); file the segment re-observation record (standing basis, §H). File `checkpoint-attempt10-stage0.html` (unchanged source copy) + `own-checks-attempt10-stage0.txt` in the artifact dir. Interim report names both paths as the stage closes (A-C024-2); seat reads both back before S1 opens.
2. **S1 — Scheduler cures** C-10-01, C-10-07. Own-checks incl. simulated-clock resume probe (3 branches) and forced-late-entry skip-key probe. File `checkpoint-attempt10-stage1.html` + `own-checks-attempt10-stage1.txt`; interim report names them (A-C024-2).
3. **Preservation re-verification** immediately after the first overwrite of `recreation.html` (in S1): sha256sum of `recreation-attempt-9.html` and `comparison-preserved-attempt-9.html` against §A values; any mismatch stops the attempt.
4. **S2 — Label cures** C-10-02, C-10-03. Own-checks incl. all-12-label DOM-model assertions at 240/360px. File stage-2 checkpoint + own-checks; interim report names them.
5. **S3 — Schema cures** C-10-10, C-10-04, C-10-13, C-10-12 (keys + routes). Own-checks incl. both-routes corpus and route-coverage census draft. File stage-3 checkpoint + own-checks; interim report names them.
6. **S4 — Geometry & detail cures** C-10-11, C-10-14. Own-checks incl. resolved-height detail assertions per panel. File stage-4 checkpoint + own-checks; interim report names them.
7. **S5 — Header & progress cures** C-10-15, C-10-16, C-10-17. Own-checks incl. occlusion-pair enumeration (completed vs illustrated-target) and wrap-branch line-height assertions. File stage-5 checkpoint + own-checks; interim report names them.
8. **S6 — Cut & curve cures** C-10-06, C-10-08, C-10-09. Own-checks incl. cut state-sequence assertion and dive-fraction probe (≥0.55 at 0.75). File stage-6 checkpoint + own-checks; interim report names them.
9. **S7 — Assembly.** Only now re-point `comparison.html` at the attempt-10 source. File `checkpoint-attempt10-stage7.html` (= final source) + full own-checks on the final sha.
10. **A-C008 pre-scoring legs on the NEW (final) source**: `fit-table-attempt10.md` and `config-census-attempt10.md` in the artifact dir, computed from the final sha, filed before any lens fires.
11. **Payload manifest + anchor scan** (A-C005-2/A-C008-4/A-C010-1c): manifest in the run dir listing every payload file + sha + the five lenses; packet prints Basis A and Basis B with the opening-beat and tracker-read disputes; anchor scan confirms no digest timestamps/frames are used as anchors (§H item 4) and no stale segment numbers survive.
12. **Firing form**: per-lens scratch cwd copies under `~/workspace/codex-scratch/` + `--skip-git-repo-check` (A-C021-1/A-C022-2); local Codex binary; **stdout captured with NO `-o` flag** (the `-o` write fails EPERM here), output captured to file via redirect-to-file (never `$( )`); returns persisted into `codex/attempt-10/` via the file tool.
13. Checkpoints are genuine stage states (A-C012-4): each stage's checkpoint is the source as of that stage, filed before the next stage opens — attempt 9's regenerate-at-assembly deviation is the named failure this ordering exists to prevent.

## §F Verify checklist

1. Full own-check suite passes on the final sha; the sha in the build record equals the scored source's sha.
2. Checkpoint chain audit: stage checkpoints exist in filing order, each differing from its predecessor only by its stage's cures (spot-diff S1, S3, S6 minimum); A-C024-2 interim reports named each stage's paths.
3. Preservation re-verified (step E3 result on file); attempt-9 copies untouched.
4. A-C008 legs filed on the final sha before firing; manifest + anchor scan on file.
5. Per-lens deltas recomputed from the filed attempt-10 returns (never from summaries); WHY written from the §F-scaffold slots in scores.md (cure-by-cure outcome for all 17 cures + 4 deferrals).
6. NOT-VERIFIED list carried verbatim from the build record; if D-10-2 discharged, the pixel evidence is filed and named.
7. PASS/FAIL priced against §D: avg ≥ 85.0 AND min ≥ 70; a min-lens miss is a FAIL regardless of average.

## §G Failure-point evaluation — jev-plan-exit §2.4 priced for THIS item

- **(a) Big-rebuild attribution** — LIVE RISK. 17 cures in one attempt repeats attempt 9's bundled shape. Mitigation is structural, not aspirational: genuine per-stage checkpoints (E13) + per-stage own-checks give per-stage attribution for every cure; a stage whose checkpoint cannot be produced does not open the next stage. Residual: within-stage cure pairs still bundle (priced in (b)).
- **(b) Cure interactions** — five pairs named and probed: C-10-02×C-10-03 (separate inputs × structure counting — S2 asserts both jointly); C-10-10×C-10-04 (pristine schema × route coverage — routes validate against pristine, census runs post-separation); C-10-11×C-10-14 (one geometry model × resolved detail height — detail consumes the model's record, no second estimate); C-10-01×C-10-06 (resume branches × cut-held state — resume probe includes a cut-held case); C-10-09×C-10-08 (easing separation × dive curve — approach fraction asserted unchanged by the dive reshape).
- **(c) Prior-attempt overwrite / early comparison re-pointing** — RULED OUT by §A: attempt-9 copies are byte-exact and create-once; `comparison.html` re-points only at S7 (E9); baseline sha for the old comparison is on record.
- **(d) Anchor leak** — priced in §H: digest timestamps/frames are named non-anchors; the fit-table discrepancy is resolved by re-observation, not by adopting either side's number; packet anchor scan is E11.
- **(e) Instrument-change misread** — LIVE, bounded: if S0 finds a render route, attempt-10 scores become the first pixel-priced set — Verify must separate instrument change from construction change using the S0 record (filed before any build). The S0 label-model re-observation likewise changes the fit-table instrument record before construction begins.
- **(f) Wave fan-out cross-contamination** — RULED OUT for this plan: single-item session scope; every file written sits in the T23 artifact dir or this run dir; no other item's plan, baseline, or artifact was touched.
- **(g) Size-split evasion** — RULED OUT: the full 17-cure inventory and the full +8.0 delta target stand in this one plan; nothing is split across attempts to soften attribution.

## §H Anchor conflicts (A-C006-1) — resolved against segment evidence

**Standing segment basis (no new conflict)**: segment.mp4 = source 130.0–137.0s, segment-local t=0 ≡ source 130.0s; cut-in 6.133–6.167s; full grid ≈6.533s; dive into panel 09 complete ≈6.867s; appearance window ≈700–734ms continuous, not decomposable; approach ≈366–400ms, dive ≈334ms. Attempt 9's 365/335 allocation sits at the short-window edge — inside the measured intervals, labeled ALLOCATION in its build record. No priced cure in the attempt-9 returns or WHY carries a new quantitative anchor conflicting with this basis.

1. **Brief vs evidence (standing dispute)**: the motion lens's brief prices flash → static hold → dive; Basis B (segment) shows continuous motion with no static hold. Resolution: segment evidence governs construction (Basis B binds); the dispute is carried into the packet with both bases printed (A-C010-3) and priced adversely in §D. Not an anchor conflict — a brief conflict.
2. **Fit-table discrepancy (NEW, this plan)**: build-record-attempt9's fit-table summary lists panel 07 alone as number-only at 240px; the readability lens's source-model run returned number-only for ALL 12 labels at 240px. Neither is adopted as an anchor. Resolution: S0 re-runs the label model at 240px and files the full 12-label result before any construction (E1); C-10-03's own-checks then assert against the new counter.
3. **Digest authority (resolved in prior cycles, restated)**: digest timestamps run ≈4s early and frames t132/t171 do not depict the map (ev/t172.jpg does); header text and titles 01/02 are digest-authority/placeholder config data. No anchor is taken from the digest; the packet anchor scan (E11) enforces this.

---

*Plan ends. WHY scaffold appended to the artifact's scores.md as "Attempt 10 — Plan WHY scaffold (practice Cycle 025)".*
