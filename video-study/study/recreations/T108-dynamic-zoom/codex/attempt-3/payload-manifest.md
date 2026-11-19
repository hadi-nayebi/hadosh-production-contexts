# T108 attempt 3 — payload manifest (A-C010-1c, filed BEFORE any lens firing)

Final source: recreation.html sha256 ba7a47c1017fcea1158e9290c2ff4523f4360910a230fad97660382c63808ccf (identical for all five lens runs).
Comparison check: recreation interface (__render/__pose/__config/__layout) unchanged in form → comparison.html NOT edited; ORIGINAL side untouched (sha re-verified at close).

## Allowlist (the ONLY payload content, per lens, in this exact concatenation order)
1. `instr-part-a.txt` — the lens instruction header (consumer + decision priced · working record · body-write line · wave bar · the scale line "Scores are integers from 0 to 100" · closing SCORE requirement). sha256 2f5e1626f019b612a3db19248aebbc2f15dc7161aa04c776405845d5f06759fb
2. `instr-lens-<lens>.txt` — the per-lens instruction paragraph (motion 8cc17a3e… · timing ec5b8f13… · purity ded14551… · reusability 8ccb2090… · readability 5f1627e0…)
3. `instr-part-b.txt` — neutral technique facts (mechanics + measured segment facts + the both-bases dispute text, written neutrally, no scores) + the neutral own-check packet (check names + results only, no cure interpretation). sha256 e895a97c70ebcd8f3ef2038fb91e760217089a571e1b3645931398e410d8c0de
4. `fit-table-attempt3.md` — the measured-fit leg output for this build. sha256 dcfa3655b62df16d29142f3741b103fb73d324d4af13d7b47bac0ceada2b0dd5
5. marker line "CONFIG-CENSUS LEG OUTPUT"
6. `config-census-attempt3.md` — the config-census leg output for this build. sha256 202e032543bde47e05b017cfe5d5ae50632804dbab1e61a48a0a6a3d95c7500e
7. marker line "RECREATION SOURCE"
8. `recreation.html` — the full final source (sha above).

Assembled-payload sha256 (machine-computed over the exact fed concatenation): motion 085a1ed5e1c725588e37f25c497611ce8a307109fb3ade8aa5ff3e337561b106 · timing e05954a2274327ecb654d598bbadd1979d2a35b40a5bd767d60d1e0f6d3f3c3a · purity ad827a4920d8caa5c68922a27d9114cfece6589167b198251ca63f73094182e8 · reusability 7393582c23c97dc53be1c57cdedd2b906377b5bafb6cdac4e3f10d4b31aa396d · readability 891187e087fc0c1f68b46291517071e113b41a5c82a949454b791f1b495b2da4

**Preservation form (printed deviation D-PAYLOAD-PARTS):** payloads are preserved BY PARTS in this directory (instr-part-a.txt · instr-lens-<lens>.txt · instr-part-b.txt, create-once, before firing) plus the leg files and the source in the artifact dir, with the assembled sha256 per lens above — the assembled bytes are exactly reproducible from the preserved parts in the stated order and verifiable against those hashes. A single assembled instr-<lens>.txt per lens was not written: assembling one requires either an exec-side file write after reads (refused EPERM under this environment's measured write fault) or re-typing ~37 KB per lens through the file tool; the parts + assembled hashes carry the same evidence.

## Exclusions (never in any payload)
scores.md · RUN.md · plan files · plan-review returns · build records · prior lens returns · prior averages or any prior score · target scores · cure-to-lens commentary · checkpoint files · finding numbers.

## Anchor scan (A-C005-2 + A-C008-4 + finding 7 — over the actual fed parts, including filenames, headers, leg prose, and source comments)
- Numerical anchors: the prior average strings (83.4 / 84.2) appear in NO part (grep count 0 across all ten part/leg/source files). No prior lens score is stated anywhere; the only score-bearing text is the instruction header's generic wave bar and scale line.
- Qualitative anchors: the strings "attempt 1", "attempt 2", "attempt 3", "previous attempt", "scaffold", "plateau", "cure", "verdict" appear in NO payload part (grep count 0 across all parts). The word "delta" appears exactly once, in part-a's standing consumer line ("delta computation and pass/floor decision") — it names the seat's downstream act, carries no value, and matches the standing header form used in every wave. Cure codes (K1–K11) appear in NO part.
- Source comments scanned as payload content: all comments in recreation.html are neutral construction descriptions (ease registry / trusted defaults / validation / measurement / derived geometry / construction / camera / entry event / settle) — no cure codes, no amendment labels, no score commentary. No neutralization needed.
- Filenames/labels scanned: packet sections carry neutral names (lens instruction, neutral technique facts, own-check packet, measured-fit leg output, config-census leg output, recreation source).

## Firing form + session scope (A-C019-2, finding 7)
Per lens: local Codex (workspace-local binary), read-only sandbox, --skip-git-repo-check, ONE stream (the assembled concatenation piped as the prompt, no second stream), stdout captured with NO -o (the -o write fails EPERM in this environment). cwd = a fresh per-lens scratch directory under /tmp containing no packet files — the session's effective read scope is the FED STREAM ONLY (nothing is read from disk; the scratch dirs are empty at firing, verified by listing). The captured stdout is checked for completeness (successful exit + a SCORE line + no truncation marker), persisted verbatim to `codex/attempt-3/lens-<lens>.md` via the file tool, read back, and its sha256 filed in the build record.
