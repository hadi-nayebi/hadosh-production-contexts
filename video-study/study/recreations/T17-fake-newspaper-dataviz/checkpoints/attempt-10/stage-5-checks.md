# S5 checks — R-A10-5 alignment + mounted census + S3xS5 joint (pre-E1 gate: postLabelMeaning endpoint-first-last filed in build record + CONFIG)
PASS W360 self-start: playing or render reaches end
PASS W360 baseline validate clean
PASS W360 S1 sweep CONFIG leaves (238 leaves x2 mutations = 476 cases) never throws
PASS W360 S1 per-figure field sweep (83 cases) never throws + containers named
PASS W360 S1 value boundaries named (8)
PASS W360 S1 magnitude 400-nines no throw
PASS W360 S1 controlled failure (a) cloning returns failure
PASS W360 S1 controlled failure (b) construction returns failure
PASS W360 S1 controlled failure (c) publication returns failure + full restore
PASS W360 S1 controlled failure (d) first draw returns failure + restore
PASS W360 S1 probe bars={} named
PASS W360 S1 probe counterLocale named
PASS W360 S1 probe donutFraction named
PASS W360 S1 figures container named
PASS W360 S1 fitReport figures=undefined returns failure
PASS W390 self-start: playing or render reaches end
PASS W390 baseline validate clean
PASS W390 S1 sweep CONFIG leaves (238 leaves x2 mutations = 476 cases) never throws
PASS W390 S1 per-figure field sweep (83 cases) never throws + containers named
PASS W390 S1 value boundaries named (8)
PASS W390 S1 magnitude 400-nines no throw
PASS W390 S1 controlled failure (a) cloning returns failure
PASS W390 S1 controlled failure (b) construction returns failure
PASS W390 S1 controlled failure (c) publication returns failure + full restore
PASS W390 S1 controlled failure (d) first draw returns failure + restore
PASS W390 S1 probe bars={} named
PASS W390 S1 probe counterLocale named
PASS W390 S1 probe donutFraction named
PASS W390 S1 figures container named
PASS W390 S1 fitReport figures=undefined returns failure
PASS W360 S2 positioned-text enumerated (13 elements) all ok on shipped content
PASS W360 S2 regression 100xW bar label refused with extents
PASS W360 S2 y-label overflow refused
PASS W390 S2 positioned-text enumerated (13 elements) all ok on shipped content
PASS W390 S2 regression 100xW bar label refused with extents
PASS W390 S2 y-label overflow refused
PASS S3 stylesheet letter-spacing literals zero
PASS W360 S3 stage vars carry letter spacing from CONFIG
PASS W360 S3 counterLabelOpacity mutation changes mounted label
PASS W390 S3 stage vars carry letter spacing from CONFIG
PASS W390 S3 counterLabelOpacity mutation changes mounted label
PAIRED S0-baseline: badgeMetrics width default=308.2 handFont->serif=308.2 delta=0.0
PAIRED S0-baseline: shaft gap default=8 floor5 gap=8 dot 24->24 routeChanged=false
PAIRED S3-current: badgeMetrics width default=308.2 handFont->serif=308.2 delta=0.0
PAIRED S3-current: shaft gap default=8 floor5 gap=12 dot 24->23 routeChanged=true
PAIRED badge mounted families: S0=seg1:(class) seg2:(cssText) | S3=seg1:'Comic Sans MS','Segoe Print',cursive seg2:(cssText) | S3 mutated=seg1:Georgia,'Times New Roman',serif seg2:(cssText)
PASS S3 badge font keys change mounted segment fonts (S3 current, not in S0 baseline)
PASS S3 shaft floor mutation moves route (gap/dot)
PASS S3 headerRuleBoxPx mutation changes modelled headerH
PASS W360 S4 prospective width: fit measured at candidate width
T17 resize gate: fit check failed at width 360
PASS W360 S4 resize gate refuses unfit scene + surfaces named error
PASS W360 S4 resize gate recovers on valid config
PASS W360 S4 successful swap preserves playback position
PASS W390 S4 prospective width: fit measured at candidate width
T17 resize gate: fit check failed at width 390
PASS W390 S4 resize gate refuses unfit scene + surfaces named error
PASS W390 S4 resize gate recovers on valid config
PASS W390 S4 successful swap preserves playback position
PAIRED S4->S5 line-heights: chartTitle [font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.1em;margin-bottom:4px] -> [font-family:Arial,sans-serif;font-size:12px;line-height:1.3;letter-spacing:0.1em;margin-bottom:4px] | counter [font-size:20px;font-weight:900;margin:8px 0] -> [font-size:20px;line-height:1.2;font-weight:900;margin:8px 0] | countRow [font-family:Arial,sans-serif;font-size:12px;margin:6px 0] -> [font-family:Arial,sans-serif;font-size:12px;line-height:1.4;margin:6px 0]
PASS S5 chart title renders modelled line-height (LH.label)
PASS S5 counter text renders modelled line-height (bigLineH)
PASS S5 count row renders modelled line-height (waffleLabelH)
PASS W360 S5 post labels anchored to named points
PASS W360 S5 FIG.20 title margin >= named key
PASS W360 census shaft x 14 non-target dots: min edge clearance >= floor
PASS W360 census callout tip -> target dot gap 0 (MAX relation)
PASS W360 census callout label-dot clearance >= floor key
PASS W360 census connector end -> node anchor gap 0 (construction-derived)
PASS W360 census cliff marker maps to cliffAt under animFraction
PASS W390 S5 post labels anchored to named points
PASS W390 S5 FIG.20 title margin >= named key
PASS W390 census shaft x 14 non-target dots: min edge clearance >= floor
PASS W390 census callout tip -> target dot gap 0 (MAX relation)
PASS W390 census callout label-dot clearance >= floor key
PASS W390 census connector end -> node anchor gap 0 (construction-derived)
PASS W390 census cliff marker maps to cliffAt under animFraction
PASS W360 S3xS5 joint (shipped): title margin + label extents + fit
PASS W360 S3xS5 joint (swapped): title margin + label extents + fit
PASS W390 S3xS5 joint (shipped): title margin + label extents + fit
PASS W390 S3xS5 joint (swapped): title margin + label extents + fit

== S5: 73 passed, 0 failed ==
