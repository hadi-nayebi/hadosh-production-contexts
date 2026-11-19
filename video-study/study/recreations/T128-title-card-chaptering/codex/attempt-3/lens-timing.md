Attempt 3 scores 96/100 for timing. The exhibit exit, text and strike beats, full-opacity hold, and derived cycle match the build schedule. The map’s 200 ms fade-in has no measured counterpart in the supplied observations, and continuous playback jumps partway into the exhibit when the 14 s window ends.

| Beat | Timing verified from the recreation source |
|---|---|
| Exhibit | Fully present from 0 to 4600 ms. Translation, shrink, and fade begin together at 4600 ms and finish at 4800 ms, a 200 ms exit. `CONFIG.exhibit`, `stateAt()`, `render()` |
| Map reveal | The reveal starts at 4800 ms with opacity zero at the boundary and positive immediately afterward. The gate reaches full strength at 5000 ms, while contours and field continue darkening through 9250 ms. The onset matches the schedule. The 200 ms ramp is a build choice whose duration is unverified against the source. `CONFIG.map`, `stateAt()`, `render()` |
| Eyebrow typing and dwell | Typing begins at 5450 ms. The 18 characters, including spaces and the final period, span 17 × 60 = 1020 ms, completing at 6470 ms. The complete eyebrow dwells unstruck for 7600 − 6470 = 1130 ms. `CONFIG`, `eyebrowCompleteMs()`, `charsAt()`, `stateAt()` |
| Strike and struck hold | The strike draws from 7600 to 8000 ms, a 400 ms window. The struck eyebrow then holds alone for 9250 − 8000 = 1250 ms. `CONFIG`, `stateAt()`, `render()` |
| Main typing | Typing begins at 9250 ms. At 9500 ms, four characters are visible, giving `A SP`. The eight characters span 7 × 70 = 490 ms, completing with the red period at 9740 ms. `CONFIG`, `mainCompleteMs()`, `charsAt()`, `render()` |
| Displayed hold and exit | The card is fully opaque on [9740, 13140), giving 3400 ms from full reveal. The strike fades to zero at 13340 ms, ahead of the text at 13540 ms. The exit matches the derived schedule and lands about 60 ms ahead of each approximate source exit marker, 13200 and 13600 ms. The measured hold endpoint supports keeping the scheduled timing. `stateAt()`, `cycleMs()`, neutral facts under “Measured displayed hold” |
| Derived cycle and tail | The cycle is 9740 + 3400 + 400 = 13540 ms. The terminal map state holds for 14000 − 13540 = 460 ms inside the segment. At 14000 ms, continuous playback calls `stateAt()` again, which evaluates `14000 % 13540 = 460 ms` and brings back the exhibit mid-beat. `cycleMs()`, `segmentStateAt()`, `render()` |

**Next attempt.** Check the map’s first visible and established frames against the specimen, then set `map.revealMs` to the measured ramp duration while preserving the 4800 ms onset. For continuous playback, keep the terminal state after 14000 ms until an explicit restart. If playback is intended to loop, wrap the playback clock by the 14000 ms segment duration so the exhibit restarts at 0 ms. Preserve the other timing anchors.

**Limits.** This is a timing audit of the supplied source logic and observation record. Rendered visibility, browser frame cadence, and the map’s ramp duration are unverified. The reported own-check results were supplied with the payload.

SCORE: 96  
Body-write: none (read-only run)