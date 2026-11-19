# Jev call — jev-observe-exit (recreation)

_Per-call definition from jev-call-template.md. Built 2026-11-14 (phase-guard augmentation). The judgment: a recreation wave may not enter Plan on a catalogue summary alone — Observe must have priced the queue, read the prior scores where they exist, seen the evidence frames, and carried the standing construction guidance into working memory._

## 1. What it judges
- Deliverable: the wave's Observe working memory — RUN.md gate-out block (§1: mechanics summary + sub-beat timings + variable list + named consumer) for each item in the wave (up to 5 owed items).
- Call point: recreation INSTRUCTION §1, at the gate out of Observe, before §2 Plan opens for any item in the wave. The verdict is advisory per item: applied, a RETURN-TO-OBSERVE item is held out of the wave's Plan (the wave proceeds with its advancing items; a held item never holds the wave hostage — same rule as jev-prewave §5); set aside, the miss is recorded in Condense. An unfired call makes the cycle INCOMPLETE.

## 2. Instruction (the model's charge)
Judge whether this Observe record can support a Plan for THIS recreation wave, item by item. Price, in order:
(1) QUEUE STATE PRICED — does the record state the recreation queue's current position (../QUEUE.md read this cycle), each item's queue number and OWED status, and the ownership split (Amendment A3 §3: this job owns FIRST attempts; an already-scored technique belongs to practice — a wave item that is a re-attempt is a routing defect, named)? T15 is the standing example: attempt 1 scored FAIL 78.5 on 2026-11-13, so T15 attempt 2 is practice's charge, never this job's wave item.
(2) PRIOR SCORES READ — for any item whose technique already has a scores.md or a verdict-history line (a techniques' family sibling counts: e.g. T16 shares T15's particle machinery), does the record cite the actual filed scores and cure list, or does it plan from the catalogue description alone? Planning that ignores a filed failure is the defect this leg exists to catch.
(3) MECHANICS SEEN, NOT SUMMARIZED — does the record carry the packet section's mechanics + sub-beat timings from firsthand viewing of the evidence frames and the source segment in motion (§1.1–1.2), with timings in seconds — or only a restatement of the TECHNIQUES.md one-liner? A mechanic the builder has not seen is a guess (§1.1).
(4) VARIABLES EXTRACTED — is the §1.3 variable list complete for this technique (text content, phrase count, timing/durations, palette, scale, direction, density — plus technique-specific variables), so Plan's parameter table has something to bind? A variable missing here becomes a hardcoded accident in Execute (§1.3).
(5) CONSTRUCTION GUIDANCE CARRIED — where the technique's family has standing guidance, is it IN the working memory, named? For particle-field techniques: the flow-field model (Amendment A5 §4: one constant flow field, borrowing with low-amplitude jitter, never-borrowed reserve fraction, release with velocity continuity) AND Owner Cure 1 (foreground/background intensity separation riding the borrow flag) AND Owner Cure 2 (strict phrase sequencing / phase exclusivity). For typography techniques: the typography construction precedent (Amendment A1 §2: runtime sampling of config-rendered text). Guidance that exists in INSTRUCTION but is absent from the wave's working memory is scored as absent.
(6) CONSUMER NAMED — §1.4: which production surface lifts this machinery (container type + owning lane), named per item, not "production generally."
(7) CODEX/OWNER INPUTS — were any Codex calls fired in this Observe (e.g. a record audit of a prior attempt's codex/ returns) with receipts filed, or is the absence printed? Does the wave need owner-only information (it almost never does — recreation prices from packets and filed scores); if claimed, is it routed as a named gap rather than silently assumed?
Score 0–1 per dimension (§4), classify defects from the taxonomy, return one verdict per item.

## 3. Context contract (masked view)
- FED: RUN.md Observe gate-out blocks · ../QUEUE.md recreation-queue section (current) · each item's packet digest.md technique section + TECHNIQUES.md entry · prior scores.md + verdict-history.md lines for the item and its named family siblings · INSTRUCTION Amendments A1/A3/A5 guidance lines relevant to the item's family · any Observe-phase Codex receipts filed this cycle.
- NEVER FED: the builder's confidence prose · HQ's supervision faces · scores from attempts not yet filed (unfiled scores do not exist).
- Ceiling: ≤32k tokens; packet sections enter as the technique's section only, never the whole digest; evidence frames are referenced by path/timestamp, never fed as images (text-only judge).

## 4. Output space
- Verdict classes (per item): **ADVANCE · ADVANCE-WITH-GAPS · RETURN-TO-OBSERVE**.
- Dimensions (0–1): queue-state-priced · prior-scores-read · mechanics-seen · variables-extracted · guidance-carried · consumer-named. (1.0 = evidenced in the record with citations; 0.5 = asserted without citation; 0.0 = absent.)
- Rejection taxonomy (one primary per returned item): QUEUE-STALE (queue position/status not read this cycle) · REATTEMPT-MISROUTED (scored technique in a first-attempt wave) · SCORES-UNREAD (prior scores/cures exist, uncited) · MECHANICS-UNSEEN (no firsthand sub-beat record) · VARIABLES-THIN (variable list cannot bind a parameter table) · GUIDANCE-DROPPED (standing family guidance absent from working memory) · CONSUMER-VAGUE.
- Accepted profiles travel: cited in RUN.md at the Plan gate; ADVANCE-WITH-GAPS items carry their gap list into §2 as named Plan charges.

## 5. Floors and disposition
- Any dimension < 0.5 → RETURN-TO-OBSERVE for that item. GUIDANCE-DROPPED on a particle-field or typography item → RETURN-TO-OBSERVE at any other score (T15 attempt 1's founding lesson: the frozen-flow defect and both owner catches were guidance-shaped failures discovered only after the wave was spent).
- ADVANCE-WITH-GAPS requires every gap named with its Plan-phase cure; an unnamed gap is a RETURN.
- Disposition: the verdict is advisory — reviewed by the runner, applied or set aside with the miss recorded in Condense. The verdict + primary classification + disposition land in RUN.md either way.

## Call command
- Defined prompt + context assembly per §3, executed through the fleet's sealed decision-model route named in guards.md when bound. Binding the exact runner command here is the first firing's own first step. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.**

## 6. Firing record and improvement
- Exemplars: (a) T15 Cycle-002's Observe record reconstructed from its RUN.md (must ADVANCE — mechanics, timings and consumer were recorded before building). (b) A constructed record proposing T15 as a wave item for attempt 2 (must RETURN-TO-OBSERVE as REATTEMPT-MISROUTED). (c) A constructed particle-technique record with no flow-field / Owner Cure 1 / Owner Cure 2 lines (must RETURN as GUIDANCE-DROPPED). (d) A constructed record whose variable list names only "text and color" for a timed multi-phrase technique (must RETURN as VARIABLES-THIN).
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — all four must classify correctly when fired, and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
Amendments name forcing evidence + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it. First expected amendment pressure: whether family-sibling scores (leg 2) should be mandatory for all items or only same-machinery families — priced from the first waves' returns.
