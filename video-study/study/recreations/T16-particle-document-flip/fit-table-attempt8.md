# T16 — measured-fit leg · attempt 8 (A-C008, pre-scoring, on the NEW source)

Source: `recreation.html` sha256 `a32c95bb6c16e06998a973e550d51a03e617bc9914d20f5eba2765c4d2dbde95` — the promoted final source, identical to `checkpoint-attempt8-stage6-final.html`.
Method: the piece's own fit functions under the deterministic harness rasterizer (canvas measure model: ink width = left + right bounding-box sum form). PIXEL-UNVERIFIED: modelled measurements, not rendered pixels.

| Stage | Subject | Ink (measured post-fit) | Fitted box | Inside box | Notes |
|---|---|---|---|---|---|
| 960×540 | title | 609.0 × 150.0 | 825.6 × 162.0 | YES | placed box inside stage: YES |
| 960×540 | page header | 231.5 × 66.5 | 266.1 × 67.9 | YES | placed ink box inside the page region: YES |
| 960×540 | counter group | numeral 64 px, group 185.6 wide | 334.8 available | YES | inline mode; label width includes its letter spacing |
| 390×844 | title | 328.0 × 80.8 | 335.4 × 253.2 | YES | placed box inside stage: YES |
| 390×844 | page header | 94.1 × 27.0 | 108.1 × 106.2 | YES | placed ink box inside the page region: YES |
| 390×844 | counter group | numeral 40 px, group 116.0 wide | 118.2 available | YES | inline mode |
| 360×640 | title | 308.3 × 75.9 | 309.6 × 192.0 | YES | placed box inside stage: YES |
| 360×640 | page header | 86.8 × 24.9 | 99.8 × 80.5 | YES | placed ink box inside the page region: YES |
| 360×640 | counter group | numeral 36 px, group 104.4 wide | 106.8 available | YES | inline mode |

All ink heights ≥ the ~11 px legibility floor at every size; hierarchy carried by measured size. Attempt 8 adds the placed-box measurement itself: fit and placement are one construction — the gate re-checks the placed ink box against its region on the final source (adversarial `pageHeaderTopRatio=1` refused by the gate; see the final own-check file).

**HIT list: EMPTY (0 hits)** — every subject measured post-fit, every positioned assertion holds.
