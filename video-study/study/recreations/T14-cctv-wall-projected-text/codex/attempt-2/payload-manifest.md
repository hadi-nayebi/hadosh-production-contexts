# T14 attempt 2 — payload manifest (W3, filed BEFORE firing)

Final source bound to every payload: `recreation.html` sha256 **2c5a897e952082ab1e5b247ec627b9192916677ffce9b0dc9ebe103686540590**. Any post-wave source change requires a new wave.

## Allowlist (exact, per lens payload `payload-<lens>.txt`)
1. Lens instruction `instr-<lens>.txt` (this directory, create-once) — modeled on the attempt-1 `codex/instr-<lens>.txt` files: standing header (consumer = practice §5 Verify + decision priced · working record = codex/attempt-2/ + scores.md · BODY-WRITE requirement · explicit scale line "Scores are integers from 0 to 100" · closing `SCORE: <integer>` demand), the lens's judge questions, and neutral technique facts (packet P1 specimen facts only).
2. Neutral build extract `neutral-build-extract.md` — permitted fields only: artifact form, final sha, check names + PASS results, segment dimensions. No scores, no cure labels, no prior-defect language.
3. The final `recreation.html` source, appended verbatim after the extract.

## Exclusions (never in any payload)
plan-T14.md · RUN.md · scores.md (any attempt's scores, incl. the prior 81.6 and per-lens values) · prior lens returns · build records' cure commentary · delta targets · the WHY scaffold. Prior scores live in the seat's tasking only.

## Assembled-payload anchor scan (run on all five assembled payloads before firing)
- Numeric anchors: searched for the prior average and per-lens values and delta/target figures — **0 hits** in every payload.
- Qualitative anchors: searched for amendment codes (A-C0…), "CONVERGENT", "plateau", "prior average", "attempt 1" — **0 hits**. One generic hit per payload: the word "cures" inside the standing header sentence "name the cures the next attempt must carry if it fails" — the wave definition's own generic language, carried identically in attempt 1's instructions; it names no cure, defect, or score for this build. Disposition: retained as standing instruction language, printed here.
- Source comments scanned as payload content (A-C008-4): the final source's comments carry no cure codes, amendment labels, or cure-to-lens commentary — **clean, no neutralization needed**.
- Filenames/fixture labels inside payloads: none beyond the working-record paths in the standing header.

Scan verdict: PASS — payloads are allowlist-only and score-blind. Firing: one stream per lens (`cat payload-<lens>.txt | codex exec - -o lens-<lens>.md`), returns filed create-once in this directory.
