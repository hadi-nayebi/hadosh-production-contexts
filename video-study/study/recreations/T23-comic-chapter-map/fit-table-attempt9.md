# T23 attempt 9 — measured-fit leg (guard-measured-fit, on the NEW source)
Source sha256: 244a0c2c2f8a229bca3792d3e055cdafd1dee52a77503c2d09592f3c90f19572
Model: computeLayout + labelPolicy on the resolved default configuration.
| width | cols | panelW | panelH | header mode/px | panel 07 label | artH (modelled) |
|---|---|---|---|---|---|---|
| 240 | 3 | 66.7 | 43.0 | wrap / 11 | number-only @11.00, lines ["07"] | 21.7 |
| 360 | 3 | 106.7 | 68.8 | floor / 11 | two-line @11.81, lines ["07 · THE","DAILY STANDUP"] | 37.7 |
| 520 | 4 | 117.5 | 75.8 | floor / 11 | two-line @13.33 | 42.0 |
| 960 | 4 | 227.5 | 146.8 | floor / 20.16 | single @17.00 | 86.0 |
HIT list (1): panel 07 at 240 px falls to number-only at the 11 px floor (title not retained at the smallest priced width; retained at 360/520/960). All other rows fit at or above the floor.
PIXEL-UNVERIFIED: source-model evidence only; no render route exists in this environment.
