# S5 — Geometry assembled (Route D + R-H1) · T02 attempt 3

Assembled from the four probes, each branched from the common S4
checkpoint with its own filed effect record: S5a horizontal allocation
(list 70.0% / numeral 26.5%) · S5b numeral scale (0.32) · S5c vertical
retention (Route D: lineHeightRatio 1.1, window 11%–91%, visibleLines
13) · S5d floor decision print (floor stays 11 px; effective ceiling
11.13 px, horizontal-bound). Route binding per S0: Route C falsified
on displayed text bounds (first-row text intersects the prompt band);
Route D's four-state text-bounds check passes.

Own-check output (group S5 on the assembled source): **26 PASS,
0 FAIL** — Route D + R-H1 CONFIG values · 13-row fit at 360/390 px
(157.30 ≤ 162.00 · 170.34 ≤ 175.50) · font at/above the 11 px floor ·
all 39 default titles fit individually at both widths · synthetics
33/34/35/36 fit · the 40-char synthetic is an expected-overflow
CONTROL (275.55 px need > 252.00 px column @360, detected, never
counted as a fit) · two-digit numeral fits its column at both widths ·
displayed text bounds clear the prompt band (+1.07%H) and the caption
band (+0.79%H) at both widths · retention at the evidenced checkpoints
under full load: at 3000 ms the visible window is rows 8–20 (13 rows),
at 6000 ms rows 25–37 (13 rows).

Checkpoint: S5-source.html sha256 b5d182491d28232f7f9f2718f2622c9d6d8dc51578b75dd69714bdd11d64316b.
Effect records: horizontal-fit PASS (S5a isolated) · numeral scale
PASS (S5b isolated) · retention PASS (S5c isolated) · floor PRINTED
(S5d). Lens-score movement for the geometry bundle prints BUNDLED
except where these probe records isolate it.
