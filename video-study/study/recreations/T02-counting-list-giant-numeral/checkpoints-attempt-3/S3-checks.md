# S3 — Strict numeric parsing + anchor-count guard · T02 attempt 3

Construction: one strict parser (full-string grammar: optional sign,
digits, optional fraction/exponent; rejects empty, junk-suffixed, hex,
Infinity/NaN spellings, and non-finite magnitudes incl. the 400-nines
class) replaces the loose numeric parsing on every override path
(speed, checkpoint2). Fractional checkpoint times parse as their exact
number (no truncation). The checkpoint2 override asserts at least
three anchors (indices 0/2 present) before reading neighbours; with
fewer anchors it is rejected with a named warning, never a throw.
Coupled-override rule: a lawful edited anchor's TIME survives count
derivation verbatim; only its count is re-derived.

Own-check output (group S3 on the S3 source): **18 PASS, 0 FAIL** —
parser classes (junk, empty, hex, Infinity/NaN spellings, 400-nines,
fractional-exact, valid forms, non-string) · override route (speed junk
rejected, speed fractional accepted, checkpoint2 junk rejected with the
default time retained, checkpoint2 3500.5 accepted exactly, 400-nines
rejected) · R-2 (one-line swap + valid fractional checkpoint2: the
fractional time survives verbatim in the derived table, the table
passes the DERIVED validator, the single line completes at 7000 ms) ·
R-4 (coupled survival at the default count and at a 3-line swap; the
3-line derived table is filed in the suite output: (0,0) (3500.5,2)
(6000,2) (7000,3)).

Checkpoint: S3-source.html sha256 cdbe68b04edb973b7f189e01c44532f69a012bde8c97780d7b8ce0e25c3e65d3.
Effect record: strict-parsing class — PASS per assertion above.
