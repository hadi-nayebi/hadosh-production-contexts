Reusability is substantial: content, chrome, most styling, layout and timing are configurable. Rates drive grapheme timing, entrance durations drive opacity, and `landMs` governs the gradient’s settling window. Overrides preserve lawful zero gaps and record rejected numeric/color inputs. Named title, chrome, stamp and stack failures provide useful replacement-content guards.

Remaining gaps prevent a stronger score:

- **Highlight fitting undercounts padding.** `fitLines()` tracks one `curMark` boolean per line, charging one padding pair even when multiple separate `<mark>` elements occupy that line. Its prospective-width calculation also subtracts existing padding. Replacement highlights can therefore pass validation while exceeding the rendered bound.
- **Geometry validation does not consistently match CSS.** Percentage font sizes are modelled against stage width, while CSS resolves them against inherited font size. The stage’s own `cqw` padding also lacks a self-container basis; the claimed stage-width basis is not guaranteed when stage width differs from viewport width.
- **Some appearance remains hardcoded.** The fresh gradient’s white stop, direction and stop position live outside configuration. They affect a production reskin despite being classified as structural.
- **Configuration edge validation is incomplete.** `entranceOverlapMs`, `caretDuty`, aspects and several geometry inputs lack finite/range checks. Malformed card data can throw during preprocessing before named validation runs. The Unicode fallback honestly declares limitations, but consequently does not cover arbitrary Unicode grapheme boundaries.

The supplied checks establish useful source-model behavior; they do not independently establish browser fitting. I could not write the review file because the execution tool failed to start.

BODY-WRITE: Require browser-consistent unit resolution, per-rendered-mark padding accounting, configurable gradient stops, and named validation of all configuration edges before treating replacement-content fitting as assured.
SCORE: 74