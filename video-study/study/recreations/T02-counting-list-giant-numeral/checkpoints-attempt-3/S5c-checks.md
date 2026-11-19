# S5c — Probe: vertical retention ONLY, Route D (branch from S4)

Change: type.lineHeightRatio 1.3 → 1.1 · layout.listTopPct 14 → 11 ·
layout.listBottomPct 84 → 91 (visibleLines stays 13).
Measured on the probe branch:
- @360: rowH 12.10 px, window 162.00 px, 13 rows need 157.30 px →
  effectiveVisible 13 (+4.70 px). @390: rowH 13.10 px, window
  175.50 px, need 170.34 px → 13 (+5.16 px).
- Displayed TEXT bounds (em box centred in the line box): first row
  text top 11.27%H ≥ prompt band end 10.2%H → CLEAR (+1.07%H); last
  (13th) row text bottom 88.41%H ≤ caption band start 89.2%H → CLEAR
  (+0.79%H). Same fractions at both widths.
- Isolated residue on this probe: list titles still overflow the
  unmoved column — S5a's effect, not this change's.
Effect record: retention window — PASS, isolated (13 rows, bounds clear).
Checkpoint: S5c-source.html sha256 a655421bb2b7bc949eb339d9379f1de445cfba257460f94c759320172d02ef53.
