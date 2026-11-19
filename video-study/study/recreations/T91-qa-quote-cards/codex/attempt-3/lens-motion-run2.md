Verdict: MOTION FIDELITY passes at 88/100. The overall average and other lenses are not assessed.

Findings:
- **Settled first frame and unified card:** `resolveSchedule()` assigns specimen entrance duration zero. `showCard()` populates the attribution alongside the quote; `frame()` applies opacity and translation to their shared card parent. Sequence mode’s 450ms fade/rise is an allocation, not an observed entrance.
- **Line-growth anchors match at 360px:** `revealTimes()` produces [0, 2000, 5000, 8000] for four lines, reproducing the observed 1/2/4-line checkpoints. Pre-laid hidden line boxes keep the attribution and card stationary.
- **Growth fidelity is incomplete:** the specimen continues beyond the verified sentence to about 39 visible words at t=8; `CONFIG.cards[2].quote` stops at the 22-word sentence. The timing matches, but the amount of revealed material does not. At 320px, the reported five-line wrap also produces five lines at t=8 rather than four.
- **Exit and empty interval match the bracket:** source arithmetic gives exit start 8000 + 3000 = 11000ms, disappearance at 11600ms, and card-free display through 14000ms. This satisfies “gone by 12s.” The whole-card fade is a disclosed allocation.
- **No competing motion:** `frame()` animates only the card parent and changes quote-line visibility. The HUD remains static; sequence mode maintains one-card ownership.

Limits: Source-level assessment of the supplied payload only. Browser playback, rendered font wrapping, and pixels remain unverified; own-check results are reported evidence, not independently rerun checks.

Body-write: none (read-only run)
SCORE: 88