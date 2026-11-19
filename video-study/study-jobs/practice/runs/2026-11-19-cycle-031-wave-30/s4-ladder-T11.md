# T11 attempt 6 — S4 rate-cap feasibility ladder (filed BEFORE S4 binds)

Basis: attempt-5 timeline held as the ladder's constraint basis (card durations and starts are the credited cadence construction; the Plan's deadline arithmetic is filed on card #1115 starting at 6000 ms). Variables priced: per-card counter-span allocation (through the timeline derivation, capped by the configured counter duration 1400 ms), stamp onset up to its deadline, whip timing inside its card. Variables that may NOT move: the three state anchors (2500 / 6500 / 7500 ms), the 130 ms slam, the >=100 ms settle-to-stamp gap floor, the 1000 ms counter-span floor.

Card identity at each anchor: 2500 ms -> card 0 (#1111), stamp HELD. 6500 ms -> card 3 (#1115), NO stamp. 7500 ms -> card 3 (#1115), stamp HELD.

Card 3 (#1115, 520->800, delta 280) deadline arithmetic: start 6000 ms; stamp HELD at 7500 requires slamEnd <= 7500, so onset <= 7500 - 130 = 7370; settle-to-stamp gap >= 100 requires counter settle <= 7270; maximum travel = 7270 - 6000 = 1270 ms; minimum achievable peak rate = 280 / 1.270 = 220.47 digits/s. Stamp hold/hide deadlines at the bound onset: onset 7370, slamEnd 7500, holdEnd 7750, hideEnd 7850 (= card end 8000 - whip/2 150).

Ladder (stamp offset fraction -> card-3 onset / span / peak ones rate):
- 0.630 (attempt-5 value): onset 7260, span 1160, rate 241.38
- 0.660: onset 7320, span 1220, rate 229.51
- 0.685: onset 7370, span 1270, rate 220.47  <- deadline-bound; the lowest feasible value
- >0.685: onset cannot pass 7370 without the stamp failing HELD at 7500; no further gain exists inside the permitted variables.
Cap 160 check: needs 280 / 0.160 = 1750 ms of travel > 1270 ms available — INFEASIBLE under the permitted variables (as the Plan filed; cap 160 is not bound).

Card 0 at the bound fraction 0.685: onset = min(0.685 x 2800, 2420) = 1918, slamEnd 2048, holdEnd 2550 — stamp HELD at 2500 holds; card-0 span stays 1400 (the onset-gap cap 1818 does not bind). All other cards' spans are unchanged by the fraction.

Bound cap filed: 220.47 digits/s (280 / 1.270). Resulting spans [1400, 1100, 1400, 1270, 1400]; resulting ones rates [106.43, 109.09, 100.00, 220.47, 0] digits/s. Window numbers per card after binding (card-end margin / actual pre-whip readable dwell): card 0: 1400 / 1250 · card 1: 300 / 150 · card 2: 400 / 250 · card 3: 730 / 580 · card 4: 600 / 450 (ms).

UNRESOLVED-LEGIBILITY RECORD (filed here, carried into WHY's PT-ROLL slot): the lowest feasible cap, 220.47 digits/s, remains inside the travel-rate region the attempt-5 readability return prices as unreadable during travel (its priced range was 100-241.4 digits/s). Rate shaping inside the current anchors therefore cannot reach a rate the record supports as legible; this outcome is a constraint-set result, not a construction miss — S4 binds at the measured bound cap and the slot files it as such.
