Timing/tempo is a close match on the declared **t=0 allocation** basis.

- **Blend duration:** 250 ms sits within the measured 200–250 ms bounds, though about 14% longer than the 220 ms central estimate. Small deduction for choosing the slow edge.
- **Trajectory:** At 50 ms steps, outgoing smoothstep weights are **1.00 / 0.896 / 0.648 / 0.352 / 0.104 / 0.00**, versus the specimen proxy **1.00 / 0.93 / 0.61 / 0.45 / 0.13 / 0.00**. Broadly faithful; the largest mismatch is near 150 ms, where the recreation sheds outgoing weight faster.
- **Midpoint:** Reached at 2.525 s, with no plateau. Correct continuous crossover.
- **Holds:** A holds 0–2.400 s; B holds 2.650–6.200 s. The residual A hold is 6.450–14.000 s. These form a coherent declared allocation; source-segment anchoring warrants no deduction.
- **Return:** The 250 ms reverse matches the forward duration. It is correctly identified as loop furniture, with no specimen counterpart.

Next cure: test approximately **220 ms** and fit the trajectory against the sampled proxy before retaining smoothstep. Browser playback remains unverified.

SCORE: 93
BODY-WRITE: none (read-only run)