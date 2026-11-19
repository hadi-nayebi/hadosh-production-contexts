**Verdict — 87/100 for motion fidelity.** The build follows Basis B and delivers a continuous nested push. The main deductions are for the reveal at arrival and the fade-masked loop reset.

**Findings**

- **Camera travel.** The recreation source’s `pose()` applies the selected in-out cubic to the scale, and `render()` writes scale and translation together on `#world`. The configured 750 ms is `750 / 2600 = 28.85%` of the transition, matching Basis B’s 7.50–8.25 s endpoint reading. The census supports that allocation as an upper-bound reading of the travel time. The own-check places full scale at 2,150 ms into the build cycle.
- **Nested reveal and cursor guidance.** In the source’s construction block, the webpage is inside the clipped screen from startup. `cursorPosAt()` eases the pointer in from the right, and `pose()` blends the camera target toward it after the hotspot enters the screen at 1,595 ms. The target lands at the screen centre, and cursor opacity reaches zero at arrival. The specimen’s 8.25 s frame still shows the cursor and a small yellow seed. At the build’s corresponding arrival, the cursor has vanished and the title and 41.3 px-wide pill shell are already visible. The measured-fit leg also confirms that both elements are present during the distant approach, where the specimen shows blank teal.
- **Arrival and settle.** The camera reaches its final pose before the content settles. The content starts at identity, dips smoothly to 0.94 scale with a 5 px downward offset, and returns to identity before the hold. Aligning the build’s camera start with segment 7.50 s, `pose()` places pill growth and typing at approximately 8.51–9.04 s and first-row completion at 9.45 s. Those timings agree closely with the census sequence. The own-check corroborates continuity at arrival and the stagger between rows.
- **End pose and loop.** The cover scale and centred target fill the stage with the screen, and the camera stays fixed through the arrived hold. At the cycle boundary, `pose()` resets from approximately 2.034× to 0.65× under a 500 ms fade-out and 500 ms fade-in. The opacity reaches zero at the reset, masking the geometry jump while leaving a perceptible fade between cycles.

**Limits** — This assessment uses the supplied source, quarter-second census, and reported checks. Rendered playback was not independently verified, so the perceived cadence and prominence of the loop fade remain unverified.

**Body-write: none (read-only run)**

SCORE: 87
