# Plan — T54 map-as-table roster · Attempt 3 · Cycle 010 Wave 9 (Plan phase ONLY)

Governing: practice INSTRUCTION §1–§2 · jev-plan-exit §2.4 · recreation purity/bar law.
Item: T54, artifact `hidden_files/study/recreations/T54-map-as-table-roster/`.
Prior: attempt 2 avg **76.0** (motion 80 · timing 66 · purity 100 · reuse 70 · readability 64), min 64.
Target: **beat 76.0; aim ≥85 with every lens ≥70** (needs +45 lens-points total; timing +4 and readability +6 merely to clear floors).
Preservation (§2.3, done in Plan): `recreation-attempt-2.html` created as a CONTENT copy (`cp`, distinct inode 4845009 vs 4760039), sha256 `02f31dd34dd13fccd3041233578adfb55dddb95fc674a7cfa7644a9f51a36ed4` = `recreation.html` = seat baseline entry for `T54-map-as-table-roster/recreation.html` in this run's `preservation-baseline.txt`. PASS.
This plan does NOT rebuild `recreation.html` and does NOT fire any Codex lens wave.

## 0. Anchor re-observation (A-C006-1) — re-checked against source firsthand

Source read: `recreation.html` (33,902 chars, sha above), CONFIG block + `labelVisible` + timeline derivation.

| Anchor in cure inventory | Source evidence | Verdict |
|---|---|---|
| Placement completes 4400 ms vs full arrival 3000 ms | `authoredPlaceEndMs: 4400`; `placeMs: 80` × 55 chips = 4400; arrival = `midwestHoldMs 2100 + cameraMoveMs 900 = 3000` (build-record §2/§3 agree: placement end 4400, full arrival 3000) | CONFIRMED — no conflict |
| Wave step 1200 ms / move 900 ms, ~150 ms settled per wave | `passStepMs: 1200`, `cameraMoveMs: 900`, `passWaves: 2`; step hold = 300 ms split by the wave switch ⇒ ~150 ms stationary per wave (timing return: switch at step+1050; readability return phrases the same arithmetic as "~600 ms per wave incl. movement") | CONFIRMED — lenses phrase it differently, arithmetic agrees; not a conflict |
| Full-plate reserve ~34 px actual vs 24 units reserved | `fullPlate: {sizePx:16, padY:5, bottomPx:8, reserveUnits:24}` ⇒ rendered need ≥ 16+2·5+8 = 34 px before line-height, vs `reserveUnits: 24` consumed by the plate search | CONFIRMED — reserve is under-measured by ≥10 units |
| `passWaves` hardcoded 0/1 | `labelVisible` selects wave via a ternary ending `? 1 : 0` despite `passWaves: 2` in CONFIG; a 3-wave config silently loses group 3 (reuse return −8) | CONFIRMED in source |
| Grapheme-unsafe initials | `charAt` ×2 and `slice` present; no `Intl.Segmenter` anywhere in source | CONFIRMED |
| Formula-width fit | `labelCharWidth: 0.56`, `electCharWidth: 0.48` drive plate/tag widths; the `glyphWidths` table is consumed only for initials — plate/tag text is never measured | CONFIRMED |
| Midwest dwell ends 2100 ms | `midwestHoldMs: 2100`; the 900 ms move therefore runs 2100–3000, inside the specimen's measured 0–3000 ms regional window (timing −4) | CONFIRMED |

**CONFLICT FOUND (material, priced in §1/§3): the pan-away.** Attempt-2 MOTION return: "The specimen's subsequent exit into another technique is outside this mechanic and receives no deduction." Attempt-2 TIMING return: **−14** for the missing 6–7 s pan-away, cure "preserve the measured pan-away at 6000–7000 ms; schedule the completion demonstration separately." Attempt-1 returns split the same way (motion: no deduction; timing cure 3: specimen-aligned timeline). Resolution per A-C006-1: the segment evidence is identifiable and agreed by both builds' re-observations (frames: full map 3–6 s → pan away 6–7 s → ballot board 7–14 s, build-record-attempt2 §1) — the *sequence* is not in dispute, only its lens jurisdiction. The plan therefore treats the pan-away as a REAL timing cure (C-T1) and prices its motion risk explicitly, rather than deferring it on motion's no-deduction ruling — that deferral is exactly the A-C009-3 failure that cost timing in attempt 2.

## 1. Cure plan — convergent-lens findings first (Amendment A1)

Convergence key: **[T+R]** timing+readability · **[M+T]** motion+timing · **[R+Ru]** readability+reusability · single-lens items follow.

### Convergent cures

**C-X1 [T+R, −7 timing / −14 readability — the largest shared defect] — Reading dwell per wave.**
Construction: derive each pass step from movement + explicit reading dwells, not a fixed 1200 ms literal: `passStep = cameraMoveMs + passWaves × dwellPerWaveMs`, where the new CONFIG key `dwellPerWaveMs` is sized from the region's wave name-count and longest label (dwell scales with names-per-wave; floor named in CONFIG, target stationary ≥ ~1200 ms per wave at default roster — an ~8× rise on today's ~150 ms). Wave switches occur *inside* the stationary interval only. Duration re-derives from the new step (derived-duration rule preserved); the final full hold is protected, not cannibalised (see failure point F2).

**C-X2 [M+T, −8 motion / −6 timing] — Roster completes before first full arrival.**
Construction: re-order placement so placement + last pop settle complete ≤ the 3000 ms full arrival: compress the placement cadence for the pre-arrival span (or front-load all placement into the opening + move windows) so `placementEnd + popSettle ≤ fullArrivalMs (3000)`, with the ordering asserted, not assumed (Verify V10). `authoredPlaceEndMs` ceases to be an authored 4400 literal that contradicts the timeline — it is derived/validated against arrival. This also carries motion's "arrival reveals an assembling roster" defect.

**C-X3 [R+Ru, readability −5 / reuse −3, same root] — Measured text, everywhere.**
Construction: one measured-text path for plates, tags and initials: extend the existing `glyphWidths` table consumption (or a font-metrics profile keyed to `fontFamily`) to plate/tag width computation, replacing `labelCharWidth 0.56` / `electCharWidth 0.48` formula estimates; a `fontFamily` swap without a matching metrics profile fails validation. Carries readability's formula-fit deduction and reuse's font-metric coupling together — fixing only one side re-opens the other.

### Timing cures (single-lens, after convergent)

**C-T1 [timing −14] — Restore the pan-away; move the roster pass after it.**
Construction: timeline becomes specimen-ordered: Midwest zoom 0–~3000 → full map ~3000–6000 (completed roster, per C-X2) → **pan-away 6000–7000** (interpolated camera exit, map leaves frame) → roster pass as a separately identified completion demonstration after the pan-away window → interpolated return to full view + count-plate hold to the derived end. The pass is labelled in the build record as post-window demonstration (the attempt-1 allocation-model honesty device), so timing is not asked to price it as specimen time. Motion risk priced in §3/D1 — NOT silently assumed away.

**C-T2 [timing −4] — Midwest dwell to the measured boundary.**
Construction: `midwestHoldMs` re-budgeted so the regional state lasts to ~3000 ms: hold + move are budgeted *against* the 3000 ms boundary explicitly (e.g. hold 2100 + move 900 already sums to 3000 — the cure is to keep the camera *framed on the region* through the move's regional portion / start the move at the boundary the evidence supports, per the segment frames; Execute re-observes the frames and files the chosen split in the build record). No silent shortening of the opening state.

**C-T3 [timing −3] — Cross-field ordering validation.**
Construction: pre-DOM validation rejects `passStepMs < cameraMoveMs` and, generally, any step/move/dwell combination that yields backward-ordered keyframes; with C-X1's derived step this becomes a derived-value check (dwell ≥ 0, move < step) with field-specific errors. (Also serves reuse C-Ru2.)

### Readability cures

**C-R1 [readability −8, + tag clause −5] — Foreground identity layer + full identity-bounds collision.**
Construction: name plates and Elect tags render in a dedicated foreground SVG layer *above* all chip groups (today each label renders inside its own chip's group, so later groups overpaint earlier plates/tags). Plate/tag searches reserve **full disc + initials bounds and full tag rects** (not centres only), including a tag's own chip's initials; regional camera fitting includes tag extents so tags cannot clip at region edges. Displayed-state assertions per A-C004-2/A-C006-3 in Verify V9.

**C-R2 [readability −5, reserve clause] — Full-plate reserve = measured bounds.**
Construction: `fullPlate.reserveUnits: 24 →` the measured rendered value (≥34 at default tokens: 16 size + 2×5 padY + 8 bottom, plus line-height allowance), *derived* from the fullPlate tokens in code rather than re-typed as a new literal, so a token change re-derives the reserve. Plate search consumes the derived reserve.

**C-R3 [readability −4] — Completed overview name access.**
Construction: the completed state gains a readable roster index: the final full hold lengthens (protected in the derived duration) and the overview cycles/keys identities through the foreground layer (e.g. a slow keyed index pass over regions at full view, or a repeatable regional reading sequence) so completion does not depend solely on the brief pass + the single latest-chip plate. The fit-table's borderline row (latest-chip plate ink 10.7 px at full view) is re-priced under this cure: the full-view plate stops being an identity channel.

### Reusability cures

**C-Ru1 [reuse −8] — Generalize `passWaves`.**
Construction: `labelVisible` derives the wave index from elapsed regional time, `min(passWaves−1, floor(elapsedInRegion / dwellPerWave))`, consuming the CONFIG value for any wave count; own-checks assert exposure for every member under a 3-wave fixture (A-C002-1 effect mapping, not a count).

**C-Ru2 [reuse −8] — Cross-field + population validation.**
Construction: extend pre-DOM validation: empty opening region, pass regions with no roster members, invalid viewBox, nonpositive `authoredPlaceEndMs`/derived placement end, `cameraMoveMs > passStepMs` (with C-T3), zero `tagGridStep` (hang guard — validate before any search loop runs), non-finite values throughout. All rejections field-specific, before layout/timeline computation.

**C-Ru3 [reuse −5] — Layout-feasibility gate.**
Construction: after relaxation + tag/plate searches, validate the *final* layout: min centre separation met, no tag/plate fallback overlaps, plate feasibility across all identity waves; an infeasible configuration is rejected explicitly (or layout adapts under a named policy) — never silently degraded. Gate output is observable for the own-check suite (A-C006-4-style recorded result).

**C-Ru4 [reuse −4] — Grapheme-safe initials.**
Construction: normalize names and extract initials via `Intl.Segmenter` grapheme clusters with a documented locale + initials policy in CONFIG; combining marks / supplementary-plane letters / decomposed accents covered by fixtures. Replaces `charAt`/`slice` extraction.

**C-Ru5 [reuse −2] — Policy literals into CONFIG.**
Construction: the one-unit layout inset, two-initial limit, and full-view scale threshold become named CONFIG keys; accessibility label and error-prefix strings become CONFIG localization values; pure arithmetic constants stay in code and are *named as such* in the build record (A-C009-4: no content literal may be classified structural).

### Motion cures

**C-M1 [motion −7] — Plate positions stable within a beat, interpolated between beats.**
Construction: plate search results are held fixed within each beat; a relocation required by a beat change is interpolated over the beat's camera move (plates carry a from→to position across the move) instead of recomputed per frame through the discrete search.

**C-M2 [motion −3] — Connectors outside the pop group.**
Construction: connector lines move out of the scaled chip group; the disc pops (scale/opacity) while the connector animates opacity only, its home endpoint fixed at the map anchor throughout the pop.

**C-M3 [motion −2] — Count plate after the last pop settles.**
Construction: the full-roster count plate's reveal time = last placement start + effective pop duration (settle), asserted in own-checks; with C-X2 this lands at/before the 3000 ms arrival.

**Purity: no cure owed** (100 in both attempts; no deductions in either return). Purity is *protected*, not worked: every cure above is CONFIG/geometry/timeline construction — no media, no traced shapes, no new external reference may enter (Verify V3).

## 2. Deferrals — each priced under EVERY lens that can see the beat (A-C009-3)

**D1 — DEFERRED: nothing on the pan-away beat is deferred; the *reverse* risk is recorded here because attempt 2 deferred this beat on motion's ruling.** If Execute instead deferred C-T1 again: timing −14 stands (priced), readability unaffected directly, reuse unaffected, purity unaffected, motion 0 by its own ruling — net expected cost ≈ −14 on one lens ≈ −2.8 avg, and timing stays the stuck lens. The plan does NOT take this deferral. Residual risk of *doing* C-T1, priced per lens: motion — a badly interpolated exit could cost motion points the attempt-2 return never threatened (mitigation: single-camera interpolation, same primitive as the existing return move; Verify V9 camera-continuity sampling); timing — gain only if the pass is genuinely re-homed after 7000 ms, not overlapped into 6000–7000; readability — the pass moving later lengthens total duration, no exposure loss (C-X1 dwell is protected by derivation).

**D2 — DEFERRED: pixel/render verification.** No exercisable Chrome in this seat (standing limitation, A-C002-2). Priced: readability — all displayed-state claims remain source-model claims; PIXEL-UNVERIFIED prints on the filing and no lens may be claimed "render-verified"; motion — camera continuity is sampled arithmetically, not played; timing/purity/reuse — unaffected (source-priced by construction). Reason: route blocked, not chosen; the comparison page remains the render surface.

**D3 — DEFERRED: specimen-evidence expansion beyond the 14 s segment for the placement lifecycle.** The build-up is priced from the packet's 1:30–throughout span; no new specimen window is sought this attempt. Priced: timing — the lifecycle remains a labelled allocation model; if the lens re-prices the model itself (attempt-1 timing cure 3's alternative), C-T1+C-X2 do not cure that and timing's ceiling this attempt is ~80; motion — no cost (attempt-1 motion accepted the labelled model); readability/reuse/purity — no cost. Reason: §8 size discipline — the convergent cures already restructure timeline, layering and validation in one attempt; evidence expansion is the next attempt's Observe, named here so it is not a silent drop.

**D4 — DEFERRED: raising full-view type sizes (attempt-1 readability cure 8's size arm).** Attempt 2 raised sizes (initials/elect 16, labels 15) and its readability return ruled typography OUT as the binding defect ("exposure time + occlusion layering, not size" — scores.md H3 ruled out). Priced: readability — residual risk only if the foreground layer (C-R1) exposes that full-view 15–16 units is still sub-floor at fitted regional scales below the configured ceilings (fit-table must use *fitted*, not ceiling, scales — Verify V7); motion/timing/reuse/purity — no cost. Reason: evidence says size is not the stuck variable; re-spending on it is the H3 error repeated.

No other cure in the RUN.md inventory or the attempt-2 returns is absent from §1: every priced deduction maps to a cure above or to D1–D4.

## 3. Failure-point evaluation (jev-plan-exit §2.4 + item-specific)

Standing points (a)–(g) from jev-plan-exit §2.4, priced or ruled out for T54:

- **(a) Big-rebuild attribution risk — PRICED, HIGH.** C-X1+C-T1+C-X2 jointly restructure the timeline (step derivation, pan-away insertion, placement re-ordering): a timing regression after this attempt will not attribute cleanly among the three. Mitigation: the build record files each cure's own-check evidence separately (step arithmetic · pan-away keyframes · placement-end ≤ arrival assertion), and scores.md's scaffold (§5) keeps cure-by-cure slots so Condense can attribute at least at own-check level. Accepted residual: lens-level attribution stays bundled — named, not hidden.
- **(b) Cure interaction — PRICED, HIGH, three named interactions.** (i) C-X1 lengthens every pass step ⇒ total duration grows ⇒ C-T1's fixed specimen windows (3000/6000/7000) must be anchored absolutely, NOT rescaled by the existing proportional `timeScale` (the attempt-2 timing return already flags that scaling "also scales the specimen's absolute timing") — Execute must pin specimen windows and let only the post-window demonstration absorb growth. (ii) C-X2 compresses pre-arrival placement ⇒ pop-vs-spacing pressure returns (attempt-1 timing −3 class): pop duration must re-scale against the new spacing (existing `popSpacingRatio` mechanism) and Verify asserts pop < spacing at the compressed cadence. (iii) C-R1's foreground layer + C-X3's measured (likely wider) plates ⇒ plate packing gets harder inside small regional windows; the feasibility gate (C-Ru3) is the cure's own guard — a region that cannot pack must fail loudly pre-wave, not degrade silently.
- **(c) Prior-attempt overwrite / early comparison re-point — RULED OUT by construction.** Preservation copy taken in Plan (see header, sha-verified against the seat baseline); `comparison.html` is re-pointed only if the interface changes and only after the new attempt's own checks pass; its ORIGINAL side never changes. Census re-verifies the preserved copy AFTER the working file's first overwrite (A-C004-1).
- **(d) Anchor leak — RULED OUT by procedure.** Lens payloads are allowlist-only (A-C005-2): neutral source + neutral own-check packet; RUN.md, scores.md, prior returns, target scores and cure commentary are excluded; source comments are scanned as payload content (A-C008-4) and neutralized before payload generation; prior average lives only in seat tasking. Each final payload is inspected for numerical AND qualitative anchors before firing.
- **(e) Instrument-change misread — RULED OUT.** Same five lenses, same bar (avg ≥85, min ≥70) as attempts 1–2 (both five-lens); delta vs 76.0 is a pure same-instrument movement. No four-lens boundary exists for T54.
- **(f) Wave fan-out cross-contamination — PRICED, LOW.** Wave 9 carries four items in parallel; T54's agents write only under `study/recreations/T54-map-as-table-roster/` and this run directory's `plan-T54.md` / T54-named files. One item per directory (§8 per-item rule); the seat census at close checks artifact-dir shas against the baseline for the other three items' dirs.
- **(g) Size-split evasion — PRICED, TAKEN OPENLY.** This plan is large (timeline + layering + validation + text measurement). The §8 split is applied as: all *convergent* cures + their single-lens riders are IN; the deferrals D3/D4 are the written split remainder. A rebuild-from-scratch is NOT taken: the construction (single camera, CONFIG-first, relaxation layout, derived duration) is retained and re-worked — the attempt-2 build's credited machinery (continuous camera, separation, validation skeleton) is evidence, not scrap.

Item-specific failure points:

- **F1 — timeScale rescaling silently moves specimen anchors** (see (b)(i)): the single most likely way this attempt *loses* timing while "curing" it. Verify V10 asserts the absolute anchors (arrival 3000, full-dwell end 6000, pan-away 6000–7000) on the derived timeline, not proportions.
- **F2 — Dwell bought by stealing the final hold:** C-X1's longer steps could be "paid for" by shrinking `finalFullHoldMs` (1100) or the full dwell, trading timing/readability at the completed state for pass dwell. Forbidden in-plan: duration grows instead; Verify asserts final hold ≥ attempt-2's.
- **F3 — Feasibility gate rejects the default roster:** C-Ru3 + wider measured plates (C-X3) + foreground packing (C-R1) could make the *default* 55-chip config infeasible, blocking the build entirely. Mitigation: Execute prices packing on the default roster first; if infeasible, the layout policy (region scale ceilings → fitted scales, plate row count) adapts under CONFIG before any lens wave — a default-roster rejection at Verify is a build failure, not a lens outcome.
- **F4 — Pan-away implemented as a snap or a fade:** a non-interpolated exit re-opens attempt-1's motion −16 snap class in a new place. Verify V9 samples camera continuity across 5900–7100 ms specifically.
- **F5 — Grapheme change alters default-roster initials:** `Intl.Segmenter` extraction must reproduce attempt-2's initials for all 55 default names (regression fixture), or readability/reuse price a silent identity change.

## 4. Execute checklist (numbered — Execute runs against this list)

1. Re-verify preservation before touching the working file: sha256 of `recreation-attempt-2.html` = `recreation.html` = baseline entry; STOP on mismatch (A-C005-1 create-once: never overwrite the copy).
2. Re-observe segment frames (2 fps, firsthand) and file the observed event sequence in the build record (A-C008-1 premise beside C-T1/C-T2: zoom 0–3 s → full 3–6 s → pan-away 6–7 s); if Execute's observation contradicts a plan premise, file a MID-CYCLE PREMISE AMENDMENT and build to the evidence.
3. Build in cure order: C-X2 (placement ≤ arrival) → C-T2 (Midwest budget) → C-T1 (pan-away + pass re-homed) → C-X1 (derived step/dwell) → C-T3/C-Ru2 (validation) → C-R1 (foreground layer + full-bounds collision + tag-extent fitting) → C-X3/C-R2 (measured text + derived reserve) → C-R3 (completed-overview access) → C-Ru1 (passWaves generalized) → C-Ru3 (feasibility gate) → C-Ru4 (grapheme initials) → C-Ru5 (policy literals) → C-M1 (plate interpolation) → C-M2 (connectors out of pop group) → C-M3 (count plate at settle).
4. CONFIG-first throughout: every new value (dwell floor, reserve derivation inputs, policy keys, localization strings) lands as a named CONFIG key; no traced/specimen media; no captions; purity construction unchanged in kind.
5. Pin specimen windows absolutely (F1): arrival 3000 · full dwell to 6000 · pan-away 6000–7000 are constants of the timeline derivation; `timeScale` may scale the placement/pass demonstration spans only, never these anchors.
6. Write the attempt-3 build record (neutral, score-blind: segment re-observation, construction facts, per-cure own-check evidence separately attributable per failure point (a)).
7. Run the full own-check suite (Verify V1–V11 instruments at logic level) and fix to green before any wave; a default-roster feasibility rejection is cured in-build (F3), never waived.
8. Neutralize source comments (A-C008-4): strip cure codes/amendment labels/cure-to-lens commentary from `recreation.html` comments; re-run the suite after neutralization.
9. Update `comparison.html` ONLY if the interface changed (config keys/duration); ORIGINAL side untouched; otherwise leave it and record why.
10. Hand to Verify with: new sha256, build record, own-check results, fit-table + config-census outputs (V7/V8) — no lens payload is generated before V7/V8 file.

## 5. Verify checklist (numbered — §5 executes against this list)

1. **Swap test** (logic level minimum; pixel only if a browser route exists — else PIXEL-UNVERIFIED prints): roster swaps with effect mappings (A-C002-1) — 56-chip compressed + unchanged-cadence rosters fit derived duration; six chips on one state get distinct positions; 3-wave `passWaves` fixture exposes every member (C-Ru1); non-Latin/decomposed names yield correct grapheme initials (C-Ru4) AND all 55 default initials match attempt 2 exactly (F5).
2. **Purity grep + asset inventory:** grep for media embeds, external URLs (SVG namespace excepted), traced-path data, specimen-derived contours; inventory every asset reference in the source; expected result 0 specimen media / 0 external loads, matching both prior purity returns.
3. **Comparison check:** `comparison.html` ORIGINAL side byte-identical to baseline; recreation side points at the new attempt only if Execute step 9 fired; page loads the new sha.
4. **A-C008 pre-scoring leg 1 — fit-table.md on the NEW attempt:** source-bound measured-fit table regenerated against attempt-3 CONFIG (fitted regional scales, not ceilings — D4); rows for initials, plates, tags, full plate incl. the *derived* reserve vs rendered bounds (C-R2) and the former borderline full-view plate row re-priced under C-R3. HITs filed with dispositions before the wave.
5. **A-C008 pre-scoring leg 2 — config-census.md on the NEW attempt:** literal census (A-C008-3) outside CONFIG against a build-record whitelist naming every claimed structural constant per-literal (A-C009-4 — no content literal classified structural); consumption census asserting every CONFIG key → a consumed effect (A-C006-2), including the new keys from C-X1/C-Ru5. RUN.md cites both legs' paths + hit counts; missing either = INCOMPLETE.
6. **A-C002-1 / A-C006-2 effect-mapping + consumption census (own-check suite level):** for every CONFIG key and every documented override, an asserted key→effect / override→parsed-behaviour mapping (not counts alone); invalid override combinations rejected ATOMICALLY with the rejection in an observable record (A-C006-4).
7. **A-C008-3 literal census:** full source scan for numeric/colour literals outside CONFIG; every hit is either cured into CONFIG or whitelisted by name in the build record with its structural justification; an unlisted literal fails the suite.
8. **Displayed-state assertions (A-C004-2 / A-C006-3):** source-bound model of DISPLAYED state at named hold checkpoints (opening zoom, full arrival, full dwell, pan-away midpoint/end, each pass region × wave, final full hold): wrapped-state bounds for every text element (line-box / wrapped-pill heights, not single-line proxies); accumulated offsets and border-inclusive fit; transformed endpoints.
9. **Displayed-state assertions, T54-specific (A-C004-2 / A-C006-3 / A-C008-2):** (i) **plate/tag collision** — at every checkpoint, foreground plates/tags are pairwise disjoint AND disjoint from every visible chip's **full identity bounds** (disc + initials + tag rect), not centres; (ii) **identity-bounds checks** — every exposed identity's plate + initials fully inside the camera window, tag extents inside regional fitted windows (no tag clipping); (iii) camera continuity sampled ≤50 ms across the whole timeline incl. 5900–7100 ms pan-away (F4: no snap — max scale/centre step under the attempt-2 thresholds); (iv) plate positions constant within each beat (C-M1) — sampled within-beat plate displacement = 0 except during an interpolated relocation; (v) plan-semantics surfaces as the plan states them (A-C008-2): at full arrival the roster is COMPLETE (no chip still popping), at pan-away end the map has exited, at final hold the count plate is up AND settled.
10. **Timeline/ordering assertions:** placement end + pop settle ≤ 3000 (C-X2); absolute anchors 3000/6000/7000 on the derived timeline at default AND swapped rosters (F1); pass step = move + waves × dwell with dwell ≥ CONFIG floor and wave switches inside stationary intervals only (C-X1); final full hold ≥ 1100 ms (F2); count-plate reveal ≥ last pop settle (C-M3); validation rejects `cameraMoveMs > passStepMs`, empty regions, zero `tagGridStep` (C-T3/C-Ru2).
11. **Mechanical guards (guards.md):** guard 1 delta arithmetic recomputed from filed returns of both attempts; guard 2 attempt-preservation census — sha of `recreation-attempt-2.html` re-verified AFTER the working file's first overwrite and at close (A-C004-1), plus baseline census for the wave's other items (failure point (f)); guard 3 floor-rule gate check (WHY owed iff new avg ≤ 76.0).
12. **Five-lens Codex rescore wave** (`codex-rescore-wave.md`): motion · timing · purity · reusability · readability; allowlist-only payloads (A-C005-2 + A-C008-4 comment scan), payloads + returns preserved CREATE-ONCE under `codex/attempt-3/` BEFORE any subsequent source change (A-C003-1); prior scores in seat tasking only, never inside a lens run; returns filed verbatim.
13. **Filing:** scores + shown arithmetic appended to scores.md as Attempt 3 (average, minimum lens, signed delta vs 76.0, verdict vs bar); cure-by-cure slots in the §5 scaffold completed (effect-verified / lens-observation / attribution).
14. **Floor rule / WHY:** if new avg ≤ 76.0, the WHY files from the pre-drafted scaffold in scores.md (cure-by-cure outcomes, stuck lens, hypothesized cause, next-attempt difference or rest recommendation) BEFORE the cycle closes, and `jev-plateau` fires at close; a non-beating filing without WHY = PLATEAU-UNNAMED deviation. If beating, the scaffold's completed slots still file for Condense.
15. **Tier hand-off on PASS only** (avg ≥85 AND min ≥70): file to style-library's board with the scores.md pointer; the tier move is style-library's act.

## 6. Per-lens delta targets (tied to named cures)

| Lens | Prior | Target | Carrying cures |
|---|---|---|---|
| motion | 80 | ≥88 (+8) | C-X2 (+8 defect) · C-M1 (+7 defect) · C-M2 (+3) · C-M3 (+2) — targets are deduction-recovery aims, not sums; pan-away interpolation must not open a new snap deduction (F4) |
| timing | 66 | ≥85 (+19) | C-T1 (+14) · C-X1 (+7) · C-X2 (+6) · C-T2 (+4) · C-T3 (+3) — bundled, overlapping; floor-clearing minimum +4, aim assumes pan-away + dwell both land |
| purity | 100 | 100 (hold) | No cure; protected by Execute step 4 + Verify V2 |
| reusability | 70 | ≥86 (+16) | C-Ru1 (+8) · C-Ru2 (+8) · C-Ru3 (+5) · C-Ru4 (+4) · C-X3 (+3 font-metric arm) · C-Ru5 (+2) — bundled |
| readability | 64 | ≥85 (+21) | C-X1 (+14) · C-R1 (+8, +5 tag arm) · C-X3/C-R2 (+5) · C-R3 (+4) — bundled; floor-clearing minimum +6 |
| **Average** | **76.0** | **≥85 (+9.0)** | Sum of lens aims ≈ +45 points with overlap discounted in Condense, not pre-negotiated with any lens |

Stuck-lens expectation: timing remains the binding lens (its two largest deductions require restructuring, not tuning); readability is the min-lens risk if C-R1's packing (F3) forces fitted scales down.

## 7. Lawful outcomes (reduction naming)

Exactly two: (1) a higher average filed (beat 76.0), or (2) a non-beating WHY filed from the pre-drafted scaffold. No third outcome is planned; no cure in the inventory is silently dropped (§2 accounts for every priced deduction; D1–D4 are the only deferrals, each reasoned and lens-priced).
