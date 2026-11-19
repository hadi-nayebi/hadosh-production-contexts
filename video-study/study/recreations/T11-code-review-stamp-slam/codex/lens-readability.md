Readability score: **78/100 — provisional, source-only**. This lens clears 70 but does not establish the five-lens consolidation verdict.

At 360px width:

- **PR header:** 13px bold text should be legible. Default titles appear to fit, but CSS ellipsis can truncate within a word when titles are overridden.
- **Approvals:** 14px bold digits are reasonably sized, but the 1.1px blur lasts 950ms of each 1300ms card period. Readability while spinning is compromised.
- **Checks:** The actual panel width is approximately 144px, with 128px inside its border and padding. Default rows appear to fit narrowly. The red failure row and red status pill provide clear state distinction, though 10–10.5px text is small.
- **Arch:** Approximately 121×164px. Its silhouette may read, but 4.6px shaded characters risk becoming dense texture. Rendered evidence is needed to distinguish an arch from noise.
- **Reviewers:** Each figure is only 13×23px and lacks arms. Heads and legs suggest people, but recognition remains uncertain at phone size.
- **Stamp:** 34px bold “LGTM” should be unmissable at its settled scale. It covers central content for roughly 1.1 seconds; its oversized entrance will be clipped by stage overflow.
- **Overflow:** Horizontal fit appears sound for defaults. Vertical fit remains unverified: the 300px minimum stage height can exceed a shorter embedding viewport.

The missing pixel render limits confidence, especially for the arch, figures, and animated counter.

**Record status:** File tooling failed to start, so I could not write `codex/lens-readability.md`, `build-record.md`, or `scores.md`. These findings remain in this return only.

SCORE: 78
BODY-WRITE: No filesystem write completed; the build record and scores must carry the provisional source-only score, counter-blur penalty, tiny checks text, uncertain arch/person recognition, stamp occlusion, and unverified vertical clipping.
