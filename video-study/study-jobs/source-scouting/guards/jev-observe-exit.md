# Jev call — jev-observe-exit (source-scouting)

_Per-call definition from jev-call-template.md. Built 2026-11-14 under the phase-guard build spec (owner's order 2026-11-14 ~01:24 EST). Criteria derived from this job's own record: the digestion queue stood EMPTY after Packet #1 was digested (QUEUE.md, 2026-11-13 ~23:10 EST) — a sweep whose Observe does not price queue state, production adjacency, and refill duty produces exactly that failure again._

## 1. What it judges
- Deliverable: the sweep cycle's Observe working memory in RUN.md (queue state · adjacency citations · prior-art citations · owner-send check) BEFORE Plan opens.
- Call point: source-scouting INSTRUCTION §1 gate out → §2 Plan. The phase advances on the verdict's recorded disposition (applied, or set aside with reason). An unfired call makes the cycle INCOMPLETE.

## 2. Instruction (the model's charge)
Judge whether this Observe actually gathered what a scouting Plan needs. (1) Queue state: does RUN.md state the live count, the head entry's age, and the backlog state as read from QUEUE.md itself — and if the queue is empty or below 3 live, is the emptiness carried as the cycle's first finding with refill duty, not as background? (2) Adjacency: are the production records this sweep scouts FOR named as files actually read (DLC lane's current containers · studio's current style work), or is the sweep about to scout generically? Scouting without the adjacency read produces generic candidates — that is this job's named founding failure mode. (3) Prior art: are the study record sources checked (study notes · CURRICULUM · style-library INDEX) so nothing already digested or already queued is scouted again? (4) Owner sends: was the seat's charge context + lane HQ.json checked for unqueued owner sends since last cycle — owner sends are Observe's first product, and a missed one is never a gap, it is a return. (5) Archive rule (Amendment A1): if an owner archive is in play, does Observe stop at inventory (count · formats · rough classes) with NO digestion promised and NO archive item queued before the inventory stands and a prioritization pass has run? (6) Codex: if codex-observe fired this cycle, is its receipt cited; if it did not fire, is the reason printed? Score 0–1 per dimension, classify defects, compose the verdict by the floors.

## 3. Context contract (masked view)
- FED: RUN.md's Observe section · the queue state as read from QUEUE.md (live count · head age · backlog) · the names/paths of the adjacency and prior-art files Observe claims to have read · the owner-send check result · the archive state (none / supplied-uninventoried / inventoried) · codex-observe's receipt if fired.
- NEVER FED: candidate lists or search results (that is Execute's material; judging it here would let a shiny candidate launder a thin Observe) · the scout's enthusiasm prose · prior cycles' verdicts.
- Ceiling: ≤32k tokens; this job's Observe product is small by design (§8) — overflow means the sweep has ballooned and splits by territory before judging, never trims silently.

## 4. Output space
- Verdict classes: **ADVANCE · ADVANCE-WITH-GAPS · RETURN-TO-OBSERVE**.
- Dimensions (0–1; 0 = absent/false, 0.5 = partial, 1 = fully usable): queue-state accuracy · adjacency-read depth · prior-art coverage · owner-send completeness · archive-rule compliance · source freshness (records read are current, not last cycle's copies).
- Rejection taxonomy (one primary, on RETURN-TO-OBSERVE): OWNER-SEND-MISSED (an unqueued owner send existed and Observe did not surface it) · ARCHIVE-PROMISE (digestion promised, or an archive item queued, before inventory + prioritization stood) · ADJACENCY-MISSING (no production record read; the sweep would scout generically) · QUEUE-STATE-STALE (queue state in RUN.md disagrees with QUEUE.md or was carried from last cycle) · PRIOR-ART-BLIND (study record unchecked; already-digested material in scope) · SOURCE-UNNAMED (a claimed read names no file).
- Accepted profiles travel: an ADVANCE-WITH-GAPS verdict names each gap in RUN.md, and Plan must either close it or carry it as a priced limitation — a gap that vanishes between the verdict and the Plan is a deviation.

## 5. Floors and disposition
- OWNER-SEND-MISSED or ARCHIVE-PROMISE at any score → RETURN-TO-OBSERVE.
- adjacency-read depth < 0.5 → RETURN-TO-OBSERVE (generic scouting is this job's founding defect, not a gap).
- queue-state accuracy < 1.0 on the live count → RETURN-TO-OBSERVE (every downstream number derives from it; §10 re-counts from QUEUE.md for the same reason).
- ADVANCE-WITH-GAPS is lawful only for prior-art coverage or source freshness gaps, each named.

## Call command
- Defined prompt + context assembly: assemble the §3 context from RUN.md + QUEUE.md, fire through the fleet's sealed decision-model route named in guards.md when bound. Binding the exact command here is the first firing's own first step. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE** — never a borrowed pass.

## 6. Firing record and improvement
- Exemplars: the founding state (queue EMPTY after Packet #1, no sweep yet run — Observe that reports the queue without the refill finding must RETURN-TO-OBSERVE or ADVANCE-WITH-GAPS with the finding, never clean ADVANCE) · a constructed Observe missing an owner send planted in the lane board (must classify OWNER-SEND-MISSED) · a constructed archive Observe that queues two archive items pre-inventory (must classify ARCHIVE-PROMISE) · a complete Observe from a real sweep (ADVANCE anchor, once one exists).
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — all must classify correctly when fired, and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
Amendments name forcing evidence + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it. First expected amendment pressure: whether ADVANCE-WITH-GAPS is being used to launder thin adjacency reads — priced at the third fired verdict.
