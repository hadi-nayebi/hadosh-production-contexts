# S5b — Probe: numeral scale ONLY (branch from the S4 checkpoint)

Change: numeralSizeRatio 0.3333 → 0.32.
Measured on the probe branch (columns at S4 values):
- @360: two-digit numeral width 93.31 px vs 111.60 px column → FITS.
  @390: 101.09 px vs 120.90 px → FITS.
- Combined with S5a's narrowed column (95.40 px @360 / 103.35 px @390):
  93.31 ≤ 95.40 (+2.09 px) and 101.09 ≤ 103.35 (+2.26 px) → the S5a
  residue is cured by this change, in combination.
- Isolated residue on this probe: list titles still overflow the
  unmoved 62.5% column (249.15 > 225.00) — that effect is S5a's.
Effect record: numeral scale — PASS, isolated.
Checkpoint: S5b-source.html sha256 c46d4b5211dfe5c4e1d1bd4a7238948095011a009bb7ecc5e33858f0ecf52701.
