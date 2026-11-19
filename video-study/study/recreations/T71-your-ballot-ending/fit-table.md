# T71 — measured-fit leg (guard-measured-fit) · final build sha cffa1da8…
Method: post-fit geometry from the build's own measurement function (estTextWidth = chars × px × CONFIG.type.charWidthFrac 0.58, the same function fitChoicePx uses at runtime) at the 360 px stage. Ink height = set font px (DOM text, no scaling). Container: card inner width = cardW 252 − padX 36 = 216 px; choice text area = 216 − ovalW 26 − ovalGap 10 = 180 px.

| Element | Container | Measured ink width | Container bound | Margin | Ink height | Verdict |
|---|---|---|---|---|---|---|
| org "SENATE DEMOCRATIC CAUCUS" (24 ch, 11 px) | card line, 216 px | 153.1 px | 216 px | 62.9 px | ~11 px | PASS (at the ~11 px floor — marginal, printed) |
| office "Leader" (6 ch, 21 px) | card line, 216 px | 73.1 px | 216 px | 142.9 px | ~21 px | PASS |
| date "Dec. 1" (6 ch, 12 px) | card line, 216 px | 41.8 px | 216 px | 174.2 px | ~12 px | PASS |
| choice 1 "Chuck Schumer" (13 ch, 15 px) | choice row, 180 px | 113.1 px | 180 px | 66.9 px | ~15 px | PASS |
| choice 2 "Chris Van Hollen" (16 ch, 15 px) | choice row, 180 px | 139.2 px | 180 px | 40.8 px | ~15 px | PASS |
| prompt "Your ballot — pick one" (22 ch, 13 px) | card line, 216 px | 165.9 px | 216 px | 50.1 px | ~13 px | PASS |
| SWAP choice "Option Gamma" (12 ch, 15 px) | choice row, 180 px | 104.4 px | 180 px | 75.6 px | ~15 px | PASS |
| SWAP prompt "Swap ballot — choose" (20 ch, 13 px) | card line, 216 px | 150.8 px | 216 px | 65.2 px | ~13 px | PASS |

Hierarchy (measured): office 21 > choice 15 > prompt 13 > date 12 > org 11 — size hierarchy real, not hue-only. Card 252 px ≤ stage 360 px (54 px side margins); backdrop 330 px ≤ 360 px.
HIT LIST: **0 hits carried.** Note (not a hit): org ink height sits exactly at the ~11 px floor; any future orgPx reduction is a HIT by construction.
