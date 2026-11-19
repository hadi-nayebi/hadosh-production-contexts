Motion fidelity: **88/100**.

The supplied source implements the required land-and-hold mechanic:

- Scale, opacity, and rise derive from one eased progress value applied to `#card`. Title, rule, body, and footer move as one unit.
- LAND occupies `[0, 1100)` ms; HOLD occupies `[1100, 14000)` ms. The states are exclusive, and HOLD fixes scale/opacity/rise at `1/1/0`.
- The footer inherits the card’s transform and opacity and stays quiet throughout HOLD.
- Re-basing the landing to t=0 faithfully isolates this technique from the surrounding timeline scene.

The remaining fidelity gap is the entrance choreography. The supplied observations describe body line 2 still settling, the capsule rising, and the dotted arch absent at segment t=4.5 s. This build makes every element appear together. That satisfies the prescribed single-unit construction but simplifies the observed movement. The exact scale, rise, and 1100 ms easing profile remain allocations rather than measured matches.

**Next-attempt cure:** obtain denser entrance samples and measure the card’s position, scale, opacity, and settling duration. Use those measurements to tune the parent landing. Record the observed footer/body staggering as a deliberate simplification under the single-unit requirement; adding child animations would conflict with this attempt’s specification. No exit movement is required by the stated LAND → HOLD mechanic.

Assessment is source-based; playback and the local file hash were not independently verified. The execution tool failed to start, so I could not persist `codex/lens-motion.md`.

BODY-WRITE: none (read-only run); consumer must persist this return verbatim at codex/lens-motion.md.
SCORE: 88
