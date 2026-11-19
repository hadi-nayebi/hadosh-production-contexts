# PAYLOAD MANIFEST — T20 attempt 3 · five-lens re-score wave (A-C010-1c)

Filed BEFORE any lens firing. Frozen source: recreation.html sha256 `5f6e609d2f249ffec7bd84da5e1a0314a361cdf7f52b2bd5b9ffefca9199f507` — all five payloads embed this identical source; all five returns bind to it.

## Allowlist (exact — nothing else enters any payload)
1. Standing header (consumer + decision priced + working record + BODY-WRITE requirement + the explicit line "Scores are integers from 0 to 100").
2. The lens instruction for that lens only.
3. Neutral technique facts (digest mechanics + the one timed anchor + the ALLOCATION MODEL label + PIXEL-UNVERIFIED + SYNTHETIC-PIPELINE).
4. The frozen recreation.html, verbatim.
5. The neutral own-check packet (checkpoints/attempt-3/neutral-check-packet.txt — check names + results + measured values only, descriptive names, no stage/cure codes).

## Exclusions (named)
RUN.md · plan-T20.md · plan-review returns (both firings) · scores.md · ALL prior lens returns · prior scores (84.6 and every per-lens value) · target scores / bar arithmetic beyond the standing bar statement in the wave definition · build-record-attempt3.md · comparison.html · checkpoint files · fit-table / config-census filings (their measured values reach the packet only as neutral check results) · the attempt-2 archive and its baseline-identity comparison (seat record only — the packet states the default-configuration invariance as a neutral final-behaviour fact, without naming the archive).

## Anchor scan (assembled payloads + source comments)
- Source comments scanned BEFORE generation: `grep -i -E "cure|A-C[0-9]|amendment|lens|score|attempt|plateau"` over recreation.html → **0 hits** (V9). All comments describe mechanics only; no neutralization was needed.
- Payload filenames/labels: `payload-<lens>.txt` / `lens-<lens>.md` — neutral.
- Numerical anchors in payloads: only technique facts (14 s window, 6.5 s anchor, 9 of 15 letters — evidence, not scores), the source's own CONFIG values, and neutral measured check values. No prior score, target, or delta appears in any payload.
- Qualitative anchors: no cure-to-lens commentary; the check packet uses descriptive check names (internal stage labels paraphrased out).

## Firing form
Local Codex binary (`~/workspace/codex-local/node_modules/.bin/codex exec`), fed form: payload as a single stdin stream, no second redirect. Per-lens scratch cwd under `~/workspace/.scratch/c029/T20-<lens>/` containing ONLY content copies of the packet files (header, source, neutral packet — byte-identical to the fed payload's parts), `--skip-git-repo-check`, closed stdin after the feed. Each return's `-o` original lands in `~/workspace/.scratch/c029/` (NOT /tmp) and is content-copied to the create-once destination `codex/attempt-3/lens-<lens>.md` in the SAME invocation, sha256-verified identical. Payloads are create-once at `codex/attempt-3/payload-<lens>.txt` BEFORE firing. At most one re-fire per lens, against the final source only, prefix return preserved. Each session's read scope (effective read boundary + actual reads) is printed in the build record beside the filing. Disposition for a contaminated session (one that reads prior scores or returns): its return is preserved labelled NON-GOVERNING and a single clean re-fire against the final source governs; the governing receipt per lens is named in the build record.
