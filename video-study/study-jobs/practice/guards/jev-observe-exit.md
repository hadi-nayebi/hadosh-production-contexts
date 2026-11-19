# Jev call — jev-observe-exit (practice)

_Per-call definition instantiated from `jobs/_template/instructions/jev-call-template.md` in substance. Designed 2026-11-14 (phase-guard augmentation, owner's order 2026-11-14 ~01:24 EST). This is the Observe→Plan gate for a practice wave — it judges whether the wave's working memory can support a cure plan, not whether the plan is good (that is `jev-plan-exit.md`). It does NOT duplicate the deliverable judgment: the five-lens re-score wave (`codex-rescore-wave.md`) + `jev-plateau.md` at close remain the only deliverable judges._

## 1. What it judges
- Deliverable / surface judged: the cycle's Observe working memory in `runs/<date>-cycle-<NNN>-wave-<K>/RUN.md` — the pool table, the pick(s), and per pick the delta target + cure inventory — before any Plan work is spent.
- OPEVC call point: practice INSTRUCTION §1, final gate line (added 2026-11-14). The phase advances on the verdict's recorded disposition (applied, or set aside with reason). An unfired call makes the cycle INCOMPLETE.
- Job-specific evidence it is derived from: the founding pool is exactly one item (T15, Cycle-001 RUN.md, 2026-11-13: pool census 1 artifact dir, 1 scores.md) — a one-row pool makes a stale or summary-only read invisible, so this gate exists to force the full record read while the pool is still small enough to check by hand; T15 attempt 1's filed record (`hidden_files/study/recreations/T15-particle-typography/scores.md`: motion 68 · timing 82 · purity 100 · reusability 64 → avg 78.5, FAIL, two lenses under the 70 floor) and the owner's two cures filed 2026-11-14 at the head of that scores.md, above the wave's six priced cures.

## 2. Instruction (the model's charge)
Judge whether this practice wave's Observe working memory is complete and faithful enough to plan from. Price, in this order:

1. POOL COMPLETENESS — does the pool table account for every scored recreation on disk (every `scores.md` under `hidden_files/study/recreations/` + the tier register in TECHNIQUES.md), with per technique: attempts, latest average, per-lens minima, date of last attempt, tier? A technique present on disk but absent from the table, or a table row with no disk source, fails this dimension. RECREATED items must print as out-of-pool (or reopened with the evidence change recorded), never silently dropped.
2. PICK LAWFULNESS — is each pick the standing rule applied (INSTRUCTION §2.1 / OBJECTIVE: lowest latest average first, stalest breaks ties, up to 4 items per wave), or is a departure printed with its reason in RUN.md? An unexplained departure is a pick violation, not a judgment call.
3. RECORD DEPTH — for each pick, was the FULL record read: the prior recreation source, ALL prior Codex lens returns (not only scores.md's summary — the returns carry the priced findings the cures are built from), the prior RUN(s), and the technique's packet evidence again (frames + catalogue mechanics)? Claiming a cure whose source return was not read fails this dimension.
4. CURE-INVENTORY COMPLETENESS — does the inventory for each pick list every priced cure in the prior scores.md, with none dropped silently? For T15 attempt 2 the complete inventory is: OWNER CURE 1 (foreground/background intensity separation) and OWNER CURE 2 (strict phrase sequencing / phase exclusivity) at the HEAD, then the six priced cures — (1) streaming reserve + velocity continuity, subsumed into HQ's flow-field model, (2) surplus/pool policy, (3) fitting bounds (width-AND-height fit + multiline wrap option), (4) config validation, (5) original-tempo preset (3000/2500/2000 as default), (6) determinism on restart. The general rule behind the T15 instance: any owner-filed cure or verdict on an item outranks wave/lens cures and must head that item's list; burying it inside or below lens cures fails dimension 6 outright.
5. DELTA-TARGET SPECIFICITY — is the delta target stated per lens (prior average + the specific lens movements this attempt aims for, each movement tied to a named cure), per INSTRUCTION §1.3? "Improve overall" or an average-only target fails this dimension.
6. OWNER-CURE PRIMACY — where an owner cure/verdict exists for a pick, does it head the inventory verbatim in substance (what was wrong, in the owner's terms — e.g. for T15: word particles and reserve particles at the SAME intensity; the next phrase forming while the current is mid-lifecycle), with its construction consequence named (for T15: intensity rides the borrow flag; phase exclusivity in the scheduler; the flow-field rebuild carries both)? Any owner cure present in the record but absent, paraphrased away, or ranked below a lens cure scores 0 on this dimension.
7. INSTRUMENT AWARENESS — does the working memory print the scoring instrument for both attempts (lens set + bar: average ≥85 AND no lens <70)? For T15: attempt 1 was scored by FOUR lenses (78.5) and attempt 2 will be scored by FIVE (readability added 2026-11-14) — the delta across that boundary is instrument-changed, not pure movement, and Observe must say so before Plan prices a target against 78.5.
8. ROUTED NEEDS — are Codex Observe receipts present (see `codex-observe.md`) or their by-design absence printed, and is any owner-only information need (a taste/ear call no record settles) identified and routed to HQ, or explicitly NONE? Practice normally needs no owner input to pick or plan — an invented owner question scores against this dimension.

Score 0–1 per dimension below and classify. A working memory that cannot support a cure plan returns; it never advances on hope.

## 3. Context contract (masked view)
- FED: RUN.md Observe section (pool table + picks + delta targets + cure inventories) · the tier-register lines from TECHNIQUES.md for every pooled technique · every pooled item's scores.md (full text) · the prior Codex return files' score + priced-finding sections for each pick · the pick's packet-evidence pointer (technique entry in TECHNIQUES.md + digest catalogue mechanics excerpt).
- NEVER FED: the seat's effort narrative or elapsed-time claims · any draft Plan or cure plan (this gate judges Observe only; a plan smuggled into the context launders the gate) · the builder's self-assessment of readiness · prior attempts' recreation.html source (construction is Plan/Execute material, not Observe evidence).
- Ceiling: ≤32k tokens. Packing rule: pool table and scores.md files are fed whole first; lens returns are fed as score + findings excerpts in lens order; if the wave carries 4 items and the ceiling binds, judge per item in separate calls (one verdict per item, printed per item in RUN.md) rather than truncating any item's scores.md.

## 4. Output space
- Verdict classes: **ADVANCE · ADVANCE-WITH-GAPS · RETURN-TO-OBSERVE** (per wave; per item when the packing rule splits the call).
- Dimensions (0–1; 0.0 = absent/false, 1.0 = fully evidenced):
  - pool-completeness — every on-disk scored recreation accounted for, with attempts/average/minima/date/tier per row.
  - pick-lawfulness — standing pick rule applied, or departure printed with reason.
  - record-depth — full returns + prior RUNs + packet evidence read per pick, not summaries.
  - cure-inventory-completeness — every priced cure in the prior scores.md present, none silently dropped.
  - delta-target-specificity — per-lens movements, each tied to a named cure.
  - owner-cure-primacy — owner cures head the inventory in substance, construction consequence named (1.0 also when no owner cure exists for any pick and that absence is printed).
  - instrument-awareness — lens set + bar printed for prior and next attempt; instrument-change boundary named where it exists.
  - routed-needs — Codex Observe receipt present or its absence printed; owner-only needs identified and routed, or explicitly NONE. _(Added 2026-11-14, Cycle-003 Condense dimension check: §2 has priced this as item 8 since the founding design while §4's dimension list omitted it — the seat's Cycle-002/003 profiles scored it as an eighth dimension on §2's authority; the lists now agree. This text change takes effect on the call's next firing and is priced against the returns that follow it.)_
- Rejection taxonomy (one primary, on RETURN-TO-OBSERVE; optional secondary findings naming the RUN.md passage + evidence):
  - STALE-POOL — the table misses or misstates an on-disk recreation/tier.
  - PICK-VIOLATION — pick order departs from lowest-first/stalest with no printed reason.
  - SUMMARY-ONLY-READ — cures or targets cite scores.md's summary where the underlying return was not read.
  - CURE-DROPPED — a priced cure from the prior scores.md is absent from the inventory without a deferral note.
  - OWNER-CURE-BURIED — an owner cure exists but is absent, diluted, or ranked below lens cures.
  - VAGUE-TARGET — delta target is average-only or "improve overall".
  - INSTRUMENT-BLIND — lens set/bar or the instrument-change boundary not printed.
  - PACKET-NOT-REREAD — the technique's packet evidence was not re-read for this attempt.
- Accepted profiles travel: verdict + profile append to RUN.md's Observe gate line; ADVANCE-WITH-GAPS gaps become named risks in Plan §2 and are priced again by `jev-plan-exit.md`.

## 5. Floors and disposition
- Any dimension < 0.5 → RETURN-TO-OBSERVE.
- owner-cure-primacy < 1.0 while an owner cure exists in a pick's record → RETURN-TO-OBSERVE (OWNER-CURE-BURIED), at any other score — the owner's catches are this job's scarcest signal (T15: both owner cures were defects NO lens named).
- cure-inventory-completeness < 0.8 → RETURN-TO-OBSERVE (a partial inventory may be completed in Observe; it may not be completed from memory in Plan).
- ADVANCE-WITH-GAPS is lawful only for gaps in record-depth or instrument-awareness that Plan can carry as printed risks; it is never lawful for pool, pick, or owner-cure defects.
- Disposition record: the verdict + classification + profile + disposition print in RUN.md. The verdict is advisory — reviewed by the runner, applied or set aside with the miss recorded in Condense.

## Call command
- Defined prompt + context assembly (fleet Jev transport binding is the job's build charge, as for `jev-plateau.md`): assemble the FED set above from the named sources, in the order listed, with this file's §2 as the instruction text; the runner executes the sealed decision-model route named in `guards/guards.md` when bound. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE** — the seat's own judging under the same floors runs alongside, printed as such.

## 6. Firing record and improvement
- Exemplars:
  1. T15 attempt-2 founding Observe (pool = 1 row, T15 78.5 four-lens, owner cures 1–2 heading the eight-cure inventory, per-lens targets, instrument-change printed) — must return ADVANCE.
  2. Same pool table but the inventory lists only the six priced cures (owner cures omitted) — must return RETURN-TO-OBSERVE / OWNER-CURE-BURIED.
  3. A pool table missing a second on-disk scores.md — must return RETURN-TO-OBSERVE / STALE-POOL.
  4. Delta target reading "beat 78.5 overall" with no per-lens movements — must return RETURN-TO-OBSERVE / VAGUE-TARGET (or ADVANCE-WITH-GAPS only if all other dimensions are 1.0 and the gap is printed — the firing record decides which; the stricter reading is the founding intent).
  5. A pick of the second-lowest item with the departure reason printed (e.g. lowest item awaiting a packet-evidence change) — must NOT return PICK-VIOLATION.
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — all five must classify correctly when fired (first firing owed at the T15 attempt-2 wave), and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
Amendments name forcing evidence (a stale pool that advanced · an owner cure buried past this gate · a return that blocked a lawful wave) + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it.
