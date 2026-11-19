Verdict: **85/100** — the typed reveals, strike, phase order, and hold closely match the observed movement. The exhibit’s exit substitutes fading for completing its travel offscreen.

1. **Exhibit exits in the correct direction but remains partly onscreen geometrically.** In supplied `recreation.html`, `CONFIG.exhibit` specifies a 200 ms exit with translation (−150, −70) and scale 0.5. `render()` applies those values while `stateAt()` simultaneously reduces opacity to zero. From the 360×203 stage and 300×128 exhibit, its terminal centre computes to (30, 31.5), with dimensions 150×64 before rotation: substantial card area still intersects the stage. The observation requires sliding and shrinking toward the top-left, **out of frame**, during 4600–4800 ms. Next attempt: extend the translation until the transformed card clears the stage; remove the compensating opacity fade unless supported by observation.

2. **The map darkens correctly but lacks the observed vignette.** `stateAt()` reveals the map during the exhibit exit, then decreases its opacity from 1 at 4800 ms to `map.fadeTo = 0.22` at 9250 ms. `render()` also darkens the stage background. This preserves the map-only beat and faint later presence. However, `.mapground` and its SVG contain no spatial vignette. Next attempt: add edge-weighted darkening while retaining the progressive temporal darkening.

3. **The principal movement sequence matches.** Evidence: `charsAt()`, the completion helpers, and `stateAt()` implement:
   - Eyebrow: 18 glyphs, completing at `5450 + 17×60 = 6470` ms.
   - Unstruck dwell until 7600 ms; left-to-right strike growth through 8000 ms.
   - Struck eyebrow alone until 9250 ms.
   - Main: eight glyphs, completing at `9250 + 7×70 = 9740` ms. At 9500 ms, four glyphs produce the observed “A SP”.
   
   Hidden spans retain their layout positions, so typing does not continually recenter the visible prefix. The nested phase selection assigns one phase at each cycle-relative time.

4. **Hold and exit are close, with a small timing offset.** The source computes full-opacity hold `[9740, 13140)` and exit `[13140, 13540)`, approximately 60 ms earlier than the observed ~13200–13600 ms exit. `strikeO` reaches zero halfway through that exit; text fades across its full duration. This supports the strike disappearing first, although both fades begin together. Next attempt: align exit onset near 13200 ms; any separate strike-only fade lead requires finer reference evidence.

Limits: Assessment uses the supplied complete payload and source, without rendered playback or archived frames. The workspace contains no `recreation.html`, so the bound SHA-256 and reported harness results were not independently verified.

SCORE: 85
Body-write: none (read-only run)