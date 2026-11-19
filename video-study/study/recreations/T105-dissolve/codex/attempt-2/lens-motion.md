**Motion fidelity: 97/100.**

- **Single clock:** `progressAt()` drives the whole blend through one value, `p`. No separate animation can drift.
- **Midpoint compositing:** A stays opaque beneath an opaque full-stage B layer at opacity `p`. Source-over therefore gives rendered contributions **A = 1−p, B = p**. At **2525 ms**, both contribute 0.50; there is no intermediate scene, cut, or midpoint hold.
- **Phase exclusivity:** Only A contributes during holdA and the residual hold; only B contributes during holdB. Co-visibility occurs solely during the forward dissolve and declared return.
- **Timing:** The 250 ms forward blend fits the measured 200–250 ms bound. The named t=0 allocation supports its placement at 2400–2650 ms; source-segment anchoring is not required.
- **Loop return:** The declared reverse dissolve runs continuously at 6200–6450 ms. The cycle seam preserves p=0 on both sides.

**Deduction: −3.** Smoothstep supplies an unverified velocity profile: the specimen census establishes a monotonic blend without a plateau, but does not establish this exact easing. Next attempt should compare normalized progress samples before retaining or adjusting that curve.

These are source-level findings; browser-rendered motion remains unverified. This lens supports a high score, while the overall tier still depends on the five-lens gate.

SCORE: 97
BODY-WRITE: none (read-only run)