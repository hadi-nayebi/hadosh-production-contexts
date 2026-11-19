# Payload manifest — T23 attempt 11 (A-C005-2 / A-C008-4 / A-C021-1)

Final source sha256: 0f3046093d084d849492172ef4284e54ab3a2bb74ed505cbbc2f79f34136f436 (all five lenses bind to this identical source; stage-8 checkpoint sha matches it).

## Allowlist (per lens, the ONLY content in the payload and the scratch cwd)
1. `instr-<lens>.txt` — lens instruction in the guards/codex-rescore-wave.md form: standing header (consumer + decision priced · working record · BODY-WRITE line), the BAR only (average ≥ 85 AND no lens < 70), neutral technique facts, the lens charge. Filed create-once under `codex/attempt-11/`.
2. `recreation.html` — the NEW final source, byte-identical content copy.
3. `build-record-attempt11-blind.md` — score-blind build record (derived from build-record-attempt11.md; prior scores, averages, targets, and the recovery-ledger arithmetic removed; derivation replacements listed in the build script record).

## Exclusions (never in any payload or scratch cwd)
scores.md · all prior lens returns (codex/attempt-10/ and earlier) · RUN.md · plan-T23.md · plan-review returns · target scores / delta arithmetic · cure-to-lens commentary beyond the blind build record's cure outcomes.

## Anchor scan (A-C008-4, incl. source comments)
New recreation.html scanned for: attempt / score / 65.2 / cure / C-10 / C-11 / plateau / WHY / lens — all counts 0 in the source (comments included). Blind build record scanned for prior-average and target figures — removed as listed above; residual check passed before firing. Instruction files scanned: no prior scores or averages (the word "prior" appears once in the reusability charge in its generic sense — "prior good state" — naming no score).

## Firing form
Per-lens scratch cwd `~/workspace/.scratch/c026-T23-<lens>/` containing ONLY the three allowlist content copies. Fire: `cat payload.txt | ~/workspace/codex-local/node_modules/.bin/codex exec - --skip-git-repo-check -s read-only` with cwd = the scratch dir (single stdin stream; no second stdin source). Capture stdout to a scratch file, then content-copy to `codex/attempt-11/lens-<lens>.md` with sha256 verified identical (create-once). Each session's read scope is printed in the firing record (build record addendum / scores filing).
