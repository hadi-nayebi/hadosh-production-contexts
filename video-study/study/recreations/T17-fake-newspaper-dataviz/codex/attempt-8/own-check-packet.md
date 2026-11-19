# T17 — own-check packet (neutral: check names, inputs, results)

Mounted-state harness (stub-DOM, classes: E emitted structure · G source-derived geometry · B browser measurement):


## base mounted suite — SUMMARY pass=44 fail=1

- PASS [E] connector layer mounted between CEO and report row @360 — child order=DIV.card,SVG.,DIV.,SVG.,DIV.,DIV.
- PASS [E] connector endpoints distinct per report @360 — endpoints=1:82,36 | 1:246,36 | 3:82,36 | 3:246,36
- PASS [E] connector layer mounted between CEO and report row @390 — child order=DIV.card,SVG.,DIV.,SVG.,DIV.,DIV.
- PASS [E] connector endpoints distinct per report @390 — endpoints=1:89.5,36 | 1:268.5,36 | 3:89.5,36 | 3:268.5,36
- PASS [E] stamp wrapper carries mounted top inset == modelled reserve — padTop=22.157056677410168 reserve=22.2
- PASS [G] stamp projected AABB above box within cleared inset — projAbove=22.2 cleared=38.15705667741017
- PASS [E] badge hand segment mounted font-size == modelled size — mounted=14 model=14
- PASS [E] every CSS class selector matches an emitted class — dead=
- PASS [E] nowrap rule binds the emitted title class — emitted title class=titleline
- NOT-APPLICABLE [G] you-label arrow direction toward its dot — labCx=NaN dotCx=76.0 labRight=NaN dotLeft=64 (the placement this row measured was replaced by a different construction; the clearance-pair census rows below assert the current construction)
- PASS [E] stack unit explicit line-height fits inside borders — lineHeight=12 inner=12 labelPx=12
- PASS [G] handoff outgoing opacity continuous (max step <= 0.01 @1ms) — maxStep=0.0061
- PASS [G] handoff floor held over its interval — floorMin=0.350
- PASS [E] remount meta reader applies new palette to the new meta row — meta color=#123456
- PASS [E] parallel stamp padding keys deleted
- PASS [E] pre-cliff diagnostic derives bound from its key
- PASS [E] stylesheet has no hardcoded meta/src line-height literal
- PASS [G] line-height key consumed by layout model — headerH 1.7=108.8 vs 1.3=99.2
- PASS [E] validation corpus: defaults valid — errors=0
- PASS [E] validation corpus: string duration — errors=1 first=duration must be a number (not string-typed)
- PASS [E] validation corpus: missing fonts group — errors=1 first=fonts group absent
- PASS [E] validation corpus: missing xLabels — errors=1 first=fig20: xLabels must be a non-empty array
- PASS [E] validation corpus: zero sampleStep — errors=1 first=timing.sampleStep must lie in (0, 0.5]
- PASS [E] validation corpus: null figure — errors=1 first=figure record absent
- PASS [E] validation corpus: missing org nodes — errors=1 first=fig23: nodes must be a non-empty array
- PASS [E] validation corpus: 400-nines duration — errors=2 first=duration must be a positive finite number within 3600
- PASS [E] validation corpus: huge finite sampleStep — errors=1 first=timing.sampleStep must lie in (0, 0.5]
- PASS [E] validation corpus: string timing value — errors=1 first=timing.drawEnd must be a finite number
- PASS [E] validation corpus: missing layout group — errors=1 first=layout group absent
- PASS [E] validation corpus: empty org nodes — errors=1 first=fig23: nodes must be a non-empty array
- PASS [E] fitReport retains rejected figure and reports not-ok — rows=6 ok=false
- PASS [E] self-start: top-level auto-play present in source
- PASS [G] FIG.24 final-1 displayed hold >= 0.6s — displayed=0.625
- PASS [E] rebuild rejects invalid input without mutating live config — errors=1
- PASS [E] rebuild construction failure after valid input is atomic (config restored, named error) — {"ok":false,"errors":["rebuild construction failed: sabotaged construction"]}
- PASS [E] rebuild with changed palette succeeds and applies it — ok=true
- PASS [E] rebuild restores default config
- PASS [E] post-single-source stamp inset == reserve @360 — padTop=22.2 reserve=22.2
- PASS [E] post-single-source fit ok @360 — stageH=553 ok=true
- PASS [E] post-single-source stamp inset == reserve @390 — padTop=24.2 reserve=24.2
- PASS [E] post-single-source fit ok @390 — stageH=553 ok=true
- PASS [E] post-single-source stamp inset == reserve @960 — padTop=35.5 reserve=35.5
- PASS [E] post-single-source fit ok @960 — stageH=540 ok=true
- PASS [E] long-content stamp case priced by fit (ok or named rejection) — ok=true
- PASS [E] rejected-fit cases re-run on final sizing (wide waffle @960 not ok) — ok=false

## validation corpus — SUMMARY section=s1 pass=26 fail=0

- PASS [E] traversal corpus: figures plain object — errors=1 first=figures count outside supported boundary 1..8
- PASS [E] traversal corpus: figures null — errors=1 first=figures count outside supported boundary 1..8
- PASS [E] traversal corpus: null first figure — errors=2 first=figure record absent
- PASS [E] traversal corpus: null last figure — errors=2 first=figure record absent
- PASS [E] traversal corpus: empty palette — errors=10 first=palette.paper is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing paper — errors=1 first=palette.paper is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing ink — errors=1 first=palette.ink is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing red — errors=1 first=palette.red is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing blue — errors=1 first=palette.blue is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing accent — errors=1 first=palette.accent is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing muted — errors=1 first=palette.muted is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing secondary — errors=1 first=palette.secondary is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing pageBg — errors=1 first=palette.pageBg is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing cardTint — errors=1 first=palette.cardTint is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: palette missing controlInk — errors=1 first=palette.controlInk is a required palette member and must be a non-empty string
- PASS [E] traversal corpus: sampleStep below bound (0.0001) — errors=1 first=timing.sampleStep yields 7703 samples over the counter window, above the named bound timing.maxSamples 512
- PASS [E] traversal corpus: sampleStep just beyond bound (af/550) — errors=1 first=timing.sampleStep yields 551 samples over the counter window, above the named bound timing.maxSamples 512
- PASS [E] traversal corpus: sampleStep zero — errors=1 first=timing.sampleStep must lie in (0, 0.5]
- PASS [E] traversal corpus: 400-nines duration — errors=2 first=duration must be a positive finite number within 3600
- PASS [E] traversal corpus: 400-nines sampleStep — errors=2 first=timing.sampleStep must be a finite number
- PASS [E] traversal corpus: 400-nines cliffAt — errors=2 first=fig24: counter values must be finite
- PASS [E] traversal corpus: null layout group — errors=1 first=layout group absent
- PASS [E] traversal corpus: absent timing group — errors=1 first=timing group absent
- PASS [E] traversal corpus: single oversized token title — errors=0 (no-throw class at validation; rejection asserted at the fit stage)
- PASS [E] defaults valid — errors=0
- PASS [E] static order: shape guard precedes every traversal — guardIdx=2745 traversalIdx=2962

## callout census — SUMMARY section=s2 pass=12 fail=0

- PASS [E] s2 waffle mount order grid,counter,lane,summary @360 — order=DIV.,DIV.,DIV.,DIV.card
- PASS [E] s2 callout label mounted in lane, not in grid @360 — laneTop=116.8
- PASS [G] s2 clearance-pair MIN clearance label vs EVERY waffle dot @360 (checkpoints p=0.1/0.62/0.95) — min=28.80 at dot 12 (named minimum 8)
- PASS [G] s2 clearance-pair MIN clearance label vs summary block @360 — gap=8
- PASS [G] s2 clearance-pair MIN clearance label vs figure title @360 — gap=122.8 (title sits above the figure body; pair scope: body-internal pairs + this header pair)
- PASS [G] s2 clearance-pair MAX endpoint gap callout arrow tip vs target dot edge @360 — gap=0.000 (maximum 0)
- PASS [E] s2 waffle mount order grid,counter,lane,summary @390 — order=DIV.,DIV.,DIV.,DIV.card
- PASS [E] s2 callout label mounted in lane, not in grid @390 — laneTop=122.8
- PASS [G] s2 clearance-pair MIN clearance label vs EVERY waffle dot @390 (checkpoints p=0.1/0.62/0.95) — min=28.80 at dot 12 (named minimum 8)
- PASS [G] s2 clearance-pair MIN clearance label vs summary block @390 — gap=8
- PASS [G] s2 clearance-pair MIN clearance label vs figure title @390 — gap=128.8 (title sits above the figure body; pair scope: body-internal pairs + this header pair)
- PASS [G] s2 clearance-pair MAX endpoint gap callout arrow tip vs target dot edge @390 — gap=0.000 (maximum 0)
- Pair set (FIG.21): label against every dot, the summary block, and the figure title; arrow tip against its dot. Minimum label-to-dot clearance measured 28.8 against a named minimum of 8 at both widths; arrow tip gap 0.

## connector census — SUMMARY section=s3 pass=14 fail=0

- PASS [E] s3 connector layer height spans the row margin @360 — layerH=36
- PASS [E] s3 connector layer height spans the row margin @360 — layerH=36
- PASS [E] s3 report row margin-top removed (margin inside layer) @360 — margin-top=0px
- PASS [E] s3 report row margin-top removed (margin inside layer) @360 — margin-top=0px
- PASS [G] s3 clearance-pair MAX endpoint gap connector end vs report anchor @360 (checkpoints q=0.06/0.4/0.95) — maxEndGap=0 (maximum 0)
- PASS [G] s3 clearance-pair MAX endpoint gap connector start vs CEO anchor @360 — startGap=2 (named maximum = connectorMarginTopPx 2)
- PASS [G] s3 clearance-pair MIN clearance badge vs last report row @360 — badgeGap=10px
- PASS [E] s3 connector layer height spans the row margin @390 — layerH=36
- PASS [E] s3 connector layer height spans the row margin @390 — layerH=36
- PASS [E] s3 report row margin-top removed (margin inside layer) @390 — margin-top=0px
- PASS [E] s3 report row margin-top removed (margin inside layer) @390 — margin-top=0px
- PASS [G] s3 clearance-pair MAX endpoint gap connector end vs report anchor @390 (checkpoints q=0.06/0.4/0.95) — maxEndGap=0 (maximum 0)
- PASS [G] s3 clearance-pair MAX endpoint gap connector start vs CEO anchor @390 — startGap=2 (named maximum = connectorMarginTopPx 2)
- PASS [G] s3 clearance-pair MIN clearance badge vs last report row @390 — badgeGap=10px
- Pair set (FIG.23): every connector line against its CEO anchor and its report anchor; badge against the last report row. Maximum end gap measured 0 at both widths.

## remount suite — SUMMARY section=s4 pass=43 fail=0

- PASS [E] cross-stage Stage-1 case through Stage-4 rebuild path: figures plain object — ok=false errors=1
- PASS [E] cross-stage Stage-1 case through Stage-4 rebuild path: null first figure — ok=false errors=2
- PASS [E] cross-stage Stage-1 case through Stage-4 rebuild path: null last figure — ok=false errors=2
- PASS [E] cross-stage Stage-1 case through Stage-4 rebuild path: empty palette — ok=false errors=10
- PASS [E] cross-stage Stage-1 case through Stage-4 rebuild path: sampleStep below bound — ok=false errors=1
- PASS [E] construction failure after sizing returns named error, no throw — ["rebuild construction failed: Cannot read properties of null (reading 'text')"]
- PASS [E] failed candidate: live config restored by value
- PASS [E] failed candidate: width styles restored — stagew=960px
- PASS [E] failed candidate: mounted tree survives (6 figure roots) — roots=6
- PASS [E] failed candidate: playback state preserved — playing=true (auto-play state at load; must survive the failed candidate unchanged)
- PASS [E] width swap succeeds — []
- PASS [G] width swap: mounted geometry derives from candidate width 800 — figtop=97px expected=97px
- PASS [E] width swap: --stagew set from candidate before sizing — stagew=800px
- PASS [E] chrome in remount path: page background + clock ink applied on rebuild — bg=#111111 ink=#222222
- PASS [E] reference isolation: post-rebuild mutation of caller object leaves mounted config unchanged — paper=#fafafa
- PASS [E] s4-retest waffle mount order grid,counter,lane,summary @360 — order=DIV.,DIV.,DIV.,DIV.card
- PASS [E] s4-retest callout label mounted in lane, not in grid @360 — laneTop=116.8
- PASS [G] s4-retest clearance-pair MIN clearance label vs EVERY waffle dot @360 (checkpoints p=0.1/0.62/0.95) — min=28.80 at dot 12 (named minimum 8)
- PASS [G] s4-retest clearance-pair MIN clearance label vs summary block @360 — gap=8
- PASS [G] s4-retest clearance-pair MIN clearance label vs figure title @360 — gap=122.8 (title sits above the figure body; pair scope: body-internal pairs + this header pair)
- PASS [G] s4-retest clearance-pair MAX endpoint gap callout arrow tip vs target dot edge @360 — gap=0.000 (maximum 0)
- PASS [E] s4-retest waffle mount order grid,counter,lane,summary @390 — order=DIV.,DIV.,DIV.,DIV.card
- PASS [E] s4-retest callout label mounted in lane, not in grid @390 — laneTop=122.8
- PASS [G] s4-retest clearance-pair MIN clearance label vs EVERY waffle dot @390 (checkpoints p=0.1/0.62/0.95) — min=28.80 at dot 12 (named minimum 8)
- PASS [G] s4-retest clearance-pair MIN clearance label vs summary block @390 — gap=8
- PASS [G] s4-retest clearance-pair MIN clearance label vs figure title @390 — gap=128.8 (title sits above the figure body; pair scope: body-internal pairs + this header pair)
- PASS [G] s4-retest clearance-pair MAX endpoint gap callout arrow tip vs target dot edge @390 — gap=0.000 (maximum 0)
- PASS [E] s4-retest connector layer height spans the row margin @360 — layerH=36
- PASS [E] s4-retest connector layer height spans the row margin @360 — layerH=36
- PASS [E] s4-retest report row margin-top removed (margin inside layer) @360 — margin-top=0px
- PASS [E] s4-retest report row margin-top removed (margin inside layer) @360 — margin-top=0px
- PASS [G] s4-retest clearance-pair MAX endpoint gap connector end vs report anchor @360 (checkpoints q=0.06/0.4/0.95) — maxEndGap=0 (maximum 0)
- PASS [G] s4-retest clearance-pair MAX endpoint gap connector start vs CEO anchor @360 — startGap=2 (named maximum = connectorMarginTopPx 2)
- PASS [G] s4-retest clearance-pair MIN clearance badge vs last report row @360 — badgeGap=10px
- PASS [E] s4-retest connector layer height spans the row margin @390 — layerH=36
- PASS [E] s4-retest connector layer height spans the row margin @390 — layerH=36
- PASS [E] s4-retest report row margin-top removed (margin inside layer) @390 — margin-top=0px
- PASS [E] s4-retest report row margin-top removed (margin inside layer) @390 — margin-top=0px
- PASS [G] s4-retest clearance-pair MAX endpoint gap connector end vs report anchor @390 (checkpoints q=0.06/0.4/0.95) — maxEndGap=0 (maximum 0)
- PASS [G] s4-retest clearance-pair MAX endpoint gap connector start vs CEO anchor @390 — startGap=2 (named maximum = connectorMarginTopPx 2)
- PASS [G] s4-retest clearance-pair MIN clearance badge vs last report row @390 — badgeGap=10px
- PASS [G] mounted fit re-run after width swap @800 — ok=false
- PASS [E] restore default config after swap probes

## fit suite — SUMMARY section=s5 pass=9 fail=0

- PASS [G] 40xW title regression: occupied width reported, row not width-ok — row={"id":"fig21","required":274,"allocated":445.8,"fits":true,"widthOk":false,"headingReserve":20.4}
- PASS [G] 40xW title occupied width in the build's own model — titleOcc=598.4 vs contentW 328
- PASS [E] fit errors retained for non fig+digits ID shape (figA) — row={"id":"figA","rejected":true,"errors":["figA: youIndex must be an integer inside the waffle"],"required":null,"allocated":445.8,"fits":false,"widthOk":false}
- PASS [E] global validation failure included in fit.ok — globalErrors=["duration must be a positive finite number within 3600","schedule: last figure end 22.5 does not equal total duration -5"]
- PASS [G] counter vertical margins inside geometry model (difference == 2x margin) — cardH 95.8 vs 79.8
- PASS [E] counter mounted margin == modelled margin — font-size:20px;font-weight:900;margin:8px 0
- PASS [G] mounted fit re-run with lane + connector construction @360 — ok=true stageH=553
- PASS [G] mounted fit re-run with lane + connector construction @390 — ok=true stageH=553
- PASS [G] mounted fit re-run with lane + connector construction @960 — ok=true stageH=540

## single-source census — SUMMARY section=s6 pass=10 fail=0

- PASS [G] mutation census: chartTitleMarginBottomPx moves geometry titleH — moved=true
- PASS [G] mutation census: counterMarginYPx moves geometry cardH — moved=true
- PASS [E] mutation census (renderer): chartTitleLetterSpacingEm consumed by chart title — needle=letter-spacing:0.25em
- PASS [E] mutation census (renderer): chartTitleMarginBottomPx consumed by chart title — needle=margin-bottom:9px
- PASS [E] mutation census (renderer): chartStrokeWidthPx consumed by chart path — needle=width":7
- PASS [E] mutation census (renderer): counterLabelLetterSpacingEm consumed by counter label — needle=letter-spacing:0.3em
- PASS [E] controls width reads the stage-width variable
- PASS [E] stage-width key consumed at the root (controls var source) — root=800px
- PASS [E] no stranded literals (.1em / stroke-width 4 / margin 8px 0 / title +4)
- 960 occurrences (literal census):
- line 29: padXPhone:16, padXDesktop:44, padTopPhone:6, padTopDesktop:14, stageWidthPx:960, stageAspectW:16, stageAspectH
- PASS [G] mounted fit re-run after single-source mutations (defaults) — ok=true

## measured-fit leg
- 18 of 18 figure/width rows fit and width-ok (widths 360, 390, 960); per-row occupied widths printed in the leg table.

## configuration consumption census
- 312 configuration leaves walked: 128 consumed by measured effect mutation, 184 named-consumer (renderer/content leaves, each named in the census), 0 unconsumed.

## swap test
- PASS: a full alternate preset (masthead, palette, figure titles) mounts through the public rebuild entry; defaults restore cleanly.

## coverage
- Emitted-structure and geometry classes only; browser class 0 rows. PIXEL-UNVERIFIED: no rendered-pixel verification exists for this build.
