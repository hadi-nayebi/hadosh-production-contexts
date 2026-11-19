# T13 attempt 4 — payload manifest (filed before any lens firing)

Frozen source bound for all five payloads: `recreation.html` sha256 `05cfe65526fb4d80a5a72b4264fca99a183a17fe1f06482c3655178e46af4fc5` (frozen copy `recreation-attempt-4-frozen.html`, same sha, distinct inode).

## Allowlist (the only content in each payload)
1. The lens instruction (standing header: consumer practice §5 Verify · decision priced · working record · BODY-WRITE requirement · explicit line "Scores are integers from 0 to 100" · closing `SCORE: <integer>`), adapted from the filed attempt-3 instruction form for the same lens with attempt-4 return paths.
2. Neutral technique facts (packet P1 digest + the one evidence frame; identical wording across lenses).
3. The full frozen `recreation.html` source at the sha above.
4. The score-blind build record `build-record-attempt4.md` (neutral behaviour names only; no cure codes, no lens commentary, no scores).
5. The neutral own-check packet: own-check names + results from `t13-verify-attempt4.js` on the frozen source (79 PASS, 0 FAIL), `fit-table-attempt4.md`, and `config-census-attempt4.md` — check names and results only, no cure interpretation.

## Exclusions (never in any payload)
RUN.md · plan files · scores.md · cure-mapping files · prior lens returns · prior or target scores · delta figures · verdicts.

## Assembled-payload anchor scan (run on the final assembled payloads, incl. filenames and source comments)
- Numerical anchors: prior average and per-lens prior scores — **0 hits** (grep for the prior average, attempt-3 identifiers, and bar phrasing outside the standing header's generic "practice bar" wording, which is the filed instruction form's own text).
- Qualitative anchors: cure labels/codes — **0 hits** after one pre-firing regeneration: the first assembled packet carried an own-check name containing the word "cure" ("source comments carry no scoring or cure labels"); the scan caught it, the unfired payloads were discarded, the packet line was renamed to "scoring labels", and the payloads were regenerated and re-scanned clean before any firing. The seat-side check file itself is unchanged.
- Score-bearing paths/headings: return paths name only the attempt-4 filing location (the standing header's working-record line, as in the filed forms). Source comments were scanned before payload generation: no cure codes, amendment labels, or scoring language (suite check P3 on the frozen source).
- Legitimate timing/config numbers retained with context (the window total, beat allocations, modelled sizes): these are the build's own priced quantities, present in the allowed build record by design.

## Payload hashes (create-once, preserved before firing)
- instr-motion.txt — sha256 `fe7f8ac43127b833f6d75f567306b23ada148334dac14c0bd89c8b4decaa88cc`
- instr-timing.txt — sha256 `1258a3cde40a35d435af07c5411b7bc9176225dc50341af49917ed49bf317cd8`
- instr-purity.txt — sha256 `b485b14f0f90283a11d26091639bbece3d471813315e42f05c08235e7a07e3f9`
- instr-reusability.txt — sha256 `7b6bedfb9d71fdd80d1e42373ac92ec206a431aec5a2d005edd1303b1c28a802`
- instr-readability.txt — sha256 `58a26fe5df877d0cd59c2221325cdbeb1b6d9af3032d568c9ce2e28d54ef9607`

Firing mechanics: one stream per lens — payload file piped to the scoring tool with its output filed verbatim to `lens-<lens>.md` in this directory; all five bind the identical frozen sha above.
