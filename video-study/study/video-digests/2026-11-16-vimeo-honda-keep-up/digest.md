# Video Digest — "Honda — Keep Up" (ManvsMachine / Wieden+Kennedy London)

Packet #7 · video-digestion Cycle-013 (2026-11-16). Canonical form: this markdown twin; digest.pdf is its presentation rendering.

## 1. Specimen identity + technical facts

- **Title:** "Keep Up" — a kinetic-typography brand film for Honda (in the taxonomy priced at §3, its head technique is **serial presentation**, not kinetic typography proper — see T01).
- **Creator:** directed by ManvsMachine, agency Wieden+Kennedy London, for Honda UK. Soundtrack by Wah Wah, sound design by Factory (trade press: LBB Online, 2015-02-19).
- **Platform / URLs:** canonical — Vimeo 120043113, https://player.vimeo.com/video/120043113?dnt=1&app_id=122963 (the queue's URL). Launched 2015-02-19 as a 40″ TV spot with shorter/faster online executions and cinema executions (LBB Online; Ad Age, 2015-02-18/19).
- **ACCESS + VERSION (read this first):** the canonical Vimeo route was **not retrievable** this cycle — yt-dlp returned HTTP 401 / "web client only works when logged-in" on both the player URL and vimeo.com/120043113, and this lane uses no credential route. The packet is therefore digested from the same film's mirror on YouTube: **iO7BmPoL6a4, "Honda - Keep Up", Honda Motor Southern Africa** (an official Honda regional channel; uploaded 2015-09-03). Identity cross-checked against two trade-press descriptions (one-word manifesto, accelerating pace, fleet intercuts, salt-flat setting, red type). **Version, identified by measurement (not asserted):** the mirror is a **60.0 s cut whose measured word-stream ceiling is exactly 500 wpm instantaneous** (minimum dwell 0.12 s) — the ceiling trade press assigns to the 40″ TV spot — at a runtime longer than the TV description and far below the claimed 1,000 wpm online ceiling. It is therefore printed as **a 60 s execution at the 500 wpm ceiling; its exact place in the campaign's version system is UNIDENTIFIED**. Every probe, frame, and timing fact below binds to the mirror file.
- **Form:** short form, 60.01 s — a serial-presentation manifesto film. Segmentation: word onsets (motion beats, §2 of the cycle RUN).
- **Probe (probe.json, ffprobe):** duration 60.014 s · video h264, 1920×1080, 25 fps, 434 kbps · audio Opus, 80 kbps · archived file source.mp4, 3,893,471 B, via yt-dlp from the mirror. Audio content: music + sound design only — **no narration exists**; the film's entire verbal content is its on-screen word stream (transcript.txt).
- **Evidence on disk (re-counted at packet close):** frames/onset-001…179.jpg (one full-res frame per detected onset, 179) · ev/ 15 named evidence frames · clips/ 2 (16.8-acceleration-run.mp4 · 31.9-improve-chant.mp4 — per-entry clip rulings in the production record) · sheet1–5.jpg contact sheets (every onset frame, deliverer-read) · onset-table.csv (179 rows: onset · dwell · content · instantaneous wpm) · audio-rms.json (per-100 ms RMS trace). Every ev frame cited below exists; citations are local evidence pointers (bulk media stays local per the lane sync scope).
- **Reception raw material (post.json):** Vimeo counts NOT retrievable (401 route, above). Mirror counts at capture (the mirror's, not the specimen's): 73,574 views · 358 likes · 9 comments.
- **Honesty slot:** the word stream was transcribed by the deliverer reading all 179 onset frames on contact sheets — no OCR was used as the record (an onset detector proposed candidate frames; every word below was read from its own frame). Two rows carry reading uncertainty, printed where they occur: onset #59 (transition frame, no word legible) and the improve-chant's exact repetition count (onsets #146–#155, read as To/improve/and ×3/improve/improve — the chant's existence and span are certain, one "and/improve" pair may be a detector double-fire at the ceiling's 120 ms dwell).

## 2. Consumer + production surface

**Consumer:** DLC / multilingual production — the assembler's **repeat-after-me and word-animation containers** (the consumer named in the queue entry itself).

**Surface:** word-onset pacing design — how an onset-interval curve is shaped (starting pace, acceleration shape, ceiling, release) when the container wants the learner's reading pace itself exercised, not merely followed. Secondary consumer: **openings** — the challenge cold-open form (a task set in the first seconds and performed by the viewer for the whole runtime).

**How the consumer uses this packet in Observe:** when a repeat-after-me or word-animation container is designed, this packet supplies (a) a measured onset-curve grammar — sentence-band stepping, sentence-final dwell weighting, a recovery beat — instead of a smooth-ramp assumption (§4); (b) a priced ceiling discipline: the film's 500 wpm ceiling is a *brand* device whose comprehension cost is the point, and §6 files the learning-form ceiling beside it; (c) the countdown pre-announcement and funnel-card devices for openings (§3, T02/T12).

## 3. Technique catalogue

Conventions: timestamps are onset times from onset-table.csv; "Evidence" binds each claim in the form the claim takes (A4 clause 3) — frame for visual claims, the onset table (a named data record) for rate claims, transcript rows for verbal claims. Anchor finding, stated once: every word is **centre-anchored** — the word's centre holds one screen position and both edges move with word length; there is no optimal-recognition-point pivot and no pivot highlighting (contrast Spritz-style RSVP, §3 T01 note).

### T01 — Serial presentation (RSVP replacement) — the head technique
- **Timestamps:** 3.00–38.04 (the whole manifesto; 138 word onsets).
- **Mechanics:** one word at a time replaces the last by hard cut at a fixed centre position over a continuous moving landscape plate; nothing accumulates, nothing can be re-read; dwell is the only variable. In Brownie's temporal-typography taxonomy this is *serial presentation* — still compositions replaced by cut, no motion within a composition — not kinetic typography proper (motion/fluid); the queue's "kinetic-typography" label stands as genre shorthand only, and the distinction is printed here so a consumer searching "how does it move" is not mis-served: nothing moves but the background plate and the countdown numerals (T02).
- **Why it works:** removing saccades and regressions makes reading speed a property of the film, not the viewer — the viewer can only keep up or fall behind, which is the ad's claim performed on the viewer (see T13 / §6 storytelling).
- **Evidence:** ev/3.0-limits.jpg (first word) · ev/7.84-do-period.jpg · onset-table.csv (all 138 word rows) · transcript.txt.
- **Confusables (do not cross-cite without the distinction):** Packet #1 T08 full-screen text slam is an emphasis *hit inside* a continuing composition (opposite retention behaviour — the composition persists); Packet #1 T03 live-typed lyric text *accumulates* character-by-character with a regressable trail; Spritz-style RSVP anchors each word's optimal recognition point and highlights the pivot letter — this film centre-anchors and highlights nothing (measured from the frames above).

### T02 — Countdown pre-announcement with scaling numerals
- **Timestamps:** 0.40–3.00 ("3" 0.40 · "2" 1.20 · "1" 2.00 · first word 3.00).
- **Mechanics:** three red numerals, each dwelling ~0.8–1.0 s and **growing in scale across its dwell** (the detector fired three scale states for "3") — the film's one fluid-motion element, spent entirely on the task contract: you are about to read; here is your warm-up; the numerals' size teaches the centre anchor before the first word arrives.
- **Why it works:** the challenge is consented to before it starts; the viewer learns the reading position on numerals (zero comprehension load) instead of on the manifesto's first sentence.
- **Evidence:** ev/0.4-countdown-3.jpg (before/during/after triplet: frames/onset-001.jpg · onset-002.jpg · onset-003.jpg, the three scale states) · onset-table.csv rows 1–7.

### T03 — Sentence-band acceleration (the stepwise ramp)
- **Timestamps:** 4.16–37.88, per-sentence average rates in §4.
- **Mechanics:** the ramp is **not smooth and not monotonic**: rate is roughly constant *within* a sentence (instantaneous dwells cluster at the 0.16 s metronome, §4) and **steps between sentences** — sentence averages climb 174 → 269 → 375 → 455 wpm with deliberate drops (a 125 wpm recovery sentence at 21.00, §3 T07). The acceleration the viewer feels is a staircase whose steps are sentence boundaries.
- **Why it works:** each sentence is a level the viewer either clears or fails as a unit; failure is felt at sentence scale, which is also the scale at which the copy congratulates you (T07).
- **Evidence:** onset-table.csv (the named data record for this rate claim) · clip 16.8-acceleration-run.mp4 (16.8–18.4 s: the 455 wpm sentence "Suddenly you find you can go faster than you thought.").

### T04 — Sentence-final dwell weighting (punctuation as timing)
- **Timestamps:** throughout; measured across all 14 sentence-final words vs 117 internal words.
- **Mechanics:** sentence-final words dwell a median **0.48 s** against the internal median **0.16 s** — a 3× hold at every full stop/question mark. The punctuation mark is not decoration: it is the score's bar line, the only place the viewer breathes.
- **Why it works:** the holds chunk the stream into sentences retroactively — comprehension is assembled during the holds, which is what makes the ceiling sentences survivable at all.
- **Evidence:** onset-table.csv (dwell column; sentence-final rows are the contents ending "." or "?") · ev/7.84-do-period.jpg ("do." at its hold).

### T05 — Uniform dwell grid (NO length weighting) — a negative finding, catalogued
- **Timestamps:** throughout.
- **Mechanics:** median dwell is **0.16 s in every word-length band** (1–2 letters n=29 · 3–4 letters n=64 · 5+ letters n=38, flash-adjacent and terminal dwells excluded) — dwell does **not** grow with word length, contra the Spritz reference implementation, which weights dwell by length. "furthest" and "I" get the same time. The film's clock is a metronome; only punctuation (T04) bends it.
- **Why it matters:** a consumer copying "RSVP" from the form's best-known implementation would build length weighting in; this specimen proves the device works without it — and prices the cost in §5 B4.
- **Evidence:** onset-table.csv + production-record.md (the grouped-median computation, with the promotion rule from the cycle Plan: length weighting would have catalogued as its own technique only on a ≥30% median difference at n≥10 per band; measured difference ≈ 0% → null, printed here).

### T06 — Case emphasis inside a level stream
- **Timestamps:** 14.40 "really" → 14.60 "REALLY" → 14.92 "push."
- **Mechanics:** within one sentence ("I mean really REALLY push."), the repeated word returns in full capitals at the same size and position — emphasis carried by case alone, the stream's only typographic event besides the countdown's scale.
- **Why it works:** at 250+ wpm there is no time for a size or colour event to register as emphasis; case is the one change readable in a single fixation.
- **Evidence:** ev/14.6-REALLY.jpg · frames/onset-055.jpg ("really", the before state).

### T07 — The recovery sentence (a priced pace drop)
- **Timestamps:** 21.00–23.40 ("It feels pretty good, right?" — 125 wpm average, the film's slowest sentence after the opener).
- **Mechanics:** after two sentences above 420 wpm, the rate collapses to conversational for exactly one sentence — the sentence that *names the viewer's feeling* — then steps back to 424 wpm.
- **Why it works:** the drop is the reward and the proof at once: the viewer experiences their own competence on an easy sentence immediately after surviving the hard ones, and the copy tells them what they just felt.
- **Evidence:** onset-table.csv (sentence 13 row group) · ev/21.68-good-comma.jpg.

### T08 — Product flash at a phrase boundary (stream resumes across the flash)
- **Timestamps:** HR-V pass 26.36–27.68 · red Jazz pass 29.28–29.56 · Civic Type R pass 30.72–31.88 · HondaJet takeoff 33.64–33.88 · NSX pass 36.24–36.60.
- **Mechanics:** photographic product passes (a car crossing the salt flat, a jet taking off) interrupt the word stream for 0.3–1.9 s. The priced rhythm question — does the ramp resume, step up, or restart across a flash? — measures **RESUME**: the HR-V flash lands *inside* the sentence "Push to reach new places, / to do new things." (the sentence continues mid-phrase after the flash at the same band), and the Jet flash lands inside the improve-chant unit, which also resumes. The word clock pauses for the flash; it does not reset.
- **Why it works:** the products are punctuation, not proof — they mark phrase joints the way T04's holds mark sentence joints, one level up.
- **Evidence:** ev/26.6-flash-hrv.jpg · ev/29.44-flash-jazz.jpg · ev/31.28-flash-typer.jpg · ev/33.64-flash-hondajet.jpg · ev/36.36-flash-nsx.jpg (before/during/after for the HR-V flash: frames/onset-114.jpg "places." · ev/26.6-flash-hrv.jpg · frames/onset-122.jpg "to").

### T09 — Repetition chant (one word as the acceleration made audible to the eye)
- **Timestamps:** 32.04–33.52 ("To improve and improve and improve and improve improve" — see the §1 honesty slot on the exact count).
- **Mechanics:** the manifesto's verb repeats at the ceiling band over a growing dust cloud; semantics stop advancing and the repetition itself becomes the content — improvement iterated, at the fastest dwell in the film.
- **Why it works:** it is the campaign's thesis ("relentless improvement") performed as a loop the viewer rides rather than reads.
- **Evidence:** ev/32.2-improve-chant.jpg · clip 31.9-improve-chant.mp4 (31.9–33.7 s; the chant's dwell timing is the claim, so this entry is clip-bound per the A6 ruling).

### T10 — One continuous landscape plate (the texture system)
- **Timestamps:** 0.00–60.01 (throughout, including the silent tail).
- **Mechanics:** a single forward-moving salt-flat plate (sky gradient, horizon, dust) runs under everything — words, product passes, end cards. The red word is the only graphic element ever added; the plate's motion supplies all continuity, so the serial cuts never read as cuts in *place*, only in *text*.
- **Why it works:** the viewer reads a journey, not a slideshow — the ground keeps moving even when the words stop (the tail cards, T11, sit on the same still-moving plate).
- **Evidence:** ev/38.04-end-card-honda.jpg · ev/47.48-card-faster-link.jpg (the plate under two different text states).

### T11 — Brand release + silent funnel tail
- **Timestamps:** end card 38.04 (held 2.48 s) · card 2 "Think you can push your limits even further?" 40.52 (held 6.96 s) · card 3 "To go faster, follow the link in the video description." 47.48 (held 12.53 s, to the file's end).
- **Mechanics:** the word stream ends at 38.04; the music ends with it (~38 s, audio-rms.json). What remains is three held cards in **silence** on the moving plate: brand, challenge re-issued as a question, and the funnel instruction. The release ratio — the first card's 2.48 s hold against the fastest dwell 0.12 s — is ~21×.
- **Why it works (and where it doesn't — §5 B3):** the graded-difficulty system (T12) needs a door, and this is it; but a third of the runtime is spent holding it open.
- **Evidence:** ev/38.04-end-card-honda.jpg · ev/40.52-card-further.jpg · ev/47.48-card-faster-link.jpg · audio-rms.json (silence from ~38 s).

### T12 — Graded-difficulty version system (campaign-level device)
- **Timestamps:** priced from the tail cards (38.04–60.01) + trade press; **campaign-level evidence, not a property of this file alone**.
- **Mechanics:** the same manifesto was issued at escalating ceilings (TV ~500 wpm · online up to 1,000 wpm — Ad Age/LBB), and this cut's own tail routes the viewer to a faster version. Difficulty is a *versioning axis*: failure at your current ceiling is the designed experience, and the next version is the replay.
- **Why it works:** the viewer's failure is converted into a click instead of an exit.
- **Evidence:** ev/47.48-card-faster-link.jpg (the in-file door) · trade-press citations in §1.

### T13 — Audio ramp as a parallel, quieter acceleration channel
- **Timestamps:** 0–38 s (audio-rms.json, per-100 ms windows).
- **Mechanics:** mean RMS rises gradually across the film (5 s means: 0.027 → 0.041 → 0.044 → 0.050 → 0.049 → 0.050 → 0.063 at 30–35 s) with **no steps at flash or phrase boundaries** at the 100 ms scale — the soundtrack swells underneath the word staircase rather than climbing it, then stops dead at the brand card (silence, T11).
- **Why it works:** the viewer *hears* a smooth crescendo while *reading* a staircase — the two curves together feel like one continuous acceleration, which neither produces alone.
- **Evidence:** audio-rms.json (the named data record for this claim).

## 4. Tempo map

Two series, named (per the cycle Plan): **instantaneous rate** = 60 ÷ each word's dwell, flash/hold rows excluded; **sentence-average rate** = words ÷ sentence span, the table below. Full data: onset-table.csv.

| # | Span (s) | Words | Avg wpm | Sentence |
|---|---|---|---|---|
| — | 0.40–3.00 | countdown | — | 3 · 2 · 1 (numerals scale, T02) |
| 1 | 3.00–4.16 | 1 | 52 | Limits. |
| 2 | 4.16–5.88 | 5 | 174 | We have all got them. |
| 3 | 5.88–8.56 | 12 | 269 | That voice that tells you that you've done all you could do. |
| 4 | 8.56–10.08 | 7 | 276 | This is the furthest I can go. |
| 5 | 10.08–11.36 | 8 | 375 | I will not be able to top that. |
| 6 | 11.36–12.48 | 5 | 268 | I have given my best. |
| 7 | 12.48–13.92 | 7 | 292 | But when you force yourself to push. |
| 8 | 13.92–15.36 | 5 | 208 | I mean really REALLY push. |
| 9 | 15.36–16.80 | 4 | 167 | You can surprise yourself. |
| 10 | 16.80–18.12 | 10 | 455 | Suddenly you find you can go faster than you thought. |
| 11 | 18.12–19.40 | 9 | 422 | And go past the limit you thought you had. |
| 12 | 19.40–21.00 | 8 | 300 | To places you didn't think you could reach. |
| — | 21.00–23.40 | 5 | **125** | **recovery sentence (T07)** |
| 13 | 23.40–25.52 | 15 | 424 | Because we all capable of doing the most incredible things if we just push more. |
| 14 | 25.52–28.52 | 9 | ~360 | Push to reach new places. [HR-V flash inside] to do new things. |
| 15 | 29.72–30.72 | 7 | 420 | Push to a new kind of forwards. [Type R flash follows] |
| 16 | 32.04–35.84 | 17 | 268* | To improve and improve… [Jet flash inside] Keep pushing and get to better faster. |
| 17 | 37.40–38.04 | 4 | 375 | This is the year |
| — | 38.04–60.01 | cards | — | brand card 2.48 s · question card 6.96 s · funnel card 12.53 s — silence |

*Sentence 16's average is diluted by the Jet flash and the NSX approach; its word-only instantaneous dwells sit at the 0.12–0.16 s ceiling band.

**Curve shape — the stepwise prediction, TESTED:** codex-observe predicted a stepwise curve (plateaus within sentences, steps at phrase/flash boundaries) against Observe's "monotonic acceleration" wording. **Confirmed, in sentence-band form:** within-sentence dwells cluster on the 0.16 s metronome (median 0.16, and the fastest instantaneous rate is exactly 500 wpm = 0.12 s dwell); the climb lives between sentences (174 → 455 wpm) and is punctured by two deliberate drops (sentences 8–9, and the 125 wpm recovery). Whole-film word average: 138 words over the 35.04 s word stream ≈ 236 wpm — a number that describes nothing the viewer experiences, printed here only to show why the campaign's "500 wpm" is a ceiling claim, not an average.

**Length priced as craft (Amendment A3 — this specimen is ≤5 min, priced anyway because length is its subject):** what the 60 s buys — a full manifesto arc (limit named, limit broken, brand claimed) at challenge pace; the same text at conversational 150 wpm would run ~55 s of *words alone* with no countdown, flashes, or tail. The sag: the tail (38.04–60.01, 36% of runtime) carries no new information after the question card lands (~44 s would suffice). Compression floor: the manifesto + countdown + brand card survive at ~42 s; below that, the recovery sentence (T07) is the first thing the cut would kill — and it is load-bearing.

## 5. Goods and bads

### Goods
- **G1 (0.40–3.00)** The countdown teaches the anchor and the task before any content is at risk — consent and calibration in 2.6 s (T02).
- **G2 (throughout)** Sentence-final holds (0.48 s median, T04) make a 455 wpm sentence survivable: comprehension is given a scheduled place to happen.
- **G3 (21.00–23.40)** The recovery sentence is placed exactly where fatigue peaks and *names the feeling it produces* — pacing and copy doing one job (T07).
- **G4 (26.36–35.84)** Product flashes land at phrase joints and the stream resumes across them (T08) — the brand's products punctuate the argument without breaking a sentence's rhythm contract.
- **G5 (32.04–33.52)** The improve chant converts the thesis into a loop at the ceiling — the one moment the film stops arguing and simply *does* the thing (T09).
- **G6 (0–38 s)** The audio swell (T13) fuses the staircase into a felt crescendo; the hard stop into silence at 38.04 makes the brand card an event.
- **G7 (throughout)** One typeface, one colour, one position, zero decoration: at 500 wpm there is nothing on screen that is not the next word.

### Bads
- **B1 (16.80–19.40)** The ceiling sentences (455 / 422 wpm) exceed the ~238 wpm average silent-reading rate by ~2×; on a first viewing, words are *lost*, not read fast — comprehension failure is the design, but it means the manifesto's two most important sentences ("you can go faster than you thought / past the limit you thought you had") are the two least likely to be fully read.
- **B2 (23.40–25.52)** "Because we all capable of doing the most incredible things…" — as read from the frames, the sentence lacks its verb ("are"). At 424 wpm the gap is invisible; paused, the campaign's longest sentence is ungrammatical, and a learner-facing reuse would import the defect.
- **B3 (38.04–60.01)** 36% of the runtime is three silent held cards. The funnel card alone holds 12.53 s — on any surface without a description link to follow (TV, a feed), the last fifth of the film is dead air wearing a landscape.
- **B4 (throughout)** Centre anchoring (T01 note) forces a refixation shift on every word-length change; the form's own reference implementation (Spritz) exists precisely to remove that cost with ORP anchoring. The film pays it 138 times.
- **B5 (26.36–31.88)** The product passes are too brief and too dust-obscured to identify what is being sold (the HR-V pass reads as "a grey car"); as product communication they carry almost nothing — they work only as punctuation (G4), which is a brand film spending its product shots on rhythm.
- **B6 (37.40–38.04)** The closing line "This is the year" is cryptic out of campaign context (the year of what is never stated in-film; the Type R pass 6 s earlier is its only antecedent) — the manifesto's payoff sentence depends on knowledge the film doesn't supply.

## 6. Lessons mapped to our containers

| # | Lesson | Class | Container | Change it implies | Build cost |
|---|---|---|---|---|---|
| L1 | Shape a word-onset ramp as a **sentence staircase**, not a smooth curve: hold a metronome dwell inside the sentence, step the rate at sentence boundaries (T03). | pacing principle | word animation · repeat-after-me | The assembler's pacing config gains a per-sentence rate field; ramps are authored per sentence, never interpolated per word. | cheap — a config shape, no new machinery |
| L2 | **Sentence-final dwell weighting**: hold the sentence-final word ~3× the internal dwell (T04). Length weighting is *not* required — this specimen's null (T05) proves the metronome survives without it. | technique | word animation · repeat-after-me | One dwell rule (final-word multiplier) in the word-event scheduler; difficulty weighting, if ever added, is a separate priced decision. | cheap — one multiplier |
| L3 | File the ceiling in **two forms**: brand form *exceed-and-release* (500 wpm, comprehension failure as the climax) vs learning form *approach-and-hold* — cap a learner container below the comprehension-loss zone (~238 wpm average silent reading; RSVP comprehension falls as rate climbs — Rayner et al. 2016; Benedetto et al. 2015 found loss even at 250 wpm) and keep the regression affordance RSVP removes. The brand ceiling is never a recipe for a learning surface. | pacing principle | repeat-after-me | A ceiling constant per container class, with the learning cap documented in the container spec, not tuned by feel. | cheap — a documented constant + a spec line |
| L4 | **Countdown pre-announcement**: numerals (or a 3·2·1 card) at the exact anchor the words will use, dwelling ~1 s each, before a paced stream starts (T02). | technique | opening · word animation | Openings for paced containers open with the contract device; the anchor position is set by the countdown, not the first word. | cheap |
| L5 | **Recovery beat**: after the hardest sentence, drop to conversational rate for one sentence that names the learner's feeling (T07). | storytelling pattern | repeat-after-me · word animation | Pacing curves for challenge sequences carry a named recovery slot after the peak band. | cheap — authoring discipline |
| L6 | **Experiential proof**: the claim is demonstrated on the viewer's own performance, not shown — the openings form of it is a cold-open challenge the viewer *does* (reads, taps, repeats) in the first seconds (§3 T01/T12; flashes and product shots are punctuation, never the proof). | storytelling pattern | opening | Opening design review asks "what does the viewer *do* in the first 5 s?" before "what do they see?" | moderate — a design-review change, not code |
| L7 | **Difficulty as a versioning axis**: the same content re-issued at escalating ceilings, with an in-piece door to the harder version (T12 — campaign-level evidence, labelled). | trick | repeat-after-me · openings | A repeat-after-me set can ship as graded versions of one text instead of different texts per level. | moderate — versioning discipline in the desk, cheap in the assembler |
| L8 | **Copy written for serial display is a timing score**: short words, no subordinate clauses, punctuation placed where the dwell must bend; the text *is* the timing track (T04 + §4). In RSVP writing, a comma or full stop is a scheduler instruction. | transcript device | word animation · repeat-after-me | Transcript review for paced containers checks punctuation as timing, not only as grammar (and would have caught B2's missing verb). | cheap — a review checklist line |
| L9 | **One plate, one type system**: a single continuous background plate under a serial text stream keeps cuts from reading as place-changes (T10); the audio swell (T13) fuses a stepped visual curve into a felt crescendo — pair a stepped word curve with a smooth audio curve, never two staircases. | texture | word animation · transition | Container design keeps background continuity across word cuts as a stated requirement; music beds for paced containers are specified as smooth-swell against stepped text. | moderate — a design requirement on two existing layers |

## 7. Idea bank

- **I1** A repeat-after-me set shipped as one text at three ceilings (e.g. 150 / 220 / 300 wpm) with an end-card door to the next level — stands on T12 + L7.
- **I2** A "keep up" opening for a vocabulary short: 3·2·1 countdown at the word anchor, then the lesson's key sentence at 200 wpm before the lesson slows down to teach it — stands on T02 + L6.
- **I3** A pacing A/B inside one short: the same sentence rendered smooth-ramp vs sentence-staircase, retention compared — stands on T03's measured staircase.
- **I4** A recovery-beat template for drill sequences: hardest drill, then one slow sentence naming the feeling ("That was fast. You kept up.") — stands on T07.
- **I5** An "improve chant" ending for a series: the episode's key verb repeated at the ceiling band over the closing plate — stands on T09.
- **I6** A dwell-weighting toggle in the assembler's word-event preview (final-word multiplier 1×/2×/3×) so producers can hear the difference T04 makes — stands on T04's measured 3×.
- **I7** A silent-tail audit for our own endings: any held card over ~7 s must carry new information or be cut — stands on B3's measured 12.53 s funnel hold.

## 8. Reception link

reception: not yet run — charged to reception-analysis. Raw material filed in post.json: Vimeo counts not retrievable this cycle (401 route — the canonical platform's reception is a named gap, not a zero); mirror counts (73,574 views · 358 likes · 9 comments at capture) are the mirror's own and are labelled as such there.
