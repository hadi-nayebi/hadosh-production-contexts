# jev-prewave — T122 headline-card grammar · Cycle 020 Wave 17 · attempt 1

Verdict: **FIRE-WAVE**

## Dimensions

- **parameterization: 0.90** — The recreation is genuinely CONFIG-driven, not hard-coded with a config costume. The CONFIG block in recreation.html names: stage {w:360, h:203}, cycleMs:14000, grid:{cellPx:24}, enterMs:450, headline:{top:18, fontPx:20, chipRadius:6}, support:{top:86}, insert:{w:250, h:62, fontPx:11, pad:10}, check:{w:210, rowH:24, gap:6, fontPx:12, offsets:[0,600,1200], warnAt:1800, warnFontPx:12}, font, atMs:[0,4000,7000,11000], a full palette (field, grid, ink, blue, chipBg, chipInk, card, cardEdge, warnBg, warnInk), and 4 beats whose headline span arrays and support kinds (insertCard / none / checklist / none) carry all headline and support content. The runtime code derives stage size, grid size, background, typography, card and checklist geometry, beat switching, and checklist reveal timing from these CONFIG values; no headline text, support label, checklist item, or warning text is hard-coded in the construction logic. Minor stylesheet constants (e.g. padding, secondary border radii) remain outside CONFIG, but they carry no content, timing, palette, or packet variable, so they do not reduce this to a decorative config. Ranges are sane for the 360×203 stage.

- **purity pre-check: 0.95** — The construction route describes generation from parameters only: the build record states "code only — recreation loads no external/generated assets," and the artifact builds its DOM from CONFIG beats at runtime. No tracing, embedding, or media-reference step is described or hidden in the prose. This is corroborated by the recorded purity grep over recreation.html for `segment\.mp4|source\.mp4|<video|<img|url\(|l2_pKB1EbMQ|t[0-9]+\.jpg` returning 0 hits, PASS. This is a pre-check on the paperwork only; it does not pre-judge the wave's own purity findings.

- **own-checks completeness: 0.90** — The mechanical checks are recorded with specific inputs and results, not merely asserted. Swap test (EXACT §2 values): words beat1 headline → "We build it piece by piece" (spans: "We build it " + chip "piece by piece") PASS in scratch copy; timing atMs ×(2200/3500) → [0,2514,4400,6914] PASS; palette blue #3b82f6 → #e879a0 PASS (old blue absent in scratch). Purity grep: pattern recorded, 0 hits, PASS. Syntax: node --check on extracted inline JS, PASS. Comparison check recorded with its concrete criteria (ORIGINAL label "ORIGINAL — Grow With Kaz @ 0:18–0:32", RECREATION label, one Play/Pause/Restart control set driving video + recreation seek via window.__T122.seek, vertical stacking max-width 380px), PASS at logic level. A6 legs recorded: fit-table.md HITs 0 (warning 10→12px cured pre-wave); config-census.md HITs 0. The record also discloses "PIXEL-UNVERIFIED: no browser binary; verification logic-level" rather than claiming a visual pass it did not perform. No ASSERTED-CHECKS defect: the named checks carry their values and outcomes in the record.

- **fidelity-plan honesty: 0.90** — The record's faithfulness trace states which packet mechanics the build implements: packet mechanics → CONFIG beats (4 beats exactly as the RUN §1b census: chip insert beat, blue beat, chip checklist beat, chip closing beat); variables (§1.3) → headline lines/spans/styles, support list, insert presence, beat durations (atMs), palette, grid density (grid.cellPx). Against the T122 packet facts in the record — dark-navy grid ground, headline top white bold, operative spans blue or white chip, support zone below (insertCard / none / checklist accumulating + warning), beats atMs [0,4000,7000,11000], segment-anchored — every named mechanic is accounted for in the CONFIG beats and support kinds, including checklist accumulation via check.offsets [0,600,1200] and warnAt 1800, with the compressed-beat fit explicitly worked (offsets scale with atMs in the swap harness: reveals at 0/377/754 + warning 1131 < 2514). No packet mechanic in the record is silently absent, and no deferral is left unnamed: the one open limitation, pixel verification, is printed in the record as PIXEL-UNVERIFIED instead of being passed over.

## Floor check

All four dimensions are ≥ 0.5. No ASSERTED-CHECKS condition applies, because the swap test, purity grep, and syntax results are recorded with their specific values in the build record.

## Rejection taxonomy

Primary rejection taxonomy: **none** — verdict is FIRE-WAVE, no HOLD classification applies.

## Disposition note

This verdict is advisory per the guard: it prices the build record, the CONFIG block, and the T122 packet facts in the record only. A build can pass this call and still fail its wave; the wave may now fire on T122 attempt 1.
