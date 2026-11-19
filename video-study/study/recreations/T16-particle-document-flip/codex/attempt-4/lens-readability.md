Readability is strong in the title hold, but weaker during rapid page flips. This assessment uses the supplied source and neutral check packet; phone-size appearance remains pixel-unverified.

Intensity separation is explicit in `updateParticles()`: settled page/title particles use `foregroundAlpha=1.0`, reserve particles use `0.28`, and free or released surplus uses `0.16`. Stagger-pending, travelling, and turning particles use `0.38`, so they do not compete at settled-content intensity. The backing stack uses `0.60`. The gold ring uses `0.95`, with its separate colour and position above the title providing clear differentiation. Background particles never individually receive foreground intensity under the default configuration; overlapping dots can still accumulate brightness.

“AI GURU” should be legible during its 1,100 ms hold. `fitText()` constrains both dimensions, including an 86% stage-width box. A 4 px sampling gap with 1.6 px particle radius supports coherent letter strokes. The pale-blue DOM label contrasts well against black. These are sound construction choices, although bounds checks alone do not prove readable glyphs.

The principal priced defect is insufficient readable page dwell. The late schedule changes pages every 87.5 ms, while `turnMs=140` compresses the front page to 15% width and reduces its intensity to `0.38`, below the backing stack’s `0.60`. The packet reports a maximum rendered settled dwell of only 66.7 ms for rapid pages and explicitly marks 80 ms unreachable. **Cost:** viewers can recognize a document flipping, but cannot reliably inspect successive page contents; the backing stack can dominate the active page. Cure: reserve an uncompressed, foreground-intensity reading interval in the actual turn schedule.

A second defect affects phone composition: the counter keeps a fixed 64 px font while the page occupies x=17–50% of stage width. At 390 px width, a five-character count such as “14/14”, right-aligned at 88%, can extend into the page/stack region. **Cost:** two important foreground elements compete spatially despite good colour contrast. Cure: fit or reposition the counter responsively and verify its rendered bounds against the stack.

Finally, full foreground intensity begins when travel completes, before the additional 300 ms registration window finishes. **Cost:** newly settled particles can briefly remain bright while spatially displaced, softening emerging content. The title hold gives this time to resolve; rapid pages have less protection.

Body-write status: the filesystem tool failed to start, so neither `lens-readability.md` nor `scores.md` was written. The score and carry-forward cure list are provided here for filing; the attempt’s overall disposition remains with the combined review.

SCORE: 80
