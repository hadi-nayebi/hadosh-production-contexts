# Judgments INDEX — Cycle-020 (2026-11-17, PES "Fresh Guacamole")

Guard-file SHA-256 at firing (prefixes; guards/codex-condense.md amended only at Condense close, after its own firing):
- guards/codex-observe.md, guards/jev-observe-exit.md, guards/jev-plan-exit.md, guards/codex-plan-review.md, guards/jev-packet.md, guards/codex-condense.md — shas computed at close from the filed guard texts; the two UNFILED first firings below are recorded as transport defects, never as verdicts.

| Call | Return file | Verdict | Runner disposition |
|---|---|---|---|
| jev-observe-exit (1st firing) | NONE — summary only | UNFILED | Re-fired; summary's divergent scores quoted in RUN §2 |
| jev-observe-exit (2nd firing) | jev-observe-exit-return.md (8,480 B) | ADVANCE-WITH-GAPS (primary UNPROBED-MEDIA, bounded) | APPLIED — probe boundary discharged at Observe-exit cure |
| codex-observe (1st firing) | NONE — claimed file absent | UNFILED | Re-fired via local Codex binary, fed form |
| codex-observe (2nd firing) | codex-observe-return.md (raw 26,322 B) | Findings P-A1–P-A5 | APPLIED — all five priced into Plan |
| jev-plan-exit | jev-plan-exit-return.md (28,346 B) | REVISE (primary SECTION-PLAN-INCOMPLETE, G1/G2) | APPLIED — cured by Plan amendments P-B1–P-B6 |
| codex-plan-review | codex-plan-review-return.md (raw 38,407 B) | 4 findings (1 frame-sharing · 2 REVISE-IN-PLAN · 1 EXECUTE-DEFECT) | APPLIED — cured by P-C1–P-C4, all executed in-cycle |
| jev-packet (11th firing) | jev-packet-return.md (9,162 B) | ADOPT-WITH-GAPS 0.95/0.95/0.85/1.0/0.95 (primary UNBOUND-EVIDENCE; G1/G2) | APPLIED — G1/G2 cured on the packet face |
| jev-packet (re-firing) | jev-packet-return-2.md (11,221 B) | ADOPT 1.0/0.95/0.95/1.0/0.95 (primary NONE; G1/G2 CLOSED) | APPLIED — receipt sha == adopted sha; Packet #13 ADOPTED CLEAN |
| codex-condense | codex-condense-return.md (raw 41,934 B) | Layer 1 AMEND (A13) · Layer 4 AMEND (firing-line) · Layers 2/3 priced | APPLIED — A13 + guards/codex-condense.md amendment landed at Condense |
| naive-consumer (§5 test, not a guard) | naive-consumer-return.md | PASS 5/5 | Recorded in RUN §5 |
