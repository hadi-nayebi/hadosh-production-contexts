# Jev call — jev-observe-exit (reception-analysis)

_Per-call definition instantiated from jobs/_template/instructions/jev-call-template.md. Built 2026-11-14 (phase-guard augmentation pass 1). This is the Observe→Plan gate: it judges whether the cycle's working memory can support a reception Plan for THIS specimen — engagement evidence gathered, packet state known, and the craft/reception separation already holding at the source, before any signal is chosen._

## 1. What it judges
- Surface judged: the cycle RUN.md's Observe record (§1 product): the packet citation + the reception-data inventory with absences named.
- Call point: reception-analysis INSTRUCTION §1, at the gate out. The phase advances on the verdict's recorded disposition (applied, or set aside with reason). An unfired call makes the cycle INCOMPLETE.
- What it gates: the right to choose a signal set. A working memory that cannot support the Plan returns to Observe; it never advances on hope.

## 2. Instruction (the model's charge)
Judge whether this Observe record entitles the job to plan a reception analysis of this specimen. Price, in order: (1) PACKET STATE — was the specimen's packet (or its in-flight state) actually read this cycle, and is its craft verdict cited by pointer, with the packet's completeness state (landed / in-flight / §8 reception slot empty or prior) stated from the record, not assumed? (2) EVIDENCE INVENTORY — does the inventory cover the reception data classes that exist for this platform and specimen (displayed counts, comment access, velocity possibility — a second capture — follower/subscriber base at capture), each traced to a captured source read this cycle? (3) SEPARATION AT THE SOURCE — the founding law applied to working memory itself: craft enters Observe ONLY as citation. Any sentence in the Observe record that re-judges, paraphrases as finding, or prices the work's craft is contamination at the gate, before it can reach a Plan. (4) ABSENCE COMPLETENESS — every data class that does NOT exist for this specimen (e.g. public retention data for Instagram reels) is named as an absence in the record's main body; a silently missing class is a defect, not a neutral. (5) FRESHNESS — captures carry date + source; a baseline relied on for deltas is identified with its capture stamp. (6) ROUTING — owner-only data needs (e.g. private Studio analytics the fleet has not been granted) are identified and routed to HQ, or explicitly printed as none; the job never plans around data it cannot lawfully get. Score 0–1 per dimension and classify defects. You never judge whether the reception looks promising — only whether the context is earned.

## 3. Context contract (masked view)
- FED: the RUN.md Observe section · the packet's identity + craft-verdict pointer lines and its §8 slot state (pointers and state, not craft prose) · the capture inventory (post.json counts + capture stamps, or the own-work data-source state line) · verdict-history.md · the codex-observe receipt if one fired this cycle.
- NEVER FED: the packet's craft sections (goods/bads, technique catalogue prose) — separation runs at this gate too · the analyst's expectations about what the reception will show · prior cycles' reception lessons.
- Ceiling: ≤32k tokens; comment material never enters at Observe (counts and access state only).

## 4. Output space
- Verdict classes: **ADVANCE · ADVANCE-WITH-GAPS · RETURN-TO-OBSERVE**.
- Dimensions (0–1): packet-state certainty · source coverage · absence completeness · separation-at-source · freshness.
- Rejection taxonomy (one primary, on RETURN-TO-OBSERVE): PACKET-UNREAD (plan would price reception against a craft record never opened) · CRAFT-REJUDGED-IN-OBSERVE (working memory already merged the two lessons) · SILENT-ABSENCE (a data class missing without being named) · STALE-CAPTURE (counts or baseline without current date + source) · UNROUTED-OWNER-DATA (plan would need data only the owner can grant, never routed) · SIGNAL-WITHOUT-SOURCE (inventory claims a data class no capture evidences).
- Accepted profiles travel: the profile + named gaps are cited in RUN.md's Plan section head; ADVANCE-WITH-GAPS gaps bind the Plan (a gapped class may not appear in the signal set).

## 5. Floors and disposition
- separation-at-source < 1.0 → RETURN-TO-OBSERVE (the founding law has no partial credit, at any phase).
- packet-state certainty < 0.5 or source coverage < 0.5 → RETURN-TO-OBSERVE.
- Any dimension < 0.4 → RETURN-TO-OBSERVE.
- Disposition: the verdict is advisory — reviewed by the runner, applied or set aside with the miss recorded in Condense. The verdict + disposition land in the cycle RUN + verdict-history.md either way.

## Call command
Defined prompt + context assembly, executed via the lane firing form (amended 2026-11-14, Cycle-003 Condense, on codex-condense finding 2 — the earlier "sealed decision-model route" phrasing named no bound executable and is retired): a fresh judge agent is spawned with this file's §2 as its instruction and the §3 FED fields assembled from RUN.md and the packet directory (≤32k); the returned verdict + profile are recorded verbatim in the cycle RUN (raw return filed in the run directory) and in verdict-history.md. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (First firing: Cycle-003, specimen P2, 2026-11-14 — ADVANCE-WITH-GAPS, exemplars 4/4.)

## 6. Firing record and improvement
- Exemplars: (a) Cycle-001's founding inventory (dated counts in post.json — 6,680 likes · 226 comments · 1,039 followers, captured 2026-11-13 — retention ABSENT named, packet in-flight) → must ADVANCE-WITH-GAPS, gap = packet state. (b) A constructed Observe with packet cited by pointer, full inventory, absences named, fresh captures → must ADVANCE. (c) A constructed Observe restating the packet's goods/bads in its own words as "context" → must RETURN-TO-OBSERVE, CRAFT-REJUDGED-IN-OBSERVE. (d) A constructed Observe for an Instagram reel that never mentions retention data at all → must RETURN-TO-OBSERVE, SILENT-ABSENCE.
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — all four must classify correctly when fired, and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
Amendments name forcing evidence + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it.
