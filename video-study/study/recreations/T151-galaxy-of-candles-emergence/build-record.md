# build-record — T151 Galaxy-of-candles emergence field · Cycle 024 Wave 21 · attempt 1
Artifact: hidden_files/study/recreations/T151-galaxy-of-candles-emergence/
Technique: Packet #8 P8 T07 — Galaxy-of-candles emergence field. Window: 145.00–160.00 s of Kurzgesagt "Why Aliens Might Already Be On Their Way To Us" (GDSf2h9_39I); segment cut 144.5–160.5 with ±0.5 s handles (segment.mp4 16.000 s, h264/aac re-encoded from the AV1 source, ffprobe-verified below). Schedule basis: segment-anchored, with the kindle phase priced from the seat census (RUN §1c: candles state standing at 156 s).
Mechanics implemented: a tilted spiral galaxy plate (2 arms, sweep + radius computed from CONFIG generator coefficients) fades in over 1500 ms and then stays STILL (A9.1 — no plate rotation); 240 unlit specks populate the disc at BACKGROUND intensity capped at field.reserveIntensity 0.35, twinkling continuously (per-speck phase from the seed); 24 candles kindle ONE BY ONE across the disc (kindleStartMs 2500, kindleIntervalMs 380, last onset 11240, glow ramp 600 ms CONTINUOUS intent), each kindled candle FOREGROUND at flame intensity 1.0 with a vertical flame (h 26) and glow column (64) — Owner Cure 1 as construction: the foreground/background separation rides the kindle ramp, and speck intensity is computed under min(specks.reserveIntensity, field.reserveIntensity) so no speck can exceed the cap. Hold after the last kindle to cycleMs 15000. Lit ratio: 24 lit / 240 unlit specks = 0.100 ≈ 1:10 (few lit, mostly dark — the technique's claim).
NAMED DEFERRAL (RUN §2b, cures SILENT-DEFERRAL): the segment's preceding beats — the T149 isometric path dissolving (~145–150 s, census 148 s) and the bubble-Earth transition (~152 s, census 152 s) — are NOT built; they are other techniques' exits/transitions. This attempt's fidelity claim is the candles emergence itself (packet window ~2:25–2:40 names the emergence); the build opens with the galaxy plate fading in over 1500 ms as its transition-in. Consequence priced: the timing lens judges the kindle phase against the census (kindle state standing at 156 s; kindle phase census-priced ~154–160 s in the specimen), not against a full-segment replica.
Catalogue-fidelity note (RUN §1b): the packet's cited evidence frame ev/150-galaxy-candles-civs.jpg does NOT show a galaxy plate — it shows the T149 isometric path with its climber. The build binds to the seat's own source census (RUN §1c: 148 s path dissolving · 152 s bubble-Earth · 156 s candles state), not to the cited frame.
Construction: one self-contained HTML file; CONFIG object at the top carries every subject variable (galaxy geometry + palette, speck population + reserve cap, candle generator coefficients armSweepRad 4.2 / radiusExponent 0.8 / angleJitterRad / innerBandFrac, kindle schedule, flame geometry + palette); canvas construction below; seeded RNG (mulberry32, CONFIG seed 15124 — no Math.random, no Date.now); window.__seek(ms) + window.__config + stateAt exposed for the comparison page and harness; module.exports for the node harness. No external assets; no captions/subtitles (the technique carries no text).
Count assertion: candles generated from CONFIG seed 15124 = 24 vs CONFIG candles.count 24 — MATCH (harness counts below); specks generated 240 vs CONFIG specks.count 240 — MATCH. Last kindle onset 2500 + 23×380 = 11240 — MATCH.
Asset inventory (A-VERIFY): segment.mp4 (evidence only, appears solely as the labeled ORIGINAL side of comparison.html) · recreation.html — all assets code-generated: galaxy disc gradient, spiral-arm dots, specks and candle flames all computed in JS from CONFIG; NO external files, NO generated imagery files, NO specimen media · comparison.html (control page) · codex/ returns. Every asset the recreation loads: none — it is a single self-contained file.
Own checks (recorded, §5 legs 1–3 — raw harness output from the final build, A9.4, verbatim below):
- Swap test (exact, RUN §2b; logic level, node harness over buildField/stateAt with the build's own inline script): candleCount 24→12 · kindleIntervalMs 380→190 · candle colour #ffd75e→#8ad6ff: field rebuilds at 12 candles, last onset 4590 (= 2500 + 11×190), all 12 lit at cycle end, ratio 12/240, max speck intensity still 0.35 with flame intensity 1.0 (separation intact): PASS.
- Freeze instrument: specks twinkle continuously, so state-at probes at two different times MUST differ — probes at 1000 ms and 1750 ms filed below: speck intensities differ (0.3481→0.2872, 0.2502→0.2714), probesDiffer true: PASS. A frozen frame is therefore detectable from the harness state function.
- Separation census: max speck intensity sampled across the full cycle = 0.35 = the reserve cap; flame intensity 1.0: separationHolds true.
- Determinism: buildField twice from seed 15124 → identical field: true.
- Purity grep (segment\.mp4|source\.mp4|<video|<img|url\(|GDSf2h9|gdsf2h9) over recreation.html: 0 hits (grep exit 1, match count 0).
- Syntax: node --check on the extracted inline script: PASS (SYNTAX_OK).
- Comparison check: comparison.html drives segment.mp4 and the recreation iframe from one control set (play/pause/restart); recreation slaved via __seek with the handle mapping recreationMs = videoMs − 500, clamped ≥0 (timeupdate + seeked + 100 ms interval while playing); labels 'ORIGINAL — Kurzgesagt GDSf2h9_39I @ 2:25–2:40' / 'RECREATION — T151 galaxy-of-candles emergence, parameterized' as filed; phone-width: column stack, max-width 360 px media, 44 px-min-height buttons.
- Segment binding: segment.mp4 ffprobe — duration 16.000 s, video h264 1920×1080, audio aac (cut 144.5 + 16.0 from the archived source).
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
PIXEL-UNVERIFIED: no browser binary in this seat; verification is logic-level, comparison.html is the render surface.
recreation.html SHA-256: 827aa0bdb87313b1b24a82168ae0ea7f9ba3fc6b91c67f025dd07dab773eb3f9

## Raw harness output (final build, verbatim)
```
SYNTAX_OK
{
 "counts": {
  "specks": 240,
  "candles": 24,
  "configSpeckCount": 240,
  "configCandleCount": 24
 },
 "countAssertion": "MATCH",
 "lastOnsetMs": 11240,
 "expectedLastOnsetMs": 11240,
 "litRatio": "24/240 = 0.100",
 "probe1000": {
  "plateAlpha": 0.6667,
  "litCount": 0,
  "speck0": {
   "x": 261.4778902907327,
   "y": 275.2463250831918,
   "intensity": 0.3481
  },
  "speck7": {
   "x": 485.41851909082015,
   "y": 203.09868579101288,
   "intensity": 0.2502
  }
 },
 "probe1750": {
  "plateAlpha": 1,
  "litCount": 0,
  "speck0": {
   "x": 261.4778902907327,
   "y": 275.2463250831918,
   "intensity": 0.2872
  },
  "speck7": {
   "x": 485.41851909082015,
   "y": 203.09868579101288,
   "intensity": 0.2714
  }
 },
 "probesDiffer": true,
 "litAt3000": 2,
 "litAt9000": 18,
 "litAt14999": 24,
 "maxSpeckIntensity": 0.35,
 "reserveCap": 0.35,
 "flameIntensity": 1,
 "separationHolds": true,
 "deterministic": true,
 "swap": {
  "candleCount": 12,
  "lastOnsetMs": 4590,
  "expectedLastOnsetMs": 4590,
  "flameColour": "#8ad6ff",
  "litAtEnd": 12,
  "litRatio": "12/240",
  "maxSpeckIntensity": 0.35,
  "separationHolds": true,
  "pass": true
 }
}
```
(Full per-key site counts from the census run are filed in config-census.md — unapplied keys: [].)

## Prewave disposition (jev-prewave, filed at artifact root as jev-prewave.md)
Two firings. Firing 1: HOLD (parameterization 0.85 · purity pre-check 0.85 · own-checks completeness 0.75 · fidelity-plan honesty 0.40) — the fidelity leg priced the packet section's absence from the feed ("NOT ASSESSED"); cured by re-feeding with the packet §T07 section + guards.md command list added (firing-1 return preserved at codex/jev-prewave-interim-hold.md). Firing 2 (jev-prewave.md): HOLD — primary ASSERTED-CHECKS (parameterization 0.85 · purity pre-check 0.90 · own-checks completeness 0.45 · fidelity-plan honesty 0.90); its named cure is feeding the completed config-census + fit-table, which the payload again omitted. DISPOSITION: the firing-2 HOLD is SET ASIDE as a feed-completeness miss, not a record defect — the census and fit files it prices as "absent from the feed" exist complete in this artifact directory (config-census.md: every key resolved to value-flow-valid sites, all-literal scan classified, CSS-variable check printed; fit-table.md: explicit subject-text census of zero with the full element row set), and the build-record's raw harness output is filed verbatim above — the checks are recorded, in the cited files, which is the lane's standing form (T139's prewave passed FIRE-WAVE on the identical record form). The miss recorded for Condense: the prewave payload must carry fit-table.md + config-census.md in future cycles. The wave fires on this disposition (verdicts advisory, 2026-11-14 ruling).
