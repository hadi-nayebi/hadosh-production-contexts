# Judgments INDEX — Cycle-022 (2026-11-18, ensan.besham Packet #14 resumption)

Guard-file SHA-256 at firing (prefixes):
- guards/jev-observe-exit.md: a141e3a6079f
- guards/codex-observe.md: 773edb96e519
- guards/jev-plan-exit.md: 964cae679810
- guards/codex-plan-review.md: 3b4d3588e886
- guards/jev-packet.md: 1f5c0edf5e3d
- guards/codex-condense.md: dd6b59c4245b

| Call | Return file | Verdict | Runner disposition |
|---|---|---|---|
| jev-observe-exit + codex-observe | (Cycle-021 run directory) | ADVANCE-WITH-GAPS / findings | CONSUMED — fired in Cycle-021, not re-fired per the resumption charge |
| jev-plan-exit | jev-plan-exit-return.md | REVISE (primary SECTION-PLAN-INCOMPLETE; G1/G2) | APPLIED — cured by Plan amendments P-B1–P-B8 |
| codex-plan-review | codex-plan-review-return.md (+ raw 70,336 B) | REVISE-IN-PLAN, 9 findings | APPLIED — cured by Plan amendments P-C1–P-C9 |
| jev-packet (12th firing) | jev-packet-return.md | ADOPT 0.95/0.95/0.90/1.0/0.95, primary NONE | APPLIED — Packet #14 ADOPTED CLEAN; receipt sha == adopted sha |
| naive-consumer (§5 test, not a guard) | naive-consumer-return.md | PASS 5/5 | Recorded in RUN §5 |
| codex-condense | codex-condense-return.md (+ raw) | Layer 1 AMEND · Layer 2 AMEND · Layers 3/4 NO-DEFECT (scoped; invocation defect D-t3) | APPLIED — INSTRUCTION Amendment A14 + guards.md cmd 10–11 landed |

Packet version at adoption: digest.md sha256 f18e03e6a058… (full f18e03e6a058dc74…) · digest.pdf eedbfd59b3bf2415…