# jev-plan-exit — RETURN · recreation Cycle 014 · Wave 12 · 2026-11-15

Judge: fresh Jev judge, firing jev-plan-exit per `guards/jev-plan-exit.md`.
Judged: RUN.md §1 Observe + §2 Plan only, for the 5 wave items — T76 (#37) · T81 (#38) · T82 (#39) · T83 (#40) · T90 (#41). recreation.html does not exist at this gate and was not fed. Verdicts are advisory per item: applied, or set aside with the miss recorded in Condense.

## WAVE VERDICT: MIXED — 2 EXECUTE · 3 REVISE · 0 RETURN-TO-OBSERVE

- **T76 — EXECUTE**
- **T81 — REVISE** (primary: UNBOUND-VARIABLE)
- **T82 — REVISE** (primary: CHECKLIST-INTENTION)
- **T83 — EXECUTE**
- **T90 — REVISE** (primary: UNBOUND-VARIABLE)

No RETURN-TO-OBSERVE: every defect found is curable inside Plan. In each REVISE case the missing mechanics/variables ARE present in the Observe gate-out (§1) — the failure is Plan binding, not upstream Observe, so no jev-observe-exit dimension is cited against this wave.

The wave's charged improvement lands in part: exact swap values ARE printed in §2 this wave for T76, T81, and T90, and T83 names a deterministic structural equivalent. They are NOT truly exact for T82 (conditional swap), and two parameter tables do not bind every Observe variable (T81, T90). Details per item below.

---

## Per-item judgments

### T76 (#37) — HUD year register — **EXECUTE**

| Dimension | Score |
|---|---|
| parameter-table-complete | 0.90 |
| construction-priced | 0.75 |
| execute-checklist-ready | 0.90 |
| verify-checklist-instrumented | 0.90 |
| failure-points-priced | 0.80 |
| plateau-priced | 0.75 |

- Parameters: every Observe variable is bound — `hud{sceneYear,dayLine,clock}`, `states[]`, `palette{hudInk,bg,accent}`, `stateMs`, `flipMs`, `stage`. Minor: Observe's `cardRef` is carried as `cardStatus`+`cardPlace` rather than under its Observe name; the content is bound, the key name drifted. Named here, not a failure.
- Construction: DOM/SVG priced for a two-register stamp; A5 inapplicability and the translated Cure 1/Cure 2 duties are stated in §1 guidance. The §2 construction block itself is the wave-common boilerplate (see cross-cutting gap 2).
- Verify — truly exact: seed year 2026→**2031** + cardPlace "UK · 2026"→"**FRANCE · 2031**" (words) · `stateMs` 4200→**2600** (timing) · `palette.accent` "#e8c86a"→"**#3fd68f**" (palette). All three legs deterministic and executable as written.
- Failure points are item-specific and priced from the record: flip-as-mere-text-swap (motion), clock accidentally flipping with the year (the technique's whole point is the clock HOLDING), HUD quiet-zone collision (T75 cure carried).
- Plateau: family average named (T75, 85.2), predicted stuck lens named (motion). Cause is inferable from the failure list but not stated in the plateau paragraph itself (cross-cutting gap 3).

### T81 (#38) — Seed cards with status taxonomy — **REVISE** · primary: UNBOUND-VARIABLE

| Dimension | Score |
|---|---|
| parameter-table-complete | 0.70 |
| construction-priced | 0.70 |
| execute-checklist-ready | 0.90 |
| verify-checklist-instrumented | 0.90 |
| failure-points-priced | 0.85 |
| plateau-priced | 0.75 |

- **Gap (UNBOUND-VARIABLE):** Observe's variable list carries `holdMs` as a distinct variable; the Plan table binds it only as "`holdMs`: included in cardMs". That is not a named CONFIG key with the specimen value as default — a hold change cannot re-drive the piece, and the swap/parameter discipline of §2.1 is not met for this variable. Amendment charge: bind `holdMs` as its own key with a numeric default (splitting `cardMs` accordingly) before Execute.
- Verify swaps are otherwise truly exact: claim → "**Offline translation on every bus, free**" + status → "**ALREADY MEASURED**" (words) · `cardMs` 4600→**3000** (timing) · `palette.card` "#16283f"→"**#3f1628**" (palette).
- Failure points specific: taxonomy-as-decoration (with the correct cure — taxonomy as a CONFIG list the cards index), claim overflow at phone width (measured-fit leg owns), card cross-fade (Cure 2 translated, named here — though it appears in the failure list, not as a §2 construction requirement; see cross-cutting gap 2).
- Plateau: card-family averages named (T56 90.8 / T59 86.8), stuck lens named (reusability).

### T82 (#39) — Countable multitude — **REVISE** · primary: CHECKLIST-INTENTION

| Dimension | Score |
|---|---|
| parameter-table-complete | 0.90 |
| construction-priced | 0.70 |
| execute-checklist-ready | 0.85 |
| verify-checklist-instrumented | 0.60 |
| failure-points-priced | 0.90 |
| plateau-priced | 0.80 |

- **Gap (CHECKLIST-INTENTION):** the swap test's word leg is NOT truly exact. It reads: `lit.index` 539→**123** "and grid label word (title text) 'scans'→'letters' **where a label exists**". The parameter table binds NO label/title text variable — there is no CONFIG key this swap can be executed against, and the conditional makes the leg's execution optional. A builder cannot execute this instrument as written; whether any word swap happens at all is undecided in Plan. The `lit.index` swap is exact but is a position swap, not the §5.1 words leg. Amendment charge: either bind a label text key in CONFIG and swap it deterministically, or — as T83 does — name a deterministic structural equivalent and label it as such. No conditional swaps.
- Secondary verify gap: the recreation's own timeline (`buildMs` 2600 + `holdMs` 4600 ≈ 7.2 s) does not sum to the 14 s segment the comparison check says durations are "matched" to, and the Plan names no pad/hold-to-segment mechanism. The comparison instrument is stated, its duration mechanism is not.
- Construction docked: DOM construction for a 40×27 = 1,080-cell wall is asserted via the wave-common boilerplate; the per-technique pricing (DOM cell count vs the rejected canvas route, at phone size) is not made for this item, whose family risk is precisely density (T06).
- Failure points are the wave's strongest: density collapse at ~8 px cells priced numerically, lit-cell findability (Cure 1 translated), ordered accumulation vs random flicker (T53 cure). Plateau: family average (T53 85.6) + stuck lens (readability) + cause all effectively named.
- Parameters complete: every Observe variable bound, `lit{index:539}` is the true center of 1,080 cells.

### T83 (#40) — Building cutaway grid — **EXECUTE**

| Dimension | Score |
|---|---|
| parameter-table-complete | 0.90 |
| construction-priced | 0.75 |
| execute-checklist-ready | 0.90 |
| verify-checklist-instrumented | 0.80 |
| failure-points-priced | 0.85 |
| plateau-priced | 0.75 |

- Parameters: every Observe variable bound — `block{floors,cols}`, `cell{glyph,windowLit}`, `palette`, `revealMs` per floor, `holdMs`, `terrace{enabled}` (plus `figures` priced, not silent).
- Verify: the technique's Observe variable list contains no word variable, and the Plan says so honestly by naming a **deterministic structural equivalent** — `block.floors` 5→**3** + terrace figures 2→**0** — instead of inventing a word swap. That is exact and executable as written; the equivalence should be recorded as the disposition in the build-record so the §5.1 words-minimum is not later read as skipped. Timing (`revealMs` 650→**350**) and palette (`palette.glyph` "#f0c93f"→"**#3fd68f**") legs are exact.
- Secondary verify gap (noted, not blocking): same duration mechanism as T82 — reveal 650×5 + hold 4200 ≈ 7.45 s against a 14 s segment, with no pad/hold rule named for the comparison check.
- Failure points specific and record-priced: glyph-as-tracing purity risk (with the correct construction answer — CONFIG-named generic mark drawn in code), uneven fill defeating the 10/10 inventory read, per-flat literals (T05 reuse class, census leg owns).
- Plateau: family average named (T53 85.6), stuck lens named (reusability).

### T90 (#41) — Counterfactual reel — **REVISE** · primary: UNBOUND-VARIABLE

| Dimension | Score |
|---|---|
| parameter-table-complete | 0.65 |
| construction-priced | 0.65 |
| execute-checklist-ready | 0.85 |
| verify-checklist-instrumented | 0.90 |
| failure-points-priced | 0.90 |
| plateau-priced | 0.80 |

- **Gap (UNBOUND-VARIABLE):** Observe's variable list is `beats[{label,scene,flipped}]`; the Plan's five beats bind `label` and `flipped` only — **no `scene` key exists on any beat**. The Plan's own failure list names the consequence exactly: "each beat needs a scene + its flip, not a caption card." The Plan prices that failure but does not bind the variable that prevents it. As written, Execute must either improvise every beat's scene content (the improvisation this gate exists to bar) or silently reduce the reel to label cards (a SILENT-DEFERRAL in effect, classified under the primary above). Amendment charge: bind a `scene` key per beat (CONFIG-described scene composition per beat) before Execute.
- Construction docked with it: this is the wave's one sequenced piece, and neither the scene construction nor Cure 2 phase exclusivity (one beat owns the stage) appears as a §2 construction requirement — both live only in §1 guidance and the failure list.
- Verify swaps are truly exact: beats[0].flipped → "**the morning runs itself, badly**" + register.label → "**THE ROAD NOT TAKEN**" (words) · `beatMs` 2400→**1500** (timing) · `palette.accent` "#c93f2e"→"**#3f7fc9**" (palette). `beatMs` arithmetic is honest: 5 × 2400 = 12 000 ms = the measured window, with internal allocation labeled allocation-model in §1 (A7 satisfied).
- Failure points exemplary on evidence: the mistimed catalogue frame (t382) is priced, the builder is charged to file what the segment frames actually show (T68 precedent), and allocation-as-measured is named as a failure mode. Plateau: family average (T22 88.2) + stuck lenses (motion/timing, evidence-thin) named.

---

## Cross-cutting gaps (all items, named once)

1. **Render-proof limitation not carried in §2 (failure-points floor item missing).** The guard's floor list requires the Plan to state how the absence of a browser binary in this seat is carried (comparison page as render surface, as attempt 1's scores.md did). §2 nowhere states it for any item; the comparison page is built (Execute step 6) but its role as the render-proof surface is never priced. Failure-points scores docked wave-wide. Taxonomy signal: FAILURE-POINTS-GENERIC by omission — the per-item lists are specific, but a mandatory floor item is absent from all five.
2. **Construction choices are one boilerplate block for five different mechanics.** Identical rejected-alternative lines serve a state-flip stamp, a card sequence, a 1,080-cell grid, a cutaway, and a sequenced reel. Per-technique construction pricing (T82's DOM cell load, T90's scene construction, Cure 1/Cure 2 as §2 construction requirements rather than §1 guidance/failure-list mentions) is thin wave-wide; construction-priced scores reflect this. Not CURE-ABSENT as a primary on any item — the translated cures ARE present in the record per item — but they do not stand where §2.2 requires construction requirements to stand.
3. **Plateau causes are inferable, not stated.** A2 pricing is present in form — prior family average + predicted stuck lens per item, WHY commitment made — but the plateau paragraph states no hypothesized cause per item; the cause must be reconstructed from the failure-point list, and the WHY commitment is a single generic line for all five items rather than a per-item statement. Plateau-priced scores (0.75–0.80) reflect partial pricing. No item is PLATEAU-UNPRICED: these are first attempts, family averages are named, so the REVISE floor for silent family re-use does not trigger.
4. **Font keys asserted, not shown.** §2 states "Font families are CONFIG keys" but no parameter table names a font key for any item. Minor; priced inside parameter-table-complete scores. The Cycle-013 census leg will catch literals at build time, but the Plan table itself does not demonstrate the binding.
5. **Standing watch — clear.** The verification plan names the **five**-lens wave (motion · timing · purity · reusability · readability) everywhere; no "four lenses" wording survives in this Plan. jev-prewave's call point is correctly placed (after own checks + A6 legs, before the wave), purity greps are given as actual patterns, and the seat Verify checklist at wave close is instrumented with counts (SCORE lines ×25, SHA-256 ×5, re-grep ×5).

## Floors check
- No item's verify-checklist-instrumented falls below 0.5 (lowest: T82 at 0.60 — REVISE rests on the conditional-swap defect, not the floor).
- No CURE-ABSENT primary: translated Cure 1/Cure 2 duties appear per item in guidance/failure pricing (gap 2 records their placement defect).
- No PLATEAU-UNPRICED REVISE: family averages are priced in Plan for all five.
- REVISE amendment charges: T81 — bind `holdMs` as its own CONFIG key · T82 — make the word swap deterministic (bind a label key or name a labeled structural equivalent; no "where a label exists") · T90 — bind `scene` per beat in CONFIG.

BODY-WRITE: this return is filed at `runs/2026-11-15-cycle-014-wave-12/jev-plan-exit-return.md` and is consumed in RUN.md §2b before any builder spawns — T76 and T83 travel to Execute with their accepted profiles and noted gaps; T81, T82, and T90 carry their classified defects (UNBOUND-VARIABLE ×2, CHECKLIST-INTENTION ×1) as Plan amendment charges, and the three cross-cutting placement gaps (render-proof carry, per-technique construction pricing, plateau-cause statement) stand as Condense material for the jev-plan-exit call's own instruction.
