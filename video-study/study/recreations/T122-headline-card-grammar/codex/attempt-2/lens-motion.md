**Verdict — Motion fidelity clears the 70-point lens floor.** All four specified behaviors are present in the source. The five-lens average requires the other four scores.

- **Headline replacement.** At each beat start, `render(t)` sets every inactive `.beat` to zero opacity. With `CONFIG.enterMs = 450`, the incoming headline starts at zero, reaches half opacity at 225 ms, and reaches full opacity at 450 ms. The headlines never overlap. The fade applies to the whole `.beat`, so the insert card and first checklist row also fade in with their headlines. The technique facts specify the headline fade but leave support entry unspecified.
- **Checklist accumulation.** In `effCheck`, the checklist beat’s timing multiplier is `(11000 − 7000) / 4000 = 1`. The row thresholds therefore fall at 7000, 7600, and 8200 ms, followed by the warning at 8800 ms. The `local >=` comparisons in `render` keep earlier rows visible as later ones appear. The completed stack holds until 11000 ms.
- **Loop wrap.** `tick` maps 14000 ms to cycle time zero. At that timestamp, `render(0)` hides the final headline and starts the opening fade from zero, reproducing the same replacement behavior across the loop boundary.
- **Seek and playback.** `seek(ms)` and `tick(now)` use the same cycle normalization and renderer. Seeking backward from 8800 to 7600 ms leaves the first two rows visible and hides the third row and warning. `seek` also resets `start`, so playback continues from the requested phase.

**Limits —** This assessment traces the supplied source. Browser rendering and perceived fade smoothness remain unverified. The check packet’s pass counts were not independently reproduced.

Body-write: none (read-only run)

SCORE: 98