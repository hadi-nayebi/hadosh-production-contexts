# config-census — T182 detail-to-wide match on action · attempt 1 (guard-config-census leg v3.1, A6)

Final build: recreation.html, SHA-256 80221825fd720b36084ca54a0578309b8b0ff1811927023800b4de8244420497.

## 1. All-literal scan (literals OUTSIDE the CONFIG block)
Method: the CONFIG object was extracted and the remaining file scanned for numeric / color / string literals; each is classified below.

Colors outside CONFIG: `#14100c` (page background, CSS) — page chrome, not scene content: STRUCTURAL (the scene's own background is CONFIG wallColor). No other hex/rgba outside CONFIG.
Numeric literals outside CONFIG, with classification:
- `960` / `540` (stage W/H constants + viewBox + CSS max-width) — stage frame dimensions; the scene's subject geometry is all CONFIG geom relative to this frame: STRUCTURAL (frame, not subject-shaping; changing the frame rescales the whole stage uniformly).
- `16/9` (CSS aspect-ratio) — STRUCTURAL (same frame).
- `2` in `2 * Math.PI`, `/ 2` divisions (pin half-length, torso half extents), `180` in rad conversion, `%` moduli — mathematical identities: STRUCTURAL.
- `0` / `1` (initial render instant, scaleAt wide value 1 = the identity camera, loop indices/bounds) — STRUCTURAL. Note: scaleAt's wide value 1 is the identity transform, not a shaping coefficient; the detail camera value is CONFIG detailScale.
- `100` (%) CSS widths/heights — STRUCTURAL page chrome.
- Strings outside CONFIG: SVG namespace URI, element ids, "blur(...)px" filter assembly (its magnitude is CONFIG blurPxDetail/blurPxWide), transform function names — STRUCTURAL (machinery, values flow from CONFIG).

Census-driven cures applied BEFORE this filing (found by this scan, fixed, harness re-run ALL PASS): `ballRyFrac` 0.8 (dough-ball squash — was a code literal `* 0.8`), `torsoRx` 38 (torso corner radius — was a literal), `flourOpacity` 0.55 (flour-layer opacity — was a literal) are now CONFIG keys with application sites. Subject-shaping literals remaining outside CONFIG: **0**.

## 2. CONFIG key → application-site resolution (every key resolves; nested geom keys included)
- cutMs → sceneAt() + scaleAt() (camera swap instant) · durationMs → __rec.seek/play clock wrap · rollPeriodMs → phaseAt() · rollAmplitudePx → offsetAt() · rollTiltDeg → angleAt() · detailScale → scaleAt() + render() camera transform · doughColor → dough disc + dough balls fill · pinColor → pin rect fill · skinColor → head, arms, hands fill/stroke · tableColor → table ellipse fill · accentLabel → data-only (swap-harness identifier; application = harness identity check, never rendered — priced in RUN §2 as data-only) · wallColor → background rect fill · clothColor → torso fill · flourColor → flour ellipse fill · griddleColor → griddle rect fill · doughCxFrac/doughCyFrac → doughCx/doughCy computation (camera centre + dough position) · blurPxDetail/blurPxWide → pinGroup filter in render() · flourOpacity → flour ellipse opacity.
- geom.tableCx/tableCy/tableRx/tableRy → table ellipse · geom.doughRx/doughRy → dough disc · geom.pinLen/pinH → pin rect · geom.handRx/handRy/handInset → hand ellipses + arm endpoint computation · geom.headR/headCx/headCy → head circle · geom.torsoW/torsoH/torsoCx/torsoCy/torsoRx → torso rect · geom.shoulderLx/shoulderLy/shoulderRx/shoulderRy → arm line origins · geom.armW → arm stroke-width · geom.ballR/ballRyFrac/ball1x/ball1y/ball2x/ball2y/ball3x/ball3y → dough-ball ellipses · geom.griddleX/griddleY/griddleW/griddleH/griddleR → griddle rect · geom.flourRx/flourRy → flour ellipse.
Unapplied keys: **0**.

## 3. CSS-variable setter check
The build uses NO CSS variables (no `var(--…)` references, no CSS custom-property setters) — the check's class has no instance: PASS by empty set. CONFIG flows through JS application sites only (table above).

## HIT list
EMPTY — PASS for this leg (0 hits), after the three census-driven cures recorded in §1.
