Verdict: **90/100 for timing / tempo; beats 82.4.** Pass on this lens; no separate numeric pass bar was supplied.

Findings:

- **Specimen window matches the evidenced timing.** Source `CONFIG.schedule`, `resolveSchedule()`, and `stateAt()` give a settled card at t=0, full opacity through 11s, disappearance at 11.6s, and 2.4s card-free before the 14s loop. This satisfies the observed presence through about 10s and absence by 12s. The 600ms fade is appropriately disclosed as an allocation within the unresolved exit bracket.

- **Reading time is sufficient for the supplied text.** At 200 wpm, the stated totals require 18×0.3=5.4s, 17×0.3=5.1s, and 28×0.3=8.4s. Sequence `stateAt()` provides fully settled intervals before fading of 5.95s, 5.45s, and 11.35s respectively: slot minus 450ms entrance minus 600ms exit. The supplied per-line packet also leaves each final line sufficient reading time. Berners-Lee’s standalone dash counts as a token in `tokenCount()`, making its implemented total 18 and floor 5.4s; the 5.45s settled interval still covers that stricter calculation, narrowly.

- **Internal reveal anchors are well matched, with a material qualification.** `revealTimes()` produces [0, 2000, 5000, 8000] for four lines, matching the observed second-line and four-line checkpoints; 5s is honestly labeled interpolation. However, the specimen has about 39 words visible by 8s, while this build completes only the verified 22-word sentence then. Its final 3s hold is comfortable, but the information delivery is lighter than the observed specimen. Matching line-count checkpoints therefore does not establish matching reading tempo.

- **Sequence mode meets its separate demonstration claim.** `resolveSchedule()` derives 7000+6500+12400+2000=27900ms, preserves transcript order, and gives the longest quote the longest slot. Its entrance overlaps the reveal clock rather than adding another 450ms; the build record’s additive entrance wording is imprecise, although the source behavior and available reading time remain coherent.

Limits: Logic-level assessment of the supplied payload only. Browser playback, actual font-dependent wrapping, and source-motion comparison remain unverified. No claim-cue timestamps exist, so spoken alignment is not assessed. The own-check results are supplied evidence, not independently rerun checks.

Body-write: none (read-only run)
SCORE: 90