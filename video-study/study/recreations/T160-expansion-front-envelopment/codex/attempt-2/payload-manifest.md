# payload-manifest — T160 attempt 2 re-scoring wave · Practice Cycle 025 Wave 24
Filed BEFORE the first firing. Final source: recreation.html sha256 e6676f689794bb4c2dd4661354efa9e774e0aab39e42aff78ab58a224ee766fd (identical in all five payloads — verified by extracting each payload's embedded source and hashing it: 5/5 match).

## Allowlist (the ONLY elements in any payload)
1. The standing lens header (consumer + decision priced · working record · body-write line) with the scale line "Scores are integers from 0 to 100" and the closing SCORE requirement.
2. The lens instruction (one lens per payload: motion / timing / purity / reusability / readability).
3. Neutral technique facts (mechanics + segment-anchored census observations + build parameters as built).
4. For the TIMING lens only: the neutral timing extract (filed at codex/attempt-2/timing-extract.md — specimen observations, time mapping, measurement limits, current-source observations; no prior-attempt column, no checkmarks/crosses, no verdicts, no dispute text).
5. The final recreation.html, byte-identical (sha above).
6. A build-record extract limited to construction description + own-check names/results with no evaluative interpretation (no mechanism-to-lens commentary).

## Exclusions (never in any payload)
RUN.md · plan-T160.md · the plan-review return · scores.md · any prior lens return · any prior score, average, delta, target or aim · the WHY scaffold · the seat build record file itself (build-record-attempt-2.md is NOT fed; only the neutral extract in element 6).

## Anchor scan (assembled payloads, before firing)
Method: case-insensitive token scan over each assembled payload file (full text, including filenames referenced in headers, source comments and labels) for: prior average/score strings (84.2 · 85.8), word-boundary prior lens scores (68 · 84 · 97 · 86), and qualitative anchors (prior attempt · attempt 1 · attempt-1 · cure · defect · stuck · plateau · delta · verdict · finding · credited · checkmark · ✓ · ✗ · FAIL · PASS · score-blind · target score).
Result: ZERO hits on every token in all five payloads. The recreation source's own comments (three neutral descriptive comments) were scanned as part of the embedded source. Scan outcome: CLEAN.

## Payloads (preserved create-once before firing)
| lens | payload file | sha256 | chars |
|---|---|---|---|
| motion | codex/attempt-2/instr-motion.txt | 4bfb9c57c601228e75db8f942b692b51539a566ee81661fb47efba3235c7c428 | 12730 |
| timing | codex/attempt-2/instr-timing.txt | 7932e9b992fe1298c2d63098696c3d73942ac2cb598fba77dd68b80bb6dfcfca | 16058 |
| purity | codex/attempt-2/instr-purity.txt | eb7e6b9a0d4550b9a1cc4aecbe0ffe15ac1fc80e21bab6f14d4b945cc228e93a | 12666 |
| reusability | codex/attempt-2/instr-reusability.txt | eb15203b6a79a5018adccecbd7caa7ac4dffae79dfb47778eb1dc411873fdf52 | 12744 |
| readability | codex/attempt-2/instr-readability.txt | 69bb078d18562be15e8312975c0a1de91e9a27bb71d899d99315df432b8c8e57 | 12866 |

## Firing form
Per lens: fresh scratch directory /tmp/t160a2-<lens>/ containing only a copy of that lens's payload file; local Codex binary, read-only sandbox, repository check skipped; payload fed on the input stream only; session output captured and persisted verbatim as a new file at codex/attempt-2/lens-<lens>.md, then verified for character count and the closing score line. Effective read scope per session: the fed payload (scratch directory contains nothing else).
