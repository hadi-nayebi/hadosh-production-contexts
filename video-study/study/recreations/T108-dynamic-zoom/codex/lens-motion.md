**Motion fidelity: 82/100.** The continuous zoom mechanism passes; cursor guidance and the approach-to-entry progression need work.

- **Continuous camera — full credit:** one eased progress drives one translate-and-scale transform. Cubic endpoint velocities join the holds smoothly, with no internal phase seam or cut.
- **Nested reveal and arrival — full credit:** the webpage exists inside the screen from construction. The final scale fills the frame width and maps the screen centre exactly to the stage centre.
- **Cursor guidance — −10:** the cursor never approaches or moves into the screen; it remains fixed in world coordinates. The camera targets the screen centre throughout, leaving the cursor visibly off-axis. Its fade thresholds are progress values rather than a demonstrated screen-plane crossing.
- **Approach and entry — −5:** both are geometrically continuous, but the camera starts centred on its final target. This loses the described progression of following the approaching cursor into the screen.
- **Motion timing — −3:** the 2.6-second camera move incorporates time attributed to webpage settling in the specimen, stretching the measured approximately 1.1-second camera push.

The loop reset passes: opacity reaches zero at the seam, hiding the pose reset. These findings are source-level; rendered playback was not verified.

Next attempt: give the cursor an approach trajectory, align camera targeting and cursor disappearance with entry, and preserve the single smooth camera move.

BODY-WRITE: none (read-only run)
SCORE: 82
