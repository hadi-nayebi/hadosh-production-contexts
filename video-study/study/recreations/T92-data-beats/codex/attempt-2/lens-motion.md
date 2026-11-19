**Verdict: 77/100 — the graphic sequence largely follows the mechanic, but the HUD changes too early and the cue schedule does not demonstrate spoken synchronization.**

1. **Act 1’s border-first construction and standing window are faithful.** `CONFIG.beats[0]` and `stateAt()` produce lead 0–3000 ms, border entrance 3000–4000, text fill 4000–5000, settled hold 5000–10000, clear 10000–11000, and restoration 11000–11500. `frame()` keeps text and numeral invisible during the border-only interval. These match the supplied measured anchors.

2. **The HUD violates the measured lead.** The catalogue specifies HUD **2037** while the card is absent at 0–3 s. `hudYearAt()` instead returns the beat’s **2025** in every phase except `restore`, including that lead. Restoration itself is correctly delayed until the card has fully cleared at 11000 ms. **Cure:** return `sceneYear` during `lead` and `restore`; use the beat year during entrance, hold and clear.

3. **Shared cue fields establish graphic timing, but cannot prove dialogue coupling.** In `CONFIG.beats[0].dialogue`, `numberSpoken:0` precedes `graphicEntrance:3000` by three seconds. `stateAt()` uses `graphicEntrance` and `followUp`; neither `numberSpoken` nor `challenge` drives any visible or audible dialogue event. Thus the follow-up marks graphic settlement mathematically, but no rendered exchange demonstrates the number surviving a challenge. **Cure:** render or synchronize the spoken exchange to this clock, and explicitly reconcile the number’s cue with the observed delayed card entrance.

4. **The allocated unit movement is a faithful explanatory addition.** In `frame()`’s card entrance, the numeral follows `tp`, while units rise and fade in count order. With five units, `kp = tp * 6 - k` makes the final unit finish at approximately **4833 ms**, before settlement at 5000 ms. This lands the complete unit group on the card beat without claiming observed unit animation.

5. **Act 2 supplies genuine staged construction.** `drawChart()` progressively extends the beam and grows bars and the hanging bar; steps and numeral fade into place. From `chartReveal` and the 1500 ms entrance, the beam takes **375 ms**, each of three bars **200 ms**, hanging bar **375 ms**, each of four steps **131.25 ms**, and numeral **225 ms**. The packet’s ≥200 ms claim applies to group spans, not every element. This remains a plausible allocated draw-on sequence; the supplied still cannot establish its original timing.

6. **Beat ownership is coherent.** `stateAt()` selects one beat, and `showBeat()` switches the card’s supporting graphic as a unit. Act 1 clears before Act 2 begins; the final chart remains settled through the end hold. Overlapping construction stages within the chart do not introduce a competing data beat.

**Limits:** Assessed only the supplied payload. No browser playback, rendered frames, audio synchronization, or independent hash verification; the reported harness passes were not independently executed.

SCORE: 77
BODY-WRITE: none (read-only run)