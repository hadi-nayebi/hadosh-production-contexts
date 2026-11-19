**74/100 — not yet RECREATED-tier.** Source-only judgment; playback and phone readability remain unverified.

- **Motion: 20/25.** The card rises 14px while fading in; choices and prompt fade separately. This conveys the reveal, but the supplied facts do not establish those separate animations as the specimen’s movement.
- **Timing: 9/25.** Card entrance ends at **600ms**, choices finish at **900/1400ms**, and prompt finishes at **2100ms**. The measured window places the completed ballot around **7000ms**. Deferring the claims replay is valid, but collapsing its timeline changes the ending’s cadence. `holdEnd=7300ms` controls validation only; the image actually remains static from **2100–14000ms**.
- **Purity: 20/20.** Generated DOM/SVG; no embedded specimen, tracing, or external assets apparent.
- **Reusability: 13/15.** CONFIG drives content and scheduling. Validation still accepts negative geometry and arbitrarily long labels; reaching minimum font size does not guarantee fit.
- **Readability: 12/15.** Strong default ink/paper separation and restrained backdrop. Small organization text and estimated text fitting need browser verification.

**Next attempt:** preserve the measured timeline with an explicit configurable reveal offset; complete the ballot around 7s and hold through 14s. Keep the printed ballot as the forced-choice prompt. Verify rendered phone-size frames and reject configurations whose labels cannot fit.

SCORE: 74
BODY-WRITE: None; filesystem tool failed before access, so codex/ and scores.md were not updated.
