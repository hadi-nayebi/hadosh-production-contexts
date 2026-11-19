# S5a — Probe: horizontal allocation ONLY (branch from the S4 checkpoint)

Change: layout.listWidthPct 62.5 → 70.0 · layout.numeralWidthPct 31 → 26.5.
Measured on the probe branch (all other geometry at S4 values):
- @360: column 252.00 px; worst default title need 249.15 px → FITS
  (+2.85 px). @390: column 273.00 px; worst need 269.81 px → FITS (+3.19 px).
- Isolated residue: the two-digit numeral at the unmoved scale ratio
  needs 97.19 px vs the narrowed 95.40 px column @360 → does NOT fit on
  this probe alone; that effect belongs to S5b, not to this change.
Effect record: horizontal-fit (list side) — PASS, isolated.
Checkpoint: S5a-source.html sha256 b7cab6a8baaf3e74d73439147f87efa225a35e12f280e99ba17995aa8caeb29a.
