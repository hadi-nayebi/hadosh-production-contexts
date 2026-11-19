# build-record — T139 Product flash at a phrase boundary · Cycle 023 Wave 20 · attempt 1
Artifact: hidden_files/study/recreations/T139-product-flash-phrase-boundary/
Technique: Packet #7 P7 T08 — Product flash at a phrase boundary. Window: 26.36–36.60 s (segment cut 25.86–37.10 with ±0.5 s handles per A-HANDLES; segment.mp4 11.240 s, h264/aac, ffprobe-verified). Schedule basis: segment-anchored (event onsets at measured segment-relative times, onset − 26.36 s).
Mechanics implemented: the red word stream (centre anchor, moving salt-flat plate) is interrupted by product passes; the word clock PAUSES for each flash and RESUMES at the same band — implemented as a single event timeline (CONFIG events with absolute segment-relative atMs/dwellMs): during a flash or gap event no word event is active, and the next word lands at its measured onset, never re-based. Single-slot phase machine: at any instant exactly one foreground state — a word, OR a flash (code-drawn SVG vehicle crossing the stage with dust trail), OR a gap (plate only) — Owner Cure 2 serial form. Seamless tiled pan: ridge paths duplicated at panTilePx 720, pan offset derived from total elapsed time (continuous across the cycle wrap, A9.1). crossMs carried per flash independent of dwellMs (A-T139-2): HR-V 1100 · Jazz 280 · Type R 1000 · Jet 120 · NSX-distant 400 · NSX 360. Vehicle forms from CONFIG: crossover #5a6068 dir 1 · hatch #c22a20 dir 1 · sport #b02020 dir −1 · jet #d8dde2 dir 1 rising (risePx) · NSX-distant sport at scale 0.55 · NSX sport-rear #c0202a dir 0 centred, receding (scale → recedeTo 0.45). Silhouette geometry (body/cabin/wheels/dust) is computed FROM the vehicles.* geometry keys, not literals (Cycle-021 addendum).
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (event table, vehicles, palette, typography, plate geometry); ONE JS clock (requestAnimationFrame against elapsed time); window.__seek(ms) + window.__config exposed for the comparison page and harness. No external assets; no specimen media anywhere in the build.
Event count assertion (A9.3): the A-T139-1 table in RUN §2b, enumerated token by token by the builder (and machine-counted from the RUN text), carries 37 events — 28 words + 6 flashes (HR-V · Jazz · Type R · Jet · NSX-distant · NSX) + 3 gaps — ending exactly at cycleMs 10240 with zero overlaps. Built CONFIG: 37 events, same split (harness counts below). ASSERTION: enumerated-source 37 vs built 37 — MATCH. Printed discrepancy: RUN §2b's summary line ("5 flashes + 2 gaps + 26 words = 33") does not match its own detailed table; the detailed table is the binding source (it alone tiles the 10240 ms cycle exactly), and the summary arithmetic is flagged here for the seat's Condense rather than silently reproduced.
Fidelity plan — deferred/named (A-T139-DEFERRAL): the specimen's flashes are photographic product passes; the recreation's vehicles are code-drawn generic silhouettes. Reason: §6.1 purity law forbids specimen media and no generated-imagery route exists in this seat for moving photographic passes. Expected cost: the motion lens prices the gap (it is the predicted stuck lens, §2 plateau pricing; family baseline T132 a1 avg 83.2).
Asset inventory (A-VERIFY): segment.mp4 (evidence only, appears solely as the labeled ORIGINAL side of comparison.html) · recreation.html — all assets code/build-generated: inline SVG plate drawn from CONFIG plate.* data, vehicle silhouettes generated in JS from CONFIG vehicles.* geometry, DOM word slot; NO external files, NO generated imagery files, NO specimen media · comparison.html (control page) · codex/ returns. Every asset the recreation loads: none — it is a single self-contained file.
Own checks (recorded, §5 legs 1–3 — raw harness output from the FIRST draft, A9.4, verbatim below):
- Swap test (logic level, node harness over buildTimeline/stateAt with the build's own inline script): Swap A — post-Jazz word slots → Alpha/bravo/charlie. · HR-V flash colour → #2a6ad4 · sky → #d9a8c9: timeline rebuilds at 37 events, 'Alpha' owns the slot at 3400 ms, phases stay exclusive: PASS. Swap B — HR-V dwellMs 1320→2000: dwell takes effect (flash owns 1700 ms), exclusivity preserved by first-match priority; observed consequence recorded honestly: the extended flash shadows the words at 1560–2160 in the absolute table — the schedule follows CONFIG, which is the swap's claim: PASS.
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|iO7BmPoL6a4|onset-[0-9]+\.jpg) over recreation.html: 0 hits (grep exit 1, match count 0).
- Syntax: node --check on the extracted inline script: PASS (SYNTAX_OK). Determinism census: no Math.random, no Date.now in the file; schedule is a pure function of CONFIG.
- Comparison check: comparison.html drives segment.mp4 and the recreation iframe from one control set (play/pause/restart); recreation slaved via __seek with the A-HANDLES mapping recreationMs = videoMs − 500, clamped ≥0 (timeupdate + seeked + 100 ms interval while playing); labels 'ORIGINAL — Honda Keep Up @ 26.36–36.60' / 'RECREATION — T139 Product flash at a phrase boundary, parameterized' as filed; phone-width: column stack, max-width 360 px media, 44 px-min-height buttons.
- Segment binding: segment.mp4 ffprobe duration 11.240 s (cut 25.86 + 11.24 from the archived source).
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: aa3ade793b7f33ddbb87fa8a21a313bc8705c04db73739eade61e7e201652929

## Raw harness output (first draft, verbatim)
```
SYNTAX_OK
{
 "counts": {
  "word": 28,
  "flash": 6,
  "gap": 3,
  "total": 37
 },
 "first": {
  "kind": "flash",
  "vehicle": "hrv",
  "atMs": 0,
  "dwellMs": 1320,
  "crossMs": 1100
 },
 "lastEnd": 10240,
 "cycleMs": 10240,
 "tableOverlaps": 0,
 "spots": {
  "100": {"kind": "flash", "vehicle": "hrv"},
  "1400": null,
  "1600": {"kind": "word", "text": "to"},
  "2200": {"kind": "gap"},
  "3000": {"kind": "flash", "vehicle": "jazz"},
  "5000": {"kind": "flash", "vehicle": "typer"},
  "5900": {"kind": "word", "text": "improve"},
  "7200": {"kind": "gap"},
  "7300": {"kind": "flash", "vehicle": "jet"},
  "7600": {"kind": "gap"},
  "9000": {"kind": "word", "text": "faster."},
  "9600": {"kind": "flash", "vehicle": "nsxFar"},
  "10000": {"kind": "flash", "vehicle": "nsx"}
 },
 "fitMax": {"word": "forwards.", "inkW": 190.4, "inkH": 28.8, "margin": 84.8},
 "swapA": {
  "counts": {"word": 28, "flash": 6, "gap": 3, "total": 37},
  "at3400": {"kind": "word", "text": "Alpha"},
  "hrvColor": "#2a6ad4",
  "sky": "#d9a8c9",
  "pass": true
 },
 "swapB": {
  "dwellMs": 2000,
  "at1700": {"kind": "flash", "vehicle": "hrv"},
  "at2200": {"kind": "gap"},
  "note": "extended flash shadows words to/do/new/things. (1560-2160) by first-match priority; exactly one foreground state at every sampled ms",
  "pass": true
 }
}
```
(Full per-word fit rows from the same harness run are filed in fit-table.md; the census run's per-key site counts are filed in config-census.md — unapplied keys: [].)

## Prewave disposition (jev-prewave, filed at artifact root as jev-prewave.md)
Verdict: FIRE-WAVE (parameterization 0.90 · purity pre-check 0.95 · own-checks completeness 0.85 · fidelity-plan honesty 0.85). Applied. The return's paperwork correction is also applied here: the event table leaves three implicit plate-only intervals (1320–1560 · 3200–3360 · 5520–5680 ms) where no event is active and the phase machine's null state shows the plate alone (harness spot 1400 = null, as filed) — "tiles the cycle exactly" in the count-assertion paragraph above means zero overlaps + final endpoint at cycleMs, not continuous event coverage; the intervals are the specimen's measured inter-event spaces, carried as implicit gaps by design.
