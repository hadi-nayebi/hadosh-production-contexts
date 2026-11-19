# Plan — T122 headline-card grammar · attempt 2 (Practice Cycle 022, Wave 21)

PLAN ONLY (A-C009-1 fan-out split): no build, no `recreation.html` edit, no Codex lens fired by this agent.
Item: T122 headline-card grammar, artifact `hidden_files/study/recreations/T122-headline-card-grammar/`
Prior: attempt 1 avg **83.6** (motion 68 · timing 86 · purity 100 · reusability 80 · readability 84), min 68 motion → **FAIL** (floor + average). Bar: avg ≥85 AND no lens <70, five lenses.
Owner cures on this item: none (RUN §1, Cycle 022 Wave 21).
PIXEL-UNVERIFIED stands (A-C002-2): no browser binary in this seat; all verification logic-level, `comparison.html` is the render surface. No delta below claims a pixel pass.
Evidence read firsthand this Plan session (bounded, ≤6000 chars/probe): `scores.md` (attempt 1, hash-bound SHA-256 `19521151…da382`), all five Codex lens returns — filed flat as `codex/lens-{motion,timing,purity,reusability,readability}.md` in the artifact (no `codex/attempt-1/` directory exists; that path in the charge is superseded by the on-disk form, noted here, not silently followed), `codex/codex-plan-review.md` dispositions via `build-record.md`, `fit-table.md`, `config-census.md`, `jev-prewave.md`, practice INSTRUCTION §2/§5 + amendments cited below.
Packet evidence: Packet #6 T122 per `build-record.md` — dark-navy grid ground, headline top white bold, operative spans blue or inverted white chip, support zone below (insertCard / none / checklist accumulating + warning); segment = source 18–32 s, `segment.mp4` 14.000 s, 56 census frames at 0.25 s; beats segment-relative atMs [0, 4000, 7000, 11000].

## 0. Delta targets per lens (tied to named cures)

| Lens | Prior | Target | Δ | Named cure(s) carrying it |
|---|---|---|---|---|
| motion | 68 | **86** | +18 | C1 (convergent crossfade cure) — the sole blocking defect this lens named |
| timing | 86 | **89** | +3 | C1 (transition no longer extends past anchors) + C2 (deterministic seek) |
| purity | 100 | **≥97 held** | 0 priced, −3 risk priced | No new element/asset; risk is only CONFIG-key additions (C3–C5) introducing a literal — guarded by literal census |
| reusability | 80 | **88** | +8 | C3 (timing swaps self-contained) + C4 (complete palette swap / cardEdge) + C5 (stylesheet constants → CONFIG) + C6 (overflow policy key) |
| readability | 84 | **88** | +4 | C1 (no overlapping headline text) + C7 (insert label raised) + C8 (warning box widened) |

Target sum 86+89+100+88+88 = 451 → **avg 90.2, Δ +6.6** vs the +1.4 minimum needed (425). Targets are aims, not claims; the buffer is deliberate because motion's +18 rests on one cure (see §5).

## 1. Anchor re-observation (A-C006-1 — priced cures are evidence, not specification)

Time origin (binding): t = 0 ms at first frame of `segment.mp4` = source 18.0 s; source absolute = 18.0 s + t/1000. Segment window 18–32 s.
Re-observed against identifiable evidence (attempt-1 census frames, 0.25 s grid; build-record; fit-table; config-census):
- Beat anchors [0, 4000, 7000, 11000] ms, cycle 14000 ms — CONFIRMED by both motion and timing lenses and the frame census; no conflict, carried unchanged.
- Checklist offsets [0, 600, 1200] ms, warnAt 1800 ms (beat-3 local) — CONFIRMED as filed (motion + timing lenses agree); at default CONFIG they must remain exactly these values after C3 (C3 changes how they *scale under swap*, not their defaults).
- enterMs 450 — NOT source-measured: the 250 ms frame grid cannot resolve a sub-250 ms fade, and no lens measured a source transition duration (timing lens explicitly: "measure source transition durations" is an open cure). Resolution: 450 ms is retained as a *construction parameter for the incoming enter only* (the motion lens's own cure wording), never claimed as source-faithful duration. Residual timing risk priced in §4/D2.
- Fit anchors (fit-table, 360 px stage): insert label 11 px, inner margin 5 px (card 250×62, pad 10, wraps 2 lines); warning ink ~185 px in 194 px inner, binding margin 9 px; checklist rows 12 px. These are the binding sides C7/C8 must move, re-measured after the build (§6).

## 2. Cure plan — convergent first (INSTRUCTION §2.2)

### C1 — CONVERGENT (motion 68 · timing 86 · readability 84 — three lenses, one defect): discrete replacement, no crossfade
Outgoing beat hides immediately (opacity → 0 with no transition / transition disabled on exit); the 450 ms opacity transition applies ONLY to the incoming beat's enter. Applies at all three internal boundaries AND the loop wrap (14000 → 0), which the motion lens explicitly includes. Construction: split the single `.beat` transition rule into enter-only vs exit-immediate states (e.g. transition declared only on the entering class, outgoing element set `transition:none; opacity:0` in the same tick step). This also cures timing's "crossfade extends each transition beyond its anchor" and readability's "overlapping headline text temporarily reduces legibility".

### C2 — Timing (single-lens, bundled with C1 stage): deterministic seek
`window.__T122.seek(ms)` currently resets the clock but retains CSS transition state, so scrubbing can show transitional opacity inconsistent with the requested timestamp (timing lens). Cure: seek renders the target state deterministically — suppress transitions during seek and set incoming beat to its settled opacity for that timestamp (checklist rows/warning likewise set from local time, as tick already computes them). No anchor changes.

### C3 — Reusability: timing swaps self-contained
Attempt 1's swap evidence relied on scratch-harness scaling; the renderer itself never scales checklist offsets/warning timing (reusability lens, required cure 1). Cure: the renderer derives effective offsets/warnAt from CONFIG atMs/cycleMs scaling (offsets stored as beat-local defaults [0,600,1200]/1800 and scaled by the checklist beat's duration ratio when atMs/cycleMs are swapped), so a CONFIG-only timing swap — including `cycleMs`, exact changes filed in the build record — produces a coherent compressed loop; verify the compressed loop and the final beat, not only beat 1.

### C4 — Reusability: complete palette swap evidence
Changing `palette.blue` left `cardEdge:"#3b82f6"` unchanged, falsifying the "old blue absent" claim (reusability lens, required cure 2). Cure: derive cardEdge from `palette.blue` (single source) or include it as an explicitly swapped palette key; the swap own-check asserts the old blue string is absent from the *entire rendered/effective style set*, cardEdge included.

### C5 — Reusability: close remaining stylesheet constants into CONFIG (scores.md priced cure + lens required cure 3)
Move into CONFIG: headline ink/white, headline padding, chip padding, support/checklist/warning borders (widths incl. insert `2px`, checkrow `1px`), all remaining border radii, checklist row padding (`'0 10px'`), warning padding (`'5px 8px'`). Every new key must pass the A-C006-2 effect-mapping assertion (§6) — a key bound but unconsumed fails the suite. Per A-C008-3, the `'✓  '` check glyph is technique *content*, not a structural constant: move it to CONFIG (`check.glyph`) rather than whitelisting it.

### C6 — Reusability: overflow policy key (scores.md priced cure, plan-review point 4 residue)
Add a CONFIG overflow policy for overlong headlines (named key, e.g. `headline.overflow: "shrink-to-floor"` with a stated minimum font floor ≥11 px, or `"wrap"` — Execute picks one, names it in the build record, and the swap test drives an overlong headline through it). No silent clipping is a passing state.

### C7 — Readability (scores.md priced cure): insert label above the 11 px floor margin
Raise insert `fontPx` 11 → ≥13 px AND re-fit the card in the same stage: at 13 px the label's ink (~225 px at 11 px) scales to ~266 px, wraps to 3 lines, and 3 lines + pad 10×2 exceeds the 62 px card height — so the cure carries a CONFIG insert height increase (or pad change) sized by the fit model, with BOTH wrap states measured (A-C006-3 wrapped-state enumeration). Raising the font alone and overflowing the card is a failed cure, priced in §5.

### C8 — Readability (scores.md priced cure): warning margin beyond 9 px at 360 px
Widen the warning box via a dedicated CONFIG width key (`check.warnW`, decoupled from checklist row width 210 px so checklist geometry vs source is untouched) so the binding-side margin grows beyond 9 px — target ≥25 px inner margin at 360 px in the re-measured fit-table. Checklist/warning stack must also be re-checked against the stage bottom edge (readability lens: completed stack sits close to the bottom; confirm no clipping at the new widths/heights, incl. after C7's taller insert — different beat, same stage budget).

### Held, not cured
Purity 100: no cure attempted, no new asset/element/media. Any purity drop is a regression introduced by C3–C6 and is priced as such in the WHY scaffold.

## 3. Preservation (A-C010-1(b), A-C004-1, A-C005-1 — before any mutation)
- Inventory + machine-written sha256 baseline (A-C003-2 form, never hand-transcribed) of the COMPLETE prior evidence set: attempt-1 `recreation.html`, build-record, scores, fit-table, config-census, jev-prewave, comparison.html + referenced assets, all `codex/` payloads and returns, frames/segment.
- `recreation.html` preserved as create-once CONTENT copy `recreation-attempt-1.html` (inode ≠ working file, verified; re-verified after the working file's first overwrite). Create-once destinations throughout: existing destination with mismatching sha stops execution.
- Staged checkpoints (A-C010-1(a)): after each cure stage (Stage A = C1+C2, Stage B = C3–C6, Stage C = C7+C8) preserve a create-once source copy + that stage's own-check output; lens attribution prints BUNDLED unless checkpoints isolate an effect.

## 4. Deferrals — priced per lens (A-C009-3 form: every lens that can see the deferred item)

| # | Deferred | motion | timing | purity | reusability | readability |
|---|---|---|---|---|---|---|
| D1 | Pixel/render verification (no browser route, A-C002-2) | capped: source-level only, as attempt 1 | capped | capped | capped | capped — phone-size rendering stays UNVERIFIED; fit rests on the logic model |
| D2 | Source transition-duration measurement (250 ms frame grid cannot resolve it; no finer extraction this attempt) | low: C1's discrete form matches the described technique regardless of exact fade ms | **priced risk**: enterMs 450 unmeasured could cost timing points if the source enter is materially shorter/longer | none | none | low: enter duration affects overlap only via C1, already cured |
| D3 | Changing enterMs value itself / beat anchors / checklist defaults | none — anchors lens-confirmed | none at defaults | none | none: C3 makes them swappable instead | none |
| D4 | Any new support element or stage-geometry change beyond C7 card height + C8 warnW | low: insert is beat 1 only, no beat timing changes | none | low: geometry keys are CONFIG, no new element type | positive: more CONFIG surface | **priced risk**: taller insert / wider warning could crowd the stage — bounded by §6 fit + bottom-edge checks, failure returns to Plan, not shipped |

## 5. Failure-point evaluation (what breaks this plan, priced)
1. **C1 implementation leaks a transition** (transition inherited via a shared class, or the loop wrap takes a different code path): motion stays <70, floor fails again, attempt non-beating. Mitigation: §6 asserts outgoing opacity = 0 at boundary+1 frame-equivalent at ALL boundaries incl. wrap, in the logic harness, before the wave.
2. **C7 font raise overflows the insert card** (3-line wrap > card height): readability falls instead of rising; the fit-table's binding side moves from margin to clipping. Mitigation: card height is part of the same cure stage; both wrap states measured; a HIT in the fit leg blocks the wave.
3. **C3 scaling silently alters default timing** (offsets at default CONFIG no longer exactly 0/600/1200, warnAt 1800): timing regresses on the lens that was already passing. Mitigation: own-check asserts the default-CONFIG effective offsets equal the attempt-1 values exactly; scaling is identity at defaults.
4. **C5 CONFIG closure creates bound-but-unconsumed keys** (A-C006-2's exact T38 failure): reusability/purity catch it convergently and the cure inverts. Mitigation: effect-mapping assertion per new key in §6, run at Stage B checkpoint, not only at close.
5. **C4 derivation breaks a non-blue palette use** (cardEdge derived where a beat relied on the literal): contained by the complete-swap own-check asserting old-blue absence AND new-blue presence at every former cardEdge site.
6. **Motion plateau**: if C1 lands verifiably (discrete replacement asserted) and motion still scores <80, the crossfade was not the whole defect — the WHY scaffold (§7) names this hypothesis in advance so the plateau is filed, not improvised.
7. PIXEL-UNVERIFIED cap: every lens was scored source-level in attempt 1; a logic-pass build can still lose points on unverifiable rendering — accepted, printed, not hidden.

## 6. Execute checklist (§3 executes against this)
- [ ] Preservation baseline + `recreation-attempt-1.html` content copy filed and inode/sha-verified BEFORE first edit (§3 above)
- [ ] Stage A: C1 enter-only transition / immediate outgoing hide at all boundaries + loop wrap; C2 deterministic seek — checkpoint A + own-check output preserved
- [ ] Stage B: C3 renderer-side offset/warnAt scaling; C4 cardEdge single-sourced from palette; C5 constants → CONFIG incl. `check.glyph`; C6 overflow policy key — checkpoint B + own-check output preserved
- [ ] Stage C: C7 insert font ≥13 px + card re-fit; C8 `check.warnW` widening — checkpoint C + own-check output preserved
- [ ] Swap test in the UNCHANGED renderer (CONFIG-only): new headline spans, compressed timing incl. `cycleMs` (compressed loop + final beat verified), complete palette swap, overlong headline through C6 policy
- [ ] Purity grep + asset inventory (attempt-1 pattern set, 0 hits required); syntax check on extracted JS
- [ ] Comparison page re-pointed ONLY after own checks pass; attempt-1 source remains at its preserved path
- [ ] Build record filed: cure-by-cure construction changes, exact CONFIG changes for C3, checkpoint inventory, attribution (staged or BUNDLED), PIXEL-UNVERIFIED printed

## 7. Verify checklist (§5 executes against this)
- [ ] **Fit leg (A-C008 two legs + A-C006-3):** re-measured fit-table at 360 px for every text element at EVERY reachable wrap state — insert label at its new font in both 2- and 3-line states, warning at new `warnW`, headlines, checklist rows; binding margins printed per row; insert margin >5 px and warning margin >9 px (targets §2/C7–C8); completed checklist stack vs stage bottom edge asserted; HITs = 0 or the wave does not fire
- [ ] **Config-census leg:** full literal scan outside CONFIG vs a build-record whitelist naming each structural constant per-literal (A-C008-3) — `1px` grid line and `0`/`1` opacity states may be whitelisted as structural; technique content (glyph, labels, any padding/radius/border shaping a subject) may NOT; HITs = 0
- [ ] **Effect mappings (A-C002-1 + A-C006-2):** for EVERY CONFIG key incl. all C5/C6 additions, an asserted key → rendered/computed effect mapping; bound-but-unconsumed = suite FAIL
- [ ] **Motion assertions:** at each boundary (4000, 7000, 11000) and the loop wrap, outgoing opacity is 0 immediately while incoming rises over enterMs; checklist accumulation 0/600/1200 + warning 1800 at default CONFIG unchanged
- [ ] **Magnitude sweep (A-C021-3):** a 400-nines-class input probed on EVERY numeric CONFIG field (stage w/h, cycleMs, cellPx, enterMs, headline top/fontPx/chipRadius, support top, insert w/h/fontPx/pad, check w/rowH/gap/fontPx/offsets/warnAt/warnFontPx/warnW, atMs entries, all new numeric keys) — no field may parse to Infinity, throw, or produce an unbounded derived value; a bounded/rejected result per field is filed
- [ ] **Score-blind wave (A-C005-2 + A-C008-4 + A-C010-1(c)):** payload manifest filed before firing (allowlist = neutral source + neutral own-check packet only; no RUN/scores/prior returns/targets/cure commentary; source comments scanned and neutralized if contaminated); payloads anchor-scanned (numerical + qualitative)
- [ ] **Firing form (A-C021-1 + A-C021-2):** each lens session in a dedicated per-lens scratch cwd containing ONLY content copies of the allowlisted packet; Codex returns `-o`-written to /tmp first, then content-copied create-once with sha256 verified identical
- [ ] Hash binding: scored source snapshotted, its SHA-256 identical across all five payloads and printed in scores
- [ ] Mechanical guards (INSTRUCTION §5): delta arithmetic, attempt-preservation census (post-wave re-verify), floor-rule gate check
- [ ] Verdict vs bar printed: avg ≥85 AND min ≥70 → RECREATED; otherwise IN PROGRESS + WHY (§8)

## 8. WHY scaffold (pre-drafted, INSTRUCTION §2 standing — slots filled at close, not improvised)
If attempt 2 does not beat attempt 1 (avg ≤83.6) or fails the bar, `jev-plateau` is called at close with this scaffold completed in `scores.md`:
- Cure outcomes (one slot each): C1 [landed / partial / failed — boundary assertion evidence] · C2 [ ] · C3 [ ] · C4 [ ] · C5 [ ] · C6 [ ] · C7 [fit-table evidence] · C8 [fit-table evidence]
- Per-lens delta table: prior → new, signed, per lens, with the checkpoint stage (A/B/C or BUNDLED) each delta is attributed to
- Stuck-lens hypothesis (pre-named): (a) if motion <80 despite asserted discrete replacement → crossfade was not the sole motion defect; next evidence needed = finer-than-250 ms source transition extraction; (b) if reusability <85 despite C3–C6 → the lens's completeness probe found a further un-CONFIG'd surface, name it literally; (c) if readability <86 despite C7/C8 → the logic fit model diverges from rendered fit under PIXEL-UNVERIFIED, name the binding side that moved
- Plateau verdict slot: PLATEAU named (lens + cure exhausted) or NOT-PLATEAU (a named, unattempted cure remains — state it as attempt 3's head)
- Evidence `jev-plateau` will need: this plan, Stage A/B/C checkpoint own-check outputs, the re-measured fit-table + config-census, all five attempt-2 returns, the magnitude-sweep record
