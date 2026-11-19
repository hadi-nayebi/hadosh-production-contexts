# Plan — T13 typing comment stack · Attempt 4 (practice Cycle 012, Wave 11)

PLAN ONLY (filed by the Plan agent, A-C009-1 fan-out split). No build, no lens wave in this step.
Delta target (RUN.md §1, as corrected by Codex Observe corrections 3+4, consumed): **81.6 → ≥85 PASS**
(motion 89 · timing 78 · purity 100 · reusability 62 · readability 79; bar avg ≥85 AND every lens ≥70).
Blocking lens: reusability 62 (gap 8 to floor). Timing 78 is the regressed lens (−4 on attempt 3).

Evidence read firsthand for this plan: practice INSTRUCTION §1–§2 + §5 amendments cited below; RUN.md §1
delta target for T13 including corrections 3 (12,000 ms in-window allocation, gap-printing fallback STRUCK)
and 4 (restored cure list); scores.md in full (attempt-3 cure outcomes C1–C7 inventory + priced gaps);
ALL attempt-3 Codex returns in full (`codex/attempt-3/lens-*.md`); build-record-attempt3.md;
recreation.html source (attempt-3 frozen bytes); cure-mapping-attempt3-NONFED.md (seat-side);
TECHNIQUES.md T13 line (IN PROGRESS, 81.6, min 62); P1 digest T13 entry + scene table
(`video-digests/2026-11-13-ig-dfk4sfvvjjq/digest.md`: T13 catalogue window [1:08–1:20], one evidence
frame t68.jpg at the window start; digest "why it works": each title gets its own build and landing
before the next tops it; the stack's downward growth is the progress visual).

**A-C006-1 anchor re-observation (timing anchors):** the priced anchor is the 12,000 ms catalogue window.
Checked against segment evidence: the digest's coarse scene segment ("Social post + comment stack
1:05–1:20") is a scene span, not the technique window; the T13 catalogue entry, scores.md header, and the
attempt-3 timing return all price the evidenced window as 12,000 ms starting at the t68 frame (card 1
complete, card 2 showing "Chief Executive"). No conflict; the 12,000 ms anchor stands. The single frame
evidences NO in-window beat timing beyond the opening state — every in-window beat below is therefore
priced as construction from the window total + the digest's rhythm rationale, not claimed as measured
specimen timing. That uncertainty is carried explicitly (C13).

## 1. Cure plan (convergent-lens order first, per INSTRUCTION §2.2 / Amendment A1; then blocking lens, then ascending lens)

### Convergent cures (named by ≥2 lenses)

**C1 — Hold-covers-landing guarantee + duration finite/range validation** *(motion 89 BODY-WRITE × reusability 62 timing-edges — convergent)*
Construction: `validateConfig()` gains named fail-closed checks — every intermediate beat's
`holdAfterMs ≥ landMs` (error `T13_HOLD_LT_LAND:<beat>`), and finite/range validation for `landMs`,
`caretBlinkMs`, `finalHoldMs` (positive, finite, each ≤ catalogue window; error `T13_DURATION_INVALID:<key>`).
Today the guarantee holds only by default values (holds 380–460 > landMs 120) and is unenforced under
configuration change (motion return, verbatim substance). Suite asserts mutation cases: a hold set below
landMs freezes with the named error; non-finite / zero / negative durations freeze or are discarded per
the single override policy (CONFIG values freeze; URL overrides discard-and-record).

**C2 — Caret-inclusive fitted + displayed states** *(reusability 62 × readability 79 — convergent)*
Construction: fitting charges the caret (width token + margin token, active mode) in every intermediate
typing state of every card — validation runs `fitLines` for the title-plus-caret at the widest reachable
intermediate state per card (full title + caret is the bounding case; assert that claim in the suite, do
not assume it), in both modes. The displayed-state model (A-C004-2 / A-C006-3) enumerates intermediate
states, not only completed titles: per card, states at prefix, midpoint, and completion, each with caret
bounds inside the card's inner width. Plan-semantics assertion per A-C008-2: the plan states the active
card DISPLAYS its partial title + caret + typing tint at intermediate t — the suite asserts that displayed
surface from this plan text, not from the build's own state vocabulary.

**C3 — Rendered 360/390 px checks including intermediate caret states** *(readability 79 BODY-WRITE × reusability 62 "without rendered fitting evidence" — convergent)*
Construction: none (this is a verification cure). Execute/Verify first probes for a working render route;
if one exists, rendered checks at 360 and 390 px cover: actual font sizes, every long-title intermediate
typing state with its caret, the completed stack, and the C12 box-model state. If no route exists, the
filing prints PIXEL-UNVERIFIED (A-C002-2) and this cure converts to deferral D1 with its risk priced
there — it is NOT claimed cured on modelled evidence.

### Reusability 62 — the blocking lens (single-lens cures, in the return's order)

**C4 — Unit-faithful geometry modelling** *(attempt-3 outcome C3/C1 remain)*
Construction: a unit-aware token parser replaces bare `parseFloat` modelling: every layout token is
interpreted in its OWN CSS unit (cqw → % of stage width; px → px; % → % of its CSS reference length, with
the reference named per token in the build record). `modelFor()` converts through that parser, so a font
token of `"20px"` models as 20 px, not 20 cqw. The entrance displacement is reconstructed in its
configured unit end-to-end: `render()` currently rebuilds the transform as `((1−p) × cqwOf(entranceDy)) + "cqw"`
regardless of the token's unit — the render must scale the token's numeric part and re-attach the token's
own unit. Suite (A-C002-1 effect mapping): mutate representative tokens across units (font px, entranceDy
px, a % token) and assert modelled value == rendered-token interpretation for each.

**C5 — Complete chrome fitting + post-body uncertainty** *(attempt-3 C1 PARTIAL remain)*
Construction: joint fitting checks, each with a named fail-closed error
(`T13_CHROME_OVERFLOW:<surface>:<mode>` / `T13_FIT_UNCERTAIN:<surface>:<mode>`), for: post header row
(author + handle + close mark, jointly), comments header row (title + sort label, jointly), card footers
(mark + label), post footer (all action spans jointly), stamp text (against its rotated bounds allocation),
avatar initials (against the avatar disc at the avatar font token). The post-body fit gets the same
uncertainty treatment as titles: on the ESTIMATE / font-uncertain path its max line width is accepted
only at ≤90% of its bound, else `T13_FIT_UNCERTAIN:postBody:<mode>`. Post-body wrapped states are
enumerated in the displayed-state model (A-C006-3 wrapped-states clause), as attempt 3 already did for
its height — now also for its width/uncertainty.

**C6 — Title-fit completeness** *(attempt-3 C1 PARTIAL remain)*
Construction: (a) validation rejects a title whose computed maximum line width exceeds the inner width
even when its line count passes (`T13_TITLE_TOO_WIDE:<mode>` — today `fitLines` returns maxWidthPx and
nothing compares it); (b) whitespace normalization remaps the marked range: the marked range is computed
on the NORMALIZED grapheme sequence (normalize first, then `graphemeRangeOf` on the normalized text) in
both the fitting path and consistency-checked against the render path's range on the raw text — the suite
asserts, for titles with leading/repeated whitespace + a highlight, that the fitted mark indices and the
rendered mark indices denote the same normalized graphemes.

**C7 — Colour-override hex validation with recorded rejections** *(restored cure, correction 4; attempt-3 C5 remain)*
Construction: `accent` and `cardBg` URL overrides (and any palette override) are validated as hex
(`#rrggbb`; any additionally accepted form must be named in the build record) BEFORE assignment; an
invalid value is discarded and recorded in `overrideOutcomes` exactly like numeric overrides (key,
outcome `rejected-discarded`, raw value). `hexRgb`/`colorLerp` only ever receive validated hex — the
suite asserts shorthand (`#fff`), named colours, and junk values produce recorded rejections and default
colours in the computed landing interpolation, never NaN channels.

**C8 — Rate override applied AFTER beat expansion** *(attempt-3 C5 remain; reusability return verbatim defect)*
Construction: reorder `applyOverrides()`: titles override → card list replaced → `normalizeBeats()`
expansion → THEN an accepted `charMs` override is applied to every beat including added ones. Suite:
7- and 8-title overrides with `?charMs=` assert every beat (added beats included) carries the override
rate and the total re-derives from it; the hard-coded 38 rate never survives an accepted override.

**C9 — Remaining hard-coded decisions into CONFIG** *(attempt-3 C3 PARTIAL remain)*
Construction — each literal moves to a named CONFIG key consumed by a real effect (A-C006-2 census must
show the consumption, not just the binding):
- added-card entrance/rate defaults (today literals 170 / 38 in `normalizeBeats`) → `addedCardBeat {appearMs, charMs}`.
- replacement prefix length 15 (literal in `applyOverrides`) → `opening.prefixGraphemes`.
- caret duty cycle 0.55 (literal in `caretOpacityAt`) → `caretDuty`.
- line heights 1.25 / 1.32 / 1.2 (CSS rules + model multipliers) → per-mode layout tokens
  (`titleLineHeight`, `postBodyLineHeight`, `headLineHeight`, `footLineHeight`) consumed by BOTH the
  stylesheet (CSS vars) and `modelFor()` — one token, two consumers, suite asserts changing a token
  changes both the CSS var and the modelled card height.
- font weights (700/600/500/800 literals in CSS + measure calls) → layout tokens consumed by both the
  stylesheet and the measurement font string.
- stage maximum width `1916px` (stylesheet `#stage{max-width}`) → applied from CONFIG at `applyLayout()`
  (derived from / checked against `wideStageAspect`), stylesheet literal removed.
- validation-banner colours `#7a1020` / `#fff` (stylesheet literals, content-bearing appearance — NOT
  structural under A-C009-4) → palette tokens `bannerBg` / `bannerInk` consumed via CSS vars set from CONFIG.
Any literal that legitimately stays in code is named in the build record's literal-census whitelist
per-literal (A-C008-3 / A-C009-4); content literals are never whitelisted as structural.

### Timing 78 — the regressed lens

**C10 — Allocate the full 12,000 ms in-window performance (A-C007-1, AS CORRECTED by Observe correction 3)**
The attempt-3 accounting is abolished: no pre-window subtraction, no residual token, no gap-printing
fallback (struck by correction 3 — acknowledging an unallocated gap does NOT satisfy this cure).
Construction changes:
1. Beat table re-priced (table below); `finalHoldMs` 1400 → **1972**; `postWindowHoldMs` token RETIRED
   (removed from CONFIG and from the accounting record; its removal is itself census-checked — a retired
   key consumed by nothing must not linger as a binding).
2. `WINDOW_ACCOUNTING` rewritten: `performanceMs` (schedule end, measured from t=0 = the evidenced frame)
   must equal `catalogueWindowMs` for the specimen configuration; `residualMs = catalogue − performance`
   prints **0**; `opening.offsetMs` survives ONLY as a printed prehistory description (card 1's beat +
   card 2's prefix were consumed before the window) and enters NO identity. The specimen identity is
   asserted only for the default configuration (standing rule from attempt 3).
3. The comparison page's slaved clock now runs a 12,000 ms schedule — interface unchanged (C14/§3 check).

**Allocation sketch (in-window, t=0 at the evidenced frame; grapheme counts from the source titles):**

| Beat | Appear | Typing | Hold after | Cumulative |
|---|---|---|---|---|
| Card 2 finishes ("Chief Executive of What's Next", 15 graphemes remain of 30) | — (already on stage at t=0) | 15 × 44 ms = 660 | 640 | types done 660 · next card at 1,300 |
| Card 3 ("VP of Things That Look Complete - 100% complete", 47 gr) | 180 | 47 × 40 ms = 1,880 | 620 | start 1,300 · typed 3,360 · next 3,980 |
| Card 4 ("Director of the Missing Feet - feet.png not found", 49 gr) | 180 | 49 × 40 ms = 1,960 | 620 | start 3,980 · typed 6,120 · next 6,740 |
| Card 5 ("Head of Vibes and Synergy", 25 gr) | 200 | 25 × 48 ms = 1,200 | 700 | start 6,740 · typed 8,140 · next 8,840 |
| Card 6 ("Chief of Artificial Me", 22 gr) | 220 | 22 × 44 ms = 968 | 0 (ending beat instead) | start 8,840 · typed 10,028 |
| Ending hold | — | — | **1,972** | **performance ends 12,000 exactly** |

Sum check: typing 660+1,880+1,960+1,200+968 = 6,668 · appears 180+180+200+220 = 780 · intermediate
holds 640+620+620+700 = 2,580 · ending hold 1,972 → **12,000 ms, residual 0, no millisecond outside
the window.** Delta vs attempt 3 (+3,192): typing +1,550 (rates rise from 30–38 to 40–48 ms/gr — the
attempt-3 rates were priced against an 8,808 ms performance and cannot fill the evidenced window),
appears +130, intermediate holds +940, ending hold +572.
Cadence character preserved: the two long titles stay paired at one rate (40), the short punch line
stays slowest per grapheme (48), card 2's completion stays distinct (44), the finale matches card 2 (44).
Every intermediate hold (620–700) still ≥ landMs (C1) with margin.
**Ending-hold dramatic justification (priced, not balanced):** the 1,972 ms hold is the only beat whose
job is reading the FINISHED stack, not building it. (a) Ratio: it is ≈2.8× the largest intermediate hold
(700, the pre-finale pause) and ≈3× the ordinary holds — a clear hierarchy (inter-card pause < pre-finale
pause < ending) so it reads as closure, not as another gap the next card will fill. (b) Content: the final
title is the shortest (22 graphemes) and the gag's topper ("Chief of Artificial Me"); the hold gives the
viewer time to land that line AND scan back up the accumulated six-title stack — the digest's stated
payoff (the stack's growth is the progress visual; a list gag is re-read whole at its end). (c) Proportion:
1,972 / 12,000 = 16.4% of the window — below the 17.8% share attempt 1 was criticised for, and unlike
attempt 3's 1,400 ms it is not what remains after an identity: every other beat in the table is priced
first from its own cadence reason, and the suite asserts the total as an exact equality, so any future
beat change must re-price the hold explicitly or fail. (d) State: during the hold the final card's
landing interpolation (landMs 120) completes in its first ~6%, the caret is gone, and the landed stack
sits in its settled colours — the hold is displayed state, not dead time.
Execute MUST recompute this table from the source's own grapheme counts in the suite and assert
`endMs === 12000` exactly for the default configuration; if a count differs from this sketch, the beats
are re-priced in the build record with the same derivation order (typing/appears/holds first, hold
re-priced with its justification) — the sketch's numbers never override the suite's counts.

### Readability 79

**C11 — Minimum-font decision for phone supporting rows (DECISION MADE, not deferred)**
Attempt-3 state: supporting rows (handles, badges, timestamps, footers, sort) model at 11.02 px at
360 px; no floor exists. Decision: **adopt a floor and honour it** — CONFIG token
`phoneMinSupportingPx: 12` consumed by validation (modelled supporting size at 360 px below the floor →
named freeze `T13_FONT_FLOOR:<mode>`), and the narrow tokens raised to meet it: narrow
`cardHeadFont` / `badgeFont` / `avatarFont` / `cardFootFont` / `sortFont` 3.06–3.4 cqw → **3.33 cqw**
(= 11.99 ≈ 12.0 px at 360 px; 13.0 px at 390 px); `postFootFont` 3.2 → 3.33 cqw; `postHeadFont` 3.4 cqw
(12.24 px) already clears. Title tokens unchanged (14.00 px at 360 already clears the floor).
Feasibility basis (A-C011-4, measured at Plan from the attempt-3 build record): the header row modelled
at 182 px of 313 px inner width at 360 px — ≈40% headroom against a ≈9% text-width growth from the raise;
card height is avatar-dominated (avatarSize 6.67 cqw ≫ head font), so stack height is not driven by this
raise. Execute's feasibility valve re-measures with C5's joint chrome fitting BEFORE the wave; if the
raise fails joint fit at 360, that is failure point FP3 (below) — the floor is not silently dropped.

**C12 — Narrow-stage box-model repair** *(readability return, verbatim defect)*
Construction: `#stage.narrow` gains `box-sizing:border-box` (stage-level, both modes modelled
consistently), so the modelled stage width (100% incl. `stagePad`) is the rendered width. Suite asserts
the CSS rule's presence in source AND that `modelFor('narrow', …)` computes stage/inner widths under
border-box arithmetic (A-C004-2: assert the displayed quantity, not a proxy).

### Motion 89 / Purity 100 — residuals, no regressions

**C13 — Entrance/landing specimen uncertainty carried explicitly + self-start assertion**
No construction cure is claimed for entrance shape / landing settle / scrolling: the single evidence
frame cannot settle them (attempt-3 C4/C8 filings stand). The build record and the neutral facts fed to
the lenses carry the uncertainty labels verbatim-forward. Additionally per A-C010-2: the own-check suite
asserts the piece reaches its scheduled ending (now 12,000 ms) under its OWN startup path (the file
auto-starts: `playing = !FROZEN` + rAF loop — assert `isPlaying()` true at load in the stub and the
schedule end reachable via `perfNow` progression), or the build record prints the external-start
dependency as a named limitation. It is never a scoring exemption.

**C14 — Purity non-regression (guard only, no cure owed)**
Purity held at 100 across three attempts. All C1–C12 construction must preserve: code-only construction,
no specimen media, no CSS transition/animation introduced (all displayed state stays a pure t-function),
"feet.png not found" remains subject text only. Verified by the purity grep + asset inventory in §Verify.

### Deferrals (changes NOT attempted — risk priced under EVERY lens, per A-C009-3)

**D1 — Rendered pixel verification, if no render route exists at Execute time** (the execution half of C3).
Reason: measured seat condition across attempts 1–3 (no Chrome/Chromium binary; A-C002-2 stands).
Risk per lens — motion: MEDIUM (rendered determinism, entrance behaviour stay unproven; t-function
construction mitigates, does not settle) · timing: LOW (cadence is arithmetic in t; rendered frame
quantisation unmeasured) · purity: NONE (source grep + inventory fully price this lens) ·
reusability: HIGH (the attempt-3 return explicitly docks reuse "without rendered fitting evidence";
C4–C6 model cures land but the rendered-evidence deduction may persist) · readability: HIGH (its
BODY-WRITE demands the rendered checks; PIXEL-UNVERIFIED has capped this lens twice).
**D2 — Full UAX #29 extended grapheme fallback** (Indic conjunct stacks beyond Mc/Mn attachment).
Reason: attempt-3 C6 LANDED with this boundary printed; a full segmentation engine is a rebuild-class
change and splits out under INSTRUCTION §8. Risk — motion: NONE (default titles segment identically
under both) · timing: NONE for the specimen config (grapheme counts unchanged); LOW for exotic swaps ·
purity: NONE · reusability: LOW–MEDIUM (the printed qualification on arbitrary Unicode remains; native
Segmenter path is unaffected) · readability: NONE for default content.
**D3 — Consecutive-frame specimen evidence for entrance/landing/scroll behaviour.**
Reason: evidence does not exist in the packet (one frame); no construction can cure an evidence gap.
Risk — motion: HIGH (its 89 already prices this uncertainty; it is the named ceiling on that lens) ·
timing: LOW (beat rhythm unverifiable from one frame, already printed) · purity: NONE ·
reusability: LOW (entranceDy is unit-cured by C4 as construction regardless of its specimen value) ·
readability: LOW (entrance states are transient; settled states are what the lens prices).
**D4 — Comparison-page changes.** Not attempted unless Execute changes the recreation's interface
(API names/semantics); attempt 3 needed none and C1–C12 change none. If the interface does change,
re-pointing becomes mandatory in Execute, not deferred. Risk if interface unchanged — all lenses: NONE
(the ORIGINAL side is preserved byte-identically; §4 preservation covers it).

## 2. Execute checklist (in order; staged checkpoints per A-C010-1a — §6 below)

E1. Preservation first (§4): verify run baseline, create `recreation-attempt-3.html` + attempt-tagged
    copies of comparison.html and scores.md; inode-independence assertions. NO source mutation before E1 completes.
E2. Feasibility valve (A-C011-4): re-run the attempt-3 instrument form against the CURRENT source counts —
    assert grapheme counts (31/30/47/49/25/22), recompute the C10 table, confirm stack fit at 360/390
    under the C11 raised tokens by estimate before building. Valve result filed in build-record-attempt4.md.
E3. Stage 1 — C10 timing allocation + accounting rewrite + C1 hold/duration validation. Checkpoint 1.
E4. Stage 2 — C4 unit-faithful model + C5 chrome/post-body fitting + C6 title-fit completeness. Checkpoint 2.
E5. Stage 3 — C7 colour-override validation + C8 override-after-expansion + C9 CONFIG completion. Checkpoint 3.
E6. Stage 4 — C11 font floor + C12 box model + C2 caret-inclusive states. Checkpoint 4.
E7. Stage 5 — C13 uncertainty labels + self-start assertion; C14 purity guard re-run. Full own-check suite
    green on the final source; freeze the scored source (create-once frozen copy for attempt 4).
E8. Build record `build-record-attempt4.md` (create-once): construction per cure in NEUTRAL behaviour
    names (no cure codes, no lens commentary — A-C008-4), displayed-state model incl. wrapped +
    intermediate states, consumption census, literal-census whitelist per-literal, checkpoint shas,
    PIXEL-UNVERIFIED print, C13 uncertainty labels, ending-hold justification (C10d wording, as behaviour).
E9. Comparison check: interface unchanged → comparison.html untouched; interface changed → re-point and file why.
E10. Verify legs + wave preparation per §3 (legs BEFORE any lens firing, A-C008 practice amendment).

## 3. Verify checklist (all fire BEFORE the re-scoring wave unless marked wave-stage)

V1. **Effect mappings (A-C002-1):** suite asserts index→effect and override→parsed-behaviour mappings —
    per beat (appear/char/hold → schedule instants), per override (titles/charMs/accent/cardBg/gapCqw →
    rendered/computed effect incl. recorded rejections), not counts alone.
V2. **CONFIG consumption census (A-C006-2):** for EVERY CONFIG key incl. new keys (addedCardBeat,
    prefixGraphemes, caretDuty, line-height/weight tokens, phoneMinSupportingPx, bannerBg/Ink) and the
    RETIRED postWindowHoldMs (assert absent-or-unconsumed-by-design and removed): key → consumed effect,
    mutation-asserted for representatives of every group. A bound-but-unconsumed key fails the suite.
V3. **Displayed-state assertions (A-C004-2 / A-C008-2):** suite asserts the DISPLAYED surface as this plan
    states it — t=0: card 1 landed colours, card 2 typing tint + exact 15-grapheme prefix + caret;
    intermediate states (C2: partial title + caret bounds + tint); landing midpoint colours; final state
    at 12,000: full stack landed, caret absent. Wrapped states enumerated (A-C006-3): every title at each
    reachable line count (1- and 2-line line-box heights in the card-height model); post-body wrapped states.
V4. **Literal census (A-C008-3 / A-C009-4):** source scan for numeric/colour literals outside CONFIG
    against the build record's per-literal whitelist; unlisted literal fails. Content literals (symbols,
    labels, banner colours) are never whitelisted as structural.
V5. **A-C008 legs on the NEW attempt, pre-wave (non-skippable):** measured-fit leg →
    `fit-table.md`, config-census leg → `config-census.md`, both in the artifact directory, run against
    attempt 4's own CONFIG/source; RUN.md cites each leg's path + hit count. Missing leg = INCOMPLETE wave.
V6. **Swap test:** supported set (replacement titles incl. 7–8 titles, charMs, accent, gapCqw 0) types
    fully, strictly sequential, totals re-derive with no compression, added beats carry the override rate
    (C8); unsupported set (overlong title, invalid colours, junk numerics) asserts the named freeze /
    recorded-rejection states — never silent clipping.
V7. **Purity grep + asset inventory:** media/external patterns → 0 hits; no CSS transition/animation in
    source; inventory code-only.
V8. **Preservation census (post-overwrite, A-C004-1):** after the working file's first overwrite AND at
    close — every preserved copy's sha vs its create-once filing, inode ≠ working-file inode for each;
    run-baseline census across the artifact dir with the ONLY explained deltas being: recreation.html
    (the attempt), scores.md (scaffold append at Plan + Attempt-4 filing at close), and new attempt-4 files.
V9. **Self-start (A-C010-2):** suite asserts playback starts and reaches 12,000 under the file's own
    startup path (see C13).
V10. **Payload manifest + anchor scan (A-C010-1c / A-C005-2 / A-C008-4)** before any lens firing — §6.
V11. Wave-stage: five-lens re-score on the frozen attempt-4 source only; returns filed verbatim
    create-once under `codex/attempt-4/` via `-o` (A-C007-2); scores.md Attempt-4 filing with signed
    delta; WHY from the pre-drafted scaffold (§5) if non-beating — PLATEAU-UNNAMED if filed without it.

## 4. Preservation plan (content copies only — A-C004-1 · A-C005-1 · A-C010-1b)

Baseline: the run's `preservation-baseline.txt` (machine-written, A-C003-2) already binds
`recreation.html` and `recreation-attempt-3-frozen.html` at sha256
`7c2cc6a52c4d0e7c2a5365a7fbda8a21f4c388c0efff2df47bcdcfc9c63cc9cc`, comparison.html at
`f0334795b08dfb3671b437b32e93ac48091ba48ed8cf64e2fc146e7aa8608b49`, scores.md at
`3bccb84464ba456aa3fa1012c7380b12d67914c7f46e9351d370d786071150c6` (pre-scaffold bytes — see note).
Plan-agent firsthand check at Plan time: current recreation.html sha == frozen sha == baseline sha;
inodes distinct (recreation.html ≠ frozen copy). 
- **`recreation-attempt-3.html` (canonical §2.3 name): DOES NOT EXIST.** The frozen copy
  (`recreation-attempt-3-frozen.html`) exists and matches, but under a different name. Execute therefore
  CREATES `recreation-attempt-3.html` as a CONTENT copy (`cp`, never `ln`) of the current recreation.html
  BEFORE any mutation — destination absent, so no A-C005-1 branch is triggered at creation. If at Execute
  time the destination HAS appeared: matching sha → reuse untouched; mismatching sha → **STOP and report**
  (A-C005-1). The frozen copy is never overwritten or renamed. After the working file's first overwrite,
  re-verify: attempt-3 copy sha still `7c2cc6a5…c9cc`, its inode ≠ working file's inode (A-C004-1 census).
- **comparison.html:** attempt-tagged create-once copy `comparison-preserved-attempt-3.html` of its
  current bytes before any mutation (it is not expected to change; the copy binds the pre-attempt state
  per A-C010-1b). Same create-once branches as above. (comparison-preserved-attempt-1.html already
  exists with the identical sha — that does not substitute for the attempt-3-tagged copy.)
- **scores.md:** attempt-tagged create-once copy `scores-preserved-attempt-3.md` before Execute's first
  mutation of scores.md. NOTE on bytes: this Plan appends the §5 WHY scaffold to scores.md AFTER the run
  baseline was captured — that append is the Plan product required by INSTRUCTION §2, not an Execute
  mutation. Execute's tagged copy therefore captures the post-scaffold, pre-filing bytes, and the close
  census (V8) prints the scaffold append as the explained baseline delta for scores.md (diff = the
  scaffold section only; seat verifies).
- **Complete prior evidence set (A-C010-1b inventory):** prior build records (build-record*.md),
  t13-verify-attempt3.js, codex/attempt-2 + attempt-3 returns and payloads, comparison's ORIGINAL side
  (inside comparison.html, covered by its copy) — inventoried + hashed against the run baseline before
  mutation; none are outputs Execute overwrites, so no tagged copies beyond the three above, but the
  census (V8) covers them all. The attempt-4 instrument is a NEW create-once file
  (`t13-verify-attempt4.js`) — the attempt-3 instrument is never edited.

## 5. WHY scaffold

Appended to scores.md by this Plan (the Plan agent's ONLY artifact-dir write):
section "Attempt 4 — WHY scaffold (pre-drafted, practice C012)" with cure-by-cure outcome slots for
C1–C14 of this plan, the stuck-lens hypothesis, and the jev-plateau evidence needs. If attempt 4 does
not beat 81.6, the filing completes that scaffold in place (cure outcomes, stuck lens, hypothesis,
next-attempt difference) before the cycle may close; if it beats, the scaffold stands as the unused
pre-draft and the filing prints that.

## 6. Staged checkpoints (A-C010-1a) + payload manifest (A-C010-1c)

**Checkpoints:** after each Execute stage (E3–E6) and at freeze (E7), the builder preserves a
create-once checkpoint under `attempt-4-checkpoints/` in the artifact dir: `stage-<N>-recreation.html`
(CONTENT copy) + `stage-<N>-checks.txt` (that stage's own-check output). Mechanical assertions per
checkpoint: checkpoint inode ≠ working-file inode; checkpoint sha frozen at filing and re-verified at
close. Lens attribution in the filing prints **BUNDLED** unless a checkpoint isolates an effect.
Checkpoint paths are create-once (A-C005-1 branches apply; re-fires take fresh run-tagged paths).
**Payload manifest:** before any lens firing, Execute files `codex/attempt-4/payload-manifest.md`
(create-once) naming: the exact allowlist (attempt-4 frozen recreation source at its sha ·
build-record-attempt4.md · neutral own-check packet = check names + results + fit-table.md +
config-census.md, with NO cure interpretation), the exclusions (RUN.md · scores.md · this plan ·
cure-mapping files · prior returns · target/prior scores · delta figures), and the assembled-payload
anchor scan — numerical anchors, qualitative anchors, score-bearing paths/headings, AND
filenames/labels/source comments per A-C008-4 (the recreation source's own comments are payload content;
any cure-code or lens commentary found in comments is neutralized — comments only, suite re-run — before
payload generation). Payloads themselves are preserved create-once at `codex/attempt-4/instr-<lens>.txt`
before firing (A-C003-1).

## Failure-point evaluation (what breaks this plan, priced)

- **FP1 — Allocation arithmetic drift:** grapheme counts in the C10 sketch are Plan-measured from the
  source titles; if Execute's counts differ (segmentation of apostrophes/combining content), the table's
  cumulative column shifts and a blind copy of the sketch ends ≠12,000. Mitigation priced in C10: the
  suite recomputes from source counts and asserts exact equality; the sketch never overrides the suite.
  Unmitigated cost: timing falls a third time and the attempt likely goes non-beating (timing is the
  family's historically stuck lens — T03 precedent in scores.md attempt 1).
- **FP2 — Unit parser false-fires on the default config:** layout tokens include composite and px values
  (`bannerPad "8px 12px"`, `bannerFont "14px"`, % tokens whose reference differs by property). A parser
  that mishandles composites or % references makes validation freeze the SPECIMEN config — a
  self-inflicted non-delivery. Gate: Stage-2 checkpoint requires the default config to validate clean
  (zero errors) before any swap case is run; parser handles multi-value tokens by per-component parsing
  or named exclusion in the build record.
- **FP3 — C11 font raise breaks joint chrome fit at 360:** header width grows ≈9% on text portions;
  Plan's feasibility basis shows ≈40% headroom, but that basis is the attempt-3 model — if C5's fuller
  joint fitting (sort row, post header) measures tighter, the raise could freeze the default config.
  Disposition if it fires: Execute files the measured conflict and the seat decides (floor as printed
  limitation vs narrower raise) — the floor is never silently dropped or silently kept-broken.
- **FP4 — Override reordering (C8) regresses the prefix:** titles override derives card 2's prefix from
  the replacement card; moving charMs application after expansion must not move prefix derivation after
  beat expansion in a way that breaks `T13_PREFIX_MISMATCH` checks. P/H-group regression checks gate Stage 3.
- **FP5 — New validation freezes previously lawful configs:** C1/C5/C6/C11 all add fail-closed checks;
  each added check can freeze a configuration a lens would have accepted (e.g. a long-handle swap that
  attempt 3 played). That is the intended fail-closed direction (attempt-2 cure), but every new error
  must be named, suite-asserted on a triggering case, AND asserted absent on the default config.
- **FP6 — Preservation branch collision:** `recreation-attempt-3.html` appearing between Plan and
  Execute with a mismatching sha stops Execute cold (A-C005-1) — correct behaviour, priced here so the
  stop is read as the safeguard firing, not as a build failure. The scores.md scaffold delta (see §4)
  must not be misread by the close census as a preservation breach.
- **FP7 — Payload contamination via new source comments:** C1–C12 invite explanatory comments; any
  cure/lens language in them contaminates every payload (A-C008-4). The V10 manifest scan includes
  comments; neutralization is comments-only with a suite re-run.
- **FP8 — Checkpoint hardlink recurrence:** attempt history (Cycle-004 T13, Cycle-010 T11) shows
  checkpoint/preservation copies drifting to hardlinks under time pressure. The §6 mechanical inode
  assertion is the priced guard; a checkpoint sharing the working inode is a failed checkpoint, re-copied
  as content before the next stage.
- **FP9 — C12 box-model change invalidates the fit model it ships with:** changing stage box-sizing
  changes rendered inner widths; if `modelFor` is not updated in the SAME stage, model and build diverge
  (the A-C004-2 failure class). Stage-4 checkpoint requires model + CSS changed together and the
  feasibility valve re-run.
- **FP10 — Ending-hold justification not fed to the lens:** the timing lens prices what the fed build
  record states; if the C10 justification lives only in this plan (excluded from payloads), the lens
  sees another "named" hold. The build record (E8) must carry the justification as neutral behaviour
  description; the plan itself is never fed (A-C005-2).

## Premise conflicts found at Plan

1. Preservation naming: INSTRUCTION §2.3 names `recreation-attempt-<K-1>.html`; the artifact carries the
   attempt-3 bytes as `recreation-attempt-3-frozen.html` instead. Resolved in §4 (create the canonical
   name create-once; frozen copy untouched) — no STOP condition, since the canonical destination is absent
   and all shas agree with the run baseline.
2. scores.md baseline vs scaffold: the run baseline binds pre-scaffold scores.md bytes; the INSTRUCTION §2
   scaffold requirement appends after capture. Printed in §4; the close census must treat it as explained.
3. No conflict on the timing anchor (A-C006-1 check above) and no owner cures stand at T13's head.
