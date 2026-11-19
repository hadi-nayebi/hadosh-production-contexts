Readability: **88/100 — passes this lens**, with pixel verification still outstanding.

The dates lead clearly: 46px numerals dominate the 15px month and 14px weekday text. Cream pages separate strongly from teal, and the recorded contrast supports readable calendar text. The supplied fit table shows horizontal clearance for every default string.

Deductions:

- **−7 — Hold scaling reduces small text below the stated floor.** `render()` scales the entire stage to 0.90. Bill kicker/body text therefore displays at **9.9px**, the bill title and “Funding expires” at **10.8px**, and weekdays at **12.6px**. The table’s 11px minimum omits this transform. Cure: enforce the minimum at the final scale; use at least 13px before scaling for an effective 11px floor.
- **−5 — Fit evidence estimates widths rather than measuring browser glyphs.** The table repeats `inkWidth()`’s character-count formula, so it is not an independent measurement of Arial/Georgia text. The tight label and bill-title rows remain pixel-unverified. Cure: measure final transformed text bounds and inspect wrapping, clipping, and legibility at 360px.

BODY-WRITE: none (read-only run)
SCORE: 88
