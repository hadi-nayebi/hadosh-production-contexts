# T68 — config census (A6 leg 2, v3.1 form, pre-scoring)
File measured: recreation.html sha256 110a25fcdab596f487e7324b4000f5dcdf8ec88ed771e6307f2b09bf983af4d8
Re-filed on the final build after the codex-plan-review cure (mutable CONFIG recovery, duration-expands policy via effectiveDuration, per-band fit + fitOk validation, type.maxBandLines key added and resolved to the metrics fit loop + fitOk check; literal scan re-run on the final build: no hex outside CONFIG, no new subject-shaping literals).
Method: scripted all-literal scan of the full file outside the CONFIG block + key→application-site resolution walked against the source (nested/array members included) + CSS-variable check. The Node harness's swap run corroborates consumption (swapped title/bands/bandMs/holdMs/accent/calendar.day all re-drive the piece).

## 1. All-literal scan (outside CONFIG)
Numeric literals found: 0 ×21 · 1 ×12 · 2 ×3 · 800 ×5 · 700 ×2 · 9 ×2 · 8 ×1 · 50 ×1 · 6 ×1 · 16 ×1.
Classification — every constant is **structural** (exempt), none subject-shaping:
- 0 / 1 — indices, clamp bounds, opacity endpoints, the (1 − enterScaleFrom) complement identity.
- 2 — hex-pair count in the override color validator; band-count arithmetic base.
- 800 / 700 — font-weight identities passed to the measurement font string and CSS (title 800, band 700 typesetting weights; the sizes themselves are CONFIG `type.*`).
- 9 / 16 — the stage's 16/9 aspect identity (height derivation in build()).
- 8 — document encoding declaration (utf-8). 50 — none subject-bearing (URLSearchParams/JSON plumbing count). 6 — hex-length in the color validator regex.
Colors outside CONFIG: **none** (post-cure scan: 0 hex literals). No durations, geometry values, or palette values outside CONFIG.

## 2. Key → application-site resolution (all keys resolved, incl. nested/array)
- card.title → title element text + fitPx measurement · bands[] → band DOM construction + schedule + metrics · bands[].range → range span text · bands[].meaning → meaning span text
- calendar.enabled → calendar display gate · calendar.month → calHead text · calendar.day → calDay text · calendar.weekday → calWeekday text
- palette.card → card background · palette.ink → band text color · palette.accent → title color + rule background + bullet background · palette.bg → stage background · palette.calHead → calendar head background · palette.calHeadInk → calendar head text color · palette.calPaper → calendar background · palette.calInk → day + weekday color
- stage.width → stage width + derived stage height + validation bound
- layout.cardX/cardY/cardW → card position/width · layout.calX/calY/calW/calH → calendar position/size
- geom.padX/padY → card padding + inner-width + card-height derivation · geom.radius → card border radius · geom.ruleHPx/ruleTopPx/ruleBottomPx → rule size/margins + card height · geom.bulletPx/bulletGapPx/bulletTopPx → bullet size/spacing + band avail width · geom.bandGapPx → band row margins + card height · geom.calHeadHPx → calendar head height/line-height · geom.calRadius → calendar border radius
- type.titlePx/titleMinPx → title fitPx bounds · type.bandPx/bandMinPx → band font size (+ bandMinPx is the fit floor constant carried for the band fit bound) · type.lineHeight → title/band line-height + row/card height · type.charWidthFrac → fallback text measurement · type.calMonthPx/calDayPx/calWeekdayPx → calendar font sizes
- cardAtMs → schedule card start + render entrance · enterMs → entrance progress · enterScaleFrom → entrance scale interpolation · firstBandDelayMs → band start derivation · bandMs → band start spacing · bandAnimMs → band fade progress · holdMs → holdEnd derivation · fadeMs → exit progress · durationMs → validation bound + autoplay loop modulus

## 3. CSS-variable setter check
The build uses no CSS variables: every style is assigned directly from CONFIG in build()/render(). No unset-variable reference is possible; no variable is set but unreferenced. Check passes vacuously, printed as such.

## HIT list
**0 HITs — PASS for this leg.** Cures applied during the leg (pre-scoring, on earlier hashes): (1) `#ffffff` calendar-head text color stood in CSS outside CONFIG → moved to CONFIG `palette.calHeadInk` with a JS setter; (2) entrance scale literals 0.96/0.04 stood in render() → moved to CONFIG `enterScaleFrom` (the complement is the (1 − x) identity). Note carried (not a hit): after the plan-review cure, `type.bandMinPx` is applied in the metrics fit loop (per-band shrink) and `fitOk()` rejects configs whose widest word cannot fit the avail width at the floor (widest specimen word 68 px ≤ 203 px) — the earlier fixed-size bound is cured, not carried.
