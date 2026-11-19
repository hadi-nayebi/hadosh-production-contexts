# Payload manifest — T23 attempt 14

Final source sha256: 39f63f532a3ac42125642d4be86b09fed89bf3035dff4b5e65026ddb8c7ddf77 (all five lenses bind to this identical source; checkpoint-attempt14-stage5.html, recreation-work-attempt14.html and the published recreation.html carry the same sha).

## Allowlist (per lens, the ONLY content in the payload and the scratch cwd)

1. `instr-<lens>.txt` — lens instruction: standing header (consumer + decision priced · working record · BODY-WRITE line), the bar only (average ≥85 AND no lens <70), neutral technique facts, the lens charge, the scale line "Scores are integers from 0 to 100", closing SCORE line. No prior average, no prior per-lens score, no target vector anywhere.
2. `recreation.html` — the NEW final source, byte-identical content copy.
3. `build-record-attempt14-blind.md` — neutral packet: construction facts + check names/inputs/results only. No cure interpretation, no prior scores, no deductions, no targets, no plateau labels.

The assembled payload per lens is `payload-<lens>.txt` under `codex/attempt-14/` (instruction + the two files' full contents, in that order, under `===== FILE: … =====` seams), preserved create-once BEFORE firing. Payload sha256 values are recorded in the build record's firing record beside each session's read scope.

## Exclusions (never in any payload or scratch cwd)

scores.md · all prior lens returns · RUN.md · plan files · plan-review returns · the full build record · target scores / delta arithmetic · cure-to-lens commentary · stage own-check files (their results enter only as the blind record's neutral check lines).

## Anchor scan (incl. source comments, filenames, labels)

Assembled payloads scanned before firing for: prior averages and per-lens scores (71.6 / 77 / 80 / 71 / 64 / 66 as score strings in anchor contexts), prior source sha (9cb3c51e…), "plateau", "deduction", cure codes (C-14-*), attempt-13 references, delta arithmetic. Source comments were scanned separately before payload generation: 153 comments, 0 cure-contamination hits (no neutralization edit was needed; the frozen sha is unchanged). Scan results file with the firing record in the build record. Known technical occurrences, reviewed and printed: the word "prior" appears in the construction vocabulary ("prior working value/entry" — the reset contract's own terms, no scoring content); "target" appears as the technique's dive-target vocabulary.

## Score-blindness as a firing property (plan-review finding 5)

Each lens session runs in its own scratch cwd (`~/workspace/.scratch/c029/T23-<lens>/`) containing ONLY content copies of the three allowlist files, byte-identical to the fed payload's components. The firing record in the build record names, per lens: the assembled payload's sha256, the scratch cwd's file inventory, the session's effective read scope as reported by the session itself (its reads are confined to the scratch cwd by the read-only sandbox + the instruction's read-only-those-files charge), and the return's sha256. Any return found contaminated is preserved labelled NON-GOVERNING and re-fired clean; the delta is computed by the seat from the filed governing returns, never inside a payload.

## Firing form

Per lens: one fed stream, stdin from the payload file only (no second stdin redirect): `cat payload-<lens>.txt | ~/workspace/codex-local/node_modules/.bin/codex exec - --skip-git-repo-check -s read-only -o ~/workspace/.scratch/c029/return-<lens>.txt`, run with the per-lens scratch cwd as the working directory. Each return's -o original is written under `~/workspace/.scratch/c029/` (NOT /tmp) and content-copied to `codex/attempt-14/lens-<lens>.md` in the SAME invocation, sha256-verified identical. Every firing (incl. interim, failed, and empty returns) is preserved create-once under `codex/attempt-14/` before any subsequent source change or re-fire; an empty return is labelled NON-GOVERNING and re-fired once on the identical preserved payload.
