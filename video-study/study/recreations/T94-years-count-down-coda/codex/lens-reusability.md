**Reusability: 84/100.** A different coda can be driven from CONFIG, but accepted overrides can break the intended sequence.

The supplied source exposes the requested content, city, palette, typography, stage, geometry, and timing groups, with real application sites. `ruler.figure` selects a generic glyph; `fromYear` anchors the domain’s left endpoint. Flip easing and glyph proportions have declared implementation ownership.

The reported exact swap test covers 2031→2026, a 2040 ruler endpoint, eight buildings, faster descent, building recoloring, and Arial. This supports practical reuse. I could inspect those application sites in the supplied source, but could not independently inspect or rerun the evidence files.

Next-attempt cures:

- **Complete timing relationships.** Accepted `cardMs` values can put tick completion after figure arrival or beyond the cycle. Require tick completion before figure arrival and terminal hold.
- **Reject zero ruler duration.** `rulerDrawMs: 0` passes validation and produces `NaN` progress at the draw boundary.
- **Handle one-tick domains.** When `tickCount()` returns one, `tickStepMs()` returns zero and the sole tick never lights.
- **Clarify override rejection.** Invalid individual fields are silently skipped; relationship failures reject the merged override. Document and test that distinction.
- Add swap assertions for these boundary cases and a coordinated change of both year endpoints and their domain anchor.

This lens exceeds the 70 floor but falls below 85; the overall tier depends on all five scores. No other lens was scored.

Filesystem tooling failed before any command ran, so I could not file the verdict.

BODY-WRITE: None; intended destination `codex/lens-reusability.md` remains unwritten because the execution host is unavailable.
SCORE: 84
