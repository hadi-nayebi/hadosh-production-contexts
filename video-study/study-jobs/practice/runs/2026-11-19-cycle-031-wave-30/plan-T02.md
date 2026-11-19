# Plan — T02 counting list + giant numeral · Attempt 3 · practice Cycle-031 Wave 30

Plan agent filing, PLAN ONLY (no recreation file built or edited by this plan).
Governing: practice INSTRUCTION §2 (cure plan · preservation · checklists ·
failure-point evaluation · WHY scaffold), RUN.md §1 + §1a for this cycle.
Item home: `hidden_files/study/recreations/T02-counting-list-giant-numeral/`
Prior attempt: 2 (2026-11-14, practice Cycle 003 Wave 2), final source
sha256 `11b02a33…354757` (build-record-attempt2.md §4).

## §0 — Delta target (RUN.md §1, binding)

Prior: avg **86.4** (432/5) · vector motion 88 · timing 100 · purity 100 ·
reusability **68** · readability 76 · min 68.
Target: **avg ≥ 85 AND min ≥ 70** — the average already clears; **the floor
is the whole target.** Reusability 68 → ≥70 is the pass/fail term;
readability 76 must hold or rise; motion/timing/purity must not regress
below their adverse prices in §7. Same five-lens instrument both attempts
(RUN.md §1) — no cross-instrument comparison. Owner cures: none stand.

Cure count: **9 named cures** — C-R1…C-R6 (reusability, blocking lens,
first per INSTRUCTION §2.2 convergent/order rule; all six are single-lens
priced gaps 1a–1f in scores.md Attempt 2, carried in the filed order),
C-D1 + C-D2 (readability), C-M1 (motion). C-D1 and C-M1 share one geometry
stage (S5); their cures are named separately and never absorbed into a
"geometry rebuild" label (jev-plan-exit §2.1).

**§0 amendment (Cycle-031 plan review, Finding 6) — WHY and tier are
independent decisions.** The WHY duty in §8/§6 is owed iff the new
average is ≤ 86.4 (the attempt does not beat the prior average); it is
NOT conditioned on the tier verdict. Worked case, binding on Verify:
a new average of 86.0 with minimum 70 PASSES the tier bar (avg ≥ 85
AND min ≥ 70) and still owes a filed WHY, because 86.0 ≤ 86.4. The
tier hand-off in §6 step 11 therefore fires on PASS whether or not a
WHY is owed, and a WHY filing never delays, replaces, or conditions
that hand-off; conversely a PASS never discharges a WHY that is owed.

## §1 — Cure plan (construction change per cure)

### Reusability first — blocking lens 68 (scores.md Attempt 2, priced gap 1)

**C-R1 (gap 1a) — Recovery validates anchor TIMES and the effective table.**
Construction: in `recreation.html`'s PURE block —
(i) `validateCheckpoints` already checks time finiteness/order/bounds for
the *candidate* table; the defect is the recovery path:
`normalizeCheckpoints(specimen, …)` preserves candidate times verbatim,
assumes `specimen[specimen.length-1]` exists (empty/malformed tables
throw), and its output is never re-validated (build-record-attempt2 §2;
lens-reusability.md ¶2). Cure: recovery derives from a **trusted fallback
basis independent of the malformed candidate** (the CONFIG default anchor
times, themselves validated at load) — candidate counts are re-derived
against those times, candidate times are never carried into the effective
table; (ii) after recovery, the **effective table is re-validated** with
the same `validateCheckpoints(effTable, lines.length)`; if re-validation
fails, the effective table is the validated default table and a named
warning is appended (recovery is total: no input reaches a throw);
(iii) `normalizeCheckpoints` guards its inputs (non-array, empty,
non-object entries, non-finite fields) before any dereference.
Effect asserted: for every malformed-table case in the §6 sweep, the
post-recovery effective table passes `validateCheckpoints` and
`countAtMs` is monotonic over it (A-C002-1 effect mapping, not a count).

**C-R1 amendment (Cycle-031 plan review, Finding 1) — two validators,
shape before dereference.** The plan's single-validator wording above
is replaced as follows. (i) There are TWO named validators:
`validateCandidateCheckpoints(cps, totalLines)` — the strict rule for
a candidate/default table: shape-valid entries, finite fields,
strictly increasing times AND strictly increasing counts, first entry
(0,0), terminal count == totalLines; and
`validateDerivedCheckpoints(cps, totalLines)` — the rule for a table
produced by count derivation under C-R2: shape-valid entries, finite
fields, strictly increasing times, NON-decreasing counts (count
plateaus permitted only here, only in a derived table), first entry
(0,0), terminal count == totalLines carried only by the final anchor
(C-R2 amendment). No code path validates a derived table with the
candidate rule, and no code path validates a candidate with the
derived rule. (ii) Shape is checked BEFORE any dereference in BOTH
validators and in `normalizeCheckpoints`: the first pass asserts the
value is an array, every entry is a non-null object, and `timeMs` /
`count` are present, before any entry field is read; the attempt-2
validator's dereference of `cps[0]` ahead of a shape check (source
lines 81–91) is a named throw path this cure closes, not only the
`normalizeCheckpoints` path. A shape-invalid input is rejected as a
whole to the trusted fallback basis; it is never partially read.
(iii) C-R1's re-validation step in (ii) above therefore reads:
candidate inputs are re-validated with the candidate validator,
derived outputs with the derived validator, and the validator used
is named in the build record for each case in the §6.3 sweep.

**C-R2 (gap 1b) — Short-list timing policy, named and tested.**
Policy name: **ANCHOR-PRESERVING COMPLETION** — a derived schedule for
any line count keeps ALL anchor times of the validated basis; counts are
re-derived per anchor; completion is the final anchor time (7000 ms in
the default basis) for every line count ≥ 1, and the caption point does
not move. The attempt-2 behaviour (1-line derivation `(0,0)→(3000,1)`,
later anchors discarded, completion 3000 ms vs caption 7000 ms) is the
named defect this policy replaces. Construction: `normalizeCheckpoints`
stops dropping anchors whose scaled count is non-increasing at the head
of the table — zero-count anchors are retained as time anchors (count
plateau permitted in the *derived* table only, with the derivation's own
validator variant named in the build record), and the terminal anchor
always carries the terminal count at the final anchor time.
Tests: line counts 1, 2, 3, 39 (default, bit-identical table), 50 — each
asserts completion time == final anchor time, caption coincidence at the
terminal count, monotonic counts. **Guard: the default 39-line table is
bit-identical to attempt 2's** (timing lens 100 is priced on it; §7).

**C-R2 amendment (Cycle-031 plan review, Finding 1) — the terminal
count is reserved for the final anchor.** The completion promise
above is void as written without this construction, and it is now
part of the cure: in count derivation, every intermediate anchor's
derived count is capped at `totalLines − 1`; ONLY the final anchor
carries `totalLines`, at the final anchor time. Rounding may
therefore never reach the terminal count early. Consequentially,
`lineTimeMs(totalLines − 1, effTable)` returns the final anchor time
by construction (the terminal index falls in the last interval,
whose ending count is the reserved terminal count), and no earlier
interval's ending count equals `totalLines`, so the first-interval
scan in `lineTimeMs` cannot complete the list early. The §1 tests
above gain the explicit assertions: for line counts 1, 2, 3, 50, no
anchor before the final anchor carries the terminal count, and
`countAtMs(t) < totalLines` for every `t` < final anchor time.

**C-R3 (gap 1c) — Duration policy, explicit.**
Policy name: **SCHEDULE-WITHIN-DURATION, REJECT-AND-WARN** — the
effective schedule's final anchor time and `captionAtMs` must both be
≤ `totalDurationMs`; a candidate (CONFIG edit or derived) violating this
is rejected to the validated default with a named warning — timings are
NOT silently rescaled and rendering never clamps before completion.
(Rescaling was the alternative; rejected in writing because it would
move the evidenced default anchors under a duration-only edit — the
lens's own wording offers either policy, this plan names one.)
Construction: one duration gate runs after C-R1's re-validation, on the
effective table, in the derivation order of §6's derivation-order axis.
Tests: final anchor > duration (reject+warn, effective == default);
caption > duration (existing clamp retained, now asserted as policy);
duration edit alone (default schedule unchanged, no rescale).

**C-R3 amendment (Cycle-031 plan review, Finding 1) — schedule, line
count, duration and caption are resolved TOGETHER as one tuple.**
The reject-to-defaults rule and the caption-clamp rule above are not
two independent policies for the same input; the duration gate
evaluates the joint tuple (effective schedule · line count ·
`totalDurationMs` · `captionAtMs`) and exactly one outcome applies:
(a) schedule final anchor ≤ duration AND caption ≤ duration —
accept, no clamp, no rejection; (b) schedule fits but caption >
duration — the caption point alone is clamped to duration (the
existing clamp, now confined to this case) with a named warning, the
schedule is untouched; (c) schedule final anchor > duration —
the candidate schedule is rejected to the validated default table
with a named warning, and the caption is then re-checked against
duration under (a)/(b) on the DEFAULT table; (d) the default table
itself violates the duration (e.g. a retained 6000 ms duration
against the default 7000 ms final anchor) — the DURATION edit is
the rejected element: `totalDurationMs` reverts to its validated
default (8000 ms), a named warning records the joint rejection, and
the effective tuple is (default schedule · line count · default
duration · caption re-checked under (a)/(b)). No outcome leaves an
effective schedule that cannot complete within its own duration,
and no input is both rejected-to-default and caption-clamped as if
those were the same act. The §1 tests above gain case (d) verbatim:
duration edited to 6000 ms with the default table ⇒ duration
reverts to 8000 ms, schedule == default, completion at 7000 ms.

**C-R4 (gap 1d) — Strict numeric parsing + anchor-count guard.**
Construction: a single strict parser (full-string numeric grammar:
optional sign, digits, optional fraction/exponent; rejects `""`,
`"2junk"`, `"3500junk"`, hex, Infinity/NaN spellings) replaces
`parseFloat`/`parseInt` on every override path (`speed`,
`checkpoint2`); fractional checkpoint times are no longer truncated —
a fractional value parses as its exact number and is range-checked.
The `checkpoint2` override first asserts `CONFIG.checkpoints.length ≥ 3`
(and that indices 0/2 exist) before reading neighbours; with fewer
anchors the override is rejected with a named warning, never a throw.
Tests: junk-suffixed, fractional, empty, missing, oversized-magnitude
(400-nines class, A-C021-3) values per override; anchor arrays of
length 0/1/2/3/4 under the override (direct-edit route included,
A-C022-1).

**C-R4 amendment (Cycle-031 plan review, Finding 1) — coupled
overrides: a lawful edited anchor SURVIVES count derivation.** For
the coupled case (`lines` swap × `checkpoint2` override, §6.3), the
rule is stated, not left open: a `checkpoint2` time that passed the
strict parser, the anchor-count guard, and neighbour ordering
against the candidate table is a lawful edited anchor; when the
line count is then re-derived, derivation runs over the EDITED
anchor times (the edited time is carried into the derivation basis),
counts are re-derived per anchor under the C-R2 derived rule with
the terminal count reserved for the final anchor, and the edited
anchor's TIME is preserved verbatim — derivation may change its
count, never its time. An anchor that failed any of those checks is
not in the basis at all (rejected with its warning before
derivation). Expected retained state for the filed probe (one-line
swap with a valid fractional `checkpoint2`, §6.3 case R-2): the
effective table is a derived table validated by the derived
validator, the fractional edited time appears verbatim as an anchor
time, the single line completes at the final anchor time, and the
caption point does not move.

**C-R5 (gap 1e) — Presentation literals → CONFIG (the filed list, complete).**
New/moved CONFIG keys, each with a consumed effect mapping asserted per
A-C006-2 (key → rendered/computed effect), no key bound-but-unconsumed:
- stage: `stage.aspectRatio` (16/9) + `stage.maxWidthVh` (177.78) —
  CSS `#stage` reads both via inline style set from CONFIG (the
  stylesheet's `aspect-ratio: 16/9` and `width: min(100vw, 177.78vh)`
  literals leave the stylesheet).
- `palette.outerBg` (#000) — `html,body` background.
- font weights: `type.promptWeight` 700 · `type.checkWeight` 700 ·
  `type.numeralWeight` 900 · `type.captionWeight` 700 (today CSS
  literals on `#prompt`, `.check`, `#numeral`, `#caption`).
- numeral: `type.numeralLineHeight` 0.95 · `type.numeralLetterSpacingEm`
  −0.02 (today `#numeral` literals).
- `type.chevronOpacity` 0.85 (today the JS literal `".85"`).
- `type.labelSpacingFactor` 0.11 (today the JS literal `0.11 *` in
  `applyLayout`'s label margin).
- controls: `controls.buttonWeight` 600 · `controls.buttonLineHeight` 1
  (today the `"600 " … "px/1 "` shorthand literals in the button loop).
- glyph metrics: `type.glyphAdvanceEm` 0.6 · `type.checkAdvanceEm` 0.6 ·
  `type.rowGapEm` already in CONFIG (0.45) — `lineNeedPx()` reads all
  three from CONFIG instead of embedding `.6`/`.45`.
Literal census (A-C008-3): the post-build source scan lists every
remaining numeric/color literal outside CONFIG against a build-record
whitelist of named structural constants (loop indices, 0/1/100 percent
bases, `Math` constants); an unlisted literal fails the suite.
Content literals (check glyph, chevron, labels) are already CONFIG and
are never reclassified structural (A-C009-4).

**C-R6 (gap 1f) — Runtime-sequence evidence.**
Construction changes: (i) the resize path re-renders the visible window
at the current elapsed time — today `applyLayout` on resize derives
geometry without calling `renderAt`, so a paused resize leaves the
visible-row window stale (lens-reusability.md ¶6); cure: the resize
handler runs `applyLayout()` then `renderAt(elapsedMs())` on both the
paused and playing paths. (ii) `elapsedMs()` clamps at
`totalDurationMs` on the exposed interface (the lens's priced sub-finding:
elapsed continues beyond the rendered endpoint). Restart-always-resumes
is retained as named behaviour (priced, not cured — it matches the
comparison page's restart semantics; printed here so it is a decision,
not an omission).
Evidence (runtime level, not construction only): a sequence suite drives
the file's own `window.T02` interface — seek→seek→restart→seek, restart
while paused, play/pause/restart interleavings — asserting after each
step: single active loop (`debug.activeLoop`, `loopStarts` increments
only on a genuine start), displayed count == `countAtMs(t)`, visible
window == last `effectiveVisible` rows; and paused-resize at two stage
widths asserting the visible window recomputes to the new
`effectiveVisible` with no row clipped. Stub limits print per A-C030-2
(§6): any behaviour the DOM shim cannot execute files as
UNVERIFIED-BY-STUB beside PIXEL-UNVERIFIED, never as evidence.

**C-R6 amendment (Cycle-031 plan review, Finding 3) — resize and
endpoint clamping are separate probes, and the resize width pair
must actually move `effectiveVisible`.** (i) The paused-resize
evidence is captured BEFORE the C-R6 resize change and AFTER it,
from the S4 checkpoint and the S6 construction respectively, at one
named width pair whose `deriveLayout` outputs are filed first and
differ in `effectiveVisible` (candidate pair, to be confirmed by the
filed outputs before the probe counts: stage width 240 px — floored
font, window seats fewer rows — vs 720 px — ratio font, window seats
the full bound window; a pair whose two `effectiveVisible` values
are equal is not a resize probe and files as NO-PROBE). Asserting
recompute at two widths with the same visible count proves nothing
and is not evidence. (ii) Endpoint clamping (`elapsedMs()` at /
beyond `totalDurationMs`) is probed as its OWN one-change probe,
separate from the resize probe and from the seek/restart sequence
suite: seek beyond duration, play past duration, and restart from
beyond duration each assert the clamped exposed value and the
rendered count, filed separately in the S6 checkpoint. The per-cure
effect record for C-R6 names these three probes separately; any
effect the probes cannot distinguish prints BUNDLED (§5 amendment).

### Readability 76 — C-D1, C-D2

**C-D1 — Complete titles at the 11 px floor (deferred horizontal cure).**
Geometry route R-H1 (measured in §4): `layout.listWidthPct`
62.5 → **70.0**, `layout.numeralWidthPct` 31 → **26.5**,
`numeralSizeRatio` 0.3333 → **0.32**. At both phone widths the
36-character need (249.15 px @360 · 269.76 px @390, fit formula with
C-R5's CONFIG glyph constants) fits the widened column with ≥ +2.85 px
margin, and the two-digit numeral (93.31 px @360 · 101.09 px @390 at
ratio 0.32) fits its narrowed column with ≥ +2.09 px margin.
**Audit every title** (attempt-2 correction carried): the own-check
suite asserts `lineNeedPx(title) ≤ windowW` for **all 39 default
titles individually** (attempt 2's audit result, recomputed firsthand
for this plan: 37/39 fit the old column; exactly the two 36-char titles
— "I have a blocker. (Take It Offline)/" and "Thirsty (The Data Center
Next Door)/" — overflow; the next-longest title is 29 chars, need
202.95 px, fits both geometries) plus synthetic 33/34/35/36/40-char
lines under the new geometry (old geometry's threshold was 32 chars).
No font is ever reduced: the listing font stays floored at 11 px.

**C-D1 amendment (Cycle-031 plan review, Finding 2) — the
40-character synthetic is an expected-overflow CONTROL, not a fit
case.** The synthetic set in the audit above is corrected: under
R-H1 at 360 px the widened column is 252.00 px (70.0% of stage
width); a 40-character line needs, by the plan's own fit formula
with the C-R5 CONFIG glyph constants, `(41 × 0.6 + 0.45) × 11 =
275.55 px` — it does NOT fit, by 23.55 px. The own-check suite
therefore asserts the 40-char case as overflow-detected (need >
windowW, named as an expected-overflow control proving the audit
can see overflow), and the fit assertions run on the 39 default
titles individually plus synthetics 33/34/35/36 chars only. Any
filing that counts the 40-char synthetic as a fit pass is a suite
defect. The 36-char figures above are unchanged (249.15 px need vs
252.00 px column, +2.85 px margin).

**C-D2 — Floor re-priced against the new geometry + rendered frames.**
Re-price (measured, §4): the floor **stays 11 px** — it is the largest
floor compatible with 13 rows at 360 px under any priced route: at a
12 px floor and line-height 1.2 the 13-row need is 187.20 px vs Route
C's 182.25 px window (shortfall 4.95 px @360). The lens's "11 px small
for first-time reading" note is answered with this arithmetic, not
ignored. Rendered phone-size frames: **conditional charge** (RUN §1a
correction 5) — if a render route exists at Execute time, frames at
360/390 px file in the build record and the readability filing cites
them; if none exists, PIXEL-UNVERIFIED prints (A-C002-2) and no
readability closure is claimed beyond the source-bound model
(A-C003-3/A-C004-2: displayed bounds, border-inclusive, at every wrap
state the content can reach — rows are `nowrap` single-line by
construction, so the enumerated wrap states are: list row (1 line),
caption (its wrapped line count at both widths), prompt (1 line)).

**C-D2 amendment (Cycle-031 plan review, Finding 2) — the floor
re-price is corrected on both dimensions; 11 px is the largest
WHOLE-PIXEL floor, not the largest possible floor.** The sentence
above claiming 11 px is "the largest floor compatible with 13 rows
at 360 px under any priced route" overstates what its own
arithmetic shows and is replaced. Vertical, Route C at 360 px:
window 182.25 px ÷ (13 rows × 1.2 line-height) = **11.68 px** — a
12 px floor fails (need 187.20 px, shortfall 4.95 px), but any
floor up to 11.68 px passes vertically, so the 12 px failure alone
does not establish 11 px as the ceiling. Horizontal, R-H1 at
360 px: the 36-char need is `(37 × 0.6 + 0.45) × font = 22.65 ×
font` against the 252.00 px column, so the horizontal ceiling is
252.00 ÷ 22.65 = **11.13 px** — the binding dimension. The floor
decision is therefore re-priced as: effective ceiling =
min(11.68 vertical, 11.13 horizontal) = 11.13 px under Routes C +
R-H1; **11 px stands as the largest whole-pixel floor under that
ceiling**, with 0.13 px of horizontal headroom priced, and the
lens's "small for first-time reading" note is answered by BOTH
figures, not the vertical one alone. This re-price is route-bound:
if Route D or E binds at S0/S5, the floor is re-priced against that
route's window and the R-H1 column before S5 closes, and the
re-price prints in the S5 checkpoint (see §5 amendment, S5d). The
§11(i) tension is read with these corrected figures.

### Motion 88 — C-M1

**C-M1 — Restore the evidenced 13-row retention window.**
Same geometry stage as C-D1 (S5), route in §4: `type.lineHeightRatio`
1.3 → **1.2** and window reallocation `layout.listTopPct` 14 → **5**,
`layout.listBottomPct` 84 → **95** (window 70% → 90% of stage height),
`visibleLines` stays 13 and `deriveLayout`'s
`effectiveVisible = min(visibleLines, floor(windowH/rowH))` then yields
13 at both widths (need 171.60 px @360 ≤ 182.25 px; 185.83 px @390 ≤
197.44 px). Retention asserted at the evidenced checkpoints: at count
20 the window shows rows 8–20; at count 37, rows 25–37 (the attempt-2
lens's own frame readings), replacing attempt 2's 12–20 / 29–37.
Caption-overlap and prompt-overlap adverse prices are filed in §4/§7 —
they are this cure's named risks, priced before Execute, not after.

**C-M1 amendment (Cycle-031 plan review, Finding 2) — retention is
accepted on DISPLAYED bounds, not row-box fit, and no route binds
automatically.** Fitting 13 row boxes in the window is necessary
and not sufficient: a row counts toward retention at a named state
only if its displayed text bounds (border-inclusive, at that
state's wrap state) do not intersect the displayed prompt bounds
or the displayed caption bounds at that state. Acceptance is
checked at four states — opening (t = 0), count 20 (3000 ms),
count 37 (6000 ms), final hold (7000 ms, caption landed) — using
the bounds model filed in the §4 amendment (prompt ≈ top
3%–10.2% of stage height; caption ≈ 89.2%–97%). Consequences,
priced now: Route C's window (5%–95%) intersects the prompt band
at the opening and the caption band at the final hold, so Route C
binds only if the four-state displayed-bounds check shows the
intersecting rows' TEXT bounds (not merely their row boxes) clear
both bands, or the overlap is filed as this cure's priced defect
under §7's adverse case — box fit alone never binds it. Route D's
window ends at 91%, which still intersects the caption band
starting at 89.2%, so **Route D cannot automatically bind for a
specimen that requires a full caption reservation**; D binds only
if the S0 specimen re-observation (§4 amendment) shows the
specimen does NOT require a full caption reservation, or D's
four-state check passes on text bounds. If neither C nor D passes,
Route E binds with its exact geometry in the §4 amendment, the
Verify expectation becomes **12 rows** (§6.1/§6.5 amendments), and
C-M1 files as partial/deferred per the §2 amendment below.

## §2 — Deliberately deferred (INSTRUCTION §2.2, with reasons)

- **Rendered frames** — deferred only if no render route exists at
  Execute (A-C002-2 environment state, measured 4/4 blocked in
  Cycle-002 and again at attempt 2); the conditional charge in C-D2
  governs. Not a silent drop.
- **12-row fallback (Route E, §4)** — not a deferral taken now; it is
  the pre-filed re-deferral arithmetic if S5's Stage-0 re-observation
  binds the specimen layout against Routes C/D. It files with its new
  arithmetic (12 rows, shortfall 5.34% of H) or not at all.
- **Restart-resumes-playback semantics** — retained deliberately
  (C-R6); changing it would move the comparison page's contract.
- Nothing else. Every priced gap 1a–1f, both readability charges, and
  the motion charge map to a cure above; no §8 split is taken (this is
  a staged surgical cure set on one file, not a rebuild-from-scratch).

**§2 amendment (Cycle-031 plan review, Findings 2 + 7) — Route E
deferral is a C-M1 disposition, and the Observe record-depth gap
carries here as an open gap.** (i) If Route E binds, C-M1 is
carried explicitly as **PARTIAL / DEFERRED**: result = 12 rows
seated at the floor under Route E's exact geometry (§4
amendment); reason = Routes C and D both failed the four-state
displayed-bounds acceptance (C-M1 amendment) against a specimen
requiring a full caption reservation; residual risk = the motion
lens prices a 12-row window against evidenced 13-row frames
(§7 amendment prices this at −2…−6 motion, −1…−3 readability),
and the deferral re-files with Route E's arithmetic, never at
9 rows and never silently. This is a route-dependent deferral
priced in advance, not a §8 size split (see §9(g) amendment).
(ii) **Record-depth gap — OPEN, carried into the gate record.**
RUN.md §1b advanced this cycle ADVANCE-WITH-GAPS: record depth
was BELOW the gate's floor, with the full prior-return read
assigned to Plan. This plan cites the Attempt 2 priced gaps as
filed in scores.md (lines 63–66), build-record-attempt2.md, and
selected lens passages; it does NOT file a full verbatim read of
all five Attempt 2 Codex returns with a per-return disposition.
That gap is therefore carried OPEN beside this plan's pointer in
RUN.md §2 when the seat files it: either the seat records the
full T02 return read + disposition there before Execute opens,
or the gap prints in RUN.md §2 as an open gap with its consumer
(the Execute gate) — it is not discharged by this plan's filing,
and Execute's gate precondition (§5) reads it as filed in RUN.md
§2, in whichever of those two states it stands.

## §3 — Preservation plan (INSTRUCTION §2.3 · A-C004-1 · A-C003-2 · A-C005-1 · A-C010-1b)

Before ANY mutation (Execute Stage S0, before the working file is
touched):
1. Inventory + hash the item's COMPLETE prior evidence set:
   `recreation.html` · `recreation-attempt-1.html` · `comparison.html` ·
   `build-record.md` · `build-record-attempt2.md` · `scores.md` ·
   `segment.mp4` · all of `codex/` (attempt-1 instr/lens files) and
   `codex/attempt-2/` (instr + lens files). `comparison.html`'s
   referenced assets are inventoried with it (it references the
   recreation by interface, no external assets — verified at S0 and
   printed).
2. Baseline is **machine-written**: sha256sum output redirected to the
   baseline file in a write-first exec invocation (or script-generated),
   never hand-transcribed; at capture validate every hash is exactly
   64 hex chars and the file count matches the inventory; a malformed
   capture is refused and re-captured before any mutation; the original
   capture is preserved unedited (the attempt-2 baseline's truncated
   56-hex purity entry, scores.md Attempt 2 census, is inherited as a
   dated note, never silently rewritten).
3. Preservation copy: `recreation-attempt-2.html` as a **content copy**
   (never a hardlink) of the attempt-2 source, sha equal to
   `11b02a33…354757`; the suite asserts copy inode ≠ working-file inode.
   Destination is **create-once**: existing destination with matching
   sha → reused untouched; mismatching sha → execution stops and
   reports (A-C005-1).
4. The preservation census **re-verifies preserved copies AFTER the
   working file's first overwrite** (A-C004-1), not only at close.
5. `comparison.html` is re-pointed only if the recreation's interface
   changed (this plan changes no interface: `window.T02` commands,
   anchors, durations all preserved); its ORIGINAL side never changes.
   `scores.md` is append-only; prior content remains an exact prefix.

**§3 amendment (Cycle-031 plan review, Finding 4) — ORIGINAL asset
binding, attempt-tagged create-once paths, sealed firing pairs,
and prefix preservation by length + hash.** (i) The §3.1 inventory
binds `segment.mp4` explicitly as **the comparison's ORIGINAL
asset** — the asset `comparison.html` references directly for its
ORIGINAL side (its line 31) — inventoried and hashed as part of
the comparison evidence set, not only as a loose item file; any
census that lists `comparison.html` without `segment.mp4` in that
role is incomplete. (ii) Every output this attempt overwrites or
creates takes an **attempt-tagged, create-once path**, named here:
fit table → `fit-table-attempt-3.md` · config census →
`config-census-attempt-3.md` · rendered frames →
`frames-attempt-3/` (per width, per state) · build record →
`build-record-attempt3.md` · checkpoint copies →
`checkpoints-attempt-3/S<n>-source.html` + `S<n>-checks.md` ·
each lens firing's payload → `codex/attempt-3/instr-<lens>-attempt3-run<N>.txt`
and its return → `codex/attempt-3/lens-<lens>-attempt3-run<N>.md`
(the same tagging binds the plan-review and plateau firings in the
run directory). An untagged or reused path is a preservation
deviation. (iii) Each firing pair (payload + return) is **sealed**
— content-copied, sha256 recorded in the build record — BEFORE
any payload regeneration, any source change, or any re-fire; a
re-fire takes the next run<N> pair and never overwrites a sealed
pair. (iv) `scores.md` preservation is by **byte length + prefix
hash**: S0 records the prior file's byte length and the sha256 of
exactly that prefix; the post-append check re-computes both
against the new file's prefix. (v) The delta at close is computed
from the two FILED score vectors (Attempt 2's filed vector in
scores.md and Attempt 3's filed returns) by the mechanical guard;
neither filed vector is rewritten to make the arithmetic agree —
a disagreement files as an arithmetic defect, not an edit.

## §4 — 13-row feasibility measurement (A-C011-4, Plan-stage, measured)

Measured extents (attempt-2 filed geometry, recomputed firsthand for
this plan from build-record-attempt2.md §1 + the source's
`deriveLayout`): stage 16:9; @360 px → H 202.50, listing font 11.00
(floored), window 70% H = 141.75 px; @390 px → H 219.38, font 11.91,
window 153.56 px. Row height = font × lineHeightRatio. The 13-row need
as a fraction of H is width-independent in this construction (font and
window both scale with H once the ratio font governs; @360 the floor
font gives the same fraction by coincidence of the filed ratio).

| Lever set | 13-row need | Window | @360 margin | @390 margin | Verdict |
|---|---|---|---|---|---|
| Standing (lh 1.3, window 70%) | 185.90 / 201.31 px (91.8% H) | 141.75 / 153.56 | −44.15 | −47.75 | infeasible (attempt-2 deferral) |
| Line-height only (lh → ≤1.0, window 70%) | row ≤ 10.90 px < 11 px font | 70% | — | — | **impossible**: row height below 1.0 em |
| Window only (lh 1.3) | 91.8% H | needs ≥ 91.8% | — | — | **ruled out**: prompt + caption-need alone are 13.14% + ~10.2% |
| **Route C — PRIMARY (lh 1.2, window 90%: top 5 / bottom 95)** | 171.60 / 185.83 px (84.7% H) | 182.25 / 197.44 | **+10.65** | **+11.61** | **FEASIBLE** |
| Route D — FALLBACK (lh 1.1, window 80%: top 11 / bottom 91) | 157.30 / 170.34 px (77.7% H) | 162.00 / 175.50 | +4.70 | +5.16 | feasible, thinner margin |
| Route E — re-deferral (lh 1.15, reservations fully preserved, window ceiling 75.86%) | 164.45 / 178.09 px (81.2% H) | 153.62 / 166.42 | −10.83 | −11.67 | seats **12 rows** — the re-filed deferral arithmetic |

**Result: 13 rows at the 11 px floor are FEASIBLE — only under a
combined reallocation (line-height ratio AND window fraction move
together); either lever alone is arithmetically impossible.** Route C
is primary. Its two priced costs, named in advance: (i) caption zone
becomes an overlay at the final state — the caption (bottom offset 3%,
height ≈7.8% H, occupying ≈89.2–97% from top) overlaps the window's
bottom ≈5.8% (≈0.9 row) only from 7000 ms, when the caption lands;
(ii) prompt band (top 3% + ≈7.2% height, bottom ≈10.2%) overlaps the
window's top rows at early counts under listTop 5%.
**Stage-0 binding (A-C006-1):** before S5 binds either route, Execute
re-observes the specimen segment's frames (segment.mp4, evidence in the
artifact directory) for the specimen's own list-window fraction and
prompt/caption placement; if the specimen binds prompt-above-list with
a full caption reservation, Route C is falsified as construction and
Route D binds; if D is also falsified, Route E files as the deferral
with its arithmetic above — the deferral never expires silently and
never re-files at 9 rows. Horizontal feasibility (C-D1/R-H1) is
measured in §1: feasible at both widths with ≥ +2.09 px margins on
both columns. Floor re-price (C-D2): 11 px stands; 12 px is infeasible
@360 under Route C by 4.95 px.

**§4 amendment (Cycle-031 plan review, Finding 2) — specimen
identification filed at Plan (INSTRUCTION §2.1 / A-C006-1), the
displayed-bounds acceptance model, and Route E's exact geometry.**
(i) **Specimen identification.** Evidence: `segment.mp4` in the
item home — the ORIGINAL cut, segment window **0:13.5–0:21.5** of
the source specimen (scores.md header: packet P1, "Look What I
Can Do" @ 0:14–0:21), 8.000 s, local evidence only. **Time
origin: t = 0 in the recreation == the segment's first frame
(segment time 0.0 s == source ≈0:13.5)**; every anchor in this
plan is read on that origin. Identifying states for the S0
re-observation, named in advance: opening frame (segment 0.0 s,
full prompt already displayed, count 0) · count-20 frame
(recreation 3000 ms) · count-37 frame (recreation 6000 ms) ·
final hold (recreation 7000 ms, count 39, caption landed). S0
files its frame observations against these four named states —
an S0 report that does not identify its frames by segment time
and this origin does not discharge the Stage-0 binding.
(ii) **Displayed-bounds acceptance model.** Prompt bounds:
top 3% + prompt-font height ≈7.2% of stage height ⇒ band
≈3%–10.2%. Caption bounds: bottom offset 3%, height ≈7.8% ⇒
band ≈89.2%–97%. Row bounds: per the bound route's window and
row height at each of the four states above. A route is accepted
at a state only when every visible row's displayed TEXT bounds
are disjoint from both bands at that state (C-M1 amendment);
row-box containment inside the window is reported separately
and never substitutes. Route C (window 5%–95%): intersects both
bands as boxes — acceptance rests entirely on the text-bounds
check. Route D (window 11%–91%): its bottom at 91% still
intersects the caption band from 89.2% — **if the S0 observation
shows the specimen requires a full caption reservation, Route D
is NOT bindable on box fit**; it binds only on a passing
text-bounds check at the final hold. (iii) **Route E exact
geometry** (replaces the table's summary row as the bindable
form): `type.lineHeightRatio` **1.15**, `layout.listTopPct`
**11**, `layout.listBottomPct` **86.86** (window 75.86% of stage
height — prompt band fully above, caption band fully below),
`visibleLines` **12**. Check: @360 window 153.62 px, row height
11 × 1.15 = 12.65 px, 12 rows need 151.80 px ≤ 153.62 px ✓;
@390 window 166.42 px, row height 13.70 px, 12 rows need
164.45 px ≤ 166.42 px ✓; 13 rows need 164.45 / 178.09 px —
infeasible at both widths, which is the deferral arithmetic.
If E binds, every "13 rows" expectation in §6.1/§6.5 reads 12,
and §7's E exposure applies.

## §5 — Staged checkpoints (named in advance · A-C010-1a + A-C012-4 + A-C024-2)

Attribution prints BUNDLED unless these checkpoints isolate an effect.
Each stage's Execute work may not begin until the PRIOR stage's
checkpoint is filed create-once; the builder names each checkpoint path
in its interim stage report as the stage closes, and the seat reads
both files back before the next stage opens (A-C024-2). A reconstructed
checkpoint files as RECONSTRUCTED with probe evidence, never as a
stage copy. Every checkpoint = source copy (content copy, inode ≠
working file, sha frozen at filing) + that stage's own-check output.

- **S0** — Preservation + baseline (§3) + specimen geometry
  re-observation (§4 Stage-0 binding). Checkpoint: pre-edit source copy
  (= `recreation-attempt-2.html` preservation copy) + inventory/baseline
  validation output. No source edit exists before S0 closes.
- **S1** — C-R1 recovery validation + effective-table re-validation.
- **S2** — C-R2 short-list policy + C-R3 duration policy.
- **S3** — C-R4 strict parsing + anchor-count guard.
- **S4** — C-R5 CONFIG literals (filed list complete) + literal census.
- **S5** — Geometry: C-M1 (Route C or D per S0) + C-D1 (R-H1) + C-D2
  floor re-price print.
- **S6** — C-R6 runtime-sequence evidence on the final source +
  pre-scoring legs (§6) + payload manifest. S6 changes no construction
  except C-R6's two named changes, which land before its suite runs and
  are checkpointed as S6a if the seat requires separation.

**§5 amendment (Cycle-031 plan review, Findings 3 + 4) — bundled
stages are split into one-change checkpoints/probes, the
post-overwrite census moves into S1, and S6 is redefined as the
LAST construction checkpoint.** The stage list above is amended
as follows; where this amendment and the list differ, this
amendment governs. (i) **S2 splits**: **S2a** = C-R2 short-list
completion ONLY (construction + its tests, checkpoint filed);
**S2b** = C-R3 duration policy ONLY, built on the S2a checkpoint
(joint-tuple gate + its tests, own checkpoint). Malformed-input
recovery is S1 alone — no stage after S1 changes recovery,
short-list, and duration effects together. (ii) **S5 splits into
one-change probes from a common checkpoint**: S5 opens from the
filed S4 checkpoint; **S5a** horizontal allocation ONLY (R-H1
widths) · **S5b** numeral scale ONLY (ratio 0.32) · **S5c**
vertical retention ONLY (line-height + window, bound route) ·
**S5d** floor decision print (no construction; the C-D2 re-price
against the bound route) — each probe is a branch from the SAME
S4 checkpoint with its own check output filed, so each effect is
recorded separately; the combined S5 construction is then
assembled from the probed changes and checkpointed as S5 with
the four probe outputs cited. S4→S5 separation alone does NOT
isolate the geometry bundle; the probes do, and any effect a
probe cannot distinguish still prints **BUNDLED**. (iii)
**Per-cure effect record**: each checkpoint/probe files its
cure's effect (pass/fail per named assertion, with values) at
filing time; lens-score movement at the wave is recorded as
**BUNDLED** wherever these records and the returns cannot
distinguish which cure moved a lens — no post-hoc per-cure score
attribution is filed. (iv) **Census timing (Finding 4)**: the
post-overwrite preservation census (§3.4) runs **inside S1,
immediately after the first working-source write**, and its
output files in the S1 checkpoint; §10 step 5 is read at that
position, not after S6. A census first run at close is a staging
deviation. (v) **S6 redefined**: S6 is the last CONSTRUCTION
checkpoint — C-R6's two named changes + its three separate
probes (C-R6 amendment: sequence suite · before/after
paused-resize at a width pair that changes `effectiveVisible` ·
endpoint clamping) — and NOTHING else. The §6 own-check legs,
the sweep, and payload assembly run AFTER S6 closes, in §6's
order; the list entry above reading "S6 … + pre-scoring legs
(§6) + payload manifest" is superseded by this sentence.

Gate precondition (INSTRUCTION §2.6, A-C015-1 mechanical consumer):
Execute does not open until RUN.md §2 names the cycle's skeleton board
entry id + heartbeat beat and both are read back from their files; a
missing/failed read-back blocks Execute and prints D-SKELETON.

## §6 — Verify checklist (instruments, not intentions)

All legs run on the NEW attempt's source, after S6, BEFORE the
re-scoring wave fires (A-C008 pre-scoring step, non-skippable):

1. **Measured-fit leg** (recreation guard, by reference): output filed
   as `fit-table.md` in the artifact directory — displayed-state model
   source-bound (A-C004-2): 13-row fit at both widths under the bound
   route, every-title fit (C-D1 audit, all 39 + synthetics), numeral
   two-digit fit, caption reservation/overlay state at 7000 ms, prompt
   state — each at its enumerated wrap states (A-C006-3).
**§6.1 amendment (Cycle-031 plan review, Findings 2 + 4) —
displayed bounds and tagged path.** The measured-fit leg asserts
DISPLAYED prompt, caption, and row text bounds (not row boxes) at
the four named states (opening · count 20 · count 37 · final
hold) under the bound route, per the §4 amendment's bands; a leg
that reports only box containment does not satisfy this step.
Its output files at the attempt-tagged path
`fit-table-attempt-3.md` (§3 amendment) — the untagged name in
step 1 is superseded. If Route E bound, this leg's row
expectation is **12 rows**, and the leg prints the E geometry it
measured against.

2. **Config-census leg**: output filed as `config-census.md` — every
   CONFIG key (including all C-R5 keys) carries a consumed effect
   mapping (A-C006-2); literal census vs whitelist (A-C008-3).
   RUN.md cites each leg's path + hit count; a missing leg prints the
   wave INCOMPLETE.
3. **Generative sweep, census-derived (A-C028-2 + A-C029-1 +
   A-C030-3)** — enumerated MECHANICALLY from the intake census below,
   filed in the build record beside the sweep; a hand-listed corpus
   prints as NAMED-CASE-ONLY and the class stays open.
   *Intake census (enumeration method: every field the intake code
   reads, read from the source — CONFIG block keys, the
   `applyOverrides` query keys, the direct-edit surface, the
   `window.T02`/postMessage command surface, the resize route):*
   fields — `checkpoints[]` (timeMs, count) · `captionAtMs` ·
   `totalDurationMs` · `finalCount` · `lines` · `visibleLines` ·
   `speed` · `pulseScale` · `pulseMs` · `numeralColor` · `palette.*` ·
   `captionText` · `captionAccentChar`; routes — URL override ·
   direct CONFIG edit · command (play/pause/restart/seek) · resize;
   value classes — valid · reordered · duplicate · negative · zero ·
   non-finite · junk-suffixed · fractional · empty · missing/null
   group · oversized magnitude (400-nines) · single oversized token.
   *Axes beyond field×route×value-class (A-C030-3):* **(a) recovery
   axis** — for every invalid input, the post-input retained state
   (effective table, warnings, rendered count at named times) asserted
   per route, including route-parity of retained state; **(b)
   derivation-order axis** — every derivation (finalCount alignment,
   effective-table derivation + re-validation, duration gate, caption
   clamp) runs against the fully-initialized CONFIG, and the sweep
   includes cases only an edit-introduced value can reach (e.g. a
   direct-edited checkpoint table whose recovery must survive a forced
   second derivation) evaluated at the derivation's actual point.
   Explicit test domains ride the census (A-C029-1 refinement):
   missing/malformed containers, value boundaries, coupled overrides
   (lines × checkpoint2, speed × duration); intentional route
   differences file beside their expected outcomes — a route difference
   without a filed expected outcome is an escape.
**§6.3 amendment (Cycle-031 plan review, Finding 1) — expected
retained-state cases, filed with the sweep, each asserting the
post-input retained state (effective table · warnings · rendered
count at named times) per route.** **R-1 null entries:** a
checkpoint table containing a null entry (and, as siblings, a
non-object entry and a missing-field entry) ⇒ shape rejection
before any dereference, no throw, effective table == validated
default, named warning, rendered count follows the default table
at 0 / 3000 / 7000 ms. **R-2 one-line swap with a valid
fractional `checkpoint2`:** lines swapped to 1 line,
`checkpoint2` set to a valid fractional time between its
neighbours ⇒ the fractional time survives verbatim as an anchor
time in the derived table (C-R4 amendment), the derived table
passes the DERIVED validator (plateaus permitted, terminal count
reserved for the final anchor), the single line completes at the
final anchor time, caption point unmoved. **R-3 duration shorter
than the default final anchor:** `totalDurationMs` edited to
6000 ms against the default 7000 ms table ⇒ outcome (d) of the
C-R3 amendment: duration reverts to 8000 ms, schedule ==
default, completion at 7000 ms, joint-rejection warning filed.
**R-4 coupled override survival:** `lines` × `checkpoint2` as in
R-2 at the default line count and at a 3-line swap ⇒ in both,
the lawful edited anchor's time is preserved through derivation
and only its count is re-derived. A case without a filed
expected retained state is not a sweep case.

4. **Effect mappings (A-C002-1)**: the own-check suite asserts
   index→effect and override→parsed-behaviour mappings (C-R4's parser
   outcomes, C-R2's completion times, C-R6's sequence states), never
   counts alone. Validation completeness probing per A-C011-2
   (adversarial set beyond the named cases: non-finite, null groups,
   warning display paths, oversized token, resize recompute — all in
   the sweep above).
5. **Swap test** (logic level minimum; pixel where a browser exists):
   1/2/3/39/50-line swaps + a swapped title set incl. 36-char titles —
   schedule, fit, and retention asserted per swap.
**§6.5 amendment (Cycle-031 plan review, Finding 2) — swap
expectations corrected.** (i) The 40-char synthetic in any swap
title set is an **expected-overflow control** (275.55 px need vs
252.00 px column @360, C-D1 amendment): the swap asserts its
overflow is DETECTED, never that it fits. (ii) If Route E bound,
the retention assertion in every swap is **12 rows** at the
evidenced checkpoints, and the swap record prints the E geometry
and the C-M1 PARTIAL/DEFERRED disposition (§2 amendment) beside
the result.

6. **Purity grep + asset inventory**: zero specimen-media hits; asset
   inventory = the single HTML file; caption/lines overrides still
   text-only on every path (attempt-2 purity 100 preserved by
   construction — no new HTML-parsing path is introduced).
7. **Comparison check**: interface unchanged → comparison.html
   unmodified, ORIGINAL side untouched, census-confirmed (§3.4).
8. **Five-lens re-score wave** (`guards/codex-rescore-wave.md`):
   score-blind payloads, allowlist-only (source + neutral own-check
   packet; A-C005-2), payload manifest filed before firing (A-C010-1c)
   with the anchor scan covering filenames/labels/**source comments**
   (A-C008-4 — the source is neutralized of cure codes before payloads
   generate); per-lens scratch cwd with allowlist copies (A-C021-1) +
   trust flag (A-C022-2); session read scope printed (A-C019-2);
   returns `-o`-written to workspace scratch then content-copied
   create-once with sha verified (A-C029-3); prior average named in
   seat tasking ONLY, never inside a payload.
**§6.8 amendment (Cycle-031 plan review, Finding 5) — the neutral
own-check packet is defined by schema, the assembled streams are
read back, and each stream is bound to the final source hash.**
(i) **Packet schema (exhaustive)**: the neutral own-check packet
contains ONLY current-state check identifiers, the inputs each
check ran, its expected value, its observed value, and its
verification limits (e.g. PIXEL-UNVERIFIED / UNVERIFIED-BY-STUB
where they apply). Anything else is outside the packet: no
headings or labels carrying prior-state claims (a heading such as
"restored 13 rows" anchors the lens without containing a prior
score and is prohibited verbatim as a class), no diagnostic
comparing any value against Attempt 2, no cure names/codes, no
cure→check mapping. Prior-state commentary and cure mappings
live ONLY in the seat record (scores.md filing, build record).
(ii) **Read-back before firing**: the seat reads back each
COMPLETE assembled lens stream (header + source + packet +
manifest), the payload manifest itself, and the actual session
read scope for that firing, and files that read-back in the
build record; a stream the seat has not read back in full does
not fire. The allowlist/comment scan in step 8 is a pre-check,
not a substitute for this read-back. (iii) **Hash binding**: each
inspected stream is bound to the FINAL source hash — the sha256
of the source AFTER comment neutralization (A-C008-4) and after
the associated own-check rerun on the neutralized source; the
manifest records that hash per stream, and any source change
after inspection voids the inspection and re-runs (ii)+(iii).

9. **Mechanical guards 1–3** (`guards/guards.md`): delta arithmetic
   recomputed from filed returns of both attempts (scale-validated);
   attempt-preservation census sha before/after; floor-rule gate check
   (WHY present if non-beating, §8).
10. **jev-plateau call point** (§5.4) if the attempt does not beat
    86.4 — and class-level filings under §8 fire regardless of the
    average (A-C029-2).
11. **Tier hand-off on PASS**: file to the style-library board with
    the scores.md pointer; the tier move is style-library's act.
12. PIXEL-UNVERIFIED prints unless a render route exists (C-D2);
    UNVERIFIED-BY-STUB prints for any mounted behaviour the runtime
    harness cannot execute (A-C030-2).

**§6.9–11 amendment (Cycle-031 plan review, Finding 6) — the
close order is fixed: scores, then WHY, then plateau judgment,
then disposition, then tier.** Steps 9–11 above are executed in
this amended order, which supersedes their listed order where
they differ: **(9a)** mechanical guards run (delta recomputed
from the filed returns of both attempts per the §3 amendment —
filed vectors, never rewritten); **(10a)** the Attempt 3 scores
and the signed delta are APPENDED to scores.md (prefix preserved
by length + hash, §3 amendment); **(10b)** if the new average is
≤ 86.4, the WHY is filled from the §8 scaffold and FILED in that
same scores.md entry — before any plateau call; a Verify that
checks "WHY present" against an entry the WHY was never appended
to is a sequencing defect, and this step is the explicit append
step the original checklist lacked; **(10c)** the `jev-plateau`
call fires ON the filed WHY, judged with the two filed score
vectors, the cited lens returns, the build record, and the stage
checkpoints/probe records (§5 amendment) as its input set;
**(10d)** the plateau disposition is recorded in the scores.md
entry and the run record BEFORE close; **(11)** the tier
hand-off on PASS fires per §0's amendment — with the exact
Attempt 3 scores.md pointer (file + Attempt 3 entry) — whether
or not a WHY was owed, and a WHY owed on a PASSING average
(the 86.0 / min-70 case) is filed and judged identically.

## §7 — Per-lens delta targets + adverse pricing (A-C014-1 + A-C027-1)

Adverse prices are derived from each lens's likely basis (its attempt-2
return's own terms), per lens, for the whole wave — not only the lens
owning any single cure.

| Lens | Prior | Target | Central route | Adverse case (basis + price) |
|---|---|---|---|---|
| Motion | 88 | ≥88 held, aim 90 | 13-row retention restored on the lens's own frame terms (8–20 / 25–37): +2…+4 | Route C's prompt/caption overlays judged unfaithful to the specimen layout, or S0 falsifies C and D binds at thinner margin: **−0…−6** → 82–88 |
| Timing | 100 | 100 held | Default table bit-identical (C-R2 guard); policies bind non-default counts only: 0 | A policy leaks into the default derivation (anchor moved, caption desync): **−5…−15** → 85–95. Guard makes this a suite failure before firing, not a hope |
| Purity | 100 | 100 held | No new parsing/asset path; CONFIG keys are data: 0 | C-R5 key migration accidentally introduces a markup path: **−0…−2** → 98–100 |
| Reusability | 68 | **≥70 floor, aim 80** | All six priced gaps cured with sweep-grade evidence: +10…+14 → 78–82 | The census-derived sweep still misses a sibling class (the A-C029-1 pattern: an unenumerated field/route or a value-domain escape on an exercised field): **−0…+2 net** → 68–70. This is the attempt's binding risk |
| Readability | 76 | ≥82 | Complete titles (+~4 on the lens's priced defect) + 13-row retention raising per-title dwell from ~1.2–1.6 s: +6…+9 → 82–85 | lh 1.2 row crowding or caption overlay priced as clipping, floor staying 11 px re-priced against the lens: **−3…+0** → 73–76 |

Central total ≈ 90. Adverse total ≈ 82+85+98+68+73 = 406/5 = 81.2 —
**the adverse case FAILS**, and its sufficient route is named:
reusability alone (68 in adverse) breaches the floor regardless of the
other lenses. PASS therefore depends on the reusability sweep closing
its class, not on another lens over-delivering; that dependence is
printed here per the A-C011-4 gate's re-pricing rule.

**§7 amendment (Cycle-031 plan review, Findings 2 + 3) — Route E
exposure priced, floor bands corrected, attribution discipline.**
(i) If Route E binds: motion adverse widens to **−2…−6** (a
12-row window priced against evidenced 13-row frames; central
route for motion is then "12 rows cleanly seated," aim held at
≥88 only on a passing text-bounds record) and readability
adverse widens to **−1…−3** (one fewer row of dwell context);
the central total drops by the same amounts and the attempt's
pass still depends on the reusability floor term, unchanged.
(ii) The readability central/adverse bands are read with the
C-D2 amendment's corrected floor arithmetic (effective ceiling
11.13 px, horizontal-bound) — no band in the table rests on the
superseded "11 px is the largest possible floor" claim.
(iii) Attribution: per-lens movements are claimed per cure ONLY
where the §5 amendment's checkpoint/probe records isolate the
effect; S5's four probes (S5a–S5d) and S2's split (S2a/S2b) are
the isolation instruments for this wave, and every other
cure→lens movement in the close filing prints **BUNDLED**.

## §8 — WHY scaffold (pre-drafted · jev-plan-exit §2.6 · jev-plateau dimensions)

Filed here at Plan so a non-beating close is filing, not invention.
The scaffold does not pre-judge the outcome.

**Average-floor WHY slots** (owed iff new avg ≤ 86.4, INSTRUCTION §5.4):
per cure C-R1…C-R6, C-D1, C-D2, C-M1 — outcome slot (landed / partial /
not landed, with its stage checkpoint as evidence) · lens that priced
the residue (return cited by file) · mechanism hypothesized · next
attempt's different construction (a "try again harder" consequence
fails jev-plateau: consequence = 0 → PLATEAU-UNNAMED).

**Class-bound plateau tests (A-C029-2)** — each fires per class on its
own legs regardless of the attempt's average, and a firing + its
disposition file in the attempt-3 scores.md entry whether or not a
WHY is owed. Legs per class: (a) the class is priced in the SAME terms
as attempt 2's return; (b) Δ ≤ 0 on the class's primary lens (for
sub-class charges, the lens's class-attributed deduction does not
fall); (c) the cure stage landed (checkpoint filed in order + its
suite green on the final source).

1. **Recovery-validation class** (primary lens: reusability) — the
   class this scaffold is built around. Same terms = any of: invalid
   anchor times surviving rejection · a malformed table throwing ·
   the effective table unvalidated after recovery · retained state
   diverging by route. If it fires: the class RESTS as constructed —
   attempt 4 does not re-tune this validation; it changes the family
   (schema-derived validation generated from the renderers' own field
   reads) or the item rests. Evidence jev-plateau will need: S1
   checkpoint, the sweep's recovery-axis output on the final source,
   the reusability return's recovery passage.
2. **Short-list/duration policy class** (reusability) — same terms =
   completion time ≠ final anchor for any tested count, or a schedule
   ending after duration reaching render. Firing binds the policy
   family (rescale-with-duration replaces reject-and-warn) next time.
3. **Strict-parsing class** (reusability) — same terms = any
   junk-suffixed/fractional-truncated acceptance on any route.
4. **CONFIG-literal class** (reusability) — same terms = any filed-list
   literal still outside CONFIG, or a new key bound-but-unconsumed.
5. **Runtime-sequence class** (reusability) — same terms = sequence
   behaviour asserted only at construction level, or paused-resize
   still not re-rendering the visible window.
6. **Horizontal-fit class** (readability) — same terms = any default
   title's full text unreadable at either phone width at the floor.
   Firing after R-H1 binds a construction-family change for the
   column (not a further width trade against the numeral).
7. **Retention-window class** (motion) — same terms = retention window
   < 13 rows at either evidenced checkpoint. If S5 filed Route E, this
   test's leg (a) is priced against the re-filed deferral arithmetic
   (12 rows), and the class disposition is the deferral itself, filed,
   not a plateau claim.

**Stuck-lens hypothesis (pre-committed):** if any lens sticks, it is
reusability, stuck on sweep completeness — the lane's recurring class
(A-C028-2/A-C029-1: two cycles of green named-case corpora pricing new
siblings). The discriminating evidence is the §6.3 census + sweep
output measured against the reusability return's findings, filed
either way.

**§8 amendment (Cycle-031 plan review, Finding 6) — the scaffold
is completed: a C-D2 class slot, evidence + disposition slots
for every class, an attribution-limit rule, and the
reusability-up / geometry-down stall case.** (i) **Class 8 —
Floor / visible-legibility class (C-D2; primary lens:
readability).** Same terms = any residual finding that titles or
rows are not visibly legible at the bound floor/route: the floor
re-price (C-D2 amendment: ceilings 11.68 vertical / 11.13
horizontal) priced too low by the lens, a row's text bounds
intersecting the prompt/caption bands at a named state, or
first-time-reading legibility still deducted at the floor.
Evidence slot: S5d floor print + §6.1 displayed-bounds leg +
the readability return's floor/legibility passage. Disposition
slot: (filed at close) fired / not fired · cure stage landed
(S5d + bound route) · next-attempt family if fired (a floor or
route family change, not a re-price of the same numbers).
(ii) **Evidence + disposition slots for classes 2–7** — each
class test in the list above is filed at close with BOTH slots,
in the form class 1 already models: *evidence slot* = the named
checkpoint(s)/probe record(s) for that class's cure stage (S2a
for short-list, S2b for duration, S3 for parsing, S4 for
CONFIG-literals, S6 probes for runtime-sequence, S5a for
horizontal-fit, S5c for retention) + the sweep/leg output on the
final source + the primary lens return's passage for that class;
*disposition slot* = fired / not fired · if fired, the family
change or rest the class's own text prescribes · if not fired,
the evidence that priced it not fired. A class filed without
both slots is an incomplete filing, whether or not a WHY is
owed. (iii) **Attribution limit**: where a lens return gives NO
class-level deduction (no passage pricing that class), the
class's filing records exactly that — "no class-level deduction
in the return; class Δ not attributable" — and does NOT borrow
the aggregate lens delta as the class's delta. Leg (b) of the
class tests is evaluated only where the return supports a
class-attributed figure. (iv) **Stall-interaction case,
pre-committed**: reusability improves (e.g. 68 → high-70s on the
S1–S4/S6 probes) while geometry regresses (motion and/or
readability fall on the bound route's overlaps) and the average
stalls at ≤ 86.4. This case owes a WHY even though the blocking
lens moved, and its discriminating test is: compare the S5a–S5c
probe records and the §6.1 displayed-bounds leg against the
motion/readability returns' overlap passages — if the returns
price the SAME states the bounds leg measured as intersecting,
the stall is attributed to the geometry bundle (BUNDLED across
C-M1/C-D1, per-probe where S5a–S5c isolate it) and the next
attempt changes the ROUTE family, not the reusability family;
if the returns price states the bounds leg measured as clear,
the bounds model itself is the named defect (an A-C004-2 proxy
failure) and the next attempt changes the MODEL family first.
Either branch files with its evidence; "both families tried
harder" is not a disposition.

## §9 — Failure-point evaluation (jev-plan-exit §2.4, priced or ruled out)

- **(a) Big-rebuild attribution risk** — RULED OUT as form (no rebuild;
  nine surgical cures in six stages), with one priced residue: S5
  carries C-M1 + C-D1 + C-D2 on one geometry change, so their lens
  attribution prints **BUNDLED** unless S4/S5 checkpoint separation
  isolates the constants change from the value change; the §4 route
  arithmetic is the pre-registered attribution basis.
- **(b) Cure interactions** — PRICED: C-R2/C-R3 × timing (default-table
  bit-identity guard, §7); C-R1 × derivation order (recovery must run
  after full CONFIG initialization — §6.3 axis (b) tests exactly
  this); C-M1's lh 1.2 × readability (row crowding, §7 adverse);
  C-D1's numeral ratio 0.32 × readability/motion (numeral dominance
  0.3333 → 0.32 of stage height — small, priced −0…−2 inside the
  readability adverse case); C-R4 × lawful overrides (exact fractional
  values now accepted where truncation silently rounded — behaviour
  change is the cure, printed in the build record).
- **(c) Prior-attempt overwrite / early comparison re-point** — priced
  in §3 (S0 before any touch, create-once, post-overwrite census);
  comparison re-points only on interface change, and none is planned.
- **(d) Anchor leak** — §6.8's allowlist + manifest + comment scan +
  scratch-cwd + read-scope print; prior average lives in seat tasking
  and this plan only, never in a payload.
- **(e) Instrument-change misread** — RULED OUT: same five-lens
  instrument, both attempts (RUN.md §1); no four-lens figure enters
  any delta.
- **(f) Fan-out cross-contamination** — this plan binds exactly one
  artifact directory (T02's, named in the header); checkpoint and
  payload paths are item-scoped; parallel items write elsewhere.
- **(g) Size-split evasion** — RULED OUT: §2 lists the only deferrals
  with reasons; the cure set is staged, not split-and-dropped.
- **(h) Item-specific: recovery throwing on its own input** — the
  attempt-2 defect's sharpest form (empty specimen dereference in
  `normalizeCheckpoints`); C-R1's trusted-basis construction removes
  the candidate from the recovery path entirely, and the sweep's
  recovery axis asserts no-throw per case, not per class average.
- **(i) Item-specific: S0 falsifying the geometry routes** — priced in
  §4 (Route D fallback, Route E re-deferral with arithmetic); a
  falsification is a premise amendment under A-C008-1 filed in the
  build record, never a silent route swap.

**§9 amendment (Cycle-031 plan review, Findings 1 + 5 + 7) —
(b), (d), (g), (h) are re-priced under the amended cures.**
(b) *Cure interactions, updated:* the C-R2/C-R3 interaction is
now governed by the joint-tuple gate (C-R3 amendment, outcomes
(a)–(d)) and the terminal-count reservation (C-R2 amendment);
the interaction "derived plateau vs candidate validator" is
closed by construction (two validators, C-R1 amendment) and its
escape — a derived table reaching any validator that rejects
plateaus, or a candidate reaching the derived validator — is a
named suite failure in §6.3, not a priced risk. (d) *Anchor
leak, updated:* the leak surface now expressly includes the
neutral own-check packet copied from stage output (Finding 5);
§6.8's amendment (schema-exhaustive packet · full-stream
read-back · hash binding after neutralization + rerun) is the
priced control, and prior-state commentary/cure mappings are
confined to the seat record. (g) *Size-split, reasoning
completed (Finding 7):* RULED OUT on evidence, not assertion —
the cure set is bounded and staged (9 named cures, stages
S0–S6 as amended, one file), and EVERY priced Attempt 2 gap
(1a–1f, both readability charges, the motion charge) maps to a
named cure in §1 (§0 cure count); no cure is split off, so no
§8 rebuild split is required as written. The one route-dependent
exception is pre-filed, not evasive: if Route E binds, C-M1
carries as PARTIAL/DEFERRED with its 12-row result, reason, and
residual risk (§2 amendment), and §8 class 7 prices it as that
deferral. (h) *Recovery throwing, updated:* the throw surface
now includes the VALIDATOR's own dereference-before-shape-check
(source lines 81–91); C-R1 amendment (ii) closes it in both
validators and in `normalizeCheckpoints`, and §6.3 case R-1 is
its filed probe.

## §10 — Execute checklist (in order; INSTRUCTION §3 binds it)

1. S0: inventory + machine-written baseline validated (64-hex, count)
   → preservation content copy `recreation-attempt-2.html` (inode
   asserted) → specimen geometry re-observation filed (§4 binding).
2. Seat skeleton read-back confirmed in RUN.md §2 (D-SKELETON gate,
   §5) before the first source edit.
3. S1…S6 in order, each stage: build → stage suite green → checkpoint
   filed create-once (source copy + check output) → stage report
   naming the checkpoint path → seat read-back before the next stage.
4. Config-first throughout: every construction value lands in CONFIG
   before its consumer reads it; no specimen media, no traced assets,
   text-only DOM insertion on every path (purity law).
5. Post-first-overwrite preservation census re-verified (§3.4).
6. Swap test before any wave (§6.5); comparison.html untouched unless
   the interface changed (it does not under this plan).
7. Build record filed (attempt-3): geometry pricing, stage ledger,
   sweep census + outputs, stub-limit prints, final source sha256
   recorded before any payload is assembled.
8. Any premise contradiction found mid-Execute files a MID-CYCLE
   PREMISE AMENDMENT (A-C008-1) and builds to the evidence.

**§10 amendment (Cycle-031 plan review, Findings 2 + 3 + 4) —
checklist positions corrected.** The numbered list above is
executed with these position changes, which govern where they
differ: (i) step 1 (S0) additionally files the specimen
identification record — frames at the four named states on the
§4 amendment's time origin (segment window 0:13.5–0:21.5, t = 0
== segment start) — and the §3 amendment's inventory binding
(`segment.mp4` as the comparison's ORIGINAL asset) and the
scores.md prefix byte-length + hash capture. (ii) Step 3's
"S1…S6 in order" reads S1 · S2a · S2b · S3 · S4 · S5a–S5d
probes → S5 assembled · S6, per the §5 amendment; **the
post-overwrite preservation census (step 5) executes inside
S1, immediately after the first working-source write**, and
step 5's position in this list is a cross-reference to that
act, not a second, later census. (iii) Step 7's build record
is filed at `build-record-attempt3.md`, and the fit table,
census, and frames it cites carry their attempt-tagged paths
(§3 amendment); every firing pair it records is sealed before
any regeneration, source change, or re-fire. (iv) S5 does not
close until the four-state displayed-bounds acceptance
(C-M1/§4 amendments) is filed for the bound route — box fit
alone does not close S5 — and, if Route E bound, the S5 record
carries the C-M1 PARTIAL/DEFERRED disposition for the §2/§9
gate record.

## §11 — Premise conflicts found at Plan

None blocking. Two priced tensions, filed rather than smoothed over:
(i) RUN §1a correction 5 invites re-pricing the 11 px floor upward
(the lens found 11 px small); §4's arithmetic shows any higher floor
breaks the 13-row cure at 360 px — the floor stays 11 px and the
tension is answered with the shortfall figure (4.95 px at 12 px).
**Correction (Cycle-031 plan review, Finding 2):** tension (i)'s
arithmetic is superseded in form by the C-D2 amendment — the
4.95 px figure proves a 12 px floor fails VERTICALLY, not that
11 px is the largest possible floor; the binding ceiling is
11.13 px (horizontal, R-H1 column), the vertical ceiling is
11.68 px (Route C), and 11 px stands as the largest whole-pixel
floor under the binding ceiling. The tension's conclusion (floor
stays 11 px) is unchanged; its stated reason is the corrected
pair of figures.
(ii) Attempt 2's deferral text prices widening the list column past
66.7% as leaving the numeral column too narrow; C-D1's route answers
it by pricing the numeral size ratio down to 0.32 in the same stage —
a trade the deferral did not contemplate, priced in §7, not a
contradiction of its arithmetic (which this plan recomputed and
confirms at the standing values).

## § Plan-review consumption (Cycle-031)

Consumed: `codex-plan-review-T02-return.md` (verdict: PLAN:
REVISE BEFORE GATE), read in full against the pre-review plan.
Every finding was landed by amending the plan's operative text —
the cure constructions, checklists, probes, bands, and scaffold
themselves now carry each fix; this section is the disposition
record, not the fix. Findings: **7 · LANDED: 7 · REBUTTED: 0.**
Nothing was built under this consumption; Execute remains gated
on the plan-exit disposition and the §5 skeleton precondition.

1. **Effective schedule valid as a unit — LANDED.** Sections
changed: §1 C-R1 amendment (two named validators —
candidate-strict vs derived-plateau — with shape checked before
any dereference in both validators and in
`normalizeCheckpoints`, closing the source lines 81–91 throw
path, not only the recovery path) · §1 C-R2 amendment (terminal
count reserved for the final anchor; intermediate counts capped
at `totalLines − 1`; `lineTimeMs` terminal-index consequence and
no-early-completion assertions) · §1 C-R3 amendment (schedule ·
line count · duration · caption resolved as one joint tuple,
outcomes (a)–(d); a duration shorter than the default final
anchor rejects the duration edit itself and reverts it to
8000 ms — no input is both reject-to-default and
caption-clamped) · §1 C-R4 amendment (coupled `lines` ×
`checkpoint2`: a lawful edited anchor's time survives count
derivation verbatim; only its count is re-derived) · §6.3
amendment (expected retained-state cases R-1 null entries,
R-2 one-line swap with a valid fractional `checkpoint2`, R-3
duration shorter than the default final anchor, R-4 coupled
survival) · §9 amendment, legs (b)/(h).

2. **Geometry bound to visible text; every route executable —
LANDED.** Sections changed: §4 amendment (specimen identified
at Plan per INSTRUCTION §2.1: `segment.mp4`, ORIGINAL cut
0:13.5–0:21.5, time origin t = 0 == segment start, four named
states — opening · count 20 · count 37 · final hold; displayed
prompt/caption/row TEXT-bounds acceptance model with the prompt
band ≈3%–10.2% and caption band ≈89.2%–97%; Route E's exact
geometry — line-height 1.15, top 11, bottom 86.86, visibleLines
12, arithmetic checked at both widths) · §1 C-M1 amendment
(box fit never binds a route; Route D, ending at 91% inside the
caption band, cannot automatically bind a specimen requiring a
full caption reservation) · §6.1 amendment (fit leg asserts
displayed bounds at the four states; 12-row expectation if E
binds) · §6.5 amendment (same 12-row swap expectation) · §7
amendment (E exposure priced: motion −2…−6, readability
−1…−3) · §10 amendment (S0 files the specimen record; S5 does
not close on box fit) · §1 C-D1 amendment (the 40-char probe
corrected to an expected-overflow control: 275.55 px need vs
252.00 px column @360) · §1 C-D2 amendment + §11(i) correction
(floor re-priced on both dimensions: vertical ceiling 11.68 px,
horizontal ceiling 11.13 px; 11 px = largest WHOLE-PIXEL floor,
not the largest possible floor).

3. **Cure effects separated before score attribution —
LANDED.** Sections changed: §5 amendment (S2 split into S2a
short-list completion and S2b duration rejection, on separate
checkpoints; malformed-input recovery confined to S1; S5 split
into one-change probes S5a horizontal · S5b numeral scale ·
S5c vertical retention · S5d floor print, each branched from
the common S4 checkpoint with its own filed effect record,
then assembled as S5; per-cure effect records at filing time
and lens-score movement printed BUNDLED wherever the records
cannot distinguish it; S6 redefined as the LAST construction
checkpoint, with §6 legs and payload assembly after it — the
prior S6-includes-§6 wording superseded) · §1 C-R6 amendment
(paused-resize captured before AND after its change at a width
pair whose filed `deriveLayout` outputs differ in
`effectiveVisible`; endpoint clamping probed separately from
resize and from the sequence suite) · §7 amendment (attribution
discipline restated against the probe records) · §9(a)'s
BUNDLED residue is now governed by the S5a–S5d probe records
rather than checkpoint separation alone.

4. **Preservation gaps closed in checklist order — LANDED.**
Sections changed: §3 amendment (`segment.mp4` bound in the
inventory explicitly as the comparison's ORIGINAL asset, the
asset `comparison.html` references directly; attempt-tagged
create-once paths named for the fit table, census, frames,
build record, checkpoints, and every firing's payload +
return; each firing pair sealed — copied + sha recorded —
before regeneration, source changes, or re-fire; `scores.md`
prefix preserved by byte length + prefix hash; the delta
computed from the two filed score vectors without rewriting
either) · §5 amendment (iv) + §10 amendment (ii) (the
post-overwrite census moved into S1, immediately after the
first working-source write; its later checklist position is a
cross-reference only) · §6.1/§6.9 amendments (tagged leg paths;
guards recompute from filed vectors).

5. **Actual lens stream cleared for anchors — LANDED.**
Sections changed: §6.8 amendment (the neutral own-check packet
defined by an exhaustive schema — current-state check
identifiers, inputs, expected and observed values, verification
limits ONLY; prior-state headings such as "restored 13 rows"
and any comparison against Attempt 2 are prohibited packet
content; prior-state commentary and cure mappings confined to
the seat record; the seat reads back each complete assembled
stream, the manifest, and the actual session read scope before
firing; each inspected stream bound to the final source hash
taken after comment neutralization and the associated own-check
rerun, with any later source change voiding the inspection) ·
§9 amendment, leg (d).

6. **WHY and tier decisions independent — LANDED.** Sections
changed: §0 amendment (WHY owed iff new avg ≤ 86.4 regardless
of tier; worked case 86.0 / min 70 = PASS + WHY owed; tier
hand-off fires on PASS whether or not a WHY is owed) · §6.9–11
amendment (close order fixed: guards → scores + signed delta
appended → WHY filled and filed in the same scores.md entry if
owed → `jev-plateau` judged on the filed WHY with the two filed
score vectors, cited returns, build records, and checkpoints →
disposition recorded before close → tier hand-off on PASS with
the exact Attempt 3 scores.md pointer) · §8 amendment (Class 8
slot added for C-D2 residual floor / visible-legibility
findings; evidence + disposition slots specified for classes
2–7 in class 1's form; attribution-limit rule — where a return
gives no class-level deduction, that limit is recorded instead
of borrowing the aggregate lens delta; the pre-committed stall
case — reusability improves while geometry regresses and the
average stalls — with its discriminating test: returns pricing
the same states the bounds leg measured intersecting ⇒ route
family changes next; returns pricing states the leg measured
clear ⇒ the bounds MODEL family changes first).

7. **Observe gap and route-dependent deferral carried into the
gate record — LANDED.** Sections changed: §2 amendment (if
Route E binds, C-M1 carries explicitly as PARTIAL / DEFERRED
with its 12-row result, its reason — both other routes failing
the displayed-bounds acceptance against a full-caption-
reservation specimen — and its residual risk priced in §7;
the Observe record-depth gap from RUN.md §1b carried OPEN
beside this plan: this plan does not file a full verbatim read
of all five Attempt 2 returns, so either the seat records that
read + disposition in RUN.md §2 before Execute opens, or the
gap prints there as open with the Execute gate as its consumer)
· §9 amendment, leg (g) (§8 size-split ruled out ON EVIDENCE:
the staged cure set is bounded — 9 cures, S0–S6 as amended,
one file — and every filed Attempt 2 cure maps to a named §1
cure; the Route E deferral is the sole, pre-filed,
route-dependent exception, not a split).

**Rebutted: none.** No finding was set aside; where a finding
corrected this plan's own arithmetic or wording (Findings 1, 2),
the corrected figure/wording stands in the operative section
cited, and the superseded sentence is identified there as
superseded.
