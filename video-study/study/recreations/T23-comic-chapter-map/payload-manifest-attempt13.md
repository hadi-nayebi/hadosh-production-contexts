# Payload manifest — T23 attempt 13

Final source sha256: 9cb3c51e6be0ded3b999e10b521d74b9d1f0b69b8662b77ec580afab5ba2ebc4 (all five lenses bind to this identical source; checkpoint-attempt13-stage4.html and recreation-work-attempt13.html carry the same sha).

## Allowlist (per lens, the ONLY content in the payload and the scratch cwd)
1. `instr-<lens>.txt` — lens instruction: standing header (consumer + decision priced · working record · BODY-WRITE line), the bar only (average ≥85 AND no lens <70), neutral technique facts, the lens charge, the scale line "Scores are integers from 0 to 100", closing SCORE line. No prior average, no prior per-lens score, no target vector anywhere.
2. `recreation.html` — the NEW final source, byte-identical content copy.
3. `build-record-attempt13-blind.md` — neutral packet: construction facts + check names/inputs/results only. No cure interpretation, no prior scores, no deductions, no targets, no plateau labels.

The assembled payload per lens is `payload-<lens>.txt` under `codex/attempt-13/` (instruction + the two files' full contents, in that order), preserved create-once BEFORE firing.

## Exclusions (never in any payload or scratch cwd)
scores.md · all prior lens returns · RUN.md · plan files · plan-review returns · the full build record · target scores / delta arithmetic · cure-to-lens commentary · stage own-check files (their results enter only as the blind record's neutral check lines).

## Anchor scan (incl. source comments, filenames, labels)
Assembled payloads scanned before firing for: prior averages and per-lens scores (69.0 / 72 / 75 / 68 / 58), prior source sha, "plateau", "deduction", cure codes, attempt-12 references, delta arithmetic. Results filed with the firing record in the build record. The blind packet's "prior" hits are the registry term "prior working entry" / "prior entry" (the construction's own vocabulary, no scoring content) and its "target" hits are the technique's dive-target vocabulary — reviewed and technical. The recreation source's comments carry no cure codes or scoring references (scan count 0 at consolidation).

## Firing form
Per lens: dedicated scratch cwd `~/workspace/.scratch/c028-T23-<lens>/` containing ONLY content copies of the three allowlist files (byte-identical). One fed stream with stdin closed: `cat payload | ~/workspace/codex-local/node_modules/.bin/codex exec - --skip-git-repo-check -s read-only -o /tmp/<out>.txt`. Returns written via -o to /tmp first, then content-copied create-once to `codex/attempt-13/lens-<lens>.md` with sha256 verified identical to the -o original. Every firing's payload + return is preserved create-once before any subsequent source change (no source change follows the freeze). Each session's read scope is recorded in the build record's firing record.
