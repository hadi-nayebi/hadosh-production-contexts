# item-T244 — Observe + Plan · recreation Cycle 042 Wave 39 · FIRST ATTEMPT (queue #109)
Technique: T244 karaoke word-highlight captions as the transcript device — Packet #14 (@ensan.besham "Hope = Failure (?)"), digest 2026-11-18-ig-dffiipmmac3, digest.md §T244 / Packet #14 T05; catalogue techniques-word-animation.md §T244.
Consumer: DLC assembler word-animation / narration surfaces (the highlight-sweep machinery for word-animation containers).
Precedent: T195 spoken-state highlight sweep (artifact T195-spoken-state-highlight-sweep, PASS 88.6, five lenses 83/86/100/86/88) — construction precedent: CONFIG-driven per-word schedule + pure stateAt + node harness. Boundary (§6.5/§6.6): the caption band IS this technique's subject (as T195/T196); the recreation proves the highlight-sweep effect; production decides lawful adoption.
Prior attempts: none (first attempt). Family context (five-lens first attempts): T195 88.6 · T03 79.2 · T12 75.4 · T132 83.2. Plateau priced in Plan (A2/jev-plan-exit): family stuck lens class is timing; this Plan prices it by ASR-measured line onsets + named per-word allocation (below).

## §1 — Observe

### Segment binding (guards.md command 5, pre-build leg)
Archived source: digest dir `source.mp4` — ffprobe: h264 720×1280, 30 fps, AAC 44.1 kHz, duration 155.617 s, 5,880,806 B.
Technique window (bound): source **74.00–81.58 s** — four consecutive caption chunks while the house/clock diagram holds (evidence-adjacent: ev/066 @ ~66 s, ev/080 @ ~80 s both show the same band mechanic).
Segment cut (Execute): source **73.50–82.10 s** (±0.5 s handles) → segment.mp4, 8.600 s, re-encoded h264+AAC.
ASR line record (asr-segments.json, faster-whisper fa): 
- L1 74.00–75.42 «اون شب زود اومد خونه» (5 words)
- L2 75.50–77.00 «هیچ کس خوشحال نشد» (4 words)
- L3 77.00–79.34 «امید اون دختر مال خودش نبود» (6 words)
- L4 79.48–81.58 «از باباش قرض گرفته بود» (5 words; ASR «قرز» corrected to قرض per digest's frame-verified correction practice)

### Motion census (A10.3) — frames extracted by the builder, viewed firsthand
1 s spacing across the window (run dir census-t244/, copied to artifact census/): f-73.5 df78f3f6… · f-74.5 98996d90… · f-75.5 1643dbb0… · f-76.5 fbf2ad22… · f-77.5 69f64afd… · f-78.5 32ecccc3… · f-79.5 3b022088… · f-80.5 f6bec07a… · f-81.5 32570c11… (full SHA-256 in artifact census listing + build-record). Fine pass at 0.25 s across L4 onset: g-79.75 3f2dfd1c… · g-80.00 ecf0450f… · g-80.25 2191ae46… · g-80.75 0926f053… · g-81.00 7526e816… · g-81.25 d6a2cce7….

### Mechanics + sub-beats (firsthand from census frames + evidence frames)
1. **Fixed bottom band:** the caption line sits at ~86% of frame height, horizontally centred, one line at a time, on the black field below the diagram. No band box/background — text directly on black.
2. **Two-state word colour:** unspoken words render dim grey; spoken words render full white. Pixel probe (PIL, band crop y 0.82–0.92 of frame): f-74.5 bright columns max 224–242 vs dim columns max 71–101; f-77.5 (line complete) all columns 194–201; f-80.5 bright 112–122 at the reading-order head vs dim 43. Dim ≈ 40% of full brightness.
3. **Reading-order sweep (RTL):** the text is Persian, reading order right→left. f-74.5: rightmost two words («اون شب») white, remainder dim. ev/066 (~66 s): right portion white, left dim. g-80.25→f-80.5: the line's reading-order head is white first. The bright region is always a reading-order PREFIX of the line — spoken words stay white; the highlight never jumps or lights a suffix.
4. **Word-granular stepping:** between census instants the bright prefix grows word by word (no letter-level gradient observed at 0.25 s spacing; the current word appears to flip/brighten at its onset — transition shorter than 250 ms, bounded not settled).
5. **Line lifecycle:** a line appears at its speech onset (all dim except the first word brightening), sweeps to fully white at its last word, holds fully-lit briefly (f-77.5: L2 fully white 0.5 s after its ASR end, before L3's chunk dominates), and is replaced by the next line at the next onset. One line owns the band at a time (Owner Cure 2 phase exclusivity applies by analogy).
6. **Diagram independence:** the diagram above animates on its own schedule; the band mechanic is independent of it — the recreation builds the BAND only (diagram is specimen content, not the technique; §8 split: band mechanic first).

### Variables (§1.3 extraction)
Line texts + word segmentation · per-line onset/end · per-word onset allocation · dim colour · spoken (bright) colour · word brighten transition duration · line hold-after-complete · band vertical position · font size/stack/weight · stage aspect (9:16 vertical) · total duration. Every variable becomes a CONFIG key (§2 table).

### Schedule basis (A7)
**segment-anchored** — line onsets/ends sit at their ASR-measured source times, re-based to segment t=0 by CONFIG segmentStartMs (73500). Per-word onsets inside a line are an **allocation**: proportional to word character length across the line's measured interval (ASR carries no word-level timings; the allocation is named here and in CONFIG derivation code, never presented as measured).

### Census-anchor mapping (A10.2)
Segment-relative ms = source ms − 73500. Census states (segment-relative):
| CP | instant (rel ms) | census state (firsthand) | prescribed build state |
|---|---|---|---|
| CP0 | 250 (f-73.5) | preceding caption (L0) already visible, swept | L0 active with spoken prefix (AMENDED in §2b — original 'no line active' was WRONG, codex-observe finding) |
| CP1 | 1000 (f-74.5) | L1 bright prefix = 2 of 5 words | stateAt: L1 active, words 0–1 spoken (fill 1), word 2+ dim |
| CP2 | 2000 (f-75.5) | L2 at onset region | L2 active (L1 gone) |
| CP3 | 3000 (f-76.5) | L2 mid-sweep | L2 bright prefix ≥1, <full |
| CP4 | 4000 (f-77.5) | L2 fully white (hold) | L2 all words fill 1 OR L3 at onset — build prints L2 complete during holdMs |
| CP5 | 5000 (f-78.5) | L3 mid-sweep | L3 bright prefix ≥1, <full |
| CP6 | 6000 (f-79.5) | L3 complete / L4 onset region | L3 all fill 1 or L4 active |
| CP7 | 7000 (f-80.5) | L4 («قرض گرفته بود» chunk face) bright head, rest dim | L4 bright prefix ≥1, <full |
| CP8 | 8000 (f-81.5) | L4 near-complete | L4 bright prefix ≥4 of 5 |
Departure table (AMENDED in §2b): (i) L2 displayEnd 77550 is handoff-bracketed (77.5, 77.6], not the ASR end 77000 — CP4's expression is lines[2].displayEndMs − segmentStartMs − 50; no holdAfterCompleteMs key exists in the final CONFIG (the 340 ms figure was superseded by displayEndMs). (ii) L3 onset 78000 is visual-bracketed (band empty at 77.60, mid-sweep at 78.5), departing from the ASR onset 77000. (iii) Specimen tail re-chunking vs single ASR-anchored L4 — retained, named in §2b. (iv) Per-word onsets length-allocated.

## §2 — Plan

### Parameter table (every variable = CONFIG key; specimen values as defaults)
| CONFIG key | default | subject |
|---|---|---|
| segmentStartMs | 73500 | re-base authority |
| totalMs | 8600 | segment duration |
| lines[].text / lines[].words[] | 4 Persian lines above | subject text |
| lines[].onsetMs / endMs | source-absolute ASR times | line schedule |
| wordAllocMode | "length" | per-word onset allocation |
| dimColor | #6b6b6b | unspoken word colour (~40% probe) |
| spokenColor | #ffffff | spoken word colour |
| bgColor | #000000 | stage field |
| brightenMs | 120 | current-word dim→white transition (bounded <250) |
| holdAfterCompleteMs | 340 | fully-lit hold after last word |
| bandTopFraction | 0.845 | band vertical position |
| fontPx | 44 | caption size at 720-wide stage |
| fontStack | "Tahoma, Arial, sans-serif" | Persian-capable stack |
| stageW / stageH | 720 / 1280 | vertical stage |
| wordSpaceEm | 0.28 | inter-word gap |

### Construction choice
**DOM spans + pure stateAt(CONFIG,t)** (T195 precedent): one span per word, colour = lerp(dim, spoken, fill) where fill comes from stateAt; RTL via dir="rtl" + reading-order word array. Rejected: canvas particle/text sampling (A1 typography precedent is for particle formation — this technique has no formation, only colour state; canvas would add nothing and cost readability) · CSS keyframes (timing not CONFIG-derivable; swap test could not move evaluation instants) · traced frame sequence (refusal-class, §6.1).

### Swap values (Verify design)
Words: lines replaced with an English 3-line set (different word counts) · timing: brightenMs 120→300 AND L2 onset shifted via lines[1].onsetMs +400 · palette: spokenColor #ffffff→#ffd23f, dimColor #6b6b6b→#3d5a80. A CONFIG timing swap must move A11 evaluation instants (harness derives instants from CONFIG expressions).

### Failure points (priced)
Phrase overlap (two lines owning the band — excluded by stateAt single-active-line rule, harness-asserted) · RTL order inversion (bright suffix instead of prefix — harness asserts prefix property at every CP) · allocation presented as measurement (named in §1 + CONFIG comments) · fitting limits (longest line L3 at 360 px stage — A6 PIL measured fit) · render-proof limitation (PIXEL-UNVERIFIED: no browser binary; comparison.html is the render surface).

### Execute checklist
1. Cut segment.mp4 (73.50–82.10, h264+AAC, faststart) + ffprobe binding. 2. Build recreation.html (CONFIG at top, stateAt pure, no specimen media). 3. Build comparison.html (side-by-side, one sync control set, labels, phone stacking). 4. harness-t244.js + raw output in build-record from first draft (A9.4). 5. A6 legs: fit-table.md (PIL rendered measurement, named stand-in font) + config-census.md. 6. A13 RECEIPT INDEX reconciled in build-record.

### Verify checklist
Swap test (values above) · purity grep `segment\.mp4|source\.mp4|<video|<img|\.jpg|\.mp4|DffiIpmMAC3` → 0 · node --check on extracted script + harness · A11 assertions CP0–CP8 + prefix property + swap-moved instants · jev-prewave (payload per its context contract incl. A6 legs + census-anchor mapping) · five-lens Codex wave on FIRE-WAVE · scores.md arithmetic recomputed (guards.md cmd 4).

## §2b — Phase A gate dispositions (all four fired, returns filed verbatim in this run dir; consumed BEFORE any build script, A9.2)
- **codex-observe** (item-T244-codex-observe-return.md): findings APPLIED — (1) family first-attempt table corrected in kind: T03 A1 79.2 · T12 A1 75.4 · T132 A1 83.2 · T195 A1 88.6 stand as first attempts; later attempts (T12 A2 87.0, T132 A2 90.8) are NOT first attempts and are not read as such. (2) CP0 was WRONG: f-73.5 shows the preceding caption already visible — cured by CONFIG line L0 (carry-in line, onset 68040, displayEnd 73990) in the amendment below. (3) L2/L3 visual handoff is NOT at the ASR boundary — cured by the handoff census + displayEndMs amendment. (4) L4's visible chunking departs from the ASR segment — departure tabled in the amendment.
- **jev-observe-exit** (item-T244-jev-observe-exit-return.md): RETURN-TO-OBSERVE, primary MECHANICS-UNSEEN — APPLIED via the handoff census (0.1–0.3 s spacing around 73.9/77.x/79.4/80.x, frames h-*.jpg in census/, viewed firsthand): playback record now stands — L2 fully white at 77.30, still present 77.5, band EMPTY at 77.60 (blank inter-line gap exists), a combined line standing all-DIM at 80.40 (all-dim preview state exists), L4 tail face «قرض گرفته بود» at 80.5. Also APPLIED: parameter table gains `dir` + `fontWeight` keys (amendment); A1 §2 scope judgment stated here (A9.5): A1's runtime text sampling governs LETTERFORM construction for particle typography; T244 renders runtime DOM words and changes only their colour state — the configured text supplies the words directly, no letterform sampling is in this mechanic's scope, and T195's DOM-span form is the operative precedent.
- **codex-plan-review** (item-T244-codex-plan-review-return.md): APPLIED — (1) predicted minimum lens = timing, priced: the cure is the handoff census + displayEndMs + a CONFIG-derived assertion proving a timing swap moves the brighten transition (harness SWEEP-MOVE, amendment). (2) Remaining departures tabled explicitly (amendment), not silently absorbed.
- **jev-plan-exit** (item-T244-jev-plan-exit-return.md): APPLIED — the prefix question is SETTLED from playback, not simplified: at f-74.5 two words stand white simultaneously and at g-80.25/h-77.30 completed lines stand fully white — already-spoken words STAY white; the digest's "the rest of the line sits dimmed" reads as the UNSPOKEN rest. The cumulative-prefix model is the specimen's, no simplification retained. Diagram omission stands scoped (band-only, §8).

### Plan amendment (post-gate, pre-build — the T195 amendment form)
A. CONFIG gains: lines[0] = L0 carry-in («پدرش که سه سال شبها اضافه کاری میموند» onsetMs 68040, speechEndMs 73660, displayEndMs 73990); every line gains displayEndMs (L1 75420→display 75600 · L2 speechEnd 77000, displayEnd 77550 per handoff bracket (77.5, 77.6] · L3 79340→79600 · L4 81580→81800); `previewMs` 200 (line appears all-dim previewMs before its first word onset — the 80.40 all-dim state); `dir` "rtl"; `fontWeight` 600.
B. CP0 REVISED: at rel 0–499 the active line is L0 with a spoken prefix (not an empty band). CP4 REVISED: L2 complete + holding at rel 4000 (displayEnd rel 4050). CP7 stands as prefix-property only.
C. Departure table (remaining, priced): (i) specimen tail re-chunking (combined dim line ~80.4 + 3-word face at 80.5) vs build's single ASR-anchored L4 — retained, named; (ii) per-word onsets remain length-allocated (ASR has no word timings); (iii) brighten transition <250 ms bounded, CONFIG default 120.
D. Harness gains SWEEP-MOVE: a CONFIG timing swap (brightenMs 120→360 + L2 onset +400) must move the evaluated transition midpoint instant, printed as a CONFIG expression + evaluated values both runs.
