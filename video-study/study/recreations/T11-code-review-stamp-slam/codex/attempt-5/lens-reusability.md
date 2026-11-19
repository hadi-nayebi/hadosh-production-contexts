**Reusability is strong, but incomplete.** Source review supports **81/100** for this lens.

- CONFIG covers the principal timing, motion, card content, arch geometry, reviewer dimensions, typography, and stamp controls, with clear application sites.
- URL overrides use a candidate copy and atomic adoption. Duplicate, empty, unknown, excess-title, and malformed-duration inputs produce observable rejection records.
- Nested validation explicitly checks containers and sparse arrays; its catch prevents exceptions from escaping `validateConfig`.
- **Startup protection has a gap:** overrides run before startup validation. With a malformed shipped configuration, `palette: null` plus `?accent=...`, or `overrideLimits: null` plus an override, can throw inside `parseOverrides` before the observable halt is established.
- **Technique variables remain outside CONFIG:** card and panel gaps, padding, corner radii, reviewer spacing/minimum height, stamp letter spacing, and several font weights remain CSS literals.
- Counter validation accepts approval values beyond `digitBase ** counterDigits - 1`; the rendered counter silently loses leading digits.
- The documented URL surface is practical, but rejection inspection requires the console. No built-in effective-configuration or phase-inspection surface is exposed.

These are source findings; I could not independently run probes or write the attempt return, build record, or `scores.md` because the execution tool failed to start.

SCORE: 81
BODY-WRITE: This return records parameter coverage and atomic override strengths, plus startup override exceptions, stranded CSS variables, counter-capacity truncation, and swap-surface limits; filesystem filing remains outstanding.