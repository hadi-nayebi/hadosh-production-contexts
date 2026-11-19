# T17 attempt 4 — payload manifest (A-C010-1c) · practice Cycle 020 Wave 19

Scored source: `recreation.html` sha256 `0d04b443a030185001cbfcba280afbd6547de2ef68fd1a8f08ac3408537fe803` — identical in all five payloads; frozen at the stage-6 checkpoint (same sha) before payload assembly; any later source change requires a fresh preserved wave.

## Allowlist (per payload, exact — the rescore contract's five components)

1. **Lens instructions** (`instr-<lens>.txt`): standing header — consumer + decision priced (bar only: average ≥ 85 AND no lens < 70; no prior scores anywhere) · working record · BODY-WRITE requirement · explicit scale line "Scores are integers from 0 to 100" · closing `SCORE: <integer>` — plus the lens line.
2. **Neutral technique facts** (`neutral-technique-facts.md`): packet mechanics + figure window anchors + **specimen basis** (packet P1 segment 1:40–2:02, local evidence cut 1:39.5–2:02.5) + **verification limitations** (PIXEL-UNVERIFIED; Chromium startup failure quoted; all rendered sub-items outstanding; evidence class stated).
3. **Neutral recreation source**: the final `recreation.html` verbatim (sha above), comments scanned pre-assembly (5 neutral construction comments; no neutralization required).
4. **Neutral own-check packet** (`own-check-packet.md`): 140 check names + PASS results from the final-source suite, no cure interpretation, no attempt comparisons.
5. **Score-blind build record** (`score-blind-build-record.md`): sanitized construction facts only — no cure codes, no cure-to-lens mapping, no prior scores, no target scores, no verdicts.

Assembled payloads preserved create-once: `payload-<lens>.txt` (one stream per lens: instruction + facts + score-blind build record + own-check packet + full source).

## Exclusions (printed; none appears in any payload)

The full cure-labelled build record (`build-record-attempt4.md`) **in full** · RUN.md · scores.md · prior lens returns · prior/target scores · cure-to-lens commentary · this manifest.

## Anchor scan (over the COMPLETE assembled packet, all five components together)

Criteria: prior averages (82.6 / 81.8 / 67.6), attempt comparisons (attempt 1/2/3 mentions), amendment labels (A-C…), cure labels, "plateau", "WHY scaffold", delta/target/prior-score wording — applied to instruction text, facts, source including its comments, score-blind build record, own-check packet, and filenames.
Result: **0 hits in all five assembled payloads** (motion · timing · purity · reusability · readability).

## Session read scope (A-C019-2)

Each lens fires via the FED route only: `cat payload-<lens>.txt | ~/workspace/codex-local/node_modules/.bin/codex exec - -s read-only -o codex/attempt-4/lens-<lens>.md`, run from cwd `~/workspace/t17-a4-scratch` (OUTSIDE the artifact directory), no `--add-dir`. The session's only fed material is its payload; its sandbox is read-only. If any return references material outside its packet, that lens's score prints as session-contaminated beside the filing in scores.md.
