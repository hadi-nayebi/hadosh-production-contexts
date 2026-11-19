# T16 — measured-fit leg · attempt 7 (A-C008, pre-scoring, on the NEW source)

Source: `recreation.html` sha256 `7622e4e99b37a274bbd75052bfa666aedde7f25d5e3a2f4bebc9e7c0cf25c462` (99,618 B) — the frozen scored source, identical to `checkpoint-attempt7-stage6-final.html`.
Method: the piece's own fit functions under the deterministic harness rasterizer (canvas measure model: ink width = left + right bounding-box sum form). PIXEL-UNVERIFIED: modelled measurements, not rendered pixels.

| Stage | Subject | Ink (measured post-fit) | Fitted box | Inside box | Notes |
|---|---|---|---|---|---|
| 960×540 | title | 651.0 × 150.0 | 825.6 × 162.0 | YES | width is the sum form (left + right), not the difference form |
| 960×540 | page header | 247.5 × 66.5 | 266.1 × 67.9 | YES | header ink top at page top + configured offset; height = fitted height, inside the page box |
| 960×540 | counter group | numeral 64 px, group 198.4 wide | 334.8 available | YES | inline mode; group box disjoint from the page/stack region |
| 390×844 | title | 329.6 × 75.9 | 335.4 × 253.2 | YES | |
| 390×844 | page header | 100.5 × 27.0 | 108.1 × 106.2 | YES | |
| 390×844 | counter group | numeral 38 px, group 117.8 wide | 118.2 available | YES | inline mode at phone width |
| 360×640 | title | 291.2 × 67.1 | 309.6 × 192.0 | YES | the 291.2 sum-form figure reproduces the prior attempt's leg measurement on the same instrument |
| 360×640 | page header | 92.8 × 24.9 | 99.8 × 80.5 | YES | |
| 360×640 | counter group | numeral 34 px, group 105.4 wide | 106.8 available | YES | inline mode |

All ink heights ≥ the ~11 px legibility floor at every size; hierarchy carried by measured size.

**HIT list: EMPTY (0 hits)** — every subject measured post-fit, every positioned assertion holds.
