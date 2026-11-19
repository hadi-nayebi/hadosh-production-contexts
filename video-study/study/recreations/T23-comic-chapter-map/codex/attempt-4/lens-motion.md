The motion machinery needs changes before reuse as-is. Source inspection supports the basic camera path, but two default dives arrive at blank panels.

- **Major — scene takeover fails in appearances 1 and 2.** With `forceFillTarget: "mark"`, `filled:4,dive:4` targets panel 05 without its miniature; `filled:8,dive:8` likewise targets blank panel 09. `render()` preserves that state throughout dive and hold. The camera enlarges a ghost number and empty background instead of entering the chapter scene. Keep completion counts independent, but render the destination miniature before arrival.

- **Major — the ending is preview punctuation, with no scene handoff.** `applyStep("hold")` freezes the enlarged panel for 150 ms, then `"pause"` instantly hides the page for 250 ms. This provides a hard disappearance, but no outgoing chapter scene. Production reuse requires an explicit handoff at the camera endpoint.

- **Moderate — tempo and observed camera structure remain unresolved.** The default static grid lasts 900 ms; the dive adds 650 ms, making 1.55 seconds before the endpoint hold. The build record’s observed appearance occupies approximately 0.70–0.73 seconds and includes pull-back before dive, with no observed static hold. The implementation follows the supplied flash–hold–dive description, but does not reproduce that measured appearance. Its exact motion fidelity remains unproven.

- **Moderate — resizing while paused advances the camera.** `pause()` stores `pausedElapsed`, but the resize handler evaluates `performance.now() - startStamp`. During a paused dive, resizing therefore moves the camera forward, potentially to its endpoint; resuming restores the earlier progress. Use the frozen elapsed time while paused.

**What works:** `buildTimeline` orders dwell → dive → hold → pause correctly. Dwell restores identity and full opacity immediately, with no page entrance animation. The pure camera interpolation moves toward the configured target; `diveTransform` centers its inner rectangle and mathematically guarantees endpoint coverage. Hold pins that endpoint under default timings. Filled counts rise 4 → 8 → 12 across appearances. These are source-derived findings; browser playback and pixels remain unverified.

SCORE: 60
BODY-WRITE: This verdict records blank destination scenes, missing production handoff, unresolved reference motion/tempo, and paused-resize drift as next-attempt requirements; local working-record creation failed because the execution tool was unavailable.