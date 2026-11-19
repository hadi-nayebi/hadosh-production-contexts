# CP1 — Stage E1 (measured fit) own-check output · T20 attempt 2

Checkpoint source: CP1-source.html — sha256 e20c31ba4bb70042066bcccc2ff71b73bab45f974fffeb9808626f86d4db6dc6 (byte-equal to working file at filing; inode 5150785 ≠ working 4433681 — content copy ✓).
Harness: own-check-harness.js stage E1 — SUMMARY pass=20 fail=0 skip=0.
Raster label: SYNTHETIC pipeline raster (5x7 bitmap stub). Actual browser raster: BLOCKED (no browser binary) — plan-review finding 2 disposition.

Key measured rows (synthetic pipeline, post-fit, specimen):
- Fitted font 74px (width axis bound: line 3 ink width 362.6 ≤ 368 = sampleW × sampleFitRatio); fitStatus ok.
- Per-letter owned-cell ink rows: L8 O8 O8 K8 W8 H8 A8 T8 I8 C8 A8 N8 D8 O8 !7 — min 7 rows; ink cols: letters 5–7, I 2, ! 1 (narrow by construction).
- Stems present: L, H, T, I, K ✓ · Counters preserved: O, A, D ✓ (enclosed unlit cell inside bbox).
- 360px min glyph ink height = 7 rows × 3.46px cellH × 0.76 litSize = 18.4px ≥ 11px floor ✓.
- Long line (26 chars, 1 line): fitted 20px, fitStatus ok, width respected. Five lines: fitted 92px, per-line ink height 92 ≤ band 96 ✓.
- Marquee (specimen, 360px stage): measured width 125.5px ≤ 136.8px strip at fitted font 11px (floor) ✓. Long marquee (63 chars): over-capacity diagnostic fires ✓ (no silent overflow).

A-C004-1 post-overwrite re-verification: recreation-attempt-1.html sha still ff805c93e65a67ffc5e153cf82391ad1ef35cb03eb01dfb7bc9d2eff005e9987 after the working file's first overwrite; inodes differ ✓.
Threshold refinement recorded: ink-cols assertion is letters ≥3, narrow glyphs (I/!) ≥1 — a flat ≥3 priced punctuation's true geometry as a defect.
