# PAYLOAD MANIFEST — T20 attempt 2 · five-lens re-score wave (A-C010-1c)

Filed BEFORE any lens firing. Frozen source: recreation.html sha256 `afa38d8144ce91642c27917fdf2139f74a444d908fd58665fe1b1e228b6dd285` — all five payloads embed this identical source; all five returns bind to it.

## Allowlist (exact — nothing else enters any payload)
1. Standing header (consumer + decision priced + working record + BODY-WRITE requirement + the explicit line "Scores are integers from 0 to 100").
2. The lens instruction for that lens only.
3. Neutral technique facts (digest mechanics + the one timed anchor + the ALLOCATION MODEL label + PIXEL-UNVERIFIED).
4. The frozen recreation.html, verbatim.
5. The neutral own-check packet (checkpoints/attempt-2/neutral-check-packet.txt — check names + results + measured values only, descriptive names, no stage/cure codes).

## Exclusions (named)
RUN.md · plan-T20.md · plan-review return · scores.md · ALL prior lens returns · prior scores (82.4 and every per-lens value) · target scores / bar arithmetic beyond the standing bar statement in the wave definition · build-record-attempt2.md (cure interpretation lives there; it is NOT fed) · comparison.html · checkpoint files · fit-table / config-census filings (their measured values reach the packet only as neutral check results).

## Anchor scan (assembled payloads + source comments, A-C008-4)
- Source comments scanned BEFORE generation: `grep -i -E "cure|A-C[0-9]|amendment|lens|score|attempt|T15|plateau"` over recreation.html → **0 hits**. The one contaminated comment from the prior build (a precedent/amendment citation in the CONFIG header) was removed during the build; all remaining comments describe mechanics only.
- Payload filenames/labels: `payload-<lens>.txt` / `lens-<lens>.md` — neutral.
- Numerical anchors in payloads: only technique facts (14 s window, 6.5 s anchor, 9 of 15 letters — evidence, not scores), the source's own CONFIG values, and neutral measured check values. No prior score, target, or delta appears in any payload.
- Qualitative anchors: no cure-to-lens commentary; the check packet uses descriptive check names (the harness's internal stage labels were paraphrased out).

## Firing form
One stream per lens: `cat codex/attempt-2/payload-<lens>.txt | codex exec - -o codex/attempt-2/lens-<lens>.md` — payload files are created once at `codex/attempt-2/payload-<lens>.txt` BEFORE firing; returns file verbatim at `codex/attempt-2/lens-<lens>.md`. One lawful re-fire per lens maximum, prefix preserved.
