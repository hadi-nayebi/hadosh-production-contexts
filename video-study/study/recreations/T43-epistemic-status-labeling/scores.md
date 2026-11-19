# T43 — Epistemic status labeling · scores (Cycle 008 Wave 6, attempt 1)

recreation.html sha256 binding all five returns: **f9b550d2065fb9be921f20a00a593328224bb03961d60addaf474ee19148d168** (unchanged after the wave — verified at filing)

| Lens | Score | Return |
|---|---|---|
| motion | 61 | codex/lens-motion.md |
| timing | 64 | codex/lens-timing.md |
| purity | 95 | codex/lens-purity.md |
| reusability | 62 | codex/lens-reusability.md |
| readability | 61 | codex/lens-readability.md |

Arithmetic: (61 + 64 + 95 + 62 + 61) = 343 · 343 / 5 = **68.6 average** · **minimum 61**
Bar: average ≥ 85 AND minimum ≥ 70 → **VERDICT: FAIL**
Tier: **IN PROGRESS** (attempt filed; re-attempt routes to the practice job)

## Priced cures for the next attempt (convergent first, Amendment A1)
1. **CONVERGENT (motion + timing) — timing is allocated, not observed.** Observe the segment's actual entrances/split onset in the source; retune splitStart toward 10000 ms and coordinate divider/solid/spec/provenance so the complete split stands by 12000 ms (19:02); the current 8200 ms splitStart exceeds its own disclosed ±800 ms uncertainty.
2. **CONVERGENT (motion + readability) — PIXEL-UNVERIFIED.** No rendered check exists in this seat; cure requires a 360 px rendered bounds/reading pass of both states (or a seat where Chrome runs) before the next wave.
3. **CONVERGENT (motion + reusability) — the split is a crossfade, and `split.ratioPct` moves only the divider.** Panes must derive their bounds from the ratio, content in pane-local coordinates, and the transition should separate/clip panes rather than only crossfading.
4. **Readability (61) — box-sizing overflows.** Provenance pill right edge reaches 363.15 px at 360 (clipped); settled-items panel crosses the divider (180.2 > 180 px); SCHEMATIC POTENTIAL clipping risk unmeasured; bottom tags' bands overlap. Cure: border-box everywhere + explicit non-overlapping tag bounds.
5. **Reusability (62) — unapplied CONFIG keys (corrects the build record's census claim):** `artworkTags[].level` and `split.right.panelYPct` are declared but never applied — the builder's census checked top-level keys only. Cure: status registry keyed by level, per-tag explicit entrance times (decouple tag id from checkpoint names), shared pane-content schema, letter-spacing/divider-style/subtitle-opacity into CONFIG.
6. **Motion (61) — tags attach by opacity only, to one artwork.** STYLIZED / NOT TO SCALE belong to other specimen objects (figure, map) that never appear; either recreate the subject handoffs or restrict the tag sequence to the displayed object's own tags.

Self-verify note: swap test, purity, checkpoint postconditions and syntax passed pre-wave; the wave's FAIL rests on fidelity/reuse/readability evidence above, not on purity (95).

---

# Attempt 2 (practice Cycle 006 Wave 5, 2026-11-14)

recreation.html sha256 binding all five returns: **8d1db050c0e03ac1f67d55f71c299b8f266161a724a9b7d12f760660300c06d1** (verified unchanged after the wave; attempt-1 preserved copy `recreation-attempt-1.html` re-verified f9b550d2… at close; comparison.html and segment.mp4 hashes unchanged from the pre-build baseline — comparison not edited, its interface unchanged)

| Lens | Score | Return |
|---|---|---|
| motion | 78 | codex/attempt-2/lens-motion.md |
| timing | 40 | codex/attempt-2/lens-timing.md |
| purity | 93 | codex/attempt-2/lens-purity.md |
| reusability | 64 | codex/attempt-2/lens-reusability.md |
| readability | 58 | codex/attempt-2/lens-readability.md |

Arithmetic: (78 + 40 + 93 + 64 + 58) = 333 · 333 / 5 = **66.6 average** · **minimum 40**
Delta vs attempt 1 (68.6): **−2.0** (signed) · Per-lens: motion 61→78 (+17) · timing 64→40 (−24) · purity 95→93 (−2) · reusability 62→64 (+2) · readability 61→58 (−3)
Bar: average ≥ 85 AND minimum ≥ 70 → **VERDICT: FAIL** (improvement decision and bar decision separated per plan-review F6: this attempt neither beats the prior average nor passes the bar)
Tier: **IN PROGRESS**

## Cure-by-cure outcome (six rows, per the pre-drafted scaffold)
| # | Cure | Acceptance criterion | Evidence | Result | Interaction / fresh-lens finding | Remaining gap |
|---|---|---|---|---|---|---|
| 1 | Timing retune (splitStart→9800, complete by 12000, observed order) | completion ≤12000, observed entrance order | own-checks-attempt2.js (37 pass) · build-record timing table | MET as prescribed | Timing lens priced the build against the SEGMENT's observed window (onset ≈2.5 s, complete ≈8.5 s, hold ≈5.5 s) and scored 40: the seat-priced anchors and the segment observation are in direct conflict — see WHY | The anchor conflict itself is the open item for the seat |
| 2 | PIXEL-UNVERIFIED rendered pass | 360 px rendered bounds/reading pass | Chrome route tried this run, blocked (Hatch WebGL domain policy, A-C002-2) | UNMET — filed as an explicit gap, not modelled compliance | Readability lens again named the absence of pixel evidence | No render route exists in this seat |
| 3 | Split construction (ratio-derived clipped panes, pane-local coords) | ratio swap moves panes+divider+content together | own-check effect mappings · reusability return ("pane-local content moves with them") | MET | Motion lens: the clip/wipe mechanism itself mismatches the specimen's crossfade (divider already standing) — construction cured, mechanism now the priced defect | Replace wipes with crossfade; divider visible at onset |
| 4 | Containment (border-box, gutters, disjoint bottom bands) | displayed-state model at 360/390 all-inside | own-check model: max right edge 350/360, panel gutter 29 px | PARTIAL — horizontal MET; vertical NOT covered by the model | Readability lens: SCHEMATIC POTENTIAL at 94.5% top likely clips vertically (line-box > remaining 11.1 px); provenance pill's wrapped height likely overflows from its 78% top. The model asserted single-line heights — a proxy (A-C004-2 class error) | Vertical displayed-state model (line-box + wrapped-pill height) + repositioning |
| 5 | CONFIG application/schema | all named keys applied; swaps as data only | own-checks · reusability return | PARTIAL | Reusability lens (64): mandatory `.find()` dereferences crash if a pane's content types are removed/swapped; left pane lacks panelYPct; extra lists get no list font size; status VOCABULARY is not centralized per level (colors are) | Make every pane entry independently constructible/styled/timed; centralize level vocabulary |
| 6 | Tag/object fidelity (restrict to displayed object's tags) | default sequence = displayed object's own tags | CONFIG data (2 tags) | MET | No lens re-raised tag attachment; motion rose +17 | Subject-handoff scenes remain deferred |

## WHY (floor rule — the new average does NOT beat 68.6)
**What was tried:** all six priced cures, convergent first, per the itemized plan (plan review fired and consumed; its F1 flagged exactly the conflict that decided this attempt). Motion responded (+17) and reusability marginally (+2); purity held near its ceiling (−2 on three small hardcoded presentation policies).
**What did not move:** timing collapsed (−24) and readability slipped (−3).
**Stuck lens:** timing (40).
**Hypothesized cause (two parts):** (1) The timing cure was priced from the digest's "screen splits at ~19:00 / complete by 19:02" anchors, and the seat's plan bound splitStart→10000 / complete-by-12000. This run's firsthand segment observation (frames in scratch-frames/) contradicts those anchors: on the segment's own window the split fade begins ≈2.5 s in, completes ≈8.5 s, and holds ≈5.5 s. The recreation is a two-moment montage (its phase A is the 14:32 artwork moment, not the segment's pre-split scene), so neither mapping is strictly "the segment" — but the score-blind lens, fed the observed segment facts, priced the segment mapping and the build was not on it. The plan-review's F1 required this conflict to be resolved before building; it was resolved in favor of the seat's priced anchors, and the lens outcome is the measured price of that resolution. This is filed as evidence for the seat/HQ, not relitigated here: the next attempt's timing basis must be decided at that level (segment-faithful timeline vs montage with disclosed mapping). (2) Readability's model repeated the A-C004-2 proxy error vertically: it asserted single-line heights where the lens prices line-boxes and wrapped-pill heights, so two vertical containment risks shipped unmeasured.
**Next attempt's difference:** rebuild the timeline on the segment-observed window (split onset ≈2500 ms on a segment-faithful mapping, entrances staged through ≈8500 ms with a distinct settled hold before the object, final hold ≈5500 ms — the timing return's own BODY-WRITE), with phase A's place in that mapping decided by the seat first; replace clip-wipes with the observed crossfade and a divider standing visible at onset; extend the displayed-state model vertically (line-box heights, wrapped provenance height, bottom-edge containment) and reposition the bottom tag/provenance accordingly; remove the mandatory content-type dereferences and centralize status vocabulary per level; move the remaining hardcoded presentation policies (clip midpoint — derive from ratioPct — border style, wrap policy, aspect policy, the 0.62 glyph estimate) into CONFIG.

---

# Attempt 3 (practice Cycle 007 Wave 6, 2026-11-15)

recreation.html sha256 binding all five returns: **528d54eb690a78dbc04ba5d3bc2e50ff4e9957c65430306da953bd3d3c113b2e** (verified unchanged after the wave; frozen copy `recreation-attempt-3-frozen.html` at the same sha; attempt-1 copy f9b550d2… and attempt-2 copy 8d1db050… re-verified unchanged at close; comparison.html and segment.mp4 hashes unchanged from baseline — comparison not edited, its interface unchanged)

| Lens | Score | Return |
|---|---|---|
| motion | 93 | codex/attempt-3/lens-motion.md |
| timing | 98 | codex/attempt-3/lens-timing.md |
| purity | 94 | codex/attempt-3/lens-purity.md |
| reusability | 84 | codex/attempt-3/lens-reusability.md |
| readability | 72 | codex/attempt-3/lens-readability.md |

Arithmetic: (93 + 98 + 94 + 84 + 72) = 441 · 441 / 5 = **88.2 average** · **minimum 72**
Delta vs attempt 2 (66.6): **+21.6** (signed) · Per-lens: motion 78→93 (+15) · timing 40→98 (+58) · purity 93→94 (+1) · reusability 64→84 (+20) · readability 58→72 (+14)
Bar: average ≥ 85 AND minimum ≥ 70 → **VERDICT: PASS** (improvement and bar-passage decided separately: this attempt both beats the prior average AND passes the bar)
Tier hand-off: QUEUED on the style-library job's board (HQ.json entry practice-2026-11-15-t43-a3, carrying this section's pointer + the bound sha) — the tier move itself is style-library's act.
WHY: not filed — the floor rule binds only on a non-beating attempt; this attempt beats 66.6. Priced gaps for a future attempt are filed below instead.

## Cure-by-cure outcome
| # | Cure | Acceptance criterion | Evidence | Result | Remaining gap |
|---|---|---|---|---|---|
| C1 | Segment-window timeline | onset in window ≈2500, complete ≈8500, settled hold > 0 before object, final hold ≈5500 | own-checks-attempt3.js (55 pass) · timing return (98: "preserve the current split timing and entrance sequence") | MET | Intermediate entrance spacing / fade durations priced approximate by the return pending finer specimen measurement |
| C2 | Crossfade + standing divider | no clip-path wipe in source; divider opacity 1 at splitStart | source grep (0 clip-path) · motion return (93) | MET (JOINT with C4 on the shared midpoint edit, per plan-review F1) | Crossfade overlap exactness unconfirmed — intermediate-frame evidence named by the return |
| C3 | Vertical model + repositioning | every enumerated wrap state contained at 360/390 incl. bottom edge | model output in build record · readability return (72, +14) | MET on containment; lens still <75 | Type-size legibility (the deferred D3 item) and schematic-label dwell — priced below |
| C4 | CONFIG policy completion | four literals gone; each new key has a consumed-effect assertion | purity return (94) · CONFIG walk (141 leaves) | MET (JOINT with C2) | Fresh small item from the purity return: configure line-heights for every text role + an explicit list-marker policy |
| C5 | Pane independence + vocabulary | pane with a content type removed constructs without throw; term mutation propagates to non-overrides only | swap test · reusability return (84, +20) | MET | Fresh item from the return: artwork-tag text resolution consistency between validation and construction |

## Priced gaps for attempt 4 (filed because the bar passed; no WHY owed)
1. Readability (72, the lowest lens): enlarge supporting type sizes as a single-variable change now that the vertical model proves containment at current sizes (the D3 deferral coming due), and extend the schematic label's fully-visible dwell; verify with actual browser text bounds if a render route ever opens (PIXEL-UNVERIFIED stands).
2. Timing/motion evidence: finer intermediate-frame sampling of the segment to price the crossfade overlap and intermediate entrance spacing exactly, rather than approximately.
3. Purity/reusability small items: configured line-heights per text role + list-marker policy; artwork-tag vocabulary resolution made consistent between validation and construction.
