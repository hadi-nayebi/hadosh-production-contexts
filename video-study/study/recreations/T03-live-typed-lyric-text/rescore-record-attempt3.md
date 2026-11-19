# T03 — re-score wave record · attempt 3 · 2026-11-17

Final source judged by every lens: recreation.html sha256
1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96
(the scratch copies the sessions read were sha-verified identical).

## Authoritative return set (frozen before averaging)
Exactly one filed return per lens, named here before any averaging:
- motion — `codex/attempt-3/lens-motion-run2.md` — SCORE 94
- timing — `codex/attempt-3/lens-timing.md` — SCORE 82
- purity — `codex/attempt-3/lens-purity.md` — SCORE 100
- reusability — `codex/attempt-3/lens-reusability.md` — SCORE 78
- readability — `codex/attempt-3/lens-readability.md` — SCORE 91

Excluded from averaging (preserved verbatim, labelled):
- `codex/attempt-3/lens-motion-run1-not-assessed.md` — the first
  motion firing returned NOT ASSESSED with a placeholder SCORE: 0
  (its own text states it is not a measurement and should not feed
  the average): the session declined to judge the fed packet and
  tried to read the packet files from its empty working directory.
  Preserved as the firing's interim; never averaged.
- `codex/attempt-3/lens-motion-launch-failure-1.txt` — a 76-byte
  launch failure (no model contact: the run directory was not a
  trusted directory and no skip flag was passed). Not a return.

Scale validation: every frozen SCORE is an integer in 0–100 on the
declared scale; no return self-declares a different scale.

## Firing route and per-session read scope
Route: FED — each payload (frozen hashes in
`codex/attempt-3/payload-manifest.md`) was fed as a file in ONE stream
to the workspace-local Codex binary (codex exec, read-only sandbox),
working directory /tmp/t03a3/lensrun (outside the workspace).
Deviation D-FED-READSCOPE: the local binary's sessions require the
packet files on disk (the first motion session refused the feed as a
substitute for reading); the three allowlisted packet files —
recreation.html, build-record-attempt3.md,
own-check-packet-attempt3.txt — were therefore copied into the
scratch directory, and every session's reads stayed inside it. Read
scope per session (from the filed session logs): motion-run2, timing,
purity, reusability, readability each read only those three files
(some also ran their own node/python probes inside the scratch
directory on the extracted functions). No session read the workspace,
scores.md, any prior return, or any non-allowlist file.

## Arithmetic (recomputed from the filed returns)
- Attempt 3 sum = 94 + 82 + 100 + 78 + 91 = 445
- Attempt 3 average = 445 / 5 = **89.0**
- Attempt 3 minimum = **78** (reusability)
- Prior average (attempt 2) = 83.2 → signed delta **+5.8**
- Per-lens signed deltas: motion 92→94 (+2) · timing 78→82 (+4) ·
  purity 100→100 (0) · reusability 68→78 (+10) · readability 78→91 (+13)
- Bar: average ≥85 AND minimum ≥70 → **PASS**

## Pre-wave legs (attempt 3, filed before the wave)
- `fit-table-attempt3.md` — HITs: 0 (geometry-model basis, printed in
  the leg; rendered pixels unverified in this seat).
- `config-census-attempt3.md` — HITs: 0 (23/23 CONFIG keys consumed;
  every literal outside CONFIG classified per literal).

## What the returns price (summary for the record)
- Motion 94: mechanics faithful; two priced residuals — the cursor's
  empty-line anchor sits at the prompt's right edge excluding its
  right margin (a small jump at first reveal), and authored-schedule
  validation checks successive starts rather than preceding ends, so
  an overlapping authored schedule could pass (not present in the
  configured playback).
- Timing 82: cadence/window fit independently re-derived and strong;
  the standing cap is evidence, not mechanism — no vocal anchors
  exist in the packet, so synchronization remains unverified.
- Reusability 78: the four previous head causes are cured (interval
  override parsed with effect, visible window capped, overflow guard,
  authored schedule); remaining priced items — RTL layout still
  unimplemented (deferred in writing in the governing plan, with its
  expiry condition), an extreme many-line case (20,000 one-cluster
  lines) can drive the residual allocation negative, authored
  validation accepts negative starts, no bounded height/resource
  policy for very long content, and policy literals (validation
  defaults/bounds, pause-share cap, blink shape) remain outside
  CONFIG as classified policy constants.
- Readability 91: contrast and phone typography strong; the span
  reveal construction credited for stability; the long-line
  viewport-height qualification stands for extreme replacements.
- Purity 100: no deductions; the return confirms the judged source's
  sha matches the build record.

## Verdict
PASS — average 89.0 ≥ 85 and minimum 78 ≥ 70. The attempt beats the
prior average, so no floor-rule WHY is owed and no plateau call
fires. Tier hand-off on PASS is owed to the style-library board
carrying the scores.md pointer (the Attempt 3 entry in
`scores.md`); the tier move itself is the style-library job's act.
