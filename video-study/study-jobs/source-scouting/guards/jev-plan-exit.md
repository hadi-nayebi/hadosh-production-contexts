# Jev call — jev-plan-exit (source-scouting)

_Per-call definition from jev-call-template.md. Built 2026-11-14 under the phase-guard build spec (owner's order 2026-11-14 ~01:24 EST). Criteria derived from this job's own shape: one sweep = 0–5 candidates (OBJECTIVE grain), a queue that stood EMPTY after Packet #1 as its founding finding, and §9's source-yield demotion rule (three consecutive zero-yield sweeps demote a source in the mix)._

## 1. What it judges
- Deliverable: the sweep's Plan in RUN.md — source mix + territories + candidate target, AND its standing products: the Execute checklist and the Verify checklist — before any searching happens.
- Call point: source-scouting INSTRUCTION §2 gate out → §3 Execute. The phase advances on the verdict's recorded disposition (applied, or set aside with reason). An unfired call makes the cycle INCOMPLETE.

## 2. Instruction (the model's charge)
Judge the plan as the digestion job that will inherit its queue. (1) Candidate slate: is the source mix chosen from OBJECTIVE's four sources with a reason per source, and does the mix answer the Observe findings — above all, if the queue is empty or below 3 live, does the slate carry an explicit refill target (the founding charge was ≥2 candidates: one transition-led, one word-animation specimen) rather than a general intention to look around? (2) Territories: are the style/technique territories specific enough that a searcher could fail to find them (a territory that cannot fail is a mood, not a target)? (3) Queue order: does the plan state the entry order law — owner sends at the TOP, scouted entries below the live line in sweep order, overflow to backlog — and any backlog retirements it intends, with reasons priced before Execute, not improvised during it? (4) Checklists: does the Plan produce, as named products in RUN.md, an **Execute checklist** (search steps in order · per-candidate capture fields: creator, platform, URL, date, format, observable hook · the §3.2 reason form · queue entry + field updates) and a **Verify checklist** (queue census re-counted from QUEUE.md · reason-specificity cold read · dedup against library INDEX and past digests · link resolution — each naming its instrument, not its intention)? (5) Failure points, priced for THIS job: the sweep returns zero candidates against an empty queue (the §6.4 empty-queue finding is then the deliverable — is that priced?) · every territory turns out already digested (prior-art collision at scale) · a chosen source hits its third consecutive zero-yield sweep and §9 demotion applies · an owner send surfaces mid-Execute and reorders the queue · archive supplied mid-cycle (inventory duty pre-empts the slate). Are the applicable ones named with their handling? (6) Reductions: anything the objective demands that this plan quietly dropped (a source skipped without reason, the refill target shrunk, verification steps unnamed) is named, never absorbed silently. Score 0–1 per dimension, classify defects, compose the verdict by the floors.

## 3. Context contract (masked view)
- FED: RUN.md's Observe verdict (jev-observe-exit receipt or its not-fired print) + Plan section incl. both checklists · OBJECTIVE's source list + grain · the queue state · source-yield history from verdict-history.md (demotion pricing).
- NEVER FED: search results or candidate names (Plan is judged before searching exists) · the scout's rationale prose beyond the Plan's stated reasons · other jobs' plans.
- Ceiling: ≤32k tokens; overflow = the plan has outgrown one sweep — split by territory per §8 and judge each split, never trim a checklist silently.

## 4. Output space
- Verdict classes: **EXECUTE · REVISE · RETURN-TO-OBSERVE**.
- Dimensions (0–1; 0 = absent/false, 0.5 = partial, 1 = fully usable): source-mix justification · territory specificity · queue-order law stated · Execute-checklist completeness · Verify-checklist instrumentedness · failure-point pricing · reduction honesty.
- Rejection taxonomy (one primary): CHECKLIST-MISSING (Execute or Verify checklist absent, or a Verify item naming an intention instead of an instrument) · MIX-UNJUSTIFIED (a source with no reason, or a due §9 demotion ignored) · TERRITORY-VAGUE (territories that cannot fail) · REFILL-UNPRICED (queue below 3 live and the slate carries no refill target or no zero-yield fallback) · FAILURE-POINTS-UNPRICED · REDUCTION-SILENT (objective material dropped without a named line).
- Accepted profiles travel: a REVISE verdict's named defects are fixed in the Plan and the revised Plan is rejudged before Execute; the receipt binds the exact Plan text — an edit after EXECUTE invalidates it.

## 5. Floors and disposition
- Execute-checklist completeness < 1.0 or Verify-checklist instrumentedness < 1.0 → REVISE (the checklists ARE the Plan's product; a partial checklist is not a plan with a gap, it is no plan).
- REFILL-UNPRICED while the queue stands below 3 live → REVISE; if Observe never priced the queue state at all → RETURN-TO-OBSERVE.
- REDUCTION-SILENT at any score → REVISE with the dropped item named on the face of the verdict.

## Call command
- Defined prompt + context assembly: assemble the §3 context from RUN.md + OBJECTIVE.md + verdict-history.md, fire through the fleet's sealed decision-model route named in guards.md when bound. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.**

## 6. Firing record and improvement
- Exemplars: the founding charge as a plan (queue empty · target ≥2 · one transition-led + one word-animation territory — the EXECUTE anchor) · a constructed plan with source mix but no Verify checklist (must classify CHECKLIST-MISSING) · a constructed plan against an empty queue with no refill target (must classify REFILL-UNPRICED) · a constructed plan whose territories are "good motion graphics" (must classify TERRITORY-VAGUE).
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — all four must classify correctly when fired, and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
Amendments name forcing evidence + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it. First expected amendment pressure: whether the failure-point list tracks the lane's real sweep failures (dead sources, link rot) or stays founding-era — priced after three fired verdicts.
