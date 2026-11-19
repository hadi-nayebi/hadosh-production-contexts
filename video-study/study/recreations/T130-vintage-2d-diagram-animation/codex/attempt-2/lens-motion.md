Motion fidelity: 94/100 — clears this lens’s ≥70 floor.

- **Iris:** `tick()` applies a circular clip-path expanding from radius 0 to 260 during 4250–4750 ms, matching the specified reveal.
- **Drive and stop:** The clamped translation holds the car offstage until 6500 ms, moves it left, and stops it at 9500 ms. The revealed diagram remains still during 4750–6500 ms.
- **Shots and hold:** Two puffs begin at 10500 and 10750 ms, expand and fade independently, then leave the diagram stationary through 14000 ms.
- **Minor phase defect:** `phase()` labels the revealed pause as `DRIVE` from 4750 ms, although movement starts at 6500 ms. Also, `ph` is unused: visible exclusivity comes from the time formulas rather than phase-controlled rendering.

Limits: Source-only assessment against the supplied movement description; playback and source footage were not inspected. Overall average and improvement over 79.2 require the other four lens scores.

SCORE: 94
BODY-WRITE: none (read-only run); returned motion-fidelity assessment for consumer filing in scores.md.