# Production record — Packet #7, Honda "Keep Up"

Built + adopted: video-digestion Cycle-013 (2026-11-16). Full working memory: `hidden_files/study-jobs/video-digestion/runs/2026-11-16-cycle-013-honda-keep-up/RUN.md`.

## Identity / probe
- Canonical specimen: Vimeo 120043113 (ManvsMachine / W+K London for Honda, 2015). **Access deviation D1:** Vimeo route HTTP 401 / login-required via yt-dlp on both URLs; no credential route used. Digested from the YouTube mirror iO7BmPoL6a4 (Honda Motor Southern Africa, official regional channel, uploaded 2015-09-03), identity cross-checked against LBB Online + Ad Age descriptions.
- source.mp4: 3,893,471 B via yt-dlp (bv*[height<=1080]+ba). probe.json: 60.014 s · h264 1920×1080@25 · Opus · 519 kbps overall. Mirror metadata duration 60 s — agreement.
- **Version by measurement:** 138 word onsets; minimum dwell 0.12 s → measured ceiling exactly 500 wpm (the TV figure); runtime 60 s ≠ the 40″ TV description; far below the 1,000 wpm online claim → packet §1 prints the version as a 60 s execution at the 500 wpm ceiling, exact version-system place UNIDENTIFIED.

## Extraction
- Onset detection: ffmpeg scene-select FAILED for this specimen (thresholds 0.35 and 0.08 returned 1 and 4 frames — the word change is a small central element over a continuously moving plate, so scene scores stay low; priced as deviation D2). Working instrument: full-rate decode at native 25 fps (480×270), centre-crop frame-difference (crop x 20–80%, y 38–62%; threshold 2.2 mean-abs-diff; local-max with 80 ms minimum gap) → **179 candidate onsets**, each extracted at full res (frames/onset-001…179.jpg) and **read by the deliverer** on contact sheets sheet1–5.jpg. Onset times are frame-accurate at 25 fps (±40 ms).
- Onset table: onset-table.csv, 179 rows (138 WORD · 41 SPECIAL: countdown scale states, product-flash rows, transitions, end cards). Dwell = next onset − onset.
- Audio: audio-rms.json — per-100 ms RMS (mono 8 kHz decode, 600 windows).
- Contact sheets: sheet1–5.jpg (36/36/36/36/35 tiles, index + onset time labelled).

## Analysis results (the packet's measured claims)
- Sentence segmentation: 19 punctuated units (§4 table). Sentence-average wpm 52–455.
- Stepwise test (codex-observe prediction): CONFIRMED in sentence-band form — within-sentence dwell median 0.16 s; steps at sentence boundaries; two deliberate drops (208/167 wpm at sentences 8–9; 125 wpm recovery at sentence 13).
- Dwell weighting (P-B8 method; flash-adjacent + terminal dwells censored): length bands — median dwell 0.16 s at 1–2 letters (n=29), 3–4 (n=64), 5+ (n=38) → length weighting NULL (promotion rule required ≥30% at n≥10). Punctuation: sentence-final median 0.48 s (n=14) vs internal 0.16 s (n=117) → sentence-final weighting PRESENT (3×).
- Flash rhythm (P-A7): HR-V flash (26.36–27.68) sits inside sentence 14, which resumes mid-phrase at the same band → RESUME. Jet flash (33.64) inside the chant unit → RESUME. No restart or step-up across flashes.
- End-card holds: 2.48 s / 6.96 s / 12.53 s; release ratio 2.48 ÷ 0.12 ≈ 21×. Audio ends ~38 s; tail is silent.
- Anchor: centre-anchored throughout (word centre fixed, both edges move with length); no ORP pivot, no pivot highlight.

## Clip table (Amendment A6 — per-entry rulings against the frozen catalogue)
| Entry | Ruling | Reason / file |
|---|---|---|
| T01 serial presentation | NO-CLIP | replacement-at-position binds to onset frames + the onset table (data record); a clip adds no mechanic beyond the table |
| T02 countdown scale | NO-CLIP | before/during/after triplet (onset-001/002/003) shows the scale states; dwell binds to the table |
| T03 sentence-band acceleration | **CLIP** | clips/16.8-acceleration-run.mp4 (16.8–18.4 s) — rate change across a sentence is a timing claim stills cannot carry |
| T04 sentence-final weighting | NO-CLIP | evidence form is the onset table's dwell column (A4 clause 3, measured claim) |
| T05 uniform dwell grid | NO-CLIP | measured claim; binds to onset-table.csv + this record's computation |
| T06 case emphasis | NO-CLIP | before/after frame pair (onset-055/056) is the evidence form |
| T07 recovery sentence | NO-CLIP | rate claim binds to the onset table |
| T08 product flash / resume | NO-CLIP | before/during/after triplet per flash; resume binds to the onset table's flash rows |
| T09 repetition chant | **CLIP** | clips/31.9-improve-chant.mp4 (31.9–33.7 s) — dwell timing at the ceiling is the mechanic |
| T10 landscape plate | NO-CLIP | stills across the runtime show the one plate |
| T11 brand release + tail | NO-CLIP | held frames + measured hold durations in the onset table |
| T12 graded version system | NO-CLIP | campaign-level claim; evidence is the tail card frame + trade press |
| T13 audio ramp | NO-CLIP | evidence form is audio-rms.json (data record) |

## Deviation register
- D1 — ACCESS: canonical Vimeo blocked (401); mirror substituted and disclosed on the packet face (§1). Residual: the mirror's exact version-system place is UNIDENTIFIED (measured, §1).
- D2 — INSTRUMENT: ffmpeg scene-select under-fired on this specimen class (moving plate + small central change); replaced by centre-crop frame-difference at native rate, threshold printed above. Candidate lesson for Condense.
- D3 — READING UNCERTAINTY (minor): onset #59 legible as no word (filed as TRANSITION); the chant's repetition count (#146–#155) may include one detector double-fire at 120 ms dwell — disclosed in packet §1.
- No captions/subtitles are burned into any frame or clip; the specimen's own designed on-screen words are its content.
