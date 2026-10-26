# SOA-01 — "1.2 Billion Renters" (State of Adoption)

**Video package — branch `video/soa-01`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order.

- **Piece:** soa-01 · flagship channel · State of Adoption lane
- **Title:** 1.2 Billion People Use AI Every Week. Almost None Own It.
- **Status at this layer:** migration layer 1 of 6 — the metadata
  scaffold. The transcript, decisions, audio, scene and render
  layers land in the commits that follow, in the order the video
  was actually built.

## The two metrics (at this layer)

Computed from `metadata.json` only, until the later layers land:

- **Decided / total decision fields:** 6 / 9 scaffold fields decided.
- **Open fields (randomness remaining), named:** `audience` ·
  `delivery_structure` · `scene_decomposition`.

Every decided field carries its rationale and its source; a field
the record does not settle ships OPEN with an empty rationale —
intent is never invented after the fact.
