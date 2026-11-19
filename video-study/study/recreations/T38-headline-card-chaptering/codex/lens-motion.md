Motion fidelity: **78/100** — passes this lens’s ≥70 floor; the wave decision still requires all lens scores.

- **Entrances work in the intended hierarchy.** Both cards reveal headline → chip → hero → labels/legend → takeaway. Card 1 completes at 3420ms, before the approximately 4000ms formed-card anchor.
- **Hero presence is restored.** The hero is appended to each card, fades/scales into view, and holds through the remaining card duration. Standalone autoplay is present.
- **Chapter handover is abrupt and briefly empty.** In `applyAt()`, card 1 disappears instantly at 7000ms; card 2’s headline starts at 7150ms with zero opacity. This leaves 150ms of background alone, followed by reconstruction of the hierarchy. The loop repeats that gap. No supplied motion evidence establishes this transition.
- **Entrance gestures remain unverified choices.** The headline’s 26px rise, hero’s 0.92→1 scale, and staggered label fades are implemented, but the anchor frames cannot establish their fidelity. Labeling the timing allocation is appropriate; ±600ms does not validate gesture or ordering.
- **The second chapter proves system reuse, with limited fidelity evidence.** Its placement at 7000ms and repeated entrance schedule are expressly modeled rather than observed.

Priced cures: first inspect source frames around an actual section entrance and chapter boundary; record gesture, order, overlap, and hold behavior. Then adjust the modeled entrances and empty handover only where that evidence warrants changes.

Verification was limited to the supplied code and record; playback was not observed. The filesystem tool failed to start, so this verdict could not be saved locally.

SCORE: 78
BODY-WRITE: This return supplies the motion-lens verdict for codex/lens-motion.md and citation by scores.md; no local file was written.
