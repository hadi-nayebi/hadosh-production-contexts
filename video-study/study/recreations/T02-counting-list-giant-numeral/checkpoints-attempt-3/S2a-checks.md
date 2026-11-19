# S2a — Short-list completion policy ONLY · T02 attempt 3

Policy: ANCHOR-PRESERVING COMPLETION — derivation keeps ALL anchor times
of the validated basis; counts are re-derived per anchor; intermediate
counts are capped at totalLines − 1 and ONLY the final anchor carries
the terminal count, so completion is the final anchor time (7000 ms in
the default basis) for every line count ≥ 1 and the caption point does
not move. Zero-count anchors are retained as time anchors (count
plateaus permitted in derived tables only, under the derived validator).

Own-check output (group S2a on the S2a source): **22 PASS, 0 FAIL** —
line counts 1, 2, 3, 50 each: derived table passes the DERIVED
validator · all 4 anchor times kept · lineTimeMs(last) == 7000 ·
no anchor before the final carries the terminal count ·
countAtMs(6999) < total · countAtMs(7000) == total. Default 39-line
table bit-identical to the prior attempt's filed table. 2-line derived
table filed verbatim in the suite output: (0,0) (3000,1) (6000,1)
(7000,2).

Checkpoint: S2a-source.html sha256 b1a75133587c72a6818213d2aba3bd7733c6bf50ee0514c21a26cfcb5dcbd6e3.
Effect record: short-list policy class — PASS per assertion above.
