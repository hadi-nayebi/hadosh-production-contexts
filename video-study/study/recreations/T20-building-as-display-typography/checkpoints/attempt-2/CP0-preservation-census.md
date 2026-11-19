# CP0 — Preservation census · T20 attempt 2 · Cycle 016 Wave 15 (practice)

Filed BEFORE any mutation of the working file (plan §3, A-C004-1, A-C005-1, A-C010-1b, plan-review finding 1).

## Content copies (create-once, fresh inodes — never hardlinks)
| Copy | Source sha256 | Copy sha256 | Match | Inode (source → copy) |
|---|---|---|---|---|
| recreation-attempt-1.html | ff805c93e65a67ffc5e153cf82391ad1ef35cb03eb01dfb7bc9d2eff005e9987 | ff805c93e65a67ffc5e153cf82391ad1ef35cb03eb01dfb7bc9d2eff005e9987 | YES | 4433681 → 5147599 (differ ✓) |
| comparison-attempt-1.html (finding 1) | aae5ecc902f40e32a8ad2850fabf281aa9c7e8912a6dc4dbb82d575b22c9a673 | aae5ecc902f40e32a8ad2850fabf281aa9c7e8912a6dc4dbb82d575b22c9a673 | YES | — |
| scores-attempt-1.md (finding 1 — immutable prefix record) | 96af52a5c2f745ff2d065b54fc5a91eb5703c560a71cc112e467057f40392210 | 96af52a5c2f745ff2d065b54fc5a91eb5703c560a71cc112e467057f40392210 | YES | — |

Baseline source: run dir `preservation-baseline-carried.txt` (machine-written, 64-hex hashes) — T20 recreation entry ff805c93… matches the plan §3.2 value exactly.

## Widened evidence inventory (A-C010-1b) — hashed, none edited by attempt 2
- build-record.md — 34d58f25fe0a923b59de1ad825260f53bcc55901d5398a7bab5fd8592b7c5e26 (baseline ✓)
- scores.md — 96af52a5… (above; attempt 2 appends ONLY, prior content stays an unchanged prefix — verified at close)
- comparison.html — aae5ecc9… (above) + its referenced ORIGINAL asset segment.mp4 — 4aa759ef3dfb7c25f3b80b7b5ba49cb904dff22f8bcc081b14d0f3ecfa57339e (frozen reference; ORIGINAL side never changes)
- codex/lens-motion.md 72abfda9… · lens-purity.md 41468d15… · lens-readability.md 24a186c5… · lens-reusability.md 090dfd45… · lens-timing.md a263910a… (all baseline ✓)

## Post-overwrite re-verification (A-C004-1)
Owed after the working file's first overwrite — recorded in CP1 checks.
