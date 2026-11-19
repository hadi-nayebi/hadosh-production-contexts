# T128 — preservation manifest · attempt 3 (Cycle-030)

Baseline: `preservation-attempt-3-baseline.txt` — machine-written (sha256sum redirect, write-first invocation), 105 files, every hash validated 64 hex chars at capture. Covers the complete prior evidence set: recreation.html (a2 source) · comparison.html + segment.mp4 (hashed in place, UNCHANGED) · build-record.md · build-record-blind.md · fit-table.md · config-census.md · scores.md (pre-append) · checkpoints/stage-A..D.html + stage-A..D-checks.txt · codex/attempt-2/ complete · attempt-1 codex/ payloads + returns + codex-observe.md + codex-plan-review.md · preservation-attempt-2-baseline.txt + preservation-attempt-2-manifest.md · jev-prewave.md · frames/ (56 jpgs, in place, UNCHANGED).

Content copies (create-once; sha == baseline; inode != working-file inode, asserted at capture):
- recreation-attempt-2.html — sha d6b9e473…15f MATCH · inode 7275572 != recreation.html 5069720
- build-record-attempt-2.md — MATCH · inode differs
- build-record-blind-attempt-2.md — MATCH · inode differs
- fit-table-attempt-2.md — MATCH · inode differs
- config-census-attempt-2.md — MATCH · inode differs

Comparison preservation (two distinct artifacts):
- (i) comparison-attempt-2-exact.html — exact byte copy of a2 comparison.html, sha cbfbef4f…cb0 MATCH · inode 7275578 != 5069780
- (ii) comparison-attempt-2-replayable.html — identical except recreation reference re-pointed to recreation-attempt-2.html; original side still resolves to segment.mp4

Working file: recreation-attempt-3-working.html — create-once content copy of the preserved a2 source, sha d6b9e473…15f at Stage 0. The live recreation.html is not touched by any stage; publish is last, per plan §2.6.
