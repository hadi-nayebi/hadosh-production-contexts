# T17 attempt 3 — payload manifest (A-C010-1c) · practice Cycle 012 Wave 11

Scored source: `recreation.html` sha256 `b2012a7a9fd8eaef1b6187754f52d233699be0528357fbd29949819a7bf0fc91` — identical in all five payloads; frozen before payload assembly; any later source change requires a fresh preserved wave.

## Allowlist (per payload, exact)

1. The lens instruction (standing header: consumer practice §5 Verify · decision priced · working record · BODY-WRITE requirement · explicit scale line "Scores are integers from 0 to 100" · closing `SCORE: <integer>`), adapted from the filed attempt-2 payload forms with only the cycle/attempt/record-path lines updated.
2. Neutral technique facts (packet mechanics + figure window anchors; no scores).
3. The final recreation.html source (verbatim, sha above).
4. `build-record-attempt3.md` (neutral construction facts only — no cure codes, no lens commentary, no scores).
5. The neutral own-check packet (check names + PASS results only, scrubbed of cure labels and of any comparison to prior attempts; 82 packet lines from the 84-check suite — the 2 retained-mechanism consistency lines were excluded rather than renamed).

## Exclusions (printed; none may appear in any payload)

RUN.md · scores.md content · prior lens returns · prior/target scores · cure→lens commentary · the cure ledger · this manifest.

## Anchor scan of the assembled payloads (before firing)

Criteria: prior/target scores, attempt comparisons, cure labels, evaluative wording, review-routing filenames — applied to instruction text, facts, source (including its comments), build record, own-check packet, and filenames.
- Numeric anchors for prior averages (81.8 / 67.6): 0 hits in all five payloads.
- "target", "delta", "verdict", "plateau", "WHY", amendment labels (A-C…), cure labels (C1–C10 as labels): 0 hits.
- Source comments scanned: five construction comments, all neutral (no cure codes, no amendment labels, no evaluative wording) — no neutralization needed; the suite had already run green on this exact source.
- Contextual review (retained, with reason): (a) the word "cures" appears once per payload inside the standing lens instruction itself ("Name the cures the next attempt must carry if it fails") — it instructs the reviewer, names no cure of this build, and stands verbatim in the filed attempt-2 forms; (b) "scores.md" appears twice per payload inside the standing header's working-record line, naming the record the return is filed into — no score values, no content from that file. Legitimate timing/config numbers (22.5s total, figure windows, CONFIG values) are retained as construction facts.
- Filenames: `instr-<lens>.txt` — neutral lens-facing names, same form as the filed attempt-2 payloads.

## Payload hashes (sha256, bound before firing)

- motion: `6efa05ab293a26095eb97a83582c0636061371e986ae90f4f86161981fa6c0c2`
- timing: `b7af4fc90e1d2f8716aff01670f2c6c2b0aa29c599e8a61eda3d8e6196d50b60`
- purity: `96649c9975e4b4cef5484addb9f00c57adf8a2eb99cc3ef0ca39fb832e7e9c6c`
- reusability: `a24e500ff970aea150f7afa46364f3e4a8ce5919bd6b94cebfdd0fd142e07917`
- readability: `76c297f35512090e26bf2241c591caa35a519a4a4a2c287e72e7e977103f086c`

Returns file create-once at `codex/attempt-3/lens-<lens>.md` via the firing tool's `-o` option; payloads above are preserved create-once and are never regenerated after firing.
