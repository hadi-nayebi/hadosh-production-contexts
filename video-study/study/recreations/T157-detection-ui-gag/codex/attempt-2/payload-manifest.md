# payload-manifest — T157 attempt 2 · Cycle 019 Wave 18 (filed BEFORE any lens firing; A-C010-1c + A-C005-2 + A-C008-4)
Scored source: recreation.html SHA-256 65826bd6e0a298dd102749edec6f27a1ac2ea5e91e4dfdbe704e6545338f8b49 (15,446 bytes), snapshotted at codex/attempt-2/source-snapshot.html (content copy, hash equal, inode 5428619 != working 5307217). Every payload below binds this SHA in its header; all five returns must bind the identical SHA.

## Allowlist (exact — each payload is header + these components only)
1. Standing header (per lens): consumer (practice §5 Verify, this lens) + decision priced (tier at the BAR) + scale line ("Scores are integers from 0 to 100") + working record + the bound SHA + the closing SCORE/BODY-WRITE requirement. Payload headers name the BAR ONLY (average >= 85 AND minimum >= 70) — never a prior average or any prior score (Cycle-018 D-PAYLOAD-ANCHOR lesson).
2. Lens instruction: the standing lens text for that lens, verbatim from the instrument's prior payloads (motion / timing / purity / reusability / readability). Note: the readability lens's own standing rubric names its separation requirement (scope reserve <= 0.5, badge/banner full foreground) — that is the instrument's requirement text, present in the lens instruction itself; it carries no prior score and no attempt-specific cure directive.
3. Neutral-facts packet (separately identified permitted destination, per the Cycle 019 plan §7 V8): codex/attempt-2/neutral-facts.md — technique mechanics, the defined time origin (recreation t=0 allocation basis), the recreationMs = videoMs - 500 mapping with the census-anchor mapping table, the census constraints (two census states), the allocated-vs-observed onset distinction, the final build's harness census states, count assertion, and the two pre-scoring legs' HIT counts. It EXCLUDES prior scores, cure interpretations, and any prior return's endorsement of the allocation.
4. Neutral own-check packet: codex/attempt-2/own-check-packet.md — check names and results only, no cure interpretation.
5. Neutral recreation source: the final recreation.html verbatim (its comments scanned under A-C008-4: no cure codes or amendment labels present; no neutralization needed).

## Exclusions (never in any payload)
RUN.md · plan-T157.md · scores.md (content) · prior lens returns · prior scores/averages/minima · target/aim scores · cure-to-lens commentary · checkpoint files · this manifest.

## Assembled payloads (create-once, preserved before firing per A-C003-1)
codex/attempt-2/instr-motion.txt (22,494 bytes) · instr-timing.txt (22,492) · instr-purity.txt (22,399) · instr-reusability.txt (22,407) · instr-readability.txt (22,419).

## Anchor scan of the assembled payloads (numerical AND qualitative, filenames/labels/comments included)
Scanned all five assembled payloads for: the prior average (76.8 in any decimal form), prior lens scores as filed values, "prior average / previous attempt / attempt 1" phrasing, delta phrasing ("does not beat", "beat <number>"), cure codes (K1-K7), amendment labels (A-C0xx), and payload-anchor phrasing. RESULT: CLEAN — the only matches are the standing header's own bar line (average >= 85 AND minimum >= 70), the scale line, and the required closing-format line naming "SCORE: <integer>"; the bound SHA appears once per header. Filenames are neutral (instr-<lens>.txt). The source's comments carry no anchors (see build record V6).
