Verdict: READABILITY 84/100 — clears the 70-point lens minimum, with a brief headline-replacement defect. Overall attempt pass is NOT ASSESSED by this single-lens return.

1. **Settled text has sufficient contrast.** From `recreation.html:44–50`, computed sRGB luminance contrast ratios are blue/field **5.11:1**, blue/card **4.67:1**, white/card **17.17:1**, sub/card **10.62:1**, and chip ink/white **18.50:1**. The blue operative span and numeral remain distinguishable against their grounds; the white chip strongly marks the second instruction.

2. **Headline replacement creates competing ink.** Both headline layers occupy identical centered coordinates (`recreation.html:10–11`, `build()`, particularly line 293). `stateAt()` assigns complementary opacities (line 208), so at approximately **8124 ms**, calculated as `8000 + 600 × (1 − ∛0.5)`, two different sentences share the same baseline at 50% opacity each. Logical active-headline exclusivity and an opacity floor do not establish readable text during this overlap. **Next-attempt cure:** eliminate simultaneous overlapping glyphs—for example, fade the outgoing sentence completely before revealing the incoming sentence—and inspect the replacement at native 360 px width.

3. **Tile text meets the stipulated modeled floor, narrowly.** `fit-table-attempt-2.md`, default and three-step tables, uses `16 × 0.716 = 11.456 px` subject ink: approximately **0.46 px above** the 11 px floor. The default two-line stack totals **104.6 px**, within the 112 px tile height; the demonstrated three-step configuration retains the same font sizes with shorter copy. This supports a modeled fit pass, not a verified browser wrap. **Next-attempt requirement:** confirm every wrapped state in an actual 360 px rendering; increase title/sub size and rebalance tile geometry if that inspection shows strain.

4. **Ground and hierarchy support scanning.** The grid’s 7% alpha makes it subordinate to the text, while opaque tile grounds isolate card content (`CONFIG.palette`, `gridCSS()`, `build()`). Numeral/title size ratio is `24/16 = 1.50`; headline/title ratio is `18/16 = 1.125`. Position and operative styling distinguish the headline, although its size advantage is modest. No additional hierarchy cure is warranted from source evidence alone.

Limits: Disk SHA-256 matches the bound hash exactly. Assessment is source/model based; rendered playback, actual font metrics, raster legibility, and replacement appearance remain PIXEL-UNVERIFIED. Supplied own-check results were not independently rerun.

SCORE: 84
Body-write: none (read-only run)