# T128 attempt 2 — re-score wave record (Practice Cycle 021 Wave 20)

Bound source: recreation.html sha256 `d6b9e473b27344c288ece36c95edf46fecea961f4be44cb61d35a0542a75915f` — identical in all five payloads; the source did not change after the wave (final sha re-verified at the wave-end census).

## Firing route + read scope (A-C019-2)
Route: FED — each lens a FRESH session of `~/workspace/codex-local/node_modules/.bin/codex exec -`, payload as the single stdin stream (one stream only, no pipe+stdin combination), run in a fresh empty working directory (/tmp/t128-lens-<lens>), return captured via the tool's `-o` option to its create-once path. Denial mechanism: the session's only input is the payload file's contents; the payload contains no filesystem path to scores.md, prior returns, RUN.md, or the plan; the working directory is empty.
Per session — permitted reads: the payload allowlist contents only (payload-manifest.md). Actual extra-payload reads: **none** for all five sessions. Evidence: every return's own Limits passage states the assessment uses the supplied payload/source only, and two returns note the workspace contained no recreation.html / only a stderr log. No return shows knowledge of any prior score, target, or excluded file. Contamination disposition: not triggered — no voided sessions, no quarantines, no re-fires. Interim firings: none — each lens fired once, on the final source.

## Returns (verbatim, create-once, filed before any subsequent source change — there was none)
| Lens | Score | Return |
|---|---|---|
| motion | 85 | codex/attempt-2/lens-motion.md |
| timing | 88 | codex/attempt-2/lens-timing.md |
| purity | 92 | codex/attempt-2/lens-purity.md |
| reusability | 76 | codex/attempt-2/lens-reusability.md |
| readability | 82 | codex/attempt-2/lens-readability.md |

Payloads: codex/attempt-2/instr-<lens>.txt (assembled from the FINAL step-10 score-blind build record; anchor scan clean on payloads and on the source's own comments; manifest at codex/attempt-2/payload-manifest.md).

## Mechanical guards
1. **Delta arithmetic:** sum = 85 + 88 + 92 + 76 + 82 = 423 · average = 423 / 5 = **84.6** · minimum = **76** (reusability). Prior average 83.0 → **delta +1.6** (signed). Bar: average ≥85 ✗ (84.6) · minimum ≥70 ✓. **Verdict: FAIL — below bar, beating attempt (no WHY owed; floor rule §4.7 not triggered).** No tier hand-off (§4.11 is PASS-only).
2. **Attempt-preservation census (wave-end):** every manifest copy hash-compared against its ORIGINAL baseline — recreation-attempt-1.html · build-record-attempt-1.md · build-record-blind-attempt-1.md · fit-table-attempt-1.md · config-census-attempt-1.md · comparison-attempt-1.html all MATCH; designated UNCHANGED originals re-verified in place (segment.mp4 · jev-prewave.md · comparison.html · all attempt-1 codex/ files) — MATCH; scores.md pre-append hash matched its baseline before the Attempt 2 append; checkpoint copies' inode independence re-asserted (all four independent). **0 mismatches.**
3. **Floor-rule gate check:** new average 84.6 > 83.0 — beating; WHY not owed. The plan §6 scaffold is filed as UNUSED in scores.md with its outcome slots completed as the delta record.

## A-C008 legs cited (attempt 2, fired before the wave)
- guard-measured-fit → `fit-table.md` — **HIT count 0** (EMPTY; watches: eyebrow ink margin 0.30 px, exhibit-sub 0.16 px).
- guard-config-census → `config-census.md` — **HIT count 0** (EMPTY; unapplied keys 0 per the builder's census — but see the wave's reusability/purity findings in scores.md: the lenses found exhibit.atMs bound-but-unconsumed and three validator gaps the builder's census did not catch; those findings stand as the leg's miss, recorded in the scores filing, not hidden).
