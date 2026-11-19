# Payload manifest — T23 attempt 12 (A-C005-2 / A-C008-4 / A-C010-1c)

Final source sha256: 3e3c084d78a206c7eba36586769b40ee3d48f1b247bd2559221a8fa39561870b (all five lenses bind to this identical source; checkpoint-attempt12-stage8.html sha matches it).

## Allowlist (per lens, the ONLY content in the payload and the scratch cwd)
1. `instr-<lens>.txt` — lens instruction in the standing form of the attempt-11 instructions: standing header (consumer + decision priced · working record · BODY-WRITE line), neutral technique facts, the lens charge, the scale line "Scores are integers from 0 to 100", closing SCORE line. The bar only; no prior average anywhere. Filed create-once under `codex/attempt-12/`.
2. `recreation.html` — the NEW final source, byte-identical content.
3. `build-record-attempt12-blind.md` — neutral own-check packet: construction facts + check names/inputs/results only. No cure interpretation, no prior scores, no deductions, no targets, no plateau labels.

The assembled payload per lens is `payload-<lens>.txt` under `codex/attempt-12/` (instruction + the two files' full contents, in that order), preserved create-once BEFORE firing.

## Exclusions (never in any payload or scratch cwd)
scores.md · all prior lens returns · RUN.md · plan files · plan-review returns · the full build record · target scores / delta arithmetic · cure-to-lens commentary.

## Anchor scan (A-C008-4, incl. source comments, filenames, labels)
Assembled payloads scanned for: prior averages (70.0 / 65.2 / 77.0), "plateau", "deduction", cure codes, attempt-11 references, the prior source sha — all counts 0. The only SCORE token is the instruction's own output-format line. The blind packet's three "prior" hits are the registry term "prior working entry" (the construction's own vocabulary, no scoring content) and its "target" hits are the technique's dive-target vocabulary — reviewed and technical. The recreation source's comments carry no cure codes or scoring references (scan count 0). No neutralization was required.

## Firing form (F4)
Per lens: scratch cwd `~/workspace/.scratch/c027-T23-<lens>/` containing ONLY a content copy of that lens's assembled payload (byte-identical to the fed stream). One finite payload stream followed by EOF: `cat payload | ~/workspace/codex-local/node_modules/.bin/codex exec - --skip-git-repo-check -s read-only -o /tmp/<out>.txt` (no redirect discarding the pipe; no stdin field). Returns content-copied create-once to `codex/attempt-12/lens-<lens>.md` with sha256 verified identical to the -o original. Each session's read scope is recorded in the build record's firing record. A session that reads beyond its packet or returns a contaminated/NOT ASSESSED verdict is preserved labelled NON-GOVERNING and re-fired clean once.
