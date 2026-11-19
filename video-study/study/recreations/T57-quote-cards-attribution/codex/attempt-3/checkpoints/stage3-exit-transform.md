# Checkpoint stage 3 — exit transform + anchor (create-once, 2026-11-15)

Stage-3 source: stage3-source.html in this directory, sha256 f8b0735ca57335f6fca2486b8936c3e785ca8dcaf34950c2bedc05b24c8f19e3 (= final recreation.html; no source change after this stage).
Landed at this stage: exitScaleTo 0.92; second card anchor (0.37, 0.66).

Anchor definition (binding statement): the per-quote anchor fractions position the card's CENTER (the card element's left/top are set to anchor × stage size and its transform translates by −50%, −50% of its own size). Evidence-based default: the global anchor stays centered (0.5, 0.5) — the first card's position was not priced by any prior return; the second card's override (0.37, 0.66) is the lowest-left center that keeps the full card inside the stage at the default card size: at a 360 px stage the card is 259 px wide, so a center fraction below 129.5/360 ≈ 0.36 would cross the left edge, and its modelled height (≈130 px) caps the vertical center at ≈0.66 for the bottom edge.

Shared scene transform (the exit's construction): one exit progress drives the scene layer's scale from 1 toward exitScaleTo; the card is a child of the scene layer, so the same transform carries the card while the parent opacity fades it. Measured (stub-DOM harness):
| t (ms) | card opacity | scene scale | card entrance scale |
|---|---|---|---|
| 8000 | 1 | 1 | 1 |
| 8250 | 0.75 | 0.98 | 1 |
| 8500 | 0.5 | 0.96 | 1 |
| 8750 | 0.25 | 0.94 | 1 |
| 9000 | 0 | 0.92 | 1 |
At 12500 the second card stands at left 37% / top 66% with the scene scale back at 1.

Transformed-bounds model (360 px stage, 360×202.5; card 259 wide; modelled heights Q1 111.5, Q2 129.7 in the stub metric — the fit leg re-measures with font metrics):
- Entrance (scale 0.96 about the card center): bounds contract from the hold bounds → inside wherever hold is inside.
- Q1 hold: center (180, 101.3), half (129.5, 55.8) → x [50.5, 309.5], y [45.5, 157.1] ⊂ stage ✓
- Q1 exit (scene scale 1→0.92 about the stage center + card fade): every point moves toward the stage center → bounds contract monotonically → inside ✓
- Q2 hold: center (133.2, 133.7), half (129.5, 64.9) → x [3.7, 262.7], y [68.8, 198.5] ⊂ stage ✓
- Q2 entrance (scale 0.96): contracts → inside ✓
All four states inside the stage at model level. PIXEL-UNVERIFIED stands.
