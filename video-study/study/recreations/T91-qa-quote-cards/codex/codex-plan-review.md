Verdict: **revise before Execute**. The amended plan addresses the named family defects, but leaves two construction guards unspecified.

1. **Attribution fit needs an enforceable rule.** Specify the attribution’s minimum font size, available width, wrapping behavior, and overflow response in the fit table. Check all three speaker/role/year blocks at 360 px, including the exact Arial/Ada swap. Keep attribution present throughout the card’s entrance. T57’s failure class remains open until these constraints are explicit.

2. **Define the phase calculation and boundary reset.** For cycle time `u = t % (3 * cardMs + endHoldMs)`, use `index = min(2, floor(u / cardMs))`. Apply entrance progress from that card’s slot start; the end hold must leave card 3 settled. At each boundary, replace the complete content and reset entrance state before paint. Avoid queued exit animations or retained attribution from the preceding card.

The remaining construction is coherent: one DOM card prevents overlap, whole-card entrance deliberately supersedes the digest’s line-by-line description, and three slots prevent a single-card hold across the window. The stated duration is correct: **14,000 ms**, becoming **9,200 ms** under the timing swap.

Verify immediately before, at, and after each slot boundary and loop reset, plus during end hold. Check attribution contrast against its actual card background and HUD legibility wherever it overlaps the card. The five-lens threshold remains **average ≥85 and minimum ≥70**; predicted readability is a risk assessment, not passing evidence.

I couldn’t persist this review because the execution tool failed to start (`codex-code-mode-host` missing). The consumer must save this return verbatim to `codex/codex-plan-review.md`.

BODY-WRITE: none (tool failure; review returned in chat, target file not written).
