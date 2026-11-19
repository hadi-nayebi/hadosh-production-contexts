# Fit table — attempt 9 (A-C008 leg 1, on the attempt-9 final source)

Measured with the stub-canvas harness (measureText width = length × fontSize × 0.6, asymmetric ink extents 0.44/0.56) at a 360 × 240 stage, on the attempt-9 final source (sha256 c7bdd713ac188769d7c8e3810c09cf1b351952abed0e20192a3098f3cdbd78bb). Fits are computed from true ink extents (per-baseline left/right bearing and ascent/descent), and the placed boxes below are the boxes the construction itself computes.

| element | ink size | box | condensed? | verdict |
|---|---|---|---|---|
| page header | 89.8 × 24.9 px at fontSize 24.9 | 99.8 × 30.2 px, placed x 81.1–170.9, y 43.6–68.6, inside region x 61.2–180.0, y 31.2–208.8 | no | fits |
| title | 299.8 × 71.4 px at fontSize 71.4 | 309.6 × 72.0 px, placed x 48.1–347.9, y 78.7–150.1, centered (180, 134.4) | no | fits |
| counter | worst string "14/14", group width 105 px at 35 px numerals | available width 106.8 px, inline mode, box x 211.8–316.8 | n/a | fits |

All three measured elements fit their boxes at the 360 px stage without condensing. The feasibility gate asserts the header's sampled set separately (≥1 sample and ≥2% of page targets) and refuses configs whose header fit condenses below the sampling floor; the ring's placed box is asserted inside the stage horizontally before a config executes.
