# Item T196 — Observe + Plan · Cycle 034 Wave 31 · PHASE A ONLY (A9.2: no build script written)

- **Item:** queue #92 · T196 — pre-lighting: the whole line visible before it is spoken · Packet #11 ("Caption with Intention", FCB Chicago) technique P11-T07, catalogue window 38–67 s (demonstration sections throughout).
- **Artifact dir:** `hidden_files/study/recreations/T196-pre-lighting/` (+ `codex/`).
- **State:** Observe + Plan complete; both Codex gate returns filed and consumed (§2b below). Execute does NOT open in this task (Phase A only, per charge + A9.2 gate-order).
- **Fleet law (stated per charge):** no captions/subtitles in the build — the line IS the technique subject (INSTRUCTION §3.2/§6.5). No caption plate, no subtitle track; the demonstration cards are the subject matter itself.

## §1 Observe

### Mechanics (the trick)
A visibility-state system. Every word of a demonstration card is **present and visible in the UNSPOKEN state** (white, full opacity, baseline size/weight) **from the card's first frame**; at each word's spoken onset **only its state changes** (here white → spoken yellow). Nothing appears at onset; no word is created, moved, or resized at onset. Anticipation is a visibility state, not a reveal — the reader can pre-read the whole line while the state change still marks the voice's position. The onset state changes are the motion (TECHNIQUES.md register, line 139).

### The T195 distinction (required, stated plainly)
Sibling T195 (same packet, this same wave, no scores yet) is the sweep's **color-state flip**: its subject is the change itself — white→yellow per word at spoken onset, sweeping at letter scale. **T196 is the visibility contract**: its subject is what is true *before* any change — the whole line present from the start in its unspoken state; only state changes at onset. A build that renders words progressively but flips them on time could satisfy T195 and would FAIL T196. T196's scored invariant: word-node count, visibility, and geometry are constant across every onset; only state classes change. The recreation's assertion suite (A11 map below) tests presence, not flip color.

### Chosen demonstration segment (one line/window, with reason)
- **Window: source 47.76–58.32 s (10.56 s)** — the "Intonation" demonstration, retained as a **transcript-based cut** (codex-observe gap disposition). It is the only ~10–14 s span inside 38–67 s that contains a complete pre-lit sentence whose final card enters **complete and white** (52.792 s) — the contract's strongest, frame-verified proof — plus the contrasting card-1 case (speech precedes the card). The 40.18–47.14 sync line was rejected as the segment: its clean window is only ~8.2 s header-to-header, and it is T195's home line (choosing it would blur the distinction this item exists to prove). The 58.32–66.18 color lines were rejected: green speaker-color (T09's device) confounds the unspoken-white state.
- **Demonstration line (one sentence, shown by the film as three successive cards):** "This system brings in varying / types sizes, weights and animation, / so you can feel when my voice gets louder or softer" — 21 words (film wording; ASR reads "The system…", the film card reads "This system…" — film wording governs).

### Sub-beats (visual onsets measured by census + codex-observe decoding; ASR onsets from transcript.json)
| Beat | Source s | Content / state |
|---|---|---|
| Header card | visual 47.625 (ASR 47.76) | "Intonation" + bars icon — section ornament, EXCLUDED from build (§8), present in original segment only |
| Card 1 onset | visual 48.792 (ASR seg 48.24) | "This system brings in varying" — all 5 words present; word 1 ("This") ALREADY yellow at first frame (speech precedes card by ~552 ms) |
| Card 2 onset | visual UNMEASURED (≈ASR 49.78) | "types sizes, weights and animation," — bracketed by pf050 (49 s, card 1) and pf051 (50 s, card 2 up) |
| Card 3 onset | visual 52.792 (ASR 52.82) | "so you can feel when my voice gets louder or softer" — COMPLETE AND WHITE at entry; first flip "so" by t052.9 |
| Card 3 mid | ~55.0 (ev/t055) | prefix yellow through "gets"; "louder or softer" still white + unscaled |
| Card 3 exit | bracket 56.9–57.167 | card survives at t056.9; next header ("Character Identification") first appears 57.167 (ASR 56.80–58.32 is its narration span) |

Per-word ASR onsets (source s): This 48.24 · system 48.92 · brings 49.14 · in 49.38 · varying 49.54 · types 49.78 · sizes 50.08 · weights 50.76 · and 51.98 · animation, 52.14 · so 52.82 · you 52.92 · can 53.04 · feel 53.16 · when 53.56 · my 53.90 · voice 54.10 · gets 54.40 · louder 54.64 · or 55.76 · softer. 56.40 · speech end 56.80.

### Motion census (A10.3) — findings per instant
Census dir: `runs/2026-11-18-cycle-034-wave-31/census/T196/` — packet 1 fps frames hardlinked as pf039–pf067 (pfNNN ≈ source second NNN−1; mapping verified by hash: pf045 = ev/t044, pf063 = ev/t062) + seat ffmpeg frames t040.0/t044.0/t047.8/t049.0/t052.0/t052.9/t053.6/t056.9/t057.6/t058.4/t060.0/t066.0. Full SHA-256 table: `census/T196/census-sha256.txt` (also reproduced at the foot of this record). 11 fractional extractions landed 0-byte under the platform write fault and are NOT cited as evidence.
- **t=line-start, card 3 (52.792):** whole card present, ALL words in unspoken white — CONFIRMED by codex-observe's direct decoding (complete white at 52.792) + seat frame t052.9 (only "so" flipped 0.1 s later). **The contract holds at line start.**
- **t=line-start, card 1 (48.792):** whole card present; word 1 already spoken-state (negative pre-light lead, −552 ms vs ASR) — presence holds, all-white entry does NOT (source fact, preserved in Plan).
- **Unspoken-state rendering:** white (#f5f5f5-class), full opacity, same size/weight as spoken state; no dimming, no placeholder boxes (census pf050, t052.9, ev/t055 viewed firsthand).
- **State change at onset:** color only in this isolation (yellow prefix grows word by word; ev/t044 mid-word letter-scale sweep belongs to T195's flip mechanics); card 3's "louder" is still white at source 55.0 despite ASR onset 54.64 — **visual flips lag ASR by up to ~0.4 s on card 3** (per-word visual onset series UNMEASURED; priced in Plan as the timing exposure).
- **Holds vs motion:** motion exists ONLY at card entries and word onsets; all other instants are holds (pf064–pf067 black/header transitions; t056.9→t057.6 card exit bracket).
- Spot frames across 38–67 s justify the window: t040.0/t044.0 (sync line mid-flip — T195's line), t047.8 (header flipping its first letter — headers are themselves pre-lit single words), t058.4/t060.0/pf063 (green color section — pre-light holds there too, but under T09's device), t066.0 (combination card tail).

### Variables (§1.3)
Line text + word segmentation · card segmentation + card count · per-word onsets · card visual onsets · unspoken/spoken colors · background · font family/size/wrap · total window + holds · spoken-state persistence (flips persist vs reset) · timing scale. (Size/weight ramp and layout guides are variables of SIBLING techniques T197/film-UI, excluded by §8 split — named, not silently dropped.)

### Consumer
Academy explainer production — word-animation surfaces (narration and dialogue/Q&A lines in shorts): a line the viewer can pre-read whole, with the voice's position marked by state only. Secondary: multi-speaker dialogue surfaces via the same presence contract under speaker colors (T09's layer, not this build).

### Registration limits (carried, not hidden)
Source bound to a trade-press re-upload (YouTube xmo3_URTIlg, ReelChicago Reel360, 2025-05-02), not the entrant's channel; **version fidelity UNVERIFIED**; automatic real-time operation UNVERIFIED (packet P-A1). All mechanics claims above are speech-associated behaviors demonstrated in this upload.

## §2 Plan (REVISED per codex-plan-review — dispositions in §2b)

**Schedule basis (A7): segment-anchored.** Build timeline = source time − 47.76 s. Card onsets anchored to measured VISUAL onsets; word flips anchored to ASR onsets (visual-lag exposure priced). Comparison keeps source trim + handles separate from the build timeline.

### Census-anchor mapping (A10.2) — build ms = (source s − 47.76) × 1000
| Phase | Build interval (half-open) | Anchor (source) | Prescribed state |
|---|---|---|---|
| P0 header-hold (excluded header; black stage) | [0, 1032) | header visual 47.625–48.792 | stage empty — the excluded interval carries an explicit phase state (plan-review cure 1) |
| Card 1 | [1032, 2020) | visual onset 48.792 | at entry: 5/5 spans present, word 1 SPOKEN (onset 480 < entry), words 2–5 unspoken; flips at 1160/1380/1620/1780 |
| Card 2 | [2020, 5032) | ASR-derived 49.78 (departure D2) | at entry: 5/5 present, all unspoken (word-1 onset == entry 2020 → tie rule: flip applies for t > onsetMs, so unspoken AT the entry instant); flips at 2020+/2320/3000/4220/4380 — all inside the interval ✓ |
| Card 3 | [5032, 10560) | visual onset 52.792 | at entry: 11/11 present, ALL UNSPOKEN (first flip 5060 — a 28 ms all-white interval, asserted at the exact timestamp + painted-frame check, plan-review cure 2); flips 5060…8640; fully spoken from 8640 |
| P4 final hold | [8640, 10560) within card 3 | source card survival to ≥56.9 | fully spoken hold, 1920 ms from last flip (NOT 1520 — plan-review cure 1: measured from last flip, not ASR line end); departure D4 (extension past next-header visual onset) recorded below |

### Departure table (A10.2)
| # | Departure | Reason / evidence |
|---|---|---|
| D1 | Card 1 word 1 prescribed SPOKEN at entry (no all-white instant for card 1) | Source fact: speech (ASR 48.24) precedes the card (visual 48.792) by ~552 ms; codex-observe finding 2. Inventing an all-white card 1 would falsify the specimen. |
| D2 | Card 2 onset anchored to ASR 49.78, not a measured visual onset | No frame-level extraction at 49.7–49.8 survived the write fault; pf050/pf051 bracket it. Named cure if timing lens prices it: frame-measure card 2's onset in Phase B Observe-refresh. |
| D3 | Word flips anchored to ASR onsets; census shows card-3 visual flips lag ASR (e.g. "louder" white at 55.0 vs ASR 54.64) | Per-word visual onset series UNMEASURED in the packet and this census. ASR is the only complete onset series; the lag is the priced timing exposure (predicted minimum lens). |
| D4 | Card 3 held to build 10560 (source 58.32) although the source's next header appears at 57.167 (build 9407) — extension ≥1153 ms | The retained transcript-based segment ends at 58.32 (comparison sync requires matched duration); the hold is the source card's own fully-spoken state, extended. Intentional, priced here — not a silent re-base (A7). |
| D5 | Size/weight held constant: T197's ramp excluded — incl. "sizes" standing larger/bolder on card 2 (pf051) and louder/softer states on card 3 | §8 split: T196 isolates the visibility contract; size/weight emphasis is T197 (queue #93), a separate owed item. The comparison face carries this departure on its label. |
| D6 | Film's cyan layout guides + section headers excluded | Film UI frame / section ornament, not this technique (plan-review §8 verdict concurs). |
| D7 | Font: system sans stack substitutes Roboto Flex | The film's stated variable font is not locally available; geometry/legibility contract is font-independent at this isolation. |

### Parameter table (CONFIG — single content source: `cards[].words[]`; engine derives everything else)
| Key | Specimen default | Notes |
|---|---|---|
| `windowStartS` | 47.76 | source trim for comparison only; build timeline is local |
| `totalMs` | 10560 | DERIVED by engine from phases; under swap, derived from swapped CONFIG |
| `timingScale` | 1.0 | stretches the WHOLE local timeline incl. totalMs + checkpoints (plan-review cure 3: scaling onsets alone would push the last flip to 10800 > window) |
| `cards[]` | 3 cards: id, `onsetMs` (1032/2020/5032), `words[]` {w, onsetMs} | word onsets build ms: C1 480/1160/1380/1620/1780 · C2 2020/2320/3000/4220/4380 · C3 5060/5160/5280/5400/5800/6140/6340/6640/6880/8000/8640. Film wording ("This…", "types…") |
| `unspoken` | {color #f5f5f5, opacity 1, weight 400, scale 1} | color is the SOLE state-dependent property; shared geometry across states (cure 2) |
| `spoken` | {color #ffe600, opacity 1, weight 400, scale 1} | palette swap key = `spoken.color` |
| `contrastFloor` | both state colors ≥ 7:1 vs bg (WCAG ratio computed in harness); pair-difference check (ΔE or luminance+ hue distance) asserted for default AND swapped palettes | plan-review cure 2 — hex difference alone does not discharge the swap |
| `bg` | #000000 | |
| `font` | {family: system sans stack, minSizePx 20, maxSizePx 64, lineHeight 1.25, wrap: "wrap-in-box", overflow: "shrink-to-min then FAIL the fit check — never clip, never hide"} | fit contract (cure 3): stage box bounds in % of stage; widest card fitted at build start; a line that cannot fit at minSizePx fails the fit leg openly |
| presence invariant | NOT a config knob (plan-review cure 3: `preLightLeadMs` REMOVED) | whole-card presence at card onset is an invariant of the construction, not a variable |

### Construction choice (revised)
**DOM word spans + one rAF clock + one stage slot.** ALL cards' spans are **prebuilt** at load (hidden); the stage slot shows exactly one card per half-open interval with **atomic handoff** (at a boundary instant: incoming card complete + visible, outgoing spans zero visible — asserted). State is a pure function of the timestamp — `state(word, t) = spoken iff word.onsetMs < t` (tie rule explicit) — so playback, seek, and restart derive identical states from the same t (cure 2). Entry states are computed from onsets, never stored. Stage box size is reserved before first paint (T03 readability cure: no layout shift). Rejected alternatives: typing/textContent append (T03's construction — IS the reveal T196 negates) · per-word CSS keyframes (timing in CSS, not CONFIG — A9.6 failure) · canvas + runtime text sampling (A1.2 precedent — lawful for formation techniques; here no formation exists, only state, so it adds a purity-priced surface for zero mechanic) · `<video>`/`<img>` of specimen (refusal class §6.1).

### Failure-point evaluation (priced from this job's record)
- **Convergent freeze (T15 class):** structurally impossible — no particle pool. The live analog is **dead time (T03 timing 55)**: cured by explicit phase states for every interval (P0 header-hold named; P4 hold measured from last flip at 1920 ms and departed openly as D4, not hidden).
- **Intensity collapse (A5 cure 1 analog):** no background field; the analog is state separation — discharged by shared geometry + full opacity + color-only difference + a computed contrast floor for BOTH colors and a pair-difference check, exercised on the palette swap (cure 2).
- **Phrase overlap (A5 cure 2 analog):** one stage slot + half-open intervals + atomic handoff, enforced by the phase machine; each card's flips validated to fit inside its interval at build time (count assertion, A9.3: source words 21 = built words 5+5+11 = 21 ✓).
- **Fitting limits:** card 3 is 11 words; fit contract above; long-line/multilingual overflow fails the fit leg openly rather than clipping (T03 cure list).
- **Render-proof limitation:** no browser binary in this seat (fleet-measured) — verification is source/logic-level + comparison surface, printed PIXEL-UNVERIFIED (T132 precedent), incl. CP1's painted-frame caveat.

### Plateau priced in Plan (A2)
Family first attempts (five lenses, codex-observe recomputed): T03 a1 **79.2 FAIL** (min timing 55) → a3 89.0 PASS; T132 a1 **83.2 FAIL** → a2 90.8 PASS. **Predicted minimum: TIMING** — exposures: D2 (card-2 inferred boundary), D3 (ASR-vs-visual flip lag), D4 (hold extension), comparison clock mapping. Secondary: REUSABILITY (fit + CONFIG-only swaps). Bar arithmetic priced honestly (plan-review cure 4): at timing 70 the other four lenses must average 88.75 to reach the 425-point pass total — so the earlier 85–90 forecast is WITHDRAWN as unsupported; the defensible forecast is **conditional**: PASS is plausible only if timing lands ≥ ~78 after the revised anchors, which the wave — not this Plan — decides.

### Verification plan
- **Swap test:** different words (3 new cards, different word counts — expectations derived from card ids/lengths/onsets, no harness edits) · one timing (`timingScale` 1.25 — whole timeline incl. totalMs + assertion instants) · one palette (`spoken.color` #ffe600 → #00e676, with contrast-floor + pair-difference checks re-run). Technique must still read as presence-then-state-change.
- **Purity:** greps on recreation.html — `segment.mp4|source.mp4|<video|<img>|.jpg|.png` → 0 hits; asset inventory = code only.
- **Comparison sync:** original segment (47.76–58.32, ±0.5 s handles kept separate) vs live recreation; ONE shared control set; recreation time derived from the video's currentTime via the printed mapping t_build = (t_video − windowStartS) × 1000 × timingScale; seek + restart derive state from t (no stored state); phone-width stacking, controls reachable.
- **A6 legs** (fit-table + config-census) on the final build pre-wave · **jev-prewave** · **five-lens wave** (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.

### Census-checkpoint → assertion map (A11; every instant is a CONFIG expression)
| Checkpoint | CONFIG instant | Assertion |
|---|---|---|
| CP1 — **t=line-start, card 3: all words present in unspoken state** | t = `cards[2].onsetMs` (5032) | active card = card 3; 11/11 spans exist, visible, unspoken; zero outgoing spans visible. ALSO painted-frame check: during continuous playback, at least one painted frame in [5032, 5060) shows the all-white card (28 ms window — a dropped frame or coarse media clock can skip it; a miss here is recorded, not smoothed) |
| CP2 — card 1 entry | t = `cards[0].onsetMs` (1032) | 5/5 present; word 1 spoken (onset < entry), words 2–5 unspoken; stage was empty before (P0) |
| CP3a — "gets" flip (schedule) | t = `cards[2].words[7].onsetMs` (6640) | prefix through "gets" spoken at t+ε; "louder/or/softer" present + unspoken |
| CP3b — census state at source 55.0 (ev/t055) | census checkpoint, not a schedule instant | prefix through "gets" spoken; "louder or softer" white + unscaled — reconciled against CP3a as the D3 lag evidence (ASR 54.64 vs visual >55.0), priced individually per plan-review cure 2 |
| CP4 — interior-flip stability | every word onset ±1 frame, per active card | active card's CONFIG-derived span count constant (5/5/11 by card), node identities unchanged, geometry stable; NO node created at any onset (a whole-inventory 21-node check proves prebuilding only and is NOT this assertion) |
| CP5a — last flip | t = `cards[2].words[10].onsetMs` (8640) | all 11 active spans spoken |
| CP5b — last visible | t = `totalMs` (10560) | all 11 active spans spoken; card 3 still the active card (D4 hold) |
| Handoff checks | t = `cards[1].onsetMs`, `cards[2].onsetMs`; plus a seek that skips a boundary | incoming complete + visible; outgoing zero visible; seek-derived state == playback-derived state at same t |
Under any CONFIG swap, every instant above re-derives from the swapped CONFIG (timingScale moves the instants; a word-count swap changes the counts).

### Execute checklist (Phase B — NOT run in this task)
1. Cut segment.mp4 from source.mp4 at 47.76–58.32 (±0.5 s handles, re-encoded) into the artifact dir — ORIGINAL evidence only.
2. Build recreation.html: CONFIG per the parameter table (single content source `cards[].words[]`), prebuilt spans, one stage slot, timestamp-derived state, reserved stage box, fit contract enforced.
3. Count assertion (A9.3): source words 21 vs built words 21 printed in build-record; halt on mismatch.
4. Build comparison.html: labeled sides, one shared control set, printed time mapping, phone stacking.
5. Own checks with RAW output filed (A9.4): swap test, purity greps, A11 assertions at CONFIG instants, node-census across onsets.
6. A6 legs (fit-table.md + config-census.md) → jev-prewave → five-lens Codex wave → scores.md (arithmetic shown; PASS = avg ≥85 AND min ≥70).

### Verify checklist (Phase B)
Swap values recorded + result · purity grep raw output (0 hits) · comparison both sides play from shared controls, durations matched, labels carry D5 · A11 map complete with evaluated results (any checkpoint lacking a mapping or using hardcoded instants = ASSERTED-CHECKS at prewave) · five lens returns filed verbatim before the verdict is computed · tier hand-off filed to style-library board.

## §2b Gate returns + dispositions
- **codex-observe** (artifact `codex/codex-observe.md`): attempt 1 = NOT-CONFIRMED, platform failure (bubblewrap tool-host panic; filed verbatim at `codex/codex-observe-attempt1-platform-failure.md`) — re-fired with `-s read-only`, stdout capture (shell redirect is write-fault-poisoned in this seat). Re-fire = **CONFIRMED-WITH-GAPS**. Dispositions: ALL APPLIED — three-card structure adopted; seat's "card 1 clipped at 49 s" claim withdrawn (guides ≠ clipping; lettering fits); window relabeled transcript-based with visual onsets recorded separately; card-1 negative lead recorded as source fact (D1); baseline supersession confirmed (T03 a1 79.2 is historical; T03 RECREATED at 89.0, T132 at 90.8 — arithmetic recomputed by the reviewer). Its CANNOT-READ note (item record / RUN.md absent at firing time) is expected: this record is the §2 product written after the return, per the wave's per-item form.
- **codex-plan-review** (artifact `codex/codex-plan-review.md`): **REVISE before Execute**. Dispositions: ALL FIVE GROUPS APPLIED in the Plan above — (1) phase states for excluded intervals + hold re-measured from last flip (1920 ms) + D4 extension recorded; (2) color-only state property + contrast floor + pair-difference check · one stage slot, prebuilt spans, timestamp-derived state, explicit tie rule · assertions rebuilt per-card (CP4/CP5 corrected; CP1 28 ms painted-frame check added; CP3 split into schedule vs census checkpoints); (3) `preLightLeadMs` removed as a knob · `timingScale` stretches the whole timeline · fit contract with bounds/min/overflow policy · swap expectations derived from CONFIG; (4) forecast withdrawn → conditional, timing priced as primary minimum with the 425-point arithmetic; (5) §8 scope CONFIRMED sufficient (three cards; headers/guides out) — fixed-size departures recorded incl. "sizes" (D5). No disposition is set aside; Execute (Phase B) opens only on this revised Plan.

## Census SHA-256 (full table; also `census/T196/census-sha256.txt`)
pf039 0d02a01ac9a8d2bcdcf7b68507836e8cbb3171b089bb9e1be155a267490f3cd8 · pf040 caae93b05b91a6e5a7649a0368963b4c98614e1c90b65cde960eeeb5d4e9cd10 · pf041 780c44b2811c1d1209742de1f6f00b536d4603d6287d8917f9bc7d40f82d64a0 · pf042 21acf32d5f34e9fe5942dd59973dff6d5732169722663a1748a07cd43d26e08a · pf043 237bd23f078292b2d0e5b9296b82d99d43780893faa1c009c51fd0dfc895ef69 · pf044 1e696f96ff9b3a7bfd2756cc5275dc040c0f57442673d327ba12d8ed22491e70 · pf045 8fe5b44cc55b32a2cfa74ad028ce80aeb82144f5e42fd671607784c831fadcca · pf046 a8b97c3f5f144f909c2cd3ac0dc538870a0069c80240847ced0748c0111f3603 · pf047 09132ce4c278c3d112fbd26ec9bc0dfde1edbd28f80dce5d63b7eb0cffc840a4 · pf048 51515b9b410bf48f6e460dac01b08a7983416cf9aec49d566c19030347ba0e28 · pf049 4796f24580b037f4900b4b41a01ed2dc6a2aed02e0eef0f0cb1b871964b3233a · pf050 e475e04f9a69621178b07200496daea97944526702f345485d2312e9aeeca07d · pf051 48b656f16cb2df64e9bee5b168cbc76b24e9cbd920f470add2d7ecf82bf04efa · pf052 cef5260f68a0e42fb9efd16bacdd504957a8a0f13407812048259ec4ef807c2d · pf053 c7c568f612a19f6aa1bcdbfd205120f0a15e2e96cc629c9afe85a257e07edbd3 · pf054 ca8c845ab06a846fa5418567fd632aecea0bfae389b53f31fc96e0cf28328e73 · pf055 5b5365ba5cba4ab57e375a4825d0783f794882dc2fc1073f3413a3e5697e2b06 · pf056 1b2b48e7ef5a4f20a1db29c3d7e3ceabfe471235ad3d4ae68f1bea8f960ea592 · pf057 8850ccdd2321bd3270eb4b2712c99be7a85eaec3b15ac5cb9250da1a9f5b5035 · pf058 691169ed3586afbd89c49a18037099d76b94159bd964eb144cc7aba078149582 · pf059 a4a73278b83ffeb0f15fa96f69b7e862d2d2ffdc823edb3f75547cfc31891b70 · pf060 3b7cbdb2c90979b270697caec2e010a45bdf7eb2b85648605e9c75ef57e53d67 · pf061 b28c497b6037fa093386f3135dadd134f1ea903a5eb8171dfbfbc46fe8a926ff · pf062 a086b92497274c78a2f1e8610f8a0bf67ccdc34c5cf257722f349ac4c2faa221 · pf063 ed0ed125ccd3bcea89be4b99572b2afeffd37ca282287e9e37cc5b7a5b2dcf98 · pf064 15e2d42eecf604996f7941784b7a7626312ca3ba90ecd5f6293e4d76fb5a3258 · pf065 9d0c79303752d5bd36327eca33d4ee23c1bda89af7a75159414b5ee2a3c99313 · pf066 74aae09e0dc79ea9d2b4753cebc8eda7bf86b07f5e2d15a90e9051cfc7235ea7 · pf067 24e258f9fa3fae782342db5390b49c1e210f20c9f2de4656a2d3d7f49eb86cd5
t040.0 5cae8d17e173e864d7cd96f7c44d72be76e8044673c40c145d1a2bc2d4b5d971 · t044.0 92f2557b049e53ced2cb37d5813c7745d40873d9c415bc44a5c44ba428575f6c · t047.8 6f1ee00971fb2f8e5f8b05f781afc5f8b5785e6e75cfb6bd0b8a0624fbe88fbe · t049.0 05346aa1fbc12fbee68a13e36b0146c32850fa9777eb6bd23ef275b6ffedc467 · t052.0 d07e52bb07b899ca1d767d089b3cb6219b6af4b5ff39bda3675296c325316471 · t052.9 56515e7f4bf5a05415de04b9d2d7f280eb838b135c1fa408148c4989e519c3de · t053.6 00c15ebac8b717016f89e4fd119d36e0b910c934594cbede8d63d1654a9a6fbd · t056.9 c9d8e177898aac9f125e215accc592be81da43d04682a93fc75819cbb852da7c · t057.6 b4639a7fbc5eccb30a4a4e6ad268027847294167d3a11d85aaa7f708ed134144 · t058.4 fc3d3c1abf35cd9430399ccb4e1aef5b87ceef697bbf890763bfe1b6a27ac0e9 · t060.0 be6d7c2868f35c33480f88615fb381df97ab5bf908c22001cf831cf4d82a9e8c · t066.0 517f9d842160953a29c1e79fc6d128e9940d9ba4a1def44a2048ccd1adf9ad37
Packet ev (viewed firsthand): t055-line-before-ramp 3df89d45ea9e17a200d844248e65717db0cb5c892af8ac1f752ab91b2ad6f08e · t044-sync-highlight-mid 8fe5b44cc55b32a2cfa74ad028ce80aeb82144f5e42fd671607784c831fadcca · t046-sync-highlight-complete 09132ce4c278c3d112fbd26ec9bc0dfde1edbd28f80dce5d63b7eb0cffc840a4 · t062-whos-speaking ed0ed125ccd3bcea89be4b99572b2afeffd37ca282287e9e37cc5b7a5b2dcf98

## Gaps carried into Phase B (named, not hidden)
1. Card 2's frame-exact visual onset UNMEASURED (D2) — Phase B Observe-refresh should frame-measure it before the build's schedule is frozen.
2. Per-word VISUAL flip onsets UNMEASURED (D3) — ASR anchors used; visual lag up to ~0.4 s on card 3 is the priced timing exposure.
3. Source is a trade-press re-upload; version fidelity UNVERIFIED (registration limit — no Phase B act can cure it).
4. PIXEL-UNVERIFIED seat: no browser binary; CP1's painted-frame check may be dischargeable only at logic level.
