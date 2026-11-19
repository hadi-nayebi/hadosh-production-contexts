# T19 attempt 5 — measured-fit leg (guard-measured-fit, by reference)

Source: recreation.html sha256 `f89af02eafea695edc7400a2a5bc388b723c8c7e473bfd7b7e04dcfe5f38c43d` (frozen before the wave; differs from checkpoint5-stage5 by one leaf — checkpoints.holdEndMs 3250, the corrected close of the re-observed exit window (3.125, 3.250] shot-local; see the build record's correction entry). Model: source-bound displayed-state model, **border-propagated content-box basis** — each level's scene fills its parent frame's interior (frame content box = border box − 2×borderPx at that level, reduced by the header share and curtain shares). The header boundary this attempt is `frameHeaderPercent: 35` — one leaf consumed by the header bar, the curtain height boundary, and the inset/interior top boundary at every level. PIXEL-UNVERIFIED (A-C002-2) — modelled, not rendered.

Content-box chain @360px: L0 scene 360.00×202.50 → frame 194.40×105.30 (border 2) → content 190.40×101.30, header 35.45 → interior 171.36×65.84 · L1 scene 171.36×65.84 → frame 92.53×34.24 (border 1) → content 90.53×32.24, header 11.28 → interior 81.48×20.96 · L2 scene 81.48×20.96 → frame 44.00×10.90 (border 1) → content 42.00×8.90, header 3.11 (plain band, no row rendered).
Chain @390px: L0 390×219.38 → content 206.60×110.08, header 38.53 · L1 scene 185.94×71.55 → content 98.41×35.21, header 12.32 · L2 scene 88.57×22.88 → content 45.83×9.90, header 3.46 (plain band).

| Element | Container | Measured | Container bounds / floor | Result |
|---|---|---|---|---|
| header label L0 @360px | complete medallion+phrase row vs frame content box | font 18.00px · row 134.93px · tallest item 18.00px | content width 190.40px · header content height 35.45px | fits (width+height) |
| header label L1 @360px | complete row vs frame content box | font 11.00px · row 82.46px · tallest item 11.00px | content width 90.53px · header content height 11.28px | **fits — margin +0.28px (the attempt-4 D7 HIT reads 0 here)** |
| header label L1 @390px | complete row vs frame content box | font 11.00px · row 82.46px · tallest item 11.00px | content width 98.41px · header content height 12.32px | fits — margin +1.32px |
| header L2 @360px / @390px | terminal band | no row rendered (deepest header is a plain dark band by construction); tallest item 0.00px | header content height 3.11px / 3.46px | no fit claimed — band, printed honestly; the attempt-4 star-line-box overrun (6.00px vs 3.21/3.55px) cannot occur |
| deepest candle0 @360px | frame footprint occlusion | visible fraction 77.4% · visible span 4.05px @wide, 6.46px @insert · body width 1.52px · pitch 2.62px · gap 1.10px | floor: ≥50% visible; recognition ≥5px visible | visible fraction pass · **span SHORTFALL @wide — HIT (cascade, below)** |
| deepest candle1 @360px | frame footprint occlusion | visible fraction 82.0% · visible span 5.40px @wide, 8.62px @insert | floor as above | pass |
| deepest candle2 @360px | frame footprint occlusion | visible fraction 77.4% · visible span 4.05px @wide, 6.46px @insert | floor as above | visible fraction pass · **span SHORTFALL @wide — HIT (cascade, below)** |
| deepest staff @360px | frame footprint occlusion | visible fraction 60.9% · visible span 5.52px @wide, 8.80px @insert · width 1.69px · shaft edge contrast 5.35:1 (wood 2.06:1) | floor as above | pass |
| deepest face @360px | frame footprint occlusion | visible fraction 100% · diameter 4.85px @wide | floor as above | visible fraction pass · **diameter below the 5px recognition mark — HIT (cascade, below)** |
| deepest table @360px | frame footprint occlusion | visible fraction 75.1% | floor as above | pass |
| deepest frame @360px | frame footprint occlusion | visible fraction 100% | floor as above | pass |
| deepest candle0 @390px | frame footprint occlusion | visible fraction 77.4% · visible span 4.42px @wide, 7.06px @insert · body 1.65px · pitch 2.85px · gap 1.20px | floor as above | visible fraction pass · span shortfall @wide (same HIT class) |
| deepest candle1 @390px | frame footprint occlusion | visible fraction 82.0% · visible span 5.90px @wide, 9.41px @insert | floor as above | pass |
| deepest candle2 @390px | frame footprint occlusion | visible fraction 77.4% · visible span 4.42px @wide, 7.06px @insert | floor as above | visible fraction pass · span shortfall @wide (same HIT class) |
| deepest staff @390px | frame footprint occlusion | visible fraction 60.9% · visible span 6.02px @wide, 9.61px @insert · width 1.83px | floor as above | pass |
| deepest face @390px | frame footprint occlusion | visible fraction 100% · diameter 5.29px @wide | floor as above | pass |
| deepest table @390px | frame footprint occlusion | visible fraction 75.1% | floor as above | pass |
| deepest frame @390px | frame footprint occlusion | visible fraction 100% | floor as above | pass |

Occlusion pair scope (A-C019-1): ordered pairs enumerated at the deepest level's hold checkpoints — the framed picture (drawn last, on top) against every co-present hall element (candle0/1/2, staff, face, table = 6 pairs); no other pair overlaps at these checkpoints. Candle/staff rect overlap at the deepest level = 0 (silhouettes separate).

Subject-text rows: the framed picture's header label is the only subject text element (levels 0–2). Legibility floor ~11px at 360px: L0 18.00px pass; L1 11.00px (floored) width pass / height now fits; L2 carries NO fit/legibility claim (plain band by construction).
Hierarchy: single label repeated per level; no neighbouring-text hierarchy is claimed.

**HIT list: 1 hit class — the header-boundary cascade (plan FP4, measured).** Raising the shared header boundary to cure the second header's clearance removes frame inner height at every level, and the deepest level's visible spans shrink through the height chain: deepest candle0/2 visible span 5.00px → 4.05px @360 at the wide scale (6.46px at the insert scale, where the floor is met), deepest face diameter 5.98px → 4.85px @360 (5.29px @390, floor met). The two floors are in direct tension through the height chain — the ladder in the build record shows no share value satisfies both at 360px (at share 32 the header itself still falls short at 10.82px; at every share ≥34 the face falls to ≤5.00px). The D7 class itself reads **0 hits**: the second header fits at both widths with the margins printed above, and the deepest header's overrun class is removed by the terminal band.
