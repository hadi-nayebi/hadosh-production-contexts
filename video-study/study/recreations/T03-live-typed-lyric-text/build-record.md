# T03 — Live-typed lyric text · build record · Cycle 003 Wave 1 · attempt 1 · 2026-11-14

Job: recreation (INSTRUCTION.md §1–§6 + Amendments). Wave RUN: runs/2026-11-14-cycle-003-wave-1/RUN.md.
Item: T03, Packet P1 @ 0:21–0:35, evidence frame ev/t23.jpg (viewed firsthand).

## §1 Observe
- Catalogue (TECHNIQUES.md T03): "sung text types in time with the vocal as depicted content (the song being written), never a caption plate." Feeds: word animation.
- Evidence frame t23.jpg (firsthand): near-black studio backdrop; bottom-left a single monospace lyric line in pale text prefixed by a green ">" prompt glyph, ending in a solid block cursor mid-typing: "> I made a song, I made a beat▌". DAW waveform/sequencer panels occupy the upper-right — context, NOT part of this technique; the technique is only the live-typed line.
- Mechanics: characters appear one at a time, left-to-right, at a steady cadence synced to the sung vocal; the line is depicted content (the song being written inside the scene), not an overlay caption. Completed lines persist/accumulate below/above as the next line types (window 0:21–0:35 spans multiple lyric lines).
- Sub-beats: (a) prompt glyph present before typing starts; (b) char-by-char reveal ~fast typing cadence; (c) block cursor rides the typing head and blinks during pauses; (d) line completes, brief hold; (e) next line begins beneath, prior lines remain visible (accumulation); (f) final line holds with blinking cursor to segment end.
- Variable list: lines[] (text content, count, order), charMs (per-char interval), linePauseMs (hold between lines), startDelayMs, prompt glyph, text color, accent/prompt color, background color, cursor color, font family/size, line height, max visible lines.
- Consumer: DLC / multilingual word animation — the lawful form for sung/repeated text in language shorts (words as depicted content in any language, swapped purely via config).

## §2 Plan
### Parameter table (all = CONFIG keys in recreation.html; specimen values are defaults)
| Key | Default | Swap-test override |
|---|---|---|
| lines | ["I made a song, I made a beat","I wrote the words, I feel the heat","I made a song, I made a beat"] | ?line= (replaces first line) |
| charMs | 65 | ?charMs= |
| linePauseMs | 700 | — |
| startDelayMs | 400 | — |
| prompt | ">" | — |
| bg | #060807 | — |
| ink | #e8ece7 | — |
| accent | #7ac74f | ?accent= |
| cursorColor | #9aa79b | — |
| fontFamily | ui-monospace, "SF Mono", Menlo, Consolas, monospace | — |
| fontSizePx | 30 | — |

### Construction choice
DOM typing (chosen): lines are DOM text nodes appended char-by-char on a config-driven timer; cursor is a DOM span. Fits monospace lyric typing exactly, trivially parameterized, phone-readable.
Rejected: Canvas particle/raster typing — wrong family, no benefit for crisp text; CSS keyframes steps() per line — line count/content not parameterizable without regenerating keyframes; SVG draw-on — letterform path tracing, purity risk and not how typed text behaves; video/frame sequence — refusal-class (§6.1).

### Execute checklist
- [ ] Cut segment.mp4 (-ss 20.5, 15 s, scale 960, no audio) + ffprobe verify
- [ ] recreation.html: single file, CONFIG at top, DOM typing, accumulation, blinking cursor, URL overrides ?line= ?charMs= ?accent=, no external assets
- [ ] comparison.html: segment video + recreation iframe, shared play/pause/restart, labels, phone stacking
- [ ] Self-verify (§5 legs 1–3) recorded below before Codex

### Verify checklist
- Swap test: altered words + charMs + accent via URL params, logic-level in node (no Chrome binary — T15 precedent, render-proof limitation); exact values recorded
- Purity grep: `segment.mp4|source.mp4|<video|<img>|.jpg|.png` in recreation.html must = 0; asset inventory = code only
- Comparison check: labels, shared controls, stacking CSS present (source-level check)
- Five-lens Codex wave: motion · timing · purity · reusability · readability; bar avg ≥85 AND min ≥70

### Failure points (priced)
- Fitting limits: long swapped lines could overflow phone width — mitigated by wrap + responsive font size (clamp via vw in CSS fallback).
- Phrase overlap: typing next line before prior completes would break accumulation clarity — sequencer is strictly serial (Amendment A5 Cure 2 spirit: one lifecycle at a time).
- Render-proof limitation: no Chrome binary in this seat; verification is logic-level (node) + source inspection, as T15 precedent.
- Plateau: first attempt, no prior average; stuck-lens hypothesis pre-stated: timing (typing cadence vs sung vocal is judged from code, not synced audio) is the likeliest low lens.

### Guards
SKIPPED-WITH-REASON (as printed in wave RUN.md): jev-observe-exit / jev-plan-exit / jev-prewave / codex-observe / codex-plan-review — all BUILT-NOT-FIRED / UNBUILT per guards.md; these Jev/Codex phase guards are not armed executables in this seat (no browser/Codex phase-guard runner stands); the five-lens scoring wave IS the armed deliverable gate and fires per item.

## §3 Execute record
(filled below as steps land)

## §5 Self-verify record
(filled below before Codex)

## §3 Execute record (filled)
- segment.mp4: ffmpeg -ss 20.5 -t 15 scale=960:-2 libx264 -an → ffprobe: duration=15.000000, size=1195305 bytes. ✓
- recreation.html: single self-contained file, CONFIG at top, DOM typing, lines accumulate, blinking block cursor, URL overrides ?line= ?charMs= ?accent=. No external assets. Asset inventory: code only (HTML/CSS/JS in one file).
- comparison.html: segment video + recreation iframe side-by-side, labels "ORIGINAL — P1 @ 0:21–0:35" / "RECREATION — T03, parameterized", shared Play/Pause/Restart (postMessage + iframe reload), stacks vertically ≤700px.

## §5 Self-verify record (filled, before Codex)
- Purity grep: `segment.mp4|source.mp4|<video|<img>|.jpg|.png` in recreation.html → count 0. ✓
- Syntax: extracted script passes `node --check`. ✓
- Swap test (logic-level, node, T15 precedent — no Chrome binary): altered words lines=["Bonjour le monde entier","Hola mundo bonito"], charMs 65→30, linePauseMs 700→250, accent #7ac74f→#ff2fb3. Result: both lines type fully char-by-char, event times monotonic, totalMs=2160 exactly equals hand-computed 400 + (24 steps×30+250) + (18 steps×30+250). SWAP TEST: PASS. (First run printed FAIL only because the operator's hand-count of the test string was 24 chars vs actual 23; code total was correct in both runs — re-run with corrected expectation: PASS.)
- Comparison check (source-level): labels correct, one shared control set drives both sides, phone stacking media query present. ✓
