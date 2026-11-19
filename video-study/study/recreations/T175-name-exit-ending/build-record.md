# build-record — T175 Name-exit ending · attempt 1 · Cycle 026 Wave 23 (queue #84)

- **Item:** T175 — Name-exit ending (Packet #9, SixMap — nez&pez, Vimeo 1235931636) · P9 T10 · window 9.76–10.04 s.
- **Schedule basis: `t=0 allocation`** (RUN §2 T175, as amended by §2c/§2d — binding). The technique's lifecycle is re-based to the build's own zero; the measured ending is stretched to an allocated loop for legibility, curing the packet's B1 short-hold bad per asset AS-74 (a production borrowing holds the result ≥1 s).
- **Final build SHA-256:** `585ff7517b9dfbc060ed77c2487af917c216d9262650820311861d0817c2a3dc` (recreation.html; identical in all five lens payloads).
- **PIXEL-UNVERIFIED** — no browser binary in this seat; verification is LOGIC level (node harness over the build's own state function + character-width instrument) and comparison.html is the render surface.

## Segment facts
- Source: `hidden_files/study/video-digests/2026-11-16-vimeo-sixmap/source.mp4` (1080×1080, 25 fps, 10.04 s).
- Cut: window 9.76–10.04 s; cut 9.26–10.04 with handles (−0.50 / +0.00 clipped at source end), re-encoded h264 → `segment.mp4`.
- ffprobe (raw): `codec_name=h264 · width=1080 · height=1080 · duration=0.760000` (≈0.78 s nominal; 0.76 s at frame boundaries — the source ends at 10.04 s). Evidence only: appears solely as the labeled ORIGINAL side of comparison.html.

## Basis + census-anchor mapping (measured vs allocated)
| phase | measured (source) | allocated (build) |
|---|---|---|
| settled hold | ≈120 ms (9.64–9.76) | 1000 ms — `holds.settledMs` |
| exit roll | 120 ms (9.76–9.88) | 300 ms — `exit.durMs` |
| alone hold | ≈160 ms (9.88–10.04) | 1300 ms — `holds.aloneMs` |
| total | ≈400 ms | cycle 2600 ms (DERIVED = 1000+300+1300) |

Census-anchor mapping (by state, per §2/§2c): source 9.72 (complete network + name settled) ↔ allocation t<1000 (settled) ✓ · source 9.88 (footer empty, network unchanged) ↔ allocation t≥1300 (alone: footerName null AND nodeCount 23 AND networkHash constant) ✓. Derivation (§2d, authoritative): exit.startMs = holds.settledMs = 1000 · alone start = settledMs + exit.durMs = 1300 · cycleMs DERIVED = settledMs + exit.durMs + aloneMs = 2600.

## Mechanics implemented (packet §T10)
After the last satellite lands and its name settles, one final footer-only burst rolls "NALPAK 3001" up and out, leaving the footer empty; the complete network then holds alone. Network change across the exit: 0.00% in the specimen (packet §4 frame-difference) — in the build this is a CONSTRUCTION property: the network group is rendered once from CONFIG and never transformed; probed by networkHash constancy (below). Deliberate deferrals: NONE — every §T10 mechanic is implemented; the footer rings/rule geometry is carried from the T170 footer contract (§2c spelled in full).

## Construction (two-group separation)
One self-contained recreation.html. CONFIG at top carries every subject-shaping value (A9.6): stage · hub · nodes[22] verbatim from positions-final.json · spoke.w · lastName.text · holds{settledMs, aloneMs} · exit.durMs · name.rollTravelPx · sheen.stops · gradSteps/ringSteps · footer{ruleY, ringCx, ringCy, ringR, ringStroke, lineH, fontPx, fontStack, clip} · palette{field, ink, ruleFrom, ruleTo}.
- **Network group** (SVG `<g id="network">`): hub circle + 22 spoke lines (hub→node) + 22 node circles, all static, rendered once from CONFIG in palette.ink. Its rendered attributes are CONSTANT all cycle.
- **Footer group**: gradient rule + two gradient rings drawn as interpolated segments from palette.ruleFrom→ruleTo (gradSteps/ringSteps segments — no paint-server references), plus the name as **live DOM text** from CONFIG.lastName.text inside the CONFIG clip box (A1 §2 DOM analogue: glyphs are the browser's rendering of the CONFIG string — never baked, never traced).
- **Phase machine** (half-open, pure function of CONFIG): settled [0,1000) name flat ink · exiting [1000,1300) name rolls up name.rollTravelPx (64) with the sheen gradient (CSS linear-gradient clipped to the live text; stops from CONFIG.sheen.stops), transform ONLY on the footer name element · alone [1300,2600) the name element is REMOVED from the DOM — no name rendered anywhere.
- Harness surface: `window.__seek(ms)` / `window.__config` / `stateAt(ms)` (+ module.exports) returning {phase, footerName|null, nameVisible, nodeCount: 23, networkHash} — networkHash = FNV-1a over the network's rendered attribute serialization (hub + per-node spoke endpoints/stroke + node cx/cy/r/fill, as emitted). Deterministic; no external assets; no text other than the CONFIG name.

## Count assertion (A9.3)
CONFIG.nodes = 22 satellites + 1 hub = **23** vs RUN §2 table 23 — **MATCH** (harness raw: `count.nodes: 22` · `count.nodeCount_stateAt0: 23`).

## Fidelity plan
Implemented: complete static network from census data · settled flat-ink name · single upward roll exit with sheen · footer emptied (element removed) · alone hold on the unchanged network · footer brand geometry (rings + gradient rule). Deferred: none.

## Asset inventory
recreation.html loads NO external assets — all content is code (SVG/DOM generated from CONFIG). segment.mp4 is referenced only by comparison.html as the labeled ORIGINAL side. No generated imagery files.

## Own checks — RAW output (A9.4, from the final build)
Harness: node, DOM stubs, inline script extracted from recreation.html; swap applied to a deep copy of CONFIG via stateAtWith.

```
count.nodes: 22
count.nodeCount_stateAt0: 23
derived.default: {"exitStartMs":1000,"aloneStartMs":1300,"cycleMs":2600}
hash.samples: ["0ccb05ce","0ccb05ce","0ccb05ce","0ccb05ce","0ccb05ce"]
hash.allEqual: true
phase@999: {"phase":"settled","footerName":"NALPAK 3001","nameVisible":true}
phase@1000: {"phase":"exiting","footerName":"NALPAK 3001","nameVisible":true}
phase@1299: {"phase":"exiting","footerName":"NALPAK 3001","nameVisible":true}
phase@1300: {"phase":"alone","footerName":null,"nameVisible":false}
zero.stateAt1400: {"footerName":null,"nodeCount":23,"nameVisible":false}
swap.derived: {"exitStartMs":1000,"aloneStartMs":1600,"cycleMs":2900}
swap.phase@1000: {"phase":"exiting","footerName":"ACME 9000"}
swap.phase@1599: {"phase":"exiting","footerName":"ACME 9000"}
swap.phase@1600: {"phase":"alone","footerName":null}
swap.phase@2899: {"phase":"alone","footerName":null}
swap.name@500: "ACME 9000"
swap.hashDiffersFromDefault: true
swap.nodeCount: 23
fit.default: {"em":7.12,"px":384.48}
fit.swap: {"em":5.68,"px":306.72}
fit.clipW: 700
fit.inkHeightDesignPx: 38.88
fit.inkHeightAt360Px: 12.96
```

1. **Swap test (EXACT §2/§2d values):** lastName.text "NALPAK 3001"→"ACME 9000" · exit.durMs 300→600 · palette.ink #ffffff→#ffd75e. Result: derived phases exiting [1000,1600), alone [1600,2900), cycleMs 2900 — exactly as §2d prescribes (alone hold preserved at 1300, never compressed); the swapped name renders in the settled/exiting phases; the ink swap flows into the network serialization (hash differs — hub/spokes/nodes/name share palette.ink by design, one subject ink). Technique still reads correctly. **PASS.**
2. **Purity grep** over recreation.html, pattern `segment\.mp4|source\.mp4|<video|<img|url\(|1235931636`: **0 hits** (grep -c printed `0`). The build contains no specimen reference at all; gradient rendering uses interpolated segment strokes + a CSS linear-gradient (no paint-server `url()` references by construction).
3. **Syntax:** `node --check` on the extracted inline script: **PASS**.
4. **Count assertion:** 22 + 1 = 23 vs 23 — **MATCH** (above).
5. **Zero-state probes (guards cmd 8):** stateAt(1400).footerName == null AND stateAt(1400).nodeCount == 23 AND nameVisible == false — **PASS** (raw above).
6. **Network constancy:** networkHash `0ccb05ce` equal at 0/999/1299/2000/2599 — **PASS** (raw above).
7. **Phase boundaries:** default 999 settled / 1000 exiting / 1299 exiting / 1300 alone; swapped 1599 exiting / 1600 alone — **PASS** (raw above).
8. **Comparison check (LOGIC level):** one control set (Play/Pause/Restart, 44px-min buttons) drives segment.mp4 and slaves the recreation via __seek from a shared restart; BOTH at natural speed — no time-warp (the §2c-forbidden recreationMs = videoMs × (2600/780) mapping is NOT used); face prints "allocation stretches the measured 0.40 s ending to a 2.60 s loop — natural speed both sides, phases labeled" and a live recreation-phase label; labels verbatim "ORIGINAL — SixMap (nez&pez) @ 9.76–10.04" / "RECREATION — T175 Name-exit ending, parameterized"; phone stacking via flex-direction column ≤640 px. PIXEL-UNVERIFIED.

## A6 legs (final build)
- fit-table.md — HITs **0** (lastName ink width 384.48 px vs clip 700; ink height 12.96 px at 360 px stage vs 11 px floor).
- config-census.md — HITs **0** (all-literal scan + classification; the 22-entry node table is CONFIG data).

## Pointers
Packet: digest.md §T10 · positions: positions-final.json · register: style-library/techniques-endings.md (T175) · RUN: runs/2026-11-17-cycle-026-wave-23/RUN.md §1b/§2/§2c/§2d · prewave: jev-prewave.md (artifact root) · wave: codex/lens-*.md · verdict: scores.md.
