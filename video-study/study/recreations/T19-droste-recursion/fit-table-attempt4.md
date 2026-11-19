# T19 attempt 4 — measured-fit leg (guard-measured-fit, by reference)

Source: recreation.html sha256 `388a0e65cad533724ae774531dc312e0de783fd36c0ab9fe60efe0b3171794df` (frozen before the wave). Model: source-bound displayed-state model, **border-propagated content-box basis** — each level's scene fills its parent frame's interior (frame content box = border box − 2×borderPx at that level, reduced by the header share and curtain shares). The renderer's nominal derived level scale (0.486) sizes fonts and borders; the content-box scene widths below are the smaller displayed values (deepest scene 81.48 px at 360 px vs 85.03 px nominal) — both bases print, neither substitutes for the other. Stage aspect is enforced in the emitted CSS (width controls, height derives from the CONFIG aspect) and consumed at assembly. PIXEL-UNVERIFIED (A-C002-2) — modelled, not rendered.

Content-box chain @360px: L0 scene 360×202.50 → frame 194.40×105.30 (border 2) → content 190.40×101.30, header 28.36 → interior 171.36×72.94 · L1 scene 171.36×72.94 → frame 92.53×37.93 (border 1) → content 90.53×35.93, header 10.06 → interior 81.48×25.87 · L2 scene 81.48×25.87 → frame 44.00×13.45 (border 1) → content 42.00×11.45, header 3.21.
Chain @390px: L0 390×219.38 → content 206.60×110.08, header 30.82 · L1 scene 185.94×79.25 → content 98.41×39.21, header 10.98 · L2 scene 88.57×28.23 → content 45.83×12.68, header 3.55.

| Element | Container | Measured | Container bounds / floor | Result |
|---|---|---|---|---|
| header label L0 @360px | complete medallion+phrase row vs frame content box | font 18.00px · row 134.93px (phrase 126.00 + medallion 8.93, complete string) · tallest item 18.00px | content width 190.40px · header content height 28.36px | fits (width+height) |
| header label L1 @360px | complete row vs frame content box | font 11.00px · row 82.46px (phrase 77.00 + medallion 5.46) · tallest item 11.00px | content width 90.53px · header content height 10.06px | **width fits · HEIGHT SHORTFALL 0.94px — HIT (D7)** |
| header label L1 @390px | complete row vs frame content box | font 11.00px · row 82.46px · tallest item 11.00px | content width 98.41px · header content height 10.98px | **width fits · HEIGHT SHORTFALL 0.02px — HIT (D7)** |
| header label L2 @360px | complete row vs frame content box | font 4.25px · row 33.48px · tallest item 6.00px (medallion floor) | content width 42.00px · header content height 3.21px | no fit claimed — glyph band, printed honestly |
| header label L2 @390px | complete row vs frame content box | font 4.61px · row 35.96px · tallest item 6.00px | content width 45.83px · header content height 3.55px | no fit claimed — glyph band, printed honestly |
| wrapped states L0/L1/L2 @360px | row height at every wrap state the content can reach (A-C006-3) | default label reaches 1 line at every level (lines=1); wrap states enumerated 1–3 lines: L0 18/36/54px vs 28.36 · L1 11/22/33px vs 10.06 · L2 6/8.5/12.75px vs 3.21 — an oversized single token model-prints overflow (lines≥2, no fit claim) | header content heights as above | enumerated; only the 1-line state is claimed, and only where it fits |
| deepest candle0 @360px | frame footprint occlusion | visible fraction 77.4% · visible span 5.00px @opening, 6.38px @hold · body width 1.52px · pitch 2.20px | floor: ≥50% visible; recognition ≥5px visible | pass (at the floor @opening) |
| deepest candle1 @360px | frame footprint occlusion | visible fraction 82.0% · visible span 6.67px @opening, 8.51px @hold | floor as above | pass |
| deepest candle2 @360px | frame footprint occlusion | visible fraction 77.4% · visible span 5.00px @opening, 6.38px @hold | floor as above | pass (at the floor @opening) |
| deepest staff @360px | frame footprint occlusion | visible fraction 60.9% · visible span 6.81px @opening, 8.69px @hold · width 1.69px | floor as above | pass |
| deepest face @360px | frame footprint occlusion | visible fraction 100% · diameter 5.98px @opening | floor as above | pass |
| deepest table @360px | frame footprint occlusion | visible fraction 75.1% | floor as above | pass |
| deepest frame @360px | frame footprint occlusion | visible fraction 100% | floor as above | pass |
| deepest candle0 @390px | frame footprint occlusion | visible fraction 77.4% · visible span 5.46px @opening, 6.97px @hold · body width 1.65px · pitch 2.39px | floor as above | pass |
| deepest candle1 @390px | frame footprint occlusion | visible fraction 82.0% · visible span 7.28px @opening, 9.29px @hold | floor as above | pass |
| deepest candle2 @390px | frame footprint occlusion | visible fraction 77.4% · visible span 5.46px @opening, 6.97px @hold | floor as above | pass |
| deepest staff @390px | frame footprint occlusion | visible fraction 60.9% · visible span 7.43px @opening, 9.49px @hold · width 1.83px | floor as above | pass |
| deepest face @390px | frame footprint occlusion | visible fraction 100% · diameter 6.53px @opening | floor as above | pass |
| deepest table @390px | frame footprint occlusion | visible fraction 75.1% | floor as above | pass |
| deepest frame @390px | frame footprint occlusion | visible fraction 100% | floor as above | pass |

Occlusion pair scope (A-C019-1): ordered pairs enumerated at the deepest level's hold checkpoints — the framed picture (drawn last, on top) against every co-present hall element (candle0/1/2, staff, face, table = 6 pairs); no other pair overlaps at these checkpoints. The set above is the model's stated scope.

Subject-text rows: the framed picture's header label is the only subject text element (levels 0–2). Legibility floor ~11px at 360px: L0 18.00px pass; L1 11.00px (floored) width pass / height shortfall HIT; L2 4.25px carries NO fit/legibility claim (glyph band, as in the specimen still).
Hierarchy: single label repeated per level; no neighbouring-text hierarchy is claimed.

**HIT list: 1 hit class — L1 (second) header vertical clearance: tallest row item 11.00px vs header content height 10.06px @360px (0.94px short) and 10.98px @390px (0.02px short).** This is deferral D7, priced in the build record: the content-box model now calculates the true height (the attempt-3 unbordered model's 11.04px pass was the proxy's optimism); reserving the clearance is deferred so the model's first honest read is not confounded by a simultaneous geometry move. All other rows pass or carry no claim.
