# T92 attempt 3 — payload manifest (A-C010-1c) + anchor scan (A-C005-2 / A-C008-4)

Filed BEFORE any lens firing. Bound build: recreation.html sha256 `bfea416b49f0dca74db065ccf62f268f5b25d362f00943af045284fff320f70d` — identical in all five payloads.

## Allowlist (the ONLY content in each payload)
1. Standing header (consumer + decision priced · working record · body-write line) carrying the BAR (average >= 85 AND no lens < 70) and the attempt number — never a prior score or target.
2. The lens instruction for that lens (the attempt-2 instruction text, unchanged in substance).
3. The Binding line (the bound sha + payload-only read scope).
4. Neutral technique facts (catalogue mechanics + the two-act schedule basis with both bases printed — Act 1 measured, Act 2 allocation).
5. The score-blind build record (construction, measurements, own-check packet — check names and results only, no cure interpretation, no scores, no verdicts).
6. The full recreation.html source of the bound build (comments included in the scan below).

## Exclusions (verified absent)
scores.md (content) · RUN.md · the plan · prior lens returns · prior scores or sums in any form · per-lens seat targets · cure-to-lens commentary · amendment labels.

## Anchor scan (over ALL final payload bytes, after every included record existed)
Scanned tokens: prior averages and sums (82.2 · 82.4 · 411 · 412), per-lens target figures, "attempt 2", cure codes (C1–C6 as labels), amendment labels (A-C…), "plateau", "WHY", "delta", "scores.md", "RUN.md", "cure", "82".
Result: CLEAN, with three adjudicated benign hit classes, each identical in kind to the attempt-2 payloads:
- "cure" ×1 per payload — the standing header's generic consumer line ("exactly what a next attempt must cure"); no cure content.
- "82" ×2 per payload — inside the measured source citation "ARXIV 2511.02824" (content data, in the neutral facts and in the source's CONFIG); not a score.
- "scores.md" ×1 per payload — the standing header's working-record line naming where returns file; no scores content.
No other token hit in any payload. The recreation source's own comments were scanned as payload surface (A-C008-4): 19 comments, no cure wording, amendment labels, cross-technique tags or score references (the two HUD comments were rewritten in neutral wording at stage S1; the new validation/bounds code carries no commentary).

## Payload hashes (frozen at filing, before firing)
- payload-motion.txt — sha256 3d9b3c0af53651f26941daef20cc27dc9871cd6598c826f13774b29c59dac768 (46,309 bytes)
- payload-timing.txt — sha256 15e12693b85a36f389043647b0a7a9f6b53095515f05ab7cd301700cb5f8057b (46,175 bytes)
- payload-purity.txt — sha256 fa86c60f1fec52e0cd069dac1cc08617f083066c784d0ab616fdc78f0dcc0c79 (45,862 bytes)
- payload-reusability.txt — sha256 3a4fb6d503d7457b669c9be02ecd5a9a9e5af8f7b7f0e06b65bdd5d445b577a7 (46,110 bytes)
- payload-readability.txt — sha256 4d8f138af9c0ee6220b6c0cd229ca2e255c5566685c57b95b55adb953f99e79a (46,164 bytes)

## Firing route (A-C019-2)
FED route only: each payload file is the sole stdin stream into `~/workspace/codex-local/node_modules/.bin/codex exec -` with `-o <create-once return path>`; working directory outside the artifact directory; no --add-dir; no workspace read access for lens sessions. Per-session read scope is recorded in build-record-attempt3.md after firing.
