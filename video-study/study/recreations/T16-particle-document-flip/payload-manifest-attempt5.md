# T16 — payload manifest · attempt 5 (A-C010-1)

Frozen source: recreation.html sha256 `f912ebe273604baa47c96835f4a50bc3e78fbc5ff0b82ecd2e675820bf9ede0e` (73,540 bytes). All five lens payloads embed this identical source; all five returns must bind to this sha.

## Allowlist (the ONLY components in every payload)

1. The standing header: consumer + decision priced · working record · body-write requirement · the line "Scores are integers from 0 to 100" · the instruction to price the build's stated limitations under the lens.
2. The lens instruction (that lens's judging brief, carried from the prior wave's payload template with attempt references removed).
3. The NEW recreation.html in full (the frozen source above).
4. The score-blind build record (`build-record-blind-attempt5.md`, filed in this directory): neutral construction facts, the stated limitations priced under every lens (A-C009-3), and the build's own-check results as check names + outcomes + current-build measurements only.

## Exclusions (verified absent)

scores.md · all prior scores and averages · all prior Codex returns · score targets and the bar · cure identifiers and historical comparisons · the plan and its review. Payload text scan for prior-score / attempt-history strings: 0 hits in all five payloads.

## Anchor scan (A-C008-4 / A-C010-1c)

- Source comments: 22,337 chars of comments scanned — 0 hits for score / lens / cure / attempt / codex / verdict / reviewer / bar / A-C identifiers / wave / cycle references. The word "target" appears only as the technique noun (particle targets).
- Payload files: scanned as above, 0 hits.
- Build record packet: check lines carry current-build measurements only; the two lines whose raw harness output contained a historical comparison or process wording were rewritten to current-build facts before inclusion (assignment retention 0.990; sampled readable frames 2–4 of 8).

## Firing record

Payloads filed create-once at `codex/attempt-5/payload-<lens>.txt` BEFORE firing. Firing form: `cat <payloadfile> | codex exec - -o codex/attempt-5/lens-<lens>.md` (one stream per lens; the exec tool's stdin field is never combined with the pipe). Returns filed verbatim at `codex/attempt-5/lens-<lens>.md`. One lawful re-fire per lens maximum (A-C002-4), prefix preserved.
