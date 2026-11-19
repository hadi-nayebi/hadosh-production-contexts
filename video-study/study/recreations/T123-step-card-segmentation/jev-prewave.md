# jev-prewave — T123 step-card segmentation · Cycle 020 Wave 17 · attempt 1

VERDICT: FIRE-WAVE

## Dimension scores (0–1)

- (1) PARAMETERIZATION: 0.92
- (2) PURITY PRE-CHECK: 0.95
- (3) OWN-CHECKS COMPLETENESS: 0.90
- (4) TECHNIQUE FIDELITY PLAN: 0.88

Floors applied: no dimension < 0.5; ASSERTED-CHECKS does not apply (see §3).

## (1) PARAMETERIZATION — 0.92

Genuinely CONFIG-driven, not a config costume. The CONFIG block in recreation.html carries: steps[] with n / title / sub / atMs and headline[] spans with a `style` field (plain / blue / chip rendering branches in code); tileEnterMs 600; cycleMs 14000; stage {width: 360, height: 203}; grid.cellPx; the full palette (field, grid, ink, blue, chipBg, chipInk, card, cardEdge, subInk); type (font, headline / numeral / title / sub sizes, weights and line-heights); and geom (headlineTop, tileY, tileW 158, tileH 112, tileGap, tileRadius, pads, border, inter-row gaps, chip geometry, enterRisePx / enterFromScale / enterFromOpacity). All construction and state logic reads only CONFIG, with a `?cfg=` deep-merge override.

Corroborated, not merely claimed: config-census.md resolves every CONFIG key, including steps[] array-member keys, to an application site, reports no CSS variables, and prints HIT list EMPTY, with the pre-wave cure recorded (CSS line-height literals moved into CONFIG `type.*LH`, applied inline at build). Literals outside CONFIG are classified in the census as structural/chrome only — page background `#070a18`, error-banner `#fff` / `#a00` and its 12px monospace / 4px padding, the 1px grid hairline rendering CONFIG palette/grid spacing, and the CHAR_W / 1.06 / 0.716 fit-measurement model — none shapes a subject element inside the stage. The swap test (see §3) proves regeneration under changed words, timing and palette through the single palette key.

## (2) PURITY PRE-CHECK — 0.95

Construction route is generation from parameters, with no tracing or embedding step in the prose or the code. Build record: one self-contained recreation.html; DOM construction; JS-clock state machine (stateAt: exclusive active headline + monotonic tile accumulation on a 14000 ms cycle); grid ground generated from CONFIG; no external assets; no captions/subtitles. The HTML itself contains no `<video>`, `<img>`, `url(`, or source-media reference — tiles, chip and grid are created in-code from CONFIG.

Purity grep is recorded with its exact G1-A pattern (`segment\.mp4|source\.mp4|<video|<img|url\(|l2_pKB1EbMQ|t[0-9]+\.jpg`) and its result: 0 hits over recreation.html. comparison.html's legitimate references to segment.mp4 + recreation.html are explicitly excluded from that grep, as stated in the record.

## (3) OWN-CHECKS COMPLETENESS — 0.90

Results are recorded with values, not asserted — ASSERTED-CHECKS does not apply.

- Swap test (§2 exact values, §2b timing form, node harness on a scratch copy): title "Download" → "Prepare"; atMs scaled 6500→4000 (×0.6154: step 1 2000 → 1231, step 2 12000 → 7385); palette blue "#3b82f6" → "#3ac95c" driving numeral, operative span and tile edge. Result recorded as PASS with re-measurements: swapped title 64.4 px against the 140 px tile inner, correct states at t=1231 and t=7385, monotonic accumulation preserved, cycle still exactly 14000 ms, headlines re-measured 288.0 / 225.8 px.
- Purity: grep result 0 hits (pattern above) plus a no-external-assets inventory.
- Syntax: `node --check` on both inline scripts recorded clean, re-run after the line-height cure.
- Boundary checks: stateAt sampled at 0 / 1999 / 2000 / 2300 / 2600 / 6000 / 11999 / 12000 / 12600 / 13999 / 14000, with headline exclusivity (active ∈ {−1, 0, 1}, single value) and tile sets {01} on [2000,12000) and {01,02} on [12000,14000) recorded, reset at the wrap as the only clearing event.
- A6 legs on the final build: fit-table.md carries measured rows for both headlines, the numeral, both titles, all sub lines and the swap row (smallest subject ink 11.46 px vs the ~11 px floor, margin 0.46 px printed as a watch; numeral ink 17.18 px), HIT list EMPTY; config-census.md HIT list EMPTY.
- The one limitation is printed, not hidden: comparison check is LOGIC level and PIXEL-UNVERIFIED (no browser binary in this seat), consistent with the guards.md printed limitation for this seat.

## (4) TECHNIQUE FIDELITY PLAN — 0.88

The record states which T123 mechanics are implemented and which are deliberately deferred, matching the TECHNIQUES.md T123 entry (numbered, titled step cards appear as narration reaches them; each card a promise the next screen insert redeems; tiles accumulate; the viewer always knows which step they are inside).

Implemented and named: headline per step at top on a dark-navy grid ground with the operative span blue or in a white chip; accumulating numbered tiles below (blue numeral + title + sub) via one persistent tile node per step, presence monotonic within the cycle (`u >= atMs`, swept at 50 ms steps); exactly one active headline (the latest step whose atMs has passed); segment-anchored schedule at atMs 2000 / 12000 inside a 14000 ms cycle, segment 270–284 s with a 56-frame, 0.25 s firsthand census in the record.

Deferral named, therefore lawful: the specimen's screen inserts are NOT recreated — named in the Observe gate-out / §2b named deferral as specimen media, purity-barred, with the ORIGINAL side of the comparison carrying the inserts; the prompt bar under headline 2 is likewise named in the deviation register as insert-layer support under the same deferral class. No packet mechanic is silently absent.

Deviation printed and priced, not hidden: the segment's own frames place tile 02 at ≈6–7 s and headline 2 at ≈8–8.5 s, and tile 01 at ≈3.0–3.5 s, while binding §2b anchors step 2 (headline+tile) at 12000 ms and step 1's tile with its headline at 2000 ms. The build follows §2b exactly and the record assigns that discrepancy to the timing lens to price. This is a disclosed fidelity tension for the wave to score, not a silent deferral and not a pre-wave bar.

The builder's forecast in the record was disregarded, per the call's masked view; this judgment prices the paperwork only.

## Defect classification

None. No primary rejection class applies: not HARDCODED-CONFIG (CONFIG is applied and swap-proven), not TRACING-STEP (generation-from-parameters route, purity grep 0 hits), not ASSERTED-CHECKS (swap, purity, syntax, boundary and A6 results are recorded with values), not SILENT-DEFERRAL (screen inserts and prompt bar are named deferrals; the §2b timing deviation is printed).

BODY-WRITE: Filed this full raw jev-prewave return verbatim to ~/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T123-step-card-segmentation/jev-prewave.md
