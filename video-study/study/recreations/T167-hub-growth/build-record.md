# T167 Hub growth — build record (attempt 1, Cycle 026 Wave 23)

- Artifact: `hidden_files/study/recreations/T167-hub-growth/` — recreation.html SHA-256 `598060cfd7bcd76b29c8e56577605f19dbbe6b86b81d54b9a54a010e82327c64`
- Technique: T167 Hub growth, Packet #9 (SixMap, nez&pez, Vimeo 1235931636), packet digest §T02, register techniques-diagrams.md.
- Window: 0.36–1.12 s. Segment: cut 0.00–1.62 from source (`ffmpeg -ss 0 -i source.mp4 -t 1.62`, re-encoded h264 yuv420p); ffprobe: h264, 1080×1080, 25 fps, duration 1.64 s (41 frames — frame-quantized from the requested 1.62 s, printed as the ≈1.62 verification).
- Schedule basis: **segment-anchored** (cycle 0 = source 0.00; cycleMs DERIVED = growth.startMs 360 + growth.durMs 760 + holdAfterMs 500 = 1620).
- Census-anchor mapping: 200 ms seed r=5, name unsettled · 760 ms growth p=0.526, r band [18,30] under supplied easeOutCubic (stateAt gives 29.13) · 1160 ms r=32 settled, name flat. Easing UNMEASURED in the specimen; easeOutCubic is SUPPLIED, named in CONFIG.

## Mechanics implemented
- Hub circle radius as a pure function of cycle time: seed 5 before 360 ms; eased 5→32 over 360–1120 ms; 32 through the 500 ms hold. In-place growth, no overshoot, no travel, no spokes at any time.
- Footer from CONFIG: two gradient ring marks (conic-gradient teal→orange, radially masked to a stroked ring), gradient rule line at ruleY 905, exactly ONE name in the CONFIG clip box above the rule.
- Name roll rides the growth window (360–1120 ms): translateY from +rollTravelPx 64 to 0, clipped by the box; sheen gradient (CONFIG stops ink → #9a9a9a → ink) on the live DOM text while moving; flat palette.ink when settled.
- Construction: DOM (hub/ring/rule/name divs inside a 1080×1080 world scaled to the stage). Rejected per RUN §2: canvas, CSS keyframes alone. Letterforms are live DOM text rendered from the CONFIG string (A1 §2 precedent, DOM analogue per RUN §1d/§2).
- Deterministic: no Math.random, no Date.now; stateAt(ms) is a pure function of CONFIG; exposed as window.__seek / window.__config / window.stateAt and module.exports {CONFIG, stateAt}.

## Count assertion (A9.3)
CONFIG names: 1 vs RUN table: 1 — MATCH (raw harness line below).

## Fidelity plan
All packet §T02 mechanics implemented; deferrals: NONE. Easing is supplied-not-measured, named in CONFIG and in scores.md (not a deferral — the packet prescribes no curve).

## Asset inventory
recreation.html loads no external assets (no media elements, no external references — purity grep below). Files in this directory: segment.mp4 (evidence only, used by comparison.html), recreation.html, comparison.html, build-record.md, fit-table.md, config-census.md, scores.md, jev-prewave.md, codex/ (observe + plan-review filings pre-existing; prewave + lens payloads/returns filed by this build).

## Own checks — RAW output (A9.4)

Node harness (extracted inline script, required in node; swap mutates the live CONFIG, which stateAt reads):
```
CONFIG cycleMs (derived): 1620
stateAt(200): {"t":200,"cycleMs":1620,"hubR":5,"hubCx":482,"hubCy":484,"hubColour":"#ffffff","nameText":"Nalpak, INC.","nameSettled":false,"nameMoving":false,"nameOffsetPx":64,"sheenActive":false,"spokes":0}
stateAt(760): {"t":760,"cycleMs":1620,"hubR":29.130339699664674,"hubCx":482,"hubCy":484,"hubColour":"#ffffff","nameText":"Nalpak, INC.","nameSettled":false,"nameMoving":true,"nameOffsetPx":6.802157748942996,"sheenActive":true,"spokes":0}
stateAt(1160): {"t":1160,"cycleMs":1620,"hubR":32,"hubCx":482,"hubCy":484,"hubColour":"#ffffff","nameText":"Nalpak, INC.","nameSettled":true,"nameMoving":false,"nameOffsetPx":0,"sheenActive":false,"spokes":0}
SWAP name text -> Acme, LTD.
SWAP cycleMs derived -> 1960 stateAt cycleMs -> 1960
SWAP hub colour -> #ffd75e
SWAP TEST: PASS (all three swapped values reflected)
COUNT CONFIG names: 1 (single name object, text="Nalpak, INC.") vs RUN table 1 -> MATCH
ZERO-STATE stateAt(200).spokes = 0 | nameSettled = false
BOUNDARY stateAt(1119).hubR = 31.99999993849322 <32: true
BOUNDARY stateAt(1120).hubR = 32 ==32: true
BOUNDARY stateAt(1619).hubR = 32 ==32: true
ALL HARNESS ASSERTIONS: PASS
```
Swap values (exact, RUN §2 + §2c): name.text → "Acme, LTD." · growth.durMs 760→1100 (cycleMs derives 1960) · hub.colour #ffffff→#ffd75e. All three reflected in state.

Syntax check:
```
$ node --check <extracted inline script>
node --check: PASS
```

Purity grep (pattern `segment\.mp4|source\.mp4|<video|<img|url\(|1235931636` over recreation.html):
```
$ grep -cE 'segment\.mp4|source\.mp4|<video|<img|url\(|1235931636' recreation.html
0
purity hits 0
```
(An earlier draft used SVG gradient/clip references containing the literal `url(`; it was rebuilt with DOM/CSS gradients before any scoring, so the final build carries 0 hits — the rebuild is recorded here, not hidden.)

Comparison check (own, by construction + code read): segment.mp4 + recreation iframe side by side at matched size (both 1:1), ONE control set (Play/Pause/Restart buttons, min-height 44px) driving the video and slaving the recreation via __seek with recreationMs = videoMs; labels exactly "ORIGINAL — SixMap (nez&pez) @ 0.36–1.12" / "RECREATION — T167 Hub growth, parameterized"; phone-width (≤640px) stacks vertically, controls remain at top and reachable. PIXEL-UNVERIFIED: no browser binary in this seat — comparison rendering was not exercised headlessly.

## A6 legs (on the final build)
- fit-table.md — HITs: 0 (instrument limitation printed on its face: canvas-free character-width approximation, the lane's standing instrument in this seat).
- config-census.md — HITs: 0 (every CONFIG key resolved to a value-flow application site; one structural hex — the ring mask's opaque colour — classified in print).

## Gate + wave pointers
- jev-prewave: payload `codex/payload-prewave.txt`, return `jev-prewave.md` (artifact root) — verdict + disposition in scores.md.
- Five-lens scoring wave: payloads + verbatim returns in `codex/` (lens-motion / lens-timing / lens-purity / lens-reusability / lens-readability), all bound to recreation.html SHA-256 above; arithmetic + verdict in scores.md.
