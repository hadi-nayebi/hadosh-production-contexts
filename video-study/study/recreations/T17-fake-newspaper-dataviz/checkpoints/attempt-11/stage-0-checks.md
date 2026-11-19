# Stage 0 checks — T17 attempt 11 (CP0, baseline probes on the frozen attempt-10 source)

Source: `stage-0-base.html` (content copy of the published attempt-10 `recreation.html`, sha256 0bd6e70fa1a687b45737cd3994f8eb7dc6355f1e71d2bf99d400f2a861cb3bb4, inode independent of the working file). All probes run on this source in the stub-DOM harness (Node vm; children collection is a plain array in the stub — live-collection behaviour is UNVERIFIED-BY-STUB).

## Baseline defect probes (source level)
- Public-swap snapshot site: `stage.children.slice()` PRESENT in the baseline rebuild, at the snapshot line, outside the protected publication block that follows it. In a browser `stage.children` is a live HTMLCollection with no slice method — the priced regression reproduces at source level.
- Validation on the shipped configuration: `[]` (valid). Fit report at 360: ok true. Self-start: playing true after load under the file's own startup path. No-argument rebuild on the stub: ok true (stub children are an array; the browser failure mode is not reproducible in the stub — UNVERIFIED-BY-STUB).
- Seed siblings reproduced OPEN on the baseline validator: empty `points` array → no error filed; timing `drawEnd` = 0 → no error filed; `formatting.counterLabelOpacity` = 2 → no error filed. The attempt-10 named case stands cured: `bars` as a non-array object → named error "bars must be an array".

## Presentation write-set enumeration (derived from source, for the snapshot/restore cure)
- CSS custom properties written by the two presentation functions (createScene + applyStagePresentation): 44 distinct variables. The commit path's copy list names only 23 of them; the remainder are written directly on the stage element by applyStagePresentation.
- Direct style writes on the commit path: stage background, stage color; plus stage class toggle (phone), stage height, the document width variable, body background, and clock colour written across buildAll/commitBuilt/applyStagePresentation.
- Rollback in the baseline restores children, configuration, playback state only — no presentation field is restored. The restore list for the cure is derived from this enumeration, not hand-listed.

## Field-read census (mechanical, from source)
24 functions carry configuration or figure field reads; the full census (per function: group reads + figure reads) is the derivation basis for the schema stage and is reproduced in the build record. Figure fields read per type were enumerated from the builders, state functions, and geometry functions.

## Generation inventory (for the single-source stage)
- Stylesheet numeric literals outside the variable system: 1.5px (warning border), 10px (warning padding), 16px / 44px / 8px / 6px / 4px (controls and button chrome), 50% (dot radius). All are interface chrome, not subject geometry.
- The priced split-ownership pair is present verbatim: the fit model reads `layout.yLabelGapPx` (value 6) in positionedText, while the line-chart builder places the y-axis labels at the literal `geom.x0-6`. Values coincide; ownership is split.
- A second literal stands in the axis-pad function beside the same key (`ceil(maxLab) + yLabelGapPx + 6`): an axis-pad constant, classified in the literal census at the pre-scoring leg.

## Real-DOM probe series
No browser or real-DOM route exists in this session (no browser binary on PATH; the standing startup block is unrebutted). The five-path discriminating probe set therefore files BLOCKED-ON-D1 at CP0, and identically at CP1 and at freeze — the baseline leg of the series is recorded here as NOT RUN (route absent), never as passed.
