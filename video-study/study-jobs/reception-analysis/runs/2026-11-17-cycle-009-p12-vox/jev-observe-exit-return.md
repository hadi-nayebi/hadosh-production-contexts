**Verdict: ADVANCE-WITH-GAPS**

**Dimension scores:**
- packet-state certainty: 0.90
- source coverage: 0.95
- absence completeness: 0.95
- separation-at-source: 1.00
- freshness: 0.95

**Named gaps (bounding Plan):** (1) Shares — NOT ON FILE, other routes unverified; (2) Comment text — NONE ON FILE, no `comments` field in source.info.json, retrieval is an Execute-gated test; (3) Comment time-references to specific/late moments — UNASSESSED pending comment retrieval; (4) Subscriber base at posting (2020-10-31) — NOT ON FILE, capture-time base 12,700,000 (2026-11-17) must be named as a capture-time ratio only; (5) Velocity — NO SECOND CAPTURE ON FILE, any capture 2 is a same-day ~6 h window; (6) True retention — NOT ON FILE, heatmap (100 segments, present) is a labeled replay-intensity proxy only, never retention; (7) Repost/adjacent surfaces — NONE ON FILE.

**Exemplars: 4/4** — (a) ADVANCE-WITH-GAPS as expected; (b) ADVANCE as expected; (c) RETURN-TO-OBSERVE / CRAFT-REJUDGED-IN-OBSERVE as expected; (d) RETURN-TO-OBSERVE / SILENT-ABSENCE as expected.

**Reasoning:** The Observe record reads Packet #12 this cycle, states it LANDED (digest.md + digest.pdf, footer, §8 "Reception link" quoted verbatim, no reception.md verified), and cites craft in digest.md §§1–7 by pointer only with no restatement or re-judging, satisfying separation at 1.00. Its inventory traces every displayed figure to a captured source read this cycle — views 8,403,552, likes 156,874, comment_count 15,000 (flagged as the extractor's displayed round figure), and upload 2020-10-31 cross-checked between post.json and source.info.json, subscriber base 12,700,000 from source.info.json, and the heatmap inventoried as a proxy distinct from retention — with freshness fixed by the 2026-11-17 capture date and the epoch 1794952784 (2026-11-17T21:59:44Z) stamp, incorporating both Codex-observe corrections (timestamped-comment candidate class and "True retention data — NOT ON FILE" wording). All non-existent data classes are named as absences in the main body with routes tested, and owner-only needs are printed as NONE with routing none required, so no floor is triggered; the named gaps above are genuine data limits that bound Plan rather than defects requiring a return to Observe.
