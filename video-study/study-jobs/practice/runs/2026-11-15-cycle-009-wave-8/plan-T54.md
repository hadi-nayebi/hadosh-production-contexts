# Plan — T54 map-as-table roster · Attempt 2 · Cycle 009 Wave 8 (2026-11-15)

Prior: 72.2 (motion 73 · timing 57 · purity 100 · reuse 76 · readability 55), min 55. Target: beat 72.2; aim ≥85, every lens ≥70 (needs +64 lens-points; timing +13, readability +15 to floors).

## R-OBS-1 — Full-record read list (all read firsthand this cycle, before this plan)
1. practice INSTRUCTION.md §0–§10 + amendments A-C002-1/2, A-C003-1/3, A-C004-1/2, A-C005-1/2, A-C006-1/2/3, A-C007-1, A-C008-1/2/3/4 + A-C008 pre-scoring legs.
2. This run's RUN.md §1 (cure inventory + delta target) incl. Codex-Observe-expanded cures 6–8.
3. Item scores.md IN FULL (attempt-1 table, 8 priced cures, plateau, limitations).
4. ALL prior Codex lens returns under artifact codex/: lens-motion (73), lens-timing (57), lens-purity (100), lens-reusability (76), lens-readability (55) — full text, not summaries.
5. Prior build-record.md in full (allocation-model disclosure, §5 arithmetic: 46 overlapping pairs, min centre distance 9.4, HI plate y 248→261, type 9/8.5/7px).
6. Packet evidence: digest.md P3-T06 catalogue mechanics (flat-color map as table; chip + name label + Elect tag; chapters zoom to region; full-55 map at completion; 1:30–throughout) + TECHNIQUES.md T54 line + ev/t95.jpg / ev/t745.jpg descriptions in build-record §1 (t190 caption gap noted there).
7. Segment re-observation firsthand (below).
8. guards/jev-plan-exit.md (§2.4 standing failure points), guards/guard-measured-fit.md, guards/guard-config-census.md, practice guards/guards.md (mechanical guards 1–3 + scale validation).

## A-C006-1 / A-C008-1 — Anchor + event-sequence re-observation (identifiable segment evidence)
Segment: artifact segment.mp4, 14.000s (ffprobe), frames extracted at 2fps to /tmp/t54frames/f01–f28 and viewed firsthand:
- f01 (0.0s): camera zoomed on Midwest (IL gold / IN teal / OH green): two IL portrait chips, OH chip with dark name plate + yellow-on-dark "Elect" tag; money-stack prop on KY (another technique's device). → **Midwest zoom holds 0–3s** ✓ (f01–f06 range; f06 at 2.5s already full — transition completes ≈2.5–3s).
- f06 (2.5s) + f08 (3.5s): full US map, ~55 chips placed, NE chips displaced over the Atlantic on connector lines (specimen's own collision cure — displaced anchors + connectors). → **Full map 3–6s** ✓.
- f14 (6.5s): camera panned right/east — map shifted left, ballot board entering at right edge. → **Pan away 6–7s** ✓.
- f16 (7.5s): ballot-arc board full-frame (T53's device, outside T54's mechanic).
Event sequence CONFIRMED as tasked: Midwest zoom 0–3s → full map 3–6s → pan away 6–7s → (T53 board 7–14s). No premise conflict; no mid-cycle premise amendment anticipated. The specimen pan leads into T53's device; attempt-1's motion return ruled its omission no-deduction — the build carries the pan as an out-of-mechanic exit (not built; see Deferred).

## Cure plan (convergent first; RUN.md §1 inventory incl. expanded cures 6–8)
- **C1 (convergent, 4 lenses) — full-roster arrival + dwell.** Construction: keyframed camera track (buildTimeline) — Midwest hold → interpolated move to full arriving 3000ms → full dwell; duration DERIVED = passStart + pass + return-move + final hold (no stored durationMs; fullAt/completion derived from placement span). Return-to-full after the roster pass is likewise interpolated. Swap/compression arithmetic re-derived: passStart = max(specimen full-dwell end, placeEnd + post-place hold) so a 56-chip unchanged-cadence roster still fits (completion inside duration by construction + validation).
- **C2 (convergent, readability+motion) — identity access + camera coverage.** Construction: (a) roster reordered so every chip placing during the Midwest hold lies inside the Midwest camera window (asserted per-chip at its place time against the interpolated window); all later placements occur in full view. (b) After completion, a CONFIG roster pass visits 5 regions (West · Central · Midwest · South · Northeast), camera centred on each region's laid-out chip centroid at a per-region CONFIG scale; during each region's hold, that region's name plates show — union over the pass = all 55 identities, never simultaneous.
- **C3 (timing, structural) — specimen-aligned timeline.** Construction: default timeline IS the specimen sequence: opens on Midwest zoom (0–2100ms hold, move completes at 3000ms = specimen full moment), full map held 3000–6000ms (specimen window), then the roster pass + final full hold as the completion demonstration (packet build-up 1:30–throughout priced in build record). Placement lifecycle integrated into the specimen windows, not displacing them.
- **C4 (readability) — overlap/identity marks.** Construction: deterministic relaxation layout (pairwise separation to CONFIG minCentreDist = 2·chipR + gap, fixed iterations, viewBox-clamped) + connector line from home anchor to any chip displaced > CONFIG threshold (the specimen's own NE device, per f06/f08). Per-chip visibility asserted: no disc pair overlaps; every disc fully in viewBox.
- **C5 (readability, concrete bug) — plates vs camera window.** Construction: plate rect computed in pure logic against the CURRENT camera window (plateRectFor): clamped/flipped inside the window, full-plate reserve strip excluded when the full plate is up, plate↔plate and plate↔tag intersection checks over every simultaneously-visible set at every hold.
- **C6 (reuse, expanded) — literals → CONFIG.** Construction: all presentation values CONFIG'd (elect text/metrics, label metrics, pop-from scale, easing exponent, font family, full-plate style tokens, connector style, type sizes, pass/camera primitives); stage aspect + SVG geometry derived from viewBox; CSS carries structural rules only, colors/sizes set from CONFIG at runtime.
- **C7 (timing+reuse, expanded) — schedule mechanics + validation.** Construction: effective pop = min(popMs, placeMs × popSpacingRatio) (never overlaps cadence); same-state offsets GENERATED deterministically (golden-angle spiral by ordinal, no wrap) + per-state capacity validated; validateConfig() runs BEFORE any DOM construction and rejects unknown/duplicate state IDs (states, zooms, pass regions), duplicate chip identities, nonpositive durations/geometry, placement-overrun, and regional-readiness failures with field-specific errors.
- **C8 (readability, expanded) — phone-readable sizes.** Construction: initials 16 / label 15 / elect 16 (CONFIG), accommodated by the regional presentation (effective ≥23px at pass scales); measured-fit table files the ink arithmetic per element.
- Plus reuse residuals from lens return: Unicode-aware initials (CONFIG `initials` override per chip + \p{L} derivation + CONFIG missingInitials), unchanged-cadence 56-chip fit (C1 derivation), six-chips-one-state (C7 generation).

## Execute checklist
1. Preservation: cp recreation.html → recreation-attempt-1.html (CONTENT copy, create-once), sha-verify equality BEFORE touching the working file (A-C004-1/A-C005-1).
2. Rebuild recreation.html per C1–C8, CONFIG-first, no specimen media, no captions; scan source comments for cure codes/labels and neutralize (A-C008-4).
3. build-record-attempt2.md in artifact dir — score-blind (neutral technique facts + construction + own-check results + segment re-observation; NO prior scores / cure-to-lens commentary).
4. Own checks (own-checks-T54.js in run dir): swap test with EFFECT mappings per CONFIG key (A-C002-1/A-C006-2), literal census outside CONFIG (A-C008-3), displayed-state assertions (A-C004-2/A-C006-3): per-chip visibility/overlap at holds, plate-vs-camera-window fit incl. reserve, roster-pass identity union, regional readiness, pop<cadence, specimen anchors (full arrival 3000, full window 3000–6000), 56-chip + 6-per-state + non-Latin fixtures.
5. Purity grep (specimen-media patterns → 0) + asset inventory.
6. Comparison check; update comparison.html ONLY if interface changed (derived duration 14000 default — unchanged; ORIGINAL side never changes).
7. Pre-scoring legs (A-C008): guard-measured-fit → fit-table.md; guard-config-census → config-census.md, both in artifact dir, on the NEW file.
8. Five-lens Codex wave: allowlist payloads only (lens instruction + neutral facts + score-blind build record + final source), payloads + returns preserved create-once under codex/attempt-2/, all bound to identical final sha256; scale line in every instruction; scale-misdeclared return → preserve as superseded, re-fire once clarified.
9. File scores.md Attempt 2 (scores · avg · min · signed delta vs 72.2 · verdict; WHY from scaffold below if non-beating). PIXEL-UNVERIFIED if no render route (checked: no Chrome/Chromium binary in this seat).

## Verify checklist
Swap test (logic) · purity grep + inventory · comparison check · measured-fit leg · config-census leg · five-lens wave (codex-rescore-wave discipline) · delta arithmetic recomputed from filed returns (guard 1, incl. scale validation) · preservation census sha before/after (guard 2) · floor-rule gate: WHY present iff non-beating (guard 3) · jev-plateau call point at close if non-beating (seat judging if transport unbound, printed as such).

## Failure-point evaluation (jev-plan-exit §2.4 standing points)
- (a) Big-rebuild attribution risk — PRICED: this attempt changes camera, layout, and label systems together (C1/C2/C4 interact). Mitigation: own-checks assert each cure's effect independently (arrival interpolation, pass union, min-distance, plate fit), so a lens regression can be attributed per system in the WHY scaffold slots.
- (b) Cure interaction — PRICED: relaxation displacement (C4) moves chips away from state anchors, which can break pass-region framing (C2) and plate fit (C5). Mitigation: pass camera centres derive from LAID-OUT positions; plate logic runs on laid-out positions at each hold; both asserted.
- (c) Prior-attempt overwrite / early comparison re-point — RULED OUT by Execute step 1 (create-once content copy + sha verify before any write) and step 6 (comparison touched only on interface change; default derived duration equals attempt-1's 14000, so no change expected).
- (d) Anchor leak — RULED OUT: lens payloads are allowlist-only, anchor-scanned (no scores.md / RUN.md / cure commentary; source comments neutralized per A-C008-4); delta computed by the seat-side filing, never fed.
- (e) Instrument change — RULED OUT: same five lenses, same bar (avg ≥85, min ≥70) as attempt 1.
- (f) Wave fan-out cross-contamination — RULED OUT: this agent writes only the T54 artifact dir + plan-T54.md / own-checks-T54.js in the run dir; RUN.md / HQ.json / verdict-history.md are the seat's.
- (g) Size split evaded — PRICED: the plan takes all 8 cures (no deferral of a priced cure); the only deferred item is the specimen pan-away (out-of-mechanic per attempt-1 motion ruling, not a priced cure). No rebuild-from-scratch split arises: the file is reworked system-by-system on the attempt-1 skeleton's CONFIG schema lineage.

## Deferred (in writing)
- Specimen pan-away 6–7s: NOT attempted — it exits into T53's device; attempt-1 motion return priced its omission at no deduction. The final full hold stands as the closing state instead.

## WHY scaffold (competing hypotheses; outcome slots appended to scores.md)
Stuck-lens hypothesis: readability remains the risk (density is intrinsic to 55 chips on one map); second risk timing (pass extends the timeline beyond the 7s specimen window — a lens may price the pass as displacement rather than demonstration).
Competing hypotheses if non-beating: H1 relaxation still leaves identity marks occluded at full view (layout class) · H2 roster pass priced as non-specimen padding (timeline class) · H3 type sizes still under phone floor at full view (typography class) · H4 a cure interaction (C4 displacement vs C2 framing) regressed motion. Cure-by-cure outcome slots (effect-verified / lens-observation / attribution) are pre-drafted in scores.md's plan section and completed at filing.
