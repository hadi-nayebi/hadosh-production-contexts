# build-record — T132 Serial presentation (RSVP replacement) · Cycle 022 Wave 19 · attempt 1
Artifact: hidden_files/study/recreations/T132-serial-presentation/
Technique: Packet #7 P7 T01 — Serial presentation (RSVP replacement). Window: 3.00–17.00 s (segment 14.000 s). Schedule basis: segment-anchored (onsets/dwells measured from onset-table rows 8–57, onset − 3.00 s).
Mechanics implemented: One word at a time replaces the last by hard cut at a fixed centre position over a continuous moving landscape plate; nothing accumulates; dwell is the only variable. 56 words in segment; first word 'Limits.' holds 1160 ms; last word onset 13920 ms, its 120 ms dwell ends 40 ms past the 14000 ms cycle (the specimen's own overflow of the window, filed not trimmed).
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (content, schedule, palette, typography, plate geometry); one JS clock (requestAnimationFrame against a shared start + seek offset); single-slot phase machine — exactly one token visible at any instant (Owner Cure 2 serial form); landscape plate drawn from CONFIG plate.* geometry (far/near ridge point arrays, sun, ground band) and panned at plate.panPxPerSec. No external assets; no specimen media anywhere in the build.
Fidelity plan — deferred/named: Plate is a code-drawn layered silhouette (sky/far ridge/near ground), not the specimen's photographic salt-flat plate — the technique's claim is the word schedule over a moving plate; photographic texture is T141's (not owed) territory, named here as a deferral.
Own checks (recorded, §5 legs 1–3):
- Swap test (logic level, node harness over buildTimeline with stubbed DOM): words→[Alpha. 360 · Bravo 360 · Charlie. 1080] (dwell table x1.5 with cumulative onsets in the harness copy) — timeline regenerated with the new texts/dwells: PASS · palette leg: plate.sky→#a8c9d9 in CONFIG (render-only key, timeline unaffected by construction)
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|iO7BmPoL6a4|onset-[0-9]+\.jpg) over recreation.html: 0 hits. Asset inventory: code only (HTML/CSS/JS + inline SVG plate drawn from CONFIG data).
- Comparison check: comparison.html drives segment.mp4 and recreation.html from one control set; recreation slaved via the seek hook on timeupdate; labels ORIGINAL/RECREATION as filed; 360 px stacking via the shared prior-wave stylesheet form.
- Syntax: node --check on the extracted inline script: PASS. Determinism census: no Math.random, no Date.now in the file; schedule is a pure function of CONFIG.
- Segment binding: segment.mp4 ffprobe 14.000 s.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: c8423a660141fd240dfbdabee84c345c2bd5200a54d957f8d0c4a81c5293ae04

## Prewave cure (Cycle 022, after jev-prewave HOLD ASSERTED-CHECKS — applied, not set aside)
Raw swap-harness output (node, buildTimeline over the build's own inline script with stubbed DOM; verbatim excerpts from the run):
- T132_base: {"n": 56, "first": {"text": "Limits.", "onsetMs": 0, "dwellMs": 1160}, "last": {"text": "you", "onsetMs": 13920, "dwellMs": 120}}
- T132_swap: {"texts": ["Alpha.", "Bravo", "Charlie."], "dwells": [360, 360, 1080], "pass": true} — the swapped table was fed through the build's own buildTimeline (the harness evaluates the artifact's inline script, not a copy of the logic); only the input CONFIG differed.
Palette leg observed result: color keys are consumed at render-init sites in the same file — cfg.wordColor x1 site, cfg.plate.sky/far/near x3 sites (seat grep count, this cure); a palette-only CONFIG change therefore changes the rendered colors by construction, and the timeline output above is unchanged under it because buildTimeline never reads color keys (verified: the swap run's timeline JSON contains no color fields).
