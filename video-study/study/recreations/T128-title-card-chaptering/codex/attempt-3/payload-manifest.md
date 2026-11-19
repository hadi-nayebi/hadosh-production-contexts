# T128 attempt 3 — payload manifest (filed before any lens firing)

## Frozen allowlist (ONE allowlist governs every lens packet — plan Verify 6 as amended)
Each payload contains ONLY, in order:
1. Standing header (consumer + decision priced · working record · BODY-WRITE line · scale line "Scores are integers from 0 to 100" · BAR: average >= 85 AND no lens < 70 · attempt number 3). The header carries the bar only — never a prior score or target.
2. The lens's own instruction (motion / timing / purity / reusability / readability).
3. Binding line: recreation.html SHA-256 `61771d823dfe0e624ac73773e4d379db1e6141c88823999ee851fe4df7c7d1b1` (identical in all five payloads).
4. Neutral specimen facts: catalogue mechanics + provenance + the frame-by-frame segment observations + the measured hold window [9740, 13140) (= 3400 ms) and the time origin (t=0 = segment start), stated as measurements only, with no prior-lens attribution.
5. Neutral own-check packet: check names and results only, plus measured fit rows, the label-contrast minimum, the exit-intersection measurement, the sweep and spot-check counts, and the swap result — no cure interpretation.
6. The full final recreation.html source (comments scanned, see below).

## Exclusions (named)
scores.md · RUN.md · the plan · the build record (a seat filing, never packet content) · prior Codex returns · prior scores and target scores · fit-table.md / config-census.md as separate files · checkpoints · any rejected alternative hold quantity or the dispute around it (no such figure appears in any packet).

## Anchor scan (executed on the assembled payloads AND the recreation source's own comments, before firing)
- Payloads instr-motion / instr-timing / instr-purity / instr-reusability / instr-readability: scanned for prior-average and prior-lens-score strings, rejected-quantity figures, score-bearing phrases, cure/amendment labels, and excluded-file references — **clean, 0 hits each** (scan executed on the assembled bytes, filenames included).
- Recreation source comments: scanned on the same list — **clean** (comments carry technique description and the reveal convention only).

## Session read scope (per session, recorded for the wave record)
- Route: FED — each lens fires as a fresh session of the workspace-local Codex binary (`~/workspace/codex-local/node_modules/.bin/codex exec`), receiving ONLY its assembled payload as a single stdin stream (file redirect; no second input stream), run in a dedicated per-lens scratch cwd containing ONLY content copies of the allowlist files, with `--skip-git-repo-check`; the return is captured through `-o` to a workspace-scratch original, then content-copied to its create-once destination under `codex/attempt-3/` with sha256 verified identical.
- Permitted reads (every session): exactly the payload's allowlist contents enumerated above.
- Contamination rule: a return whose session read beyond its frozen packet, or in which anchor contamination is found, is EXCLUDED from the five-score arithmetic pending a clean preserved re-fire on fresh create-once paths.
