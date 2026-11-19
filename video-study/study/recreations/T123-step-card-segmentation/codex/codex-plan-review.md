**Verdict: REVISE before Execute.**

1. **Convergent defect: accumulation is promised, not guaranteed.** “Tiles never removed” states the intended behavior but does not define the construction that enforces it. Specify one persistent tile per step; within a cycle, eligibility must be monotonic. Only the cycle reset may clear tiles. Numeral legibility also remains unproven: tile dimensions alone cannot guarantee readable numerals at phone size.

2. **Headline exclusivity needs explicit state logic; the measured anchors require separate events.** Define exactly one active headline, selected by the latest eligible headline event, and derive tile visibility independently from tile events. Overlapping entrance animations must never produce two active headlines.

   The binding Plan’s shared `atMs` cannot reproduce the supplied census: both tiles appear by approximately 7 seconds while headline 1 remains; headline 2 appears around 8.5 seconds. Binding headline 2 and tile 02 together at 12 seconds creates a known structural mismatch. Printing that mismatch as a deviation documents it but does not resolve it. Revise to separate `headlineAtMs` and `tileAtMs`, supported by the census’s observation bounds, before building. Step 1 likewise needs separate anchors: headline present by 2 seconds; tile absent at 2.75 and present at 3.5 seconds.

3. **Parameterization is incomplete.** CONFIG binds content, shared anchors, entrance duration, cycle duration, tile size, and colors. Hardcoded accidents can still hide in typography, numeral size, headline placement, row gap, padding, grid spacing, chip geometry, border/radius, entrance distance/easing, viewport scaling, and reset behavior. Name these controls and keep animation logic free of presentation literals. Use an explicit headline emphasis enum with defined plain/blue/chip rendering.

   The exact swap test must remain as supplied, but it does not test accumulation, headline exclusivity, or phone readability. Add checks across event boundaries and cycle reset.

4. **The passing bar is not established.** Five lenses require a total **≥425**, with **every lens ≥70**. With predicted readability **78**, the other four must average **86.75**. That is possible, but no five-lens forecast currently supports it.

   **Readability is the provisional minimum**, with 78 an unverified estimate. T38’s readability **68** and reusability **68** make both credible failure risks, especially while typography and layout remain unbound. T102’s **88.8** and T45’s **88.2** show family precedent for passing; they do not establish this Plan’s score. File all five predicted scores with reasons and calculate both gates explicitly.

5. **Size discipline: pass, with a boundary.** Headlines plus accumulating numbered cards constitute a bounded core mechanic. Keep screen inserts deferred and the grid a simple supporting ground. Additional scene choreography would expand beyond the stated technique.

**Required revisions:** encode persistent tile state and exclusive headline selection; separate and reconcile measured event anchors; complete the parameter controls; and supply the five-lens forecast. Then re-run the Plan gate.

The file-writing tool failed to start, so this return was not persisted to `codex/codex-plan-review.md`; the consumer must persist it verbatim.

BODY-WRITE: none (read-only run)
