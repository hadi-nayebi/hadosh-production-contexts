# T17 attempt 7 — payload manifest (A-C010-1c) · practice Cycle 027 Wave 26

Filed BEFORE any firing. Scored source: `recreation.html` sha256 `50c38b6fd3aed9a8aff5fc14f2862d7be40e6d657a561bc41714de714265ea71` — identical in all five payloads; frozen at the stage-5 checkpoint (same sha) after the comment scan (source comments are neutral construction comments; nothing to strip) and the full mounted-harness re-run (45/45 PASS).

## Allowlist (per payload, exact — five components)

1. **Lens instructions** (`instr-<lens>.txt`): the prior attempt's instruction form with only the cycle/attempt/path lines updated — standing header (consumer + decision priced; BAR only: average ≥85 AND no lens <70), working record, BODY-WRITE requirement, scale line "Scores are integers from 0 to 100", closing `SCORE: <integer>`, plus the lens line.
2. **Neutral technique facts** (`neutral-technique-facts.md`): packet mechanics + figure window anchors + specimen basis + verification limitations (PIXEL-UNVERIFIED; Chromium startup failure quoted). Carried verbatim from the prior attempt's neutral facts.
3. **Neutral recreation source**: the frozen `recreation.html` verbatim (sha above), comments scanned pre-assembly.
4. **Neutral own-check packet** (`own-check-packet.md`): current check names, inputs and results only (45 checks + fit leg + census summary) — no baselines, no prior scores, no outcome labels.
5. **Score-blind build record** (`score-blind-build-record.md`): construction facts only — no check-to-defect mapping, no prior scores, no targets beyond the BAR in the instructions, no verdicts.

Assembled payloads preserved create-once: `payload-<lens>.txt` in this directory.

## Exclusions (printed; none appears in any payload)

The full build record (`build-record-attempt7.md`) **in full** · the plan-review addendum · RUN.md · plan-T17.md · scores.md · prior lens returns · prior/target scores beyond the BAR · WHY scaffolds · deferral tables.

## Anchor scan (over the COMPLETE assembled payloads, INCLUDING source comments — plan-review finding 5 form)

Terms scanned in every payload: `74.2` · `84.4` · `371` · `attempt 6` / `attempt-6` / `Attempt 6` · `plateau` / `PLATEAU` · `delta` · `prior average` · `WHY` · `cure` · `A-C0` · the prior source sha. **Result: 0 hits in every payload** (motion · timing · purity · reusability · readability). Bare numerals 62/64 were also inspected: every occurrence is a configuration/geometry value or a current-check count, never a score. The only performance numbers in any payload are the BAR (85 / 70) in the lens instructions, as the contract requires.

## Firing discipline

Per-lens scratch cwd `~/workspace/.scratch/c027-T17-<lens>/` containing ONLY a byte-identical copy of that lens's payload; fed stream `cat payload | ~/workspace/codex-local/node_modules/.bin/codex exec - --skip-git-repo-check -s read-only -o /tmp/<out>.txt`; return content-copied create-once to `codex/attempt-7/lens-<lens>.md` with sha256 verified identical to the `-o` original; payloads + returns preserved BEFORE any subsequent source change; each firing's record prints the session's read scope; a session that read prior scores/returns is preserved labelled CONTAMINATED, excluded from governing arithmetic, and re-fired clean once.
