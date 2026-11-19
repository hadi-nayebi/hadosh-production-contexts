**Motion fidelity: 86/100.**

- **Single-clock dissolve passes.** One smoothstep progress value drives A=1−p and B=p. Both scenes remain co-visible through the midpoint, with no cut, intermediate scene, or midpoint hold.
- **Timing passes on the declared allocation.** The 250 ms blend matches the measured 200–250 ms range. Its placement at 2400–2650 ms follows the named t=0 allocation.
- **Phase control and return pass.** Clean holds isolate each scene. The declared 600 ms reverse dissolve is continuous at both boundaries; the 14 s wrap returns p=0→0 without a flash.
- **Rendered compositing loses 14 points.** DOM opacity complementarity does not produce complementary image weights. With B above A, the rendered outgoing contribution is **(1−p)²**, while B contributes **p** and the exposed stage contributes **p(1−p)**. At midpoint these are **0.25 / 0.50 / 0.25**. Matching the stage to B’s black field removes a third colour, but still suppresses the outgoing webpage below the intended half-strength contribution. The set-aside therefore leaves a motion-fidelity defect: A disappears faster than the shared progress value implies.

**Next-attempt cure:** retain the required complementary layer opacities while using an isolated additive compositing construction that produces rendered weights A=1−p and B=p. Verify actual midpoint pixels and quarter-progress samples; DOM opacity readings alone cannot establish the cure.

This lens clears 85 and the 70 floor. Overall RECREATED eligibility still requires all five lenses.

BODY-WRITE: none (read-only run)
SCORE: 86
