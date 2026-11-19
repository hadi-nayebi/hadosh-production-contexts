# T11 attempt 4 — payload manifest (W3, filed BEFORE firing)

Scored source: recreation.html sha256 fcdc5bb1b5ff5da2287f91e295cfbbd70e20aeb7ffe54c64eb82d0770be9d1c1. All five payloads embed this identical source.

## Allowlist (per lens, exactly three components)
1. Lens instruction — modeled on codex/attempt-3/instr-<lens>.txt (same consumer/decision header form, same neutral catalogue mechanics, same lens paragraph; attempt number updated to 4; ends demanding `SCORE: <int>` + `BODY-WRITE: ...`).
2. Score-blind neutral build-record extract — `neutral-extract.md` in this directory. Permitted-fields schema: construction facts stated neutrally + check names with pass/fail results only. No scores, no targets, no history, no cure labels, no prior-defect language.
3. The final recreation.html source, verbatim.

Assembled payloads (create-once): payload-motion.txt (37918 chars) · payload-timing.txt (37913) · payload-purity.txt (37823) · payload-reusability.txt (37957) · payload-readability.txt (37942).

## Exclusions (never in any payload)
plan-T11.md · RUN.md · scores.md (incl. the WHY scaffold) · all prior Codex returns · build-record-attempt4.md and every cure-bearing record · prior scores/targets in any form.

## Assembled-payload anchor scan (numeric + qualitative, incl. source comments per A-C008-4)
Scanned all five assembled payloads for: prior average/per-lens scores, attempt-3 references, cure codes (C1–C5), amendment labels (A-C0…), WHY/plateau language, target vectors, the pass bar. Result: NO score anchors, NO cure/amendment labels, NO history. Residual string hits, each inspected and dispositioned benign: "85" occurs only inside timing values (2850/7850 ms) and hex color fragments; "delta"/"targets" occur only in the inherited instruction header's procedural sentence and in the extract's schema disclaimer ("No scores, no targets, no history"). Source comments scanned separately before assembly: the source carries three comments (CONFIG header, PURE markers, the override swap-example) — all neutral, no cure codes or commentary; no neutralization was needed.
