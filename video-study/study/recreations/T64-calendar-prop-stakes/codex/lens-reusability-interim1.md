Reusability is substantial: page content, colors, dot generation, and principal timings consume CONFIG, and the recorded swap exercises those paths. No unapplied CONFIG keys found. The validation contract remains incomplete.

Deductions from 100:

- **−7 — Text-width coefficients are unvalidated.** `charWidthFrac` and `boldCharWidthFrac` feed `inkWidth()` but are absent from `validate()`. Setting either to zero or a negative value lets oversized text pass `allTextFits()`. Validate both as finite positive numbers with meaningful bounds.

- **−6 — Text-fit enforcement omits rendered content and vertical fit.** `allTextFits()` excludes bill kicker and coin face, although both accept strings up to 80 characters. It checks estimated horizontal widths only; oversized day/weekday combinations or a header taller than its page can pass. Cover every rendered string and enforce container heights. Character-count estimates also cannot guarantee actual font bounds.

- **−5 — Layout validation admits clipping and collisions.** For example, `headerH > pageH` passes, and coin bounds are never checked. With props enabled and a short valid bill title, a sufficiently large `coinGapPx` places the coin outside the stage while initialization accepts it. Validate complete element bounds and required separation.

- **−4 — Prop timing validation checks a nominal endpoint rather than actual animation completion.** `propsEnd = propsStart + propsMs`, but each prop fades in over `enterMs`, starting at an index-derived offset. A large `enterMs` can leave a prop entering during the stage fade despite passing checkpoints. Derive and validate the last prop’s actual completion time.

- **−2 — Geometry and styling remain outside CONFIG.** Bill padding (`10px 12px`), corner radii, shadow geometry/colors, and font families are CSS literals. In particular, changing `billPadPx` changes the fitting allowance without changing actual bill padding. Bind padding consistently and expose intended production style controls.

- **−2 — The default optional-prop configuration cannot be enabled directly.** Changing only `props.enabled` to `true` rejects the existing bill title and silently restores defaults, including `enabled:false`. Supply a valid enabled preset and expose rejection reasons so production can distinguish invalid input from an applied configuration.

**Lens verdict:** above the 70 floor, with useful CONFIG coverage, but incomplete validation prevents a strong production reuse recommendation. Source-only assessment; PIXEL-UNVERIFIED. Overall tier requires the other four lenses.

BODY-WRITE: none (read-only run)
SCORE: 74
