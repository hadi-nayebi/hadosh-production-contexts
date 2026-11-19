# T06 attempt 3 — Payload manifest (filed BEFORE firing)

Source: recreation.html sha256 dbae736f1d496348e251f78ac558478dae49e33d2115ed387f9e58d6b7540080
Build record: build-record-attempt3.md sha256 032f44aef86572d5424ef1200bba30cb1e8ce51fa874c8c3dbf8cb8107786b20 (payloads carry the score-blind form: construction contract, parameter boundary, checkpoint ledger, own verification, deviations — outcome slots omitted)

## Allowlist (the ONLY payload contents, per lens)
- The lens instruction (consumer + decision priced, working record, BODY-WRITE requirement, lens definition, technique facts, built state, and the BAR line: average 85 / no lens under 70 — the bar only, no prior scores).
- The NEW recreation source (recreation.html, final attempt-3 source, verbatim).
- The score-blind build record (above).

## Exclusions
- RUN.md, plan-T06.md, scores.md, all prior lens returns, prior scores/averages/deltas, target movements per lens, cure-to-lens commentary beyond the build record's construction contract, this manifest.

## Anchor scan (assembled payloads, numerical + qualitative, incl. source comments — A-C008-4)
- Numerical anchors of prior performance: scanned for prior averages, sums, and per-lens scores — NONE present in any payload. Configuration values that coincide with numerals (e.g. a 66% wall height, Math.floor) are configuration, not performance anchors.
- Source comments: 19 block comments in the source, all neutral construction descriptions (configuration sections, schedule anchors measured from the record, layout/state/clock descriptions, the derived-value note); no cure codes, no amendment labels, no score or lens commentary — no neutralization was required and the source is unmodified since its final own-check run (sha above).
- Token scan note: the only FAIL token in any payload is inside the build record own-check count "18 PASS, 0 FAIL" (a check result on the new source, not a verdict on any attempt).
- Qualitative anchors: no comparative wording about prior attempts' quality; the build record states constructions, not outcomes.

## Payloads

- instr-motion.txt — 37502 bytes — sha256 cf156fdc4f014a7d33c4717ac7a3c8778ee329001245c1100a6ab9aab5fd6727
- instr-timing.txt — 37527 bytes — sha256 bd2ee58e33900b24206b6b91d318a83c823a12f1367f70b3ff7bc085dcc703f4
- instr-purity.txt — 37600 bytes — sha256 8a494461171c6bd9fe7835769e67cee486de384b2329d26a9327cc50ed56ef5c
- instr-reusability.txt — 37998 bytes — sha256 7eb5a73f1c01504b98d4682b3909647e6f2a67ded4f6dae9fb02fee3293e42a5
- instr-readability.txt — 37658 bytes — sha256 e40a5b373ffd203b2693b8bdfb77747a4fd2f4c3d4d0703c0fc2953f117c7e80

## Firing discipline
- Per-lens scratch cwd ~/workspace/.scratch/c026-T06-<lens>/ containing ONLY a copy of that lens's payload.
- Single stdin stream: cat payload | ~/workspace/codex-local/node_modules/.bin/codex exec - --skip-git-repo-check -s read-only (cwd = scratch).
- Returns captured in scratch, then CONTENT-copied to codex/attempt-3/lens-<lens>.md with sha256 verified identical, create-once. Failed/interim firings preserved run-tagged (A-C003-1).
- Session read scopes printed in the scores filing (A-C019-2); a return whose session read out-of-allowlist material is printed SESSION-CONTAMINATED and does not decide PASS (plan addendum, finding 4).
