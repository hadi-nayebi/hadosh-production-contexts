# config-census — T197 volume ramp · Cycle 035 Wave 32 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)

Scan run on the FINAL recreation.html (SHA-256 42578a0d59fc2f05ace09f4fcf28b9d372b40941a047c8300bb98e70e0dca32b — re-scanned after the jev-prewave HOLD cure: CSS line-height removed in fact, censusAnchorsMs bound) + comparison.html for cross-file application sites. Reference counts are occurrences in code after the CONFIG block (seat script, this run).

## RE-SCAN — Cycle 036 Wave 33 COMPLETION (cured build)
Re-scanned on the completion build, recreation.html SHA-256 **65b4de69d1d384601613ba93e5cc892c55693d7b1decd68b593690dcfb9f0dcf** (12,819 B). The completion cure adds exactly two CONFIG keys; both resolve to application sites in `layout()` (value-flow checked, seat grep this run):
| CONFIG key | sites | flows to |
|---|---|---|
| narrowStageAspectMax | 1 (layout predicate) | `var narrowStage = (W / H) <= CONFIG.narrowStageAspectMax` — selects the line-top set per stage aspect |
| narrowLineTopPctOfStage | 1 (array-indexed, via the `lineTops` selection) | `el.style.top = (H * lineTops[li]/100)` when the narrow predicate holds — the portrait-stage line tops (completion layout cure) |
All other key→site resolutions below stand unchanged on the cured build (the cure touched only the CONFIG block's two new keys + the layout() top-selection lines; no other literal or site moved — verified by the literal scan re-run: no new hex colors, durations, or geometry literals outside CONFIG; the `0.75` threshold and `[11, 49]` tops exist ONLY as the CONFIG values above). CSS-variable setter check: no CSS variables are used by this build (unchanged) — no unset-variable HIT class applies.
HITs (cured build): **0**

## Key → application-site resolution (value-flow checked, Cycle-021 rule)
| CONFIG key | sites | flows to |
|---|---|---|
| baseSizePctOfStage | 3 | wordStateAt ratio math + render basePx |
| baseWeight | 4 | envelope weight lerp (wordStateAt) |
| easingName | 1 | EASINGS selection in envelopeAt |
| plateColor | 1 | stage background |
| guideColor | 1 | guide-rule background |
| guideInsetPct | 2 | guide left/width geometry |
| guideThicknessPx | 1 | guide height |
| guideGapPctOfStage | 2 | guide top positions |
| unspokenColor / spokenColor | 1 each | render color branch on spoken state |
| fontStack | 1 | stage fontFamily (typography as CONFIG, Cycle-013 clarification) |
| minSizePctOfStage | 1 | ratio floor + FIT-FAIL arming in wordStateAt |
| lineExitMs | 3 | release derivation + Line A fade |
| lineGapMs | 1 | release derivation |
| endHoldMs | 1 | standalone loop period |
| coreMs | 5 | persist end, comparison clamp (read cross-file by comparison.html), seek clamp |
| segmentHandleOffsetMs | cross-file | comparison.html buildMs() reads it from the recreation CONFIG via window.__T197.config — applied; NO duplicated literal in comparison.html (cured at first draft, see below) |
| ownershipPolicy | 2 | clamp branch predicate in computeOwnership/effectiveEnvOnset |
| lineTopPctOfStage[] | 1 (array-indexed) | line row tops in layout (cured at first draft, see below) |
| lineHeight | 1 | line leading in layout (cured at first draft; the CSS copy was removed in fact at the prewave cure — the stylesheet carries no line-height now) |
| censusAnchorsMs.* | harness-side | the A11 checkpoints' evaluation instants (bound at the prewave cure; the harness derives every CP instant from these anchors + envelope expressions and prints the agreement checks) |
| sharedEnvelopes.shrink.* | envOnset 9 · rampMs 1 · sizePeak 7 · weightPeak 7 · persist 6 (shared resolver refs) | resolveEnv — the SINGLE canonical shrink definition; `or`/`softer` carry envelopeRef only, no inline copies (amendment §E) |
| lines[].speechEndMs | 1 | lineReleaseMs speech-end term (bound at first-draft cure — amendment §C note) |
| lines[].words[].text/onsetMs/envOnsetMs/sizePeak/weightPeak/rampUpMs/rampDownMs/peakHoldMs/persist/envelopeRef | 1–12 each | span construction, color timing, envelope resolution |

## Literal scan outside CONFIG
- Hex colors in JS logic: NONE. In CSS: `#000` (page void outside the stage — structural, T137 precedent; the stage plate color itself reads plateColor) · `#ff5252` (FIT-FAIL diagnostic banner only — structural-diagnostic, not subject matter).
- CSS layout constants: `.line` padding `0 2vw` (container inset — structural), `line-height` REMOVED from CSS (now CONFIG lineHeight), `#fitfail` bottom 2% / 13px / monospace (diagnostic banner geometry — structural-diagnostic).
- JS numeric literals: 0 / 1 / 2 (indices, identity, clamp bounds — structural) · 100 (percent divisor — mathematical identity) · 0.5 / 2 in easing formulas (the named curves' defining constants — structural; the curve itself is CONFIG-selected by easingName) · 50 in guide-centre math (= 100/2 — structural identity).
- JS strings: easing names (EASINGS map keys, selected via CONFIG easingName — structural) · 'clamp-and-print' (the policy token the CONFIG value is compared against — structural; the value lives in CONFIG) · element ids / 'px' / 'span' / 'block'/'none' (DOM mechanics — structural).

## First-draft HITs — cured before this filing (not carried)
1. `segmentHandleOffsetMs` resolved to 0 sites in recreation.html and comparison.html carried its own −500 / 10000 literals → CURED: comparison.html now reads segmentHandleOffsetMs + coreMs from the recreation CONFIG at sync time; no fallback literals remain.
2. Line row tops (0.30 / 0.56) and line-height 1.25 stood as code/CSS literals (subject-shaping geometry per A9.6) → CURED as CONFIG keys lineTopPctOfStage + lineHeight, applied in layout.

HITs (final build): 0
