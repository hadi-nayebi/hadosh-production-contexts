**REVISE.** The core mechanic is appropriately small, but the plan leaves several construction guarantees unspecified.

This review uses the supplied Plan only. File access failed because the execution host is unavailable, so I could not inspect the failure records or persist `codex/codex-plan-review.md`.

1. **Convergent defect — close the lifecycle.** Specify exactly one persistent marker node, created once and repositioned from derived state. No per-step creation, queued transitions, or retained markers. Derive every frame directly from elapsed cycle time so throttling, seeking, and wrap cannot leave surplus markers frozen.

2. **Owner cures — enforce both properties.** White on `#1e2a78` gives approximately **12.5:1** contrast and passes 4.5:1, provided row text uses that ink at full opacity without dimming ancestors. Require contrast validation after configuration changes. For exclusivity, one persistent marker must receive exactly one row position from the phase machine; independent row animation classes would leave this guarantee open.

3. **Parameterization — define the missing semantics.** Write the phase formula explicitly:
   `cycleMs = rows.length * stepMs + holdMs`;
   `step = min(floor(cycleTime / stepMs), rows.length - 1)`;
   `rowIndex = (marker.startRow + step) % rows.length`.
   This means the final row remains selected for **6,800 ms**, including its ordinary step and terminal hold. Confirm that interpretation in the record. Bind marker shape, stage width, row geometry, and both accent fields explicitly; duplicated orange values can conceal an unused parameter. The swap test must rederive the cycle as **11,000 ms**, with card color unchanged.

4. **Score arithmetic — prediction is insufficient.** “Timing” names a weakest lens but supplies no numerical prediction. Record all five predicted scores, their average, and the minimum. With timing at 70, the other four must average **88.75** to achieve 85 overall. T91’s 76.4 and T56’s 90.8 establish neither this construction’s fidelity nor its likely timing score. Unverified layout and allocated pacing warrant explicit uncertainty.

5. **Size discipline — pass.** Three rows, one marker, one clock, and configuration-driven geometry are sufficient. Keep the required measurement and guard artifacts outside the visible mechanic.

Before Execute, amend the Plan with these guarantees. Keep source-frame measurement ahead of implementation, and distinguish measured layout from allocated timing in the resulting records.

BODY-WRITE: none (read-only run). The consumer must persist this return verbatim into `codex/codex-plan-review.md`
