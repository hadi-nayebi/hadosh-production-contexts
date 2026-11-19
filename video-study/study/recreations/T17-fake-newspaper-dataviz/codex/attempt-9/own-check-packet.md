# T17 — own-check packet (neutral: check names, inputs, results)

Mounted-state harness (stub-DOM, classes: E emitted structure · G source-derived geometry · B browser measurement). All checks below ran on the source in this packet.

## Remount behaviour (public rebuild path, stub stage at 360px unless named)
- PASS [E] validation failure (a required palette member removed): named errors returned; the mounted roots are the identical objects after the call; the live configuration and the playback position are unchanged
- PASS [E] construction failure (a candidate whose builder throws after sizing): the candidate construction ran in a detached root; the failure path ran zero builder invocations against the live configuration; the mounted roots are the identical objects after the call
- PASS [E] fit failure (a figure title of 60 wide glyphs): the call returns not-ok together with the fit report; the live scene stands
- PASS [E] preview preservation: with a preview frame rendered at 6.5s while the playback offset stands at 5.0s, a successful swap leaves the rendered position at 6.5s
- PASS [E] playing swap: the animation frame after a successful swap advances the playback position by one second from its pre-swap value (no rewind, no stall)
- PASS [E] alternate preset swap at 360px and at 390px: commits through the public path; 41 enumerated subject-bearing fields each show a changed rendered effect; no subject string of the shipped preset survives anywhere in the mounted alternate scene; the page background and clock ink commit with the swap; swapping back restores the shipped scene
- PASS [E] no-argument rebuild: runs the same path, returns the fit report, remounts the scene, preserves the playback position
- PASS [E] resize path (a direct full rebuild of the standing configuration): preserves the playback position and the figure count
- PASS [E] candidate width derivation: with no live viewport width, a candidate whose configuration names a stage width of 1024 is sized at 1024 (the fit report's width reads 1024 and the stage width variable reads 1024px)

## Validation
- PASS [E] the shipped configuration validates with zero errors
- PASS [E] named cases, 16 of 16: a deleted timing member, a deleted layout member, a deleted nested layout-group member, a deleted formatting member, a deleted bounds member, a deleted type-floor member, a primitive label entry, a label entry missing its value, a null axis-label entry, a string point coordinate, a single-value point entry, a string bar value, a numeric bar label, an empty node entry, a null note entry, a deleted figure id — each yields a named error carrying the field path (and the index, for entries)
- PASS [G] sample-count rule: step 1/512 emits 513 points; step 0.02 emits 51; step 0.04 emits 26; step 0.03 emits 35; step 0.06 emits 18; step 0.029 emits 36
- PASS [E] sample boundaries: step 1/512 is refused at a maximum of 512 and accepted at 513; step 0.03 is accepted at a maximum of 35 and step 0.029 is refused at 35
- PASS [E] the renderer's instrumented emitted count equals the rule's count at steps 0.02, 0.03, and 0.04
- PASS [E] the step that a window-priced bound once passed at 500 samples over the animation window is refused by name under the full-draw rule (its full-draw count is 651)
- PASS [E] generated sweep: 324 generated cases (81 configuration fields x 4 mutations: missing, null, wrongly typed, non-finite or empty) — every case yields a named error on its field; through the fit entry point, every missing-field case returns a not-ok result without throwing; through the rebuild path, sampled invalid candidates are refused by name with the live scene untouched
- PASS [E] valid boundaries accepted: a waffle total equal to its named maximum (60) validates (61 is refused); a figure title of exactly the named maximum length (200) validates
- PASS [E] the query-string route's supported coercion (a numeric string for a top-level numeric key) is accepted and the result validates

## Mounted census (derived pairs, per figure hold state; handoff midpoints included)
- PASS [E] waffle leader segments x every non-target dot: 84 pairs per phone width (360 and 390); no segment crosses a dot; minimum stroke-edge clearance 3.0px against a named floor of 2px
- PASS [E] target attachment: a leader endpoint lies exactly on the target dot's bottom edge (gap 0)
- PASS [E] label x every dot: minimum clearance 28.8px against a named floor of 8px, at both phone widths
- PASS [E] label x summary block: clearance 8px at both phone widths
- PASS [E] org connectors x their anchors: maximum endpoint gap 0; start gap 2px (the named permitted maximum); connector segments cross no non-target node
- PASS [E] stamp transformed bounds at its entrance state: the projected width stands within the cleared width at both phone widths
- Coverage counts: emitted-structure assertions and source-derived geometry as listed; browser measurements 0 (PIXEL-UNVERIFIED)

## Fit surface
- PASS [G] every fit row carries its occupied width, the available width, and the figure title's occupied width
- PASS [G] a card holding one unbreakable 100-glyph token: occupied 1083 against an available 328 — the row reports width not-ok; the public rebuild refuses that candidate and returns this fit report, live scene preserved
- PASS [G] a 40-glyph figure title: the row carries its occupied width 598.4 beside the available 328
- PASS [G] the chart title's spacing key is consumed by the fit model: a 30-glyph chart title's occupied width moves by exactly the spacing model (36) when the key is set to zero, and the spacing is decisive for that title's width verdict at 360px
- PASS [G] fit at 360, 390, and 960: every figure fits and every occupied width is within the available width for the shipped configuration

## Literal census (whole file)
- PASS [E] every numeric literal outside the configuration is either absent (single-sourced) or carries a named structural disposition in the census output; zero unlisted literals
- PASS [E] no color literal outside the configuration
- PASS [E] the stage width value occurs exactly once in the file, at its owner key
- PASS [E] spacing and stroke mutations move the geometry model and the mounted scene together (dot gap, row gap, counter stroke), measured across the model/renderer boundary

## Freeze checks on this source (19 of 19)
- PASS [E] source comments are all neutral (no construction commentary of any kind)
- PASS [E] the piece is playing under its own startup path after load
- PASS [E] the only URL strings in the file are the SVG namespace identifier at its two element-creation call sites; no specimen media or external asset references

## Leg 1 — measured fit table (full)
# T17 — measured fit table, attempt 9 (on the source in this packet)

Model: source-derived geometry (class G) + emitted-structure rows from the mounted-state harness; browser rows PIXEL-UNVERIFIED.
Source: recreation.html sha256 ae5b68d4f42b30ea425a94f67fa8654cd87a6ef8e1d7e3e462cc530fb70f1729

## width 360 — stageH 553 · headerH 99.2 · contentW 328 · ok true · globalErrors 0
| figure | required | allocated | fits | widthOk | occupied maxW | available | titleOcc |
|---|---|---|---|---|---|---|---|
| fig20 | 309 | 445.8 | true | true | 328 | 328 | 318.9 |
| fig21 | 274 | 445.8 | true | true | 328 | 328 | 171.4 |
| fig22 | 445.8 | 445.8 | true | true | 328 | 328 | 137 |
| fig23 | 277.7 | 445.8 | true | true | 320 | 328 | 305.7 |
| fig24 | 314.4 | 445.8 | true | true | 328 | 328 | 314.2 |
| fig25 | 330.8 | 445.8 | true | true | 328 | 328 | 84.7 |

## width 390 — stageH 553 · headerH 99.2 · contentW 358 · ok true · globalErrors 0
| figure | required | allocated | fits | widthOk | occupied maxW | available | titleOcc |
|---|---|---|---|---|---|---|---|
| fig20 | 309 | 445.8 | true | true | 358 | 358 | 353.6 |
| fig21 | 280 | 445.8 | true | true | 358 | 358 | 171.4 |
| fig22 | 445.8 | 445.8 | true | true | 358 | 358 | 137 |
| fig23 | 280.1 | 445.8 | true | true | 320 | 358 | 305.7 |
| fig24 | 314.4 | 445.8 | true | true | 358 | 358 | 314.2 |
| fig25 | 342.4 | 445.8 | true | true | 358 | 358 | 84.7 |

## width 960 — stageH 540 · headerH 107.5 · contentW 872 · ok true · globalErrors 0
| figure | required | allocated | fits | widthOk | occupied maxW | available | titleOcc |
|---|---|---|---|---|---|---|---|
| fig20 | 357.6 | 432.5 | true | true | 872 | 872 | 705.6 |
| fig21 | 316.9 | 432.5 | true | true | 872 | 872 | 302.4 |
| fig22 | 339.8 | 432.5 | true | true | 588 | 872 | 241.8 |
| fig23 | 282.5 | 432.5 | true | true | 813.4 | 872 | 539.4 |
| fig24 | 315.4 | 432.5 | true | true | 872 | 872 | 554.4 |
| fig25 | 429 | 432.5 | true | true | 680 | 872 | 149.4 |

HIT rows (fits && widthOk): 18 of 18

## Leg 2 — config consumption census (full)
# T17 — config consumption census, attempt 9 (on the source in this packet)

Leaves walked: 323 · consumed by measured effect mutation: 152 · named-consumer (renderer/content): 171 · unconsumed: 0

Leaf-level table:
- CONFIG.duration — mutation-consumed
- CONFIG.masthead — named-consumer (key referenced 7x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.dateLine — mutation-consumed
- CONFIG.clockStart — mutation-consumed
- CONFIG.price — mutation-consumed
- CONFIG.palette.paper — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.palette.ink — named-consumer (key referenced 12x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.palette.red — named-consumer (key referenced 12x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.palette.blue — named-consumer (key referenced 6x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.palette.accent — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.palette.muted — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.palette.secondary — named-consumer (key referenced 6x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.palette.pageBg — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.palette.cardTint — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.palette.controlInk — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.fonts.serif — named-consumer (key referenced 6x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.fonts.sans — named-consumer (key referenced 18x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.fonts.hand — named-consumer (key referenced 16x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.formatting.counterLocale — mutation-consumed
- CONFIG.formatting.ofWord — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.formatting.stackUnitSymbol — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.formatting.waffleInactiveOpacity — mutation-consumed
- CONFIG.formatting.nodeSymbol — mutation-consumed
- CONFIG.formatting.badgeStarSep — mutation-consumed
- CONFIG.formatting.badgeDashSep — mutation-consumed
- CONFIG.formatting.ceoSep — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.formatting.badgeHandFont — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.formatting.badgeSansFont — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.formatting.cliffDash — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.minHoldSec — mutation-consumed
- CONFIG.timing.drawEnd — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.stackEnd — mutation-consumed
- CONFIG.timing.barsEnd — mutation-consumed
- CONFIG.timing.ceoAt — mutation-consumed
- CONFIG.timing.nodeStart — mutation-consumed
- CONFIG.timing.nodeEnd — mutation-consumed
- CONFIG.timing.badgeAt — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.badgeFrom — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.badgeDur — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.badgeEasePow — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.connectorDrawSpan — mutation-consumed
- CONFIG.timing.corrAt — mutation-consumed
- CONFIG.timing.stampAt — mutation-consumed
- CONFIG.timing.stampDur — mutation-consumed
- CONFIG.timing.stampFrom — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.stampRotationDeg — mutation-consumed
- CONFIG.timing.stampApproach — mutation-consumed
- CONFIG.timing.stampReboundEnd — mutation-consumed
- CONFIG.timing.stampOvershoot — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.stampCompress — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.noteStart — mutation-consumed
- CONFIG.timing.noteFade — mutation-consumed
- CONFIG.timing.readMsPerChar — mutation-consumed
- CONFIG.timing.typeMsPerChar — mutation-consumed
- CONFIG.timing.minTypeSec — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.minFillSec — mutation-consumed
- CONFIG.timing.fillSec — named-consumer (key referenced 6x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.typeStartSec — mutation-consumed
- CONFIG.timing.sampleStep — mutation-consumed
- CONFIG.timing.maxSamples — named-consumer (key referenced 10x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.cliffMarkerAt — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.cliffBudgetMargin — mutation-consumed
- CONFIG.timing.preCliffDropMaxFrac — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.stackArrivalSpan — mutation-consumed
- CONFIG.timing.stackEasePow — mutation-consumed
- CONFIG.timing.stampEasePowIn — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.stampEasePowOut — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.animFractionFloor — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.figureTransitionSec — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.transitionOutSpan — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.transitionInStart — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.transitionInSpan — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.transitionFloorOpacity — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.transitionFloorRelease — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.timing.counterHoldSec — mutation-consumed
- CONFIG.layout.fig22GapPx — mutation-consumed
- CONFIG.layout.figPadTopPx — mutation-consumed
- CONFIG.layout.headingMarginTopPx — mutation-consumed
- CONFIG.layout.headingMarginBottomPx — mutation-consumed
- CONFIG.layout.srcMarginTopPx — mutation-consumed
- CONFIG.layout.bottomClearancePx — mutation-consumed
- CONFIG.layout.cardPaddingPx — mutation-consumed
- CONFIG.layout.cardBorderPx — mutation-consumed
- CONFIG.layout.cardRadiusPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.dotBorderPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.stampBorderPx — mutation-consumed
- CONFIG.layout.stampRadiusPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.stackUnitBorderPx — mutation-consumed
- CONFIG.layout.stackUnitRadiusPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.stackUnitGapPx — mutation-consumed
- CONFIG.layout.stackArrivalOffsetPx — mutation-consumed
- CONFIG.layout.stackUnitMaxH — mutation-consumed
- CONFIG.layout.phoneStageBudgetPx — mutation-consumed
- CONFIG.layout.metaPadX — mutation-consumed
- CONFIG.layout.metaMinGapPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.charWidthBody — mutation-consumed
- CONFIG.layout.charWidthLabel — mutation-consumed
- CONFIG.layout.charWidths.space — mutation-consumed
- CONFIG.layout.charWidths.narrow — mutation-consumed
- CONFIG.layout.charWidths.wide — mutation-consumed
- CONFIG.layout.charWidths.upper — mutation-consumed
- CONFIG.layout.charWidths.digit — mutation-consumed
- CONFIG.layout.stampCharWidth — mutation-consumed
- CONFIG.layout.stampPadX — mutation-consumed
- CONFIG.layout.stampPadY — mutation-consumed
- CONFIG.layout.stampAreaBudgetPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.stampLetterSpacingEm — mutation-consumed
- CONFIG.layout.badgeClearancePx — mutation-consumed
- CONFIG.layout.lineHeights.mast — mutation-consumed
- CONFIG.layout.lineHeights.label — mutation-consumed
- CONFIG.layout.lineHeights.body — mutation-consumed
- CONFIG.layout.lineHeights.title — mutation-consumed
- CONFIG.layout.lineHeights.stackCounter — mutation-consumed
- CONFIG.layout.barGeom.slotFrac — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.barGeom.barFrac — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.barGeom.basePad — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.barGeom.topPad — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.barGeom.xPad — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.donut.cxFrac — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.donut.rFrac — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.donut.rMax — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.donut.strokeW — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.waffleGapPx — mutation-consumed
- CONFIG.layout.waffleRowGapPx — mutation-consumed
- CONFIG.layout.counterStrokeWidthPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.axisStrokeWidthPx — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.connectorStrokeWidthPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.cliffDashTopPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.cliffDashBottomPadPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.rowGapPx — mutation-consumed
- CONFIG.layout.counterGapPx — mutation-consumed
- CONFIG.layout.orgRowGapPx — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.orgRowMarginTop — mutation-consumed
- CONFIG.layout.badgeMarginTop — mutation-consumed
- CONFIG.layout.calloutLaneGapPx — mutation-consumed
- CONFIG.layout.calloutMinClearancePx — named-consumer (key referenced 1x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.calloutShaftStrokeWidthPx — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.calloutShaftEdgeFloorPx — named-consumer (key referenced 1x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.calloutBarbDxPx — mutation-consumed
- CONFIG.layout.calloutBarbDyPx — mutation-consumed
- CONFIG.layout.chartTitleLetterSpacingEm — mutation-consumed
- CONFIG.layout.chartTitleMarginBottomPx — mutation-consumed
- CONFIG.layout.chartStrokeWidthPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.counterLabelLetterSpacingEm — mutation-consumed
- CONFIG.layout.counterMarginYPx — mutation-consumed
- CONFIG.layout.noteLineGapPx — mutation-consumed
- CONFIG.layout.corrStampMarginTop — mutation-consumed
- CONFIG.layout.corrNotesMarginTop — mutation-consumed
- CONFIG.layout.chartPadLeft — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.barLabelDescenderPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.yLabelGapPx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartPadRight — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartPadBottom — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartPadTop — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.typeScale.mast — mutation-consumed
- CONFIG.layout.typeScale.title — mutation-consumed
- CONFIG.layout.typeScale.body — mutation-consumed
- CONFIG.layout.typeScale.label — mutation-consumed
- CONFIG.layout.typeScale.big — mutation-consumed
- CONFIG.layout.typeScale.hand — mutation-consumed
- CONFIG.layout.typeCaps.mast — named-consumer (key referenced 18x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.typeCaps.title — named-consumer (key referenced 26x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.typeCaps.body — named-consumer (key referenced 42x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.typeCaps.label — named-consumer (key referenced 35x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.typeCaps.big — named-consumer (key referenced 8x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.typeCaps.hand — named-consumer (key referenced 16x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartHeights.linePhone — mutation-consumed
- CONFIG.layout.chartHeights.lineDesktop — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartHeights.stackPhone — mutation-consumed
- CONFIG.layout.chartHeights.stackDesktop — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartHeights.counterPhone — mutation-consumed
- CONFIG.layout.chartHeights.counterDesktop — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartWidthFrac.line — named-consumer (key referenced 16x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartWidthFrac.stack — named-consumer (key referenced 6x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartWidthFrac.counter — named-consumer (key referenced 6x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.chartMaxW — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.waffleGridFrac — mutation-consumed
- CONFIG.layout.waffleLabelH — mutation-consumed
- CONFIG.layout.waffleDotMin — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.waffleDotMax — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.nodePadX — mutation-consumed
- CONFIG.layout.stackColWidthPx — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.phoneProbeWidth — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.connectorHeightPx — mutation-consumed
- CONFIG.layout.connectorMarginTopPx — mutation-consumed
- CONFIG.layout.padXPhone — mutation-consumed
- CONFIG.layout.padXDesktop — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.padTopPhone — mutation-consumed
- CONFIG.layout.padTopDesktop — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.stageWidthPx — named-consumer (key referenced 6x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.stageAspectW — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.stageAspectH — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.fontWeights.normal — named-consumer (key referenced 6x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.fontWeights.bold — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.fontWeights.black — named-consumer (key referenced 6x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.counterGeom.x0 — named-consumer (key referenced 20x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.counterGeom.x1Pad — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.counterGeom.y0 — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.counterGeom.y1Pad — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.corrMaxW — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.ceoMaxW — mutation-consumed
- CONFIG.layout.phoneBreakpoint — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.layout.bigLineH — mutation-consumed
- CONFIG.layout.transitionRisePx — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxFigures — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxWaffle — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxBars — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxStack — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxNodes — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxNotes — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxPoints — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.cliffMin — mutation-consumed
- CONFIG.bounds.maxSummaryChars — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxTitleChars — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxLabelChars — named-consumer (key referenced 15x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxCardChars — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxStampChars — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxNoteChars — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxNodeChars — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.bounds.maxCeoChars — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.typeFloors.masthead — mutation-consumed
- CONFIG.typeFloors.figureTitle — mutation-consumed
- CONFIG.typeFloors.body — mutation-consumed
- CONFIG.typeFloors.label — mutation-consumed
- CONFIG.typeFloors.bigCounter — mutation-consumed
- CONFIG.typeFloors.hand — mutation-consumed
- CONFIG.figures[0].id — mutation-consumed
- CONFIG.figures[0].type — mutation-consumed
- CONFIG.figures[0].start — mutation-consumed
- CONFIG.figures[0].dur — mutation-consumed
- CONFIG.figures[0].num — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].title — named-consumer (key referenced 26x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].source — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].chartTitle — mutation-consumed
- CONFIG.figures[0].yLabels[0].text — named-consumer (key referenced 42x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].yLabels[0].y — named-consumer (key referenced 17x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].yLabels[1].text — named-consumer (key referenced 42x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].yLabels[1].y — named-consumer (key referenced 17x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].yLabels[2].text — named-consumer (key referenced 42x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].yLabels[2].y — named-consumer (key referenced 17x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].yLabels[2].emphasis — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].xLabels[0] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].xLabels[1] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].points[0][0] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].points[0][1] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].points[1][0] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].points[1][1] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].points[2][0] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].points[2][1] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[0].cardText — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[1].id — mutation-consumed
- CONFIG.figures[1].type — mutation-consumed
- CONFIG.figures[1].start — mutation-consumed
- CONFIG.figures[1].dur — mutation-consumed
- CONFIG.figures[1].num — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[1].title — mutation-consumed
- CONFIG.figures[1].source — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[1].waffleTotal — mutation-consumed
- CONFIG.figures[1].waffleCols — mutation-consumed
- CONFIG.figures[1].youIndex — mutation-consumed
- CONFIG.figures[1].youLabel — mutation-consumed
- CONFIG.figures[1].waffleLabel — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[1].summaryText — mutation-consumed
- CONFIG.figures[2].id — mutation-consumed
- CONFIG.figures[2].type — mutation-consumed
- CONFIG.figures[2].start — mutation-consumed
- CONFIG.figures[2].dur — mutation-consumed
- CONFIG.figures[2].num — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].title — mutation-consumed
- CONFIG.figures[2].source — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].stackCount — mutation-consumed
- CONFIG.figures[2].stackLabel — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].bars[0] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].bars[1] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].bars[2] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].bars[3] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].barLabels[0] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].barLabels[1] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].barLabels[2] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].barLabels[3] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].donutFraction — named-consumer (key referenced 1x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[2].donutLabel — named-consumer (key referenced 3x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[3].id — mutation-consumed
- CONFIG.figures[3].type — mutation-consumed
- CONFIG.figures[3].start — mutation-consumed
- CONFIG.figures[3].dur — mutation-consumed
- CONFIG.figures[3].num — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[3].title — mutation-consumed
- CONFIG.figures[3].source — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[3].ceo — named-consumer (key referenced 10x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[3].ceoSub — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[3].nodes[0] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[3].nodes[1] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[3].nodes[2] — mutation-consumed
- CONFIG.figures[3].nodes[3] — mutation-consumed
- CONFIG.figures[3].badge — mutation-consumed
- CONFIG.figures[3].badgeName — mutation-consumed
- CONFIG.figures[3].onlyNote — mutation-consumed
- CONFIG.figures[4].id — mutation-consumed
- CONFIG.figures[4].type — mutation-consumed
- CONFIG.figures[4].start — mutation-consumed
- CONFIG.figures[4].dur — mutation-consumed
- CONFIG.figures[4].num — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[4].title — mutation-consumed
- CONFIG.figures[4].source — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[4].counterStart — mutation-consumed
- CONFIG.figures[4].counterEnd — named-consumer (key referenced 8x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[4].preCliffDrop — mutation-consumed
- CONFIG.figures[4].cliffAt — mutation-consumed
- CONFIG.figures[4].cliffExponent — named-consumer (key referenced 2x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[4].counterLabel — mutation-consumed
- CONFIG.figures[4].counterSub — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[5].id — mutation-consumed
- CONFIG.figures[5].type — mutation-consumed
- CONFIG.figures[5].start — mutation-consumed
- CONFIG.figures[5].dur — mutation-consumed
- CONFIG.figures[5].num — named-consumer (key referenced 5x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[5].title — mutation-consumed
- CONFIG.figures[5].source — named-consumer (key referenced 4x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[5].correction — named-consumer (key referenced 11x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[5].stamp — mutation-consumed
- CONFIG.figures[5].notes[0] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)
- CONFIG.figures[5].notes[1] — named-consumer (key referenced 21262x outside CONFIG; pure-logic snapshot unchanged)

