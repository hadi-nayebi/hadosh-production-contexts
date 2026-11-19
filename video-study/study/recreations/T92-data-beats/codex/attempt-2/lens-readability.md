READABILITY: 86/100 — source and supplied measurements support readable phone-size holds, with moderate uncertainty from the missing rendered frame.

1. **The value has clear typographic dominance.** `CONFIG.type` sets value type at 46 px versus claim type at 20 px; supplied measured ink is 35 px versus 19 px. Both `valueRow` and the chart numeral use that value size. This supports a strong numerical focal point on each beat.

2. **Card hierarchy and fit are supported, with one measurement discrepancy.** Status/place, claim and source have distinct sizes, spacing and colors (`DOM construction`, card styling). Supplied ink heights of 13/19/12 px support that hierarchy, although the source remains small. The stated 292 px inner width excludes the left border: `#card` uses `border-box`, so `cardW:320 − 2×cardPad:14 − borderW:3 = 289 px`. The reported widest secondary line, 277.3 px, still fits with 11.7 px remaining. Next attempt should reconcile the measurement and verify actual Georgia wrapping.

3. **Foreground separation is strong during settled holds.** `#scene` alone receives `sceneDim:0.5`; card, numeral and chart are sibling elements. The hold branch sets their applicable opacity to 1, with pale ink and gold accents against dark blue surfaces (`CONFIG.palette`; `frame()`, final branch). No hold-time fading is evident. The supplied 11.4 px card-to-chart clearance supports separation, pending browser confirmation.

4. **Reading time is adequate, though Act 2 carries more text.** From `stateAt()` and beat configuration, Act 1 settles at 5000 ms and clears at 10000 ms: **5 seconds**. Act 2 settles at cycle 13000 ms and remains through the 20000 ms cycle end: **7 seconds**, comprising its 6-second hold plus 1-second end hold. These intervals support reading the claims and sources. Act 2’s timing remains an allocation, as declared in the payload.

5. **Missing rendered evidence warrants a moderate deduction, not an assumed failure.** `RENDER-FRAME-UNVERIFIED` leaves actual font metrics, wrapping, baseline placement and small-text clarity unconfirmed. Next attempt should provide settled 360 px browser frames for both beats, checking the source lines, HUD day line and chart clearance. The supplied stand-in measurements support plausibility but cannot establish final pixel legibility.

Limits: Payload-only assessment bound to the supplied SHA-256. No browser frame or independent measurement was available; supplied PIL measurements are treated as reported evidence.

SCORE: 86
BODY-WRITE: none (read-only run)