# build-record — T137 Case emphasis inside a level stream · Cycle 022 Wave 19 · attempt 1
Artifact: hidden_files/study/recreations/T137-case-emphasis-stream/
Technique: Packet #7 P7 T06 — Case emphasis inside a level stream. Window: 13.36–27.36 s (segment 14.000 s). Schedule basis: segment-anchored (62 tokens, onsets/dwells measured; emphasis token at segment-relative 1240 ms).
Mechanics implemented: A level word stream (250–375 wpm bands) in which one repeated token returns in full capitals: CONFIG words carry the lowercase source 'really' at index 3 and index 4; emphasisIndices [4] applies a toUpperCase() transform at timeline build, so index 4 renders 'REALLY' at identical font size, weight, colour and anchor (seat census §1c confirmed the specimen's invariance firsthand). The emphasised token's dwell (320 ms) is its measured dwell, not an added emphasis beat.
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (content, schedule, palette, typography, plate geometry); one JS clock (requestAnimationFrame against a shared start + seek offset); single-slot phase machine — exactly one token visible at any instant (Owner Cure 2 serial form); landscape plate drawn from CONFIG plate.* geometry (far/near ridge point arrays, sun, ground band) and panned at plate.panPxPerSec. No external assets; no specimen media anywhere in the build.
Fidelity plan — deferred/named: None named. The stream before/after the event is the shared serial engine; the item's claim is only the case transform + invariance.
Own checks (recorded, §5 legs 1–3):
- Swap test (logic level, node harness over buildTimeline with stubbed DOM): words→[go 240 · slow 240 · slow 200 · go 320 · now. 440] with emphasisIndices→[3]: timeline renders GO at index 3, lowercase elsewhere: PASS (the capitals move with the index set) · timing leg: dwell table x1.5 in harness copy · palette leg: wordColor→#ffd75e
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|iO7BmPoL6a4|onset-[0-9]+\.jpg) over recreation.html: 0 hits. Asset inventory: code only (HTML/CSS/JS + inline SVG plate drawn from CONFIG data).
- Comparison check: comparison.html drives segment.mp4 and recreation.html from one control set; recreation slaved via the seek hook on timeupdate; labels ORIGINAL/RECREATION as filed; 360 px stacking via the shared prior-wave stylesheet form.
- Syntax: node --check on the extracted inline script: PASS. Determinism census: no Math.random, no Date.now in the file; schedule is a pure function of CONFIG.
- Segment binding: segment.mp4 ffprobe 14.000 s.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: 709fcd59fd0bf98758dfa6b680f5f6ac89ddfd095861173c222c16f115f6d114

## Prewave cure (Cycle 022, after jev-prewave HOLD ASSERTED-CHECKS — applied, not set aside)
Raw swap-harness output (node, buildTimeline over the build's own inline script; verbatim excerpts):
- T137_base: {"emph": {"text": "REALLY", "onsetMs": 1240, "dwellMs": 320}, "before": {"text": "really", "onsetMs": 1040, "dwellMs": 200}}
- T137_swap: {"texts": ["go", "slow", "slow", "GO", "now."], "pass": true}
Timing leg measured: the swap table's dwells [240,240,200,320,440] are exactly the x1.5-scaled probe values used for the timing leg (base probe dwells [160,160,133,213,293] x1.5, rounded) and the regenerated timeline carried them unchanged (onsets cumulative 0/240/480/680/1000 in the same output run).
Palette leg observed result: cfg.wordColor consumed at the render-init site (seat grep count x1) and cfg.plate.sky/far/near at x3 sites; buildTimeline output contains no color fields, so a palette-only change leaves the timeline byte-identical while changing rendered colors by construction.
