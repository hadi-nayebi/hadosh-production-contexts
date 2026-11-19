Readability is strong by construction at the defaults, but rapid pages do not remain readable long enough for deliberate inspection. This is a source-based assessment; rendered phone-size legibility remains unverified.

Settled page and title particles reach `foregroundAlpha: 1.0`; never-borrowed reserve particles render at `0.28`, and free or released surplus at `0.16`. `updateParticles()` applies these states explicitly, and `draw()` paints borrowed particles last. Background particles never individually receive foreground intensity at the defaults. Overlapping translucent dots can accumulate brightness, so this does not prove pixel-level separation everywhere.

Pending stagger, travel and front-page turning all render at `travelAlpha: 0.38`. Registration then interpolates toward settled intensity rather than immediately illuminating displaced arrivals. This substantially reduces competition with formed content. The backing stack settles at `0.60`; it remains distinguishable from the foreground page, although it becomes brighter than the front page during compression. The gold ring uses its own colour and `0.95` intensity, with its position above the title providing clear geometric separation.

“AI GURU” should be legible during the phone-size hold: width fitting uses `maxWidthRatio: 0.86`, bold lettering is sampled every 4 px, and particles have a 1.6 px radius. The solid `#a9c6de` label contrasts with black. However, maximum title travel plus stagger is 1377.5 ms, followed by 300 ms registration; the last title particles therefore reach full intensity about 177.5 ms into the nominal hold, leaving approximately 922.5 ms fully registered before the seam. That is usable, but the entire 1100 ms hold is not uniformly mature.

The page silhouette has a dense 3 px outline sampling gap, internal line structure and dimmer backing outlines. The DOM counter uses white numerals and a pale blue label; the supplied measurements establish separation from the stack and a 35 px numeral at 360 px width. These support readability without proving the rendered result.

The principal priced defect is rapid-page dwell: `turnEffForInterval()` reserves only 20 ms after each 67.5 ms rapid turn. The build record measures one 16.7 ms readable frame per rapid page at 60 fps, and only 2–4 of eight pages receive a readable frame with 50 ms steps. Cost: viewers can recognize flipping activity and follow the counter, but cannot reliably inspect each fully formed page. Early and final pages provide substantially better reading opportunities.

A secondary limitation is that alpha validation clamps each value independently without enforcing their hierarchy. Legal runtime configuration can make reserve or surplus equal to foreground intensity. The default build satisfies separation; the configurable construction does not guarantee it.

Carry-forward cures: increase rapid-page fully registered dwell; verify rendered title, page, ring and counter contrast at phone size throughout the cycle; enforce intensity relationships during revalidation.

Body-write: this return contains the score, findings and inherited cure list, but **no file was written**. The execution tool failed to start, preventing creation of `codex/attempt-5/lens-readability.md`.

SCORE: 82