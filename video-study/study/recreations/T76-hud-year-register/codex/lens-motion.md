# Motion fidelity — 89/100

**Verdict:** Clears this lens’s floor. Source inspection supports the intended movement model; pixels remain unverified.

- **Card carries the flip:** At entry, one eased progress value drives the outgoing/incoming year spans, card translation and opacity, and scene dimming. This is a coordinated transition rather than a bare text swap. At the midpoint, progress is 0.875: the card has travelled to −3.25 px, incoming-year opacity is 0.875, and scene opacity is 0.60625.
- **Story axis holds:** The clock is written once outside `render()`. Neither entry nor return modifies its text, position, or opacity.
- **Phase exclusivity:** Settled scene states set the card to `display:none`. During boundary transitions, its presence is explicitly coupled to the year change. No independent card animation can drift from that progress.
- **HUD persists:** The HUD nodes exist once; rendering updates the year spans without rebuilding the furniture.
- **Opening and seam:** Fresh playback opens settled at 2037 with no card. The return transition occurs only on loop continuation, preserving the observed opening while supporting an allocated seam exit.

**Deduction:** The evidence establishes the two register states and brackets entry; it does not establish the recreated vertical cross-roll, leftward card travel, easing, or 350 ms duration. These are honestly labeled allocations, so this attempt demonstrates a coherent interpretation rather than verified equality to the specimen’s choreography. Source inspection also cannot establish how strongly that causal coupling reads in playback.

**Next-attempt cure:** Resolve the source transition frame by frame and compare its year/card motion with the allocated movement. Verify rendered entry and seam playback before claiming visible fidelity.

BODY-WRITE: Prepared this return for `hidden_files/study/recreations/T76-hud-year-register/codex/lens-motion.md`; direct filing failed because the execution host was unavailable. Consumer must file it verbatim.
SCORE: 89
