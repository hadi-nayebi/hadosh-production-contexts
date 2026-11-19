# T91 attempt 2 — payload manifest (filed before any lens firing)

Bound source: recreation.html sha256 `64c636b00e52fe7ae1819749e8e4f6793315f523618999350d59c2527e12e5a7` — identical for all five payloads (printed in each payload header and above the source section).

## Allowlist (the assembled payload, per lens — files codex/attempt-2/instr-<lens>.txt)
1. Standing header: consumer + decision priced + working record + BODY-WRITE line + the scale line ("Scores are integers from 0 to 100").
2. The lens's own focus paragraph (one per lens).
3. Neutral specimen facts: specimen observations only (segment window, growth anchors, card bounds, HUD behaviour, chapter chronology, word/token counts, reading basis) + allocation disclosures (exit shape/duration inside the bracket) + evidence limits (digest-level cards, no claim-cue timestamps, PIXEL-UNVERIFIED, GEORGIA-UNVERIFIED) + the three labeled mode claims. This table replaces the plan's §1 anchor table for lens feeding: its two evaluative items (the earlier build's schedule description and the reading-load figure derived from earlier lens returns) are EXCLUDED.
4. The score-blind build record (build-record-attempt2.md, verbatim).
5. The own-check packet (check names + results + counts only, from own-checks-T91-attempt2-output.txt).
6. The full recreation source.

## Exclusions (named)
RUN.md and the wave plan (seat tasking), scores.md and scores-attempt-1.md, all earlier lens returns and payloads, all numeric results of earlier scoring, all improvement targets, all change-to-lens commentary and change labels, the style-library register. None of these appear in any payload, in the payload filenames, in the check names, or in the source's own comments (the source carries no such commentary).

## Anchor scan (of the assembled payloads, run by the assembler before firing)
Patterns scanned in every assembled payload file: the earlier attempt's average and per-lens values (76.4 / 85 / 62 as standalone tokens), "target", "cure", "plateau", "delta", "WHY", "verdict", "scores.md". Result: **CLEAN — 0 hits in all five payloads.**

## Returns
One stream per lens: `cat instr-<lens>.txt | codex exec - -o lens-<lens>.md` in this directory, create-once paths; any interim return would be preserved create-once with a run-tagged name before any re-fire.
