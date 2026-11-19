# S0 — Preservation + baseline + specimen re-observation · T02 attempt 3

## Preservation (plan §3, before ANY mutation)
- Inventory: 27 files (find, AGENTS.md excluded as house files) listed in
  baseline-attempt-3.sha256 — machine-written via sha256sum redirect in a
  write-first invocation; validation at capture: 27 entries, every hash
  exactly 64 hex chars, 0 bad.
- recreation.html sha256 = 11b02a33e388c5705bf620e90f0b4b4620ab64ce659e7a17fc47e9b638354757
  (matches the attempt-2 filed final source).
- segment.mp4 is inventoried in the baseline AND bound explicitly as the
  comparison's ORIGINAL asset (comparison.html line 31 references it
  directly for its ORIGINAL side).
- Preservation copy: recreation-attempt-2.html — CONTENT copy of the
  attempt-2 source, sha equal to the baseline (11b02a33…354757),
  inode 7347240 ≠ working file inode 4297944. Create-once: did not exist
  before this stage.
- S0 checkpoint copy: checkpoints-attempt-3/S0-source.html, inode 7347745
  (≠ working file), sha frozen = baseline recreation.html sha.
- scores.md prefix preservation basis: byte length 13610, sha256 of the
  full prior file a4e128095ffd62d018fcacc2c37f9bcd801bfdcbb58809d5c24135fdfd01a8a4
  (== baseline entry). Post-append check recomputes length + prefix hash.
- comparison.html references the recreation by interface only
  (iframe src="recreation.html" + segment.mp4); no other external assets.
- Attempt-2 baseline anomaly inherited as dated note (never rewritten):
  its codex/lens-purity.md entry is a truncated 56-hex string; the file's
  actual sha is recorded in scores.md Attempt 2.

## Specimen re-observation (plan §4 Stage-0 binding; segment.mp4, ffprobe:
## h264 1916×1078, 8.000 s; frames extracted and viewed firsthand)
Time origin per plan §4 amendment: recreation t=0 == segment start
(source ≈0:13.5). Filed observation: the evidenced counts land +500 ms
on the segment clock (count 20 at segment 3.5 s, count 37 at 6.5 s,
count 39 + caption at 7.0 s), consistent with comparison.html's own
−500 ms slaving offset; the filed anchor table itself is NOT moved
(bit-identity guard, plan §1 C-R2).
- Opening (segment 0.0 s): pre-window scene; the directory command is
  fully displayed from the segment's first window frame (3.0 s frame
  shows the full command, count 17 in progress).
- Count-20 frame (segment 3.5 s): 13 rows visible (specimen rows 8–20),
  prompt above the list with clear separation (prompt glyph band
  ≈12–17% of frame height; first row text begins ≈32% in that frame's
  layout — the specimen's own window sits lower than any priced route;
  the binding fact is separation, not the specimen's exact window).
- Count-37 frame (segment 6.5 s): 13 rows visible (specimen rows 25–37),
  same separation.
- Final hold (segment 7.0 s): count 39, 13 rows visible, caption text
  landed ("0 video editors" beside the numeral label in the specimen's
  own layout; the recreation's standing bottom caption construction is
  not a premise of this attempt — no cure restructures caption
  placement, and its placement was priced at 100/100 by the timing and
  purity lenses; recorded as an observation, no premise amendment).

## Route binding (displayed TEXT bounds, plan §4/C-M1 amendments;
## recreation bands: prompt ≈3%–10.2%H, caption ≈89.2%–97%H)
- Route C (lh 1.2, window 5%–95%): first visible row's text bounds
  5.54%–10.97%H intersect the prompt band (ends 10.2%H) at the count-20
  and count-37 states → C does NOT pass the four-state text-bounds
  acceptance; the specimen binds prompt-above-list with separation, so
  C is falsified as construction (plan §4 Stage-0 binding).
- Route D (lh 1.1, window 11%–91%): first row text 11.27%–16.70%H
  (clears prompt band by 1.07%H); last row text 82.97%–88.40%H (clears
  caption band by 0.80%H); opening state has no visible rows; D's
  four-state text-bounds check PASSES → **Route D binds**
  (lineHeightRatio 1.1 · listTopPct 11 · listBottomPct 91 ·
  visibleLines 13). Box margins: +4.70 px @360, +5.16 px @390.
- Route E: not bound (D passes); its pre-filed arithmetic stands unused.
- Floor re-price under D (full print at S5d): vertical ceiling
  162.00/(13×1.1) = 11.34 px; horizontal ceiling (R-H1) 11.13 px;
  effective ceiling 11.13 px → 11 px stands as largest whole-pixel floor.

S0 closes: no source edit exists before this filing.
