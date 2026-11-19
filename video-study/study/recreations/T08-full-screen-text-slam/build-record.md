# T08 — Full-Screen Text Slam · BUILD RECORD

Technique: T08 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 003 Wave 1 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T08-full-screen-text-slam/`
Consumer: transition staple for production containers (DLC / multilingual lane) — a one-phrase punctuation slam between containers; also the slam half of T22.

## §1 Observe (viewed firsthand, this run)

- TECHNIQUES.md T08: "hard cut to one phrase filling the frame in a heavy display face; the cut is the impact, no transition." Feeds: transition — P1 @ 0:42, 2:37 — ev/t42.jpg, ev/t157.jpg.
- digest.md T08 (lines 95–101): on the punchline the picture hard-cuts to a single phrase filling the frame in a heavy display face: 'TOO LATE!' in red over black (with '$ claude --dangerously-skip-permissions' and a temperature slider as set dressing), and later 'I KNEW IT!' in white. No fade, no zoom — the cut itself is the impact. Why it works: after seconds of small UI text, one enormous phrase resets scale sense; the edit IS the drum hit.
- Evidence viewed firsthand this run:
  - `ev/t42.jpg` (0:42): "TOO LATE!" in huge heavy condensed display capitals, coral-red, slightly tilted, filling the right ~60% of frame width over near-black; faint UI set dressing behind (waveform, "temperature 0.3" pill, "$ claude --dangerously-skip-permissions" line at bottom). The slam phrase itself is one line, dominant scale.
  - `ev/t157.jpg` (file at t=157 s): shows the terminal dialogue ("You are extraordinaril▊") immediately BEFORE the 2:37 slam — i.e. this frame catches the pre-cut context, not the slam itself; digest.md's T22 section names t157 as the 'I KNEW IT!' slam frame. Recorded discrepancy: the filed frame is the cut's source side; the slam's described form (white 'I KNEW IT!' filling frame) rests on the digest text. The recreation therefore defaults phrase 1 to the frame-evidenced 'TOO LATE!' and includes 'I KNEW IT!' (white) as phrase 2 per the digest.
- Source segment watched via cut (§3): source.mp4 is 1916×1078, 30 fps, 198.41 s (ffprobe). Segment window 0:41–0:47 covers the 0:42 slam and its surrounding UI context.
- Sub-beats: (a) small-UI scene plays; (b) INSTANT hard cut — phrase at full size on the very first slam frame, no scale-up, no fade-in; (c) phrase HOLDS static (the frame does not move; impact is editorial, not kinetic); (d) hard cut away / next phrase.
- Variables (§1.3): phrase text(s) · phrase count/order · per-phrase color · background color · hold duration · font weight · font family (heavy display sans) · tilt angle (specimen ≈ −4° on phrase 1; kept as config, default 0 for the clean reusable form — see Plan) · frame margin for fit.
- Guards at Observe: jev-observe-exit / codex-observe — SKIPPED-WITH-REASON per wave RUN.md: phase guards are BUILT-NOT-FIRED / not armed executables in this seat; the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `phrases` | string[] | `["TOO LATE!", "I KNEW IT!"]` | the slam phrases, in order |
| `phraseColors` | string[] | `["#ff4040", "#ffffff"]` | per-phrase foreground (red slam, white slam) |
| `holdMs` | number | `1400` | static hold per phrase before the next hard cut |
| `bg` | string | `#060606` | frame background (near-black) |
| `fg` | string | `#ff4040` | fallback foreground when `phraseColors` lacks an entry |
| `fontWeight` | number | `900` | heavy display weight |
| `fontFamily` | string | `Arial Black, Impact, Arial, sans-serif` | heavy display face stack (system fonts only, no external assets) |
| `maxFontPx` | number | `260` | cap on fitted size (at 960×540 stage) |
| `marginRatio` | number | `0.06` | frame margin each side for the fit (phrase never touches edges) |
| `tiltDeg` | number | `0` | phrase rotation; specimen frame shows ≈ −4° — default 0 keeps the reusable form clean; set −4 to match the specimen exactly |

URL overrides (swap test + reuse): `?phrases=A|B&holdMs=900&bg=%23000000&fg=%23ffd75e&fontWeight=800&tiltDeg=-4` — parsed at load, config object remains the single source.

### Construction choice

**DOM hard-cut (chosen):** one stage div + one phrase element. A timer swaps `textContent` + color INSTANTLY at each hold boundary — no CSS transition, no animation, no opacity/scale keyframes anywhere in the file. Appearance IS the cut. Fit is measured, not guessed: canvas `measureText` at a reference size, then font-size scaled so the rendered line occupies ≤ (1 − 2·marginRatio) of stage width AND ≤ 62% of stage height, capped at `maxFontPx`; re-fit on resize and on every phrase change.

Rejected alternatives:
- CSS keyframe pop / scale-in — REJECTED: any entrance motion contradicts the mechanic ("no transition; the cut is the impact").
- Fade or cross-dissolve between phrases — REJECTED explicitly: a fade is a transition; the specimen has none.
- Canvas particle/text rendering (T15 machinery) — REJECTED: heavy machinery for a static hold; purity risk and no motion to model.
- SVG text with `textLength` force-fit — REJECTED: distorts letterforms to fit instead of sizing honestly; DOM + measured fit keeps glyphs true.
- Video/frame-sequence of the specimen — REJECTED: refusal-class (§6.1); original appears only as the labeled comparison side.

### Execute checklist
- [ ] Segment cut 0:41–0:47 → `segment.mp4` (scale 960 wide, libx264, no audio), ffprobe-verified.
- [ ] `recreation.html`: self-contained, CONFIG at top, hard-cut phrase sequence, measured shrink-to-fit, loops, URL overrides, zero external references, zero transition/animation CSS.
- [ ] `comparison.html`: ORIGINAL + RECREATION labeled exactly, shared play/pause/restart controls, phone stacking (flex-wrap, min panel width, ≥48px buttons).

### Verify checklist
- [ ] Purity grep on recreation.html: `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(` → 0 hits.
- [ ] No-motion grep: `transition|animation|@keyframes|opacity` used for phrase entrances → phrase swap must be instant (checked in source + logic test asserts swap changes text with no intermediate state).
- [ ] Node logic swap test: extract CONFIG + fit function; run with different phrase words, changed holdMs, changed palette; assert (a) sequence order/timing derive from config, (b) a long phrase (e.g. 34 chars) fits: fitted size × measured width ≤ stage width × (1−2·margin).
- [ ] Comparison check: labels verbatim, both sides present, controls wired to video + iframe postMessage.
- [ ] Five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Failure points (priced)
- **Text fitting (primary):** a long swapped phrase at the specimen's display size would overflow the frame — cured BY CONSTRUCTION via measured shrink-to-fit with hard margin (never a hand-picked size); the swap test includes a 34-char phrase as the stress case.
- **Temptation to animate:** any scale/opacity entrance reads as polish but falsifies the technique — the no-motion grep + motion lens own this.
- **Phrase overlap:** DOM single-element construction makes overlap impossible (one text node at a time; phase exclusivity by construction, cf. Owner Cure 2's sequencing law).
- **Tilt fidelity:** specimen phrase is slightly tilted with UI set dressing behind it; the recreation isolates the SLAM mechanic (phrase + ground), not the set dressing — a deliberate scope line (§8: technique, not scene); tilt is config-available.
- **Render-proof limitation:** no Chrome binary in this seat (T15 precedent) — verification is logic-level (node) + source census; the comparison page is the render surface.
- Guards SKIPPED-WITH-REASON (per wave RUN.md): jev-observe-exit, jev-plan-exit, jev-prewave, codex-observe, codex-plan-review — all BUILT-NOT-FIRED/UNBUILT in this seat, no armed runner; the five-lens scoring wave IS the deliverable gate and fires in §5.

## §3 Execute — record
- Segment: `ffmpeg -ss 41 -i source.mp4 -t 6 -vf scale=960:-2 -c:v libx264 -an segment.mp4` → ffprobe: h264, 960×540, 30 fps, duration 6.000 s, 877,228 bytes. Window 0:41–0:47 covers the 0:42 slam.
- `recreation.html` (4,061 bytes at first build): CONFIG at top; DOM single phrase element; timer swaps textContent + color instantly per holdMs; measured canvas-measure shrink-to-fit (width bound = stage × (1−2·marginRatio), height bound 62% of stage, specimen cap stage-scaled); loops; URL overrides; postMessage play/pause/restart for comparison sync.
- `comparison.html` (3,822 bytes): labels "ORIGINAL — P1 @ 0:42" / "RECREATION — T08, parameterized"; shared Play/Pause/Restart/Swap controls driving video + iframe; flex-wrap panels min 300px (phone stacking); buttons min-height 48px.
- Execute fix (same round): first swap-test run exposed that a URL `fg` override was masked by default `phraseColors` — palette swap would not visibly take. Cured in `applyOverrides`: an explicit `fg` override with no `colors` override clears `phraseColors` so the swapped foreground governs every phrase. Re-test ALL PASS (below).

## §5 Self-verify (own checks, before Codex)
- **Purity grep:** `segment\.mp4|source\.mp4|<video|<img|http://|https://|url\(` on recreation.html → **0 hits**. Asset inventory: recreation.html loads NOTHING external — system font stack only; all content is code + CONFIG text.
- **No-motion grep:** `transition|animation|@keyframes|requestAnimationFrame` on recreation.html → **0 hits**. Phrase change is a single textContent assignment (instant by construction).
- **Node logic swap test** (stubbed DOM/canvas measure, real script extracted from recreation.html; syntax PASS): 16/16 PASS after the fg cure —
  defaults: phrase 1 "TOO LATE!" instant, color #ff4040, timer = holdMs 1400, fitted 159 px (stub metrics), measured width 844.3 ≤ 844.8 bound; hard cut to "I KNEW IT!" #ffffff.
  swap (`?phrases=THIS IS A MUCH LONGER SLAM PHRASE|SWAPPED!&holdMs=900&fg=%23ffd75e&bg=%23000000`): long phrase instant, timer 900, bg #000000, **long phrase FIT: fitted 44 px, measured width 829.0 ≤ 844.8** (shrunk from 159, never overflows), phrase 2 "SWAPPED!" instant in gold #ffd75e.
- **Comparison check:** labels verbatim per charge; controls wired to both sides in one click; recreation cycle = 2 phrases × 1400 ms inside the segment's 6 s loop.
- Pixel/render proof: NOT exercisable from this seat (no Chrome binary; T15 precedent) — logic-level proof stands; comparison.html is the render surface. Printed limitation.
- jev-prewave: SKIPPED-WITH-REASON per wave RUN.md (UNBUILT in this seat; five-lens wave is the gate).
- **Post-wave BODY-WRITE addendum (Codex reusability + readability returns, 2026-11-14):** the fit claim in §2/§5 is BOUNDED — proven for the specimen defaults and the 34-char swap case; canvas measurement excludes CSS letter-spacing, and the 16 px floor can override the computed fit at extreme lengths, so "never overflows" does not stand as an unconditional claim. Full priced gap in scores.md.
