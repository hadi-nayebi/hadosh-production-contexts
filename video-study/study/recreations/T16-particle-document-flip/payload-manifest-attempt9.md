# Payload manifest — attempt 9 lens firings (filed BEFORE firing, A-C008-4 / rescore guard)

Final source bound for all five lenses: recreation.html sha256 c7bdd713ac188769d7c8e3810c09cf1b351952abed0e20192a3098f3cdbd78bb (== checkpoint-attempt9-stage6-final.html, content copy, distinct inode).

## Allowlist (the ONLY payload content per lens)
1. The lens instruction file for that lens (motion / timing / purity / reusability / readability), unmodified, from the recreation job's guards.
2. The score-blind build record: build-record-blind-attempt9.md (neutral technique facts only; includes the Stage-0 reconciliation with BOTH measurement bases printed — the draw-timestamp basis the construction binds to and the step-state basis — per A-C010-3, no silent basis switch).
3. The NEW recreation source: recreation.html at the sha above.
4. The explicit scale line in the firing instruction: "Scores are integers from 0 to 100."

## Exclusions (verified absent from every payload)
- scores.md and all prior attempt records, prior lens returns, prior scores or deltas.
- The plan, the plan review, the RUN.md, build-record-attempt9.md (the non-blind record), checkpoints, own-check files, fit/census files.
- Any cure identifiers, amendment labels, expected-score or recovery language.
- Source comments: scanned before firing — 203 comments, zero cure-code / attempt / lens / score anchors; the only "plateau" hits are the fold-plateau geometry term (a config key name), not commentary. No neutralization edits were needed.

## Firing form
Local binary ~/workspace/codex-local/node_modules/.bin/codex exec; payload as a single stdin stream (no second redirect); per-lens scratch cwd ~/workspace/.scratch/c029/T16-<lens>/ containing ONLY the packet copies (lens instruction, blind build record, recreation.html); --skip-git-repo-check; -o original to ~/workspace/.scratch/c029/lens-<lens>-attempt9-original.md, content-copied to codex/attempt-9/lens-<lens>.md in the same invocation and sha-verified. Session read scopes recorded in build-record-attempt9.md after firing (A-C019-2).
Addendum (before firing): the blind build record also carries the schedule census-anchor mapping table (window-start offset, each census state's segment-relative ms, prescribed state at that instant) as neutral technique facts, so the timing payload includes it.
