# Jev call — jev-plan-exit (practice)

_Per-call definition instantiated from `jobs/_template/instructions/jev-call-template.md` in substance. Designed 2026-11-14 (phase-guard augmentation, owner's order 2026-11-14 ~01:24 EST). This is the Plan→Execute gate for a practice wave — it judges the cure plan and the checklists Execute/Verify will run under. It does NOT duplicate the deliverable judgment: the five-lens re-score wave (`codex-rescore-wave.md`) + `jev-plateau.md` at close remain the only deliverable judges; this gate judges whether Verify is planned well enough to run them honestly._

## 1. What it judges
- Deliverable / surface judged: the wave's Plan product in RUN.md — per item: the cure plan, the Execute checklist, the Verify checklist, the failure-point evaluation, and the pre-planned WHY scaffold for a non-beating outcome.
- OPEVC call point: practice INSTRUCTION §2, final gate line (added 2026-11-14). The phase advances on the verdict's recorded disposition (applied, or set aside with reason). An unfired call makes the cycle INCOMPLETE.
- Job-specific evidence it is derived from: INSTRUCTION §5.4's floor rule — a non-beating attempt's WHY is a close-out gate, and in the founding design it was only ever demanded AT close, i.e. improvised under disappointment; this gate moves the WHY into Plan as a deliverable with a scaffold, so close becomes filing, not invention. Also derived from T15 attempt 2's shape: its seed is a REBUILD (HQ's flow-field model carries OWNER CURE 1 + OWNER CURE 2 + priced cure 1 at once), which is exactly the plan shape most at risk of swallowing the individual cures it claims to carry; and from §8's size rule (a cure plan growing into a rebuild-from-scratch splits — convergent cures in, the rest deferred in writing).

## 2. Instruction (the model's charge)
Judge whether this practice wave's plan is executable and verifiable as written. Price, in this order:

1. CURE-TO-CONSTRUCTION MAPPING — for each item, does every cure in the Observe inventory map to a named construction change (what in `recreation.html` changes, in which config/construction term), in convergent-lens order first (recreation Amendment A1: a defect two lenses named outranks single-lens findings; owner cures outrank both — for T15 attempt 2: OWNER CURE 1 intensity-on-borrow-flag and OWNER CURE 2 phase-exclusivity scheduler BEFORE the wave's cures, with the flow-field rebuild explicitly priced as the carrier of cures OC1+OC2+priced-1, not as a replacement for naming them)? A cure listed with no construction change, or a rebuild claimed to "cover" cures it does not name one by one, fails this dimension.
2. EXECUTE CHECKLIST COMPLETENESS — does an Execute checklist exist per item (named location: RUN.md Plan section), covering at minimum: preservation copy taken BEFORE the working file is touched (versioned name `recreation-attempt-<K-1>.html`, INSTRUCTION §2.3) · rebuild steps in cure order · config-first / parameterization preserved (no traced or specimen media — recreation §6 purity binds practice exactly) · swap test before any wave · comparison.html re-pointed only if the interface changed, ORIGINAL side never changed? A checklist that restates the cure plan without the preservation and purity steps fails this dimension.
3. VERIFY CHECKLIST INSTRUMENT-SPECIFICITY — does a Verify checklist exist per item naming HOW each property will be checked, instrument not intention: swap test (logic level minimum, pixel where a browser exists) · purity grep + asset inventory · comparison check · the five-lens re-score wave via `codex-rescore-wave.md` (prior scores NAMED in seat tasking, NEVER fed as anchors inside a lens run) · delta arithmetic recomputed from filed returns of both attempts (mechanical guard 1 in guards.md) · attempt-preservation census, sha before/after (mechanical guard 2) · floor-rule gate check (mechanical guard 3) · `jev-plateau.md` call point if the attempt does not beat its prior · tier hand-off step on PASS (file to style-library's board; the tier move is style-library's act)? "Will verify quality" or a checklist naming the wave but not the mechanical guards fails this dimension.
4. FAILURE-POINT EVALUATION — does the plan price what breaks THIS plan, per item? For practice the standing failure points that must be priced or explicitly ruled out with a reason: (a) the flow-field / big-rebuild risk — one construction change carrying several cures makes a lens regression unattributable cure-by-cure; (b) a cure interaction (e.g. for T15: fitting-bounds/wrap changes altering phrase timing against the original-tempo preset; intensity separation reducing motion-fidelity dust density); (c) prior-attempt overwrite or comparison re-pointing before the new attempt passes its own checks; (d) anchor leak — prior scores reaching a lens run and negotiating the delta instead of the seat computing it; (e) instrument-change misread — a five-lens average compared to a four-lens 78.5 as pure movement; (f) wave fan-out cross-contamination — parallel item tasks writing into the wrong artifact directory (one item per directory, §8 per-item rule); (g) size split evaded — a rebuild-from-scratch taken whole instead of splitting per §8 with deferrals in writing. A plan with no failure section, or a generic one that would fit any item unchanged, fails this dimension.
5. DEFERRAL HONESTY — are changes NOT attempted listed as deliberately deferred, with the reason each (INSTRUCTION §2.2), including any §8 split remainder? A cure absent from both the plan and the deferred list is a silent drop — the plan's own reduction, named here because the three-questions test binds plans as well as faces.
6. WHY READINESS — is the non-beating outcome planned as a deliverable BEFORE Execute: a WHY scaffold pre-drafted in the item's scores.md plan (cure-by-cure outcome slots · which lens is hypothesized to stick, and why · what evidence would name the plateau vs excuse it, per `jev-plateau.md`'s dimensions — causal specificity, lens attribution, consequence, evidence citation)? A plan that treats WHY as a close-time writing task fails this dimension; the scaffold does not pre-judge the outcome, it pre-commits the evidence the filing will need.
7. REDUCTION NAMING — does the plan print anything it quietly dropped from the objective (OBJECTIVE: a higher average filed, or a non-beating WHY filed — no third outcome)? A plan whose success criteria are weaker than the objective's two lawful outcomes fails outright.

Score 0–1 per dimension below and classify. A plan whose Verify cannot be run as written does not execute.

## 3. Context contract (masked view)
- FED: RUN.md Plan section per item (cure plan + Execute checklist + Verify checklist + failure points + WHY scaffold + deferred list) · RUN.md Observe section + the jev-observe-exit verdict/profile for the same text · each item's scores.md cure inventory (source of truth for mapping completeness) · guards/guards.md mechanical-guard list (the instruments the Verify checklist must name).
- NEVER FED: the builder's confidence narrative · estimated scores for the coming attempt (a forecast in the context anchors this judgment and, downstream, the wave) · prior lens returns' prose praise/blame beyond the priced findings already in scores.md · any executed build output (nothing has executed yet; output in the context means the gate was run late).
- Ceiling: ≤32k tokens. Packing rule: judge per item in separate calls when the wave carries more than 2 items; scores.md inventories are fed whole, checklists whole — truncation of a checklist invalidates the call (print PROTOCOL FAILURE, re-run per item).

## 4. Output space
- Verdict classes: **EXECUTE · REVISE · RETURN-TO-OBSERVE**.
- Dimensions (0–1; 0.0 = absent/false, 1.0 = fully evidenced):
  - cure-to-construction-mapping — every cure → a named construction change, owner/convergent order preserved.
  - execute-checklist-completeness — preservation, purity, swap test, comparison rule all present per item.
  - verify-instrument-specificity — every Verify property named with its instrument/guard, incl. the three mechanical guards and the jev-plateau call point.
  - failure-point-pricing — this item's real failure points priced or ruled out with reasons.
  - deferral-honesty — every non-attempted cure deferred in writing with a reason; no silent drops.
  - why-readiness — WHY scaffold pre-drafted with evidence slots matching jev-plateau's dimensions.
  - reduction-naming — plan's outcomes match the objective's two lawful outcomes; any reduction printed.
- Rejection taxonomy (one primary, on REVISE / RETURN-TO-OBSERVE; optional secondary findings naming the passage + evidence):
  - CURE-WITHOUT-CONSTRUCTION — a cure with no named construction change, or a rebuild absorbing cures unnamed.
  - NO-EXECUTE-CHECKLIST — Execute checklist absent or missing preservation/purity steps.
  - NO-VERIFY-CHECKLIST — Verify checklist absent.
  - INTENTION-NOT-INSTRUMENT — Verify names intentions ("check quality") instead of instruments/guards.
  - UNPRICED-FAILURE — failure section absent or generic (fits any item unchanged).
  - SILENT-DEFERRAL — a cure in neither the plan nor the deferred list.
  - WHY-UNPLANNED — no WHY scaffold; the floor-rule filing left to close-time improvisation.
  - PRIOR-ATTEMPT-AT-RISK — preservation step absent, late, or comparison re-pointing unguarded.
  - ANCHOR-LEAK — the plan feeds, or allows, prior scores inside a lens run.
- Accepted profiles travel: verdict + profile append to RUN.md's Plan gate line; on PASS, the Verify checklist in the approved plan is the checklist §5 executes against — a Verify step not in it needs a printed deviation in the run record, not a silent addition.

## 5. Floors and disposition
- Any dimension < 0.5 → REVISE (RETURN-TO-OBSERVE if the defect traces to the Observe inventory itself — e.g. a cure in scores.md that Observe never listed).
- verify-instrument-specificity < 0.8 → REVISE at any other score: an uninstrumented Verify is how this lane's founding risk (a delta negotiated with reviewers instead of computed) re-enters.
- why-readiness = 0 → REVISE: the WHY is this job's founding deliverable on the non-beating branch; an unplanned WHY is an unplanned deliverable.
- prior-attempt risk (taxonomy PRIOR-ATTEMPT-AT-RISK as primary) → REVISE until the preservation step is in the checklist — prior attempts are evidence and are never edited (§6.1); a plan that can destroy evidence does not run.
- Disposition record: verdict + classification + profile + disposition print in RUN.md. The verdict is advisory — reviewed by the runner, applied or set aside with the miss recorded in Condense.

## Call command
- Defined prompt + context assembly (as `jev-observe-exit.md`): assemble the FED set above, in the order listed, with this file's §2 as the instruction text; executed via the sealed decision-model route named in `guards/guards.md` when bound. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE** — the seat's own judging under the same floors runs alongside, printed as such.

## 6. Firing record and improvement
- Exemplars:
  1. T15 attempt-2 plan as seeded in scores.md (owner cures headed, flow-field carrier named cure-by-cure, preservation + five-lens wave + three mechanical guards in the checklists, WHY scaffold present, tempo/fitting interaction priced) — must return EXECUTE.
  2. Same plan with the Verify checklist reading "re-run the wave and check the delta" (no mechanical guards, no jev-plateau point) — must return REVISE / INTENTION-NOT-INSTRUMENT.
  3. A plan listing priced cures 2–6 as deferred "for focus" with no per-cure reason and no §8 split note — must return REVISE / SILENT-DEFERRAL or UNPRICED-FAILURE (Condense pricing of the firing record fixes which; silent drop must not pass).
  4. A plan with no WHY scaffold ("we will write the WHY at close if needed") — must return REVISE / WHY-UNPLANNED.
  5. A plan whose Execute checklist omits the preservation copy — must return REVISE / PRIOR-ATTEMPT-AT-RISK and block.
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — all five must classify correctly when fired (first firing owed at the T15 attempt-2 wave), and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
Amendments name forcing evidence (a failure point that materialized unpriced · a Verify step invented mid-Execute · a WHY improvised at close despite the scaffold) + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it.
