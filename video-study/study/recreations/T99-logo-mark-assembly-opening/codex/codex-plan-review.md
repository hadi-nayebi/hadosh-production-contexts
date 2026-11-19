**Verdict: REVISE before Execute.** The phase structure is sound in principle, but the Plan leaves construction details open at its named failure points.

1. **Convergent defect — surplus-state prevention is incomplete.** Three triangles avoid a particle field, but do not guarantee that swaps or loops cannot append duplicate nodes or retain stale transforms. Specify exactly `pieces.length` persistent triangle nodes, one wordmark, and one clock. Each cycle and CONFIG swap must reset all state deterministically; completed pieces must receive their exact final transforms.

2. **Owner catches — strengthen both construction guarantees.**
   - **Intensity:** white on black establishes wordmark contrast. It does not establish separation for every piece and overlap. Specify the overlap/compositing method and verify the settled cluster with both the original red and swap-test orange. Otherwise the defining yellow/cyan overlaps remain an implementation guess.
   - **Phase exclusivity:** “ONLY after settle” needs an enforceable transition condition. Require every piece to report completion and receive its final transform before the machine enters RESOLVE. Wordmark visibility must be controlled by machine state. Define “settled” as the exact terminal pose, with no continuing spring or CSS transition during RESOLVE.

3. **Parameterization — the table does not yet bind the whole mechanic.** Missing decisions include triangle geometry/orientation, final positions and overlap offsets, cluster anchor, wordmark position/gap, typography and fit rules, entry/settle easing, and the wordmark’s resolve treatment. These are the likely hiding places for hardcoded animation values. Bind them through CONFIG or explicit derivations from CONFIG, including stage scaling.  
   
   Also define per-piece duration as `assembleMs − (pieces.length − 1) × staggerMs`, with invalid combinations rejected. Under the required swap, that becomes **1100 ms**, and the cycle becomes **13200 ms** if the remaining durations stay unchanged. Record that expected result. Specify atomic swap restart behavior.

4. **Bar arithmetic — insufficient evidence to predict clearance.** The acceptance rule must explicitly require **five-lens average ≥85 AND every lens ≥70**. T20’s 82.4 average and 68 minimum demonstrate why both matter; T08’s 88.6 average alone does not establish minimum-lens safety. Naming motion as the likely minimum is reasonable, but its numerical prediction remains unsupported until final cluster geometry and settle behavior are prescribed. Do not infer a passing forecast from the family scores.

5. **Size discipline — retain the proposed scope.** Three triangles, their assembly, one wordmark resolve, and hold are the core mechanic. Glow, trails, particles, extra camera movement, and decorative transitions belong in separate variants. The missing geometry, fit, and phase decisions above are necessary construction details.

The Observe caption disagreement also remains open: resolve it through the prescribed segment-frame extraction before implementing the assembly trajectory. Keep the supplied timing explicitly labeled as allocation.

**Required revision:** prescribe final geometry/compositing; enforce completion-based phase transitions and bounded node/state ownership; close CONFIG and swap semantics; state both scoring thresholds and the evidence limits.

The filesystem tool failed to start, so this review could not be filed. The consumer should persist this return verbatim to `codex/codex-plan-review.md`.

BODY-WRITE: none (read-only run)
