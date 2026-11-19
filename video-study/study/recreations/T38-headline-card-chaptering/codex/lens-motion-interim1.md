Motion fidelity fails this lens.

- **Both heroes are absent.** In `cardEls`, `hero` is constructed but never appended to `c`. The pie and formula remain detached from the document; `applyAt()` animates invisible elements. Labels and legend consequently enter without their key objects.
- **Standalone playback stays static.** `playing` starts false, and no startup call invokes `play()`. Opening `recreation.html` leaves the initial blank frame until an external controller intervenes.
- **The entrance schedule is coherent:** headline → chip → hero → labels → takeaway. Card 1’s attached elements finish entering by 3420ms, consistent with the approximately 4000ms formed-card anchor. Exact intermediate timing fidelity remains unproven because these checkpoints are explicitly allocated.
- **Chapter handover loses continuity.** At 7000ms, card 1 disappears immediately; card 2 remains entirely blank until its headline begins at 7150ms. The existence of chapter cards is supported, but this empty handover is an implementation choice without specimen motion evidence.
- **Rise, scale, and stagger are unverified choices.** Anchor frames cannot establish the headline’s 26px rise, hero’s scale entrance, or label stagger. These should remain labeled proposals rather than claimed motion matches.

Priority cures: attach both heroes; provide standalone playback; verify the complete entrance and handover sequence in playback. Then compare movement against source footage before refining easing or durations.

This is a code-based verdict; playback was not observed. The execution tool failed before filesystem access, so `codex/lens-motion.md` was not written.

SCORE: 35
BODY-WRITE: This return supplies the motion-lens verdict for verbatim filing at codex/lens-motion.md; no filesystem write completed.
