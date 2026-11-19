**REVISE.** The supplied Plan names the right cures but does not yet enforce them by construction.

1. **Readability remains a promise.** A 360×203 stage alone does not guarantee an ~11 px ink floor. Specify CONFIG-driven font sizes, card/chip bounds, padding, measured text fitting, and overflow rejection. Reject any configuration requiring smaller ink, clipping, or overlap. Measure the completed board at 360 px, including rotated exhibits. This directly addresses T54 readability 55 and T17 readability 28.

2. **Figure-ground separation is only partly structural.** Black chips with light ink are specified, but light exhibit-card backgrounds are absent from CONFIG; the map and field are both dark. Add explicit card fill, card ink, and chip ink tokens, with contrast checks for each text/background pair. “Mid-tone map” must become a measured palette constraint.

3. **Phase exclusivity is unenforced.** Define a phase machine with explicit start/end intervals for map → route → portrait → exhibit → stamp → note. Completed elements persist; only the active phase may animate. Resolve `beatMs` versus absolute `stamp.atMs`: both the 2100 ms and 1200 ms swaps must preserve ordering, prohibit overlap, and finish within 14 seconds. Include note typing and its dashed connector in that timing budget.

4. **Parameterization has likely hiding places.** Move label positions, typography, card dimensions, map geometry, route styling, portrait-pin construction, entrance durations, and note-route endpoints into CONFIG wherever §1.3 requires them. Resolve duplicate stamp ownership between `exhibits[].stamp` and top-level `stamp`. Confirm that exhibit `kind` selects code-drawn glyphs without image assets.

5. **The predicted score fails the gate.** Readability 62 is candid but below the minimum 70, regardless of the five-lens average. Require **average ≥85 and every lens ≥70**. The Plan needs the measured-fit countermeasure above before Execute; a prediction cannot establish that it passes.

6. **Scope is appropriate.** Keep the six-element board composition and the explicit newspaper deferral. Distinguish the 31-second observation window from the 14-second recreation cycle in the record.

**Gate to EXECUTE:** file the fitting rules, contrast constraints, phase intervals, and CONFIG coverage; show that all three exact swaps satisfy those rules.

I could not inspect or write workspace files because the execution tool failed to start. This verdict reviews only the supplied gate-out text; the consumer must persist it verbatim to `codex/codex-plan-review.md`.

Body-write: none (read-only run)
