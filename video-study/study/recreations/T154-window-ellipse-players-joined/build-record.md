# build-record — T154 Window ellipse + players-joined chart · Cycle 024 Wave 21 · attempt 1
Artifact: hidden_files/study/recreations/T154-window-ellipse-players-joined/
Technique: Packet #8 P8 T10 — Window ellipse + players-joined chart. Window: 270.00–291.00 s (segment cut 269.5–291.5 with ±0.5 s handles; segment.mp4 22.000 s, h264/aac 1920×1080 re-encoded from the AV1 source, ffprobe-verified). Schedule basis: segment-anchored (entrant onsets at RUN §2b clip/census-bound segment-relative times).
Mechanics implemented: a Time-axis ellipse (the window) starts near-empty with two census seed dots (274 s state) and a starfield; entrants join as columns rising inside the ellipse, then — only after that entrant's rise completes (per-entrant phase machine, Owner Cure 2 serial form) — their blobby territory tops swell (territory.growMs 2500; the territory centre migrates down its column by territory.centreFrac and stretches wide by territory.wideFrac as it swells) until the window reads filled — measured as grid-sampled occupancy of the ellipse interior by the ACTUAL generated territory polygons (point-in-polygon against blobVertices, the same vertices blobPath renders): 0.906 at 20000 ms (the summed-area coverage figure, 2.242, is printed in the harness output as an area proxy only and is NOT the fill evidence; the polygon occupancy check is); a game-lobby join/left feed at the frame's right-bottom edge appends generated lines ("Player N joined/left" — text generated in code from feedEvents kind + player number, never literal line strings in logic), capped at feed.maxLines 6 with older lines dimming by feed.dimStep 0.12; end hold from endHoldFromMs 19000 to cycleMs 21000. Bunching is the chart's shape: almost nobody early (2 seed dots + first entrant at 1200 ms), the crowd arriving together (entrants at 3400–11800 ms, feed through Player 9).
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (window geometry, axis, seeds, entrant table, feed-event table, territory growth, palette, typography); SVG/DOM construction below (ellipse + axis + seeds + columns + blob territory paths computed FROM CONFIG, feed as DOM lines); ONE JS clock (requestAnimationFrame against elapsed time); window.__seek(ms) + window.__config + window.__state(ms) exposed for the comparison page and harness; module.exports carries the same state function (T139 pattern). No external assets; no specimen media anywhere in the build.
Count assertion (A9.3): RUN §2b T154 tables carry 6 entrants + 11 feed events. Built CONFIG: 6 entrants, 11 feed events (harness counts below). ASSERTION: enumerated-source 6/11 vs built 6/11 — MATCH.
Catalogue-fidelity note (RUN §1b): ev/272-window-before.jpg does NOT show the empty ellipse (it shows a planet-system field); the empty state binds via the packet's build clip clips/274-window-bars-build.mp4 + the seat census at 274 s — the build's seed state (2 dots, blue + magenta, low inside the ellipse, feed live) is taken from that census, as charged.
Fidelity plan — deferred/named: the specimen's territories are hand-drawn organic shapes; the recreation's are parameterized blobby discs whose radii derive from topR + per-entrant CONFIG seed (blobPoints/blobWobble in CONFIG). No mechanic is deferred: rise, swell, feed, bunching, and the filled end state are all built. Expected cost: the motion lens prices the territory-shape gap (it is the predicted stuck lens, RUN §2 plateau pricing; family baseline T82 a1 PASS 87.2).
Asset inventory (A-VERIFY): segment.mp4 (evidence only, appears solely as the labeled ORIGINAL side of comparison.html) · recreation.html — all assets code-generated: inline SVG ellipse/axis/seeds/columns/territory paths computed in JS from CONFIG, DOM feed lines generated from CONFIG feedEvents; NO external files, NO generated imagery files, NO specimen media · comparison.html (control page) · codex/ returns. Every asset the recreation loads: none — it is a single self-contained file.
Own checks (recorded, §5 legs 1–3 — raw harness output from the first draft, A9.4, verbatim below):
- Swap test (logic level, node harness over stateAt/entrantState/feedState with the build's own inline script): EXACT per RUN §2b — entrants replaced by 3 {labels "Civ A"/"Civ B"/"Civ C", joinMs 1500/4500/7500, colours #ffffff/#57d977/#e0339b} with feed events regenerated from the swapped table · territory.growMs 2500→1200 · ellipse stroke #2a7fd4→#d42a7f: swapped chart still fills (grid-sampled polygon occupancy 0.940 at 20000 ms), feed at 8000 ms shows exactly the 3 regenerated lines ending "Player 3 joined", per-entrant phases stay serial (Civ B rising at 5100 ms; Civ A swellP 0.5 mid-swell): swapPass true.
- Phase machine (Owner Cure 2): P1 at joinMs+1199 still rising with swellP 0; at joinMs+1200 riseP 1 and swell begins; mid-swell swellP 0.5: phaseSerial true.
- Feed: empty at 0 ms; at 17000 ms exactly maxLines 6 lines, oldest "Player 4 joined" dimmed to 0.40, newest "Player 9 joined" at 1.00: feedOk true.
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9|gdsf2h9) over recreation.html: 0 hits (grep exit 1, match count 0).
- Syntax: node --check on the extracted inline script: PASS (SYNTAX_OK). Determinism census: no Math.random, no Date.now in the file; all randomness is the seeded mulberry32 RNG from CONFIG seeds; schedule is a pure function of CONFIG.
- Comparison check: comparison.html drives segment.mp4 and the recreation iframe from one control set (play/pause/restart); recreation slaved via __seek with the handle mapping recreationMs = videoMs − 500, clamped ≥0 (timeupdate + seeked + 100 ms interval while playing); labels 'ORIGINAL — Kurzgesagt GDSf2h9_39I @ 4:30–4:51' / 'RECREATION — T154 window ellipse + players-joined, parameterized' as charged; phone-width: column stack, max-width 360 px media, 44 px-min-height buttons.
- Segment binding: segment.mp4 ffprobe duration 22.000 s (cut 269.5 + 22.0 from the archived source), h264/aac.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: 6b9cabfb00636b4fc380401e6f73148872b3e578cbd80a1d053eeb01e3ff4522

## Raw harness output (final build, verbatim)
```
{
 "counts": {
  "entrants": 6,
  "feedEvents": 11
 },
 "assertCounts": true,
 "phase": {
  "at2399": {
   "phase": "rising",
   "riseP": 0.999,
   "swellP": 0
  },
  "at2400": {
   "phase": "swelling",
   "riseP": 1,
   "swellP": 0
  },
  "midSwell": {
   "phase": "swelling",
   "swellP": 0.5
  }
 },
 "phaseSerial": true,
 "seeds": [
  {
   "x": 300,
   "y": 268,
   "color": "#2b9be0"
,
   "r": 6
  },
  {
   "x": 415,
   "y": 292,
   "color": "#e0339b",
   "r": 6
  }
 ],
 "feed": {
  "at0": [],
  "at17000": [
   "Player 4 joined:0.40",
   "Player 5 joined:0.52",
   "Player 6 joined:0.64",
   "Player 7 joined:0.76",
   "Player 8 joined:0.88",
   "Player 9 joined:1.00"
  ],
  "lastText": "Player 9 joined"
 },
 "feedOk": true,
 "coverage": {
  "at0": 0,
  "at20000": 2.242
 },
 "occupancy": {
  "at0": 0,
  "at20000": 0.906
 },
 "fills": true,
 "stateMoves": true,
 "fitRows": [
  {
   "el": "axis label \"Time\"",
   "inkW": 38.4,
   "inkH": 11.5,
   "containerW": 110
  },
  {
   "el": "entrant label \"Humans\"",
   "inkW": 56.3,
   "inkH": 11.5,
   "containerW": 150
  },
  {
   "el": "feed line (longest) \"Player 1 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 1 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 1 left\"",
   "inkW": 91.3,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 2 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 2 left\"",
   "inkW": 91.3,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 3 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 4 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 5 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 6 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 7 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 8 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  },
  {
   "el": "feed \"Player 9 joined\"",
   "inkW": 105.8,
   "inkH": 12.1,
   "containerW": 160
  }
 ],
 "fitHits": 0,
 "feedStackPx": 96,
 "feedOverflow": false,
 "swap": {
  "entrantCount": 3,
  "feedAt8000": [
   "Player 1 joined",
   "Player 2 joined",
   "Player 3 joined"
  ],
  "coverageAt20000": 2.003,
  "occupancyAt20000": 0.94,
  "stroke": "#d42a7f",
  "growMs": 1200,
  "civBphaseAt5100": "rising",
  "civAswellMid": 0.5
 },
 "swapPass": true
}
```
(The same harness run's fit rows are tabulated in fit-table.md; the census run's per-key site counts are filed in config-census.md — zero-site keys: [].)
