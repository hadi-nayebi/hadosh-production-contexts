SCORE-BLIND BUILD RECORD — T16 particle document flip, current build
(Construction facts and the build's own deterministic check results. No scores, no history.)

WHAT THE BUILD IS
A single self-contained HTML file. A stack of document pages, rendered as particles sampled from config-rendered text and shapes, flips through its page counter (pages 1 to 14 at counter checkpoints 1, 6 and 14, at 0 ms, 1500 ms and 2200 ms of a 6000 ms cycle); the finished stack disperses, a title condenses out of the particle stream with a ring above it, the title holds, then disperses inside a dedicated seam interval (5700-6000 ms) and the cycle restarts with no borrowed particles carried across the seam. Phases: flip [0,2600), release [2600,3100), form [3100,4600), hold [4600,5700), seam [5700,6000). Page intervals: 300 ms early, 87.5 ms rapid, and a 400 ms final-page hold. The build starts its own animation loop on load.

CONSTRUCTION FACTS
- Turn: every page change restarts a page-turn cosine-compression animation whose effective duration is derived from the interval it must fit (the configured turn duration, capped so a settled dwell remains inside the interval). The turn window opens at the change's scheduled instant. The turn profile is a smoothstep trapezoid: the strong-compression zone spans about 58 ms of a rapid turn.
- Readability predicate: a page counts as readable at an instant when its particles are settled, the turn is complete and registration is complete; the readable tail of each interval is the interval minus the effective turn duration (20 ms rapid, 160 ms early, 260 final page at the defaults).
- Registration: after arrival, each particle's structure registers over a per-particle duration derived from the span remaining inside its turn window (delay + travel subtracted), so registration completes no later than the turn's end; title and ring particles use the full configured registration duration.
- Identity: page targets carry stable keys; line targets key on their page line index and position, so a line target keeps its identity across page changes. Measured assignment retention across consecutive page transitions is 0.990, with 417 reassignments across the flip and zero unassigned targets at the defaults.
- Releases: a release starts from the particle's actual rendered position (including its stream offset) with its rendered velocity captured, blends that derivative out over the first quarter of the release window, and eases to rest at a stream point; there is no per-release random term. Each release's duration is derived from its span: seam releases complete exactly at the cycle boundary, and releases at a page change disperse inside the entered page's interval. A particle whose release has not completed in scheduled time cannot be borrowed.
- Counter: the page counter (label + numeral) is fitted as one group against the space right of the page/stack region; the numeral font has a configured floor, and if the group cannot fit beside the page at that floor it moves to a fallback position above the page. At a 360 px stage the fitted numeral is 35 px and the group box is disjoint from the page and stack rectangles at 360, 390 and 960 px widths.
- Intensity: a particle's alpha interpolates from its travel intensity to its settled intensity as its registration progresses (an ease profile of registration progress); turning particles hold the travel intensity. At the settlement instant the interpolated alpha is at most 0.38 for page, title and ring particles; settled title is 1.0 and ring 0.95 at the hold.
- Validation: configuration is validated for finiteness, ranges and text content; joint relationships between keys (sampling-gap order, halo extent inside the stage, checkpoint ordering, counter/region ratios, phase-budget feasibility including the turn term) are re-checked after clamping, and a configuration whose joint relationships cannot be satisfied is refused wholesale (defaults restored, warning recorded) rather than silently clamped. Pool size is bounded by configured page/stack maxima.
- Text fitting: title and header are fitted in width and height using measured ink bounds where the canvas provides them, with configured fallback proportions and a bounded iteration count; the title's fitted box is checked against the stage in both dimensions.

STATED LIMITATIONS — PRICE THESE UNDER YOUR LENS
- PIXEL-UNVERIFIED: no rendered-pixel verification was available in the build environment; all geometry evidence is from the deterministic model harness summarised below.
- Reading dwell on rapid pages: under the readability predicate above (settled, turn complete, registration complete), the measured readable dwell is 16.7 ms per rapid page at 60 fps sampling in the harness; the settled-only dwell measures 83.3-100 ms. No longer readable dwell is claimed for rapid pages.
- Sampled readable frames at coarse sampling: at 50 ms sampling steps, 2-4 of the 8 rapid pages show a readable frame (measured; no guarantee is claimed at that sampling rate). At 60 fps sampling every rapid page shows a readable frame at every tested phase offset.
- Perceptual clearance during formation is not measured; clearance is priced by a geometry proxy at formation start (fraction of title targets already covered by the previous page's particles 0.132 against a 0.15 threshold; bounding-box overlap 0.240 against 0.35), and the proxy is shown to discriminate: with the release scatter zeroed the same measures read 0.268 / 0.954 and fail.

OWN-CHECK RESULTS (deterministic harness, all on this build)
CHECK schedule anchors exact: PASS — [{"page":1,"atMs":0},{"page":6,"atMs":1500},{"page":14,"atMs":2200}]
CHECK budget includes turn term and holds: PASS — budgetMs=160 arrival=36.4
CHECK rapid turn derived 67.5 and readable 20: PASS — [[6,67.5,20],[7,67.5,20],[8,67.5,20],[9,67.5,20],[10,67.5,20],[11,67.5,20],[12,67.5,20],[13,67.5,20]]
CHECK early turn capped 140 readable 160: PASS — [[1,140],[2,140],[3,140],[4,140],[5,140]]
CHECK turn visibility per change dt=16.667 off=0: PASS — changes=8 hits=8
CHECK turn visibility per change dt=16.667 off=3: PASS — changes=8 hits=8
CHECK turn visibility per change dt=16.667 off=7: PASS — changes=8 hits=8
CHECK turn visibility per change dt=16.667 off=11: PASS — changes=8 hits=8
CHECK turn visibility per change dt=50 off=0: PASS — changes=8 hits=8
CHECK turn visibility per change dt=50 off=3: PASS — changes=8 hits=8
CHECK turn visibility per change dt=50 off=7: PASS — changes=8 hits=8
CHECK turn visibility per change dt=50 off=11: PASS — changes=8 hits=8
CHECK assignment completeness full cycle: PASS — transitions=13 unassigned=0 keptFrac=0.990
CHECK target keys unique all pages 960x540: PASS — targets=42874 duplicateKeys=0
CHECK target keys unique all pages 390x844: PASS — targets=36522 duplicateKeys=0
CHECK kept-by-identity improves vs prior source (same harness): PASS — keptFrac=0.990 (fraction of assignments retained across consecutive page transitions)
CHECK churn falls vs prior source (same harness): PASS — churn prior=6920 new=417
CHECK unassigned stays 0: PASS — unassigned new=0
CHECK V5-1a titleText empty -> default + warning: PASS — titleText=AI GURU warned=true
CHECK V5-1b pageHeader non-string -> default: PASS — warned=true
CHECK V5-1c counterLabelText blank -> default: PASS — warned=true
CHECK V5-2a fontFamily empty -> default: PASS — warned=true
CHECK V5-2b fontWeight 2000 -> default: PASS — fw=900
CHECK V5-2c fontWeight 'bold' accepted: PASS — fw=bold
CHECK V5-3a maxWidthRatio -1 -> default: PASS — mwr=0.86
CHECK V5-3b titleCyRatio 1.5 -> default: PASS — warned=true
CHECK V5-4 pageHeaderWidthRatio 0 -> default: PASS — warned=true
CHECK V5-5a pageInnerX+W > 1 -> relationship reset: PASS — sum=0.88
CHECK V5-5b lines overflow page -> gap reset: PASS — extent=0.976
CHECK V5-6 counterNumPx 1000 -> default: PASS — warned=true
CHECK V5-7 minStageW NaN -> default: PASS — msw=320
CHECK V5-8a pageXR+pageWR > 1 -> reset: PASS — sum=0.5
CHECK V5-8b halo ellipse outside stage -> reset: PASS — cy=0.3 ry=0.055
CHECK V5-9 formation feasibility REACHED at multiplier 3: PASS — mult=1.887 delay=0 travelForm=950 haloNeed=2599.3 room=2600 feasible=true
CHECK V5-10 ring delay extending into hold is honoured: PASS — haloAtHoldEntry=false haloAt5200=true delay=2000
CHECK V5-11 mid-time > end-time -> both fractions default + final anchor survives: PASS — cps=[{"page":1,"atMs":0},{"page":6,"atMs":1500},{"page":14,"atMs":2200}]
CHECK V5-12 residual-literal keys exist in CONFIG+DEFAULTS: PASS — formationMinTravelMs=50 sampleGapMin=2 sampleGapMax=12 fitFallbackAscentRatio=0.8 fitFallbackDescentRatio=0.2 fitIterationCap=500 wrapJumpInsetPx=1
CHECK V5-13a pageCount 999999 -> clamp warning recorded; infeasible bound combination refused with warning, feasible after reset: PASS — clampWarned=true refused=true pageCount=14
CHECK V5-13c pool build at the bound completes (64 pages, feasible flipMs): PASS — pageCount=64 pageNeed=1062 pool=1362
CHECK V5-13b stackCount 999 -> clamped to maxStackCount: PASS — stackCount=8
CHECK V5-14 lastHeaderFit diagnostic exposed beside lastTitleFit: PASS — {"fs":66.528,"sx":1,"sy":1,"w":239.5008,"h":66.528,"boxW":266.112,"boxH":67.932,"condensed":false}
CHECK ADV non-finite sweep over 104 numeric keys: no throw, every key finite after validation: PASS — bad=
CHECK ADV pageLinePattern null -> default: PASS — warned=true
CHECK ADV flipCheckpoints 'x' -> derived schedule used: PASS — cps=[{"page":1,"atMs":0},{"page":6,"atMs":1500},{"page":14,"atMs":2200}]
CHECK ADV CONFIG key deleted outright (haloRxR) -> default: PASS — rx=0.17
CHECK ADV flipMs 0 -> clamped + budget refusal path, no hang: PASS — flipMs=2600 budgetFeasible=true
CHECK ADV formMs -5 -> clamped + formation feasible: PASS — formMs=73 feasible=true
CHECK ADV colour '#fff' -> default: PASS — warned=true
CHECK ADV colour 'red' -> default: PASS — warned=true
CHECK ADV easingExponent 40 accepted (legal): PASS — exp=40
CHECK ADV seed non-integer -> default: PASS — warned=true
CHECK ADV oversized token title bounds at 390px: PASS — title w=335.4/335.4 h=14.0/253.2
CHECK ADV oversized token header bounds at 390px: PASS — header w=108.1/108.1
CHECK ADV oversized token title bounds at 360px: PASS — title w=309.6/309.6 h=14.0/192.0
CHECK ADV oversized token header bounds at 360px: PASS — header w=99.8/99.8
CHECK ADV resize recompute: pool rebuilt at new size, no stale-size particle: PASS — pool 3365 -> 2267 inBounds=true
CHECK counter group disjoint from page+stack at 360x640: PASS — mode=inline numPx=35 box={"x0":211.8,"x1":316.8,"y0":217.60000000000002,"y1":276.35} rect={"x0":61.2,"x1":202,"y0":70,"y1":556.8}
CHECK counter numeral at or above floor at 360px: PASS — numPx=35 floor=24
CHECK counter group disjoint from page+stack at 390x844: PASS — mode=inline numPx=39 box={"x0":226.2,"x1":343.2,"y0":286.96000000000004,"y1":349.91} rect={"x0":66.30000000000001,"x1":217,"y0":96.52,"y1":734.28}
CHECK counter numeral at or above floor at 390px: PASS — numPx=39 floor=24
CHECK counter group disjoint from page+stack at 960x540: PASS — mode=inline numPx=64 box={"x0":652.8,"x1":844.8,"y0":183.60000000000002,"y1":272.8} rect={"x0":163.20000000000002,"x1":502,"y0":57,"y1":469.8}
CHECK counter numeral at or above floor at 960px: PASS — numPx=64 floor=24
CHECK counter fallback repositions above the stack region: PASS — mode=above box={"x0":76.19999999999999,"x1":148.2,"y0":16.88,"y1":64.08} rectY0=96.5
CHECK rapid borrow registration completes inside the turn window: PASS — freshBorrows=20 worst delay+travel+regDur=67.5 maxRegDur=39.3 turnEff=67.5
CHECK alpha at settlement instant does not exceed travelling intensity: PASS — maxSettleAlpha=0.380 kinds=stack,page,line,title,halo
CHECK alpha reaches settled value at registration completion (title/halo at hold): PASS — titleAlpha=1 haloAlpha=0.95
CHECK readable frames per rapid page dt=16.667 off=0: PASS — readablePages=8/8 settledPages=8/8
CHECK readable frames per rapid page dt=16.667 off=3: PASS — readablePages=8/8 settledPages=8/8
CHECK readable frames per rapid page dt=16.667 off=7: PASS — readablePages=8/8 settledPages=8/8
CHECK readable frames per rapid page dt=16.667 off=11: PASS — readablePages=8/8 settledPages=8/8
CHECK isReadable dwell positive for every rapid page: PASS — min=16.7
CHECK reuse gate: scattering particle not borrowed: PASS — scat=true borrowed=false
CHECK settled release position continuity: PASS — jump=0.000 disp2ms=0.001
CHECK settled release velocity step <= 50 px/s: PASS — step=0.02
CHECK release during registration (u~0.5) position continuity: PASS — jump=0.000 disp2ms=0.023
CHECK registration release velocity step <= 50 px/s: PASS — step=0.02
CHECK turn-active release position continuity: PASS — jump=0.000 disp2ms=0.203
CHECK turn-active release velocity step <= 50 px/s: PASS — step=0.03
CHECK mid-travel release (synthetic, priced) position continuity: PASS — jump=0.000 disp2ms=7.873
CHECK no borrowed particle is scattering across 2 cycles: PASS — violations=0
CHECK seam releases complete at the 6000 ms boundary: PASS — overdue scattering at boundary=0
CHECK clearance at form start within thresholds: PASS — {"titleFraction":0.13202614379084968,"bboxOverlap":0.23999734201363843,"n":3060}
CHECK clearance control (scatter zeroed) fails thresholds: PASS — {"titleFraction":0.2673202614379085,"bboxOverlap":0.9537802349052062,"n":3060}
CHECK displayed bounds settled title+final page 960x540: PASS — titleChecked=11040 titleViol=0 pageChecked=2116 pageViol=0
CHECK displayed bounds settled title+final page 390x844: PASS — titleChecked=3276 titleViol=0 pageChecked=1608 pageViol=0
CHECK velocity continuity across settlement instant: PASS — before=29.38 after=29.38 px/s
CHECK outline top-edge max gap within outline gap: PASS — maxGap=3 outlineGap=3
CHECK two-dimension title fit inside both boxes: PASS — fit 593x150 in 826x162
CHECK schedule swaps coherent (pageCount 9, flipMs 1800): PASS — [{"page":1,"atMs":0},{"page":4,"atMs":1038},{"page":9,"atMs":1523}] budgetOk=true
CHECK form borrow assigns every title target: PASS — borrowed=2760 targets=2760
CHECK reserve never borrowed + seam exclusivity over a full cycle: PASS — reserveViol=0 seamViol=0 seamChecks=2
CHECK joint demand at denser settings: unassigned 0: PASS — transitions=13 unassigned=0
CHECK restart determinism (fresh == restarted): PASS — hashEqual=true len=26132
CHECK URL swap regenerates (title/pageCount/flipMs/palette), unassigned 0: PASS — cfgOk=true unassigned=0 transitions=10
CHECK self-start: own rAF loop reaches the seam with no external caller: PASS — simT=6650 phases=flip,release,form,hold,seam,flip
PIXEL-UNVERIFIED: no rendered-pixel verification was available in the build environment; geometry evidence rests on the deterministic harness above.
