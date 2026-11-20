# T02 — Counting list + giant numeral · SCORES

Technique: T02 (packet P1, "Look What I Can Do" @ 0:14–0:21) · Consumer: vocabulary progress visual
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 0:13.5–0:21.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 004, Wave 2)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 86 | codex/lens-motion.md |
| Timing / tempo match | 94 | codex/lens-timing.md |
| Construction purity | 97 | codex/lens-purity.md |
| Reusability / parameterization | 54 | codex/lens-reusability.md |
| Readability | 48 | codex/lens-readability.md |

**Arithmetic:** (86 + 94 + 97 + 54 + 48) / 5 = 379 / 5 = **75.8 average** · minimum lens **48**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — fails BOTH terms: average short by 9.2; two lenses under the floor (reusability 54, readability 48). Tier consequence: **IN PROGRESS** — attempt 2 routes to the practice job (queue order / lowest-scored first per INSTRUCTION A3 division of labour); the tier move itself is the style-library job's act on this evidence.

### Priced gaps (what attempt 2 — practice job — must cure)

**CONVERGENT (Amendment A1 — two lenses name each; primary cures, in order):**
1. **Numeral pulse is unsupported added motion** (motion 86 + readability 48): the 1.055/130 ms pulse grows then snaps back, and at the early ~150 ms/line cadence it is near-continuous swelling/jitter; the evidence establishes numeral STEPPING only. Cure: pulseScale default 1 (no pulse), or a smooth timeline-derived pulse proven against the segment.
2. **Caption built via innerHTML** (purity 97 + reusability 54): `captionText` — including its URL override — flows into `innerHTML`, so arbitrary input becomes markup and could load external assets, breaking purity under override. Cure: build the caption from text nodes + a generated accent span.

**Single-lens, priced:**
3. **Readability fitting failure (48) — the deepest defect:** at a 360×202.5 phone stage only ~8 of the configured 13 rows fit the list window (13 rows need ~220 px vs ~136 px available), so newly revealed lines clip below the boundary; both 36-char specimen lines (~237 px needed vs 201.6 px column) clip horizontally; the in-stage playback buttons sit in the caption's lower-right region; numeral at 34 vmin is ~60% of stage height vs the reference's ~1/3. Cure: stage-relative typography with a verified 13-row fit (derive row size from window height ÷ visibleLines), measured longest-line fit for the column, controls moved out of the presentation area (comparison page already carries controls), reserved caption space.
4. **Reusability model gaps (54):** checkpoint counts are not normalized to lines.length (a 2-line or 50-line swap silently breaks the schedule — lines 40–50 would never reveal); no validation of checkpoint ordering/bounds, URL values, or colors; `_speed` is not a declared CONFIG key; font stacks/layout percentages/control styling remain CSS literals; `countAtMs` carries an unexplained 10,000 ceiling; repeated seeks can stack RAF loops and pulse state is wall-clock-derived, not timeline-derived. Cure: validated, count-normalized checkpoint construction + complete visual CONFIG + single deterministic loop.
5. **Opening command (timing 94):** the 260 ms prompt typing beat is unsupported — the specimen's earliest evidence frame already shows the full command, and typing overlaps the first line's 150 ms reveal. Cure: full command visible at t=0.

Own checks before the wave (build-record.md §5): swap test PASS 8/8 at logic level (after fixing the schedule helper's out-of-range over-count) · purity grep zero hits · comparison structural check PASS · segment ffprobe-verified (h264, 1916×1078, 8.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — which is precisely how the leg-3 structural check missed the row-fit clipping the readability lens caught by arithmetic; attempt 2's verification plan should carry a computed-fit check (rows × line-height ≤ window height) as a mechanical leg.


## Attempt 2 — 2026-11-14 (practice Cycle 003 Wave 2)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 88 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 100 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 68 | codex/attempt-2/lens-reusability.md |
| Readability | 76 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (88 + 100 + 100 + 68 + 76) / 5 = 432 / 5 = **86.4 average** · minimum lens **68**.
**Delta vs attempt 1:** 86.4 − 75.8 = **+10.6** (signed, one decimal). The attempt BEATS its predecessor, so no WHY is owed under the floor rule.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — the average term passes (86.4 ≥ 85); the floor term fails: reusability 68 < 70. Tier consequence: **IN PROGRESS** — attempt 3 routes to the practice job.
All five lenses fired against the identical final source: recreation.html sha256 `11b02a33e388c5705bf620e90f0b4b4620ab64ce659e7a17fc47e9b638354757` (recorded in build-record-attempt2.md §4 before firing). Payloads preserved create-once at codex/attempt-2/instr-<lens>.txt; payload inspection (per CA-3): all five PASS — no prior scores, verdicts, delta targets, or comparative wording; the only pattern hits were the source's own validation string, the own-check counts, and the category names in the record's inspection-procedure sentence (no values).

### Own checks before the wave (build-record-attempt2.md §§1–3)
Logic suite 51/51 PASS, in separated per-sub-cure groups with effect mappings: numeral scale == pulseScale (1.0) at nine sampled times and pure in t · caption construction (markup-bearing input renders as literal text, exactly one generated element, zero innerHTML in source) · row fit at 360/390 px (9 × row height ≤ window height, font at/above the 11 px floor) · horizontal fit priced (see deferrals) · controls outside the stage element · caption reservation (16% zone vs 13.14% need + clearance) · numeral proportion (0.3333 of stage height; two-digit width inside its column) · schedule anchors exact (20@3000 / 37@6000 / 39@7000, boundaries 19/36/38) · checkpoint normalization (2-line completes by the final anchor; 50-line lands 26/47/50 with lines 40–50 all revealing by 7000 ms; monotonic) · validation (reordered times, out-of-bounds count, missing terminal count, non-hex colors each rejected) · CONFIG surface (speed declared and read by the clock; fonts/layout/type/controls blocks present) · count bound (no fixed ceiling; loop bounded by the terminal count) · loop discipline (two animation-frame request sites; guarded starter; seek renders directly) · opening state (full command assigned at build; no typing-span key; the render function never writes the command) · purity grep zero hits · node --check PASS. Pixel step: **PIXEL-UNVERIFIED** — headless Chromium in this environment stops before page load ("Hatch WebGL domain policy is required for browser startup", /opt/meta-chromium/chrome, 360×700, file URL); geometry rests on the deterministic derivations + suite, per A-C002-2.

### 13-row disposition — DEFERRED (in writing, per the amended plan's deferral rule)
Filed before building in build-record-attempt2.md §1, from the standing stage geometry. Designer-named minimum readable font floor: **11 px**. At a 360 px stage (height 202.5 px) the listing window — bounded by the prompt zone above and the reserved caption zone below — is 141.75 px; 13 rows at the floor-derived row height (14.30 px) need 185.90 px (shortfall 44.15 px; the window alone would need 91.8% of stage height). At 390 px: 153.56 px available vs 201.31 px needed (shortfall 47.75 px). **Reason:** 13 rows cannot fit at or above the floor inside this stage geometry. **Consequence:** the layout derives its visible row count from the window (9 rows at both widths, every shown row fully inside the window, no vertical clipping of shown rows); the evidenced 13-row moving window is NOT reproduced — the motion lens priced exactly this (retention deviation: the build shows rows 12–20 and 29–37 where the frames show 8–20 and 25–37) and scored motion 88. A reduced-row window is not filed as the 13-row cure; the cure stands deferred to attempt 3, whose plan must re-price the stage geometry itself (the deferral is geometric, not an implementation gap).
**Horizontal sub-cure — DEFERRED by the same rule:** the two 36-character lines need 249.15 px vs the 225.00 px column at 360 px (269.81 vs 243.75 at 390 px); fitting them would require 9.93 px / 10.76 px — below the floor at both widths. Consequence, priced by the readability lens (76): those two lines clip their endings at phone widths, and the filed formula's fit threshold at 360 px is 32 characters — the build record's "all shorter lines fit" sentence is corrected here: it holds for the default set's remaining lines (longest 29 chars) but not as a general claim (33–35-character lines would also overflow). Audit-every-title is an attempt-3 charge.

### Preservation census (V3, post-filing)
recreation-attempt-1.html (create-once copy) sha256 = baseline `c5e6d3d0…f08` ✓ · build-record.md, segment.mp4, comparison.html and codex/lens-{motion,timing,reusability,readability}.md byte-identical to the baseline ✓ · scores.md prior content remains an exact prefix of this file (append-only; verified by length + prefix hash after filing) · comparison.html UNCHANGED this attempt (the recreation's external interface — window.T02 + postMessage commands, durations, checkpoint anchors — did not change, so no re-point was owed; its ORIGINAL side is untouched) · **baseline anomaly, printed not hidden:** the seat baseline's entry for codex/lens-purity.md is a 56-hex-character string (truncated at capture; its tail duplicates scores.md's hash tail). The file's actual sha256 is `ff54079f8b9d414fba38f1d052556e52611af66b37742b1f7854830c726d1c45`, identical before and after this attempt and sharing the baseline entry's 40-character prefix; the file was never written by this attempt. The baseline file itself is the seat's record and was not edited.

### Cure → neutral-check mapping (private, per CA-3)
Numeral pulse (convergent, motion+readability) → "Scale behaviour" diagnostics + pulseScale 1.0 construction — motion return confirms constant scale raises no deduction; timing 100. Caption innerHTML (convergent, purity+reuse) → "Caption construction" diagnostics — purity 100 (text-only insertion on every path). Readability fit family → §1 geometry pricing + "Row fit / Horizontal fit / Controls placement / Caption reservation / Numeral proportion" diagnostics — readability 48 → 76. Reuse normalization family → "Schedule / Count normalization / Validation / CONFIG surface / Count bound / Loop discipline" diagnostics — reusability 54 → 68 (the lens's remaining findings are validation-recovery depth and presentation-literal completeness, below). Opening command (timing) → "Opening state" diagnostics — timing 94 → 100.

### Priced gaps (what attempt 3 must cure)
1. **Reusability 68 — the blocking lens.** (a) Recovery is detection-deep only: the count-normalization path preserves invalid anchor TIMES (reordered/negative/non-finite/duplicate times survive rejection, malformed tables can throw, and the derived table is never re-validated) — attempt 3 validates times as well as counts and validates the effective table after recovery. (b) Short-list timing policy: a 1-line derivation completes at 3000 ms while the caption waits at 7000 ms — attempt 3 names and tests the short-list policy (1-line case included) instead of only the 2/50 cases. (c) Duration policy: a valid table can end after totalDurationMs and rendering clamps before completion — attempt 3 validates the schedule against the duration or rescales timings with it, explicitly. (d) Strict numeric parsing: `parseFloat("2junk")` → 2 and `parseInt("3500junk")` → 3500 are accepted today; the checkpoint-time override also assumes ≥3 anchors — attempt 3 parses strictly and guards the anchor count. (e) Remaining presentation literals → CONFIG: stage aspect/width constraint, outer background, font weights, numeral line-height/letter-spacing, chevron opacity, label spacing factor, button weight/line-height, and the glyph-metric constants inside the fit formula. (f) Runtime-sequence evidence: repeated seek/restart command sequences and paused-resize window recompute are asserted only at construction level today — attempt 3 exercises them (the paused-resize path currently derives geometry without re-rendering the visible window).
2. **Readability 76:** complete titles at the 11 px floor (the deferred horizontal cure, bound to the same geometry re-pricing as the 13-row deferral: a wider effective column or a different stage allocation, never a smaller font); audit every title against the fit formula, not only the longest; rendered phone-size frames once a render route exists (PIXEL-UNVERIFIED stands until then); 11 px itself was noted by the lens as small for first-time reading — attempt 3 re-prices the floor against any new geometry.
3. **Motion 88:** restore the evidenced 13-row retention window — the same deferred geometry; if attempt 3's re-pricing cannot seat 13 rows at the floor either, the deferral re-files with its new arithmetic rather than expiring silently.

## Attempt 3 — 2026-11-19 (practice Cycle-031 Wave 30)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 94 | codex/attempt-3/lens-motion-attempt3-run1.md |
| Timing / tempo match | 98 | codex/attempt-3/lens-timing-attempt3-run1.md |
| Construction purity | 100 | codex/attempt-3/lens-purity-attempt3-run1.md |
| Reusability / parameterization | 76 | codex/attempt-3/lens-reusability-attempt3-run2.md |
| Readability | 84 | codex/attempt-3/lens-readability-attempt3-run1.md |

**Arithmetic (mechanical guard 1, recomputed from the filed returns of
both attempts; every filed SCORE scale-validated as a single integer
0–100):** (94 + 98 + 100 + 76 + 84) / 5 = 452 / 5 = **90.4 average** ·
minimum lens **76**.
**Delta vs attempt 2:** 90.4 − 86.4 = **+4.0** (signed, one decimal).
Per lens: motion 88 → 94 (+6) · timing 100 → 98 (−2) · purity 100 →
100 (0) · reusability 68 → 76 (+8) · readability 76 → 84 (+8).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — both terms pass (90.4 ≥ 85; minimum 76 ≥ 70).
Tier consequence: **RECREATED** — the tier move itself is the
style-library job's act on this evidence; the hand-off pointer is this
Attempt 3 entry (scores.md, Attempt 3) plus build-record-attempt3.md.
All five filed returns judge the identical final source:
recreation.html sha256 `0e54046f9b06a836e6909c662bb4ebec6d6212d35f670ec348780bd35e8d6b2d`
(payload manifest: codex/attempt-3/manifest-attempt3.md, filed before
firing; the reusability run1 firing was terminated with no return —
preserved as lens-reusability-attempt3-run1-FAILED.md — and re-fired
as run2 on a byte-identical payload copy; every filed return is
sha-identical to its workspace-scratch original).

**WHY determination (floor rule, plan §0 amendment):** the attempt
BEATS the prior average (90.4 > 86.4), so no WHY is owed — the WHY
duty is owed iff the new average is ≤ 86.4, independent of the tier
verdict, and that condition does not hold. The jev-plateau call point
(§5.4) therefore does not fire this attempt; its non-firing is this
determination, not an omission. The class-bound plateau tests below
fire per class regardless of the average and are filed in full.

### Class-bound plateau tests (A-C029-2 — each with evidence + disposition slots)

1. **Recovery-validation class** (primary lens: reusability).
   Evidence slot: S1 checkpoint (30/30, incl. R-1) + the sweep's
   recovery axis on the final source (28/28) + the reusability
   return's validation/recovery passage. Disposition: **NOT FIRED** —
   leg (a) in attempt 2's own terms (invalid anchor times surviving ·
   malformed tables throwing · effective table unvalidated): all
   three terms are cured and none is priced against this attempt;
   leg (b): the class's primary lens rose 68 → 76 and the return
   gives no class-attributed deduction figure (attribution limit
   recorded, per the scaffold's rule). The return DOES price new
   siblings in the wider recovery family — they are filed as priced
   gaps below, not as this class firing.
2. **Short-list/duration policy class** (reusability). Evidence slot:
   S2a + S2b checkpoints + R-2/R-3 sweep cases + the return's schedule
   portability passage (it credits anchor-preserving derivation:
   terminal count first appears at the 7000 ms anchor for 1/2/3/50
   lines; a fractional anchor override survives a list swap).
   Disposition: **NOT FIRED** — completion == final anchor for every
   tested count; no tested schedule ends after its duration. The
   return's duration counterexample (mutually inconsistent edited
   defaults) is a defaults-intake sibling, filed below.
3. **Strict-parsing class** (reusability). Evidence slot: S3
   checkpoint (18/18) + the return's validation passage ("The query
   route checks numeric syntax and neighboring anchor bounds" — no
   junk-suffixed or truncated acceptance priced on any route).
   Disposition: **NOT FIRED**.
4. **CONFIG-literal class** (reusability). Evidence slot: S4
   checkpoint (31/31) + config-census-attempt-3.md (70/70 keys
   consumed) + the return's configuration passage. Disposition:
   **NOT FIRED** on the filed list — every filed-list literal is in
   CONFIG with a consumed effect. Residue priced by the return,
   filed as gaps below: the speed ceiling and the scale precision
   (whitelisted in this build's census as structural constants — the
   classification disagreement is printed, not hidden) and
   CSS-resident alignment/centering properties (a new sibling
   surface, not on the filed list).
5. **Runtime-sequence class** (reusability). Evidence slot: S6
   checkpoint's three probes (sequence suite 12/12 · paused-resize
   before/after · endpoint clamping) + the return's clock passage
   (it credits synchronous paused seeks and resize recompute at the
   current elapsed time). Disposition: **NOT FIRED** — neither of
   attempt 2's terms (construction-only evidence · paused-resize not
   re-rendering) is priced against this attempt. Two new siblings in
   the family are filed as gaps below (pause does not render the
   captured instant synchronously; the exposed schedule is a live
   reference).
6. **Horizontal-fit class** (readability). Evidence slot: S5a probe +
   fit-table-attempt-3.md (39/39 titles fit at both widths, worst
   margin +2.85 px) + the readability return (it confirms all 39 fit
   at both widths; the 40-char synthetic clips — the filed
   expected-overflow control, not a default title). Disposition:
   **NOT FIRED**.
7. **Retention-window class** (motion). Evidence slot: S5c probe +
   S5 assembled checks (windows 8–20 at 3000 ms, 25–37 at 6000 ms
   under full load) + the motion return (it confirms rows 8–20 and
   25–37 at the evidenced checkpoints). Disposition: **NOT FIRED** —
   Route D bound at S0 (Route C falsified on displayed text bounds;
   Route E's deferral arithmetic stands unused, not expired).
8. **Floor / visible-legibility class** (readability). Evidence slot:
   S5d floor print (effective ceiling 11.13 px horizontal-bound;
   11 px = largest whole-pixel floor) + fit-table displayed-bounds
   leg + the readability return's type passage (type at/just above
   the floor; no default title priced illegible at the floor; the
   residual it names is rendered-frame verification, which stands as
   PIXEL-UNVERIFIED for the whole attempt). Disposition: **NOT
   FIRED**.

### Priced gaps (what a future attempt must cure — from the attempt-3 returns)
1. **Reusability 76 — intake/defaults siblings (the blocking residue).**
   (a) The trusted-basis capture copies the CONFIG anchor table
   before any validation, so a null or missing CONFIG table (direct-
   edit route) throws at intake, before recovery can run — intake
   must be shape-guarded so recovery is total on every route.
   (b) The captured "defaults" (anchor basis, default duration,
   default caption point) are read from the editable CONFIG itself,
   so a direct edit that makes the defaults mutually inconsistent
   (e.g. a 6000 ms default duration against the 7000 ms default final
   anchor) is not jointly rejected — the validated specimen defaults
   must be independent of the edited values, and the returned tuple
   needs a final validation pass. (c) The derivation function called
   directly with a zero line count emits −1 intermediate counts (the
   resolver's own path guards this; the function itself does not).
   (d) `pause()` captures the elapsed instant without rendering it
   synchronously. (e) The exposed `checkpoints` value is the live
   schedule array by reference — callers can bypass validation;
   expose a copy. (f) `finalCount` reads as an independent setting
   while the list owns the count. (g) Classification residue: the
   speed ceiling (10) and scale precision (4) sit in logic under this
   build's structural whitelist, and numeral alignment / caption
   centering sit in CSS — the return prices all four as
   configuration surface.
2. **Readability 84:** title margins are thin (+2.85/+3.19 px) and
   the fit claim is model-bound — a rendered phone-size check at
   360/390 px is the named next evidence (PIXEL-UNVERIFIED stands
   lane-wide until a render route exists); per-title reading windows
   (1.00–3.76 s, median 2.19 s) are priced as scannable rather than
   leisurely, a property of the evidenced cadence itself.
3. **Timing 98 / Motion 94:** both residuals are the same limit —
   browser paint and wall-clock cadence are unverified (the returns
   credit the source schedule and retention in full and deduct only
   for the missing rendered check). No construction change is priced
   by either return against the default schedule or the retention
   window.

### Preservation census (post-filing)
recreation-attempt-1.html + recreation-attempt-2.html (content copy,
sha 11b02a33…354757) byte-identical to baseline ✓ · build records,
comparison.html and segment.mp4 (the comparison's ORIGINAL asset)
byte-identical ✓ · all attempt-1/attempt-2 codex files byte-identical
✓ · scores.md prior content remains an exact prefix of this file
(append-only; verified by length + prefix hash after filing) ·
comparison.html UNCHANGED this attempt (interface unchanged: same
window.T02 commands, anchors, durations) · staged checkpoints filed
create-once under checkpoints-attempt-3/ (S0, S1, S2a, S2b, S3, S4,
S5a–S5d probes, S5, S6 — each a content copy with its check output).
