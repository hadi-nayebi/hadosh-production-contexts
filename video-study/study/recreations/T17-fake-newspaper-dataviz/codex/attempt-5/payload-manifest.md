# T17 attempt 5 — payload manifest (A-C010-1c) · practice Cycle 024 Wave 23

Scored source: `recreation.html` sha256 `3d5d108a9f3bb4d0e89c076673c7936a88c17f4e0c5092e4d9fac900fc7a1a47` — identical in all five payloads; frozen at the stage-6 checkpoint (same sha) before payload assembly; any later source change requires a fresh preserved wave.

## Allowlist (per payload, exact — the rescore contract's five components)

1. **Lens instructions** (`instr-<lens>.txt`): standing header — consumer + decision priced (bar only: average ≥ 85 AND no lens < 70; no prior scores anywhere) · working record · BODY-WRITE requirement · explicit scale line "Scores are integers from 0 to 100" · closing `SCORE: <integer>` — plus the lens line.
2. **Neutral technique facts** (`neutral-technique-facts.md`): packet mechanics + figure window anchors + specimen basis (packet P1 segment 1:40–2:02, local evidence cut 1:39.5–2:02.5) + verification limitations (PIXEL-UNVERIFIED; Chromium startup failure quoted; all rendered sub-items outstanding; evidence class stated).
3. **Neutral recreation source**: the final `recreation.html` verbatim (sha above), comments scanned pre-assembly (5 neutral construction comments; no neutralization required).
4. **Neutral own-check packet** (`own-check-packet.md`): 78 check names + PASS results from the final-source suite, no cure interpretation, no attempt comparisons; one check name carried an amendment label in the seat's stage record and was neutralized in this packet only.
5. **Score-blind build record** (`score-blind-build-record.md`): sanitized construction facts only — no cure codes, no cure-to-lens mapping, no prior scores, no target scores, no verdicts.

Assembled payloads preserved create-once: `payload-<lens>.txt` (one stream per lens: instruction + facts + score-blind build record + own-check packet + full source). Per the run tasking's naming, each firing's full payload is ALSO the `instr-<lens>.txt` stream's assembled form on disk as `payload-<lens>.txt`; both files are preserved create-once before any re-fire (A-C003-1).

## Exclusions (printed; none appears in any payload)

The full cure-labelled build record (`build-record-attempt5.md`) **in full** · RUN.md · scores.md · prior lens returns · prior/target scores · cure-to-lens commentary · this manifest.

## Anchor scan (over the COMPLETE assembled packet, all five components together)

Criteria: prior averages (83.8 / 82.6 / 81.8 / 67.6), attempt comparisons (attempt 1/2/3/4 mentions), amendment labels (A-C…), cure labels, "plateau", "WHY scaffold", delta/target/prior-score wording — applied to instruction text, facts, source including its comments, score-blind build record, own-check packet, and filenames.
Result: **0 hits in all five assembled payloads** (motion · timing · purity · reusability · readability).

## Session read scope (A-C019-2)

Each lens fires in a dedicated per-lens scratch cwd containing ONLY content copies of the allowlisted packet files (instruction, facts, score-blind build record, own-check packet, recreation source), via the local Codex binary with `-s read-only --skip-git-repo-check`, ONE stream (assembled payload) per lens. Returns are `-o`-written to a /tmp path first, then content-copied to `lens-<lens>.md` with sha256 verified identical. The session's only fed material is its payload. If any return references material outside its packet, that lens's score prints as session-contaminated beside the filing in scores.md.
