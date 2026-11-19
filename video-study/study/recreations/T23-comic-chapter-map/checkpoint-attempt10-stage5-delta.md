# Checkpoint — attempt 10, stage 5 (delta form)

Predecessor: stage-4 source, sha256 `ae227c05b60f7122ab44b34320b35177d1bbc1de4e08ed657edcd8e6118468d8`.
Stage-5 source: `recreation.html` sha256 `eaf7a63acdc343c371b6a31833de2fe62f87d6f362639a5df1a480255c8f4097`.
Reconstruction: apply deltas 1–4, then these edits in order.

1. CONFIG layout gains `doneBarHeightPx: 5` (after primDefaultTextWeight); validateInto gains its earlyGuard (0–40, TRUSTED default). Style block gains `.donebar{flex:none}`.
2. startApproach: the approach transform assignment moves from zoomwrap to gridEl (+ transformOrigin "0 0"); the approachProgress dataset stays on zoomwrap (with its comment).
3. applyStep: dive and hold branches clear `gridEl.style.transform` before render.
4. layout() header refinement wrap branch: sets `headerEl.style.lineHeight = String(cfg.typography.headerWrapLineHeight)` and refreshes `headerEl.dataset.headerLines` from the grown height (with its comment).
5. render(): for completed panels, appends a `.donebar` div (height from layout.doneBarHeightPx, background palette.accent, dataset.channel "completion-bar") after the art element (with its comment).
