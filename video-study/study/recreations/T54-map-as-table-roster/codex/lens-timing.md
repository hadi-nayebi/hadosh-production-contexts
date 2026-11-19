Timing/tempo verdict: **57/100 — below the 70-point lens floor.**

Bound artifact: `recreation.html` sha256 `00679517e35c410aab6230d7691860110b33477f69c65ce62410882f9c57e704`.

The allocation-model disclosure is accurate and earns no honesty deduction. The placement lifecycle is explicitly inferred rather than presented as measured footage. However, matching the segment’s 14.000-second duration does not reproduce its timing structure.

Deductions from 100:

- **−20 — Measured state sequence displaced.** The original holds Midwest zoom at 0–3 s, full map at 3–6 s, and pans away at 6–7 s. This recreation starts empty, introduces West/Central/East zooms at 3/7/11 s, and reaches full view at 14 s. Cure: provide a specimen-aligned timeline; retain the inferred placement lifecycle as a separately identified demonstration.
- **−12 — No full-state hold inside the default run.** Last placement starts at 13,200 ms and finishes popping at 13,380 ms. `holdAfterPlaceMs:800` delays the full-state reveal until playback ends at 14,000 ms. The endpoint remains displayed afterward, but receives zero scheduled hold within the comparison. Cure: reserve an explicit full-view interval before the endpoint.
- **−5 — Full-view return has no transition duration.** `cameraAt()` switches immediately from the East zoom to identity at 14,000 ms; `zoomMs:900` does not govern this return. Cure: author and interpolate a return-to-full beat before the hold.
- **−3 — Compressed placement loses discrete pop cadence.** Default pops last 180 ms against 240 ms spacing, leaving 60 ms between completed pops and subsequent placements. At 110 ms spacing, adjacent pops overlap by 70 ms. Cure: scale or cap pop duration against placement spacing.
- **−3 — Regional-population checkpoint fails.** At the default Central zoom start, 7,000 ms, IN has not placed; it arrives at 7,680 ms. Under the 56-chip compressed swap, Central begins at approximately 3,480 ms and IN arrives at 3,520 ms. Cure: validate regional placement and pop completion against camera arrival, rather than merely checking zoom start `< fullAtMs`.

The compressed schedule correctly derives a 6,960 ms full-state moment and approximately 1,491/3,480/5,469 ms zoom starts. Each 900 ms zoom can finish before the next checkpoint. `checkpointsOk()` nevertheless proves neither regional readiness nor full-state dwell.

This lens blocks RECREATED-tier qualification. Findings were checked against the supplied code and record; filesystem tools failed to start, so this return requires consumer filing.

SCORE: 57
BODY-WRITE: This return supplies the timing verdict and next-attempt cures for consumer filing verbatim at codex/lens-timing.md; no local file was written.
