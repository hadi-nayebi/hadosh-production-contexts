# T16 — payload manifest · attempt 6 (A-C010-1)

Frozen source: recreation.html sha256 `8455d83217bbba1938ab53f68cbe5313f6f70ccbccc4123a5d7f462ca13e93a7` (86,723 bytes). All five lens payloads embed this identical source; all five returns must bind to this sha.

## Allowlist (the ONLY components in every payload)

1. The standing header: consumer + decision priced · working record · body-write requirement · the line "Scores are integers from 0 to 100" · the instruction to price the build's stated limitations under the lens.
2. The lens instruction (that lens's judging brief, carried from the prior wave's payload template with attempt references removed).
3. The NEW recreation.html in full (the frozen source above).
4. The score-blind build record (`build-record-blind-attempt6.md`, filed in this directory): neutral construction facts, the stated limitations priced under every lens (A-C009-3), and the build's own-check results as check names + outcomes + current-build measurements only.

## Exclusions (verified absent)

scores.md · all prior scores and averages · all prior Codex returns · score targets and the bar · cure identifiers and historical comparisons · the plan and its review.

## Anchor scan (A-C008-4 / A-C010-1c) — run on the exact fed bytes (the preserved payload files)

- Prior average "84.4": 0 hits in all five payloads. Prior-attempt references ("attempt 5", "attempt-4", "previous attempt", "prior attempt"): 0 hits. "verdict": 0 hits. Bar language: 0 hits. Cure identifiers (R1–R12 patterns): 0 hits. Pre-filled "SCORE: <number>": 0 hits.
- The word "cure" appears exactly twice per payload, both inside the standing header's generic phrasing ("its next cure list" / "the cure list the next attempt inherits") carried verbatim from the prior wave's header template — process vocabulary, no identifier, no priced history.
- Source comments scanned: 0 hits for score / lens / codex / verdict / attempt / cure / A-C identifiers / wave / reviewer references. Source comments are neutral construction narration only.
- The build record's numeric content is current-build measurements only (dwell, factors, thresholds, check counts); its single cross-build line is a same-instrument dwell comparison (0.0 ms prior build vs 16.7 ms this build), a measurement, not a score.

## Payload files (create-once, filed BEFORE firing; byte arithmetic verified per file)

| Lens | File | Bytes | sha256 | Header bytes |
|---|---|---|---|---|
| motion | codex/attempt-6/instr-motion.txt | 100,989 | d4cf1efcd753325020b5e980d9e723b24be6887da99be5c834fe363d3b926c46 | 2,729 |
| timing | codex/attempt-6/instr-timing.txt | 100,477 | 8028e1b0e5367e25fff6822c79e96688837d1103c1f02cc6106f98ea6b249365 | 2,217 |
| purity | codex/attempt-6/instr-purity.txt | 100,394 | ffc9534b006f0438f825420d99f00c0b9fc3d0a25992f2c8358d4d70b750692d | 2,134 |
| reusability | codex/attempt-6/instr-reusability.txt | 100,237 | 90261d53178fadf6c42283add6a273c36f5b9707fcdc610da226578826d7db64 | 1,977 |
| readability | codex/attempt-6/instr-readability.txt | 100,739 | 289ed3be4cbdc84cd5046ca9af4874f0e638ce284488ffa2739abcff220cf493 | 2,479 |

Each total = header + 86,723 (source) + 7 (separator) + 11,530 (build record), verified by wc -c at assembly; 0 diff-fix rounds on all five.

## Firing record

Firing form: one stream only — `cat <payload file> | codex exec -` run from a fresh per-lens scratch directory (the workspace-local Codex binary, `--skip-git-repo-check -s read-only`, NO `-o`, NO exec stdin field — the single-stream construction the TOOLS.md Codex-feeding rule prescribes; the payload reaches Codex through its stdin from the preserved file, byte-exact). Stdout captured from the exec result and persisted verbatim via file tools to `codex/attempt-6/lens-<lens>.md`, verified for character count and the SCORE line. One lawful re-fire per lens maximum (A-C002-4), prefix preserved.
