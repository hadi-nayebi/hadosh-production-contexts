# T232 — measured-fit leg (A6) · final build sha bbe53950…

## Completion refile (Cycle 040 Wave 37, A12.3) — cured build sha a4ef82ac…
Re-run on the cured build (sha256 `a4ef82acf89d858d8decc0382acbe1ce4fffdd11d53dce7d0f779db28bfc4a1e`, 12,448 B). The cure changed only the pip-drawing branch in the render script (pipStyle binding); no text element, label, stage geometry, or font state changed. Text-node census re-run on the cured build: no SVG `<text>` element exists in recreation.html (shapes only, as below); the comparison labels' PIL rows below stand for the cured build unchanged.
## HIT list (completion refile)
**0 HITs.**

Instrument: PIL rendered measurement, stand-in font DejaVu Serif (PROXY, named per guard-measured-fit check 2(ii)) for the comparison labels; text-node census of recreation.html by grep for the recreation itself.

## Recreation.html — subject text census
The recreation carries NO subject text elements: its only text nodes are the HTML `<title>` (browser chrome, not in-scene) and the two control-button labels ("Pause"/"Restart", 14 px UI chrome outside the stage). Grep receipt: no SVG `<text>` element exists in the file; the scene is shapes only (strips, knife, dice). No fit row is owed for in-scene text; no HIT.

## Comparison.html — label rows (PROXY, DejaVu Serif @ 13 px CSS)
Stage geometry: phone width 360 px; stacked layout side width = 360 − 24 (wrap padding) = 336 px container; labels sit in an auto-height `<h2>` block (no fixed height, no clipping possible).

| Element | Instrument | Measured ink | Container | Margin / disposition |
|---|---|---|---|---|
| "ORIGINAL — PES Fresh Guacamole @ 29–36 s" | PIL DejaVu Serif 13 px | 310 × 12 px | 336 px wide, auto height | fits one line, margin 26 px; ink height 12 ≥ 11 floor ✓ |
| "RECREATION — T232 verb literalization: dicing produces dice, parameterized" | PIL DejaVu Serif 13 px | 519 × 13 px | 336 px wide, auto height | wraps to 2 lines inside its auto-height block — no clipping, no overlap (block grows); ink height 13 ≥ 11 floor ✓ |

## HIT list
**0 HITs.** No subject text exists in the recreation; the comparison labels are measured above with provenance, meet the legibility floor, and cannot clip.
