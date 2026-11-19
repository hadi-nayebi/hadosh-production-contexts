# T128 attempt 2 — payload manifest (filed after both build-record versions were finalized, before any lens firing)

## Allowlist (exact — each payload contains ONLY these, in this order)
1. Standing header (consumer + decision priced · working record · BODY-WRITE line · scale line "Scores are integers from 0 to 100" · BAR: average >= 85 AND no lens < 70 · attempt number 2). The header carries the BAR and the attempt number only — never a prior score or target.
2. The lens instruction (one of motion / timing / purity / reusability / readability).
3. Binding line: recreation.html SHA-256 `d6b9e473b27344c288ece36c95edf46fecea961f4be44cb61d35a0542a75915f` (identical in all five payloads).
4. Neutral technique facts: catalogue mechanics + provenance + the frame-by-frame segment observations + the two earlier descriptions rendered ONLY as factual observations and resolutions (the contradictory earlier description's colour/punctuation/reveal-mode/onset claims and the two hold quantities 4500 ms vs the segment-supported 3400 ms, with which one the segment evidence supports). No plan prose is copied; no score, score-bearing phrase, or cure/amendment label appears anywhere in the payloads.
5. The FINAL score-blind build record (build-record-blind.md as finalized at Execute step 10, before payload assembly).
6. The full final recreation.html source.

## Exclusions (named)
scores.md · RUN.md · the plan · prior Codex returns (attempt 1's lens returns, observe/plan-review returns) · prior scores and target scores · build-record.md (the full version) · fit-table.md / config-census.md as separate files (their results are summarized inside the score-blind build record) · checkpoints.

## Anchor scan (executed on the assembled payloads AND the recreation source's own comments, before firing)
- Payloads instr-motion / instr-timing / instr-purity / instr-reusability / instr-readability: scanned for prior-average and prior-lens-score strings, score-bearing phrases, cure/amendment labels, and excluded-file references — **clean, 0 hits each**.
- Recreation source comments: scanned on the same list — **clean** (comments carry technique description and the reveal convention only; no cure codes, no lens commentary).

## Session read scope (per session, recorded for the wave record)
- Route: FED — each lens fires as a FRESH session of the workspace-local Codex binary (`~/workspace/codex-local/node_modules/.bin/codex exec -`), receiving ONLY its assembled payload as a single stdin stream, run in a fresh empty working directory, with the return captured through the tool's `-o` output-file option to a create-once path. The payload text contains no filesystem path to scores.md, prior returns, RUN.md, or the plan, and the session is given no workspace read task.
- Permitted reads (every session): exactly the payload's allowlist contents enumerated above.
- Actual extra-payload reads (every session): **none** — the route affords no extra-payload input channel (stdin-only input, empty working directory); each return's text is inspected at filing for any sign of extra-payload knowledge, and any session showing such a sign is disposed as contaminated (void → quarantine → fresh re-fire) before its lens counts.
