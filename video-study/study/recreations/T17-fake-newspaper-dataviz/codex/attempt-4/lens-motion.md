Verdict: **78/100 — motion mechanisms are largely implemented, but figure transitions compromise the continuous-broadsheet motion.**

- **Abrupt figure replacement:** `render()` enables `.on` only for the active figure; `.fig` defaults to `opacity:0`. At each window boundary, the entire preceding figure disappears and its replacement appears immediately. The masthead stays static, but the figure area undergoes hard swaps. Cure: preserve the broadsheet’s continuity and stage sequential figure arrivals without whole-panel replacement.
- **Pile-up starts mid-arrival:** In `stackState()`, the first unit’s start is negative because `stackArrivalSpan=1.6`. At `q=0`, its arrival progress is already `(1.6−1)/1.6=0.375`, and its opacity is 1. Cure: start the first unit at zero progress within FIG.22’s window, then retain sequential settling and the synchronized counter.
- **Other required mechanisms have source support:** `lineChart` uses stroke-dash draw-on; `waffleState()` advances individual dots and typed characters; bars grow and the donut draws; `orgState()` reveals nodes sequentially; `collapseN()` drives both counter and graph; `stampScaleAt()` implements approach, overshoot, compression and settle; margin notes receive progressive opacity. These support mechanism fidelity, without proving the perceived result.
- **Playback requires intervention:** `playing=false` at load. Cure: ensure the consumer’s external clock starts the sequence, or provide automatic playback when used as a standalone specimen.

Limits: Source-level assessment of the supplied stream only. No rendered playback or specimen comparison was available; stamp impact, visual continuity and perceived synchronization remain unverified. This single lens cannot determine the five-lens BAR.

BODY-WRITE: none (read-only run); the consuming record should carry the cures for abrupt figure swaps and the stack’s partially completed first arrival, plus the outstanding rendered-motion verification.
SCORE: 78