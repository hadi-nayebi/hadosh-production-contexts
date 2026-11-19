# T23 attempt 9 — payload manifest (A-C010-1c, filed before any lens firing)
Final source sha256: 244a0c2c2f8a229bca3792d3e055cdafd1dee52a77503c2d09592f3c90f19572
ALLOWLIST per lens payload (assembled as instr-<lens>.txt, preserved create-once in codex/attempt-9/ before firing):
1. Lens instruction text (standing header: consumer + decision priced, working record, BODY-WRITE lines; bar stated as average >= 85 AND no lens < 70; scale line "Scores are integers from 0 to 100"; technique record; lens assignment). Adapted from the attempt-8 instruction for the same lens with attempt number + build-record name updated.
2. build-record-attempt9.md verbatim (neutral, score-blind).
3. recreation.html verbatim at the final sha above.
EXCLUSIONS: scores.md, RUN.md / plan files, prior lens returns, prior averages or any prior score, cure-to-lens commentary. The seat's tasking (attempt number, prior average) never enters a payload.
ANCHOR SCAN: assembled payload bytes scanned for prior-score anchors (81.6, 79.8, prior per-lens scores as score statements) and for cure/amendment codes in source comments — recreation source comments carry no cure codes or amendment labels (grep-verified). Filenames/labels scanned: instr-<lens>.txt, recreation.html, build-record-attempt9.md — neutral.
FIRING FORM: per-lens dedicated scratch cwd containing ONLY content copies of recreation.html + build-record-attempt9.md; local Codex with -s read-only --skip-git-repo-check; ONE stream per lens (cat instr-<lens>.txt | codex exec -); -o written to a /tmp path first, then content-copied to codex/attempt-9/lens-<lens>.md with sha256 verified identical.
