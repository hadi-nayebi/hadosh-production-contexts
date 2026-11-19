# T57 attempt 3 — config census (guard-config-census leg, v3.1, pre-scoring)

File measured: recreation.html sha256 f8b0735ca57335f6fca2486b8936c3e785ca8dcaf34950c2bedc05b24c8f19e3
Method: all-literal scan of the full file outside the CONFIG block (scripted, from the own-check suite) + key→site resolution + a mutation-based consumption census (60 keys probed in the own-check suite: every key's override produces a distinct observable effect; unconsumed = 0) + CSS-variable setter check.

## 1. All-literal scan (outside CONFIG) — per-literal classification
Numeric literals found (identifiers and character escapes excluded — they are names/characters, not numeric literals): 0 ×57 · 1 ×23 · 2 ×11 · 4 ×2 · 6 ×6 · 8 ×1 · 9 ×1 · 16 ×3 · 20 ×1 · 50 ×6 · 100 ×12 · 255 ×2 · 0.05 ×2 · 0.12 ×1 · 0.03928 · 12.92 · 0.055 · 1.055 · 2.4 · 0.2126 · 0.7152 · 0.0722 (×1 each).
Classification, printed per literal (content literals are never classified structural; no literal below carries technique content — the quote text, attribution strings, and every shaping value live in CONFIG):
- 0 — structural: clamp bound, opacity endpoint, array index, channel minimum in the constructed shadow color `rgba(0,0,0,<configured alpha>)` (the alpha is the configured `layout.shadowAlpha`; the zero channels are the numeric minimum of the channel range).
- 1 — structural: clamp bound, opacity endpoint, unit scale identity.
- 2 — structural: hex channel pair count / string offsets in the color parser.
- 4 — structural: hex channel count in the color parser.
- 6 — structural: the six-digit hex length bound in the color-format validator.
- 8 — structural: the document encoding declaration (utf-8).
- 9 — structural: a digit-class member inside the color-format validator's character class (not a value).
- 16 — structural: the hexadecimal radix in the color parser.
- 20 — structural: the contrast fallback's iteration cap (a loop bound; the step and floors are configured).
- 50 — structural: the centering identity (translate −50% of the element's own size, CSS + transform string; the anchor positions themselves are configured fractions).
- 100 — structural: percentage/viewport identities (100%, 100vh, fraction→percent conversion).
- 255 — structural: the channel maximum in the lighten step.
- 0.12 — structural: the fallback lighten step (the policy's fixed increment; the policy choice and floors are configured).
- 0.03928 / 12.92 / 0.055 / 1.055 / 2.4 / 0.2126 / 0.7152 / 0.0722 / 0.05 — structural: sRGB linearization, luminance, and contrast-ratio constants (mathematical identities of the WCAG formulas).
Colors outside CONFIG: no hex colors (suite-verified, 0 hits). One constructed `rgba(0,0,0, <configured shadowAlpha>)` — see the 0 classification above.
Shaping values moved into CONFIG by this attempt's construction (previously outside): stage aspect (16/9 as two configured keys), card anchor fractions (global + per-quote), glyph line height, attribution line height, exit scale end value, per-quote entrance/exit intervals. The font-family stack is a CONFIG key (`fontFamily`), consumed by both the CSS variable and the canvas measurement font.

## 2. Key → application-site resolution (60 keys, all resolved; mutation census 60/60 consumed, 0 unconsumed)
- durationMs → effectiveDuration()/diagnostics + frame loop · pageBg → :root --page-bg · fontFamily → --font-family + canvas measure font
- quotes[] → computeTimeline/buildQuote/renderAt · .text → wrap + line divs · .speaker → speaker span + attribution wrap tokens · .occasion → occasion span + attribution wrap tokens · .enterAtMs → timeline start (scheduled mode) · .enterDurMs → entrance progress · .exitStartMs → exit progress · .exitDurMs → exit progress span · .anchorXFrac/.anchorYFrac → card left/top in buildQuote
- palette.card → --card + contrast base · palette.ink → --ink + text-floor check · palette.chip → --chip (rule/glyph) + accent-floor check · palette.chipInk → --chip-ink + text-floor check · palette.occasion → --occasion + text-floor check · palette.field → --field (stage + scene background)
- entranceMode → renderAt branch (unit vs staggered opacity ownership) · lifecycleMode → computeTimeline start/exit derivation
- cardEnterMs → default entrance span for quotes without their own · exitDurMs → default exit span + scene-scale exit span · exitScaleTo → scene layer exit transform end value · lineMs → staggered line starts + staggered span · lineFadeMs → staggered line fade · chipFadeMs → staggered attribution fade + staggered span · holdMs → sequence span
- entranceScaleFrom → renderAt entrance scale interpolation · contrastTextMin → guardPalette text floors · contrastAccentMin → guardPalette accent floor · contrastFallback → guardPalette policy branch
- layout.stageMaxPx → --stage-max + width fallback · stageAspectW/stageAspectH → --stage-aspect + stage-height derivation · cardAnchorXFrac/cardAnchorYFrac → --card-left/--card-top defaults + buildQuote fallback · cardWidthFrac → --card-w + wrap availability · cardPadXFrac/cardPadYFrac → --card-pad-x/y + availability + fit height · cardRadiusFrac → --card-radius · rulePx → border width var + availability · cardMaxHeightFrac → wrap fit budget + overflow report · shadowOffsetYFrac/shadowBlurFrac/shadowAlpha → --card-shadow construction
- type.quoteFrac → --quote-size + wrap font · glyphFrac → --glyph-size + fit height · chipFrac → --chip-size + attribution measure · quoteWeight → --quote-weight + measure · chipWeight → --chip-weight + attribution measure · occasionWeight → --occasion-weight + attribution measure · lineHeight → --line-height + fit height · glyphLineHeight → --glyph-line-height + fit glyph term · chipLineHeight → --chip-line-height + fit attribution term · quoteGapFrac → --quote-gap + fit height · chipGapFrac → --chip-gap + fit height · fitGuard → wrap guard width · minQuotePx → quote size floor + shrink floor · chipMinPx → attribution size floor · occasionGapEm → --occasion-gap + attribution gap measure

## 3. CSS-variable setter check
Every CSS variable referenced in the style block (--page-bg, --field, --card, --ink, --chip, --chip-ink, --occasion, --font-family, --stage-max, --stage-aspect, --card-left, --card-top, --card-w, --card-pad-x, --card-pad-y, --card-radius, --rule-w, --card-shadow, --quote-size, --glyph-size, --chip-size, --quote-weight, --chip-weight, --occasion-weight, --line-height, --glyph-line-height, --chip-line-height, --quote-gap, --chip-gap, --occasion-gap) has a setter in applyVars() assigning it from CONFIG. No unset variable; no variable set but unreferenced.

## HIT list
**0 HITs — PASS for this leg.**
