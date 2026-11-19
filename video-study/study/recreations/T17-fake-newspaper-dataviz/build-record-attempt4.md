# T17 — build record, attempt 4 (practice Cycle 020 Wave 19)

Final source: `recreation.html` sha256 `0d04b443a030185001cbfcba280afbd6547de2ef68fd1a8f08ac3408537fe803` — frozen before payload assembly; identical for all five lens firings. Prior attempt preserved as `recreation-attempt-3.html` (sha b2012a7a…, content copy, inode-independent, re-verified after the working file's first overwrite). Interface `window.T17 = {config, render, fitReport, validate, setTime, play, pause, restart}` + `time` getter preserved exactly; `comparison.html` NOT re-pointed (sha f6d34482… = baseline; ORIGINAL side byte-identical).

**PIXEL-UNVERIFIED (per D1 sub-item, Execute step 10):** the Chromium render route was re-attempted once this attempt (`/opt/meta-chromium/chrome --headless=new --window-size=360,844 --screenshot`): startup failed with "Hatch WebGL domain policy is required for browser startup", no screenshot produced. Sub-item outcomes: (i) saved frames of all six completed figures at 360px and 390px — OUTSTANDING (not completed); (ii) stamp entrance/overshoot frames at both widths — OUTSTANDING; (iii) normal-speed playback checks (FIG.21 reading allowance; stamp/cliff motion) — OUTSTANDING; (iv) rendered swap checks — OUTSTANDING (logic-level swaps all pass, see own checks). PIXEL-UNVERIFIED stands for every sub-item.

**Numerical attribution: BUNDLED.** Stage checkpoints isolate construction changes only (which stage changed what, with its implementation probes); this attempt ran exactly one final scoring wave, no staged lens evaluations exist, and no per-cure or per-stage score delta is stated anywhere in this filing.

## Construction (by cure cluster, convergent order)

- **C1 (stage 1):** `timing.readMsPerChar` 12→20, `timing.typeStartSec` 1.0→0.7 (CONFIG only). FIG.21: completed hold 89 chars × 20ms = **1.780s** (was 1.068s), typing 1.420s ≥ `minTypeSec` 0.8, completion 2.120s within the unchanged 3.9s window; no figure window moved, total duration stays 22.5s. Validation rejects a swapped summary whose derived typing duration falls below the named minimum at the new rate (asserted).
- **C2 (stage 2):** every-figure spacing sweep under A-C012-1. Single-source CONFIG `layout` keys now consumed by BOTH the CSS/builder and the fit model: `figPadTopPx` 6, `headingMarginTopPx` 3 + `headingMarginBottomPx` 8 (= the rendered 11px heading total; the model reserved 6px), `srcMarginTopPx` 6, FIG.20 phone gap = `rowGapPx` 18 and FIG.24 phone gap = `counterGapPx` 24 in the model (both modelled 8px before; FIG.22's `fig22GapPx` 8 unregressed). `layout.bottomClearancePx` 8 added to the phone stage-height derivation and to the stack budget; fit recomputed AFTER all spacing + label changes: **default stage 553.0px @360/390, maximum stack count 14 → 619.0px, both ≤ 640** (536.8/616.8 were prior heights + clearance, not results). `typeFloors.label` 11→12; `.src` opacity deleted, source lines consume new `palette.secondary` #595344 (modelled contrast on paper 6.03:1, asserted ≥ 4.5:1 from the palette values). Org `perRow` re-derived in this stage with the actual `orgRowGapPx` and the 12px-floor `nodeW` (perRow 2 at 360px; model == builder asserted for nodes 4/6/8). Badge keys `timing.badgeDur` 0.15 (q units) + `timing.badgeEasePow` 2 pre-introduced here, CONFIG-only.
- **C3 (stage 3):** stamp positioned from its transformed bounds: new `stampAabbAt` model computes the rotated AABB's left/right edges from the untransformed box, centre transform-origin, −8° rotation and scale; the builder offsets the stamp by the computed `stampOffsetX` (75.8px @360) so the AABB sits inside the correction block at entrance/overshoot/settle at 360/390/960 (asserted over sampled scales). The render-side `Math.min(st.stampScale, g.stampCap)` clamp is deleted; the fitted cap is threaded through `correctionState` into `stampScaleAt` as the curve's start value (max sampled scale == cap, no flat segment at the cap, strictly decreasing approach, overshoot/compression/settle retained). Dependents (`stampH`, `stampAabbW`, notes band) re-derived from the positioned-AABB model.
- **C4 (stage 4):** cliff marker x now computed from the graph's own time-to-x mapping, `cliffAt / animFraction(fig)` (0.68/0.85 = 0.80 of width at defaults; asserted under swapped `cliffAt` and swapped `minHoldSec`). FIG.20 CONFIG final point [0.97, 0.30] → [0.97, 0.62]: final-segment rise 0.44 (≈73% of the preceding 0.60 fall). Dispute price (A-C014-1): no segment-frame measurement of the specimen spike height stands in the record; the value is relative-derived, not measured.
- **C5 (stage 5):** stack counter counts SETTLED units (`ai ≥ 1`), so counter-final time == last-unit settle time (2.700s within FIG.22's window; asserted at defaults and under swapped stackCount 14). Timed badge entrance consuming the stage-2 keys: `badgeQ = clamp01((q − badgeAt)/badgeDur)`, opacity = badgeQ, scale = lerp(badgeFrom, 1, badgeE) with `badgeE = 1 − (1 − badgeQ)^badgeEasePow`; FIG.23 onset 2.400s, completion 2.850s, entrance duration 0.450s, completing inside the animation portion. **Resulting completed hold after the badge settles is 0.750s — a reduction of 0.450s from the prior 1.200s, priced in the plan (−1…−3 timing / −0…−2 readability against aims); the 1.200s hold is NOT claimed intact.**
- **C6 (stage 6):** motion literals into CONFIG (`timing.stackEasePow` 2, `stampEasePowIn` 3, `stampEasePowOut` 2, `animFractionFloor` 0.05 — values unchanged, every use site consumes the key, mutation-asserted). Formatting family into a new `formatting` CONFIG block: `counterLocale` "en-US", `ofWord` "of" (sole rendered consumer: the waffle builder's count line; mutation assertion filed — swapping to a probe word changes the displayed waffle count text and no other figure's text), `nodeSymbol` "⬛", `badgeStarSep` "  ★ ", `badgeDashSep` " — ", `ceoSep` " — " (both badge sites consume the same keys). Schedule validation: figure windows must be contiguous (each start = previous end) and the last end must equal `duration`; violations are named errors. Waffle builder lays dots in explicit rows of `waffleCols` at the single `waffleGapPx` pitch the model budgets (modelled grid dims == builder dims, swaps 15→30 asserted); org `perRow` re-asserted as a regression check only. Unsupported figure types produce a named validation error, and scene assembly renders collected global validation errors into a `.warn` element when the error list is non-empty (both branches asserted; zero-warning default renders no warn element). Longer swapped masthead/meta/counter strings are priced by the fit model (counter-card height derives from wrapped label/sub line counts).

## A-C012-1 basis table (unit → basis box → rendered consequence at 360px)

Filed in full in `fit-table-attempt4.md` (figure top padding → `figPadTopPx` → content starts 6px below figure top in model and cascade · heading margins → 3+8=11px → headH reserves the rendered total · FIG.20 phone gap → `rowGapPx` 18 · FIG.24 phone gap → `counterGapPx` 24 · FIG.22 gap → `fig22GapPx` 8 · source margin → `srcMarginTopPx` 6 · bottom clearance → `bottomClearancePx` 8 → binding figure bottom 545.0px vs stage 553.0px).

## Actual sub-animation completion / hold table (C5a — computed from the final state functions, probe-bound in the stage-5/final checks)

| Figure | Actual completion within window | Completed hold |
|---|---|---|
| FIG.20 draw-on | 2.760s | 0.840s |
| FIG.21 summary typing (fill completes earlier) | 2.120s | 1.780s |
| FIG.22 stack settle (= counter final) | 2.700s | 0.900s |
| FIG.23 badge entrance completes | 2.850s | 0.750s |
| FIG.24 collapse completes | 3.400s | 0.600s |
| FIG.25 last note completes | 2.720s | 1.080s |

## Own checks (final source, all PASS)

Six stage suites + a Verify suite re-run on the frozen final source: effect-mapped swap tests (waffle, org 4→6, bars 4→7, counter range, notes 1→4, longer endpoint labels, longer summary, longer masthead/meta/counter strings, swapped cliffAt/minHoldSec, swapped stackCount) · displayed-state assertions (stamp AABB position at entrance/overshoot/settle × 360/390/960, FIG.22 source-line clearance 8px at default and maximum stack, badge mid-entrance state, meta wrap states) · mutation-based CONFIG consumption census (258 leaves, 0 unconsumed — `config-census-attempt4.md`) · literal census (attempt-3 residual content literals absent outside CONFIG; remaining literals classified structural per-literal below) · CSS-parse leg (76 declarations parse; spacing declarations equal the single-source model values) · purity grep 0 subject hits (SVG namespace the standing exception) · inline script parses · comparison interface unchanged.

## Literal census — per-literal structural classifications (outside CONFIG)

Arithmetic identities and identity elements (0, 1, 2 as counts/halves/pairs, 100 as percent basis in probes only — source-side: loop bounds, array indices, exponent-free identities) · CSS chrome stated in the stylesheet itself (border widths 1px/1.5px/3px/4px, rule height 5px, card padding 12px, control sizes) — page-frame chrome, not technique content · geometry constants inside named CONFIG-consuming formulas (chart padding and geom are CONFIG keys; the residual 24 in card-height formulas is twice the 12px card padding, 10/16/18/22/26/30/40/48 in builders are fallbacks of CSS variables or the CONFIG values they mirror at first paint) · the SVG namespace string (purity exception, standing). Content literals classified structural: **0** — every content-carrying literal (easing exponents, formatting strings, symbols, separators, the "of" wording, locale) lives in CONFIG as a named key.

## Staged checkpoints (construction isolation only — A-C010-1a/A-C012-4)

`checkpoints/attempt-4/`: stage-0-preservation (baseline 54 files + content copies) · stage-1-hold-rate (sha 82254d81…) · stage-2-spacing-sweep (0d8cc679…) · stage-3-stamp-aabb (6a70eddc…) · stage-4-cliff-spike (95638b5b…) · stage-5-timing-inventory (1e19f67d…) · stage-6-reusability (0d04b443… = final source). Each checkpoint = content copy of the source as left by that stage + that stage's own-check output, filed create-once before the next stage began; inode independence asserted at each filing. Numerical attribution BUNDLED (see head of this record).

## A-C008 pre-scoring legs (on the NEW attempt's source)

- `fit-table-attempt4.md` — HIT list 17 rows (label-class ink 8.6px at the raised 12px floor vs the leg's ~11px ink floor; re-priced disposition filed in the leg — floor raised 11→12, source contrast strengthened to a modelled 6.03:1, containment + 8px clearance pass).
- `config-census-attempt4.md` — 258 CONFIG leaves, 0 unconsumed; literal scan clean; HIT list empty.

## Deferral dispositions (plan §3)

- D1 rendered phone verification — render route re-attempted once, failed at startup (quoted above); every sub-item outstanding, PIXEL-UNVERIFIED stands. Its priced risks remain this attempt's exposure.
- D2 scheduling derivation — validation alternative taken (C6); derivation deferred per plan.
- D3 self-start — **named limitation:** the piece renders its first frame on load but does not start playback on its own; playback requires the Play control or the comparison page's slave clock. Printed here, never as a scoring exemption.
- D4 long-content desktop adaptation beyond the swapped-string fit assertions — deferred per plan; the fit model prices swapped lengths (C6).
- D5 FIG.20 spike's exact specimen height — relative-derived value shipped with its dispute price (C4); frame measurement is a future Observe act.

## Source-comment neutralization (A-C008-4)

Final source comments scanned before payload assembly: 5 construction comments, all neutral (no cure codes, amendment labels, or cure-to-lens commentary) — no neutralization required, no source change after the stage-6 freeze.
