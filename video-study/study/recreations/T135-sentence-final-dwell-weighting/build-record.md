# build-record — T135 Sentence-final dwell weighting (punctuation as timing) · Cycle 022 Wave 19 · attempt 1
Artifact: hidden_files/study/recreations/T135-sentence-final-dwell-weighting/
Technique: Packet #7 P7 T04 — Sentence-final dwell weighting (punctuation as timing). Window: 3.00–17.00 s (segment 14.000 s). Schedule basis: t=0 allocation (dwells derived: baseDwellMs 180 x finalMultiplier 3.0 for tokens ending in a CONFIG finalMarks mark; derived total 13320 ms, tail 680 ms of plate to cycle end).
Mechanics implemented: 56-word stream on a uniform metronome; the ONLY timing event is the sentence-final hold: 9 final tokens in the list dwell 540 ms against 180 ms internal. Detection reads the token's terminal mark against CONFIG finalMarks ['.','?'] at timeline build. Packet calibration: whole-film medians internal 0.16 s / final 0.48 s (14 finals vs 117 internal); base 180 ms is an allocation above the 160 median, priced in the Plan.
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (content, schedule, palette, typography, plate geometry); one JS clock (requestAnimationFrame against a shared start + seek offset); single-slot phase machine — exactly one token visible at any instant (Owner Cure 2 serial form); landscape plate drawn from CONFIG plate.* geometry (far/near ridge point arrays, sun, ground band) and panned at plate.panPxPerSec. No external assets; no specimen media anywhere in the build.
Fidelity plan — deferred/named: Source final holds vary (0.32–0.76 s) around the median; the build's claim is the weighting RULE at a constant multiplier, not a per-word trace — the derivation gap is the item's priced risk (Plan).
Own checks (recorded, §5 legs 1–3):
- Swap test (logic level, node harness over buildTimeline with stubbed DOM): words→[One. 540 · Two 180 · three. 540 · Four? 540]: PASS exact · timing leg: finalMultiplier 3.0→2.0 gives finals 360 ms: PASS · palette leg: wordColor→#ffd75e in CONFIG
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|iO7BmPoL6a4|onset-[0-9]+\.jpg) over recreation.html: 0 hits. Asset inventory: code only (HTML/CSS/JS + inline SVG plate drawn from CONFIG data).
- Comparison check: comparison.html drives segment.mp4 and recreation.html from one control set; recreation slaved via the seek hook on timeupdate; labels ORIGINAL/RECREATION as filed; 360 px stacking via the shared prior-wave stylesheet form.
- Syntax: node --check on the extracted inline script: PASS. Determinism census: no Math.random, no Date.now in the file; schedule is a pure function of CONFIG.
- Segment binding: segment.mp4 ffprobe 14.000 s.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: f29b8ee6016dbb7321c6938d30b12dae342cf32a0b37861b51e28045e8f75c51
