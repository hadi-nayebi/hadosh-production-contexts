# build-record — T162 Galaxy race table · Cycle 025 Wave 22 · attempt 1
Artifact: hidden_files/study/recreations/T162-galaxy-race-table/
Technique: Packet #8 P8 T18 — Galaxy race table. Window: 518.00–530.00 s (segment cut 517.5–530.5 with ±0.5 s handles; segment.mp4 13.000 s, h264/aac 1920×1080 re-encoded from the AV1 source, ffprobe-verified). Schedule basis: t=0 allocation (named, RUN §1b/§2b): census binds 1 marker at ~2 s into the window and the crowded state by ~7 s; individual onsets are the §2c even-stepped allocation (0/1800/3600/5400/7200/9000/10800 ms) — the timing lens is told this basis explicitly in its payload.
Mechanics implemented: an elliptical galaxy disc table (plate + spiral arms computed from CONFIG disc coefficients — armCount/armTurns/armCoeff — bright core with halo, seeded speck field of 220 specks twinkling in place at reserveIntensity 0.5, BACKGROUND reserve per Owner Cure 1) with a mirrored low-opacity reflection below the disc (gapPx 10, depth 44, opacity 0.18); SEVEN civilisation pin markers (pin h 40, headR 13, FOREGROUND full intensity) pop in sequentially at their CONFIG onsets (ENTER scale, decelerate easeOut — Owner Cure 2 serial form, never simultaneous), each head carrying a parameterized glyph drawn by glyphSpecs(icon, …) selected by the marker table's icon key (human helmet arc · eyes pair · robot antenna box · ring · dome · spikes · orb — glyph proportions are fractions of CONFIG headR, never per-marker literal markup); the first marker's speech bubble (text "Hello? Anyone?", CONFIG-carried subject text) fades in at showMs 500, holds at full opacity, and fades out from hideMs 9000; end hold 10800–12000 on the full crowded table.
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (disc geometry/coefficients/palette, speck field, pin, marker table, bubble, reflection, cycle); SVG/DOM construction below (plate, arm paths, specks, core, pins+glyphs, bubble, reflection all computed FROM CONFIG); ONE JS clock (requestAnimationFrame against elapsed time); window.__seek(ms) + window.__config + window.__state(ms) exposed for the comparison page and harness; module.exports carries the same state function (T154 pattern). No external assets; no specimen media anywhere in the build.
Count assertion (A9.3): RUN §2c T162 table carries 7 markers. Built CONFIG: 7 markers (harness counts below). ASSERTION: source-count 7 vs built-count 7 — MATCH.
Fidelity plan — deferred/named: the specimen's icon figures are hand-drawn characters; the recreation's are parameterized glyph functions per icon kind (helmet arc, eyes, robot, ring, dome, spikes, orb) — the arrival/table mechanic is fully built, character illustration is the named simplification. The window's tail (529 s planet-surface reaction scene) is outside the table mechanic and is NOT built (RUN §1b named deferral). No other mechanic is deferred. Predicted stuck lens (RUN §2): REUSABILITY (icon glyph variety tempts per-marker literal code) — construction requirement met by the glyphSpecs dispatch; family baselines T151 a1 PASS 90.4 · T154 a1 PASS 86.0.
Asset inventory (A-VERIFY): segment.mp4 (evidence only, appears solely as the labeled ORIGINAL side of comparison.html) · recreation.html — all assets code-generated: inline SVG disc/arms/specks/pins/glyphs/bubble/reflection computed in JS from CONFIG; NO external files, NO generated imagery files, NO specimen media · comparison.html (control page) · codex/ returns. Every asset the recreation loads: none — it is a single self-contained file.
Own checks (recorded, §5 legs 1–3 — raw harness output from the first draft, A9.4, verbatim below; one pre-wave cure applied and re-verified before the wave: a `#ffffff` dome-glyph accent literal in glyphSpecs was moved into CONFIG pin.glyphAccent, after which purity/census/harness were re-run on the final build — the outputs below are the FINAL build's):
- Swap test (logic level, node harness over stateAt/markerState/bubbleState with the build's own inline script): EXACT per RUN §2/§2b — markers replaced by 4 entries (human · robot · dome · orb, onsets 0/2500/5000/7500, positions/colours carried from the named entries) · bubble text → "Anyone else?" · disc core colour #ffd75e→#57c7e8: PASS = no exception + swapped marker count 4 + bubble text in effect at probe times (at 1000 ms: visibleCount 1, bubble text "Anyone else?", bubble visible; at 8000 ms: visibleCount 4; state coreColour #57c7e8): swapPass true.
- Serial arrivals (Owner Cure 2): visibleCount 1 at 0–1799 ms, 2 at 1800, 4 at 7000 (the census crowded-by-~7 s shape under the allocation), 6 at 10799, 7 at 10800; last marker scale 1.0 by 11500; holding true at 11500: serial true.
- Bubble: visible at 1000 ms with opacity 1.0, text "Hello? Anyone?", attached to marker index 0 at (520, 94); not visible at 9500 ms (hideMs 9000 + fadeMs 400 elapsed).
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9|gdsf2h9) over recreation.html: 0 hits (grep exit 1, match count 0).
- Syntax: node --check on the extracted inline script: PASS (SYNTAX_OK). Determinism census: no Math.random, no Date.now in the file; all randomness is the seeded mulberry32 RNG from CONFIG specks.seed; schedule is a pure function of CONFIG.
- Comparison check: comparison.html drives segment.mp4 and the recreation iframe from one control set (play/pause/restart); recreation slaved via __seek with the handle mapping recreationMs = videoMs − 500, clamped ≥0 (timeupdate + seeked + 100 ms interval while playing); labels 'ORIGINAL — Kurzgesagt aliens essay @ 8:38–8:50' / 'RECREATION — T162 Galaxy race table, parameterized' as charged; phone-width: column stack, max-width 360 px media, 44 px-min-height buttons.
- Segment binding: segment.mp4 ffprobe duration 13.000 s (cut 517.5 + 13.0 from the archived source), h264/aac.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: e613df885593c60182f589c9800861589cd7ab8aa130d77d706256642b3a2954

## Raw harness output (final build, verbatim — census array condensed to zero-site summary; full per-key counts filed in config-census.md)
```
{
 "counts": { "markers": 7 },
 "assertCounts": true,
 "states": {
  "at0": 1, "at1000": 1, "at2000": 2, "at7000": 4, "at11000": 7, "at11500": 7,
  "bubbleAt1000": {"text": "Hello? Anyone?", "visible": true, "opacity": 1, "attachIndex": 0, "cx": 520, "cy": 94},
  "bubbleAt9500": false,
  "holding11500": true,
  "lastScale11500": 1
 },
 "serial": true,
 "glyphKinds": [
  {"icon": "human", "specs": 3}, {"icon": "eyes", "specs": 2}, {"icon": "robot", "specs": 5},
  {"icon": "ring", "specs": 2}, {"icon": "dome", "specs": 2}, {"icon": "spikes", "specs": 4}, {"icon": "orb", "specs": 2}
 ],
 "speckCount": 220,
 "fitRows": [
  {"el": "bubble \"Hello? Anyone?\"", "inkW": 110.4, "inkH": 13.9, "containerW": 125, "effectiveFontPx": 15, "margin": 14.6}
 ],
 "fitHits": 0,
 "swapFit": {"inkW": 95.4, "containerW": 125, "fits": true},
 "swap": {
  "error": null, "markerCount": 4, "visibleAt1000": 1, "bubbleTextAt1000": "Anyone else?",
  "bubbleVisibleAt1000": true, "visibleAt8000": 4, "visibleAt11000": 4,
  "coreColour": "#57c7e8", "stateCoreColour": "#57c7e8"
 },
 "swapPass": true,
 "censusZeroSite": [],
 "hexOutsideCONFIG": []
}
```
