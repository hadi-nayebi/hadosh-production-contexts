# T23 attempt 10 — measured-fit leg (guard-measured-fit, on the NEW source)
Source sha256: 79f89c062a90ef3224b9caa124645a66a4cbaf1fc7f5210e00b9494e89ce352d
Model: computeLayout + labelPolicy on the resolved default configuration. The artH column is the RESOLVED art height (band-cleared, overlap-accounted) — attempt 9's column was the fixed-fraction proxy; the method changed this attempt, so artH values are not like-for-like with attempt 9's table.
| width | cols | panelW | panelH | header mode/px | panel 07 label | artH (resolved) |
|---|---|---|---|---|---|---|
| 240 | 3 | 66.7 | 43.0 | wrap / 11 | number-only @11.00, lines ["07"] | 16.3 |
| 360 | 3 | 106.7 | 68.8 | floor / 11 | two-line @11.81, lines ["07 · THE","DAILY STANDUP"] | 26.3 |
| 520 | 4 | 117.5 | 75.8 | floor / 11 | two-line @13.33 | 29.5 |
| 960 | 4 | 227.5 | 146.8 | floor / 20.16 | single @17.00 | 112.5 |
All-panel modes (model): 240 px — all 12 number-only @11.00 (two-line height budget 22.76 px < two lines at the floor 32.5 px; filed at Stage 0 as the reproduced all-panel result). 360 px — 01 two-line @13.31, 02 single @11.81, 03 single @12.81, 04 two-line @13.31, 05 two-line @13.31, 06 single @11.00, 07 two-line @11.81, 08 two-line @13.31, 09 two-line @13.31, 10 single @11.00, 11 two-line @13.31, 12 two-line @13.31 (identical to attempt 9's model modes at 360).
HIT list (1): panel 07 at 240 px falls to number-only at the 11 px floor (title not retained at the smallest priced width; retained at 360/520/960). All other rows fit at or above the floor.
PIXEL-UNVERIFIED: source-model evidence only; no render route exists in this environment.
