# T96 attempt 2 — payload manifest (filed BEFORE any lens firing; A-C010-1c + A-C005-2 + A-C008-4)

Bound source: recreation.html sha256 **38ffd531648ff0b155947401a776f15de86fe31844b90032127b9d192c9f625f** — the identical sha appears in every payload (verified by grep: 2 occurrences per payload: facts + blind record; the full source follows in each payload).

## Allowlist (each payload-<lens>.txt is assembled from exactly these four parts, in this order)
1. `instr-<lens>.txt` — lens instruction with the standing header (consumer + decision priced · working record · BODY-WRITE line · explicit scale line "Scores are integers from 0 to 100" · closing `SCORE: <integer>` requirement), modeled on the prior attempt's lens payload headers.
2. `neutral-facts.md` — neutral facts ONLY: the specimen's measured sequence (0.5 s sky-sampling warmth series), the uncertainty interval [12.5 s, 13.0 s] with the binding choice stated, and allocation disclosures (scene order + fill durations labeled allocation).
3. `build-record-blind.md` — score-blind build record: construction, schedule derivation, own-check results stated as neutral check names/results, measured fit figures, the alternate palette-system values exercised in the swap checks.
4. The full recreation.html source (final build, sha above).

## Exclusions (verified absent)
RUN.md · plan-T96.md · scores.md (any attempt) · prior lens returns · prior scores and averages · deductions · target scores · cure labels and cure codes · the prior phase-machine narrative and amendment history · predicted ranges · this manifest itself.

## Anchor scan (executed on the ASSEMBLED payloads, incl. filenames, check names and source comments)
- Filenames: instr-/payload-/lens-<lens> + neutral-facts.md + build-record-blind.md — neutral, no scores or labels.
- Token scan over all five assembled payloads + components for: prior average, plateau, 1200, attempt-1 references, prior-score wording, deduction, amendment, checkpoint, own-check names, pinned/old-pin/re-pin narrative, cure codes — **0 hits**. Sole "cure" occurrence: the standing header's generic instrument phrase "what the next attempt must cure if it does not" (no label, code, or mapping). Sole "seat" occurrence: "no browser binary in this seat" (the PIXEL-UNVERIFIED disclosure).
- Source comments scanned separately (they ride inside every payload): grep for cure/score/pinned/plateau/attempt wording in recreation.html — **0 hits**; no neutralization edit was needed.
- Check names inside payloads: the blind record states own-check results in neutral descriptive language only (no suite section codes, no cure mapping).

## Firings
Five lenses (motion · timing · purity · reusability · readability), ONE stream each: `cat payload-<lens>.txt | codex exec - -o lens-<lens>.md`, create-once paths under this directory. Any interim re-fire takes a run-tagged path and is preserved.
