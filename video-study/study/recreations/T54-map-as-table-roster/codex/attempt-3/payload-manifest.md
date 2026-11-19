# Payload manifest — T54 attempt 3 rescore wave (W3, filed BEFORE firing)
Final source bound to every payload: recreation.html sha256 `1ee27ef80cd62382bfdb561e0446034e416e2191e3dd1664fa0bdb9506e629c2`.

## Allowlist (exact, per lens payload `instr-<lens>.txt`)
1. The lens instruction, modeled on `codex/attempt-2/instr-<lens>.txt`: standing header (consumer + decision priced · working record · body-write line, incl. "Scores are integers from 0 to 100") + that lens's instruction + the neutral technique facts, taken verbatim from the attempt-2 instruction's head (everything before its build-record marker).
2. The neutral facts packet: `codex/attempt-3/neutral-packet.md` (generated separately from the internal build record; construction facts and own-check results only, no cure commentary).
3. The final recreation source, verbatim, under a source marker.
Nothing else is in any payload.

## Exclusions (never fed)
scores.md · plan-T54.md · RUN.md · the internal build record (build-record-attempt3.md) · fit-table-attempt3.md · config-census-attempt3.md · all prior lens returns · any prior score, target, delta or verdict · this manifest.

## Assembled-payload anchor scan (A-C005-2 + A-C008-4, run on each assembled payload before firing)
- Numeric anchors: search for prior-attempt values and bar/target values (76.0 · 72.2 · 85 as a target · per-lens priors 80/66/100/70/64 in score contexts) — required: none present as scores/targets. (Source-internal numbers — timings, geometry, the derived duration — are the build's own facts and are expected.)
- Qualitative anchors: search for cure codes (C-X/C-T/C-R/C-Ru/C-M patterns), "deduction", "target", "prior", "scores.md", "plan-T54", "RUN.md", "build-record", "attempt 2", filenames/labels/comments carrying cure-to-lens commentary — required: none. The recreation source's own comments were scanned first (A-C008-4): they carry no cure codes or commentary (only CONFIG/logic/solver descriptions); no neutralization was needed. The word "score" occurs in the source only as the candidate-search variable name (bestScore/obsScore), an algorithm internal present in the same form in earlier builds.
- Scan result (run on all five assembled payloads after assembly, before any firing): numeric anchors — NONE (no 76.0 / 72.2 / target values); cure codes — NONE; excluded filenames (scores.md / plan-T54 / RUN.md / build-record) — NONE; "attempt 2" / "prior average" / "target score" — NONE. One lexical hit, cleared: the word "deductions" occurs once per payload inside the lens instruction's own standing sentence "Price deductions from 100 with the defect and its cure for each" — the instrument's wording, identical in every earlier payload, carrying no prior-attempt information. Payloads are CLEAR to fire.
