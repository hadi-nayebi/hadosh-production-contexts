# Guards — reception-analysis

## The judgment layer's home (owner's order, 2026-11-14 — 100% form)
Form: **In-job form.** The job's separation law (engagement ≠ craft) is enforced by the mechanical guards + `jev-reception.md` here — not by memory.

## The commands (mechanical guards — callable, demonstrated)
1. Counts re-read — every number in a reception.md must trace to a captured source file (post.json) read in the same cycle; unsourced numbers fail.
   Demonstrated: 2026-11-13, Cycle-001 (baseline from post.json: 6,680 likes · 226 comments · 1,039 followers — counts stated as the capture-time snapshot they are).
2. Craft-section quarantine check — `grep` a finished reception.md for edits or verdicts touching a packet's craft sections; any hit = the cycle's core deviation.
   Demonstrated: 2026-11-13 Cycle-001 (no craft claims filed; the reception PENDING state printed instead — the guard's lawful negative).
3. Sampling-rule precedence check — the cycle's RUN must record its sampling rule BEFORE the first comment-derived claim appears in the record's own order. STRENGTHENED (2026-11-17, Cycle-009 codex-condense finding 2): the check also verifies the freeze-before-reading seal — the run record must show a metadata-only membership freeze (selected identifiers + sample N, with the declared ordering fallbacks for mixed timestamps and missing IDs) recorded BEFORE any comment text was opened; a record whose rule merely precedes its claims in written order, without the sealed freeze, does not pass this guard.
   Demonstrated: 2026-11-14, Cycle-003 (specimen P2) — the attempt-all rule stands in RUN §2, written before E2's extraction; Verify V3 re-added theme counts to the returned N (11). Prior filing precedent: Cycle-002 (P1). Seal form demonstrated: 2026-11-17, Cycle-009 (specimen P12) — metadata-only freeze, N=131 logged in RUN §3 E5 before coding opened any text.

## Jev call definitions
- `jev-reception.md` — judges a finished reception.md before it files into the packet directory. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (Designed 2026-11-14; the manual separation panel + mechanical guards run alongside.)
- `jev-observe-exit.md` — the Observe→Plan gate (INSTRUCTION §1 gate out): packet state read + inventory + absences + separation at the source. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (Built 2026-11-14, phase-guard augmentation pass 1; call command defined in the file; first firing opportunity = the first full cycle, specimen P1.)
- `jev-plan-exit.md` — the Plan→Execute gate (INSTRUCTION §2 gate out): signal traceability, sampling-rule precedence, both checklists, failure points headed by craft-leak-by-design. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (Built 2026-11-14, same pass.)

## Codex review types (hosted — phase-guard augmentation, 2026-11-14)
- `codex-observe.md` — Observe context attack (false absences · missed data classes · packet-state misreads). Call point: INSTRUCTION §1 item 5. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.**
- `codex-plan-review.md` — Plan attack (craft-price leak · sampling gaming · unpriceable arithmetic). Call point: INSTRUCTION §2 gate out, consumed beside jev-plan-exit. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.**
- `codex-condense.md` — Condense faithfulness review (lesson→amendment drift · escaped layers · separation erosion). Call point: INSTRUCTION §9. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.**
- Superseded disposition: the founding "ABSENT BY DESIGN — no repeated Codex review type" print (2026-11-14, founding of this layer) stood for the deliverable-review class only; the three phase-review types above are now hosted on the owner's phase-guard order. Ad-hoc reviews outside these three still fire under HQ's queue rules.

## Judge facts
- Judges: jev-reception (deliverable; floors per its §5) · jev-observe-exit (Observe→Plan) · jev-plan-exit (Plan→Execute) · firing: each fires at its step on every cycle; a cycle in which one did not fire prints INCOMPLETE.
- Verdict history: ../verdict-history.md

## Presence (2026-11-14, founding of this layer; updated same date, augmentation pass 1)
JUDGMENT LAYER: **INCOMPLETE** — mechanical guards hosted (2/3 demonstrated; sampling-rule check demonstrates at the first full cycle); jev-reception designed, DEFINED; phase-transition Jevs + three Codex review instructions hosted, DEFINED — every call fires at its step on every cycle, and the layer completes on firing records with receipts, not on any state.

## Ruling update (2026-11-14 ~20:55 EST — owner's judgment-call ruling)
ARMING = FIRING abolishes the arming states printed in this index: this job's calls are DEFINED and fire unconditionally in its next live cycle (raw responses filed in the run record); verdicts are advisory (applied, or set aside with the miss + the call-file amendment recorded in Condense). The founding Presence print stands as the 2026-11-14 founding record; from the next cycle, the presence evaluation prices FIRING (fired / not fired — not fired = INCOMPLETE), not arming.
