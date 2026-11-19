# T128 attempt 2 — preservation manifest (plan step 1, executed before any mutation)

Baseline: preservation-attempt-2-baseline.txt (script-generated, 24 entries, every hash 64-hex validated, count-checked).
Seat wave baseline (runs/2026-11-17-cycle-021-wave-20/preservation-baseline.txt) agrees for recreation.html / comparison.html / scores.md.

## Original -> immutable copy (content copies, create-once)
- recreation.html -> recreation-attempt-1.html | baseline 5ab7c6ceb8f0d4891731b7c801b0860916a41018514b705811a958922465e398 | copy-hash-match true | inode 5069720 != 5750112 : true | created (content copy)
- build-record.md -> build-record-attempt-1.md | baseline 8b4774363722dfb39569a7a35f808a9838e57fc8c08ab1559bee075400f731b4 | copy-hash-match true | inode 5070350 != 5750113 : true | created (content copy)
- build-record-blind.md -> build-record-blind-attempt-1.md | baseline 033c46d046685392c36e6103e6b7acb97ba91eaa3068c1b1f882ac1485a5ea6d | copy-hash-match true | inode 5070349 != 5750114 : true | created (content copy)
- fit-table.md -> fit-table-attempt-1.md | baseline 3a07a8448e5555a5e0f6c2f01ef9b809d419392a12e772b5faecb5b87a7c2e4f | copy-hash-match true | inode 5070248 != 5750115 : true | created (content copy)
- config-census.md -> config-census-attempt-1.md | baseline 80f34e10166b52b19fba25adae188bc2adb72d492b6b506ef590fcfa9417e805 | copy-hash-match true | inode 5070249 != 5750116 : true | created (content copy)
- comparison.html -> comparison-attempt-1.html | baseline cbfbef4fa50402d61c14dd6d1da84c92c6cc039813d2c4bfd5df091d68273cb0 | copy-hash-match true | inode 5069780 != 5750117 : true | created (content copy)

## Comparison ORIGINAL-side referenced assets (extracted from comparison.html)
- segment.mp4 | sha256 dbe99c0845ecb1ae61fa9b810412502dda690bcdc8e00854417d5f4f16af0ea1 | designated UNCHANGED, checked in place
- recreation.html | sha256 5ab7c6ceb8f0d4891731b7c801b0860916a41018514b705811a958922465e398 | OVERWRITTEN by this attempt -> preserved as recreation-attempt-1.html above

## Designated UNCHANGED originals (never overwritten; checked in place against baseline)
- scores.md (append-only at filing; pre-append hash = baseline)
- segment.mp4
- jev-prewave.md
- all codex/ attempt-1 payloads + returns (15 files)

Manifest self-verification: every preserved copy hash-compared against its original baseline hash = MATCH; create-once + inode independence asserted per line above.
