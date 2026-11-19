Motion fidelity is strong at the cut, with weaker fidelity in the surrounding movement.

- **Accelerating push: −8.** Cubic easing makes translation and scale accelerate continuously, with peak incoming velocity immediately before the cut. However, the 1500 ms push lasts roughly 2–3× the measured specimen push, softening its punch.
- **True cut and anchor continuity: no deduction.** Exclusive scene visibility switches instantly at 10300 ms. The shared primitive and derived transforms preserve both anchor geometry and glyph placement across the boundary; no dissolve masks the join.
- **Post-cut settle: −5.** Mark growth and leftward wordmark entrance occur together as described. Growth reaches only 1.6× over 700 ms, versus approximately 2× over 500 ms in the specimen. Linear interpolation also gives the growth an abrupt stop.
- **Preparatory gesture: −2.** The outline fades into visibility rather than drawing around the selection. This loses a small part of the described preparatory movement.
- **Phase exclusivity and loop reset: no deduction.** Half-open intervals keep push and settle separate. The stage fades fully out and back in across the seam, concealing the reset.

This is a source-level assessment; rendered playback remains unverified. Next attempt: shorten the push, bring post-cut growth closer to the measured extent and duration, and implement the outline’s drawing gesture.

SCORE: 85
BODY-WRITE: none (read-only run)
