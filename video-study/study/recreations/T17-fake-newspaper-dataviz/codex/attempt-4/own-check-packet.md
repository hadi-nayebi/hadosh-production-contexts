NEUTRAL OWN-CHECK PACKET (check names + results on the final source; logic-level harness, node):
PASS summary length is 89 :: len=89
PASS hold = len*20ms = 1.780s :: hold=1.78
PASS typeStart = 0.7
PASS typeDur = 1.420s :: typeDur=1.4200000000000002
PASS typeDur >= minTypeSec 0.8
PASS completion = typeStart+typeDur = 2.120s :: completion=2.12
PASS readMsPerChar = 20 in CONFIG
PASS waffle full at p=1 with full summary typed
PASS swapped 200-char summary rejected (typeDur < minTypeSec at new rate) :: fig21: summary of 200 chars cannot type in at least 0.8s and still hold for reading inside its window
PASS swapped 120-char summary hold scales to 2.400s :: hold=2.4
PASS defaults validate clean
PASS CSS-parse: every declaration parses :: 76 declarations, bad: 
PASS CSS .fig padding-top from single-source var
PASS CSS h2 margins from single-source vars
PASS CSS .src: opacity removed, secondary colour
PASS FIG.20 phone blockH uses rowGapPx 18 (not 8) :: blockH=214
PASS FIG.24 phone blockH uses counterGapPx 24 (not 8) :: blockH=223.8
PASS builder gaps consume same keys
PASS fit ok @360
PASS stageH <= 640 @360 :: stageH=553
PASS fit ok @390
PASS stageH <= 640 @390 :: stageH=553
PASS fit ok @960
PASS max-stack recomputed total <= 640 :: stageH=619
PASS max-stack validates clean (unit floor holds)
PASS FIG.22 unit floor = labelPx+2 = 14 at 360 :: unitFloor=14
PASS binding figure clearance > 0 (no exact-bottom) :: clearance=8
PASS label floor 12 in CONFIG
PASS meta rows 2 @360/390, 1 @960 at 12px floor
PASS org perRow maximal-with-gap nodes=4
PASS org perRow maximal-with-gap nodes=6
PASS org perRow maximal-with-gap nodes=8
PASS org builder consumes orgRowGapPx + model nodeW
PASS palette.secondary contrast on paper >= 4.5:1 :: ratio=6.03 secondary=#595344
PASS secondary consumed via CSS var setter
PASS timing.badgeDur = 0.15 (q units)
PASS timing.badgeEasePow = 2
PASS badge key mutation probe: cloned CONFIG carries mutated value, defaults validate clean
PASS defaults validate clean after stage 2
PASS render-side Math.min stamp clamp deleted
PASS AABB [left,right] inside block at all sampled scales @360
PASS max sampled scale == fitted cap @360
PASS no flat segment at cap after sq=0 @360 :: flat=0
PASS approach strictly decreasing @360
PASS geom stampAabbW == AABB width at cap @360
PASS AABB at cap inside block @360 :: left=0.0 right=328.0
PASS stampH == AABB height at cap @360
PASS AABB [left,right] inside block at all sampled scales @390
PASS max sampled scale == fitted cap @390
PASS no flat segment at cap after sq=0 @390 :: flat=0
PASS approach strictly decreasing @390
PASS geom stampAabbW == AABB width at cap @390
PASS AABB at cap inside block @390 :: left=0.0 right=358.0
PASS stampH == AABB height at cap @390
PASS AABB [left,right] inside block at all sampled scales @960
PASS max sampled scale == fitted cap @960
PASS no flat segment at cap after sq=0 @960 :: flat=0
PASS approach strictly decreasing @960
PASS geom stampAabbW == AABB width at cap @960
PASS AABB at cap inside block @960 :: left=0.0 right=500.0
PASS stampH == AABB height at cap @960
PASS curve passes overshoot at approach end
PASS curve passes compression at rebound end
PASS curve settles at 1
PASS DOM stamp found
PASS DOM stamp marginLeft == model offsetX
PASS DOM stamp entrance scale == fitted cap (not clamped curve) :: scale=1.8253301615845188 cap=1.8253301615845308
PASS builder marker uses shared mapping fig.cliffAt/animFraction
PASS old builder form removed
PASS animFraction default = 0.85 :: af=0.85
PASS marker fraction at defaults = 0.68/0.85 = 0.80
PASS swapped cliffAt 0.5 -> marker fraction 0.588 follows mapping :: frac=0.5882352941176471
PASS swapped minHoldSec 1.0 -> animFraction 0.75 -> marker fraction 0.907 follows :: frac=0.9066666666666667
PASS DOM cliff line found
PASS DOM cliff x == graph mapping position (0.80 of width)
PASS FIG.20 final point = [0.97, 0.62] :: [[0.55,0.78],[0.82,0.18],[0.97,0.62]]
PASS final segment rise = 0.44 :: rise=0.44
PASS counter-final time == last-unit settle time (defaults)
PASS counter not final just before settle
PASS swapped stackCount 14: counter-final == settle
PASS FIG.22 settle at 2.700s within window
PASS badge onset q=0.80: badgeQ 0
PASS badge mid q=0.875: badgeQ 0.5, badgeE 0.75 (easePow 2) :: badgeE=0.7499999999999998
PASS badge completion q=0.95: badgeQ 1, badgeE 1 :: badgeQ=0.9999999999999994
PASS badge constant after completion
PASS badge onset 2.400s, completion 2.850s, derived hold 0.750s
PASS badge entrance completes inside animation portion (q 0.95 < 1)
PASS DOM badge mid-entrance element found
PASS DOM badge mid state: opacity 0.5, scale lerp(1.6,1,0.75)=1.15
PASS stackEasePow mutation changes stack arrival curve
PASS stampEasePowIn mutation changes stamp approach
PASS stampEasePowOut mutation changes stamp settle
PASS animFractionFloor mutation changes animFraction floor
PASS badgeDur re-census: mutation changes badgeQ at q=0.875
PASS badgeEasePow re-census: mutation changes badgeE
PASS counterLocale mutation changes counter text grouping :: 3.412.083.117
PASS formatting defaults present
PASS no 'en-US' outside CONFIG
PASS no node symbol outside CONFIG
PASS no star separator outside CONFIG
PASS no ' of ' literal in waffle builder
PASS easing literals gone: stack pow
PASS easing literals gone: stamp pow in/out
PASS animFraction 0.05 floor literal gone
PASS defaults validate clean (schedule contiguous, total coverage)
PASS gap in schedule rejected with named error :: schedule: figure fig22 start 8 does not equal previous figure end 7.5 (overlap or gap);schedule: figure fig23 start 11.1 does not equal previous figure end 11.6 (overlap or gap)
PASS overlap in schedule rejected with named error
PASS total-coverage mismatch rejected
PASS unsupported figure type produces named validation error :: fig20: unsupported figure type bogusType
PASS waffle model dims = pitch formula, total 15 :: gridW=152 gridH=88
PASS waffle model dims = pitch formula, total 30 :: gridW=152 gridH=184
PASS DOM waffle dots = 15 in explicit rows
PASS DOM waffle rows present with gap pitch :: rows=3
PASS DOM waffle count text uses ofWord default :: panicking 15 of 15
PASS ofWord MUTATION: displayed waffle count uses probe word :: panicking 15 probe 15
PASS DOM org nodes carry CONFIG nodeSymbol :: ⬛ CFO|⬛ CTO|⬛ Head of HR|⬛ VP of Vibes
PASS org perRow regression: maximal-with-gap still holds
PASS longer counter label priced by fit model (cardH grows) :: 79.80000000000001 -> 95.4
PASS longer masthead priced (header derived from strings)
PASS warn display: zero-warning default renders no warn element :: warns=0
PASS warn display: unsupported type renders warn element
PASS warn display: global schedule error renders global warn element
PASS swap waffle 15->30 changes filled at mid progress :: 15->30
PASS swap org nodes 4->6: sixth present at completion
PASS swap bars 4->7 changes bar geometry
PASS swap counter range changes mid-window text
PASS swap notes 1->4: count 1 all complete inside animation portion :: last start 0.55
PASS swap notes 1->4: count 2 all complete inside animation portion :: last start 0.7
PASS swap notes 1->4: count 3 all complete inside animation portion :: last start 0.75
PASS swap notes 1->4: count 4 all complete inside animation portion :: last start 0.775
PASS swap longer endpoint labels: displayed bounds inside SVG :: [[48,234],[139,318]]
PASS FIG.22 source-line bottom has clearance > 0 at default
PASS binding figure (FIG.22) bottom clearance = 8px > 0
PASS max-stack binding bottom clearance = 8px > 0 :: stageH=619
PASS masthead meta wrap states: 2 rows phone / 1 row desktop at 12px floor
PASS purity grep: 0 subject hits (SVG namespace x2 is the standing exception)
PASS no external assets: no link/script src
PASS inline script parses
PASS window.T17 interface intact
PASS self-start limitation present by construction (renders first frame, playing=false at load)
(140 checks, all PASS)
