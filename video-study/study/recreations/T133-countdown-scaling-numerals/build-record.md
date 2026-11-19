# build-record — T133 Countdown pre-announcement with scaling numerals · Cycle 022 Wave 19 · attempt 1
Artifact: hidden_files/study/recreations/T133-countdown-scaling-numerals/
Technique: Packet #7 P7 T02 — Countdown pre-announcement with scaling numerals. Window: 0.00–14.00 s (segment 14.000 s). Schedule basis: segment-anchored (numerals at 400/1200/2000 ms, dwells 800/800/1000 ms; first word 'Limits.' at 3000 ms, dwell 1160 ms; stream continues to cycle end).
Mechanics implemented: Three red numerals, each growing in scale across its dwell (scaleFrom 0.55 → scaleTo 1.30, linear), with a census-derived per-numeral taper [1.0, 0.72, 0.45] (seat census: '3' largest sampled state, '1' smallest at comparable phase — sampling uncertainty printed in RUN §1c). Hard cuts between numerals; the numeral anchor and the word anchor are the same centre point; after the countdown the word stream runs (46 further timeline entries).
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (content, schedule, palette, typography, plate geometry); one JS clock (requestAnimationFrame against a shared start + seek offset); single-slot phase machine — exactly one token visible at any instant (Owner Cure 2 serial form); landscape plate drawn from CONFIG plate.* geometry (far/near ridge point arrays, sun, ground band) and panned at plate.panPxPerSec. No external assets; no specimen media anywhere in the build.
Fidelity plan — deferred/named: Scale states in the specimen were detector-sampled at three states for '3'; the build interpolates continuously (linear, CONFIG scaleEasing with a 'smooth' alternative wired) — stepped-vs-continuous is a named uncertainty the motion lens prices.
Own checks (recorded, §5 legs 1–3):
- Swap test (logic level, node harness over buildTimeline with stubbed DOM): numerals→[5,4,3] · onsets→[400,1400,2400] · dwells→[1000,1000,1000] · firstWord→{Ready., 3400, 1160}: PASS (timeline shows 5/4/3 then Ready. at 3400) · palette leg: numeralColor→#2a6ad4 in CONFIG
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|iO7BmPoL6a4|onset-[0-9]+\.jpg) over recreation.html: 0 hits. Asset inventory: code only (HTML/CSS/JS + inline SVG plate drawn from CONFIG data).
- Comparison check: comparison.html drives segment.mp4 and recreation.html from one control set; recreation slaved via the seek hook on timeupdate; labels ORIGINAL/RECREATION as filed; 360 px stacking via the shared prior-wave stylesheet form.
- Syntax: node --check on the extracted inline script: PASS. Determinism census: no Math.random, no Date.now in the file; schedule is a pure function of CONFIG.
- Segment binding: segment.mp4 ffprobe 14.000 s.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: 0748d3babe40dc4d248af4b0d256d5eb018797850a5adadb2bc2d40e308c7962
