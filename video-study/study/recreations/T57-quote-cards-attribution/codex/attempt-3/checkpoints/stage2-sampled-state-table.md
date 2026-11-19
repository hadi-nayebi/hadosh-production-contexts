# Checkpoint stage 2 — sampled-state table (create-once, 2026-11-15)

Stage-2 source: stage2-source.html in this directory, sha256 015e1ea2c5b95a99eb9ad2a151a9d037239267d85f4944ddb05f37d5147aa6bb.
Construction values chosen at this stage (the sampled evidence constrains intervals; these exact values are construction choices, not evidence claims): card 1 entrance interval 0→1000 ms (completion in (500, 1000]); card 1 exit interval 8000→9000 ms; card 2 entrance interval 11000→12500 ms (completion in (11500, 12500]).

Measured displayed states (stub-DOM harness, ten instants):
| t (ms) | constraint | measured card opacity | result |
|---|---|---|---|
| 0 | card 1 absent (0) | 0 | ✓ |
| 500 | card 1 partial, 0 < o < 1 | 0.5 | ✓ |
| 1000 | card 1 complete (1) | 1 | ✓ |
| 8000 | card 1 full (1) | 1 | ✓ |
| 8500 | card 1 exiting, 0 < o < 1 | 0.5 | ✓ |
| 9000 | card 1 gone (0) | 0 | ✓ |
| 11000 | card 2 absent (0) | 0 | ✓ |
| 11500 | card 2 faint partial, 0 < o < 1 small | 0.333 | ✓ |
| 12500 | card 2 complete (1) | 1 | ✓ |
| 14000 | card 2 holds (1) | 1 | ✓ |

Exit scale and second-card anchor still neutral at this stage (land in stage 3).
