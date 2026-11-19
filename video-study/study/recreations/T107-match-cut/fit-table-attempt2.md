# T107 — guard-measured-fit output, attempt 2 (A-C008 leg 1, pre-wave)

Method: font-metric geometry measurement (Arial advance widths + cap-height factor 0.716) at the 360 px stage, recomputed on the attempt-2 source. Build: recreation.html sha256 102f04208805b908027bd1caa8d709fd33afd33e9495fe77c22d25b1f70dd018. **PIXEL-UNVERIFIED** (A-C002-2): source-bound model claims only.

| Element | Container | Ink width | Container width | Margin | Ink height: approach / reading |
|---|---|---|---|---|---|
| sceneA.title "Results — before" @16 px (search bar) | search text area 224×18 px | 126.3 px | 224 px | 97.7 px | 11.5 / 13.5 px (grows with the push to cut scale 1.18) |
| anchor.label "MARK" @19 px (both scenes, shared primitive) | anchor box 64 px wide at cut (54.2 px at base) | 55.9 px at cut · 47.4 px at base | 64 px · 54.2 px | 8.1 px · 6.8 px | **11.53 / 13.6 px** (approach = effective font inside the base-size tile; reading = at cut 13.6 px, settled 27.2 px at settleScale 2.0) |
| anchor.label swap "MARKET" @19 px | swap anchor box 88 px wide | 78.1–79.2 px (two advance models) | 88 px | ≥ 8.8 px | as above, scaled |
| sceneB.title "Logo — after" @17 px (wordmark, anchor-centred) | full-width strip 360 px, text centre bound to the anchor centre | 93.6 px (advance model) · 103.7 px (source charEm guard model, conservative) | 360 px | span 98–197 px inside the stage at the default anchor | — / 12.2 px (reading state = settled hold-B, opacity 1, dx 0) |

Vertical fit (label surface, re-derived this attempt): glyphTop 0.13 × 64 = 8.32 + glyphH 26.88 + labelGap 3 + labelSize 19 + labelPad 2 = **extent 59.20 px / 64 px box** ✓ (margin 4.80 px). The stage closed at labelSize 19 under the plan's measurement-gated closure rule: at 18 the approach ink measured 10.92 px (below floor), at 19 it measures 11.53 px.

Contrast rows (recomputed from CONFIG values, WCAG): mark.tri3 #6480e0 vs logoField #101010 = **5.17:1** · vs tile #101418 = **5.03:1** (both ≥ 4.5:1; attempt-1 value #3b4a8f measured ≈2.2:1). Search text (palette.ink) on the push-dimmed strip colour at CUT−1 (blend 0.498 toward the field colour, rgb(171,205,120)) = **7.38:1** ≥ 4.5:1 — the dimming guard holds, no fallback cap was needed.

Hierarchy: measured ink heights — wordmark 12.2 px · search title 11.5 px approach · anchor label 11.53 px approach / 13.6 px at cut; the mark glyph measures 26.9 px tall at the cut and 53.8 px settled, dominating by size as designed. No hue-only hierarchy is claimed. ✓

Legibility floor (~11 px ink height): every subject text element clears it in every state this attempt — the anchor label's approach state, attempt 1's carried HIT, now measures 11.53 px.

HIT list: **empty — PASS for this leg (0 HITs on the attempt-2 build).**
