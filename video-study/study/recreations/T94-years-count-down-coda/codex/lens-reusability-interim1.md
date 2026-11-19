# Reusability review

**Verdict: below the 70-point lens floor.** The CONFIG surface supports useful substitutions, but several advertised keys have no application site, and override validation does not enforce relationships needed for safe reuse. This verdict judges the supplied bound source only.

The reported swap test supports six specific substitutions: starting year 2031, ruler end label 2040, eight near buildings, 400 ms entry descent, building recolor, and Arial. Those are real application sites in the source. This evidence establishes a useful config-driven core; it does not establish the entire advertised contract.

Material gaps:

- **Unused contract keys:** `endHoldMs`, `cards[1].ruler`, `ruler.figure`, and `ruler.fromYear` are never read by rendering or state logic. The figure always renders the same silhouette. Its left-end placement represents a domain anchor convention, but changing `fromYear` has no observable effect or consistency check.
- **Card content is incomplete:** only `cards[1].sub` is displayed, including during the starting-year phase. A different opening and settled sub-line cannot be expressed faithfully through the advertised card entries.
- **Timing relationships are unchecked:** overrides allow `totalMs: 0`, zero ruler-draw duration, reversed flip intervals, and tick completion before tick start. `cardMs: 4800` makes the default tick step zero, yielding `NaN` ticks at tick start. Accepted settings can therefore break deterministic state output.
- **Geometry relationships are unchecked:** zero window gaps pass validation and can create infinite window loops. Reversed building ranges and reversed ruler endpoints also pass. Individually bounded values are insufficient protection.
- **The swap evidence leaves contract gaps untested:** it does not demonstrate hold-duration changes, figure selection, card-specific sub-lines, domain consistency, or rejection of invalid dependent settings.

The fixed flip-easing coefficients and silhouette proportions can reasonably belong to the technique implementation. They do not need arbitrary CONFIG controls. However, declaring such ownership does not make an unread selector a working contract.

Next attempt should remove or implement inactive keys, define and enforce domain/card relationships, validate the merged configuration atomically, require positive geometry divisors, and extend swap tests to cover both meaningful substitutions and invalid relationships.

I could not write the file: both tool attempts failed because the execution host was missing. No on-disk modification or independent test run occurred.

BODY-WRITE: No file written; intended destination is `codex/lens-reusability.md`. Review returned here for the named consumer to file verbatim.
SCORE: 64
