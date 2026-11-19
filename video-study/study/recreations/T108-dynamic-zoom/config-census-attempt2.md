# T108 — guard-config-census output, ATTEMPT 2 (A-C008 leg 2, pre-scoring)

Filed as `config-census-attempt2.md` because the plain `config-census.md` is attempt 1's preserved leg output (create-once; never overwritten). Census runs against attempt 2's own CONFIG. Consumption is asserted by mutation/probe in the own-check suite (A-C006-2), not by binding alone: every key below names its consumed effect and the probe that priced it.

## 1. Application-site resolution + consumed effect (every CONFIG key → ≥1 site)
inner.title → .ptitle text node (swap probe: title change renders) ✓ · inner.lines[0] → pill text ✓ · inner.lines[1..] → row nodes at any count (fixtures 0/1/3/5/6 rows re-derive naturalH + row nodes) ✓ · screenRect.x/y → laptop/screen position, camera centre, cursor entry rect ✓ · screenRect.w → widths, endScale, visible window (96-fixture → endScale 3.75) ✓ · screenRect.h → heights, centre, aspect validation (60-fixture → loud aspect error) ✓ · startScale → pose scale interpolation ✓ · zoomMs → zoom branch + phase table (3200 swap probe) ✓ · holdBeforeMs → distant phase + zoom start ✓ · holdAfterMs → arrived-phase boundary with OBSERVABLE effect: perturbation 3200→1200 changes the phase table AND pose(t).phase AND the rendered world dataset.phase at a boundary-straddling time ✓ · cycleMs → pose modulo + loop fade edge (string-type probe) ✓ · ease → EASES map selection ✓ · loopFadeMs → render opacity ✓ · cameraFraction → inside-pose arrival time (0.45→0.6 perturbation moves the scale at fixed t) ✓ · settle.fromScale/fromDy → content settle transform (displaced at inside-pose, identity at zoom end) ✓ · cursor.w/h → cursor geometry ✓ · cursor.color → cursor background ✓ · cursor.fadeMs → entry-bound fade duration (opacity 0 at entryT+fadeMs) ✓ · cursor.polygon → clipPath string constructed from the point list (probe asserts the exact constructed string) ✓ · cursor.path[] → cursor position + camera target blend + entry derivation (path start off-screen right; target starts on cursor) ✓ · laptop.bezel/baseH/radius → body offsets/sizing/borderRadius ✓ · innerLayout.titleSize → title font size + fit budget ✓ · pillTextSize/lineSize → pill/row font sizes (7.5) + measured fit budget ✓ · pillW/pillH/rowW/rowH → element sizing + natural budget ✓ · gap → content gap applied ONCE (style gap = "5px" unscaled; displayed gap = gap × fitScale × endScale via the group transform only) ✓ · titleWeight → title fontWeight + measurement ✓ · pillRadius/rowRadius → border radii ✓ · rowPad → row paddingLeft + fit budget ✓ · pillPadX → pill/row effective widths in the fit budget ✓ · titleLineHeight → title line-height SET in CSS (style lineHeight "1.3") + naturalH term ✓ · palette.* → stage/world/laptop/screen/text/pill/row colors (field swap probe) ✓ · type.font → body font-family + measurement font ✓ · stage.width/height → stage sizing, centres, endScale + visible derivations (720 resize probe re-derives endScale 4.068) ✓. No unapplied key.
Retired keys, verified absent from the source: cursor.fadeFrom · cursor.fadeTo · outer.label · laptop.labelSize ✓

## 2. All-literal scan (outside CONFIG block), per-literal whitelist (A-C008-3 + A-C009-4)
- `#111` (style block + page backdrop) — structural: page chrome behind the stage, not subject.
- `0` margins/paddings, flex/layout keywords — structural.
- Ease cubic coefficients `4, 3, 2, 0.5` and smoothstep `3, 2` — structural: mathematical identity of the named curves.
- Validation fallback duplicates of CONFIG defaults (`82, 43, 177, 113, 0.65, 2600, 1400, 3200, 14000, 500, 0.45`) — structural-validation: each is the named per-field fallback used only when that CONFIG field is itself invalid; printed per field in the validation code.
- `0.52` — named metric-estimate coefficient, used ONLY when canvas measureText is unavailable (browser path always measures); printed here, not hidden.
- `400` — measurement default font weight (normal) for pill/row text measurement.
- `1e-9` epsilon in the aspect comparison — structural tolerance.
- `lines.slice(1)` index `1`, loop bounds — structural construction syntax.
- Format strings ("translate(...) scale(...)", "polygon(...)") — structural; all values CONFIG-derived.
No content-carrying literal (label, glyph point, multiplier) stands outside CONFIG: the cursor polygon points and the title-height multiplier — attempt 1's two priced instances — are CONFIG keys in this attempt.

## 3. CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS. ✓

HIT list: **empty — PASS for this leg (0 HITs on the attempt-2 build).**
