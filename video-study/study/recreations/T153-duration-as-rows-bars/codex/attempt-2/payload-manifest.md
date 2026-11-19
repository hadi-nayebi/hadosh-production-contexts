# payload manifest — T153 attempt 2 · Cycle 019 Wave 18 (A-C010-1c, filed BEFORE firing)
Scored source: recreation.html SHA-256 8330ec1911d712b8afca63d560d340905f7ca9771450359417e258fc0368416b (snapshotted at checkpoints/stage-2-source.html; identical sha bound to all five payloads).

## Allowlist (the ONLY content in every payload)
1. The standing header (consumer + decision priced · working record · BODY-WRITE line · scale line "Scores are integers from 0 to 100") and the per-lens instruction from guards/codex-rescore-wave.md's five lenses.
2. Neutral technique facts (packet facts + census states + this build's schedule description, allocation status disclosed neutrally).
3. The §2.3b PAYLOAD version of the both-bases statement ONLY (plan §2.3b, verbatim: Schedule 1 times · Schedule 2 census states · the completion/hold question stated as unresolved). Present exactly once per payload (grep-verified: "Schedule 1 (attempt-1 build)" ×1, "Schedule 2 (census states" ×1, "unresolved in the packet" ×1 in each of the five payloads).
4. Neutral own-check packet: the final own-check suite's check names + PASS results (checkpoints/stage-2-checks.txt content), purity grep result, pre-scoring leg HIT counts, stage-sizing note, PIXEL-UNVERIFIED note.
5. The neutral recreation source itself (full text; its comments carry no cure/amendment wording — A-C008-4 scan clean: the only comment is the neutral overflow-derivation note).

## Exclusions (none present in any payload)
RUN.md · scores.md · prior returns · target scores · the prior average (81.6) and every prior lens score · cure commentary · cure→check mappings · and the §2.3a SEAT version of the both-bases statement in whole or in part (including its "(timing 45)" and every evaluative phrase: SUPERSEDED / GOVERNING / "satisfied neither" / "retained basis" / Basis A / Basis B labels).

## Anchor scan (assembled payloads, before firing)
grep over all five instr-<lens>.txt payloads for: "81.6" → 0 files · "SUPERSEDED|GOVERNING|Basis A|Basis B|retained basis|satisfied neither|timing 45|(timing" → 0 files (scan exit 1 = no match). Numerical AND qualitative anchors, filenames/labels/source comments included: filenames are instr-<lens>.txt (neutral), labels name the bar only (average ≥85 / minimum ≥70 — the standing bar, not a prior score). SCAN CLEAN — firing authorized.

Payload files (create-once): instr-motion.txt (11495 B) · instr-timing.txt (11583 B) · instr-purity.txt (11479 B) · instr-reusability.txt (11533 B) · instr-readability.txt (11594 B).
Firing form: local Codex binary, fed review — guard lens instruction + payload in ONE stream via cat | codex exec - with NO stdin field; return via -o to a /tmp path first, then copied create-once to lens-<lens>.md here.
