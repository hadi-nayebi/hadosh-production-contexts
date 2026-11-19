# Jev call — jev-plan-exit (recreation)

**Cycle:** recreation Cycle 019 · Wave 16 · 2026-11-16
**Date of judgment:** 2026-11-16
**What was judged:** the Plan gate-out in `runs/2026-11-16-cycle-019-wave-16/RUN.md` §2, priced against the §1 Observe gate-out facts (including the §1.3 variable lists), per item, under `guards/jev-plan-exit.md` §§2/4/5. Items judged: **T109 element morph** (queue #56) · **T110 countdown pre-announcement** (queue #57) · **T111 logo outro sting** (queue #58) — all Packet #5 (School of Motion, "Six Essential Motion Design Transitions") first attempts. Judged by a fresh judge agent with no stake in the work. Verdicts are advisory per the call definition §5.

Dimensions scored 0–1, in the call's order: parameter-table-complete · construction-priced · execute-checklist-ready · verify-checklist-instrumented · failure-points-priced · plateau-priced.

---

## T109 — element morph (queue #56)

**Verdict: REVISE** — primary rejection class: **UNBOUND-VARIABLE**

| Dimension | Score |
|---|---|
| parameter-table-complete | 0.65 |
| construction-priced | 0.90 |
| execute-checklist-ready | 0.90 |
| verify-checklist-instrumented | 0.80 |
| failure-points-priced | 0.85 |
| plateau-priced | 0.65 |

Findings, in the call's pricing order:

1. **Parameter table — INCOMPLETE on the technique's core variable.** Against the §1.3 list (sceneA element set + geometry · sceneB element set · correspondence mapping · morph duration · countdown label/steps · palette · easing · hold durations): morph duration (`morphMs:1600`), countdown (`label:"Scene morph"`, `steps:[3,2,1]`, `stepMs:1000`), palette, easing (`ease:"smoothstep"`), and hold durations (`holdAMs`, `settleMs`, `holdBMs`, `loopFadeMs`) are all named CONFIG keys with specimen defaults. But **the correspondence mapping — the variable that IS a morph — has no CONFIG key.** It exists only as construction prose ("every sceneA element carries a named sceneB counterpart (or a named collapse target)"). A builder must therefore invent the mapping inside Execute's animation logic, which is exactly the improvisation this gate exists to prevent, and it leaves the mapping unswappable and uncensused by the A6 config-census leg. Second gap on the same leg: **sceneA geometry is not parameterized** — `sceneA` carries only `kind`, `title`, and `cards:3`; no element positions/sizes are CONFIG keys, so geometry will live as literals in logic (LITERAL-IN-LOGIC exposure, named here as the secondary defect, not the primary class).
2. **Construction priced — PASS.** DOM/SVG element-wise interpolation on one eased progress, with whole-scene opacity crossfade explicitly forbidden (correctly priced against sibling T105 dissolve FAIL 80.0, purity 62). Rejected alternatives named in one line each: canvas pixel morph (no correspondence, unparameterizable) · CSS crossfade (the dissolve defect class). Not a particle-field item: Amendment A5 flow-field and Owner Cures 1/2 do not apply; no CURE-ABSENT.
3. **Execute checklist — READY.** The shared 10-step list is concrete and builder-independent for this item: exact segment start (47.0 s), per-item codex-observe / codex-plan-review firing points, segment census, A6 legs, jev-prewave hold, five-lens wave with SHA-256 binding and payloads preserved before firing.
4. **Verify checklist — INSTRUMENTED.** Swap test carries EXACT values on all three legs: words — title "Motion Design Training" → "Harness Design Basics"; timing — `morphMs` 1600 → 2400; palette — field "#57c8b4" → "#7a5fd0". Purity grep targets named (segment/source filenames, specimen media refs, 0 hits), comparison check, jev-prewave call point, and the five-lens wave composition all named; seat close-out recomputes averages/minima, re-greps purity, ffprobes segment duration, and checks hash bindings. Deduction: purity grep patterns are named by target, not given as verbatim pattern strings, and the syntax check's tool is unnamed — instrumented, not intention-only, so no CHECKLIST-INTENTION and the §5 floor (verify < 0.5 → REVISE) is not what drives this verdict.
5. **Failure points — PRICED, item-specific.** Morph degenerating into crossfade (T105's purity-62 class) with the construction ban as its counter; arbitrary element correspondence (which compounds finding 1 — the Plan names the risk but does not bind it in CONFIG); the short ~2 s morph window inside a 14 s segment as timing-lens exposure on countdown/hold proportions. Render-proof limitation is carried in the Plan header (no browser binary in this seat; logic-level verification; comparison page is the render surface; PIXEL-UNVERIFIED printed in scores.md). Not a copied floor list.
6. **Plateau — PARTIALLY PRICED.** FIRST-ATTEMPT is stated (no prior average for the item) and the expected stuck lens is named in advance (reusability, predicted minimum 78). But the hypothesized cause is not stated in the plateau line itself (it is only inferable from the failure points), and the family-line figure that does exist — cautionary sibling T105 at 80.0, recorded in §1 — is not carried into the Plan's plateau statement. First attempt, not a family re-use build, so the §5 PLATEAU-UNPRICED → REVISE floor does not fire; the thinness is scored, not floored.
7. **Reductions:** none silent found. Schedule basis (Amendment A7): named — `t=0 allocation`, measured source offsets to be printed in build-record.

**Amendment charge (the REVISE cure):** add the correspondence mapping to CONFIG as a named structure — every sceneA element key → its sceneB counterpart or named collapse target — and add sceneA element geometry (position/size per element) as CONFIG keys, before Execute opens for T109. No other leg needs rework; on that amendment this Plan executes.

---

## T110 — countdown pre-announcement (queue #57)

**Verdict: EXECUTE**

| Dimension | Score |
|---|---|
| parameter-table-complete | 0.80 |
| construction-priced | 0.90 |
| execute-checklist-ready | 0.90 |
| verify-checklist-instrumented | 0.85 |
| failure-points-priced | 0.85 |
| plateau-priced | 0.70 |

Findings, in the call's pricing order:

1. **Parameter table — COMPLETE with two thin keys (advisory, not blocking).** Against the §1.3 list (label template + technique name · step count · step duration · band position/style · underlying scene · demo trigger): template `"{name} in {n}"` + name `"Hard cut"`, steps `[3,2,1]`, `stepMs:1000`, band `heightPct:18` + `align:"bottom"`, underlying scene (`kind:"laptop"`), and demo (`kind:"webpage"`) are all named CONFIG keys with specimen defaults. Thin, recorded for Condense: (a) the **demo trigger** is construction prose ("at count end the demo scene replaces the outgoing scene in the same frame") rather than a named trigger key — acceptable here because the trigger is definitionally the count-end event of the parameterized step sequence, not an independent variable; (b) band style is carried by height/alignment plus `bandInk` in palette, with no font-size/weight key — the swap and readability legs below still price it. Neither leaves a §1.3 variable wholly unbound.
2. **Construction priced — PASS.** DOM lower-third band over a config-composed scene; numeral swaps DISCRETE at `stepMs` boundaries, matching the census (hard swaps at ≈23.0/24.0/25.0 s, cut at 26.117 s). Rejected alternatives named: animated numeral transitions (contradicts measured discrete swaps) · video-overlay text (purity). The discrete-swap construction also enforces phase exclusivity for the step sequence — no overlap is buildable as specified. Not a particle field; no CURE-ABSENT.
3. **Execute checklist — READY.** Same concrete 10-step instrument; item specifics present: segment from 20.0 s, steps at measured segment times, A6 legs, jev-prewave hold, SHA-bound five-lens wave.
4. **Verify checklist — INSTRUMENTED.** Swap test EXACT on all legs: words — name "Hard cut" → "Dissolve"; timing — `stepMs` 1000 → 600; palette — field "#e75480" → "#3f7fbf". Purity grep (0 hits), syntax check, comparison check, jev-prewave call point, five-lens composition, and the seat's close-out recomputation/ffprobe/hash checks all named as instruments. Same minor deduction as T109 for grep patterns named by target rather than verbatim strings.
5. **Failure points — PRICED, item-specific.** Numeral step drift (discrete ≈1.0 s steps, timing lens owns); label readability over a busy outgoing scene (band contrast, readability lens); template reusability across technique names, with the swap leg as its proof. Render-proof limitation carried in the Plan header as for all items. One floor item not separately priced — fitting/wrapping limits for long technique names in the band — noted as an advisory gap; the chosen swap name ("Dissolve") does not stress it, so it does not hold this Plan.
6. **Plateau — PRICED (thin cause).** FIRST-ATTEMPT stated; expected stuck lens named in advance (timing, predicted minimum 80), consistent with the step-drift failure point, which supplies the hypothesized cause by reference. No family re-use; §5 plateau floor does not apply.
7. **Reductions:** none silent found. Schedule basis (Amendment A7): named — `segment-anchored` (segment 20–34 s; steps at 3.0/4.0/5.0 s, cut at 6.117 s), the most precisely anchored basis in the wave.

**Disposition note:** EXECUTE as planned. The runner should carry the two thin keys (demo trigger, band font metrics) and the long-name fitting gap into the item's scores.md WHY if any of them surfaces in the lens returns.

---

## T111 — logo outro sting (queue #58)

**Verdict: EXECUTE**

| Dimension | Score |
|---|---|
| parameter-table-complete | 0.85 |
| construction-priced | 0.90 |
| execute-checklist-ready | 0.90 |
| verify-checklist-instrumented | 0.85 |
| failure-points-priced | 0.80 |
| plateau-priced | 0.65 |

Findings, in the call's pricing order:

1. **Parameter table — COMPLETE with one advisory gap.** Against the §1.3 list (triangle colors/geometry/start offsets · assembly duration · wordmark text · hold duration · palette · settle easing): each triangle carries `color` + `from:{x,y}` start offset, `assemblyMs:1800`, `staggerMs:220`, wordmark `text:"SCHOOL OF MOTION"` + `resolveMs:700`, `holdMs:2400`, palette, and `ease:"easeOutCubic"` are all named CONFIG keys with specimen defaults. Advisory gap: triangle **geometry** is only half-bound — start offsets and colors are keys, but triangle size/shape is not a CONFIG key, so the mark's dimensions will sit as literals in the SVG/DOM logic. Unlike T109's mapping, this is a fixed constant of a known mark (already proven in sibling T99's system), not a per-element decision a builder must invent; scored, not floored.
2. **Construction priced — PASS.** SVG/DOM triangles translate+settle from dispersed offsets into the cluster on one timeline; wordmark resolves after the cluster lands. Rejected alternatives named: re-using T99's file (each recreation stands alone; the CONFIG shape is shared, not the artifact) · fade-in mark (census shows travel/settle, not fade). Bookend semantics (same CONFIG shape as T99's opening) are stated as a construction requirement. Not a particle field; no CURE-ABSENT.
3. **Execute checklist — READY.** Same concrete 10-step instrument; item specifics present: segment from 54.0 s, measured assembly window (≈56–58.5 s) used over the packet's late window — the §1b catalogue-fidelity correction is carried into the Plan, not silently absorbed.
4. **Verify checklist — INSTRUMENTED.** Swap test EXACT on all legs: words — wordmark "SCHOOL OF MOTION" → "HADOSH ACADEMY"; timing — `assemblyMs` 1800 → 1100; palette — triangle colors ["#e8443a","#3ac95c","#3a6fe8"] → ["#f2a03c","#3cc9c0","#8a6fe8"]. Purity, comparison, jev-prewave, five-lens wave, and seat close-out checks named as for the wave. Same minor grep-pattern deduction as T110.
5. **Failure points — PRICED, item-specific.** Duplication risk vs T99 (the item must prove the OUTRO form — assembly from the morph's black field + hold + bookend CONFIG shape — not a copy of the opening file); wordmark resolve timing (too early reads as opening, too late starves the hold). Render-proof limitation carried in the Plan header. The list is shorter than T109/T110's and leans on the T99 comparison; specificity is adequate but thinner — scored 0.80.
6. **Plateau — PARTIALLY PRICED; floor examined and not triggered.** FIRST-ATTEMPT is stated for the item and the expected stuck lens is named (reusability, predicted minimum 78). This item does sit in a family line with a real prior — direct sibling T99 logo-mark assembly opening PASS 90.0, recorded in §1 — and the Plan's plateau line does not restate that 90.0 or name what landing under it would mean, beyond the predicted reusability minimum. Because the build is a first attempt of a distinct form (outro, standalone file, T99 reuse explicitly rejected) rather than a re-attempt on T99's machinery, and because a stuck lens + predicted minimum ARE named in advance, this is priced-but-thin, not PLATEAU-UNPRICED; the §5 REVISE floor for family re-use builds does not fire. The runner is charged to carry the T99 90.0 comparison and the cause hypothesis (shared CONFIG shape caps the reusability lens) explicitly in scores.md's WHY.
7. **Reductions:** none silent found — the packet-window discrepancy (packet 59–62 s vs measured assembly ≈56–58.5 s, hold to ≈60.5 s) is named in §1b with its filing destination, and builders are directed to the measured times. Schedule basis (Amendment A7): named — `t=0 allocation`, measured assembly offsets to be printed in build-record.

**Disposition note:** EXECUTE as planned, with the plateau WHY charge above standing as part of this verdict's travel into the Execute gate.

---

## Wave-level notes

- **Five-lens form confirmed:** the Plan's verification plan and Execute step 9 name the five-lens Codex wave (motion fidelity · timing/tempo · construction purity · reusability · readability). No surviving "four lenses" wording found in this Plan — the call's standing watch (§7) returns clean for Cycle 019.
- **Floors check (§5):** no item's verify-checklist-instrumented falls under 0.5; no CURE-ABSENT on any item (no particle-field items this wave; T110's step sequence is phase-exclusive by construction); no PLATEAU-UNPRICED floor triggered. T109's REVISE rests solely on UNBOUND-VARIABLE.
- **Net gate state:** T110 and T111 may open Execute on this Plan. T109 returns to Plan for the single named amendment (correspondence mapping + sceneA geometry as CONFIG keys); its remaining legs are priced and need no rework. No item is RETURN-TO-OBSERVE — every defect found is curable inside Plan; no Observe mechanics or variables are missing upstream (jev-observe-exit's passed §1.3 lists were sufficient to price against, as the T109 finding itself shows: the variable was observed, it was the Plan that left it unbound).

BODY-WRITE: filed this jev-plan-exit return verbatim at `hidden_files/study-jobs/recreation/runs/2026-11-16-cycle-019-wave-16/jev-plan-exit-return.md` — per-item verdicts (T109 REVISE · T110 EXECUTE · T111 EXECUTE) with dimension scores and the T109 Plan amendment charge, for consumption at the §2b gate in RUN.md before Execute.
