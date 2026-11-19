Verdict: **89/100 — reusability improves over the predecessor.** CONFIG supports another two-body comparison and now supports changing sweep speeds while preserving cumulative continuity. This lens clears the minimum; pool exit requires the complete five-lens result.

Findings, with locations in `recreation.html`:

- **Strong parameter coverage; no unapplied default keys identified.** Lines 17–27 expose labels, colours, fractions, count, timing, typography, geometry and starfield settings. Their consumers appear at lines 29–96. The independently counted 42 CONFIG leaves have consuming references. Reuse works through CONFIG before initialization.

- **Cumulative onset construction passes.** Lines 32–39 select configurable first, second and remaining sweeps, then advance `onset += sweep`. Each segment therefore begins exactly when its predecessor completes. Independently executed defaults produce onsets `[9800,11800,12600,12850,13100,13350,13600,13850]` and completion at `14100`. This adds timing flexibility beyond the predecessor’s single uniform interval without introducing separately maintained onsets.

- **Timing reuse can silently truncate the comparison.** Line 50 wraps at independent `cycleMs`; line 53 computes completion without validating it against that boundary. Independently changing `restSweepMs` to `500` produces completion at `15600`, beyond the `15000` cycle. Changing `rows` to `12` produces completion at `15100`. The supplied continuity checks pass for these configurations, but continuity does not guarantee completion before reset. **Cure:** derive cycle duration from maximum completion across all subjects plus configurable hold, or reject incompatible configurations.

- **Subject and timing structures remain partly hardcoded.** Lines 31–38 enforce one first-body row followed by second-body overflow; line 37 fixes the first/second/rest timing pattern; line 48 permits exactly two header states. Different names and second-body counts work, but additional bodies, first-body overflow or arbitrary sweep schedules require source edits. **Cure:** configure subjects, segment counts, sweep sequences and header events as arrays.

- **Layout adaptation has limits.** Lines 62 and 80–86 expose row geometry and derive minimum height, but lines 5–11 enforce clipping and nonwrapping text. Longer labels or headers have no fitting policy; wider labels can consume the available track. **Cure:** provide configurable text fitting and validate minimum track width and viewport capacity.

- **Remaining literals are mostly implementation constants.** Zero/one bounds, percentage conversion and positioning anchors do not hide comparison values. The black page background at line 5 remains an appearance setting outside CONFIG. **Cure:** expose the surrounding canvas colour if production needs to change it.

Limits: Artifact SHA-256 independently matches the supplied hash. Source and selected timing mutations were executed; browser rendering and the entire reported check suite were not independently verified. CONFIG mutations after initialization do not rebuild row DOM or reapply styling. Schedule fidelity and other lenses are outside this assessment.

SCORE: 89
BODY-WRITE: none (read-only run); consumer to persist this return verbatim as codex/attempt-2/lens-reusability.md and extract its SCORE into scores.md.