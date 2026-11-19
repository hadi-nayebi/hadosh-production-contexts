# T17 attempt 6 — payload manifest (A-C010-1c) · practice Cycle 026 Wave 25

Filed BEFORE any firing. Scored source: `recreation.html` sha256 `96341c01696d67b0be4578ce81332258287cf7101b5ebe09acabc9fc916c9780` — identical in all five payloads; frozen after comment neutralization (verified no-op: 5 neutral construction comments, nothing to strip) + full suite re-run. Any later source change requires a fresh preserved wave (A-C003-1).

## Allowlist (per payload, exact — five components)

1. **Lens instructions** (`instr-<lens>.txt`): standing header — consumer + decision priced (BAR only: average ≥85 AND no lens <70; no prior scores anywhere) · working record · BODY-WRITE requirement · explicit scale line "Scores are integers from 0 to 100" · closing `SCORE: <integer>` — plus the lens line.
2. **Neutral technique facts** (`neutral-technique-facts.md`): packet mechanics + figure window anchors + specimen basis + verification limitations (PIXEL-UNVERIFIED; Chromium startup failure quoted; evidence class stated). Carried verbatim from the prior attempt's neutral facts (no scores, no cure language).
3. **Neutral recreation source**: the final `recreation.html` verbatim (sha above), comments scanned pre-assembly.
4. **Neutral own-check packet** (`own-check-packet.md`): check descriptions + measured results from the final-source suite, no cure codes, no attempt comparisons.
5. **Score-blind build record** (`score-blind-build-record.md`): construction facts only — no cure codes, no cure-to-lens mapping, no prior scores, no target scores, no verdicts.

Assembled payloads preserved create-once: `payload-<lens>.txt` (one stream per lens: instruction + facts + score-blind build record + own-check packet + full source).

## Exclusions (printed; none appears in any payload)

The full cure-labelled build record (`build-record-attempt6.md`) **in full** · RUN.md · plan-T17.md · scores.md · prior lens returns · prior/target scores · cure-to-lens commentary · this manifest.

## Anchor scan (over the COMPLETE assembled payloads, all five components together, INCLUDING source comments per A-C008-4)

Terms scanned: `84.4` · `422` · `attempt 5` / `attempt-5` / `Attempt 5` · `C1`–`C7` · `cure`/`Cure` · `delta` · `prior average` · `A-C0`. **Result: 0 hits in every payload** (motion · timing · purity · reusability · readability). The only numbers naming performance in any payload are the BAR (85 / 70) in the lens instructions, as the contract requires.

## Firing discipline

Per-lens scratch cwd `~/workspace/.scratch/c026-T17-<lens>/` containing ONLY a byte-identical copy of that lens's payload; single stdin stream (`cat payload | codex exec - --skip-git-repo-check -s read-only`, cwd=scratch, local Codex binary); capture to scratch, then CONTENT-copy create-once to `codex/attempt-6/lens-<lens>.md` with sha256 verified identical; each firing's record prints the session's read scope (A-C019-2); failed/interim firings preserved run-tagged.
