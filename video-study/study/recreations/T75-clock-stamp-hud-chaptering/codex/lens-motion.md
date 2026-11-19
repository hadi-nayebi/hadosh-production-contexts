Motion fidelity: **82/100 — below the 85 target, above the 70 floor.** Overall tier depends on the five-lens result. Source-only review; PIXEL-UNVERIFIED.

HUD persistence is structural: `#hud` lives outside `#sceneBox` and survives chapter changes. At 5,000 and 10,000 ms, clock text and scene swap together without fades, title cards, or overlapping chapters. Modulo looping preserves phase exclusivity.

The main gap is coupling every scene cut to a chapter turn. The evidence shows a city-to-interior cut beneath an unchanged 06:15 HUD. This build cannot express that behavior: scene changes occur only when the clock changes. Its chapter boundaries are explicitly an allocation model, not verified source timing.

Tick motion is also allocated: fill and dot advance continuously, then reset at each boundary. The supplied evidence establishes a line-and-dot tick but does not establish this sweep. `holdMs` adds duration without producing a hold; tick motion continues throughout.

Next-attempt cures:

- Allow scene cuts within chapters while retaining the clock and HUD.
- Ground tick motion in temporal evidence; otherwise retain a stationary tick.
- Keep chapter-turn timing explicitly labeled as allocation-model.

BODY-WRITE: Not filed. Intended destination: `hidden_files/study/recreations/T75-clock-stamp-hud-chaptering/codex/lens-motion.md`. Filesystem access is read-only, and the tool host failed to start.

SCORE: 82
