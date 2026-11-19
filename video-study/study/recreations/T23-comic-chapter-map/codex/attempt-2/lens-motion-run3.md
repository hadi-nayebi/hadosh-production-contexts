**80/100 — the core motion is faithful, but lifting it as-is needs corrections.** Source review only; playback remains unverified.

- **Correct sequence:** `buildTimeline` orders static dwell → dive → zoom hold → dark pause. `applyStep` reveals the page at identity with transitions disabled: a hard cut-in, without fade or entrance scaling. The 900 ms dwell meets the recorded sub-second hold.
- **Correct target and progress:** zero-based targets 4, 8, 11 select chapters 05, 09, 12. Each target already carries its miniature before the dive. Visible filled totals rise **5 → 9 → 12**, preserving the progress-tracker structure.
- **Arrival coverage is incomplete:** `diveTransform` covers the stage with the panel’s **outer border box**, not its miniature. At 360 px, the 1.03 cover margin leaves approximately **16 px of enlarged black border at both top and bottom**. The miniature therefore does not fully take over the frame. Compute coverage from the panel’s inner art rectangle.
- **Extra punctuation changes the handoff:** the default adds a **150 ms frozen miniature hold and 250 ms dark interval** before the next map. The recorded technique describes a dive into the chapter followed by a hard cut; it does not establish this repeated blackout rhythm. Make the chapter handoff explicit and keep preview-loop punctuation separate.
- **Late-entry motion is deadline-correct, not position-correct:** entering midway through a dive starts from the current transform and compresses the full remaining journey into the remaining time. A stall can therefore produce a sudden acceleration rather than resume the intended camera position.
- **Pause/resume is sound in the ordinary path:** the computed transform freezes, elapsed time stops, and the remaining dive continues. However, resizing during a dive or zoom hold calls only `render()`; it leaves the camera using old geometry, compromising target alignment and coverage.

SCORE: 80
BODY-WRITE: This verdict records motion fidelity as conditionally reusable; the next attempt must cover the inner miniature, define the chapter handoff, and correct late-entry and resize camera continuity before an as-is lift.
