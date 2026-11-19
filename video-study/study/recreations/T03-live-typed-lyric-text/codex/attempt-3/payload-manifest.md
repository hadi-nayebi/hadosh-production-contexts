# Payload manifest — T03 attempt 3 re-scoring wave

Filed BEFORE any payload assembly. Each lens payload is assembled only
from the allowlist below, in this order, and from nothing else.

## Allowlist (exact)
1. A per-lens instruction header: the standing header (consumer +
   decision priced · working record · body-write requirement), the bar
   (average ≥85 AND no lens <70), the attempt number (3), the scale
   line ("Scores are integers from 0 to 100"), neutral technique facts
   (catalogue mechanics, specimen window, evidence limits), and the
   lens's own judging criteria.
2. The final recreation source: `recreation.html` at sha256
   1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96.
3. The build record: `build-record-attempt3.md` (score-blind
   construction record, filed before assembly).
4. The own-check packet: `own-check-packet-attempt3.txt` (check names
   and pass/fail results only, 135 checks).

## Neutral-packet schema
Header → technique facts → lens criteria → "==== recreation.html ===="
→ source verbatim → "==== build record ====" → build record verbatim →
"==== own-check packet ====" → packet verbatim → closing instruction
(score + body-write lines).

## Exclusions (never in any payload)
scores.md · RUN.md and the plan for this attempt · any prior attempt's
returns, build records, or preserved sources · prior scores, target
scores, or deltas in any form · cure identifiers or amendment labels ·
commentary mapping any construction choice to the lens judging it ·
this manifest.

## Anchor scan (after assembly, before firing)
Every assembled payload's final bytes are scanned for: prior numeric
scores of this item, cure-code tokens, amendment-label tokens, the
words "plateau", "delta target", and cross-lens commentary. Any hit
voids the assembly; the contaminated record is neutralized and the
payload re-assembled and re-scanned.

## Firing paths (create-once)
First firing per lens: `instr-<lens>.txt` / `lens-<lens>.md` in this
directory. Every re-fire takes fresh run-tagged paths
(`instr-<lens>-run<N>.txt` / `lens-<lens>-run<N>.md`). No firing
overwrites a prior payload or return.

## Payload hashes (frozen before firing)
Appended below at freeze time; any byte change after freezing voids
the freeze and repeats assembly → scan → freeze.

## Freeze record (appended at freeze time, before firing)
Anchor scan over all five assembled payloads' final bytes: no prior
scores (83.2 / 79.2 absent), no amendment labels, no "plateau", no
"delta target" / "target score" / "prior average" text, no jev
references. One scanner false positive, documented: a case-insensitive
cure-code pattern matched the substring "c1" inside the sha256 hex
string c0aee98c1dacf24c… in the build record's preservation section —
a hash fragment, not a code token; the case-sensitive scan for
uppercase C1–C7 tokens finds none. The hash stays: final-source
binding requires it in the record.

Frozen payload sha256:
- instr-motion.txt 747cf59ed6fa497ffbcaa33ad39add5f29728670df5b8ac37bbb60b392554ec9
- instr-timing.txt 3db10d1d6163e6e7587aa5a74cf7b8a1a59a1caa9e14bf53b6628ae98c99436d
- instr-purity.txt 2ae91e7bcbac55d53928ef131351f785a557b320a5f38cb8a486c0f5213b1b96
- instr-reusability.txt 27a3499f8a471bcc09a177814d2594485d7b3a534aafc2e7298ee9f77a91e07b
- instr-readability.txt 07f16272e79788fbb3b49bd86c5933f063ae951213f0ee3a1276e9828149f153

Firing route: FED — each payload is fed as a file in ONE stream to the
workspace-local Codex binary; the run's working directory is an empty
scratch directory outside the workspace, sandbox read-only, so the
session's read scope is the fed payload only (no workspace reads).
Returns are captured verbatim to the create-once lens-<lens>.md paths.
