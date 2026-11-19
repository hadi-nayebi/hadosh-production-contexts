# T102 — config-census leg (guard-config-census.md v3.1) · attempt 1 · final build

## All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: `#11142e` (page chrome behind the stage), `#fff` / `#a00` (error banner chrome) — **structural/chrome**: neither is inside the stage; the stage field is CONFIG `palette.field`. Classification printed per the leg; not subject-shaping.
- Font stack in CSS: none (font applied from CONFIG `type.font` at build). The `#err` rule's `12px monospace` is error-banner chrome — structural.
- Numeric constants in logic: sRGB luminance coefficients (0.2126/0.7152/0.0722), gamma constants (0.03928, 12.92, 2.4, 0.055, 1.055, 255) — mathematical identities, **structural**. Interpolation fractions 0.25/0.5/0.75 (contrast sampling grid) — structural. Array indices 0,1,2 — structural. Ink ratios 0.716/0.75 and CHAR_W advance fractions — the fit harness's measurement model, structural (they measure the subject; they do not shape it). `Math.max(1, …)` rule-height floor — structural guard against a zero-height rule.
- Durations outside CONFIG: none — phase logic reads `landMs`/`holdMs` only; cycle is derived (`landMs + holdMs`), no 14000 literal in logic.
- Geometry outside CONFIG: none — every position/size in build() derives from `geom`/`footerGeom` fractions × stage/card bounds.

## Key → application-site resolution (all resolved)
card.title → title.textContent · card.body → body.textContent + wrap model · gradient.stops → gradientCSS (card background) + worstCaseContrast · gradient.angleDeg → gradientCSS · palette.field → stage background · palette.ink → title/rule/body color + contrast · footer.motif → construction branch in build() (only the named motif renders) · landMs → phaseAt + cycleMs · holdMs → cycleMs · stage.width → layoutModel · geom.* (aspect, card fractions, textBack box, title/rule/body placement) → build() + layoutModel · type.* (font, sizes, weights, letter-spacing) → build() styles + fit model · textBack.color/opacity → backing element + contrast composite · footerGeom.* (capsule gradient colors, path color/width/dash, arch + capsule fractions) → footer SVG construction · motion.fromScale/fromOpacity/fromRisePx → phaseAt.

## CSS-variable setter check
No CSS variables are used anywhere in the build — check vacuous, no unset-variable references.

**HIT list: EMPTY.**
