# T57 attempt 3 — W2 prior-evidence inventory (taken BEFORE any mutation, 2026-11-15)

Method: `sha256sum -c` against the seat's `preservation-baseline.txt` (run dir), T57 subset = 29 entries.
Result: 28/29 OK. The one mismatch is scores.md — explained, not a stop: the baseline was captured at run open and the Plan agent lawfully appended the "Attempt 3 — Plan section" scaffold to scores.md during Plan (append-only filing target; attempt-1/2 filings verified intact firsthand in the Execute agent's read). All evidence files proper match.

Key hashes (from the verified baseline):
- recreation.html (attempt-2 source) 52ea12eb3e4b188e937f05faf55821488ab8a0bc152ca7ce3e88b128068b87b9
- recreation-attempt-2.html 52ea12eb3e4b188e937f05faf55821488ab8a0bc152ca7ce3e88b128068b87b9 — content copy, distinct inode from recreation.html (4845540 vs 4728562) ✓
- recreation-attempt-1.html 519ed37ea30664630113aba12b53612031c8d9769bc293bd45e07dd092f6e646
- fit-table.md f292d579e1752d307bb0063dd486c57258b24925028b77e58af266f11ffe8b6b
- config-census.md 63c2ef2546adf0c7e801e124816bc0220f2ef596b154411d90577b090642dfcd
- build-record-attempt2.md f26f63212728afc40823faaf0943b9622575aa5a1f52462f238d09e97a416ce7
- build-record.md 20ac8b3fe3a4f654f26a0e256456f08aef59ac06846ffc19c63c06c0b260a5cd
- comparison.html e495bc88f0e93a88fbfa84ccc7028c5692a0e7bd3e3b11dec1762274b674ccf7
- All attempt-1 + attempt-2 codex payloads/returns: OK per sha256sum -c (15 files).

Comparison ORIGINAL chain (snapshotted before any comparison edit):
- segment.mp4 sha256 c1f0f75813f00d30a36fea1b4cc53a22bea0b4739ad02d9fe06ffad2b1deb53e (8,911,248 bytes; referenced, not copied — hash is the snapshot)
- ORIGINAL side block in comparison.html (label + video element, 196 chars) sha256 2f79543b6bfc77f658b2df701941bf77699989090c09fdb0b3ceb6f6ae5a4f44 — post-edit verification compares this block, since the recreation-side label may change.

Create-once snapshot copies in this directory: fit-table-attempt2-copy.md · config-census-attempt2-copy.md · build-record-attempt1-copy.md · build-record-attempt2-copy.md · comparison-attempt2-copy.html.
Attempt-3 outputs take attempt-tagged paths only: build-record-attempt3.md · fit-table-attempt3.md · config-census-attempt3.md (un-tagged legs never overwritten).
