Readability score: **64/100 — below the 70-point lens floor.** Contrast and default text fit are strong, but most subject text is too small for comfortable reading at 360 px.

At a 360 px viewport, `1vw = 3.6px`; every requested font resolves to its minimum:

| Text | Resolved size | Assessment |
|---|---:|---|
| LED line | 9 px bold monospace | Too small |
| Receipt header | 10 px bold monospace | Too small |
| Receipt rows | 8 px monospace; 12 px line height | Critically small |
| Post card | 12 px bold | Marginal |
| System title | 11 px bold | Too small |
| System reset | 9 px, 85% opacity | Too small |
| Prompt bubble | 11 px bold | Too small |
| Reply bubble | 10 px; 14 px line height | Too small |

**Receipt fit:** the 201.6 px left column contains a receipt only **149.2 px wide**, with approximately **131.2 px available for text** after padding. The build record incorrectly uses the column width as the receipt width. Nevertheless, the longest default row fits at 8 px monospace. At ≤520 px, `white-space:normal` permits wrapping at spaces; longer unbroken replacements can still clip because `overflow:hidden` remains.

**Phone fit:** the phone is 280.8 px wide. After its borders and chat padding, the reply bubble permits approximately **212 px of text width**. The supplied reply should fit comfortably over roughly two lines at 10 px Arial. Its problem is reading size, rather than horizontal fit. Exact wrapping depends on the resolved font.

**Contrast:** default colors provide strong contrast: paper ink on paper approximately **14.5:1**, amber LED on black **11.3:1**, reply ink on its bubble **15:1**, and system title approximately **12.2:1**. The reset line remains strongly contrasted after its opacity reduction. Contrast does not compensate for these small font sizes.

**Overlap:** left column and cards have a 10.8 px horizontal gap. Receipt and torso occupy successive flex items, so the receipt does not cover torso text. The centered phone spans approximately x=39.6–320.4 and paints above both columns once it appears, obscuring receipt and card text during the phone phase. Their earlier holds remain unobstructed; this is acceptable only if those holds complete their reading task.

**Required cures:** enlarge subject text on mobile, allocating separate full-width beats where needed; target approximately 14–16 px for substantive copy. Recalculate receipt width from its nested container, and verify its complete height after enlarging text. Record rendered 360 px checks of the fully printed receipt, settled cards, and complete reply.

Source alone cannot establish actual raster legibility, exact line breaks, or vertical clipping: stage height and the comparison iframe’s overflow matter, and `min-height:300px` can exceed a 360 px-wide 16:9 viewing panel.

BODY-WRITE: Replace the build record’s “legible floor” claim with the resolved 360 px sizes and actual 149.2 px receipt width; require enlarged mobile typography and rendered hold checks before readability passes.
SCORE: 64
