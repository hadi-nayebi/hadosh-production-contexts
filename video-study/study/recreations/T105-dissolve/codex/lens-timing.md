Timing/tempo is strong, with a small visible-curve mismatch and an overlong return.

- **Blend duration:** 250 ms sits at the measured 200–250 ms boundary, only 30 ms above the ≈220 ms active blend. This preserves the specimen’s brisk dissolve.
- **Trajectory:** Smoothstep produces outgoing DOM opacities **1.00 / 0.896 / 0.648 / 0.352 / 0.104 / 0.00**, reasonably close to the sampled **1.00 / 0.93 / 0.61 / 0.45 / 0.13 / 0.00**. It passes continuously through the midpoint without a hold. However, stacked complementary opacities make the outgoing scene’s rendered contribution `(1−p)²`; it reaches 25% at the nominal midpoint. That makes the visible outgoing fade accelerate beyond the measured proxy.
- **Hold allocation:** Boundaries are coherent: A holds to **2.400 s**, dissolve ends **2.650 s**, B holds to **5.850 s**, return ends **6.450 s**, then A holds another **7.550 s**. These are valid declared allocations; no penalty applies for moving the dissolve away from source time. The combined **9.950 s** of static A nevertheless makes repeated playback feel sparse.
- **Loop return:** The continuous, seam-safe **600 ms** return is **2.4×** the forward dissolve’s duration. Although explicitly declared, it gives the invented reverse transition more temporal emphasis than the studied mechanic.

**Next-attempt cures:** Match the rendered outgoing luminance trajectory, shorten the return toward the forward blend’s duration, and reduce the long residual A dwell if the cycle allocation permits.

This lens clears 70 and scores above 85; the overall tier still requires all five lenses.

BODY-WRITE: none (read-only run)
SCORE: 86
