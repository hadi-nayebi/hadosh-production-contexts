# T109 attempt 2 — payload manifest (filed before any lens firing)

Bound source: recreation.html sha256 **29de77e18ca45eac75ecc70fd6ba331ffa42e88f61319f145629271f8a83a87d** (identical in all five payloads; recorded in each payload header).

Allowlist (the ONLY content in each payload, one stream per lens):
1. Lens instruction with standing header — consumer + decision priced · working record · BODY-WRITE line · the BAR only (average ≥ 85 AND no lens < 70) · "Scores are integers from 0 to 100" · closing `SCORE: <integer>` requirement.
2. Neutral technique facts (packet mechanics + census summary, no scores).
3. Score-blind build record (`build-record-attempt2-blind.md` — construction + own-check names/results, no cure interpretation, no prior scores).
4. Readability payload only: the measured-fit leg for this build, with prior-attempt references neutralized in the payload copy (the filed leg in the artifact dir is unchanged).
5. The full new recreation.html (source comments: none exist in this source).

Exclusions (never in any payload): RUN.md · scores.md · prior lens returns · prior scores or averages in any form · target/aim scores · the plan · cure-to-lens commentary.

Anchor scan (performed on the assembled payloads before firing, including filenames, labels, and source comments): searched for the prior average, the prior sum, per-lens prior-score pairings, prior-attempt references, and prior leg values. Two finds, both in the readability payload's fit-leg copy (a prior leg result sentence; a method-line reference to the prior leg) — neutralized in the payload copy only, payload regenerated/edited before firing, re-scan clean. Source comments: the source carries no comments, so no comment-borne anchor exists.

Session scope (fed route): each lens fires with the payload as its sole input stream (`cat payload | codex exec - -s read-only -o <return>`), working directory OUTSIDE the artifact directory, no --add-dir — the session's permitted read scope is the payload stream only; the artifact directory is not granted. Actual additional reads per lens are recorded in the build record from the firing route's construction (read-only sandbox + no directory grant; the sessions receive no file paths to open beyond the stream).
