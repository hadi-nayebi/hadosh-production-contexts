CONFIG supports the demonstrated title, duration and field-colour swap. Geometry, triangle layout, typography, outline, easing and morph shaping also have usable controls. This is reusable within the existing webpage-to-triangle construction, with limits on broader substitutions.

The main gaps are functional:

- Correspondence entries’ `b` and `mode` values are unused. Changing them cannot redirect a morph or select another behaviour; element identities and operations remain hardcoded.
- The field’s configured stagger is ignored: field colour and triangle growth share `cardTop` progress. `sceneA.kind` and `sceneB.kind` are descriptive only.
- `CYCLE = 14000` remains outside CONFIG. The demonstrated 2400 ms duration fits, but longer durations can exceed the cycle without validation and truncate playback.
- Countdown wording includes the fixed literal `" in "`, limiting text adaptation.

The swap test establishes the three requested substitutions for the tested values. It does not establish that the correspondence array drives the machinery.

Next attempt should dispatch correspondence behaviours from their configured mappings, apply each supported stagger independently, and configure or validate the cycle budget. Test a changed mapping and nonzero field stagger alongside the existing swaps.

BODY-WRITE: none (read-only run)
SCORE: 78
