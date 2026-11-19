Motion fidelity: **83/100**. Source-and-record assessment of the payload-bound build; **PIXEL-UNVERIFIED**.

Preserved: Dec 11 enters alone at 400–1000 ms; Dec 1 joins at 1200–1800 ms; dots reveal left-to-right at 2000–2990 ms. Both pages and the completed connector remain fully visible through the hold. Default entrance and connector phases do not overlap.

Deductions:

- **−10 — Entrance growth absent.** Observed frames describe incoming pages as smaller/faded before reaching full size. `render(tMs)` changes only opacity; page dimensions remain fixed and no scale transform exists. Cure: derive page scale alongside opacity during each entrance.
- **−7 — Hold movement absent.** The observed hold includes slow zoom-out and settling toward the upper frame. After entrance, page and connector geometry stays constant until the stage fades. Cure: add shared composition scale and vertical-position progression through the hold.

Props being disabled follows the governing Plan and receives no deduction. For a future enabled version, the bill needs a separate body-text-fill phase before the coin; the current branch fades in a bill containing only kicker/title, then the coin.

BODY-WRITE: none (read-only run)
SCORE: 83
