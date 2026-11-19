# Checkpoint — attempt 10, stage 6 (delta form)

Predecessor: stage-5 source, sha256 `eaf7a63acdc343c371b6a31833de2fe62f87d6f362639a5df1a480255c8f4097`.
Stage-6 source: `recreation.html` sha256 `79f89c062a90ef3224b9caa124645a66a4cbaf1fc7f5210e00b9494e89ce352d`.
Reconstruction: apply deltas 1–5, then these edits in order.

1. CONFIG layout: `diveEasing: "cubic-bezier(.55,0,.85,.4)"` → `"cubic-bezier(.55,.35,.65,.7)"` (approachEasing keeps the predecessor curve value).
2. approachTransformAt: `easingFraction(cfg.layout.diveEasing, ...)` → `easingFraction(cfg.layout.approachEasing, ...)`.
3. Body markup: `<div id="cutscene" style="display:none"></div>` inserted between zoomwrap and warn; style block gains `#cutscene{position:absolute;inset:0}` and `#cutscene svg{display:block;width:100%;height:100%}`; the DOM block binds `const cutEl = document.getElementById("cutscene");`.
4. presentEndpoint: after the cut callbacks, the overlay is populated with the target panel's art (panelArtSVG priced on the resolved art height), shown with the dark background and z-index warnZIndex+1, dataset.target set, and a cut-scene-held entry pushed to the presented log (with its comment).
5. flushPending: after applyStep, a visible overlay is hidden and a cut-scene-released entry is pushed.
6. restart() and releaseHandoff() hide the overlay; window.__t23Cut.state() gains the scene {visible, target} readout.
