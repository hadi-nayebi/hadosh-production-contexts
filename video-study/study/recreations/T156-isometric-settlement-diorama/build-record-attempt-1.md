# build-record — T156 Isometric settlement diorama · Cycle 025 Wave 22 · attempt 1
Artifact: hidden_files/study/recreations/T156-isometric-settlement-diorama/
Technique: Packet #8 T12 — Isometric settlement diorama. Window: 330.00–355.00 s (segment cut 329.5–355.5 with ±0.5 s handles; segment.mp4 26.000 s expected, h264/aac re-encoded, ffprobe-verified — see raw output below). Schedule basis: two-act (Act 1 segment-anchored fill, Act 2 allocation-model rise) — Act 1: camp clearing at ~2 s / settled village at ~5 s per seat census, fill onsets 0–13200 ms; Act 2: rocket rise 15000–20000 ms allocated (packet names the rise after the fill; exact onset not census-resolved), hold 20000–25000.
Mechanics implemented: an isometric tile (CONFIG tile originX 360 originY 36 tileW 84 tileH 42 cols 6 rows 6; grid→screen x = originX + (gx−gy)×tileW/2, y = originY + (gx+gy)×tileH/2) fills element by element from the CONFIG elements table (ENTER, enterMs 400, decelerate easeOut pow 3): trees ring the clearing, teepee + fire (camp), huts ×5, fields ×3, path, pen, sheep ×3, figures ×2. Each kind is a parameterized code-drawn SVG glyph function (glyphPath(kind, cfg), colours from CONFIG palette) — no per-element literal markup. Act 2: the rocket (CONFIG rocket padGx 4 padGy 1, riseStartMs 15000, riseMs 5000, w 16 h 34, flame #f26d3c) rises from its pad with flame + decelerating ease through the CONFIG cloud band (7 blobs per §2c; cloud layer offsetY 0→+130 across the rise, state cloudOffsetY = eased × cloudTravelPx), exits the top by 20000 ms; hold to cycleMs 25000 on the filled tile.
Construction: one self-contained HTML file; CONFIG at top; SVG construction below; ONE JS clock; window.__seek/__config/__state + module.exports state function (T154 pattern). No external assets; no captions/subtitles; no text elements in the recreation.
Count assertion (A9.3): source-count 21 (§2c table: trees 4 · teepee 1 · fire 1 · huts 5 · fields 3 · path 1 · pen 1 · sheep 3 · figures 2 = 21) vs built-count 21 (harness counts below) — MATCH. Clouds source 7 vs built 7 — MATCH.
Fidelity plan — named deferral: the post-launch escalation (futuristic city at 340 s, Dyson-swarm stellar scene at 350 s) is NOT built — separate scenes, not the diorama mechanic (RUN §1b). The fidelity claim is the fill + the rise only.
Asset inventory: segment.mp4 (evidence only, ORIGINAL side of comparison.html) · recreation.html (all code-generated) · comparison.html · codex/ returns.
Own checks (raw harness output below, A9.4):
- Swap test (EXACT §2c/§2b): elements replaced by 10-element table (tree ×2 · hut ×3 · field ×2 · path · pen · sheep ×1, onsets stepped 900) + hut palette #4a90d9→#d94a90 via node harness over stateAt/glyphPath with swapped CONFIG — no exception, elementCount 10, hutWall #d94a90 in state, hut glyph contains #d94a90: swapPass true.
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9|gdsf2h9) over recreation.html: 0 hits.
- Syntax: node --check on extracted inline script: SYNTAX_OK.
- Comparison: shared control drives both; recreation slaved via __seek with handle mapping recreationMs = videoMs − 500; labels "ORIGINAL — Kurzgesagt aliens essay @ 5:30–5:55" / "RECREATION — T156 Isometric settlement diorama, parameterized"; phone stacking via max-width wrap + media query, 44px-min buttons.
- A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is LOGIC-level, comparison.html is the render surface.
recreation.html SHA-256: 031cd2269e636fc471317ce441d084d28d1e4900207b8c498c4fdecca37d697d

## Raw harness output (final build, verbatim, condensed state0 element array elided in print only — counts/probes verbatim)
```
counts: {"elements": 21, "clouds": 7} assertCounts: true
visibleAt5000: 8 visibleAt14000: 21
rocketAt17500: {"riseP": 0.5, "eased": 0.875, "padX": 486, "padY": 141, "x": 486, "y": -121.5, "visible": true, "exited": false, "flame": true}
rocketAt20000: {"riseP": 1, "eased": 1, "padX": 486, "padY": 141, "x": 486, "y": -159, "visible": true, "exited": true, "flame": false}
cloudAt17500: 113.75 holding20000: true
swap: {"error": null, "elementCount": 10, "visibleAt5000": 6, "hutWall": "#d94a90", "glyphHut": true} swapPass: true
SYNTAX_OK ; purity grep count: 0
```
Segment ffprobe (raw): codec_name=h264 width=1920 height=1080 · codec_name=aac · duration=26.000000 — segment.mp4 26.000 s, cut 329.5–355.5, MATCHES the expected 26.000 s.
Determinism census (guards command 3 second leg): grep Math.random|Date.now over recreation.html = 0 hits (grep exit 1); no RNG is used at all — glyphs are deterministic functions of CONFIG, schedule is a pure function of CONFIG + ms (stateAt), seeking is deterministic.
jev-prewave interim1: HOLD (ASSERTED-CHECKS, own-checks 0.35) — charges: (1) segment ffprobe claimed but not yet recorded (encode was still running at firing) — CURED above with the raw ffprobe output; (2) determinism census missing — CURED above. Re-fired as the final jev-prewave.md; interim preserved as jev-prewave-interim1.md.
