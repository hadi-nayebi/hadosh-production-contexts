Motion machinery is largely faithful, but the default sequence needs adjustment before production reuse.

- **Correct flash and hold:** `applyStep("dwell")` sets identity transform and opacity 1 immediately, with transitions disabled. The page enters by hard cut and stays static; there is no entrance fade or scale animation.
- **Correct targeted dive:** `transformAt` interpolates identity toward the selected panel’s centered endpoint. `diveTransform` calculates coverage from the inner artwork rectangle, so the scene miniature mathematically covers the stage at arrival. `panelState` keeps target artwork present throughout dwell, dive, and hold.
- **Tempo is too extended for the supplied observation:** the defaults show 900 ms static dwell plus 650 ms dive—1.55 seconds before arrival. The build record’s observed map window is approximately 0.70–0.73 seconds. Exact phase timing is unknown, but the default total materially weakens the brief flash-and-plunge rhythm.
- **Extra endpoint punctuation:** `holdZoomMs:150` freezes the enlarged miniature, then `loopPauseMs:250` cuts to dark. Both transitions are hard, as required, but the added freeze and dark gap interrupt the chapter takeover. Production needs a direct scene handoff.
- **Progress structure works:** completed membership rises 4→8→12; visible miniature totals rise 5→9→12 because upcoming targets already carry artwork. Changes occur at hard appearance boundaries, without invented filling animation. The final 12→4 reset is preview looping rather than continuing series progress.
- **Pause and timing logic are sound at source level:** deadline-derived phases avoid restarting late dives; hold explicitly applies the endpoint; paused elapsed time is shared with resize evaluation. Rendered continuity and perceived acceleration remain unverified without playback.

These findings assess the supplied source; no filesystem write or rendered verification was completed.

SCORE: 85
BODY-WRITE: This verdict records source-supported flash, hold, targeted coverage, target-art continuity, and rising progress; the next attempt must shorten the default map window and replace preview freeze/dark punctuation with a verified chapter-scene handoff before as-is production reuse.