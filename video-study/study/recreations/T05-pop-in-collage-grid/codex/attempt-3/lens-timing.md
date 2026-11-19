Timing largely matches the supplied evidence: two panels are present at t=0; arrivals at 1200, 2300 and 3400 ms produce five panels at 3500 ms; six are present by source 0:31. The first three intervals match the roughly 1–1.2 s beat spacing, but the final 2200 ms interval skips a beat.

Lyrics use the specified 42 ms/character and 0/2300/4600/6900 ms starts, retaining earlier lines. The last line completes at 8118 ms. After the final panel settles at 5780 ms, the grid holds for 5920 ms before reset begins—a long static tail whose exact match is unsupported by the supplied frames.

The initial pair survives wrap correctly. Boundary handling remains imperfect: `.noanim` suppresses panel transitions only, leaving lyric opacity transitioning across wrap. During reset, CSS opacity transitions also lag the continuously updated fade targets, so the displayed fade need not finish at the boundary. Browser verification is absent.

No independent timing literals bypass configuration; playback and typing derive from configured values.

BODY-WRITE: Record the skipped final arrival beat and unverified long hold; suppress lyric transitions at wrap and verify displayed reset interpolation before treating the loop boundary as seamless.
SCORE: 84