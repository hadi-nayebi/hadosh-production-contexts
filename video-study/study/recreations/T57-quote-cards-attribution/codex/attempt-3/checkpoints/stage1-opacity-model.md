# Checkpoint stage 1 — opacity model (create-once, 2026-11-15)

Stage-1 source: stage1-source.html in this directory, sha256 7f478bed138b22e04eef1ed64e24b497c0fd20231812536f543da217c357b1fa (= the working recreation.html at this stage).
Stage-1 state: new construction with the parent-only opacity code active; entrance/exit intervals and exit scale/anchors still at neutral values (entrance 500 ms, exit scale 1, centered anchors) — those land in stages 2–3.

Measured (stub-DOM harness, unit mode, first card entrance, entrance span 500 ms at this stage):
| t | parent opacity | line child | chip child | glyph child | effective line | effective chip |
|---|---|---|---|---|---|---|
| 0 | 0 | 1 | 1 | 1 | 0 | 0 |
| 125 | 0.25 | 1 | 1 | 1 | 0.25 | 0.25 |
| 250 | 0.5 | 1 | 1 | 1 | 0.5 | 0.5 |
| 375 | 0.75 | 1 | 1 | 1 | 0.75 | 0.75 |
| 500 | 1 | 1 | 1 | 1 | 1 | 1 |

Effective opacity EQUALS the entrance progress at every sample (no squared term). Staggered branch at this stage: parent carries the exit fade only, children carry their own entrance progress (asserted in the full own-check suite on the combined construction).
