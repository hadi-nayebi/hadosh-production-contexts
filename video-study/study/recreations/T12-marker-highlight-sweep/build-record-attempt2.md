# T12 — Marker Highlight Sweep (+ RECEIPT stamp) · BUILD RECORD — ATTEMPT 2

Technique: T12 · Packet P1 "Look What I Can Do" (@aditazzz.music) @ 1:05–1:14 · Practice job, Cycle 002 Wave 1
Artifact dir: `hidden_files/study/recreations/T12-marker-highlight-sweep/`
This record carries construction facts and diagnostic observations only.

## §1 — Construction (as built)

- **Preservation:** the prior `recreation.html` was copied create-once to `recreation-attempt-1.html` before any write; its sha256 matches the seat's preservation baseline (`11124fd8…235da`). Prior lens returns and `segment.mp4` were not touched.
- **DOM card, config-first:** all content, timing, palette, and layout values are read from one CONFIG object. Newly promoted to CONFIG in this build: stamp settle window (`stampSettleMs` 150), shake window (`stampShakeMs` 240), shake oscillation divisor (`shakeDivisorMs` 22), avatar color + text color, badge color + text color + glyph, heart color, close/views/share glyphs, `shareLabel` "Share", and stamp-zone height (`stampZoneHeightPx` 52). All numeric CONFIG values are clamped/validated at load against named ranges (`NUM_RANGES`); a non-numeric value restores its default and records a warning; invalid `lines` falls back to a single placeholder line; empty highlight strings are dropped before matching.
- **Normalized cross-node matching:** phrase matching runs over a normalized full-text stream built from all card lines (whitespace collapsed, line joins treated as spaces) with a per-character map back to (line, offset) source ranges. A phrase crossing source lines/nodes therefore matches as one highlight. Matching is occurrence-aware and cursor-ordered: each search resumes after the previous placement, so repeated phrases consume successive occurrences. A phrase that is not found is recorded in `segmentation.missing`, consumes **no** timeline slot (the timeline is computed over placed highlights only), and raises a visible warning element on the stage plus a console warning.
- **Per-visual-line fill segments:** each placed highlight is wrapped per source line; after layout settles, a Range over each highlight's text node is measured with `getClientRects()`, producing one fill segment per visual line, sorted in reading order (top, then left), positioned in a fill layer inside the card. A phrase's sweep progress is divided across its segments in reading order, proportional to segment width (`segmentLocalProgress`, a pure function). Segments are recomputed on resize and on `document.fonts.ready`.
- **Reserved stamp zone:** the stamp lives inside an in-flow zone element (`stampZoneHeightPx` tall) placed between the body lines and the footer in the card's normal layout. Construction order is: layout → zone allocation (in flow) → fill measurement → fit scaling → final geometry measurement. At its settled scale the stamp is sized to sit inside that zone. Overlap/geometric state is reported by `window.RECREATION_GEOMETRY()` (stamp rect vs every body-line rect and fill rect, header/footer/card containment against the stage, effective body text size after scaling).
- **Fit:** after layout and zone allocation, the card is scaled by `min(1, (stageW−8)/cardW, (stageH−8)/cardH)` measured from unscaled layout size, with transform origin at the card centre; the same measured scale is applied inside the render transform so fill geometry, stamp, and text scale together.
- **Shake timing:** the card shake is a function of time since stamp **contact** (`stampAt + stampPressMs`): it is exactly 0 before contact, oscillates with decaying amplitude across `stampShakeMs` after contact, and is 0 after the window. The stamp settle dip likewise runs from contact across `stampSettleMs`.

## §2 — Source checkpoint table (timing evidence)

Technique window: 9 s (1:05–1:14). Frame evidence: `ev/t68.jpg` at t=1:08 (3.0 s into the window).

| Checkpoint | Evidence | Value used | Uncertainty |
|---|---|---|---|
| Card present / settling | window head, digest + frame sequence | card enter 450 ms; first sweep at 700 ms | sub-beat timing not frame-resolved |
| Sweeps, reading order | frame at 3.0 s shows the phrase filled solid | sweeps complete before the stamp | individual per-phrase durations NOT established by the evidence |
| Equal per-phrase duration | no frame evidence distinguishes timing models | kept as a named **hypothesis**: one `sweepMs` per placed phrase | unresolved — recorded as hypothesis, not as established fact |
| Stamp pressed | frame at 3.0 s into the window shows the stamp already pressed | all action (sweeps + press + settle + shake) completes at 3010 ms in this build's computed timeline | the frame gives an upper bound (≤3.0 s), not an exact press instant |
| Verdict hold | stamped card holds for the remainder of the window | `endHoldMs` 6000; computed total cycle 8770 ms | hold length is approximate (window remainder) |

Computed timeline (default CONFIG, hand-verified in the logic test): starts [700] · stampAt 2580 · contact 2770 · actionEnd 3010 · total 8770 ms.

## §3 — Cure-to-evidence matrix

| Cure (construction) | Intended effect | Isolated diagnostic check | Observed result | Evidence pointer | Known interactions / confounds |
|---|---|---|---|---|---|
| Per-visual-line fill segments (Range rects per line) | a wrapping phrase sweeps line by line in reading order | logic test: `segmentLocalProgress` division across two segments (0.3 → seg A 0.5, seg B 0; 0.8 → seg B 0.5); in-page `fillSegmentsPerHi` count from `RECREATION_GEOMETRY()` | logic division exact; in-page segment count is PIXEL-UNVERIFIED this session (see §4) | node test output §4; recreation source `layoutFills()` | segment count depends on real layout/fonts; the node harness cannot produce visual line rects |
| Normalized cross-node matching | a phrase crossing source lines matches as one highlight | logic case: lines ["Alpha beta","gamma delta"], phrase "beta gamma" | placed once, segments span line 0 and line 1 | node test §4 | normalization collapses whitespace; case is preserved |
| Occurrence-aware, cursor-ordered targeting | repeated phrases take successive occurrences | logic case: "ha ha ha" with ["ha","ha"] | two placements at offsets 0 and 3 | node test §4 | phrases that overlap a prior placement cannot match inside it (cursor has passed) |
| Missing phrase handling | missing phrase consumes no slot and warns visibly | logic case: ["one","missing phrase","three"] on "one two three" | missing list = ["missing phrase"]; placed = 2; timeline starts has 2 entries, second at 2550 ms under default timing | node test §4 | warning element exists only when a phrase is missing or a config warning fires |
| Timing retune (action ≈3.0 s, hold 6000 ms, cycle ≈9 s) | action occupies roughly the first third of the cycle | hand-computed timeline from CONFIG, asserted in the logic test | starts [700], stampAt 2580, contact 2770, actionEnd 3010, total 8770 | node test §4; §2 table | equal per-phrase duration remains a hypothesis (§2) |
| Reserved stamp zone | settled stamp intersects no body line | construction: zone is in-flow between body and footer; stamp sized inside it; `RECREATION_GEOMETRY()` reports stamp-vs-body overlap booleans | by construction at settled scale; rendered measurement PIXEL-UNVERIFIED this session (§4) | recreation source; §4 | during the press transient the stamp's scale exceeds 1 (the falling mechanic itself); the overlap statement covers the settled state |
| Phone fit (layout → zone → fit → measure) | at 390 px width: zero stamp/body overlap, header + footer contained, effective body text ≥11 px after scale | `applyFit()` scale arithmetic from measured unscaled card size; `RECREATION_GEOMETRY()` reports scale, containment, effectiveBodyPx | scale arithmetic is deterministic in source; rendered values PIXEL-UNVERIFIED this session (§4) | recreation source `applyFit()` / `measureGeometry()` | if a future layout makes scale × 19 px fall under 11 px, the layout (not the criterion) must change; the geometry function prints the number either way |
| Shake at contact | shake begins when the stamp lands, then decays | logic probes of the pure state function at 2700 / 2820 / 3100 ms | shake = 0 before contact; non-zero at 2820 ms; 0 after the window | node test §4 | shake and settle run concurrently after contact (both are impact effects) |
| Config completeness + validation | settle/shake/divisor/colors/labels configurable; bad numbers cannot break the clock | logic case: sweepMs −5 → clamped to 50; markerOpacity 7 → 1; non-numeric endHoldMs → default restored with warning | all three asserted | node test §4 | URL overrides are re-validated after application |

## §4 — Own checks (run before the scoring wave)

1. **Logic-level swap + targeting test (node, stubbed DOM running the recreation's real script): 26/26 PASS.** Covers: default phrase placement and timeline arithmetic (hand-computed above); shake zero/non-zero/zero across contact; cross-node phrase; single-highlight wrapping phrase; segment-progress division; repeated occurrences; missing phrase between two valid ones (no slot); config clamping/validation; swapped phrases with changed sweep timing recomputed by hand (starts [700, 1100], stampAt 1780 under swap values).
2. **Purity grep: 0 hits** for specimen/source filenames, media extensions, and `<video>`/`<img>`/external URLs in `recreation.html`. Asset inventory: the file itself only; the stamp is type + CSS borders; the avatar is a CSS circle with a config initial; icons are text glyphs from CONFIG.
3. **Syntax: PASS** — extracted inline script passes `node --check`.
4. **Browser geometry (E4b): PIXEL-UNVERIFIED.** Headless render was attempted with `/opt/meta-chromium/chrome` on a private debugging port (9412) at 960×540, and again with `--dump-dom` at 960×540; both attempts failed at browser startup with the same evidence line: `Hatch WebGL domain policy is required for browser startup` (chrome_main_delegate.cc:1283), and no debugging endpoint came up. No pixel or rendered-geometry claim is made from this session: the geometric constructions rest on the in-flow zone construction, the deterministic fit arithmetic, the `RECREATION_GEOMETRY()` measurement surface left in the artifact for any rendered check, and the logic-level tests above.

## §5 — Comparison face

`comparison.html`: the ORIGINAL side (segment reference, labels, small print) is unchanged. The recreation-side note was updated because the CONFIG interface and default choreography changed (single-phrase sweep with per-line segments, reserved stamp zone, ≈8.8 s cycle). Shared controls and the swap test wiring are unchanged; the swap values still exercise the URL-override path.
