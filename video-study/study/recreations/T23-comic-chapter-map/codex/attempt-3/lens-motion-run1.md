Motion machinery is close, but **lifting it as-is is not supported**. This verdict is source-based; playback and pixel fidelity remain unverified.

- **Core sequence matches:** `buildTimeline` orders dwell → dive → hold → pause. `applyStep` reveals the page at identity with transitions disabled, holds it static for 900 ms, then dives for 650 ms. There is no page entrance animation. The dive targets zero-based panels 4, 8, and 11—chapters 05, 09, and 12—and `render` ensures each target already carries its miniature. `diveTransform` centers the inner art rectangle and scales it to cover the stage with a 3% margin.

- **Production exit remains unfinished:** the 150 ms enlarged hold followed by 250 ms of darkness is preview punctuation. The opacity change is a hard cut, but it cuts to darkness rather than handing off to the chapter scene. Cost: production must still define and implement the scene takeover; the current machinery is not a complete reusable transition.

- **Scheduler breaks its deadline arithmetic after the first cycle:** `tick` passes a cycle-local endpoint (`ph2.step.startMs + ph2.step.dur`) and absolute elapsed time to `schedulerDelay`. After 5,850 ms, their difference stays negative, producing repeated zero-delay polling. Phase selection still wraps correctly, but the engine loses its deadline scheduling and spends unnecessary CPU. Add the cycle offset to the endpoint, or schedule from `ph2.remainingMs`.

- **Rendering can skip a visible phase:** if `applyStep` crosses a boundary during rendering, `tick` schedules the end of the newly due phase without necessarily applying it. The explicit expired-dive rejection helps, but does not cover every phase transition. Cost: under load, dwell or hold imagery can persist through a phase that should already have changed.

- **Pause support preserves position, not the original trajectory:** pausing freezes the computed transform; resuming a dive starts a fresh easing curve over the remaining time. This avoids the former identity snap, but changes velocity. Resizing during a dive also snaps immediately to its endpoint. These are robustness limitations rather than evidence of specimen motion.

- **Progress structure works:** successive grid appearances visibly contain 5 → 9 → 12 miniatures, because the dive target is force-filled in addition to the configured 4 → 8 → 12 counts. Growth matches the technique, but the build record should distinguish completed panels from the visible destination panel. The final loop resets progress; that belongs to the preview, not a continuous series tracker.

SCORE: 80
BODY-WRITE: This verdict records source-supported flash/hold/dive fidelity and rising visible progress, with as-is reuse withheld pending cycle-correct scheduling, post-render phase reconciliation, and a defined chapter-scene handoff; playback remains unverified.
