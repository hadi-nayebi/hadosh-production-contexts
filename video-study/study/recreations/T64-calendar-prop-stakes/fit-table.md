# T64 — measured-fit leg (guard-measured-fit) · final build sha256 1a713024…
Method: ink bounds computed from the build's own fit geometry at the 360 px stage (ink width = chars × px × CONFIG charWidthFrac 0.58 / boldCharWidthFrac 0.62, the same fractions fitPx() enforces at build time; ink height = rendered font px). Post-fit values are the harness-observed font sizes on the final build (node harness, stubbed DOM, real inline script). Floor: ~11 px ink height. Re-run on the post-wave-cure build (props enabled per the interim timing cure; see build-record).

| # | Element | Container | Measured ink (w × h) | Container inner | Margin (binding side) | Verdict |
|---|---|---|---|---|---|---|
| 1 | pages[0].month "Dec" @15px bold | header strip 118×32 | 27.9 × 15 | 106 wide | 78.1 | fit |
| 2 | pages[0].day "1" @46px bold | page body 118×102 | 28.5 × 46 | 106 wide | 77.5 | fit |
| 3 | pages[0].weekday "Tuesday" @14px | page body 118 wide | 56.8 × 14 | 106 wide | 49.2 | fit |
| 4 | pages[0].label "The vote" @13px | label strip 118×18 | 60.3 × 13 | 110 wide | 49.7 | fit |
| 5 | pages[1].month "Dec" @15px bold | header strip 118×32 | 27.9 × 15 | 106 wide | 78.1 | fit |
| 6 | pages[1].day "11" @46px bold | page body 118×102 | 57.0 × 46 | 106 wide | 49.0 | fit |
| 7 | pages[1].weekday "Friday" @14px | page body 118 wide | 48.7 × 14 | 106 wide | 57.3 | fit |
| 8 | pages[1].label "Funding expires" @12px (fitPx from 13) | label strip 118×18 | 104.4 × 12 | 110 wide | 5.6 | fit (tightest row) |
| 9 | props bill kicker "A BILL" @11px bold | bill sheet 300 wide | 40.9 × 11 | 252 wide (billW − 2×billPadPx) | 211.1 | fit |
| 10 | props bill title "Making continuing appropriations" @12px (fitPx from 13) | bill sheet 300 wide | 238.1 × 12 | 252 wide | 13.9 | fit |
| 11 | props bill body lines (3) @11px, longest "United States of America in Congress" | bill sheet 300 wide | 229.7 × 11 | 252 wide | 22.3 | fit |
| 12 | props coin face "$" @14px bold | coin disc Ø30 | 8.1 × 14 | 26 wide | 17.9 | fit |

Vertical fit (enforced in validate): day 46×1.15 + weekday 14×1.3 = 71.1 ≤ page body height 102. Bill: propsTopPx 190 + billH 96 = 286 ≤ stageH 300. Coin: left 325 + Ø30 = 355 ≤ 360; top 246 + 30 = 276 ≤ 300 (bounds validated at initialization).
Hierarchy (measured): day 46 : month 15 : weekday 14 : label 13/12 : bill title 12 : body 11 — a real size hierarchy, not hue-only. ✓
Floor check: smallest rendered subject ink height = 11px (bill kicker + body lines) ≥ ~11px floor. ✓
Swapped build (exact §2b values, harness, cured build): all swapped strings fit at unchanged or fitPx-adjusted sizes; checkpointsOk = true. ✓

**HIT list: EMPTY (0 hits on rendered subject text elements).**
