# build-record — T157 Detection-UI gag · Cycle 025 Wave 22 · attempt 1
Artifact: hidden_files/study/recreations/T157-detection-ui-gag/
Technique: Packet #8 P8 T13 — Detection-UI gag. Window: 380.00–395.00 s (segment cut 379.5–395.5 with ±0.5 s handles; segment.mp4 16.000 s, h264/aac 1920×1080 re-encoded from the AV1 source, ffprobe-verified). Schedule basis: t=0 allocation (named, RUN §1b/§2b): UI onset inside the segment is not frame-resolved below ~385 s; the build's phases are allocated against the census states at segment-relative ~8500 ms (source 388 s: scope standing with region + badge) and ~14500 ms (source 394 s: banner slammed) — the timing lens is told this explicitly in its payload.
Mechanics implemented: a fake monitoring UI on a 720×405 stage, cycle 15000 ms. Grid plate + spiral galaxy scope computed from CONFIG scope {cx 360, cy 200, rx 262, ry 128, armTurns 1.6, armCoeff 0.42, armExpBase, armSteps} (two-arm spiral polyline + core); 160 seeded specks twinkling in place at reserveIntensity 0.45 (Owner Cure 1 dim reserve); signal bars panel (22,20,158×66) with 7 bars animating continuously from CONFIG baseHeights + seeded-phase sinusoidal jitter (jitterAmp 0.18); dashed region ellipse {cx 218, cy 292, rx 118, ry 50} drawing on 4500–6500 ms via stroke-dashoffset against its Ramanujan circumference; badge {x 218, y 292, r 17, glyph "!"} popping at 6800 ms (260 ms ease-out pop) then pulsing (period 900 ms, amp 0.16) at FULL foreground intensity against the dim scope (Owner Cure 1); green home marker {x 562, y 128, r 13}; banner chevron ribbon {text "Interference Detected", w 470, h 66, cy 200, colour #e91e7f, fontPx 30} slamming in at 9500 ms over 450 ms with overshoot 1.12 settle, holding to 15000; monitor bezel + side panels fading in with the banner phase (the census pull-back simplified to UI furniture). Phases are serial (Owner Cure 2): region draw completes 6500 and badge pops 6800, both complete before the banner slams at 9500.
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (scope, grid, specks, bars, region, badge, home marker, banner, bezel, palette, typography, easing); SVG/DOM construction below (grid lines, galaxy polylines, speck circles, bars, region ellipse, badge, banner ribbon computed FROM CONFIG); ONE JS clock (requestAnimationFrame against elapsed time); window.__seek(ms) + window.__config + window.__state(ms) exposed for the comparison page and harness; module.exports carries the same state function (T154 pattern). No external assets; no specimen media anywhere in the build.
Count assertion (A9.3): RUN §2/§2b/§2c T157 tables carry bars count 7 with 7 baseHeights. Built CONFIG: bars.count 7, baseHeights length 7, specks 160 (harness counts below). ASSERTION: source-count 7 vs built-count 7 — MATCH.
Fidelity plan — deferred/named: character figures (the operator and the duck at the desk in the 394 s pull-back) are OUT OF SCOPE — scene dressing, not the detection mechanic (RUN §1c/§2 scope line); the desk framing is represented only by the monitor bezel + side panels from the banner phase. The broadcast-rings beat of the motion census (386 s) is simplified to the bars panel + scope visible from t=0 (RUN §2b amendment). No mechanic is deferred: bars, scope, region draw, badge pop/pulse, home marker, banner slam + hold are all built. Expected cost: the readability lens prices banner text fit at phone width (predicted stuck lens, RUN §2; family baselines T11 a1 FAIL 80.4 · T22 a1 PASS 88.2).
Asset inventory (A-VERIFY): segment.mp4 (evidence only, appears solely as the labeled ORIGINAL side of comparison.html) · recreation.html — all assets code-generated: inline SVG computed in JS from CONFIG; NO external files, NO generated imagery files, NO specimen media · comparison.html (control page) · codex/ returns. Every asset the recreation loads: none — it is a single self-contained file.
Own checks (recorded, §5 legs 1–3 — raw harness output from the final build, A9.4, verbatim summary below; full output in the harness run):
- Swap test (logic level, node harness over stateAt with the build's own inline script): EXACT per RUN §2/§2b — banner text → "Signal Acquired" · badge position → upper-right arm coordinates (562, 128) · banner colour #e91e7f → #2b6ae0: no exception; state probe at 14500 ms shows banner.text "Signal Acquired", banner.colour "#2b6ae0", badge.x 562, badge.y 128, badge visible: swapPass true.
- Phase probes: regionP 0.25 at 5000 ms, 1.0 at 6500 ms (regionDraw true); badge scale differs between 7000 and 7600 ms (badgePulse true); bars differ between 0 and 1000 ms (barsMove true); scopeStanding true at 8500 ms; banner visible with progress 1 at 14500 ms.
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9|gdsf2h9) over recreation.html: 0 hits (grep exit 1, match count 0).
- Syntax: node --check on the extracted inline script: PASS (SYNTAX_OK). Determinism census: no Math.random, no Date.now in the file; all randomness is the seeded mulberry32 RNG from CONFIG specks.seed; schedule is a pure function of CONFIG.
- Comparison check: comparison.html drives segment.mp4 and the recreation iframe from one control set (play/pause/restart); recreation slaved via __seek with the handle mapping recreationMs = videoMs − 500, clamped ≥0 (timeupdate + seeked + 100 ms interval while playing); labels 'ORIGINAL — Kurzgesagt aliens essay @ 6:20–6:35' / 'RECREATION — T157 Detection-UI gag, parameterized' as charged; phone-width: column stack, max-width 360 px media, 44 px-min-height buttons.
- Segment binding: segment.mp4 ffprobe duration 16.000 s (cut 379.5 + 16.0 from the archived source), h264/aac 1920×1080.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: 0cea8be577e6a3db76c92cfdf78ae6a8aa5be49188990e8d8b5d5f3c148cf1f8

## Raw harness output (final build, verbatim — key excerpts)
```
{
 "counts": {"bars": 7, "baseHeights": 7, "specks": 160},
 "assertCounts": true,
 "barsMove": true,
 "regionDraw": true,
 "badgePulse": true,
 "scopeStanding8500": true,
 "banner14500": {"visible": true, "text": "Interference Detected", "colour": "#e91e7f", "progress": 1},
 "fit": {"text": "Interference Detected", "fontPx": 30, "inkWDesign": 355.2, "inkHDesign": 21.6, "inkW360": 177.6, "containerWDesign": 470, "containerW360": 235, "margin360": 57.4, "effFont360": 15, "effInkH360": 10.8},
 "swap": {"error": null, "bannerText": "Signal Acquired", "bannerColour": "#2b6ae0", "badgeX": 562, "badgeY": 128, "badgeVisible": true},
 "swapPass": true,
 "swapFit": {"inkW360": 127.2, "containerW360": 235}
}
```
State probes (final build): at 0 ms bars [0.45, 0.878, 0.504, 0.683, 0.689, 1.0, 0.374], regionP 0, badge hidden, banner hidden; at 5000 ms regionP 0.25, dashOffset 412.2; at 6500 ms regionP 1, dashOffset 0; at 8500 ms badge visible scale 0.897, scopeStanding true; at 14500 ms banner visible progress 1 scale 1, badge scale 0.945, bezelP 1.
(The harness fit row is tabulated in fit-table.md; the census run's per-key site counts are filed in config-census.md — zero-site keys: [].)
