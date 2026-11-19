**Verdict: REVISE before Execute.** The Plan identifies the right risks, but its central guarantee remains a requirement to implement rather than a specified construction.

1. **Card-cycle overlap — blocking.** Specify one pure schedule function used by both the renderer and the logic harness. For example, `slotMs = enterMs + holdMs`; derive the active card and its local phase from elapsed time. Render only that active card, resetting its entry state on each cycle. Assert exactly one active card and `enterMs + holdMs <= slotMs`. Test immediately before, at, and after every phase/card boundary, including wraparound and the exact CONFIG swap. Independent timers or CSS completion events must not determine stage ownership. Any exit transition needs its own accounted interval; an unbudgeted fade would recreate overlap.

2. **Owner catches — partly covered.** `cards[].livery` establishes the source of colors, but does not guarantee figure-ground contrast. Define which backgrounds each text role occupies, then calculate contrast for those actual ink/background pairs, including the swapped livery. Phase exclusivity should follow from the schedule’s single active-card result. Hand-maintained entry timestamps are insufficient.

3. **Parameterization — census needed.** Likely hiding places are CSS `transition-duration`, transition shorthand, animation delays, fallback colors, pseudo-elements, outlet-specific selectors, and duplicated JavaScript timeout values. Bind duration and livery through CONFIG-derived styles/custom properties. Define the rise/slide distance policy explicitly: fixed geometry may be legitimate, but must not secretly encode duration or vary through unrelated CSS overrides. Inventory every exposed parameter through **CONFIG → consumer → swap evidence**, including what `layout` actually controls. A one-value layout selector alone proves little.

4. **Scoring — reusability is plausible, but incomplete.** T38’s supplied first scores average **76**, with two lenses at **68**: both gates failed. Its later **86.8** average demonstrates recovery, but the supplied excerpt does not establish its final minimum. T56 must report all five scores and enforce `average >= 85 && minimum >= 70`. Reusability is a credible risk; timing and readability also remain exposed, especially with pixel verification unavailable. A CONFIG-binding census supplies binding evidence, not visual clearance.

5. **Scope — acceptable.** Keep cycling evidence cards, generated initials/abstract artwork, and the comparison surface. No map, portraits, or broader scene reconstruction is needed. At 360px, record usable text width, font assumptions, wrapping policy, and overflow behavior. Arithmetic is useful evidence, but cannot establish actual glyph fit without rendered measurement; retain **PIXEL-UNVERIFIED**.

**Required amendment:** specify the shared schedule and boundary assertions, contrast checks, CONFIG-binding census, and explicit limits on readability/visual scoring. Those changes make the Plan reviewable before implementation spends on it.

The filesystem tool failed to start, so this review uses only the supplied excerpts and was not saved. The consumer must persist this return verbatim in the item’s `codex/codex-plan-review.md`.

Body-write: none (read-only run)
