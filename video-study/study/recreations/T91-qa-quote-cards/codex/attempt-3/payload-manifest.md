# T91 attempt 3 — payload manifest (filed before any lens firing)

Bound source: recreation.html sha256 `10a4da2d1a78664f910ab20fdd27d0f0b588b6372d7a9a94e78a48c819184e83` — identical for all five payloads (printed in each payload header and above the source section).

## Allowlist (the assembled payload, per lens — files codex/attempt-3/instr-<lens>.txt)
1. Standing header (seat tasking form): consumer (practice INSTRUCTION §5 Verify + the scores.md filing) · decision priced (whether attempt 3 beats 82.4 and passes the bar) · working record + BODY-WRITE line · the scale line ("Scores are integers from 0 to 100"). The header is tasking, identical across lenses; the evidence sections below it are what the anchor scan prices.
2. The lens's own focus paragraph (one per lens, modeled on the attempt-2 payloads).
3. Neutral specimen facts: specimen observations only (segment window, growth anchors, card bounds, HUD behaviour, chapter chronology, word/token counts, reading basis) + allocation disclosures (exit shape/duration inside the bracket) + evidence limits (digest-level cards, no claim-cue timestamps, PIXEL-UNVERIFIED, GEORGIA-UNVERIFIED) + the two labeled mode claims with their cycles (specimen 14000ms; sequence 27900ms).
4. The neutral build record (`build-record-neutral-attempt3.md`, verbatim) — field allowlist per the Cycle 017 plan review finding 4: construction facts, schedule tables, contract descriptions, limitations. It contains no prior-return quotations, no predicted deductions, no cure labels, no supersession arguments, no checkpoint commentary, and no scores.
5. The own-check packet (check names + results + counts only, from `own-checks-T91-attempt3-output.txt` in the Cycle 018 run directory; the preservation-sha check line and the sha INFO line are excluded — they are filing facts, not build behaviour).
6. The full recreation source.

## Exclusions (named)
RUN.md files and the wave plan, scores.md, all earlier lens returns and payloads, all numeric results of earlier scoring, all improvement targets, all cure-to-lens commentary and cure labels, the full build record (build-record-attempt3.md — the neutral record above replaces it for feeding), the style-library register. None of these appear in any payload's evidence sections, in the payload filenames, in the check names, or in the source's own comments (the source carries no such commentary — its comments are construction descriptions only).

## Anchor scan (of the assembled payloads, run by the assembler before firing)
Patterns scanned in every assembled payload's evidence sections (items 2–6 above, i.e. everything after the standing header): "76.4", "cure", "plateau", "delta", "WHY", "verdict", "scores.md", "target", "attempt 1", "attempt 2", "attempt-1", "attempt-2", "prior average", "82.4" (case-insensitive). Result: **CLEAN — 0 hits in all five payloads** (motion 54714 · timing 54656 · purity 54598 · reusability 54665 · readability 54590 bytes).
First assembly carried one hit (a check name referencing the preserved prior build); those five payloads were preserved unfired as `instr-<lens>-run1-unfired.txt`, the packet line was excluded, and the payloads were regenerated — the files above are the regenerated, scanned-clean set.

## Returns
One stream per lens: `cat instr-<lens>.txt | ~/workspace/codex-local/node_modules/.bin/codex exec - -s read-only -o codex/attempt-3/lens-<lens>.md` (pipe only, no second stream). Any re-fire preserves its earlier return create-once with a run-tagged name first.

## Run-2 — CLEAN RE-SCORE payloads (Cycle 018, Codex Condense REGRADE cure)

Reason: the run-1 standing header named the prior attempt's average in its decision line, contaminating the run-1 wave. The run-1 returns (`lens-<lens>.md`) are preserved untouched as contaminated evidence. This run-2 wave re-scores the IDENTICAL final source — recreation.html sha256 `10a4da2d1a78664f910ab20fdd27d0f0b588b6372d7a9a94e78a48c819184e83`, verified before firing and again after — with score-blind payloads. Nothing was rebuilt.

Clean payloads (create-once, files `codex/attempt-3/instr-<lens>-run2.txt`): each is the run-1 payload's lens focus paragraph + neutral specimen facts + neutral build record + own-check packet + full recreation source, with ONLY the standing header replaced. The clean header names only: the consumer (practice INSTRUCTION §5 Verify + the scores.md filing) · the decision (does this build pass the bar — average ≥85 AND every lens ≥70; scores are integers 0–100; close with SCORE: <integer>) · the working record (this payload, bound to the sha above). No prior average, no prior scores, no "beats" language, no cure names or commentary, and no target scores appear anywhere in any payload.
Sizes (bytes): motion 54723 · timing 54665 · purity 54607 · reusability 54674 · readability 54599.

Anchor scan (of each assembled run-2 payload, run before firing): patterns — "82.4" · the prior lens numbers as vectors (attempt-2 vector 87/86/95/62/82, attempt-3 run-1 vector 88/90/100/78/84, and attempt-1 vector 76/62/96/72/76, in · , space and / separated forms) · "beat" (case-insensitive) · cure codes (word-boundary C1–C10 and the word "cure") · "prior average" · "76.4". Result: **CLEAN — 0 hits on every pattern in all five payloads** (motion · timing · purity · reusability · readability each 0/0/0/0).

Firing: one stream per lens — `cat codex/attempt-3/instr-<lens>-run2.txt | ~/workspace/codex-local/node_modules/.bin/codex exec - -s read-only -o codex/attempt-3/lens-<lens>-run2.md` (pipe only, no second stream). All five returns were non-empty on the first firing; no empty-return re-fire was needed. Returns: `lens-motion-run2.md` · `lens-timing-run2.md` · `lens-purity-run2.md` · `lens-reusability-run2.md` · `lens-readability-run2.md`. Scores are filed in scores.md under "Attempt 3 — CLEAN RE-SCORE (Cycle 018, Codex Condense REGRADE cure)".
