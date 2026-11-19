# build-record — T149 Isometric hard-steps path · Cycle 024 Wave 21 · attempt 1
Artifact: hidden_files/study/recreations/T149-isometric-hard-steps-path/
Technique: Packet #8 P8 T05 — Isometric hard-steps path. Window: 80.00–110.00 s (segment cut 79.5–110.5 with ±0.5 s handles; segment.mp4 31.000 s, h264/aac, ffprobe-verified). Schedule basis: two-act (act 1 segment-anchored build; act 2 labeled allocation-model return — the specimen's climber return sits at ~2:20, outside the cut segment).
Mechanics implemented: an isometric tiled path/staircase BUILDS tile by tile in a dark void across 3 flights at different heights, joined by orange drop tiles rendering a falling-particle trail to the next flight; tiles 0 and 25 are orange highlights, the rest cyan; a ringed marker disc stands on the final tile; act 2 returns the completed diagram with a code-drawn astronaut climber standing on flight-1 tile 7 (Owner Cure 2 serial form: act 1 build completes at 16600 ms before act 2 owns the stage at 19000 ms — inequality 16600 ≤ 19000 < 30000 asserted in the harness state function and printed below).
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (path.tiles route, flights[] offsets, tile size/palette, timing, marker, climber); SVG/DOM construction below; tile screen geometry computed FROM path.tiles + flights[] + tile.sizePx in tileCenter() — no literal screen coordinates for tiles anywhere in the code. ONE JS clock (requestAnimationFrame against elapsed time); window.__seek(ms) + window.__config + window.__stateAt exposed; module.exports {CONFIG, buildTiles, stateAt, countTiles} for the harness (T139 pattern). No external assets; no captions/subtitles (no text subject in this technique).
Tile count assertion (A9.3): source tile count 26 (RUN §2/§2b binding numeric set: highlightIdx [0, last=25], marker tile 25, last onset 800 + 25×620 = 16300) vs built 26 — MATCH (harness below). Printed discrepancy: RUN §2b's enumerated route lists 8+8+8 = 24 coordinates, which does not match its own binding numeric set (26 tiles, index 25, onset arithmetic 800+25×620). Disposition (T139 detailed-table precedent, inverted): the interlocking numeric set is internally consistent in four places (count, last index, marker tile, onset formula) against the enumeration's one; the build preserves ALL 24 enumerated tiles in their exact build order and extends flight 3 by two continuing tiles — (6,2), (6,3) — following flight 3's own step pattern, reaching 26 with tile 25 = (6,3) flight 3. Flagged here for the seat's Condense, not silently reproduced.
Fidelity plan — deferred/named: none beyond the priced form. The specimen's later returns (the "Before Deadline" marker at ~5:10) are NOT built — they are a third return outside both the segment window and the two-act Plan; act 2 models the first return (climber, ~2:20) as the labeled allocation act the Plan binds. The marker built is the ringed disc on tile 25 visible in the act-1 evidence frame.
Asset inventory (A-VERIFY): segment.mp4 (evidence only, appears solely as the labeled ORIGINAL side of comparison.html) · recreation.html — all assets code-generated: inline SVG tiles/trails/marker/climber generated in JS from CONFIG; NO external files, NO generated imagery files, NO specimen media · comparison.html (control page) · codex/ returns. Every asset the recreation loads: none — single self-contained file.
Own checks (recorded, §5 legs 1–3 — raw harness output verbatim below):
- Count assertion: source 26 vs built 26 — MATCH; flights [8, 8, 10]; drop tiles idx [7, 15]; highlights [0, 25]; last onset 16300; build complete 16600; act-2 inequality holds at every probed state; tile centres within stage bounds (x 250–470, y 56–370 of 720×405, extents contained — final cured build).
- Swap test (logic level, node harness over buildTiles/stateAt with the build's own inline script): route replaced by the exact RUN §2b 8-tile route (0,0)(1,0)(2,0)(2,1)(3,1)(3,2)(4,2)(4,3,drop) single flight · tileMs 620→300 · highlight #f5a623→#37d67a: path rebuilds on the new route (count assertion 8=8, last onset 2900 = 800+7×300, route geometry differs from the specimen route): PASS.
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9|gdsf2h9) over recreation.html: 0 hits (grep exit 1, match count 0).
- Syntax: node --check on the extracted inline script: PASS (SYNTAX_OK). Determinism census: no Math.random, no Date.now in the file; schedule is a pure function of CONFIG.
- Comparison check: comparison.html drives segment.mp4 and the recreation iframe from one control set (play/pause/restart); recreation slaved via __seek with the handles mapping recreationMs = videoMs − 500, clamped ≥0 (timeupdate + seeked + 100 ms interval while playing); labels 'ORIGINAL — Kurzgesagt GDSf2h9_39I @ 1:20–1:50' / 'RECREATION — T149 isometric hard-steps path, parameterized'; phone-width: column stack, max-width 360 px media, 44 px-min-height buttons.
- Segment binding: segment.mp4 ffprobe duration 31.000 s (cut 79.5 + 31.0 from the archived source), video h264 1920×1080, audio aac.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: 0188c50df67186efeb4c791ad3d430ec22851aa46bfc18bc48880a5ea4ac2b76 (final build, after the interim-wave cure round below; the interim build scored by the -interim1 returns was f7d9f6e34d3fb9884afa8a8ef48b7f537d27eb37b46aabed6434c7511b4f2f1f)

## Interim wave + cure round (interim-defect protocol)
Interim five-lens wave on the first final-form build (returns preserved as codex/lens-<lens>-interim1.md): motion 79 · timing 98 · purity 100 · reusability 66 · readability 64 — average 81.4, minimum 64, FAIL. Curable defects named and cured in the build, then re-verified and the full wave re-fired on the cured build:
- motion: drop-trail particles travelled UP-screen (flights rose by dh, so each connector's destination sat above its drop origin). Cure: dh now steps flights DOWN-screen (tileCenter adds dh × flightHeightPx; flightHeightPx 80, origin.y 56) — harness re-probe: both connectors descend (142→147 · 233→271). Also cured: stateAt markerVisible now derives from the marker tile's completion (false at 16300, true at 16600, matching the renderer), and climber visibility is gated on BOTH act2.startMs AND build completion in stateAt and in the renderer.
- reusability: subject-shaping literals moved into CONFIG — tile.strokePx · tile.enterFromScale · tile.trailOpacity · tile.dotOpacity · tile.dotPeriodMs · marker.ringRyFrac/ringTiltDeg/ringStrokePx · climber pack/body/visor/leg dimensions (packW, packGapPx, packHFrac, packRx, packLiftPx, bodyRx, headLiftPx, visorOffsetX, visorRxFrac, visorRyFrac, legW, legH, legLiftPx). Marker/climber tile indices are clamped to the built route in the renderer, so a swapped shorter route cannot break rendering (the harness swap already configured highlightIdx [0,7] + marker.tile 7 for its 8-tile route).
- readability: flights now separate into distinct descending bands (no silhouette overlap of the interim build); drop trails are drawn AFTER the tiles so they stay traceable across the diagram; marker coreR 7→4.5 with ringRyFrac 0.45→0.55 (visible ring/core gap); climber enlarged (bodyW 13→18 · bodyH 20→26 · headR 7→9).
- Re-verification on the cured build (raw): count 26=26 · swap PASS (8=8, last onset 2900) · trails descend [true, true] · containment: every tile fully in frame (centres x 250–470, y 56–370, extents checked) · SYNTAX_OK · purity grep 0.

## Raw harness output (verbatim)
```
SYNTAX_OK
{
 "countAssertion": {"source": 26, "built": 26, "match": true},
 "flights": [8, 8, 10],
 "firstTile": {"idx": 0, "c": 0, "r": 0, "f": 0, "drop": false, "highlight": true, "x": 404, "y": 176, "onsetMs": 800, "enterMs": 300},
 "lastTile": {"idx": 25, "c": 6, "r": 3, "f": 2, "drop": false, "highlight": true, "x": 316, "y": 250, "onsetMs": 16300, "enterMs": 300},
 "dropIdx": [7, 15],
 "highlightIdx": [0, 25],
 "state16600": {"ms": 16600, "tileCount": 26, "builtCount": 26, "enteringIdx": -1, "lastOnsetMs": 16300, "buildCompleteMs": 16600, "act2Active": false, "climberVisible": false, "climberTile": 7, "markerVisible": true, "inequalityHolds": true},
 "state18999": {"ms": 18999, "builtCount": 26, "act2Active": false, "climberVisible": false, "inequalityHolds": true},
 "state19000": {"ms": 19000, "builtCount": 26, "act2Active": true, "climberVisible": true, "climberTile": 7, "inequalityHolds": true},
 "state29999": {"ms": 29999, "builtCount": 26, "act2Active": true, "climberVisible": true, "inequalityHolds": true},
 "inequality": {"buildComplete": 16600, "act2Start": 19000, "cycleMs": 30000, "holds": true},
 "bounds": {"xMin": 250, "xMax": 470, "yMin": 147, "yMax": 253, "insideStage": true},
 "swap": {"count": 8, "countMatch": true, "lastOnset": 2900, "expectedLastOnset": 2900, "tileMs": 300, "highlight": "#37d67a", "firstXY": [404, 176], "lastXY": [426, 253], "routeDiffers": true, "pass": true}
}
purity grep count: 0 (grep exit 1)
segment ffprobe: duration=31.000000, codec_name=h264 1920x1080, codec_name=aac
```
(Full state probes at 0/800 ms and the per-key census are filed in config-census.md — unapplied keys: [].)
