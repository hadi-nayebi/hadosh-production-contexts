# T17 attempt 8 — payload manifest (A-C010-1c) · practice Cycle 028 Wave 27

Filed BEFORE any firing. Scored source: `recreation.html` sha256 `63e602939c61ad7e2aaa24396486bb26f2d302e4cf08839a43f33738af33a74d` — identical in all five payloads; frozen at the stage-7 checkpoint (same sha) AFTER comment neutralization (5 block comments neutralized, full suite re-run green on the neutralized source) and the post-overwrite preservation census (188 files, 0 mismatches).

## Allowlist (per payload, exact — five components)

1. **Lens instructions** (`instr-<lens>.txt`): the standing instruction form — header (consumer + decision priced; BAR only: average ≥85 AND no lens <70), working record, BODY-WRITE requirement, scale line "Scores are integers from 0 to 100", closing `SCORE: <integer>`, plus the lens line.
2. **Neutral technique facts** (`neutral-technique-facts.md`): packet mechanics + figure window anchors + specimen basis + verification limitations (PIXEL-UNVERIFIED).
3. **Score-blind build record** (`score-blind-build-record.md`): neutral construction facts only — no scores, no outcome labels, no amendment labels.
4. **Neutral own-check packet** (`own-check-packet.md`): check names, inputs and results only — no baselines, no prior scores, no outcome labels.
5. **Neutral recreation source**: the frozen `recreation.html` verbatim (sha above), comments neutralized pre-assembly.

## Exclusions (named)

RUN.md · scores.md · all prior lens returns · prior and target scores (the header carries the BAR only) · cure/amendment commentary · build-record stage narrative · checkpoint files · evidence paths reaching prior returns.

## Anchor scan (assembled payloads, pre-firing)

Scanned terms: prior averages and per-attempt values, attempt/cycle references to prior attempts, cure/amendment labels, score-filing filename, score-difference vocabulary, review verdicts, plateau/WHY vocabulary, prior and current source hashes. First assembly flagged three anchor classes in the packet/instruction text (an amendment label in check names, a measurement variable name, the filing-target filename in the header sentence) — all neutralized and payloads regenerated; final scan: **CLEAN on all five payloads**.

## Firing form

Per-lens dedicated scratch cwd containing ONLY content copies of the five allowlist components (byte-identical to the fed payload); `codex exec --skip-git-repo-check`, single stdin stream from the payload file; return `-o`-written to a /tmp path first, then content-copied create-once to `lens-<lens>.md` with sha256 verified identical. Read scope per lens = its scratch cwd contents + the fed stream; recorded in the run record.
