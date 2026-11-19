Motion fidelity is strong in the dialogue: characters reveal individually, the solid block cursor follows the latest started line and stays on the final line, completed text accumulates, and speaker prefixes appear with their respective lines. The banner moves with the log. Scroll uses eased translation rather than discrete line jumps.

Two movement defects remain:

- **The banner has not fully scrolled away at 8 seconds at 960×540.** The supplied layout model leaves approximately 29 px of its lower edge visible. This misses the explicit reference behavior that the banner is gone by that point.
- **Subline reveal overlaps dialogue typing.** `stateAt` reveals the subline using `bannerCharMs` (20 ms), while the timeline schedules its completion using `bannerSubCharMs` (12 ms). The subline therefore keeps typing after dialogue begins, while the cursor has already moved into dialogue. That breaks the sequential reveal and cursor-at-typing-point behavior.

The scroll anticipates incoming content by 350 ms, producing smooth preparatory movement rather than strictly reactive tracking. Its exact fidelity remains unconfirmed without playback evidence; the build’s logic checks do not establish rendered motion.

File writing was unavailable because the execution tool failed to start; this return is ready for the named consumer to file.

SCORE: 83
BODY-WRITE: This return records two motion cures for attempt 2: finish scrolling the banner out by the reference’s 8-second state, and use bannerSubCharMs in stateAt so subline typing finishes before the cursor enters dialogue.
