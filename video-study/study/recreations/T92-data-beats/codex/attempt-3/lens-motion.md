Motion fidelity: 82/100 — strong measured Act 1 timing and allocated chart construction; synchronization with spoken dialogue remains unproved.

1. **Act 1 matches the observed anchors.** In `CONFIG.beats[0]`, `graphicEntrance:3000`, `enterBorderMs:1000`, and `followUp:5000` drive `stateAt()` and `frame()`: absent before 3 s; border fully present with text still zero at 4 s; settled from 5–10 s; clearing from 10–11 s; absent during 11–11.5 s. This preserves the catalogue’s measured standing window. The entrance fades and raises the card background and left border together; it does not trace the border, but the supplied observations do not establish that tracing is required.

2. **HUD restoration follows full clearance.** `hudYearAt()` returns the beat year throughout entrance, hold, and clear, and the scene year during lead and restoration. Thus 2037 returns at 11 s, when `frame()` hides the card completely. This faithfully implements the supplied presence/year coupling.

3. **Shared cue offsets establish graphic timing, but do not demonstrate the dialogue mechanic.** In `stateAt()`, `graphicEntrance` starts construction and `followUp` ends it. However, `numberSpoken` and `challenge` are only validated; neither produces a spoken or visible dialogue event. Act 1 assigns number/challenge/entrance/follow-up to 0/1.5/3/5 s, so the graphic begins three seconds after the nominal number cue. The next attempt needs an observable dialogue track or synchronized dialogue representation using those same cues, demonstrating the exchange and the graphic’s intended relationship to the spoken number. Metadata alone cannot prove that relationship.

4. **The allocated unit row lands coherently on the card beat.** In `frame()`’s card entrance branch, the numeral follows `tp`, while units rise and appear in count order. With five units, `kp = clamp(tp * 6 - k)` completes the last unit at approximately 4.833 s; the numeral and card text finish at 5 s. This is a faithful allocated counting treatment, although its precise movement is not specimen-evidenced.

5. **Act 2 provides actual staged construction.** `chartStagesFor()` and `drawChart()` progressively extend the beam, grow bars and the hanging bar, then reveal question steps and the numeral. Calculated from the configured 1,500 ms entrance: beam 0–375 ms; bars 225–825 ms; hanging bar 825–1,200 ms; steps 900–1,425 ms; numeral 1,275–1,500 ms. Individual bars receive 200 ms each; individual steps receive 131.25 ms each. The stages overlap but form one chart beat, consistent with the allocated demonstration. The still establishes form, so these timings cannot be credited as observed motion.

6. **The phase machine preserves one beat at a time.** `stateAt()` assigns one owner, `showBeat()` replaces the single card’s contents, and the restoration interval separates Acts 1 and 2. The final chart remains settled through the end hold. No competing data beat is introduced.

Limits: Assessment uses only the supplied source and catalogue. Browser-rendered movement, actual speech synchronization, and the bound file’s hash were not independently verified. Act 2 timing and unit-row choreography are allocation, not measured specimen motion.

SCORE: 82
BODY-WRITE: none (read-only run)