Motion fidelity: **85/100 — passes this lens**, at source-logic level only.

- **Card carries the flip:** entry uses one eased progress value for the year’s vertical cross-roll, card travel/opacity, and scene dim. This is an animated register change rather than a bare text swap.
- **Story axis holds:** the clock is assigned once outside `render()`. HUD nodes persist; rendering changes their contents/styles without rebuilding them.
- **Phase exclusivity:** the inactive card is `display:none` outside boundary transitions. The seed state remains settled through the window’s end.
- **Allocation limit:** roll direction, easing, travel, and return choreography are allocated interpretations. The evidence establishes the changed register and entry bracket, not this exact movement.
- **Concrete motion defect:** at `t=0`, circular predecessor selection starts a seed-to-scene return: the visible year is initially **2026**, card fully present, scene dimmed. These resolve over 350 ms. Thus fresh playback inherits the allocated seam return despite the observed opening being **2037 with no card**. Labeling the allocation makes it transparent but does not establish fidelity.

**Next cure:** distinguish initial playback from loop continuation so the first frame starts settled on the scene state. Preserve the shared-progress transition at evidence entry. Resolve source choreography before claiming exact movement equivalence.

**BODY-WRITE:** Filing `codex/lens-motion.md` was blocked because the execution tool could not start (`codex-code-mode-host` missing). This response contains the complete verdict; no file was written.
SCORE: 85
