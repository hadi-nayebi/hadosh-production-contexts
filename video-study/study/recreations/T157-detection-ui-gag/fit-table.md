# fit-table — T157 · Cycle 019 Wave 18 · attempt 2 (guard-measured-fit, Amendment A6 + practice A-C008)
Method: glyph-ink geometry from the build harness's per-class character-width table (upper 0.72em · lower 0.56em · digit 0.62em · space 0.32em · punct 0.28em) at the 360 px stage (design px / 2), run in node over attempt 2's own CONFIG. Instrument: node logic harness (DOM-free text metrics) — no browser binary in this seat; PIXEL-UNVERIFIED. Attempt-1 table preserved at fit-table-attempt-1.md.
Subject text elements: banner text AND the badge glyph (attempt 2 carries the glyph as a ROW, per the Cycle 019 plan — attempt 1 priced it in a note only).

| element | ink w (px, 360 stage) | ink h (px, 360 stage) | container w (px, 360 stage) | margin (px) | flag |
|---|---|---|---|---|---|
| banner text "Interference Detected" | 177.6 | 10.8 (cap) / 15.0 (font box) | 235 | 57.4 |  |
| badge glyph "!" | 3.4 | 12.0 (font box) | 17.0 (badge disc diameter) | 6.8 per side |  |

Banner row: CONFIG banner.w 470 design px = 235 px at the 360 px stage; banner.h 66 design px = 33 px at stage. Effective font size at 360 px = banner.fontPx 30 × 0.5 = 15.0 px ≥ 11 px floor — PASS. Ink width 177.6 px ≤ container 235 px with 57.4 px margin — PASS. The banner now enters positionally at fixed dimensions (w/h never vary during the entrance), so the fit row holds at every entrance probe (9500/9715/9950/14500 verified in the own-check suite).
Badge glyph row: glyph "!" at glyphFontPx 24 design px = 12.0 px effective at the 360 stage ≥ 11 px floor — PASS. Ink width ≈ 0.28em × 24 = 6.7 design px = 3.4 px at stage, centred in the badge disc (r 17 design px, diameter 34 design = 17.0 px at stage); horizontal margin ≈ 6.8 px per side. The glyph's anchor now sits at the badge centre (DOM y == badge.y, verified at original and swapped positions in the own-check suite); the glyph scales with the disc under the shared pulse transform (settled pulse diameter 14.28–19.72 px at stage, glyph font 10.08–13.92 px across the pulse — the pulse extremes are transient; at pop settle the glyph is 12.0 px). Vertical: glyph centre offset is the dy term only (8.4 design px), inside the disc.
Swap-text check (same instrument): swapped banner text "Signal Acquired" ink width at 360 stage = 127.2 px ≤ 235 px — the swapped text also fits the ribbon.
Wrapped-state enumeration (A-C006-3): banner text is a single SVG text line with no wrapping mechanism; ink 177.6 ≤ 235 at both the original and swapped texts — no wrap state is reachable. Enumerated-and-empty.
HITs: 0
