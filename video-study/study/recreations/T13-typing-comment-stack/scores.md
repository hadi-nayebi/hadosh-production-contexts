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

## Attempt 4 — 2026-11-15 (practice Cycle 012, Wave 11)

Five-lens Codex wave, all five fired against the identical frozen source: `recreation.html` sha256 `05cfe65526fb4d80a5a72b4264fca99a183a17fe1f06482c3655178e46af4fc5` (frozen copy `recreation-attempt-4-frozen.html`, same sha, distinct inode). Returns filed verbatim in `codex/attempt-4/lens-<lens>.md`; payloads preserved create-once at `codex/attempt-4/instr-<lens>.txt` with the payload manifest at `codex/attempt-4/payload-manifest.md` (allowlist only; assembled-payload anchor scan clean after one pre-firing regeneration that removed a check-name anchor — recorded in the manifest). Each run was separate; no lens saw another, and no payload carried prior scores, targets, verdicts, or cure commentary.

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 88 | codex/attempt-4/lens-motion.md |
| Timing / tempo match | 87 | codex/attempt-4/lens-timing.md |
| Construction purity | 100 | codex/attempt-4/lens-purity.md |
| Reusability / parameterization | 64 | codex/attempt-4/lens-reusability.md |
| Readability | 72 | codex/attempt-4/lens-readability.md |

**Arithmetic:** (88 + 87 + 100 + 64 + 72) / 5 = 411 / 5 = **82.2 average** · minimum lens **64** (reusability).
**Signed delta vs Attempt 3:** 82.2 − 81.6 = **+0.6** (motion −1 · timing +9 · purity 0 · reusability +2 · readability −7).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 2.8; reusability (64) sits under the floor. Tier: **IN PROGRESS**.
**Decision branch (W-G three-branch table): BEATING, BELOW BAR** — the attempt beats the prior average, so no WHY section is owed under the floor rule and no jev-plateau call fires; the pre-drafted WHY scaffold above stands as the unused pre-draft (preserved byte-identically in `scores-preserved-attempt-3.md`, never edited in place); no tier hand-off is queued. The cure-by-cure outcome slots are completed in the separate section following this filing, per the wave gate (attribution BUNDLED unless a checkpoint isolates an effect). The residual inventory below is the next-attempt record.

## Own checks (before the wave)
- Logic suite (node, DOM stub, source-bound; instrument `t13-verify-attempt4.js`, create-once): **79 PASS, 0 FAIL** on the frozen source — feasibility valve PASS at final tokens (grapheme counts recomputed from source 31/30/47/49/25/22; schedule end exactly 12,000 ms, accounting residual 0; narrow stack 154.55 ≤ 181.54; wide 51.04 ≤ 53.73); supporting floor clears strictly (12.024 px at 360, 13.03 px at 390 in the source model); every chrome surface fitted jointly; every reachable grapheme prefix fitted caret-inclusively in both modes; opening/intermediate/landing/final displayed states asserted from the plan's stated semantics; adversarial validation set (hold-below-landing, zero/non-finite/over-window durations, NaN rate, null group, single oversized word) all named-fail-closed; unit-fidelity mutations (20px and 5% font tokens, px entrance displacement); whitespace mark remap on the normalized sequence; colour-override rejections recorded with no NaN interpolation; rate override reaching added beats at 7–8 titles asserted independently of the named overflow freeze that remains those counts' layout outcome; CONFIG consumption census (every leaf key consumed, 0 unconsumed); self-start asserted (playing at load, first frame rendered with no external call).
- A-C008 legs on the new attempt, pre-wave: measured-fit leg → `fit-table-attempt4.md` (**0 HITs** in the source-bound model; PIXEL-UNVERIFIED scope printed) · config-census leg → `config-census-attempt4.md` (**0 HITs**). Both legs' model basis is priced by the readability return below — see residual inventory item R1: the legs inherit the model's cqw basis, which the return shows is not the CSS container basis.
- Purity grep on the frozen source: **0 hits**. No CSS transition or CSS animation exists in the file.
- **PIXEL-UNVERIFIED**: no Chrome/Chromium binary exists in the seat; all geometry/type evidence is modelled from the source's own tokens. Rendered-pixel behaviour remains unverified (deferral D1, priced in the plan under every lens).
- Preservation census at close: 47 T13 files bound in the run's `preservation-baseline.txt` — **45 match**; the only deltas are the two explained ones: `recreation.html` (this attempt) and `scores.md` (the baseline binds pre-scaffold bytes; the delta is the Plan's WHY-scaffold append plus this filing, exactly as the plan prints). Preserved copies stand intact on distinct inodes: `recreation-attempt-3.html` at `7c2cc6a5…c9cc` (inode ≠ working file), `comparison-preserved-attempt-3.html`, `scores-preserved-attempt-3.md` (post-scaffold, pre-filing bytes). comparison.html unchanged; its ORIGINAL side is byte-identical; the recreation's interface is unchanged, so no re-pointing was made. Staged checkpoints `attempt-4-checkpoints/stage-1..6` stand create-once with inode independence asserted; lens attribution below prints BUNDLED per the wave gate.

## Cure-by-cure outcomes — Attempt 4 (separate appended section; scaffold preserved above, unedited)

Attribution prints **BUNDLED** for every cure (checkpoints isolate build stages, not lens effects; no cure's individual contribution is claimed).

- **C1 hold-covers-landing + duration validation:** implementation-verified (suite A1–A5); motion return credits sequencing "plus a hold validated to cover landing" — lens-finding **disappeared**, attribution BUNDLED.
- **C2 caret-inclusive fitted + displayed states:** implementation-verified (F7, D11/D13/D14); readability prices caret-only wrapping as a residual readability question ("may separate the cursor from its partial title") — finding **partially persisted** as a perception question the logic suite cannot settle; PIXEL-UNVERIFIED stands over it.
- **C3 rendered 360/390px checks:** converted to deferral **D1** — no render route exists in the seat (no Chrome/Chromium binary, verified at Execute); readability (72) prices the absence directly ("require rendered 360px/390px checks before claiming the phone floor and complete-stack legibility"). NOT claimed cured.
- **C4 unit-faithful geometry modelling:** implementation-verified for the modelled tokens (U1–U6); reusability (64) prices what remains: the title max-height backstop still appends cqw to a token's numeric part regardless of its unit, and the available-height calculation treats the comments top/bottom tokens as percentages regardless of unit; unsupported units fall back silently in the length converter. Finding **partially persisted** (narrower surface than attempt 3's).
- **C5 complete chrome fitting + post-body uncertainty:** implementation-verified (F6; joint surfaces in the fit table); reusability prices the stamp's vertical containment/position as unchecked and the card-height model's avatar-dominance assumption; readability prices stamp-vs-text overlap as unchecked. Finding **partially persisted**.
- **C6 title-fit completeness:** implementation-verified (max-width rejection branch + caret-prefix overflow branch + W1–W3 normalized remap); reusability prices the remaining boundary disagreement: fitting collapses JavaScript `\s` (including nonbreaking spaces CSS preserves) and prefix fitting segments normalized text while playback segments raw text. Finding **partially persisted**.
- **C7 colour-override hex validation:** implementation-verified (O1–O4: shorthand/named/junk rejected + recorded, no NaN interpolation); no attempt-4 return prices a colour-override defect — lens-finding **disappeared**, attribution BUNDLED.
- **C8 rate override after beat expansion:** implementation-verified (O5/O7: every beat at 7 and 8 titles carries the override, asserted independently of the layout freeze per the wave gate's separation); timing return credits that "replacement titles extend the schedule at configured rates without compressing later beats" — lens-finding **disappeared**, attribution BUNDLED.
- **C9 hard-coded remains into CONFIG:** implementation-verified for bindings (K1: every leaf key consumed; the estimate factors, line heights/weights, banner colours, stage width, added-card defaults, prefix length, caret duty all configured); reusability (64) + readability (72) converge: several typography tokens are assigned as variables without a rendered effect on their claimed elements — the comments/post header line-height token has no stylesheet consumer, the timestamp and footer weight tokens never set their elements' weights, and the footer line-height token does not reach the post footer — so changing them moves validation while leaving display unchanged. Finding **partially persisted**; the census criterion itself (variable assignment = consumption) is the priced defect.
- **C10 full 12,000 ms in-window allocation:** implementation-verified (D3/D4/D6/D7: end exactly 12,000, residual 0); timing 78 → **87 (+9)** credits the allocation structure and cadence differentiation verbatim ("more than a uniform cadence relabeled"). Two priced remains: one beat's stated reason calls the 47-grapheme line the longest when the 49-grapheme line is longer (reason text carried from the prior beat table — a wording defect in the priced reasons), and the ending hold's exact duration still reads partly as the window's remainder rather than an independently chosen reading budget. Finding **mostly landed**, attribution BUNDLED.
- **C11 minimum-font floor:** implementation-verified inside the source model (12.024 px at 360 in the model); readability (72, −7) prices the model's basis as wrong for CSS: descendant cqw units resolve against the stage's **content box**, so at a real 360 px stage the supporting rows render at ≈11.35 px — below the floor the model claims to enforce (see R1). Finding **persisted in a new form**: the floor token and validation exist, but the geometry model they run on misprices the unit basis. This is the attempt's headline residual.
- **C12 narrow-stage box-model repair:** implementation-verified in source (border-box in both stage rules; narrow inner width priced under border-box arithmetic, K8/K9); the readability return's content-box finding (C11) is the adjacent unit-basis defect, not a failure of the box-sizing repair itself. Attribution BUNDLED.
- **C13 entrance/landing uncertainty + self-start:** uncertainty labels carried verbatim in the build record; self-start implementation-verified (D23/D24). Motion (88) prices the entrance/landing embellishments as the lens's main remaining uncertainty, explicitly as unverified construction choices — the printed position the build record takes. No score exemption claimed.
- **C14 purity non-regression:** purity **100** held for the fourth consecutive attempt; return: "no construction-purity correction is needed."

## Residual inventory (the next-attempt record — attempt 5)

Ordered by the blocking lens. Reusability is the minimum lens for the **third consecutive attempt** (54 → 62 → 64): the pre-drafted scaffold's standing hypothesis — a *completeness* defect, each wave finding the next uncovered surface — is **confirmed in kind and narrowed**: attempt 4's censuses were clean on their own criteria, and both blocking returns price the *criteria*, not new machinery gaps (assignment-vs-effect census; model-basis-vs-CSS). The next attempt's cures are therefore criterion changes first, construction second:

- **R1 (readability × reusability, convergent — the headline):** the geometry model's cqw basis is the stage's full width; CSS descendant cqw resolve against the stage's content box. Correct the model's unit basis (content-box width at phone sizes, accounting for the stage's own padding) and re-derive every fitted quantity, the floor enforcement, and both legs on the corrected basis; on the corrected basis the narrow supporting tokens must clear the floor again (the rendered estimate is ≈11.35 px at 360 px on the current tokens, so a further raise or a padding change is priced in, with joint fit re-verified).
- **R2 (reusability × readability, convergent):** rendered-effect consumption — every typography token must change the displayed state of the element it names (header line heights reach the header rules; timestamp/footer weights reach their elements; footer line height reaches the post footer), asserted by rendered-effect checks, not variable assignment.
- **R3 (reusability):** unit completeness — the title max-height backstop and the available-height calculation consume tokens in their own units like the rest of the model; unsupported units fail named instead of falling back silently.
- **R4 (reusability × readability):** fitting completeness at the real viewport — validation priced at the actual stage width (or a stated supported-width set), stamp fitted for position + vertical containment + overlap against post text, card height modelled from the tallest header component rather than avatar dominance alone.
- **R5 (reusability):** whitespace boundary agreement — fitting and playback segment the same sequence (CSS whitespace rules, incl. nonbreaking spaces), or the divergence is removed by construction.
- **R6 (timing):** beat reasons made content-specific under replacement (reasons derived or re-priced when titles change); the mislabelled "longest line" reason corrected (the 49-grapheme line is the longest); the ending hold's reading budget stated as an independently chosen value with the window total following from it, not as its remainder.
- **R7 (motion/readability residuals):** entrance/landing embellishments remain unverified construction choices pending consecutive-frame evidence (D3); rendered 360/390 px checks remain owed when a route exists (D1) — readability's floor and caret-wrap questions are perception questions only a render route settles (the A-C011-3 escalation condition is now met for this surface: two consecutive attempts priced perception against source proxies — attempt 5's plan must change the construction family for the fitting basis or obtain pixel evidence).
- **D2** (full UAX #29 extended fallback) and **D4** (comparison changes) stand as priced in the plan; the comparison interface did not change this attempt.

## Attempt 5 — WHY scaffold (pre-drafted, practice Cycle 014)

Pre-drafted at Plan (practice Cycle 013, Wave 12; plan: `plan-T13.md` in the cycle run directory, carried into Cycle 014), per practice INSTRUCTION §2 — so that if Attempt 5 does not beat the Attempt 4 average of **82.2**, the WHY is completed in place from these slots at close, not improvised at close. If the attempt beats 82.2, the scaffold stands as the unused pre-draft and the filing prints that. Cure numbering is the plan's (R1–R7, C-A5-1/2).

### Cure-by-cure outcome slots (complete at filing: LANDED / PARTIAL / NOT LANDED + the filed return wording that prices it)
- **R1 content-box basis + re-derived floor/fits (readability × reusability; A-C012-1; A-C011-3 family change):** ______
- **R2 displayed-effect token consumption (reusability × readability):** ______
- **R4 stamp rect containment/overlap at actual viewport (reusability × readability):** ______
- **R3 unit-complete backstop/height validation (reusability):** ______
- **R4 actual-viewport fitting + tallest-header sizing (reusability):** ______
- **R5 identical whitespace sequences, fitting = playback (reusability):** ______
- **R6 derived beat reasons + independent 2,000 ms ending budget (timing):** ______
- **R7 segment-frame evidence + render re-probe dispositions (motion/readability):** ______
- **C-A5-1 purity non-regression (purity, no cure owed):** ______
- **C-A5-2 carried machinery re-asserted (cross-lens regression guard):** ______

### Deferral outcomes (priced in the plan under every lens, A-C009-3)
- **D1 rendered pixel verification (if the re-probe failed):** ______
- **D2 full UAX #29 extended grapheme fallback:** ______
- **D4 comparison-page changes (only if the interface changed):** ______

### Stuck-lens hypothesis (pre-drafted)
Reusability has been the minimum lens for three consecutive attempts (54 → 62 → 64) and the attempt-4 filing confirmed the standing hypothesis in kind: a *completeness* defect whose surface moved from machinery gaps to **the criteria themselves** (assignment-vs-effect census; model-basis-vs-CSS). Attempt 5 therefore changes criteria and basis, not just coverage: R1 replaces the model's basis family, R2 replaces the census criterion, R3–R5 close the enumerated unit/viewport/sequence surfaces FROM THE SOURCE (literal + token census on the attempt-4 bytes), not from the prior return's list. The hypothesis is **falsified** if reusability reaches ≥70 with both legs clean on the new criteria, or **confirmed and narrowed again** if a return prices a surface the new censuses demonstrably covered — in which case the next attempt's plan must name the criterion that failed, not a new surface. Secondary hypothesis: readability's ceiling on this item is the missing render route (D1, HIGH-priced twice) — falsified if readability reaches ≥80 on modelled evidence alone after R1/R2, confirmed if it stalls ≤75 while its return's remaining findings are all perception claims. Timing is NOT hypothesized stuck (87 after C10 landed); R6 is a wording/derivation cure, and a timing fall below 80 on the budget-first construction would re-open it as a named question for jev-plateau.

### jev-plateau evidence needs (file at close if the WHY is owed)
- Per-cure outcome slots above completed, each tied to a filed attempt-5 return's wording (never to scores alone).
- The attempt-5 lens table + signed per-lens deltas vs attempt 4 (88 / 87 / 100 / 64 / 72 → avg 82.2).
- Which lens is stuck (per the hypotheses above: confirmed, narrowed, or replaced, with the return wording that decides it).
- The A-C008 leg outputs on the new attempt (fit-table-attempt5.md + config-census-attempt5.md paths + hit counts, on the corrected basis / new criterion) and the V1–V13 results.
- Checkpoint shas + the A-C012-4 gate audit (V12), for any cure whose attribution is claimed as isolated rather than BUNDLED.
- The R7 frame-observation record (what the segment frames priced, and which tokens they moved).
- What the next attempt would do differently (a named construction change, not a restatement of this plan), or why the technique should rest.

## Attempt 5 — filing (practice Cycle 014, Wave 13)

Frozen source: `recreation-attempt-5-frozen.html`, sha256 `2712dc5ed115a1a34c4817d64d155c89b4b7cb6b4559ff71d611e17dc6f5389d`. All five returns bind this identical sha (payloads + manifest: `codex/attempt-5/payload-manifest-attempt5.md`; returns filed verbatim in `codex/attempt-5/`).

| Lens | Attempt 4 | Attempt 5 | Delta |
|---|---|---|---|
| Motion fidelity | 88 | 87 | −1 |
| Timing / tempo | 87 | 82 | −5 |
| Construction purity | 100 | 100 | 0 |
| Reusability | 64 | 74 | +10 |
| Readability | 72 | 83 | +11 |
| **Average** | **82.2** | **85.2** | **+3.0** |

**Verdict: PASS** — average 85.2 ≥ 85 AND minimum lens 74 ≥ 70. The attempt beats 82.2, so the WHY scaffold above stands as the unused pre-draft; the outcome slots are completed here from the filed returns. Attribution: **BUNDLED** (staged checkpoints filed per stage; no cure is isolated as the cause of any single lens movement). PIXEL-UNVERIFIED stands — every return was priced on the source, its displayed-state model and the frame observations, and the readability and motion returns both print that limit.

Own checks on the frozen source: full suite **122 PASS, 0 FAIL** (basis/feasibility 14 · displayed states 12 · consumption 17 · unit completeness 19 · widths/runtime/stamp 12 · canonical sequence 8 · timing 11 · motion surface 12 · counts/swap/segmentation 8 · comparison 4 · purity/stylesheet 5). A-C008 legs: `fit-table-attempt5.md` **HITS: 0** · `config-census-attempt5.md` **HITS: 0**, both on the corrected basis / displayed-effect criterion.

### Cure-by-cure outcomes (from the filed returns' wording)
- **R1 content-box basis + re-derived floor/fits:** LANDED — readability prices titles at 14.10px (360) / 15.28px (390), the two long titles at two lines without truncation, the supporting floor clearing at 12.27px; reusability rises +10 with both legs clean on the corrected basis. One PARTIAL aspect priced by reusability: percentage font sizes (none are used for fonts in this build) would be modelled against stage width while CSS resolves them against inherited size, and the stage's own padding basis assumes the stage spans the viewport width (true at the configured stage max width, a latent divergence if that cap is ever lowered).
- **R2 displayed-effect token consumption:** LANDED — reusability credits configurable content, chrome, layout and timing with rates driving grapheme timing and durations driving opacity; the two negative controls fired live in the suite.
- **R4 stamp rect containment/overlap:** LANDED — no return prices a stamp defect; the fit leg's stamp rows are clean at 360/390/1916 after the model-solved placement in the post's free band.
- **R3 unit-complete backstop/height validation:** PARTIAL — reusability prices incomplete edge validation (`entranceOverlapMs`, `caretDuty`, aspects and several geometry inputs lack finite/range checks; malformed card data can throw before named validation runs). A surface inside R3's family, named for the next plan.
- **R4 actual-viewport fitting + tallest-header sizing:** LANDED — runtime-width modelling and resize revalidation stand uncriticized; the header count's worst case is priced in the fit model.
- **R5 identical whitespace sequences:** LANDED — the canonical sequence is uncriticized by every return; counts, fitting, marks and playback consume one sequence.
- **R6 derived beat reasons + independent 2,000 ms ending budget:** PARTIAL — timing falls 87 → 82. The return prices the construction as sound (budget independent, totals exact, replacement extends at priced rates) but holds the derived explanations to a higher bar: they "confirm numerical relationships; it does not establish why those allocations serve the performance", the holds "remain close to a uniform cadence", and re-pricing holds to preserve exact instants leaves "arithmetic balancing visible". The scaffold's re-open trigger (timing below 80) is NOT met; timing is watched, not stuck.
- **R7 segment-frame evidence + render re-probe dispositions:** LANDED with priced residuals — motion 87 (−1). The frame-evidenced surface (gradient frontier word, thin caret, derived header count, per-card marked phrases) is credited; the return prices three residuals: the entrance overlap reproduces early graphemes at ≈78% opacity where the frames show two graphemes at ≈50% (overlap strength, not existence); the entrance displacement and the gradient's landing settle are unverified against consecutive frames; the camera pan and landed furniture are absent (D5 below).
- **C-A5-1 purity non-regression:** LANDED — 100; the return states no construction-purity correction is needed.
- **C-A5-2 carried machinery re-asserted:** LANDED — counts/swap/segmentation and comparison sections clean; no regression priced by any return.

### New convergent finding (reusability × readability, filed as the next plan's first surface)
`fitLines()` charges one mark-padding pair per occupied line (a single per-line boolean), even when two separate marks share that line, so modelled title widths can undercount rendered width in that case; the build record's "fitting charges mark padding per range" wording overclaims what the code does and is corrected by this filing. Both returns price it; it did not change any specimen fit outcome in this build (no specimen title carries two marks on one fitted line at any modelled width — the two-mark cards fit their marks on separate lines or single-mark lines at 360/390/1916 per the fit leg), but replacement content is not assured until the charge is per mark fragment.

### Deferral outcomes
- **D1 rendered pixel verification:** STANDS — the render re-probe failed (headless browser blocked by platform policy in this environment); PIXEL-UNVERIFIED is printed on the build record, both legs and this filing.
- **D2 full UAX #29 extended grapheme fallback:** STANDS — the fallback's limits are declared in the source; reusability priced the declaration as honest and the coverage as incomplete.
- **D4 comparison-page changes:** NOT TRIGGERED — the interface (`window.T13` names) is unchanged; `comparison.html` untouched.
- **D5 camera pan, scene transition, per-card landed furniture, photographic avatars:** STANDS as priced — motion's return names the pan and landing-state changes as retained deficits; photographic avatars remain barred by the purity property (100 held).

### Stuck-lens disposition
The pre-drafted hypothesis is **FALSIFIED on its own terms**: reusability reached 74 ≥ 70 with both A-C008 legs clean on the new criteria (basis family + census criterion changed, per the A-C011-3 escalation). Reusability remains the minimum lens, but its residual is now three named surfaces (per-fragment mark-padding accounting · gradient-stop configurability · configuration edge validation), not a criterion defect. The secondary hypothesis is also **FALSIFIED**: readability reached 83 ≥ 80 on modelled evidence alone, so its ceiling was not the missing render route. No lens is stuck at filing; jev-plateau is not invoked (its transport remains unbound in this seat — a standing print, unchanged by this attempt).

### Tier hand-off
PASS stands: the item leaves the practice pool on this filing. The tier recommendation (style library / recreation seat's act on a passing re-score) is handed off with this record; no tier change is executed inside the practice seat.
