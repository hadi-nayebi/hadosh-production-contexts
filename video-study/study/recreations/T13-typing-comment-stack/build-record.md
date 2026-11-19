# T13 — Typing Comment Stack · BUILD RECORD

Technique: T13 · Packet P1 "Look What I Can Do" (@aditazzz.music) @ 1:08–1:20 · Cycle 004 Wave 2 (recreation job, INSTRUCTION §1–§7) · Attempt 1
Artifact dir: `hidden_files/study/recreations/T13-typing-comment-stack/`
Wave record: `hidden_files/study-jobs/recreation/runs/2026-11-14-cycle-004-wave-2/RUN.md`
Consumer: word-animation family (typing machinery kin to T03/T01) — DLC/multilingual comment/post-card scenes.

## §1 — Observe
- **Catalogue (digest.md T13 [1:08–1:20]):** "At the right of the post card, comment cards stack downward; each commenter's absurd job title types itself out live ('Senior Slopcore Architect', 'Chief Executive of What's Next', 'VP of Things That Look Complete - 100% complete', 'Director of the Missing Feet - feet.png not found', 'Head of Vibes and Synergy', 'Chief of Artificial Me')." Why it works: typing supplies the rhythm — each title gets its own build and landing before the next tops it; the stack's growth down the frame is the progress visual. TECHNIQUES.md T13 entry confirmed via the tier register (T13 DESCRIBED — OWED, queue #9).
- **Evidence viewed firsthand (this run):** `ev/t68.jpg` (t=1:08, window start) — left: white post card (header "aditazzz ✓ @adi… · 10/27/26", yellow highlight on "Principal Slopcore Architect", red RECEIPT stamp, ♥5 / 169 footer). Right, under "Comments 4 · Sort by: Top": card 1 COMPLETE ("I'm a Senior **Slopcore** Architect", Slopcore yellow-highlighted, "✓ Verified by: herself" pill, ♡ Reply) and card 2 MID-TYPING ("Chief Executive" typed, in a pale-blue tint). Cards are dark navy, rounded, with a blue left edge rule; avatar is a circular photo in the original (recreation: code-drawn initials — purity).
- **Timing evidence priced honestly:** the single evidence frame sits at the window START and already shows card 1 complete + card 2 ~15 graphemes in. So the catalogue window does NOT contain the full sequence start; per-card durations CANNOT be measured checkpoints. The build therefore uses a **labeled allocation model**: per-card typing duration = grapheme count × per-card charMs (33 ms), appear 160 ms, per-card holds ~350 ms, final hold balancing the sum to exactly the 12,000 ms catalogue window (verified arithmetically, §5 leg 1). The t68 state (card 2 mid-typing early) is consistent with fast per-card builds; the allocation is a model, never presented as measurement.
- **Variables extracted:** post-card author/handle/body/highlight phrase/stamp/likes/views; commenter handle/badge/when/initials/avatar hue per card; typed title text + optional highlight substring per card; per-card appearMs/charMs/holdAfterMs; startDelayMs; finalHoldMs; stack gap; card height; full palette (bg, post, card, accent, badge, highlight, stamp, caret); comments title + sort label.
- **Family record read:** T12 build-record (same post-card scene; attempt-1 convergent defect = wrapped-phrase fill geometry — priced below as the phrase-overlap/wrap failure point) and T03 scores.md cures (timing 55 on attempt 1: single global cadence + dead final hold → cure = per-line/per-card durations priced from the window — applied here as the per-card allocation table).

## §2 — Plan
### Parameter table (CONFIG key — specimen default)
| Key | Default |
|---|---|
| performanceMs | 12000 (catalogue window) |
| startDelayMs | 400 |
| finalHoldMs | 2139 (balances allocation to exactly 12000) |
| post.author / handle | "aditazzz ✓" / "@adi… · 10/27/26" |
| post.bodyBefore / bodyHighlight / bodyAfter | "Currently upskilling to transition to a " / "Principal Slopcore Architect" / " role. Trying to stay ahead of the curve. Follow along and support my professional development." |
| post.stampText / likes / views | "RECEIPT" / "♥ 5" / "📊 169" |
| commentsTitle / sortLabel | "Comments 4" / "Sort by: Top" |
| cards[i].handle / badge / when / initials / avatarHue | "@aditazzz" / "Creator" / "· now" / "AD" / 340,200,265,150,25,300 |
| cards[i].text | the six specimen titles (digest order) |
| cards[i].highlight | "Slopcore" (card 1) / "" (others) |
| cards[i].appearMs / charMs / holdAfterMs | 160 / 33 / 367,350,349,353,350,0 |
| stackGapCqw / cardHeightCqw | 0.8 / 7.3 |
| palette.* | bg #050607 · postBg #ffffff · postInk #101216 · cardBg #161a21 · cardInk #eef1f5 · accent/badgeBg #5b8def · highlightBg #ffd83d · highlightInk #101216 · stampInk #d43a2f · caret #eef1f5 |

Derived schedule (sequential derivation, ms): card 1 appear 400 type 560–1583 · card 2 appear 1950 type 2110–3100 · card 3 appear 3450 type 3610–5161 · card 4 appear 5510 type 5670–7287 · card 5 appear 7640 type 7800–8625 · card 6 appear 8975 type 9135–9861 · final hold → 12000.

### Construction choice
DOM post card (static anchor) + DOM comment cards in a flex column; rendering is a pure function of performance time t (deterministic, slaveable by comparison.html); typing reveals complete grapheme clusters (Intl.Segmenter); caret on the active card only, removed at landing. **Rejected alternatives:** canvas rendering (text layout/highlight/caret all harder, no fidelity gain for DOM-native UI subject matter); CSS keyframes per card (timing not config-derivable, swap test impossible); runtime text sampling (A1 typography precedent — for particle letterforms, not for a UI card whose text must stay crisp DOM text).
### Verification plan
Swap test (altered titles + charMs timing + accent palette via URL overrides, schedule simulated with the build's own derivation); purity grep + asset inventory; comparison sync check (source-level; no Chrome binary — render-proof limitation, Wave-1 precedent); five-lens Codex wave; bar avg ≥85 AND min ≥70.
### Failure points priced
- **Phrase overlap (Owner Cure 2 class):** cured BY CONSTRUCTION — the schedule derives sequentially (card N+1 appear = card N typeEnd + holdAfterMs); overlapping lifecycles are arithmetically impossible in the derivation, verified in leg 1.
- **Stack overflow / fitting at full stack height:** priced arithmetically — comments column available ≈53.7 cqw (stage height 56.26 cqw × 95.5%); header 3.28 + stack (6×7.3 + 5×0.8 = 47.8) = 51.08, slack 2.65 cqw. Card content 7.11 cqw < 7.3 card height. Title fit: at 1.85 cqw font, ~62 chars/line in the card width; longest specimen title is 49 chars → every title is ONE line (white-space:nowrap). An earlier draft at 2.35 cqw font / wrapped titles measured 9.2–12.0 cqw of content per card against a 7.45 cqw card — that defect was caught and cured in Execute before the wave (font 1.85, fixed card height, nowrap). Residual risk: a swapped title >62 chars clips horizontally (overflow hidden) — a known, priced limit of the fixed-card form.
- **Convergent freeze / intensity collapse:** not applicable classes for DOM typing (no particle field); the analog — a card freezing mid-type — is excluded by the pure-function-of-t render (no per-card timers to stall).
- **Timing honesty:** the allocation-vs-measurement gap (above) is the item's chief known weakness; the timing lens is charged with it explicitly.
- **Render-proof limitation:** no Chrome binary in this seat; verification is logic-level (node syntax check + schedule simulation + source-level comparison check), per T15/Wave-1 precedent. Plateau pricing (A2): first attempt, no prior average; family (T03) attempt-1 average 79.2 with timing the stuck lens — hypothesis: timing is this family's stuck lens, priced before Execute.

## §3 — Execute
1. **Segment cut:** `segment.mp4` from source.mp4 @ 67.5–80.5 s (catalogue 1:08–1:20 ±0.5 s handles), ffmpeg libx264/yuv420p, 30 fps. ffprobe: h264 1916×1078, aac, duration 13.000 s, size 14,892,574 bytes. (First cut was truncated by a session kill — moov missing — and re-cut clean; the re-cut is the filed segment.)
2. **recreation.html** (13,927 bytes): one self-contained file, CONFIG at top, no external assets; avatars are code-drawn initial discs with config hues; no captions/subtitles chrome — the typed titles are the subject.
3. **comparison.html** (3,427 bytes): ORIGINAL (segment.mp4) + RECREATION (iframe) side by side at matched aspect, ONE control set (play/pause/restart) driving both, recreation slaved to the video clock minus the 500 ms handle; labels as charged; phone-width stacking via media query with controls below, reachable.

## Guards — SKIPPED-WITH-REASON
jev-observe-exit · jev-plan-exit · jev-prewave · codex-observe · codex-plan-review: **SKIPPED-WITH-REASON** — BUILT-NOT-FIRED / UNBUILT per the job's guards register; not armed executables in this seat. The five-lens Codex scoring wave (§5 leg 4) IS the armed deliverable gate and fires below.

## §5 — Verify (legs 1–3, own checks before the wave)
- **Leg 1 — Swap test: PASS (logic-level).** Default schedule simulated with the build's own derivation: endMs = 12,000 exactly; strict sequencing holds (every appear[i] = typeEnd[i−1] + holdAfterMs[i−1]). Altered values: titles → ["Directrice des Choses Invisibles", "Capitaine du Rien du Tout", "Ministre des Pauses Café Infinies"], charMs 33→**20** (timing), accent #5b8def→**#ff2fb3** (palette, via ?accent= override path in code). Simulated swap schedule: cards type 560–1200, 1727–2227, 2737–3397; all type fully, strictly sequential, endMs 5,885 (shorter performance is the correct consequence of the faster cadence + fewer cards); longest swap title 33 chars ≤ 62 chars/line → fits one line. JS passes `node --check`. No break found; nothing returned to Execute from this leg (the fitting cure above happened during Execute's own geometry check).
- **Leg 2 — Purity: PASS.** Grep of recreation.html for `segment.mp4|source.mp4|<video|<img|.jpg|http://|https://|url(` → **0 hits**. Sole `.png` hit is the typed title TEXT "feet.png not found" — the technique's subject text, not a media reference. Asset inventory: recreation.html loads NOTHING external — all visuals are DOM/CSS; avatars are code-drawn initials; segment.mp4 appears only in comparison.html as the labeled ORIGINAL.
- **Leg 3 — Comparison check: PASS (source-level).** Both sides aspect 1916/1078; single control set drives video + recreation (recreation time = video time − 500 ms handle, synced on timeupdate/seeked/rAF); labels carry specimen name + timestamps and the parameterized recreation label; ≤700 px the panes stack vertically, controls remain below and reachable (48 px min-height buttons).
- **Leg 4 — Codex scoring wave:** five separate runs, returns verbatim in `codex/lens-<lens>.md`; consolidation in scores.md.
