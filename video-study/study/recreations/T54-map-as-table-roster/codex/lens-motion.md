# T54 — Motion fidelity

Bound artifact: `recreation.html`  
SHA256: `00679517e35c410aab6230d7691860110b33477f69c65ce62410882f9c57e704`

**Motion-lens recommendation: below the RECREATED target.** Code inspection supports the placement and regional-camera mechanics, but the full-roster arrival lacks the required zoom-out. This verdict is logic-based; playback was not independently verified.

The labelled allocation model faithfully implements sequential placement: 55 chips appear in roster order, every 240 ms, at resolved state anchors. Each chip fades and scales from 60% to 100% over 180 ms. Placement continues independently during camera transitions. Regional beats interpolate the SVG viewBox through a single camera, with no competing transforms. These satisfy the core movement model without pretending to reproduce measured specimen placement timing.

Deductions from 100:

- **−16 — Full-roster arrival is a snap, not a zoom-out.** At 14,000 ms, `cameraAt()` immediately returns identity from the eastern close-up. No interpolation connects those views. **Cure:** author a return-to-identity transition that finishes at the derived full moment, with the full-state override taking precedence only after that transition.
- **−6 — The completed full-map state has no playback dwell.** `fullAtMs` equals `durationMs`; playback stops on its first full-map frame. The 800 ms hold occurs before the return, while still zoomed. **Cure:** derive the run duration from the full-view arrival plus a readable hold, preserving the specimen’s distinct full-map beat.
- **−5 — Much of the placement motion occurs outside the camera window.** Placement continues correctly, but regional holds remain on earlier clusters while subsequent chips appear elsewhere. The viewer therefore misses substantial parts of the allocation build-up. **Cure:** coordinate regional coverage and placement groups so introductions remain visible, while retaining placement during camera movement.

The specimen’s subsequent pan into the ballot device is explicitly outside T54’s isolated mechanic in this packet; its omission receives no deduction. Initials-discs and abstract blobs are required substitutions and receive no motion penalty.

**Next attempt:** preserve sequential pops and single-camera ownership; add the continuous return to identity, a full-map dwell, and camera coverage for ongoing introductions.

Filing limitation: the execution tool failed before filesystem access. This return is ready for the named consumer to file verbatim.

SCORE: 73
BODY-WRITE: This return supplies codex/lens-motion.md for consumer filing; no filesystem write was completed.
