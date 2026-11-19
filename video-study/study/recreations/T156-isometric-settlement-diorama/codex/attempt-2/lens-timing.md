Verdict: **Timing passes at 88/100.** Overall pool exit remains unassessed without the other four lens scores.

Findings:

- **Act 1 matches the supplied anchors.** In `CONFIG.elements`, the teepee completes at 1600ms and fire at 2000ms; three huts complete by 4300ms, establishing the village before ~5s. The final figure completes at 12200 + 400 = **12600ms**.
- **The transition has a clear pause.** Fill completion to rocket onset provides **2400ms** of settled viewing before Act 2.
- **Act 2 occupies most of its allocation.** `rocketState()` supplies continuous linear ascent during 15000–20000ms, with clouds descending throughout. From the supplied geometry, the rocket body clears the top around **19051ms**; its flame clears around **19621ms**. This slightly reduces visible rocket occupancy near the window’s end. The 20000–25000ms hold preserves the village and displaced clouds.
- No penalty applies to the allocation’s placement; the specimen’s exact ascent onset is unresolved.

Limits: Source-based timing assessment only; no playback inspected. Other lens scores and the supplied hash were not independently verified.

SCORE: 88
BODY-WRITE: none (read-only fed review); this return is for the consumer to file in attempt-2/ and scores.md.