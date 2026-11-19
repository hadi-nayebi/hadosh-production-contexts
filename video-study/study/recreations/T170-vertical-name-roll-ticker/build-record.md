# build-record — T170 Vertical name-roll ticker · Cycle 026 Wave 23 · attempt 1

Item: T170 · queue #83 · Packet #9 T05 (SixMap, nez&pez, Vimeo 1235931636) · OWED first attempt.
Binding spec: RUN.md §1b T170 + §2 T170 AS AMENDED by §2c (completed CONFIG contract + phase machine + timingScale + plateau vs T132) and §2d (T170 EXECUTE at firing 2, unchanged).
Consumer: DLC assembler + Hadosh Academy word-animation surfaces — the naming device for any one-more-thing-joins beat.

## Segment facts
- Source: `hidden_files/study/video-digests/2026-11-16-vimeo-sixmap/source.mp4` (10.04 s, 1080×1080).
- Segment: **the full source loop 0.00–10.04 s — handles clipped at both ends** (no source exists beyond either end), printed here and on the comparison face. Re-encoded h264 (libx264, yuv420p, no audio).
- ffprobe (raw): `duration=10.040000` · `size=247323` → segment.mp4 ≈10.04 s ✓. segment.mp4 is EVIDENCE only (comparison side, labeled ORIGINAL).

## Schedule basis + census-anchor mapping
- Basis: **segment-anchored** — cycle = the full 10.04 s loop; recreationMs = videoMs.
- Offset 0 ms = source 0.00 s · census 1.60 s → 1600 ms: prescribed B02 roll p=(1600−1440)/480=0.333, "Nalpak, INC." exiting / "NALPAK, INTL." rising, both sheened+clipped ✓ (f1.60) · census 4.88 s → 4880 ms: prescribed B09 roll p=0.333, "NAL-PAK LTD" exiting / "NALPAK LONDON" rising ✓ (f4.88) · census 9.72 s → 9720 ms: prescribed "NALPAK 3001" settled flat (B23 ended 9640) ✓ (f9.72) · census 9.88 s → 9880 ms: prescribed footer EMPTY (exit 9760+120=9880 complete) ✓ (f9.88).
- Easing: **UNMEASURED** (packet registration limit) — the roll interpolation is linear progress over each burst window, SUPPLIED and named as such; no curve is claimed as measured.

## Mechanics implemented (packet §T05)
Entity names occupy one line in the footer, centred between the two brand rings. On each burst the settled name rolls upward and out while the next name rises from below, both clipped by the footer clip box and carrying the vertical sheen gradient while moving; at each hold exactly one name stands FLAT palette.ink. 23 names for 23 bursts (§4 order), plus the exit roll (9760–9880) mapping the last name to null; after 9880 the footer is empty. Phase machine (half-open, pure function of CONFIG): burst i maps outgoing=names[i−2] (null for B01) → incoming=names[i−1]; at most 2 names during a burst, exactly 1 at a hold, 0 after the exit. Phase exclusivity (Owner Cure 2): bursts never overlap — holds are completely static. Intensity (Owner Cure 1 analogue): settled ink is foreground flat white at full intensity; the sheen is a motion-state signal on moving text only; no reserve/background field exists in this device.

## Construction
SVG/DOM, **FOOTER ONLY on a black field** — the network above the footer is other items' subject (T167/T168/T175), named out of scope under INSTRUCTION §8's split rule (fidelity plan: the recreation isolates the footer device; comparison.html prints this note on its face). Gradient ring marks + gradient rule from CONFIG geometry (ruleGrad from palette.ruleFrom→ruleTo). Name line in the CONFIG clip box: two live DOM text layers (SVG `<text>` elements whose textContent is set from CONFIG strings at runtime — letterforms are the browser's rendering of the CONFIG strings, A1 §2 precedent in its DOM form; never images, never traced paths). Moving text fills with the sheen gradient (SVG linearGradient from sheen.stops, end stops re-bound to palette.ink); settled text fills flat palette.ink. Exposed: `window.__seek(ms)`, `window.__config`, `window.stateAt/__stateAt(ms)` + module.exports {CONFIG, stateAt, scaledSchedule} returning {currentName, phase: "burst"|"hold"|"exit"|"empty", visibleNames, outgoing, incoming, progress}. Deterministic; no external assets; no captions/subtitles (the names ARE the technique's subject text).
- recreation.html: 9017 bytes · SHA-256 **6817b3feb101925a93d921f517c0b34f146eb70dd67a33255b2e4610edfecc01** (final build; all checks + A6 + wave bind to this hash).

## Count assertion (A9.3)
names 23 AND bursts 23 vs RUN §2/§4 table — **MATCH** (harness raw output below). Under the swap: 4/4 — MATCH.

## Own checks — RAW output (A9.4, from the final build's harness run)
Harness: node, DOM-stubbed, loads the recreation's inline script as a module and probes stateAt directly (LOGIC level; pixel render is PIXEL-UNVERIFIED — no browser binary in this seat; comparison.html is the render surface).
```
PASS count names==23 :: 23
PASS count bursts==23 :: 23
PASS probe 1600 burst :: {"currentName":"NALPAK, INTL.","phase":"burst","visibleNames":["Nalpak, INC.","NALPAK, INTL."],"outgoing":"Nalpak, INC.","incoming":"NALPAK, INTL.","progress":0.3333333333333333}
PASS probe 1600 visibleNames :: ["Nalpak, INC.","NALPAK, INTL."]
PASS probe 1600 p=0.333 :: 0.3333333333333333
PASS probe 4880 burst B09 :: {"currentName":"NALPAK LONDON","phase":"burst","visibleNames":["NAL-PAK LTD","NALPAK LONDON"],"outgoing":"NAL-PAK LTD","incoming":"NALPAK LONDON","progress":0.3333333333333333}
PASS probe 5100 hold NALPAK LONDON :: {"currentName":"NALPAK LONDON","phase":"hold","visibleNames":["NALPAK LONDON"],"outgoing":null,"incoming":null,"progress":0}
PASS probe 9720 hold NALPAK 3001 :: {"currentName":"NALPAK 3001","phase":"hold","visibleNames":["NALPAK 3001"],"outgoing":null,"incoming":null,"progress":0}
PASS probe 9900 currentName==null :: {"currentName":null,"phase":"empty","visibleNames":[],"outgoing":null,"incoming":null,"progress":0}
PASS probe 9820 exit :: {"currentName":"NALPAK 3001","phase":"exit","visibleNames":["NALPAK 3001"],"outgoing":"NALPAK 3001","incoming":null,"progress":0.5}
PASS probe 200 pre-roll empty hold :: {"currentName":null,"phase":"hold","visibleNames":[],"outgoing":null,"incoming":null,"progress":0}
```
(1) Swap test EXACT (RUN §2 + §2c): names replaced by ["Alpha, INC.","Beta Group","Gamma Labs","Delta 2000"] with bursts trimmed to the first 4 (count re-asserted) · timingScale 1→1.5 · ink #ffffff→#ffd75e. RAW:
```
PASS swap names==4 :: 4
PASS swap bursts==4 :: 4
PASS swap B02 start becomes 2160 :: 2160
PASS swap ink applied :: "#ffd75e"
PASS swap state B02 burst custom names :: {"currentName":"Beta Group","phase":"burst","visibleNames":["Alpha, INC.","Beta Group"],"outgoing":"Alpha, INC.","incoming":"Beta Group","progress":0.3333333333333333}
PASS swap state hold Alpha :: {"currentName":"Alpha, INC.","phase":"hold","visibleNames":["Alpha, INC."],"outgoing":null,"incoming":null,"progress":0}
HARNESS: ALL PASS
```
The swap proves the T132 cure by construction: onsets are consumed from CONFIG by the one state function (scaledSchedule) — re-timing from CONFIG alone moves every burst; no harness-side onset derivation exists.
(2) Purity grep — pattern `segment\.mp4|source\.mp4|<video|<img|url\(|1235931636` over recreation.html. RAW: count **4**, all four lines:
```
171:  svg.appendChild(el("rect", { ..., fill: "url(#ruleGrad)" }));
174:    svg.appendChild(el("circle", { ..., stroke: "url(#ruleGrad)", ... }));
177:  const g = el("g", { "clip-path": "url(#nameClip)" });
195:  const fill = moving ? "url(#sheenGrad)" : cfg.palette.ink;
```
Classification (printed, not hidden): all 4 hits are `url(#…)` INTERNAL fragment references to the gradient/clip definitions built in the same file from CONFIG values — the only SVG mechanism for referencing a paint server/clip. Specimen-media hits (segment.mp4 · source.mp4 · <video · <img · the Vimeo id): **0**. External-resource hits: **0**. The grep's refusal class (embedding/tracing specimen media) is absent; the 4 fragment references are the same construction the sibling T167 build uses for its gradient rings.
(3) Syntax: `node --check` on the extracted inline script — **PASS** (raw: `node --check PASS`, rc=0). Determinism census (guards cmd 3, cured after jev-prewave firing 2 named it): grep `Math\.random|random|seed` over recreation.html — RAW: **0 hits (no randomness tokens)**. The construction uses no randomness at all: stateAt is a pure function of CONFIG + ms; no seed is required because no RNG exists to seed.
(4) Count assertion: above — MATCH 23/23, swap 4/4.
(5) Zero-state probe (guards cmd 8): stateAt(9900).currentName == null — PASS (raw above; phase "empty"). Boundary probes at the census anchor itself (cured after jev-prewave firing 1 named the gap — the anchor asserts EMPTY at 9880, so the probe fires AT 9880, half-open): RAW:
```
stateAt(9760) :: {"currentName":"NALPAK 3001","phase":"exit","visibleNames":["NALPAK 3001"],"outgoing":"NALPAK 3001","incoming":null,"progress":0}
stateAt(9879) :: {"currentName":"NALPAK 3001","phase":"exit","visibleNames":["NALPAK 3001"],"outgoing":"NALPAK 3001","incoming":null,"progress":0.9916666666666667}
stateAt(9880) :: {"currentName":null,"phase":"empty","visibleNames":[],"outgoing":null,"incoming":null,"progress":0}
```
stateAt(9880): phase "empty" AND currentName null AND visibleNames [] — PASS.
(6) Phase probes: 1600 burst p=0.333 both names · 4880 burst B09 p=0.333 · 5100 hold "NALPAK LONDON" · 9720 hold "NALPAK 3001" · 9820 exit · 200 pre-roll empty hold — all PASS (raw above).
Comparison check (own): comparison.html carries segment.mp4 + recreation iframe, ONE control set (Play/Pause/Restart), recreation slaved via __seek with recreationMs = videoMs (segment-anchored, full loop both sides), labels exactly "ORIGINAL — SixMap (nez&pez) @ throughout (full loop)" / "RECREATION — T170 Vertical name-roll ticker, parameterized", the footer-isolation NOTE on its face, phone stacking (flex column ≤700px), 44px-minimum buttons.

## A6 legs (final build)
- fit-table.md — 23 rows measured with the lane's standing character-width instrument (printed in the file): every name fits clip w 700 (binding row "NALPAK & SCHUSTER" 594.0, bold-adjusted ≈611.8, margin ≈88); ink height at 360px scale 12.6px vs ~11px floor. **HITs: 0.** Instrument honesty (printed per jev-prewave firing 1): this instrument's outputs are character-width ESTIMATES by construction — it is the instrument the item's binding spec prescribes for this leg ("estimated ink width … with the lane's standing character-width instrument (printed as such)"), and fit-table.md labels every value an estimate. No rendered-bounds measurement exists in this seat (no browser binary; the build is PIXEL-UNVERIFIED and comparison.html is the render surface) — the estimate is the prescribed evidence form here, not a formula claim dressed as a render measurement.
- config-census.md — all-literal scan with classifications + full key→site resolution; two first-draft shaping literals (rule thickness, CSS font weight) cured into CONFIG pre-wave; footer.lineH consumption cured by deriving the baseline from it. **HITs: 0.**

## Asset inventory
recreation.html (code only, self-contained) · comparison.html (loads segment.mp4 as the labeled ORIGINAL side + recreation.html) · segment.mp4 (evidence, from the archived source). The recreation loads NO assets.

## Pointers
Packet: `hidden_files/study/video-digests/2026-11-16-vimeo-sixmap/digest.md` §T05 + §4 · Register: `hidden_files/study/style-library/techniques-word-animation.md` (T170) · Prior family: T132 scores (FAIL 83.2) · Gates: codex/codex-observe.md + codex/codex-plan-review.md (filed) · Prewave: jev-prewave.md (artifact root) · Wave: codex/lens-*.md · Verdict: scores.md.
