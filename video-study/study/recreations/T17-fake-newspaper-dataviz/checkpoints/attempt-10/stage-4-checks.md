# S4 checks — R-A10-4 fit-gating symmetry
PASS W360 self-start: playing or render reaches end
PASS W360 baseline validate clean
PASS W360 S1 sweep CONFIG leaves (238 leaves x2 mutations = 476 cases) never throws
PASS W360 S1 per-figure field sweep (82 cases) never throws + containers named
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
PASS W390 S1 per-figure field sweep (82 cases) never throws + containers named
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

== S4: 52 passed, 0 failed ==
