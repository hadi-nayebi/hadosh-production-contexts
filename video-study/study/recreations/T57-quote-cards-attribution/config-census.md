# T57 attempt 2 — config census (guard-config-census leg, v3.1, pre-scoring)
File measured: recreation.html sha256 52ea12eb3e4b188e937f05faf55821488ab8a0bc152ca7ce3e88b128068b87b9
Method: all-literal scan of the full file outside the CONFIG block (scripted count, this filing) + key→site resolution walked against the source + CSS-variable setter check. The own-check suite's consumption census (50/50 keys) and literal census corroborate.

## 1. All-literal scan (outside CONFIG)
Numeric literals found: 0 ×37 · 1 ×14 · 2 ×11 · 50 ×6 · 16 ×5 · 100 ×2 · 9 ×2 · 0.6 ×2 · 4 ×2 · 255 ×2 · 0.05 ×2 · 8 ×1 · 0.03928 · 12.92 · 0.055 · 1.055 · 2.4 · 0.2126 · 0.7152 · 0.0722 · 20 · 0.12 (×1 each).
Classification — every constant is **structural** (exempt), none subject-shaping:
- 0 / 1 — indices, clamp bounds, opacity endpoints.
- 2 / 4 — hex channel offsets and pair counts in the color parser.
- 50 — centering identity (translate −50% of the element's own size, CSS + transform string).
- 16 / 9 — the stage's 16/9 aspect identity (CSS aspect-ratio + height derivation).
- 100 — viewport-relative CSS (100%, 100vh).
- 8 — document encoding declaration (utf-8).
- 0.6 — glyph line-box factor; duplicates the glyph's CSS line-height, a typesetting identity of the glyph element, classified structural and printed here per the cautionary rule (it scales no subject content — the glyph size itself is CONFIG `glyphFrac`).
- 255 — channel maximum in the lighten step. 20 — fallback step cap (a loop bound). 0.12 — fallback lighten step (the policy's fixed step; the policy choice itself is CONFIG `contrastFallback`).
- 0.03928 / 12.92 / 0.055 / 1.055 / 2.4 / 0.2126 / 0.7152 / 0.0722 / 0.05 — sRGB linearization + luminance + contrast-ratio constants (mathematical identities of the WCAG formulas).
Colors outside CONFIG: one constructed `rgba(0,0,0, <CONFIG shadowAlpha>)` — black at a CONFIG-driven alpha; the alpha is consumed from CONFIG, the black is the shadow's neutral base. No hex colors outside CONFIG.

## 2. Key → application-site resolution (50 keys, all resolved)
- durationMs → effectiveDuration()/diagnostics + frame loop · pageBg → :root --page-bg in applyVars · fontFamily → --font-family + canvas measure font
- quotes[] → computeTimeline/buildQuote/renderAt · quotes[].text → wrapQuote + line divs · .speaker → speaker span · .occasion → occasion span · .startAtMs → timeline start (scheduled mode) · .exitStartMs → exit progress in renderAt
- palette.card → --card + contrast base · palette.ink → --ink + text-floor check · palette.chip → --chip (rule/glyph) + accent-floor check · palette.chipInk → --chip-ink + text-floor check · palette.occasion → --occasion + text-floor check · palette.field → --field (stage background)
- entranceMode → renderAt branch (unit vs staggered opacities) · lifecycleMode → computeTimeline start/exit derivation
- cardEnterMs → entrance progress + span + end derivation · exitDurMs → exit progress · lineMs → staggered line starts · lineFadeMs → staggered line fade · chipFadeMs → staggered chip fade · holdMs → sequence span
- entranceScaleFrom → renderAt scale interpolation · contrastTextMin → guardPalette text floors · contrastAccentMin → guardPalette accent floor · contrastFallback → guardPalette policy branch
- layout.stageMaxPx → --stage-max + width fallback · cardWidthFrac → --card-w + wrap availability · cardPadXFrac / cardPadYFrac → --card-pad-x/y + availability + fit height · cardRadiusFrac → --card-radius · rulePx → border width var + availability · cardMaxHeightFrac → wrapQuote fit budget · shadowOffsetYFrac / shadowBlurFrac / shadowAlpha → --card-shadow construction
- type.quoteFrac → --quote-size + wrap font · glyphFrac → --glyph-size + fit height · chipFrac → --chip-size + chip measure · quoteWeight → --quote-weight + measure · chipWeight → --chip-weight + measure · occasionWeight → --occasion-weight + occasion measure · lineHeight → --line-height + fit height · quoteGapFrac → --quote-gap + fit height · chipGapFrac → --chip-gap + fit height · fitGuard → wrap guard width · minQuotePx → quote size floor + shrink floor · chipMinPx → chip size floor · occasionGapEm → --occasion-gap + chip width measure

## 3. CSS-variable setter check
Every CSS variable referenced in the style block (--page-bg, --field, --card, --ink, --chip, --chip-ink, --occasion, --font-family, --stage-max, --card-w, --card-pad-x, --card-pad-y, --card-radius, --rule-w, --card-shadow, --quote-size, --glyph-size, --chip-size, --quote-weight, --chip-weight, --occasion-weight, --line-height, --quote-gap, --chip-gap, --occasion-gap) has a setter in applyVars() assigning it from CONFIG. No unset variable; no variable set but unreferenced.

## HIT list
**0 HITs — PASS for this leg.**
