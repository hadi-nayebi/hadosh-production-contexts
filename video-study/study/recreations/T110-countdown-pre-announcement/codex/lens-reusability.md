The countdown is reusable through CONFIG for the demonstrated scene pair, but it is not yet a general production container.

- Name, template, palette and timing changes flow through the implementation. All six specimen names have substantial reported fit margins, although those margins come from an approximate font model rather than browser measurements.
- Changing `stepMs` retimes numeral swaps correctly. However, countdown completion remains independently anchored: at 600 ms, “in 1” holds for 1917 ms before the cut. Different step counts require coordinating `steps`, `stepMs` and `cutMs`; additional steps can be truncated. There is no validation for incompatible configurations.
- Different scene pairs require code edits. Only `laptop` and `webpage` have builders; other `kind` values silently produce empty backgrounds. This limits reuse for a container intended to prefix different demonstrations.
- `window.__render(t)` and the inspection exports are useful integration hooks, but autonomous `requestAnimationFrame` rendering continues after external calls. A container cannot exclusively control playback without changing code.
- The zero-hit configuration census establishes that keys are read, but not that they offer supported alternatives. For example, every unrecognized `demoTrigger` silently selects the same fallback delay.

Next attempt should add an external-clock mode, scene injection or a scene registry, and a validated scheduling contract that explicitly chooses anchored completion versus completion derived from step count. Document whether configuration is initialization-only, since schedule constants and DOM styles are captured at startup.

This lens falls below the 85-point tier target, while remaining above the 70-point minimum.

BODY-WRITE: none (read-only run)
SCORE: 79
