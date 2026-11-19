# Readability — 83/100

**Verdict:** strong settled-state readability, with two remaining defects. Source-only judgment; PIXEL-UNVERIFIED.

- **Foreground separation is real.** HUD and card sit outside `#sceneBox`: settled seed-state opacity is 1.0 for both, versus 0.55 for scene details. The opaque dark card provides a clear local field. Dimming does not darken the blue base background because the scene’s background matches the stage background, but it does suppress competing windows and silhouettes.
- **T75’s collision class is reduced, incompletely closed.** The quiet zone covers x<200, y<66, protecting the year digits and clock. However, the supplied year-line estimate extends to approximately x277 from its x12 origin. Stars can therefore remain behind the right-hand day text. The suppression rule protects only part of the HUD’s territory.
- **Phone-size fit is credible, with modest reserves.** The reported 11.5 px year/status ink and 12.2 px place ink clear the stated floor. Containers accommodate the default text. These remain metric estimates, not rendered measurements. The clock’s approximately 2.04× ink-height ratio establishes a clear hierarchy.
- **The transition briefly compromises year recognition.** At eased progress 0.5, both different years appear at half opacity, translated −6/+6 px. Their glyphs overlap vertically inside the clipped wrapper. The settled registers are clear; the crossover can read as mixed digits. A 350 ms transition limits the exposure but does not remove it.

**Next-attempt cures:** extend the quiet zone over the entire measured HUD rectangle, including glyph extents; separate the rolling year faces sufficiently to avoid overlapping readable ink, then verify the crossover at phone size.

BODY-WRITE: Returned this review for filing verbatim at `hidden_files/study/recreations/T76-hud-year-register/codex/lens-readability.md`; direct filing was unavailable because the execution host failed to start.
SCORE: 83
