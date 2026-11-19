Intensity separation is present by construction: settled page/title particles render at 1.0, stack at 0.60, gold ring at 0.95, reserve at 0.28, and surplus at 0.16. `updateParticles()` explicitly assigns these states, and `draw()` paints borrowed particles last. No unborrowed background particle receives foreground alpha. This provides a sound contrast hierarchy, although overlapping background particles can locally accumulate brightness.

Borrowed particles awaiting stagger or travelling render at 0.38, including the capture frame; turning front-page particles also use 0.38. They therefore compete substantially less than settled content. The stack remains distinguishable at 0.60. The ring’s warm colour and separate vertical placement help distinguish it from the title, despite its nearly equal alpha.

The largest readability defect is that fitting bounds do not bound the displayed title. Settled anchors become `p.tx`/`p.ty` plus jitter, but rendered positions add continuously accumulated `p.ox`/`p.oy`. At hold entry, 4.6 seconds into the first cycle, horizontal offsets are approximately 104–136 px (`vx = 22.5–29.5 px/s`). On a 390 px phone stage, this consumes most of the nominal margin around a title fitted within 86% of stage width. Rightmost letters can leave the stage and wrap to its opposite edge. Per-particle velocity differences also distort letter shapes. **Cost:** the title can lose whole-word legibility during the very hold intended for reading; the fitted-target diagnostic does not verify displayed bounds. Later cycles compound this problem because offsets persist.

Ignoring that displacement, the title construction is promising: bold fitted text, 4 px sampling, 1.6 px particle radius, full foreground alpha, and a 1.1-second hold. The solid 22 px blue-grey label contrasts well against black. Actual phone-size glyph continuity remains unverified: the supplied record explicitly reports no browser screenshot, and a stub rasterizer cannot establish readable letterforms.

The page has recognisable document cues—bright outline, header, horizontal lines, and dimmer backing outlines. However, it inherits the same offset distortion and displacement. Rapid pages have only **51.1 ms modelled settled dwell**, below the record’s own 80 ms reading criterion. **Cost:** viewers can recognise a flipping document, but cannot reliably inspect individual rapid pages. At permitted 50 ms simulation steps, the 28 ms turn can also be skipped visually, leaving an abrupt page update rather than a readable turn.

The DOM counter avoids particle distortion: white 64 px numerals and a 15 px blue-grey label provide strong contrast. Its rapid updates still limit reading each intermediate value. The final page’s roughly 400 ms interval offers a materially better reading opportunity.

Inherited cure list: correct displayed-position fitting by reconciling settled targets with accumulated offsets; verify complete title bounds and letter continuity across multiple cycles at phone size; increase rapid-page readable dwell if individual-page reading remains required.

Body-write status: this return supplies **62/100 and the priced findings/cure list** for the consumer to file in `lens-readability.md` and `scores.md`. No filesystem write was completed: the execution tool failed to start.

SCORE: 62
