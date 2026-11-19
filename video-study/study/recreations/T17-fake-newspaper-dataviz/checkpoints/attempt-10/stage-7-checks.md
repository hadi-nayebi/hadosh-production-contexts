# S7 freeze checks — full cumulative suite on frozen candidate + swap test + legs
PASS W360 self-start: playing or render reaches end
PASS W360 baseline validate clean
PASS W360 S1 sweep CONFIG leaves (240 leaves x2 mutations = 480 cases) never throws
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
PASS W390 S1 sweep CONFIG leaves (240 leaves x2 mutations = 480 cases) never throws
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
PASS W360 S6 B1-1 continuity max step <= 0.01 @1ms
PASS W360 S6 B1-1 dominant-figure floor >= 0.35 at every sample
PASS W360 S6 B1-2 opening value holds at full opacity through dwell
PASS W360 S6 B1-2 openingDwellSec positive + budgeted
PASS W360 S6 B1-3 summary dwell margin >= 0.35 (later-instant basis)
PASS W360 S6 B1-3 fill order: typing starts at/after callout target visible
PASS W360 S6 cliff mapping consistent under shifted progress
PASS W390 S6 B1-1 continuity max step <= 0.01 @1ms
PASS W390 S6 B1-1 dominant-figure floor >= 0.35 at every sample
PASS W390 S6 B1-2 opening value holds at full opacity through dwell
PASS W390 S6 B1-2 openingDwellSec positive + budgeted
PASS W390 S6 B1-3 summary dwell margin >= 0.35 (later-instant basis)
PASS W390 S6 B1-3 fill order: typing starts at/after callout target visible
PASS W390 S6 cliff mapping consistent under shifted progress
S6 paired + diagnostics filed in stage-6 checks (b1-baseline / b1-diagnostics / b1-s6 outputs)

== S7: 87 passed, 0 failed ==
SWAP TEST: PASS (default -> DLC-class preset -> default at 360/390 via public API, incl. no-arg rebuild)
Legs on frozen candidate: fit-table-attempt10.md 18 rows 0 failing; config-census-attempt10.md 338 leaves, 149 mutation-consumed, 189 named-consumer, 0 HIT.
Comment neutralization scan: 8 comments, 0 anchor-risk (no cure codes/scores) — no comment change needed, suite stands.
D1 re-attempt: no browser binary on PATH in this session; standing startup block (Hatch WebGL domain policy) unrebutted — D1-a/b/c OUTSTANDING.
