# T13 — Typing Comment Stack · SCORES

Technique: T13 (packet P1, "Look What I Can Do" @ 1:08–1:20) · Consumer: word-animation family (typing machinery kin to T03/T01)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 004, Wave 2)

Five-lens Codex wave (INSTRUCTION §5.4, Amendment A5 form). Returns filed verbatim in `codex/lens-<lens>.md`; instruction files `codex/instr-<lens>.txt`. Each run was separate; no lens saw another.

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 82 | codex/lens-motion.md |
| Timing / tempo match | 64 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 74 | codex/lens-reusability.md |
| Readability | 64 | codex/lens-readability.md |

**Arithmetic:** (82 + 64 + 100 + 74 + 64) / 5 = 384 / 5 = **76.8 average** · minimum lens **64** (timing and readability, tied).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 8.2; two lenses (timing 64, readability 64) sit under the floor. Tier: **IN PROGRESS** (attempt filed). Re-attempt routes to the practice job (Amendment A3 division of labour).

## Own checks (before the wave)
- Swap test: PASS (logic-level) — altered titles ["Directrice des Choses Invisibles","Capitaine du Rien du Tout","Ministre des Pauses Café Infinies"], charMs 33→20, accent #5b8def→#ff2fb3; simulated with the build's own schedule derivation: all type fully, strictly sequential, endMs 5,885; default schedule sums to exactly 12,000 ms. JS passes `node --check`. Full record in build-record.md §5.
- Purity grep: `segment.mp4|source.mp4|<video|<img|.jpg|http://|https://|url(` in recreation.html → 0 hits; sole `.png` hit is the typed title text "feet.png not found" (subject text, not media). Asset inventory: code only (avatars = code-drawn initial discs).
- Comparison: labels + one shared control set (recreation slaved to video clock − 500 ms handle) + phone stacking verified at source level. Render-proof limitation: no Chrome binary in this seat (Wave-1 precedent).

## Priced gaps (what the practice-job re-attempt must cure — convergent findings first, per Amendment A1)

**CONVERGENT 1 — opening-state mismatch (named by TWO lenses: motion 82, timing 64):** the sole evidence frame at the window start already shows card 1 complete and card 2 mid-typing ("Chief Executive"); the recreation opens on an empty stack (400 ms delay, card 2 not typing until 2,110 ms) and spends its opening re-establishing progress the specimen has already made. Cure: anchor the timeline to the evidenced opening state (card 1 landed, card 2 partially typed at t=0 of the window) or carry a documented timeline offset, then reallocate the remaining beats.

**CONVERGENT 2 — silent title clipping / nowrap policy (named by TWO lenses: reusability 74, readability 64):** `white-space:nowrap` + `overflow:hidden` silently clips titles beyond ~62 chars (and character widths vary, so the allowance is not a guarantee). Cure: bounded wrapping with a per-line highlight-safe layout, or explicit title-length validation that refuses loudly instead of clipping.

**Timing 64 — primary single-lens cure:** the per-card allocation largely relabels a global cadence (uniform 33 ms/char, uniform 160 ms appears, holds varying by only 18 ms) and the 2,139 ms final hold (17.8% of the window) is arithmetic balancing, not a justified ending beat. Cure: price each card's typing duration and landing hold as its own beat with reasons, cadence derived from those allocations; justify or shrink the final hold. (The pre-Execute plateau hypothesis — timing is this family's stuck lens, from T03 — was confirmed.)

**Readability 64 — phone-scale failure:** at a 390 px stage the titles shrink to ~7.2 px, headers ~4.9 px, foot rows ~4.5 px — geometrically fitted but unreadable; badge contrast is weak at that scale. Cure: a phone layout that gives the comments column readable type and enough vertical room for six cards, verified at phone width.

**Reusability 74 — residual literals:** card footer (♡ / "Reply"), post action icons and close mark are markup literals, not CONFIG; CSS transitions (appear/land/caret blink) are hardcoded so appearMs does not govern visual duration; geometry beyond card height/gap is CSS-fixed with no card-count fitting validation; `?gapPx=` misnames a cqw value and treats 0 as unset; highlight reveal mixes grapheme counts with UTF-16 offsets (wrong reveal point for some Unicode swaps). Cure per the lens return's list.

**Motion 82 — secondary findings:** replay (`restart()`) does not explicitly clear `.on`/landed classes (render re-derives state, but the lens requires an explicit reset + a verified second playback); the 160 ms entrance slide/fade and the absence of stack scrolling are unverified assumptions from a single frame — consecutive frames would be needed to claim them.

## Attempt 2 — 2026-11-14 (practice Cycle 004, Wave 3)

Five-lens Codex wave, all five fired against the identical final source: `recreation.html` sha256 `7ef9422ea8c95052b7116962d2652db694eea32ff4d0d6b6e31fdc51752c55b8`. Returns filed verbatim in `codex/attempt-2/lens-<lens>.md`; instruction files `codex/attempt-2/instr-<lens>.txt`. Each run was separate; no lens saw another, and no payload carried prior scores or targets.

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 84 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 82 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 54 | codex/attempt-2/lens-reusability.md |
| Readability | 77 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (84 + 82 + 100 + 54 + 77) / 5 = 397 / 5 = **79.4 average** · minimum lens **54** (reusability).
**Signed delta vs Attempt 1:** 79.4 − 76.8 = **+2.6** (motion +2 · timing +18 · purity 0 · reusability −20 · readability +13).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 5.6; reusability (54) sits under the floor. Tier: **IN PROGRESS**.
**Floor rule:** the attempt BEATS the prior average (79.4 > 76.8), so no WHY section is owed for this attempt. The priced gaps below carry the failure forward.

## Own checks (before the wave)
- Logic suite (node, DOM stub, source-bound): **31 PASS, 0 FAIL** on the frozen source — opening state exact at t=0 (card 1 landed, card 2 prefix exactly "Chief Executive", 15 graphemes); card 2 lands at 540ms; derived total 8808ms with the 1400ms ending beat; transition strings carry the priced entrance durations; narrow-layout modelled sizes at 360px (title 14.00px, header/foot 11.02px) with containment in both layouts (152.5 ≤ 185.8 narrow; 51.0 ≤ 53.7 wide); badge contrast modelled 7.10:1; grapheme-range cases (combining accent, ZWJ emoji) exact; overlong title raises the named validation error; gap override accepts 0 and names malformed values; a uniform-rate replacement recomputes the total (6850ms) with no compression; restart + second playback identical at nine sampled times. Two defects were found by these diagnostics during the build and cured before the wave (stale title content on hidden cards after restart; landed styling persisting on a backwards scrub) — full ledger in build-record-attempt2.md.
- Purity grep on the final source: **0 hits**.
- **PIXEL-UNVERIFIED**: no Chrome/Chromium binary exists in the seat; all geometry/type evidence is modelled from the source's own tokens. Rendered-pixel behaviour remains unverified.

## Private cure → neutral mapping (seat record; the fed build record uses the neutral names only)
- Convergent opening cure → build-record area 1 "Opening anchor" · Convergent clipping cure → area 2 "Bounded wrapping + named validation" · Timing cure → area 3 "Per-card beat pricing" · Readability cure → area 4 "Narrow-layout type + containment" · Reuse cure → area 5 "Configuration completeness + effect mappings" · Highlight grapheme cure → area 6 "Grapheme-consistent marked-segment reveal" · Motion secondary (restart) cure → area 7 "Restart determinism".

## Priced gaps (what Attempt 3 must cure — ordered by the new minimum)

**Reusability 54 — the new stuck lens (named by the reusability return, corroborated by readability):** (1) Fitting validation is a grapheme-count model, not a measurement — it cannot bound arbitrary glyph widths or real wrapping, and chrome text (handles, badges, timestamps, post text) has no fitting check at all; the build record's pre-build disposition claimed handle/badge fitting "participates" via the title model — the return shows that claim was unsupported, and it is recorded here as an overclaim. Cure: measured fitting (rendered or font-metric) for titles AND chrome rows, or a validation bound honestly renamed as an estimate with its limits printed. (2) Validation is not fail-closed: named errors banner while playback continues over `overflow:hidden`, so unsupported content can still clip. Cure: validation failure stops playback (frozen error state) instead of warning-and-continuing. (3) Residual geometry literals: stamp placement, shadows, highlight padding, badge geometry, caret dimensions, entrance displacement, footer spacing; the narrow border token is configured but the wide token is always consumed. Cure: complete the geometry token set and consume per-mode tokens. (4) `landMs` governs no visual property (the landed class changes nothing visual). Cure: give the landing a real priced visual property or remove the token. (5) Edge guards: a one-card configuration yields a negative total duration (−850ms); `charMs=Infinity` passes; numeric overrides accept trailing junk via parseFloat; added cards inherit the final card's zero landing hold (also priced under Timing). Cure: finite/strict parsing, opening-state validity per card count, nonzero intermediate holds for added cards. (6) The no-Segmenter fallback splits combining/ZWJ sequences into code points. Cure: a grapheme fallback that preserves clusters, or a named support boundary.

**Timing 82:** the in-window performance (8808ms) plus the documented opening offset (2250ms) totals 11,058ms against the 12,000ms catalogue window; the remaining ~942ms is unallocated and the return prices the un-reconciled difference as a gap. Cure: an explicit allocation decision for the residual (extend priced beats with reasons, or print the residual as a named post-window hold with a reason). Added-card hold inheritance is priced under Reusability (5).

**Motion 84:** (1) the evidence frame's pale-blue tint on the mid-typing card is absent — cure: a configured in-progress tint for the active card. (2) Caret blink is not a function of performance time (the caret element is recreated per grapheme, restarting its blink; transitions likewise carry browser-history dependence, so sampled-state determinism does not prove rendered determinism) — cure: caret phase derived from performance time; keep the residual rendered-determinism limit printed until a pixel route exists. (3) Opening cards still transition into visibility although they represent already-progressed state — cure: opening-state cards render in their progressed state without an entrance transition. (4) Landing has no distinct settling movement — single-frame evidence cannot settle whether one belongs; remains printed as unverified, with the entrance/no-scroll assumptions (deferred this attempt, evidence needed = consecutive specimen frames).

**Readability 77:** (1) rendered checks at 1916/360/390px remain outstanding (PIXEL-UNVERIFIED) — the modelled wrapping bound (0.58em factor) is an estimate, word-boundary wrapping and mark padding are unmodelled, and CSS imposes no hard two-line maximum; cure jointly with Reusability (1)/(2): measured fitting + a hard line bound enforced by the fail-closed validation. (2) Header-row combined width is never measured — cure under Reusability (1). (3) The phone caret is undersized (~1.8 × 5.76px at 360px beside 14px text) — cure: a caret size token scaled to the title token in the narrow layout.

**Purity 100:** held; no cure.

## Attempt 3 — 2026-11-15 (practice Cycle 007, Wave 6)

Five-lens Codex wave, all five fired against the identical frozen source: `recreation.html` sha256 `7c2cc6a52c4d0e7c2a5365a7fbda8a21f4c388c0efff2df47bcdcfc9c63cc9cc` (frozen copy `recreation-attempt-3-frozen.html`, same sha). Returns filed verbatim in `codex/attempt-3/lens-<lens>.md`; payloads preserved create-once at `codex/attempt-3/instr-<lens>.txt` after a preflight audit (numerical anchors 0 · qualitative anchors 0 · score-bearing paths 0, per lens). Each run was separate; no lens saw another, and no payload carried prior scores, targets, verdicts, or cure commentary.

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 89 | codex/attempt-3/lens-motion.md |
| Timing / tempo match | 78 | codex/attempt-3/lens-timing.md |
| Construction purity | 100 | codex/attempt-3/lens-purity.md |
| Reusability / parameterization | 62 | codex/attempt-3/lens-reusability.md |
| Readability | 79 | codex/attempt-3/lens-readability.md |

**Arithmetic:** (89 + 78 + 100 + 62 + 79) / 5 = 408 / 5 = **81.6 average** · minimum lens **62** (reusability).
**Signed delta vs Attempt 2:** 81.6 − 79.4 = **+2.2** (motion +5 · timing −4 · purity 0 · reusability +8 · readability +2).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 3.4; reusability (62) sits under the floor. Tier: **IN PROGRESS**.
**Decision branch (three-branch table, plan-T13.md consumption F6): BEATING, BELOW BAR** — the attempt beats the prior average, so no WHY section is owed under the floor rule and no jev-plateau call fires; no tier hand-off is queued; the priced gaps below carry forward to attempt 4.

## Own checks (before the wave)
- Logic suite (node, DOM stub, source-bound; instrument `t13-verify.js` incl. its feasibility section): **56 PASS, 0 FAIL** on the frozen source — feasibility valve PASS at 360px under the ESTIMATE path (stack 152.53 ≤ 181.71cqw; post height 37.17cqw measured from its wrapped model, no fixed allowance; wide 51.04 ≤ 53.73cqw); opening state exact at t=0; fixed-time landing states before/midpoint/after, identical after restart and reverse seeking; caret phase a pure t-function on a persistent element; fail-closed freeze (zero cards constructed, banner shown, clock controls no-op) on an overlong effective title; single discard-then-validate override policy (trailing-junk / non-finite values discarded into `overrideOutcomes`, defaults intact, no freeze; gap 0 lawful); positive totals + sequential schedules at card counts 1–8 (counts 7–8 end in the named stack-overflow freeze at current tokens — priced in the build record); added intermediate holds >0 with true-final hold 0 and the prefix derived from the replacement card; cluster-preserving segmentation fallback (combining / ZWJ / flag / skin-tone / keycap = 1 cluster each); supported swap set types fully with no compression. One construction defect was found by these diagnostics during the build and cured before the wave (added final beat inherited the intermediate hold). Full record in build-record-attempt3.md.
- Purity grep on the frozen source: **0 hits**. No CSS transition or CSS animation exists in the file (all displayed state is computed from performance time).
- **PIXEL-UNVERIFIED**: no Chrome/Chromium binary exists in the seat; all geometry/type evidence is modelled from the source's own tokens. Rendered-pixel behaviour remains unverified.
- Preservation census at close: all 25 protected T13 files in the run's preservation-baseline.txt match their baseline hashes (0 mismatches); the preserved attempt-2 copy stands at `7ef9422e…c55b8` on a distinct inode from the working file — the hardlink failure mode did not recur. comparison.html unchanged; its ORIGINAL side is byte-identical to its preserved snapshot; the recreation's interface (setTime/play/pause/restart) is unchanged, so no re-pointing was made.

## Private cure → neutral mapping
Kept seat-side only in `cure-mapping-attempt3-NONFED.md` (non-fed file, per the plan-review consumption) — not reproduced here or in the fed build record.

## Cure-by-cure outcomes (attribution only where a filed return's wording supports it)
- **C1 measured fitting (titles + chrome): PARTIAL** — reusability (62) credits the named overflow freezes and the fitting machinery, but prices what remains: geometry units are not faithfully modelled (`parseFloat` treats a `20px` token as 20cqw; entrance displacement is reconstructed in cqw), replacement chrome beyond card headers (post header, comments header, footers, stamp, initials) has no fitting check, post-body fit uncertainty is unchecked, title validation never rejects a computed max line width above the inner width, the caret is omitted from fitted states, and whitespace normalization can shift grapheme positions without remapping the marked range.
- **C2 fail-closed + hard two-line bound: LANDED** — the freeze behaviour is credited by name in the reusability return ("Named overflow freezes … are useful safeguards"); the suite asserts zero constructed cards and no-op clock controls in the frozen state; readability records both longest titles modelled complete at two lines.
- **C3 geometry tokens + per-mode consumption: PARTIAL** — the token set landed (census in the build record), but the reusability return names decisions still hard-coded: added-card entrance/rate defaults, the replacement prefix length (15), the caret duty cycle, several line heights / font weights, and the stage maximum width in the stylesheet.
- **C4 landMs real property: LANDED (construction)** — motion (89) records the landing colour transition as a present, determinate property of the build and prices it, with the specimen question, as an explicitly labelled construction choice the single frame cannot settle.
- **C5 edge guards: PARTIAL** — timing (78) credits added intermediate holds and the true final card retaining the ending hold; strict parsing and the discard policy held in the suite. Two priced remains: an accepted `charMs` override is applied before beat expansion, so beats added for 7–8-card overrides keep the hard-coded 38 rate (reusability return); and `landMs` / `caretBlinkMs` / `finalHoldMs` carry no finite/range validation, with no named check that an intermediate hold covers the landing duration (motion + reusability returns converge on this).
- **C6 grapheme fallback: LANDED with its boundary priced** — reusability: native segmentation is consistent for typing and highlight lookup; the fallback's named exclusion of extended rules is recorded as a qualification, not a silent failure.
- **C7 residual allocation (942 ms named post-window hold): NOT ACCEPTED** — timing (78, −4) rejects the accounting outright: the reconstructed 2,250 ms precedes the evidenced window, so subtracting it from the window does not justify an 8,808 ms performance; the residual "is metadata and never plays" and the identity "supplies no dramatic justification"; the 1,400 ms ending beat is likewise "named rather than priced". Attempt 4 must allocate the actual 12-second performance explicitly and justify the final hold by dramatic function (see priced gaps).
- **C8 motion (typing tint · caret phase from t · transitionless opening): LANDED** — motion (89, +5) credits the exact opening state, the t-derived replay/seek determinism ("convincing by construction"), and readability credits the active card's blue background + proportional caret as communicating typing clearly.
- **C9 phone caret scale: LANDED (modelled)** — readability credits the proportional caret beside the title token; the lens's remaining phone-size objection is aimed at the supporting rows (11.02px) and the absence of a minimum font-size floor, priced below — not at the caret.

## Priced gaps (what Attempt 4 must cure — ordered by the blocking lens)
**Reusability 62 — still the stuck lens:** (1) unit-faithful geometry modelling — the model must interpret each token in its own CSS unit (px/%/cqw), and the entrance displacement must be reconstructed in its configured unit. (2) Complete chrome fitting — post author/handle/close row, comments title/sort row, card + post footers, stamp text, avatar initials — each fitted jointly with a named failure, and the post-body fit's uncertainty checked like the titles'. (3) Title-fit completeness — validation rejects a computed maximum line width above the inner width even when the line count passes; fitted states include the caret (width + margin) for intermediate typing states; whitespace normalization must remap the marked range onto the normalized grapheme indices. (4) Override consistency — colour overrides validated as hex with rejection outcomes recorded like numeric ones; an accepted rate override applies AFTER beat expansion so added beats inherit it. (5) Remaining hard-coded decisions move into configuration: added-card entrance/rate defaults, prefix length, caret duty cycle, line heights / font weights, stage maximum width. (6) Timing-edge guards — finite/range validation for the landing, blink, and ending-hold durations, plus a named validation that every intermediate hold is at least the landing duration.
**Timing 78 — the regressed lens:** (1) allocate the actual 12,000 ms performance explicitly — the reconstructed pre-window history sits OUTSIDE the evidenced window and may not be subtracted from it; the in-window beats must sum to the window (or the difference must be spent on named in-window beats, not held as metadata). (2) Price the ending beat dramatically: a reason for its duration relative to the final title, the accumulated stack, and the preceding pauses.
**Readability 79:** (1) a named minimum-font decision for the phone supporting rows (11.02px at 360px) — either a floor token the layout honours or the size printed as an accepted limitation with its reason. (2) The narrow stage combines `width:100%` with padding and no `box-sizing:border-box` — fix the box model so the modelled stage width is the rendered one. (3) Rendered checks at 360/390px (incl. every intermediate typing state with its caret) remain owed when a render route exists — PIXEL-UNVERIFIED stands.
**Motion 89:** the hold-vs-landing guard priced under Reusability (6); entrance/landing specimen uncertainty stays printed until consecutive frames exist.
**Purity 100:** held; no cure — do not regress.

## Attempt 4 — WHY scaffold (pre-drafted, practice C012)

Pre-drafted at Plan (practice Cycle 012, Wave 11; plan: `plan-T13.md` in the cycle run directory), per practice INSTRUCTION §2 — so that if Attempt 4 does not beat the Attempt 3 average of **81.6**, the WHY is completed in place from these slots at close, not improvised at close. If the attempt beats 81.6, this scaffold stands as the unused pre-draft and the Attempt 4 filing prints that. Cure numbering below is the plan's (C1–C14, convergent-lens order first).

### Cure-by-cure outcome slots (complete at filing: LANDED / PARTIAL / NOT LANDED + the filed return wording that prices it)

- **C1 hold-covers-landing + duration validation (motion × reusability, convergent):** ______
- **C2 caret-inclusive fitted + displayed states (reusability × readability, convergent):** ______
- **C3 rendered 360/390px checks incl. intermediate caret states (readability × reusability, convergent; converts to deferral D1 if no render route):** ______
- **C4 unit-faithful geometry modelling (reusability):** ______
- **C5 complete chrome fitting + post-body uncertainty (reusability):** ______
- **C6 title-fit completeness — max-width rejection + whitespace marked-range remap (reusability):** ______
- **C7 colour-override hex validation with recorded rejections (reusability):** ______
- **C8 rate override applied after beat expansion (reusability):** ______
- **C9 hard-coded remains into CONFIG — added-card defaults, prefix length, caret duty, line heights/weights, stage max width, banner colours (reusability):** ______
- **C10 full 12,000 ms in-window allocation, no pre-window subtraction, dramatically justified 1,972 ms ending hold (timing; A-C007-1 as corrected):** ______
- **C11 minimum-font floor for phone supporting rows — 12px floor token, narrow supporting tokens raised to 3.33cqw (readability):** ______
- **C12 narrow-stage box-model repair — box-sizing:border-box (readability):** ______
- **C13 entrance/landing specimen uncertainty carried explicitly + self-start assertion (motion residual; A-C010-2):** ______
- **C14 purity non-regression guard (purity, no cure owed):** ______

### Deferral outcomes (priced in the plan under every lens, A-C009-3)

- **D1 rendered pixel verification (if no route):** ______
- **D2 full UAX #29 extended grapheme fallback:** ______
- **D3 consecutive-frame entrance/landing evidence:** ______
- **D4 comparison-page changes (only if interface changed):** ______

### Stuck-lens hypothesis (pre-drafted)

Reusability has been the minimum lens for two consecutive attempts (54 → 62) while its cures landed only PARTIAL twice (attempt-3 C1 fitting and C3 tokens both partial; C5 edge guards partial). The standing hypothesis: reusability is this item's stuck lens, and its residual is a *completeness* defect, not a machinery defect — each attempt's fitting/validation/token machinery works, but the surface it covers (chrome rows, units, override paths, hard-coded decisions) has been enumerated from the prior return's list rather than from the source, so each wave finds the next uncovered surface. Attempt 4's C4–C9 are therefore enumerated from the attempt-3 source itself (literal census V4 + consumption census V2), and the hypothesis is falsified if reusability reaches ≥70 with the censuses clean, or confirmed if a return prices a surface the censuses demonstrably covered. Secondary hypothesis: timing is the family's historically stuck lens (T03 precedent, scores.md Attempt 1) and attempt 3's −4 was an accounting defect, not a cadence defect — falsified if C10's exact-allocation build still scores timing <78.

### jev-plateau evidence needs (file at close if the WHY is owed)

- Per-cure outcome slots above completed, each tied to a filed attempt-4 return's wording (never to scores alone).
- The attempt-4 lens table + signed per-lens deltas vs Attempt 3 (89 / 78 / 100 / 62 / 79 → avg 81.6).
- Which lens is stuck (per the hypothesis above: confirmed or replaced, with the return wording that decides it).
- The A-C008 leg outputs on the new attempt (fit-table.md + config-census.md paths + hit counts) and the V1–V10 verify results, so the plateau judgment prices checks that actually fired.
- Checkpoint shas (A-C010-1a staged checkpoints) for any cure whose attribution is claimed as isolated rather than BUNDLED.
- What the next attempt would do differently (named construction change, not a restatement of this plan), or why the technique should rest.
